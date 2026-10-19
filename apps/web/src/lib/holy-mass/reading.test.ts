import { describe, expect, it } from 'vitest';
import { defaultReading, parseReading, serializeReading, stepSize } from './reading.ts';

describe('reading preferences', () => {
  it('starts at the middle size', () => {
    expect(defaultReading()).toEqual({ size: 'medium' });
    expect(parseReading(null)).toEqual({ size: 'medium' });
  });

  it('keeps a saved size', () => {
    expect(parseReading(serializeReading({ size: 'large' }))).toEqual({ size: 'large' });
  });

  it('ignores a saved language choice from the older two-language control', () => {
    expect(parseReading('{"langs":["en","ar"],"size":"small"}')).toEqual({ size: 'small' });
  });

  it('falls back to the default for damaged or unknown values', () => {
    expect(parseReading('not json')).toEqual(defaultReading());
    expect(parseReading('{"size":"huge"}')).toEqual(defaultReading());
    expect(parseReading('null')).toEqual(defaultReading());
  });

  it('steps the text size within its limits', () => {
    const medium = defaultReading();
    expect(stepSize(medium, 1).size).toBe('large');
    expect(stepSize(stepSize(medium, 1), 1).size).toBe('large');
    expect(stepSize(stepSize(medium, -1), -1).size).toBe('small');
  });
});
