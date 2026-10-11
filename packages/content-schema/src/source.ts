import { z } from 'zod';
import { IsoDate, Slug } from './review.ts';

export const LicenseId = z.enum([
  'public-domain',
  'CC-BY-4.0',
  'CC-BY-SA-4.0',
  'MIT',
  'GPL',
  'custom',
  'all-rights-reserved',
  'unknown',
]);
export type LicenseId = z.infer<typeof LicenseId>;

/**
 * What the project may do with a source:
 * - `import`: its content may be stored and redistributed in this repository and on the site;
 * - `link-only`: bibliographic metadata, links and brief cited quotations only;
 * - `do-not-use`: not even as a data source (e.g. terms forbid scraping).
 */
export const SourceUsage = z.enum(['import', 'link-only', 'do-not-use']);
export type SourceUsage = z.infer<typeof SourceUsage>;

export const SourceContentType = z.enum([
  'bible-text',
  'cross-references',
  'lexical-data',
  'patristic-text',
  'commentary',
  'liturgical-text',
  'reference-site',
  'software',
]);

const Permission = z.enum(['allowed', 'restricted', 'unknown']);

/**
 * One entry of the source registry (`content/sources/*.yaml`), master prompt §3.4 and §8.9.
 * The rules below make the registry fail the build rather than let an unlicensed import slip in.
 */
export const ContentSource = z
  .object({
    id: Slug,
    title: z.string().min(1),
    author: z.string().min(1).optional(),
    organization: z.string().min(1).optional(),
    url: z.url(),
    edition: z.string().min(1).optional(),
    publicationDate: z.string().min(1).optional(),
    languages: z.array(z.string().min(2)).min(1),
    contentType: SourceContentType,
    license: z.object({
      id: LicenseId,
      /** A short verbatim quotation of the licensing statement. */
      statement: z.string().min(1),
      /** The page on which the statement was read. */
      verifiedUrl: z.url(),
    }),
    /** Whether the published site uses this source today (as opposed to planned or evaluated). */
    inUse: z.boolean(),
    usage: SourceUsage,
    redistributionAllowed: z.boolean(),
    /** Exact attribution text required by the license, or `null` when none is required. */
    attribution: z.string().min(1).nullable(),
    commercialUse: Permission,
    modification: Permission,
    lastVerifiedAt: IsoDate,
    /** Whether deuterocanonical books are covered, for Bible texts and cross-references. */
    coversDeuterocanon: z.boolean().optional(),
    notes: z.string().optional(),
  })
  .superRefine((source, ctx) => {
    if (source.usage === 'import') {
      if (!source.redistributionAllowed) {
        ctx.addIssue({ code: 'custom', message: 'usage "import" requires redistributionAllowed: true' });
      }
      if (source.license.id === 'all-rights-reserved' || source.license.id === 'unknown') {
        ctx.addIssue({
          code: 'custom',
          message: `usage "import" is not allowed with license "${source.license.id}"`,
        });
      }
    }
    if (source.inUse && source.usage !== 'import') {
      ctx.addIssue({ code: 'custom', message: `a source in use must have usage "import"` });
    }
    if (source.license.id.startsWith('CC-BY') && source.attribution === null) {
      ctx.addIssue({ code: 'custom', message: `${source.license.id} requires an attribution text` });
    }
  });
export type ContentSource = z.infer<typeof ContentSource>;
