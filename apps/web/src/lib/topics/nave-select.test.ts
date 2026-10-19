import { describe, expect, it } from 'vitest';
import { parseNave } from './nave-parse.ts';
import { parseSelector, selectRefs } from './nave-select.ts';

const XML = `
<term id="a">FAITH</term>
<def type="Scripture References" id="a2">
<p class="index2" id="p1">–IN GOD <scripRef passage="x" parsed="|Heb|11|6|0|0" osisRef="x">x</scripRef></p>
<p class="index3" id="p2">.Abraham <scripRef passage="x" parsed="|Gen|15|6|0|0" osisRef="x">x</scripRef></p>
<p class="index2" id="p3">–AND WORKS <scripRef passage="x" parsed="|Jas|2|17|2|18" osisRef="x">x</scripRef></p>
<p class="index2" id="p4">–WEAK <scripRef passage="x" parsed="|Rom|14|1|0|0" osisRef="x">x</scripRef></p>
</def>
<term id="b">DOUBT</term>
<def type="Scripture References" id="b2">
<p class="index2" id="p5">–<scripRef passage="x" parsed="|Matt|14|31|0|0" osisRef="x">x</scripRef></p>
</def>`;
const nave = parseNave(XML);
const books = (refs: { book: string }[]) => refs.map((ref) => ref.book);

describe('parseSelector', () => {
  it('reads topics and the headings asked for', () => {
    expect(parseSelector('FAITH; DOUBT>a|b ; LOVE>OF MAN FOR GOD')).toEqual([
      { topic: 'FAITH', headings: [] },
      { topic: 'DOUBT', headings: ['a', 'b'] },
      { topic: 'LOVE', headings: ['OF MAN FOR GOD'] },
    ]);
  });
});

describe('selectRefs', () => {
  it('takes every verse of a topic when no heading is named', () => {
    expect(books(selectRefs(nave, parseSelector('FAITH')))).toEqual(['Heb', 'Gen', 'Jas', 'Rom']);
  });

  it('takes a heading with the deeper lines under it, not the next heading', () => {
    expect(books(selectRefs(nave, parseSelector('FAITH>in god')))).toEqual(['Heb', 'Gen']);
    expect(books(selectRefs(nave, parseSelector('FAITH>AND WORKS|weak')))).toEqual(['Jas', 'Rom']);
  });

  it('refuses a topic or heading that is not in Nave instead of silently marking nothing', () => {
    expect(() => selectRefs(nave, parseSelector('NOPE'))).toThrow(/NOPE/);
    expect(() => selectRefs(nave, parseSelector('FAITH>missing'))).toThrow(/missing/);
  });
});
