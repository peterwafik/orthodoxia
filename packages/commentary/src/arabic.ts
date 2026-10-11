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
    .replace(/\s+([ً-ْٰ])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Key for dictionary lookups: no diacritics, unified alef forms. */
export function dictionaryKey(word: string): string {
  return word.replace(/[ً-ْٰ]/g, '').replace(/[أإآٱ]/g, 'ا');
}

export const ARABIC_WORD = /[ء-يٰ-ۓ]+/g;

/** Proclitics and enclitics stripped when looking up a word's stem ('' keeps the word itself). */
const PREFIXES = ['', 'وال', 'بال', 'فال', 'كال', 'لل', 'ال', 'و', 'ف', 'ب', 'ل'];
const SUFFIXES = ['هما', 'كما', 'هم', 'هن', 'ها', 'كم', 'نا', 'ه', 'ك', 'ي'];

/** ى can only end a word; followed by a letter, the pair was written in the wrong order (ىف → في). */
function fixFinalYa(word: string): string {
  return word.replace(/ى([ء-ي])/g, '$1ي');
}

/**
 * Repairs words from a PDF whose fonts emit some two-letter ligatures in reverse order
 * (احلسن → الحسن, إمياهنم → إيمانهم). Any combination of the given swapped pairs is tried, and a
 * candidate replaces the word only with strong dictionary evidence:
 *  - the word is unknown and the candidate is attested (≥ 3 occurrences), or
 *  - the word is rare and the candidate is ≥ 20× (≤ 10 occurrences) or ≥ 50× more frequent.
 * Correct but rare words are therefore left as they are; ambiguous common words (عمل/علم) too.
 */
export function createLigatureRepair(
  frequency: (key: string) => number,
  swappedPairs: ReadonlySet<string>,
): (word: string) => string {
  // A word the dictionary does not list may still be a known stem with clitics (والموصوفة):
  // its score is then the stem's, so attested inflections count as evidence too.
  const score = (word: string) => {
    const key = dictionaryKey(word);
    const exact = frequency(key);
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
  return (input: string) => {
    const word = fixFinalYa(input);
    if (word === 'مل') return 'لم';
    const positions: number[] = [];
    for (let index = 0; index + 1 < word.length; index++) {
      if (swappedPairs.has(word.slice(index, index + 2))) positions.push(index);
    }
    if (positions.length === 0) return word;
    const original = score(word);
    const needed = original === 0 ? 3 : original <= 10 ? 20 * original : 50 * original;
    let best = word;
    let bestScore = original;
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
      if (overlapping) continue;
      const candidate = letters.join('');
      const candidateScore = score(candidate);
      if (candidateScore >= needed && candidateScore > bestScore) {
        best = candidate;
        bestScore = candidateScore;
      }
    }
    return best;
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
  for (const raw of new Set(words)) {
    const word = fixFinalYa(raw);
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
