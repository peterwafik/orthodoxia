import { bookByCode } from '@orthodoxia/bible';
import { describe, expect, it } from 'vitest';
import { frameFor, heightPerWidth } from '../lib/holy-mass/camera.ts';
import { CHAPTERS, REGIONS, STOPS, stopHash } from './holy-mass.ts';

const image = { width: 2160, height: 3840 };

describe('the Holy Mass journey', () => {
  it('has 52 stops in the five chapters of the approved design', () => {
    expect(STOPS).toHaveLength(52);
    const range = (id: number) => {
      const numbers = STOPS.filter((stop) => stop.chapter === id).map((stop) => stop.n);
      return [Math.min(...numbers), Math.max(...numbers)];
    };
    expect(CHAPTERS.map((chapter) => range(chapter.id))).toEqual([
      [1, 6],
      [7, 20],
      [21, 28],
      [29, 46],
      [47, 52],
    ]);
    STOPS.forEach((stop, index) => expect(stop.n).toBe(index + 1));
  });

  it('puts "Lift up your hearts" at stop 29, as in the approved design', () => {
    expect(STOPS[28]!.slug).toBe('lift-up-your-hearts');
    expect(STOPS[28]!.dialogue).toBeDefined();
  });

  it('has unique, URL-safe addresses', () => {
    const hashes = STOPS.map(stopHash);
    expect(new Set(hashes).size).toBe(52);
    for (const hash of hashes) expect(hash).toMatch(/^\d+-[a-z0-9-]+$/);
  });

  it('has every text in both languages', () => {
    for (const stop of STOPS) {
      for (const field of [stop.title, stop.what, stop.meaning, stop.meditate]) {
        expect(field.en.trim(), `stop ${stop.n}`).not.toBe('');
        expect(field.ar, `stop ${stop.n}`).toMatch(/[؀-ۿ]/);
      }
    }
  });

  it('uses only known regions and real Bible books', () => {
    for (const stop of STOPS) {
      expect(REGIONS[stop.region], `stop ${stop.n}`).toBeDefined();
      for (const reference of stop.scripture) expect(bookByCode(reference.book), `${stop.n} ${reference.book}`).toBeDefined();
    }
  });

  it('keeps every camera box inside the picture', () => {
    for (const stop of STOPS) {
      const [cx, cy, w, h] = stop.box;
      expect(cx - w / 2).toBeGreaterThanOrEqual(-0.001);
      expect(cx + w / 2).toBeLessThanOrEqual(1.001);
      expect(cy - h / 2).toBeGreaterThanOrEqual(-0.001);
      expect(cy + h / 2).toBeLessThanOrEqual(1.001);
    }
  });

  it('starts zoomed all the way out', () => {
    expect(STOPS[0]!.box).toEqual([0.5, 0.5, 1, 1]);
  });

  it('ends with only the heavenly top of the picture in view, on every screen shape', () => {
    const last = STOPS.at(-1)!;
    for (const view of [
      { width: 760, height: 900 },
      { width: 390, height: 290 },
      { width: 390, height: 520 },
      { width: 1100, height: 700 },
    ]) {
      const frame = frameFor(last.box, view, image);
      const visibleHeight = frame.vw * heightPerWidth(view, image);
      expect(frame.cy + visibleHeight / 2, `${view.width}x${view.height}`).toBeLessThanOrEqual(0.25 + 1e-9);
    }
  });

  it('climbs from the church toward heaven, chapter by chapter', () => {
    const mean = (chapter: number) => {
      const stops = STOPS.filter((stop) => stop.chapter === chapter);
      return stops.reduce((sum, stop) => sum + stop.box[1], 0) / stops.length;
    };
    // A smaller y is higher in the picture, nearer heaven.
    expect(mean(2)).toBeLessThan(mean(1));
    expect(mean(3)).toBeLessThan(mean(1));
    expect(mean(4)).toBeLessThan(mean(3));
    expect(mean(4)).toBeLessThan(mean(2));
    expect(STOPS.at(-1)!.box[1]).toBeLessThan(0.3);
  });

  it('marks parts that differ among the three liturgies, never the whole Liturgy of the Word', () => {
    const varying = STOPS.filter((stop) => stop.varies === true);
    expect(varying.length).toBeGreaterThan(0);
    expect(varying.every((stop) => stop.chapter === 4)).toBe(true);
  });
});
