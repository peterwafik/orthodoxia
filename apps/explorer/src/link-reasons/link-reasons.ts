// Orthodoxia: why each cross-reference links its two passages, read from openbible-reasons.json (see
// PATCHES.md).

import type { LinkReasonsFile } from './format.ts';

export type LinkReasonKind = 'quotation' | 'parallel' | 'topic' | 'words' | 'unclear';

/** Why a link is shown: the reason in its texts, and whether it is about Jesus (both passages about Christ). */
export type LinkReason = (
  | { readonly kind: 'topic'; readonly topic: { readonly en: string; readonly ar: string } }
  | { readonly kind: 'words'; readonly words: string }
  | { readonly kind: Exclude<LinkReasonKind, 'topic' | 'words'> }
) & { readonly aboutJesus: boolean };

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

  /** The kind of reason a link has. */
  kindOf(id: number): LinkReasonKind {
    return CODES[this.#kinds[id] ?? UNCLEAR] ?? 'unclear';
  }

  /** Whether both passages of the link are about Christ (see scripts/data/link-reasons.ts). */
  isAboutJesus(id: number): boolean {
    return this.#file.about[id] === 'j';
  }

  /** The category a link is shown under: about Jesus first, else the reason in its texts. */
  categoryOf(id: number): LinkReasonKind | 'jesus' {
    return this.isAboutJesus(id) ? 'jesus' : this.kindOf(id);
  }

  /** How many links are shown under each category (each link under one). */
  countByCategory(): Record<LinkReasonKind | 'jesus', number> {
    const counts = { jesus: 0, quotation: 0, parallel: 0, topic: 0, words: 0, unclear: 0 };
    for (let id = 0; id < this.#kinds.length; id += 1) counts[this.categoryOf(id)] += 1;
    return counts;
  }

  /** Whether the link has a reason to be shown: one in its texts, or being about Jesus. */
  isClear(id: number): boolean {
    return (
      id < 0 || id >= this.#kinds.length || this.#kinds[id] !== UNCLEAR || this.isAboutJesus(id)
    );
  }

  reasonOf(id: number): LinkReason {
    const kind = CODES[this.#kinds[id] ?? UNCLEAR] ?? 'unclear';
    const detail = this.#detail[id] ?? -1;
    const aboutJesus = this.isAboutJesus(id);
    if (kind === 'topic') {
      const topic = this.#file.topics[this.#file.topicOf[detail] ?? -1];
      return topic ? { kind, topic, aboutJesus } : { kind: 'unclear', aboutJesus };
    }
    if (kind === 'words') {
      return { kind, words: this.#file.words[detail] ?? '', aboutJesus };
    }
    return { kind, aboutJesus };
  }
}
