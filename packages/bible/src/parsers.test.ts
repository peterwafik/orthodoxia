import { describe, expect, it } from 'vitest';
import { convertPsalm, hebrewToLxx, lxxToHebrew } from './psalms.ts';
import { parseWikisourceBook } from './wikisource.ts';

describe('parseWikisourceBook', () => {
  const page = [
    '== سفر طوبيا 1 ==',
    '1 كان طوبيا وهو من سبط نفتالي',
    '',
    '2 قد جلي في عهد شلمناسر',
    'ملك اشور',
    '',
    '== سفر طوبيا ٢ ==',
    '<div class="prose">',
    '0 عنوان',
    '1 ولما كان [[عيد]] الرب',
    '</div>',
    '[[تصنيف:الأسفار القانونية الثانية]]',
  ].join('\n');

  it('reads chapters from headings and verses from numbered lines', () => {
    const book = parseWikisourceBook(page, 'TOB', 'طوبيا');
    expect(book.chapters.map((chapter) => chapter.number)).toEqual([1, 2]);
    expect(book.chapters[0]!.verses.map((verse) => verse.number)).toEqual(['1', '2']);
  });

  it('joins wrapped lines onto the verse above', () => {
    const book = parseWikisourceBook(page, 'TOB', 'طوبيا');
    expect(book.chapters[0]!.verses[1]!.content[0]!.text).toBe('قد جلي في عهد شلمناسر ملك اشور');
  });

  it('drops verse 0, HTML, links and categories', () => {
    const book = parseWikisourceBook(page, 'TOB', 'طوبيا');
    expect(book.chapters[1]!.verses).toHaveLength(1);
    expect(book.chapters[1]!.verses[0]!.content[0]!.text).toBe('ولما كان عيد الرب');
  });
});

describe('psalm numbering', () => {
  it('maps the well-known penitential psalm: LXX 50 = Hebrew 51', () => {
    expect(lxxToHebrew(50)).toEqual([51]);
    expect(hebrewToLxx(51)).toEqual([50]);
  });

  it('handles the split and merged psalms', () => {
    expect(lxxToHebrew(9)).toEqual([9, 10]);
    expect(hebrewToLxx(116)).toEqual([114, 115]);
    expect(lxxToHebrew(146)).toEqual([147]);
    expect(hebrewToLxx(147)).toEqual([146, 147]);
  });

  it('is consistent in both directions for every psalm', () => {
    for (let hebrew = 1; hebrew <= 150; hebrew++) {
      for (const lxx of hebrewToLxx(hebrew)) expect(lxxToHebrew(lxx)).toContain(hebrew);
    }
    for (let lxx = 1; lxx <= 150; lxx++) {
      for (const hebrew of lxxToHebrew(lxx)) expect(hebrewToLxx(hebrew)).toContain(lxx);
    }
  });

  it('has no Hebrew counterpart for Psalm 151', () => {
    expect(convertPsalm(151, 'lxx', 'hebrew')).toBeUndefined();
    expect(convertPsalm(23, 'hebrew', 'lxx')).toBe(22);
  });
});
