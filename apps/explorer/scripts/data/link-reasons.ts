/**
 * Orthodoxia: gives every cross-reference the reason its two passages belong together, or marks it
 * unclear (see PATCHES.md). Runs after `build.ts`, from the datasets it wrote:
 *
 *   public/data/cross-references/openbible.json + translations/bsb.json + the site's topic list
 *   → public/data/cross-references/openbible-reasons.json
 *
 * Reasons, the first that holds:
 *   q  quotation       Old ↔ New Testament, sharing a run of 4+ words (2+ of them meaningful)
 *   p  same wording    the same, within one Testament (Kings and Chronicles, the Gospels, echoes)
 *   t  same topic      both in one specific subtopic of the site's topic list (up to 150 verses);
 *                      the smallest is named
 *   w  shared words    2+ uncommon words (one of them fairly rare), or 1 very rare word; never names
 *   r  related theme   none of the above, but 50+ readers' votes (overwhelming agreement)
 *   u  unclear         none of the above: hidden by default
 *
 * Then, so a verse's list stays short enough to read, a link is kept only if it is among the 10
 * strongest links leaving its verse and among the 10 strongest reaching its target (strength in the
 * order q, p, t, w, r, then votes); the others become u too.
 */
import { readFile } from 'node:fs/promises';
import { isBookId } from '../../src/core/bible/books.ts';
import { CANONICAL_VERSIFICATION as V } from '../../src/core/bible/versification.ts';
import { contentWords, findNames, sharedRun, tokenize } from '../../src/link-reasons/evidence.ts';
import {
  LINK_REASONS_PATH,
  THEME_MIN_VOTES,
  type LinkReasonsFile,
} from '../../src/link-reasons/format.ts';
import { writeFileAtomic, formatBytes } from './lib/files.ts';
import { publicFilePath } from './lib/paths.ts';
// The site's topic list, as the Bible reader's topic markers use it (English and Arabic names).
import { FAMILIES, TOPIC_DATA } from '../../../web/src/lib/topics/topics.ts';
import { BOOKS } from '../../../../packages/bible/src/books.ts';

/** A topic this large says little about any two of its verses. */
const MAX_TOPIC_VERSES = 150;
/** Two shared words in at most this many verses each, one of them in at most `FAIRLY_RARE`. */
const UNCOMMON = 300;
const FAIRLY_RARE = 120;
/** One shared word in at most this many verses is enough on its own. */
const RARE = 25;
/** The most links kept leaving, and reaching, any one verse. */
const MAX_PER_VERSE = 10;
/** Strength of each reason, for keeping a verse's strongest links. */
const STRENGTH: Readonly<Record<string, number>> = { q: 5, p: 4, t: 3, w: 2, r: 1, u: 0 };
/** A long target passage is compared by its first verses. */
const MAX_TARGET_VERSES = 12;

const readJson = async <T>(path: string): Promise<T> =>
  JSON.parse(await readFile(publicFilePath(path), 'utf8')) as T;

const references = await readJson<{
  links: { offsets: number[]; targetStart: number[]; targetEnd: number[]; votes: number[] };
}>('data/cross-references/openbible.json');
const { verses } = await readJson<{ verses: string[] }>('data/translations/bsb.json');

// Words of every verse, their meaningful stems, and in how many verses each stem occurs.
const words = verses.map(tokenize);
const stems = words.map(contentWords);
const frequency = new Map<string, number>();
for (const list of stems)
  for (const word of list) frequency.set(word, (frequency.get(word) ?? 0) + 1);
const names = findNames(verses);

// The subtopics each verse belongs to.
const osisOf = new Map(BOOKS.map((book) => [book.code, book.osis]));
const topicNames: { en: string; ar: string }[] = [];
const topicSizes: number[] = [];
const topicsOfVerse: number[][] = Array.from({ length: V.verseCount }, () => []);
const namesById = new Map(
  FAMILIES.flatMap((family) => family.topics.map((topic) => [topic.id, topic] as const)),
);
for (const [id, data] of TOPIC_DATA) {
  const topic = namesById.get(id);
  if (!topic) continue; // a family, not a subtopic
  const index = topicNames.length;
  let size = 0;
  for (const range of data.ranges) {
    const book = osisOf.get(range.book);
    if (book === undefined || !isBookId(book)) continue; // a deuterocanonical book
    const start = V.indexOf({ book, chapter: range.from.chapter, verse: range.from.verse ?? 1 });
    const endVerse = range.to.verse ?? V.verseCountOf(book, range.to.chapter);
    const end =
      endVerse === undefined
        ? undefined
        : V.indexOf({ book, chapter: range.to.chapter, verse: endVerse });
    if (start === undefined || end === undefined) continue;
    for (let verse = start; verse <= end; verse += 1) topicsOfVerse[verse]?.push(index);
    size += end - start + 1;
  }
  topicNames.push({ en: topic.en, ar: topic.ar });
  topicSizes.push(size);
}

const { offsets, targetStart, targetEnd, votes } = references.links;
const kinds: string[] = [];
/** Per link: its topic or shared words, by kind. */
const details: (number | string | null)[] = [];
const testament = (verse: number) => V.bookAt(verse).testament;

for (let source = 0; source < V.verseCount; source += 1) {
  for (let id = offsets[source] ?? 0; id < (offsets[source + 1] ?? 0); id += 1) {
    const start = targetStart[id] ?? 0;
    const end = Math.min(targetEnd[id] ?? 0, start + MAX_TARGET_VERSES - 1);
    const targetWords: string[] = [];
    const targetStems = new Set<string>();
    const targetTopics = new Set<number>();
    for (let verse = start; verse <= end; verse += 1) {
      targetWords.push(...(words[verse] ?? []));
      for (const word of stems[verse] ?? []) targetStems.add(word);
      for (const topic of topicsOfVerse[verse] ?? []) targetTopics.add(topic);
    }

    if (sharedRun(words[source] ?? [], targetWords) > 0) {
      kinds.push(testament(source) === testament(start) ? 'p' : 'q');
      details.push(null);
      continue;
    }
    const topics = (topicsOfVerse[source] ?? []).filter(
      (topic) => targetTopics.has(topic) && (topicSizes[topic] ?? Infinity) <= MAX_TOPIC_VERSES,
    );
    if (topics.length > 0) {
      kinds.push('t');
      details.push(
        topics.reduce((best, topic) =>
          (topicSizes[topic] ?? 0) < (topicSizes[best] ?? 0) ? topic : best,
        ),
      );
      continue;
    }
    const shared = (stems[source] ?? []).filter(
      (word) => targetStems.has(word) && !names.has(word),
    );
    const uncommon = shared.filter((word) => (frequency.get(word) ?? 0) <= UNCOMMON);
    const fairlyRare = uncommon.some((word) => (frequency.get(word) ?? 0) <= FAIRLY_RARE);
    const rare = uncommon.some((word) => (frequency.get(word) ?? 0) <= RARE);
    if ((uncommon.length >= 2 && fairlyRare) || rare) {
      kinds.push('w');
      // The words as the source verse writes them, rarest first.
      const written = uncommon
        .sort((a, b) => (frequency.get(a) ?? 0) - (frequency.get(b) ?? 0))
        .slice(0, 3)
        .map((word) => (words[source] ?? []).find((form) => form.startsWith(word)) ?? word);
      details.push([...new Set(written)].join(' '));
      continue;
    }
    kinds.push((votes[id] ?? 0) >= THEME_MIN_VOTES ? 'r' : 'u');
    details.push(null);
  }
}

// Keep each verse's strongest links, leaving and reaching it.
const rank = (id: number) => (STRENGTH[kinds[id] ?? 'u'] ?? 0) * 1e6 + (votes[id] ?? 0);
const sources = new Int32Array(kinds.length);
for (let source = 0; source < V.verseCount; source += 1) {
  sources.fill(source, offsets[source] ?? 0, offsets[source + 1] ?? 0);
}
const keepTop = (groups: Map<number, number[]>) => {
  const kept = new Set<number>();
  for (const ids of groups.values()) {
    ids.sort((a, b) => rank(b) - rank(a));
    for (const id of ids.slice(0, MAX_PER_VERSE)) kept.add(id);
  }
  return kept;
};
const bySource = new Map<number, number[]>();
const byTarget = new Map<number, number[]>();
kinds.forEach((kind, id) => {
  if (kind === 'u') return;
  const source = sources[id] ?? 0;
  bySource.set(source, [...(bySource.get(source) ?? []), id]);
  // A link to a passage counts for every verse of it.
  for (let verse = targetStart[id] ?? 0; verse <= (targetEnd[id] ?? 0); verse += 1) {
    byTarget.set(verse, [...(byTarget.get(verse) ?? []), id]);
  }
});
const keptBySource = keepTop(bySource);
const keptByTarget = new Map<number, Set<number>>();
for (const [verse, ids] of byTarget) keptByTarget.set(verse, keepTop(new Map([[verse, ids]])));
const keptAtEveryTarget = (id: number) => {
  for (let verse = targetStart[id] ?? 0; verse <= (targetEnd[id] ?? 0); verse += 1) {
    if (!keptByTarget.get(verse)?.has(id)) return false;
  }
  return true;
};
let capped = 0;
kinds.forEach((kind, id) => {
  if (kind !== 'u' && !(keptBySource.has(id) && keptAtEveryTarget(id))) {
    kinds[id] = 'u';
    capped += 1;
  }
});

const topicOf: number[] = [];
const sharedWords: string[] = [];
kinds.forEach((kind, id) => {
  const detail = details[id];
  if (kind === 't' && typeof detail === 'number') topicOf.push(detail);
  if (kind === 'w' && typeof detail === 'string') sharedWords.push(detail);
});

const file: LinkReasonsFile = {
  format: 'link-reasons',
  linkCount: kinds.length,
  kinds: kinds.join(''),
  topics: topicNames,
  topicOf,
  words: sharedWords,
};
const json = JSON.stringify(file);
await writeFileAtomic(publicFilePath(LINK_REASONS_PATH), json);
const tally = Object.entries(
  kinds.reduce<Record<string, number>>((counts, kind) => {
    counts[kind] = (counts[kind] ?? 0) + 1;
    return counts;
  }, {}),
)
  .map(([kind, count]) => `${kind} ${String(count)}`)
  .join(', ');
console.log(
  `✓ public/${LINK_REASONS_PATH} (${formatBytes(Buffer.byteLength(json))}): ${tally} (${String(capped)} over the per-verse limit)`,
);
