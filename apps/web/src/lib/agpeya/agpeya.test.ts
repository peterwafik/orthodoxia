import { describe, expect, it } from 'vitest';
import { HOUR_IDS, hours, prayedSections, psalmLink, readingLinks } from './load.ts';

const all = hours();
const arabicLetters = /[ء-ي]/;

describe('Agpeya texts', () => {
  it('has the eight hours in order', () => {
    expect(all.map((hour) => hour.id)).toEqual([...HOUR_IDS]);
    expect(all.map((hour) => hour.order)).toEqual([...all.map((hour) => hour.order)].sort((a, b) => a - b));
  });

  it('gives every hour a bilingual title and sections with unique ids', () => {
    for (const hour of all) {
      expect(hour.title.en, hour.id).not.toBe('');
      expect(hour.title.ar, hour.id).toMatch(arabicLetters);
      expect(hour.sections.length, hour.id).toBeGreaterThan(0);
      const ids = hour.sections.map((section) => section.id);
      expect(new Set(ids).size, `${hour.id} section ids`).toBe(ids.length);
    }
  });

  it('has English and Arabic text in every prayer section (the Veil readings are Coptic only in the book)', () => {
    for (const hour of all) {
      for (const section of hour.sections) {
        if (section.table !== undefined || section.id === 'veil-readings') continue;
        expect(section.text.en.length, `${hour.id}/${section.id} English`).toBeGreaterThan(0);
        expect(section.text.ar.join(' '), `${hour.id}/${section.id} Arabic`).toMatch(arabicLetters);
      }
    }
  });

  it('leaves no known extraction glitch in the Arabic', () => {
    const glitches: Record<string, RegExp> = {
      'reversed Allah': /هللا|اهلل/,
      'stretched letter': /([ء-ي])\1{2,}/,
      'lone article': /(^|\s)ال(\s|$)/,
      'reversed because': /(^|\s)[وف]?ألن(\s|ه|ك|ي)/,
    };
    for (const hour of all) {
      for (const section of hour.sections) {
        for (const paragraph of section.text.ar) {
          for (const [name, pattern] of Object.entries(glitches)) expect(paragraph, `${hour.id}/${section.id}: ${name}`).not.toMatch(pattern);
        }
      }
    }
  });

  it('numbers psalms within the psalter and links them into the Bible reader', () => {
    for (const hour of all) {
      for (const section of hour.sections.filter((s) => s.kind === 'psalm')) {
        expect(section.psalm, `${hour.id}/${section.id}`).toBeGreaterThanOrEqual(1);
        expect(section.psalm, `${hour.id}/${section.id}`).toBeLessThanOrEqual(151);
        expect(psalmLink('en', section.psalm as number), `${hour.id}/${section.id}`).toBeDefined();
      }
    }
  });

  it('links the Gospel and epistle readings to the Bible', () => {
    for (const hour of all) {
      for (const section of hour.sections.filter((s) => s.ref !== undefined)) {
        expect(readingLinks(section.ref as string, 'en').length, `${hour.id}/${section.id} ${section.ref}`).toBeGreaterThan(0);
      }
    }
  });

  it('points every Veil psalm at a psalm that is on the page it links to', () => {
    const veil = all.find((hour) => hour.id === 'veil');
    const table = veil?.sections.find((section) => section.table !== undefined)?.table ?? [];
    expect(table.length).toBeGreaterThan(0);
    for (const group of table) {
      const hour = all.find((candidate) => candidate.id === group.hour);
      expect(hour, group.hour).toBeDefined();
      for (const item of group.items) expect(hour?.sections.some((section) => section.id === `psalm-${item.psalm}`), `${group.hour} psalm ${item.psalm}`).toBe(true);
    }
  });

  it('prints the prayers of every hour in full in each hour, around the hour’s own prayers', () => {
    expect(prayedSections(all[0]!)).toEqual(all[0]!.sections);
    for (const hour of all.slice(1)) {
      const ids = prayedSections(hour).map((section) => section.id);
      expect(new Set(ids).size, `${hour.id} section ids`).toBe(ids.length);
      expect(ids.slice(0, 4), hour.id).toEqual(['introduction', 'lords-prayer', 'thanksgiving', 'psalm-50']);
      expect(ids.at(-1), hour.id).toBe('conclusion');
      for (const id of ['gloria', 'trisagion', 'creed-introduction', 'creed', 'holy-holy-holy']) expect(ids, `${hour.id} ${id}`).toContain(id);
      expect(ids, hour.id).not.toContain('first-absolution');
      expect(ids, hour.id).not.toContain('second-absolution');
      for (const own of hour.sections) expect(ids, `${hour.id} keeps ${own.id}`).toContain(own.id);
      const absolution = hour.sections.find((section) => section.kind === 'absolution');
      if (absolution !== undefined) expect(ids.indexOf('holy-holy-holy'), hour.id).toBeLessThan(ids.indexOf(absolution.id));
    }
  });

  it('keeps Prime’s own opening out of Psalm 50, which every hour prays', () => {
    const psalm = all[0]!.sections.find((section) => section.id === 'psalm-50');
    expect(psalm?.shared).toBe(true);
    expect(psalm?.text.en.join(' ')).not.toMatch(/kneel down|The night has passed/);
    expect(psalm?.text.ar.join(' ')).not.toMatch(/هلم نسجد|الليل عبر/);
    expect(all[0]!.sections.find((section) => section.id === 'opening')?.shared).toBeUndefined();
  });
});
