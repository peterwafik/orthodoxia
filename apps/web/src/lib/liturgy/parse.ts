/**
 * The file format of the liturgy texts (content/liturgy/README.md): a `source:` line, then blocks.
 * A block starts with `@rubric`, `@priest`, `@deacon` or `@people`, then one line per language
 * (`en|`, `ar|`, `cop|`, `tr|`) and, optionally, `note| en: …` / `note| ar: …`. Lines that start with a
 * space continue the line above. A blank line ends a block. Lines that start with `#` are comments.
 */
export const ROLES = ['rubric', 'priest', 'deacon', 'people'] as const;
export type Role = (typeof ROLES)[number];

export const LANGS = ['en', 'ar', 'cop', 'tr'] as const;
export type Lang = (typeof LANGS)[number];

export type NoteLang = 'en' | 'ar';

export interface Block {
  readonly role: Role;
  readonly text: Readonly<Partial<Record<Lang, string>>>;
  readonly note?: Readonly<Partial<Record<NoteLang, string>>>;
}

export interface ParsedFile {
  readonly source: string;
  /** The source in Arabic, shown on the Arabic page (optional). */
  readonly sourceAr?: string;
  readonly blocks: readonly Block[];
}

export interface ParseIssue {
  readonly line: number;
  readonly message: string;
}

export interface ParseResult {
  readonly file: ParsedFile | null;
  readonly issues: readonly ParseIssue[];
}

const isRole = (value: string): value is Role => (ROLES as readonly string[]).includes(value);

interface Draft {
  readonly role: Role;
  readonly line: number;
  readonly bad: boolean;
  text: Partial<Record<Lang, string>>;
  note: Partial<Record<NoteLang, string>>;
  last: { kind: 'text'; lang: Lang } | { kind: 'note'; lang: NoteLang } | null;
}

export function parseLiturgyFile(input: string): ParseResult {
  const lines = input.replace(/^\uFEFF/, '').split(/\r\n|\r|\n/);
  const issues: ParseIssue[] = [];
  const blocks: Block[] = [];
  let source: string | null = null;
  let sourceAr: string | null = null;
  let inSource: 'source' | 'sourceAr' | null = null;
  let draft: Draft | null = null;

  const finish = () => {
    if (draft === null) return;
    const current = draft;
    draft = null;
    if (current.bad) return;
    if (Object.keys(current.text).length === 0) {
      issues.push({ line: current.line, message: 'This block has no text: add at least one of en|, ar|, cop| or tr|.' });
    } else if (current.text.tr !== undefined && current.text.cop === undefined) {
      issues.push({ line: current.line, message: 'tr| (transliteration) needs the cop| line it transliterates.' });
    } else {
      blocks.push({ role: current.role, text: current.text, ...(Object.keys(current.note).length > 0 ? { note: current.note } : {}) });
    }
  };

  lines.forEach((raw, index) => {
    const number = index + 1;
    const line = raw.replace(/\s+$/, '');
    if (line.trim() === '') {
      finish();
      inSource = null;
      return;
    }
    if (line.startsWith('#')) return;

    const tag = /^@(\w+)$/.exec(line);
    if (tag !== null) {
      finish();
      inSource = null;
      const role = tag[1]!;
      if (isRole(role)) {
        draft = { role, line: number, bad: false, text: {}, note: {}, last: null };
      } else {
        issues.push({ line: number, message: `Unknown speaker "@${role}". Use @rubric, @priest, @deacon or @people.` });
        draft = { role: 'rubric', line: number, bad: true, text: {}, note: {}, last: null };
      }
      return;
    }

    const sourceArLine = /^source-ar:\s*(.*)$/i.exec(line);
    if (sourceArLine !== null && draft === null) {
      if (sourceAr !== null) issues.push({ line: number, message: 'There is more than one "source-ar:" line.' });
      else sourceAr = sourceArLine[1]!.trim();
      inSource = 'sourceAr';
      return;
    }

    const sourceLine = /^source:\s*(.*)$/i.exec(line);
    if (sourceLine !== null && draft === null) {
      if (source !== null) issues.push({ line: number, message: 'There is more than one "source:" line.' });
      else source = sourceLine[1]!.trim();
      inSource = 'source';
      return;
    }

    if (/^\s+\S/.test(line)) {
      const more = line.trim();
      if (inSource === 'source' && source !== null) {
        source = `${source} ${more}`.trim();
      } else if (inSource === 'sourceAr' && sourceAr !== null) {
        sourceAr = `${sourceAr} ${more}`.trim();
      } else if (draft !== null && (draft as Draft).last !== null) {
        const current = draft as Draft;
        const last = current.last!;
        if (last.kind === 'text') current.text[last.lang] = `${current.text[last.lang]}\n${more}`;
        else current.note[last.lang] = `${current.note[last.lang]} ${more}`;
      } else {
        issues.push({ line: number, message: 'An indented line has nothing above it to continue.' });
      }
      return;
    }

    const field = /^(en|ar|cop|tr)\|\s?(.*)$/.exec(line);
    if (field !== null) {
      const current = draft as Draft | null;
      if (current === null) {
        issues.push({ line: number, message: 'Text outside a block: start it with @priest, @deacon, @people or @rubric.' });
        return;
      }
      const lang = field[1] as Lang;
      if (current.text[lang] !== undefined) {
        if (!current.bad) issues.push({ line: number, message: `This block already has an ${lang}| line.` });
        return;
      }
      current.text[lang] = field[2]!.trim();
      current.last = { kind: 'text', lang };
      return;
    }

    const note = /^note\|\s*(en|ar):\s*(.*)$/.exec(line);
    if (note !== null) {
      const current = draft as Draft | null;
      if (current === null) {
        issues.push({ line: number, message: 'A note outside a block.' });
        return;
      }
      const lang = note[1] as NoteLang;
      current.note[lang] = note[2]!.trim();
      current.last = { kind: 'note', lang };
      return;
    }

    issues.push({ line: number, message: `Unrecognised line: "${line.slice(0, 40)}".` });
  });
  finish();

  if (source === null || source === '') issues.push({ line: 1, message: 'Every file needs a "source:" line saying where the text comes from (translation, translator or publisher, and the licence or permission).' });
  else if (blocks.length === 0 && issues.length === 0) issues.push({ line: 1, message: 'The file has no blocks.' });

  return { file: issues.length > 0 ? null : { source: source!, ...(sourceAr === null || sourceAr === '' ? {} : { sourceAr }), blocks }, issues };
}
