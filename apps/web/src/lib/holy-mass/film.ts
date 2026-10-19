/**
 * The film behind the Holy Mass journey: five "dive" clips (one per chapter) joined by "link" clips
 * that fly from one scene to the next. Scrolling the prayer panel moves through this timeline.
 *
 * A stop position is fractional: 3.5 is halfway between the fourth and the fifth stop. While the
 * reader is inside a chapter the dive of that chapter plays from its first frame to its last; between
 * the last stop of a chapter and the first stop of the next, the link plays. A chapter without a link
 * clip dissolves straight into the next dive.
 */
export interface ChapterRange {
  /** Index of the chapter's first stop. */
  readonly first: number;
  /** Index of the chapter's last stop. */
  readonly last: number;
}

export interface FilmFrame {
  readonly clip: string;
  /** Position within the clip, 0 to 1. */
  readonly t: number;
  /** A second clip dissolving in over the first (only where two dives meet without a link). */
  readonly next?: { readonly clip: string; readonly t: number; readonly mix: number };
}

export const dive = (chapter: number) => `dive-${chapter}`;
export const link = (chapter: number) => `link-${chapter}`;

/** Every clip in the order it is met, so the neighbours of the current one can be fetched early. */
export function clipOrder(chapters: number, links: ReadonlySet<number>): string[] {
  const order: string[] = [];
  for (let chapter = 1; chapter <= chapters; chapter++) {
    order.push(dive(chapter));
    if (chapter < chapters && links.has(chapter)) order.push(link(chapter));
  }
  return order;
}

const clamp = (value: number) => Math.min(1, Math.max(0, value));

/**
 * @param position fractional stop index
 * @param ranges the first and last stop of each chapter, in order
 * @param links the chapters that have a link clip to the chapter after them (1-based)
 */
export function filmAt(position: number, ranges: readonly ChapterRange[], links: ReadonlySet<number>): FilmFrame {
  const count = ranges.length;
  if (count === 0) return { clip: dive(1), t: 0 };
  for (let index = 0; index < count; index++) {
    const { first, last } = ranges[index]!;
    if (position > last && index < count - 1) continue;
    if (position >= first || index === 0) {
      const t = last === first ? (position > last ? 1 : 0) : clamp((position - first) / (last - first));
      return { clip: dive(index + 1), t };
    }
    // Between the previous chapter's last stop and this chapter's first.
    const before = ranges[index - 1]!;
    const gap = clamp((position - before.last) / (first - before.last));
    if (links.has(index)) return { clip: link(index), t: gap };
    return { clip: dive(index), t: 1, next: { clip: dive(index + 1), t: 0, mix: gap } };
  }
  return { clip: dive(count), t: 1 };
}

/** The chapter (0-based) whose scene is nearest to a position, used for the still and the caption. */
export function sceneAt(position: number, ranges: readonly ChapterRange[]): number {
  let best = 0;
  let bestDistance = Infinity;
  ranges.forEach(({ first, last }, index) => {
    const distance = position < first ? first - position : position > last ? position - last : 0;
    if (distance < bestDistance) {
      best = index;
      bestDistance = distance;
    }
  });
  return best;
}
