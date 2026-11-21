/**
 * The content model of the Bible history chart (/bible-history).
 *
 * Every man and woman the Bible names comes from STEPBible's TIPNR (data/bible-people/people.json, built by
 * scripts/bible-people/build.ts) and is placed on the chart. The people in `core-*.ts` are written by hand: their dates,
 * how those dates are known, a summary in both languages, and the evidence outside the Bible that names them
 * (`evidence.ts`). Everyone else is placed from their family and the period TIPNR gives, and the chart says so.
 * Checked by `bible-history.test.ts`.
 */
import type { Bilingual } from '../church-history/types.ts';

export type { Bilingual };

/**
 * How a person's dates are known:
 * - `text`: counted from the Bible's own numbers (ages at the birth of a son, years of a reign, of a sojourn);
 * - `reign`: regnal years of the kings of Israel and Judah, fixed against Assyrian and Babylonian records (E. R. Thiele's
 *   chronology, as revised by later scholars), so usually right within a year or two;
 * - `record`: fixed by records outside the Bible (Assyrian, Babylonian, Persian and Roman kings, governors, high priests);
 * - `scholarly`: an approximate date that historians give, where the Bible gives no numbers;
 * - `tradition`: a date the Church's tradition gives (e.g. the martyrdom of an apostle);
 * - `estimate`: placed by the chart from the person's family and period (never written by hand).
 */
export type DateBasis = 'text' | 'reign' | 'record' | 'scholarly' | 'tradition' | 'estimate';

/** A span of office: a reign, a judgeship, a high priesthood, a ministry. */
export interface Office {
  readonly from: number;
  readonly to: number;
  readonly title: Bilingual;
}

/**
 * A person written by hand. Years are whole numbers: negative is BC, positive is AD (there is no year 0, so -1 is 1 BC).
 * Give what is known: `born` and `died` when the Bible or history gives them (or approximately, with `approx`), and an
 * `office` when the person held one. At least one of them is required.
 */
export interface CorePerson {
  /** The TIPNR key ("Aaron@Exo.4.14-Heb"), or "x:<slug>" for a person TIPNR does not list (the deuterocanon, emperors…). */
  readonly key: string;
  readonly name: Bilingual;
  readonly born?: number;
  readonly died?: number;
  readonly office?: Office;
  /** The dates are approximate (shown with "c."). */
  readonly approx?: true;
  readonly basis: DateBasis;
  /** How the dates were reached, or where scholars differ. */
  readonly dating?: Bilingual;
  /** A few words: "King of Judah", "Prophet in the reign of Hezekiah". */
  readonly role: Bilingual;
  /** One to three sentences. */
  readonly summary: Bilingual;
  /** Where the Bible tells of the person, read by `parsePassages` ("2 Kings 18–20; Isaiah 36–39"). */
  readonly refs: string;
  /** Questions in Faith & Evidence that bear on this person (article ids). */
  readonly questions?: readonly string[];
  /** For an "x:" person: the TIPNR key or "x:" key of a parent, so the chart can place the line. */
  readonly parent?: string;
  /** For an "x:" person with no parent: the line to draw them in. */
  readonly line?: LineId;
}

/**
 * The lines the chart colours, as the descendants of Noah's sons are coloured on the old printed charts, with the line
 * of promise (Adam to Christ in Luke 3 and Matthew 1) drawn in gold and the people of Israel apart from the other
 * descendants of Shem. Worked out from the family links; `nations` is for people whose descent the Bible does not give.
 */
export type LineId = 'promise' | 'seth' | 'cain' | 'israel' | 'shem' | 'ham' | 'japheth' | 'nations';

/** How sure scholars are that the object names the person of the Bible. */
export type EvidenceCertainty = 'certain' | 'probable' | 'debated';

export type EvidenceKind = 'inscription' | 'seal' | 'record' | 'historian' | 'artifact' | 'manuscript';

export interface EvidenceLink {
  readonly title: string;
  readonly url: string;
}

/** An object or ancient writing outside the Bible that names a person of the Bible. */
export interface Evidence {
  readonly id: string;
  readonly title: Bilingual;
  readonly kind: EvidenceKind;
  /** When it was made or written: "c. 840 BC". */
  readonly date: Bilingual;
  /** Where and when it was found. */
  readonly found?: Bilingual;
  /** Where it is kept now. */
  readonly now?: Bilingual;
  /** What it says about the person, in plain words (a short quotation in translation where useful). */
  readonly says: Bilingual;
  readonly certainty: EvidenceCertainty;
  /** Caveats: what the object does not show, readings scholars dispute, forgeries ruled out. */
  readonly note?: Bilingual;
  /** The people it names (TIPNR or "x:" keys, all of which must be in the core lists). */
  readonly people: readonly string[];
  /** Where to read more: museum pages, scholarly articles. */
  readonly links: readonly EvidenceLink[];
  /** A question in Faith & Evidence that discusses it (article id). */
  readonly question?: string;
}
