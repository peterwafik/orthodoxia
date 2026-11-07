import { GENRES, type GenreId } from '../../core/bible/genres.ts';
import type { VerseIndex } from '../../core/bible/verse-ref.ts';
import { elementAt } from '../../core/lib/array.ts';
import type { CrossReferenceIndex } from '../../cross-references/cross-reference-index.ts';
import { t } from '../../i18n/messages.ts';
import type { LinkReasons } from '../../link-reasons/link-reasons.ts';

/** Which links a visualization shows, set with optional, low-key controls. */
export interface LinkFilter {
  /** Minimum community votes; `-Infinity` shows every link, including disputed ones. */
  readonly minVotes: number;
  /** Genres whose links are hidden (a link is hidden if either end is in such a genre). */
  readonly hiddenGenres: ReadonlySet<GenreId>;
  /**
   * Orthodoxia: also show links with no clear reason (no shared wording, topic or uncommon words,
   * and few votes). Off by default.
   */
  readonly showUnclear: boolean;
}

/** Vote thresholds offered by the filter controls. */
export const VOTE_THRESHOLDS: readonly number[] = [-Infinity, 0, 1, 2, 3, 4, 5, 10, 20, 50, 100];

export function createLinkFilter(minVotes: number): LinkFilter {
  return { minVotes, hiddenGenres: new Set(), showUnclear: false };
}

/**
 * The filter every visualization starts with: links with at least 4 votes, the best supported 44%
 * (153,419 of 344,799 in the OpenBible.info snapshot of 2026-09-21). It hides the links readers
 * voted down (0.4%, e.g. Ephesians 6:17 → 1 Samuel 17:58, at −86) and the loosest ones, which few
 * readers found helpful; the Filters menu shows more, down to every link.
 */
export const DEFAULT_LINK_FILTER: LinkFilter = createLinkFilter(4);

export function isDefaultFilter(filter: LinkFilter, defaults: LinkFilter): boolean {
  return (
    filter.minVotes === defaults.minVotes &&
    filter.hiddenGenres.size === 0 &&
    filter.showUnclear === defaults.showUnclear
  );
}

export function describeThreshold(minVotes: number): string {
  if (minVotes === -Infinity) {
    return t.filters.allLinks;
  }
  return minVotes === 0 ? t.filters.votedDownHidden : t.filters.atLeast(String(minVotes));
}

/**
 * Compiles a filter into a fast predicate over links. `verseGenres` maps every verse to its genre
 * ordinal (see `computeVerseGenres`).
 */
export function compileLinkFilter(
  filter: LinkFilter,
  verseGenres: Uint8Array,
  reasons?: LinkReasons,
): (from: VerseIndex, to: VerseIndex, votes: number, id?: number) => boolean {
  const hidden = new Uint8Array(GENRES.length);
  for (const genre of GENRES) {
    hidden[genre.ordinal] = filter.hiddenGenres.has(genre.id) ? 1 : 0;
  }
  const { minVotes } = filter;
  const hidesUnclear = !filter.showUnclear && reasons !== undefined;
  return (from, to, votes, id) =>
    votes >= minVotes &&
    (!hidesUnclear || id === undefined || reasons.isClear(id)) &&
    elementAt(hidden, elementAt(verseGenres, from)) === 0 &&
    elementAt(hidden, elementAt(verseGenres, to)) === 0;
}

/** IDs of the links that pass the filter, in dataset order. */
export function selectLinks(
  index: CrossReferenceIndex,
  verseGenres: Uint8Array,
  filter: LinkFilter,
  reasons?: LinkReasons,
): Int32Array {
  const passes = compileLinkFilter(filter, verseGenres, reasons);
  const ids = new Int32Array(index.linkCount);
  let count = 0;
  for (let id = 0; id < index.linkCount; id += 1) {
    if (
      passes(
        elementAt(index.sources, id),
        elementAt(index.targetStarts, id),
        elementAt(index.votes, id),
        id,
      )
    ) {
      ids[count] = id;
      count += 1;
    }
  }
  return ids.slice(0, count);
}
