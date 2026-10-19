/**
 * What the page draws for one stop's script, in ONE language: the page's language. A line that exists
 * only in the other language is never shown (so /en/ never shows Arabic and /ar/ never shows English). Pure, so it can be tested
 * without a browser; the page turns the result into elements.
 */
import { ROLES, type Block, type Role } from '../liturgy/parse.ts';

export type PageLang = 'en' | 'ar';

export interface ScriptItem {
  readonly role: Role;
  readonly text: string;
  readonly note?: string;
}

/** A block the page can use: an object with a known speaker and a text object. A damaged one is skipped. */
function usable(block: unknown): block is Block {
  if (typeof block !== 'object' || block === null) return false;
  const candidate = block as { role?: unknown; text?: unknown };
  return (ROLES as readonly unknown[]).includes(candidate.role) && typeof candidate.text === 'object' && candidate.text !== null;
}

export function scriptItems(blocks: readonly Block[], lang: PageLang): ScriptItem[] {
  const items: ScriptItem[] = [];
  if (!Array.isArray(blocks)) return items;
  for (const block of blocks) {
    if (!usable(block)) continue;
    const text = block.text[lang];
    if (typeof text !== 'string' || text === '') continue;
    const note = block.note?.[lang];
    items.push({ role: block.role, text, ...(typeof note === 'string' && note !== '' ? { note } : {}) });
  }
  return items;
}

/** Whether a script has a step (rubric) of its own; if not, the stop's own "what happens" stays on show. */
export function hasRubric(blocks: readonly Block[]): boolean {
  return Array.isArray(blocks) && blocks.some((block) => usable(block) && block.role === 'rubric');
}

/** A source line may end in a link; the page shows the words and links the address. */
export function splitSource(source: string): { label: string; url?: string } {
  const match = /(https?:\/\/\S+)/.exec(source);
  if (match === null) return { label: source.trim() };
  const url = match[1]!.replace(/[.,;)]+$/, '');
  const label = source.replace(match[1]!, '').replace(/\s+/g, ' ').trim();
  return { label, url };
}

const ARABIC_LETTERS = /[\u0600-\u06FF]/;

/**
 * The credit line under a stop's text, in the page's language. A source written in the other language
 * is never shown; `label: null` tells the page to point to the Sources page instead.
 */
export function creditFor(entry: { source: string; sourceAr?: string }, lang: PageLang): { label: string | null; url?: string } {
  const chosen = lang === 'ar' ? entry.sourceAr : ARABIC_LETTERS.test(entry.source) ? undefined : entry.source;
  if (chosen === undefined || chosen.trim() === '') return { label: null };
  const { label, url } = splitSource(chosen);
  return url === undefined ? { label } : { label, url };
}
