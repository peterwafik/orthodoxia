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

  it('reads an optional Arabic source line (with continuation lines)', () => {
    const { file, issues } = parseLiturgyFile('source: English words.\nsource-ar: مصدر النص\n  وتتمته.\n\n@priest\nen| x\n');
    expect(issues).toEqual([]);
    expect(file!.source).toBe('English words.');
    expect(file!.sourceAr).toBe('مصدر النص وتتمته.');
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
