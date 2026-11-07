// Orthodoxia: checks of the link reasons (see PATCHES.md).

import { describe, expect, it } from 'vitest';
import { compileLinkFilter, createLinkFilter } from '../visualizations/shared/link-filter.ts';
import { contentWords, findNames, sharedRun, stem, tokenize } from './evidence.ts';
import { LinkReasons } from './link-reasons.ts';

describe('evidence', () => {
  it('finds a quotation, but not a run of filler words', () => {
    const micah = tokenize('But you, Bethlehem Ephrathah, who are small among the clans of Judah');
    const matthew = tokenize('But you, Bethlehem, in the land of Judah, are by no means least');
    expect(
      sharedRun(
        tokenize('the God of the spirits of all flesh'),
        tokenize('O God, the God of the spirits of all flesh'),
      ),
    ).toBe(8);
    expect(sharedRun(micah, matthew)).toBe(0);
    expect(
      sharedRun(tokenize('and the LORD said to Moses'), tokenize('and the LORD said to Aaron')),
    ).toBe(0);
  });

  it('keeps meaningful words, stemmed', () => {
    expect(stem('shepherds')).toBe('shepherd');
    expect(contentWords(tokenize('The LORD is my shepherd; I shall not want.'))).toEqual([
      'shepherd',
      'want',
    ]);
  });

  it('tells names from ordinary words', () => {
    const names = findNames([
      'He was buried in Aijalon in the land of Zebulun.',
      'The sun stood still over Aijalon.',
      'The shepherd went out. A shepherd keeps the flock.',
    ]);
    expect(names.has('aijalon')).toBe(true);
    expect(names.has('shepherd')).toBe(false);
  });
});

describe('LinkReasons', () => {
  const reasons = new LinkReasons(
    {
      format: 'link-reasons',
      linkCount: 6,
      kinds: 'qptwqu',
      sides: 'bbbbb-',
      about: '----j-',
      topics: [{ en: 'Circumcision', ar: 'الختان' }],
      topicOf: [0],
      words: ['palm branches'],
    },
    6,
  );

  it('reads each kind, with its topic or words', () => {
    expect(reasons.reasonOf(0)).toMatchObject({ kind: 'quotation' });
    expect(reasons.reasonOf(1)).toMatchObject({ kind: 'parallel' });
    expect(reasons.reasonOf(2)).toMatchObject({
      kind: 'topic',
      topic: { en: 'Circumcision', ar: 'الختان' },
    });
    expect(reasons.reasonOf(3)).toMatchObject({ kind: 'words', words: 'palm branches' });
    expect(reasons.reasonOf(4)).toMatchObject({ kind: 'quotation' });
    expect(reasons.reasonOf(5)).toMatchObject({ kind: 'unclear' });
  });

  it('puts a link about Jesus under its own category', () => {
    expect(reasons.categoryOf(4)).toBe('jesus');
    expect(reasons.reasonOf(4)).toMatchObject({ kind: 'quotation', aboutJesus: true });
    expect(reasons.categoryOf(0)).toBe('quotation');
  });

  it('shows each category only when it is chosen', () => {
    const genres = new Uint8Array(10);
    const usual = compileLinkFilter(createLinkFilter(), genres, reasons);
    const unclearToo = compileLinkFilter(
      createLinkFilter(['unclear', 'quotation']),
      genres,
      reasons,
    );
    expect(usual(0, 1, 5, 0)).toBe(true);
    expect(usual(0, 1, 5, 5)).toBe(false);
    expect(unclearToo(0, 1, 5, 5)).toBe(true);
    expect(unclearToo(0, 1, 5, 2)).toBe(false);
  });

  it('refuses reasons that do not match the links', () => {
    expect(
      () =>
        new LinkReasons(
          {
            format: 'link-reasons',
            linkCount: 2,
            kinds: 'qq',
            sides: 'bb',
            about: '--',
            topics: [],
            topicOf: [],
            words: [],
          },
          3,
        ),
    ).toThrow();
  });
});
