import { describe, expect, it } from 'vitest';
import { ARTICLES } from './articles/index.ts';
import { GLOSSARY_BY_ID } from './glossary.ts';
import { QUESTIONS, QUESTION_BY_ID, TOPIC_BY_ID, TOPICS } from './questions.ts';
import { SOURCES } from './sources.ts';
import type { Article, Line, Paras } from './types.ts';

const SOURCE_BY_ID = new Map(SOURCES.map((s) => [s.id, s]));
const THIN_ACCESS = new Set(['metadata_only', 'awaiting_copy', 'unavailable', 'paywalled', 'abstract_only']);

function lines(value: unknown, path = ''): { path: string; line: Line }[] {
  if (typeof value !== 'object' || value === null) return [];
  const record = value as Record<string, unknown>;
  if (typeof record['en'] === 'string' && typeof record['ar'] === 'string') return [{ path, line: record as unknown as Line }];
  return Object.entries(record).flatMap(([key, child]) => lines(child, `${path}.${key}`));
}

function paras(value: unknown, path = ''): { path: string; paras: Paras }[] {
  if (typeof value !== 'object' || value === null) return [];
  const record = value as Record<string, unknown>;
  if (Array.isArray(record['en']) && Array.isArray(record['ar'])) return [{ path, paras: record as unknown as Paras }];
  return Object.entries(record).flatMap(([key, child]) => paras(child, `${path}.${key}`));
}

describe('source catalogue', () => {
  it('holds the 61 seed leads (S01–S61) plus the site Bible reader (S62), with unique ids', () => {
    expect(SOURCES.map((s) => s.id)).toEqual(Array.from({ length: 62 }, (_, i) => `S${String(i + 1).padStart(2, '0')}`));
  });

  it('uses https links (S62 is this site’s own reader)', () => {
    expect(SOURCES.filter((s) => !s.url.startsWith('https://') && s.id !== 'S62').map((s) => s.id)).toEqual([]);
  });

  it('never marks a lead as reviewed on the strength of a title or a publisher page', () => {
    expect(SOURCES.filter((s) => s.review !== 'discovered').map((s) => s.id)).toEqual([]);
  });

  it('never presents a storefront, a review or a catalogue as full text', () => {
    const offenders = SOURCES.filter((s) => ['storefront', 'review', 'catalogue'].includes(s.kind) && s.access === 'full_text');
    expect(offenders.map((s) => s.id)).toEqual([]);
  });

  it('keeps Fr Luka Maher’s book metadata-only until an authorised copy is in hand', () => {
    const book = SOURCE_BY_ID.get('S59');
    expect(book?.access).toBe('awaiting_copy');
    expect(book?.review).toBe('discovered');
  });

  it('points every duplicate host at an existing source', () => {
    for (const s of SOURCES) if (s.sameWitnessAs !== undefined) expect(SOURCE_BY_ID.has(s.sameWitnessAs)).toBe(true);
  });
});

describe('question backlog', () => {
  it('has unique ids and known topics', () => {
    expect(new Set(QUESTIONS.map((q) => q.id)).size).toBe(QUESTIONS.length);
    for (const q of QUESTIONS) expect(TOPIC_BY_ID.has(q.topic), q.id).toBe(true);
    expect(TOPICS.length).toBe(9);
  });

  it('only leads to sources that exist', () => {
    for (const q of QUESTIONS) for (const lead of q.leads) expect(SOURCE_BY_ID.has(lead), `${q.id} → ${lead}`).toBe(true);
  });
});

describe.each(ARTICLES.map((a) => [a.id, a] as [string, Article]))('article %s', (_id, article) => {
  it('every piece of evidence is used by a claim or an objection (nothing is attached loosely)', () => {
    const used = new Set([...article.claims.flatMap((c) => c.evidence), ...article.objections.flatMap((o) => o.evidence ?? [])]);
    // A whole-work reference (a book read for its overall thesis) may stand as general reading; a passage or section may not.
    const loose = article.evidence.filter((e) => !used.has(e.id) && !e.locator.toLowerCase().startsWith('whole work'));
    expect(loose.map((e) => `${e.id} ${e.sourceId} ${e.locator}`)).toEqual([]);
  });

  const evidenceIds = new Set(article.evidence.map((e) => e.id));

  it('answers a question in the backlog', () => {
    expect(QUESTION_BY_ID.has(article.questionId)).toBe(true);
    expect(article.id).toBe(article.questionId);
  });

  it('has equal paragraph counts in Arabic and English, and no empty text', () => {
    for (const { path, paras: p } of paras(article)) {
      expect(p.en.length, path).toBe(p.ar.length);
      for (const s of [...p.en, ...p.ar]) expect(s.trim(), path).not.toBe('');
    }
    for (const { path, line } of lines(article)) {
      expect(line.en.trim(), path).not.toBe('');
      expect(line.ar.trim(), path).not.toBe('');
    }
    expect(article.quickPoints.en.length).toBe(article.quickPoints.ar.length);
    expect(article.quickPoints.en.length).toBeGreaterThan(0);
  });

  it('cites only sources, glossary terms and questions that exist', () => {
    for (const e of article.evidence) expect(SOURCE_BY_ID.has(e.sourceId), e.id).toBe(true);
    for (const s of article.furtherReading) expect(SOURCE_BY_ID.has(s), s).toBe(true);
    for (const g of article.glossary) expect(GLOSSARY_BY_ID.has(g), g).toBe(true);
    for (const r of article.related) expect(QUESTION_BY_ID.has(r), r).toBe(true);
  });

  it('gives every claim at least one evidence entry that exists in the article', () => {
    expect(article.claims.length).toBeGreaterThan(0);
    for (const c of article.claims) {
      expect(c.evidence.length, c.id).toBeGreaterThan(0);
      for (const id of c.evidence) expect(evidenceIds.has(id), `${c.id} → ${id}`).toBe(true);
    }
    for (const o of article.objections) for (const id of o.evidence ?? []) expect(evidenceIds.has(id), o.id).toBe(true);
  });

  it('has unique evidence ids, and shows serious objections', () => {
    expect(evidenceIds.size).toBe(article.evidence.length);
    expect(article.objections.length).toBeGreaterThan(0);
  });

  it('never cites a source it has not read as if it had: books known only by metadata are cited as a whole work', () => {
    for (const e of article.evidence) {
      const source = SOURCE_BY_ID.get(e.sourceId);
      if (source !== undefined && THIN_ACCESS.has(source.access)) {
        expect(e.locator.toLowerCase().startsWith('whole work'), `${e.id} cites ${e.sourceId} (${source.access})`).toBe(true);
      }
    }
  });

  it('never uses Fr Luka Maher’s unseen book as evidence', () => {
    expect(article.evidence.filter((e) => e.sourceId === 'S59' || e.sourceId === 'S60' || e.sourceId === 'S61')).toEqual([]);
  });

  it('does not count two hosts of one witness as two witnesses', () => {
    for (const e of article.evidence) {
      const source = SOURCE_BY_ID.get(e.sourceId);
      if (source?.sameWitnessAs !== undefined && article.evidence.some((o) => o.sourceId === source.sameWitnessAs)) {
        expect(e.dependence, `${e.id} duplicates ${source.sameWitnessAs}`).toBeDefined();
      }
    }
  });

  it('can only be published with a named human reviewer and a review date', () => {
    if (article.state === 'published') {
      expect(article.reviewers.length).toBeGreaterThan(0);
      for (const r of article.reviewers) {
        expect(r.name.trim()).not.toBe('');
        expect(r.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      }
    } else {
      expect(article.reviewers).toEqual([]);
    }
  });

  it('keeps assessments and argument types separate', () => {
    expect(article.argumentTypes.length).toBeGreaterThan(0);
    expect(article.assessment.explanation.en.length).toBeGreaterThan(40);
  });

  it('claims no invented probabilities or universal agreement', () => {
    const text = JSON.stringify(article).toLowerCase();
    expect(text).not.toMatch(/\d+(\.\d+)? ?% (probab|certain|likel|chance)/);
    expect(text).not.toMatch(/all (scholars|historians) (agree|accept)/);
    expect(text).not.toMatch(/no (serious )?(scholar|historian)s? (doubts|denies|disputes)/);
  });
});
