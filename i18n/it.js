/* Italian / Italiano */
I18N.register("it", {
  _meta: { native: "Italiano", locale: "it-IT" },

  app: { title: "Agenda dei compleanni" },

  header: {
    add: "Aggiungi persona",
    addTitle: "Aggiungi una nuova persona",
    importTitle: "Importa CSV",
    exportTitle: "Esporta CSV / Excel",
    backupTitle: "Backup di tutti i dati (JSON)",
    restoreTitle: "Ripristina backup",
    themeDark: "Passa alla modalità scura",
    themeLight: "Passa alla modalità chiara",
    language: "Lingua",
  },

  dash: {
    people: "Persone",
    today: "Oggi 🎉",
    month: "Questo mese",
    next: "Prossimo",
    none: "—",
    todayWord: "oggi",
  },

  toolbar: {
    search: "Cerca per nome…",
    allRel: "Tutte le relazioni",
    sortUpcoming: "Ordina: In arrivo",
    sortName: "Ordina: Nome",
    sortAge: "Ordina: Età",
    sortMonth: "Ordina: Mese/Giorno",
    viewList: "Elenco",
    viewCalendar: "Calendario",
  },

  list: {
    emptyTitle: "Ancora nessun compleanno.",
    emptyHint: "Clicca su ＋ Aggiungi persona per iniziare.",
    noMatches: "Nessun risultato.",
    age: "età {n}",
    gifts: "🎁 {text}",
    notes: "📝 {text}",
    whatsapp: "💬 WhatsApp",
    email: "✉️ Email",
    edit: "Modifica",
    remove: "Elimina",
    countdownToday: "🎉 Compleanno oggi — compie {age}!",
    countdownDays: { one: "Tra {n} giorno · compie {age}", other: "Tra {n} giorni · compie {age}" },
  },

  next: { days: "{n}g" },

  form: {
    addTitle: "Aggiungi persona",
    editTitle: "Modifica persona",
    name: "Nome completo *",
    relationship: "Relazione",
    dob: "Data di nascita *",
    mobile: "Numero di cellulare",
    mobilePh: "+39 340 1234567",
    email: "Email",
    address: "Indirizzo",
    reminder: "Preferenza promemoria",
    gifts: "Idee regalo preferite",
    notes: "Note",
    cancel: "Annulla",
    save: "Salva",
  },

  rel: {
    Friend: "Amico", Brother: "Fratello", Sister: "Sorella", Mother: "Madre",
    Father: "Padre", Uncle: "Zio", Aunt: "Zia", Cousin: "Cugino",
    Grandparent: "Nonno", Colleague: "Collega", Partner: "Partner", Other: "Altro",
  },

  reminder: { none: "Nessuno", sameday: "Stesso giorno", day1: "1 giorno prima", week1: "1 settimana prima" },

  toast: {
    added: "Aggiunto 🎉",
    updated: "Aggiornato",
    deleted: "Eliminato",
    exported: "CSV esportato",
    nothingExport: "Niente da esportare",
    imported: { one: "Importato {n} record", other: "Importati {n} record" },
    emptyFile: "File vuoto",
    backupSaved: "Backup salvato",
    restored: "Ripristinato",
    invalidBackup: "File di backup non valido",
  },

  confirm: {
    delete: "Eliminare {name}?",
    restore: {
      one: "Ripristinare {n} record? Questo sostituirà i tuoi dati attuali.",
      other: "Ripristinare {n} record? Questo sostituirà i tuoi dati attuali.",
    },
  },

  calendar: { prev: "Mese precedente", nextBtn: "Mese successivo", today: "Oggi" },

  greeting: {
    whatsapp: "Buon compleanno {name}! 🎂",
    emailSubject: "Buon compleanno!",
    emailBody: "Buon compleanno, {name}! 🎂",
  },
});
