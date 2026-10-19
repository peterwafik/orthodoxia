import { describe, expect, it } from 'vitest';
import { mergeRanges, toPacked, fromPacked } from './ranges.ts';
import type { PassageRange } from './reference.ts';

const r = (book: string, c1: number, v1: number | null, c2: number, v2: number | null): PassageRange => ({ book, from: { chapter: c1, verse: v1 }, to: { chapter: c2, verse: v2 } });

describe('mergeRanges', () => {
  it('joins overlapping and touching ranges of one book and sorts them', () => {
    const merged = mergeRanges([r('JHN', 3, 16, 3, 18), r('JHN', 3, 1, 3, 5), r('JHN', 3, 5, 3, 8), r('JHN', 3, 9, 3, 10)]);
    expect(merged).toEqual([r('JHN', 3, 1, 3, 10), r('JHN', 3, 16, 3, 18)]);
  });

  it('absorbs a verse inside a whole chapter and joins a chapter to its neighbour', () => {
    expect(mergeRanges([r('PSA', 23, null, 23, null), r('PSA', 23, 4, 23, 4)])).toEqual([r('PSA', 23, null, 23, null)]);
    expect(mergeRanges([r('PSA', 1, null, 1, null), r('PSA', 2, null, 2, null)])).toEqual([r('PSA', 1, null, 2, null)]);
  });

  it('keeps different books apart', () => {
    expect(mergeRanges([r('MAT', 5, 3, 5, 3), r('LUK', 6, 20, 6, 20)])).toHaveLength(2);
  });
});

describe('packing', () => {
  it('round-trips a range through the compact form used in the data file', () => {
    const range = r('1CO', 13, 1, 13, 13);
    expect(toPacked(range)).toEqual(['1CO', 13, 1, 13, 13]);
    expect(fromPacked(toPacked(range))).toEqual(range);
    const whole = r('PSA', 23, null, 24, null);
    expect(toPacked(whole)).toEqual(['PSA', 23, 0, 24, 0]);
    expect(fromPacked(toPacked(whole))).toEqual(whole);
  });
});
