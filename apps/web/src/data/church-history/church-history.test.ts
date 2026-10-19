import { describe, expect, it } from 'vitest';
import { CHURCHES, COMPARE_GROUPS, COMPARE_POINTS, EVENTS, GROUPS, POSITIONS, TIMELINE_END_YEAR } from './index.ts';

const ARABIC = /[؀-ۿ]/;
const LATIN = /[A-Za-z]/;

/** Every piece of text on a church, as [path, language, text]. */
function texts(): [string, 'en' | 'ar', string][] {
  const out: [string, 'en' | 'ar', string][] = [];
  for (const church of CHURCHES) {
    for (const lang of ['en', 'ar'] as const) {
      out.push([`${church.id}.name`, lang, church.name[lang]]);
      out.push([`${church.id}.short`, lang, church.short[lang]]);
      out.push([`${church.id}.when`, lang, church.when[lang]]);
      out.push([`${church.id}.summary`, lang, church.summary[lang]]);
      out.push([`${church.id}.reason`, lang, church.reason[lang]]);
      out.push([`${church.id}.coptic`, lang, church.coptic[lang]]);
      church.changes[lang].forEach((text, i) => out.push([`${church.id}.changes.${i}`, lang, text]));
    }
  }
  for (const point of COMPARE_POINTS) {
    for (const lang of ['en', 'ar'] as const) {
      out.push([`point.${point.id}.label`, lang, point.label[lang]]);
      for (const position of point.positions) out.push([`point.${point.id}.${position.id}`, lang, position.text[lang]]);
    }
  }
  for (const group of COMPARE_GROUPS) for (const lang of ['en', 'ar'] as const) out.push([`group.${group.id}`, lang, group.label[lang]]);
  for (const event of EVENTS) for (const lang of ['en', 'ar'] as const) out.push([`event.${event.year}`, lang, event.label[lang]]);
  return out;
}

describe('church history data', () => {
  it('has one trunk, the early church, and fifteen threads in all', () => {
    expect(CHURCHES.filter((church) => church.parent === null).map((church) => church.id)).toEqual(['coptic-orthodox']);
    expect(CHURCHES).toHaveLength(15);
    expect(new Set(CHURCHES.map((church) => church.id)).size).toBe(15);
  });

  it('puts the trunk in the centre lane and gives every other thread its own lane', () => {
    const trunk = CHURCHES.find((church) => church.parent === null)!;
    expect(trunk.lane).toBe(0);
    const lanes = CHURCHES.map((church) => church.lane);
    expect(new Set(lanes).size).toBe(lanes.length);
    expect(Math.min(...lanes)).toBeLessThan(0);
    expect(Math.max(...lanes)).toBeGreaterThan(0);
  });

  it('only branches from threads that exist and that are older', () => {
    const byId = new Map(CHURCHES.map((church) => [church.id, church]));
    for (const church of CHURCHES) {
      if (church.parent === null) continue;
      const parent = byId.get(church.parent);
      expect(parent, `${church.id} parent`).toBeDefined();
      expect(church.year, `${church.id} year`).toBeGreaterThanOrEqual(parent!.year);
      expect(church.year).toBeLessThanOrEqual(TIMELINE_END_YEAR);
    }
  });

  it('gives each thread a hue, and its own colour', () => {
    for (const church of CHURCHES) {
      expect(Number.isInteger(church.hue)).toBe(true);
      expect(church.hue).toBeGreaterThanOrEqual(0);
      expect(church.hue).toBeLessThan(360);
    }
    const hues = CHURCHES.filter((church) => church.parent !== null).map((church) => church.hue);
    expect(new Set(hues).size).toBe(hues.length);
  });

  it('has every text in both languages', () => {
    for (const [path, , text] of texts()) expect(text.trim().length, path).toBeGreaterThan(2);
    for (const church of CHURCHES) {
      expect(church.changes.en.length, `${church.id} changes`).toBeGreaterThan(0);
      expect(church.changes.en.length, `${church.id} changes lengths`).toBe(church.changes.ar.length);
    }
  });

  it('keeps each page to its own language', () => {
    for (const [path, lang, text] of texts()) {
      if (lang === 'en') expect(ARABIC.test(text), `${path} (en) has Arabic letters`).toBe(false);
      else expect(LATIN.test(text), `${path} (ar) has Latin letters`).toBe(false);
    }
  });

  it('puts every church in a group, with the groups side by side on the timeline', () => {
    const ids = GROUPS.map((group) => group.id);
    for (const church of CHURCHES) expect(ids, church.id).toContain(church.group);
    for (const group of GROUPS) {
      const lanes = CHURCHES.filter((church) => church.group === group.id).map((church) => church.lane).sort((a, b) => a - b);
      expect(lanes.length, group.id).toBeGreaterThan(0);
      const all = CHURCHES.map((church) => church.lane).sort((a, b) => a - b);
      const first = all.indexOf(lanes[0]!);
      expect(all.slice(first, first + lanes.length), group.id + ' lanes are next to each other').toEqual(lanes);
    }
  });

  it('keeps the group texts to one language each', () => {
    for (const group of GROUPS) {
      for (const text of [group.name, group.note]) {
        expect(ARABIC.test(text.en)).toBe(false);
        expect(LATIN.test(text.ar)).toBe(false);
      }
    }
  });

  it('gives every church a position on every point, and only positions that exist', () => {
    for (const church of CHURCHES) {
      const positions = POSITIONS[church.id];
      expect(positions, church.id).toBeDefined();
      for (const point of COMPARE_POINTS) {
        const chosen = positions![point.id as keyof typeof positions];
        expect(point.positions.map((position) => position.id), `${church.id} on ${point.id}`).toContain(chosen);
      }
      expect(Object.keys(positions!).sort()).toEqual(COMPARE_POINTS.map((point) => point.id).sort());
    }
  });

  it('has no position that no church takes, and every point in a group', () => {
    const groups = COMPARE_GROUPS.map((group) => group.id);
    for (const point of COMPARE_POINTS) {
      expect(groups, point.id).toContain(point.group);
      expect(point.positions.length, point.id).toBeGreaterThanOrEqual(point.group === 'common' ? 1 : 2);
      for (const position of point.positions) {
        const used = CHURCHES.some((church) => POSITIONS[church.id]![point.id as never] === position.id);
        expect(used, `${point.id}/${position.id} is used`).toBe(true);
      }
    }
  });

  it('writes each position in the same frame: the bold words come in pairs, in both languages', () => {
    for (const point of COMPARE_POINTS) {
      for (const position of point.positions) {
        const en = position.text.en.split('**').length - 1;
        const ar = position.text.ar.split('**').length - 1;
        expect(en % 2, `${point.id}/${position.id} en`).toBe(0);
        expect(en, `${point.id}/${position.id}`).toBeGreaterThan(0);
        expect(ar, `${point.id}/${position.id}`).toBe(en);
      }
    }
  });

  it('opens with the faith that every church holds in common, in the same words', () => {
    const common = COMPARE_POINTS.filter((point) => point.group === 'common');
    expect(common.length).toBeGreaterThanOrEqual(5);
    for (const point of common) {
      const mostly = CHURCHES.filter((church) => POSITIONS[church.id]![point.id as never] === 'all');
      expect(mostly.length, point.id).toBeGreaterThanOrEqual(CHURCHES.length - 1);
    }
  });

  it('has different words in the bold part of each position of a point', () => {
    for (const point of COMPARE_POINTS) {
      const bold = point.positions.map((position) => position.text.en);
      expect(new Set(bold).size, point.id).toBe(bold.length);
    }
  });

  it('orders the axis events by year', () => {
    const years = EVENTS.map((event) => event.year);
    expect([...years].sort((a, b) => a - b)).toEqual(years);
  });
});
