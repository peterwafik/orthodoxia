import { describe, expect, it } from 'vitest';
import { CANONICAL_VERSIFICATION } from '../../core/bible/versification.ts';
import { CrossReferenceIndex } from '../../cross-references/cross-reference-index.ts';
import { createCrossReferenceColumns, verseIndex } from '../../test-utils/fixtures.ts';
import { LinkReasons } from '../../link-reasons/link-reasons.ts';
import { createLinkFilter, isDefaultFilter, selectLinks, toggleCategory } from './link-filter.ts';
import { computeVerseGenres } from './verse-genres.ts';

const verseGenres = computeVerseGenres(CANONICAL_VERSIFICATION);
const GEN = verseIndex('Gen', 1, 1);
const PS = verseIndex('Ps', 23, 1);
const JOHN = verseIndex('John', 1, 1);

const index = new CrossReferenceIndex(
  createCrossReferenceColumns([
    { from: GEN, to: JOHN, votes: 12 },
    { from: GEN, to: PS, votes: -3 },
    { from: PS, to: JOHN, votes: 4 },
  ]),
  CANONICAL_VERSIFICATION.verseCount,
);

// Orthodoxia: link 0 is a quotation, 1 has no clear reason, 2 shares a topic.
const reasons = new LinkReasons(
  {
    format: 'link-reasons',
    linkCount: 3,
    kinds: 'qut',
    sides: 'b-b',
    about: '---',
    topics: [{ en: 'Shepherd', ar: 'الراعي' }],
    topicOf: [0],
    words: [],
  },
  3,
);

describe('selectLinks', () => {
  it('keeps the links of the chosen categories, whatever their votes', () => {
    expect(selectLinks(index, verseGenres, createLinkFilter(), reasons).length).toBe(2);
    expect(selectLinks(index, verseGenres, createLinkFilter(['quotation']), reasons).length).toBe(
      1,
    );
    expect(selectLinks(index, verseGenres, createLinkFilter([]), reasons).length).toBe(0);
  });

  it('hides links that touch a hidden genre at either end', () => {
    const filter = { ...createLinkFilter(), hiddenGenres: new Set(['poetry'] as const) };
    const ids = selectLinks(index, verseGenres, filter, reasons);
    expect(Array.from(ids, (id) => index.link(id).votes)).toEqual([12]);
  });
});

describe('isDefaultFilter and toggleCategory', () => {
  it('compares against the defaults', () => {
    const defaults = createLinkFilter();
    expect(isDefaultFilter(createLinkFilter(), defaults)).toBe(true);
    expect(isDefaultFilter(toggleCategory(defaults, 'topic'), defaults)).toBe(false);
    expect(
      isDefaultFilter(toggleCategory(toggleCategory(defaults, 'topic'), 'topic'), defaults),
    ).toBe(true);
    expect(isDefaultFilter({ ...defaults, hiddenGenres: new Set(['acts']) }, defaults)).toBe(false);
  });
});
