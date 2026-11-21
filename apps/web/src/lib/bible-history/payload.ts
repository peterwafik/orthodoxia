/**
 * The Bible history chart in one language, ready for the page's script: every person placed in both counts
 * (Septuagint and Hebrew), with their name, line, dates and the basis of the dates, family, passages and evidence.
 * Served as `/en/bible-history.json` and `/ar/bible-history.json`.
 */
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { BOOKS, DEFAULT_EDITION } from '@orthodoxia/bible';
import { CORE, CORE_BY_KEY, EVIDENCE } from '../../data/bible-history/index.ts';
import { CHRONOLOGIES, DEFAULT_CHRONOLOGY, landmarks, type Chronology } from '../../data/bible-history/primeval.ts';
import { QUESTION_BY_ID } from '../../data/apologetics/questions.ts';
import { apoPath } from '../apologetics/index.ts';
import { evidenceRefs } from '../topics/evidence.ts';
import { localePath, type Locale } from '../../i18n/index.ts';
import { LINE_ORDER, placeAll, shiftFor, type Placed, type RawPerson } from './place.ts';
import { makeScale, toU } from './scale.ts';
import { BASIS_NAMES, CERTAINTY_NAMES, CHART_PERIODS, KIND_NAMES, LINE_NAMES, PERIOD_NAMES, tribeName } from './ui.ts';
import { WORLD } from '../../data/bible-history/world.ts';

const find = (name: string): string => {
  const candidates = [resolve(process.cwd(), '../../data/bible-people', name), resolve(process.cwd(), 'data/bible-people', name), resolve(import.meta.dirname, '../../../../../data/bible-people', name)];
  const found = candidates.find((path) => existsSync(path));
  if (found === undefined) throw new Error(`data/bible-people/${name} not found (run scripts/bible-people/build.ts)`);
  return found;
};

let rawCache: RawPerson[] | null = null;
export function loadPeople(): RawPerson[] {
  rawCache ??= JSON.parse(readFileSync(find('people.json'), 'utf8')) as RawPerson[];
  return rawCache;
}
let arCache: Record<string, string> | null = null;
export function loadArabicNames(): Record<string, string> {
  arCache ??= JSON.parse(readFileSync(find('names-ar.json'), 'utf8')) as Record<string, string>;
  return arCache;
}

/** The smallest gap between two bars in one lane, as a share of the chart. */
export const LANE_PAD = 0.0015;

const placedCache = new Map<Chronology, Placed[]>();
export function placed(chronology: Chronology): Placed[] {
  let result = placedCache.get(chronology);
  if (result === undefined) {
    const scale = makeScale(landmarks(chronology));
    result = placeAll({ raw: loadPeople(), core: CORE }, chronology, (year) => toU(scale, year), LANE_PAD);
    placedCache.set(chronology, result);
  }
  return result;
}

/** A display name: TIPNR's placeholders ("daughter_of_Lot", "Unnamed#3") made readable. */
export function displayName(raw: RawPerson, locale: Locale): string {
  const hand = CORE_BY_KEY.get(raw.k);
  if (hand !== undefined) return hand.name[locale];
  if (locale === 'ar') {
    const name = loadArabicNames()[raw.k] ?? raw.n;
    return name.replace(/\s+(الأول|الثاني|الثالث|الرابع|الخامس|السادس|السابع|الثامن|التاسع|العاشر)$/, '');
  }
  if (/^Unnamed#?\d*$/i.test(raw.n)) return 'Unnamed';
  return raw.n
    .replace(/^an?_/, '')
    .replace(/(\d)_of_/, ' of ')
    .replace(/_/g, ' ')
    .replace(/^(daughter|son|father|mother|wife|husband|brother|sister)\d? /, (word) => word.charAt(0).toUpperCase() + word.slice(1).replace(/\d/, ''))
    .replace(/^([a-z])/, (letter) => letter.toUpperCase());
}

/** "GEN 5:3" → [book code, chapter, verse]. */
const splitRef = (ref: string): [string, number, number] => {
  const [code, place] = ref.split(' ') as [string, string];
  const [chapter, verse] = place.split(':').map(Number) as [number, number];
  return [code, chapter, verse];
};

export interface PayloadPerson {
  /** TIPNR key (or "x:" key), used in the address. */ i: string;
  /** Name. */ n: string;
  /** 'm' | 'f'. */ s: string;
  /** Line index (LINE_ORDER). */ l: number;
  /** Documented-history count (the default): [start, end, lane, born | null, died | null]. */ a: (number | null)[];
  /** Septuagint and Hebrew counts, when different from `a`; `null` when the person is not in that count. */ lx?: (number | null)[] | null; h?: (number | null)[] | null;
  /** Basis index (BASIS keys), 1 = approximate. */ b: number; x: number;
  /** Written by hand. */ c?: 1;
  /** Office: [from, to, title] in the default count; [from, to] in the Septuagint and Hebrew counts when different. */ o?: [number, number, string]; ol?: [number, number]; om?: [number, number];
  /** Role and summary, dating note. */ r?: string; m?: string; d?: string;
  /** Passages: [label, href][] for hand-written people; raw refs ("GEN 5:3") otherwise. */ p?: [string, string][]; v?: string[];
  /** Verses that name the person. */ k: number;
  /** Family (indices). */ f?: number; mo?: number; w?: number[]; ch?: number[];
  /** Period, tribe or people. */ e?: string; t?: string;
  /** STEPBible's English description. */ sb?: string;
  /** Evidence indices; Faith & Evidence links. */ ev?: number[]; q?: [string, string][];
}

export function buildPayload(locale: Locale): Record<string, unknown> {
  const raw = loadPeople();
  const base = placed(DEFAULT_CHRONOLOGY);
  const baseBy = new Map(base.map((person) => [person.key, person]));
  const lxxBy = new Map(placed('lxx').map((person) => [person.key, person]));
  const mtBy = new Map(placed('mt').map((person) => [person.key, person]));
  // Every placed person: TIPNR people, then hand-written people TIPNR does not have.
  const rawBy = new Map(raw.map((person) => [person.k, person]));
  const keys = base.map((person) => person.key);
  const index = new Map(keys.map((key, i) => [key, i]));
  const basisKeys = Object.keys(BASIS_NAMES);
  const evidenceFor = new Map<string, number[]>();
  EVIDENCE.forEach((item, i) => item.people.forEach((key) => evidenceFor.set(key, [...(evidenceFor.get(key) ?? []), i])));

  const row = (person: Placed | undefined): (number | null)[] | null =>
    person === undefined ? null : [person.start, person.end, person.lane, person.born, person.died];

  const people: PayloadPerson[] = keys.map((key) => {
    const placedBase = baseBy.get(key)!;
    const rawPerson: RawPerson = rawBy.get(key) ?? { k: key, n: key.replace(/^x:/, ''), s: 'm', v: 0, r: [] };
    const hand = CORE_BY_KEY.get(key);
    const a = row(placedBase)!;
    const lx = row(lxxBy.get(key));
    const h = row(mtBy.get(key));
    const out: PayloadPerson = {
      i: key,
      n: displayName(rawPerson, locale),
      s: rawPerson.s,
      l: LINE_ORDER.indexOf(placedBase.line),
      a,
      b: basisKeys.indexOf(placedBase.basis),
      x: placedBase.approx ? 1 : 0,
      k: rawPerson.v,
    };
    const differs = (other: (number | null)[] | null): boolean => other === null || other.some((value, i) => value !== a[i]);
    if (differs(lx)) out.lx = lx;
    if (differs(h)) out.h = h;
    if (hand !== undefined) {
      out.c = 1;
      out.r = hand.role[locale];
      out.m = hand.summary[locale];
      if (hand.dating) out.d = hand.dating[locale];
      if (hand.office) {
        const span = (chronology: Chronology): [number, number] => {
          const shift = shiftFor(hand, chronology);
          return [hand.office!.from + shift, hand.office!.to + shift];
        };
        const main = span(DEFAULT_CHRONOLOGY);
        out.o = [main[0], main[1], hand.office.title[locale]];
        const [ol, om] = [span('lxx'), span('mt')];
        if (ol[0] !== main[0] || ol[1] !== main[1]) out.ol = ol;
        if (om[0] !== main[0] || om[1] !== main[1]) out.om = om;
      }
      out.p = evidenceRefs(hand.refs, locale).map(({ label, href }) => [label, href]);
      const questions = (hand.questions ?? []).flatMap((id) => {
        const question = QUESTION_BY_ID.get(id);
        return question === undefined ? [] : [[question.title[locale], apoPath(locale, `questions/${question.slug}`)] as [string, string]];
      });
      if (questions.length > 0) out.q = questions;
    }
    if (rawPerson.r.length > 0) out.v = rawPerson.r.slice(0, hand ? 12 : 10) as string[];
    const link = (other: string | undefined): number | undefined => (other === undefined ? undefined : index.get(other));
    const father = link(rawPerson.f ?? hand?.parent);
    if (father !== undefined) out.f = father;
    const mother = link(rawPerson.m);
    if (mother !== undefined) out.mo = mother;
    const partners = (rawPerson.w ?? []).map(link).filter((i): i is number => i !== undefined);
    if (partners.length > 0) out.w = partners;
    const children = (rawPerson.c ?? []).map(link).filter((i): i is number => i !== undefined);
    if (children.length > 0) out.ch = children;
    if (rawPerson.e) out.e = PERIOD_NAMES[rawPerson.e === 'conquest' ? 'judges' : rawPerson.e]?.[locale] ?? '';
    const tribe = tribeName(rawPerson.t, locale);
    if (tribe) out.t = tribe;
    if (locale === 'en' && rawPerson.b && hand === undefined) out.sb = rawPerson.b;
    const evidence = evidenceFor.get(key);
    if (evidence) out.ev = evidence;
    return out;
  });
  // Hand-written children of "x:" people.
  for (const [i, key] of keys.entries()) {
    const parent = CORE_BY_KEY.get(key)?.parent;
    const at = parent === undefined ? undefined : index.get(parent);
    if (at !== undefined && !(people[at]!.ch ?? []).includes(i)) people[at]!.ch = [...(people[at]!.ch ?? []), i];
  }

  const edition = DEFAULT_EDITION[locale];
  const books = Object.fromEntries(BOOKS.map((book) => [book.code, [book.slug, locale === 'ar' ? book.ar : book.en]]));

  return {
    locale,
    count: people.length,
    counts: Object.fromEntries(CHRONOLOGIES.map((chronology) => [chronology, landmarks(chronology)])),
    lines: LINE_ORDER.map((id) => ({ id, name: LINE_NAMES[id][locale], color: LINE_NAMES[id].color, dark: LINE_NAMES[id].dark })),
    periods: CHART_PERIODS.map((period) => ({ id: period.id, name: PERIOD_NAMES[period.id]![locale], from: period.from })),
    marks: WORLD.map((event) => ({ year: event.year, name: event.name[locale], note: event.note[locale], basis: event.basis, region: event.region, source: event.source })),
    basis: basisKeys.map((key) => BASIS_NAMES[key as keyof typeof BASIS_NAMES][locale]),
    bible: { base: localePath(locale, `bible/${edition}`), books },
    people,
    evidence: EVIDENCE.map((item) => {
      const question = item.question === undefined ? undefined : QUESTION_BY_ID.get(item.question);
      return {
        t: item.title[locale],
        k: KIND_NAMES[item.kind][locale],
        d: item.date[locale],
        fo: item.found?.[locale] ?? '',
        no: item.now?.[locale] ?? '',
        s: item.says[locale],
        c: item.certainty,
        cn: CERTAINTY_NAMES[item.certainty][locale],
        nt: item.note?.[locale] ?? '',
        li: item.links.map((link) => [link.title, link.url]),
        q: question === undefined ? null : [question.title[locale], apoPath(locale, `questions/${question.slug}`)],
        p: item.people.map((key) => index.get(key)).filter((i): i is number => i !== undefined),
      };
    }),
  };
}

export { splitRef };
