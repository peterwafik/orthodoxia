# Holy Mass Full Texts Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let readers follow the full prayer texts of the Holy Mass, stop by stop, in Arabic and English (Coptic and transliteration ready), filtered by speaker, with the explanation beside them and every text credited to its source.

**Architecture:** Plain-text liturgy files in `content/liturgy/` are parsed and validated by pure functions in `apps/web/src/lib/liturgy/`, compiled by `scripts/liturgy/build.ts` into one JSON file per liturgy (`apps/web/public/liturgy/<liturgy>.json`), and fetched by the Holy Mass page for the liturgy the reader picked. The page renders each stop's script from the JSON; the existing layer switches filter it; a language picker and a text-size control are saved in the browser. Stops without text keep their draft summaries.

**Tech Stack:** TypeScript run by Node 24 (type stripping, `node scripts/x.ts`), Vitest (run from the repo root: `npx vitest run`), Astro 7 (`apps/web`), no new dependencies.

**Spec:** `docs/superpowers/specs/2026-10-18-holy-mass-full-texts-design.md`

## Global Constraints

- No text is copied from a published translation, and no prayer is written from memory. The only real texts added by this plan are the short dialogue of stops 29 and 30 that already exist in `apps/web/src/data/holy-mass.ts`.
- Every content file must have a `source:` line; the build fails without it.
- Languages: Arabic (`ar`) and English (`en`) shown now; `cop` (Coptic) and `tr` (transliteration) supported in the data and shown only when some text has them.
- Speakers are exactly `rubric`, `priest`, `deacon`, `people`.
- Arabic is right-to-left per line (`dir="rtl"`); the page already uses CSS logical properties; keep it that way.
- Text is inserted with `textContent`, never `innerHTML`.
- Interactive controls are at least 44 px and have a text label (existing rule of the panel).
- Imports in TypeScript use explicit `.ts` extensions (existing convention).
- The earlier Holy Mass film and panel work is **uncommitted** in the working tree. Stage only the files named in each task; do not `git add -A`. Do not touch the untracked `Holy Mass/` folder.
- Do not commit unless the person running this plan has approved committing (the "Commit" steps are for when they have).

## Review Focus

Input classes the spec implies and that must be pinned by a test in the owning task:

1. A content file saved on Windows (CRLF line endings, a leading BOM) must parse exactly like a Unix one. (Task 1)
2. A block that has only Arabic, shown to a reader who chose only English, must show the Arabic, not a blank row. (Task 4)
3. The liturgy JSON failing to load (offline, 404, damaged) must leave the page working with the draft summaries and no error. (Task 4)
4. A content file named after a stop that does not exist (a typo in the slug) or placed in an unknown folder must fail the build and name the file. (Task 3)
5. A stale or damaged JSON containing an unknown speaker must be ignored block by block, not break the stop. (Task 4)
6. `content/liturgy/` missing or empty must build cleanly and give empty liturgy files. (Task 3)

---

## File Structure

| File | Responsibility |
| --- | --- |
| `apps/web/src/lib/liturgy/parse.ts` (create) | Types (`Role`, `Lang`, `Block`, `ParsedFile`), `parseLiturgyFile(text)` with line-numbered issues. |
| `apps/web/src/lib/liturgy/parse.test.ts` (create) | Parser tests. |
| `apps/web/src/lib/liturgy/resolve.ts` (create) | `LITURGIES`, `resolveLiturgy`, `coverageOf`. |
| `apps/web/src/lib/liturgy/resolve.test.ts` (create) | Resolution tests. |
| `apps/web/src/lib/liturgy/build-core.ts` (create) | `buildLiturgies(files, slugs)`: parse, validate, resolve, coverage, sources. Pure. |
| `apps/web/src/lib/liturgy/build-core.test.ts` (create) | Build tests. |
| `scripts/liturgy/build.ts` (create) | Reads `content/liturgy/`, calls `buildLiturgies`, writes JSON and prints coverage. |
| `content/liturgy/README.md`, `content/liturgy/common/lift-up-your-hearts.txt`, `content/liturgy/common/it-is-fitting-and-right.txt` (create) | The file format and the first two real files. |
| `apps/web/src/data/liturgy-sources.json` (create, generated, committed) | Distinct sources, for the Sources page. |
| `apps/web/src/lib/holy-mass/reading.ts` (create) | Language and text-size preferences. |
| `apps/web/src/lib/holy-mass/script-view.ts` (create) | `scriptItems`, `splitSource`. |
| `apps/web/src/lib/holy-mass/load.ts` (create) | `loadLiturgy(id, fetchFn)`. |
| `apps/web/src/lib/holy-mass/reading.test.ts`, `script-view.test.ts`, `load.test.ts` (create) | Their tests. |
| `apps/web/src/pages/[lang]/holy-mass.astro` (modify) | Load, render, languages, size, sources line, CSS. |
| `apps/web/src/data/holy-mass.ts`, `holy-mass.test.ts` (modify) | Remove the in-code `dialogue` (now in files). |
| `apps/web/src/pages/[lang]/sources.astro`, `apps/web/src/i18n/en.ts`, `ar.ts` (modify) | The texts' sources on the Sources page. |
| `package.json`, `scripts/build-site.ts`, `.gitignore` (modify) | Run the liturgy build; ignore its output. |
| `docs/HOLY_MASS.md`, `CHANGELOG.md` (modify) | Document. |

---

### Task 1: The parser

**Files:**
- Create: `apps/web/src/lib/liturgy/parse.ts`
- Test: `apps/web/src/lib/liturgy/parse.test.ts`

**Interfaces:**
- Consumes: nothing.
- Produces: `ROLES`, `Role`, `LANGS`, `Lang`, `Block`, `ParsedFile`, `ParseIssue`, `ParseResult`, `parseLiturgyFile(input: string): ParseResult`. A `ParseResult` has `file: ParsedFile | null` (null when there are issues) and `issues: ParseIssue[]` (each `{ line: number; message: string }`, 1-based line).

- [ ] **Step 1: Write the failing test**

Create `apps/web/src/lib/liturgy/parse.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { parseLiturgyFile } from './parse.ts';

const GOOD = `# A comment
source: Example Translation, by A. Translator, used with permission.
  See https://example.org/liturgy

@rubric
en| The priest turns to the people.
ar| يلتفت الكاهن إلى الشعب.

@priest
en| The Lord be with you all.
ar| الرب مع جميعكم.
note| en: A greeting used throughout the service.
note| ar: تحية تتكرر في القداس.

@people
en| And with your spirit.
  and with all of us.
ar| ومع روحك أيضًا.
`;

describe('parseLiturgyFile', () => {
  it('reads the source, the blocks, the languages, the notes and continuation lines', () => {
    const { file, issues } = parseLiturgyFile(GOOD);
    expect(issues).toEqual([]);
    expect(file!.source).toBe('Example Translation, by A. Translator, used with permission. See https://example.org/liturgy');
    expect(file!.blocks.map((block) => block.role)).toEqual(['rubric', 'priest', 'people']);
    expect(file!.blocks[1]!.text).toEqual({ en: 'The Lord be with you all.', ar: 'الرب مع جميعكم.' });
    expect(file!.blocks[1]!.note).toEqual({ en: 'A greeting used throughout the service.', ar: 'تحية تتكرر في القداس.' });
    expect(file!.blocks[2]!.text.en).toBe('And with your spirit.\nand with all of us.');
  });

  it('reads a file saved on Windows (CRLF and a byte-order mark) the same as a Unix one', () => {
    const windows = '\uFEFF' + GOOD.replace(/\n/g, '\r\n');
    expect(parseLiturgyFile(windows)).toEqual(parseLiturgyFile(GOOD));
  });

  it('accepts Coptic with its transliteration, and Coptic alone', () => {
    const { file, issues } = parseLiturgyFile('source: S\n\n@people\ncop| Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ\ntr| Allilouia\n\n@people\ncop| Ⲁⲙⲏⲛ\n');
    expect(issues).toEqual([]);
    expect(file!.blocks[0]!.text).toEqual({ cop: 'Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ', tr: 'Allilouia' });
  });

  it('requires a source line', () => {
    const { file, issues } = parseLiturgyFile('@priest\nen| Hello.\n');
    expect(file).toBeNull();
    expect(issues[0]!.message).toMatch(/source:/);
  });

  it('names the line of each problem', () => {
    const { file, issues } = parseLiturgyFile(
      ['source: S', '', '@bishop', 'en| x', '', '@priest', 'fr| Bonjour', '', '@people', '', '@deacon', 'en| a', 'en| b', '', '@priest', 'tr| only tr'].join('\n'),
    );
    expect(file).toBeNull();
    const byLine = Object.fromEntries(issues.map((issue) => [issue.line, issue.message]));
    expect(byLine[3]).toMatch(/Unknown speaker "@bishop"/);
    expect(byLine[7]).toMatch(/Unrecognised line/);
    expect(byLine[9]).toMatch(/no text/);
    expect(byLine[13]).toMatch(/already has/);
    expect(byLine[15]).toMatch(/cop\|/);
  });

  it('rejects text outside a block and an indented line with nothing to continue', () => {
    expect(parseLiturgyFile('source: S\n\nen| Stray.\n').issues[0]).toMatchObject({ line: 3 });
    expect(parseLiturgyFile('source: S\n\n  Stray.\n').issues[0]).toMatchObject({ line: 3 });
  });

  it('reports a file with a source but no blocks', () => {
    const { file, issues } = parseLiturgyFile('source: S\n');
    expect(file).toBeNull();
    expect(issues[0]!.message).toMatch(/no blocks/);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx vitest run apps/web/src/lib/liturgy/parse.test.ts`
Expected: FAIL (cannot find `./parse.ts`).

- [ ] **Step 3: Write the implementation**

Create `apps/web/src/lib/liturgy/parse.ts`:

```ts
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
  let inSource = false;
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
      inSource = false;
      return;
    }
    if (line.startsWith('#')) return;

    const tag = /^@(\w+)$/.exec(line);
    if (tag !== null) {
      finish();
      inSource = false;
      const role = tag[1]!;
      if (isRole(role)) {
        draft = { role, line: number, bad: false, text: {}, note: {}, last: null };
      } else {
        issues.push({ line: number, message: `Unknown speaker "@${role}". Use @rubric, @priest, @deacon or @people.` });
        draft = { role: 'rubric', line: number, bad: true, text: {}, note: {}, last: null };
      }
      return;
    }

    const sourceLine = /^source:\s*(.*)$/i.exec(line);
    if (sourceLine !== null && draft === null) {
      if (source !== null) issues.push({ line: number, message: 'There is more than one "source:" line.' });
      else source = sourceLine[1]!.trim();
      inSource = true;
      return;
    }

    if (/^\s+\S/.test(line)) {
      const more = line.trim();
      if (inSource && source !== null) {
        source = `${source} ${more}`.trim();
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

  return { file: issues.length > 0 ? null : { source: source!, blocks }, issues };
}
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `npx vitest run apps/web/src/lib/liturgy/parse.test.ts`
Expected: PASS (all tests in the file).

- [ ] **Step 5: Commit**

```bash
git add apps/web/src/lib/liturgy/parse.ts apps/web/src/lib/liturgy/parse.test.ts
git commit -m "Liturgy texts: the file format and its parser"
```

---

### Task 2: Resolving a liturgy and its coverage

**Files:**
- Create: `apps/web/src/lib/liturgy/resolve.ts`
- Test: `apps/web/src/lib/liturgy/resolve.test.ts`

**Interfaces:**
- Consumes: `ParsedFile`, `Lang`, `LANGS` from `./parse.ts`.
- Produces: `LITURGIES` (`['basil','gregory','cyril']`), `LiturgyId`, `Origin` (`'common' | LiturgyId`), `StopScript` (`{ source: string; origin: Origin; blocks: readonly Block[] }`), `resolveLiturgy(liturgy, files, slugs): Record<string, StopScript>` where `files` is a `ReadonlyMap<string, ParsedFile>` keyed `"<origin>/<slug>"`, `Coverage` (`{ stops: number; blocks: number; perLang: Record<Lang, number> }`), `coverageOf(scripts: Record<string, StopScript>): Coverage`.

- [ ] **Step 1: Write the failing test**

Create `apps/web/src/lib/liturgy/resolve.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import type { ParsedFile } from './parse.ts';
import { coverageOf, resolveLiturgy } from './resolve.ts';

const file = (source: string, ...lines: Array<[('en' | 'ar'), string]>): ParsedFile => ({
  source,
  blocks: lines.map(([lang, text]) => ({ role: 'priest' as const, text: { [lang]: text } })),
});

const files = new Map<string, ParsedFile>([
  ['common/a', file('Common A', ['en', 'a-common'])],
  ['common/b', file('Common B', ['en', 'b-common'], ['ar', 'ب'])],
  ['basil/b', file('Basil B', ['en', 'b-basil'])],
]);

describe('resolveLiturgy', () => {
  it('uses the liturgy’s own file when there is one, else the common one', () => {
    const basil = resolveLiturgy('basil', files, ['a', 'b', 'c']);
    expect(basil['a']).toMatchObject({ origin: 'common', source: 'Common A' });
    expect(basil['b']).toMatchObject({ origin: 'basil', source: 'Basil B' });
    expect(basil['b']!.blocks).toHaveLength(1);
    const cyril = resolveLiturgy('cyril', files, ['a', 'b', 'c']);
    expect(cyril['b']).toMatchObject({ origin: 'common' });
  });

  it('leaves out a stop that has no text', () => {
    expect(Object.keys(resolveLiturgy('basil', files, ['a', 'b', 'c']))).toEqual(['a', 'b']);
  });
});

describe('coverageOf', () => {
  it('counts stops, blocks and blocks per language', () => {
    const coverage = coverageOf(resolveLiturgy('cyril', files, ['a', 'b']));
    expect(coverage).toEqual({ stops: 2, blocks: 3, perLang: { en: 2, ar: 1, cop: 0, tr: 0 } });
  });

  it('is all zero for no scripts', () => {
    expect(coverageOf({})).toEqual({ stops: 0, blocks: 0, perLang: { en: 0, ar: 0, cop: 0, tr: 0 } });
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx vitest run apps/web/src/lib/liturgy/resolve.test.ts`
Expected: FAIL (cannot find `./resolve.ts`).

- [ ] **Step 3: Write the implementation**

Create `apps/web/src/lib/liturgy/resolve.ts`:

```ts
import { LANGS, type Block, type Lang, type ParsedFile } from './parse.ts';

export const LITURGIES = ['basil', 'gregory', 'cyril'] as const;
export type LiturgyId = (typeof LITURGIES)[number];
export type Origin = 'common' | LiturgyId;

export interface StopScript {
  readonly source: string;
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
    if (origin !== null && chosen !== undefined) scripts[slug] = { source: chosen.source, origin, blocks: chosen.blocks };
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
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `npx vitest run apps/web/src/lib/liturgy`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add apps/web/src/lib/liturgy/resolve.ts apps/web/src/lib/liturgy/resolve.test.ts
git commit -m "Liturgy texts: resolving a liturgy from common and own files, and coverage"
```

---

### Task 3: The build, the first files, and wiring

**Files:**
- Create: `apps/web/src/lib/liturgy/build-core.ts`, `apps/web/src/lib/liturgy/build-core.test.ts`, `scripts/liturgy/build.ts`, `content/liturgy/README.md`, `content/liturgy/common/lift-up-your-hearts.txt`, `content/liturgy/common/it-is-fitting-and-right.txt`, `apps/web/src/data/liturgy-sources.json` (generated, committed)
- Modify: `package.json`, `scripts/build-site.ts`, `.gitignore`

**Interfaces:**
- Consumes: `parseLiturgyFile`, `resolveLiturgy`, `coverageOf`, `LITURGIES`, `LiturgyId`, `Coverage`, `StopScript`.
- Produces: `buildLiturgies(files: Record<string, string>, slugs: readonly string[]): BuildResult` where `files` maps a path relative to `content/liturgy/` (e.g. `"common/lift-up-your-hearts.txt"`) to its text; `BuildResult` is `{ errors: string[]; liturgies: Record<LiturgyId, LiturgyJson>; coverage: Record<LiturgyId, Coverage>; sources: string[] }`; `LiturgyJson` is `{ liturgy: LiturgyId; stops: Record<string, { source: string; blocks: Block[] }> }`.

- [ ] **Step 1: Write the failing test**

Create `apps/web/src/lib/liturgy/build-core.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { buildLiturgies } from './build-core.ts';

const GOOD = (source: string, text: string) => `source: ${source}\n\n@priest\nen| ${text}\n`;
const SLUGS = ['one', 'two'];

describe('buildLiturgies', () => {
  it('builds one JSON per liturgy with the common stops copied in, plus coverage and sources', () => {
    const result = buildLiturgies(
      { 'common/one.txt': GOOD('Src A', 'common'), 'basil/two.txt': GOOD('Src B', 'basil two') },
      SLUGS,
    );
    expect(result.errors).toEqual([]);
    expect(Object.keys(result.liturgies['basil'].stops)).toEqual(['one', 'two']);
    expect(Object.keys(result.liturgies['cyril'].stops)).toEqual(['one']);
    expect(result.liturgies['basil'].stops['two']!.source).toBe('Src B');
    expect(result.coverage['basil'].stops).toBe(2);
    expect(result.coverage['gregory'].stops).toBe(1);
    expect(result.sources).toEqual(['Src A', 'Src B']);
  });

  it('names the file when a slug is not a real stop', () => {
    const result = buildLiturgies({ 'common/lift-up-yor-hearts.txt': GOOD('S', 'x') }, SLUGS);
    expect(result.errors).toHaveLength(1);
    expect(result.errors[0]).toContain('content/liturgy/common/lift-up-yor-hearts.txt');
    expect(result.errors[0]).toMatch(/not a stop/);
  });

  it('names the file when it is in an unknown folder or is not a .txt file', () => {
    const result = buildLiturgies({ 'coptic/one.txt': GOOD('S', 'x'), 'common/one.md': GOOD('S', 'x') }, SLUGS);
    expect(result.errors.some((error) => error.includes('content/liturgy/coptic/one.txt') && /folder/.test(error))).toBe(true);
    expect(result.errors.some((error) => error.includes('content/liturgy/common/one.md') && /\.txt/.test(error))).toBe(true);
  });

  it('reports a file’s parse problems with its path and line', () => {
    const result = buildLiturgies({ 'common/one.txt': '@priest\nen| No source.\n' }, SLUGS);
    expect(result.errors[0]).toMatch(/^content\/liturgy\/common\/one\.txt:1:/);
  });

  it('builds empty liturgies from no files at all', () => {
    const result = buildLiturgies({}, SLUGS);
    expect(result.errors).toEqual([]);
    expect(result.liturgies['basil']).toEqual({ liturgy: 'basil', stops: {} });
    expect(result.coverage['cyril']).toEqual({ stops: 0, blocks: 0, perLang: { en: 0, ar: 0, cop: 0, tr: 0 } });
    expect(result.sources).toEqual([]);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx vitest run apps/web/src/lib/liturgy/build-core.test.ts`
Expected: FAIL (cannot find `./build-core.ts`).

- [ ] **Step 3: Write the pure build**

Create `apps/web/src/lib/liturgy/build-core.ts`:

```ts
import { parseLiturgyFile, type Block, type ParsedFile } from './parse.ts';
import { LITURGIES, coverageOf, resolveLiturgy, type Coverage, type LiturgyId, type Origin } from './resolve.ts';

export interface LiturgyJson {
  readonly liturgy: LiturgyId;
  readonly stops: Record<string, { readonly source: string; readonly blocks: readonly Block[] }>;
}

export interface BuildResult {
  readonly errors: string[];
  readonly liturgies: Record<LiturgyId, LiturgyJson>;
  readonly coverage: Record<LiturgyId, Coverage>;
  /** The distinct `source:` lines in use, sorted. */
  readonly sources: string[];
}

const ORIGINS: readonly string[] = ['common', ...LITURGIES];

/**
 * @param files path relative to content/liturgy/ → the file's text
 * @param slugs the slugs of the real stops
 */
export function buildLiturgies(files: Record<string, string>, slugs: readonly string[]): BuildResult {
  const errors: string[] = [];
  const parsed = new Map<string, ParsedFile>();
  for (const [path, text] of Object.entries(files)) {
    const shown = `content/liturgy/${path}`;
    const match = /^([^/]+)\/([^/]+)\.txt$/.exec(path);
    if (match === null) {
      errors.push(`${shown}: only .txt files in a folder (common, basil, gregory or cyril) belong here.`);
      continue;
    }
    const [, origin, slug] = match as unknown as [string, Origin, string];
    if (!ORIGINS.includes(origin)) {
      errors.push(`${shown}: "${origin}" is not a folder of texts. Use common, basil, gregory or cyril.`);
      continue;
    }
    if (!slugs.includes(slug)) {
      errors.push(`${shown}: "${slug}" is not a stop. Use the slug of a stop in apps/web/src/data/holy-mass.ts.`);
      continue;
    }
    const result = parseLiturgyFile(text);
    for (const issue of result.issues) errors.push(`${shown}:${issue.line}: ${issue.message}`);
    if (result.file !== null) parsed.set(`${origin}/${slug}`, result.file);
  }

  const liturgies = {} as Record<LiturgyId, LiturgyJson>;
  const coverage = {} as Record<LiturgyId, Coverage>;
  const used = new Set<string>();
  for (const liturgy of LITURGIES) {
    const scripts = resolveLiturgy(liturgy, parsed, slugs);
    liturgies[liturgy] = {
      liturgy,
      stops: Object.fromEntries(Object.entries(scripts).map(([slug, script]) => [slug, { source: script.source, blocks: script.blocks }])),
    };
    coverage[liturgy] = coverageOf(scripts);
    for (const script of Object.values(scripts)) used.add(script.source);
  }
  return { errors, liturgies, coverage, sources: [...used].sort() };
}
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `npx vitest run apps/web/src/lib/liturgy`
Expected: PASS.

- [ ] **Step 5: Write the script and the first content**

Create `scripts/liturgy/build.ts`:

```ts
/**
 * Builds the Holy Mass texts from content/liturgy/ (format: content/liturgy/README.md):
 *   apps/web/public/liturgy/<liturgy>.json     one file per liturgy, every stop that has text
 *   apps/web/src/data/liturgy-sources.json     the distinct sources, for the Sources page
 * Fails, naming the file and line, on any problem. A missing content/liturgy/ builds empty files.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { STOPS } from '../../apps/web/src/data/holy-mass.ts';
import { buildLiturgies } from '../../apps/web/src/lib/liturgy/build-core.ts';
import { LITURGIES } from '../../apps/web/src/lib/liturgy/resolve.ts';

const ROOT = resolve(import.meta.dirname, '../..');
const CONTENT = join(ROOT, 'content/liturgy');
const OUT = join(ROOT, 'apps/web/public/liturgy');
const SOURCES = join(ROOT, 'apps/web/src/data/liturgy-sources.json');

function listFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  });
}

const files: Record<string, string> = {};
if (existsSync(CONTENT)) {
  for (const path of listFiles(CONTENT)) {
    const name = relative(CONTENT, path).split('\\').join('/');
    if (name === 'README.md') continue;
    files[name] = readFileSync(path, 'utf8');
  }
}

const result = buildLiturgies(files, STOPS.map((stop) => stop.slug));
if (result.errors.length > 0) {
  console.error(result.errors.join('\n'));
  console.error(`\n${result.errors.length} problem(s) in content/liturgy/. Nothing was written.`);
  process.exit(1);
}

mkdirSync(OUT, { recursive: true });
for (const liturgy of LITURGIES) writeFileSync(join(OUT, `${liturgy}.json`), JSON.stringify(result.liturgies[liturgy]));
writeFileSync(SOURCES, `${JSON.stringify(result.sources, null, 2)}\n`);

console.log('Holy Mass texts (stops with text, blocks, per language):');
for (const liturgy of LITURGIES) {
  const { stops, blocks, perLang } = result.coverage[liturgy];
  console.log(`  ${liturgy.padEnd(8)} ${stops}/${STOPS.length} stops, ${blocks} blocks (en ${perLang.en}, ar ${perLang.ar}, cop ${perLang.cop}, tr ${perLang.tr})`);
}
```

Create `content/liturgy/README.md`:

````markdown
# Holy Mass texts

The prayers said at each stop of the Holy Mass journey (`/en/holy-mass/`). One plain-text file per stop.

```
content/liturgy/
  common/<slug>.txt    parts shared by all three liturgies
  basil/<slug>.txt     parts of St. Basil that differ (this file wins over common/)
  gregory/<slug>.txt
  cyril/<slug>.txt
```

`<slug>` is the slug of a stop in `apps/web/src/data/holy-mass.ts`, for example `lift-up-your-hearts`.

## A file

```
# Lines that start with # are comments.
source: Name of the translation, who made or published it, and the licence or permission it
  is used under. A link is welcome: https://example.org/where-it-comes-from

@rubric
en| The priest turns to the people.
ar| يلتفت الكاهن إلى الشعب.

@priest
en| The Lord be with you all.
ar| الرب مع جميعكم.
note| en: Optional. A short explanation of this prayer, written by us.
note| ar: اختياري. شرح قصير لهذه الصلاة.

@people
en| And with your spirit.
ar| ومع روحك أيضًا.
```

- **`source:`** is required in every file. Nothing is published without saying where it comes from.
  A line that starts with a space continues the line above.
- **Speakers:** `@rubric` (a step or instruction), `@priest` (also a bishop or celebrant), `@deacon` (also a
  reader), `@people` (also the choir, and anything said by all).
- **Languages:** `en|`, `ar|`, `cop|` (Coptic), `tr|` (Coptic in Latin or Arabic letters; it needs a `cop|`
  line in the same block). A block needs at least one.
- **Blocks** are separated by a blank line. Save as UTF-8.

## Build

`node scripts/liturgy/build.ts` (it also runs in `npm run build` and `npm run dev:web`) checks every
file, names the file and line of any problem, writes `apps/web/public/liturgy/<liturgy>.json`, and prints
how many stops each liturgy has text for.
````

Create `content/liturgy/common/lift-up-your-hearts.txt`:

```
source: Short standard dialogue, written for this site (Orthodoxia) as a plain statement of the exchange said before the anaphora; not taken from a published translation.

@priest
en| The Lord be with you all.
ar| الرب مع جميعكم.

@people
en| And with your spirit.
ar| ومع روحك أيضًا.

@priest
en| Lift up your hearts.
ar| ارفعوا قلوبكم.

@people
en| We have them with the Lord.
ar| هي عند الرب.
```

Create `content/liturgy/common/it-is-fitting-and-right.txt`:

```
source: Short standard dialogue, written for this site (Orthodoxia) as a plain statement of the exchange said before the anaphora; not taken from a published translation.

@priest
en| Let us give thanks to the Lord.
ar| فلنشكر الرب.

@people
en| It is meet and right.
ar| مستحق وعادل.
```

- [ ] **Step 6: Wire it into the project**

In `package.json`, change the two scripts (keep the rest):

```json
    "dev:web": "npm run bible && npm run liturgy && npm run dev -w apps/web",
    "liturgy": "node scripts/liturgy/build.ts",
```

Put `"liturgy": "node scripts/liturgy/build.ts",` on its own line directly after the `"bible:update"` line.

In `scripts/build-site.ts`, add a line after `run('npm run bible');`:

```ts
run('npm run liturgy');
```

and change the header comment line `1. the Bible data (scripts/bible) and the content site` to `1. the Bible data (scripts/bible), the Holy Mass texts (scripts/liturgy) and the content site`.

In `.gitignore`, add under the `data/bible/build/` line:

```
apps/web/public/liturgy/
```

- [ ] **Step 7: Run the build and verify**

Run: `npm run liturgy`
Expected output:

```
Holy Mass texts (stops with text, blocks, per language):
  basil    2/52 stops, 6 blocks (en 6, ar 6, cop 0, tr 0)
  gregory  2/52 stops, 6 blocks (en 6, ar 6, cop 0, tr 0)
  cyril    2/52 stops, 6 blocks (en 6, ar 6, cop 0, tr 0)
```

Then run `npx vitest run apps/web/src/lib/liturgy` (PASS) and check that `apps/web/public/liturgy/basil.json` exists and `apps/web/src/data/liturgy-sources.json` contains the one source string.

Also prove the failure path: temporarily rename `content/liturgy/common/it-is-fitting-and-right.txt` to `it-is-fiting-and-right.txt`, run `npm run liturgy`, expect exit code 1 and an error naming `content/liturgy/common/it-is-fiting-and-right.txt`; rename it back.

- [ ] **Step 8: Commit**

```bash
git add apps/web/src/lib/liturgy content/liturgy scripts/liturgy apps/web/src/data/liturgy-sources.json package.json scripts/build-site.ts .gitignore
git commit -m "Liturgy texts: the build, the file format, and the first two files"
```

(`package.json`, `scripts/build-site.ts` and `.gitignore` also hold earlier uncommitted changes from the film work. If the person has not committed those, stage only these hunks with `git add -p`.)

---

### Task 4: Reading preferences, the script view model, and the loader

**Files:**
- Create: `apps/web/src/lib/holy-mass/reading.ts`, `script-view.ts`, `load.ts` and their tests `reading.test.ts`, `script-view.test.ts`, `load.test.ts` (all under `apps/web/src/lib/holy-mass/`)

**Interfaces:**
- Consumes: `Block`, `Lang`, `LANGS`, `ROLES`, `Role` from `../liturgy/parse.ts`; `LiturgyJson` from `../liturgy/build-core.ts`; `LiturgyId` from `../liturgy/resolve.ts`.
- Produces:
  - `reading.ts`: `TextSize = 'small' | 'medium' | 'large'`; `Reading = { langs: readonly Lang[]; size: TextSize }`; `READING_KEY = 'orthodoxia:holy-mass:reading'`; `defaultReading(locale: 'en' | 'ar'): Reading`; `parseReading(raw: string | null, locale): Reading`; `serializeReading(reading): string`; `toggleLang(reading, lang): Reading` (refuses to remove the last language); `stepSize(reading, direction: -1 | 1): Reading`; `availableLangs(stops: Record<string, { blocks: readonly Block[] }>): Lang[]`.
  - `script-view.ts`: `ScriptLine = { lang: Lang; text: string }`; `ScriptItem = { role: Role; lines: ScriptLine[]; note?: string }`; `scriptItems(blocks: readonly Block[], langs: readonly Lang[], noteLang: 'en' | 'ar'): ScriptItem[]`; `splitSource(source: string): { label: string; url?: string }`.
  - `load.ts`: `loadLiturgy(id: LiturgyId, fetchFn?: typeof fetch): Promise<LiturgyJson | null>`.

- [ ] **Step 1: Write the failing tests**

Create `apps/web/src/lib/holy-mass/reading.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { availableLangs, defaultReading, parseReading, serializeReading, stepSize, toggleLang } from './reading.ts';

describe('reading preferences', () => {
  it('starts with the page language and the middle size', () => {
    expect(defaultReading('ar')).toEqual({ langs: ['ar'], size: 'medium' });
    expect(parseReading(null, 'en')).toEqual({ langs: ['en'], size: 'medium' });
  });

  it('keeps a saved choice, in a fixed language order', () => {
    const saved = serializeReading({ langs: ['ar', 'en'], size: 'large' });
    expect(parseReading(saved, 'en')).toEqual({ langs: ['en', 'ar'], size: 'large' });
  });

  it('falls back to the defaults for damaged, empty or unknown values', () => {
    expect(parseReading('not json', 'ar')).toEqual(defaultReading('ar'));
    expect(parseReading('{"langs":[],"size":"huge"}', 'en')).toEqual(defaultReading('en'));
    expect(parseReading('{"langs":["fr","en"],"size":"small"}', 'ar')).toEqual({ langs: ['en'], size: 'small' });
  });

  it('adds and removes a language, but never removes the last one', () => {
    const both = toggleLang(defaultReading('en'), 'ar');
    expect(both.langs).toEqual(['en', 'ar']);
    expect(toggleLang(both, 'en').langs).toEqual(['ar']);
    expect(toggleLang(toggleLang(both, 'en'), 'ar').langs).toEqual(['ar']);
  });

  it('steps the text size within its limits', () => {
    const medium = defaultReading('en');
    expect(stepSize(medium, 1).size).toBe('large');
    expect(stepSize(stepSize(medium, 1), 1).size).toBe('large');
    expect(stepSize(stepSize(medium, -1), -1).size).toBe('small');
  });

  it('lists the languages that some block has, in order', () => {
    const stops = {
      a: { blocks: [{ role: 'priest' as const, text: { ar: 'ا' } }] },
      b: { blocks: [{ role: 'people' as const, text: { en: 'b', tr: 'b' } }] },
    };
    expect(availableLangs(stops)).toEqual(['en', 'ar', 'tr']);
    expect(availableLangs({})).toEqual([]);
  });
});
```

Create `apps/web/src/lib/holy-mass/script-view.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import type { Block } from '../liturgy/parse.ts';
import { scriptItems, splitSource } from './script-view.ts';

const blocks: Block[] = [
  { role: 'rubric', text: { en: 'The priest turns.', ar: 'يلتفت.' } },
  { role: 'priest', text: { en: 'Peace.', ar: 'سلام.', cop: 'Ϩⲓⲣⲏⲛⲏ', tr: 'Hirini' }, note: { en: 'A greeting.', ar: 'تحية.' } },
  { role: 'people', text: { ar: 'آمين.' } },
];

describe('scriptItems', () => {
  it('shows only the chosen languages, in a fixed order', () => {
    const items = scriptItems(blocks, ['ar', 'en'], 'en');
    expect(items[1]!.lines).toEqual([
      { lang: 'en', text: 'Peace.' },
      { lang: 'ar', text: 'سلام.' },
    ]);
    expect(items[1]!.note).toBe('A greeting.');
  });

  it('shows what exists when a block lacks every chosen language, never a blank', () => {
    const items = scriptItems(blocks, ['en'], 'en');
    expect(items[2]!.lines).toEqual([{ lang: 'ar', text: 'آمين.' }]);
  });

  it('shows Coptic and transliteration only when chosen', () => {
    expect(scriptItems(blocks, ['en'], 'en')[1]!.lines.map((line) => line.lang)).toEqual(['en']);
    expect(scriptItems(blocks, ['cop', 'tr'], 'en')[1]!.lines.map((line) => line.lang)).toEqual(['cop', 'tr']);
  });

  it('takes the note in the page language, else the other one, else none', () => {
    expect(scriptItems(blocks, ['en'], 'ar')[1]!.note).toBe('تحية.');
    expect(scriptItems([{ role: 'priest', text: { en: 'x' }, note: { en: 'only en' } }], ['en'], 'ar')[0]!.note).toBe('only en');
    expect(scriptItems(blocks, ['en'], 'en')[0]!.note).toBeUndefined();
  });

  it('skips a block with an unknown speaker or no text at all (a stale or damaged file)', () => {
    const damaged = [{ role: 'bishop', text: { en: 'x' } }, { role: 'priest', text: {} }, blocks[1]] as unknown as Block[];
    expect(scriptItems(damaged, ['en'], 'en').map((item) => item.role)).toEqual(['priest']);
  });
});

describe('splitSource', () => {
  it('separates a link from the words', () => {
    expect(splitSource('Example Translation, used with permission. https://example.org/x.')).toEqual({
      label: 'Example Translation, used with permission.',
      url: 'https://example.org/x',
    });
  });

  it('has no link when there is none', () => {
    expect(splitSource('Written for this site')).toEqual({ label: 'Written for this site' });
  });
});
```

Create `apps/web/src/lib/holy-mass/load.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { loadLiturgy } from './load.ts';

const reply = (body: unknown, ok = true) => (async () => ({ ok, json: async () => body })) as unknown as typeof fetch;

describe('loadLiturgy', () => {
  it('returns the liturgy’s texts', async () => {
    const data = { liturgy: 'basil', stops: { one: { source: 'S', blocks: [] } } };
    expect(await loadLiturgy('basil', reply(data))).toEqual(data);
  });

  it('returns null when the file is missing, the network fails, or the JSON is the wrong shape', async () => {
    expect(await loadLiturgy('basil', reply({}, false))).toBeNull();
    expect(await loadLiturgy('basil', (async () => { throw new Error('offline'); }) as unknown as typeof fetch)).toBeNull();
    expect(await loadLiturgy('basil', reply({ nope: true }))).toBeNull();
    expect(await loadLiturgy('basil', reply(null))).toBeNull();
    expect(await loadLiturgy('basil', (async () => ({ ok: true, json: async () => { throw new Error('bad json'); } })) as unknown as typeof fetch)).toBeNull();
  });
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `npx vitest run apps/web/src/lib/holy-mass`
Expected: FAIL (the three modules do not exist). The existing `film.test.ts` and `layers.test.ts` still pass.

- [ ] **Step 3: Write `reading.ts`**

```ts
/**
 * What the reader chose to read: which languages of the prayers to show, and how large. Saved in the
 * browser as a small JSON string; anything missing or damaged falls back to the page language.
 */
import { LANGS, type Block, type Lang } from '../liturgy/parse.ts';

export type TextSize = 'small' | 'medium' | 'large';
const SIZES: readonly TextSize[] = ['small', 'medium', 'large'];

export interface Reading {
  readonly langs: readonly Lang[];
  readonly size: TextSize;
}

export const READING_KEY = 'orthodoxia:holy-mass:reading';

export const defaultReading = (locale: 'en' | 'ar'): Reading => ({ langs: [locale], size: 'medium' });

const inOrder = (langs: Iterable<Lang>): Lang[] => {
  const wanted = new Set(langs);
  return LANGS.filter((lang) => wanted.has(lang));
};

export function parseReading(raw: string | null, locale: 'en' | 'ar'): Reading {
  const fallback = defaultReading(locale);
  if (raw === null) return fallback;
  try {
    const value = JSON.parse(raw) as { langs?: unknown; size?: unknown };
    const langs = Array.isArray(value.langs) ? inOrder(value.langs.filter((item): item is Lang => (LANGS as readonly unknown[]).includes(item))) : [];
    const size = SIZES.find((candidate) => candidate === value.size) ?? 'medium';
    return { langs: langs.length > 0 ? langs : fallback.langs, size };
  } catch {
    return fallback;
  }
}

export const serializeReading = (reading: Reading): string => JSON.stringify({ langs: reading.langs, size: reading.size });

/** Adds or removes a language. The last language cannot be removed. */
export function toggleLang(reading: Reading, lang: Lang): Reading {
  const has = reading.langs.includes(lang);
  if (has && reading.langs.length === 1) return reading;
  return { ...reading, langs: inOrder(has ? reading.langs.filter((item) => item !== lang) : [...reading.langs, lang]) };
}

export function stepSize(reading: Reading, direction: -1 | 1): Reading {
  const index = Math.min(SIZES.length - 1, Math.max(0, SIZES.indexOf(reading.size) + direction));
  return { ...reading, size: SIZES[index]! };
}

/** The languages that some block of some stop has text in. */
export function availableLangs(stops: Record<string, { blocks: readonly Block[] }>): Lang[] {
  const found = new Set<Lang>();
  for (const stop of Object.values(stops)) for (const block of stop.blocks) for (const lang of LANGS) if (block.text[lang] !== undefined) found.add(lang);
  return inOrder(found);
}
```

- [ ] **Step 4: Write `script-view.ts`**

```ts
/**
 * What the page draws for one stop's script: which lines of each block, in which languages. Pure, so it
 * can be tested without a browser; the page turns the result into elements.
 */
import { LANGS, ROLES, type Block, type Lang, type Role } from '../liturgy/parse.ts';

export interface ScriptLine {
  readonly lang: Lang;
  readonly text: string;
}

export interface ScriptItem {
  readonly role: Role;
  readonly lines: ScriptLine[];
  readonly note?: string;
}

/**
 * @param langs the languages the reader chose
 * @param noteLang the page language, preferred for the explanation note
 */
export function scriptItems(blocks: readonly Block[], langs: readonly Lang[], noteLang: 'en' | 'ar'): ScriptItem[] {
  const items: ScriptItem[] = [];
  for (const block of blocks) {
    if (!(ROLES as readonly string[]).includes(block.role)) continue;
    const present = LANGS.filter((lang) => typeof block.text[lang] === 'string' && block.text[lang] !== '');
    if (present.length === 0) continue;
    const chosen = present.filter((lang) => langs.includes(lang));
    const shown = chosen.length > 0 ? chosen : [present[0]!];
    const otherNote = noteLang === 'en' ? 'ar' : 'en';
    const note = block.note?.[noteLang] ?? block.note?.[otherNote];
    items.push({
      role: block.role,
      lines: shown.map((lang) => ({ lang, text: block.text[lang]! })),
      ...(note === undefined ? {} : { note }),
    });
  }
  return items;
}

/** A source line may end in a link; the page shows the words and links the address. */
export function splitSource(source: string): { label: string; url?: string } {
  const match = /(https?:\/\/\S+)/.exec(source);
  if (match === null) return { label: source.trim() };
  const url = match[1]!.replace(/[.,;)]+$/, '');
  const label = source.replace(match[1]!, '').replace(/\s+/g, ' ').trim();
  return { label, url };
}
```

- [ ] **Step 5: Write `load.ts`**

```ts
/** Fetches the texts of one liturgy. Any failure gives null, and the page keeps its draft summaries. */
import type { LiturgyJson } from '../liturgy/build-core.ts';
import type { LiturgyId } from '../liturgy/resolve.ts';

export async function loadLiturgy(id: LiturgyId, fetchFn: typeof fetch = fetch): Promise<LiturgyJson | null> {
  try {
    const response = await fetchFn(`/liturgy/${id}.json`);
    if (!response.ok) return null;
    const data = (await response.json()) as Partial<LiturgyJson> | null;
    if (data === null || typeof data !== 'object' || typeof data.stops !== 'object' || data.stops === null) return null;
    return data as LiturgyJson;
  } catch {
    return null;
  }
}
```

- [ ] **Step 6: Run the tests to verify they pass**

Run: `npx vitest run apps/web/src/lib`
Expected: PASS for all of `reading`, `script-view`, `load`, `film`, `layers` and `liturgy`.

Note: in the test for the damaged block, `role: 'priest', text: {}` is skipped because it has no text, and `role: 'bishop'` is skipped because it is not a known speaker.

- [ ] **Step 7: Commit**

```bash
git add apps/web/src/lib/holy-mass/reading.ts apps/web/src/lib/holy-mass/script-view.ts apps/web/src/lib/holy-mass/load.ts apps/web/src/lib/holy-mass/reading.test.ts apps/web/src/lib/holy-mass/script-view.test.ts apps/web/src/lib/holy-mass/load.test.ts
git commit -m "Holy Mass: reading preferences, the script view model, and the texts loader"
```

---

### Task 5: The page shows each stop's script

**Files:**
- Modify: `apps/web/src/pages/[lang]/holy-mass.astro`

**Interfaces:**
- Consumes: `loadLiturgy`, `scriptItems`, `splitSource`, `LiturgyJson` (type), `LiturgyId` (type). Existing page pieces: `articles`, `layerButtons`, `measure()`, `update()`, `setLiturgy(id)`, `savedLiturgy`, `locale` (page locale), `text` (the `hm-ui` JSON).
- Produces: each stop `<article>` gets a `<div class="script" data-script>`; articles with text get the class `has-script`; `renderScripts()` (re-renders every stop's script); `scripts: LiturgyJson | null`.

This task edits a large file. Read it first (`holy-mass.astro`), then make these edits one at a time. After each edit group, run `cd apps/web && npx astro check` (expected: 0 errors).

- [ ] **Step 1: Add the strings (frontmatter)**

In the `UI.en` object, after the line `hiddenAll: '…',` add:

```ts
    textPending: 'The text of this prayer has not been added yet.',
    textSource: 'Text',
```

In `UI.ar`, after its `hiddenAll` line add:

```ts
    textPending: 'لم يُضَف نص هذه الصلاة بعد.',
    textSource: 'النص',
```

- [ ] **Step 2: Add the script container and pending note to each stop**

In the stop template, find `<p class="all-hidden">{ui.hiddenAll}</p>` and replace its line with:

```astro
                <div class="script" data-script></div>
                <p class="pending-note">{ui.textPending}</p>
                <p class="all-hidden">{ui.hiddenAll}</p>
```

In the `hm-ui` JSON line (`<script type="application/json" id="hm-ui" …>`), add `roles` and `source` to the object so it reads:

```astro
  <script type="application/json" id="hm-ui" set:html={JSON.stringify({ stopOf: ui.stopOf(0, total).replace('0', '{n}'), varies: ui.varies('{liturgy}'), resume: ui.resume(0).replace('0', '{n}'), roles: { rubric: ui.steps, priest: ui.priest, deacon: ui.deacon, people: ui.people }, source: ui.textSource })}></script>
```

- [ ] **Step 3: The script imports and state**

In the page `<script>` imports, add:

```ts
  import { loadLiturgy } from '../../lib/holy-mass/load.ts';
  import { scriptItems, splitSource } from '../../lib/holy-mass/script-view.ts';
  import type { LiturgyJson } from '../../lib/liturgy/build-core.ts';
  import type { LiturgyId } from '../../lib/liturgy/resolve.ts';
```

Change the `text` typing line to:

```ts
    const text = JSON.parse(document.getElementById('hm-ui')!.textContent!) as { stopOf: string; varies: string; resume: string; roles: Record<string, string>; source: string };
```

- [ ] **Step 4: Add the render code**

Directly above the line `    // ---- liturgy and language options`, insert:

```ts
    // ---- the prayers: the script of each stop ---------------------------------------------------
    const pageLocale: 'en' | 'ar' = root.dataset['locale'] === 'ar' ? 'ar' : 'en';
    let scripts: LiturgyJson | null = null;
    let wantedLiturgy: LiturgyId = 'basil';
    let readingLangs: readonly import('../../lib/liturgy/parse.ts').Lang[] = [pageLocale];
    const slugOf = (stop: ClientStop) => stop.hash.replace(/^\d+-/, '');
    const roleIcon = (role: string) => layerButtons.find((button) => button.dataset['layerToggle'] === (role === 'rubric' ? 'steps' : role))?.querySelector('svg') ?? null;

    function renderScripts() {
      articles.forEach((article, index) => {
        const box = article.querySelector<HTMLElement>('[data-script]')!;
        box.replaceChildren();
        const entry = scripts?.stops[slugOf(stops[index]!)];
        article.classList.toggle('has-script', entry !== undefined);
        if (entry === undefined) return;
        for (const item of scriptItems(entry.blocks, readingLangs, pageLocale)) {
          const row = document.createElement('div');
          row.className = `row item ${item.role === 'rubric' ? 'row-steps' : `row-${item.role}`}`;
          const badge = document.createElement('span');
          badge.className = 'badge';
          badge.setAttribute('aria-hidden', 'true');
          const icon = roleIcon(item.role)?.cloneNode(true);
          if (icon !== undefined && icon !== null) badge.append(icon);
          const body = document.createElement('div');
          body.className = 'body';
          const who = document.createElement('p');
          who.className = 'who';
          who.textContent = text.roles[item.role] ?? '';
          body.append(who);
          for (const line of item.lines) {
            const paragraph = document.createElement('p');
            paragraph.className = item.role === 'rubric' ? `line rubric line-${line.lang}` : `line line-${line.lang}`;
            paragraph.textContent = line.text;
            if (line.lang === 'ar') {
              paragraph.lang = 'ar';
              paragraph.dir = 'rtl';
            } else if (line.lang === 'en') {
              paragraph.lang = 'en';
              paragraph.dir = 'ltr';
            } else if (line.lang === 'cop') {
              paragraph.lang = 'cop';
            }
            body.append(paragraph);
          }
          if (item.note !== undefined) {
            const note = document.createElement('p');
            note.className = 'note';
            note.textContent = item.note;
            body.append(note);
          }
          row.append(badge, body);
          box.append(row);
        }
        const credit = document.createElement('p');
        credit.className = 'tiny credit';
        const { label, url } = splitSource(entry.source);
        credit.append(`${text.source}: ${label}`);
        if (url !== undefined) {
          credit.append(' ');
          const link = document.createElement('a');
          link.href = url;
          link.textContent = url;
          credit.append(link);
        }
        box.append(credit);
      });
      requestAnimationFrame(() => {
        measure();
        update();
      });
    }

    async function showLiturgy(id: LiturgyId) {
      wantedLiturgy = id;
      const loaded = await loadLiturgy(id);
      if (wantedLiturgy !== id) return; // the reader picked another meanwhile
      scripts = loaded;
      renderScripts();
    }
```

- [ ] **Step 5: Load the texts when the liturgy is chosen**

In `setLiturgy(id)`, directly after the `for (const note of … '[data-varies]') …` line, add:

```ts
      void showLiturgy(chosen.dataset['liturgy'] as LiturgyId);
```

(`setLiturgy` is called once at start with the saved liturgy, so the first load happens there.)

- [ ] **Step 6: Styles**

In the `<style>` block, after the `.no-layers .all-hidden { display: block; }` rule, add:

```css
  /* A stop with text hides its draft summaries, which stay as the fallback for stops without. */
  .has-script .rows .row-steps,
  .has-script .rows .row-priest,
  .has-script .rows .row-deacon,
  .has-script .rows .row-people,
  .has-script .pending-note {
    display: none;
  }

  .pending-note {
    margin-block-start: 0.75rem;
    padding: 0.5rem 0.8rem;
    border-inline-start: 3px solid var(--gold);
    background: #fbf5e6;
    font-family: var(--font-ui);
    font-size: 0.9rem;
    color: #5a4a22;
  }

  .script {
    display: grid;
    gap: 0.9rem;
    margin-block-start: 1.1rem;
  }

  .script:empty {
    display: none;
  }

  .script .line {
    margin: 0.15rem 0;
  }

  .script .line.rubric {
    font-style: italic;
    color: #4b4638;
  }

  .script .note {
    margin-block-start: 0.4rem;
    padding: 0.4rem 0.7rem;
    border-radius: 0.5rem;
    background: color-mix(in srgb, var(--tone) 8%, var(--ivory));
    font-size: 0.92rem;
  }

  .no-meaning .script .note {
    display: none;
  }

  .script .credit {
    margin: 0;
  }

  .no-steps .script .row-steps,
  .no-priest .script .row-priest,
  .no-deacon .script .row-deacon,
  .no-people .script .row-people {
    display: none;
  }
```

(The earlier rule `.no-steps .row-steps, .no-priest .row-priest, …` already hides these items too, because script items carry the same row classes; the extra rule is a safeguard and harmless.)

- [ ] **Step 7: Check and verify in a browser**

Run: `npm run liturgy && npm run build -w apps/web` then serve `apps/web/dist` (the Playwright setup used earlier serves it on port 4321) and open `http://localhost:4321/en/holy-mass/#29-lift-up-your-hearts`.
Expected: stop 29 shows a script with Priest and People rows (the four lines), with the credit line under it and without the draft summary rows; stop 30 likewise; stop 22 still shows the draft summaries and the "text … has not been added yet" note. Turning the Priest switch off hides the priest lines. Run `cd apps/web && npx astro check` (0 errors) and `npx vitest run` (all pass).

Also check failure handling: stop the static server's `/liturgy/` path (rename `apps/web/dist/liturgy` temporarily); reload; the page must still show every stop's draft summaries and no console errors. Restore it.

- [ ] **Step 8: Commit**

```bash
git add 'apps/web/src/pages/[lang]/holy-mass.astro'
git commit -m "Holy Mass: each stop shows its script from the liturgy's texts"
```

---

### Task 6: Languages, text size, the sources, and moving the dialogue out of code

**Files:**
- Modify: `apps/web/src/pages/[lang]/holy-mass.astro`, `apps/web/src/data/holy-mass.ts`, `apps/web/src/data/holy-mass.test.ts`, `apps/web/src/pages/[lang]/sources.astro`, `apps/web/src/i18n/en.ts`, `apps/web/src/i18n/ar.ts`

**Interfaces:**
- Consumes: `defaultReading`, `parseReading`, `serializeReading`, `toggleLang`, `stepSize`, `availableLangs`, `READING_KEY`, `Reading` from `reading.ts`; `renderScripts`, `scripts`, `readingLangs` from Task 5; `liturgy-sources.json` (`string[]`).
- Produces: a language picker and text-size control in Options; the old "Both languages" control removed; stops 29 and 30 no longer carry `dialogue` in code; a "Holy Mass texts" section on the Sources page.

- [ ] **Step 1: Write the failing data test change**

In `apps/web/src/data/holy-mass.test.ts`, replace the test `puts "Lift up your hearts" at stop 29, as in the approved design` with:

```ts
  it('puts "Lift up your hearts" at stop 29, as in the approved design', () => {
    expect(STOPS[28]!.slug).toBe('lift-up-your-hearts');
  });
```

and change the speaker test so a stop needs a draft line only (the dialogue is gone):

```ts
      const lines = Object.values(stop.says);
      expect(lines.length, `stop ${stop.n} has no speaker`).toBeGreaterThan(0);
```

(Stops 29 and 30 need a `says` entry now: `lift-up-your-hearts` already has `deacon`; add to `holy-mass-says.ts` an entry for `it-is-fitting-and-right`:)

```ts
  'it-is-fitting-and-right': {
    priest: ['Invites the people to give thanks to the Lord.', 'يدعو الشعب إلى شكر الرب.'],
    people: ['Answer that it is meet and right.', 'يجاوبون أن هذا مستحق وعادل.'],
  },
```

and extend the existing `lift-up-your-hearts` entry in the same file to:

```ts
  'lift-up-your-hearts': {
    priest: ['Greets the people and calls them to lift up their hearts.', 'يحيّي الشعب ويدعوهم إلى رفع قلوبهم.'],
    deacon: ['Calls the people to stand and attend.', 'ينادي الشعب أن يقفوا وينتبهوا.'],
    people: ['Answer that their hearts are with the Lord.', 'يجاوبون أن قلوبهم عند الرب.'],
  },
```

Run: `npx vitest run apps/web/src/data`
Expected: PASS (the data still has `dialogue` at this point; this step only makes the test independent of it).

- [ ] **Step 2: Remove the in-code dialogue**

In `apps/web/src/data/holy-mass.ts` delete: the `DialogueLine` interface, the `readonly dialogue?: readonly DialogueLine[];` field on `Stop`, `dialogue?: readonly DialogueLine[];` on `Row`, the `LIFT` and `THANKS` constants, the `dialogue: LIFT,` / `dialogue: THANKS,` lines on the two rows, and the `...(dialogue === undefined ? {} : { dialogue }),` line and `dialogue,` destructuring in `STOPS`. Search the file for `dialogue` and `DialogueLine`; none must remain.

In `holy-mass.astro` replace the speaker helpers and the row builder:

```ts
function speakersOf(stop: (typeof STOPS)[number]) {
  return SPEAKERS.filter((role) => stop.says[role] !== undefined);
}
```

and in the stop template replace the `rows` definition with:

```ts
            const rows = SPEAKERS.flatMap((role) => {
              const summary = stop.says[role];
              return summary === undefined ? [] : [{ role, draft: true, lines: [summary] }];
            });
```

Run: `cd apps/web && npx astro check && cd ../.. && npx vitest run`
Expected: 0 errors, all tests pass.

- [ ] **Step 3: The language picker and text size markup**

In the Options block of the header, replace the line `<label class="both"><input type="checkbox" data-both /> <span>{ui.both}</span></label>` with:

```astro
          <fieldset class="langs" data-langs>
            <legend>{ui.languages}</legend>
            {
              (['en', 'ar', 'cop', 'tr'] as const).map((lang) => (
                <label class="lang-pick" data-lang-pick={lang} hidden={lang === 'cop' || lang === 'tr'}>
                  <input type="checkbox" value={lang} /> <span>{ui.langNames[lang]}</span>
                </label>
              ))
            }
          </fieldset>
          <div class="sizer" role="group" aria-label={ui.textSize}>
            <button type="button" class="icon-button" data-size="-1" aria-label={ui.smaller} title={ui.smaller}>A−</button>
            <button type="button" class="icon-button" data-size="1" aria-label={ui.larger} title={ui.larger}>A+</button>
          </div>
```

Add to `UI.en` (after `textSource`):

```ts
    languages: 'Languages',
    langNames: { en: 'English', ar: 'Arabic', cop: 'Coptic', tr: 'Transliteration' },
    textSize: 'Text size',
    smaller: 'Smaller text',
    larger: 'Larger text',
```

and to `UI.ar`:

```ts
    languages: 'اللغات',
    langNames: { en: 'الإنجليزية', ar: 'العربية', cop: 'القبطية', tr: 'النطق بالحروف' },
    textSize: 'حجم النص',
    smaller: 'نص أصغر',
    larger: 'نص أكبر',
```

Remove the now unused `both:` entries from both `UI` objects.

- [ ] **Step 4: The language and size behaviour**

Add to the page-script imports:

```ts
  import { availableLangs, parseReading, READING_KEY, serializeReading, stepSize, toggleLang, type Reading } from '../../lib/holy-mass/reading.ts';
  import type { Lang } from '../../lib/liturgy/parse.ts';
```

In the block added in Task 5, replace the line `let readingLangs: readonly import('../../lib/liturgy/parse.ts').Lang[] = [pageLocale];` with:

```ts
    let reading: Reading = parseReading(null, pageLocale);
    try {
      const stored = localStorage.getItem(READING_KEY);
      reading = parseReading(stored, pageLocale);
      // The old "Both languages" switch becomes both languages here.
      if (stored === null && localStorage.getItem('orthodoxia:holy-mass:both') === '1') reading = { ...reading, langs: ['en', 'ar'] };
    } catch {
      // Defaults.
    }
```

and in `renderScripts` change `scriptItems(entry.blocks, readingLangs, pageLocale)` to `scriptItems(entry.blocks, reading.langs, pageLocale)`.

Replace the whole old "both" block, from `const both = root.querySelector<HTMLInputElement>('[data-both]')!;` through `root.classList.toggle('show-both', both.checked);`, and remove `let savedBoth = false;` and the `savedBoth = localStorage.getItem('orthodoxia:holy-mass:both') === '1';` line, with:

```ts
    const langBoxes = [...root.querySelectorAll<HTMLInputElement>('[data-langs] input')];
    const sizeButtons = [...root.querySelectorAll<HTMLButtonElement>('[data-size]')];
    function applyReading() {
      for (const box of langBoxes) box.checked = reading.langs.includes(box.value as Lang);
      root!.dataset['size'] = reading.size;
      // The titles, steps and meanings come in both page languages; the other one shows when chosen.
      root!.classList.toggle('show-both', reading.langs.includes(pageLocale === 'en' ? 'ar' : 'en'));
      sizeButtons[0]!.disabled = reading.size === 'small';
      sizeButtons[1]!.disabled = reading.size === 'large';
      try {
        localStorage.setItem(READING_KEY, serializeReading(reading));
      } catch {
        // Not saved.
      }
      renderScripts();
    }
    for (const box of langBoxes) {
      box.addEventListener('change', () => {
        reading = toggleLang(reading, box.value as Lang);
        applyReading();
      });
    }
    for (const button of sizeButtons) {
      button.addEventListener('click', () => {
        reading = stepSize(reading, Number(button.dataset['size']) as -1 | 1);
        applyReading();
      });
    }
    applyReading();
```

In `renderScripts`, at the end (before the `requestAnimationFrame`), show the Coptic and transliteration pickers only when some text has them:

```ts
      const available = scripts === null ? [] : availableLangs(scripts.stops);
      for (const pick of root!.querySelectorAll<HTMLElement>('[data-lang-pick]')) {
        const lang = pick.dataset['langPick'] as Lang;
        pick.hidden = (lang === 'cop' || lang === 'tr') && !available.includes(lang);
      }
```

(`applyReading` is first called after `setLiturgy(savedLiturgy)`; it calls `renderScripts()` once with `scripts === null`, which is harmless, and `showLiturgy` renders again when the texts arrive.)

- [ ] **Step 5: Styles for the picker and sizes**

In `<style>`, replace the `.both { … }` rule with:

```css
  .langs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.2rem 0.9rem;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 0.85rem;
  }

  .langs legend {
    float: inline-start;
    margin-inline-end: 0.6rem;
    padding: 0;
    font-weight: 600;
  }

  .lang-pick {
    display: inline-flex;
    gap: 0.4rem;
    align-items: center;
    min-block-size: 36px;
  }

  .lang-pick[hidden] {
    display: none;
  }

  .sizer {
    display: flex;
    gap: 0.35rem;
  }

  .sizer button:disabled {
    opacity: 0.45;
    cursor: default;
  }

  .journey[data-size='small'] {
    --script-scale: 0.92;
  }

  .journey[data-size='large'] {
    --script-scale: 1.25;
  }

  .script .line {
    font-size: calc(1.05rem * var(--script-scale, 1));
  }
```

The root element for `data-size` is `root` (`[data-journey]`), which already carries `data-locale`.

- [ ] **Step 6: The Sources page**

In `apps/web/src/i18n/en.ts`, inside the `sources` object after `intro`, add:

```ts
    liturgyHeading: 'Holy Mass texts',
    liturgyIntro: 'The prayers shown on the Holy Mass page come from these sources, each credited as its file states.',
    liturgyNone: 'No prayer texts have been added yet; the page shows short draft summaries.',
```

and in `ar.ts` the same keys:

```ts
    liturgyHeading: 'نصوص القداس',
    liturgyIntro: 'الصلوات المعروضة في صفحة القداس مأخوذة من هذه المصادر، وكلٌّ منها منسوب كما يذكر ملفه.',
    liturgyNone: 'لم تُضَف نصوص الصلوات بعد؛ تعرض الصفحة ملخصات قصيرة أولية.',
```

In `sources.astro` add the import `import liturgySources from '../../data/liturgy-sources.json';` and, after the `groups.map(...)` block and before `</div>`:

```astro
    <section aria-labelledby="group-liturgy">
      <h2 id="group-liturgy">{strings.liturgyHeading}</h2>
      <p class="prose">{strings.liturgyIntro}</p>
      {
        liturgySources.length === 0 ? (
          <p>{strings.liturgyNone}</p>
        ) : (
          <ul class="liturgy-sources">
            {liturgySources.map((source) => (
              <li lang="en" dir="ltr">{source}</li>
            ))}
          </ul>
        )
      }
    </section>
```

- [ ] **Step 7: Check and verify**

Run: `cd apps/web && npx astro check` (0 errors), `npx vitest run` from the repo root (all pass, including the i18n parity test), `npm run liturgy && npm run build -w apps/web`, serve `apps/web/dist`.

In the browser (desktop 1400 px and phone 390 px, English and Arabic): open Options; the Languages group shows English and Arabic (Coptic and Transliteration hidden); with English only, stop 29 shows English lines only; with Arabic added, both show, Arabic right-to-left; unchecking the last language does nothing; A+ makes the script text larger and A− smaller, and both persist after reload; the title and steps of stops show both languages when both are chosen; `/en/sources/` shows the Holy Mass texts section with the one source.

- [ ] **Step 8: Commit**

```bash
git add 'apps/web/src/pages/[lang]/holy-mass.astro' apps/web/src/data apps/web/src/pages/\[lang\]/sources.astro apps/web/src/i18n
git commit -m "Holy Mass: language picker, text size, sources, and the dialogue moved into content files"
```

---

### Task 7: Documentation and the final check

**Files:**
- Modify: `docs/HOLY_MASS.md`, `CHANGELOG.md`

- [ ] **Step 1: Document**

In `docs/HOLY_MASS.md`, in the "How it works" table add rows:

```
| Texts | `content/liturgy/` (format in its README), `scripts/liturgy/build.ts` → `apps/web/public/liturgy/<liturgy>.json` | The prayers, one plain-text file per stop (`common/` or a liturgy's own folder), each with a required `source:` line. The build checks every file, names the file and line of a problem, and prints how many stops each liturgy has text for. |
| Reading | `apps/web/src/lib/liturgy/`, `apps/web/src/lib/holy-mass/reading.ts`, `script-view.ts`, `load.ts` | The parser, the resolution of a liturgy, the saved language and size choice, the lines shown for a stop, and the loader. All pure and tested. |
```

Replace the paragraph "The speaker lines are drafts" with:

```
- **The prayers and the drafts.** A stop with a text file shows its **script** in the order it is said: the
  steps as rubrics, and each speaker's lines with their icon. The five switches filter the script, the
  **Languages** picker (Options) chooses Arabic, English and, when some text has them, Coptic and
  transliteration, and a text-size control makes it larger or smaller; all saved. Each script is credited
  to its source under the text, and the Sources page lists the sources. A stop **without** a text file keeps
  the one-sentence draft summaries (not prayer texts, not reviewed by clergy) and says the text has not been
  added yet. At first only stops 29 and 30 have text files (their short standard dialogue).
- **Adding texts.** Put a file in `content/liturgy/common/` (or a liturgy's folder when it differs), as in
  `content/liturgy/README.md`, and run `npm run liturgy`. The texts' source and permission are the
  responsibility of whoever adds them; the `source:` line makes them visible.
```

In `CHANGELOG.md` under "Added" add:

```
- Holy Mass full texts: the page can show everything said at each stop, as a script in the order it is said
  (steps, priest, deacon, people), in Arabic and English (Coptic and transliteration ready), with a language
  picker, a text-size control, and the source of every text. The texts are plain files in `content/liturgy/`
  checked by `npm run liturgy`; a file without a `source:` line fails the build. Stops without text keep
  their draft summaries. Only the short dialogue of stops 29 and 30 is included so far.
```

- [ ] **Step 2: Full verification**

Run, from the repo root:

```bash
npm run liturgy
npx vitest run
cd apps/web && npx astro check && cd ..
npm run build -w apps/web
```

Expected: the liturgy table (2 of 52 stops per liturgy), all tests pass, `astro check` 0 errors, the build completes.

Then in a browser check the Holy Mass page once more on desktop (1400 px) and phone (390 px), English and Arabic: no console errors; stops 29 and 30 show their scripts and credit; other stops show the draft summaries and the "not added yet" note; layers filter the script; languages and size persist after reload; the film still follows the scroll.

- [ ] **Step 3: Commit**

```bash
git add docs/HOLY_MASS.md CHANGELOG.md
git commit -m "Holy Mass: document the full-texts system"
```

---

## Self-Review

**Spec coverage:** content files and format (Task 1, Task 3 README); common and per-liturgy override (Task 2); `source:` required and build fails (Tasks 1, 3); build, JSON, coverage, sources list (Task 3); lazy per-liturgy loading and failure fallback (Tasks 4, 5); script of a stop, layers as filters, rubrics as steps (Task 5); language picker replacing "Both languages" and Coptic/transliteration shown only when present (Task 6); text-size (Task 6); notes under blocks, shown with the Meaning layer (Tasks 4, 5); fallback summaries and "not added yet" (Task 5); sources under the script and on the Sources page (Tasks 5, 6); first content, stops 29 and 30 moved from code (Tasks 3, 6); tests for parser, resolve, preferences, build, view (Tasks 1–4); browser checks (Tasks 5–7); docs (Task 7). Out of scope items are not built.

**Placeholders:** none; every code step has code. The only edits described by location rather than whole-file are changes inside the large `holy-mass.astro`, each with the exact text to add or the exact old line to replace.

**Type consistency:** `Role`, `Lang`, `Block` are defined in Task 1 and used with the same names in Tasks 2–6; `LiturgyId`, `StopScript`, `Coverage` in Task 2; `LiturgyJson` in Task 3 used in Tasks 4–5; `Reading` functions (`defaultReading`, `parseReading`, `serializeReading`, `toggleLang`, `stepSize`, `availableLangs`, `READING_KEY`) in Task 4 are used with the same signatures in Task 6; `scriptItems(blocks, langs, noteLang)` and `splitSource` in Task 4 match their use in Task 5; `loadLiturgy(id, fetchFn?)` matches Task 5.

**Review Focus:** CRLF/BOM (Task 1 test), Arabic-only block for an English reader (Task 4 test), JSON failing to load (Task 4 test and Task 5 manual check), a typo in a slug or unknown folder (Task 3 test), an unknown speaker in the JSON (Task 4 test), and a missing or empty `content/liturgy/` (Task 3 test) are each pinned in the task that owns the code.
