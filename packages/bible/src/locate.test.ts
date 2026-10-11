import { describe, expect, it } from 'vitest';
import { BOOKS } from './books.ts';
import { EDITIONS } from './editions.ts';
import { equivalentLocation } from './locate.ts';

describe('equivalentLocation', () => {
  it('keeps the same chapter between editions that share numbering', () => {
    expect(equivalentLocation('kjv', 'svd', { book: 'JHN', chapter: 3 })).toEqual({ book: 'JHN', chapter: 3 });
  });

  it('converts psalm numbers to and from the Septuagint', () => {
    expect(equivalentLocation('svd', 'lxx', { book: 'PSA', chapter: 51 })).toEqual({ book: 'PSA', chapter: 50 });
    expect(equivalentLocation('lxx', 'kjv', { book: 'PSA', chapter: 22 })).toEqual({ book: 'PSA', chapter: 23 });
  });

  it('maps Psalm 151 between its own book and the Septuagint psalter', () => {
    expect(equivalentLocation('lxx', 'kjv', { book: 'PSA', chapter: 151 })).toEqual({ book: 'PS2', chapter: 1 });
    expect(equivalentLocation('kjv', 'lxx', { book: 'PS2', chapter: 1 })).toEqual({ book: 'PSA', chapter: 151 });
    expect(equivalentLocation('kjv', 'svd', { book: 'PS2', chapter: 1 })).toBeNull();
  });

  it('maps the Letter of Jeremiah and Baruch 6', () => {
    expect(equivalentLocation('lxx', 'kjv', { book: 'LJE', chapter: 1 })).toEqual({ book: 'BAR', chapter: 6 });
    expect(equivalentLocation('svd', 'lxx', { book: 'BAR', chapter: 6 })).toEqual({ book: 'LJE', chapter: 1 });
    expect(equivalentLocation('svd', 'lxx', { book: 'BAR', chapter: 2 })).toEqual({ book: 'BAR', chapter: 2 });
  });

  it('sends the Song of the Three to Daniel 3 in the Septuagint', () => {
    expect(equivalentLocation('kjv', 'lxx', { book: 'S3Y', chapter: 1 })).toEqual({ book: 'DAN', chapter: 3 });
  });

  it('only ever points at books the target edition has', () => {
    for (const from of EDITIONS) {
      for (const to of EDITIONS) {
        for (const book of BOOKS.filter((candidate) => candidate.code in from.books)) {
          const result = equivalentLocation(from.id, to.id, { book: book.code, chapter: 1 });
          if (result !== null) expect(to.books).toHaveProperty(result.book);
        }
      }
    }
  });
});
