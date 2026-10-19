import { describe, expect, it } from 'vitest';
import { parsePassages, parseReference, versesInChapter } from './reference.ts';

describe('parseReference', () => {
  it('reads a verse range inside one chapter', () => {
    expect(parseReference('1 Corinthians 13:1–13')).toEqual([{ book: '1CO', from: { chapter: 13, verse: 1 }, to: { chapter: 13, verse: 13 } }]);
  });

  it('reads a single verse, a whole chapter and a run of chapters', () => {
    expect(parseReference('Proverbs 22:6')).toEqual([{ book: 'PRO', from: { chapter: 22, verse: 6 }, to: { chapter: 22, verse: 6 } }]);
    expect(parseReference('Psalm 42')).toEqual([{ book: 'PSA', from: { chapter: 42, verse: null }, to: { chapter: 42, verse: null } }]);
    expect(parseReference('Revelation 4–5')).toEqual([{ book: 'REV', from: { chapter: 4, verse: null }, to: { chapter: 5, verse: null } }]);
  });

  it('reads a range that crosses a chapter boundary', () => {
    expect(parseReference('Ephesians 5:21–6:4')).toEqual([{ book: 'EPH', from: { chapter: 5, verse: 21 }, to: { chapter: 6, verse: 4 } }]);
  });

  it('reads two parts joined by "and"', () => {
    expect(parseReference('Job 1–2 and 38–42')).toHaveLength(2);
    expect(parseReference('Genesis 12 and 15').map((range) => range.from.chapter)).toEqual([12, 15]);
  });

  it('accepts hyphens as well as en dashes', () => {
    expect(parseReference('John 13:34-35')).toEqual(parseReference('John 13:34–35'));
  });

  it('refuses a book it does not know instead of guessing', () => {
    expect(() => parseReference('Hezekiah 3:1')).toThrow(/Hezekiah/);
    expect(() => parseReference('Genesis')).toThrow();
  });
});

describe('parsePassages', () => {
  it('splits a list at semicolons', () => {
    expect(parsePassages('Matthew 6:5–15; Psalm 63; 1 Thessalonians 5:17')).toHaveLength(3);
  });
});

describe('versesInChapter', () => {
  const ranges = parsePassages('Ephesians 5:21–6:4; Psalm 42; Job 1–2 and 38–42');
  it('gives the part of a chapter a range covers', () => {
    expect(versesInChapter(ranges, 'EPH', 5)).toEqual([[21, Infinity]]);
    expect(versesInChapter(ranges, 'EPH', 6)).toEqual([[1, 4]]);
    expect(versesInChapter(ranges, 'PSA', 42)).toEqual([[1, Infinity]]);
  });
  it('gives nothing for a chapter outside the ranges or another book', () => {
    expect(versesInChapter(ranges, 'EPH', 4)).toEqual([]);
    expect(versesInChapter(ranges, 'JOB', 10)).toEqual([]);
    expect(versesInChapter(ranges, 'JOB', 40)).toEqual([[1, Infinity]]);
    expect(versesInChapter(ranges, 'GEN', 5)).toEqual([]);
  });
});
