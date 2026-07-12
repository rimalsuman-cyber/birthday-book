/* ============================================================
   i18n core — dependency-free, works on file:// and https://
   ------------------------------------------------------------
   Language files call I18N.register(code, dict) to add themselves.
   Text lookup falls back to English, then to the raw key.
   Dates / numbers / plurals use the browser-native Intl API,
   so each language automatically follows its own locale rules.
   ============================================================ */
window.I18N = (function () {
  const translations = {};      // code -> nested dictionary
  const meta = {};              // code -> { native, locale }
  const FALLBACK = "en";
  let current = FALLBACK;

  // A language file registers itself. `_meta` carries the native
  // name shown in the selector and the BCP-47 locale for Intl.
  function register(code, dict) {
    const m = dict._meta || {};
    meta[code] = { native: m.native || code, locale: m.locale || code };
    const copy = Object.assign({}, dict);
    delete copy._meta;
    translations[code] = copy;
  }

  // Resolve a dotted key ("form.name") inside a dictionary.
  function resolve(dict, key) {
    return key.split(".").reduce((o, k) => (o == null ? undefined : o[k]), dict);
  }

  // Raw value with English fallback (may be a string or a plural object).
  function raw(key) {
    let v = resolve(translations[current], key);
    if (v === undefined) v = resolve(translations[FALLBACK], key);
    return v;
  }

  // Replace {placeholders} with values from `vars`.
  function interpolate(str, vars) {
    return String(str).replace(/\{(\w+)\}/g, (_, k) =>
      vars && k in vars ? vars[k] : "{" + k + "}");
  }

  // Translate a simple string key. Returns the key itself if missing,
  // which makes untranslated text obvious during testing.
  function t(key, vars) {
    const v = raw(key);
    if (v === undefined || typeof v === "object") return key;
    return interpolate(v, vars);
  }

  // Translate a pluralized key. The value is an object keyed by
  // Intl plural categories ("one"/"other"/...). {n} is auto-filled.
  function tp(key, count, vars) {
    const v = raw(key);
    const merged = Object.assign({ n: count }, vars);
    if (v === undefined || typeof v !== "object") return t(key, merged);
    const cat = new Intl.PluralRules(locale()).select(count);
    const chosen = v[cat] !== undefined ? v[cat]
      : v.other !== undefined ? v.other
      : Object.values(v)[0];
    return interpolate(chosen, merged);
  }

  function locale() { return (meta[current] && meta[current].locale) || current; }
  function has(code) { return !!translations[code]; }

  // List of registered languages for building the selector.
  function languages() {
    return Object.keys(meta).map((code) => ({ code, native: meta[code].native }));
  }

  function setLang(code) {
    if (!translations[code]) code = FALLBACK;
    current = code;
    localStorage.setItem("bb_lang", code);
    document.documentElement.lang = code;
    document.dispatchEvent(new CustomEvent("i18n:change", { detail: { code } }));
  }

  // Pick saved language, else the browser's language, else English.
  function init() {
    const saved = localStorage.getItem("bb_lang");
    const nav = (navigator.language || FALLBACK).slice(0, 2);
    setLang(saved && has(saved) ? saved : has(nav) ? nav : FALLBACK);
  }

  return { register, t, tp, setLang, locale, languages, has, init, current: () => current };
})();
