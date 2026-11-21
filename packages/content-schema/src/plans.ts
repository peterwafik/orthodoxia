import { z } from 'zod';
import { Review, Slug } from './review.ts';

/**
 * Reading plans (docs/superpowers/specs/2026-11-21-reading-plans-design.md): reusable day blocks, the plans that
 * order them, the Church Year seasons and the plan glossary. Files live in content/plans/.
 */

/** A passage within one chapter, by USFM book code: `MRK.1`, `MRK.1.14` or `MRK.1.14-20`. */
export const PassageRef = z
  .string()
  .regex(/^[1-4A-Z]{3}\.\d+(\.\d+(-\d+)?)?$/, 'must look like MRK.1, MRK.1.14 or MRK.1.14-20')
  .refine((ref) => {
    const range = ref.split('.')[2]?.split('-');
    return range === undefined || range.length === 1 || Number(range[0]) < Number(range[1]);
  }, 'a verse range must run forwards');
export type PassageRef = z.infer<typeof PassageRef>;

export const Bilingual = z.object({ en: z.string().min(1), ar: z.string().min(1) });
export type Bilingual = z.infer<typeof Bilingual>;

export const DeeperLink = z.discriminatedUnion('kind', [
  z.object({ kind: z.literal('verse'), ref: PassageRef }),
  z.object({ kind: z.literal('place'), id: Slug }),
  z.object({ kind: z.literal('person'), key: z.string().min(1) }),
  z.object({ kind: z.literal('question'), slug: Slug }),
]);
export type DeeperLink = z.infer<typeof DeeperLink>;

export const PlanCheck = z
  .object({
    question: Bilingual,
    options: z.array(Bilingual).min(2).max(4),
    answer: z.number().int().min(0),
    why: Bilingual,
  })
  .refine((check) => check.answer < check.options.length, { message: 'answer must index one of the options', path: ['answer'] });

export const PlanBlock = z.object({
  id: Slug,
  passages: z.object({ short: PassageRef, full: PassageRef, deep: PassageRef }),
  title: Bilingual,
  hook: Bilingual,
  explain: Bilingual,
  explainNew: Bilingual.optional(),
  think: Bilingual,
  check: PlanCheck.optional(),
  deeper: z.array(DeeperLink).min(1),
  words: z.array(Slug).default([]),
  sources: z.array(Slug).default([]),
  review: Review,
});
export type PlanBlock = z.infer<typeof PlanBlock>;

export const PlanInterest = z.enum(['story', 'people', 'places', 'questions', 'life', 'church', 'start']);
export type PlanInterest = z.infer<typeof PlanInterest>;

export const Plan = z
  .object({
    id: Slug,
    live: z.boolean(),
    kind: z.enum(['sequence', 'church-year']),
    name: Bilingual,
    who: Bilingual,
    description: Bilingual,
    interests: z.array(PlanInterest).min(1),
    sections: z.array(z.object({ title: Bilingual, from: z.number().int().min(0) })).default([]),
    days: z.array(Slug).default([]),
  })
  .refine((plan) => (plan.kind === 'church-year' ? plan.days.length === 0 : true), {
    message: 'a church-year plan takes its days from church-year.yaml',
    path: ['days'],
  })
  .refine((plan) => (plan.kind === 'sequence' && plan.live ? plan.days.length > 0 : true), {
    message: 'a live plan needs days',
    path: ['days'],
  });
export type Plan = z.infer<typeof Plan>;

export const PlansFile = z.object({ plans: z.array(Plan).min(1) });

export const SeasonId = z.enum(['nativity-fast', 'nineveh', 'great-lent']);
export type SeasonId = z.infer<typeof SeasonId>;

export const ChurchYearFile = z.object({
  /** The registry source for the season dates and readings. */
  source: Slug,
  seasons: z.array(z.object({ id: SeasonId, name: Bilingual, days: z.array(Slug) })),
});
export type ChurchYearFile = z.infer<typeof ChurchYearFile>;

export const PlanWord = z.object({ id: Slug, term: Bilingual, definition: Bilingual });
export type PlanWord = z.infer<typeof PlanWord>;
export const WordsFile = z.object({ words: z.array(PlanWord) });
