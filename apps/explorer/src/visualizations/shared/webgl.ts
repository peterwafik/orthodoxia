import { Color, Vector3, WebGLRenderer } from 'three';
import { MAX_PIXEL_RATIO } from './frames.ts';
import type { Theme } from '../../shared/lib/theme.ts';
import { genreRgb, GENRE_RGB, hexToRgb, VIZ_COLORS, VIZ_SURFACE } from './palette.ts';

/** Orthodoxia: the palette index of the gold used for the prophecies and symbols of Christ. */
export const GOLD_PALETTE_INDEX = GENRE_RGB.length;

/**
 * The gold of Christ's arcs, per theme: brighter than the text accent, so the arcs stand apart from
 * the brown and olive genre colors.
 */
const ARC_GOLD: Readonly<Record<Theme, string>> = { light: '#e0a800', dark: '#f2c94c' };

export function createRenderer(canvas: HTMLCanvasElement): WebGLRenderer {
  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, MAX_PIXEL_RATIO));
  renderer.setClearColor(new Color(VIZ_SURFACE), 1);
  return renderer;
}

/** Genre palette, then the gold of Christ's links, as a `vec3[11]` uniform value. */
export function genrePaletteUniform(): Vector3[] {
  return [...GENRE_RGB, hexToRgb(ARC_GOLD.dark)].map(
    ([red, green, blue]) => new Vector3(red, green, blue),
  );
}

/** Switches a renderer and its palette uniform to a theme (Orthodoxia patch, PATCHES.md). */
export function applyTheme(renderer: WebGLRenderer, palette: Vector3[], theme: Theme): void {
  renderer.setClearColor(new Color(VIZ_COLORS[theme].surface), 1);
  genreRgb(theme).forEach(([red, green, blue], index) => {
    palette[index]?.set(red, green, blue);
  });
  const [red, green, blue] = hexToRgb(ARC_GOLD[theme]);
  palette[GOLD_PALETTE_INDEX]?.set(red, green, blue);
}
