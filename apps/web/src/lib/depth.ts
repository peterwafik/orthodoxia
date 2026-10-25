/**
 * The pointer-driven depth of the line drawings and the tilt of the cards. One small script for every page.
 * It writes only CSS variables (--mx, --my, --sy on the page; --rx, --ry, --gx, --gy on a card) and a `data-tilt`
 * attribute; the styles in depth.css do the moving. Nothing is sent anywhere and nothing is stored.
 */
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Cards that tilt. Pages with their own card classes add them here. */
const TILT = '.card, a.apo-card, .apo-card--start, .apo-source, .hm-card, .ch-card, [data-tilt-me]';

if (!reduced) {
  const root = document.documentElement;
  let frame = 0;
  let nx = 0;
  let ny = 0;

  const flush = (): void => {
    frame = 0;
    root.style.setProperty('--mx', nx.toFixed(3));
    root.style.setProperty('--my', ny.toFixed(3));
    root.style.setProperty('--sy', String(Math.round(window.scrollY)));
  };
  const schedule = (): void => {
    if (frame === 0) frame = requestAnimationFrame(flush);
  };

  window.addEventListener(
    'pointermove',
    (event) => {
      nx = event.clientX / window.innerWidth - 0.5;
      ny = event.clientY / window.innerHeight - 0.5;
      schedule();
    },
    { passive: true },
  );
  window.addEventListener('scroll', schedule, { passive: true });

  // Phones without a pointer: the drawing leans with the device.
  window.addEventListener(
    'deviceorientation',
    (event) => {
      if (event.gamma === null || event.beta === null) return;
      nx = Math.max(-0.5, Math.min(0.5, event.gamma / 60));
      ny = Math.max(-0.5, Math.min(0.5, (event.beta - 45) / 90));
      schedule();
    },
    { passive: true },
  );

  // Cards: tilt toward a mouse and follow it with a soft light.
  for (const card of document.querySelectorAll<HTMLElement>(TILT)) {
    // The home page's web of cards keeps its cards level.
    if (card.closest('[data-web]') !== null) continue;
    card.dataset['tilt'] = '';
    card.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse') return;
      const box = card.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width;
      const y = (event.clientY - box.top) / box.height;
      card.style.setProperty('--rx', ((x - 0.5) * 9).toFixed(2));
      card.style.setProperty('--ry', ((0.5 - y) * 9).toFixed(2));
      card.style.setProperty('--gx', `${(x * 100).toFixed(0)}%`);
      card.style.setProperty('--gy', `${(y * 100).toFixed(0)}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0');
      card.style.setProperty('--ry', '0');
    });
  }
}
