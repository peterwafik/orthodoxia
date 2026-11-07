import { GENRES, type GenreId } from '../../core/bible/genres.ts';
import type { VerseIndex } from '../../core/bible/verse-ref.ts';
import { elementAt } from '../../core/lib/array.ts';
import type { CrossReferenceIndex } from '../../cross-references/cross-reference-index.ts';
import type { LinkReasons } from '../../link-reasons/link-reasons.ts';

/**
 * Orthodoxia: the kinds of link a reader can show or hide. `christ` is the hand-picked prophecies and
 * symbols of Christ; `jesus` the cross-references whose passages are both about Christ; the others
 * are the reasons found in the texts of the rest (see link-reasons.ts).
 * Readers' votes are not used: they rank helpfulness, not whether a link is right.
 */
export type LinkCategory =
  'christ' | 'jesus' | 'quotation' | 'parallel' | 'topic' | 'words' | 'unclear';

export const LINK_CATEGORIES: readonly LinkCategory[] = [
  'christ',
  'jesus',
  'quotation',
  'parallel',
  'topic',
  'words',
  'unclear',
];

/** Which links a visualization shows, set with optional, low-key controls. */
export interface LinkFilter {
  /** Genres whose links are hidden (a link is hidden if either end is in such a genre). */
  readonly hiddenGenres: ReadonlySet<GenreId>;
  /** The kinds of link shown. */
  readonly categories: ReadonlySet<LinkCategory>;
}

export function createLinkFilter(
  categories: Iterable<LinkCategory> = LINK_CATEGORIES.filter((category) => category !== 'unclear'),
): LinkFilter {
  return { hiddenGenres: new Set(), categories: new Set(categories) };
}

/** Every kind of link with a clear reason; links without one are left out until asked for. */
export const DEFAULT_LINK_FILTER: LinkFilter = createLinkFilter();

export function isDefaultFilter(filter: LinkFilter, defaults: LinkFilter): boolean {
  return (
    filter.hiddenGenres.size === 0 &&
    filter.categories.size === defaults.categories.size &&
    [...filter.categories].every((category) => defaults.categories.has(category))
  );
}

/** Shows or hides one kind of link. */
export function toggleCategory(filter: LinkFilter, category: LinkCategory): LinkFilter {
  const categories = new Set(filter.categories);
  if (categories.has(category)) categories.delete(category);
  else categories.add(category);
  return { ...filter, categories };
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
  const { categories } = filter;
  // The arguments keep upstream's shape; votes are not used (see LinkCategory).
  return (from, to, _votes, id) =>
    (reasons === undefined || id === undefined || categories.has(reasons.categoryOf(id))) &&
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
