/**
 * Places every person on the Bible history chart: a birth and death year (or a span of office), the line of descent
 * they are coloured by, and a lane (a ring on the wheel, a row on the straight chart) where their bar does not overlap
 * another. People written by hand (`core-*.ts`) keep their dates; everyone else is estimated from their family, the
 * period STEPBible gives them, and the chapter where they first appear, and is marked as estimated.
 * Pure functions, run at build time; tested by `place.test.ts`.
 */
import type { CorePerson, DateBasis, LineId } from '../../data/bible-history/types.ts';
import { ABRAHAM_KEY, abrahamBorn, agesOf, IN_SEPTUAGINT_ONLY, landmarks, mapYear, primevalDates, type Chronology } from '../../data/bible-history/primeval.ts';

/** One record of data/bible-people/people.json (see scripts/bible-people/build.ts). */
export interface RawPerson {
  readonly k: string;
  readonly n: string;
  readonly s: 'm' | 'f';
  readonly e?: string;
  readonly f?: string;
  readonly m?: string;
  readonly anc?: string;
  readonly w?: readonly string[];
  readonly c?: readonly string[];
  readonly t?: string;
  /** TIPNR's description, when it names a people or a rank ("Edomite", "King"). */
  readonly d?: string;
  readonly v: number;
  readonly r: readonly string[];
  readonly b?: string;
}

export interface Placed {
  readonly key: string;
  readonly start: number;
  readonly end: number;
  readonly born: number | null;
  readonly died: number | null;
  readonly basis: DateBasis;
  readonly approx: boolean;
  readonly line: LineId;
  lane: number;
}

/** The periods STEPBible gives, as year windows (BC negative): when a person of that period may have been born. */
export const PERIODS: Readonly<Record<string, readonly [number, number]>> = {
  patriarchs: [-2200, -1820],
  wilderness: [-1880, -1440],
  conquest: [-1480, -1380],
  judges: [-1420, -1080],
  united: [-1100, -940],
  divided: [-960, -600],
  exile: [-640, -400],
  nt: [-80, 60],
};

/**
 * A small, fixed offset (from the key) so that the many people a list names in one chapter do not all stand on the
 * same year: within ±`spread` years.
 */
export function jitter(key: string, spread: number): number {
  let hash = 2166136261;
  for (let i = 0; i < key.length; i++) hash = Math.imul(hash ^ key.charCodeAt(i), 16777619);
  return Math.round((((hash >>> 0) % 1000) / 1000 - 0.5) * 2 * spread);
}

/** Usual years between a parent's birth and a child's, and a usual length of life, by period. */
function generation(year: number, chronology: Chronology): { gap: number; life: number } {
  const { flood } = landmarks(chronology);
  const lxx = agesOf(chronology) === 'lxx';
  if (year < flood) return { gap: lxx ? 180 : 100, life: 300 };
  if (year < abrahamBorn(chronology)) return { gap: lxx ? 130 : 32, life: lxx ? 150 : 90 };
  if (year < -1800) return { gap: 50, life: 24 };
  if (year < -1400) return { gap: 35, life: 16 };
  return { gap: 27, life: 12 };
}

/**
 * Narrative chapters and the years they tell of, for placing a person by where they first appear. Each entry is
 * [book, first chapter, last chapter, year at the first chapter, year at the last]; years between are interpolated.
 * Genealogies (1 Chronicles 1–9) are left out: they list people of every period.
 */
const CHAPTERS: readonly (readonly [string, number, number, number, number])[] = [
  ['GEN', 12, 25, -2091, -1991], ['GEN', 26, 36, -1980, -1900], ['GEN', 37, 50, -1898, -1805],
  ['EXO', 1, 2, -1600, -1526], ['EXO', 3, 40, -1446, -1445], ['LEV', 1, 27, -1445, -1445], ['NUM', 1, 36, -1444, -1407],
  ['DEU', 1, 34, -1406, -1406], ['JOS', 1, 24, -1406, -1380], ['JDG', 1, 21, -1370, -1100], ['RUT', 1, 4, -1120, -1100],
  ['1SA', 1, 31, -1100, -1010], ['2SA', 1, 24, -1010, -971], ['1KI', 1, 11, -971, -931], ['1KI', 12, 22, -931, -853],
  ['2KI', 1, 17, -852, -722], ['2KI', 18, 25, -715, -561], ['1CH', 10, 29, -1010, -971], ['2CH', 1, 9, -971, -931],
  ['2CH', 10, 36, -931, -538], ['EZR', 1, 6, -538, -516], ['EZR', 7, 10, -458, -457], ['NEH', 1, 13, -445, -432],
  ['EST', 1, 10, -483, -473], ['ISA', 1, 66, -740, -690], ['JER', 1, 52, -627, -580], ['EZK', 1, 48, -593, -571],
  ['DAN', 1, 12, -605, -536], ['HOS', 1, 14, -755, -715], ['AMO', 1, 9, -760, -755], ['HAG', 1, 2, -520, -520],
  ['ZEC', 1, 14, -520, -480], ['MAT', 1, 28, -5, 30], ['MRK', 1, 16, 27, 30], ['LUK', 1, 24, -6, 30], ['JHN', 1, 21, 27, 30],
  ['ACT', 1, 28, 30, 62], ['ROM', 1, 16, 57, 57], ['1CO', 1, 16, 54, 54], ['2CO', 1, 13, 55, 55], ['GAL', 1, 6, 49, 49],
  ['EPH', 1, 6, 61, 61], ['PHP', 1, 4, 61, 61], ['COL', 1, 4, 61, 61], ['1TH', 1, 5, 51, 51], ['2TH', 1, 3, 51, 51],
  ['1TI', 1, 6, 63, 63], ['2TI', 1, 4, 66, 66], ['TIT', 1, 3, 63, 63], ['PHM', 1, 1, 61, 61], ['HEB', 1, 13, 65, 65],
  ['3JN', 1, 1, 90, 90], ['REV', 1, 3, 95, 95],
];

/**
 * How many years a hand-written person moves in a count. People are written in the Hebrew count; `mapYear` gives the
 * same moment in another count, and the whole life moves with its first year so that ages stay as the Bible gives them.
 * Adam to Terah are counted separately (`primevalDates`).
 */
export function shiftFor(person: CorePerson, chronology: Chronology): number {
  if (primevalDates('mt').has(person.key) && person.key !== ABRAHAM_KEY) return 0;
  const first = person.born ?? person.office?.from ?? person.died;
  return first === undefined ? 0 : mapYear(first, chronology) - first;
}

/** A period's window in one count (the windows are written in the Hebrew count). */
export function periodIn(id: string, chronology: Chronology): readonly [number, number] | undefined {
  const window = PERIODS[id];
  if (window === undefined) return undefined;
  return [mapYear(window[0], chronology), mapYear(window[1], chronology)];
}

/** The year a verse ("2KI 18:1") tells of, when the chapter is narrative (in the count asked for). */
export function chapterYear(ref: string, chronology: Chronology = 'mt'): number | null {
  const [code, place] = ref.split(' ');
  const chapter = Number(place?.split(':')[0]);
  for (const [book, from, to, y0, y1] of CHAPTERS) {
    if (book !== code || chapter < from || chapter > to) continue;
    return mapYear(to === from ? y0 : Math.round(y0 + ((y1 - y0) * (chapter - from)) / (to - from)), chronology);
  }
  return null;
}

/** Nations named by TIPNR, by the son of Noah the Table of Nations (Genesis 10) traces them to. */
const NATION_LINE: Readonly<Record<string, LineId>> = {
  Edom: 'shem', Arabia: 'shem', Ammon: 'shem', Moab: 'shem', Syria: 'shem', Mesopotamia: 'shem', Assyria: 'shem', Persia: 'shem', Persian: 'shem', Midian: 'shem',
  Canaan: 'ham', Egypt: 'ham', Philistia: 'ham', Cush: 'ham', Sinai: 'shem', Italy: 'nations',
};

/** Ancestors whose descendants take a line; checked from the person upward, nearest first. */
const LINE_ROOTS: Readonly<Record<string, LineId>> = {
  'Israel@Gen.25.26-Rev': 'israel',
  'Shem@Gen.5.32-Luk': 'shem',
  'Ham@Gen.5.32-1Ch': 'ham',
  'Japheth@Gen.5.32-1Ch': 'japheth',
  'Cain@Gen.4.1-Jud': 'cain',
  'Seth@Gen.4.25-Luk': 'seth',
  'Adam@Gen.2.19-Jud': 'seth',
};

/** TIPNR's description of someone with no family links ("Edomite living at…", "Pharaoh…"). */
const KIND_LINE: Readonly<Record<string, LineId>> = {
  Edomite: 'shem', Arabian: 'shem', Moabite: 'shem', Ammonite: 'shem', Syrian: 'shem', Ishmaelite: 'shem', Midianite: 'shem', Persian: 'shem',
  Egyptian: 'ham', Pharaoh: 'ham', Emperor: 'nations', Tetrarch: 'nations', Governor: 'nations', Giant: 'nations', King: 'nations', Queen: 'nations', Ruler: 'nations',
};

const JESUS = 'Jesus@Isa.7.14-Rev';

export interface PlaceInput {
  readonly raw: readonly RawPerson[];
  readonly core: readonly CorePerson[];
}

/** The ancestors of Christ, through Joseph and through Mary's line in Luke (Heli), up to Adam: the line of promise. */
export function promiseLine(raw: readonly RawPerson[]): Set<string> {
  const byKey = new Map(raw.map((person) => [person.k, person]));
  const line = new Set<string>([JESUS]);
  const queue = [JESUS];
  while (queue.length > 0) {
    const person = byKey.get(queue.pop()!);
    for (const parent of [person?.f, person?.anc]) {
      if (parent === undefined || line.has(parent)) continue;
      line.add(parent);
      queue.push(parent);
    }
  }
  const mary = raw.find((person) => person.k.startsWith('Mary@Mat.1.16'));
  if (mary) line.add(mary.k);
  return line;
}

/** The line a person is drawn in. */
export function lineOf(key: string, raw: ReadonlyMap<string, RawPerson>, promise: ReadonlySet<string>, core: ReadonlyMap<string, CorePerson>): LineId {
  if (promise.has(key)) return 'promise';
  const hand = core.get(key);
  if (hand?.line) return hand.line;
  if (LINE_ROOTS[key] !== undefined && key !== 'Adam@Gen.2.19-Jud') return LINE_ROOTS[key]!;
  const seen = new Set<string>();
  const up = [key];
  while (up.length > 0) {
    const current = up.shift()!;
    if (seen.has(current)) continue;
    seen.add(current);
    const root = LINE_ROOTS[current];
    if (root !== undefined && current !== key) return root;
    const written = core.get(current);
    if (written?.line && current !== key) return written.line;
    const person = raw.get(current);
    for (const next of [person?.f, person?.anc, person?.m, written?.parent]) if (next !== undefined) up.push(next);
  }
  const person = raw.get(key);
  if (person?.t?.startsWith('Tribe of') || person?.t?.startsWith('>Tribe') || person?.t === 'Israel') return 'israel';
  const nation = person?.t === undefined ? undefined : NATION_LINE[person.t];
  if (nation !== undefined) return nation;
  const kind = person?.d === undefined ? undefined : KIND_LINE[person.d];
  if (kind !== undefined) return kind;
  // Without family or nation: in the Old Testament most people named are Israelites; in the New, many are Greeks
  // and Romans, so they are left among the nations.
  if (person?.e === 'nt' || person?.e === 'primeval') return 'nations';
  return 'israel';
}

interface Draft {
  born: number | null;
  died: number | null;
  start: number;
  end: number;
  basis: DateBasis;
  approx: boolean;
  fixed: boolean;
}

/** Keeps a year inside a period; people pushed in from outside are spread over its first or last decades. */
const clamp = (value: number, [low, high]: readonly [number, number], key = ''): number => {
  if (value < low) return low + Math.abs(jitter(key, 40));
  if (value > high) return high - Math.abs(jitter(key, 40));
  return value;
};

/** Dates for everyone, in one count. */
export function placeDates(input: PlaceInput, chronology: Chronology): Map<string, Draft> {
  const drafts = new Map<string, Draft>();
  const primeval = primevalDates(chronology);
  for (const person of input.core) {
    const dates = primeval.get(person.key);
    if (agesOf(chronology) === 'mt' && IN_SEPTUAGINT_ONLY.has(person.key)) continue;
    const shift = shiftFor(person, chronology);
    const born = dates?.born ?? (person.born === undefined ? null : person.born + shift);
    const died = dates?.died ?? (person.died === undefined ? null : person.died + shift);
    const office = person.office ? { from: person.office.from + shift, to: person.office.to + shift } : undefined;
    const start = born ?? office?.from ?? died! - 40;
    const end = died ?? office?.to ?? (born! + 60);
    drafts.set(person.key, { born, died, start: Math.min(start, office?.from ?? start), end: Math.max(end, office?.to ?? end), basis: person.basis, approx: person.approx === true, fixed: true });
  }

  const byKey = new Map(input.raw.map((person) => [person.k, person]));
  const siblingsOf = (person: RawPerson): string[] => [person.f, person.m].flatMap((parent) => (parent ? (byKey.get(parent)?.c ?? []) : [])).filter((key) => key !== person.k);
  const estimate = (born: number): Draft => {
    const life = generation(born, chronology).life;
    return { born, died: null, start: born, end: born + life, basis: 'estimate', approx: true, fixed: false };
  };

  // Spread outward from the dated people, one family step at a time, so the nearest relative decides.
  let frontier = [...drafts.keys()];
  while (frontier.length > 0) {
    const next: string[] = [];
    for (const key of frontier) {
      const known = drafts.get(key)!;
      const person = byKey.get(key);
      if (person === undefined || known.born === null && known.start === undefined) continue;
      const born = known.born ?? known.start;
      const { gap } = generation(born, chronology);
      const relatives: [string | undefined, number][] = [
        ...(person.c ?? []).map((child) => [child, born + gap] as [string, number]),
        [person.f, born - gap],
        [person.m, born - gap + 3],
        ...(person.w ?? []).map((partner) => [partner, born + (person.s === 'm' ? 5 : -5)] as [string, number]),
        ...siblingsOf(person).map((sibling) => [sibling, born + 2] as [string, number]),
      ];
      for (const [relative, year] of relatives) {
        if (relative === undefined || drafts.has(relative) || !byKey.has(relative)) continue;
        if (agesOf(chronology) === 'mt' && IN_SEPTUAGINT_ONLY.has(relative)) continue;
        // The Table of Nations (Genesis 10) is "patriarchs" in TIPNR, but lived before Abraham: not pulled into his time.
        const before = year < abrahamBorn(chronology) - 100;
        const period = before ? undefined : periodIn(byKey.get(relative)!.e ?? '', chronology);
        const spread = year + jitter(relative, Math.max(3, Math.round(gap / 5)));
        drafts.set(relative, estimate(period ? clamp(spread, period, relative) : spread));
        next.push(relative);
      }
    }
    frontier = next;
  }

  // Everyone left: by the chapter where they first appear, inside their period; else the middle of the period.
  for (const person of input.raw) {
    if (drafts.has(person.k)) continue;
    if (agesOf(chronology) === 'mt' && IN_SEPTUAGINT_ONLY.has(person.k)) continue;
    const period = periodIn(person.e ?? '', chronology);
    const told = person.r.map((ref) => chapterYear(ref, chronology)).find((year): year is number => year !== null);
    let year: number;
    if (told !== undefined) year = told - 30 + jitter(person.k, 14);
    else if (period) year = Math.round((period[0] + period[1]) / 2) + jitter(person.k, Math.round((period[1] - period[0]) / 3));
    else year = landmarks(chronology).creation + 200;
    drafts.set(person.k, estimate(period ? clamp(year, period, person.k) : year));
  }
  return drafts;
}

/**
 * Lanes: people with known dates first (so they form the inner rings), the line of promise first among them, then the
 * other lines in turn, the most important people first; estimated people after them, line by line; each person takes the lowest lane free for the whole of their bar (with a small gap).
 */
export const LINE_ORDER: readonly LineId[] = ['promise', 'seth', 'cain', 'israel', 'shem', 'ham', 'japheth', 'nations'];

export function assignLanes(placed: Placed[], weight: (key: string) => number, unit: (year: number) => number, pad: number): void {
  const order = [...placed].sort(
    (a, b) =>
      Number(a.basis === 'estimate') - Number(b.basis === 'estimate') ||
      LINE_ORDER.indexOf(a.line) - LINE_ORDER.indexOf(b.line) ||
      weight(b.key) - weight(a.key) ||
      a.start - b.start,
  );
  const lanes: { start: number; end: number }[][] = [];
  for (const person of order) {
    const start = unit(person.start);
    const end = Math.max(unit(person.end), start + pad);
    let lane = 0;
    for (; ; lane++) {
      const taken = (lanes[lane] ??= []);
      if (!taken.some((bar) => start < bar.end + pad && bar.start < end + pad)) {
        taken.push({ start, end });
        break;
      }
    }
    person.lane = lane;
  }
}

/** Everyone placed, in one count. */
export function placeAll(input: PlaceInput, chronology: Chronology, unit: (year: number) => number, pad: number): Placed[] {
  const rawByKey = new Map(input.raw.map((person) => [person.k, person]));
  const coreByKey = new Map(input.core.map((person) => [person.key, person]));
  const promise = promiseLine(input.raw);
  const drafts = placeDates(input, chronology);
  const placed: Placed[] = [...drafts].map(([key, draft]) => ({
    key,
    start: draft.start,
    end: Math.max(draft.end, draft.start + 1),
    born: draft.born,
    died: draft.died,
    basis: draft.basis,
    approx: draft.approx,
    line: lineOf(key, rawByKey, promise, coreByKey),
    lane: 0,
  }));
  const weight = (key: string): number => (coreByKey.has(key) ? 100000 : 0) + (rawByKey.get(key)?.v ?? 0);
  assignLanes(placed, weight, unit, pad);
  return placed;
}
