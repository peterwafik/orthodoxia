/**
 * Text decoding for the Agpeya PDF (Coptic – English – Arabic): the Coptic is set in the legacy font "CS Avva
 * Shenouda" and the Greek in the Symbol font, so both come out of the PDF as Latin letters and must be mapped back to
 * Unicode. The Arabic comes out with a few scrambled letter pairs, which `repairArabic` undoes.
 */

// ───────── Coptic (CS Avva Shenouda) ─────────
const COPTIC_LOWER: Record<string, string> = {
  a: 'ⲁ', b: 'ⲃ', g: 'ⲅ', d: 'ⲇ', e: 'ⲉ', z: 'ⲍ', y: 'ⲏ', ';': 'ⲑ', i: 'ⲓ', k: 'ⲕ', l: 'ⲗ', m: 'ⲙ', n: 'ⲛ', x: 'ⲝ', o: 'ⲟ', p: 'ⲡ',
  r: 'ⲣ', c: 'ⲥ', t: 'ⲧ', u: 'ⲩ', v: 'ⲫ', ',': 'ⲭ', "'": 'ⲯ', w: 'ⲱ', f: 'ϥ', s: 'ϣ', h: 'ϩ', j: 'ϫ', '[': 'ϭ', ']': 'ϯ', q: 'ϧ', '^': 'ϛ',
};
const COPTIC_UPPER: Record<string, string> = {
  A: 'Ⲁ', B: 'Ⲃ', G: 'Ⲅ', D: 'Ⲇ', E: 'Ⲉ', Z: 'Ⲍ', Y: 'Ⲏ', ':': 'Ⲑ', I: 'Ⲓ', K: 'Ⲕ', L: 'Ⲗ', M: 'Ⲙ', N: 'Ⲛ', X: 'Ⲝ', O: 'Ⲟ', P: 'Ⲡ',
  R: 'Ⲣ', C: 'Ⲥ', T: 'Ⲧ', U: 'Ⲩ', V: 'Ⲫ', '<': 'Ⲭ', '"': 'Ⲯ', W: 'Ⲱ', F: 'Ϥ', S: 'Ϣ', H: 'Ϩ', J: 'Ϫ', '{': 'Ϭ', '}': 'Ϯ', Q: 'Ϧ',
};
const JINKIM = '̀';
const OVERLINE = '̅';

/** Coptic text typed in CS Avva Shenouda, as Unicode: ` is the jinkim (over the letter it precedes), = an overline over the next letter. */
export function decodeCoptic(input: string): string {
  const out: string[] = [];
  let pendingJinkim = false;
  let pendingOverline = false;
  for (const ch of input) {
    if (ch === '`') {
      pendingJinkim = true;
      continue;
    }
    if (ch === '=') {
      pendingOverline = true;
      continue;
    }
    const letter = COPTIC_LOWER[ch] ?? COPTIC_UPPER[ch];
    if (letter !== undefined) {
      out.push(letter + (pendingJinkim ? JINKIM : '') + (pendingOverline ? OVERLINE : ''));
    } else {
      // Punctuation and anything unknown: a jinkim or overline waiting for a letter is dropped.
      out.push(ch === '@' ? '·' : ch === '.' ? '.' : ch);
    }
    pendingJinkim = false;
    pendingOverline = false;
  }
  return out.join('').normalize('NFC');
}

// ───────── Greek (Symbol font) ─────────
const SYMBOL: Record<string, string> = {
  a: 'α', b: 'β', c: 'χ', d: 'δ', e: 'ε', f: 'φ', g: 'γ', h: 'η', i: 'ι', j: 'ϕ', k: 'κ', l: 'λ', m: 'μ', n: 'ν', o: 'ο', p: 'π', q: 'θ', r: 'ρ', s: 'σ',
  t: 'τ', u: 'υ', v: 'ς', w: 'ω', x: 'ξ', y: 'ψ', z: 'ζ',
  A: 'Α', B: 'Β', C: 'Χ', D: 'Δ', E: 'Ε', F: 'Φ', G: 'Γ', H: 'Η', I: 'Ι', K: 'Κ', L: 'Λ', M: 'Μ', N: 'Ν', O: 'Ο', P: 'Π', Q: 'Θ', R: 'Ρ', S: 'Σ',
  T: 'Τ', U: 'Υ', V: 'ς', W: 'Ω', X: 'Ξ', Y: 'Ψ', Z: 'Ζ',
};

/** Symbol-font text (private-use characters U+F0xx) as Greek: the font has no accents, so the Greek is unaccented. */
export function decodeSymbol(input: string): string {
  let out = '';
  for (const ch of input) {
    const code = ch.codePointAt(0) ?? 0;
    if (code >= 0xf020 && code <= 0xf0ff) {
      const ascii = String.fromCharCode(code - 0xf000);
      out += SYMBOL[ascii] ?? ascii;
    } else out += ch;
  }
  // A sigma at the end of a word is the final sigma.
  return out.replace(/σ(?![Ͱ-Ͽ])/g, 'ς');
}
