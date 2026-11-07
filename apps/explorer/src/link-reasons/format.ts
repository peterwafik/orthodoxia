// Orthodoxia: the file of reasons, one per cross-reference (see scripts/data/link-reasons.ts).

/** Where the build writes the reasons, relative to the site root. */
export const LINK_REASONS_PATH = 'data/cross-references/openbible-reasons.json';

/** A link with no other evidence still counts as a related theme from this many readers' votes. */
export const THEME_MIN_VOTES = 50;

export interface LinkReasonsFile {
  readonly format: 'link-reasons';
  readonly linkCount: number;
  /** One letter per link, by link ID: q, p, t, w, r or u (see the build script). */
  readonly kinds: string;
  /**
   * One letter per link: where it is listed. b at both ends, s only at its source verse (among its
   * references), t only at its target (among its "referenced by"), - nowhere (an unclear link).
   */
  readonly sides: string;
  /** Subtopic names, indexed by `topicOf`. */
  readonly topics: readonly { readonly en: string; readonly ar: string }[];
  /** For each `t` link, in link order: its subtopic. */
  readonly topicOf: readonly number[];
  /** For each `w` link, in link order: the shared words, space-separated (English). */
  readonly words: readonly string[];
}
