import type { Journey, StartingPoint } from './types.ts';

export const STARTING_POINTS: readonly { id: StartingPoint; label: { en: string; ar: string } }[] = [
  { id: 'no-god', label: { en: 'I don’t believe God exists', ar: 'أنا مش مقتنع بوجود إله' } },
  { id: 'god-not-religion', label: { en: 'I think God exists, but religion doesn’t matter to me', ar: 'أعتقد إن فيه إله، لكن الدين مش مهم بالنسبة لي' } },
  { id: 'other-religion', label: { en: 'I follow another religion', ar: 'أنا مؤمن بدين تاني' } },
  { id: 'unsure', label: { en: 'I’m unsure what I believe', ar: 'مش متأكد أنا مؤمن بإيه' } },
  { id: 'christian-questions', label: { en: 'I’m Christian and have questions', ar: 'أنا مسيحي وعندي أسئلة' } },
  { id: 'studying', label: { en: 'I’m studying or preparing a lesson', ar: 'بدرس أو بحضّر درس' } },
];

/**
 * Journeys personalise the reading order and the introduction, never the facts or the uncertainty labels. A step whose
 * target is a question without an article shows the honest "no reviewed answer yet" state.
 */
export const JOURNEYS: readonly Journey[] = [
  {
    id: 'doubt-god',
    slug: 'from-doubt-about-god',
    title: { en: 'If I’m not sure God exists', ar: 'لو لم أكن متأكدًا من وجود الله' },
    summary: { en: 'Start with what counts as evidence, weigh the arguments and the strongest objections, then ask whether any historical claim about Jesus can be examined.', ar: 'ابدأ بما يُعدّ دليلًا، ثم زِن الحجج وأقوى الاعتراضات، ثم اسأل هل يمكن فحص دعوى تاريخية عن يسوع.' },
    startingPoints: ['no-god', 'unsure'],
    steps: [
      { title: { en: 'How evidence is weighed', ar: 'كيف تُوزن الأدلة' }, target: 'methodology', note: { en: 'The labels used on every page, and what they do not mean.', ar: 'التصنيفات المستخدمة في كل صفحة وما لا تعنيه.' } },
      { title: { en: 'What arguments for God claim', ar: 'ماذا تدّعي الحجج على وجود الله' }, target: 'arguments-for-god-claim', note: { en: 'What each argument would establish if it worked, and what it would not.', ar: 'ما الذي ستثبته كل حجة لو نجحت وما لن تثبته.' } },
      { title: { en: 'The strongest objection: suffering and hiddenness', ar: 'أقوى الاعتراضات: الألم والاحتجاب' }, target: 'hidden-or-suffering', note: { en: 'The problem of evil and divine hiddenness, stated fairly.', ar: 'مشكلة الشر واحتجاب الله بصياغة منصفة.' } },
      { title: { en: 'Can history support a miracle claim?', ar: 'هل يمكن للتاريخ دعم دعوى معجزة؟' }, target: 'can-history-support-a-miracle', note: { en: 'The method question before the resurrection question.', ar: 'سؤال المنهج قبل سؤال القيامة.' } },
      { title: { en: 'Did Jesus exist?', ar: 'هل وُجد يسوع؟' }, target: 'did-jesus-exist', note: { en: 'The starting point of the historical question.', ar: 'نقطة البداية للسؤال التاريخي.' } },
      { title: { en: 'Early belief and evidence for the resurrection', ar: 'الإيمان المبكر والدليل على القيامة' }, target: 'early-belief-vs-evidence', note: { en: 'What can be said, and what remains a matter of faith.', ar: 'ما يمكن قوله وما يبقى مسألة إيمان.' } },
    ],
  },
  {
    id: 'god-yes-religion-no',
    slug: 'god-without-religion',
    title: { en: 'If I believe in God but religion feels irrelevant', ar: 'لو كنت أؤمن بالله لكن الدين يبدو غير مهم' },
    summary: { en: 'Why the question might matter, why God may seem hidden, and what Christianity claims about a God who reveals himself.', ar: 'لماذا قد يهم السؤال، ولماذا قد يبدو الله محتجبًا، وماذا تدّعي المسيحية عن إله يعلن ذاته.' },
    startingPoints: ['god-not-religion'],
    steps: [
      { title: { en: 'If God exists, why should I care?', ar: 'لو كان الله موجودًا فلماذا يهمني؟' }, target: 'why-care-if-god-exists', note: { en: 'Still to be written; listed so you can see what is coming.', ar: 'لم تُكتب بعد؛ أُدرجت لتعرف ما هو قادم.' } },
      { title: { en: 'Why does God seem hidden?', ar: 'لماذا يبدو الله محتجبًا؟' }, target: 'hidden-or-suffering', note: { en: 'Silence, suffering and unanswered questions.', ar: 'الصمت والألم والأسئلة بلا جواب.' } },
      { title: { en: 'Who chose the biblical books?', ar: 'مَن اختار أسفار الكتاب المقدس؟' }, target: 'who-chose-the-books', note: { en: 'How the Christian Scriptures came to be received.', ar: 'كيف استقر قبول الكتب المسيحية المقدسة.' } },
      { title: { en: 'Was Jesus worshipped before Constantine?', ar: 'هل عُبد يسوع قبل قسطنطين؟' }, target: 'worshipped-before-constantine', note: { en: 'What the earliest evidence shows.', ar: 'ما تُظهره أقدم الأدلة.' } },
      { title: { en: 'Did Jesus exist?', ar: 'هل وُجد يسوع؟' }, target: 'did-jesus-exist', note: { en: 'The historical core.', ar: 'النواة التاريخية.' } },
    ],
  },
  {
    id: 'christian-doubts',
    slug: 'a-christian-with-questions',
    title: { en: 'If I’m a Christian with questions', ar: 'لو كنت مسيحيًا ولدي أسئلة' },
    summary: { en: 'Go straight to the question that troubles you. Some questions are intellectual and some are painful; both are welcome here.', ar: 'اذهب مباشرة إلى السؤال الذي يشغلك. بعض الأسئلة فكرية وبعضها مؤلم، وكلاهما مرحّب به هنا.' },
    startingPoints: ['christian-questions'],
    steps: [
      { title: { en: 'Has the biblical text changed?', ar: 'هل تغيّر نص الكتاب المقدس؟' }, target: 'has-bible-changed', note: { en: 'Copying, variants and what they mean.', ar: 'النسخ والقراءات المتباينة ومعناها.' } },
      { title: { en: 'Why are some passages footnoted?', ar: 'لماذا توضع بعض الفقرات في الحواشي؟' }, target: 'footnoted-passages', note: { en: 'Mark 16, John 8 and 1 John 5, explained plainly.', ar: 'مرقس ١٦ ويوحنا ٨ و١ يوحنا ٥ بلغة واضحة.' } },
      { title: { en: 'Why does God seem hidden or allow suffering?', ar: 'لماذا يبدو الله محتجبًا أو يسمح بالألم؟' }, target: 'hidden-or-suffering', note: { en: 'Stated fairly, with the Christian response labelled as theology.', ar: 'بصياغة منصفة، مع تمييز الرد المسيحي بوصفه لاهوتًا.' } },
      { title: { en: 'Mary: conception and perpetual virginity', ar: 'العذراء: الحبل والبتولية الدائمة' }, target: 'virginal-conception-vs-perpetual-virginity', note: { en: 'Two doctrines with different kinds of support.', ar: 'عقيدتان بنوعين مختلفين من الدعم.' } },
      { title: { en: 'Is doubt sinful?', ar: 'هل الشك خطية؟' }, target: 'is-doubt-sinful', note: { en: 'Still to be written.', ar: 'لم تُكتب بعد.' } },
    ],
  },
  {
    id: 'other-religion',
    slug: 'from-another-religion',
    title: { en: 'If I follow another religion', ar: 'لو كنت أتبع دينًا آخر' },
    summary: { en: 'Choose the objection you have, see exactly where the claims agree and differ, and read the sources. Members of a religion do not all believe the same things, and this site does not assume they do.', ar: 'اختر الاعتراض الذي لديك، وانظر بدقة أين تتفق الدعاوى وأين تختلف، واقرأ المصادر. أتباع الدين الواحد لا يؤمنون كلهم بالأشياء نفسها، والموقع لا يفترض ذلك.' },
    startingPoints: ['other-religion'],
    steps: [
      { title: { en: 'How should competing truth claims be compared?', ar: 'كيف تُقارن دعاوى الحق المتنافسة؟' }, target: 'comparing-religious-truth-claims', note: { en: 'Still to be written.', ar: 'لم تُكتب بعد.' } },
      { title: { en: 'Was Jesus executed under Pilate?', ar: 'هل أُعدم يسوع في ولاية بيلاطس؟' }, target: 'jesus-executed-under-pilate', note: { en: 'The historical evidence for the crucifixion, which some traditions dispute on other grounds.', ar: 'الأدلة التاريخية على الصلب، وبعض التقاليد تنازع فيه لأسباب أخرى.' } },
      { title: { en: 'Qur’an 4:157 and the crucifixion', ar: 'القرآن (النساء ١٥٧) والصلب' }, target: 'quran-4-157-and-crucifixion', note: { en: 'Still to be written, from primary texts and specialists.', ar: 'لم تُكتب بعد، من النصوص الأصلية والمتخصصين.' } },
      { title: { en: 'Has the biblical text changed?', ar: 'هل تغيّر نص الكتاب المقدس؟' }, target: 'has-bible-changed', note: { en: 'The manuscript evidence, set out plainly.', ar: 'أدلة المخطوطات بوضوح.' } },
      { title: { en: 'What does the Trinity affirm?', ar: 'ماذا يقرّر الثالوث؟' }, target: 'what-trinity-affirms', note: { en: 'Still to be written.', ar: 'لم تُكتب بعد.' } },
    ],
  },
  {
    id: 'researcher',
    slug: 'for-researchers',
    title: { en: 'For researchers and teachers', ar: 'للباحثين والمعلمين' },
    summary: { en: 'Source records, exact locators, dating bases, objections and bibliography first; prose second.', ar: 'سجلات المصادر والإحالات الدقيقة وأسس التأريخ والاعتراضات وقائمة المراجع أولًا، ثم النص.' },
    startingPoints: ['studying'],
    steps: [
      { title: { en: 'Methodology and the assessment labels', ar: 'المنهج وتصنيفات التقييم' }, target: 'methodology', note: { en: 'Definitions used on every page.', ar: 'التعريفات المستخدمة في كل صفحة.' } },
      { title: { en: 'The source catalogue', ar: 'فهرس المصادر' }, target: 'sources', note: { en: 'Every lead with its access state, review state and link check.', ar: 'كل مصدر مع حالة الوصول وحالة المراجعة وفحص الرابط.' } },
      { title: { en: 'The timeline', ar: 'الخط الزمني' }, target: 'timeline', note: { en: 'Events, compositions and manuscript witnesses kept apart.', ar: 'الأحداث والتآليف والشواهد المخطوطة منفصلة.' } },
      { title: { en: 'What non-Christian sources establish', ar: 'ماذا تثبت المصادر غير المسيحية' }, target: 'non-christian-sources-establish', note: { en: 'A model for how an article uses sources.', ar: 'نموذج لكيفية استخدام المقالة للمصادر.' } },
      { title: { en: 'What the Dead Sea Scrolls show', ar: 'ماذا تُظهر مخطوطات البحر الميت' }, target: 'dead-sea-scrolls', note: { en: 'Manuscript witnesses and dating.', ar: 'الشواهد المخطوطة وتأريخها.' } },
    ],
  },
];
