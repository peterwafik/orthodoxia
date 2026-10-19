import { describe, expect, it } from 'vitest';
import { clipOrder, filmAt, sceneAt } from './film.ts';

// Chapters of 6, 14, 8, 18 and 6 stops, as in the Liturgy.
const ranges = [
  { first: 0, last: 5 },
  { first: 6, last: 19 },
  { first: 20, last: 27 },
  { first: 28, last: 45 },
  { first: 46, last: 51 },
];
const links = new Set([1, 2, 3]);

describe('the film timeline', () => {
  it('starts at the first frame of the first dive and ends at the last frame of the last', () => {
    expect(filmAt(0, ranges, links)).toEqual({ clip: 'dive-1', t: 0 });
    expect(filmAt(-1, ranges, links)).toEqual({ clip: 'dive-1', t: 0 });
    expect(filmAt(51, ranges, links)).toEqual({ clip: 'dive-5', t: 1 });
    expect(filmAt(60, ranges, links)).toEqual({ clip: 'dive-5', t: 1 });
  });

  it('plays a chapter’s dive across its stops', () => {
    expect(filmAt(2.5, ranges, links)).toEqual({ clip: 'dive-1', t: 0.5 });
    expect(filmAt(6, ranges, links)).toEqual({ clip: 'dive-2', t: 0 });
    expect(filmAt(19, ranges, links)).toEqual({ clip: 'dive-2', t: 1 });
  });

  it('plays the link between the last stop of a chapter and the first of the next', () => {
    expect(filmAt(5, ranges, links)).toEqual({ clip: 'dive-1', t: 1 });
    expect(filmAt(5.5, ranges, links)).toEqual({ clip: 'link-1', t: 0.5 });
    expect(filmAt(19.25, ranges, links)).toEqual({ clip: 'link-2', t: 0.25 });
  });

  it('dissolves one dive into the next where a chapter has no link', () => {
    expect(filmAt(45.5, ranges, links)).toEqual({ clip: 'dive-4', t: 1, next: { clip: 'dive-5', t: 0, mix: 0.5 } });
  });

  it('is continuous: just past every seam still shows the frame the seam ends on', () => {
    for (let chapter = 0; chapter < 3; chapter++) {
      const { last } = ranges[chapter]!;
      expect(filmAt(last, ranges, links)).toEqual({ clip: `dive-${chapter + 1}`, t: 1 });
      const after = filmAt(last + 1e-6, ranges, links);
      expect(after.clip).toBe(`link-${chapter + 1}`);
      expect(after.t).toBeLessThan(0.001);
    }
  });

  it('orders the clips as they are met', () => {
    expect(clipOrder(5, links)).toEqual(['dive-1', 'link-1', 'dive-2', 'link-2', 'dive-3', 'link-3', 'dive-4', 'dive-5']);
  });

  it('names the nearest scene', () => {
    expect(sceneAt(0, ranges)).toBe(0);
    expect(sceneAt(12, ranges)).toBe(1);
    expect(sceneAt(19.4, ranges)).toBe(1);
    expect(sceneAt(19.6, ranges)).toBe(2);
    expect(sceneAt(51, ranges)).toBe(4);
  });
});
