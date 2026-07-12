/* ============================================================
   i18n/i18n.js — tiny translation engine for Birthday Book.

   Language files (i18n/en.js, i18n/de.js, ...) call
   I18N.register(code, {...}) to add themselves to the registry.
   This file must be loaded BEFORE any language file.

   Public API (used by index.html):
     I18N.t(key, vars)        -> translated string, {placeholder} substitution
     I18N.tp(key, n, vars)    -> pluralized translated string
     I18N.languages()         -> [{code, native}, ...] for the language <select>
     I18N.current()           -> current language code, e.g. "de"
     I18N.locale()            -> current Intl locale, e.g. "de-DE"
     I18N.setLang(code)       -> switch language, persists choice, fires "i18n:change"
     I18N.init()              -> pick saved/browser/English language and apply it
   ============================================================ */
(function () {
  const LANG_KEY = "bb_lang";
  const registry = {}; // code -> { native, locale, strings, plural }
  let current = "en";

  function register(code, def) {
    registry[code] = {
      native: def.native || code,
      locale: def.locale || code,
      strings: def.strings || {},
      plural: def.plural || {},
    };
  }

  function interpolate(str, vars) {
    if (!vars) return str;
    return str.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
  }

  function dict() { return registry[current] || registry.en || { strings: {}, plural: {}, locale: "en" }; }
  function fallbackDict() { return registry.en; }

  // Translate a plain (non-pluralized) key.
  function t(key, vars) {
    const d = dict(), fb = fallbackDict();
    let str = d.strings[key];
    if (str === undefined && fb) str = fb.strings[key];
    if (str === undefined) return key; // surface missing keys instead of hiding them
    return interpolate(str, vars);
  }

  // Translate a pluralized key. `n` picks the CLDR plural category
  // (one/other/...) for the current language via Intl.PluralRules.
  function tp(key, n, vars) {
    const d = dict(), fb = fallbackDict();
    let rule;
    try { rule = new Intl.PluralRules(d.locale).select(n); }
    catch { rule = n === 1 ? "one" : "other"; }
    let forms = d.plural[key];
    if (forms === undefined && fb) forms = fb.plural[key];
    if (forms === undefined) return t(key, Object.assign({ n }, vars));
    const str = forms[rule] !== undefined ? forms[rule] : forms.other;
    return interpolate(str, Object.assign({ n }, vars));
  }

  function languages() {
    return Object.keys(registry).map((code) => ({ code, native: registry[code].native }));
  }

  function setLang(code) {
    if (!registry[code]) code = registry.en ? "en" : Object.keys(registry)[0];
    current = code;
    try { localStorage.setItem(LANG_KEY, code); } catch {}
    document.documentElement.setAttribute("lang", code);
    document.dispatchEvent(new CustomEvent("i18n:change", { detail: { lang: code } }));
  }

  function init() {
    let saved;
    try { saved = localStorage.getItem(LANG_KEY); } catch {}
    const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
    const start = registry[saved] ? saved : (registry[browser] ? browser : "en");
    setLang(start);
  }

  window.I18N = { register, t, tp, languages, current: () => current, locale: () => dict().locale, setLang, init };
})();
