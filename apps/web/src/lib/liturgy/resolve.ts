import { LANGS, type Block, type Lang, type ParsedFile } from './parse.ts';

export const LITURGIES = ['basil', 'gregory', 'cyril'] as const;
export type LiturgyId = (typeof LITURGIES)[number];
export type Origin = 'common' | LiturgyId;

export interface StopScript {
  readonly source: string;
  readonly sourceAr?: string;
  readonly origin: Origin;
  readonly blocks: readonly Block[];
}

/**
 * The script of every stop that has text, for one liturgy. `files` is keyed "<origin>/<slug>". A file in
 * the liturgy's own folder wins over the one in `common/`.
 */
export function resolveLiturgy(liturgy: LiturgyId, files: ReadonlyMap<string, ParsedFile>, slugs: readonly string[]): Record<string, StopScript> {
  const scripts: Record<string, StopScript> = {};
  for (const slug of slugs) {
    const own = files.get(`${liturgy}/${slug}`);
    const common = files.get(`common/${slug}`);
    const origin: Origin | null = own !== undefined ? liturgy : common !== undefined ? 'common' : null;
    const chosen = own ?? common;
    if (origin !== null && chosen !== undefined) scripts[slug] = { source: chosen.source, ...(chosen.sourceAr === undefined ? {} : { sourceAr: chosen.sourceAr }), origin, blocks: chosen.blocks };
  }
  return scripts;
}

export interface Coverage {
  readonly stops: number;
  readonly blocks: number;
  readonly perLang: Readonly<Record<Lang, number>>;
}

export function coverageOf(scripts: Record<string, StopScript>): Coverage {
  const perLang = Object.fromEntries(LANGS.map((lang) => [lang, 0])) as Record<Lang, number>;
  let blocks = 0;
  const entries = Object.values(scripts);
  for (const script of entries) {
    for (const block of script.blocks) {
      blocks++;
      for (const lang of LANGS) if (block.text[lang] !== undefined) perLang[lang]++;
    }
  }
  return { stops: entries.length, blocks, perLang };
}
