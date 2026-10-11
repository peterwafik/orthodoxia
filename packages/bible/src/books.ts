/**
 * Book metadata for the Coptic Orthodox canon profile.
 *
 * STATUS: DRAFT, pending theological review (docs/THEOLOGICAL_REVIEW.md). The deuterocanonical
 * list, the Arabic names and the book order must be confirmed by a qualified Coptic Orthodox reviewer
 * before the site presents them as authoritative. Until then the reader labels the deuterocanon
 * section accordingly.
 *
 * Codes are USFM book codes (what the source files use); `osis` is the OSIS ID used by the
 * cross-reference explorer and by `OsisRef` in content. Slugs are stable URL segments, the same
 * in every language.
 */

export type Section = 'ot' | 'deuterocanon' | 'nt';

export interface BookInfo {
  readonly code: string;
  readonly osis: string;
  readonly slug: string;
  readonly en: string;
  readonly ar: string;
  readonly section: Section;
}

const ot = (code: string, osis: string, slug: string, en: string, ar: string): BookInfo => ({
  code, osis, slug, en, ar, section: 'ot',
});
const dc = (code: string, osis: string, slug: string, en: string, ar: string): BookInfo => ({
  code, osis, slug, en, ar, section: 'deuterocanon',
});
const nt = (code: string, osis: string, slug: string, en: string, ar: string): BookInfo => ({
  code, osis, slug, en, ar, section: 'nt',
});

/** In reading order: Old Testament, the deuterocanonical books, New Testament. */
export const BOOKS: readonly BookInfo[] = [
  ot('GEN', 'Gen', 'genesis', 'Genesis', 'التكوين'),
  ot('EXO', 'Exod', 'exodus', 'Exodus', 'الخروج'),
  ot('LEV', 'Lev', 'leviticus', 'Leviticus', 'اللاويين'),
  ot('NUM', 'Num', 'numbers', 'Numbers', 'العدد'),
  ot('DEU', 'Deut', 'deuteronomy', 'Deuteronomy', 'التثنية'),
  ot('JOS', 'Josh', 'joshua', 'Joshua', 'يشوع'),
  ot('JDG', 'Judg', 'judges', 'Judges', 'القضاة'),
  ot('RUT', 'Ruth', 'ruth', 'Ruth', 'راعوث'),
  ot('1SA', '1Sam', '1-samuel', '1 Samuel', 'صموئيل الأول'),
  ot('2SA', '2Sam', '2-samuel', '2 Samuel', 'صموئيل الثاني'),
  ot('1KI', '1Kgs', '1-kings', '1 Kings', 'الملوك الأول'),
  ot('2KI', '2Kgs', '2-kings', '2 Kings', 'الملوك الثاني'),
  ot('1CH', '1Chr', '1-chronicles', '1 Chronicles', 'أخبار الأيام الأول'),
  ot('2CH', '2Chr', '2-chronicles', '2 Chronicles', 'أخبار الأيام الثاني'),
  ot('EZR', 'Ezra', 'ezra', 'Ezra', 'عزرا'),
  ot('NEH', 'Neh', 'nehemiah', 'Nehemiah', 'نحميا'),
  ot('EST', 'Esth', 'esther', 'Esther', 'أستير'),
  ot('JOB', 'Job', 'job', 'Job', 'أيوب'),
  ot('PSA', 'Ps', 'psalms', 'Psalms', 'المزامير'),
  ot('PRO', 'Prov', 'proverbs', 'Proverbs', 'الأمثال'),
  ot('ECC', 'Eccl', 'ecclesiastes', 'Ecclesiastes', 'الجامعة'),
  ot('SNG', 'Song', 'song-of-songs', 'Song of Songs', 'نشيد الأنشاد'),
  ot('ISA', 'Isa', 'isaiah', 'Isaiah', 'إشعياء'),
  ot('JER', 'Jer', 'jeremiah', 'Jeremiah', 'إرميا'),
  ot('LAM', 'Lam', 'lamentations', 'Lamentations', 'مراثي إرميا'),
  ot('EZK', 'Ezek', 'ezekiel', 'Ezekiel', 'حزقيال'),
  ot('DAN', 'Dan', 'daniel', 'Daniel', 'دانيال'),
  ot('HOS', 'Hos', 'hosea', 'Hosea', 'هوشع'),
  ot('JOL', 'Joel', 'joel', 'Joel', 'يوئيل'),
  ot('AMO', 'Amos', 'amos', 'Amos', 'عاموس'),
  ot('OBA', 'Obad', 'obadiah', 'Obadiah', 'عوبديا'),
  ot('JON', 'Jonah', 'jonah', 'Jonah', 'يونان'),
  ot('MIC', 'Mic', 'micah', 'Micah', 'ميخا'),
  ot('NAM', 'Nah', 'nahum', 'Nahum', 'ناحوم'),
  ot('HAB', 'Hab', 'habakkuk', 'Habakkuk', 'حبقوق'),
  ot('ZEP', 'Zeph', 'zephaniah', 'Zephaniah', 'صفنيا'),
  ot('HAG', 'Hag', 'haggai', 'Haggai', 'حجي'),
  ot('ZEC', 'Zech', 'zechariah', 'Zechariah', 'زكريا'),
  ot('MAL', 'Mal', 'malachi', 'Malachi', 'ملاخي'),

  dc('TOB', 'Tob', 'tobit', 'Tobit', 'طوبيا'),
  dc('JDT', 'Jdt', 'judith', 'Judith', 'يهوديت'),
  dc('ESG', 'AddEsth', 'esther-additions', 'Esther (Greek additions)', 'تتمة أستير'),
  dc('WIS', 'Wis', 'wisdom', 'Wisdom of Solomon', 'حكمة سليمان'),
  dc('SIR', 'Sir', 'sirach', 'Sirach', 'يشوع بن سيراخ'),
  dc('BAR', 'Bar', 'baruch', 'Baruch', 'باروخ'),
  dc('LJE', 'EpJer', 'letter-of-jeremiah', 'Letter of Jeremiah', 'رسالة إرميا'),
  dc('S3Y', 'PrAzar', 'song-of-the-three', 'Prayer of Azariah and Song of the Three', 'صلاة عزريا وتسبحة الثلاثة فتية'),
  dc('SUS', 'Sus', 'susanna', 'Susanna', 'سوسنة'),
  dc('BEL', 'Bel', 'bel-and-the-dragon', 'Bel and the Dragon', 'بيل والتنين'),
  dc('1MA', '1Macc', '1-maccabees', '1 Maccabees', 'المكابيين الأول'),
  dc('2MA', '2Macc', '2-maccabees', '2 Maccabees', 'المكابيين الثاني'),
  dc('PS2', 'AddPs', 'psalm-151', 'Psalm 151', 'المزمور ١٥١'),

  nt('MAT', 'Matt', 'matthew', 'Matthew', 'إنجيل متى'),
  nt('MRK', 'Mark', 'mark', 'Mark', 'إنجيل مرقس'),
  nt('LUK', 'Luke', 'luke', 'Luke', 'إنجيل لوقا'),
  nt('JHN', 'John', 'john', 'John', 'إنجيل يوحنا'),
  nt('ACT', 'Acts', 'acts', 'Acts', 'أعمال الرسل'),
  nt('ROM', 'Rom', 'romans', 'Romans', 'رومية'),
  nt('1CO', '1Cor', '1-corinthians', '1 Corinthians', 'كورنثوس الأولى'),
  nt('2CO', '2Cor', '2-corinthians', '2 Corinthians', 'كورنثوس الثانية'),
  nt('GAL', 'Gal', 'galatians', 'Galatians', 'غلاطية'),
  nt('EPH', 'Eph', 'ephesians', 'Ephesians', 'أفسس'),
  nt('PHP', 'Phil', 'philippians', 'Philippians', 'فيلبي'),
  nt('COL', 'Col', 'colossians', 'Colossians', 'كولوسي'),
  nt('1TH', '1Thess', '1-thessalonians', '1 Thessalonians', 'تسالونيكي الأولى'),
  nt('2TH', '2Thess', '2-thessalonians', '2 Thessalonians', 'تسالونيكي الثانية'),
  nt('1TI', '1Tim', '1-timothy', '1 Timothy', 'تيموثاوس الأولى'),
  nt('2TI', '2Tim', '2-timothy', '2 Timothy', 'تيموثاوس الثانية'),
  nt('TIT', 'Titus', 'titus', 'Titus', 'تيطس'),
  nt('PHM', 'Phlm', 'philemon', 'Philemon', 'فليمون'),
  nt('HEB', 'Heb', 'hebrews', 'Hebrews', 'العبرانيين'),
  nt('JAS', 'Jas', 'james', 'James', 'يعقوب'),
  nt('1PE', '1Pet', '1-peter', '1 Peter', 'بطرس الأولى'),
  nt('2PE', '2Pet', '2-peter', '2 Peter', 'بطرس الثانية'),
  nt('1JN', '1John', '1-john', '1 John', 'يوحنا الأولى'),
  nt('2JN', '2John', '2-john', '2 John', 'يوحنا الثانية'),
  nt('3JN', '3John', '3-john', '3 John', 'يوحنا الثالثة'),
  nt('JUD', 'Jude', 'jude', 'Jude', 'يهوذا'),
  nt('REV', 'Rev', 'revelation', 'Revelation', 'رؤيا يوحنا'),
];

const BY_CODE = new Map(BOOKS.map((book) => [book.code, book]));
const BY_SLUG = new Map(BOOKS.map((book) => [book.slug, book]));

export function bookByCode(code: string): BookInfo | undefined {
  return BY_CODE.get(code);
}

export function bookBySlug(slug: string): BookInfo | undefined {
  return BY_SLUG.get(slug);
}
