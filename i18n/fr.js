/* French / Français */
I18N.register("fr", {
  _meta: { native: "Français", locale: "fr-FR" },

  app: { title: "Carnet d'anniversaires" },

  header: {
    add: "Ajouter une personne",
    addTitle: "Ajouter une nouvelle personne",
    importTitle: "Importer un CSV",
    exportTitle: "Exporter CSV / Excel",
    backupTitle: "Sauvegarder toutes les données (JSON)",
    restoreTitle: "Restaurer une sauvegarde",
    themeDark: "Passer en mode sombre",
    themeLight: "Passer en mode clair",
    language: "Langue",
  },

  dash: {
    people: "Personnes",
    today: "Aujourd'hui 🎉",
    month: "Ce mois-ci",
    next: "À venir",
    none: "—",
    todayWord: "aujourd'hui",
  },

  toolbar: {
    search: "Rechercher par nom…",
    allRel: "Toutes les relations",
    sortUpcoming: "Trier : À venir",
    sortName: "Trier : Nom",
    sortAge: "Trier : Âge",
    sortMonth: "Trier : Mois/Jour",
    viewList: "Liste",
    viewCalendar: "Calendrier",
  },

  list: {
    emptyTitle: "Aucun anniversaire pour le moment.",
    emptyHint: "Cliquez sur ＋ Ajouter une personne pour commencer.",
    noMatches: "Aucun résultat.",
    age: "âge {n}",
    gifts: "🎁 {text}",
    notes: "📝 {text}",
    whatsapp: "💬 WhatsApp",
    email: "✉️ E-mail",
    edit: "Modifier",
    remove: "Supprimer",
    countdownToday: "🎉 Anniversaire aujourd'hui — fête ses {age} ans !",
    countdownDays: {
      one: "Dans {n} jour · fêtera ses {age} ans",
      other: "Dans {n} jours · fêtera ses {age} ans",
    },
  },

  next: { days: "{n} j" },

  form: {
    addTitle: "Ajouter une personne",
    editTitle: "Modifier la personne",
    name: "Nom complet *",
    relationship: "Relation",
    dob: "Date de naissance *",
    mobile: "Numéro de mobile",
    mobilePh: "+33 6 12 34 56 78",
    email: "E-mail",
    address: "Adresse",
    reminder: "Préférence de rappel",
    gifts: "Idées de cadeaux préférées",
    notes: "Notes",
    cancel: "Annuler",
    save: "Enregistrer",
  },

  rel: {
    Friend: "Ami", Brother: "Frère", Sister: "Sœur", Mother: "Mère",
    Father: "Père", Uncle: "Oncle", Aunt: "Tante", Cousin: "Cousin",
    Grandparent: "Grand-parent", Colleague: "Collègue", Partner: "Partenaire", Other: "Autre",
  },

  reminder: { none: "Aucun", sameday: "Le jour même", day1: "1 jour avant", week1: "1 semaine avant" },

  toast: {
    added: "Ajouté 🎉",
    updated: "Mis à jour",
    deleted: "Supprimé",
    exported: "CSV exporté",
    nothingExport: "Rien à exporter",
    imported: { one: "{n} enregistrement importé", other: "{n} enregistrements importés" },
    emptyFile: "Fichier vide",
    backupSaved: "Sauvegarde enregistrée",
    restored: "Restauré",
    invalidBackup: "Fichier de sauvegarde invalide",
  },

  confirm: {
    delete: "Supprimer {name} ?",
    restore: {
      one: "Restaurer {n} enregistrement ? Cela remplacera vos données actuelles.",
      other: "Restaurer {n} enregistrements ? Cela remplacera vos données actuelles.",
    },
  },

  calendar: { prev: "Mois précédent", nextBtn: "Mois suivant", today: "Aujourd'hui" },

  greeting: {
    whatsapp: "Joyeux anniversaire {name} ! 🎂",
    emailSubject: "Joyeux anniversaire !",
    emailBody: "Joyeux anniversaire, {name} ! 🎂",
  },
});
