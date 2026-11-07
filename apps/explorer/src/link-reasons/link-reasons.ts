// Orthodoxia: why each cross-reference links its two passages, read from openbible-reasons.json (see
// PATCHES.md).

import type { LinkReasonsFile } from './format.ts';

export type LinkReasonKind = 'quotation' | 'parallel' | 'topic' | 'words' | 'unclear';

export type LinkReason =
  | { readonly kind: 'topic'; readonly topic: { readonly en: string; readonly ar: string } }
  | { readonly kind: 'words'; readonly words: string }
  | { readonly kind: Exclude<LinkReasonKind, 'topic' | 'words'> };

const KINDS: Readonly<Record<string, LinkReasonKind>> = {
  q: 'quotation',
  p: 'parallel',
  t: 'topic',
  w: 'words',
  u: 'unclear',
};
const CODES: readonly LinkReasonKind[] = ['quotation', 'parallel', 'topic', 'words', 'unclear'];
const UNCLEAR = CODES.indexOf('unclear');

export class LinkReasons {
  readonly #kinds: Uint8Array;
  /** For topic and word links: their position in `topicOf` or `words`. */
  readonly #detail: Int32Array;
  readonly #file: LinkReasonsFile;

  constructor(file: LinkReasonsFile, linkCount: number) {
    if (file.kinds.length !== linkCount) {
      throw new Error('The link reasons do not match the cross-references.');
    }
    this.#file = file;
    this.#kinds = new Uint8Array(linkCount);
    this.#detail = new Int32Array(linkCount).fill(-1);
    const counters = { topic: 0, words: 0 };
    for (let id = 0; id < linkCount; id += 1) {
      const kind = KINDS[file.kinds[id] ?? 'u'] ?? 'unclear';
      this.#kinds[id] = CODES.indexOf(kind);
      if (kind === 'topic' || kind === 'words') {
        this.#detail[id] = counters[kind]++;
      }
    }
  }

  /** Whether the link is listed at its source verse, among the verse's references. */
  shownFromSource(id: number): boolean {
    const side = this.#file.sides[id];
    return side === undefined || side === 'b' || side === 's';
  }

  /** Whether the link is listed at the passage it reaches, among its "referenced by". */
  shownAtTarget(id: number): boolean {
    const side = this.#file.sides[id];
    return side === undefined || side === 'b' || side === 't';
  }

  /** How many links have each kind of reason. */
  countByKind(): Record<LinkReasonKind, number> {
    const counts: Record<LinkReasonKind, number> = {
      quotation: 0,
      parallel: 0,
      topic: 0,
      words: 0,
      unclear: 0,
    };
    for (const code of this.#kinds) {
      const kind = CODES[code] ?? 'unclear';
      counts[kind] += 1;
    }
    return counts;
  }

  /** The kind of reason a link has. */
  kindOf(id: number): LinkReasonKind {
    return CODES[this.#kinds[id] ?? UNCLEAR] ?? 'unclear';
  }

  /** Whether the link has a reason to be shown (anything but unclear). */
  isClear(id: number): boolean {
    return id < 0 || id >= this.#kinds.length || this.#kinds[id] !== UNCLEAR;
  }

  reasonOf(id: number): LinkReason {
    const kind = CODES[this.#kinds[id] ?? UNCLEAR] ?? 'unclear';
    const detail = this.#detail[id] ?? -1;
    if (kind === 'topic') {
      const topic = this.#file.topics[this.#file.topicOf[detail] ?? -1];
      return topic ? { kind, topic } : { kind: 'unclear' };
    }
    if (kind === 'words') {
      return { kind, words: this.#file.words[detail] ?? '' };
    }
    return { kind };
  }
}
