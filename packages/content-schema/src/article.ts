import { z } from 'zod';
import { IsoDate, Review, Slug } from './review.ts';

export const Locale = z.enum(['en', 'ar']);
export type Locale = z.infer<typeof Locale>;

/**
 * A passage as an OSIS reference: `John.3.16`, `Isa.53`, `Ps.23.1-Ps.23.4`. Book IDs are checked
 * against the canon package when articles are validated; this only checks the shape.
 */
export const OsisRef = z
  .string()
  .regex(
    /^[1-4]?[A-Z][A-Za-z]+(?:\.\d+){1,2}(?:-[1-4]?[A-Z][A-Za-z]+(?:\.\d+){1,2})?$/,
    'must be an OSIS reference such as "John.3.16" or "Isa.53"',
  );

/** Front matter shared by every editorial article (apologetics, doctrine, history). §2.3, §8.6. */
export const ArticleFrontmatter = z.object({
  /** Stable ID shared by the English and Arabic versions of the same article. */
  id: Slug,
  slug: Slug,
  title: z.string().min(1),
  language: Locale,
  /** Author or compiler. */
  authors: z.array(z.string().min(1)).min(1),
  summary: z.string().min(1),
  /** IDs from the source registry. Checked against it by `scripts/validate-content.ts`. */
  sources: z.array(Slug),
  scripture: z.array(OsisRef).default([]),
  topics: z.array(Slug).default([]),
  review: Review,
  updatedAt: IsoDate,
});
export type ArticleFrontmatter = z.infer<typeof ArticleFrontmatter>;
