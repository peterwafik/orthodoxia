/**
 * The content model of Faith & Evidence (/apologetics). Records are validated by `apologetics.test.ts`: a published
 * article needs a named human reviewer and a review date, every citation must resolve to a source in `sources.ts`, and
 * a source whose full text has not been reviewed can never be shown as if it had been.
 */

/** A bilingual single line. */
export interface Line {
  readonly en: string;
  readonly ar: string;
}

/** Bilingual paragraphs. Both languages carry the same number of paragraphs. */
export interface Paras {
  readonly en: readonly string[];
  readonly ar: readonly string[];
}

export type Locale = 'en' | 'ar';

/** What kind of argument a claim or article makes. Stored separately from the assessment. */
export type ArgumentType = 'historical' | 'philosophical' | 'textual' | 'theological' | 'archaeological' | 'scientific';

/**
 * How well the evidence supports a claim. `philosophical_argument` and `theological_interpretation` are categories of
 * reasoning, not low confidence scores. `pending_review` means no human has assessed it yet.
 */
export type Assessment =
  | 'strong_historical_support'
  | 'supported_disputed_details'
  | 'actively_debated'
  | 'limited_evidence'
  | 'philosophical_argument'
  | 'theological_interpretation'
  | 'pending_review';

/** What a source is, so a storefront or a review is never mistaken for the work. */
export type SourceKind =
  | 'primary_text'
  | 'edition_host'
  | 'scholarly_book'
  | 'scholarly_article'
  | 'reference_work'
  | 'museum_record'
  | 'manuscript_project'
  | 'research_guide'
  | 'review'
  | 'catalogue'
  | 'storefront'
  | 'sermon_collection'
  | 'apologetic_site'
  | 'institution';

/** Whose voice the source is, where that is documented. */
export type Standpoint =
  | 'ancient_non_christian'
  | 'ancient_christian'
  | 'modern_christian'
  | 'modern_non_christian_scholar'
  | 'modern_scholar_unspecified'
  | 'institutional'
  | 'not_established';

export type AccessState =
  | 'full_text'
  | 'excerpt_only'
  | 'abstract_only'
  | 'metadata_only'
  | 'paywalled'
  | 'awaiting_copy'
  | 'unavailable';

export type ReviewState =
  | 'discovered'
  | 'metadata_verified'
  | 'acquired'
  | 'extracted'
  | 'fact_checked'
  | 'theological_reviewed'
  | 'language_reviewed'
  | 'published'
  | 'needs_review';

export type LinkStatus = 'not_checked' | 'ok' | 'redirected' | 'blocked' | 'failed';

export type SourceGroup =
  | 'ancient_witness'
  | 'jesus_gospels'
  | 'resurrection_devotion'
  | 'manuscripts_canon'
  | 'archaeology'
  | 'philosophy_science'
  | 'patristic_coptic';

export interface SourceWork {
  /** `S01`…`S61` for the seed catalogue. */
  readonly id: string;
  readonly group: SourceGroup;
  readonly title: string;
  /** The author or institution, as the source names it. */
  readonly author: string;
  /** The locator or sub-part this record points at (Annals 15.44, Book I, volume I), if any. */
  readonly locator?: string;
  readonly kind: SourceKind;
  readonly standpoint: Standpoint;
  /** What the standpoint rests on, or why it is "not established". */
  readonly standpointNote?: string;
  readonly url: string;
  readonly access: AccessState;
  readonly review: ReviewState;
  /** Composition date or range, with its basis. Never a precise year the evidence does not give. */
  readonly composed?: string;
  /** The rights position of what the site may show. */
  readonly rights: string;
  /** What this source is for, and what it cannot be used for. */
  readonly use: Line;
  /** Entries that are the same underlying testimony as another (Tacitus on two hosts). */
  readonly sameWitnessAs?: string;
  /** The result of the link check (scripts/apologetics/check-links.ts). */
  readonly link: { readonly status: LinkStatus; readonly checked?: string; readonly note?: string };
}

export type EvidenceRole = 'supports' | 'challenges' | 'context';

/** One citation inside an article: a source, where in it, what it says, and how the site infers from it. */
export interface Evidence {
  readonly id: string;
  readonly sourceId: string;
  /** The exact locator (Annals 15.44; 1 Cor 15:3–7; ch. 2). Page numbers only when verified. */
  readonly locator: string;
  readonly role: EvidenceRole;
  /** What the passage itself states, in the site's own words (no unverified quotation). */
  readonly states: Line;
  /** What the site infers from it, kept apart from what the passage states. */
  readonly inference: Line;
  /** Dependence on other evidence (e.g. two hosts, one witness), if any. */
  readonly dependence?: Line;
  /** A Bible reference the reader can open in the site's reader. `book` is the reader's slug, e.g. `1-corinthians`. */
  readonly bible?: { readonly book: string; readonly chapter: number; readonly verse?: string };
}

export interface Claim {
  readonly id: string;
  readonly proposition: Line;
  readonly argumentType: ArgumentType;
  readonly assessment: Assessment;
  readonly rationale: Line;
  readonly limits: Line;
  /** Evidence ids in this article that bear on the claim. */
  readonly evidence: readonly string[];
}

export interface Objection {
  readonly id: string;
  /** Stated fairly, as its proponents would recognise it. */
  readonly statement: Line;
  readonly response: Paras;
  /** What the response does not settle. */
  readonly limits: Line;
  readonly evidence?: readonly string[];
}

export interface Correction {
  readonly date: string;
  readonly note: Line;
}

export type PublicationState = 'backlog' | 'draft' | 'in_review' | 'published' | 'withdrawn';

export interface Reviewer {
  readonly name: string;
  readonly role: string;
  readonly date: string;
}

export interface Article {
  readonly id: string;
  /** The question this answers (questions.ts). */
  readonly questionId: string;
  readonly state: PublicationState;
  readonly revision: number;
  /** ISO date of this revision. */
  readonly updated: string;
  /** Who wrote it. Drafts written with AI assistance say so. */
  readonly author: string;
  /** Required before `state` may be `published`. */
  readonly reviewers: readonly Reviewer[];
  readonly corrections: readonly Correction[];

  readonly scope: Line;
  readonly shortAnswer: Line;
  readonly argumentTypes: readonly ArgumentType[];
  /** The explained assessment of the article as a whole. */
  readonly assessment: { readonly label: Assessment; readonly explanation: Line };
  readonly whyExamine: Paras;
  readonly background: Paras;
  readonly glossary: readonly string[];
  readonly claims: readonly Claim[];
  readonly evidence: readonly Evidence[];
  readonly objections: readonly Objection[];
  /** Christian responses; historical inference kept apart from theology. */
  readonly christianResponse: { readonly historical: Paras; readonly theological: Paras };
  /** The Coptic Orthodox explanation, where the question calls for one. */
  readonly coptic: Paras | null;
  readonly disputed: Paras;
  readonly conclusion: Line;
  /** Quick-answer bullet points (the "Quick answer" view). */
  readonly quickPoints: { readonly en: readonly string[]; readonly ar: readonly string[] };
  readonly furtherReading: readonly string[];
  readonly related: readonly string[];
}

export interface Topic {
  readonly id: string;
  readonly slug: string;
  readonly letter: string;
  readonly title: Line;
  readonly description: Line;
}

export type Difficulty = 'introductory' | 'intermediate' | 'advanced';

/** A question in the backlog. Having a record here is not having an answer. */
export interface Question {
  readonly id: string;
  readonly topic: string;
  readonly slug: string;
  readonly title: Line;
  readonly difficulty: Difficulty;
  readonly argumentTypes: readonly ArgumentType[];
  /** Source ids that look relevant. Leads only, until an article cites them. */
  readonly leads: readonly string[];
  /** Why there is no article yet, when there is none. */
  readonly blocker?: Line;
}

export interface GlossaryTerm {
  readonly id: string;
  readonly term: Line;
  readonly definition: Line;
  readonly aliases: readonly string[];
}

export type StartingPoint = 'no-god' | 'god-not-religion' | 'other-religion' | 'unsure' | 'christian-questions' | 'studying';

export interface JourneyStep {
  readonly title: Line;
  /** A question id, or a page (`methodology`, `timeline`, `sources`). */
  readonly target: string;
  readonly note: Line;
}

export interface Journey {
  readonly id: string;
  readonly slug: string;
  readonly title: Line;
  readonly summary: Line;
  readonly startingPoints: readonly StartingPoint[];
  readonly steps: readonly JourneyStep[];
}

export type TimelineKind = 'event' | 'composition' | 'witness';

export interface TimelineEntry {
  readonly id: string;
  readonly kind: TimelineKind;
  /** Sort key: a year, negative for BC. Ranges use their start. */
  readonly sort: number;
  readonly when: Line;
  readonly basis: Line;
  readonly title: Line;
  readonly note: Line;
  readonly sources: readonly string[];
}
