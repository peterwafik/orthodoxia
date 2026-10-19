import { describe, expect, it } from 'vitest';
import { FAMILIES, TOPIC_RANGES } from './topics.ts';
import { MAP_PASSAGES, NAVE_MAP } from './family-maps/index.ts';
import { TOPIC_PASSAGES } from './topic-passages.ts';
import { parsePassages } from './reference.ts';

describe('the topical study taxonomy', () => {
  it('has the 44 families, each with topics and starting passages (family 44 gets its verses from its topics)', () => {
    expect(FAMILIES).toHaveLength(44);
    FAMILIES.forEach((family, index) => {
      expect(family.id, family.en).toBe(String(index + 1));
      expect(family.topics.length, family.en).toBeGreaterThanOrEqual(15);
      if (family.id !== '44') expect(family.passages.length, family.en).toBeGreaterThan(0);
    });
  });

  it('writes every name in both languages, each in its own script', () => {
    for (const family of FAMILIES) {
      for (const named of [family, ...family.topics]) {
        expect(named.en, named.en).not.toMatch(/[؀-ۿ]/);
        expect(named.ar, named.en).toMatch(/[؀-ۿ]/);
        expect(named.ar, named.en).not.toMatch(/[A-Za-z]/);
      }
    }
  });

  it('has no two topics with the same id', () => {
    const ids = FAMILIES.flatMap((family) => [family.id, ...family.topics.map((topic) => topic.id)]);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('ties each listed passage to a topic that exists', () => {
    const known = new Set(FAMILIES.flatMap((family) => family.topics.map((topic) => `${family.id}:${topic.en}`)));
    for (const key of [...Object.keys(TOPIC_PASSAGES), ...Object.keys(MAP_PASSAGES), ...Object.keys(NAVE_MAP)]) expect(known.has(key), key).toBe(true);
    for (const list of Object.values(MAP_PASSAGES)) expect(() => parsePassages(list), list).not.toThrow();
  });

  it('gives a subtopic its own passages and adds them to its family', () => {
    const family = FAMILIES.find((candidate) => candidate.id === '23')!;
    const baptism = family.topics.find((topic) => topic.en === 'Baptism of Jesus')!;
    expect(TOPIC_RANGES.get(baptism.id)!.length).toBeGreaterThan(0);
    expect(TOPIC_RANGES.get('23')!.length).toBeGreaterThan(family.passages.length);
  });
});
