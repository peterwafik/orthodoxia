/**
 * A small USFM parser for reading Bible text (https://ubsicap.github.io/usfm/).
 *
 * It keeps what a reader needs: chapters, verses, paragraph and poetry breaks, section headings,
 * psalm superscriptions, italic supplied words (`\add`), divine-name small caps (`\nd`), words of
 * Jesus (`\wj`) and footnotes. It drops what the reader never sees: Strong's numbers and other word
 * attributes, cross-reference notes, and introduction material.
 */

export type InlineStyle = 'add' | 'nd' | 'wj';

/** A run of verse text in one style. `styles` is empty for plain text. */
export interface Inline {
  readonly text: string;
  readonly styles: readonly InlineStyle[];
}

export interface Verse {
  /** The verse number as printed: `"1"`, or a range such as `"1-2"` in some texts. */
  readonly number: string;
  readonly content: readonly Inline[];
  /** Footnote texts, in order. */
  readonly notes: readonly string[];
  /** The verse begins a new paragraph (prose) or line group. */
  readonly paragraph: boolean;
  /** Poetry indent level of the verse's first line, or 0 for prose. */
  readonly poetry: number;
  /** Section headings printed immediately before the verse. */
  readonly headings: readonly string[];
}

export interface Chapter {
  readonly number: number;
  /** A psalm's title (`\d`), when the text does not number it as a verse. */
  readonly superscription: string | null;
  readonly verses: readonly Verse[];
}

export interface Book {
  /** USFM book code, e.g. `GEN`, `TOB`, `JHN`. */
  readonly code: string;
  /** Running header name (`\h`), or the main title. */
  readonly name: string;
  readonly chapters: readonly Chapter[];
}

interface VerseDraft {
  number: string;
  content: Inline[];
  notes: string[];
  paragraph: boolean;
  poetry: number;
  headings: string[];
}

interface ChapterDraft {
  number: number;
  superscription: string | null;
  verses: VerseDraft[];
}

/** Paragraph-level markers that start a new prose paragraph. */
const PARAGRAPH = new Set(['p', 'm', 'pi', 'pi1', 'pi2', 'mi', 'nb', 'pc', 'pm', 'li', 'li1', 'li2', 'b']);
/** Poetry markers and their indent level. */
const POETRY: Readonly<Record<string, number>> = { q: 1, q1: 1, q2: 2, q3: 3, qm1: 1, qm2: 2, qc: 1 };
/** Headings shown to the reader. */
const HEADING = new Set(['s', 's1', 's2', 's3', 'ms', 'ms1', 'ms2', 'qa', 'sp']);
/** Book-level and introduction markers whose content is not part of the reading text. */
const SKIPPED_LINE = new Set([
  'id', 'ide', 'toc1', 'toc2', 'toc3', 'toca1', 'mt', 'mt1', 'mt2', 'mt3', 'imt', 'imt1', 'is', 'is1', 'is2',
  'ip', 'ipi', 'im', 'ib', 'ili', 'iot', 'io1', 'ie', 'rem', 'cl', 'sts', 'mr', 'r', 'cp',
]);

/** Removes `\w word|attrs\w*` attributes and inline markers that carry no reading text. */
function stripWordAttributes(text: string): string {
  return text
    .replace(/\\\+?w\s+([^|\\]*?)(?:\|[^\\]*?)?\\\+?w\*/g, '$1')
    // Alternate and published verse/chapter numbers duplicate the real ones.
    .replace(/\\(?:vp|va|ca)\s.*?\\(?:vp|va|ca)\*/g, '');
}

/** Pulls footnotes out of a line, returning the text without them and the note texts. */
function extractNotes(text: string): { text: string; notes: string[] } {
  const notes: string[] = [];
  const withoutCrossRefs = text.replace(/\\x\s.*?\\x\*/g, '');
  const withoutNotes = withoutCrossRefs.replace(/\\f\s+\S+\s(.*?)\\f\*/g, (_match, body: string) => {
    const note = body
      .replace(/\\fr\s+\S+\s*/g, '')
      .replace(/\\f[a-z]+\*?\s?/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    if (note !== '') notes.push(note);
    return '';
  });
  return { text: withoutNotes, notes };
}

/** Splits verse text into styled runs on `\add`, `\nd` and `\wj` (and their nested `\+` forms). */
function toInlines(text: string): Inline[] {
  const inlines: Inline[] = [];
  const stack: InlineStyle[] = [];
  let buffer = '';
  const flush = (): void => {
    if (buffer !== '') inlines.push({ text: buffer, styles: [...stack] });
    buffer = '';
  };
  const pattern = /\\\+?(add|nd|wj)(\*|\s)/g;
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    buffer += text.slice(last, match.index);
    flush();
    const style = match[1] as InlineStyle;
    if (match[2] === '*') {
      const index = stack.lastIndexOf(style);
      if (index !== -1) stack.splice(index, 1);
    } else {
      stack.push(style);
    }
    last = match.index + match[0].length;
  }
  buffer += text.slice(last);
  flush();
  // Remove any marker we do not render, then normalize whitespace across runs.
  const cleaned = inlines
    .map((inline) => ({ ...inline, text: inline.text.replace(/\\\+?[a-z]+[0-9]*\*?/g, '').replace(/\s+/g, ' ') }))
    .filter((inline) => inline.text !== '');
  if (cleaned.length > 0) {
    const first = cleaned[0]!;
    const lastInline = cleaned[cleaned.length - 1]!;
    cleaned[0] = { ...first, text: first.text.trimStart() };
    cleaned[cleaned.length - 1] = { ...lastInline, text: cleaned[cleaned.length - 1]!.text.trimEnd() };
  }
  return cleaned.filter((inline) => inline.text !== '');
}

/** Parses one USFM book file. Throws on a file without `\id`. */
export function parseUsfm(source: string): Book {
  const text = stripWordAttributes(source.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n'));
  const idMatch = /^\\id\s+(\S+)/m.exec(text);
  if (idMatch === null) throw new Error('USFM: missing \\id line');
  const code = idMatch[1]!.toUpperCase();
  const name = (/^\\h\s+(.+)$/m.exec(text)?.[1] ?? /^\\mt1?\s+(.+)$/m.exec(text)?.[1] ?? code).trim();

  const chapters: ChapterDraft[] = [];
  let chapter: ChapterDraft | null = null;
  let verse: VerseDraft | null = null;
  let pendingParagraph = false;
  let pendingPoetry = 0;
  let pendingHeadings: string[] = [];
  let pendingVerseText = '';

  const finishVerse = (): void => {
    if (verse === null) return;
    const { text: withoutNotes, notes } = extractNotes(pendingVerseText);
    verse.content = toInlines(withoutNotes);
    verse.notes.push(...notes);
    pendingVerseText = '';
    verse = null;
  };

  const startVerse = (number: string): void => {
    if (chapter === null) return;
    finishVerse();
    verse = {
      number,
      content: [],
      notes: [],
      paragraph: pendingParagraph || chapter.verses.length === 0,
      poetry: pendingPoetry,
      headings: pendingHeadings,
    };
    chapter.verses.push(verse);
    pendingParagraph = false;
    pendingPoetry = 0;
    pendingHeadings = [];
  };

  // Every marker that begins a line, plus `\v` which may also appear mid-line.
  const tokens = text.split(/(?=\\(?:[a-z]+[0-9]*)\s)/g);
  for (const token of tokens) {
    const marker = /^\\([a-z]+[0-9]*)\s?/.exec(token);
    if (marker === null) {
      if (verse !== null) pendingVerseText += token;
      continue;
    }
    const tag = marker[1]!;
    const rest = token.slice(marker[0].length);

    if (tag === 'c') {
      finishVerse();
      const number = Number.parseInt(rest, 10);
      chapter = { number, superscription: null, verses: [] };
      chapters.push(chapter);
      pendingParagraph = true;
      pendingHeadings = [];
      continue;
    }
    if (tag === 'v') {
      const verseMatch = /^(\S+)\s?([\s\S]*)$/.exec(rest);
      if (verseMatch === null) continue;
      startVerse(verseMatch[1]!);
      pendingVerseText = verseMatch[2]!;
      continue;
    }
    if (tag === 'd') {
      if (chapter !== null && chapter.verses.length === 0) {
        const title = toInlines(extractNotes(rest).text).map((inline) => inline.text).join('').trim();
        if (title !== '') chapter.superscription = title;
      }
      continue;
    }
    if (HEADING.has(tag)) {
      finishVerse();
      const heading = toInlines(extractNotes(rest).text).map((inline) => inline.text).join('').trim();
      if (heading !== '' && chapter !== null) pendingHeadings.push(heading);
      continue;
    }
    if (PARAGRAPH.has(tag) || tag in POETRY) {
      // A paragraph marker may sit between verses or mid-verse (poetry lines within one verse).
      if (verse !== null && rest.trim() !== '') {
        pendingVerseText += ` ${rest}`;
        continue;
      }
      finishVerse();
      pendingParagraph = true;
      pendingPoetry = POETRY[tag] ?? 0;
      continue;
    }
    if (SKIPPED_LINE.has(tag) || tag === 'h') {
      finishVerse();
      continue;
    }
    // Any other marker: keep its text with the current verse (inline markers are cleaned later).
    if (verse !== null) pendingVerseText += token;
  }
  finishVerse();

  return {
    code,
    name,
    chapters: chapters
      .filter((candidate) => candidate.verses.length > 0)
      .map((candidate) => ({
        number: candidate.number,
        superscription: candidate.superscription,
        verses: candidate.verses.map((draft) => ({ ...draft })),
      })),
  };
}
