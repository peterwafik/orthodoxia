import { describe, expect, it } from 'vitest';
import { DEFAULT_LAYERS, parseLayers, serializeLayers, toggleLayer } from './layers.ts';

describe('the panel layers', () => {
  it('starts with all five aspects on', () => {
    expect(DEFAULT_LAYERS).toEqual({ steps: true, priest: true, deacon: true, people: true, meaning: true });
    expect(parseLayers(null)).toEqual(DEFAULT_LAYERS);
    expect(parseLayers(undefined)).toEqual(DEFAULT_LAYERS);
  });

  it('keeps a reader’s choice, including every layer off', () => {
    const chosen = { steps: false, priest: true, deacon: false, people: true, meaning: true };
    expect(parseLayers(serializeLayers(chosen))).toEqual(chosen);
    const none = { steps: false, priest: false, deacon: false, people: false, meaning: false };
    expect(serializeLayers(none)).toBe('');
    expect(parseLayers('')).toEqual(none);
  });

  it('ignores names it does not know', () => {
    expect(parseLayers('priest, nonsense ,people')).toEqual({ steps: false, priest: true, deacon: false, people: true, meaning: false });
  });

  it('toggles one layer without touching the others', () => {
    const after = toggleLayer(DEFAULT_LAYERS, 'deacon');
    expect(after.deacon).toBe(false);
    expect({ ...after, deacon: true }).toEqual(DEFAULT_LAYERS);
    expect(toggleLayer(after, 'deacon')).toEqual(DEFAULT_LAYERS);
  });
});
