import { ContentSource } from '@orthodoxia/content-schema';
import { parse } from 'yaml';

/**
 * The source registry (`content/sources/*.yaml`), parsed and validated at build time. An invalid
 * entry fails the build here as well as in `scripts/validate-content.ts`.
 */
const files = import.meta.glob<string>('../../../../content/sources/*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export const SOURCES: readonly ContentSource[] = Object.entries(files)
  .map(([path, raw]) => {
    const result = ContentSource.safeParse(parse(raw));
    if (!result.success) {
      throw new Error(`Invalid source registry entry ${path}: ${result.error.message}`);
    }
    return result.data;
  })
  .sort((a, b) => a.title.localeCompare(b.title, 'en'));

export function getSource(id: string): ContentSource {
  const source = SOURCES.find((candidate) => candidate.id === id);
  if (source === undefined) throw new Error(`Unknown source "${id}"`);
  return source;
}

/** Sources the published site uses today, in the order their credits appear. */
export const CREDITED_SOURCES = SOURCES.filter((source) => source.inUse);

export const LICENSE_LABELS: Readonly<Record<ContentSource['license']['id'], string>> = {
  'public-domain': 'Public domain',
  'CC-BY-4.0': 'CC BY 4.0',
  'CC-BY-SA-4.0': 'CC BY-SA 4.0',
  MIT: 'MIT',
  GPL: 'GPL',
  custom: 'Custom license',
  'all-rights-reserved': 'All rights reserved',
  unknown: 'Unknown',
};
