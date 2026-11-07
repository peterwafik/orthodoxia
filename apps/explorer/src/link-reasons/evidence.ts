// Orthodoxia: the tests that decide why two linked verses belong together (see PATCHES.md). Pure
// functions over English text (the BSB), used at build time by scripts/data/link-reasons.ts.

/** Words that carry no meaning of their own, so sharing them proves nothing. */
export const STOP_WORDS: ReadonlySet<string> = new Set(
  (
    'the a an and or but of to in on at by for with from as is are was were be been being am i you ' +
    'he she it we they me him her us them my your his its our their this that these those who whom ' +
    'whose which what there then than so not no nor all any each every some such into upon unto out ' +
    'up down over under again also will shall would should can could may might must do does did done ' +
    'have has had having let said says say one two lord god o oh yes now when where why how very own ' +
    'just even because before after if while thus therefore yet like among through against about ' +
    'come came go went see saw give gave take took make made know knew day days man men people ' +
    'thing things word words way ways hand hands great many much more most selah'
  ).split(' '),
);

export function tokenize(text: string): string[] {
  return text.toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) ?? [];
}

/** A crude English stem, enough to match "shepherds" with "shepherd" and "loved" with "love". */
export function stem(word: string): string {
  return word
    .replace(/'s$/, '')
    .replace(/ies$/, 'y')
    .replace(/(ing|ed|es|s)$/, '');
}

/** The meaningful words of a verse, stemmed, once each. */
export function contentWords(words: readonly string[]): string[] {
  return [...new Set(words.filter((word) => word.length > 2 && !STOP_WORDS.has(word)).map(stem))];
}

/**
 * The length of the longest run of words the two texts share, counting only runs of at least four
 * words with at least two meaningful ones ("the God of the spirits of all flesh", not "and the LORD
 * said to"). 0 when there is none.
 */
export function sharedRun(a: readonly string[], b: readonly string[]): number {
  let best = 0;
  const run = new Array<number>(b.length + 1).fill(0);
  const meaningful = new Array<number>(b.length + 1).fill(0);
  for (let i = 1; i <= a.length; i += 1) {
    let diagonalRun = 0;
    let diagonalMeaningful = 0;
    const word = a[i - 1] ?? '';
    for (let j = 1; j <= b.length; j += 1) {
      const previousRun = run[j] ?? 0;
      const previousMeaningful = meaningful[j] ?? 0;
      if (word === b[j - 1]) {
        run[j] = diagonalRun + 1;
        meaningful[j] = diagonalMeaningful + (STOP_WORDS.has(word) ? 0 : 1);
        if ((run[j] ?? 0) >= 4 && (meaningful[j] ?? 0) >= 2) best = Math.max(best, run[j] ?? 0);
      } else {
        run[j] = 0;
        meaningful[j] = 0;
      }
      diagonalRun = previousRun;
      diagonalMeaningful = previousMeaningful;
    }
  }
  return best;
}

/**
 * Stems that are names of people and places: written with a capital inside a sentence nearly every
 * time they occur. Sharing a name alone ("Aijalon", "Seir") does not make two verses about the same
 * thing.
 */
export function findNames(texts: readonly string[]): Set<string> {
  const capital = new Map<string, number>();
  const total = new Map<string, number>();
  for (const text of texts) {
    for (const match of text.matchAll(/([.!?“”"‘’:;]?\s*)([A-Za-z]+)/g)) {
      const word = match[2] ?? '';
      const key = stem(word.toLowerCase());
      total.set(key, (total.get(key) ?? 0) + 1);
      const sentenceStart = match.index === 0 || /[.!?“"‘:]/.test(match[1] ?? '');
      if (!sentenceStart && /^[A-Z]/.test(word)) capital.set(key, (capital.get(key) ?? 0) + 1);
    }
  }
  const names = new Set<string>();
  for (const [key, count] of total) {
    if ((capital.get(key) ?? 0) >= 0.8 * count) names.add(key);
  }
  return names;
}
