/**
 * Arabic text clean-up for text extracted from PDFs, and the repair of letter pairs that some
 * fonts scramble.
 */

/** Normalizes a line extracted from a PDF: compatibility forms, ﷲ, tatweel, digits, spacing. */
export function cleanExtractedArabic(text: string): string {
  return text
    .replace(/اﷲ/g, 'الله')
    .replace(/لﷲ/g, 'لله')
    .replace(/ﷲ/g, 'الله')
    .normalize('NFKC')
    .replace(/االله/g, 'الله')
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 0x06f0))
    .replace(/ـ/g, '')
    // Persian/Urdu letter forms some fonts use for Arabic ones.
    .replace(/ھ/g, 'ه')
    .replace(/ک/g, 'ك')
    .replace(/ی/g, 'ي')
    // Final hamza after ya extracted in reverse (شءي → شيء, مجءي → مجيء).
    .replace(/([ء-ي])ءي(?![ء-ي])/g, '$1يء')
    .replace(/\s+([ً-ْٰ])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Typographic clean-up of extracted commentary text, undoing what extraction does to punctuation:
 * - vowel marks stranded on punctuation or spaces ("البدء :َ") are dropped;
 * - no space before Arabic punctuation and one after it ("حديثه ،فى" → "حديثه، فى");
 * - brackets flipped by the bidi reordering are restored ("(يو1: 1.(" → "(يو1: 1).").
 * Words themselves are never changed here.
 */
export function polishArabicText(input: string): string {
  let text = input
    .replace(/(^|[^ء-يـ])[ً-ْ]+/g, '$1')
    .replace(/\s+([،؛:!؟,])/g, '$1')
    .replace(/\s+\.(?![.\d])/g, '.')
    .replace(/([،؛:!؟,])(?=[ء-ي("«])/g, '$1 ')
    .replace(/\.(?=[ء-ي])/g, '. ')
    // The number of a numbered book belongs to it: "راجع1 تى3: 16" → "راجع 1تى3: 16".
    .replace(/([ء-ي])([1-3]) ([ء-ي]{1,3}\d)/g, '$1 $2$3')
    // A bracket before a scripture reference opens it: ")أف5: 29" / ") "مز34: 8" → "(أف5: 29".
    .replace(/\)\s*"(?=[ء-ي]{1,6}\s?\d)/g, '" (')
    .replace(/(^|[\s"«])\)(?=[ء-ي]{1,6}\s?\d)/g, '$1(');

  // Quotes: an opening quote placed before the punctuation that precedes it ('قائلا": هذا' →
  // 'قائلا: "هذا'), counted in pairs; left alone when the paragraph's quotes do not pair up.
  if ((text.match(/"/g) ?? []).length % 2 === 0) {
    let count = 0;
    text = text.replace(/"(?:([:،])\s)?/g, (quote: string, punctuation: string | undefined, offset: number) => {
      const opening = count++ % 2 === 0;
      const after = text[offset + quote.length] ?? '';
      if (opening && punctuation !== undefined && /[ء-ي]/.test(text[offset - 1] ?? '') && /[ء-ي]/.test(after)) {
        return `${punctuation} "`;
      }
      return quote;
    });
  }

  // Brackets: an opening bracket that closes a group, or a closing one that opens a group.
  const characters = [...text];
  let depth = 0;
  for (let index = 0; index < characters.length; index++) {
    const character = characters[index];
    const next = characters[index + 1] ?? ' ';
    const opensSomething = /[ء-ي0-9"«]/.test(next);
    if (character === '(') {
      if (depth > 0 && !opensSomething) {
        characters[index] = ')';
        depth--;
      } else depth++;
    } else if (character === ')') {
      if (depth === 0 && opensSomething) {
        characters[index] = '(';
        depth++;
      } else depth = Math.max(0, depth - 1);
    }
  }
  text = characters.join('');
  return text
    .replace(/(\d)\.\)/g, '$1).')
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    // و is never a word by itself: "و يف طريق" → "ويف طريق".
    .replace(/(^|[\s("«])و\s+(?=[ء-ي])/g, '$1و')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/** Key for evidence about a replacement: no diacritics, but hamza forms kept apart. */
export function strictKey(word: string): string {
  return word.replace(/[ً-ْٰ]/g, '').replace(/ٱ/g, 'ا');
}

/** Key for dictionary lookups: no diacritics, unified alef forms. */
export function dictionaryKey(word: string): string {
  return word.replace(/[ً-ْٰ]/g, '').replace(/[أإآٱ]/g, 'ا');
}

/** An Arabic word, with its vowel marks (Van Dyck is fully vowelled). */
export const ARABIC_WORD = /[ء-يً-ْٰ-ۓ]+/g;

/** Proclitics and enclitics stripped when looking up a word's stem ('' keeps the word itself). */
const PREFIXES = ['', 'وال', 'بال', 'فال', 'كال', 'لل', 'ال', 'و', 'ف', 'ب', 'ل'];
const SUFFIXES = ['هما', 'كما', 'هم', 'هن', 'ها', 'كم', 'نا', 'ه', 'ك', 'ي'];

/**
 * ى can only end a word (or precede a final hamza: شىء); followed by another letter, the pair was
 * written in the wrong order (ىف → في).
 */
function fixFinalYa(word: string): string {
  return word.replace(/ى([آ-ي])/g, '$1ي');
}

/**
 * The letter pairs that Arabic fonts join into one ligature glyph, as they come out when a PDF
 * writes the glyph in reverse (أهنم for أنهم, امللك for الملك, حياهتم for حياتهم, رمحة for رحمة,
 * إىل for إلى). Only these pairs are ever swapped back: a pair such as ال or ان is never a
 * ligature, and swapping it would turn correct words into wrong ones.
 */
export const LIGATURE_PAIRS: ReadonlySet<string> = new Set([
  'هن', 'هب', 'هت', 'هل', 'هج', 'هخ', 'هح',
  'مل', 'حل', 'جل', 'خل',
  'مح', 'حم', 'مج', 'جم', 'مخ', 'خم', 'مث', 'مس',
  'حن', 'جن', 'خن',
  'يب', 'يت', 'يث', 'ين', 'ني', 'ري', 'مي', 'حي', 'جي', 'خي',
  'خت', 'حت', 'جت', 'رب',
  'ىل', 'ىف', 'ىت', 'ىن', 'ىب',
  'ال',
]);

/**
 * Endings that, in a document known to reverse ligatures, are always reversed pronoun suffixes:
 * -هتم/-هتا/-هتما/-هتن for -تهم/-تها/-تهما/-تهن (شخصياهتم → شخصياتهم), -هبم for -بهم
 * (كتاهبم → كتابهم), -هنم for -نهم (يخافوهنم → يخافونهم). The real words of these shapes, the
 * forms of اهتم (يهتم، مهتما) and جهنم, are excluded.
 */
export function fixReversedSuffix(word: string): string {
  if (/[ً-ْ]/.test(word) || word.length < 5) return word;
  if (/^[وفلب]?[ايتنم]?هت/.test(word)) return word;
  if (/جهنم$/.test(word)) return word;
  return word
    .replace(/هت(م|ا|ما|ن|هما)$/, 'ته$1')
    .replace(/هبم$/, 'بهم')
    .replace(/هبما$/, 'بهما')
    .replace(/هنم$/, 'نهم');
}

/** Letter sequences that are not words and always stand for a reversed ligature. */
const NON_WORDS: Readonly<Record<string, string>> = { مل: 'لم', ومل: 'ولم', يف: 'في', ويف: 'وفي', فيف: 'ففي', ال: 'لا', وال: 'ولا', مث: 'ثم', ومث: 'وثم' };

/**
 * Repairs words from a PDF whose fonts emit some two-letter ligatures in reverse order
 * (احلسن → الحسن, إمياهنم → إيمانهم). Any combination of the given swapped pairs is tried, and a
 * candidate replaces the word only with strong dictionary evidence:
 *  - the word is unknown and the candidate is attested (≥ 3 occurrences), or
 *  - the word is rare and the candidate is ≥ 20× (≤ 10 occurrences) or ≥ 50× more frequent.
 * Correct but rare words are therefore left as they are; ambiguous common words (عمل/علم) too.
 * The article's ال is never touched (it is only swapped inside a word: التالميذ → التلاميذ).
 */
export function createLigatureRepair(
  frequency: (key: string) => number,
  swappedPairs: ReadonlySet<string>,
  /** Frequency by {@link strictKey}, which keeps hamza forms apart (الأسم ≠ الاسم). */
  strictFrequency: (key: string) => number = frequency,
  /**
   * Frequency in the Bible alone, by strict key. A word the Bible attests is replaced only with
   * overwhelming evidence; one attested only in the commentary (where the same misspellings occur
   * at low rates) only by a word the Bible attests.
   */
  bibleFrequency?: (key: string) => number,
): (word: string) => string {
  // A word the dictionary does not list may still be a known stem with clitics (والموصوفة):
  // its score is then the stem's, so attested inflections count as evidence too.
  const score = (word: string) => {
    const key = dictionaryKey(word);
    // Final ي and ى are both used (يعانى/يعاني): either spelling attests the word.
    const exact = Math.max(frequency(key), frequency(key.replace(/ي$/, 'ى')), frequency(key.replace(/ى$/, 'ي')));
    if (exact > 0) return exact;
    let best = 0;
    for (const prefix of PREFIXES) {
      if (!key.startsWith(prefix) || key.length - prefix.length < 3) continue;
      const rest = key.slice(prefix.length);
      best = Math.max(best, frequency(rest), frequency(`ال${rest}`));
      for (const suffix of SUFFIXES) {
        if (rest.endsWith(suffix) && rest.length - suffix.length >= 3) best = Math.max(best, frequency(rest.slice(0, -suffix.length)));
      }
    }
    return best;
  };
  // A candidate needs stronger evidence than the word it would replace: attested as a whole word,
  // or after a proclitic only (the article and و; ب ل ف ك before a long stem). Suffix stripping
  // or a short stem would let ب+يكون vouch for بيكون, or قديم+ها for قدميها.
  const support = (word: string) => {
    const key = strictKey(word);
    let best = strictFrequency(key);
    for (const prefix of ['', 'وال', 'بال', 'فال', 'كال', 'لل', 'ال', 'و', 'ب', 'ل', 'ف', 'ك']) {
      if (!key.startsWith(prefix)) continue;
      const rest = key.slice(prefix.length);
      if (rest.length < 4 || (prefix.length === 1 && prefix !== 'و' && rest.length < 5)) continue;
      if (prefix !== '') best = Math.max(best, strictFrequency(rest));
    }
    return best;
  };
  const articleAt = (word: string, index: number) => index === 0 || (index === 1 && /^[وفبك]ال/.test(word)) || (index === 2 && /^(?:وب|فب|ول|فل)ال/.test(word));
  return (input: string) => {
    // Non-words that are always a reversed ligature.
    const fixed = NON_WORDS[input];
    if (fixed !== undefined) return fixed;
    // The article's lam before a hamza on alef comes out first (األولى, واإليمان, باألشرار).
    const article = /^([وفبك]?)ا([أإآ])ل(.{2,})$/.exec(input);
    if (article !== null) {
      const candidate = `${article[1]}ال${article[2]}${article[3]}`;
      if (support(candidate) > 0 || score(candidate) > 0) return candidate;
    }
    // A word starting with ى is a fragment of the previous word (الثانى والسبعون → ىوالسبعون).
    if (input.startsWith('ىو')) return input;
    // Vowelled words are quotations, set in other fonts; they are left as they are.
    if (/[ً-ْ]/.test(input)) return input;
    // Both readings are common words (المساء evening, السماء sky): no evidence can decide.
    if (/مساء/.test(dictionaryKey(input))) return input;
    const word = input;
    const positions: number[] = [];
    for (let index = 0; index + 1 < word.length; index++) {
      const pair = word.slice(index, index + 2);
      if (!swappedPairs.has(pair)) continue;
      // ال is swapped back only inside a word (التالميذ): at the start it is the article, at the
      // end a plural pattern (رجال، قتال).
      if (pair === 'ال' && (articleAt(word, index) || index + 2 === word.length)) continue;
      positions.push(index);
    }
    const key = dictionaryKey(word);
    const exact = Math.max(frequency(key), frequency(key.replace(/ي$/, 'ى')));
    const original = exact > 0 ? exact : score(word);
    // A word attested as it stands needs overwhelming evidence (أهنا is a word, rarely meant).
    const inBible = bibleFrequency === undefined ? exact > 0 : bibleFrequency(strictKey(word)) > 0;
    const needed = inBible ? 100 * exact : exact > 0 ? 10 * exact : original === 0 ? 3 : original <= 10 ? 20 * original : 50 * original;
    // Attested only in the commentary: the replacement must be a Bible word, or 50× more frequent.
    const candidateAllowed = (candidate: string) =>
      inBible || exact === 0 || bibleFrequency === undefined || bibleFrequency(strictKey(candidate)) > 0 || support(candidate) >= 50 * exact;
    let best = word;
    let bestScore = original;
    const consider = (candidate: string) => {
      const candidateScore = support(candidate);
      if (candidateScore >= needed && candidateScore > bestScore && candidateAllowed(candidate)) {
        best = candidate;
        bestScore = candidateScore;
      }
    };
    const limit = Math.min(positions.length, 8);
    for (let mask = 1; mask < 1 << limit; mask++) {
      const letters = [...word];
      let previous = -2;
      let overlapping = false;
      for (let bit = 0; bit < limit; bit++) {
        if ((mask & (1 << bit)) === 0) continue;
        const index = positions[bit]!;
        if (index <= previous + 1) {
          overlapping = true;
          break;
        }
        [letters[index], letters[index + 1]] = [letters[index + 1]!, letters[index]!];
        previous = index;
      }
      if (!overlapping) consider(letters.join(''));
    }
    // The three-letter ligatures لمج/لمح/لمخ come out fully reversed (اجملتمع for المجتمع).
    for (const base of best === word ? [word] : [word, best]) {
      for (const match of base.matchAll(/[جحخ]مل/g)) {
        const index = match.index;
        consider(base.slice(0, index) + base[index + 2] + base[index + 1] + base[index] + base.slice(index + 3));
      }
    }
    if (best !== word) return best;
    // A final ى followed by more letters is usually a lost space (فىنهاية → فى نهاية, علىعدم →
    // على عدم): split there when both halves are known words.
    for (const match of word.matchAll(/ى(?=[آ-ي])/g)) {
      const left = word.slice(0, match.index + 1);
      const right = word.slice(match.index + 1);
      if (right.length >= 2 && score(left) > 0 && score(right) > 0) return `${left} ${right}`;
    }
    return fixFinalYa(word);
  };
}

/**
 * Learns which adjacent pairs a font scrambles: pairs whose swap turns unknown words into words
 * the dictionary knows well, counted over a corpus of affected text.
 */
export function learnSwappedPairs(
  words: Iterable<string>,
  frequency: (key: string) => number,
  minimumEvidence = 15,
): Set<string> {
  const tally = new Map<string, number>();
  for (const word of new Set(words)) {
    if (frequency(dictionaryKey(word)) > 0) continue;
    for (let index = 0; index + 1 < word.length; index++) {
      const swapped = word.slice(0, index) + word[index + 1] + word[index] + word.slice(index + 2);
      if (frequency(dictionaryKey(swapped)) >= 10) {
        const pair = word.slice(index, index + 2);
        tally.set(pair, (tally.get(pair) ?? 0) + 1);
      }
    }
  }
  return new Set([...tally].filter(([, count]) => count >= minimumEvidence).map(([pair]) => pair));
}
