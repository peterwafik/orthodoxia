/**
 * The content model of the Bible atlas (/bible-atlas). Places and journeys are written by hand and checked by
 * `bible-atlas.test.ts`: every passage must parse and exist in the Bible reader, every journey must name known places.
 * Places the Bible names beyond these come from OpenBible.info's geocoding data (`data/atlas/places.json`).
 */
import type { Bilingual } from '../church-history/types.ts';

export type { Bilingual };

export type EraId = 'primeval' | 'patriarchs' | 'exodus' | 'kingdom' | 'exile' | 'christ' | 'apostles';

export interface Era {
  readonly id: EraId;
  /** A hue (degrees) for markers of this period. */
  readonly hue: number;
  readonly name: Bilingual;
  /** An approximate span, never a precise date where scholars disagree. */
  readonly span: Bilingual;
}

/**
 * How firmly the site can be placed on the map:
 * `secure` – the site is known; `probable` – the usual identification, though scholars differ;
 * `tradition` – a traditional or disputed site, or one the Church places by tradition rather than the text.
 */
export type Certainty = 'secure' | 'probable' | 'tradition';

export type PlaceKind = 'city' | 'mountain' | 'water' | 'region' | 'site';

/** One thing that happened at a place, with the passage(s) that tell it (read by `parsePassages`). */
export interface PlaceEvent {
  readonly title: Bilingual;
  readonly ref: string;
  /** True when the event rests on Church tradition rather than on the text of Scripture. */
  readonly trad?: true;
}

export interface AtlasPlace {
  readonly id: string;
  readonly lat: number;
  readonly lon: number;
  readonly kind: PlaceKind;
  readonly era: readonly EraId[];
  readonly certainty: Certainty;
  readonly name: Bilingual;
  /** What the place is called or where it lies today. */
  readonly modern?: Bilingual;
  readonly summary: Bilingual;
  readonly events: readonly PlaceEvent[];
  /** Why the site is uncertain, when it is. */
  readonly note?: Bilingual;
  /** OpenBible.info place ids this place stands for (their dots are hidden, and their verse counts shown). */
  readonly ob?: readonly string[];
  /** Questions in Faith & Evidence that bear on this place (their ids). */
  readonly evidence?: readonly string[];
}

export interface Stop {
  readonly place: string;
  /** The passage that has the person at this place. */
  readonly ref: string;
  /** What happens on this leg, when the passage alone does not say. */
  readonly text?: Bilingual;
  /** The leg that arrives here rests on tradition, not on the text: it is drawn dashed. */
  readonly trad?: true;
}

export interface Journey {
  readonly id: string;
  readonly era: EraId;
  readonly person: Bilingual;
  readonly title: Bilingual;
  readonly hue: number;
  readonly certainty: Certainty;
  readonly summary: Bilingual;
  readonly stops: readonly Stop[];
  /** What the lines mean here: which parts are text, which tradition, what is simplified. */
  readonly note?: Bilingual;
}
