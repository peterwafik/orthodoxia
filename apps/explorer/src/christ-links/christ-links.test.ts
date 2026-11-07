// Orthodoxia: checks of the prophecies-and-symbols list (see PATCHES.md).

import { describe, expect, it } from 'vitest';
import { CANONICAL_VERSIFICATION as V } from '../core/bible/versification.ts';
import { CHRIST_LINKS } from './christ-links-data.ts';
import { ChristLinkIndex, christLinks, isChristLinkId, parseRanges } from './christ-links.ts';

const verse = (book: Parameters<typeof V.indexOf>[0]['book'], chapter: number, n: number) => {
  const index = V.indexOf({ book, chapter, verse: n });
  if (index === undefined) throw new Error('bad verse');
  return index;
};

describe('parseRanges', () => {
  it('reads verses, ranges in a chapter, ranges across chapters and lists', () => {
    expect(parseRanges('Mic.5.2', V)).toEqual([
      { start: verse('Mic', 5, 2), end: verse('Mic', 5, 2) },
    ]);
    expect(parseRanges('Luke.2.4-7', V)).toEqual([
      { start: verse('Luke', 2, 4), end: verse('Luke', 2, 7) },
    ]);
    expect(parseRanges('Isa.52.13-53.12', V)).toEqual([
      { start: verse('Isa', 52, 13), end: verse('Isa', 53, 12) },
    ]);
    expect(parseRanges('Matt.2.6; Luke.2.4-7', V)).toHaveLength(2);
  });

  it('rejects verses that do not exist', () => {
    expect(() => parseRanges('Mic.5.99', V)).toThrow();
    expect(() => parseRanges('Luke.2.7-4', V)).toThrow();
    expect(() => parseRanges('Nope.1.1', V)).toThrow();
  });
});

describe('the curated list', () => {
  it('has only real verses, the first side in the Old Testament and the second in the New', () => {
    for (const entry of CHRIST_LINKS) {
      for (const range of parseRanges(entry.ot, V)) {
        expect(V.bookAt(range.end).testament, `${entry.en}: ${entry.ot}`).toBe('OT');
      }
      for (const range of parseRanges(entry.nt, V)) {
        expect(V.bookAt(range.start).testament, `${entry.en}: ${entry.nt}`).toBe('NT');
      }
    }
  });

  it('gives every entry a title in both languages and keeps titles unique', () => {
    for (const entry of CHRIST_LINKS) {
      expect(entry.en.trim()).not.toBe('');
      expect(entry.ar.trim()).not.toBe('');
    }
    expect(new Set(CHRIST_LINKS.map((entry) => entry.en)).size).toBe(CHRIST_LINKS.length);
    expect(new Set(CHRIST_LINKS.map((entry) => entry.ar)).size).toBe(CHRIST_LINKS.length);
  });

  it('keeps each Old Testament side short enough to read as one thread', () => {
    for (const entry of CHRIST_LINKS) {
      for (const range of parseRanges(entry.ot, V)) {
        expect(range.end - range.start, entry.en).toBeLessThan(6);
      }
    }
  });
});

describe('ChristLinkIndex', () => {
  const index = new ChristLinkIndex(
    [
      {
        kind: 'prophecy',
        en: 'Born in Bethlehem',
        ar: 'يولد في بيت لحم',
        ot: 'Mic.5.2',
        nt: 'Matt.2.6; Luke.2.4-7',
      },
    ],
    V,
  );

  it('leads from the prophecy to each fulfilment', () => {
    const connections = index.connectionsIn({ start: verse('Mic', 5, 2), end: verse('Mic', 5, 2) });
    expect(connections.map((connection) => [connection.direction, connection.otherStart])).toEqual([
      ['outgoing', verse('Matt', 2, 6)],
      ['outgoing', verse('Luke', 2, 4)],
    ]);
    expect(connections[0]?.entry.en).toBe('Born in Bethlehem');
  });

  it('leads back from a fulfilment to the prophecy, once for a range', () => {
    const luke2 = V.chapterRange('Luke', 2);
    if (!luke2) throw new Error('no chapter');
    const connections = index.connectionsIn(luke2);
    expect(connections).toHaveLength(1);
    expect(connections[0]).toMatchObject({
      direction: 'incoming',
      here: verse('Luke', 2, 4),
      otherStart: verse('Mic', 5, 2),
    });
  });

  it('uses IDs that cannot collide with cross-references', () => {
    expect(christLinks().links.every((link) => isChristLinkId(link.id))).toBe(true);
    expect(isChristLinkId(344_798)).toBe(false);
  });
});
