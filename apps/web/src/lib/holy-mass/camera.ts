/**
 * The Holy Mass journey's camera. A stop names a *focus box* on the artwork (centre, width and
 * height, as fractions of the whole picture); the camera frames that box inside whatever shape the
 * artwork window has (a wide desktop panel or a tall phone), then interpolates between the frames of
 * neighbouring stops as the reader scrolls.
 *
 * Everything here is pure arithmetic so it can be tested without a browser.
 */

/** A region of the artwork: centre x, centre y, width, height, all 0–1 of the whole image. */
export type FocusBox = readonly [cx: number, cy: number, w: number, h: number];

/** Where the camera looks: the centre and the width of the visible area, as fractions of the image. */
export interface Frame {
  readonly cx: number;
  readonly cy: number;
  /** Visible width as a fraction of the image width (1 = the whole width; 0.25 = a quarter). */
  readonly vw: number;
}

export interface ImageSize {
  readonly width: number;
  readonly height: number;
}

export interface Viewport {
  /** CSS pixels. */
  readonly width: number;
  readonly height: number;
}

/** Visible height as a fraction of the image height, per unit of visible width. */
export function heightPerWidth(view: Viewport, image: ImageSize): number {
  return (view.height / view.width) * (image.width / image.height);
}

/** The frame that shows a whole focus box, centred on it, in a window of this shape. */
export function frameFor(box: FocusBox, view: Viewport, image: ImageSize): Frame {
  const [cx, cy, w, h] = box;
  const k = heightPerWidth(view, image);
  return clampFrame({ cx, cy, vw: Math.max(w, h / k) }, k);
}

/**
 * Keeps the visible area inside the picture where it can be (an area larger than the picture is
 * simply centred, which leaves a margin).
 */
export function clampFrame(frame: Frame, k: number): Frame {
  const vh = frame.vw * k;
  const clamp = (centre: number, size: number) => (size >= 1 ? 0.5 : Math.min(1 - size / 2, Math.max(size / 2, centre)));
  return { cx: clamp(frame.cx, frame.vw), cy: clamp(frame.cy, vh), vw: frame.vw };
}

export function easeInOut(t: number): number {
  const p = Math.min(1, Math.max(0, t));
  return p < 0.5 ? 4 * p * p * p : 1 - (-2 * p + 2) ** 3 / 2;
}

/** Interpolates two frames: the centre linearly, the width in log space so zoom feels even. */
export function lerpFrame(a: Frame, b: Frame, t: number, k: number): Frame {
  const p = Math.min(1, Math.max(0, t));
  return clampFrame(
    {
      cx: a.cx + (b.cx - a.cx) * p,
      cy: a.cy + (b.cy - a.cy) * p,
      vw: Math.exp(Math.log(a.vw) + (Math.log(b.vw) - Math.log(a.vw)) * p),
    },
    k,
  );
}

/** The camera at a fractional stop position: 2.25 is a quarter of the way from stop 2 to stop 3. */
export function frameAt(frames: readonly Frame[], position: number, k: number, ease: (t: number) => number = easeInOut): Frame {
  const last = frames.length - 1;
  const clamped = Math.min(last, Math.max(0, position));
  const index = Math.min(last - 1, Math.floor(clamped));
  const from = frames[index]!;
  const to = frames[Math.min(last, index + 1)]!;
  return lerpFrame(from, to, ease(clamped - index), k);
}

export interface PyramidMeta extends ImageSize {
  readonly tileSize: number;
  readonly maxLevel: number;
}

export interface TileDraw {
  readonly level: number;
  readonly col: number;
  readonly row: number;
  /** The tile's size in pixels at its level (edge tiles are smaller). */
  readonly tw: number;
  readonly th: number;
  /** Destination rectangle in CSS pixels. */
  readonly x: number;
  readonly y: number;
  readonly w: number;
  readonly h: number;
}

/**
 * The pyramid level to use: the coarsest one that still has at least one source pixel per device
 * pixel, so the picture is never stretched when a sharper level exists.
 */
export function levelFor(frame: Frame, view: Viewport, dpr: number, meta: PyramidMeta): number {
  const needed = (view.width * dpr) / (frame.vw * meta.width); // device px per full-size px
  const level = meta.maxLevel + Math.ceil(Math.log2(Math.max(needed, 1e-6)));
  return Math.min(meta.maxLevel, Math.max(0, level));
}

/** The tiles that cover the window for a frame, with where each one lands on screen. */
export function visibleTiles(frame: Frame, view: Viewport, dpr: number, meta: PyramidMeta, level = levelFor(frame, view, dpr, meta)): TileDraw[] {
  const k = heightPerWidth(view, meta);
  const vh = frame.vw * k;
  const scale = 2 ** (level - meta.maxLevel);
  const levelWidth = Math.ceil(meta.width * scale);
  const levelHeight = Math.ceil(meta.height * scale);
  const left = frame.cx - frame.vw / 2;
  const top = frame.cy - vh / 2;
  const x0 = Math.max(0, left * levelWidth);
  const y0 = Math.max(0, top * levelHeight);
  const x1 = Math.min(levelWidth, (left + frame.vw) * levelWidth);
  const y1 = Math.min(levelHeight, (top + vh) * levelHeight);
  const tiles: TileDraw[] = [];
  const size = meta.tileSize;
  const screenPerLevelPx = view.width / (frame.vw * levelWidth);
  for (let row = Math.floor(y0 / size); row <= Math.floor((y1 - 1) / size); row++) {
    for (let col = Math.floor(x0 / size); col <= Math.floor((x1 - 1) / size); col++) {
      const tx = col * size;
      const ty = row * size;
      const tw = Math.min(size, levelWidth - tx);
      const th = Math.min(size, levelHeight - ty);
      tiles.push({
        level,
        col,
        row,
        tw,
        th,
        x: (tx - left * levelWidth) * screenPerLevelPx,
        y: (ty - top * levelHeight) * screenPerLevelPx,
        w: tw * screenPerLevelPx,
        h: th * screenPerLevelPx,
      });
    }
  }
  return tiles;
}
