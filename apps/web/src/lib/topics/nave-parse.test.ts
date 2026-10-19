import { describe, expect, it } from 'vitest';
import { parseNave } from './nave-parse.ts';

const XML = `
<term id="l-p679.2">LOVE</term>
<def type="Scripture References" id="l-p679.3">
<p class="index2" id="l-p680">–OF CHILDREN FOR PARENTS</p>
<p class="index3" id="l-p681">.See <a href="bible.c.html?term=children" id="l-p681.1">CHILDREN</a></p>
<p class="index2" id="l-p683">–OF MAN FOR GOD <scripRef id="l-p683.1" passage="Ex 20:6" parsed="|Exod|20|6|0|0" osisRef="Bible:Exod.20.6">Ex 20:6</scripRef>; <scripRef id="l-p683.2" passage="Mt 22:37" parsed="|Matt|22|37|22|38" osisRef="Bible:Matt.22.37-Matt.22.38">Mt
22:37-38</scripRef></p>
<p class="index3" id="l-p686">.Mary <scripRef id="l-p686.1" passage="Mt 26:6-13" parsed="|Matt|26|6|26|13" osisRef="x">Mt 26:6-13</scripRef></p>
</def>
<term id="n-p1">NUMBERS</term>
<def type="Scripture References" id="n-p2">
<p class="index2" id="n-p3">–Whole chapter <scripRef passage="Nu 17" parsed="|Num|17|0|0|0" osisRef="Bible:Num.17">Nu 17</scripRef> and <scripRef passage="Ps 1-2" parsed="|Ps|1|0|2|0" osisRef="Bible:Ps.1-Ps.2">Ps 1-2</scripRef></p>
</def>
<term id="x-p1">LOVELY</term>
<def type="Scripture References" id="x-p2">
<p class="index2" id="x-p3">–See <a href="bible.l.html?term=love" id="x-p3.1">LOVE</a></p>
</def>`;

describe('parseNave', () => {
  const nave = parseNave(XML);

  it('reads each topic with its headings, their depth and their verses', () => {
    expect(Object.keys(nave)).toEqual(['LOVE', 'NUMBERS', 'LOVELY']);
    const love = nave.LOVE!;
    expect(love.groups.map((group) => group.label)).toEqual(['OF CHILDREN FOR PARENTS', 'OF MAN FOR GOD', 'Mary']);
    expect(love.groups.map((group) => group.depth)).toEqual([2, 2, 3]);
  });

  it('keeps "see also" links apart from the verses', () => {
    expect(nave.LOVE!.groups[0]!.see).toEqual(['CHILDREN']);
    expect(nave.LOVE!.see).toEqual([]);
    expect(nave.LOVELY!.see).toEqual(['LOVE']);
    expect(nave.LOVELY!.groups).toEqual([]);
  });

  it('reads single verses, verse ranges that cross chapters, and whole chapters', () => {
    const [parents, god, mary] = nave.LOVE!.groups;
    expect(parents!.refs).toEqual([]);
    expect(god!.refs).toEqual([
      { book: 'Exod', from: { chapter: 20, verse: 6 }, to: { chapter: 20, verse: 6 } },
      { book: 'Matt', from: { chapter: 22, verse: 37 }, to: { chapter: 22, verse: 38 } },
    ]);
    expect(mary!.refs[0]).toEqual({ book: 'Matt', from: { chapter: 26, verse: 6 }, to: { chapter: 26, verse: 13 } });
    expect(nave.NUMBERS!.groups[0]!.refs).toEqual([
      { book: 'Num', from: { chapter: 17, verse: null }, to: { chapter: 17, verse: null } },
      { book: 'Ps', from: { chapter: 1, verse: null }, to: { chapter: 2, verse: null } },
    ]);
  });
});
