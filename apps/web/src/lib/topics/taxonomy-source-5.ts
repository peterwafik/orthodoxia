import { COMPARE_POINTS } from '../../data/church-history/compare.ts';
import { COPTIC_EVIDENCE, EVIDENCE_FAMILY } from '../../data/coptic-evidence.ts';

/**
 * Family 44, in the taxonomy's text format: how the Coptic Orthodox Church supports each point of its faith
 * (the points of the church-history comparison that have evidence). Built from `data/coptic-evidence.ts`, so the
 * list of points and their names are written once.
 */
export const TAXONOMY_5 = [
  `# ${EVIDENCE_FAMILY.id} | ${EVIDENCE_FAMILY.en} | ${EVIDENCE_FAMILY.ar}`,
  ...COPTIC_EVIDENCE.map((entry) => {
    const point = COMPARE_POINTS.find((candidate) => candidate.id === entry.point);
    if (point === undefined) throw new Error(`coptic-evidence: unknown point "${entry.point}"`);
    return `- ${point.label.en} | ${point.label.ar}`;
  }),
].join('\n');
