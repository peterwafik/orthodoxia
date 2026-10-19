import { COMPARE_POINTS } from '../../../data/church-history/compare.ts';
import { COPTIC_EVIDENCE } from '../../../data/coptic-evidence.ts';
import type { FamilyMap } from './types.ts';

/** 44. The Coptic Orthodox faith in Scripture and the early witnesses: the verses cited for each point of faith. */
export const F44: FamilyMap = {
  nave: {},
  passages: Object.fromEntries(
    COPTIC_EVIDENCE.map((entry) => [COMPARE_POINTS.find((point) => point.id === entry.point)!.label.en, entry.verses]),
  ),
};
