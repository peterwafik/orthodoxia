import { useMemo, useState } from 'react';
import {
  ClickIcon,
  DragIcon,
  HoldAndSlideIcon,
  PinchIcon,
  ScrollIcon,
  TapIcon,
} from '../../shared/ui/icons.tsx';
import { FiltersMenu } from '../shared/components/FiltersMenu.tsx';
import { GenreLegend } from '../shared/components/GenreLegend.tsx';
import { toggleGenre } from '../shared/components/GenreToggles.tsx';
import { LinkStats } from '../shared/components/LinkStats.tsx';
import { PassagePanel } from '../shared/components/PassagePanel.tsx';
import { ReferenceSearch } from '../shared/components/ReferenceSearch.tsx';
import { VizPage } from '../shared/components/VizPage.tsx';
import { DEFAULT_LINK_FILTER, selectLinks } from '../shared/link-filter.ts';
import { summarizeLinks } from '../shared/link-summary.ts';
import type { Passage } from '../../core/bible/passage.ts';
import type { Connection } from '../shared/connections.ts';
import type { VisualizationProps } from '../visualization.ts';
import { ArcsStage } from './ArcsStage.tsx';
import { t } from '../../i18n/messages.ts';

export function ArcsExplorer({
  data,
  active,
  passage,
  onNavigate,
  filter,
  onFilterChange,
  masthead,
  passageLinks,
  shareUrl,
}: VisualizationProps) {
  const { index } = data.crossReferences;
  const linkIds = useMemo(
    () => selectLinks(index, data.verseGenres, filter),
    [index, data.verseGenres, filter],
  );
  const summary = useMemo(
    () => summarizeLinks(index, linkIds, data.verseGenres),
    [index, linkIds, data.verseGenres],
  );
  const closePanel = () => {
    onNavigate(null);
  };
  // A connection pointed at in the panel; it belongs to the passage it was pointed at on.
  const [preview, setPreview] = useState<{
    readonly passage: Passage;
    readonly connection: Connection;
  } | null>(null);
  const previewed = preview?.passage === passage ? preview.connection : null;

  return (
    <VizPage
      masthead={masthead}
      onPanelClose={closePanel}
      controls={
        <>
          <ReferenceSearch versification={data.versification} onSelect={onNavigate} />
          <FiltersMenu
            filter={filter}
            defaults={DEFAULT_LINK_FILTER}
            onChange={onFilterChange}
            shownLinks={linkIds.length}
            totalLinks={index.linkCount}
          />
        </>
      }
      panel={
        passage && (
          <PassagePanel
            data={data}
            passage={passage}
            filter={filter}
            actions={passageLinks(passage)}
            onSelect={onNavigate}
            onClose={closePanel}
            shareUrl={shareUrl}
            onPreview={(connection) => {
              setPreview(connection && { passage, connection });
            }}
          />
        )
      }
    >
      <ArcsStage
        data={data}
        active={active}
        linkIds={linkIds}
        filter={filter}
        focus={passage}
        preview={previewed}
        onSelect={onNavigate}
      />
      <LinkStats
        summary={summary}
        hint={{
          pointer: (
            <>
              <ScrollIcon /> {t.stats.pointerHint[0]} · <DragIcon /> {t.stats.pointerHint[1]} ·{' '}
              <ClickIcon /> {t.stats.pointerHint[2]}
            </>
          ),
          touch: (
            <>
              <HoldAndSlideIcon /> {t.stats.touchHint[0]} · <TapIcon /> {t.stats.touchHint[1]} ·{' '}
              <PinchIcon /> {t.stats.touchHint[2]}
            </>
          ),
        }}
      />
      <GenreLegend
        hiddenGenres={filter.hiddenGenres}
        onToggle={(genre) => {
          onFilterChange({ ...filter, hiddenGenres: toggleGenre(filter.hiddenGenres, genre) });
        }}
      />
    </VizPage>
  );
}
