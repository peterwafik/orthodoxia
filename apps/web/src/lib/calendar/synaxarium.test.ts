import { describe, expect, it } from 'vitest';
import { FIXED_FEASTS } from './feasts.ts';
import { allSynaxariumDays, summaryProblems, synaxariumDay } from './synaxarium.ts';
import { YEAR_DAYS } from './coptic.ts';

/** A word from St-Takla's own English heading on each fixed feast's day: the dates are checked against the source. */
const HEADING: Record<string, string> = {
  nayrouz: 'Nayrouz',
  cross: 'Cross',
  michael: 'Michael',
  circumcision: 'Circumcision',
  theophany: 'Theophany',
  cana: 'Cana',
  presentation: 'Temple',
  annunciation: 'Annunciation',
  'entry-egypt': 'Egypt',
  apostles: 'Peter and Paul',
  transfiguration: 'Transfiguration',
  assumption: 'Assumption',
};

describe('the Synaxarium', () => {
  it('has every day of the year, in both languages', () => {
    expect(allSynaxariumDays()).toHaveLength(YEAR_DAYS.length);
    for (const { month, day } of YEAR_DAYS) {
      expect(synaxariumDay(month, day, 'en').items.length, `${month}/${day} en`).toBeGreaterThan(0);
      expect(synaxariumDay(month, day, 'ar').items.length, `${month}/${day} ar`).toBeGreaterThan(0);
    }
  });

  it('has the full story of every day, in both languages, with no links away or site notes', () => {
    for (const { month, day } of YEAR_DAYS) {
      for (const locale of ['en', 'ar'] as const) {
        const items = synaxariumDay(month, day, locale).items;
        expect(items.some((item) => item.paragraphs.length > 0), `${month}/${day} ${locale}`).toBe(true);
        for (const item of items) {
          for (const text of item.paragraphs) expect(text, `${month}/${day} ${locale}`).not.toMatch(/St-Takla|https?:\/\/|موقع الأنبا تكلا/i);
        }
      }
    }
    // The archangel's day tells the story of Dorotheus and Theopista in full.
    expect(synaxariumDay(3, 12, 'en').items[0]!.paragraphs.join(' ')).toContain('Dorotheus');
    expect(synaxariumDay(3, 12, 'ar').items[0]!.paragraphs.join(' ')).toContain('ذوروتاؤس');
  });

  it('agrees with the fixed feast dates', () => {
    for (const feast of FIXED_FEASTS) {
      const titles = synaxariumDay(feast.month, feast.day, 'en').items.map((item) => item.title).join(' | ');
      expect(titles, feast.id).toContain(HEADING[feast.id]!);
    }
    expect(synaxariumDay(4, 29, 'en').items[0]!.title).toContain('Nativity');
  });

  it('lines each summary up with its commemoration', () => {
    expect(summaryProblems()).toEqual([]);
  });
});
