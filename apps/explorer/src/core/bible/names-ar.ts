/**
 * Arabic names for the explorer's books and genres (Orthodoxia patch, see PATCHES.md).
 *
 * `name` is the short form used in references and labels ("يوحنا 3: 16"), as in Van Dyck
 * references; `reference` overrides it where a reference uses a different form (Psalms → مزمور).
 * Pending review with the rest of the Arabic names (docs/THEOLOGICAL_REVIEW.md).
 */
export const ARABIC_BOOK_NAMES: Readonly<
  Record<string, { readonly name: string; readonly reference?: string }>
> = {
  Gen: { name: 'التكوين' },
  Exod: { name: 'الخروج' },
  Lev: { name: 'اللاويين' },
  Num: { name: 'العدد' },
  Deut: { name: 'التثنية' },
  Josh: { name: 'يشوع' },
  Judg: { name: 'القضاة' },
  Ruth: { name: 'راعوث' },
  '1Sam': { name: 'صموئيل الأول' },
  '2Sam': { name: 'صموئيل الثاني' },
  '1Kgs': { name: 'الملوك الأول' },
  '2Kgs': { name: 'الملوك الثاني' },
  '1Chr': { name: 'أخبار الأيام الأول' },
  '2Chr': { name: 'أخبار الأيام الثاني' },
  Ezra: { name: 'عزرا' },
  Neh: { name: 'نحميا' },
  Esth: { name: 'أستير' },
  Job: { name: 'أيوب' },
  Ps: { name: 'المزامير', reference: 'مزمور' },
  Prov: { name: 'الأمثال' },
  Eccl: { name: 'الجامعة' },
  Song: { name: 'نشيد الأنشاد' },
  Isa: { name: 'إشعياء' },
  Jer: { name: 'إرميا' },
  Lam: { name: 'مراثي إرميا' },
  Ezek: { name: 'حزقيال' },
  Dan: { name: 'دانيال' },
  Hos: { name: 'هوشع' },
  Joel: { name: 'يوئيل' },
  Amos: { name: 'عاموس' },
  Obad: { name: 'عوبديا' },
  Jonah: { name: 'يونان' },
  Mic: { name: 'ميخا' },
  Nah: { name: 'ناحوم' },
  Hab: { name: 'حبقوق' },
  Zeph: { name: 'صفنيا' },
  Hag: { name: 'حجي' },
  Zech: { name: 'زكريا' },
  Mal: { name: 'ملاخي' },
  Matt: { name: 'متى' },
  Mark: { name: 'مرقس' },
  Luke: { name: 'لوقا' },
  John: { name: 'يوحنا' },
  Acts: { name: 'أعمال الرسل' },
  Rom: { name: 'رومية' },
  '1Cor': { name: 'كورنثوس الأولى' },
  '2Cor': { name: 'كورنثوس الثانية' },
  Gal: { name: 'غلاطية' },
  Eph: { name: 'أفسس' },
  Phil: { name: 'فيلبي' },
  Col: { name: 'كولوسي' },
  '1Thess': { name: 'تسالونيكي الأولى' },
  '2Thess': { name: 'تسالونيكي الثانية' },
  '1Tim': { name: 'تيموثاوس الأولى' },
  '2Tim': { name: 'تيموثاوس الثانية' },
  Titus: { name: 'تيطس' },
  Phlm: { name: 'فليمون' },
  Heb: { name: 'العبرانيين' },
  Jas: { name: 'يعقوب' },
  '1Pet': { name: 'بطرس الأولى' },
  '2Pet': { name: 'بطرس الثانية' },
  '1John': { name: 'يوحنا الأولى' },
  '2John': { name: 'يوحنا الثانية' },
  '3John': { name: 'يوحنا الثالثة' },
  Jude: { name: 'يهوذا' },
  Rev: { name: 'الرؤيا' },
};

export const ARABIC_GENRE_NAMES: Readonly<Record<string, string>> = {
  law: 'الشريعة',
  history: 'الأسفار التاريخية',
  poetry: 'الشعر والحكمة',
  'major-prophets': 'الأنبياء الكبار',
  'minor-prophets': 'الأنبياء الصغار',
  gospels: 'الأناجيل',
  acts: 'أعمال الرسل',
  'pauline-epistles': 'رسائل بولس',
  'general-epistles': 'الرسائل الجامعة',
  revelation: 'الرؤيا',
};

/**
 * Normalizes Arabic for name lookup: removes diacritics and tatweel, unifies alef forms (أ إ آ ٱ → ا),
 * ta marbuta (ة → ه) and alef maqsura (ى → ي), converts Arabic-Indic digits, and drops a leading
 * "سفر"/"إنجيل"/"رسالة" word and the definite article, so "سِفْرُ التَّكْوِينِ" and "تكوين" match.
 */
export function normalizeArabic(value: string): string {
  return value
    .replace(/[ً-ٰٟۖ-ۭ]/g, '')
    .replace(/ـ/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 0x0660))
    .replace(/^\s*(?:سفر|انجيل|رساله)\s+/, '')
    .replace(/(^|\s)ال(?=\S)/g, '$1');
}
