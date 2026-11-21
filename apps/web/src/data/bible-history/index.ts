import type { CorePerson, Evidence } from './types.ts';
import { CORE_PRIMEVAL } from './primeval.ts';
import { CORE_PATRIARCHS } from './core-patriarchs.ts';
import { CORE_KINGS } from './core-kings.ts';
import { CORE_BETWEEN, CORE_NT } from './core-nt.ts';
import { EVIDENCE } from './evidence.ts';

/** Everyone written by hand, oldest first by file. */
export const CORE: readonly CorePerson[] = [...CORE_PRIMEVAL, ...CORE_PATRIARCHS, ...CORE_KINGS, ...CORE_BETWEEN, ...CORE_NT];
export const CORE_BY_KEY: ReadonlyMap<string, CorePerson> = new Map(CORE.map((person) => [person.key, person]));
export { EVIDENCE };
export const EVIDENCE_BY_ID: ReadonlyMap<string, Evidence> = new Map(EVIDENCE.map((item) => [item.id, item]));
