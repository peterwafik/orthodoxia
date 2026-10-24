import { describe, expect, it } from 'vitest';
import { STOPS } from '../../data/holy-mass.ts';
import { BACKDROPS, backdropAt, backdropOpacities } from './backdrop.ts';

const starts = BACKDROPS.map((backdrop) => backdrop.from);

describe('the Holy Mass artwork', () => {
  it('has the 31 pictures, in order, one file each', () => {
    expect(BACKDROPS).toHaveLength(31);
    BACKDROPS.forEach((backdrop, index) => expect(backdrop.file).toBe(`${String(index + 1).padStart(2, '0')}.webp`));
  });

  it('opens each picture at a later stop than the one before, inside the journey', () => {
    expect(starts[0]).toBe(1);
    starts.forEach((start, index) => {
      if (index > 0) expect(start).toBeGreaterThan(starts[index - 1]!);
      expect(start).toBeLessThanOrEqual(STOPS.length);
    });
  });

  it('shows the first picture at the top and the last at the bottom', () => {
    expect(backdropOpacities(0)[0]).toBe(1);
    const last = backdropOpacities(STOPS.length - 1);
    expect(last[30]).toBe(1);
    expect(last.slice(0, 30).every((opacity) => opacity === 0)).toBe(true);
  });

  it('shows one picture at the heart of each stretch and never two at once', () => {
    for (let k = 0; k < starts.length; k++) {
      const end = starts[k + 1] ?? STOPS.length + 1;
      const middle = (starts[k]! - 1 + end - 1) / 2;
      const opacities = backdropOpacities(middle);
      expect(opacities[k]).toBe(1);
      expect(opacities.filter((opacity) => opacity > 0)).toHaveLength(1);
    }
  });

  it('dissolves from one picture into the next, and only between neighbours', () => {
    for (let position = 0; position <= STOPS.length; position += 0.05) {
      const visible = backdropOpacities(position)
        .map((opacity, index) => ({ opacity, index }))
        .filter(({ opacity }) => opacity > 0);
      expect(visible.length).toBeGreaterThan(0);
      expect(visible.length).toBeLessThanOrEqual(2);
      if (visible.length === 2) {
        expect(visible[1]!.index - visible[0]!.index).toBe(1);
        expect(visible[0]!.opacity + visible[1]!.opacity).toBeCloseTo(1, 5);
      } else {
        expect(visible[0]!.opacity).toBeCloseTo(1, 5);
      }
    }
  });

  it('finishes each dissolve where the next picture opens', () => {
    // The second picture opens halfway down the first stop (position 0.5).
    expect(backdropOpacities(0.5)[1]).toBe(1);
    expect(backdropOpacities(0.375)[1]).toBeCloseTo(0.5, 5);
    expect(backdropOpacities(0.1)[1]).toBeCloseTo(0, 5);
    expect(backdropOpacities(0.75)[1]).toBe(1);
  });

  it('names the picture a position belongs to', () => {
    expect(backdropAt(0)).toBe(0);
    expect(backdropAt(0.49)).toBe(0);
    expect(backdropAt(0.5)).toBe(1);
    expect(backdropAt(STOPS.length - 1)).toBe(30);
  });
});
