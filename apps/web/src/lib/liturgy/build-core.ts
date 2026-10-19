import { parseLiturgyFile, type Block, type ParsedFile } from './parse.ts';
import { LITURGIES, coverageOf, resolveLiturgy, type Coverage, type LiturgyId, type Origin } from './resolve.ts';

export interface LiturgyJson {
  readonly liturgy: LiturgyId;
  readonly stops: Record<string, { readonly source: string; readonly sourceAr?: string; readonly blocks: readonly Block[] }>;
}

export interface BuildResult {
  readonly errors: string[];
  readonly liturgies: Record<LiturgyId, LiturgyJson>;
  readonly coverage: Record<LiturgyId, Coverage>;
  /** The distinct `source:` lines in use, sorted. */
  readonly sources: string[];
}

const ORIGINS: readonly string[] = ['common', ...LITURGIES];

/**
 * @param files path relative to content/liturgy/ → the file's text
 * @param slugs the slugs of the real stops
 */
export function buildLiturgies(files: Record<string, string>, slugs: readonly string[]): BuildResult {
  const errors: string[] = [];
  const parsed = new Map<string, ParsedFile>();
  for (const [path, text] of Object.entries(files)) {
    const shown = `content/liturgy/${path}`;
    const match = /^([^/]+)\/([^/]+)\.txt$/.exec(path);
    if (match === null) {
      errors.push(`${shown}: only .txt files in a folder (common, basil, gregory or cyril) belong here.`);
      continue;
    }
    const [, origin, slug] = match as unknown as [string, Origin, string];
    if (!ORIGINS.includes(origin)) {
      errors.push(`${shown}: "${origin}" is not a folder of texts. Use common, basil, gregory or cyril.`);
      continue;
    }
    if (!slugs.includes(slug)) {
      errors.push(`${shown}: "${slug}" is not a stop. Use the slug of a stop in apps/web/src/data/holy-mass.ts.`);
      continue;
    }
    const result = parseLiturgyFile(text);
    for (const issue of result.issues) errors.push(`${shown}:${issue.line}: ${issue.message}`);
    if (result.file !== null) parsed.set(`${origin}/${slug}`, result.file);
  }

  const liturgies = {} as Record<LiturgyId, LiturgyJson>;
  const coverage = {} as Record<LiturgyId, Coverage>;
  const used = new Set<string>();
  for (const liturgy of LITURGIES) {
    const scripts = resolveLiturgy(liturgy, parsed, slugs);
    liturgies[liturgy] = {
      liturgy,
      stops: Object.fromEntries(Object.entries(scripts).map(([slug, script]) => [slug, { source: script.source, ...(script.sourceAr === undefined ? {} : { sourceAr: script.sourceAr }), blocks: script.blocks }])),
    };
    coverage[liturgy] = coverageOf(scripts);
    for (const script of Object.values(scripts)) used.add(script.source);
  }
  return { errors, liturgies, coverage, sources: [...used].sort() };
}
