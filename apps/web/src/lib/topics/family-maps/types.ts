/**
 * Where the verses of a family's subtopics come from. Keys are the English names of the subtopics.
 *
 *  nave      a selector into Nave's Topical Bible (see ../nave-select.ts): "MERCY", "GOD>LOVE OF; PITY"
 *  passages  passages listed by hand, only where they are well known and unmistakable ("John 15:12–13; 1 John 3:16")
 */
export interface FamilyMap {
  readonly nave: Readonly<Record<string, string>>;
  readonly passages: Readonly<Record<string, string>>;
}
