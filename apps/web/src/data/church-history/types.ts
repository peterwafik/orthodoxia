/** One text in both languages. The English page shows only `en`, the Arabic page only `ar`. */
export interface Bilingual {
  readonly en: string;
  readonly ar: string;
}

export interface BilingualList {
  readonly en: readonly string[];
  readonly ar: readonly string[];
}

/**
 * How a thread leaves its parent:
 * - `division`: a separation (a split, or a break in communion);
 * - `communion`: a church that took the same position at the same time and is in communion with its parent;
 * - `daughter`: a church founded from its parent, not a separation.
 */
export type ThreadKind = 'division' | 'communion' | 'daughter';

/** Churches close to each other in faith are grouped, and drawn together on the timeline. */
export type GroupId = 'oriental' | 'east' | 'chalcedonian' | 'reformation';

export interface ChurchGroup {
  readonly id: GroupId;
  readonly hue: number;
  readonly name: Bilingual;
  /** What the churches in the group have in common. */
  readonly note: Bilingual;
}

export interface Church {
  readonly id: string;
  readonly group: GroupId;
  /** The thread this one leaves; `null` for the trunk (the early church). */
  readonly parent: string | null;
  /** The year the thread leaves its parent. */
  readonly year: number;
  readonly kind: ThreadKind;
  /** Position on the diagram: 0 is the trunk, negative lanes are above it, positive lanes below it. */
  readonly lane: number;
  /** Colour hue (0 to 359) of the thread. The trunk uses the accent colour instead. */
  readonly hue: number;
  readonly name: Bilingual;
  /** The date or event, as it appears under the name. */
  readonly when: Bilingual;
  /** One sentence: what this church is. */
  readonly summary: Bilingual;
  /** Why the thread leaves its parent, in plain historical terms. */
  readonly reason: Bilingual;
  /** What changed in belief or practice compared with its parent. */
  readonly changes: BilingualList;
  /** Where the Coptic Orthodox Church holds a different view, written as the Coptic view. */
  readonly coptic: Bilingual;
}

/** A dated event drawn on the time axis. */
export interface HistoryEvent {
  readonly year: number;
  readonly label: Bilingual;
}
