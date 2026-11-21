/**
 * The list of reading plans (content/plans/plans.yaml), without the blocks: small enough for the site header and the
 * command palette to ask whether any plan is live. A plan is live when the owner has set `live: true`; a build run
 * with PLANS_PREVIEW=1 treats every plan as live, so the owner can read plans before they are published.
 */
import { PlansFile, type Plan } from '@orthodoxia/content-schema';
import { parse } from 'yaml';

const files = import.meta.glob<string>('../../../../../content/plans/plans.yaml', { query: '?raw', import: 'default', eager: true });
const text = Object.values(files)[0];
if (text === undefined) throw new Error('content/plans/plans.yaml is missing');
const result = PlansFile.safeParse(parse(text));
if (!result.success) throw new Error(`Invalid content/plans/plans.yaml: ${result.error.message}`);

export const PLANS_PREVIEW = typeof process !== 'undefined' && process.env['PLANS_PREVIEW'] === '1';
export const PLANS: readonly Plan[] = result.data.plans;
export const LIVE_PLANS: readonly Plan[] = PLANS.filter((plan) => plan.live || (PLANS_PREVIEW && (plan.days.length > 0 || plan.kind === 'church-year')));
export const planById = (id: string): Plan | undefined => PLANS.find((plan) => plan.id === id);
