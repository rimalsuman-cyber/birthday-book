/* Albanian / Shqip */
I18N.register("sq", {
  _meta: { native: "Shqip", locale: "sq-AL" },

  app: { title: "Libri i ditëlindjeve" },

  header: {
    add: "Shto person",
    addTitle: "Shto një person të ri",
    importTitle: "Importo CSV",
    exportTitle: "Eksporto CSV / Excel",
    backupTitle: "Rezervo të gjitha të dhënat (JSON)",
    restoreTitle: "Rikthe rezervimin",
    themeDark: "Kalo në modalitetin e errët",
    themeLight: "Kalo në modalitetin e ndritshëm",
    language: "Gjuha",
  },

  dash: {
    people: "Persona",
    today: "Sot 🎉",
    month: "Këtë muaj",
    next: "Në vazhdim",
    none: "—",
    todayWord: "sot",
  },

  toolbar: {
    search: "Kërko sipas emrit…",
    allRel: "Të gjitha lidhjet",
    sortUpcoming: "Rendit: Të ardhshme",
    sortName: "Rendit: Emri",
    sortAge: "Rendit: Mosha",
    sortMonth: "Rendit: Muaji/Dita",
    viewList: "Listë",
    viewCalendar: "Kalendar",
  },

  list: {
    emptyTitle: "Ende asnjë ditëlindje.",
    emptyHint: "Kliko ＋ Shto person për të filluar.",
    noMatches: "Asnjë përputhje.",
    age: "mosha {n}",
    gifts: "🎁 {text}",
    notes: "📝 {text}",
    whatsapp: "💬 WhatsApp",
    email: "✉️ Email",
    countdownToday: "🎉 Ditëlindja sot — mbush {age} vjeç!",
    countdownDays: {
      one: "Pas {n} dite · mbush {age} vjeç",
      other: "Pas {n} ditësh · mbush {age} vjeç",
    },
  },

  next: { days: "{n}d" },

  form: {
    addTitle: "Shto person",
    editTitle: "Modifiko personin",
    name: "Emri i plotë *",
    relationship: "Lidhja",
    dob: "Data e lindjes *",
    mobile: "Numri i celularit",
    mobilePh: "+355 6x xxx xxxx",
    email: "Email",
    address: "Adresa",
    reminder: "Preferenca e kujtesës",
    gifts: "Idetë e preferuara për dhurata",
    notes: "Shënime",
    cancel: "Anulo",
    save: "Ruaj",
  },

  rel: {
    Friend: "Mik", Brother: "Vëlla", Sister: "Motër", Mother: "Nënë",
    Father: "Baba", Uncle: "Xhaxha", Aunt: "Teze", Cousin: "Kushëri",
    Grandparent: "Gjysh/Gjyshe", Colleague: "Koleg", Partner: "Partner", Other: "Tjetër",
  },

  reminder: { none: "Asnjë", sameday: "Të njëjtën ditë", day1: "1 ditë para", week1: "1 javë para" },

  toast: {
    added: "U shtua 🎉",
    updated: "U përditësua",
    deleted: "U fshi",
    exported: "CSV u eksportua",
    nothingExport: "Asgjë për të eksportuar",
    imported: { one: "U importua {n} regjistrim", other: "U importuan {n} regjistrime" },
    emptyFile: "Skedar bosh",
    backupSaved: "Rezervimi u ruajt",
    restored: "U rikthye",
    invalidBackup: "Skedar rezervimi i pavlefshëm",
  },

  confirm: {
    delete: "Të fshihet {name}?",
    restore: {
      one: "Të rikthehet {n} regjistrim? Kjo do të zëvendësojë të dhënat tuaja aktuale.",
      other: "Të rikthehen {n} regjistrime? Kjo do të zëvendësojë të dhënat tuaja aktuale.",
    },
  },

  calendar: { prev: "Muaji i mëparshëm", nextBtn: "Muaji tjetër", today: "Sot" },

  greeting: {
    whatsapp: "Gëzuar ditëlindjen {name}! 🎂",
    emailSubject: "Gëzuar ditëlindjen!",
    emailBody: "Gëzuar ditëlindjen, {name}! 🎂",
  },
});
