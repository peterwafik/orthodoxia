/** Translation units of a commentary book and their checks (see translate-prepare.ts). */
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import type { CommentaryBook } from '../../packages/commentary/src/index.ts';

export interface TranslationUnit {
  readonly id: string;
  readonly kind: 'section' | 'paragraph' | 'reflection' | 'point';
  readonly hash: string;
  readonly ar: string;
}

export const unitHash = (text: string) => createHash('sha256').update(text).digest('hex').slice(0, 10);

export function unitsOf(book: CommentaryBook): TranslationUnit[] {
  const units: TranslationUnit[] = [];
  for (const chapter of book.chapters) {
    chapter.entries.forEach((entry, index) => {
      const previous = chapter.entries[index - 1];
      if (entry.section !== null && entry.section !== previous?.section) {
        units.push({ id: `${chapter.chapter}.${index}.s`, kind: 'section', hash: unitHash(entry.section), ar: entry.section });
      }
      entry.paragraphs.forEach((paragraph, p) => {
        units.push({ id: `${chapter.chapter}.${index}.${p}`, kind: paragraph.kind ?? 'paragraph', hash: unitHash(paragraph.text), ar: paragraph.text });
      });
    });
  }
  return units;
}

/**
 * Problems of a translated chunk against its Arabic source: every unit present with the source's
 * hash, no Arabic letters left, no empty text, and a plausible length (English usually runs 1.1–1.8
 * times the Arabic word count; far outside that suggests an omission or an addition).
 */
interface ArChunk {
  readonly units: readonly { id: string; hash: string; ar: string; kind: string }[];
}
interface EnChunk {
  readonly units: Readonly<Record<string, { hash: string; en: string }>>;
}

export function checkChunk(enPath: string): string[] {
  const arPath = enPath.replace(/\.en\.json$/, '.ar.json');
  if (!existsSync(arPath)) return [`${arPath} missing`];
  let en: EnChunk;
  try {
    en = JSON.parse(readFileSync(enPath, 'utf8')) as EnChunk;
  } catch (error) {
    return [`invalid JSON: ${(error as Error).message}`];
  }
  const ar = JSON.parse(readFileSync(arPath, 'utf8')) as ArChunk;
  const problems: string[] = [];
  let arWords = 0;
  let enWords = 0;
  for (const unit of ar.units) {
    const translated = en.units?.[unit.id];
    if (translated === undefined) {
      problems.push(`${unit.id}: missing`);
      continue;
    }
    if (translated.hash !== unit.hash) problems.push(`${unit.id}: hash ${translated.hash} ≠ ${unit.hash}`);
    if (typeof translated.en !== 'string' || translated.en.trim() === '') problems.push(`${unit.id}: empty`);
    else if (/[ء-ي]{3,}/.test(translated.en)) problems.push(`${unit.id}: Arabic left in the text`);
    const a = unit.ar.split(/\s+/).length;
    const e = (translated.en ?? '').split(/\s+/).length;
    arWords += a;
    enWords += e;
    if (a >= 25 && (e < a * 0.7 || e > a * 2.6)) problems.push(`${unit.id}: length ${e} English words for ${a} Arabic`);
  }
  for (const id of Object.keys(en.units ?? {})) if (!ar.units.some((unit) => unit.id === id)) problems.push(`${id}: not in the source`);
  if (arWords > 200 && (enWords < arWords * 0.9 || enWords > arWords * 2.2)) problems.push(`chunk length ${enWords} English words for ${arWords} Arabic`);
  return problems;
}
