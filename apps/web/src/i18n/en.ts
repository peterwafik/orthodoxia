/**
 * English UI strings. `ar.ts` must provide every key (enforced by its `Dictionary` type).
 * Copy rules: sentence case, plain verbs, no claims the site cannot back up (CONTENT_GUIDELINES.md).
 */
export const en = {
  meta: {
    siteName: 'Orthodoxia',
    description:
      'An interconnected library of Scripture, early Christian history, Church Fathers, and Coptic Orthodox apologetics.',
  },
  a11y: {
    skipToContent: 'Skip to content',
    primaryNav: 'Main',
    openMenu: 'Menu',
    themeToggle: 'Switch between light and dark theme',
  },
  nav: {
    home: 'Home',
    bible: 'Bible',
    explore: 'Cross-references',
    about: 'About',
    sources: 'Sources',
    otherLanguage: 'العربية',
    otherLanguageName: 'Arabic',
  },
  home: {
    title: 'Explore Scripture. Discover its connections. Understand the Orthodox faith.',
    lede: 'An interconnected library of Scripture, early Christian history, Church Fathers, and Coptic Orthodox apologetics.',
    ctaExplore: 'Explore the Bible',
    ctaMethod: 'See how we source and review',
    figureLabel:
      'Arcs over a line of the Bible from Genesis to Revelation. Each arc joins two passages in different books that cite or echo each other.',
    figureCaption:
      'The 1,200 most-voted connections between different books. Brighter arcs cross between the Old and New Testaments. The full explorer includes all 344,799.',
    axisOld: 'Old Testament',
    axisNew: 'New Testament',
    exploreHeading: 'Follow a passage across the whole Bible',
    exploreBody:
      'Start from the full picture and zoom to a single verse, or read a chapter with its connections in view. Every connection opens the passage it points to.',
    readLink: 'Read the Bible',
    readNote: 'Arabic (Van Dyck) and English (KJV or Septuagint), including the deuterocanonical books.',
    arcsLink: 'Open the arcs view',
    arcsNote: 'Every verse on one line, with its cross-references drawn as arcs.',
    threadsLink: 'Read with threads',
    threadsNote: 'Read a chapter while each verse shows where its references land.',
    explorerLanguageNote: 'The explorer’s interface and verse text are in English for now.',
    methodHeading: 'How sources are weighed',
    methodIntro:
      'Every page says where its claims come from. When sources differ in authority, we rank them in this order:',
    disclaimer:
      'This is an independent study project. It is not an official publication of the Coptic Orthodox Church, and nothing here claims the Church’s endorsement.',
  },
  hierarchy: [
    ['Holy Scripture', 'as received in the Coptic Orthodox biblical tradition.'],
    ['Official teaching', 'of the Coptic Orthodox Church and its Holy Synod.'],
    ['Councils', 'as received by the Coptic Orthodox Church.'],
    ['The Church Fathers', 'and the Alexandrian theological tradition.'],
    ['Modern Coptic Orthodox scholarship', 'by qualified theologians.'],
    ['Historical and academic research', 'with its uncertainties stated.'],
    ['Other Christian traditions', 'presented fairly and named as such.'],
    ['Unreviewed material', 'from contributors or AI assistance, always labeled.'],
  ],
  hierarchyNote:
    'This ranks kinds of sources, not every sentence within them. It is being finalized with Coptic Orthodox reviewers.',
  coverage: {
    heading: 'What the cross-references cover',
    body: 'The connections come from the OpenBible.info dataset, which covers the 66 books found in Protestant Bibles. The deuterocanonical books read in the Coptic Orthodox Church, such as Tobit, Wisdom and Sirach, are not included yet.',
  },
  about: {
    title: 'About this project',
    intro:
      'Orthodoxia is a free, open-source study platform. It aims to show what the Coptic Orthodox Church believes, why, and what biblical and historical evidence bears on each question, so readers can examine the sources for themselves.',
    nowHeading: 'Available now',
    now: 'An interactive explorer of Bible cross-references, built on the open-source Bible Cross-References project by Oleksii Trekhleb.',
    nextHeading: 'In preparation',
    next: [
      'A Bible reader in Arabic and English, with search',
      'Answers to common questions about the faith, each reviewed before publication',
      'A library of the Church Fathers in public-domain translations',
      'An archive of historical evidence, with its limits stated',
    ],
    reviewHeading: 'How content is reviewed',
    review:
      'Every article records its sources, its author, and its review status: draft, awaiting review, reviewed, or published. Only published articles are presented as reviewed. Anything written with AI assistance says so.',
    methodHeading: 'Sources and licenses',
    method:
      'We only republish material that is in the public domain or openly licensed. Everything else is cited and linked. The sources page lists each one with its license and the date we checked it.',
    sourcesLink: 'View all sources',
  },
  sources: {
    title: 'Sources and licenses',
    intro:
      'Every dataset, text and reference site we use or have evaluated, with its license as we verified it. Licenses can change, so each entry shows when we last checked.',
    groups: {
      import: 'Republished on this site, or cleared to be',
      'link-only': 'Cited and linked only',
      'do-not-use': 'Evaluated and not used',
    },
    inUse: 'In use',
    planned: 'Planned',
    license: 'License',
    attribution: 'Required attribution',
    verified: 'Verified',
    licenseStatement: 'License statement',
    deuterocanon: 'Includes deuterocanonical books',
    yes: 'Yes',
    no: 'No',
  },
  footer: {
    attributionHeading: 'Data and code credits',
    code: 'Site code: MIT License.',
    content: 'Original articles: CC BY-SA 4.0.',
    fonts: 'Fonts: Inter, Source Serif 4, Noto Sans Arabic and Noto Naskh Arabic (SIL Open Font License).',
    repo: 'Source code',
  },
  bible: {
    title: 'The Bible',
    intro:
      'Read the Old Testament, the deuterocanonical books, and the New Testament in Arabic and English. Every text here is in the public domain or openly licensed.',
    edition: 'Edition',
    editions: 'Editions',
    otherLanguage: 'Read in Arabic',
    sections: {
      ot: 'Old Testament',
      deuterocanon: 'Deuterocanonical books',
      nt: 'New Testament',
    },
    deuterocanonNote:
      'The list of deuterocanonical books, their names and their order follow common Coptic Orthodox usage and are awaiting confirmation by our reviewers.',
    chapter: 'Chapter',
    chapters: 'Chapters',
    psalm: 'Psalm',
    previous: 'Previous chapter',
    next: 'Next chapter',
    chooseChapter: 'Choose a chapter',
    allBooks: 'All books',
    crossReferences: 'See this chapter’s cross-references',
    notes: 'Notes',
    source: 'Text',
    notInEdition: 'This book is not in this edition.',
    lxxPsalm: (lxx: number, hebrew: string) =>
      `Psalm ${lxx} in the Septuagint numbering used in the Agpeya${hebrew === '' ? '' : `; Psalm ${hebrew} in Hebrew numbering`}.`,
    hebrewPsalm: (hebrew: number, lxx: string) =>
      `Psalm ${hebrew} in Hebrew numbering${lxx === '' ? '' : `; Psalm ${lxx} in the Septuagint numbering used in the Agpeya`}.`,
    licenses: {
      'public-domain': 'Public domain',
      'cc-by-sa': 'CC BY-SA 4.0',
    },
    arabicDeuterocanonNotice:
      'The Arabic text of this book comes from Arabic Wikisource, where it was added without naming its source. Its wording and numbering follow the Latin Vulgate tradition (likely the 19th-century Jesuit translation), which differs in places from the Septuagint text the Coptic Orthodox Church follows. Its provenance is under review.',
  },
  notFound: {
    title: 'Page not found',
    body: 'This address does not match any page. It may have moved, or the link may contain a typo.',
    home: 'Go to the home page',
  },
};

export type Dictionary = typeof en;
