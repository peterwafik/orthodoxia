import { lazy } from 'react';
import { ArcsIcon } from '../../shared/ui/icons.tsx';
import type { Visualization } from '../visualization.ts';
import { t } from '../../i18n/messages.ts';

// The view's code, with Three.js, is a chunk of its own. Its download starts as soon as the app
// lists the views, in parallel with the data, while the page shows its loading screen.
const explorer = import('./ArcsExplorer.tsx');

export const arcs = {
  id: 'arcs',
  title: t.views.arcs.title,
  shortTitle: t.views.arcs.short,
  icon: ArcsIcon,
  openLabel: t.views.arcs.open,
  Component: lazy(async () => ({ default: (await explorer).ArcsExplorer })),
} as const satisfies Visualization;
