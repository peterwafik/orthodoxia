/**
 * Reads Nave's Topical Bible (Orville J. Nave, 1903, public domain) from the CCEL ThML file. Each topic has
 * headings ("OF MAN FOR GOD", depth 2; their sub-headings, depth 3 and 4) and the verses listed under them,
 * which the file gives as machine-readable ranges (`parsed="|Matt|22|37|22|38|"`, 0 = not given).
 * Book names are the OSIS ones the file uses ("Exod", "1Cor", "Ps").
 */
export interface NaveRef {
  readonly book: string;
  readonly from: { readonly chapter: number; readonly verse: number | null };
  readonly to: { readonly chapter: number; readonly verse: number | null };
}

export interface NaveGroup {
  /** The heading's own words, e.g. "OF MAN FOR GOD" (empty for verses listed straight under the topic). */
  readonly label: string;
  readonly depth: number;
  readonly refs: NaveRef[];
  /** Other topics the heading points to ("See CHILDREN"). */
  readonly see: string[];
}

export interface NaveTopic {
  readonly groups: NaveGroup[];
  readonly see: string[];
}

const ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
const decode = (text: string): string =>
  text.replace(/&(#\d+|[a-z]+);/gi, (whole, name: string) => (name.startsWith('#') ? String.fromCodePoint(Number(name.slice(1))) : (ENTITIES[name.toLowerCase()] ?? whole)));
const plain = (html: string): string => decode(html.replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();

function parseRef(parsed: string): NaveRef | null {
  const [, book, c1, v1, c2, v2] = parsed.split('|');
  if (!book || !c1) return null;
  const chapter = Number(c1);
  const verse = Number(v1);
  const toChapter = Number(c2);
  const toVerse = Number(v2);
  if (!Number.isFinite(chapter) || chapter === 0) return null;
  if (verse === 0) {
    // a whole chapter, or a run of chapters
    return { book, from: { chapter, verse: null }, to: { chapter: toChapter > 0 ? toChapter : chapter, verse: null } };
  }
  return { book, from: { chapter, verse }, to: { chapter: toChapter > 0 ? toChapter : chapter, verse: toVerse > 0 ? toVerse : verse } };
}

export function parseNave(xml: string): Record<string, NaveTopic> {
  const topics: Record<string, NaveTopic> = {};
  for (const entry of xml.matchAll(/<term[^>]*>([^<]*)<\/term>\s*<def[^>]*>([\s\S]*?)<\/def>/g)) {
    const name = decode(entry[1]!).trim();
    if (name === '') continue;
    const topic: NaveTopic = topics[name] ?? { groups: [], see: [] };
    topics[name] = topic;
    for (const paragraph of entry[2]!.matchAll(/<p class="index(\d)"[^>]*>([\s\S]*?)<\/p>/g)) {
      const depth = Number(paragraph[1]);
      const html = paragraph[2]!;
      const text = plain(html).replace(/^[–.\-\s]+/, '');
      const see = [...html.matchAll(/<a [^>]*>([^<]*)<\/a>/g)].map((link) => plain(link[1]!));
      if (/^see\b/i.test(text) && !html.includes('<scripRef')) {
        // "See X": a pointer. A pointer under a heading belongs to that heading, a lone one to the topic.
        const last = topic.groups.at(-1);
        if (depth >= 3 && last !== undefined) last.see.push(...see);
        else topic.see.push(...see);
        continue;
      }
      const refs = [...html.matchAll(/parsed="([^"]*)"/g)].flatMap((match) => {
        const ref = parseRef(match[1]!);
        return ref === null ? [] : [ref];
      });
      const label = plain(html.split('<scripRef')[0]!).replace(/^[–.\-\s]+/, '').replace(/[\s;,:]+$/, '');
      // a deeper line with no heading of its own continues the one above
      topic.groups.push({ label, depth, refs, see: [] });
    }
  }
  return topics;
}
