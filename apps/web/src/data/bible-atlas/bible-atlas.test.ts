import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { QUESTION_BY_ID } from '../apologetics/questions.ts';
import { loadBook } from '../../lib/bible.ts';
import { parsePassages } from '../../lib/topics/reference.ts';
import { ERAS, ERA_BY_ID } from './eras.ts';
import { JOURNEYS } from './journeys.ts';
import { PLACES, PLACE_BY_ID } from './places.ts';

const ROOT = join(import.meta.dirname, '../../../../..');
const BIBLE_BUILT = existsSync(join(ROOT, 'data/bible/build/manifest.json'));
const OB = JSON.parse(readFileSync(join(ROOT, 'data/atlas/places.json'), 'utf8')) as { id: string; k: number; v: string[]; x: number; y: number }[];
const OB_IDS = new Set(OB.map((place) => place.id));

const ARABIC = /[؀-ۿ]/;
const everyRef = (): { where: string; ref: string }[] => [
  ...PLACES.flatMap((place) => place.events.map((event) => ({ where: `${place.id}: ${event.title.en}`, ref: event.ref }))),
  ...JOURNEYS.flatMap((journey) => journey.stops.map((stop) => ({ where: `${journey.id}: ${stop.place}`, ref: stop.ref }))),
];

describe('the atlas places', () => {
  it('have unique ids and sensible coordinates', () => {
    expect(new Set(PLACES.map((place) => place.id)).size).toBe(PLACES.length);
    for (const place of PLACES) {
      expect(place.lat, place.id).toBeGreaterThan(-90);
      expect(place.lat, place.id).toBeLessThan(90);
      expect(place.lon, place.id).toBeGreaterThan(-180);
      expect(place.lon, place.id).toBeLessThan(180);
    }
  });

  it('are written in both languages', () => {
    for (const place of PLACES) {
      for (const text of [place.name, place.summary, place.modern, place.note, ...place.events.map((event) => event.title)]) {
        if (text === undefined) continue;
        expect(ARABIC.test(text.ar), `${place.id}: Arabic missing in "${text.en}"`).toBe(true);
        expect(ARABIC.test(text.en), `${place.id}: Arabic inside English "${text.en}"`).toBe(false);
      }
      expect(place.events.length, place.id).toBeGreaterThan(0);
    }
  });

  it('use known eras, OpenBible ids and Faith & Evidence questions', () => {
    for (const place of PLACES) {
      for (const era of place.era) expect(ERA_BY_ID.has(era), `${place.id}: era ${era}`).toBe(true);
      for (const id of place.ob ?? []) expect(OB_IDS.has(id), `${place.id}: OpenBible id ${id}`).toBe(true);
      for (const id of place.evidence ?? []) expect(QUESTION_BY_ID.has(id), `${place.id}: question ${id}`).toBe(true);
    }
  });

  it('say so when a site rests on tradition or is uncertain', () => {
    for (const place of PLACES) {
      if (place.certainty !== 'secure') expect(place.note ?? place.summary, place.id).toBeDefined();
    }
    const traditional = PLACES.filter((place) => place.certainty === 'tradition' && place.kind !== 'region');
    expect(traditional.length).toBeGreaterThan(5);
  });

  it('does not use an OpenBible place twice', () => {
    const used = PLACES.flatMap((place) => place.ob ?? []);
    expect(new Set(used).size).toBe(used.length);
  });
});

describe('the atlas journeys', () => {
  it('have unique ids, known eras and both languages', () => {
    expect(new Set(JOURNEYS.map((journey) => journey.id)).size).toBe(JOURNEYS.length);
    for (const journey of JOURNEYS) {
      expect(ERA_BY_ID.has(journey.era), journey.id).toBe(true);
      for (const text of [journey.person, journey.title, journey.summary, journey.note, ...journey.stops.map((stop) => stop.text)]) {
        if (text === undefined) continue;
        expect(ARABIC.test(text.ar), `${journey.id}: Arabic missing in "${text.en}"`).toBe(true);
        expect(ARABIC.test(text.en), `${journey.id}: Arabic inside English "${text.en}"`).toBe(false);
      }
    }
  });

  it('visit only known places, at least two, each stop with a passage', () => {
    for (const journey of JOURNEYS) {
      expect(journey.stops.length, journey.id).toBeGreaterThanOrEqual(2);
      for (const stop of journey.stops) expect(PLACE_BY_ID.has(stop.place), `${journey.id}: ${stop.place}`).toBe(true);
    }
  });

  it('never repeat the same place twice in a row', () => {
    for (const journey of JOURNEYS) {
      journey.stops.forEach((stop, index) => {
        if (index > 0) expect(stop.place, `${journey.id} stop ${index}`).not.toBe(journey.stops[index - 1]!.place);
      });
    }
  });

  it('mark a journey that rests on tradition as such', () => {
    for (const journey of JOURNEYS) {
      if (journey.stops.some((stop) => stop.trad === true) && journey.certainty === 'secure') {
        expect(journey.note, `${journey.id} has traditional legs but no note`).toBeDefined();
      }
    }
  });

  it('use the eras that the page lists', () => {
    for (const era of ERAS) expect(JOURNEYS.some((journey) => journey.era === era.id) || PLACES.some((place) => place.era.includes(era.id)), era.id).toBe(true);
  });
});

describe.skipIf(!BIBLE_BUILT)('every passage the atlas cites exists in the Bible reader', () => {
  it('parses, and each chapter and verse is in the English and the Arabic text', () => {
    const problems: string[] = [];
    for (const { where, ref } of everyRef()) {
      let ranges;
      try {
        ranges = parsePassages(ref);
      } catch (error) {
        problems.push(`${where}: ${(error as Error).message}`);
        continue;
      }
      for (const range of ranges) {
        for (const edition of ['kjv', 'svd']) {
          const book = loadBook(edition, range.book);
          const numbers = (chapter: number): Set<string> | undefined => new Set(book.chapters.find((c) => c.number === chapter)?.verses.map((v) => v.number));
          for (const [chapter, verse] of [
            [range.from.chapter, range.from.verse],
            [range.to.chapter, range.to.verse],
          ] as const) {
            const verses = numbers(chapter);
            if (verses === undefined) problems.push(`${where}: ${range.book} ${chapter} is missing from ${edition}`);
            else if (verse !== null && !verses.has(String(verse))) problems.push(`${where}: ${range.book} ${chapter}:${verse} is missing from ${edition}`);
          }
        }
      }
    }
    expect(problems).toEqual([]);
  });
});

describe('the OpenBible place list', () => {
  it('has places with coordinates and verses', () => {
    expect(OB.length).toBeGreaterThan(900);
    for (const place of OB) {
      expect(place.k, place.id).toBeGreaterThan(0);
      expect(place.v.length, place.id).toBeGreaterThan(0);
      expect(Math.abs(place.y), place.id).toBeLessThan(90);
    }
  });
});
