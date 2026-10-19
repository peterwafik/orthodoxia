/**
 * What the reader chose about the look of the text: its size. (The language is the page's language:
 * /en/ shows English only and /ar/ shows Arabic only.) Saved in the browser as a small JSON string; a
 * missing or damaged value falls back to the middle size.
 */
export type TextSize = 'small' | 'medium' | 'large';
const SIZES: readonly TextSize[] = ['small', 'medium', 'large'];

export interface Reading {
  readonly size: TextSize;
}

export const READING_KEY = 'orthodoxia:holy-mass:reading';

export const defaultReading = (): Reading => ({ size: 'medium' });

export function parseReading(raw: string | null): Reading {
  if (raw === null) return defaultReading();
  try {
    const value = JSON.parse(raw) as { size?: unknown } | null;
    const size = SIZES.find((candidate) => candidate === value?.size);
    return size === undefined ? defaultReading() : { size };
  } catch {
    return defaultReading();
  }
}

export const serializeReading = (reading: Reading): string => JSON.stringify({ size: reading.size });

export function stepSize(reading: Reading, direction: -1 | 1): Reading {
  const index = Math.min(SIZES.length - 1, Math.max(0, SIZES.indexOf(reading.size) + direction));
  return { size: SIZES[index]! };
}
