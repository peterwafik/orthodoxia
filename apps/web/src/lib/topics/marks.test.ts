import { describe, expect, it } from 'vitest';
import { marksForBook, marksForChapter } from './marks.ts';

describe('marksForChapter', () => {
  it('lists the topics, families first, whose passages fall in the chapter, with their verse spans', () => {
    const marks = marksForChapter('LUK', 15, 'hebrew');
    expect(marks['6']).toBeDefined(); // Sin, repentance, and forgiveness: Luke 15 is a starting passage
    expect(marks['42.19']).toEqual([[11, 32]]); // the Parable of the Prodigal Son
    expect(marks['42.20']).toEqual([[1, 7]]); // the Parable of the Lost Sheep
  });

  it('gives an empty result for a chapter nothing is tagged in', () => {
    expect(marksForChapter('ZZZ', 1, 'hebrew')).toEqual({});
    expect(marksForChapter('LUK', 99, 'hebrew')).toEqual({});
  });

  it('reads a psalm by its Hebrew number even in the Septuagint numbering', () => {
    // Psalm 42 (Hebrew) is Psalm 41 in the Septuagint, and Psalm 43 (Hebrew) is 42
    expect(marksForChapter('PSA', 41, 'lxx')).toEqual(marksForChapter('PSA', 42, 'hebrew'));
    expect(marksForChapter('PSA', 42, 'lxx')).toEqual(marksForChapter('PSA', 43, 'hebrew'));
    expect(marksForChapter('PSA', 41, 'lxx')['2']).toBeDefined();
  });

  it('keeps the verse spans of a whole chapter open-ended', () => {
    expect(marksForChapter('PSA', 150, 'hebrew')['10']).toEqual([[1, null]]);
  });

  it('gives a whole book at once, by chapter', () => {
    const book = marksForBook('LUK');
    expect(Object.keys(book).map(Number)).toContain(15);
    expect(book[15]!['42.19']).toEqual([[11, 32]]);
  });
});
