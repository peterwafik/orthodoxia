/**
 * The topical study taxonomy: families of topics, each with its starting passages and its subtopics, in
 * English and Arabic. The source is a plain text file (`taxonomy-source.ts`):
 *
 *   # 1 | Family name | اسم العائلة      a family (the number is its id)
 *   > Reference; Reference                 starting passages of the family (optional)
 *   - Topic name | اسم الموضوع             a subtopic (id "1.1", "1.2", … by position)
 */
import { familyColor } from './color.ts';
import { parsePassages, type PassageRange } from './reference.ts';

export interface Topic {
  readonly id: string;
  readonly en: string;
  readonly ar: string;
}

export interface Family {
  readonly id: string;
  readonly en: string;
  readonly ar: string;
  /** A distinct colour for the family's markers. */
  readonly color: string;
  readonly passages: readonly PassageRange[];
  readonly topics: readonly Topic[];
}

export { familyColor } from './color.ts';

export function parseTaxonomy(text: string): Family[] {
  const families: { id: string; en: string; ar: string; passages: PassageRange[]; topics: Topic[] }[] = [];
  text.split('\n').forEach((raw, index) => {
    const line = raw.trim();
    const where = `line ${index + 1}`;
    if (line === '') return;
    const current = families.at(-1);
    if (line.startsWith('#')) {
      const [id, en, ar] = line.slice(1).split('|').map((part) => part.trim());
      if (!id || !en || !ar) throw new Error(`Family needs "# number | English | Arabic" at ${where}`);
      families.push({ id, en, ar, passages: [], topics: [] });
    } else if (line.startsWith('>')) {
      if (current === undefined) throw new Error(`Passages before any family at ${where}`);
      try {
        current.passages.push(...parsePassages(line.slice(1)));
      } catch (error) {
        throw new Error(`${(error as Error).message} (${where})`);
      }
    } else if (line.startsWith('-')) {
      if (current === undefined) throw new Error(`Topic before any family at ${where}`);
      const [en, ar] = line.slice(1).split('|').map((part) => part.trim());
      if (!en || !ar) throw new Error(`Topic needs "- English | Arabic" at ${where}`);
      current.topics.push({ id: `${current.id}.${current.topics.length + 1}`, en, ar });
    } else {
      throw new Error(`Cannot read ${where}: "${line}"`);
    }
  });
  return families.map((family, index) => ({ ...family, color: familyColor(index) }));
}
