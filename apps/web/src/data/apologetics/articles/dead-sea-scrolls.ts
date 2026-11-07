import type { Article } from '../types.ts';

export const article: Article = {
  id: 'dead-sea-scrolls',
  questionId: 'dead-sea-scrolls',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article explains what the Dead Sea Scrolls are, when and where they were found, what they show about the copying of the Hebrew Bible, and what they do not show. It does not discuss the New Testament text, the canon of the Old Testament, or the full debate about who lived at Qumran.',
    ar: 'تشرح هذه المقالة ما هي مخطوطات البحر الميت، ومتى وأين وُجدت، وما تُظهره عن نسخ الكتاب العبري، وما لا تُظهره. ولا تتناول نص العهد الجديد، ولا قانون العهد القديم، ولا الجدل الكامل حول من سكن قمران.',
  },
  shortAnswer: {
    en: 'The Dead Sea Scrolls are a large collection of manuscripts found from 1947 in caves near Qumran, dated from about the third century BC to the first century AD. They include copies of almost every book of the Hebrew Bible, a thousand years older than the medieval manuscripts known before. Many biblical scrolls agree closely with the later Masoretic Text, which shows how faithfully the Scriptures were copied over a thousand years. Others agree with the Hebrew text behind the Septuagint, the Greek Old Testament the Church has read from the beginning, so the scrolls also show that the Church’s Greek Bible rests on ancient Hebrew witnesses. The scrolls come from a Jewish community before and around the time of Christ and do not mention Him.',
    ar: 'مخطوطات البحر الميت مجموعة كبيرة من المخطوطات عُثر عليها منذ سنة 1947 في كهوف قرب قمران، ويعود تاريخها إلى ما بين القرن الثالث قبل الميلاد والقرن الأول الميلادي تقريبًا. وتشمل نسخًا من معظم أسفار الكتاب العبري، أقدم بألف سنة من مخطوطات القرون الوسطى التي كانت معروفة قبلها. وتتفق مخطوطات كتابية كثيرة اتفاقًا وثيقًا مع النص الماسوري اللاحق، وهذا يُظهر أمانة نسخ الكتب المقدسة على مدى ألف سنة. وتتفق مخطوطات أخرى مع النص العبري الذي تقوم عليه السبعينية، أي العهد القديم اليوناني الذي تقرؤه الكنيسة منذ البدء، فتُظهر المخطوطات أيضًا أن كتاب الكنيسة اليوناني يقوم على شواهد عبرية قديمة. وهي من جماعة يهودية عاشت قبل زمن المسيح وحوله، ولا تذكره.',
  },
  quickPoints: {
    en: [
      'The scrolls were found in caves near Qumran, beginning in 1947, and date from roughly the third century BC to the first century AD.',
      'The Great Isaiah Scroll agrees closely with the later Masoretic Text in most of its content; its differences are mainly in spelling and a number of individual readings.',
      'Other Qumran texts, for example some of Samuel and Jeremiah, are close to the Hebrew text behind the Septuagint, the Old Testament the Church received in Greek.',
      'The scrolls do not mention Jesus, John the Baptist or Christians; most were written before His time, by a different community.',
      'Some of the non-biblical scrolls describe a community with its own rules, often identified with the Essenes.',
      'The scrolls show the Scriptures copied with great care across many centuries, and they honour both the Hebrew and the Greek traditions of the Old Testament.',
    ],
    ar: [
      'عُثر على المخطوطات في كهوف قرب قمران بدءًا من سنة 1947، ويعود تاريخها إلى ما بين القرن الثالث قبل الميلاد والقرن الأول الميلادي تقريبًا.',
      'تتفق لفافة إشعياء الكبرى اتفاقًا وثيقًا مع النص الماسوري اللاحق في أغلب محتواها، واختلافاتها في الغالب في الإملاء وفي عدد من القراءات المنفردة.',
      'نصوص قمرانية أخرى، مثل بعض صموئيل وإرميا، قريبة من النص العبري الذي تقوم عليه السبعينية، أي العهد القديم الذي تسلّمته الكنيسة باليونانية.',
      'لا تذكر المخطوطات يسوع ولا يوحنا المعمدان ولا المسيحيين، فمعظمها كُتب قبل زمنه، وهي من جماعة أخرى.',
      'بعض المخطوطات غير الكتابية تصف جماعة لها قواعدها الخاصة، وكثيرًا ما تُنسب إلى الأسينيين.',
      'تُظهر المخطوطات أن الكتب المقدسة نُسخت بعناية كبيرة عبر قرون كثيرة، وتكرّم التقليدين العبري واليوناني للعهد القديم معًا.',
    ],
  },
  argumentTypes: ['archaeological', 'textual', 'historical'],
  assessment: {
    label: 'supported_disputed_details',
    explanation: {
      en: 'The discovery, the date range and the general picture of close agreement together with real textual variety are well supported by specialist work. The identity of the community, the exact dates of individual scrolls and how to describe the relation between text types are disputed.',
      ar: 'الاكتشاف ومدى التواريخ والصورة العامة التي تجمع بين اتفاق وثيق وتنوع نصي حقيقي مسنودة بالدراسات المتخصصة. أما هوية الجماعة والتواريخ الدقيقة للمخطوطات المنفردة وكيفية وصف العلاقة بين أنماط النص فمحل خلاف.',
    },
  },
  whyExamine: {
    en: [
      'The scrolls are often quoted with slogans, either that nothing in the Old Testament ever changed or that it was freely rewritten. What they actually show is better than either slogan: a text copied with great care, preserved in more than one ancient form.',
      'They matter to Christians in a special way, because the Church received the Old Testament in Greek (the Septuagint) as well as in Hebrew, and the scrolls show that both traditions reach back to ancient Hebrew manuscripts.',
    ],
    ar: [
      'كثيرًا ما تُستعمل المخطوطات في شعارات: إما أن شيئًا في العهد القديم لم يتغير قط، وإما أنه أُعيدت كتابته بحرية. وما تُظهره فعلًا أفضل من الشعارين: نص نُسخ بعناية كبيرة وحُفظ في أكثر من صيغة قديمة.',
      'وهي تهم المسيحيين على نحو خاص، لأن الكنيسة تسلّمت العهد القديم باليونانية (السبعينية) كما بالعبرية، والمخطوطات تُظهر أن التقليدين كليهما يرجعان إلى مخطوطات عبرية قديمة.',
    ],
  },
  background: {
    en: [
      'The first scrolls were found in 1947 in a cave near Qumran, on the northwest shore of the Dead Sea. In the following years, searchers found further caves and many thousands of fragments. Scholars refer to the finds by cave and number. The collection includes copies of books of the Hebrew Bible, other Jewish religious writings, and texts that describe the rules and beliefs of a particular community.',
      'The scrolls are dated by the shapes of their letters, by radiocarbon tests on some, and by their content. Together, the results place most of them between roughly the third century BC and the first century AD, with variation from scroll to scroll. Before this discovery, the oldest complete Hebrew manuscripts of the Old Testament were medieval.',
      'The Great Isaiah Scroll, a well-preserved copy of the whole book of Isaiah, is the best-known biblical scroll. Compared with the Masoretic Text it agrees in most of its content, but it has differences in spelling, in some words and in some readings.',
      'Not every Qumran text of a book is like the Masoretic Text. Specialists such as Emanuel Tov describe different text types among the finds, and note that some fragments of books like Samuel and Jeremiah reflect a Hebrew form close to the one the Septuagint translators seem to have used. This is one reason why modern scholars speak of a plurality of texts in this period.',
      'Some of the non-biblical scrolls describe a community with its own rules, often identified with the Essenes, who lived at or near Qumran.',
    ],
    ar: [
      'عُثر على أولى المخطوطات سنة 1947 في كهف قرب قمران على الشاطئ الشمالي الغربي للبحر الميت. وفي السنوات التالية وجد الباحثون كهوفًا أخرى وآلاف الشذرات. ويشير الباحثون إلى المكتشفات بحسب الكهف والرقم. وتتضمن المجموعة نسخًا من أسفار الكتاب العبري، وكتابات دينية يهودية أخرى، ونصوصًا تصف قواعد جماعة بعينها ومعتقداتها.',
      'تُؤرَّخ المخطوطات بأشكال حروفها، وباختبارات الكربون المشع لبعضها، وبمضمونها. وتضع النتائج مجتمعةً معظمها بين القرن الثالث قبل الميلاد والقرن الأول الميلادي تقريبًا، مع تفاوت من مخطوط إلى آخر. وقبل هذا الاكتشاف كانت أقدم المخطوطات العبرية الكاملة للعهد القديم من العصور الوسطى.',
      'لفافة إشعياء الكبرى، وهي نسخة جيدة الحفظ لسفر إشعياء كله، أشهر اللفائف الكتابية. وهي تتفق مع النص الماسوري في أغلب محتواها، لكن فيها اختلافات في الإملاء وفي بعض الكلمات وبعض القراءات.',
      'ليس كل نص قمراني لسفر ما مثل النص الماسوري. فيصف متخصصون مثل عمانويل توف أنماطًا نصية مختلفة بين المكتشفات، ويلاحظون أن بعض شذرات أسفار مثل صموئيل وإرميا تعكس صيغة عبرية قريبة من التي يبدو أن مترجمي السبعينية استعملوها. وهذا أحد أسباب حديث الباحثين المعاصرين عن تعدد النصوص في هذه الفترة.',
      'بعض المخطوطات غير الكتابية تصف جماعة لها قواعدها الخاصة، وكثيرًا ما تُنسب إلى الأسينيين الذين سكنوا في قمران أو بالقرب منها.',
    ],
  },
  glossary: ['dead-sea-scrolls', 'masoretic-text', 'septuagint', 'manuscript', 'textual-variant'],
  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'The scrolls were found from 1947 in caves near Qumran, and most date from roughly the third century BC to the first century AD.',
        ar: 'عُثر على المخطوطات منذ سنة 1947 في كهوف قرب قمران، ويعود معظمها إلى ما بين القرن الثالث قبل الميلاد والقرن الأول الميلادي تقريبًا.',
      },
      argumentType: 'archaeological',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'The discovery and the general date range are reported by the museum that holds the main scrolls, and they rest on letter shapes, radiocarbon tests and content together.',
        ar: 'يذكر اكتشافَ المخطوطات ومدى تواريخها العام المتحفُ الذي يحتفظ بالمخطوطات الرئيسية، ويقوم ذلك على أشكال الحروف واختبارات الكربون المشع والمضمون معًا.',
      },
      limits: {
        en: 'The date of an individual scroll is a range with its own basis, not an exact year.',
        ar: 'تاريخ مخطوط بعينه مدى له أساسه الخاص، وليس سنة دقيقة.',
      },
      evidence: ['e1'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'The Great Isaiah Scroll agrees closely with the later Masoretic Text in most of its content, with differences mainly in spelling and some readings.',
        ar: 'تتفق لفافة إشعياء الكبرى اتفاقًا وثيقًا مع النص الماسوري اللاحق في أغلب محتواها، واختلافاتها في الغالب في الإملاء وبعض القراءات.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'A complete copy of Isaiah from before the time of Christ can now be laid beside medieval manuscripts, and the book is recognisably the same. That is a striking witness to the care of those who copied the Scriptures.',
        ar: 'صار ممكنًا أن توضع نسخة كاملة من إشعياء ترجع إلى ما قبل زمن المسيح بجانب مخطوطات القرون الوسطى، والسفر هو نفسه بوضوح. وهذه شهادة لافتة لعناية الذين نسخوا الكتب المقدسة.',
      },
      limits: {
        en: 'The claim is stated at the level of the specialist consensus, not as a count of individual differences in the scroll.',
        ar: 'الدعوى معروضة على مستوى ما تقوله الدراسات المتخصصة عمومًا، لا بوصفها إحصاءً للاختلافات المنفردة في اللفافة.',
      },
      evidence: ['e2', 'e1'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'The Qumran finds include Hebrew texts that agree with the Hebrew basis of the Septuagint in books such as Samuel and Jeremiah.',
        ar: 'تتضمن مكتشفات قمران نصوصًا عبرية تتفق مع الأساس العبري للسبعينية في أسفار مثل صموئيل وإرميا.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'This is a standard result in Hebrew Bible textual criticism, as represented by Tov’s textbook. It shows that where the Septuagint differs from the Masoretic Text, it often reflects an ancient Hebrew text, not a free change by the translators.',
        ar: 'هذه نتيجة معتمدة في النقد النصي للكتاب العبري، كما يمثلها كتاب توف الدراسي. وهي تُظهر أن السبعينية، حيث تختلف عن النص الماسوري، كثيرًا ما تعكس نصًا عبريًا قديمًا، لا تغييرًا حرًا من المترجمين.',
      },
      limits: {
        en: 'It does not tell us which form is earlier in each case or which the Church should prefer.',
        ar: 'لا يخبرنا أي الصيغتين أقدم في كل حالة، ولا أيهما ينبغي أن تفضّلها الكنيسة.',
      },
      evidence: ['e3'],
    },
    {
      id: 'c4',
      proposition: {
        en: 'The scrolls come from a Jewish community before and around the time of Christ, and they do not mention Jesus or Christians.',
        ar: 'المخطوطات من جماعة يهودية عاشت قبل زمن المسيح وحوله، ولا تذكر يسوع ولا المسيحيين.',
      },
      argumentType: 'historical',
      assessment: 'actively_debated',
      rationale: {
        en: 'Most of the scrolls were copied or written before His public ministry, and they reflect the life and rules of their own community. They are a window onto the Jewish world into which the Lord came, not a record of His life.',
        ar: 'نُسخ معظم المخطوطات أو كُتب قبل خدمته العلنية، وهي تعكس حياة جماعتها وقواعدها. فهي نافذة على العالم اليهودي الذي جاء إليه الرب، لا سجل لحياته.',
      },
      limits: {
        en: 'Silence about Jesus proves nothing for or against him, since the scrolls come from a different community and were mostly written before his time.',
        ar: 'السكوت عن يسوع لا يثبت شيئًا له ولا عليه، فالمخطوطات من جماعة أخرى وكُتب معظمها قبل زمنه.',
      },
      evidence: ['e1', 'e3'],
    },
  ],
  evidence: [
    {
      id: 'e1',
      sourceId: 'S25',
      locator: 'whole work (digital library as a whole; no individual scroll cited)',
      role: 'context',
      states: {
        en: 'The Israel Museum’s digital library gives high-resolution images of the scrolls and describes them as dating from roughly the third century BC to the first century AD, with variation by scroll.',
        ar: 'تقدم المكتبة الرقمية لمتحف إسرائيل صورًا عالية الدقة للمخطوطات، وتصفها بأنها تعود إلى ما بين القرن الثالث قبل الميلاد والقرن الأول الميلادي تقريبًا، مع تفاوت بحسب كل مخطوط.',
      },
      inference: {
        en: 'The primary material is available for viewing by anyone. Image reuse is restricted, so the site links rather than reproduces.',
        ar: 'المادة الأولية متاحة لأي شخص ليراها. وإعادة استخدام الصور مقيّدة، فيكتفي الموقع بالإحالة دون النسخ.',
      },
    },
    {
      id: 'e2',
      sourceId: 'S26',
      locator: 'whole work (essay as a whole; no detail of the scroll cited)',
      role: 'context',
      states: {
        en: 'The Smithsonian record is a concrete example of the relation between a Qumran Isaiah text and later texts.',
        ar: 'سجل السميثسونية مثال محدد على العلاقة بين نص إشعياء القمراني والنصوص اللاحقة.',
      },
      inference: {
        en: 'It is offered as a pointer to an example. No specific detail from it is stated here.',
        ar: 'يُقدَّم مؤشرًا إلى مثال. ولا يُذكر هنا تفصيل محدد منه.',
      },
    },
    {
      id: 'e3',
      sourceId: 'S28',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'context',
      states: {
        en: 'Tov’s textbook surveys the textual traditions of the Hebrew Bible (Masoretic, Septuagint and Qumran) and explains how the Qumran finds changed scholars’ picture of the text in the last centuries before Christ.',
        ar: 'يستعرض كتاب توف الدراسي التقاليد النصية للكتاب العبري (الماسوري والسبعيني والقمراني)، ويشرح كيف غيّرت مكتشفات قمران صورة الباحثين عن النص في القرون الأخيرة قبل المسيح.',
      },
      inference: {
        en: 'The Hebrew text of that period was plural. No page is cited.',
        ar: 'كان النص العبري في تلك الفترة متعددًا. ولا تُذكر أي صفحة.',
      },
    },
  ],
  objections: [
    {
      id: 'o1',
      statement: {
        en: 'The Isaiah Scroll proves that the Old Testament has come down unchanged for two thousand years.',
        ar: 'تثبت لفافة إشعياء أن العهد القديم وصل دون تغيير طوال ألفي سنة.',
      },
      response: {
        en: [
          'The scroll agrees closely with the later text in most of its content, and that is remarkable: a book copied by hand for a thousand years has come down to us recognisably the same. Its differences are mostly in spelling and individual readings.',
          'The scrolls as a whole show that some books circulated in more than one ancient form. The Church has always read the Old Testament in both Hebrew and Greek, so this is no threat; it shows that the Scriptures were guarded with care in each tradition.',
        ],
        ar: [
          'اللفافة تتفق مع النص اللاحق اتفاقًا وثيقًا في أغلب محتواها، وهذا لافت: فسفر نُسخ باليد ألف سنة وصل إلينا وهو نفسه بوضوح. واختلافاته في الغالب في الإملاء وفي قراءات منفردة.',
          'وتُظهر المخطوطات في مجملها أن بعض الأسفار تداولت في أكثر من صيغة قديمة. والكنيسة قرأت العهد القديم دائمًا بالعبرية واليونانية، فلا تهديد في ذلك؛ بل هو يُظهر أن الكتب المقدسة حُفظت بعناية في كل تقليد.',
        ],
      },
      limits: {
        en: 'It does not resolve how the observed differences affect the meaning of particular passages.',
        ar: 'لا يحسم هذا كيف تؤثر الاختلافات الملاحظة في معنى فقرات بعينها.',
      },
      evidence: ['e2', 'e3'],
    },
    {
      id: 'o2',
      statement: {
        en: 'The scrolls show that the text was fluid, so there is no stable text of the Old Testament.',
        ar: 'تُظهر المخطوطات أن النص كان سائلًا، فلا يوجد نص ثابت للعهد القديم.',
      },
      response: {
        en: [
          'Some books did circulate in more than one ancient form. But that is not chaos. Many manuscripts agree closely with the later Masoretic Text, which shows that one tradition was copied with great care, and others agree with the Hebrew behind the Septuagint.',
          'The Old Testament is stable in its books, its message and the great body of its text. The variety concerns readings and editions, and the Church, which reads both the Hebrew and the Greek, has never been troubled by it.',
        ],
        ar: [
          'تداولت بعض الأسفار فعلًا في أكثر من صيغة قديمة. لكن هذا ليس فوضى. فمخطوطات كثيرة تتفق اتفاقًا وثيقًا مع النص الماسوري اللاحق، وهذا يُظهر أن تقليدًا واحدًا نُسخ بعناية كبيرة، وتتفق أخرى مع العبرية التي تقوم عليها السبعينية.',
          'والعهد القديم ثابت في أسفاره ورسالته والجسم الأكبر من نصه. والتنوع يخص القراءات والصيغ، والكنيسة التي تقرأ العبرية واليونانية معًا لم تضطرب منه قط.',
        ],
      },
      limits: {
        en: 'This does not settle which form should count as the authoritative text for a given book.',
        ar: 'لا يحسم هذا أي صيغة ينبغي أن تُعدّ النص المرجعي لسفر بعينه.',
      },
      evidence: ['e3'],
    },
    {
      id: 'o3',
      statement: {
        en: 'The scrolls come from the time of Jesus, yet they never mention him, which shows that he was not important or did not exist.',
        ar: 'تعود المخطوطات إلى زمن يسوع ومع ذلك لا تذكره أبدًا، وهذا يدل على أنه لم يكن مهمًا أو لم يوجد.',
      },
      response: {
        en: [
          'Most scrolls were copied or written before His lifetime, and the collection comes from a particular community in a particular place. A silence in that collection says nothing about someone outside it.',
          'The existence of Jesus is attested by many other sources, Christian and non-Christian, discussed in their own articles. The scrolls are simply not a Christian archive.',
        ],
        ar: [
          'نُسخ معظم المخطوطات أو كُتب قبل حياته، والمجموعة تعود إلى جماعة معينة في مكان معين. والسكوت في هذه المجموعة لا يقول شيئًا عن شخص خارجها.',
          'ووجود يسوع تشهد له مصادر أخرى كثيرة، مسيحية وغير مسيحية، تناقشها مقالات مستقلة. والمخطوطات ببساطة ليست أرشيفًا مسيحيًا.',
        ],
      },
      limits: {
        en: 'It does not show that the community knew of Jesus or had any relation to the early church.',
        ar: 'لا يثبت هذا أن الجماعة عرفت يسوع أو كانت لها علاقة بالكنيسة الأولى.',
      },
      evidence: ['e1'],
    },
  ],
  christianResponse: {
    historical: {
      en: [
        'The scrolls bring the manuscript evidence for the Hebrew Bible back about a thousand years. They allow a direct comparison with medieval manuscripts and show how carefully the Scriptures were copied.',
        'They are also a window onto the Jewish world in which the Lord lived and the New Testament was written, with its love of Scripture, its community rules and its hope for the coming of God’s Anointed.',
      ],
      ar: [
        'تعيد المخطوطات شواهد المخطوطات للكتاب العبري إلى الوراء نحو ألف سنة. وهي تتيح مقارنة مباشرة بمخطوطات القرون الوسطى، وتُظهر مدى العناية التي نُسخت بها الكتب المقدسة.',
        'وهي أيضًا نافذة على العالم اليهودي الذي عاش فيه الرب وكُتب فيه العهد الجديد، بمحبته للكتاب المقدس وقواعد جماعاته ورجائه في مجيء مسيح الله.',
      ],
    },
    theological: {
      en: [
        'The Church has received the Old Testament in the Greek tradition of the Septuagint as well as the Hebrew one. The finding that the Qumran texts include Hebrew forms close to the Septuagint’s basis shows that the older Greek reading is often a faithful witness to an ancient Hebrew text, not a free departure from it. The Church’s ancient use of the Septuagint, shared with the apostles, is confirmed rather than weakened.',
        'These are statements of faith and interpretation, kept apart from the historical description above.',
      ],
      ar: [
        'تسلّمت الكنيسة العهد القديم في التقليد اليوناني للسبعينية كما في التقليد العبري. ووجود صيغ عبرية في نصوص قمران قريبة من أساس السبعينية يُظهر أن القراءة اليونانية القديمة كثيرًا ما تكون شاهدًا أمينًا لنص عبري قديم، لا انحرافًا حرًا عنه. فاستعمال الكنيسة القديم للسبعينية، الذي شاركت فيه الرسل، يتأكد ولا يضعف.',
        'وهذه عبارات إيمان وتفسير، تُبقى منفصلة عن الوصف التاريخي أعلاه.',
      ],
    },
  },
  coptic: null,
  disputed: {
    en: [
      'Scholars disagree about who the community was, whether the settlement at Qumran is directly connected with the scrolls found in the caves, and where the scrolls were written and gathered. They also disagree about how to classify the Hebrew text types and how far a standard text had developed before the first century AD.',
      'The exact dates of individual scrolls are given as ranges, and new analysis can refine them.',
    ],
    ar: [
      'يختلف الباحثون في هوية الجماعة، وفي ما إذا كان موقع قمران مرتبطًا مباشرة بالمخطوطات التي وُجدت في الكهوف، وفي أين كُتبت المخطوطات وجُمعت. ويختلفون أيضًا في تصنيف أنماط النص العبري، وفي مدى تكوّن نص معياري قبل القرن الأول الميلادي.',
      'وتُعطى التواريخ الدقيقة لمخطوطات منفردة في صورة مدى، ويمكن للتحليلات الجديدة أن تدقّقها.',
    ],
  },
  conclusion: {
    en: 'The Dead Sea Scrolls bring the manuscript evidence for the Old Testament back by about a thousand years. They show the Scriptures copied with great care across the centuries, and they show that the Septuagint, the Old Testament of the apostles and of the Church, rests on ancient Hebrew witnesses. The Church reads both traditions with confidence, receiving the Old Testament as the word that prepared for Christ.',
    ar: 'تعيد مخطوطات البحر الميت شواهد المخطوطات للعهد القديم إلى الوراء نحو ألف سنة. وهي تُظهر أن الكتب المقدسة نُسخت بعناية كبيرة عبر القرون، وأن السبعينية، العهد القديم الذي قرأه الرسل والكنيسة، تقوم على شواهد عبرية قديمة. والكنيسة تقرأ التقليدين بثقة، متسلّمةً العهد القديم كلمةً هيّأت لمجيء المسيح.',
  },
  furtherReading: ['S25', 'S26', 'S28'],
  related: ['has-bible-changed', 'septuagint-and-masoretic', 'what-is-a-textual-variant', 'preservation-vs-inspiration', 'footnoted-passages'],
};
