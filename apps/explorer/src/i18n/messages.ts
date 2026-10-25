import { LOCALE } from './locale.ts';

/**
 * Every interface string of the explorer, in English and Arabic. Components read `t` (the current
 * language's strings); the Arabic catalogue is typed against the English one, so a missing string
 * fails type checking. Numbers are passed in already formatted.
 */
const en = {
  siteName: 'Orthodoxia',
  explorerTitle: 'Cross-references',
  site: {
    home: 'Home',
    bible: 'Bible',
    holyMass: 'Holy Mass',
    churchHistory: 'Church history',
    faith: 'Faith & Evidence',
    explore: 'Cross-references',
    about: 'About',
    sources: 'Sources',
    menu: 'Site menu',
    themeToggle: 'Switch between light and dark theme',
    otherLanguage: 'العربية',
    coverage:
      'Covers the 66 books in the OpenBible.info dataset; the deuterocanonical books are not included yet.',
  },
  views: {
    nav: 'Visualizations',
    arcs: { title: 'Arcs', short: 'Arcs', open: 'Show in Arcs' },
    threads: { title: 'Threads', short: 'Threads', open: 'Read in context' },
    failed: (view: string, message: string) => `${view} could not start: ${message}`,
  },
  testament: { OT: 'Old Testament', NT: 'New Testament' },
  search: {
    placeholder: 'Go to… John 3:16, Ps 23',
    label: 'Go to a Bible reference',
    invalid: 'Enter a reference like "John 3:16" or "Ps 23".',
    unknownBook: (book: string) => `Unknown book "${book}".`,
    ambiguous: (query: string, candidates: string) => `"${query}" could be ${candidates}.`,
    or: 'or',
    chapters: (book: string, count: string) => `${book} has ${count} chapters.`,
    verses: (chapter: string, count: string) => `${chapter} has ${count} verses.`,
  },
  filters: {
    label: 'Filters',
    votes: 'Community votes',
    all: 'All',
    allLinks: 'all links',
    votedDownHidden: 'links voted down are hidden',
    atLeast: (votes: string) => `≥ ${votes} votes`,
    explanation: (shown: string, total: string, threshold: string, hidden: string) =>
      `Votes rank how helpful OpenBible.info readers found a link; they don’t prove it right or wrong. Showing ${shown} of ${total} links (${threshold}${hidden}).`,
    genresHidden: (count: string) => `, ${count} genres hidden`,
    tip: 'Tip: tap a genre in the legend to hide or show it.',
    reset: 'Reset filters',
    changed: (label: string) => `${label} (changed)`,
  },
  genres: {
    label: 'Genres',
    show: 'Show genres',
    hide: 'Hide genres',
    showOne: (genre: string) => `Show ${genre}`,
    hideOne: (genre: string) => `Hide ${genre}`,
  },
  stats: {
    label: 'Summary',
    verses: 'verses',
    linksShown: (shown: string, total: string | null) =>
      total === null ? `${shown} links shown` : `${shown} of ${total} links shown`,
    connected: (share: string) => `${share} of verses connected`,
    crossTestament: (count: string) => `${count} links between the testaments`,
    pointerHint: ['to zoom', 'to pan', 'to focus'] as readonly string[],
    touchHint: ['hold to preview', 'to focus', 'to zoom'] as readonly string[],
  },
  loading: 'Loading 31,102 verses and 344,799 cross-references…',
  retry: 'Retry',
  panel: {
    details: 'Details',
    expand: 'Expand details',
    collapse: 'Collapse details',
    previous: (unit: 'verse' | 'chapter'): string =>
      unit === 'verse' ? 'Previous verse' : 'Previous chapter',
    next: (unit: 'verse' | 'chapter'): string => (unit === 'verse' ? 'Next verse' : 'Next chapter'),
    close: 'Close',
    copy: (reference: string) => `Copy ${reference} with a link`,
    copyTitle: 'Copy with a link',
    copied: (reference: string) => `${reference} copied`,
    omitted: (abbreviation: string) =>
      `Omitted in the ${abbreviation} (not in the earliest manuscripts).`,
    moreVerses: (count: string, one: boolean) => `+ ${count} more ${one ? 'verse' : 'verses'}`,
    verses: 'Verses',
    tapToFocus: 'tap one to focus it',
    connectsTo: 'Connects to',
    linksInGenres: (count: string, one: boolean) => `links in ${count} ${one ? 'genre' : 'genres'}`,
    references: 'References',
    referencesDescription: 'where this passage points',
    referencedBy: 'Referenced by',
    referencedByDescription: 'passages that point here',
    none: 'None',
    showAll: (count: string) => `Show all ${count}`,
  },
  connections: {
    fromVerse: (verse: string) => `from v. ${verse}`,
    toVerse: (verse: string) => `to v. ${verse}`,
    toRange: (range: string) => `to ${range}`,
  },
  arcs: {
    stage:
      'Arc diagram of cross-references. Drag or use the arrow keys to pan, scroll or +/- to zoom, click to focus a passage, Escape to clear. On a touch screen, touch and hold to preview a passage.',
  },
  threads: {
    direction: 'Thread direction',
    outgoing: 'Points to',
    incoming: 'Pointed from',
    both: 'Both',
    chapters: 'Chapters',
    previousChapter: 'Previous chapter',
    nextChapter: 'Next chapter',
    verseButton: (verse: string) => `Verse ${verse}: show its connections`,
    connections: (count: string) => `${count} connections`,
    canvas:
      'Threads from the verses of this chapter to where their cross-references land in the Bible, shown as a vertical bar of all 66 books.',
    spineHint: (count: string, one: boolean) =>
      `· ${count} ${one ? 'thread' : 'threads'} from here · click to read`,
  },
  footer: {
    bible: 'Bible',
    holyMass: 'Holy Mass',
    churchHistory: 'Church history',
    crossReferences: 'Cross-references',
    threads: 'Read with threads',
    about: 'About',
    sources: 'Sources & licenses',
    pages: 'Sections',
    project: 'The project',
    online: 'An online study project in English and Arabic',
  },
  page: {
    description:
      'Explore all 344,799 Bible cross-references: every verse on one line with its links as arcs, and every chapter with threads to where its verses connect.',
    threadsTitle: 'Threads',
    threadsDescription:
      'Read any chapter of the Bible with its cross-references in view: threads from each verse to where it connects.',
    noscript:
      'This page draws the 344,799 cross-references between the verses of the Bible. It needs JavaScript to run.',
  },
};

export type Messages = typeof en;

const ar: Messages = {
  siteName: 'أرثوذكسيا',
  explorerTitle: 'الشواهد',
  site: {
    home: 'الرئيسية',
    bible: 'الكتاب المقدس',
    holyMass: 'القداس',
    churchHistory: 'تاريخ الكنيسة',
    faith: 'الإيمان والأدلة',
    explore: 'الشواهد',
    about: 'عن المشروع',
    sources: 'المصادر',
    menu: 'قائمة الموقع',
    themeToggle: 'التبديل بين المظهر الفاتح والداكن',
    otherLanguage: 'English',
    coverage:
      'تغطي الأسفار الستة والستين الموجودة في بيانات OpenBible.info، ولم تُضَف الأسفار القانونية الثانية بعد.',
  },
  views: {
    nav: 'طرق العرض',
    arcs: { title: 'الأقواس', short: 'الأقواس', open: 'اعرض في الأقواس' },
    threads: { title: 'الخيوط', short: 'الخيوط', open: 'اقرأ في سياقه' },
    failed: (view, message) => `تعذّر تشغيل عرض ${view}: ${message}`,
  },
  testament: { OT: 'العهد القديم', NT: 'العهد الجديد' },
  search: {
    placeholder: 'اذهب إلى… يوحنا 3: 16، مزمور 23',
    label: 'اذهب إلى شاهد من الكتاب المقدس',
    invalid: 'اكتب شاهدًا مثل «يوحنا 3: 16» أو «مزمور 23».',
    unknownBook: (book) => `لا يوجد سفر باسم «${book}».`,
    ambiguous: (query, candidates) => `«${query}» قد تعني ${candidates}.`,
    or: 'أو',
    chapters: (book, count) => `عدد أصحاحات ${book} هو ${count}.`,
    verses: (chapter, count) => `عدد آيات ${chapter} هو ${count}.`,
  },
  filters: {
    label: 'التصفية',
    votes: 'أصوات القرّاء',
    all: 'الكل',
    allLinks: 'كل الروابط',
    votedDownHidden: 'أُخفيت الروابط ذات التصويت السلبي',
    atLeast: (votes) => `${votes} أصوات أو أكثر`,
    explanation: (shown, total, threshold, hidden) =>
      `ترتّب الأصوات الروابط حسب ما وجده قرّاء OpenBible.info مفيدًا، ولا تثبت صحة الرابط أو خطأه. المعروض ${shown} من ${total} رابطًا (${threshold}${hidden}).`,
    genresHidden: (count) => `، وأُخفيت ${count} أقسام`,
    tip: 'تلميح: اضغط على قسم في مفتاح الألوان لإخفائه أو إظهاره.',
    reset: 'إعادة ضبط التصفية',
    changed: (label) => `${label} (معدّلة)`,
  },
  genres: {
    label: 'أقسام الكتاب',
    show: 'أظهر أقسام الكتاب',
    hide: 'أخفِ أقسام الكتاب',
    showOne: (genre) => `أظهر ${genre}`,
    hideOne: (genre) => `أخفِ ${genre}`,
  },
  stats: {
    label: 'ملخص',
    verses: 'آية',
    linksShown: (shown, total) =>
      total === null ? `${shown} رابطًا معروضًا` : `${shown} من ${total} رابطًا معروضًا`,
    connected: (share) => `${share} من الآيات مترابطة`,
    crossTestament: (count) => `${count} رابطًا بين العهدين`,
    pointerHint: ['للتكبير', 'للتحريك', 'للاختيار'],
    touchHint: ['اضغط مطولًا للمعاينة', 'للاختيار', 'للتكبير'],
  },
  loading: 'جارٍ تحميل 31,102 آية و344,799 شاهدًا…',
  retry: 'أعد المحاولة',
  panel: {
    details: 'التفاصيل',
    expand: 'وسّع التفاصيل',
    collapse: 'صغّر التفاصيل',
    previous: (unit) => (unit === 'verse' ? 'الآية السابقة' : 'الأصحاح السابق'),
    next: (unit) => (unit === 'verse' ? 'الآية التالية' : 'الأصحاح التالي'),
    close: 'إغلاق',
    copy: (reference) => `انسخ ${reference} مع رابطها`,
    copyTitle: 'انسخ مع الرابط',
    copied: (reference) => `نُسخ ${reference}`,
    omitted: (abbreviation) => `غير موجودة في ${abbreviation}.`,
    moreVerses: (count, one) => `+ ${count} ${one ? 'آية أخرى' : 'آيات أخرى'}`,
    verses: 'الآيات',
    tapToFocus: 'اضغط على آية لاختيارها',
    connectsTo: 'ترتبط بـ',
    linksInGenres: (count, one) => `روابط في ${count} ${one ? 'قسم' : 'أقسام'}`,
    references: 'الشواهد',
    referencesDescription: 'ما يشير إليه هذا النص',
    referencedBy: 'يُستشهد به في',
    referencedByDescription: 'نصوص تشير إلى هنا',
    none: 'لا يوجد',
    showAll: (count) => `اعرض الكل (${count})`,
  },
  connections: {
    fromVerse: (verse) => `من الآية ${verse}`,
    toVerse: (verse) => `إلى الآية ${verse}`,
    toRange: (range) => `إلى ${range}`,
  },
  arcs: {
    stage:
      'مخطط أقواس للشواهد. اسحب أو استخدم مفاتيح الأسهم للتحريك، ومرّر العجلة أو +/- للتكبير، وانقر لاختيار نص، وEscape للإلغاء. على شاشات اللمس، اضغط مطولًا لمعاينة نص.',
  },
  threads: {
    direction: 'اتجاه الخيوط',
    outgoing: 'يشير إلى',
    incoming: 'يُشار إليه من',
    both: 'كلاهما',
    chapters: 'الأصحاحات',
    previousChapter: 'الأصحاح السابق',
    nextChapter: 'الأصحاح التالي',
    verseButton: (verse) => `الآية ${verse}: اعرض روابطها`,
    connections: (count) => `${count} رابطًا`,
    canvas:
      'خيوط من آيات هذا الأصحاح إلى حيث تقع شواهدها في الكتاب المقدس، معروضة على شريط عمودي للأسفار الستة والستين.',
    spineHint: (count, one) => `· ${count} ${one ? 'خيط' : 'خيوط'} من هنا · انقر للقراءة`,
  },
  footer: {
    bible: 'الكتاب المقدس',
    holyMass: 'القداس الإلهي',
    churchHistory: 'تاريخ الكنيسة',
    crossReferences: 'الشواهد',
    threads: 'اقرأ مع الخيوط',
    about: 'عن المشروع',
    sources: 'المصادر والتراخيص',
    pages: 'الأقسام',
    project: 'المشروع',
    online: 'مشروع دراسي على الإنترنت بالعربية والإنجليزية',
  },
  page: {
    description:
      'استكشف 344,799 شاهدًا في الكتاب المقدس: كل آية على خط واحد وروابطها أقواس، وكل أصحاح مع خيوط إلى حيث ترتبط آياته.',
    threadsTitle: 'الخيوط',
    threadsDescription:
      'اقرأ أي أصحاح من الكتاب المقدس وشواهده أمامك: خيوط من كل آية إلى حيث ترتبط.',
    noscript: 'ترسم هذه الصفحة 344,799 شاهدًا بين آيات الكتاب المقدس، وتحتاج إلى JavaScript لتعمل.',
  },
};

export const MESSAGES: Readonly<Record<'en' | 'ar', Messages>> = { en, ar };

/** The current language's strings. */
export const t: Messages = MESSAGES[LOCALE];
