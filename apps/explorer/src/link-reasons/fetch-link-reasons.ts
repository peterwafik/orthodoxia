// Orthodoxia: downloads the link reasons in the browser (kept apart from link-reasons.ts, which Node
// scripts also use).

import { fetchDataset } from '../shared/lib/fetch-dataset.ts';
import { LINK_REASONS_PATH, type LinkReasonsFile } from './format.ts';

/** Downloads the reasons file (checked against the links when a `LinkReasons` is built from it). */
export async function fetchLinkReasons(): Promise<LinkReasonsFile> {
  const { json } = await fetchDataset(LINK_REASONS_PATH);
  const file = json as Partial<LinkReasonsFile> | null;
  if (file?.format !== 'link-reasons' || typeof file.kinds !== 'string') {
    throw new Error(`"${LINK_REASONS_PATH}" is not a link reasons file.`);
  }
  return file as LinkReasonsFile;
}
