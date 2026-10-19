import { parseTaxonomy } from './taxonomy.ts';
import { TAXONOMY_TEXT } from './taxonomy-source.ts';

/** The parsed taxonomy: families of topics, each with its subtopics. */
export const FAMILIES = parseTaxonomy(TAXONOMY_TEXT);
