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
 *   w  shared words    2+ uncommon words (one of them fairly rare), or 1 word found in at most 12
 *                      verses; never names (hyphenated ones included)
 *   u  unclear         none of the above: hidden by default
 *
 * Apart from its reason, a link is "about Jesus" (`about`: j) when both its passages are about
 * Christ, and at least one is in the New Testament. A passage is about Christ when it is listed under
 * a specific topic (≤ 150 verses) of the site's Christ-centred families (21–24: His person,
 * Incarnation, life and miracles; 35–36: prophecies of the Messiah and the symbols fulfilled in Him),
 * is an end of a hand-picked prophecy or symbol, or (opposite an Old Testament passage) is a New
 * Testament verse that names Him. Between two New Testament passages both must be listed by topic:
 * most New Testament verses name Him, which alone says little. Such a link is
 * shown even without a reason in its texts: being about Christ is its reason.
 *
 * Readers' votes are not used anywhere: they rank how helpful readers found a link, not whether it
 * is right.
 *
 * Then, so a verse's lists stay short enough to read, each verse lists only its 10 strongest
 * references and its 10 strongest "referenced by" (strength in the order q, p, t, w, then the weight of
 * the evidence: a longer shared run of words, a smaller topic, rarer shared words).
 * `sides` says where a link is listed: b both ends, s only at its source verse, t only at its target;
 * a link listed at neither becomes u.
 */
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { isBookId } from '../../src/core/bible/books.ts';
import { CANONICAL_VERSIFICATION as V } from '../../src/core/bible/versification.ts';
import { contentWords, findNames, sharedRun, tokenize } from '../../src/link-reasons/evidence.ts';
import { LINK_REASONS_PATH, type LinkReasonsFile } from '../../src/link-reasons/format.ts';
import { writeFileAtomic, formatBytes } from './lib/files.ts';
import { publicFilePath } from './lib/paths.ts';
// The site's topic list, as the Bible reader's topic markers use it (English and Arabic names).
import { FAMILIES, TOPIC_DATA } from '../../../web/src/lib/topics/topics.ts';
import { BOOKS } from '../../../../packages/bible/src/books.ts';
import { christLinks } from '../../src/christ-links/christ-links.ts';

/** A topic this large says little about any two of its verses. */
const MAX_TOPIC_VERSES = 150;
/** Two shared words in at most this many verses each, one of them in at most `FAIRLY_RARE`. */
const UNCOMMON = 300;
const FAIRLY_RARE = 120;
/** One shared word in at most this many verses is enough on its own. */
const RARE = 12;
/** The most links kept leaving, and reaching, any one verse. */
const MAX_PER_VERSE = 10;
/** Strength of each reason, for keeping a verse's strongest links. */
const STRENGTH: Readonly<Record<string, number>> = { q: 5, p: 4, t: 3, w: 2, u: 0 };
/** A long target passage is compared by its first verses. */
const MAX_TARGET_VERSES = 12;

const readJson = async <T>(path: string): Promise<T> =>
  JSON.parse(await readFile(publicFilePath(path), 'utf8')) as T;

const references = await readJson<{
  links: { offsets: number[]; targetStart: number[]; targetEnd: number[] };
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
const topicFamilies: string[] = [];
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
  topicFamilies.push(id.split('.')[0] ?? '');
  topicSizes.push(size);
}

// Verses about Christ: in His topic families, or an end of a prophecy or symbol of Him (`topical`),
// or a New Testament verse naming Him (`naming`).
const CHRIST_FAMILIES = ['21', '22', '23', '24', '35', '36'];
const topical = Uint8Array.from(topicsOfVerse, (topics) =>
  topics.some(
    (topic) =>
      CHRIST_FAMILIES.includes(topicFamilies[topic] ?? '') &&
      (topicSizes[topic] ?? Infinity) <= MAX_TOPIC_VERSES,
  )
    ? 1
    : 0,
);
for (const link of christLinks().links) {
  if (christLinks().entryOf(link.id)?.kind !== 'jesus') continue;
  topical[link.from] = 1;
  topical.fill(1, link.targetStart, link.targetEnd + 1);
}
const NAMES_OF_CHRIST = /\b(Jesus|Christ|Messiah|Son of Man|Son of God|Lamb of God|Immanuel)\b/;
const naming = Uint8Array.from(verses, (text, verse) =>
  V.bookAt(verse).testament === 'NT' && NAMES_OF_CHRIST.test(text) ? 1 : 0,
);
const aboutChrist = (start: number, end: number, kind: 'topical' | 'any') => {
  for (let verse = start; verse <= end; verse += 1) {
    if (topical[verse] || (kind === 'any' && naming[verse])) return true;
  }
  return false;
};

const { offsets, targetStart, targetEnd } = references.links;
/** Per link: 1 when it is about Jesus (see above). */
const jesus: number[] = [];
const kinds: string[] = [];
/** Per link: how weighty its evidence is, to rank links of the same kind (higher is stronger). */
const scores: number[] = [];
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

    // Old ↔ New: one about Christ by topic, the other by topic or by naming Him. New ↔ New: both by
    // topic (most New Testament verses name Him, which alone says little). Old ↔ Old: never.
    const sourceNew = testament(source) === 'NT';
    const targetNew = testament(start) === 'NT';
    jesus.push(
      sourceNew && targetNew
        ? aboutChrist(source, source, 'topical') && aboutChrist(start, end, 'topical')
          ? 1
          : 0
        : sourceNew || targetNew
          ? (aboutChrist(source, source, 'topical') && aboutChrist(start, end, 'any')) ||
            (aboutChrist(source, source, 'any') && aboutChrist(start, end, 'topical'))
            ? 1
            : 0
          : 0,
    );
    const run = sharedRun(words[source] ?? [], targetWords);
    if (run > 0) {
      kinds.push(testament(source) === testament(start) ? 'p' : 'q');
      details.push(null);
      scores.push(run);
      continue;
    }
    const topics = (topicsOfVerse[source] ?? []).filter(
      (topic) => targetTopics.has(topic) && (topicSizes[topic] ?? Infinity) <= MAX_TOPIC_VERSES,
    );
    if (topics.length > 0) {
      const smallest = topics.reduce((best, topic) =>
        (topicSizes[topic] ?? 0) < (topicSizes[best] ?? 0) ? topic : best,
      );
      kinds.push('t');
      details.push(smallest);
      scores.push(MAX_TOPIC_VERSES - (topicSizes[smallest] ?? 0));
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
      scores.push(
        Math.round(uncommon.reduce((sum, word) => sum + 1000 / (frequency.get(word) ?? 1000), 0)),
      );
      // The words as the source verse writes them, rarest first.
      const written = uncommon
        .sort((a, b) => (frequency.get(a) ?? 0) - (frequency.get(b) ?? 0))
        .slice(0, 3)
        .map((word) => (words[source] ?? []).find((form) => form.startsWith(word)) ?? word);
      details.push([...new Set(written)].join(' '));
      continue;
    }
    kinds.push('u');
    details.push(null);
    scores.push(0);
  }
}

// Keep each verse's strongest links, leaving and reaching it.
/** Whether a link has a reason to be shown: one in its texts, or being about Jesus. */
const shown = (id: number) => kinds[id] !== 'u' || jesus[id] === 1;
/** Links about Jesus rank just below quotations. */
const strength = (id: number) =>
  Math.max(STRENGTH[kinds[id] ?? 'u'] ?? 0, jesus[id] === 1 ? 4.5 : 0);
const rank = (id: number) => strength(id) * 1e6 + Math.min(scores[id] ?? 0, 999_999);
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
kinds.forEach((_kind, id) => {
  if (!shown(id)) return;
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
// Each side keeps its own strongest: a link can be among its verse's 10 references while the passage
// it reaches, pointed at by many, lists only its 10 strongest as "referenced by".
const sides: string[] = [];
let capped = 0;
kinds.forEach((_kind, id) => {
  const listed = shown(id);
  const fromSource = listed && keptBySource.has(id);
  const atTarget = listed && keptAtEveryTarget(id);
  sides.push(fromSource && atTarget ? 'b' : fromSource ? 's' : atTarget ? 't' : '-');
  if (listed && !fromSource && !atTarget) {
    kinds[id] = 'u';
    jesus[id] = 0;
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
  sides: sides.join(''),
  about: jesus.map((flag) => (flag === 1 ? 'j' : '-')).join(''),
  topics: topicNames,
  topicOf,
  words: sharedWords,
};
const json = JSON.stringify(file);
await writeFileAtomic(publicFilePath(LINK_REASONS_PATH), json);

// Orthodoxia: the number of links the explorer draws (every link with a reason, after the per-verse
// limit, and the hand-picked pairs), for the home page, which states it (apps/web, committed so the
// site can be built without the explorer's data).
const drawnLinks = kinds.filter((_kind, id) => shown(id)).length + christLinks().links.length;
await writeFileAtomic(
  fileURLToPath(new URL('../../../web/src/data/explorer-stats.json', import.meta.url)),
  `${JSON.stringify({ links: drawnLinks, verses: V.verseCount }, null, 2)}
`,
);
const tally = Object.entries(
  kinds.reduce<Record<string, number>>((counts, kind) => {
    counts[kind] = (counts[kind] ?? 0) + 1;
    return counts;
  }, {}),
)
  .map(([kind, count]) => `${kind} ${String(count)}`)
  .join(', ')
  .concat(`; about Jesus ${String(jesus.filter((flag) => flag === 1).length)}`);
console.log(
  `✓ public/${LINK_REASONS_PATH} (${formatBytes(Buffer.byteLength(json))}): ${tally} (${String(capped)} over the per-verse limit)`,
);
