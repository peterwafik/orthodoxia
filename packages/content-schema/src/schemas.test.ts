import { describe, expect, it } from 'vitest';
import { ArticleFrontmatter, ContentSource, OsisRef, Review } from './index.ts';

const validSource = {
  id: 'openbible-cross-references',
  title: 'OpenBible.info cross-references',
  organization: 'OpenBible.info',
  url: 'https://www.openbible.info/labs/cross-references/',
  languages: ['en'],
  contentType: 'cross-references',
  license: {
    id: 'CC-BY-4.0',
    statement: 'all content is licensed under a Creative Commons Attribution License',
    verifiedUrl: 'https://www.openbible.info/labs/cross-references/',
  },
  inUse: true,
  usage: 'import',
  redistributionAllowed: true,
  attribution: 'Cross-reference data: OpenBible.info, CC BY 4.0',
  commercialUse: 'allowed',
  modification: 'allowed',
  lastVerifiedAt: '2026-10-11',
  coversDeuterocanon: false,
};

describe('ContentSource', () => {
  it('accepts a complete, importable source', () => {
    expect(ContentSource.safeParse(validSource).success).toBe(true);
  });

  it('rejects importing a source that does not allow redistribution', () => {
    const result = ContentSource.safeParse({ ...validSource, redistributionAllowed: false });
    expect(result.success).toBe(false);
  });

  it('rejects importing an all-rights-reserved source', () => {
    const result = ContentSource.safeParse({
      ...validSource,
      license: { ...validSource.license, id: 'all-rights-reserved' },
      attribution: null,
    });
    expect(result.success).toBe(false);
  });

  it('rejects a link-only source marked as in use', () => {
    const result = ContentSource.safeParse({ ...validSource, usage: 'link-only' });
    expect(result.success).toBe(false);
  });

  it('allows an all-rights-reserved source as link-only', () => {
    const result = ContentSource.safeParse({
      ...validSource,
      inUse: false,
      license: { ...validSource.license, id: 'all-rights-reserved' },
      usage: 'link-only',
      redistributionAllowed: false,
      attribution: null,
    });
    expect(result.success).toBe(true);
  });

  it('requires attribution text for CC BY licenses', () => {
    expect(ContentSource.safeParse({ ...validSource, attribution: null }).success).toBe(false);
  });

  it('requires a verification date', () => {
    const { lastVerifiedAt: _omitted, ...withoutDate } = validSource;
    expect(ContentSource.safeParse(withoutDate).success).toBe(false);
  });
});

describe('Review', () => {
  it('rejects "published" without reviewer and date', () => {
    expect(Review.safeParse({ status: 'published', origin: 'human' }).success).toBe(false);
  });

  it('accepts a draft without reviewer', () => {
    expect(Review.safeParse({ status: 'draft', origin: 'ai-assisted' }).success).toBe(true);
  });

  it('accepts "reviewed" with reviewer and date', () => {
    const review = { status: 'reviewed', origin: 'human', reviewer: 'Fr. X', reviewedAt: '2026-10-01' };
    expect(Review.safeParse(review).success).toBe(true);
  });
});

describe('OsisRef', () => {
  it.each(['John.3.16', 'Isa.53', '1Cor.13.4', 'Ps.23.1-Ps.23.4', 'Gen.1.1-Gen.2.3'])('accepts %s', (ref) => {
    expect(OsisRef.safeParse(ref).success).toBe(true);
  });

  it.each(['John 3:16', 'john.3.16', 'John.', 'John.3.16.1', ''])('rejects %j', (ref) => {
    expect(OsisRef.safeParse(ref).success).toBe(false);
  });
});

describe('ArticleFrontmatter', () => {
  it('defaults scripture and topics to empty lists', () => {
    const parsed = ArticleFrontmatter.parse({
      id: 'is-jesus-god',
      slug: 'is-jesus-god',
      title: 'Is Jesus God?',
      language: 'en',
      authors: ['Compiler'],
      summary: 'Short answer.',
      sources: [],
      review: { status: 'draft', origin: 'human' },
      updatedAt: '2026-10-11',
    });
    expect(parsed.scripture).toEqual([]);
    expect(parsed.topics).toEqual([]);
  });
});
