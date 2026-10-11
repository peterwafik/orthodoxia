import { Color, Vector3, WebGLRenderer } from 'three';
import { MAX_PIXEL_RATIO } from './frames.ts';
import type { Theme } from '../../shared/lib/theme.ts';
import { genreRgb, GENRE_RGB, VIZ_COLORS, VIZ_SURFACE } from './palette.ts';

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

/** Genre palette as a `vec3[10]` uniform value. */
export function genrePaletteUniform(): Vector3[] {
  return GENRE_RGB.map(([red, green, blue]) => new Vector3(red, green, blue));
}

/** Switches a renderer and its palette uniform to a theme (Orthodoxia patch, PATCHES.md). */
export function applyTheme(renderer: WebGLRenderer, palette: Vector3[], theme: Theme): void {
  renderer.setClearColor(new Color(VIZ_COLORS[theme].surface), 1);
  genreRgb(theme).forEach(([red, green, blue], index) => {
    palette[index]?.set(red, green, blue);
  });
}
