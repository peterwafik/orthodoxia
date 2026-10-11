import { describe, expect, it } from 'vitest';
import { ar } from './ar.ts';
import { en } from './en.ts';
import { dir, localePath, switchLocalePath } from './index.ts';

/** Every leaf key path of a dictionary, e.g. `home.title`, `hierarchy.0.1`. */
function keyPaths(value: unknown, prefix = ''): string[] {
  if (typeof value !== 'object' || value === null) return [prefix];
  return Object.entries(value).flatMap(([key, child]) => keyPaths(child, prefix ? `${prefix}.${key}` : key));
}

describe('dictionaries', () => {
  it('Arabic has exactly the same keys as English, including list lengths', () => {
    expect(keyPaths(ar)).toEqual(keyPaths(en));
  });

  it('has no empty strings', () => {
    for (const dictionary of [en, ar]) {
      const empty = keyPaths(dictionary).filter((path) => {
        const leaf = path.split('.').reduce<unknown>((node, key) => (node as Record<string, unknown>)[key], dictionary);
        return typeof leaf === 'string' && leaf.trim() === '';
      });
      expect(empty).toEqual([]);
    }
  });
});

describe('paths', () => {
  it.each([
    ['/en/', 'ar', '/ar/'],
    ['/en/about/', 'ar', '/ar/about/'],
    ['/ar/sources/', 'en', '/en/sources/'],
    ['/', 'ar', '/ar/'],
    ['/elsewhere/', 'en', '/en/'],
  ] as const)('switchLocalePath(%s, %s) = %s', (path, to, expected) => {
    expect(switchLocalePath(path, to)).toBe(expected);
  });

  it('builds locale paths with a trailing slash', () => {
    expect(localePath('en')).toBe('/en/');
    expect(localePath('ar', '/about')).toBe('/ar/about/');
    expect(localePath('en', 'explore/threads/')).toBe('/en/explore/threads/');
  });

  it('sets direction by locale', () => {
    expect(dir('ar')).toBe('rtl');
    expect(dir('en')).toBe('ltr');
  });
});
