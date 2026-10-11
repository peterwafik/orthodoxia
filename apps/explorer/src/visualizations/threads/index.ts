import { lazy } from 'react';
import { ReadingIcon } from '../../shared/ui/icons.tsx';
import type { Visualization } from '../visualization.ts';
import { t } from '../../i18n/messages.ts';

// The view's code is a chunk of its own; its download starts as soon as the app lists the views.
const explorer = import('./ThreadsExplorer.tsx');

export const threads = {
  id: 'threads',
  title: t.views.threads.title,
  shortTitle: t.views.threads.short,
  icon: ReadingIcon,
  openLabel: t.views.threads.open,
  Component: lazy(async () => ({ default: (await explorer).ThreadsExplorer })),
} as const satisfies Visualization;
