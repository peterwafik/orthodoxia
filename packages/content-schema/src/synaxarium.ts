import { z } from 'zod';
import { Review } from './review.ts';

/**
 * Short Synaxarium summaries written for this site (content/synaxarium/<month>.yaml), one per commemoration, in the
 * order St-Takla.org lists that day's commemorations in each language (null skips one). Drafts until reviewed.
 */
export const SynaxariumSummaries = z.object({
  month: z.number().int().min(1).max(13),
  review: Review,
  days: z.record(
    z.string().regex(/^([1-9]|[12]\d|30)$/, 'a day of the month, 1–30'),
    z.object({ en: z.array(z.string().min(1).nullable()).optional(), ar: z.array(z.string().min(1).nullable()).optional() }),
  ),
});
export type SynaxariumSummaries = z.infer<typeof SynaxariumSummaries>;
