// Orthodoxia: the prophecies and symbols of Christ, as links the explorer can draw and list. Not part
// of the upstream explorer (see PATCHES.md).

import type { VerseIndex } from '../core/bible/verse-ref.ts';
import { parseOsisId } from '../core/bible/verse-ref.ts';
import {
  CANONICAL_VERSIFICATION,
  type VerseIndexRange,
  type Versification,
} from '../core/bible/versification.ts';
import type { CrossReferenceLink } from '../cross-references/cross-reference-index.ts';
import type { Connection } from '../visualizations/shared/connections.ts';
import { CHRIST_LINKS, type ChristLinkEntry } from './christ-links-data.ts';

/**
 * IDs of these links start here, far past any cross-reference ID (the OpenBible set has ~345,000),
 * so a view can tell them apart and never looks them up in the cross-reference index.
 */
export const CHRIST_LINK_ID_BASE = 100_000_000;

export function isChristLinkId(id: number): boolean {
  return id >= CHRIST_LINK_ID_BASE;
}

/** A link seen from a passage, with the prophecy or symbol it belongs to. */
export interface ChristConnection extends Connection {
  readonly entry: ChristLinkEntry;
}

/**
 * Parses `Book.C.V`, `Book.C.V-V` or `Book.C.V-C.V`, several joined by `;`, into verse ranges.
 * Throws on anything that is not a real verse, so a typo in the data fails the tests.
 */
export function parseRanges(text: string, versification: Versification): VerseIndexRange[] {
  return text.split(';').map((part) => {
    const [first = '', last] = part.trim().split('-');
    const startRef = parseOsisId(first);
    const start = startRef && versification.indexOf(startRef);
    if (!startRef || start === undefined) {
      throw new RangeError(`Not a verse: "${first}"`);
    }
    if (last === undefined) {
      return { start, end: start };
    }
    const pieces = last.split('.').map(Number);
    const crossesChapters = pieces.length === 2;
    const end = versification.indexOf({
      book: startRef.book,
      chapter: crossesChapters ? (pieces[0] ?? Number.NaN) : startRef.chapter,
      verse: (crossesChapters ? pieces[1] : pieces[0]) ?? Number.NaN,
    });
    if (end === undefined || end < start) {
      throw new RangeError(`Not a verse range: "${part.trim()}"`);
    }
    return { start, end };
  });
}

/** Every pair (a prediction or figure, and its fulfilment), indexed by the verses at both ends. */
export class ChristLinkIndex {
  readonly links: readonly CrossReferenceLink[];
  readonly #entries = new Map<number, ChristLinkEntry>();
  readonly #otRanges = new Map<number, VerseIndexRange>();
  readonly #byOtVerse = new Map<VerseIndex, number[]>();
  readonly #byNtVerse = new Map<VerseIndex, number[]>();
  readonly #byId = new Map<number, CrossReferenceLink>();

  constructor(entries: readonly ChristLinkEntry[], versification: Versification) {
    const links: CrossReferenceLink[] = [];
    for (const entry of entries) {
      for (const ot of parseRanges(entry.from, versification)) {
        for (const nt of parseRanges(entry.to, versification)) {
          const link: CrossReferenceLink = {
            id: CHRIST_LINK_ID_BASE + links.length,
            from: ot.start,
            targetStart: nt.start,
            targetEnd: nt.end,
            votes: 0,
          };
          links.push(link);
          this.#byId.set(link.id, link);
          this.#entries.set(link.id, entry);
          this.#otRanges.set(link.id, ot);
          for (let verse = ot.start; verse <= ot.end; verse += 1) {
            this.#byOtVerse.set(verse, [...(this.#byOtVerse.get(verse) ?? []), link.id]);
          }
          for (let verse = nt.start; verse <= nt.end; verse += 1) {
            this.#byNtVerse.set(verse, [...(this.#byNtVerse.get(verse) ?? []), link.id]);
          }
        }
      }
    }
    this.links = links;
  }

  /** The prophecy or symbol behind a link, if it is one of these links. */
  entryOf(id: number): ChristLinkEntry | undefined {
    return this.#entries.get(id);
  }

  /**
   * The pairs touching a verse range, each seen from the verse it touches: from an Old Testament
   * verse to its fulfilment (outgoing), or from a New Testament verse back to what it fulfils
   * (incoming). A pair whose end spans several verses of the range is listed once.
   */
  connectionsIn(range: VerseIndexRange): ChristConnection[] {
    const connections: ChristConnection[] = [];
    const seen = new Set<string>();
    const add = (verse: VerseIndex, id: number, direction: 'outgoing' | 'incoming') => {
      const key = `${String(id)}-${direction}`;
      const link = this.#byId.get(id);
      const entry = this.#entries.get(id);
      const ot = this.#otRanges.get(id);
      if (seen.has(key) || !link || !entry || !ot) return;
      seen.add(key);
      connections.push(
        direction === 'outgoing'
          ? {
              link,
              entry,
              direction,
              here: verse,
              otherStart: link.targetStart,
              otherEnd: link.targetEnd,
            }
          : { link, entry, direction, here: verse, otherStart: ot.start, otherEnd: ot.end },
      );
    };
    for (let verse = range.start; verse <= range.end; verse += 1) {
      for (const id of this.#byOtVerse.get(verse) ?? []) add(verse, id, 'outgoing');
      for (const id of this.#byNtVerse.get(verse) ?? []) add(verse, id, 'incoming');
    }
    return connections.sort((a, b) => a.otherStart - b.otherStart || a.otherEnd - b.otherEnd);
  }
}

let shared: ChristLinkIndex | undefined;

/** The index of the curated list, built on first use. */
export function christLinks(): ChristLinkIndex {
  shared ??= new ChristLinkIndex(CHRIST_LINKS, CANONICAL_VERSIFICATION);
  return shared;
}
