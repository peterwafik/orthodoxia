/**
 * The "Meaning behind" paragraph of every stop, one in English and one in Arabic.
 *
 * Sources. Each paragraph is a summary, in the site's own words, of what two books say about that part of the
 * Liturgy: "The Spirituality of the Rites of the Holy Liturgy in the Coptic Orthodox Church" (introduction by
 * Bishop Mettaous, Bishop of St Mary Monastery, El Sorian), which follows the whole service from the vesting to
 * the dismissal, and the lecture notes "Analysis and explanation of the consecration prayers in the three
 * Liturgies" by Michael Mina (Clerical College of the Coptic Orthodox, Port Said branch), which cover only the
 * institution narrative, the memorial and the Eucharistic verbs of stops 21, 34 and 35 (and one point on the
 * thanksgiving prayer, stop 5). Nothing is quoted at length; where a paragraph names Michael Mina it is his point.
 * Bible references are the ones the books give. The paragraphs have not been reviewed by clergy.
 *
 * The English and the Arabic are written to carry the same points, not to be word-for-word translations.
 */
import { CHAPTER_1 } from './holy-mass-meaning/chapter-1.ts';
import { CHAPTER_2 } from './holy-mass-meaning/chapter-2.ts';
import { CHAPTER_3 } from './holy-mass-meaning/chapter-3.ts';
import { CHAPTER_4A } from './holy-mass-meaning/chapter-4a.ts';
import { CHAPTER_4B } from './holy-mass-meaning/chapter-4b.ts';
import { CHAPTER_5 } from './holy-mass-meaning/chapter-5.ts';
import type { Meaning } from './holy-mass-meaning/types.ts';

export type { Meaning };

/** Paragraphs are joined with a blank line; the page splits them again. */
export const PARAGRAPH_BREAK = '\n\n';

export const MEANING: Readonly<Record<string, Meaning>> = {
  ...CHAPTER_1,
  ...CHAPTER_2,
  ...CHAPTER_3,
  ...CHAPTER_4A,
  ...CHAPTER_4B,
  ...CHAPTER_5,
};
