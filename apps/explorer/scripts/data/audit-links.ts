/**
 * Orthodoxia: walks every verse of the Bible through the same code the pages use, for the default
 * categories and each category alone, and fails if a link of a category not chosen would be drawn, a verse shows more links than allowed, or a prophecy or
 * symbol of Christ is broken (see PATCHES.md). Runs at the end of `data:build`, so a bad link can't
 * be deployed.
 *
 *   node scripts/data/audit-links.ts
 */
import { readFile } from 'node:fs/promises';
import { CANONICAL_VERSIFICATION as V } from '../../src/core/bible/versification.ts';
import { parseCrossReferencesFile } from '../../src/core/datasets/formats.ts';
import { CrossReferenceIndex } from '../../src/cross-references/cross-reference-index.ts';
import { CHRIST_LINKS } from '../../src/christ-links/christ-links-data.ts';
import { christLinks, isChristLinkId, parseRanges } from '../../src/christ-links/christ-links.ts';
import { LINK_REASONS_PATH, type LinkReasonsFile } from '../../src/link-reasons/format.ts';
import { LinkReasons } from '../../src/link-reasons/link-reasons.ts';
import { collectConnections } from '../../src/visualizations/shared/connections.ts';
import {
  createLinkFilter,
  DEFAULT_LINK_FILTER,
  LINK_CATEGORIES,
  selectLinks,
  type LinkCategory,
  type LinkFilter,
} from '../../src/visualizations/shared/link-filter.ts';
import { computeVerseGenres } from '../../src/visualizations/shared/verse-genres.ts';
import { publicFilePath } from './lib/paths.ts';

/** Matches MAX_PER_VERSE in link-reasons.ts. */
const MAX_PER_VERSE = 10;

const readJson = async (path: string): Promise<unknown> =>
  JSON.parse(await readFile(publicFilePath(path), 'utf8'));

const file = parseCrossReferencesFile(await readJson('data/cross-references/openbible.json'), {
  id: 'openbible',
  versification: V.id,
});
const index = new CrossReferenceIndex(file.links, V.verseCount);
const reasons = new LinkReasons(
  (await readJson(LINK_REASONS_PATH)) as LinkReasonsFile,
  index.linkCount,
);
const genres = computeVerseGenres(V);
const problems: string[] = [];
const problem = (message: string) => {
  if (problems.length < 50) problems.push(message);
  else if (problems.length === 50) problems.push('… and more');
};
const where = (verse: number) => {
  const ref = V.refAt(verse);
  return `${ref.book} ${String(ref.chapter)}:${String(ref.verse)}`;
};

// The default categories, then each category with a clear reason alone.
const filters: LinkFilter[] = [
  DEFAULT_LINK_FILTER,
  ...LINK_CATEGORIES.filter((category) => category !== 'prophecy' && category !== 'symbol').map(
    (category) => createLinkFilter([category]),
  ),
];
const label = (filter: LinkFilter) => [...filter.categories].join('+');

let shownTotal = 0;
for (const filter of filters) {
  // Arcs draws exactly these links.
  const arcs = selectLinks(index, genres, filter, reasons);
  const arcIds = new Set(arcs);
  for (const id of arcs) {
    if (!reasons.isClear(id)) problem(`Arcs would draw link ${String(id)} without a reason`);
    if (!filter.categories.has(reasons.categoryOf(id) as LinkCategory)) {
      problem(
        `Arcs would draw link ${String(id)} (${reasons.categoryOf(id)}) under ${label(filter)}`,
      );
    }
  }
  // Threads and the panel draw these, verse by verse; every one must also be an arc.
  const seen = new Set<number>();
  for (let verse = 0; verse < V.verseCount; verse += 1) {
    const { outgoing, incoming } = collectConnections(
      index,
      { start: verse, end: verse },
      filter,
      genres,
      reasons,
    );
    for (const connection of [...outgoing, ...incoming]) {
      const { id } = connection.link;
      seen.add(id);
      const reason = reasons.reasonOf(id);
      if (reason.kind === 'unclear' && !reason.aboutJesus) {
        problem(`${where(verse)}: link ${String(id)} has no reason`);
      }
      if (!filter.categories.has(reasons.categoryOf(id) as LinkCategory)) {
        problem(
          `${where(verse)}: link ${String(id)} (${reasons.categoryOf(id)}) shown under ${label(filter)}`,
        );
      }
      if (reason.kind === 'topic' && reason.topic.en.trim() === '') {
        problem(`${where(verse)}: link ${String(id)} names an empty topic`);
      }
      if (reason.kind === 'words' && reason.words.trim() === '') {
        problem(`${where(verse)}: link ${String(id)} lists no shared words`);
      }
      if (!arcIds.has(id)) problem(`${where(verse)}: link ${String(id)} is a thread but no arc`);
    }
    if (outgoing.length > MAX_PER_VERSE) {
      problem(
        `${where(verse)}: ${String(outgoing.length)} references (limit ${String(MAX_PER_VERSE)})`,
      );
    }
    if (incoming.length > MAX_PER_VERSE) {
      problem(
        `${where(verse)}: referenced by ${String(incoming.length)} (limit ${String(MAX_PER_VERSE)})`,
      );
    }
  }
  if (seen.size !== arcIds.size) {
    problem(`${String(arcIds.size)} arcs but ${String(seen.size)} threads under ${label(filter)}`);
  }
  if (filter === DEFAULT_LINK_FILTER) shownTotal = arcIds.size;
}

// Every prophecy and symbol leads both ways, from real verses, and never reaches the index.
const christ = christLinks();
for (const entry of CHRIST_LINKS) {
  for (const ot of parseRanges(entry.from, V)) {
    const forward = christ.connectionsIn(ot).filter((connection) => connection.entry === entry);
    if (forward.length === 0) problem(`"${entry.en}": nothing leads from ${where(ot.start)}`);
    for (const connection of forward) {
      if (!isChristLinkId(connection.link.id)) problem(`"${entry.en}": a link id collides`);
      const back = christ
        .connectionsIn({ start: connection.otherStart, end: connection.otherStart })
        .some((other) => other.entry === entry && other.direction === 'incoming');
      if (!back) problem(`"${entry.en}": ${where(connection.otherStart)} does not lead back`);
    }
  }
}

// The home page states how many links the explorer draws (apps/web/src/data/explorer-stats.json,
// written by link-reasons.ts): it must be the number drawn here.
const homeStats = JSON.parse(
  await readFile(new URL('../../../web/src/data/explorer-stats.json', import.meta.url), 'utf8'),
) as { links: number; verses: number };
const drawn = shownTotal + christ.links.length;
if (homeStats.links !== drawn || homeStats.verses !== V.verseCount) {
  problem(
    `the home page states ${String(homeStats.links)} links and ${String(homeStats.verses)} verses; the explorer draws ${String(drawn)} links over ${String(V.verseCount)} verses (run link-reasons.ts)`,
  );
}

if (problems.length > 0) {
  console.error(`✗ Link audit failed:\n  ${problems.join('\n  ')}`);
  process.exit(1);
}
console.log(
  `✓ Link audit: all ${String(V.verseCount)} verses checked under ${String(filters.length)} category choices; ` +
    `${String(shownTotal)} links shown by default, each with a reason and ≤ ${String(MAX_PER_VERSE)} per verse each way; ` +
    `${String(christ.links.length)} prophecy and symbol links lead both ways; the home page's ${String(drawn)} links match.`,
);
