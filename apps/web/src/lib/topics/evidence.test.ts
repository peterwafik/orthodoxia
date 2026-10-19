import { describe, expect, it } from 'vitest';
import { COMPARE_POINTS } from '../../data/church-history/compare.ts';
import { COPTIC_EVIDENCE } from '../../data/coptic-evidence.ts';
import { FAMILIES, TOPIC_DATA } from './topics.ts';
import { evidenceForTopic, evidenceRefs, evidenceView } from './evidence.ts';

const ARABIC = /[؀-ۿ]/;
const LATIN = /[A-Za-z]/;

describe('the Coptic evidence', () => {
  it('is about points of the comparison, once each', () => {
    const ids = COPTIC_EVIDENCE.map((entry) => entry.point);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(COMPARE_POINTS.map((point) => point.id), id).toContain(id);
  });

  it('forms family 44, with a topic and verses for every point', () => {
    const family = FAMILIES.find((candidate) => candidate.id === '44')!;
    expect(family.topics).toHaveLength(COPTIC_EVIDENCE.length);
    for (const topic of family.topics) {
      expect(TOPIC_DATA.get(topic.id)?.ranges.length, topic.en).toBeGreaterThan(0);
      expect(TOPIC_DATA.get(topic.id)?.origins.has('curated'), topic.en).toBe(true);
    }
    expect(TOPIC_DATA.get('44')?.ranges.length).toBeGreaterThan(0);
  });

  it('gives every cited passage a link to a chapter of the reader, in both languages', () => {
    for (const entry of COPTIC_EVIDENCE) {
      const en = evidenceRefs(entry.verses, 'en');
      const ar = evidenceRefs(entry.verses, 'ar');
      expect(en.length, entry.point).toBeGreaterThanOrEqual(3);
      expect(ar.length, `${entry.point} (ar)`).toBeGreaterThanOrEqual(3);
      for (const ref of en) expect(ref.href, ref.label).toMatch(/^\/en\/bible\/kjv\/[a-z0-9-]+\/\d+\/(#v\d+)?$/);
      for (const ref of ar) expect(ref.href, ref.label).toMatch(/^\/ar\/bible\/svd\/[a-z0-9-]+\/\d+\/(#v\d+)?$/);
    }
  });

  it('links to the first verse of a passage', () => {
    const [ref] = evidenceRefs('John 1:14; Philippians 2:5–8', 'en');
    expect(ref).toEqual({ label: 'John 1:14', href: '/en/bible/kjv/john/1/#v14' });
    expect(evidenceRefs('Philippians 2:5–8', 'en')[0]!.label).toBe('Philippians 2:5–8');
  });

  it('keeps each page to its own language', () => {
    for (const entry of COPTIC_EVIDENCE) {
      expect(ARABIC.test(entry.claim.en), `${entry.point} claim`).toBe(false);
      expect(LATIN.test(entry.claim.ar), `${entry.point} claim (ar)`).toBe(false);
      for (const witness of entry.witnesses) {
        for (const text of [witness.title, witness.when, ...(witness.note ? [witness.note] : [])]) {
          expect(ARABIC.test(text.en), `${entry.point} witness`).toBe(false);
          expect(LATIN.test(text.ar), `${entry.point} witness (ar): ${text.ar}`).toBe(false);
        }
      }
    }
  });

  it('finds the evidence of a topic by its English name', () => {
    expect(evidenceForTopic('The Eucharist', 'en')?.witnesses.length).toBeGreaterThan(0);
    expect(evidenceForTopic('Nothing of the kind', 'en')).toBeUndefined();
    expect(evidenceView(COPTIC_EVIDENCE[0]!, 'ar').claim).toBe(COPTIC_EVIDENCE[0]!.claim.ar);
  });
});
