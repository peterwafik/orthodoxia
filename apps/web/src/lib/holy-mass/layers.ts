/**
 * The layers of the Holy Mass panel that a reader can show or hide: the steps being done, what the
 * priest, the deacon and the people say, and the meaning. Each is independent. The choice is saved in
 * the reader's browser as a short string, and a missing or damaged value falls back to the defaults.
 */
export const LAYERS = ['steps', 'priest', 'deacon', 'people', 'meaning'] as const;
export type Layer = (typeof LAYERS)[number];
export type LayerState = Readonly<Record<Layer, boolean>>;

export const SPEAKERS = ['priest', 'deacon', 'people'] as const;
export type Speaker = (typeof SPEAKERS)[number];

export const DEFAULT_LAYERS: LayerState = { steps: true, priest: true, deacon: true, people: true, meaning: true };

export const LAYERS_KEY = 'orthodoxia:holy-mass:layers';

/** `steps,priest` means only those two are on. An empty string means every layer is off. */
export function parseLayers(raw: string | null | undefined): LayerState {
  if (raw === null || raw === undefined) return DEFAULT_LAYERS;
  const on = new Set(raw.split(',').map((part) => part.trim()));
  return Object.fromEntries(LAYERS.map((layer) => [layer, on.has(layer)])) as Record<Layer, boolean>;
}

export function serializeLayers(state: LayerState): string {
  return LAYERS.filter((layer) => state[layer]).join(',');
}

export function toggleLayer(state: LayerState, layer: Layer): LayerState {
  return { ...state, [layer]: !state[layer] };
}
