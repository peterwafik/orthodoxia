import { describe, expect, it } from 'vitest';
import { cleanExtractedArabic, createLigatureRepair, dictionaryKey, learnSwappedPairs } from './arabic.ts';
import { parseStMarkCommentary, toParagraphs } from './stmark.ts';
import { entriesForVerse } from './types.ts';

describe('cleanExtractedArabic', () => {
  it('normalizes presentation forms, the Allah ligature, digits and stray spaces before marks', () => {
    expect(cleanExtractedArabic('ﺍﻟﻤﺴﻴﺢ ﺍﷲ ع۱: مسجون ًا  ٢٣')).toBe('المسيح الله ع1: مسجونًا 23');
  });
});

describe('ligature repair', () => {
  const counts = new Map(
    Object.entries({ الحسن: 300, الجميع: 248, المؤمن: 200, في: 5000, لم: 4000, ملا: 80, لما: 900, عمل: 600, علم: 300, إيمانهم: 40, تفسيره: 30, يسلمني: 4 }).map(
      ([word, count]) => [dictionaryKey(word), count],
    ),
  );
  const frequency = (key: string) => counts.get(key) ?? 0;
  const repair = createLigatureRepair(frequency, new Set(['حل', 'جل', 'مل', 'مي', 'هن', 'ري']));

  it.each([
    ['احلسن', 'الحسن'],
    ['اجلميع', 'الجميع'],
    ['املؤمن', 'المؤمن'],
    ['ىف', 'في'],
    ['مل', 'لم'],
    ['إمياهنم', 'إيمانهم'],
    ['تفسريه', 'تفسيره'],
    ['يسلمىن', 'يسلمني'],
    ['واحلسن', 'والحسن'],
  ])('repairs %s → %s', (broken, fixed) => {
    expect(repair(broken)).toBe(fixed);
  });

  it.each(['عمل', 'ملأ', 'كلمة'])('leaves a genuine word alone: %s', (word) => {
    expect(repair(word)).toBe(word);
  });

  it('learns swapped pairs from evidence', () => {
    const pairs = learnSwappedPairs(['احلسن', 'احلسن', 'املؤمن'], frequency, 1);
    expect(pairs.has('حل')).toBe(true);
    expect(pairs.has('مل')).toBe(true);
  });
});

describe('parseStMarkCommentary', () => {
  const pages = [
    { page: 1, lines: ['رسالة بولس الرسول إلى فليمون', 'مقدمة', 'أولا: كاتبها: بولس.'] },
    {
      page: 2,
      lines: [
        'الأصحاح الأول',
        '(1) التحية الرسولية (ع1-3):',
        '1 بُولُسُ أَسِيرُ يَسُوعَ 2 وَإِلَى أَبْفِيَّةَ',
        'ع1: بولس أسير يسوع المسيح: لم يدع نفسه رسولا بل أسيرًا.',
        '1- لأنه كان مسجونًا بروما فى ذلك الوقت.',
        'ع2، 3: إلى أبفية المحبوبة: هى زوجة فليمون.',
        '? إن سمح الله لك بالضيقات فاقبلها بخضوع.',
        '(2) محبة بولس (ع4-7):',
        '4 أَشْكُرُ إِلهِي',
        'ع4-7: يشكر بولس الله من أجل فليمون.',
      ],
    },
    { page: 3, lines: ['ع1: بداية أصحاح جديد.', '551'] },
  ];
  const parsed = parseStMarkCommentary(pages);

  it('keeps the book introduction', () => {
    expect(parsed.intro.map((paragraph) => paragraph.text).join(' ')).toContain('كاتبها');
  });

  it('splits chapters where the verse numbering restarts', () => {
    expect(parsed.chapters.map((chapter) => chapter.chapter)).toEqual([1, 2]);
  });

  it('reads single, listed and ranged verse markers', () => {
    expect(parsed.chapters[0]!.entries.map((entry) => entry.verses)).toEqual([
      [1, 1],
      [2, 3],
      [4, 7],
    ]);
  });

  it('skips the quoted Bible text and keeps sections, points and reflections', () => {
    const [first, second] = parsed.chapters[0]!.entries;
    expect(first!.section).toBe('(1) التحية الرسولية');
    expect(first!.paragraphs.map((paragraph) => paragraph.text).join(' ')).not.toContain('بُولُسُ أَسِيرُ');
    expect(first!.paragraphs[1]).toMatchObject({ kind: 'point' });
    expect(second!.paragraphs.at(-1)).toMatchObject({ kind: 'reflection', text: 'إن سمح الله لك بالضيقات فاقبلها بخضوع.' });
  });

  it('finds the entries for a verse inside a range', () => {
    expect(entriesForVerse(parsed.chapters[0]!, 5).map((entry) => entry.verses)).toEqual([[4, 7]]);
  });

  it('turns the private-use reflection glyph into a reflection paragraph', () => {
    expect(toParagraphs([' لاحظ أيها الحبيب.'])).toEqual([{ text: 'لاحظ أيها الحبيب.', kind: 'reflection' }]);
  });

  it('joins wrapped lines into one paragraph', () => {
    expect(toParagraphs(['هذا سطر طويل من التفسير يستمر', 'إلى السطر التالى.'])).toEqual([
      { text: 'هذا سطر طويل من التفسير يستمر إلى السطر التالى.' },
    ]);
  });
});
