import { describe, expect, it } from 'vitest';
import { parseVanDyckBook } from './vandyck.ts';

describe('parseVanDyckBook', () => {
  it('reads verses, skipping titles, headings and psalm superscriptions', () => {
    const verses = parseVanDyckBook(
      [
        '\\id PSA - Converted',
        '\\h اَلْمَزَامِيرُ',
        '\\c 3 ',
        '\\cl اَلْمَزْمُورُ ٱلثَّالِثُ ',
        '\\d مَزْمُورٌ لِدَاوُدَ  ',
        '\\p',
        '\\v 1 يَارَبُّ، مَا أَكْثَرَ مُضَايِقِيَّ!  ',
        '\\v 2 كَثِيرُونَ يَقُولُونَ.   ',
      ].join('\r\n'),
    );
    expect(verses).toEqual([
      { book: 'Ps', chapter: 3, verse: 1, text: 'يَارَبُّ، مَا أَكْثَرَ مُضَايِقِيَّ!' },
      { book: 'Ps', chapter: 3, verse: 2, text: 'كَثِيرُونَ يَقُولُونَ.' },
    ]);
  });

  it('maps USFM book codes to OSIS IDs', () => {
    const [verse] = parseVanDyckBook('\\id 1JN\n\\c 1\n\\p\n\\v 1 اَلَّذِي كَانَ مِنَ ٱلْبَدْءِ\n');
    expect(verse?.book).toBe('1John');
  });

  it('rejects an unknown book', () => {
    expect(() => parseVanDyckBook('\\id XYZ\n\\c 1\n\\v 1 x')).toThrow(/unknown book/);
  });
});
