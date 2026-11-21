import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { loadBook } from '../../lib/bible.ts';
import { parsePassages } from '../../lib/topics/reference.ts';
import { chapterYear, jitter, lineOf, placeAll, promiseLine, type RawPerson } from '../../lib/bible-history/place.ts';
import { fromU, line, makeScale, toU } from '../../lib/bible-history/scale.ts';
import { ui } from '../../lib/bible-history/ui.ts';
import { CORE, CORE_BY_KEY, EVIDENCE } from './index.ts';
import { landmarks, mapYear, primevalDates, UNDATED_END } from './primeval.ts';
import { WORLD } from './world.ts';

const ROOT = join(import.meta.dirname, '../../../../..');
const BIBLE_BUILT = existsSync(join(ROOT, 'data/bible/build/manifest.json'));
const RAW = JSON.parse(readFileSync(join(ROOT, 'data/bible-people/people.json'), 'utf8')) as RawPerson[];
const AR_NAMES = JSON.parse(readFileSync(join(ROOT, 'data/bible-people/names-ar.json'), 'utf8')) as Record<string, string>;
const KEYS = new Set(RAW.map((person) => person.k));
const ARTICLES = new Set(readdirSync(join(import.meta.dirname, '../apologetics/articles')).map((name) => name.replace(/\.ts$/, '')));
const ARABIC = /[؀-ۿ]/;
const LATIN = /[A-Za-z]/;

const bilingual = (where: string, text: { en: string; ar: string } | undefined): void => {
  if (text === undefined) return;
  expect(text.en.trim(), `${where}: English`).not.toBe('');
  expect(ARABIC.test(text.ar), `${where}: Arabic missing in "${text.en}"`).toBe(true);
  expect(ARABIC.test(text.en), `${where}: Arabic inside English "${text.en}"`).toBe(false);
  expect(LATIN.test(text.ar), `${where}: Latin letters inside Arabic "${text.ar}"`).toBe(false);
};

describe('the people written by hand', () => {
  it('have unique keys that STEPBible knows (or "x:" keys)', () => {
    expect(new Set(CORE.map((person) => person.key)).size).toBe(CORE.length);
    for (const person of CORE) expect(KEYS.has(person.key) || person.key.startsWith('x:'), person.key).toBe(true);
  });

  it('are written in both languages', () => {
    for (const person of CORE) {
      for (const field of ['name', 'role', 'summary', 'dating'] as const) bilingual(`${person.key}.${field}`, person[field]);
      bilingual(`${person.key}.office`, person.office?.title);
    }
  });

  it('have dates that make sense', () => {
    for (const person of CORE) {
      const years = [person.born, person.died, person.office?.from, person.office?.to].filter((year): year is number => year !== undefined);
      expect(years.length, `${person.key}: no dates`).toBeGreaterThan(0);
      for (const year of years) {
        expect(year, `${person.key}: year 0`).not.toBe(0);
        expect(year, person.key).toBeGreaterThan(-6000);
        expect(year, person.key).toBeLessThan(150);
      }
      if (person.born !== undefined && person.died !== undefined) expect(person.born, `${person.key}: dies before birth`).toBeLessThanOrEqual(person.died);
      if (person.office) expect(person.office.from, `${person.key}: office`).toBeLessThanOrEqual(person.office.to);
    }
  });

  it('give passages that can be read, and link to questions that exist', () => {
    for (const person of CORE) {
      expect(parsePassages(person.refs).length, person.key).toBeGreaterThan(0);
      for (const id of person.questions ?? []) expect(ARTICLES.has(id), `${person.key}: ${id}`).toBe(true);
      if (person.parent !== undefined) expect(KEYS.has(person.parent) || CORE_BY_KEY.has(person.parent), `${person.key}: parent`).toBe(true);
    }
  });

  it.skipIf(!BIBLE_BUILT)('cite chapters the Bible reader has', () => {
    for (const person of CORE) {
      for (const range of parsePassages(person.refs)) {
        const book = loadBook('kjv', range.book).chapters.length > 0 ? loadBook('kjv', range.book) : loadBook('lxx', range.book);
        expect(range.to.chapter, `${person.key}: ${person.refs}`).toBeLessThanOrEqual(book.chapters.length);
      }
    }
  });
});

describe('the evidence outside the Bible', () => {
  it('names known people, in both languages, with a source', () => {
    expect(new Set(EVIDENCE.map((item) => item.id)).size).toBe(EVIDENCE.length);
    for (const item of EVIDENCE) {
      for (const field of ['title', 'date', 'says', 'found', 'now', 'note'] as const) bilingual(`${item.id}.${field}`, item[field]);
      expect(item.people.length, item.id).toBeGreaterThan(0);
      for (const key of item.people) expect(KEYS.has(key) || CORE_BY_KEY.has(key), `${item.id}: ${key}`).toBe(true);
      expect(item.links.length, item.id).toBeGreaterThan(0);
      for (const link of item.links) expect(link.url, item.id).toMatch(/^https:\/\//);
      if (item.question !== undefined) expect(ARTICLES.has(item.question), `${item.id}: ${item.question}`).toBe(true);
    }
  });
});

describe('the STEPBible people', () => {
  it('all have an Arabic name with no Latin letters', () => {
    for (const person of RAW) {
      const name = AR_NAMES[person.k];
      expect(name, person.k).toBeDefined();
      expect(ARABIC.test(name!), `${person.k}: ${name}`).toBe(true);
      expect(LATIN.test(name!), `${person.k}: ${name}`).toBe(false);
    }
  });

  it('link only to people in the list', () => {
    for (const person of RAW) for (const key of [person.f, person.m, ...(person.c ?? []), ...(person.w ?? [])]) if (key !== undefined) expect(KEYS.has(key), `${person.k} → ${key}`).toBe(true);
  });
});

describe('the count from Adam to Abraham', () => {
  it('follows the Septuagint and the Hebrew numbers', () => {
    const lxx = landmarks('lxx');
    const mt = landmarks('mt');
    // Abraham is born in AM 3474 (Septuagint, Terah 130) and AM 2008 (Hebrew); in 1951 BC with 215 years in Egypt
    // (Septuagint, Exodus 12:40) and in 2166 BC with 430 (Hebrew), both counted back from the Exodus in 1446 BC.
    expect(lxx.abraham).toBe(-1951);
    expect(mt.abraham).toBe(-2166);
    expect(lxx.egypt - mt.egypt).toBe(215);
    expect(lxx.creation).toBe(-5425);
    expect(mt.creation).toBe(-4174);
    // The Flood: AM 2242 (Septuagint), AM 1656 (Hebrew).
    expect(line(lxx.flood) - line(lxx.creation)).toBe(2242);
    expect(line(mt.flood) - line(mt.creation)).toBe(1656);
    expect(primevalDates('mt').has('Cainan@Luk.3.36')).toBe(false);
    expect(primevalDates('lxx').get('Adam@Gen.2.19-Jud')).toEqual({ born: -5425, died: -4495 });
    // In the Hebrew count Shem is alive when Abraham is born; in the Septuagint count he is not.
    expect(primevalDates('mt').get('Shem@Gen.5.32-Luk')!.died!).toBeGreaterThan(mt.abraham);
    expect(primevalDates('lxx').get('Shem@Gen.5.32-Luk')!.died!).toBeLessThan(lxx.abraham - 700);
  });
});

describe('the documented-history count', () => {
  it('leaves Adam to Terah undated and fits Abraham, the Exodus and the judges to history', () => {
    const hist = landmarks('hist');
    expect(hist.undated).toBe(UNDATED_END);
    for (const dates of primevalDates('hist').values()) expect(dates.died ?? dates.born).toBeLessThan(UNDATED_END);
    expect(primevalDates('hist').has('Abraham@Gen.11.26-1Pe')).toBe(false);
    expect(hist.abraham).toBe(-1980);
    expect(hist.egypt).toBe(-1690);
    expect(hist.exodus).toBe(-1260);
    expect(hist.conquest).toBe(-1220);
    // The judges are squeezed into 1220–1050 BC, and from Saul on every count agrees.
    expect(mapYear(-1200, 'hist')).toBeGreaterThan(-1220);
    expect(mapYear(-1050, 'hist')).toBe(-1050);
    expect(mapYear(-586, 'hist')).toBe(-586);
  });
});

describe('the events of documented history', () => {
  it('are in order, in both languages, and say how they are dated', () => {
    for (const [i, event] of WORLD.entries()) {
      bilingual(`world.${event.year}.name`, event.name);
      bilingual(`world.${event.year}.note`, event.note);
      expect(event.year).not.toBe(0);
      expect(event.basis.trim()).not.toBe('');
      expect(event.source.startsWith('https://'), event.source).toBe(true);
      if (i > 0) expect(event.year).toBeGreaterThanOrEqual(WORLD[i - 1]!.year);
    }
  });
});

describe('the time scale', () => {
  it('runs from creation to the end of the apostolic age and inverts', () => {
    for (const chronology of ['hist', 'lxx', 'mt'] as const) {
      const { creation } = landmarks(chronology);
      const scale = makeScale(landmarks(chronology));
      expect(scale.shares.reduce((a, b) => a + b, 0)).toBeCloseTo(1, 9);
      expect(toU(scale, creation)).toBeCloseTo(0, 9);
      expect(toU(scale, 100)).toBeCloseTo(1, 9);
      for (const year of [-3000, -1446, -586, -5, 33]) expect(fromU(scale, toU(scale, year))).toBeCloseTo(line(year), 6);
      expect(toU(scale, -1000)).toBeLessThan(toU(scale, -999));
    }
  });
});

describe('placing everyone', () => {
  const unit = (chronology: 'hist' | 'lxx' | 'mt') => {
    const scale = makeScale(landmarks(chronology));
    return (year: number): number => toU(scale, year);
  };
  const placed = placeAll({ raw: RAW, core: CORE }, 'lxx', unit('lxx'), 0.0015);
  const placedMt = placeAll({ raw: RAW, core: CORE }, 'mt', unit('mt'), 0.0015);
  const mtByKey = new Map(placedMt.map((person) => [person.key, person]));
  const byKey = new Map(placed.map((person) => [person.key, person]));

  it('places every STEPBible person and every person written by hand', () => {
    for (const person of RAW) expect(byKey.has(person.k), person.k).toBe(true);
    for (const person of CORE) expect(byKey.has(person.key), person.key).toBe(true);
  });

  it('keeps hand-written dates and marks the rest as estimates', () => {
    expect(byKey.get('Abraham@Gen.11.26-1Pe')).toMatchObject({ born: -1951, died: -1776, basis: 'text' });
    expect(mtByKey.get('Abraham@Gen.11.26-1Pe')).toMatchObject({ born: -2166, died: -1991, basis: 'text' });
    const unknown = RAW.find((person) => !CORE_BY_KEY.has(person.k) && person.k.startsWith('Abagtha@'))!;
    expect(byKey.get(unknown.k)!.basis).toBe('estimate');
  });

  it('in the documented-history count, moves the patriarchs and the Exodus generation 186 years later', () => {
    const histByKey = new Map(placeAll({ raw: RAW, core: CORE }, 'hist', unit('hist'), 0.0015).map((person) => [person.key, person]));
    for (const key of ['Israel@Gen.25.26-Rev', 'Moses@Exo.2.10-Rev']) expect(histByKey.get(key)!.born! - mtByKey.get(key)!.born!, key).toBe(186);
    expect(histByKey.get('David@Rut.4.17-Rev')!.born).toBe(mtByKey.get('David@Rut.4.17-Rev')!.born);
  });

  it('moves the patriarchs with the stay in Egypt, but not the generation of the Exodus', () => {
    for (const key of ['Israel@Gen.25.26-Rev', 'Joseph@Gen.30.24-Rev']) expect(byKey.get(key)!.born! - mtByKey.get(key)!.born!, key).toBe(215);
    for (const key of ['Moses@Exo.2.10-Rev', 'David@Rut.4.17-Rev', 'Jesus@Isa.7.14-Rev']) expect(byKey.get(key)!.born, key).toBe(mtByKey.get(key)!.born);
  });

  it('never puts two bars in one lane at the same time', () => {
    const lanes = new Map<number, [number, number][]>();
    for (const person of placed) (lanes.get(person.lane) ?? lanes.set(person.lane, []).get(person.lane)!).push([person.start, person.end]);
    for (const bars of lanes.values()) {
      bars.sort((a, b) => a[0] - b[0]);
      for (let i = 1; i < bars.length; i++) expect(bars[i]![0]).toBeGreaterThan(bars[i - 1]![1]);
    }
  });

  it('draws the line of promise from Adam to Christ, and the sons of Jacob as Israel', () => {
    const promise = promiseLine(RAW);
    for (const key of ['Adam@Gen.2.19-Jud', 'Noah@Gen.5.29-2Pe', 'Abraham@Gen.11.26-1Pe', 'David@Rut.4.17-Rev', 'Jesus@Isa.7.14-Rev']) expect(promise.has(key), key).toBe(true);
    const raw = new Map(RAW.map((person) => [person.k, person]));
    expect(lineOf('Levi@Gen.29.34-Rev', raw, promise, CORE_BY_KEY)).toBe('israel');
    expect(lineOf('Cain@Gen.4.1-Jud', raw, promise, CORE_BY_KEY)).toBe('cain');
    expect(lineOf('Nimrod@Gen.10.8-Mic', raw, promise, CORE_BY_KEY)).toBe('ham');
    expect(lineOf('Ishmael@Gen.16.11-Psa', raw, promise, CORE_BY_KEY)).toBe('shem');
  });

  it('reads chapters as years, and spreads lists without moving them far', () => {
    expect(chapterYear('2KI 18:1')).toBe(-715);
    expect(chapterYear('1CH 3:1')).toBeNull();
    for (const key of ['a', 'b', 'Zaccur@Ezr.8.14']) expect(Math.abs(jitter(key, 10))).toBeLessThanOrEqual(10);
  });
});

describe('the page text', () => {
  it('exists in both languages', () => {
    const en = ui('en');
    const ar = ui('ar');
    for (const key of Object.keys(en) as (keyof typeof en)[]) {
      expect(en[key].trim(), key).not.toBe('');
      expect(ARABIC.test(ar[key]), `${key}: ${ar[key]}`).toBe(true);
      expect(LATIN.test(ar[key].replace(/{[a-z]}/g, '')), `${key}: ${ar[key]}`).toBe(false);
    }
  });
});
