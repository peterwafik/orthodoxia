/**
 * Puts the Holy Mass artwork behind the page: one <img> per picture, stacked, each at the opacity the
 * timeline gives it. A picture is fetched only when the reader is near it, so the page opens with the
 * first few and the rest follow as they scroll.
 */
import { BACKDROPS, backdropAt, backdropOpacities } from './backdrop.ts';

export interface BackdropOptions {
  readonly container: HTMLElement;
  /** Where the pictures live, e.g. /holy-mass-bg */
  readonly base: string;
  readonly reducedMotion: () => boolean;
}

/** How many pictures ahead of and behind the current one are fetched. */
const NEAR = 2;

export function createBackdrop({ container, base, reducedMotion }: BackdropOptions) {
  const images = BACKDROPS.map(({ file }) => {
    const image = document.createElement('img');
    image.className = 'backdrop-image';
    image.alt = '';
    image.decoding = 'async';
    image.setAttribute('aria-hidden', 'true');
    image.dataset['src'] = `${base}/${file}`;
    image.style.opacity = '0';
    container.append(image);
    return image;
  });

  function fetchNear(index: number) {
    for (let i = Math.max(0, index - NEAR); i <= Math.min(images.length - 1, index + NEAR); i++) {
      const image = images[i]!;
      if (image.src === '') image.src = image.dataset['src']!;
    }
  }

  let pending = false;
  let wanted = 0;
  function draw() {
    pending = false;
    const current = backdropAt(wanted);
    fetchNear(current);
    const opacities = reducedMotion() ? BACKDROPS.map((_, index) => (index === current ? 1 : 0)) : backdropOpacities(wanted);
    for (let i = 0; i < images.length; i++) {
      const value = opacities[i]!;
      images[i]!.style.opacity = value < 0.002 ? '0' : value.toFixed(3);
    }
  }

  return {
    /** Show the artwork at a fractional stop position. */
    show(position: number) {
      wanted = position;
      if (pending) return;
      pending = true;
      requestAnimationFrame(draw);
    },
    /** Fetch the opening pictures straight away. */
    warm() {
      fetchNear(0);
    },
  };
}
