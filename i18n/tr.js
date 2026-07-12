/* Turkish / Türkçe */
I18N.register("tr", {
  _meta: { native: "Türkçe", locale: "tr-TR" },

  app: { title: "Doğum Günü Defteri" },

  header: {
    add: "Kişi ekle",
    addTitle: "Yeni kişi ekle",
    importTitle: "CSV içe aktar",
    exportTitle: "CSV / Excel dışa aktar",
    backupTitle: "Tüm verileri yedekle (JSON)",
    restoreTitle: "Yedeği geri yükle",
    themeDark: "Koyu moda geç",
    themeLight: "Açık moda geç",
    language: "Dil",
  },

  dash: {
    people: "Kişiler",
    today: "Bugün 🎉",
    month: "Bu ay",
    next: "Sıradaki",
    none: "—",
    todayWord: "bugün",
  },

  toolbar: {
    search: "İsme göre ara…",
    allRel: "Tüm ilişkiler",
    sortUpcoming: "Sırala: Yaklaşan",
    sortName: "Sırala: İsim",
    sortAge: "Sırala: Yaş",
    sortMonth: "Sırala: Ay/Gün",
    viewList: "Liste",
    viewCalendar: "Takvim",
  },

  list: {
    emptyTitle: "Henüz doğum günü yok.",
    emptyHint: "Başlamak için ＋ Kişi ekle'ye tıklayın.",
    noMatches: "Eşleşme yok.",
    age: "yaş {n}",
    gifts: "🎁 {text}",
    notes: "📝 {text}",
    whatsapp: "💬 WhatsApp",
    email: "✉️ E-posta",
    edit: "Düzenle",
    remove: "Sil",
    countdownToday: "🎉 Doğum günü bugün — {age} yaşına giriyor!",
    countdownDays: {
      one: "{n} gün sonra · {age} yaşına girecek",
      other: "{n} gün sonra · {age} yaşına girecek",
    },
  },

  next: { days: "{n}g" },

  form: {
    addTitle: "Kişi ekle",
    editTitle: "Kişiyi düzenle",
    name: "Ad Soyad *",
    relationship: "İlişki",
    dob: "Doğum tarihi *",
    mobile: "Cep telefonu numarası",
    mobilePh: "+90 5xx xxx xx xx",
    email: "E-posta",
    address: "Adres",
    reminder: "Hatırlatma tercihi",
    gifts: "Favori hediye fikirleri",
    notes: "Notlar",
    cancel: "İptal",
    save: "Kaydet",
  },

  rel: {
    Friend: "Arkadaş", Brother: "Erkek kardeş", Sister: "Kız kardeş", Mother: "Anne",
    Father: "Baba", Uncle: "Amca", Aunt: "Teyze", Cousin: "Kuzen",
    Grandparent: "Büyükbaba/Büyükanne", Colleague: "Meslektaş", Partner: "Partner", Other: "Diğer",
  },

  reminder: { none: "Yok", sameday: "Aynı gün", day1: "1 gün önce", week1: "1 hafta önce" },

  toast: {
    added: "Eklendi 🎉",
    updated: "Güncellendi",
    deleted: "Silindi",
    exported: "CSV dışa aktarıldı",
    nothingExport: "Dışa aktarılacak bir şey yok",
    imported: { one: "{n} kayıt içe aktarıldı", other: "{n} kayıt içe aktarıldı" },
    emptyFile: "Boş dosya",
    backupSaved: "Yedek kaydedildi",
    restored: "Geri yüklendi",
    invalidBackup: "Geçersiz yedek dosyası",
  },

  confirm: {
    delete: "{name} silinsin mi?",
    restore: {
      one: "{n} kayıt geri yüklensin mi? Bu, mevcut verilerinizin yerine geçer.",
      other: "{n} kayıt geri yüklensin mi? Bu, mevcut verilerinizin yerine geçer.",
    },
  },

  calendar: { prev: "Önceki ay", nextBtn: "Sonraki ay", today: "Bugün" },

  greeting: {
    whatsapp: "İyi ki doğdun {name}! 🎂",
    emailSubject: "İyi ki doğdun!",
    emailBody: "İyi ki doğdun, {name}! 🎂",
  },
});
