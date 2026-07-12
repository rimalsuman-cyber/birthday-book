/* German / Deutsch */
I18N.register("de", {
  _meta: { native: "Deutsch", locale: "de-DE" },

  app: { title: "Geburtstagsbuch" },

  header: {
    add: "Person hinzufügen",
    addTitle: "Neue Person hinzufügen",
    importTitle: "CSV importieren",
    exportTitle: "CSV / Excel exportieren",
    backupTitle: "Alle Daten sichern (JSON)",
    restoreTitle: "Sicherung wiederherstellen",
    themeDark: "Zum dunklen Modus wechseln",
    themeLight: "Zum hellen Modus wechseln",
    language: "Sprache",
  },

  dash: {
    people: "Personen",
    today: "Heute 🎉",
    month: "Diesen Monat",
    next: "Als Nächstes",
    none: "—",
    todayWord: "heute",
  },

  toolbar: {
    search: "Nach Namen suchen…",
    allRel: "Alle Beziehungen",
    sortUpcoming: "Sortieren: Bevorstehend",
    sortName: "Sortieren: Name",
    sortAge: "Sortieren: Alter",
    sortMonth: "Sortieren: Monat/Tag",
    viewList: "Liste",
    viewCalendar: "Kalender",
  },

  list: {
    emptyTitle: "Noch keine Geburtstage.",
    emptyHint: "Klicken Sie auf ＋ Person hinzufügen, um zu beginnen.",
    noMatches: "Keine Treffer.",
    age: "Alter {n}",
    gifts: "🎁 {text}",
    notes: "📝 {text}",
    whatsapp: "💬 WhatsApp",
    email: "✉️ E-Mail",
    edit: "Bearbeiten",
    remove: "Löschen",
    countdownToday: "🎉 Geburtstag heute — wird {age}!",
    countdownDays: { one: "In {n} Tag · wird {age}", other: "In {n} Tagen · wird {age}" },
  },

  next: { days: "{n} T" },

  form: {
    addTitle: "Person hinzufügen",
    editTitle: "Person bearbeiten",
    name: "Vollständiger Name *",
    relationship: "Beziehung",
    dob: "Geburtsdatum *",
    mobile: "Handynummer",
    mobilePh: "+49 151 12345678",
    email: "E-Mail",
    address: "Adresse",
    reminder: "Erinnerungseinstellung",
    gifts: "Lieblingsgeschenkideen",
    notes: "Notizen",
    cancel: "Abbrechen",
    save: "Speichern",
  },

  rel: {
    Friend: "Freund", Brother: "Bruder", Sister: "Schwester", Mother: "Mutter",
    Father: "Vater", Uncle: "Onkel", Aunt: "Tante", Cousin: "Cousin",
    Grandparent: "Großelternteil", Colleague: "Kollege", Partner: "Partner", Other: "Sonstige",
  },

  reminder: { none: "Keine", sameday: "Am selben Tag", day1: "1 Tag vorher", week1: "1 Woche vorher" },

  toast: {
    added: "Hinzugefügt 🎉",
    updated: "Aktualisiert",
    deleted: "Gelöscht",
    exported: "CSV exportiert",
    nothingExport: "Nichts zu exportieren",
    imported: { one: "{n} Datensatz importiert", other: "{n} Datensätze importiert" },
    emptyFile: "Leere Datei",
    backupSaved: "Sicherung gespeichert",
    restored: "Wiederhergestellt",
    invalidBackup: "Ungültige Sicherungsdatei",
  },

  confirm: {
    delete: "{name} löschen?",
    restore: {
      one: "{n} Datensatz wiederherstellen? Dies ersetzt Ihre aktuellen Daten.",
      other: "{n} Datensätze wiederherstellen? Dies ersetzt Ihre aktuellen Daten.",
    },
  },

  calendar: { prev: "Voriger Monat", nextBtn: "Nächster Monat", today: "Heute" },

  greeting: {
    whatsapp: "Alles Gute zum Geburtstag, {name}! 🎂",
    emailSubject: "Alles Gute zum Geburtstag!",
    emailBody: "Alles Gute zum Geburtstag, {name}! 🎂",
  },
});
