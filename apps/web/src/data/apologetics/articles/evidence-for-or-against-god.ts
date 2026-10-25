import type { Article } from '../types.ts';

export const article: Article = {
  id: 'evidence-for-or-against-god',
  questionId: 'evidence-for-or-against-god',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article asks what kinds of consideration can count for or against the existence of God, and how a fair reader should weigh them. It does not list the arguments one by one (other articles do) and it does not decide the question.',
    ar: 'تسأل هذه المقالة: ما أنواع الاعتبارات التي يمكن أن تُحسب مع وجود الله أو ضده، وكيف يزنها قارئ منصف؟ وهي لا تعرض الحجج واحدة واحدة (فلذلك مقالات أخرى) ولا تحسم السؤال.',
  },
  shortAnswer: {
    en: 'Evidence is whatever is more to be expected if a claim is true than if it is false. God is not an object in the world that an instrument could register, so the evidence is not of the laboratory kind. It is of the kind used for other large questions: why there is a universe, why it has an order that we can understand, the existence of moral conviction and of minds, human experience of the divine, and the history of those who say God has acted. On the other side stand the amount and kind of suffering, the fact that some people sincerely do not believe, and the success of natural explanations. Reasonable people weigh these differently.',
    ar: 'الدليل هو كل ما يُتوقع أكثر إن كانت الدعوى صحيحة مما لو كانت باطلة. والله ليس شيئًا في العالم تسجله الأجهزة، فالدليل ليس من نوع المختبر، بل من النوع الذي يُستعمل في المسائل الكبرى الأخرى: لماذا يوجد كون، ولماذا له نظام نستطيع فهمه، ووجود القناعة الأخلاقية والعقول، والخبرة الإنسانية بالإلهي، وتاريخ من يقولون إن الله عمل. وفي الجهة المقابلة حجم الألم ونوعه، وكون بعض الناس لا يؤمنون بإخلاص، ونجاح التفسيرات الطبيعية. ويزن العقلاء ذلك بصور مختلفة.',
  },
  quickPoints: {
    en: [
      'Evidence means what is more expected if the claim is true than if it is false. It does not have to be a laboratory measurement.',
      'A creator of the universe is not a thing inside it, so the lack of a direct measurement is no more surprising than the lack of one for the laws of logic.',
      'Considerations offered for belief include the existence and order of the universe, moral conviction, consciousness, religious experience and the history of Christ.',
      'Considerations offered against include suffering, divine hiddenness, the diversity of religions and the record of natural explanations.',
      'Neither side can say in advance exactly what would settle the question; each can say what would count heavily for or against.',
      'Faith for the Christian is more than the conclusion of an argument, but it is not meant to be cut off from reasons.',
    ],
    ar: [
      'الدليل ما يُتوقع أكثر إن كانت الدعوى صحيحة مما لو كانت باطلة، ولا يلزم أن يكون قياسًا مخبريًا.',
      'خالق الكون ليس شيئًا داخله، فغياب القياس المباشر ليس أغرب من غيابه لقوانين المنطق.',
      'من الاعتبارات المقدَّمة للإيمان: وجود الكون ونظامه، والقناعة الأخلاقية، والوعي، والخبرة الدينية، وتاريخ المسيح.',
      'ومن المقدَّمة ضده: الألم، واحتجاب الله، وتنوع الأديان، وسجل نجاح التفسيرات الطبيعية.',
      'لا يستطيع أي طرف أن يقول مسبقًا بدقة ما الذي يحسم السؤال، لكن كلًّا منهما يستطيع أن يقول ما يُحسب بثقل مع الدعوى أو ضدها.',
      'الإيمان عند المسيحي أكثر من نتيجة حجة، لكنه لا يُراد له أن ينقطع عن الأسباب.',
    ],
  },
  argumentTypes: ['philosophical', 'scientific', 'theological'],
  assessment: {
    label: 'philosophical_argument',
    explanation: {
      en: 'The question is about method: what counts as evidence for a claim of this kind, and how to weigh different sorts together. That is philosophical reasoning. It is a category of argument, not a verdict of weak or strong, and thoughtful people on both sides take part in it.',
      ar: 'السؤال سؤال عن المنهج: ما الذي يُعدّ دليلًا لدعوى من هذا النوع، وكيف تُوزن الأنواع المختلفة معًا. وهذا استدلال فلسفي. وهو تصنيف لنوع الحجة وليس حكمًا بالضعف أو القوة، ويشارك فيه عقلاء من الجانبين.',
    },
  },
  whyExamine: {
    en: [
      'Many conversations about God stall because the two sides hold different standards and never say so. One person expects God to show up the way a planet does; another treats any appeal to reasoning as an evasion. Naming the standards lets each side see what the other would accept.',
      'It also guards against a false symmetry. Saying there is “no evidence” for God, or “proof” of God, is usually shorthand for a particular view of what evidence is. The honest course is to look at what kinds there are and what each can and cannot do.',
    ],
    ar: [
      'تتعثر حوارات كثيرة عن الله لأن كلا الطرفين يحمل مقياسًا مختلفًا دون أن يصرّح به. فهذا يتوقع أن يظهر الله كما يظهر كوكب، وذاك يعدّ كل احتكام إلى الاستدلال مراوغة. وتسمية المقاييس تتيح لكل طرف أن يرى ما الذي يقبله الآخر.',
      'ويحمي ذلك أيضًا من تماثل زائف. فالقول إنه «لا دليل» على الله أو إن «البرهان» قائم عليه اختصار عادةً لرأي معين في معنى الدليل. والأمانة أن ننظر في الأنواع الموجودة وما يستطيعه كل نوع وما لا يستطيعه.',
    ],
  },
  background: {
    en: [
      'In ordinary life we accept many things on evidence that is not an experiment: that other people have minds, that the past happened, that some acts are cruel. In each case we ask what would be expected if the claim were true and compare it with what would be expected if it were false. The same question can be put about God. A creator who made the universe freely, and who is good, would be expected to leave some marks, and one who did not would be expected to leave others.',
      'Christian Scripture itself speaks of a witness in creation. Read as an ancient document, a psalm says that the heavens tell of God’s glory (Psalm 19:1–4), and St Paul the Apostle argues in Romans that God’s power and divinity can be perceived in what he made (Romans 1:19–20).',
      'The philosophical literature sorts the considerations into groups. Arguments from the existence and order of the universe, from conscious minds and from moral conviction are given for belief. Religious experience and the history of the claim that God has acted in Christ are also given. Against belief, philosophers point to the problem of evil (S42), to divine hiddenness, the fact that some sincere seekers do not find God (S43), and to the competing claims of different religions (S46). The relation of scientific method to religious questions is a further background issue (S45).',
      'Richard Swinburne’s works are a well-known attempt to treat the question as a cumulative judgement of probability, weighing every consideration together (S38 for a general reader, S39 for the full case). They are cited here only as whole works for their overall approach, because only the publisher pages have been consulted. Whether that method is the right one is itself contested.',
    ],
    ar: [
      'نقبل في الحياة العادية أشياء كثيرة على أدلة ليست تجربة: أن للآخرين عقولًا، وأن الماضي حدث، وأن بعض الأفعال قاسية. وفي كل حالة نسأل: ماذا يُتوقع لو صحت الدعوى؟ ونقارنه بما يُتوقع لو بطلت. ويمكن طرح السؤال نفسه عن الله. فالخالق الذي صنع الكون بحرية، وهو صالح، يُتوقع أن يترك علامات، ومن لم يفعل يُتوقع أن يترك علامات أخرى.',
      'ويتحدث الكتاب المقدس نفسه عن شهادة في الخليقة. فعند قراءته كوثيقة قديمة نجد مزمورًا يقول إن السماوات تحدّث بمجد الله (مزمور ١٩: ١–٤)، ويحتجّ القديس بولس الرسول في رسالة رومية بأن قدرة الله ولاهوته يمكن إدراكها مما صنع (رومية ١: ١٩–٢٠).',
      'وتصنف الكتابات الفلسفية الاعتبارات في مجموعات. فتُقدَّم للإيمان حجج من وجود الكون ونظامه ومن العقول الواعية ومن القناعة الأخلاقية. وتُقدَّم أيضًا الخبرة الدينية وتاريخ الدعوى بأن الله عمل في المسيح. وفي مقابل الإيمان يشير الفلاسفة إلى مشكلة الشر (S42)، وإلى احتجاب الله، أي كون بعض الباحثين المخلصين لا يجدونه (S43)، وإلى دعاوى الأديان المتنافسة (S46). وعلاقة المنهج العلمي بالأسئلة الدينية قضية خلفية أخرى (S45).',
      'وأعمال ريتشارد سوينبرن محاولة معروفة لمعالجة السؤال بوصفه حكمًا تراكميًا في الاحتمال يزن كل الاعتبارات معًا (S38 للقارئ العام، وS39 للحجة الكاملة). ولا تُذكر هنا إلا كأعمال كاملة ولمنهجها العام فقط، لأن الاطلاع اقتصر على صفحات الناشر. وهل هذا المنهج هو الصحيح؟ هذا نفسه موضع خلاف.',
    ],
  },
  glossary: ['theism', 'cosmological-argument', 'fine-tuning', 'divine-hiddenness', 'theodicy', 'apologetics'],

  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'Evidence for a claim is what is more to be expected if the claim is true than if it is false, and this standard applies to the question of God as it does to other large questions, even though the evidence is not experimental.',
        ar: 'الدليل على دعوى ما هو متوقَّع أكثر إن صحت الدعوى مما لو بطلت، وهذا المقياس ينطبق على سؤال الله كما ينطبق على المسائل الكبرى الأخرى، وإن لم يكن الدليل تجريبيًا.',
      },
      argumentType: 'philosophical',
      assessment: 'philosophical_argument',
      rationale: {
        en: 'This is a widely used account of evidence in the philosophy of science and of religion. It makes no claim yet about which side the evidence favours.',
        ar: 'هذا تصور واسع الاستعمال للدليل في فلسفة العلم وفلسفة الدين. ولا يدّعي بعد أي طرف يرجّحه الدليل.',
      },
      limits: {
        en: 'Some philosophers reject this framing for religion. They hold that belief in God can be reasonable without being supported by evidence in this sense, or that the idea of probability cannot be applied to such a question.',
        ar: 'يرفض بعض الفلاسفة هذه الصياغة في شأن الدين، ويرون أن الإيمان بالله يمكن أن يكون معقولًا دون سند من دليل بهذا المعنى، أو أن فكرة الاحتمال لا تنطبق على سؤال كهذا.',
      },
      evidence: ['e-swinburne-full'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'The considerations that are offered for belief in God are of several distinct kinds (about the universe, about minds and morality, about experience, about history), and the Bible itself points to some of them while also calling for examination.',
        ar: 'الاعتبارات المقدَّمة للإيمان بالله أنواع متمايزة عدة (عن الكون، وعن العقول والأخلاق، وعن الخبرة، وعن التاريخ)، والكتاب المقدس نفسه يشير إلى بعضها ويدعو في الوقت ذاته إلى الفحص.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'The Scriptural texts show how the faith itself relates reasons and belief. Read as ancient documents they show what the writers took to be pointers to God, not that those pointers succeed.',
        ar: 'تُظهر النصوص الكتابية كيف يربط الإيمان نفسه بين الأسباب والاعتقاد. وهي، عند قراءتها كوثائق قديمة، تبيّن ما عدّه الكتّاب علامات تشير إلى الله، لا أن هذه العلامات تنجح.',
      },
      limits: {
        en: 'A reader who does not accept the Bible as inspired can still weigh the philosophical arguments without relying on these passages.',
        ar: 'ويستطيع القارئ الذي لا يقبل الكتاب المقدس موحى به أن يزن الحجج الفلسفية دون الاعتماد على هذه النصوص.',
      },
      evidence: ['e-psalm19', 'e-romans1'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'Serious considerations are offered against belief in God as well: the amount and kind of suffering, the fact that some sincere people do not believe, the diversity of religions, and the success of natural explanations. A fair weighing must include them.',
        ar: 'ثمة اعتبارات جادة تُقدَّم ضد الإيمان بالله أيضًا: مقدار الألم ونوعه، وكون بعض الناس المخلصين لا يؤمنون، وتنوع الأديان، ونجاح التفسيرات الطبيعية. والوزن المنصف يجب أن يشملها.',
      },
      argumentType: 'philosophical',
      assessment: 'philosophical_argument',
      rationale: {
        en: 'These are the points most often raised by thoughtful non-believers, and philosophers of religion treat them as serious. Each has been answered by theists, and the answers are in turn disputed.',
        ar: 'هذه هي النقاط التي يثيرها غير المؤمنين الحصفاء في الأغلب، ويتناولها فلاسفة الدين بجدية. وقد أجاب عن كل منها المؤمنون، وهذه الأجوبة نفسها موضع خلاف.',
      },
      limits: {
        en: 'Naming a consideration as serious does not say how much it weighs against the others.',
        ar: 'وتسمية اعتبار ما بأنه جاد لا تقول كم يزن بالنسبة إلى غيره.',
      },
      evidence: ['e-evil', 'e-hiddenness'],
    },
  ],

  evidence: [
    {
      id: 'e-psalm19',
      sourceId: 'S62',
      locator: 'Psalm 19:1-4',
      role: 'context',
      states: {
        en: 'The psalm says that the heavens and the days and nights tell of God’s glory and that their witness goes out to all the earth without words.',
        ar: 'يقول المزمور إن السماوات والنهار والليل تحدّث بمجد الله، وإن شهادتها تبلغ الأرض كلها بغير كلام.',
      },
      inference: {
        en: 'It shows that Israel’s poets took creation to point beyond itself. That is a statement of faith in an ancient text and not an argument that the pointing is sound.',
        ar: 'يبيّن أن شعراء إسرائيل عدّوا الخليقة تشير إلى ما وراءها. وهذا إعلان إيمان في نص قديم وليس حجة على سلامة هذه الإشارة.',
      },
      bible: { book: 'psalms', chapter: 19, verse: '1-4' },
    },
    {
      id: 'e-romans1',
      sourceId: 'S62',
      locator: 'Romans 1:19-20',
      role: 'context',
      states: {
        en: 'St Paul the Apostle writes that what can be known of God is plain, because since the creation of the world his power and divine nature have been perceived in the things that were made.',
        ar: 'يكتب القديس بولس الرسول أن ما يُعرف عن الله ظاهر، لأن قدرته ولاهوته منذ خلق العالم يُدركان بالمصنوعات.',
      },
      inference: {
        en: 'It is an early Christian statement that reflection on the world can lead toward God. The Church reads it as part of its teaching on natural knowledge of God; St Paul does not set out a formal argument here.',
        ar: 'هو قول مسيحي مبكر بأن التأمل في العالم يمكن أن يقود نحو الله. وتقرؤه الكنيسة ضمن تعليمها عن المعرفة الطبيعية بالله؛ ولا يعرض القديس بولس هنا حجة منهجية.',
      },
      bible: { book: 'romans', chapter: 1, verse: '19-20' },
    },
    {
      id: 'e-evil',
      sourceId: 'S42',
      locator: 'whole entry (logical and evidential versions of the problem; section not cited)',
      role: 'challenges',
      states: {
        en: 'The reference entry sets out the logical and evidential forms of the problem of evil and the main responses.',
        ar: 'يعرض المدخل المرجعي الصيغتين المنطقية والاستدلالية لمشكلة الشر وأهم الردود.',
      },
      inference: {
        en: 'Many philosophers treat suffering as evidence against theism that must be weighed. Whether it is decisive, and whether the responses succeed, is disputed.',
        ar: 'يعدّ كثير من الفلاسفة الألم دليلًا ضد الإيمان بالله يجب أن يُوزن. وهل هو حاسم، وهل تنجح الردود؟ مسألة مختلف فيها.',
      },
    },
    {
      id: 'e-hiddenness',
      sourceId: 'S43',
      locator: 'whole entry (divine hiddenness and nonbelief; section not cited)',
      role: 'challenges',
      states: {
        en: 'The reference entry discusses the argument that a loving God would make himself evident to those who seek, and replies to it.',
        ar: 'يناقش المدخل المرجعي الحجة القائلة إن إلهًا محبًا كان سيجعل نفسه ظاهرًا لمن يطلبه، والردود عليها.',
      },
      inference: {
        en: 'It is the best-known case that sincere non-belief counts against God. It is background for weighing the evidence and a separate article treats it.',
        ar: 'وهي أشهر حجة بأن عدم الإيمان المخلص يُحسب ضد وجود الله. وهي خلفية لوزن الأدلة، ولها مقالة مستقلة.',
      },
    },
    {
      id: 'e-swinburne-full',
      sourceId: 'S39',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'context',
      states: {
        en: 'Swinburne’s book argues that the existence of God can be assessed as a matter of probability by weighing several kinds of evidence together.',
        ar: 'يحتجّ كتاب سوينبرن بأن وجود الله يمكن تقديره احتماليًا بوزن عدة أنواع من الأدلة معًا.',
      },
      inference: {
        en: 'It shows one worked-out method for treating the question as a weighing of evidence. Only the publisher page was consulted, so no chapter is cited and the detailed reasoning is not reported. It is one position, not a neutral survey.',
        ar: 'يبيّن طريقة مفصلة واحدة لمعاملة السؤال بوصفه وزنًا للأدلة. واقتصر الاطلاع على صفحة الناشر، فلا يُذكر فصل ولا يُنقل الاستدلال التفصيلي. وهو موقف واحد وليس مسحًا محايدًا.',
      },
    },
  ],

  objections: [
    {
      id: 'o1',
      statement: {
        en: 'The burden of proof is on the person who makes the claim. Believers cannot point to evidence of the kind we accept for other claims, so the reasonable position is to withhold belief until they can.',
        ar: 'عبء الإثبات على من يدّعي. والمؤمنون لا يستطيعون أن يشيروا إلى دليل من النوع الذي نقبله في الدعاوى الأخرى، فالموقف المعقول أن نمتنع عن الاعتقاد حتى يستطيعوا.',
      },
      response: {
        en: [
          'Believers reply that the standard assumed here is itself a philosophical position and that it is not the standard we use for many things we reasonably believe, such as that other minds exist. They say the right question is which explanation of the whole of experience is best, and that this is shared ground in which both belief and disbelief make claims that need support.',
          'Sceptics reply that the claim of a God is more extraordinary than these other claims and that the case for a hypothesis grows in proportion to how much it asserts. Many philosophers also hold that agnosticism, not atheism or theism, follows when the evidence is balanced.',
        ],
        ar: [
          'يردّ المؤمنون بأن المقياس المفترض هنا نفسه موقف فلسفي، وأنه ليس المقياس الذي نستعمله لأمور كثيرة نعتقدها بحق، كوجود عقول أخرى. ويقولون إن السؤال الصحيح هو: أي تفسير لمجمل الخبرة هو الأفضل؟ وإن هذه أرض مشتركة تحتاج فيها دعاوى الإيمان والإنكار إلى سند.',
          'ويردّ المتشككون بأن دعوى وجود إله أبعد عن المألوف من تلك الدعاوى، وبأن الحجة لفرضية تتطلب بقدر ما تدّعيه. ويرى فلاسفة كثيرون أن اللاأدرية، لا الإيمان ولا الإلحاد، هي ما يترتب حين تتوازن الأدلة.',
        ],
      },
      limits: {
        en: 'The exchange does not decide where the burden lies. It shows that the answer depends on prior views about reasoning and about what is extraordinary.',
        ar: 'لا يحسم التبادل أين يقع العبء. بل يبيّن أن الجواب يعتمد على آراء سابقة في الاستدلال وفي ما هو غير مألوف.',
      },
      evidence: ['e-swinburne-full'],
    },
    {
      id: 'o2',
      statement: {
        en: 'Believers treat every outcome as fitting their view: a prayer answered shows God’s care, a prayer unanswered shows his wisdom. If nothing could count against it, the belief explains nothing.',
        ar: 'يعدّ المؤمنون كل نتيجة موافقة لرأيهم: الصلاة المستجابة تدل على عنايته، وغير المستجابة تدل على حكمته. وإذا لم يكن شيء يمكن أن يُحسب ضد الاعتقاد فإنه لا يفسّر شيئًا.',
      },
      response: {
        en: [
          'Christian teaching does name things that would count against it. St Paul the Apostle writes that if Christ has not been raised, the faith is empty (1 Corinthians 15:14–17). The Church’s claim is tied to events that can be examined by historians, and other articles on this site examine them. On God in general, the amount of suffering and the sincere non-belief of seekers are accepted by theists as real difficulties that need answering.',
          'Critics reply that the replies to these difficulties are often flexible enough to absorb any outcome, and that a position which can always adjust is not tested.',
        ],
        ar: [
          'يحدد التعليم المسيحي أمورًا كانت ستُحسب ضده. فالقديس بولس الرسول يكتب أنه إن لم يكن المسيح قد قام فإيماننا باطل (١ كورنثوس ١٥: ١٤–١٧). ودعوى الكنيسة مرتبطة بأحداث يستطيع المؤرخون فحصها، وتفحصها مقالات أخرى في هذا الموقع. وفي الحديث عن الله عمومًا يقبل المؤمنون أن حجم الألم وعدم إيمان الباحثين المخلصين صعوبتان حقيقيتان تحتاجان إلى جواب.',
          'ويردّ الناقدون بأن الردود على هذه الصعوبات مرنة غالبًا بما يكفي لتستوعب أي نتيجة، وبأن الموقف القادر دائمًا على التعديل لا يُختبر.',
        ],
      },
      limits: {
        en: 'This does not show that the Christian replies succeed. It shows that the faith commits itself to claims that can be investigated.',
        ar: 'لا يبيّن هذا أن الردود المسيحية تنجح، بل يبيّن أن الإيمان يلتزم بدعاوى يمكن التحقق منها.',
      },
      evidence: ['e-evil', 'e-hiddenness'],
    },
    {
      id: 'o3',
      statement: {
        en: 'Where science once pointed to God (lightning, disease, the origin of species) it has later offered natural explanations. The trend suggests that gaps remaining will also close, so the sensible expectation is that there is no God.',
        ar: 'حيثما أشار العلم قديمًا إلى الله (البرق، والمرض، ونشأة الأنواع) قدّم لاحقًا تفسيرات طبيعية. والاتجاه يوحي بأن الفجوات المتبقية ستُسدّ أيضًا، فالتوقع المعقول أن لا إله.',
      },
      response: {
        en: [
          'The Christian tradition does not rest on gaps. The Fathers spoke of God as the ground of the whole order of nature, and the argument from the existence of an ordered universe does not depend on any unexplained detail. Better scientific explanation of how things work in nature does not answer why there is a nature at all.',
          'The objector can reply that questions of “why there is anything” may be unanswerable or confused, and that the pattern of past explanation supports a general confidence in naturalism.',
        ],
        ar: [
          'لا يقوم التقليد المسيحي على الفجوات. فقد تحدث الآباء عن الله بوصفه أساس نظام الطبيعة كله، والحجة من وجود كون منظم لا تعتمد على أي تفصيل غير مفسَّر. وأفضلية التفسير العلمي لكيفية عمل الأشياء في الطبيعة لا تجيب عن سؤال لماذا توجد طبيعة أصلًا.',
          'ويمكن أن يردّ المعترض بأن أسئلة «لماذا يوجد شيء» قد لا تقبل جوابًا أو قد تكون ملتبسة، وبأن نمط التفسير السابق يدعم ثقة عامة في الطبيعانية.',
        ],
      },
      limits: {
        en: 'The disagreement is about whether the deepest questions are open to reasoned answers. Neither side has settled it by pointing to science alone.',
        ar: 'الخلاف في أن الأسئلة الأعمق هل تقبل أجوبة معقولة. ولم يحسمه أي طرف بالإشارة إلى العلم وحده.',
      },
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'One part of the case is historical and can be examined by anyone: the claim that Jesus of Nazareth lived, was crucified under Pontius Pilate, and that his first followers proclaimed that he had risen. Other articles examine the sources for each of these. Historical inquiry can say what happened and what the early sources report; it cannot by itself decide whether a resurrection would show that God acted, which depends on the wider question treated here.',
      ],
      ar: [
        'جزء من القضية تاريخي ويستطيع أي شخص فحصه: أن يسوع الناصري عاش وصُلب في عهد بيلاطس البنطي، وأن أتباعه الأوائل أعلنوا أنه قام. وتفحص مقالات أخرى مصادر كل من هذه الأمور. ويستطيع البحث التاريخي أن يقول ما حدث وما تقوله المصادر الأولى؛ ولا يستطيع وحده أن يحسم هل القيامة تدل على أن الله عمل، وهذا يتوقف على السؤال الأوسع المعروض هنا.',
      ],
    },
    theological: {
      en: [
        'The Church holds that God is known not only as a conclusion but as one who meets us: in creation, in the Scriptures, in Christ, and in the sacraments and prayer. In this view reasons clear the way and answer honest questions, while faith is a trust given in response to God and enabled by his grace. This is theological interpretation and is offered as the Church’s understanding, not as an argument to be accepted before the evidence is weighed.',
      ],
      ar: [
        'تعتقد الكنيسة أن الله يُعرَف لا كنتيجة فحسب بل كمن يلتقي بنا: في الخليقة، وفي الكتب المقدسة، وفي المسيح، وفي الأسرار والصلاة. وفي هذا المنظور تمهّد الأسباب الطريق وتجيب عن الأسئلة الصادقة، أما الإيمان فثقة تُعطى استجابةً لله وتُمكَّن بنعمته. وهذا تفسير لاهوتي يُعرض بوصفه فهم الكنيسة، لا حجة تُقبل قبل وزن الأدلة.',
      ],
    },
  },
  coptic: {
    en: [
      'The Coptic Orthodox Church does not teach that belief begins with a proof. Worship, the reading of Scripture, the lives of the saints and the sacraments are, in her teaching, the ordinary place where God is known. She has also always had teachers who explained and defended the faith to those outside: the school of Alexandria is the historic example. Both belong together. The believer lives the faith in prayer and can give a reasoned account of it when asked.',
    ],
    ar: [
      'لا تعلّم الكنيسة القبطية الأرثوذكسية أن الإيمان يبدأ ببرهان. فالعبادة وقراءة الكتب المقدسة وسير القديسين والأسرار هي، في تعليمها، المكان العادي الذي يُعرَف فيه الله. وكان للكنيسة دائمًا معلمون يشرحون الإيمان ويدافعون عنه أمام من هم خارجها: ومدرسة الإسكندرية المثال التاريخي. والأمران معًا: يعيش المؤمن الإيمان في الصلاة، ويستطيع أن يقدّم عنه حسابًا معقولًا حين يُسأل.',
    ],
  },
  disputed: {
    en: [
      'Disputed: whether the existence of God is the kind of claim that can be supported by probabilistic reasoning at all; where the burden of proof lies; how much weight suffering, hiddenness and religious diversity carry; whether religious experience is evidence; whether a person can be reasonable in believing without argument. Philosophers who have studied the question closely disagree on each point.',
      'The question as a whole is not settled by any single decisive item on either side. This article does not claim that it is.',
    ],
    ar: [
      'مواضع الخلاف: هل وجود الله من نوع الدعاوى التي يمكن دعمها بالاستدلال الاحتمالي أصلًا، وأين يقع عبء الإثبات، وكم يزن الألم والاحتجاب وتنوع الأديان، وهل الخبرة الدينية دليل، وهل يمكن أن يكون الإنسان معقولًا في الإيمان بغير حجة. ويختلف في كل نقطة فلاسفة درسوا السؤال بعناية.',
      'والسؤال كله لا يحسمه أي دليل واحد حاسم من أي جانب. ولا تدّعي هذه المقالة ذلك.',
    ],
  },
  conclusion: {
    en: 'Evidence about God is not laboratory evidence, but it is not nothing: there are considerations on each side that are open to examination and that thoughtful people weigh differently. A fair inquirer will set them out, test the claims that can be tested, and be clear about where the weighing depends on judgement. The Christian can welcome that inquiry, since Scripture itself praises examination.',
    ar: 'الدليل على الله ليس دليلًا مخبريًا، لكنه ليس لا شيء: ففي كل جانب اعتبارات تقبل الفحص يزنها العقلاء بصور مختلفة. والباحث المنصف يعرضها، ويختبر ما يمكن اختباره، ويوضح أين يعتمد الوزن على الحكم الشخصي. ويستطيع المسيحي أن يرحب بهذا البحث، فالكتاب المقدس نفسه يمدح الفحص.',
  },
  furtherReading: ['S38', 'S39', 'S42', 'S43'],
  related: [
    'what-do-we-mean-by-god',
    'faith-and-blind-belief',
    'arguments-for-god-claim',
    'hidden-or-suffering',
    'religious-experience-as-evidence',
    'can-science-exclude-divine-action',
  ],
};
