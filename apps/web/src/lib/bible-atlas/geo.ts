/**
 * The rivers and lakes drawn on the atlas, as simple lines and outlines (longitude, latitude). They are deliberately
 * schematic: enough to show where the Nile, the Euphrates, the Tigris and the Jordan run and where the Sea of Galilee and
 * the Dead Sea lie, not a survey. The coastlines come from Natural Earth (public domain) through the world-atlas package.
 */
export type LonLat = [number, number];

export const RIVERS: readonly { readonly id: string; readonly line: readonly LonLat[] }[] = [
  {
    id: 'nile',
    line: [
      [32.53, 15.6], [33.0, 16.8], [33.98, 17.68], [33.6, 18.6], [33.33, 19.53], [32.4, 18.9], [31.55, 18.12], [30.7, 18.6], [30.48, 19.17],
      [30.8, 20.2], [31.3, 21.8], [32.0, 22.6], [32.9, 24.09], [32.64, 25.7], [32.72, 26.16], [31.69, 26.56], [31.18, 27.18], [30.74, 28.11],
      [31.1, 29.07], [31.23, 30.05],
    ],
  },
  { id: 'nile-rosetta', line: [[31.23, 30.05], [31.1, 30.4], [30.8, 30.95], [30.42, 31.4]] },
  { id: 'nile-damietta', line: [[31.23, 30.05], [31.3, 30.6], [31.55, 31.1], [31.81, 31.42]] },
  {
    id: 'euphrates',
    line: [
      [38.75, 38.8], [38.5, 37.5], [37.97, 37.0], [38.0, 36.82], [39.0, 35.95], [40.15, 35.33], [40.9, 34.45], [41.8, 34.0], [42.8, 33.64],
      [43.78, 33.35], [44.4, 32.54], [45.28, 31.31], [46.25, 31.04], [47.43, 31.0], [47.8, 30.5], [48.5, 29.95],
    ],
  },
  {
    id: 'tigris',
    line: [[40.2, 37.9], [41.2, 37.6], [42.2, 37.3], [43.15, 36.35], [43.87, 34.2], [44.4, 33.3], [45.8, 32.5], [47.15, 31.85], [47.43, 31.0]],
  },
  {
    id: 'jordan',
    line: [[35.65, 33.25], [35.62, 33.1], [35.62, 32.9], [35.57, 32.7], [35.55, 32.2], [35.5, 31.9], [35.55, 31.77]],
  },
];

export const LAKES: readonly { readonly id: string; readonly ring: readonly LonLat[] }[] = [
  { id: 'galilee', ring: [[35.55, 32.89], [35.63, 32.85], [35.65, 32.75], [35.59, 32.7], [35.54, 32.74], [35.5, 32.82], [35.55, 32.89]] },
  {
    id: 'dead-sea',
    ring: [[35.5, 31.78], [35.57, 31.65], [35.55, 31.45], [35.52, 31.3], [35.48, 31.1], [35.43, 31.05], [35.4, 31.2], [35.4, 31.45], [35.45, 31.65], [35.5, 31.78]],
  },
];
