/**
 * Reads data/bible-people/raw/tipnr.txt (STEPBible TIPNR, CC BY 4.0) and writes data/bible-people/people.json: one compact
 * record for each man and woman the Bible names. The Bible history chart (/bible-history) places every one of them.
 *
 * Kept for each person: the TIPNR key (its unique name, e.g. "Aaron@Exo.4.14-Heb"), the English name, male or female,
 * the period TIPNR gives, father, mother, partners and children (TIPNR keys), the tribe or nation, how many verses name
 * the person and a spread of those verses (as "GEN 5:3", USFM book codes), and TIPNR's one-line description.
 *
 * Changes made to the data (as the TIPNR licence asks us to record): records that are not a man or a woman are left
 * out; verses found only in the Septuagint are left out (the reader's English and Arabic Bibles follow the Hebrew
 * numbering for those books); the verse list is cut to a spread of at most 40; links to people TIPNR marks as a distant
 * ancestor ("(a)") or a nation's founder ("(d)") are kept apart from direct parents.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { BOOKS } from '../../packages/bible/src/books.ts';

const RAW = resolve(import.meta.dirname, '../../data/bible-people/raw/tipnr.txt');
const OUT = resolve(import.meta.dirname, '../../data/bible-people/people.json');
const MAX_REFS = 40;

/** TIPNR periods, as the chart names them. */
const ERAS: [RegExp, string][] = [
  [/time before the Flood/i, 'primeval'],
  [/before Israel's Monarchy/i, 'judges'],
  [/time of the Patriarchs/i, 'patriarchs'],
  [/time of Egypt and Wilderness|time of the Exodus|time of Moses/i, 'wilderness'],
  [/time of Conquest/i, 'conquest'],
  [/time of Judges/i, 'judges'],
  [/time of (the )?United Monarchy|time of (King )?David|time of Solomon|time of Saul/i, 'united'],
  [/time of (the )?Divided Monarchy/i, 'divided'],
  [/time of Exile and Return|time of Nehemiah|time of Ezra|time of Joiakim|time of Esther|time of Daniel/i, 'exile'],
  [/time of (the )?New Testament/i, 'nt'],
];

const CODES = new Set(BOOKS.map((book) => book.code));

/** "Exo.4.14b" → "EXO 4:14"; `null` for Septuagint-only or unknown references. */
function ref(raw: string): string | null {
  const text = raw.trim();
  if (text === '' || text.startsWith('LXX')) return null;
  const match = /^([1-3]?[A-Za-z]{2,3})\.(\d+)\.(\d+)[a-z]?$/.exec(text);
  if (match === null) return null;
  const code = match[1]!.toUpperCase();
  if (!CODES.has(code)) return null;
  return `${code} ${match[2]}:${match[3]}`;
}

/** A TIPNR link ("Abram|Abraham@Gen.11.26-1Pe(a)") → its key and its mark. */
function link(raw: string): { key: string; mark: string } | null {
  const text = raw.trim();
  if (text === '' || !text.includes('@')) return null;
  const mark = /\(([a-z?])\)\s*$/.exec(text)?.[1] ?? '';
  const key = text.replace(/\([a-z?]\)\s*$/, '').replace(/^.*\|/, '').trim();
  return { key, mark };
}
const links = (field: string | undefined): { key: string; mark: string }[] =>
  (field ?? '').split(',').map(link).filter((value): value is { key: string; mark: string } => value !== null);

const spread = <T>(items: readonly T[], max: number): T[] => {
  if (items.length <= max) return [...items];
  return Array.from({ length: max }, (_, i) => items[Math.round((i * (items.length - 1)) / (max - 1))] as T);
};

const records = readFileSync(RAW, 'utf8').replace(/\r/g, '').split(/^\$==========\s*/m).filter((block) => block.startsWith('PERSON(s)'));
const people: Record<string, unknown>[] = [];

for (const block of records) {
  const lines = block.split('\n');
  const header = lines[1]?.split('\t') ?? [];
  const [unified, description, parents, , partners, offspring, tribe] = header;
  const type = header.map((cell) => cell.trim()).filter(Boolean).at(-1);
  if (unified === undefined || !unified.includes('@')) continue;
  if (type !== 'Male' && type !== 'Female') continue;
  const key = unified.replace(/=.*$/, '').trim();

  const verses: string[] = [];
  for (const line of lines) {
    if (!line.startsWith('– ') || line.startsWith('– Total')) continue;
    const cells = line.split('\t');
    for (const part of (cells[4] ?? '').split(';')) {
      const value = ref(part);
      if (value !== null && !verses.includes(value)) verses.push(value);
    }
  }
  const brief = /^@Brief=\s*(.*)$/m.exec(block)?.[1]?.trim() ?? '';
  const [father, mother] = (parents ?? '').split('+').map(link);
  const era = ERAS.find(([pattern]) => pattern.test(description ?? ''))?.[1] ?? null;

  const person: Record<string, unknown> = { k: key, n: key.replace(/@.*$/, ''), s: type === 'Female' ? 'f' : 'm' };
  if (era !== null) person.e = era;
  const kind = /^(Edomite|Arabian|Moabite|Ammonite|Syrian|Persian|Midianite|Ishmaelite|Egyptian|Pharaoh|Emperor|Tetrarch|Governor|Giant|King|Queen|Ruler)/.exec((description ?? '').trim())?.[1];
  if (kind !== undefined) person.d = kind;
  if (father) person.f = father.mark === '' || father.mark === '?' ? father.key : undefined;
  if (father && father.mark !== '' && father.mark !== '?') person.anc = father.key;
  if (mother) person.m = mother.key;
  const wives = links(partners).map((item) => item.key);
  if (wives.length > 0) person.w = wives;
  const children = links(offspring).filter((item) => item.mark === '' || item.mark === '?').map((item) => item.key);
  if (children.length > 0) person.c = children;
  const nation = (tribe ?? '').trim().replace(/^>$/, '');
  if (nation !== '') person.t = nation;
  person.v = verses.length;
  person.r = spread(verses, MAX_REFS);
  if (brief !== '') person.b = brief;
  people.push(JSON.parse(JSON.stringify(person)) as Record<string, unknown>);
}

// Children listed only on the parent's side, and parents only on the child's side, are linked both ways.
const byKey = new Map(people.map((person) => [person.k as string, person]));
for (const person of people) {
  for (const child of (person.c as string[] | undefined) ?? []) {
    const record = byKey.get(child);
    if (record === undefined) continue;
    if (person.s === 'm' && record.f === undefined) record.f = person.k;
    if (person.s === 'f' && record.m === undefined) record.m = person.k;
  }
}
for (const person of people) {
  for (const field of ['f', 'm'] as const) {
    const parent = byKey.get(person[field] as string);
    if (parent === undefined) { delete person[field]; continue; }
    const list = ((parent.c as string[] | undefined) ?? []);
    if (!list.includes(person.k as string)) parent.c = [...list, person.k];
  }
  for (const field of ['w', 'c'] as const) {
    const list = (person[field] as string[] | undefined)?.filter((key) => byKey.has(key));
    if (list === undefined || list.length === 0) delete person[field]; else person[field] = list;
  }
  if (person.anc !== undefined && !byKey.has(person.anc as string)) delete person.anc;
}

writeFileSync(OUT, JSON.stringify(people) + '\n');
const withEra = people.filter((person) => person.e !== undefined).length;
console.log(`Wrote ${people.length} people to ${OUT} (${withEra} with a period, ${people.filter((p) => p.f).length} with a father)`);
