/**
 * Step 3 of the Agpeya import: turns data/agpeya/raw/sections.json into the data the site reads, one file per hour in
 * data/agpeya/ (committed: the PDF itself is not in the repository). It names every section, repairs the Arabic,
 * separates the paragraph about each hour from its prayers, and gives the psalms their numbers.
 *
 *   node scripts/agpeya/build.ts        (after extract.ts and sections.ts)
 *
 * After this the text is proofread by hand (data/agpeya/*.json is then the source); build.ts refuses to overwrite a
 * proofread file unless --force is given.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createRepair } from './arabic.ts';
import { arabicDigits, arabicOrdinal, copticNumeral } from './numbers.ts';
import type { Section } from './sections.ts';

const ROOT = resolve(import.meta.dirname, '../..');
const sections = JSON.parse(readFileSync(resolve(ROOT, 'data/agpeya/raw/sections.json'), 'utf8')) as Section[];
const repair = createRepair();

interface Bi {
  en: string;
  ar: string;
}

export const HOUR_META: Record<string, { order: number; title: Bi; time: Bi; at: number; about: RegExp }> = {
  prime: { order: 1, title: { en: 'Prime', ar: 'باكر' }, time: { en: 'The first hour, at dawn (about 6 a.m.)', ar: 'الساعة الأولى، عند الفجر (نحو السادسة صباحًا)' }, at: 6, about: /^Morning Prayer/ },
  terce: { order: 2, title: { en: 'Terce', ar: 'الساعة الثالثة' }, time: { en: 'The third hour (about 9 a.m.)', ar: 'الساعة الثالثة (نحو التاسعة صباحًا)' }, at: 9, about: /^The Third Hour/ },
  sext: { order: 3, title: { en: 'Sext', ar: 'الساعة السادسة' }, time: { en: 'The sixth hour (about noon)', ar: 'الساعة السادسة (نحو الظهر)' }, at: 12, about: /^The Sixth Hour/ },
  none: { order: 4, title: { en: 'None', ar: 'الساعة التاسعة' }, time: { en: 'The ninth hour (about 3 p.m.)', ar: 'الساعة التاسعة (نحو الثالثة عصرًا)' }, at: 15, about: /^The Ninth Hour/ },
  vespers: { order: 5, title: { en: 'Vespers', ar: 'الغروب' }, time: { en: 'The eleventh hour, at sunset (about 5 p.m.)', ar: 'الساعة الحادية عشرة، عند الغروب (نحو الخامسة مساءً)' }, at: 17, about: /^The Vespers/ },
  compline: { order: 6, title: { en: 'Compline', ar: 'النوم' }, time: { en: 'The twelfth hour, before sleep (about 9 p.m.)', ar: 'الساعة الثانية عشرة، قبل النوم (نحو التاسعة مساءً)' }, at: 21, about: /^The Compline/ },
  veil: { order: 7, title: { en: 'The Veil', ar: 'الستار' }, time: { en: 'At nightfall, for monks and bishops', ar: 'عند دخول الليل، للرهبان والأساقفة' }, at: 22, about: /^Veil:/ },
  midnight: { order: 8, title: { en: 'Midnight', ar: 'نصف الليل' }, time: { en: 'At midnight, in three watches', ar: 'عند نصف الليل، في ثلاث خدمات' }, at: 24, about: /^The Midnight Hour/ },
};

const GREEK = /[Ͱ-Ͽἀ-῿]/g;

/** The reference of a reading, as the Bible reader reads it, with its display in each language. */
const READINGS: Record<string, { ref: string; en: string; ar: string; book: Bi }> = {
  'prime:epistle': { ref: 'Ephesians 4:1–5', en: 'Ephesians 4:1–5', ar: 'أفسس ٤: ١–٥', book: { en: 'The Epistle of St. Paul to the Ephesians', ar: 'من رسالة القديس بولس إلى أهل أفسس' } },
  'prime:gospel': { ref: 'John 1:1–17', en: 'John 1:1–17', ar: 'يوحنا ١: ١–١٧', book: { en: 'The Holy Gospel according to St. John', ar: 'من إنجيل القديس يوحنا' } },
  'terce:gospel': { ref: 'John 14:26–31; John 15:1–4', en: 'John 14:26–31; 15:1–4', ar: 'يوحنا ١٤: ٢٦–٣١؛ ١٥: ١–٤', book: { en: 'The Holy Gospel according to St. John', ar: 'من إنجيل القديس يوحنا' } },
  'sext:gospel': { ref: 'Matthew 5:1–16', en: 'Matthew 5:1–16', ar: 'متى ٥: ١–١٦', book: { en: 'The Holy Gospel according to St. Matthew', ar: 'من إنجيل القديس متى' } },
  'none:gospel': { ref: 'Luke 9:10–17', en: 'Luke 9:10–17', ar: 'لوقا ٩: ١٠–١٧', book: { en: 'The Holy Gospel according to St. Luke', ar: 'من إنجيل القديس لوقا' } },
  'vespers:gospel': { ref: 'Luke 4:38–41', en: 'Luke 4:38–41', ar: 'لوقا ٤: ٣٨–٤١', book: { en: 'The Holy Gospel according to St. Luke', ar: 'من إنجيل القديس لوقا' } },
  'compline:gospel': { ref: 'Luke 2:25–32', en: 'Luke 2:25–32', ar: 'لوقا ٢: ٢٥–٣٢', book: { en: 'The Holy Gospel according to St. Luke', ar: 'من إنجيل القديس لوقا' } },
  'midnight:gospel:122': { ref: 'Matthew 25:1–13', en: 'Matthew 25:1–13', ar: 'متى ٢٥: ١–١٣', book: { en: 'The Holy Gospel according to St. Matthew', ar: 'من إنجيل القديس متى' } },
  'midnight:gospel:125': { ref: 'Luke 7:36–50', en: 'Luke 7:36–50', ar: 'لوقا ٧: ٣٦–٥٠', book: { en: 'The Holy Gospel according to St. Luke', ar: 'من إنجيل القديس لوقا' } },
  'midnight:gospel:129': { ref: 'Luke 12:32–40', en: 'Luke 12:32–40', ar: 'لوقا ١٢: ٣٢–٤٠', book: { en: 'The Holy Gospel according to St. Luke', ar: 'من إنجيل القديس لوقا' } },
};

type Kind = 'opening' | 'prayer' | 'psalm' | 'epistle' | 'gospel' | 'creed' | 'absolution' | 'hymn' | 'table';
interface Out {
  id: string;
  kind: Kind;
  title: Bi;
  /** What the title adds (the reading's reference), in each language. */
  subtitle?: Bi;
  /** The psalm, in the numbering of the Agpeya (the Septuagint's). */
  psalm?: number;
  /** The passage, for the link to the Bible reader. */
  ref?: string;
  /** The psalms of the Veil, by hour. */
  table?: { hour: string; items: { psalm: number; en: string; ar: string }[] }[];
  /** Said at every hour, and printed once, with Prime. */
  shared?: true;
  text: { en: string[]; ar: string[]; cop: string[] };
}

const PLAIN: Record<string, { id: string; kind: Kind; en: string; ar: string; shared?: true }> = {
  'INTRODUCTION TO EVERY HOUR': { id: 'introduction', kind: 'prayer', en: 'Introduction to every hour', ar: 'مقدمة كل ساعة', shared: true },
  "THE LORD'S PRAYER": { id: 'lords-prayer', kind: 'prayer', en: "The Lord's Prayer", ar: 'الصلاة الربانية', shared: true },
  'THE PRAYER OF THANKSGIVING': { id: 'thanksgiving', kind: 'prayer', en: 'The Prayer of Thanksgiving', ar: 'صلاة الشكر', shared: true },
  'THE PAULINE EPISTLE': { id: 'epistle', kind: 'epistle', en: 'The Pauline Epistle', ar: 'البولس' },
  'THE FAITH OF THE CHURCH': { id: 'faith-of-the-church', kind: 'prayer', en: 'From the faith of the Church', ar: 'من إيمان الكنيسة' },
  'THE HOLY GOSPEL': { id: 'gospel', kind: 'gospel', en: 'The Holy Gospel', ar: 'الإنجيل المقدس' },
  'THE GLORIA': { id: 'gloria', kind: 'hymn', en: 'The Gloria', ar: 'تسبحة الملائكة', shared: true },
  'THE TRISAGION': { id: 'trisagion', kind: 'prayer', en: 'The Trisagion', ar: 'الثلاث تقديسات', shared: true },
  'INTRODUCTION TO THE CREED': { id: 'creed-introduction', kind: 'prayer', en: 'Introduction to the Creed', ar: 'مقدمة قانون الإيمان', shared: true },
  'THE ORTHODOX CREED': { id: 'creed', kind: 'creed', en: 'The Orthodox Creed', ar: 'قانون الإيمان الأرثوذكسي', shared: true },
  'HOLY HOLY HOLY': { id: 'holy-holy-holy', kind: 'prayer', en: 'Holy, Holy, Holy', ar: 'قدوس، قدوس، قدوس', shared: true },
  'FIRST ABSOLUTION': { id: 'first-absolution', kind: 'absolution', en: 'The first absolution', ar: 'التحليل الأول', shared: true },
  'SECOND ABSOLUTION': { id: 'second-absolution', kind: 'absolution', en: 'The second absolution', ar: 'التحليل الثاني', shared: true },
  'CONCLUSION OF EVERY HOUR': { id: 'conclusion', kind: 'prayer', en: 'Conclusion of every hour', ar: 'ختام كل ساعة', shared: true },
  'GRACIOUSLY ACCORD, O LORD': { id: 'graciously-accord', kind: 'prayer', en: 'Graciously accord, O Lord', ar: 'تفضل يا رب' },
  'THE PSALMS OF THE VEIL': { id: 'veil-psalms', kind: 'table', en: 'The psalms of the Veil', ar: 'مزامير الستار' },
  'THE ABSOLUTION OF THE PRIESTS': { id: 'absolution-of-the-priests', kind: 'absolution', en: 'The absolution of the priests', ar: 'تحليل الكهنة' },
};

function key(title: string): string {
  return title.replace(GREEK, '').replace(/\s+/g, ' ').trim().toUpperCase().replace(/\s*\(CH.*$/, '');
}

/** The words of the English Bibles on the site: a word broken at the end of a line is joined when the whole is one of them. */
const ENGLISH = new Set<string>();
for (const word of readFileSync(resolve(ROOT, 'apps/explorer/data/raw/bsb.txt'), 'utf8').toLowerCase().match(/[a-z']+/g) ?? []) ENGLISH.add(word);

/** Misspellings of the PDF's English that are certain. */
const TYPOS: [RegExp, string][] = [
  [/\braisen\b/g, 'raised'],
  [/\bshin upon\b/g, 'shine upon'],
  [/\bannointed\b/g, 'anointed'],
  [/trail by Pilate/g, 'trial by Pilate'],
  [/\bAermon\b/g, 'Hermon'],
  [/\bisgood\b/g, 'is good'],
  [/\bonus\b/g, 'on us'],
  // Words the PDF's text layer lost from the paragraphs about the hours (read against the Arabic beside them).
  [/prayed early coming of/g, 'prayed early, at the coming of'],
  [/and the descent of the Holy Spirit may cleanse/g, 'and the descent of the Holy Spirit, that He may cleanse'],
];

function cleanEn(text: string): string {
  let out = text
    .replace(/\s+([,.;:!?])/g, '$1')
    .replace(/\b([A-Za-z]+)- ([a-z]+)\b/g, (_whole, a: string, b: string) => (ENGLISH.has(`${a}${b}`.toLowerCase()) ? `${a}${b}` : `${a}-${b}`))
    .replace(/\s{2,}/g, ' ')
    .trim();
  for (const [pattern, replacement] of TYPOS) out = out.replace(pattern, replacement);
  return out;
}

function classify(section: Section, hour: string, seen: Map<string, number>): Omit<Out, 'text'> | undefined {
  const raw = section.title.en;
  if (raw === '') return undefined;
  const compact = raw.replace(GREEK, '').replace(/\s+/g, '');
  const psalm = /^PSALMS?(\d{1,3})/i.exec(compact);
  if (psalm !== null) {
    const n = Number(psalm[1]);
    return { id: `psalm-${n}`, kind: 'psalm', title: { en: `Psalm ${n}`, ar: `المزمور ${arabicOrdinal(n)}` }, psalm: n };
  }
  const k = key(raw);
  const match = Object.entries(PLAIN).find(([name]) => k === name || k.includes(name) || (name === 'THE ABSOLUTION OF THE PRIESTS' && /ABSOLUTION OF THE PRIESTS/.test(k)));
  const absolution = /^ABSOLUTION/.test(k) && match === undefined;
  if (match === undefined && !absolution) throw new Error(`No title for the section "${raw}" (${hour} p${section.page})`);
  const info = match?.[1] ?? { id: 'absolution', kind: 'absolution' as Kind, en: 'The absolution', ar: 'التحليل' };
  const reading = READINGS[`${hour}:${info.id}`] ?? READINGS[`${hour}:${info.id}:${section.page}`];
  const n = (seen.get(info.id) ?? 0) + 1;
  seen.set(info.id, n);
  return {
    id: n === 1 ? info.id : `${info.id}-${n}`,
    kind: info.kind,
    title: { en: info.en, ar: info.ar },
    ...(reading === undefined ? {} : { subtitle: { en: `${reading.book.en} (${reading.en})`, ar: `${reading.book.ar} (${reading.ar})` }, ref: reading.ref }),
    ...(info.shared === true && hour === 'prime' ? { shared: true as const } : {}),
  };
}

/**
 * The Veil: the PDF prints a table of the psalms read, by hour, and then the Coptic text only (the English and Arabic cells
 * of those pages are empty). The table is rebuilt here from it, and links to the psalms in the hours.
 */
const VEIL_TABLE: NonNullable<Out['table']> = [
  { hour: 'prime', items: [[4, 'When I cried out', 'إذ دعوت'], [6, 'O Lord, do not rebuke me', 'يا رب لا تبكتني'], [12, 'How long, O Lord, do You forget me', 'إلى متى يا رب تنساني'], [15, 'Keep me, O Lord', 'احفظني يا رب'], [24, 'To You, O Lord, I have lifted up my soul', 'إليك يا رب رفعت نفسي'], [26, 'The Lord is my light', 'الرب نوري وخلاصي'], [66, 'God shall pity us', 'ليتراءف الله علينا'], [69, 'O God, be mindful to my help', 'اللهم التفت إلى معونتي']].map(([psalm, en, ar]) => ({ psalm: psalm as number, en: en as string, ar: ar as string })) },
  { hour: 'terce', items: [[22, 'The Lord is He who shepherds me', 'الرب يرعاني'], [29, 'I will exalt You, O Lord', 'أعظمك يا رب'], [42, 'Judge me, O Lord', 'احكم لي يا رب وانتقم لمظلمتي']].map(([psalm, en, ar]) => ({ psalm: psalm as number, en: en as string, ar: ar as string })) },
  { hour: 'sext', items: [[56, 'Have mercy upon me, O God', 'ارحمني يا رب ارحمني'], [85, 'Incline Your ear, O Lord', 'أمل يا رب أذنك'], [90, 'He who dwells in the help of the Most High', 'الساكن في عون العلي']].map(([psalm, en, ar]) => ({ psalm: psalm as number, en: en as string, ar: ar as string })) },
  { hour: 'none', items: [[96, 'The Lord reigns, let the earth exult', 'الرب قد ملك فلتتهلل الأرض'], [109, 'The Lord said to my Lord', 'قال الرب لربي'], [114, 'I loved, because the Lord will hear', 'أحببت أن يسمع الرب'], [115, 'I believed, therefore, I have spoken', 'آمنت لذلك تكلمت']].map(([psalm, en, ar]) => ({ psalm: psalm as number, en: en as string, ar: ar as string })) },
  { hour: 'vespers', items: [[120, 'I lifted up my eyes to the mountains', 'رفعت عيني'], [128, 'Many times they have warred against me', 'مرارا كثيرة']].map(([psalm, en, ar]) => ({ psalm: psalm as number, en: en as string, ar: ar as string })) },
  { hour: 'compline', items: [[129, 'Out of the depths I have cried to You', 'من الأعماق صرخت'], [130, 'O Lord, my heart was not exalted', 'يا رب لم يرتفع قلبي'], [131, 'Lord, remember David', 'اذكر يا رب داود'], [132, 'Behold! What is so good', 'هوذا ما أحسن'], [133, 'Behold, bless the Lord, O you servants', 'ها باركوا الرب'], [136, 'By the rivers of Babylon', 'على أنهار بابل'], [140, 'O Lord, I have cried to You', 'يا رب إليك صرخت'], [145, 'Praise the Lord, O my soul', 'سبحي يا نفسي الرب']].map(([psalm, en, ar]) => ({ psalm: psalm as number, en: en as string, ar: ar as string })) },
];

function applyVeil(out: Out[]): void {
  const old = out.find((s) => s.id === 'veil-psalms');
  if (old === undefined) return;
  const copticRest = old.text.cop.filter((p) => !/^Ευαγγελιον/.test(p) || p.length > 60);
  old.table = VEIL_TABLE;
  old.text = { en: [], ar: [], cop: [] };
  out.push({
    id: 'veil-readings',
    kind: 'prayer',
    title: { en: 'The Gospel and the prayers of the Veil', ar: 'إنجيل الستار وصلواته' },
    subtitle: { en: 'The Holy Gospel according to St. John (John 6:16–23)', ar: 'من إنجيل القديس يوحنا (يوحنا ٦: ١٦–٢٣)' },
    ref: 'John 6:16–23',
    text: { en: [], ar: [], cop: copticRest },
  });
}

const hours = Object.keys(HOUR_META).sort((a, b) => (HOUR_META[a]?.order ?? 0) - (HOUR_META[b]?.order ?? 0));
const force = process.argv.includes('--force');
for (const hour of hours) {
  const meta = HOUR_META[hour] as (typeof HOUR_META)[string];
  const target = resolve(ROOT, `data/agpeya/${hour}.json`);
  if (existsSync(target) && !force) {
    console.log(`${hour}: data/agpeya/${hour}.json exists (proofread); use --force to rebuild`);
    continue;
  }
  const mine = sections.filter((s) => s.hour === hour);
  const seen = new Map<string, number>();
  const out: Out[] = [];
  const about: Bi = { en: '', ar: '' };
  for (const section of mine) {
    const info = classify(section, hour, seen);
    const text = {
      en: section.text.en.map(cleanEn).filter((p) => p !== ''),
      ar: section.text.ar.map((p) => repair(p)).filter((p) => p !== ''),
      cop: section.text.cop.filter((p) => p !== ''),
    };
    // The leading paragraph about the hour is not a prayer: it is kept apart.
    if (info === undefined) {
      const enAbout = text.en.findIndex((p) => meta.about.test(p));
      if (enAbout >= 0) about.en = text.en.splice(enAbout, 1)[0] as string;
      if (text.ar.length > 0) about.ar = text.ar.splice(0, 1)[0] as string;
      if (text.en.length + text.ar.length + text.cop.length === 0) continue;
      out.push({ id: 'opening', kind: 'opening', title: { en: 'Opening of the hour', ar: 'مقدمة الساعة' }, text });
      continue;
    }
    if (info.kind === 'gospel' || info.kind === 'epistle') {
      // The reference of the reading, printed in brackets before it, is the subtitle already.
      const reference = /^\([^)]*\d[^)]*\)\s*/;
      text.en = text.en.map((p) => p.replace(reference, '')).filter((p) => p !== '');
      text.ar = text.ar.map((p) => p.replace(reference, '')).filter((p) => p !== '');
      // Coptic: the chapter and verses as numerals ("ⲉ̅· ⲁ-ⲓ̅ϛ̅"), and a verse range on its own.
      text.cop = text.cop.map((p) => p.replace(/[Ⲁ-ⲱϛϥ]̅[·.:]?\s+[Ⲁ-ⲱϛϥ̅]+\s?-\s?[Ⲁ-ⲱϛϥ̅]+\s*/, '').trim()).filter((p) => p !== '');
    }
    out.push({ ...info, text });
  }
  // A heading that landed at the end of the section before it moves to its own.
  for (let i = 1; i < out.length; i++) {
    const last = out[i - 1]?.text.ar.at(-1);
    if (last !== undefined && last.length <= 40 && !/[.:!؟…،]$/.test(last) && !/^(آمين|أمين)/.test(last) && out[i]?.kind !== 'psalm' && /الصلاة|الشكر|الربانية|الإنجيل|إنجيل|التحليل/.test(last)) {
      (out[i - 1] as Out).text.ar.pop();
    }
  }
  if (hour === 'veil') applyVeil(out);
  about.en = cleanEn(about.en);
  about.en = cleanEn(about.en);
  const file = { id: hour, order: meta.order, title: meta.title, time: meta.time, at: meta.at, about, sections: out };
  writeFileSync(target, `${JSON.stringify(file, null, 1)}\n`);
  console.log(`${hour}: ${out.length} sections → data/agpeya/${hour}.json`);
}
void arabicDigits;
void copticNumeral;
