import type { Paras } from './types.ts';

interface Block {
  readonly id: string;
  readonly heading: { en: string; ar: string };
  readonly body: Paras;
}

export const METHODOLOGY: readonly Block[] = [
  {
    id: 'claims',
    heading: { en: 'Five different kinds of claim', ar: 'خمسة أنواع مختلفة من الدعاوى' },
    body: {
      en: [
        'A source reports an event. The event probably happened. Early Christians believed it. A philosophical argument supports a conclusion. The Church affirms a doctrine. These are five different claims and each needs its own kind of support. A report is not yet a fact, a belief is not yet proof, and a doctrine is not a historical finding.',
        'Each article keeps them apart: what a source states is shown separately from what we infer from it, and historical inference is shown separately from theological explanation.',
      ],
      ar: [
        'مصدرٌ يروي حدثًا. الحدث غالبًا وقع. المسيحيون الأوائل آمنوا به. حجة فلسفية تدعم نتيجة. الكنيسة تقرّ عقيدة. هذه خمس دعاوى مختلفة، ولكل منها نوع دعمها. الرواية ليست بعدُ واقعة، والاعتقاد ليس بعدُ برهانًا، والعقيدة ليست نتيجة تاريخية.',
        'تفصل كل مقالة بينها: فما يقوله المصدر يُعرض منفصلًا عمّا نستنتجه منه، والاستدلال التاريخي منفصلًا عن الشرح اللاهوتي.',
      ],
    },
  },
  {
    id: 'inspiration',
    heading: { en: 'Scripture as an ancient document', ar: 'الكتاب المقدس بوصفه وثيقة قديمة' },
    body: {
      en: [
        'An argument meant to establish Christianity’s historical credibility must not require the reader to accept biblical inspiration first. When the Bible is used historically, it is read as a collection of ancient documents, with the usual questions about date, authorship, genre and sources. Belief in inspiration is a separate, theological question, and the articles label it so.',
      ],
      ar: [
        'الحجة التي تريد إثبات المصداقية التاريخية للمسيحية يجب ألا تشترط على القارئ أن يقبل الوحي أولًا. وحين يُستخدم الكتاب المقدس تاريخيًا يُقرأ بوصفه مجموعة وثائق قديمة، مع الأسئلة المعتادة عن التاريخ والتأليف والنوع الأدبي والمصادر. أما الإيمان بالوحي فمسألة لاهوتية منفصلة، وتصفها المقالات كذلك.',
      ],
    },
  },
  {
    id: 'labels',
    heading: { en: 'Assessment labels', ar: 'تصنيفات التقييم' },
    body: {
      en: [
        'Each claim carries a label and a written reason for it. The labels are definitions, not percentages. We never state a statistical probability and we never claim that every scholar agrees. Two of the labels, philosophical argument and theological interpretation, name a kind of reasoning; they are not lower grades of confidence.',
        'A label is never a verdict to take on trust: the reasons stand beside it so that you can weigh the argument for yourself.',
      ],
      ar: [
        'يحمل كل ادعاء تصنيفًا وسببًا مكتوبًا له. والتصنيفات تعريفات لا نسب مئوية. لا نذكر احتمالًا إحصائيًا ولا ندّعي أن كل الباحثين متفقون. وتصنيفان منها، هما الحجة الفلسفية والتفسير اللاهوتي، يصفان نوعًا من الاستدلال وليسا درجات أدنى من الثقة.',
        'والتصنيف ليس حكمًا يُؤخذ على الثقة: فالأسباب مكتوبة بجانبه لتزن الحجة بنفسك.',
      ],
    },
  },
  {
    id: 'sources',
    heading: { en: 'How sources are treated', ar: 'كيف نتعامل مع المصادر' },
    body: {
      en: [
        'A source is recorded with what it is (a text, an edition of a text, a book, a museum record, a storefront), whose voice it is when that can be documented, how it was dated, and how much of it the site may show. A modern author’s religion does not decide the value of an argument; it is recorded only when documented, and otherwise marked “not established”.',
        'Two websites hosting the same ancient text are one witness, not two. A publisher page is a pointer to a book, not the book. A source is marked reviewed only when someone has read it, never because its title or synopsis was read. A book we have only by metadata is cited only as a whole work, for the thesis its author states, and never with a chapter, page or quotation we have not seen.',
        'Non-Christian does not mean independent, unbiased, contemporary or reliable, and Christian does not mean the opposite. Each source is weighed on what it can show.',
      ],
      ar: [
        'يُسجَّل كل مصدر بما هو (نص، أو طبعة لنص، أو كتاب، أو سجل متحفي، أو صفحة متجر)، وبصوت مَن هو حين يمكن توثيق ذلك، وكيف أُرِّخ، وكم يمكن للموقع أن يعرض منه. ودين المؤلف المعاصر لا يحدد قيمة حجته؛ ولا يُسجَّل إلا إذا كان موثقًا، وإلا فيوصف بأنه «غير موثّق».',
        'موقعان يستضيفان النص القديم نفسه شاهد واحد لا اثنان. وصفحة الناشر إشارة إلى كتاب وليست الكتاب. ولا يوصف المصدر بأنه «روجع» إلا إذا قرأه أحد، لا لأن عنوانه أو ملخصه قُرئ. والكتاب الذي لدينا عنه بيانات وصفية فقط يُذكر بوصفه عملًا كاملًا، لما يقرره مؤلفه من طرح، ولا يُذكر أبدًا بفصل أو صفحة أو اقتباس لم نره.',
        'كون المصدر غير مسيحي لا يعني أنه مستقل أو محايد أو معاصر أو موثوق، وكونه مسيحيًا لا يعني العكس. يُوزن كل مصدر بما يستطيع إثباته.',
      ],
    },
  },
  {
    id: 'dates',
    heading: { en: 'Dates', ar: 'التواريخ' },
    body: {
      en: [
        'The date a text was composed, the date of the manuscript that survives, and the date an object was found are three different dates, and the timeline keeps them apart. We give ranges with the basis for them, and we do not invent exact years.',
      ],
      ar: [
        'تاريخ تأليف النص وتاريخ المخطوط الباقي وتاريخ العثور على قطعة أثرية ثلاثة تواريخ مختلفة، ويفصل الخط الزمني بينها. نذكر نطاقات مع أساسها، ولا نخترع سنوات دقيقة.',
      ],
    },
  },
  {
    id: 'review',
    heading: { en: 'Review and corrections', ar: 'المراجعة والتصحيحات' },
    body: {
      en: [
        'Questions are answered in the order they are written up, and each answer keeps its revision number. When a source or a claim changes, the articles that depend on it are revised rather than silently changed, and every correction is kept in the article’s history. A named reviewer’s name and the review date appear on an article once one has signed it off.',
      ],
      ar: [
        'تُجاب الأسئلة بحسب ترتيب كتابتها، وتحتفظ كل إجابة برقم نسختها. وعند تغيّر مصدر أو ادعاء تُراجَع المقالات المعتمدة عليه بدل تعديلها بصمت، وتُحفظ كل التصحيحات في سجل المقالة. ويظهر اسم المراجع وتاريخ المراجعة على المقالة متى اعتمدها مراجع مسمّى.',
      ],
    },
  },
  {
    id: 'limits',
    heading: { en: 'What this section does not do', ar: 'ما لا يفعله هذا القسم' },
    body: {
      en: [
        'It does not promise that every doctrine has conclusive proof outside the faith. It does not score readers, label their beliefs or pressure anyone. It does not claim to answer every doubt: the backlog lists questions that still have no answer, and says so.',
      ],
      ar: [
        'لا يعد هذا القسم بأن لكل عقيدة برهانًا قاطعًا من خارج الإيمان. ولا يقيّم القرّاء ولا يصنّف معتقداتهم ولا يضغط على أحد. ولا يزعم أنه يجيب عن كل شك: فقائمة الانتظار تذكر الأسئلة التي لا إجابة لها بعد، وتقول ذلك صراحة.',
      ],
    },
  },
];

export const ABOUT: readonly Block[] = [
  {
    id: 'perspective',
    heading: { en: 'The perspective', ar: 'المنظور' },
    body: {
      en: [
        'This section is written from a Coptic Orthodox Christian perspective, and says so. Its aim is to explain and defend the Christian faith through evidence that can be inspected, reasoning that can be tested, and the teaching of the Church, while treating objections fairly.',
      ],
      ar: [
        'يُكتب هذا القسم من منظور مسيحي قبطي أرثوذكسي، ويقول ذلك. وهدفه شرح الإيمان المسيحي والدفاع عنه بأدلة يمكن فحصها واستدلال يمكن اختباره وتعليم الكنيسة، مع معاملة الاعتراضات بإنصاف.',
      ],
    },
  },
  {
    id: 'authors',
    heading: { en: 'Authors and reviewers', ar: 'الكتّاب والمراجعون' },
    body: {
      en: [
        'The articles are written by the Orthodoxia editorial team. When a historian, theologian or language reviewer signs an article off, their name, role and the date appear on it.',
      ],
      ar: [
        'يكتب المقالات فريق أرثوذكسيا التحريري. وحين يعتمد مقالةً مؤرخ أو لاهوتي أو مراجع لغوي يظهر عليها اسمه ودوره والتاريخ.',
      ],
    },
  },
  {
    id: 'luka',
    heading: { en: 'Fr Luka Maher’s book on the existence of God', ar: 'كتاب الأب لوقا ماهر عن وجود الله' },
    body: {
      en: [
        'The book «حقيقة وجود الله» (series of defensive theology, part two) by Fr Luka Maher is catalogued as a lead, metadata only, awaiting an authorised copy. Nothing from its contents is used on this site: no chapter titles, quotations, arguments or page numbers have been taken from it. When an authorised copy is available it will be read, its arguments mapped to the questions on the existence of God, and its scientific and historical references traced to their originals and reviewed before anything is published, with exact citation and only permitted short excerpts.',
        'The same applies to his talks. Episode titles are not arguments, so no episode is summarised until it has been listened to and checked.',
      ],
      ar: [
        'كتاب «حقيقة وجود الله» (سلسلة اللاهوت الدفاعي، الجزء الثاني) للأب لوقا ماهر مفهرس بوصفه إشارة مصدر، ببيانات وصفية فقط، في انتظار نسخة مصرّح بها. ولا يُستخدم أي شيء من محتواه في هذا الموقع: فلم تؤخذ منه عناوين فصول ولا اقتباسات ولا حجج ولا أرقام صفحات. وحين تتوفر نسخة مصرّح بها ستُقرأ، وتُربط حججه بأسئلة وجود الله، وتُرجع مراجعه العلمية والتاريخية إلى أصولها وتُراجع قبل نشر أي شيء، مع إحالة دقيقة ومقتطفات قصيرة مسموح بها فقط.',
        'وينطبق ذلك على محاضراته. فعناوين الحلقات ليست حججًا، ولذلك لا تُلخَّص أي حلقة قبل الاستماع إليها والتحقق منها.',
      ],
    },
  },
  {
    id: 'privacy',
    heading: { en: 'Privacy', ar: 'الخصوصية' },
    body: {
      en: [
        'What you choose as a starting point, the questions you save, your reading progress and your reading depth are kept in your own browser. They are not sent to us, put in links or given to analytics, and you can erase them at any time. The search runs in your browser against a file downloaded from this site. The box that asks for your biggest question does not store or send what you type.',
      ],
      ar: [
        'ما تختاره نقطةَ بداية، والأسئلة التي تحفظها، وتقدّمك في القراءة، وعمق القراءة، كلها تبقى في متصفحك. لا تُرسل إلينا ولا توضع في الروابط ولا تُعطى لأدوات التحليل، ويمكنك محوها في أي وقت. ويعمل البحث في متصفحك على ملف يُنزَّل من الموقع. أما خانة «أكبر سؤال» فلا تحفظ ما تكتبه ولا ترسله.',
      ],
    },
  },
  {
    id: 'corrections',
    heading: { en: 'Corrections', ar: 'التصحيحات' },
    body: {
      en: [
        'Every article ends with its revision and its correction history. If you find an error, the button at the end of the article copies a short report with the page address and revision. An inbox for these reports has not been set up yet, so nothing is sent automatically.',
      ],
      ar: [
        'تنتهي كل مقالة بنسختها وسجل تصحيحاتها. وإن وجدت خطأً، فالزر في آخر المقالة ينسخ بلاغًا قصيرًا بعنوان الصفحة والنسخة. ولم يُعدّ صندوق بريد لهذه البلاغات بعد، لذلك لا يُرسل شيء تلقائيًا.',
      ],
    },
  },
];
