import type { Locale } from '../../i18n/index.ts';
import type { DateBasis, EvidenceCertainty, EvidenceKind, LineId } from '../../data/bible-history/types.ts';

interface Line {
  readonly en: string;
  readonly ar: string;
}

const LINES = {
  title: { en: 'Bible history chart', ar: 'مخطط تاريخ الكتاب المقدس' },
  metaDescription: {
    en: 'Every man and woman the Bible names, on one interactive wheel of time from Adam to the apostles: lifespans, reigns and lines of descent, the dates and how they are known, and the inscriptions and records outside the Bible that name them.',
    ar: 'كل رجل وامرأة يذكرهم الكتاب المقدس على دائرة زمنية تفاعلية واحدة من آدم إلى الرسل: الأعمار والممالك وخطوط النسب، والتواريخ وكيف عُرفت، والنقوش والسجلات من خارج الكتاب المقدس التي تذكرهم.',
  },
  lede: {
    en: 'Everyone the Bible names, from Adam to the apostles, on one wheel of time. Each bar is a life or a reign, coloured by line of descent. Select a bar to read the dates, how they are known, the passages, the family, and any evidence outside the Bible.',
    ar: 'كل من يذكرهم الكتاب المقدس، من آدم إلى الرسل، على دائرة زمنية واحدة. كل شريط حياة أو مُلك، ملوَّن بحسب خط النسب. اختر شريطًا لتقرأ التواريخ وكيف عُرفت، والفصول، والعائلة، وأي دليل من خارج الكتاب المقدس.',
  },
  stageLabel: {
    en: 'The Bible history chart. Drag to move, scroll or pinch to zoom, select a bar to read about the person. Use the search box to find someone; the index below lists the same people.',
    ar: 'مخطط تاريخ الكتاب المقدس. اسحب للتحريك، وحرّك العجلة أو اقرص للتكبير، واختر شريطًا لتقرأ عن الشخص. استخدم مربع البحث لتجد أحدًا؛ والفهرس أدناه يسرد الأشخاص أنفسهم.',
  },
  needsScript: { en: 'The chart needs JavaScript. The index further down lists the people with their dates and passages.', ar: 'المخطط يحتاج إلى جافاسكريبت. والفهرس أسفل الصفحة يسرد الأشخاص مع تواريخهم وفصولهم.' },
  loading: { en: 'Loading the chart…', ar: 'جارٍ تحميل المخطط…' },
  failed: { en: 'The chart could not be loaded. The index below still works.', ar: 'تعذّر تحميل المخطط. والفهرس أدناه ما زال يعمل.' },

  viewWheel: { en: 'Wheel', ar: 'الدائرة' },
  viewLine: { en: 'Straight', ar: 'مستقيم' },
  view: { en: 'View', ar: 'العرض' },
  count: { en: 'Count the years by', ar: 'حساب السنين بحسب' },
  countHist: { en: 'Documented history', ar: 'التاريخ الموثق' },
  countLxx: { en: 'Septuagint', ar: 'السبعينية' },
  countMt: { en: 'Hebrew text', ar: 'النص العبري' },
  countNote: {
    en: 'Three counts. Documented history (the default) dates only what can be fitted to the records of Egypt, Mesopotamia and the lands of the Bible: Adam to Terah are shown in order without BC years, because the genealogies of Genesis 5 and 11 can pass over generations and the Church has never defined the age of the world; Abraham is placed about 1980 BC, in the Middle Bronze Age, with 430 years in Egypt and the Exodus about 1260 BC, as most historians date it. The Septuagint and Hebrew counts read the Bible’s numbers as a continuous chronology (creation about 5425 or 4174 BC, the Flood about 3183 or 2518 BC, with 215 or 430 years in Egypt and the Exodus in 1446 BC). The Church Fathers counted from the Septuagint too, putting creation about 5500 BC (the Byzantine era 5509, the Alexandrian 5493); these calendar eras were never defined as dogma. From Saul (about 1050 BC) on, all three counts are the same.',
    ar: 'ثلاثة حسابات. حساب التاريخ الموثق (الافتراضي) لا يؤرخ إلا ما يمكن مطابقته بسجلات مصر وبلاد ما بين النهرين وأراضي الكتاب المقدس: فيُعرض آدم إلى تارح بالترتيب بلا سنين قبل الميلاد، لأن الأنساب في التكوين ٥ و١١ قد تتخطى أجيالًا ولم تحدد الكنيسة قط عمر العالم؛ ويوضع إبراهيم نحو ١٩٨٠ ق.م.، في العصر البرونزي الوسيط، مع أربعمئة وثلاثين سنة في مصر والخروج نحو ١٢٦٠ ق.م.، كما يؤرخه أكثر المؤرخين. أما حسابا السبعينية والعبري فيقرآن أرقام الكتاب المقدس تأريخًا متصلًا (الخليقة نحو ٥٤٢٥ أو ٤١٧٤ ق.م.، والطوفان نحو ٣١٨٣ أو ٢٥١٨ ق.م.، مع مئتين وخمس عشرة أو أربعمئة وثلاثين سنة في مصر، والخروج سنة ١٤٤٦ ق.م.). وقد حسب آباء الكنيسة أيضًا من السبعينية، فوضعوا الخليقة نحو ٥٥٠٠ ق.م. (التقويم البيزنطي ٥٥٠٩، والإسكندري ٥٤٩٣)؛ ولم تُحدَّد هذه التقاويم عقيدةً قط. ومن شاول (نحو ١٠٥٠ ق.م.) فصاعدًا تتفق الحسابات الثلاثة.',
  },
  undatedBasis: { en: 'Order and ages from Genesis; no calendar date', ar: 'الترتيب والأعمار من سفر التكوين؛ بلا تاريخ تقويمي' },
  undatedDates: { en: 'Undated: before recorded history', ar: 'بلا تاريخ: قبل التاريخ المدوَّن' },
  undatedNote: {
    en: 'In the documented-history count, Adam to Terah have no BC dates. The genealogies of Genesis 5 and 11 give their order and the length of their lives, but genealogies in the Bible can pass over generations (Cainan is in Luke 3:36 and the Septuagint but not the Hebrew; Matthew 1 leaves out three kings), so they do not give a calendar. Switch to the Septuagint or Hebrew count to see the dates the numbers give when read as a continuous chronology.',
    ar: 'في حساب التاريخ الموثق لا تواريخ قبل الميلاد من آدم إلى تارح. فسلاسل الأنساب في التكوين ٥ و١١ تعطي ترتيبهم وطول أعمارهم، لكن الأنساب في الكتاب المقدس قد تتخطى أجيالًا (فقينان مذكور في لوقا ٣: ٣٦ والسبعينية لا في العبري، ومتى ١ يُسقط ثلاثة ملوك)، فلا تعطي تقويمًا. غيّر إلى حساب السبعينية أو العبري لترى التواريخ التي تعطيها الأرقام إذا قُرئت تأريخًا متصلًا.',
  },
  histNote: {
    en: 'These years follow the documented-history count, which places the patriarchs and the Exodus where archaeology and ancient records fit best; the note above gives the years of the Hebrew count. Switch the count to compare.',
    ar: 'تتبع هذه السنون حساب التاريخ الموثق، الذي يضع الآباء والخروج حيث تتفق الآثار والسجلات القديمة أفضل اتفاق؛ وتذكر الملاحظة أعلاه سنيّ الحساب العبري. غيّر الحساب للمقارنة.',
  },
  sojournNote: {
    en: 'In the Septuagint count shown here, Israel stayed 215 years in Egypt, so the patriarchs’ years are 215 years later than in the Hebrew count, and later than the years the note above may give.',
    ar: 'في حساب السبعينية المعروض هنا أقام بنو إسرائيل في مصر مئتين وخمس عشرة سنة، فسنو الآباء متأخرة مئتين وخمس عشرة سنة عنها في الحساب العبري، وعن السنين التي قد تذكرها الملاحظة أعلاه.',
  },
  legendHistory: {
    en: 'Dashed lines mark events of documented history (Egypt, Mesopotamia, Assyria, Babylon, Persia, Greece, Rome) with their usual dates, so the Bible’s count can be seen beside them. Point at a line to read how it is dated. Switch the count to see how each count sits against them.',
    ar: 'الخطوط المتقطعة تشير إلى أحداث من التاريخ الموثق (مصر وبلاد ما بين النهرين وأشور وبابل وفارس واليونان وروما) بتواريخها المعتادة، ليُرى حساب الكتاب المقدس بجانبها. أشر إلى خط لتقرأ كيف أُرِّخ. وغيّر الحساب لترى موضع كل حساب منها.',
  },
  worldBasis: { en: 'Dated by', ar: 'أُرِّخ بواسطة' },
  search: { en: 'Find a person', ar: 'ابحث عن شخص' },
  searchPlaceholder: { en: 'David, Ruth, Hezekiah, Lydia…', ar: 'داود، راعوث، حزقيا، ليدية…' },
  noMatch: { en: 'No one by that name.', ar: 'لا أحد بهذا الاسم.' },
  zoomIn: { en: 'Zoom in', ar: 'تكبير' },
  zoomOut: { en: 'Zoom out', ar: 'تصغير' },
  reset: { en: 'Show the whole chart', ar: 'اعرض المخطط كله' },
  fullscreen: { en: 'Full screen', ar: 'ملء الشاشة' },
  lines: { en: 'Lines of descent', ar: 'خطوط النسب' },
  linesNote: { en: 'Select a line to show or hide it.', ar: 'اختر خطًا لتظهره أو تخفيه.' },
  periods: { en: 'Go to', ar: 'انتقل إلى' },
  options: { en: 'Show', ar: 'إظهار' },
  showEstimated: { en: 'People placed by estimate', ar: 'الأشخاص الموضوعون بالتقدير' },
  showEvidenceOnly: { en: 'Only people named outside the Bible', ar: 'فقط من ذُكروا خارج الكتاب المقدس' },
  showLinks: { en: 'Family strings for the selected person', ar: 'خيوط العائلة للشخص المختار' },
  legend: { en: 'How to read the chart', ar: 'كيف تقرأ المخطط' },
  legendBar: { en: 'A bar runs from birth to death. Where only a reign or a ministry is known, the bar is that span.', ar: 'يمتد الشريط من الميلاد إلى الوفاة. وحيث لا يُعرف إلا المُلك أو الخدمة، فالشريط هو تلك المدة.' },
  legendOffice: { en: 'The darker inner part of a bar is a reign, judgeship, priesthood or ministry.', ar: 'الجزء الداخلي الأغمق من الشريط هو مُلك أو قضاء أو كهنوت أو خدمة.' },
  legendEstimate: { en: 'Faint bars with soft ends are estimates: the Bible gives no dates for that person, so the chart places them from their family and the period they lived in.', ar: 'الأشرطة الباهتة ذات الأطراف اللينة تقديرية: لا يعطي الكتاب المقدس تواريخ لذلك الشخص، فيضعه المخطط بحسب عائلته والعصر الذي عاش فيه.' },
  legendEvidence: { en: 'A diamond marks a person named in an inscription or a record outside the Bible.', ar: 'المعيَّن يشير إلى شخص مذكور في نقش أو سجل من خارج الكتاب المقدس.' },
  legendScale: { en: 'Each period has its own share of the wheel, so a century takes more room in crowded periods than in the early millennia. The year marks show the scale.', ar: 'لكل عصر نصيبه من الدائرة، فيأخذ القرن مساحة أكبر في العصور المزدحمة منه في الألفيات الأولى. وعلامات السنين تُظهر المقياس.' },
  legendSource: {
    en: 'The names, families and verses of every person come from STEPBible’s TIPNR (Tyndale House, Cambridge, CC BY 4.0). Dates and evidence are written and checked by hand.',
    ar: 'أسماء كل الأشخاص وعائلاتهم وآياتهم مأخوذة من بيانات «تِبْنَر» لموقع ستب بايبل (تيندل هاوس، كامبريدج، برخصة المشاع الإبداعي). أما التواريخ والأدلة فمكتوبة ومراجَعة يدويًا.',
  },

  close: { en: 'Close', ar: 'إغلاق' },
  born: { en: 'Born', ar: 'الميلاد' },
  died: { en: 'Died', ar: 'الوفاة' },
  lived: { en: 'Lived', ar: 'عاش' },
  years: { en: 'years', ar: 'سنة' },
  dates: { en: 'Dates', ar: 'التواريخ' },
  howKnown: { en: 'How the dates are known', ar: 'كيف عُرفت التواريخ' },
  passages: { en: 'In the Bible', ar: 'في الكتاب المقدس' },
  versesCount: { en: 'Named in {n} verses', ar: 'مذكور في {n} آية' },
  family: { en: 'Family', ar: 'العائلة' },
  father: { en: 'Father', ar: 'الأب' },
  mother: { en: 'Mother', ar: 'الأم' },
  partners: { en: 'Married to', ar: 'متزوج من' },
  children: { en: 'Children', ar: 'الأبناء' },
  evidence: { en: 'Evidence outside the Bible', ar: 'أدلة من خارج الكتاب المقدس' },
  noEvidence: { en: 'No object or record outside the Bible is known to name this person. That is true of most people of the ancient world, and says nothing against them.', ar: 'لا يُعرف نقش أو سجل من خارج الكتاب المقدس يذكر هذا الشخص. وهذا حال أكثر الناس في العالم القديم، ولا يدل على شيء ضدهم.' },
  found: { en: 'Found', ar: 'اكتُشف' },
  keptAt: { en: 'Kept at', ar: 'محفوظ في' },
  readMore: { en: 'Read more', ar: 'للمزيد' },
  faithLink: { en: 'In Faith & Evidence', ar: 'في الإيمان والدليل' },
  period: { en: 'Period', ar: 'العصر' },
  line: { en: 'Line', ar: 'الخط' },
  tribe: { en: 'Tribe or people', ar: 'السبط أو الشعب' },
  estimatedNote: {
    en: 'The Bible gives no dates for this person. The chart places them from their family and the period STEPBible gives, so the bar shows roughly when they lived, not a known date.',
    ar: 'لا يعطي الكتاب المقدس تواريخ لهذا الشخص. فيضعه المخطط بحسب عائلته والعصر الذي تذكره بيانات ستب بايبل، فيبيّن الشريط زمن حياته تقريبًا، لا تاريخًا معروفًا.',
  },
  stepBrief: { en: 'STEPBible’s description', ar: 'وصف ستب بايبل' },
  septuagintOnly: { en: 'Not in the Hebrew count: this person is named only in the Septuagint and Luke.', ar: 'غير موجود في الحساب العبري: هذا الشخص مذكور في السبعينية ولوقا فقط.' },
  son: { en: 'Son of {p}', ar: 'ابن {p}' },
  daughter: { en: 'Daughter of {p}', ar: 'ابنة {p}' },
  man: { en: 'A man', ar: 'رجل' },
  woman: { en: 'A woman', ar: 'امرأة' },
  ofPeriod: { en: 'of the time of {p}', ar: 'من زمن {p}' },
  bc: { en: 'BC', ar: 'ق.م' },
  ad: { en: 'AD', ar: 'م' },
  circa: { en: 'c.', ar: 'نحو' },
  creation: { en: 'Creation', ar: 'الخليقة' },
  flood: { en: 'The Flood', ar: 'الطوفان' },
  centerVerse: {
    en: '“And hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed.”',
    ar: '«وصنع من دم واحد كل أمة من الناس يسكنون على كل وجه الأرض، وحتم بالأوقات المعينة.»',
  },
  centerRef: { en: 'Acts 17:26', ar: 'أعمال ١٧: ٢٦' },
  peopleCount: { en: '{n} people', ar: '{n} شخصًا' },
  index: { en: 'Index of people', ar: 'فهرس الأشخاص' },
  indexNote: {
    en: 'The people whose dates are written by hand, by period, with their dates and passages. The chart above places {n} people in all.',
    ar: 'الأشخاص الذين كُتبت تواريخهم يدويًا، بحسب العصر، مع تواريخهم وفصولهم. والمخطط أعلاه يضع {n} شخصًا في المجموع.',
  },
  evidenceIndex: { en: 'Evidence outside the Bible', ar: 'الأدلة من خارج الكتاب المقدس' },
  evidenceIndexNote: {
    en: 'Inscriptions, seals, royal records and ancient historians that name people of the Bible, with how sure scholars are of each.',
    ar: 'النقوش والأختام والسجلات الملكية والمؤرخون القدماء الذين يذكرون أشخاصًا من الكتاب المقدس، مع درجة يقين الباحثين في كل منها.',
  },
} satisfies Record<string, Line>;

export type UiKey = keyof typeof LINES;
export type Ui = Record<UiKey, string>;

export function ui(locale: Locale): Ui {
  return Object.fromEntries(Object.entries(LINES).map(([key, line]) => [key, line[locale]])) as Ui;
}

export const LINE_NAMES: Readonly<Record<LineId, Line & { readonly color: string; readonly dark: string }>> = {
  promise: { en: 'Line of promise (Adam to Christ)', ar: 'خط الموعد (من آدم إلى المسيح)', color: '#b8860b', dark: '#e8c25a' },
  seth: { en: 'Seth’s descendants', ar: 'نسل شيث', color: '#5f7d95', dark: '#9fbbd2' },
  cain: { en: 'Cain’s descendants', ar: 'نسل قايين', color: '#6a8f3a', dark: '#a8cf72' },
  israel: { en: 'Israel (the sons of Jacob)', ar: 'إسرائيل (بنو يعقوب)', color: '#7b4fa0', dark: '#b893dc' },
  shem: { en: 'Other descendants of Shem', ar: 'نسل سام الآخرون', color: '#a3529b', dark: '#dc94d4' },
  ham: { en: 'Descendants of Ham', ar: 'نسل حام', color: '#c26a2e', dark: '#f0a26c' },
  japheth: { en: 'Descendants of Japheth', ar: 'نسل يافث', color: '#2f7fb0', dark: '#7fc0e6' },
  nations: { en: 'Nations of unknown descent', ar: 'أمم غير معروفة النسب', color: '#7d7d7d', dark: '#b4b4b4' },
};

export const PERIOD_NAMES: Readonly<Record<string, Line>> = {
  primeval: { en: 'The beginning', ar: 'البدايات' },
  civilizations: { en: 'The first civilisations', ar: 'الحضارات الأولى' },
  patriarchs: { en: 'The patriarchs', ar: 'الآباء' },
  wilderness: { en: 'Egypt and the wilderness', ar: 'مصر والبرية' },
  conquest: { en: 'The conquest', ar: 'دخول كنعان' },
  judges: { en: 'The judges', ar: 'القضاة' },
  united: { en: 'The united kingdom', ar: 'المملكة المتحدة' },
  divided: { en: 'The divided kingdom', ar: 'المملكة المنقسمة' },
  exile: { en: 'Exile and return', ar: 'السبي والعودة' },
  between: { en: 'Between the Testaments', ar: 'بين العهدين' },
  nt: { en: 'The New Testament', ar: 'العهد الجديد' },
};

/** The periods marked around the chart, from the year each begins (primeval ones come from the count). */
export const CHART_PERIODS: readonly { readonly id: string; readonly from: number | 'creation' | 'flood' | 'abraham' | 'egypt' | 'conquest' | 'undated' }[] = [
  { id: 'primeval', from: 'creation' },
  { id: 'civilizations', from: 'undated' },
  { id: 'patriarchs', from: 'abraham' },
  { id: 'wilderness', from: 'egypt' },
  { id: 'judges', from: 'conquest' },
  { id: 'united', from: -1050 },
  { id: 'divided', from: -931 },
  { id: 'exile', from: -586 },
  { id: 'between', from: -400 },
  { id: 'nt', from: -6 },
];

export const BASIS_NAMES: Readonly<Record<DateBasis, Line>> = {
  text: { en: 'Counted from the Bible’s own numbers', ar: 'محسوبة من أرقام الكتاب المقدس نفسه' },
  reign: { en: 'Regnal years, fixed against Assyrian and Babylonian records', ar: 'سنوات المُلك، مضبوطة بالسجلات الآشورية والبابلية' },
  record: { en: 'Fixed by records outside the Bible', ar: 'مضبوطة بسجلات من خارج الكتاب المقدس' },
  scholarly: { en: 'Approximate, as historians date it', ar: 'تقريبية، كما يؤرخها المؤرخون' },
  tradition: { en: 'From the tradition of the Church', ar: 'من تقليد الكنيسة' },
  estimate: { en: 'Estimated by the chart', ar: 'مقدَّرة في المخطط' },
};

export const CERTAINTY_NAMES: Readonly<Record<EvidenceCertainty, Line>> = {
  certain: { en: 'Certain', ar: 'مؤكد' },
  probable: { en: 'Probable', ar: 'مرجَّح' },
  debated: { en: 'Debated', ar: 'مختلف عليه' },
};

export const KIND_NAMES: Readonly<Record<EvidenceKind, Line>> = {
  inscription: { en: 'Inscription', ar: 'نقش' },
  seal: { en: 'Seal or seal impression', ar: 'ختم أو طبعة ختم' },
  record: { en: 'Royal record', ar: 'سجل ملكي' },
  historian: { en: 'Ancient historian', ar: 'مؤرخ قديم' },
  artifact: { en: 'Object', ar: 'قطعة أثرية' },
  manuscript: { en: 'Manuscript', ar: 'مخطوط' },
};

/** TIPNR's tribe and nation labels in both languages. */
export const TRIBE_NAMES: Readonly<Record<string, Line>> = {
  'Tribe of Judah': { en: 'Tribe of Judah', ar: 'سبط يهوذا' },
  'Tribe of Levi': { en: 'Tribe of Levi', ar: 'سبط لاوي' },
  'Tribe of Benjamin': { en: 'Tribe of Benjamin', ar: 'سبط بنيامين' },
  'Tribe of Asher': { en: 'Tribe of Asher', ar: 'سبط أشير' },
  'Tribe of Simeon': { en: 'Tribe of Simeon', ar: 'سبط شمعون' },
  'Tribe of Manasseh': { en: 'Tribe of Manasseh', ar: 'سبط منسى' },
  'Tribe of Gad': { en: 'Tribe of Gad', ar: 'سبط جاد' },
  'Tribe of Reuben': { en: 'Tribe of Reuben', ar: 'سبط رأوبين' },
  'Tribe of Ephraim': { en: 'Tribe of Ephraim', ar: 'سبط أفرايم' },
  'Tribe of Issachar': { en: 'Tribe of Issachar', ar: 'سبط يساكر' },
  'Tribe of Naphtali': { en: 'Tribe of Naphtali', ar: 'سبط نفتالي' },
  'Tribe of Zebulun': { en: 'Tribe of Zebulun', ar: 'سبط زبولون' },
  'Tribe of Dan': { en: 'Tribe of Dan', ar: 'سبط دان' },
  'Early Patriarch': { en: 'The early patriarchs', ar: 'الآباء الأولون' },
  Israel: { en: 'Israel', ar: 'إسرائيل' },
  Edom: { en: 'Edom', ar: 'أدوم' },
  Canaan: { en: 'Canaan', ar: 'كنعان' },
  Egypt: { en: 'Egypt', ar: 'مصر' },
  Sinai: { en: 'Sinai', ar: 'سيناء' },
  Arabia: { en: 'Arabia', ar: 'بلاد العرب' },
  Ammon: { en: 'Ammon', ar: 'عمون' },
  Syria: { en: 'Aram (Syria)', ar: 'أرام' },
  Moab: { en: 'Moab', ar: 'موآب' },
  Mesopotamia: { en: 'Mesopotamia', ar: 'ما بين النهرين' },
  Persia: { en: 'Persia', ar: 'فارس' },
  Persian: { en: 'Persia', ar: 'فارس' },
  Assyria: { en: 'Assyria', ar: 'أشور' },
  Italy: { en: 'Italy', ar: 'إيطاليا' },
  Midian: { en: 'Midian', ar: 'مديان' },
  Philistia: { en: 'Philistia', ar: 'فلسطين' },
  Cush: { en: 'Cush', ar: 'كوش' },
};

export function tribeName(raw: string | undefined, locale: Locale): string | null {
  if (raw === undefined) return null;
  const clean = raw.replace(/^>/, '').replace(/\s*\(.*$/, '').replace(/\?.*$/, '').trim();
  return TRIBE_NAMES[clean]?.[locale] ?? null;
}
