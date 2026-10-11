import { z } from 'zod';

/** An ISO calendar date, `YYYY-MM-DD`. Kept as a string so YAML/JSON round-trips are lossless. */
export const IsoDate = z.iso.date();

/**
 * Editorial lifecycle of a piece of content (THEOLOGICAL_REVIEW.md). Only `published` content is
 * shown to readers as reviewed; every other status renders with a visible label.
 */
export const ReviewStatus = z.enum([
  'draft',
  'awaiting-review',
  'reviewed',
  'published',
  'needs-revision',
  'archived',
]);
export type ReviewStatus = z.infer<typeof ReviewStatus>;

/** How the text came to be. AI involvement is always disclosed, never hidden. */
export const ContentOrigin = z.enum(['human', 'ai-assisted', 'ai-generated']);
export type ContentOrigin = z.infer<typeof ContentOrigin>;

/** A stable, URL-safe identifier: lowercase letters, digits and single hyphens. */
export const Slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'must be lowercase kebab-case');

export const Review = z
  .object({
    status: ReviewStatus,
    origin: ContentOrigin,
    /** Who reviewed it (name and role), as listed in THEOLOGICAL_REVIEW.md. */
    reviewer: z.string().min(1).optional(),
    reviewedAt: IsoDate.optional(),
  })
  .superRefine((review, ctx) => {
    const claimsReview = review.status === 'reviewed' || review.status === 'published';
    if (claimsReview && (review.reviewer === undefined || review.reviewedAt === undefined)) {
      ctx.addIssue({
        code: 'custom',
        message: `status "${review.status}" requires both "reviewer" and "reviewedAt"`,
      });
    }
  });
export type Review = z.infer<typeof Review>;
