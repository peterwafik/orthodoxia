/**
 * Generates the homepage's static arcs preview from the real cross-reference dataset, so the hero
 * shows actual connections rather than decoration. Output (committed):
 * `apps/web/src/data/hero-arcs.json`.
 *
 * Prerequisite: `npm run data:build -w apps/explorer` (writes the explorer's datasets).
 * Selection: the N most-voted links whose ends lie in different books (long arcs read best at
 * hero size). Positions are verse indices normalized to 0..1 along the canonical (KJV, 66-book) axis.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { BOOKS } from '../apps/explorer/src/core/bible/books.ts';
import { KJV_VERSIFICATION } from '../apps/explorer/src/core/bible/versification.ts';
import { getBookGenre } from '../apps/explorer/src/core/bible/genres.ts';

const ROOT = resolve(import.meta.dirname, '..');
const INPUT = join(ROOT, 'apps/explorer/public/data/cross-references/openbible.json');
const OUTPUT = join(ROOT, 'apps/web/src/data/hero-arcs.json');
const ARC_COUNT = 1200;

interface Columns {
  offsets: number[];
  targetStart: number[];
  targetEnd: number[];
  votes: number[];
}

const file = JSON.parse(readFileSync(INPUT, 'utf8')) as { links: Columns; provenance: unknown };
const { offsets, targetStart, votes } = file.links;
const total = KJV_VERSIFICATION.verseCount;

// Many connections are listed in both directions; an arc is undirected, so keep the better-voted one.
const byPair = new Map<string, { from: number; to: number; votes: number }>();
for (let source = 0; source + 1 < offsets.length; source++) {
  for (let i = offsets[source]!; i < offsets[source + 1]!; i++) {
    const target = targetStart[i]!;
    if (KJV_VERSIFICATION.bookAt(source).id === KJV_VERSIFICATION.bookAt(target).id) continue;
    const from = Math.min(source, target);
    const to = Math.max(source, target);
    const key = `${from}-${to}`;
    const existing = byPair.get(key);
    if (existing === undefined || existing.votes < votes[i]!) byPair.set(key, { from, to, votes: votes[i]! });
  }
}
const links = [...byPair.values()];
links.sort((a, b) => b.votes - a.votes || a.from - b.from || a.to - b.to);

const round = (value: number): number => Math.round(value * 100_000) / 100_000;
const arcs = links.slice(0, ARC_COUNT).map(({ from, to }) => [
  round(from / total),
  round(to / total),
  KJV_VERSIFICATION.bookAt(from).testament === KJV_VERSIFICATION.bookAt(to).testament ? 0 : 1,
]);

const books = BOOKS.map((book) => {
  const range = KJV_VERSIFICATION.bookRange(book.id);
  return { id: book.id, start: round(range.start / total), genre: getBookGenre(book.id).id };
});

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(
  OUTPUT,
  `${JSON.stringify({
    description: `Top ${ARC_COUNT} cross-book links by OpenBible.info votes; [from, to, crossesTestaments]`,
    attribution: 'Cross-reference data: OpenBible.info, CC BY 4.0. Modified: re-indexed to KJV verse numbering.',
    verseCount: total,
    provenance: file.provenance,
    books,
    arcs,
  })}\n`,
);
console.log(`Wrote ${arcs.length} arcs to ${OUTPUT}`);
