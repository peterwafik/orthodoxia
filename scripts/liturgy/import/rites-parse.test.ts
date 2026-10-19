import { createRequire } from 'node:module';
import { describe, expect, it } from 'vitest';

const require = createRequire(import.meta.url);
const { parsePage, mergePages } = require('./rites-parse.cjs') as {
  parsePage: (page: unknown) => { type: string; role: string | null; en: string; ar: string }[];
  mergePages: (pages: { type: string; role: string | null; en: string; ar: string }[][]) => { type: string; role: string; en: string; ar: string }[];
};

// Made-up page with the layout of the book: Coptic (font c) at x≈71, English (font e, bold font b) at x≈261,
// Arabic (font a) at x≈404-541. Coordinates are PDF coordinates: larger y is higher on the page.
const piece = (t: string, x: number, y: number, f: string, w = 40) => ({ t, x, y, w, h: 12, f });
const page = {
  page: 1,
  width: 612,
  height: 792,
  items: [
    piece('7', 300, 52.5, 'e'), // page number
    piece('Sample Section', 220, 708, 'b', 171), // heading
    piece('قسم تجريبي', 279, 694, 'a', 54), // Arabic heading
    piece('Pi`xyz@', 71, 659, 'c'), // Coptic label
    piece('Priest:', 261.4, 663, 'b', 34),
    piece('Let us begin the', 279.4, 649, 'e', 100),
    piece('first sample.', 261.4, 635, 'e', 60),
    piece('الكاهن:', 509.7, 662, 'a', 31),
    piece('لنبدأ المثال', 450, 647, 'a', 90),
    piece('الأول.', 505, 632, 'a', 35),
    piece('Pidiakwn@', 71, 600, 'c'),
    piece('Deacon:', 261.4, 600, 'b', 42),
    piece('Pray.', 279.4, 586, 'e', 30),
    piece('الشماس:', 502, 599, 'a', 38),
    piece('صلوا.', 500, 585, 'a', 40),
    piece('Pilaoc@', 71, 560, 'c'),
    piece('People:', 261.4, 560, 'b', 38),
    piece('Amen.', 279.4, 546, 'e', 30),
    piece('الشعب:', 509, 559, 'a', 31),
    piece('آمين.', 500, 545, 'a', 40),
    piece('Then the priest turns to', 71.3, 500, 'e', 150), // rubric: English at the left margin, no Coptic
    piece('the people and says:', 71.3, 486, 'e', 110),
    piece('ثم يلتفت الكاهن إلى', 430, 499, 'a', 110),
    piece('الشعب ويقول:', 470, 485, 'a', 70),
    piece('Pi`xyz2@', 71, 440, 'c'),
    piece('Priest:', 261.4, 440, 'b', 34),
    piece('Peace to all.', 279.4, 426, 'e', 60),
    piece('السلام للجميع', 440, 425, 'a', 100),
    piece('Pi`cx@', 71, 400, 'c'),
    piece('`x@', 71, 380, 'c'),
    piece('a continued', 261.4, 300, 'e', 60), // no label: continues the speaker above
    piece('sentence.', 261.4, 286, 'e', 40),
    piece('تابع الكلام', 460, 299, 'a', 80),
  ],
};

describe('rites page splitter', () => {
  it('splits a page into speakers and rubrics, with English and Arabic from the same place', () => {
    const segments = parsePage(page);
    const byType = segments.map((segment) => `${segment.type}:${segment.role}`);
    expect(byType).toEqual(['say:priest', 'say:deacon', 'say:people', 'rubric:null', 'say:priest']);
    expect(segments[0]).toMatchObject({ en: 'Let us begin the first sample.', ar: 'لنبدأ المثال الأول.' });
    expect(segments[1]).toMatchObject({ en: 'Pray.', ar: 'صلوا.' });
    expect(segments[2]).toMatchObject({ en: 'Amen.', ar: 'آمين.' });
    expect(segments[3]).toMatchObject({ en: 'Then the priest turns to the people and says:', ar: 'ثم يلتفت الكاهن إلى الشعب ويقول:' });
  });

  it('leaves out the page number, the heading and the Coptic column', () => {
    const everything = JSON.stringify(parsePage(page));
    expect(everything).not.toContain('Sample Section');
    expect(everything).not.toContain('قسم تجريبي');
    expect(everything).not.toContain('Pi`xyz');
    expect(everything).not.toMatch(/"en":"7"/);
  });

  it('puts a vowel sign on its letter, before the full stop, and removes spaces before vowel signs', () => {
    const small = {
      page: 2, width: 612, height: 792,
      items: [
        piece('Priest:', 261.4, 663, 'b', 34), piece('Pi`a@', 71, 663, 'c'), piece('Pi`b@', 71, 640, 'c'),
        piece('Hello.', 279.4, 649, 'e', 40),
        piece('الكاهن:', 509.7, 662, 'a', 31),
        piece('وأيضا ً', 480, 647, 'a', 60),
        piece('إنعاما', 518.3, 600, 'a', 22.6),
        piece('.', 515, 600, 'a', 3.3),
        piece('ً', 517.4, 600, 'a', 0),
      ],
    };
    const [segment] = parsePage(small);
    expect(segment.ar).toBe('وأيضاً إنعاماً.');
  });

  it('does not mistake English text for Arabic when the two share a font', () => {
    const shared = {
      page: 3, width: 612, height: 792,
      items: [
        piece('Pi`a@', 71, 660, 'c'), piece('Pi`b@', 71, 640, 'c'),
        piece('Priest:', 261.4, 663, 'b', 34), piece('Speak.', 279.4, 649, 'e', 40),
        piece('الكاهن:', 509.7, 662, 'a', 31), piece('تكلم.', 500, 647, 'a', 40),
        piece('Then he turns to the people', 71.3, 500, 'a', 150),
        piece('and says:', 71.3, 486, 'a', 60),
        piece('ثم يلتفت إلى الشعب ويقول:', 430, 499, 'a', 110),
      ],
    };
    const segments = parsePage(shared);
    expect(segments.map((segment) => segment.type)).toEqual(['say', 'rubric']);
    expect(segments[1]).toMatchObject({ en: 'Then he turns to the people and says:', ar: 'ثم يلتفت إلى الشعب ويقول:' });
  });

  it('keeps the unlabelled lines at the bottom with the last speaker (the priest)', () => {
    const segments = parsePage(page);
    expect(segments.at(-1)).toMatchObject({ role: 'priest' });
    expect(segments.at(-1)!.en).toContain('Peace to all.');
    expect(segments.at(-1)!.en).toContain('a continued sentence.');
    expect(segments.at(-1)!.ar).toContain('تابع الكلام');
  });

  it('joins the continuation at the top of the next page to the part above, and carries the speaker', () => {
    const first = [{ type: 'say', role: 'deacon', en: 'Pray for', ar: 'صلوا من' }];
    const second = [
      { type: 'say', role: null, en: 'the whole world.', ar: 'أجل العالم.' },
      { type: 'say', role: 'people', en: 'Amen.', ar: 'آمين.' },
      { type: 'say', role: null, en: 'More.', ar: 'المزيد.' },
    ];
    const blocks = mergePages([first, second]);
    expect(blocks.map((block) => block.role)).toEqual(['deacon', 'people', 'people']);
    expect(blocks[0]).toMatchObject({ en: 'Pray for the whole world.', ar: 'صلوا من أجل العالم.' });
  });
});
