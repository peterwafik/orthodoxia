/**
 * Reads data/atlas/raw/ancient.jsonl (OpenBible.info Bible Geocoding Data, CC BY 4.0) and writes the compact place list
 * the Bible atlas page draws: data/atlas/places.json. For each place it keeps the best-scored modern identification, how
 * sure that identification is, how many verses name the place, and a spread of those verses.
 *
 * Only places that are a single point are kept (settlements, mountains, springs, islands…); regions, rivers and roads
 * are not points, so they are left out rather than drawn in a wrong spot.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { BOOKS } from '../../packages/bible/src/books.ts';

const RAW = resolve(import.meta.dirname, '../../data/atlas/raw/ancient.jsonl');
const OUT = resolve(import.meta.dirname, '../../data/atlas/places.json');

const POINT_TYPES = ['settlement', 'mountain', 'hill', 'island', 'spring', 'well', 'campsite', 'valley', 'wadi', 'pool', 'ford', 'structure'] as const;
/** The most verses kept for a place; they are spread over the whole list so a place named across the Bible shows that. */
const MAX_VERSES = 24;

interface Identification {
  score?: { time_total?: number };
  description?: string;
  resolutions?: { lonlat?: string; lonlat_type?: string }[];
}
interface Raw {
  friendly_id?: string;
  url_slug: string;
  types?: string[];
  identifications?: Identification[];
  verses?: { osis: string }[];
}

const osisBooks = new Set(BOOKS.map((book) => book.osis));
const clean = (value: string): string => value.replace(/<[^>]+>/g, '').trim();
const spread = <T>(items: readonly T[], max: number): T[] => {
  if (items.length <= max) return [...items];
  return Array.from({ length: max }, (_, i) => items[Math.round((i * (items.length - 1)) / (max - 1))] as T);
};

const places: Record<string, unknown>[] = [];
const seen = new Set<string>();
for (const line of readFileSync(RAW, 'utf8').split('\n')) {
  if (line.trim() === '') continue;
  const record = JSON.parse(line) as Raw;
  if (record.friendly_id === undefined || record.verses === undefined || record.verses.length === 0) continue;
  const type = POINT_TYPES.find((candidate) => record.types?.includes(candidate));
  if (type === undefined) continue;
  const best = [...(record.identifications ?? [])].sort((a, b) => (b.score?.time_total ?? 0) - (a.score?.time_total ?? 0))[0];
  const resolution = best?.resolutions?.find((candidate) => candidate.lonlat !== undefined);
  if (best === undefined || resolution?.lonlat === undefined) continue;
  const [lon, lat] = resolution.lonlat.split(',').map(Number) as [number, number];
  if (!Number.isFinite(lon) || !Number.isFinite(lat)) continue;
  for (const verse of record.verses) {
    if (!osisBooks.has(verse.osis.split('.')[0]!)) throw new Error(`Unknown book in ${verse.osis} (${record.friendly_id})`);
  }
  if (seen.has(record.url_slug)) throw new Error(`Duplicate place ${record.url_slug}`);
  seen.add(record.url_slug);
  const modern = best.description === undefined ? '' : clean(best.description);
  places.push({
    id: record.url_slug,
    n: record.friendly_id.replace(/\s+\d+$/, ''),
    ...(modern === '' || modern === record.friendly_id ? {} : { m: modern }),
    t: type,
    c: Math.max(0, Math.min(1000, Math.round(best.score?.time_total ?? 0))),
    x: Math.round(lon * 1e4) / 1e4,
    y: Math.round(lat * 1e4) / 1e4,
    k: record.verses.length,
    v: spread(record.verses.map((verse) => verse.osis), MAX_VERSES),
    ...((record.identifications?.length ?? 0) > 1 ? { a: (record.identifications?.length ?? 1) - 1 } : {}),
  });
}

places.sort((a, b) => String(a['id']).localeCompare(String(b['id'])));
writeFileSync(OUT, `${JSON.stringify(places)}\n`);
console.log(`Wrote ${places.length} places to ${OUT}`);
