/**
 * Repairs one known fault of the Arabic text that pdfjs reads from Rites_Liturgy_Full-1.pdf: the joined
 * letters lam+alef (لا, لأ, لإ, لآ) come out in reversed order ("سلام" as "سالم"), sometimes with the hamza
 * dropped ("لأن" as "الن"), and the name of God as "هللا" instead of "الله". Because a correct "ال" (as in
 * "قال" or the article) looks the same as a swapped "لا", each ambiguous place is decided by lists of real
 * words: first the words that the older reader (pdftotext), which reads these letters correctly, finds on
 * the same page, then a general vocabulary. With no evidence the word is left untouched.
 */
const MARKS = /[ً-ْٰ]/;
const ALEFS = new Set(['ا', 'أ', 'إ', 'آ']);
const PUNCT_END = /[.،؛؟!:)(«»"'\-–—*]+$/;
const PUNCT_START = /^[(«"'\-–—*]+/;

/** A word as graphemes: a base letter with the marks (vowel signs) that follow it. */
function graphemes(text) {
  const out = [];
  for (const ch of text) {
    if (MARKS.test(ch) && out.length > 0) out[out.length - 1].marks += ch;
    else out.push({ base: ch, marks: '' });
  }
  return out;
}

const stripMarks = (text) => text.replace(/[ً-ْٰ]/g, '');
const letters = (list) => list.map((g) => g.base + g.marks).join('');
const plain = (list) => list.map((g) => g.base).join('');

/** A frequency table of the Arabic words of some texts (marks, direction marks and punctuation removed). */
function buildVocabulary(texts) {
  const counts = new Map();
  for (const text of texts) {
    for (const raw of text.replace(/[‎‏‪-‮]/g, ' ').split(/\s+/)) {
      const word = stripMarks(raw).replace(PUNCT_START, '').replace(PUNCT_END, '');
      if (word.length < 1 || !/[ء-ي]/.test(word)) continue;
      counts.set(word, (counts.get(word) ?? 0) + 1);
    }
  }
  return counts;
}

/** Places where a swapped lam+alef may be: i holds the alef-like letter, i+1 the lam. */
function candidates(list) {
  const places = [];
  for (let i = 0; i < list.length - 1; i++) {
    if (ALEFS.has(list[i].base) && list[i + 1].base === 'ل') {
      places.push(i);
      i++; // the pair is used
    }
  }
  return places;
}

/** What a swapped pair may really be: لا (or, when the hamza was lost, لأ لإ لآ). */
const options = (alef) => (alef === 'ا' ? ['ا', 'أ', 'إ', 'آ'] : [alef]);

const asList = (vocabulary) => (vocabulary === null || vocabulary === undefined ? [] : Array.isArray(vocabulary) ? vocabulary : [vocabulary]);
/** The first list (the page's own words) outweighs the general vocabulary. */
const scoreOf = (word, lists) => lists.reduce((sum, list, index) => sum + (list.get(word) ?? 0) * (index === 0 && lists.length > 1 ? 1000 : 1), 0);

function fixWord(rawWord, vocabulary) {
  const lead = (PUNCT_START.exec(rawWord) ?? [''])[0];
  const tail = (PUNCT_END.exec(rawWord.slice(lead.length)) ?? [''])[0];
  const core = rawWord.slice(lead.length, rawWord.length - tail.length);
  if (core === '') return rawWord;
  if (plain(graphemes(core)) === 'هللا') return `${lead}الله${tail}`; // the name of God
  const lists = asList(vocabulary);
  const list = graphemes(core);
  const places = candidates(list).slice(0, 3);
  if (places.length === 0 || lists.length === 0) return rawWord;
  let best = { score: scoreOf(plain(list), lists), swaps: 0, text: core };
  // every combination: leave the place alone, or put it right with each possible alef
  const choices = places.map((index) => ['keep', ...options(list[index].base)]);
  const total = choices.reduce((product, set) => product * set.length, 1);
  for (let combo = 1; combo < total; combo++) {
    const copy = list.map((g) => ({ ...g }));
    let rest = combo;
    let swaps = 0;
    places.forEach((index, place) => {
      const set = choices[place];
      const pick = set[rest % set.length];
      rest = Math.floor(rest / set.length);
      if (pick !== 'keep') {
        const marksA = copy[index].marks;
        const marksL = copy[index + 1].marks;
        copy[index] = { base: 'ل', marks: marksL };
        copy[index + 1] = { base: pick, marks: marksA };
        swaps++;
      }
    });
    if (swaps === 0) continue;
    const score = scoreOf(plain(copy), lists);
    if (score > best.score || (score === best.score && score > 0 && swaps < best.swaps)) best = { score, swaps, text: letters(copy) };
  }
  return `${lead}${best.text}${tail}`;
}

/** Repairs a whole Arabic text. `vocabulary`: a Map, an array of Maps (the first one is the page's own words), or null. */
function fixArabic(text, vocabulary) {
  return text
    .split(' ')
    .map((word) => fixWord(word, vocabulary))
    .join(' ');
}

module.exports = { buildVocabulary, fixArabic, fixWord };
