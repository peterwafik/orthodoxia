import { elementAt } from '../../core/lib/array.ts';
import type { CrossReferenceIndex } from '../../cross-references/cross-reference-index.ts';
import { voteWeight } from '../shared/vote-weight.ts';

/** Per-arc GPU attributes, one entry per link. */
export interface ArcInstances {
  readonly count: number;
  /** Source and target positions on the axis, in continuous verse units (centers). */
  readonly endpoints: Float32Array;
  /** Genre ordinals of the source and the target. */
  readonly genres: Float32Array;
  /** Brightness in [0.2, 1], growing with community votes. */
  readonly weights: Float32Array;
}

export function buildArcInstances(
  index: CrossReferenceIndex,
  linkIds: ArrayLike<number>,
  verseGenres: Uint8Array,
): ArcInstances {
  const count = linkIds.length;
  const endpoints = new Float32Array(count * 2);
  const genres = new Float32Array(count * 2);
  const weights = new Float32Array(count);
  for (let i = 0; i < count; i += 1) {
    const id = elementAt(linkIds, i);
    const source = elementAt(index.sources, id);
    const targetStart = elementAt(index.targetStarts, id);
    const targetEnd = elementAt(index.targetEnds, id);
    endpoints[i * 2] = source + 0.5;
    endpoints[i * 2 + 1] = (targetStart + targetEnd + 1) / 2;
    genres[i * 2] = elementAt(verseGenres, source);
    genres[i * 2 + 1] = elementAt(verseGenres, targetStart);
    weights[i] = voteWeight(elementAt(index.votes, id));
  }
  return { count, endpoints, genres, weights };
}

/**
 * Orthodoxia: arcs of links given by their ends, for links that are not in the cross-reference
 * index (the prophecies and symbols of Christ), at full brightness. With `color`, every arc takes
 * that palette entry instead of its genres (the gold of Christ's links).
 */
export function buildArcInstancesOf(
  links: readonly {
    readonly from: number;
    readonly targetStart: number;
    readonly targetEnd: number;
  }[],
  verseGenres: Uint8Array,
  color?: number,
): ArcInstances {
  const count = links.length;
  const endpoints = new Float32Array(count * 2);
  const genres = new Float32Array(count * 2);
  links.forEach((link, i) => {
    endpoints[i * 2] = link.from + 0.5;
    endpoints[i * 2 + 1] = (link.targetStart + link.targetEnd + 1) / 2;
    genres[i * 2] = color ?? elementAt(verseGenres, link.from);
    genres[i * 2 + 1] = color ?? elementAt(verseGenres, link.targetStart);
  });
  return { count, endpoints, genres, weights: new Float32Array(count).fill(1) };
}

/** Orthodoxia: two sets of arcs as one. */
export function joinArcInstances(a: ArcInstances, b: ArcInstances): ArcInstances {
  const join = (x: Float32Array, y: Float32Array) => {
    const joined = new Float32Array(x.length + y.length);
    joined.set(x);
    joined.set(y, x.length);
    return joined;
  };
  return {
    count: a.count + b.count,
    endpoints: join(a.endpoints, b.endpoints),
    genres: join(a.genres, b.genres),
    weights: join(a.weights, b.weights),
  };
}
