import { describe, expect, it } from 'vitest';
import { GENRES } from '../../core/bible/genres.ts';
import { GENRE_COLORS, GENRE_COLORS_LIGHT, genreHex, hexToRgb, VIZ_COLORS } from './palette.ts';

/** WCAG 2 contrast ratio between two `#rrggbb` colors. */
function contrast(a: string, b: string): number {
  const luminance = (hex: string) =>
    hexToRgb(hex)
      .map((channel) => (channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4))
      .reduce((sum, channel, index) => sum + channel * ([0.2126, 0.7152, 0.0722][index] ?? 0), 0);
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x) as [number, number];
  return (light + 0.05) / (dark + 0.05);
}

describe('genre palette', () => {
  it('keeps 4.5:1 contrast on the dark (navy) surface', () => {
    for (const genre of GENRES) {
      expect(contrast(GENRE_COLORS[genre.id], VIZ_COLORS.dark.surface)).toBeGreaterThanOrEqual(4.5);
    }
  });

  it('keeps at least 3.5:1 contrast on the light (ivory) surface', () => {
    for (const genre of GENRES) {
      expect(
        contrast(GENRE_COLORS_LIGHT[genre.id], VIZ_COLORS.light.surface),
      ).toBeGreaterThanOrEqual(3.5);
    }
  });

  it('gives each theme its own colors, in genre order', () => {
    expect(genreHex('dark')).toEqual(GENRES.map((genre) => GENRE_COLORS[genre.id]));
    expect(genreHex('light')).toEqual(GENRES.map((genre) => GENRE_COLORS_LIGHT[genre.id]));
  });

  it('keeps theme text readable on its surface', () => {
    for (const theme of ['light', 'dark'] as const) {
      const { text, muted, surface } = VIZ_COLORS[theme];
      expect(contrast(text, surface)).toBeGreaterThanOrEqual(7);
      expect(contrast(muted, surface)).toBeGreaterThanOrEqual(4.5);
    }
  });
});
