import { describe, expect, it } from 'vitest';
import { parseTaxonomy } from './taxonomy.ts';

const SAMPLE = [
  '# 1 | Love and compassion | المحبة والرحمة',
  '> 1 Corinthians 13:1–13; John 13:34–35',
  '- Mercy | الرحمة',
  '- Kindness | اللطف',
  '',
  '# 2 | Hope | الرجاء',
  '- Hope in God | الرجاء في الله',
].join('\n');

describe('parseTaxonomy', () => {
  const families = parseTaxonomy(SAMPLE);

  it('reads families, their starting passages and their topics, with stable ids', () => {
    expect(families.map((family) => family.id)).toEqual(['1', '2']);
    expect(families[0]!.en).toBe('Love and compassion');
    expect(families[0]!.ar).toBe('المحبة والرحمة');
    expect(families[0]!.passages).toHaveLength(2);
    expect(families[0]!.topics.map((topic) => topic.id)).toEqual(['1.1', '1.2']);
    expect(families[1]!.passages).toEqual([]);
  });

  it('gives every family its own colour', () => {
    expect(new Set(families.map((family) => family.color)).size).toBe(2);
  });

  it('names the line of anything it cannot read', () => {
    expect(() => parseTaxonomy('# 1 | Only English')).toThrow(/line 1/);
    expect(() => parseTaxonomy('- A topic | موضوع')).toThrow(/line 1/);
    expect(() => parseTaxonomy('# 1 | A | ب\n> Hezekiah 3:1')).toThrow(/line 2/);
  });
});
