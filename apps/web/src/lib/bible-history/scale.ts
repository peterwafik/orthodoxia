/**
 * The time scale of the Bible history chart. Its periods are not given space in proportion to their years: the
 * millennia before Abraham hold a few dozen people, the centuries of the kings and the exile hold thousands, so each
 * period has its own share of the wheel and the year marks show where the scale changes. Shared by the build and the
 * page's script (no imports).
 */

export interface Scale {
  /** Year anchors, oldest first (BC negative, no year 0). */
  readonly years: readonly number[];
  /** The share of the chart from each anchor to the next; they add up to 1. */
  readonly shares: readonly number[];
}

/** Years as a continuous number line (astronomical numbering: 1 BC = 0), so spans across BC/AD measure right. */
export const line = (year: number): number => (year < 0 ? year + 1 : year);

/** The landmarks a scale needs (see `landmarks` in data/bible-history/primeval.ts). */
export interface ScaleMarks {
  readonly creation: number;
  readonly flood: number;
  readonly abraham: number;
  readonly exodus: number;
  /** The end of the undated stretch, when the count leaves Adam to Terah undated. */
  readonly undated: number | null;
}

export function makeScale(marks: ScaleMarks): Scale {
  if (marks.undated !== null) {
    // Undated beginnings, then documented history before Abraham (the early civilisations), then as below.
    return {
      years: [marks.creation, marks.undated, marks.abraham, marks.exodus, -1050, -586, -400, -6, 100],
      shares: [0.1, 0.09, 0.12, 0.1, 0.22, 0.12, 0.06, 0.19],
    };
  }
  return {
    years: [marks.creation, marks.flood, marks.abraham, marks.exodus, -1050, -586, -400, -6, 100],
    shares: [0.08, 0.06, 0.12, 0.11, 0.23, 0.13, 0.07, 0.2],
  };
}

/** A year → its place on the chart, 0 at creation and 1 at the end of the New Testament age. */
export function toU(scale: Scale, year: number): number {
  const { years, shares } = scale;
  const y = line(year);
  let u = 0;
  for (let i = 0; i < shares.length; i++) {
    const a = line(years[i]!);
    const b = line(years[i + 1]!);
    if (y <= b || i === shares.length - 1) return u + (shares[i]! * (Math.min(Math.max(y, a - 400), b + 400) - a)) / (b - a);
    u += shares[i]!;
  }
  return u;
}

/** A place on the chart → its year (the inverse of `toU`), as a continuous astronomical year. */
export function fromU(scale: Scale, u: number): number {
  const { years, shares } = scale;
  let at = 0;
  for (let i = 0; i < shares.length; i++) {
    const share = shares[i]!;
    if (u <= at + share || i === shares.length - 1) {
      const a = line(years[i]!);
      const b = line(years[i + 1]!);
      return a + ((u - at) / share) * (b - a);
    }
    at += share;
  }
  return line(years.at(-1)!);
}
