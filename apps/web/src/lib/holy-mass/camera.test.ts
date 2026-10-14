import { describe, expect, it } from 'vitest';
import { easeInOut, frameAt, frameFor, heightPerWidth, levelFor, lerpFrame, visibleTiles, type Frame, type PyramidMeta } from './camera.ts';

const image = { width: 1280, height: 960 };
const desktop = { width: 760, height: 900 };
const phone = { width: 390, height: 420 };
const meta: PyramidMeta = { width: 7680, height: 5760, tileSize: 512, maxLevel: 13 };

describe('frameFor', () => {
  it('shows the whole picture for a full box, centred', () => {
    const frame = frameFor([0.5, 0.5, 1, 1], desktop, image);
    expect(frame.vw).toBeCloseTo(1);
    expect(frame.cx).toBe(0.5);
    expect(frame.cy).toBe(0.5);
  });

  it('keeps a small box fully visible', () => {
    for (const view of [desktop, phone, { width: 1200, height: 500 }]) {
      const box = [0.5, 0.8, 0.28, 0.3] as const;
      const frame = frameFor(box, view, image);
      const vh = frame.vw * heightPerWidth(view, image);
      expect(frame.vw).toBeGreaterThanOrEqual(box[2] - 1e-9);
      expect(vh).toBeGreaterThanOrEqual(box[3] - 1e-9);
    }
  });

  it('never looks past the edge of the picture', () => {
    const frame = frameFor([0.99, 0.99, 0.1, 0.1], desktop, image);
    const vh = frame.vw * heightPerWidth(desktop, image);
    expect(frame.cx + frame.vw / 2).toBeLessThanOrEqual(1 + 1e-9);
    expect(frame.cy + vh / 2).toBeLessThanOrEqual(1 + 1e-9);
  });

  it('the final stop shows only the heavenly upper half of the picture', () => {
    for (const view of [desktop, phone, { width: 1000, height: 600 }]) {
      const frame = frameFor([0.5, 0.235, 0.3, 0.46], view, image);
      const vh = frame.vw * heightPerWidth(view, image);
      expect(frame.cy + vh / 2).toBeLessThanOrEqual(0.5 + 1e-9);
    }
  });
});

describe('interpolation', () => {
  const k = heightPerWidth(desktop, image);
  const a: Frame = { cx: 0.5, cy: 0.5, vw: 1 };
  const b: Frame = { cx: 0.5, cy: 0.25, vw: 0.25 };

  it('hits both ends exactly', () => {
    expect(lerpFrame(a, b, 0, k)).toEqual(frameFor([0.5, 0.5, 1, 1], desktop, image));
    expect(lerpFrame(a, b, 1, k).vw).toBeCloseTo(0.25);
  });

  it('zooms evenly: halfway in log space is the geometric mean', () => {
    expect(lerpFrame(a, b, 0.5, k).vw).toBeCloseTo(0.5);
  });

  it('is monotonic through a position list', () => {
    const frames: Frame[] = [a, { cx: 0.5, cy: 0.4, vw: 0.6 }, b];
    let previous = Infinity;
    for (let p = 0; p <= 2; p += 0.1) {
      const vw = frameAt(frames, p, k).vw;
      expect(vw).toBeLessThanOrEqual(previous + 1e-9);
      previous = vw;
    }
  });

  it('easing starts and ends at rest', () => {
    expect(easeInOut(0)).toBe(0);
    expect(easeInOut(1)).toBe(1);
    expect(easeInOut(0.5)).toBeCloseTo(0.5);
  });
});

describe('tiles', () => {
  it('uses a coarse level when zoomed out and the finest when zoomed in far', () => {
    const wide = levelFor({ cx: 0.5, cy: 0.5, vw: 1 }, desktop, 1, meta);
    const deep = levelFor({ cx: 0.5, cy: 0.2, vw: 0.1 }, desktop, 2, meta);
    expect(wide).toBeLessThan(deep);
    expect(deep).toBe(meta.maxLevel);
  });

  it('covers the whole window with tiles', () => {
    const frame = frameFor([0.5, 0.25, 0.4, 0.4], desktop, image);
    const tiles = visibleTiles(frame, desktop, 2, meta);
    expect(tiles.length).toBeGreaterThan(0);
    const left = Math.min(...tiles.map((tile) => tile.x));
    const right = Math.max(...tiles.map((tile) => tile.x + tile.w));
    const top = Math.min(...tiles.map((tile) => tile.y));
    const bottom = Math.max(...tiles.map((tile) => tile.y + tile.h));
    expect(left).toBeLessThanOrEqual(0.5);
    expect(top).toBeLessThanOrEqual(0.5);
    expect(right).toBeGreaterThanOrEqual(desktop.width - 0.5);
    expect(bottom).toBeGreaterThanOrEqual(desktop.height - 0.5);
  });

  it('loads few tiles at a time, even at full zoom', () => {
    const frame = frameFor([0.5, 0.2, 0.1, 0.1], desktop, image);
    expect(visibleTiles(frame, desktop, 2, meta).length).toBeLessThanOrEqual(12);
  });
});
