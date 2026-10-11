# Phase 0 · Step 4 — UI/UX Proposal

## 1. Design system

### Color tokens (CSS custom properties; light / dark)

| Token | Light | Dark | Use |
|---|---|---|---|
| `--surface` | `#FBF8F1` warm ivory | `#0D1526` deep navy | page background |
| `--surface-raised` | `#FFFFFF` | `#15203A` | cards, panels |
| `--ink` | `#16203A` | `#ECE7DC` | body text |
| `--ink-muted` | `#4A5568` slate | `#A9B2C3` | secondary text |
| `--accent` | `#8A6A1F` muted gold (AA on ivory) | `#D4AF5F` | links, focus, highlights |
| `--line` | `#E3DCCB` | `#26324F` | borders, dividers |
| `--status-reviewed` / `--status-draft` / `--status-ai` | green / amber / violet, each with text label + icon | — | review badges (never color-only) |

Every text/background pair is checked to WCAG 2.2 AA (4.5:1 body, 3:1 large/UI) by an automated
contrast test in CI. Visualization genre colors stay upstream's in Phase 1.

### Typography (all SIL OFL 1.1, self-hosted — no Google Fonts request at runtime)

| Role | English | Arabic |
|---|---|---|
| UI | Inter | Noto Sans Arabic |
| Scripture & long reading | Source Serif 4 | Noto Naskh Arabic (Naskh is the conventional book/Bible style; more legible for long Arabic text than Cairo) |
| Greek / Hebrew (later) | Noto Serif (Greek), Noto Serif Hebrew | — |

Fluid type scale (`clamp()`), reading measure 60–72ch EN / 50–60ch AR, line-height 1.6 EN / 1.9 AR.

### Components (Phase 1 set)
Header + locale switch, mobile nav sheet, footer with attributions, button, card, badge (review
status), notice/callout (coverage & disclaimers), skip-link, theme toggle. Icons: **Lucide** (ISC) —
same family upstream uses, so the explorer and site look consistent.

## 2. Sitemap

```
/                         bilingual landing (choose language)
/{en|ar}/                 home
/{lang}/explore/          Arcs (upstream)          → Phase 1
/{lang}/explore/threads/  Threads (upstream)       → Phase 1
/{lang}/bible/{book}/{ch} Bible Explorer           → Phase 2
/{lang}/apologetics/…     encyclopedia             → Phase 3
/{lang}/doctrine/…        doctrine library         → Phase 3
/{lang}/fathers/…         Church Fathers           → Phase 4
/{lang}/history/…         historical evidence      → Phase 4
/{lang}/journeys/…        prophecy & themes        → Phase 5
/{lang}/assistant         AI research (beta)       → Phase 6
/{lang}/about             about, method, review process, sources & licenses  → Phase 1
/{lang}/sources           source registry (generated)                         → Phase 1
```

Nav items for unreleased sections are **not shown** (no "coming soon" dead ends), except one roadmap
line on the About page.

## 3. Wireframes

### Homepage (desktop)
```
┌──────────────────────────────────────────────────────────────────────────┐
│ ✣ [Name]   Explore  Bible  Apologetics  Fathers  History  About   EN|ع ◐ │
├──────────────────────────────────────────────────────────────────────────┤
│  Explore Scripture. Discover Its Connections.                            │
│  Understand the Orthodox Faith.                                          │
│  An interconnected library of Scripture, early Christian history,        │
│  Church Fathers, and Coptic Orthodox apologetics.                        │
│  [ Explore the Bible ]  [ Investigate a Question ]                       │
├──────────────────────────────────────────────────────────────────────────┤
│  ╭───────── static arcs preview image (pre-rendered, ~60 KB) ─────────╮  │
│  │   ⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒   │  │
│  │ Gen ─────────────────────────────────────────────────────── Rev    │  │
│  ╰──────── [ Open full-screen explorer → ]  ⓘ coverage: 66 books ─────╯  │
├──────────────────────────────────────────────────────────────────────────┤
│ [Bible Connections] [Difficult Questions] [Historical Evidence]          │
│ [Church Fathers]    [Orthodox Doctrine]   ← only released ones are links │
├──────────────────────────────────────────────────────────────────────────┤
│ Featured journey: Isaiah 53 → Acts 8 (Phase 5; Phase 1 shows deep link)  │
├──────────────────────────────────────────────────────────────────────────┤
│ How we source and review: Scripture · Fathers · History · Interpretation │
│ (explains the source hierarchy and that nothing here is Church-endorsed) │
├──────────────────────────────────────────────────────────────────────────┤
│ footer: data attributions (OpenBible.info CC BY 4.0, BSB PD), licenses   │
└──────────────────────────────────────────────────────────────────────────┘
```
The hero preview is a **static image**, not WebGL — keeps the homepage fast (no 130 kB Three.js on
landing); the full explorer loads only on click.

### Bible Explorer (desktop, Phase 2)
```
┌──────────┬───────────────────────────────────────┬─────────────────────┐
│ Books    │ John 1            [EN ▾][+AR parallel] │ Cross-references (12)│
│ ▸ OT     │ ¹ In the beginning was the Word…       │ Gen 1:1  ●quotation? │
│ ▾ NT     │ ² He was with God in the beginning.    │ Ps 33:6              │
│  Matthew │ ³ Through Him all things were made…    │ — source: OpenBible  │
│  …       │                                        │ Commentary (reviewed)│
│ Chapters │ ◂ prev chapter   next chapter ▸        │ Related questions    │
│ 1 2 3 …  │                                        │ Historical sources   │
└──────────┴───────────────────────────────────────┴─────────────────────┘
```
Mobile: text full-width; book/chapter picker in a top sheet; selected verse opens a bottom sheet
with tabs **References · Commentary · Questions** (reuses upstream's bottom-sheet behavior).

### Cross-References page (Phase 1 = upstream explorer inside our shell)
```
┌──────────────────────────────────────────────────────────────────────────┐
│ ✣ [Name] › Explore      [Arcs|Threads]   🔍 John 3:16   ⚙Filters   EN|ع  │
│ ⓘ Covers 66 books (OpenBible.info/TSK). Deuterocanon not yet included.  │
├──────────────────────────────────────────────────────────────────────────┤
│                        WebGL arcs canvas                    │ Passage   │
│                                                             │ panel     │
│ Gen  Exod … Ps … Isa … Mal | Matt … John … Rom … Rev        │ (upstream)│
├──────────────────────────────────────────────────────────────────────────┤
│ [Accessible list view] — text list of the focused passage's references   │
└──────────────────────────────────────────────────────────────────────────┘
```

### Apologetics article (Phase 3)
```
┌───────────────┬──────────────────────────────────────────┬─────────────┐
│ On this page  │ Is Jesus God?            [Reviewed ✓ date]│ Scripture   │
│ Short answer  │ Short answer (boxed)                      │ cited (pop- │
│ Scripture     │ Detailed explanation… John 1:1ᵖᵒᵖᵒᵛᵉʳ     │ overs)      │
│ Fathers       │ Church Fathers: Athanasius, De Inc. 54    │ Related Qs  │
│ History       │   (NPNF² 4, Robertson tr., §54) [source]  │             │
│ Objections    │ Objections & responses                    │             │
│ Sources       │ Bibliography · review log · version hist. │             │
└───────────────┴──────────────────────────────────────────┴─────────────┘
```

### Mobile navigation concept
```
┌──────────────────────────────┐
│ ✣ [Name]           🔍  ☰     │  ← header: logo, search, menu only
│ …content…                    │
├──────────────────────────────┤
│ ⌂ Home  ⌒ Explore  📖 Bible  ? Q&A │ ← bottom tab bar (4 max, thumb reach)
└──────────────────────────────┘
☰ opens a sheet: remaining sections, language, theme, About/Sources.
```

## 4. Arabic / RTL strategy

1. `dir="rtl" lang="ar"` on `<html>` for `/ar/*`; never mirror via CSS transforms.
2. Only CSS logical properties (enforced by stylelint `liberty/use-logical-spec` or a simple lint
   rule) so one stylesheet serves both directions.
3. Icons with direction (arrows, chevrons, "next chapter") flip; icons without direction don't.
4. Scripture references inside Arabic text wrapped in `<bdi>` to keep "يوحنا 3: 16" and Latin refs
   correctly ordered; Greek/Hebrew spans get their own `lang`.
5. Numerals: Western Arabic digits by default in Arabic UI (common in Egyptian web usage and in
   verse references); Eastern Arabic digits as a later user preference — owner/reviewer decision.
6. Arabic book names come from the canon package, reviewed — not machine-translated.
7. Visualization: axis order stays Genesis-left → Revelation-right in both locales (charts and
   timelines conventionally stay LTR in Arabic UIs); the surrounding chrome is RTL. To be user-tested.
8. Translated slugs: URLs use stable ASCII IDs in both locales (`/ar/bible/John/3`) for stable
   sharing; Arabic titles appear in `<title>` and headings. (Translated slugs can be added later via
   redirects without breaking IDs.)
