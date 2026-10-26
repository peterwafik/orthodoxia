/**
 * A helper for the places whose position comes from the OpenBible.info geocoding data (`data/atlas/places.json`): the
 * coordinates, and how sure the identification is, are read from it, so they cannot be mistyped. Everything the reader sees
 * (name, summary, events) is still written by hand. `lat`/`lon`/`cert` may be given to override the data where the site is
 * better known than the data says.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { AtlasPlace, Bilingual, Certainty, EraId, PlaceEvent, PlaceKind } from './types.ts';

interface ObRow {
  readonly id: string;
  readonly c: number;
  readonly x: number;
  readonly y: number;
}

const FILES = [
  resolve(process.cwd(), '../../data/atlas/places.json'),
  resolve(process.cwd(), 'data/atlas/places.json'),
  resolve(import.meta.dirname, '../../../../../data/atlas/places.json'),
];
let rows: Map<string, ObRow> | undefined;
function obRow(id: string): ObRow {
  if (rows === undefined) {
    for (const file of FILES) {
      try {
        rows = new Map((JSON.parse(readFileSync(file, 'utf8')) as ObRow[]).map((row) => [row.id, row]));
        break;
      } catch {
        // try the next location: builds run from apps/web, tests from the repository root
      }
    }
    if (rows === undefined) throw new Error('data/atlas/places.json is missing. Run `node scripts/atlas/build.ts` first.');
  }
  const row = rows.get(id);
  if (row === undefined) throw new Error(`OpenBible place "${id}" is not in data/atlas/places.json`);
  return row;
}

const b = (en: string, ar: string): Bilingual => ({ en, ar });
export const ev = (en: string, ar: string, ref: string, trad = false): PlaceEvent => ({ title: b(en, ar), ref, ...(trad ? { trad: true as const } : {}) });

const DEFAULT_NOTE = b('Scholars differ about the exact site.', 'يختلف الدارسون في تحديد الموضع بدقة.');

export interface AtSpec {
  /** The OpenBible place (its dot is hidden); the first is the one that gives the coordinates. */
  readonly ob: string | readonly string[];
  readonly era: EraId | readonly EraId[];
  readonly kind?: PlaceKind;
  readonly name: readonly [string, string];
  readonly modern?: readonly [string, string];
  readonly summary: readonly [string, string];
  readonly note?: readonly [string, string];
  readonly events: readonly PlaceEvent[];
  readonly id?: string;
  readonly lat?: number;
  readonly lon?: number;
  readonly cert?: Certainty;
  readonly evidence?: readonly string[];
}

export function at(spec: AtSpec): AtlasPlace {
  const list = typeof spec.ob === 'string' ? [spec.ob] : spec.ob;
  const row = obRow(list[0] as string);
  const cert: Certainty = spec.cert ?? (row.c >= 800 ? 'secure' : row.c >= 400 ? 'probable' : 'tradition');
  const note = spec.note !== undefined ? b(spec.note[0], spec.note[1]) : cert === 'secure' ? undefined : DEFAULT_NOTE;
  return {
    id: spec.id ?? (list[0] as string),
    lat: spec.lat ?? row.y,
    lon: spec.lon ?? row.x,
    kind: spec.kind ?? 'city',
    era: typeof spec.era === 'string' ? [spec.era] : spec.era,
    certainty: cert,
    name: b(spec.name[0], spec.name[1]),
    ...(spec.modern === undefined ? {} : { modern: b(spec.modern[0], spec.modern[1]) }),
    summary: b(spec.summary[0], spec.summary[1]),
    ...(note === undefined ? {} : { note }),
    events: spec.events,
    ob: list,
    ...(spec.evidence === undefined ? {} : { evidence: spec.evidence }),
  };
}

/** A place with coordinates written here, for sites the OpenBible data does not hold. */
export interface HandSpec {
  readonly id: string;
  readonly lat: number;
  readonly lon: number;
  readonly era: EraId | readonly EraId[];
  readonly kind?: PlaceKind;
  readonly cert: Certainty;
  readonly name: readonly [string, string];
  readonly modern?: readonly [string, string];
  readonly summary: readonly [string, string];
  readonly note?: readonly [string, string];
  readonly events: readonly PlaceEvent[];
  readonly evidence?: readonly string[];
}

export function hand(spec: HandSpec): AtlasPlace {
  const note = spec.note !== undefined ? b(spec.note[0], spec.note[1]) : spec.cert === 'secure' ? undefined : DEFAULT_NOTE;
  return {
    id: spec.id,
    lat: spec.lat,
    lon: spec.lon,
    kind: spec.kind ?? 'city',
    era: typeof spec.era === 'string' ? [spec.era] : spec.era,
    certainty: spec.cert,
    name: b(spec.name[0], spec.name[1]),
    ...(spec.modern === undefined ? {} : { modern: b(spec.modern[0], spec.modern[1]) }),
    summary: b(spec.summary[0], spec.summary[1]),
    ...(note === undefined ? {} : { note }),
    events: spec.events,
    ...(spec.evidence === undefined ? {} : { evidence: spec.evidence }),
  };
}
