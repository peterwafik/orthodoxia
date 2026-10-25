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
    en: 'The Dead Sea Scrolls are a large collection of manuscripts found from 1947 in caves near Qumran, dated roughly from the third century BC to the first century AD. They include copies of almost every book of the Hebrew Bible, together with other Jewish writings. Many biblical texts agree closely with the later Masoretic Text, which shows real continuity in copying over about a thousand years. They also show that more than one form of some books was in use, so they support continuity, not identity. They do not mention Jesus or the early Christians.',
    ar: 'مخطوطات البحر الميت مجموعة كبيرة من المخطوطات عُثر عليها منذ سنة 1947 في كهوف قرب قمران، ويعود تاريخها تقريبًا إلى ما بين القرن الثالث قبل الميلاد والقرن الأول الميلادي. وتشمل نسخًا من معظم أسفار الكتاب العبري، إلى جانب كتابات يهودية أخرى. وتتفق نصوص كتابية كثيرة اتفاقًا وثيقًا مع النص الماسوري اللاحق، وهذا يدل على استمرارية حقيقية في النسخ على نحو ألف سنة. لكنها تُظهر أيضًا أن أكثر من صيغة لبعض الأسفار كانت مستعملة، فهي تسند الاستمرارية لا التطابق. ولا تذكر يسوع ولا المسيحيين الأوائل.',
  },
  quickPoints: {
    en: [
      'The scrolls were found in caves near Qumran, beginning in 1947, and date from roughly the third century BC to the first century AD.',
      'The Great Isaiah Scroll agrees closely with the later Masoretic Text in most of its content, yet it has differences, such as spelling and a number of variant readings.',
      'Other Qumran texts, for example some of Samuel and Jeremiah, are closer to the Hebrew text behind the Septuagint, so more than one text form circulated.',
      'The scrolls do not mention Jesus, John the Baptist or Christians, and they are not a New Testament manuscript find.',
      'Many scholars link the community behind some of the scrolls with the Essenes, but this identification is debated.',
      'The scrolls support careful transmission and show variety. They do not prove that nothing ever changed.',
    ],
    ar: [
      'عُثر على المخطوطات في كهوف قرب قمران بدءًا من سنة 1947، ويعود تاريخها إلى ما بين القرن الثالث قبل الميلاد والقرن الأول الميلادي تقريبًا.',
      'تتفق لفافة إشعياء الكبرى اتفاقًا وثيقًا مع النص الماسوري اللاحق في أغلب محتواها، ومع ذلك فيها اختلافات، منها الإملاء وعدد من القراءات المتباينة.',
      'نصوص قمرانية أخرى، مثل بعض صموئيل وإرميا، أقرب إلى النص العبري الذي تقوم عليه الترجمة السبعينية، فقد كان أكثر من صيغة للنص متداولًا.',
      'لا تذكر المخطوطات يسوع ولا يوحنا المعمدان ولا المسيحيين، وهي ليست كشفًا لمخطوطات العهد الجديد.',
      'يربط كثير من الباحثين الجماعة التي تقف وراء بعض المخطوطات بالأسينيين، لكن هذا التحديد محل جدل.',
      'تسند المخطوطات النقل المتأني وتُظهر التنوع. ولا تثبت أن شيئًا لم يتغير قط.',
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
      'The scrolls are often quoted in both directions: as proof that the Old Testament has been preserved perfectly, and as proof that it was freely rewritten. Neither slogan fits what specialists describe. Looking at what they actually are lets readers hear a more careful answer.',
      'They matter to Christians too, because the Old Testament that the Church reads was received in Greek (the Septuagint) as well as in Hebrew, and the scrolls bear on how those two traditions relate.',
    ],
    ar: [
      'كثيرًا ما تُستعمل المخطوطات في الاتجاهين: دليلًا على أن العهد القديم حُفظ حفظًا كاملًا، ودليلًا على أنه أُعيدت كتابته بحرية. ولا يوافق أي من الشعارين ما يصفه المتخصصون. والنظر إلى حقيقتها يتيح للقراء سماع جواب أكثر تأنيًا.',
      'وهي تهم المسيحيين أيضًا، لأن العهد القديم الذي تقرؤه الكنيسة وصل إليها باليونانية (السبعينية) كما وصل بالعبرية، والمخطوطات تتصل بالعلاقة بين التقليدين.',
    ],
  },
  background: {
    en: [
      'The first scrolls were found in 1947 in a cave near Qumran, on the northwest shore of the Dead Sea. In the following years, searchers found further caves and many thousands of fragments. Scholars refer to the finds by cave and number. The collection includes copies of books of the Hebrew Bible, other Jewish religious writings, and texts that describe the rules and beliefs of a particular community.',
      'The scrolls are dated by the shapes of their letters, by radiocarbon tests on some, and by their content. Together, the results place most of them between roughly the third century BC and the first century AD, with variation from scroll to scroll. Before this discovery, the oldest complete Hebrew manuscripts of the Old Testament were medieval.',
      'The Great Isaiah Scroll, a well-preserved copy of the whole book of Isaiah, is the best-known biblical scroll. Compared with the Masoretic Text it agrees in most of its content, but it has differences in spelling, in some words and in some readings.',
      'Not every Qumran text of a book is like the Masoretic Text. Specialists such as Emanuel Tov describe different text types among the finds, and note that some fragments of books like Samuel and Jeremiah reflect a Hebrew form close to the one the Septuagint translators seem to have used. This is one reason why modern scholars speak of a plurality of texts in this period.',
      'Some of the non-biblical scrolls describe a community with its own rules. Many scholars think this was an Essene community living at or near Qumran. Others question whether the settlement and the scrolls can be tied together so neatly, or suggest that the scrolls came from several places, including Jerusalem libraries. The matter is debated.',
    ],
    ar: [
      'عُثر على أولى المخطوطات سنة 1947 في كهف قرب قمران على الشاطئ الشمالي الغربي للبحر الميت. وفي السنوات التالية وجد الباحثون كهوفًا أخرى وآلاف الشذرات. ويشير الباحثون إلى المكتشفات بحسب الكهف والرقم. وتتضمن المجموعة نسخًا من أسفار الكتاب العبري، وكتابات دينية يهودية أخرى، ونصوصًا تصف قواعد جماعة بعينها ومعتقداتها.',
      'تُؤرَّخ المخطوطات بأشكال حروفها، وباختبارات الكربون المشع لبعضها، وبمضمونها. وتضع النتائج مجتمعةً معظمها بين القرن الثالث قبل الميلاد والقرن الأول الميلادي تقريبًا، مع تفاوت من مخطوط إلى آخر. وقبل هذا الاكتشاف كانت أقدم المخطوطات العبرية الكاملة للعهد القديم من العصور الوسطى.',
      'لفافة إشعياء الكبرى، وهي نسخة جيدة الحفظ لسفر إشعياء كله، أشهر اللفائف الكتابية. وهي تتفق مع النص الماسوري في أغلب محتواها، لكن فيها اختلافات في الإملاء وفي بعض الكلمات وبعض القراءات.',
      'ليس كل نص قمراني لسفر ما مثل النص الماسوري. فيصف متخصصون مثل عمانويل توف أنماطًا نصية مختلفة بين المكتشفات، ويلاحظون أن بعض شذرات أسفار مثل صموئيل وإرميا تعكس صيغة عبرية قريبة من التي يبدو أن مترجمي السبعينية استعملوها. وهذا أحد أسباب حديث الباحثين المعاصرين عن تعدد النصوص في هذه الفترة.',
      'بعض المخطوطات غير الكتابية تصف جماعة لها قواعدها الخاصة. ويرى كثير من الباحثين أنها جماعة أسينية سكنت في قمران أو بالقرب منها. ويتساءل آخرون هل يمكن ربط الموقع بالمخطوطات بهذه البساطة، أو يقترحون أن المخطوطات جاءت من أماكن عدة، منها مكتبات في أورشليم. والمسألة محل جدل.',
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
        en: 'The discovery and the general date range are reported by the museum that holds the main scrolls and are not in dispute among specialists.',
        ar: 'يذكر اكتشافَ المخطوطات ومدى تواريخها العام المتحفُ الذي يحتفظ بالمخطوطات الرئيسية، ولا خلاف عليه بين المتخصصين.',
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
        en: 'The Great Isaiah Scroll agrees closely with the later Masoretic Text in most of its content, yet differs from it in some readings and spellings.',
        ar: 'تتفق لفافة إشعياء الكبرى اتفاقًا وثيقًا مع النص الماسوري اللاحق في أغلب محتواها، لكنها تختلف عنه في بعض القراءات والتهجئات.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'Specialist work describes both the close agreement and the differences. The exact number and weight of the differences depend on how they are counted and classified.',
        ar: 'تصف الدراسات المتخصصة الاتفاق الوثيق والاختلافات معًا. وعدد الاختلافات ووزنها يتوقفان على طريقة عدّها وتصنيفها.',
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
        en: 'The Qumran finds show textual diversity in the Hebrew Bible, including texts that resemble the Hebrew basis of the Septuagint in books such as Samuel and Jeremiah.',
        ar: 'تُظهر مكتشفات قمران تنوعًا نصيًا في الكتاب العبري، ومنه نصوص تشبه الأساس العبري للسبعينية في أسفار مثل صموئيل وإرميا.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'This is a standard result in Hebrew Bible textual criticism, as represented by Tov’s textbook. How to classify text types and how to relate them to history is debated.',
        ar: 'هذه نتيجة معتمدة في النقد النصي للكتاب العبري، كما يمثلها كتاب توف الدراسي. وكيفية تصنيف أنماط النص وربطها بالتاريخ محل نقاش.',
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
        en: 'The scrolls do not mention Jesus or Christians, and the identity of the community behind some of them is debated.',
        ar: 'لا تذكر المخطوطات يسوع ولا المسيحيين، وهوية الجماعة التي تقف وراء بعضها محل جدل.',
      },
      argumentType: 'historical',
      assessment: 'actively_debated',
      rationale: {
        en: 'The absence of any mention of Jesus is generally agreed. The Essene identification is widely held but contested, and the relation of the community to early Christianity is a matter of scholarly argument.',
        ar: 'غياب ذكر يسوع أمر متفق عليه عمومًا. والتحديد بالأسينيين شائع لكنه موضع اعتراض، وعلاقة الجماعة بالمسيحية المبكرة مسألة جدل علمي.',
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
          'This is too strong. The scroll agrees closely with the later text in most of its content, and that is remarkable, but it differs in spelling, some words and some readings.',
          'The scrolls as a whole also show other text forms in circulation. A fair statement is that the scrolls support careful transmission of the text of Isaiah, not that all books had one fixed form.',
        ],
        ar: [
          'هذا قول مبالَغ فيه. فاللفافة تتفق مع النص اللاحق اتفاقًا وثيقًا في أغلب محتواها، وهذا لافت، لكنها تختلف في الإملاء وبعض الكلمات وبعض القراءات.',
          'وتُظهر المخطوطات في مجملها أيضًا صيغًا نصية أخرى متداولة. والعبارة المنصفة أن المخطوطات تسند النقل المتأني لنص إشعياء، لا أن لكل الأسفار صيغة واحدة ثابتة.',
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
          'The scrolls show plurality in some books, and the sceptic is right to say that one cannot speak of a single fixed text across all of them in that period. That is a real result of the scholarship.',
          'They also show that many manuscripts agree closely with the later Masoretic Text, which suggests that one tradition was copied with great care. Plurality and careful copying can coexist.',
        ],
        ar: [
          'تُظهر المخطوطات تعددًا في بعض الأسفار، والمشكك محق في أنه لا يمكن الحديث عن نص واحد ثابت عبر جميعها في تلك الفترة. وهذه نتيجة حقيقية للدراسات.',
          'وتُظهر أيضًا أن مخطوطات كثيرة تتفق اتفاقًا وثيقًا مع النص الماسوري اللاحق، وهذا يوحي بأن تقليدًا واحدًا نُسخ بعناية كبيرة. ويمكن أن يجتمع التعدد والنسخ المتقن.',
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
          'Most scrolls were copied or written before his lifetime, and the collection comes from a particular community in a particular place. A silence in that collection is not evidence about someone outside it.',
          'The question of whether Jesus existed is answered from other sources, which are discussed in their own articles. The sceptic’s point is a fair reminder that the scrolls are not a Christian archive.',
        ],
        ar: [
          'نُسخ معظم المخطوطات أو كُتب قبل حياته، والمجموعة تعود إلى جماعة معينة في مكان معين. والسكوت في هذه المجموعة ليس دليلًا على شخص خارجها.',
          'والسؤال عن وجود يسوع يُجاب عنه من مصادر أخرى تناقشها مقالات مستقلة. وملاحظة المشكك تذكير منصف بأن المخطوطات ليست أرشيفًا مسيحيًا.',
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
        'Historically, the scrolls are important because they bring the manuscript evidence for the Hebrew Bible back about a thousand years. They allow a direct comparison with later medieval manuscripts and show where there was close agreement and where there was variety.',
        'They are also evidence for the Jewish world in which the New Testament writings arose, with its interest in scripture, community rules and expectations about the future. They do not by themselves tell us anything about Jesus.',
      ],
      ar: [
        'تاريخيًا، تتميز المخطوطات بأنها تعيد شواهد المخطوطات للكتاب العبري إلى الوراء نحو ألف سنة. وهي تتيح مقارنة مباشرة بمخطوطات القرون الوسطى اللاحقة، وتُظهر أين كان الاتفاق وثيقًا وأين كان التنوع.',
        'وهي أيضًا شاهد على العالم اليهودي الذي نشأت فيه كتابات العهد الجديد، باهتمامه بالكتاب المقدس وقواعد الجماعة والتوقعات المستقبلية. ولا تخبرنا بذاتها بشيء عن يسوع.',
      ],
    },
    theological: {
      en: [
        'The Church has received the Old Testament in the Greek tradition of the Septuagint as well as the Hebrew one. The finding that the Qumran texts include Hebrew forms close to the Septuagint’s basis means that the older Greek reading is not necessarily a free departure from the Hebrew. How much weight this should have in the Church’s use is a theological question and not one the scrolls decide.',
        'These are statements of faith and interpretation, kept apart from the historical description above.',
      ],
      ar: [
        'تسلّمت الكنيسة العهد القديم في التقليد اليوناني للسبعينية كما في التقليد العبري. وإن وجود صيغ عبرية في نصوص قمران قريبة من أساس السبعينية يعني أن القراءة اليونانية القديمة ليست بالضرورة انحرافًا حرًا عن العبرية. أما كم ينبغي أن يكون وزن ذلك في استعمال الكنيسة فسؤال لاهوتي لا تحسمه المخطوطات.',
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
    en: 'The Dead Sea Scrolls bring the Hebrew Bible’s manuscript evidence back by about a thousand years and show both careful copying and real textual variety. They do not prove that nothing changed, they say nothing about Jesus, and the identity of the community behind them is still debated.',
    ar: 'تعيد مخطوطات البحر الميت شواهد المخطوطات للكتاب العبري إلى الوراء نحو ألف سنة، وتُظهر النسخ المتقن والتنوع النصي الحقيقي معًا. ولا تثبت أن شيئًا لم يتغير، ولا تقول شيئًا عن يسوع، وهوية الجماعة التي تقف وراءها ما زالت موضع جدل.',
  },
  furtherReading: ['S25', 'S26', 'S28'],
  related: ['has-bible-changed', 'septuagint-and-masoretic', 'what-is-a-textual-variant', 'preservation-vs-inspiration', 'footnoted-passages'],
};
