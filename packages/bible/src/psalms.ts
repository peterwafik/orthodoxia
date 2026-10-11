/**
 * Psalm numbering. The Septuagint (LXX), which the Coptic Orthodox Church follows (e.g. in the
 * Agpeya), numbers most psalms one lower than the Hebrew numbering used by the Van Dyck Arabic and
 * the KJV:
 *
 *   Hebrew 1–8     = LXX 1–8
 *   Hebrew 9–10    = LXX 9
 *   Hebrew 11–113  = LXX 10–112
 *   Hebrew 114–115 = LXX 113
 *   Hebrew 116     = LXX 114–115
 *   Hebrew 117–146 = LXX 116–145
 *   Hebrew 147     = LXX 146–147
 *   Hebrew 148–150 = LXX 148–150
 *   LXX 151 has no Hebrew counterpart.
 *
 * These are chapter-level correspondences; verse numbers also differ where a psalm title is
 * numbered as verse 1 in the LXX. Used for linking between editions, not for verse alignment.
 */

/** The Hebrew-numbered psalm(s) a Septuagint psalm corresponds to. */
export function lxxToHebrew(lxx: number): number[] {
  if (lxx >= 1 && lxx <= 8) return [lxx];
  if (lxx === 9) return [9, 10];
  if (lxx >= 10 && lxx <= 112) return [lxx + 1];
  if (lxx === 113) return [114, 115];
  if (lxx === 114 || lxx === 115) return [116];
  if (lxx >= 116 && lxx <= 145) return [lxx + 1];
  if (lxx === 146 || lxx === 147) return [147];
  if (lxx >= 148 && lxx <= 150) return [lxx];
  return [];
}

/** The Septuagint-numbered psalm(s) a Hebrew-numbered psalm corresponds to. */
export function hebrewToLxx(hebrew: number): number[] {
  if (hebrew >= 1 && hebrew <= 8) return [hebrew];
  if (hebrew === 9 || hebrew === 10) return [9];
  if (hebrew >= 11 && hebrew <= 113) return [hebrew - 1];
  if (hebrew === 114 || hebrew === 115) return [113];
  if (hebrew === 116) return [114, 115];
  if (hebrew >= 117 && hebrew <= 146) return [hebrew - 1];
  if (hebrew === 147) return [146, 147];
  if (hebrew >= 148 && hebrew <= 150) return [hebrew];
  return [];
}

export type PsalmNumbering = 'hebrew' | 'lxx';

/** Converts a psalm number between numberings, taking the first match. */
export function convertPsalm(number: number, from: PsalmNumbering, to: PsalmNumbering): number | undefined {
  if (from === to) return number;
  return (from === 'lxx' ? lxxToHebrew(number) : hebrewToLxx(number))[0];
}
