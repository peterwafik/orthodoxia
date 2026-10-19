/** Fetches the texts of one liturgy. Any failure gives null, and the page keeps its draft summaries. */
import type { LiturgyJson } from '../liturgy/build-core.ts';
import type { LiturgyId } from '../liturgy/resolve.ts';

export async function loadLiturgy(id: LiturgyId, fetchFn: typeof fetch = fetch): Promise<LiturgyJson | null> {
  try {
    const response = await fetchFn(`/liturgy/${id}.json`);
    if (!response.ok) return null;
    const data = (await response.json()) as Partial<LiturgyJson> | null;
    if (data === null || typeof data !== 'object' || typeof data.stops !== 'object' || data.stops === null) return null;
    return data as LiturgyJson;
  } catch {
    return null;
  }
}
