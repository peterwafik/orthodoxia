import { describe, expect, it } from 'vitest';
import { matches, normalize, tokens } from './normalize.ts';

describe('normalize', () => {
  it('removes Arabic diacritics and folds alif, ya and ta marbuta variants', () => {
    expect(normalize('إِنْجِيل')).toBe(normalize('انجيل'));
    expect(normalize('أَمَّا')).toBe(normalize('اما'));
    expect(normalize('القيامة')).toBe(normalize('القيامه'));
    expect(normalize('عيسى')).toBe(normalize('عيسي'));
  });

  it('turns Arabic-Indic digits into Latin ones', () => {
    expect(normalize('١ كورنثوس ١٥')).toBe('1كورنثوس 15');
  });

  it('matches Bible reference forms however they are typed', () => {
    expect(normalize('1 Cor 15:3')).toBe('1cor 15:3');
    expect(normalize('1Cor 15:3')).toBe('1cor 15:3');
    expect(normalize('1 Corinthians 15')).toBe('1corinthians 15');
  });

  it('ignores case and accents', () => {
    expect(normalize('Josèphus')).toBe('josephus');
  });
});

describe('matches', () => {
  const text = ` ${normalize('Tacitus Annals 15.44 تاكيتوس')}`;
  const set = new Set(text.trim().split(' '));

  it('requires every query token to start a word', () => {
    expect(matches(tokens('tac ann'), set, text)).toBe(true);
    expect(matches(tokens('tac xyz'), set, text)).toBe(false);
  });

  it('finds Arabic with different spelling', () => {
    expect(matches(tokens('تاكيتوس'), set, text)).toBe(true);
  });
});
