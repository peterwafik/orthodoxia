/**
 * The artwork behind the Holy Mass journey: 31 line drawings, in order, each held from the stop where it
 * begins until the next one takes over. Scrolling the prayer panel dissolves one into the next.
 *
 * `from` is a stop number (1-based). A fraction places the change part-way through a stop, for the
 * stops that need more than one picture (stop 1.5 is halfway down the first stop).
 */
export interface Backdrop {
  /** File name in /holy-mass-bg/ */
  readonly file: string;
  readonly from: number;
}

const file = (n: number) => `${String(n).padStart(2, '0')}.webp`;

/** Which stop each picture opens at. The numbers of the files are the order of the pictures. */
const STARTS: readonly number[] = [
  1, // 01 the prepared altar: vesting and preparing the altar
  1.5, // 02 the priest washes his hands
  2, // 03 choosing the Lamb among the loaves
  2.6, // 04 the loaves in the basket
  3, // 05 the Lamb is handed to the priest: the procession of the Lamb
  3.6, // 06 the Lamb is veiled
  4, // 07 the paten lifted over the head: the blessing of the oblations
  4.6, // 08 wine and water poured into the chalice
  5, // 09 the altar covered: the prayer of thanksgiving
  6, // 10 the priest absolves the ministers: the absolutions
  7, // 11 the censer and the Gospel: entering the Liturgy of the Word
  9, // 12 the censer carried down the aisle: the procession of incense
  10, // 13 the priest walks on, praying: prayers during the procession
  14, // 14 the lectern: the Pauline Epistle
  16, // 15 the reading goes on: the Acts, the Synaxarion, the Psalm
  19, // 16 the candle and the Holy Gospel
  21, // 17 the incense and the open arms: the prayer of the veil
  21.8, // 18 the priest bows at the altar
  22.5, // 19 the veil held up: the litanies
  24, // 20 the veil over the book
  25, // 21 the vessels covered: the Creed
  26, // 22 the censer: the washing of hands
  27, // 23 the veil spread wide: the prayer of reconciliation
  28, // 24 the altar censed: the kiss of peace
  30, // 25 the hand on the veil, the bread on its stand: the Anaphora
  34, // 26 the bread taken: the institution narrative
  34.5, // 27 the bread held
  35, // 28 the cup lifted: the memorial
  36, // 29 the priest bows over the altar, the people pray: the invocation of the Holy Spirit
  41, // 30 the paten and the spoon: the fraction
  47, // 31 communion at the sanctuary door, heaven opened above
];

export const BACKDROPS: readonly Backdrop[] = STARTS.map((from, index) => ({ file: file(index + 1), from }));

/** How much of a stop's height a dissolve takes at most. */
const FADE = 0.5;

const smooth = (x: number) => {
  const t = Math.min(1, Math.max(0, x));
  return t * t * (3 - 2 * t);
};

/**
 * How visible each picture is at a fractional stop position (0 is the top of the first stop, 3.5 is
 * halfway between the fourth and the fifth). Each change is a dissolve that finishes at the place where the
 * next picture opens, and never wider than the room between two changes.
 *
 * @param position fractional stop index (0-based)
 * @param starts the stop number (1-based) at which each picture opens, ascending
 * @returns one opacity per picture, 0 to 1
 */
export function backdropOpacities(position: number, starts: readonly number[] = STARTS): number[] {
  const marks = starts.map((start) => start - 1);
  const width = (k: number) => {
    const before = marks[k]! - (marks[k - 1] ?? marks[k]! - FADE / 0.5);
    const after = (marks[k + 1] ?? marks[k]! + FADE / 0.5) - marks[k]!;
    return Math.min(FADE, 0.5 * Math.min(before, after));
  };
  return marks.map((_, k) => {
    let opacity = 1;
    if (k > 0) opacity *= smooth((position - (marks[k]! - width(k))) / width(k));
    if (k < marks.length - 1) opacity *= 1 - smooth((position - (marks[k + 1]! - width(k + 1))) / width(k + 1));
    return opacity;
  });
}

/** The picture a position belongs to: the last one that has opened. */
export function backdropAt(position: number, starts: readonly number[] = STARTS): number {
  let current = 0;
  starts.forEach((start, index) => {
    if (position >= start - 1) current = index;
  });
  return current;
}
