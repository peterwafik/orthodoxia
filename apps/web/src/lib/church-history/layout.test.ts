import { describe, expect, it } from 'vitest';
import { CHURCHES, EVENTS } from '../../data/church-history/index.ts';
import { DEFAULT_LAYOUT, ancestry, descendants, layoutTimeline, yearToX } from './layout.ts';

describe('yearToX', () => {
  it('is increasing, from the left edge to the right end of the axis', () => {
    const years = [33, 325, 431, 451, 1054, 1517, 1906, 2026];
    const xs = years.map((year) => yearToX(year));
    expect([...xs].sort((a, b) => a - b)).toEqual(xs);
    expect(xs[0]).toBe(DEFAULT_LAYOUT.left);
    expect(xs[xs.length - 1]).toBe(DEFAULT_LAYOUT.left + DEFAULT_LAYOUT.plotWidth);
  });

  it('stretches the centuries of the Reformation', () => {
    const early = yearToX(500) - yearToX(400);
    const reformation = yearToX(1600) - yearToX(1500);
    expect(reformation).toBeGreaterThan(early);
  });
});

describe('layoutTimeline', () => {
  const layout = layoutTimeline(CHURCHES, EVENTS);
  const byId = new Map(layout.threads.map((thread) => [thread.id, thread]));

  it('puts the trunk in the middle with threads above and below', () => {
    const trunk = byId.get('coptic-orthodox')!;
    const ys = layout.threads.map((thread) => thread.y);
    expect(Math.min(...ys)).toBeLessThan(trunk.y);
    expect(Math.max(...ys)).toBeGreaterThan(trunk.y);
    expect(layout.height).toBeGreaterThan(Math.max(...ys));
  });

  it('lets every child leave its parent only after the parent’s own curve has finished', () => {
    for (const church of CHURCHES) {
      if (church.parent === null) continue;
      expect(byId.get(church.id)!.branchX).toBeGreaterThanOrEqual(byId.get(church.parent)!.lineStartX);
    }
  });

  it('gives each thread a lane one lane-gap from the next', () => {
    const ys = [...new Set(layout.threads.map((thread) => thread.y))].sort((a, b) => a - b);
    for (let i = 1; i < ys.length; i++) expect(ys[i]! - ys[i - 1]!).toBeGreaterThanOrEqual(DEFAULT_LAYOUT.laneGap);
  });

  it('keeps every label inside the drawing', () => {
    for (const thread of layout.threads) expect(thread.labelX + 150).toBeLessThanOrEqual(layout.width);
  });

  it('places a tick for every event on the axis', () => {
    expect(layout.ticks).toHaveLength(EVENTS.length);
    for (const tick of layout.ticks) expect(tick.x).toBeLessThanOrEqual(DEFAULT_LAYOUT.left + DEFAULT_LAYOUT.plotWidth);
  });
});

describe('ancestry and descendants', () => {
  it('walks from a thread up to the trunk', () => {
    expect(ancestry('pentecostal', CHURCHES)).toEqual(['pentecostal', 'baptist', 'reformed', 'roman-catholic', 'eastern-orthodox', 'coptic-orthodox']);
    expect(ancestry('coptic-orthodox', CHURCHES)).toEqual(['coptic-orthodox']);
  });

  it('lists everything below a thread', () => {
    expect(descendants('reformed', CHURCHES).sort()).toEqual(['anabaptist', 'baptist', 'pentecostal']);
    expect(descendants('pentecostal', CHURCHES)).toEqual([]);
  });
});

describe('group bands', () => {
  const layout = layoutTimeline(CHURCHES, EVENTS);

  it('has one band for each group, from the top lane to the bottom lane', () => {
    expect(layout.bands.map((band) => band.group)).toEqual(['east', 'oriental', 'chalcedonian', 'reformation']);
  });

  it('keeps the bands apart and each thread inside its own band', () => {
    for (let i = 1; i < layout.bands.length; i++) expect(layout.bands[i]!.y0).toBeGreaterThanOrEqual(layout.bands[i - 1]!.y1);
    const byId = new Map(layout.threads.map((thread) => [thread.id, thread]));
    for (const church of CHURCHES) {
      const band = layout.bands.find((b) => b.group === church.group)!;
      const y = byId.get(church.id)!.y;
      expect(y, `${church.id} inside ${church.group}`).toBeGreaterThan(band.y0);
      expect(y).toBeLessThan(band.y1);
    }
  });
});
