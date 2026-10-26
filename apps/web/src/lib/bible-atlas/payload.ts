/**
 * Everything the atlas page needs, for one language: the hand-written places and journeys with their passages turned into
 * links to the Bible reader, and the other places the Bible names (OpenBible.info geocoding data) as compact rows. The
 * page loads it as `/<lang>/bible-atlas.json`; nothing here is computed in the browser.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { BOOKS, DEFAULT_EDITION } from '@orthodoxia/bible';
import { ERAS } from '../../data/bible-atlas/eras.ts';
import { JOURNEYS } from '../../data/bible-atlas/journeys.ts';
import { PLACES } from '../../data/bible-atlas/places.ts';
import { QUESTION_BY_ID } from '../../data/apologetics/questions.ts';
import { apoPath } from '../apologetics/index.ts';
import { evidenceRefs } from '../topics/evidence.ts';
import { localePath, type Locale } from '../../i18n/index.ts';

interface ObPlace {
  id: string;
  n: string;
  m?: string;
  t: string;
  c: number;
  x: number;
  y: number;
  k: number;
  v: string[];
  a?: number;
}

const OB_FILE = [resolve(process.cwd(), '../../data/atlas/places.json'), resolve(process.cwd(), 'data/atlas/places.json'), resolve(import.meta.dirname, '../../../../../data/atlas/places.json')];
let ob: ObPlace[] | undefined;
function loadOb(): ObPlace[] {
  if (ob === undefined) {
    for (const file of OB_FILE) {
      try {
        ob = JSON.parse(readFileSync(file, 'utf8')) as ObPlace[];
        break;
      } catch {
        // try the next location: builds run from apps/web, tests from the repository root
      }
    }
    if (ob === undefined) throw new Error('data/atlas/places.json is missing. Run `node scripts/atlas/build.ts` first.');
  }
  return ob;
}

export interface RefLink {
  /** The passage, e.g. “Genesis 12:1–9”. */
  readonly l: string;
  /** Where it opens in the Bible reader, at its first verse. */
  readonly h: string;
}

const refLinks = (refs: string, locale: Locale): RefLink[] => evidenceRefs(refs, locale).map(({ label, href }) => ({ l: label, h: href }));

export function buildPayload(locale: Locale) {
  const edition = DEFAULT_EDITION[locale];
  const rows = loadOb();
  const hidden = new Set(PLACES.flatMap((place) => place.ob ?? []));
  const obById = new Map(rows.map((row) => [row.id, row]));
  const journeysAt = new Map<string, string[]>();
  for (const journey of JOURNEYS) for (const stop of journey.stops) journeysAt.set(stop.place, [...new Set([...(journeysAt.get(stop.place) ?? []), journey.id])]);

  return {
    locale,
    /** The reader's address for a chapter is `${reader}${slug}/${chapter}/#v${verse}`. */
    reader: localePath(locale, `bible/${edition}`),
    /** OSIS book code → [reader slug, book name], for the verse lists of the other places. */
    books: Object.fromEntries(BOOKS.filter((book) => book.section !== 'deuterocanon').map((book) => [book.osis, [book.slug, locale === 'ar' ? book.ar : book.en]])),
    eras: ERAS.map((era) => ({ id: era.id, hue: era.hue, name: era.name[locale], span: era.span[locale] })),
    places: PLACES.map((place) => {
      const rowsHere = (place.ob ?? []).flatMap((id) => (obById.get(id) === undefined ? [] : [obById.get(id)!]));
      return {
        id: place.id,
        lat: place.lat,
        lon: place.lon,
        kind: place.kind,
        eras: place.era,
        cert: place.certainty,
        name: place.name[locale],
        modern: place.modern?.[locale] ?? '',
        summary: place.summary[locale],
        note: place.note?.[locale] ?? '',
        events: place.events.map((event) => ({ t: event.title[locale], refs: refLinks(event.ref, locale), trad: event.trad === true })),
        journeys: journeysAt.get(place.id) ?? [],
        evidence: (place.evidence ?? []).flatMap((id) => {
          const question = QUESTION_BY_ID.get(id);
          return question === undefined ? [] : [{ t: question.title[locale], h: apoPath(locale, `questions/${question.slug}`) }];
        }),
        /** How many verses name the place, and a spread of them (OSIS). */
        count: rowsHere.reduce((sum, row) => sum + row.k, 0),
        verses: rowsHere.flatMap((row) => row.v).slice(0, 36),
      };
    }),
    journeys: JOURNEYS.map((journey) => ({
      id: journey.id,
      era: journey.era,
      hue: journey.hue,
      cert: journey.certainty,
      person: journey.person[locale],
      title: journey.title[locale],
      summary: journey.summary[locale],
      note: journey.note?.[locale] ?? '',
      stops: journey.stops.map((stop) => ({ p: stop.place, refs: refLinks(stop.ref, locale), text: stop.text?.[locale] ?? '', trad: stop.trad === true })),
    })),
    /** The other places: [id, name, modern name, type, confidence 0–1000, lon, lat, verse count, other proposals, verses (OSIS)]. */
    dots: rows.filter((row) => !hidden.has(row.id)).map((row) => [row.id, row.n, row.m ?? '', row.t, row.c, row.x, row.y, row.k, row.a ?? 0, row.v] as const),
  };
}

export type AtlasPayload = ReturnType<typeof buildPayload>;
