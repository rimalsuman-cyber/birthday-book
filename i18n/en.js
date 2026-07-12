/* English — the master language. Every key that exists must exist here;
   other languages fall back to these strings when a key is missing. */
I18N.register("en", {
  _meta: { native: "English", locale: "en-US" },

  app: { title: "Birthday Book" },

  header: {
    add: "Add person",
    addTitle: "Add a new person",
    importTitle: "Import CSV",
    exportTitle: "Export CSV / Excel",
    backupTitle: "Backup all data (JSON)",
    restoreTitle: "Restore backup",
    themeDark: "Switch to dark mode",
    themeLight: "Switch to light mode",
    language: "Language",
  },

  dash: {
    people: "People",
    today: "Today 🎉",
    month: "This month",
    next: "Next up",
    none: "—",
    todayWord: "today",
  },

  toolbar: {
    search: "Search by name…",
    allRel: "All relationships",
    sortUpcoming: "Sort: Upcoming",
    sortName: "Sort: Name",
    sortAge: "Sort: Age",
    sortMonth: "Sort: Month/Day",
    viewList: "List",
    viewCalendar: "Calendar",
  },

  list: {
    emptyTitle: "No birthdays yet.",
    emptyHint: "Click ＋ Add person to get started.",
    noMatches: "No matches.",
    age: "age {n}",
    gifts: "🎁 {text}",
    notes: "📝 {text}",
    whatsapp: "💬 WhatsApp",
    email: "✉️ Email",
    edit: "Edit",
    remove: "Delete",
    countdownToday: "🎉 Birthday today — turning {age}!",
    countdownDays: { one: "In {n} day · turns {age}", other: "In {n} days · turns {age}" },
  },

  next: { days: "{n}d" },

  form: {
    addTitle: "Add person",
    editTitle: "Edit person",
    name: "Full name *",
    relationship: "Relationship",
    dob: "Date of birth *",
    mobile: "Mobile number",
    mobilePh: "+1 555 123 4567",
    email: "Email",
    address: "Address",
    reminder: "Reminder preference",
    gifts: "Favorite gift ideas",
    notes: "Notes",
    cancel: "Cancel",
    save: "Save",
  },

  // Relationship option labels. The stored value stays the English key
  // (e.g. "Friend") so data & filtering are language-independent; only
  // the displayed label is translated.
  rel: {
    Friend: "Friend", Brother: "Brother", Sister: "Sister", Mother: "Mother",
    Father: "Father", Uncle: "Uncle", Aunt: "Aunt", Cousin: "Cousin",
    Grandparent: "Grandparent", Colleague: "Colleague", Partner: "Partner", Other: "Other",
  },

  reminder: { none: "None", sameday: "Same day", day1: "1 day before", week1: "1 week before" },

  toast: {
    added: "Added 🎉",
    updated: "Updated",
    deleted: "Deleted",
    exported: "Exported CSV",
    nothingExport: "Nothing to export",
    imported: { one: "Imported {n} record", other: "Imported {n} records" },
    emptyFile: "Empty file",
    backupSaved: "Backup saved",
    restored: "Restored",
    invalidBackup: "Invalid backup file",
  },

  confirm: {
    delete: "Delete {name}?",
    restore: {
      one: "Restore {n} record? This replaces your current data.",
      other: "Restore {n} records? This replaces your current data.",
    },
  },

  calendar: { prev: "Previous month", nextBtn: "Next month", today: "Today" },

  greeting: {
    whatsapp: "Happy Birthday {name}! 🎂",
    emailSubject: "Happy Birthday!",
    emailBody: "Happy Birthday, {name}! 🎂",
  },
});
