import { describe, expect, it } from 'vitest';
import { loadLiturgy } from './load.ts';

const reply = (body: unknown, ok = true) => (async () => ({ ok, json: async () => body })) as unknown as typeof fetch;

describe('loadLiturgy', () => {
  it('returns the liturgy’s texts', async () => {
    const data = { liturgy: 'basil', stops: { one: { source: 'S', blocks: [] } } };
    expect(await loadLiturgy('basil', reply(data))).toEqual(data);
  });

  it('returns null when the file is missing, the network fails, or the JSON is the wrong shape', async () => {
    expect(await loadLiturgy('basil', reply({}, false))).toBeNull();
    expect(await loadLiturgy('basil', (async () => { throw new Error('offline'); }) as unknown as typeof fetch)).toBeNull();
    expect(await loadLiturgy('basil', reply({ nope: true }))).toBeNull();
    expect(await loadLiturgy('basil', reply(null))).toBeNull();
    expect(await loadLiturgy('basil', (async () => ({ ok: true, json: async () => { throw new Error('bad json'); } })) as unknown as typeof fetch)).toBeNull();
  });
});
