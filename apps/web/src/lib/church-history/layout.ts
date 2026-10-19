/**
 * Geometry of the church-history timeline. Pure functions, so they can be tested without a browser.
 *
 * Time runs left to right on a bent scale: the early centuries are compressed and the centuries of the
 * Reformation are stretched, so the many later divisions do not crowd each other. Each thread is a
 * horizontal line in its own lane; a branch leaves its parent's line with a smooth curve.
 */

export interface LayoutChurch {
  readonly id: string;
  readonly parent: string | null;
  readonly year: number;
  readonly lane: number;
  /** Churches in the same group are drawn together inside one band. */
  readonly group?: string;
}

export interface LayoutEvent {
  readonly year: number;
}

export interface LayoutOptions {
  readonly laneGap: number;
  /** Space left of the first year. */
  readonly left: number;
  /** Width of the time axis. */
  readonly plotWidth: number;
  /** Space right of the axis for the thread labels. */
  readonly labelWidth: number;
  readonly top: number;
  readonly bottom: number;
  /** Horizontal length of the curve where a branch leaves its parent. */
  readonly branchLength: number;
  readonly endYear: number;
}

export const DEFAULT_LAYOUT: LayoutOptions = {
  laneGap: 50,
  left: 44,
  plotWidth: 770,
  labelWidth: 190,
  top: 36,
  bottom: 150,
  branchLength: 56,
  endYear: 2026,
};

/** The bent time scale: [from year, to year, share of the axis]. */
const SEGMENTS: readonly (readonly [number, number, number])[] = [
  [33, 431, 0.12],
  [431, 1054, 0.24],
  [1054, 1500, 0.14],
  [1500, 2026, 0.5],
];

/** The horizontal position of a year, in the same units as `plotWidth` plus `left`. */
export function yearToX(year: number, options: LayoutOptions = DEFAULT_LAYOUT): number {
  const first = SEGMENTS[0]!;
  const last = SEGMENTS[SEGMENTS.length - 1]!;
  const clamped = Math.min(Math.max(year, first[0]), Math.max(last[1], options.endYear));
  let share = 0;
  for (const [from, to, portion] of SEGMENTS) {
    if (clamped <= to) return options.left + (share + (portion * (clamped - from)) / (to - from)) * options.plotWidth;
    share += portion;
  }
  return options.left + options.plotWidth;
}

export interface ThreadLayout {
  readonly id: string;
  readonly parent: string | null;
  /** Vertical position of the thread’s own line. */
  readonly y: number;
  /** Where the thread starts leaving its parent. */
  readonly branchX: number;
  /** Where its own horizontal line starts. */
  readonly lineStartX: number;
  readonly endX: number;
  /** The whole thread as one SVG path: the curve from the parent, then the line to the end. */
  readonly path: string;
  readonly labelX: number;
  readonly labelY: number;
}

/** The strip behind the lanes of one group of churches. */
export interface GroupBand {
  readonly group: string;
  readonly y0: number;
  readonly y1: number;
}

export interface TimelineLayout {
  readonly width: number;
  readonly height: number;
  readonly axisY: number;
  readonly threads: readonly ThreadLayout[];
  readonly bands: readonly GroupBand[];
  readonly ticks: readonly { readonly year: number; readonly x: number }[];
}

const round = (value: number): number => Math.round(value * 10) / 10;

export function layoutTimeline(
  churches: readonly LayoutChurch[],
  events: readonly LayoutEvent[],
  options: LayoutOptions = DEFAULT_LAYOUT,
): TimelineLayout {
  const lanes = churches.map((church) => church.lane);
  const highest = Math.min(0, ...lanes);
  const lowest = Math.max(0, ...lanes);
  const laneY = (lane: number): number => options.top + (lane - highest) * options.laneGap;
  const endX = options.left + options.plotWidth;

  const byId = new Map(churches.map((church) => [church.id, church]));
  const branchXs = new Map<string, number>();
  const resolveBranchX = (church: LayoutChurch): number => {
    const known = branchXs.get(church.id);
    if (known !== undefined) return known;
    let x = yearToX(church.year, options);
    if (church.parent !== null) {
      const parent = byId.get(church.parent);
      if (parent === undefined) throw new Error(`church-history: "${church.id}" has an unknown parent "${church.parent}"`);
      // A child leaves a parent only after the parent’s own curve has finished.
      x = Math.max(x, resolveBranchX(parent) + options.branchLength);
    }
    branchXs.set(church.id, x);
    return x;
  };

  const threads = churches.map((church): ThreadLayout => {
    const y = laneY(church.lane);
    const branchX = resolveBranchX(church);
    if (church.parent === null) {
      return {
        id: church.id,
        parent: null,
        y,
        branchX,
        lineStartX: branchX,
        endX,
        path: `M${round(branchX)} ${round(y)} H${round(endX)}`,
        labelX: round(endX + 10),
        labelY: round(y),
      };
    }
    const parent = byId.get(church.parent)!;
    const parentY = laneY(parent.lane);
    const lineStartX = branchX + options.branchLength;
    const middle = branchX + options.branchLength / 2;
    return {
      id: church.id,
      parent: church.parent,
      y,
      branchX,
      lineStartX,
      endX,
      path: `M${round(branchX)} ${round(parentY)} C${round(middle)} ${round(parentY)} ${round(middle)} ${round(y)} ${round(lineStartX)} ${round(y)} H${round(endX)}`,
      labelX: round(endX + 10),
      labelY: round(y),
    };
  });

  // Room above the first lane for the group's title, and room below the last for its label.
  const bandTop = options.laneGap / 2 + 6;
  const bandBottom = options.laneGap / 2 - 8;
  const spans = new Map<string, { min: number; max: number }>();
  for (const church of churches) {
    if (church.group === undefined) continue;
    const span = spans.get(church.group) ?? { min: church.lane, max: church.lane };
    spans.set(church.group, { min: Math.min(span.min, church.lane), max: Math.max(span.max, church.lane) });
  }
  const bands = [...spans.entries()]
    .map(([group, span]): GroupBand => ({ group, y0: round(laneY(span.min) - bandTop), y1: round(laneY(span.max) + bandBottom) }))
    .sort((a, b) => a.y0 - b.y0);

  return {
    width: options.left + options.plotWidth + options.labelWidth,
    height: laneY(lowest) + options.bottom,
    axisY: laneY(lowest) + 40,
    threads,
    bands,
    ticks: events.map((event) => ({ year: event.year, x: round(yearToX(event.year, options)) })),
  };
}

/** The ids of a thread and of everything it descends from, nearest first. */
export function ancestry(id: string, churches: readonly LayoutChurch[]): string[] {
  const byId = new Map(churches.map((church) => [church.id, church]));
  const chain: string[] = [];
  for (let current = byId.get(id); current !== undefined; current = current.parent === null ? undefined : byId.get(current.parent)) {
    chain.push(current.id);
  }
  return chain;
}

/** The ids of everything that descends from a thread, however far down. */
export function descendants(id: string, churches: readonly LayoutChurch[]): string[] {
  const found: string[] = [];
  const queue = [id];
  while (queue.length > 0) {
    const current = queue.shift()!;
    for (const church of churches) {
      if (church.parent === current) {
        found.push(church.id);
        queue.push(church.id);
      }
    }
  }
  return found;
}
