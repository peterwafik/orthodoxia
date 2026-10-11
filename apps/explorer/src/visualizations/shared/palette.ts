import { GENRES, type GenreId } from '../../core/bible/genres.ts';
import type { Theme } from '../../shared/lib/theme.ts';

/** Background of every visualization in the dark theme (the site's navy). */
export const VIZ_SURFACE = '#0e1a33';

/** The neutral colors a visualization paints with, per theme (the site's palette). */
export interface VizColors {
  /** Genre colors, indexed by genre ordinal. */
  readonly genres: readonly string[];
  readonly surface: string;
  readonly text: string;
  readonly muted: string;
  readonly axis: string;
}

export const VIZ_COLORS: Readonly<Record<Theme, VizColors>> = {
  get dark(): VizColors {
    return {
      genres: genreHex('dark'),
      surface: VIZ_SURFACE,
      text: '#ede7d8',
      muted: '#aeb6c6',
      axis: '#2a3a60',
    };
  },
  get light(): VizColors {
    return {
      genres: genreHex('light'),
      surface: '#f5f1e6',
      text: '#1a2340',
      muted: '#4b5567',
      axis: '#d6ccb6',
    };
  },
};

/**
 * Genre colors for the dark surface, in canonical genre order: warm Old Testament, cool New
 * Testament.
 *
 * Validated with the dataviz skill's palette validator (`--mode dark --surface #0d0d0d`):
 * - lightness band and chroma floor pass;
 * - worst adjacent-genre CVD ΔE is 8.0 (target ≥ 8), and worst normal-vision ΔE is 15.3 (floor ≥ 15);
 * - every color has at least 4.19:1 contrast against the surface.
 *
 * Ten colors cannot all be pairwise distinct (the validator's all-pairs check caps at three),
 * so every visualization must also encode genre by position (genres are contiguous runs of
 * books) and by labels.
 */
export const GENRE_COLORS: Readonly<Record<GenreId, string>> = {
  law: '#eb568f',
  history: '#d5652d',
  poetry: '#b48f05',
  'major-prophets': '#d157a5',
  'minor-prophets': '#88a00d',
  gospels: '#17a7b4',
  acts: '#249b54',
  'pauline-epistles': '#0593e6',
  'general-epistles': '#03ac8f',
  revelation: '#a06aec',
};

export type Rgb = readonly [red: number, green: number, blue: number];

/** Converts `#rrggbb` into linear-light-agnostic sRGB channels in [0, 1]. */
export function hexToRgb(hex: string): Rgb {
  const match = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex);
  if (!match) {
    throw new Error(`Invalid hex color: ${hex}`);
  }
  const [, red = '0', green = '0', blue = '0'] = match;
  return [parseInt(red, 16) / 255, parseInt(green, 16) / 255, parseInt(blue, 16) / 255];
}

/** Genre colors as RGB channels, indexed by genre ordinal (for WebGL uniforms). */
export const GENRE_RGB: readonly Rgb[] = GENRES.map((genre) => hexToRgb(GENRE_COLORS[genre.id]));

/** Genre colors as hex strings, indexed by genre ordinal (for Canvas 2D). */
export const GENRE_HEX: readonly string[] = GENRES.map((genre) => GENRE_COLORS[genre.id]);

/**
 * The same genre colors for the light (ivory) surface: each deepened to 80% so it keeps at least
 * 3.8:1 contrast on ivory (the dark-surface colors fall to ~2.6:1 there), with unchanged hues.
 * Mirrored as `--genre-*` custom properties in global.css for HTML swatches.
 */
export const GENRE_COLORS_LIGHT: Readonly<Record<GenreId, string>> = {
  law: '#bc4572',
  history: '#aa5124',
  poetry: '#907204',
  'major-prophets': '#a74684',
  'minor-prophets': '#6d800a',
  gospels: '#128690',
  acts: '#1d7c43',
  'pauline-epistles': '#0476b8',
  'general-epistles': '#028a72',
  revelation: '#8055bd',
};

/** Genre colors for a theme, indexed by genre ordinal. */
export function genreHex(theme: Theme): readonly string[] {
  const colors = theme === 'light' ? GENRE_COLORS_LIGHT : GENRE_COLORS;
  return GENRES.map((genre) => colors[genre.id]);
}

export function genreRgb(theme: Theme): readonly Rgb[] {
  return genreHex(theme).map(hexToRgb);
}

/** A genre's color for HTML, following the page's theme (see `--genre-*` in global.css). */
export function genreCssColor(genre: GenreId): string {
  return `var(--genre-${genre})`;
}
