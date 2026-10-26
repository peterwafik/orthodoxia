import type { Locale } from '../../i18n/index.ts';

interface Line {
  readonly en: string;
  readonly ar: string;
}

const LINES = {
  title: { en: 'The Agpeya', ar: 'الأجبية' },
  subtitle: { en: 'The Coptic book of the hours', ar: 'كتاب السواعي القبطي' },
  metaDescription: {
    en: 'The Agpeya, the Coptic Orthodox book of the seven hours of prayer, with every hour in Arabic, English and Coptic: the psalms, the Gospel readings and the prayers, in the order of the book.',
    ar: 'الأجبية، كتاب الصلوات السبع في الكنيسة القبطية الأرثوذكسية، بكل ساعة منها بالعربية والإنجليزية والقبطية: المزامير وقراءات الإنجيل والصلوات بترتيب الكتاب.',
  },
  hours: { en: 'The hours of prayer', ar: 'ساعات الصلاة' },
  prayNow: { en: 'Now', ar: 'الآن' },
  prayNowNote: { en: 'The hour nearest to the time on your clock', ar: 'الساعة الأقرب إلى وقتك الآن' },
  open: { en: 'Pray this hour', ar: 'صلِّ هذه الساعة' },
  psalmsCount: { en: '{n} psalms', ar: '{n} من المزامير' },
  psalmOne: { en: '1 psalm', ar: 'مزمور واحد' },
  everyHour: { en: 'Prayers of every hour', ar: 'صلوات كل ساعة' },
  everyHourNote: {
    en: 'These prayers open and close each hour. The book prints them once, with Prime.',
    ar: 'تُفتتح بها كل ساعة وتُختتم. ويطبعها الكتاب مرة واحدة مع صلاة باكر.',
  },
  languages: { en: 'Languages', ar: 'اللغات' },
  langAr: { en: 'Arabic', ar: 'العربية' },
  langEn: { en: 'English', ar: 'الإنجليزية' },
  langCop: { en: 'Coptic', ar: 'القبطية' },
  contents: { en: 'In this hour', ar: 'في هذه الساعة' },
  previous: { en: 'Previous hour', ar: 'الساعة السابقة' },
  next: { en: 'Next hour', ar: 'الساعة التالية' },
  allHours: { en: 'All the hours', ar: 'كل الساعات' },
  aboutHour: { en: 'About this hour', ar: 'عن هذه الساعة' },
  readInBible: { en: 'Read in the Bible', ar: 'اقرأ في الكتاب المقدس' },
  psalmNumbering: {
    en: 'Psalms are numbered as in the Agpeya (the Septuagint’s numbering), which is one lower than the Hebrew numbering for most of them.',
    ar: 'تُرقَّم المزامير كما في الأجبية (ترقيم السبعينية)، وهو أقل بواحد من الترقيم العبري في معظمها.',
  },
  psalm: { en: 'Psalm', ar: 'مزمور' },
  sharedBadge: { en: 'Said at every hour', ar: 'تُقال في كل ساعة' },
  missing: { en: 'The book has no text here in this language.', ar: 'ليس في الكتاب نص هنا بهذه اللغة.' },
  veilPsalms: { en: 'Psalms of the Veil, by hour', ar: 'مزامير الستار حسب الساعات' },
  goToPsalm: { en: 'Go to the psalm', ar: 'اذهب إلى المزمور' },
} as const satisfies Record<string, Line>;

export type UiKey = keyof typeof LINES;

export function ui(locale: Locale): Record<UiKey, string> {
  return Object.fromEntries(Object.entries(LINES).map(([key, line]) => [key, line[locale]])) as Record<UiKey, string>;
}

export const KIND_NAMES: Readonly<Record<string, Line>> = {
  opening: { en: 'Opening', ar: 'مقدمة' },
  prayer: { en: 'Prayer', ar: 'صلاة' },
  psalm: { en: 'Psalm', ar: 'مزمور' },
  epistle: { en: 'Epistle', ar: 'رسالة' },
  gospel: { en: 'Gospel', ar: 'إنجيل' },
  creed: { en: 'Creed', ar: 'قانون الإيمان' },
  absolution: { en: 'Absolution', ar: 'تحليل' },
  hymn: { en: 'Hymn', ar: 'تسبحة' },
  table: { en: 'Table', ar: 'جدول' },
};
