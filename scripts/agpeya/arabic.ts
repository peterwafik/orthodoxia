/**
 * Repairs the Arabic of the Agpeya PDF. The PDF's Arabic font writes the lam-alef ligatures in reverse (صلاتي comes out
 * as صالتي, لأن as ألن, الله as هللا), writes the stretched letters of a heading as a run of one letter (الننرب for الرب),
 * and sometimes leaves a letter on its own. The first fixes are certain rules; the rest is decided with a dictionary of
 * the Van Dyck Arabic Bible and the Arabic prayers already on the site: a reading replaces a word only when the
 * dictionary knows it much better than the word as written.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { dictionaryKey } from '../../packages/commentary/src/arabic.ts';

const ROOT = resolve(import.meta.dirname, '../..');
const SVD = join(ROOT, 'data/bible/build/svd');
const LITURGY = join(ROOT, 'content/liturgy');
const WORD = /[ء-ي]+/g;

interface Chapter {
  verses: { content: { text: string }[] }[];
}

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

/** How often each word occurs in the Van Dyck Bible and in the Arabic of the Holy Mass texts. */
export function dictionary(): Map<string, number> {
  const count = new Map<string, number>();
  const add = (text: string): void => {
    for (const word of text.match(WORD) ?? []) count.set(dictionaryKey(word), (count.get(dictionaryKey(word)) ?? 0) + 1);
  };
  for (const file of readdirSync(SVD)) {
    if (!file.endsWith('.json') || file === 'manifest.json') continue;
    const book = JSON.parse(readFileSync(join(SVD, file), 'utf8')) as { chapters?: Chapter[] };
    for (const chapter of book.chapters ?? []) for (const verse of chapter.verses) add(verse.content.map((part) => part.text).join(' '));
  }
  try {
    for (const file of walk(LITURGY)) {
      if (!file.endsWith('.txt')) continue;
      for (const line of readFileSync(file, 'utf8').split('\n')) if (line.startsWith('ar|')) add(line.slice(3));
    }
  } catch {
    // no liturgy texts: the Bible alone is the dictionary
  }
  return count;
}

/** Words that are a certain reversed ligature, whatever the dictionary says. */
const CERTAIN: Readonly<Record<string, string>> = {
  ال: 'لا', وال: 'ولا', فال: 'فلا', إال: 'إلا', أال: 'ألا', ألن: 'لأن', وألن: 'ولأن', فألن: 'فلأن', اآلن: 'الآن', واآلن: 'والآن',
  اآلب: 'الآب', لآلب: 'للآب', باآلب: 'بالآب', واآلب: 'والآب', األب: 'الأب', لألب: 'للأب', مل: 'لم', ومل: 'ولم',
};
const REASONS = /^([وف]?)ألن(ه|ك|ي|ني|ها|هما|هم|هن|كم|كما|نا|نه)?$/;

/** The certain rules, applied to a whole paragraph. */
function certain(text: string): string {
  return (
    text
      // The name of God.
      .replace(/هللا/g, 'الله')
      .replace(/(^|[^ء-ي])([وفبكل]?)اهلل(?![ء-ي])/g, '$1$2الله')
      .replace(/(^|[\s(«"])(و?)هلل(?![ء-ي])/g, '$1$2لله')
      // The article before a hamza or madda: األب, اإلله, اآلن.
      .replace(/(^|[^ء-ي])([وفبكل]?)ا([أإآ])ل(?=[ء-ي])/g, '$1$2ال$3')
  );
}

/** Swappable pairs: where a lam-alef ligature (لا لأ لإ لآ) was written alef-first. */
const PAIRS = ['ال', 'أل', 'إل', 'آل'];

export function createRepair(): (text: string) => string {
  const freq = dictionary();
  const known = (word: string): number => freq.get(dictionaryKey(word)) ?? 0;
  /** A word's standing: its own count, or half the count of its stem with a prefix or suffix cut off. */
  const standing = (word: string): number => {
    const own = known(word);
    if (own > 0) return own;
    let best = 0;
    for (const prefix of ['', 'و', 'ف', 'ب', 'ل', 'ك', 'ال', 'وال', 'بال', 'لل', 'فال', 'كال']) {
      if (!word.startsWith(prefix)) continue;
      for (const suffix of ['', 'ك', 'ه', 'ي', 'نا', 'ها', 'هم', 'كم', 'ني', 'ون', 'ين', 'ات', 'ة', 'تي', 'تك', 'ته']) {
        if (!word.endsWith(suffix)) continue;
        const stem = word.slice(prefix.length, word.length - suffix.length);
        if (stem.length >= 3) best = Math.max(best, Math.floor(known(stem) / 2), Math.floor(known(`ال${stem}`) / 2));
      }
    }
    return best;
  };

  /**
   * A run of one letter three or more times is a stretched letter (فوووي, الننرب). The real letter is kept once when that
   * makes a word the dictionary knows; a run that is all filler (الووورب for الرب) goes only if the rest is a word. Runs of
   * two are left alone: they are often real (إنني, تتحدث).
   */
  const unstretch = (token: string): string => {
    const runs = [...token.matchAll(/([ء-ي])\1{2,}/g)];
    if (runs.length === 0 || runs.length > 3) return token;
    const rebuild = (counts: number[]): string => {
      let out = '';
      let at = 0;
      runs.forEach((run, i) => {
        out += token.slice(at, run.index) + (run[1] as string).repeat(counts[i] as number);
        at = (run.index as number) + run[0].length;
      });
      return out + token.slice(at);
    };
    // Whichever of "none", "one" or "two" of the letters is the commonest word wins (هوووذا: هذا, not هوذا).
    // The real letter is more likely there than not, so dropping all of them needs to be clearly the commoner word.
    let best = token;
    let bestCount = 0;
    for (const copies of [1, 2, 0]) {
      const candidate = rebuild(runs.map(() => copies));
      const count = candidate.length >= 2 ? known(candidate) : 0;
      if (count > bestCount * (copies === 0 ? 3 : 1)) {
        best = candidate;
        bestCount = count;
      }
    }
    return best;
  };

  /** Article positions, where ال is the definite article and never a swapped ligature. */
  // After a one-letter prefix (كالم, بالاستقامة) the ال is the article only if what follows it is a word.
  const articleAt = (word: string, index: number): boolean => {
    if (index === 0) return true;
    const prefixed = (index === 1 && /^[وفبكل]/.test(word)) || (index === 2 && /^(?:وب|فب|ول|فل|وك)/.test(word));
    return prefixed && standing(word.slice(index + 2)) > 0;
  };

  /** The font writes a stretched letter of a justified line as ك (مكن for من, ظلمكة for ظلمة): one ك goes if the rest is far more usual. */
  const kashida = (token: string): string => {
    if (!token.includes('ك')) return token;
    // Only a word the dictionary does not know is looked at: كان and لكم are words, and lose nothing.
    if (known(token) > 0) return token;
    let best = token;
    let bestScore = 5;
    for (let i = 0; i < token.length; i++) {
      if (token[i] !== 'ك') continue;
      const candidate = token.slice(0, i) + token.slice(i + 1);
      if (candidate.length < 2) continue;
      const score = known(candidate);
      if (score >= bestScore) {
        best = candidate;
        bestScore = score;
      }
    }
    return best;
  };

  const reading = (token: string): string => {
    const positions: number[] = [];
    for (let i = 0; i + 1 < token.length; i++) {
      if (!PAIRS.includes(token.slice(i, i + 2))) continue;
      if (token.slice(i, i + 2) === 'ال' && articleAt(token, i)) continue;
      positions.push(i);
    }
    if (positions.length === 0 || positions.length > 6) return token;
    const own = known(token);
    let best = token;
    let bestScore = own;
    for (let mask = 1; mask < 1 << positions.length; mask++) {
      const letters = [...token];
      let previous = -2;
      let clash = false;
      for (let bit = 0; bit < positions.length; bit++) {
        if ((mask & (1 << bit)) === 0) continue;
        const index = positions[bit] as number;
        if (index <= previous + 1) {
          clash = true;
          break;
        }
        [letters[index], letters[index + 1]] = [letters[index + 1] as string, letters[index] as string];
        previous = index;
      }
      if (clash) continue;
      const candidate = letters.join('');
      const score = standing(candidate);
      if (score > bestScore) {
        best = candidate;
        bestScore = score;
      }
    }
    // The reading must be clearly better: known where the word was not, or twice as common.
    return bestScore > 0 && (own === 0 || bestScore >= own * 2) ? best : token;
  };

  return (input: string): string => {
    const text = certain(input);
    return text.replace(WORD, (token) => {
      const fixed = CERTAIN[token];
      if (fixed !== undefined) return fixed;
      const reason = REASONS.exec(token);
      if (reason !== null) return `${reason[1] ?? ''}لأن${reason[2] ?? ''}`;
      return reading(unstretch(token));
    });
  };
}

/** The words of an Arabic text that the dictionary does not know, for a human to look at. */
export function unknownWords(text: string, freq: Map<string, number>): string[] {
  return (text.match(WORD) ?? []).filter((token) => !freq.has(dictionaryKey(token)));
}
