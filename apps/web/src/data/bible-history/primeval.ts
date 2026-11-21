/**
 * From Adam to Abraham the Bible gives the age of each father at the birth of the son who continues the line, and how
 * long he lived (Genesis 5 and 11). The Septuagint (the Church's Old Testament, and the site's English text) and the
 * Hebrew (Masoretic) text give different numbers, so the chart can count in either. The numbers here are those of the
 * two texts the Bible reader shows: Brenton's Septuagint and the King James Version.
 *
 * The two texts also differ on the 430 years of Exodus 12:40. The Hebrew counts them "in Egypt"; the Septuagint (with
 * the Samaritan text, Josephus, Antiquities 2.318, and Paul in Galatians 3:17, who counts them from the promise to
 * Abraham) counts them "in Egypt and in the land of Canaan", which leaves 215 years in Egypt. Both counts fix the Exodus
 * at 1446 BC (1 Kings 6:1), so Jacob went down to Egypt in 1876 BC in the Hebrew count and in 1661 BC in the Septuagint
 * count, and Abraham was born in 2166 BC or 1951 BC (`abrahamBorn`). Everything before Abraham is counted back from him.
 *
 * Abraham was born when Terah was 130: Terah died at 205 (Genesis 11:32), Abraham left Haran at 75 (12:4), after
 * his father's death (Acts 7:4). Genesis 11:26 ("Terah lived seventy years") names the first of the three sons.
 */
import type { Bilingual, CorePerson } from './types.ts';

/**
 * The counts the chart can show:
 * - `hist` (the default): dates that agree with documented history. Adam to Terah are undated (the genealogies of
 *   Genesis 5 and 11 may pass over generations, so they give an order, not a calendar); from Abraham on, the dates
 *   follow the scheme in `HISTORY` below, chosen to fit what archaeology and ancient records establish.
 * - `lxx`: the Septuagint's numbers, read as a continuous chronology.
 * - `mt`: the Hebrew (Masoretic) numbers, read the same way.
 */
export type Chronology = 'hist' | 'lxx' | 'mt';
export const CHRONOLOGIES: readonly Chronology[] = ['hist', 'lxx', 'mt'];
export const DEFAULT_CHRONOLOGY: Chronology = 'hist';

/** Abraham's birth in the Hebrew count: 1446 BC + 430 years in Egypt + 130 (Jacob) + 60 (Isaac) + 100 (Abraham). */
export const ABRAHAM_BORN = -2166;
export const ABRAHAM_KEY = 'Abraham@Gen.11.26-1Pe';
/** The year Jacob went down to Egypt in the Hebrew count (1446 + 430). */
export const INTO_EGYPT = -1876;
/** The Exodus and the entry into Canaan in the Hebrew count (1 Kings 6:1). */
export const EXODUS = -1446;
export const CONQUEST = -1406;
/** Saul's accession, where the counts meet again. */
export const MONARCHY = -1050;

interface Scheme {
  /** Whose ages from Adam to Abraham: the Septuagint's or the Hebrew's. */
  readonly ages: 'lxx' | 'mt';
  /** Years added to the patriarchs (Abraham to the death of Joseph) as the Hebrew count dates them. */
  readonly patriarchs: number;
  /** Years added to the generation of the Exodus (Moses, Aaron, the wilderness). */
  readonly exodus: number;
  /** Adam to Terah are undated. */
  readonly undated: boolean;
}

/**
 * The documented-history count. See docs/BIBLE_HISTORY.md for the reasoning and sources.
 * `patriarchs` and `exodus` are offsets from the Hebrew count's dates.
 */
export const HISTORY = { patriarchs: 186, exodus: 186 } as const;

const SCHEMES: Readonly<Record<Chronology, Scheme>> = {
  hist: { ages: 'lxx', patriarchs: HISTORY.patriarchs, exodus: HISTORY.exodus, undated: true },
  lxx: { ages: 'lxx', patriarchs: 215, exodus: 0, undated: false },
  mt: { ages: 'mt', patriarchs: 0, exodus: 0, undated: false },
};
export const agesOf = (chronology: Chronology): 'lxx' | 'mt' => SCHEMES[chronology].ages;
export const isUndated = (chronology: Chronology): boolean => SCHEMES[chronology].undated;

/** In the undated count, the last undated year on the chart's scale: everything before it has no BC date. */
export const UNDATED_END = -3700;

/**
 * A year written in the Hebrew count (as the people written by hand are) → the same moment in another count.
 * The patriarchs move by `patriarchs`, the Egypt and wilderness years by `exodus`, and the judges are stretched or
 * squeezed so that the count meets the Hebrew one again at Saul (1050 BC).
 */
export function mapYear(year: number, chronology: Chronology): number {
  const { patriarchs, exodus } = SCHEMES[chronology];
  if (year <= -1805) return year + patriarchs;
  if (year <= CONQUEST) return year + exodus;
  if (year < MONARCHY) {
    const from = CONQUEST + exodus;
    return Math.round(from + ((year - CONQUEST) * (MONARCHY - from)) / (MONARCHY - CONQUEST));
  }
  return year;
}

export const abrahamBorn = (chronology: Chronology): number => mapYear(ABRAHAM_BORN, chronology);
export const intoEgypt = (chronology: Chronology): number => mapYear(INTO_EGYPT, chronology);

interface Link {
  readonly key: string;
  readonly father: string | null;
  /** Age of the father at this person's birth: [Septuagint, Hebrew]. `null` for the Hebrew when the person is not in it. */
  readonly at: readonly [number, number | null];
  /** Length of life [Septuagint, Hebrew], when given. */
  readonly life?: readonly [number, number];
}

/** The line Adam → Abraham. Cainan (Luke 3:36, Septuagint Genesis 11:13) is not in the Hebrew text. */
const LINE: readonly Link[] = [
  { key: 'Adam@Gen.2.19-Jud', father: null, at: [0, 0], life: [930, 930] },
  { key: 'Seth@Gen.4.25-Luk', father: 'Adam@Gen.2.19-Jud', at: [230, 130], life: [912, 912] },
  { key: 'Enosh@Gen.4.26-Luk', father: 'Seth@Gen.4.25-Luk', at: [205, 105], life: [905, 905] },
  { key: 'Kenan@Gen.5.9-Luk', father: 'Enosh@Gen.4.26-Luk', at: [190, 90], life: [910, 910] },
  { key: 'Mahalalel@Gen.5.12-Luk', father: 'Kenan@Gen.5.9-Luk', at: [170, 70], life: [895, 895] },
  { key: 'Jared@Gen.5.15-Luk', father: 'Mahalalel@Gen.5.12-Luk', at: [165, 65], life: [962, 962] },
  { key: 'Enoch@Gen.5.18-Jud', father: 'Jared@Gen.5.15-Luk', at: [162, 162], life: [365, 365] },
  { key: 'Methuselah@Gen.5.21-Luk', father: 'Enoch@Gen.5.18-Jud', at: [165, 65], life: [969, 969] },
  { key: 'Lamech@Gen.5.25-Luk', father: 'Methuselah@Gen.5.21-Luk', at: [167, 187], life: [753, 777] },
  { key: 'Noah@Gen.5.29-2Pe', father: 'Lamech@Gen.5.25-Luk', at: [188, 182], life: [950, 950] },
  { key: 'Shem@Gen.5.32-Luk', father: 'Noah@Gen.5.29-2Pe', at: [502, 502], life: [600, 600] },
  { key: 'Arpachshad@Gen.10.22-Luk', father: 'Shem@Gen.5.32-Luk', at: [100, 100], life: [535, 438] },
  { key: 'Cainan@Luk.3.36', father: 'Arpachshad@Gen.10.22-Luk', at: [135, null], life: [460, 0] },
  { key: 'Shelah@Gen.10.24-Luk', father: 'Cainan@Luk.3.36', at: [130, 35], life: [460, 433] },
  { key: 'Eber@Gen.10.21-Luk', father: 'Shelah@Gen.10.24-Luk', at: [130, 30], life: [404, 464] },
  { key: 'Peleg@Gen.10.25-Luk', father: 'Eber@Gen.10.21-Luk', at: [134, 34], life: [339, 239] },
  { key: 'Reu@Gen.11.18-Luk', father: 'Peleg@Gen.10.25-Luk', at: [130, 30], life: [339, 239] },
  { key: 'Serug@Gen.11.20-Luk', father: 'Reu@Gen.11.18-Luk', at: [132, 32], life: [330, 230] },
  { key: 'Nahor@Gen.11.22-Luk', father: 'Serug@Gen.11.20-Luk', at: [130, 30], life: [304, 148] },
  { key: 'Terah@Gen.11.24-Luk', father: 'Nahor@Gen.11.22-Luk', at: [179, 29], life: [205, 205] },
  { key: ABRAHAM_KEY, father: 'Terah@Gen.11.24-Luk', at: [130, 130] },
];

/** Years from creation (Anno Mundi) of each birth on the line, in one count. */
function annoMundi(chronology: Chronology): Map<string, number> {
  const index = agesOf(chronology) === 'lxx' ? 0 : 1;
  const born = new Map<string, number>();
  let year = 0;
  for (const link of LINE) {
    year += link.at[index] ?? 0;
    born.set(link.key, year);
  }
  return born;
}

export interface Dates {
  readonly born: number;
  readonly died?: number;
}

/** Converts a year counted from creation to BC/AD, with no year 0. */
const toYear = (am: number, abrahamAm: number, abraham: number): number => {
  const astronomical = abraham + 1 + (am - abrahamAm); // e.g. 2166 BC is astronomical year -2165
  return astronomical <= 0 ? astronomical - 1 : astronomical;
};

/** Where Abraham's birth sits for counting back: his real date, or, when undated, the end of the undated stretch. */
const anchor = (chronology: Chronology): number => (isUndated(chronology) ? UNDATED_END - 80 : abrahamBorn(chronology));

/**
 * Births and deaths of the line in one count. In the Hebrew count Cainan has no dates (he is not in that text). In the
 * undated count the years only place the people in order on the chart (they are never shown), and Abraham is left to
 * his own dates.
 */
export function primevalDates(chronology: Chronology): Map<string, Dates> {
  const am = annoMundi(chronology);
  const abraham = am.get(ABRAHAM_KEY)!;
  const index = agesOf(chronology) === 'lxx' ? 0 : 1;
  const at = anchor(chronology);
  const dates = new Map<string, Dates>();
  for (const link of LINE) {
    if (link.at[index] === null) continue;
    if (link.key === ABRAHAM_KEY && isUndated(chronology)) continue;
    const born = am.get(link.key)!;
    const life = link.life?.[index];
    dates.set(link.key, life ? { born: toYear(born, abraham, at), died: toYear(born + life, abraham, at) } : { born: toYear(born, abraham, at) });
  }
  return dates;
}

export interface Landmarks {
  readonly creation: number;
  readonly flood: number;
  readonly abraham: number;
  readonly egypt: number;
  readonly exodus: number;
  readonly conquest: number;
  /** The end of the undated stretch, or `null` when the count dates everything. */
  readonly undated: number | null;
}

/** Creation, the Flood (Noah's 600th year, Genesis 7:6), Abraham, the going down to Egypt, the Exodus and the conquest. */
export function landmarks(chronology: Chronology): Landmarks {
  const am = annoMundi(chronology);
  const abrahamAm = am.get(ABRAHAM_KEY)!;
  const at = anchor(chronology);
  return {
    creation: toYear(0, abrahamAm, at),
    flood: toYear(am.get('Noah@Gen.5.29-2Pe')! + 600, abrahamAm, at),
    abraham: abrahamBorn(chronology),
    egypt: intoEgypt(chronology),
    exodus: mapYear(EXODUS, chronology),
    conquest: mapYear(CONQUEST, chronology),
    undated: isUndated(chronology) ? UNDATED_END : null,
  };
}

export const IN_SEPTUAGINT_ONLY: ReadonlySet<string> = new Set(['Cainan@Luk.3.36']);

const b = (en: string, ar: string): Bilingual => ({ en, ar });
const COUNTED = b(
  'Counted from the ages in Genesis 5 and 11, back from Abraham. The Septuagint and the Hebrew text give different ages, and differ on how long Israel was in Egypt, so the dates change with the count chosen above the chart.',
  'محسوبة من الأعمار في التكوين ٥ و١١، رجوعًا من إبراهيم. وتختلف الأعمار بين السبعينية والنص العبري، ويختلفان في مدة إقامة إسرائيل في مصر، فتتغير التواريخ بحسب الحساب المختار فوق المخطط.',
);

/** The people of the line, written by hand; their dates here are the Septuagint count (the page switches them). */
const person = (key: string, name: Bilingual, role: Bilingual, summary: Bilingual, refs: string, dating = COUNTED): CorePerson => {
  const dates = primevalDates('lxx').get(key);
  return { key, name, ...(dates ? { born: dates.born, ...(dates.died === undefined ? {} : { died: dates.died }) } : {}), basis: 'text', dating, role, summary, refs };
};

export const CORE_PRIMEVAL: readonly CorePerson[] = [
  person('Adam@Gen.2.19-Jud', b('Adam', 'آدم'), b('The first man', 'الإنسان الأول'), b('Made by God in his image and placed in the garden; through his disobedience sin and death entered the world. Christ is called the last Adam.', 'خلقه الله على صورته ووضعه في الجنة، وبمعصيته دخلت الخطية والموت إلى العالم. ويُدعى المسيح آدم الأخير.'), 'Genesis 1:26–5:5; Luke 3:38; Romans 5:12–19; 1 Corinthians 15:22–45'),
  person('Seth@Gen.4.25-Luk', b('Seth', 'شيث'), b('Son of Adam, given in place of Abel', 'ابن آدم، عوضًا عن هابيل'), b('Born after the death of Abel; in his days people began to call on the name of the Lord.', 'وُلد بعد قتل هابيل، وفي أيامه ابتدأ الناس يدعون باسم الرب.'), 'Genesis 4:25–26; Genesis 5:3–8; Luke 3:38'),
  person('Enosh@Gen.4.26-Luk', b('Enosh', 'أنوش'), b('Son of Seth', 'ابن شيث'), b('Son of Seth, on the line from Adam to Noah.', 'ابن شيث، في سلسلة النسب من آدم إلى نوح.'), 'Genesis 4:26; Genesis 5:6–11; Luke 3:38'),
  person('Kenan@Gen.5.9-Luk', b('Kenan', 'قينان'), b('Son of Enosh', 'ابن أنوش'), b('Son of Enosh, on the line from Adam to Noah.', 'ابن أنوش، في سلسلة النسب من آدم إلى نوح.'), 'Genesis 5:9–14; Luke 3:37'),
  person('Mahalalel@Gen.5.12-Luk', b('Mahalalel', 'مهللئيل'), b('Son of Kenan', 'ابن قينان'), b('Son of Kenan, on the line from Adam to Noah.', 'ابن قينان، في سلسلة النسب من آدم إلى نوح.'), 'Genesis 5:12–17; Luke 3:37'),
  person('Jared@Gen.5.15-Luk', b('Jared', 'يارد'), b('Son of Mahalalel', 'ابن مهللئيل'), b('Father of Enoch; the longest-lived of the line after Methuselah.', 'أبو أخنوخ، وأطول الآباء عمرًا بعد متوشالح.'), 'Genesis 5:15–20; Luke 3:37'),
  person('Enoch@Gen.5.18-Jud', b('Enoch', 'أخنوخ'), b('Walked with God and was taken', 'سار مع الله وأخذه'), b('He walked with God, and he was not, for God took him. Jude quotes a prophecy in his name.', 'سار مع الله ولم يوجد لأن الله أخذه. ويقتبس يهوذا نبوة باسمه.'), 'Genesis 5:18–24; Hebrews 11:5; Jude 1:14–15'),
  person('Methuselah@Gen.5.21-Luk', b('Methuselah', 'متوشالح'), b('The longest life in the Bible', 'أطول عمر في الكتاب المقدس'), b('Lived 969 years, the longest life the Bible records.', 'عاش ٩٦٩ سنة، وهو أطول عمر يذكره الكتاب المقدس.'), 'Genesis 5:21–27; Luke 3:37', b(
    'Counted from Genesis 5. In the Septuagint as the reader prints it (Methuselah 167 at the birth of Lamech), his life runs fourteen years past the Flood; other Septuagint manuscripts and Josephus read 187, as the Hebrew does, which ends it in the year of the Flood. Saint Augustine discussed the difficulty (City of God 15.11).',
    'محسوبة من التكوين ٥. ففي السبعينية كما يطبعها القارئ (متوشالح ابن ١٦٧ سنة عند ولادة لامك) تمتد حياته أربع عشرة سنة بعد الطوفان؛ وتقرأ مخطوطات سبعينية أخرى ويوسيفوس ١٨٧ كما في العبري، فتنتهي حياته في سنة الطوفان. وقد ناقش القديس أغسطينوس هذه الصعوبة (مدينة الله ١٥: ١١).',
  )),
  person('Lamech@Gen.5.25-Luk', b('Lamech', 'لامك'), b('Father of Noah', 'أبو نوح'), b('Named his son Noah, saying that he would bring comfort from the toil of the ground the Lord had cursed.', 'دعا ابنه نوحًا قائلًا: هذا يعزينا عن عملنا وتعب أيدينا من قبل الأرض التي لعنها الرب.'), 'Genesis 5:25–31; Luke 3:36'),
  person('Noah@Gen.5.29-2Pe', b('Noah', 'نوح'), b('Builder of the ark', 'باني الفلك'), b('A righteous man in his generation; God saved him and his household through the Flood and made a covenant with all living things.', 'كان رجلًا بارًا في أجياله، فخلّصه الله وأهل بيته من الطوفان وأقام عهدًا مع كل ذي جسد.'), 'Genesis 5:28–9:29; Hebrews 11:7; 1 Peter 3:20; 2 Peter 2:5', b(
    'Counted from the ages in Genesis 5. The Flood came in Noah’s 600th year: about 3183 BC in the Septuagint count, about 2518 BC in the Hebrew count (Ussher’s 2348 BC, used by many printed charts, follows the Hebrew with a different later chronology). Egyptologists date Egypt’s first dynasty to about 3100 BC and the Great Pyramid to about 2560 BC, with radiocarbon agreeing, so the Septuagint count places the Flood before the dynasties and the pyramids, and the Hebrew count after the Great Pyramid. Even the Septuagint date falls within older, unbroken settlement in Egypt and Mesopotamia. The Church has not defined the age of the world; Christians read the genealogies and the Flood in more than one way, some allowing gaps in the lists or a flood over the known world rather than the whole globe. That is why the chart’s default count leaves the Flood undated. One scholarly suggestion for its historical setting is the great river floods whose layers are found at Shuruppak, Kish and Uruk in southern Mesopotamia, about 2900–2750 BC, where Sumerian tradition makes its own flood hero, Ziusudra, king of Shuruppak; this is a proposal, not a fixed date, and other scholars place the event earlier.',
    'محسوبة من الأعمار في التكوين ٥. جاء الطوفان في السنة الستمئة من حياة نوح: نحو ٣١٨٣ ق.م. في حساب السبعينية، ونحو ٢٥١٨ ق.م. في الحساب العبري (وتاريخ أشر ٢٣٤٨ ق.م.، الذي تستعمله مخططات مطبوعة كثيرة، يتبع العبري مع تأريخ لاحق مختلف). ويؤرخ علماء المصريات الأسرة المصرية الأولى بنحو ٣١٠٠ ق.م. والهرم الأكبر بنحو ٢٥٦٠ ق.م.، ويتفق معهم التأريخ بالكربون المشع؛ فحساب السبعينية يضع الطوفان قبل الأسرات والأهرام، والحساب العبري يضعه بعد الهرم الأكبر. وحتى تاريخ السبعينية يقع في زمن استيطان أقدم متصل في مصر وبلاد ما بين النهرين. ولم تحدد الكنيسة عمر العالم؛ ويقرأ المسيحيون سلاسل الأنساب والطوفان بأكثر من طريقة، فبعضهم يجيز وجود فجوات في القوائم، أو طوفانًا عمّ العالم المعروف لا الكرة الأرضية كلها. ولهذا يترك الحساب الافتراضي في المخطط الطوفان بلا تاريخ. ومن الاقتراحات العلمية لإطاره التاريخي فيضانات الأنهار الكبرى التي وُجدت طبقاتها في شروباك وكيش وأوروك في جنوب بلاد ما بين النهرين، نحو ٢٩٠٠–٢٧٥٠ ق.م.، حيث يجعل التقليد السومري بطل طوفانه زيوسودرا ملكًا على شروباك؛ وهذا اقتراح لا تاريخ ثابت، ويضع باحثون آخرون الحدث قبل ذلك.',
  )),
  person('Shem@Gen.5.32-Luk', b('Shem', 'سام'), b('Son of Noah, father of the Semites', 'ابن نوح، أبو الساميين'), b('Blessed by Noah; the line of promise runs through him to Abraham. The descendants of Shem are coloured purple on the chart.', 'باركه نوح، ومنه يمتد خط الموعد إلى إبراهيم. ونسل سام ملوَّن بالبنفسجي في المخطط.'), 'Genesis 9:18–27; Genesis 10:21–31; Genesis 11:10–11; Luke 3:36', b(
    'Counted from Genesis 11. In the Hebrew count Shem outlives his son Arphaxad and every descendant down to Terah except Eber, and is still alive when Abraham is 150; this is why a Jewish tradition could identify him with Melchizedek. In the Septuagint count (as in the Samaritan text and Josephus, which also have about a hundred more years before each son), each father dies before his son, and Shem dies more than seven centuries before Abraham is born.',
    'محسوبة من التكوين ١١. في الحساب العبري يعيش سام بعد ابنه أرفكشاد وبعد كل نسله حتى تارح ما عدا عابر، ويبقى حيًا حتى يبلغ إبراهيم مئة وخمسين سنة؛ ولهذا أمكن لتقليد يهودي أن يجعله هو ملكي صادق. أما في حساب السبعينية (ومثلها النص السامري ويوسيفوس، وفيهما أيضًا نحو مئة سنة زائدة قبل ولادة كل ابن) فيموت كل أب قبل ابنه، ويموت سام قبل ميلاد إبراهيم بأكثر من سبعة قرون.',
  )),
  person('Arpachshad@Gen.10.22-Luk', b('Arphaxad', 'أرفكشاد'), b('Son of Shem', 'ابن سام'), b('Born two years after the Flood, on the line from Shem to Abraham.', 'وُلد بعد الطوفان بسنتين، في سلسلة النسب من سام إلى إبراهيم.'), 'Genesis 10:22–24; Genesis 11:10–13; Luke 3:36'),
  person('Cainan@Luk.3.36', b('Cainan', 'قينان'), b('Son of Arphaxad (Septuagint and Luke)', 'ابن أرفكشاد (في السبعينية ولوقا)'), b('Named between Arphaxad and Shelah in the Septuagint and in the genealogy of Christ in Luke; the Hebrew text of Genesis does not have him.', 'يُذكر بين أرفكشاد وشالح في السبعينية وفي نسب المسيح في إنجيل لوقا، ولا يرد في النص العبري للتكوين.'), 'Luke 3:36', b(
    'Counted from the Septuagint (Genesis 11:12–13). He is not in the Hebrew text, so in the Hebrew count he has no dates and is not drawn. He is also missing from the Samaritan text, from Josephus and from the list in 1 Chronicles 1, so some argue he entered the Septuagint and Luke by a copyist’s error. But he is in the earliest surviving manuscripts of Luke (the Bodmer papyrus P75, about AD 200, and the great codices Sinaiticus and Vaticanus) and in the book of Jubilees, written before Christ, so the chart keeps him as the Septuagint and the Gospel have him.',
    'محسوبة من السبعينية (التكوين ١١: ١٢–١٣). ولا يرد في النص العبري، فلا تواريخ له في الحساب العبري ولا يُرسم. ولا يرد أيضًا في النص السامري ولا عند يوسيفوس ولا في قائمة أخبار الأيام الأول ١، فيرى بعضهم أنه دخل السبعينية ولوقا بخطأ ناسخ. لكنه موجود في أقدم مخطوطات إنجيل لوقا الباقية (بردية بودمر المعروفة بالرقم ٧٥، نحو سنة ٢٠٠ م، والمخطوطين الكبيرين السينائي والفاتيكاني) وفي سفر اليوبيلات المكتوب قبل المسيح، فيبقيه المخطط كما تذكره السبعينية والإنجيل.',
  )),
  person('Shelah@Gen.10.24-Luk', b('Shelah', 'شالح'), b('Father of Eber', 'أبو عابر'), b('On the line from Shem to Abraham.', 'في سلسلة النسب من سام إلى إبراهيم.'), 'Genesis 10:24; Genesis 11:12–15; Luke 3:35'),
  person('Eber@Gen.10.21-Luk', b('Eber', 'عابر'), b('Ancestor of the Hebrews', 'جد العبرانيين'), b('His name is often linked with the word “Hebrew”; Genesis calls Shem “the father of all the children of Eber”.', 'كثيرًا ما يُربط اسمه بكلمة «عبراني»، ويدعو سفر التكوين سامًا «أبا كل بني عابر».'), 'Genesis 10:21–25; Genesis 11:14–17; Luke 3:35'),
  person('Peleg@Gen.10.25-Luk', b('Peleg', 'فالج'), b('In his days the earth was divided', 'في أيامه قُسمت الأرض'), b('Named so “for in his days the earth was divided”, usually read as the scattering of the nations after Babel.', 'سُمي كذلك «لأن في أيامه قُسمت الأرض»، ويُفهم عادة على أنه تشتت الأمم بعد بابل.'), 'Genesis 10:25; Genesis 11:16–19; Luke 3:35', b(
    'Counted from Genesis 11. If the earth was divided at Babel at his birth, that was about 2652 BC in the Septuagint count (about 2782 BC without Cainan, as in the Samaritan text and Josephus) and about 2417 BC in the Hebrew count. All of these are later than the beginning of Egypt’s first dynasty as Egyptologists date it (about 3100 BC), which is one of the questions the early chronology leaves open. The tower was built of baked brick with bitumen in the land of Shinar (Genesis 11:3); such building first appears in Mesopotamia about 3500 BC, so the events fall after that and before Abraham. The chart’s default count leaves Babel undated.',
    'محسوبة من التكوين ١١. إن كانت الأرض قد قُسمت في بابل عند ميلاده، فذلك نحو ٢٦٥٢ ق.م. في حساب السبعينية (ونحو ٢٧٨٢ ق.م. بدون قينان، كما في النص السامري ويوسيفوس)، ونحو ٢٤١٧ ق.م. في الحساب العبري. وكلها بعد بداية الأسرة المصرية الأولى كما يؤرخها علماء المصريات (نحو ٣١٠٠ ق.م.)، وهذه من المسائل التي يتركها التأريخ المبكر مفتوحة. وقد بُني البرج من اللبن المشوي والحُمَر في أرض شنعار (التكوين ١١: ٣)؛ وأول ظهور لمثل هذا البناء في بلاد ما بين النهرين نحو ٣٥٠٠ ق.م.، فتقع الأحداث بعد ذلك وقبل إبراهيم. ويترك الحساب الافتراضي في المخطط بابل بلا تاريخ.',
  )),
  person('Reu@Gen.11.18-Luk', b('Reu', 'رعو'), b('Son of Peleg', 'ابن فالج'), b('On the line from Shem to Abraham.', 'في سلسلة النسب من سام إلى إبراهيم.'), 'Genesis 11:18–21; Luke 3:35'),
  person('Serug@Gen.11.20-Luk', b('Serug', 'سروج'), b('Son of Reu', 'ابن رعو'), b('On the line from Shem to Abraham.', 'في سلسلة النسب من سام إلى إبراهيم.'), 'Genesis 11:20–23; Luke 3:35'),
  person('Nahor@Gen.11.22-Luk', b('Nahor', 'ناحور'), b('Grandfather of Abraham', 'جد إبراهيم'), b('Father of Terah and grandfather of Abraham.', 'أبو تارح وجد إبراهيم.'), 'Genesis 11:22–25; Luke 3:34'),
  person('Terah@Gen.11.24-Luk', b('Terah', 'تارح'), b('Father of Abraham', 'أبو إبراهيم'), b('Left Ur of the Chaldeans with Abram for Canaan, settled in Haran and died there. Joshua recalls that he served other gods.', 'خرج مع أبرام من أور الكلدانيين قاصدًا كنعان، فأقام في حاران ومات هناك. ويذكر يشوع أنه عبد آلهة أخرى.'), 'Genesis 11:24–32; Joshua 24:2; Luke 3:34'),
];
