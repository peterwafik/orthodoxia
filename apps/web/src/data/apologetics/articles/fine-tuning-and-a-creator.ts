import type { Article } from '../types.ts';

export const article: Article = {
  id: 'fine-tuning-and-a-creator',
  questionId: 'fine-tuning-and-a-creator',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article states what physicists mean when they say the universe is “fine-tuned” for life, what the fine-tuning argument for a creator claims, how strong it is, and how the Coptic Orthodox Church understands creation. The selection effect and the multiverse have their own article, and the broader family of arguments for God is set out in the article on arguments for God’s existence.',
    ar: 'تشرح هذه المقالة ما يعنيه الفيزيائيون حين يقولون إن الكون «مضبوط بدقة» للحياة، وما تدّعيه حجة الضبط الدقيق على وجود خالق، ومدى قوتها، وكيف تفهم الكنيسة القبطية الأرثوذكسية الخلق. أما أثر الانتقاء والأكوان المتعددة فلهما مقالة مستقلة، وعائلة الحجج على وجود الله عمومًا موضوع مقالة الحجج على وجود الله.',
  },
  shortAnswer: {
    en: 'Physics does show that life as we know it depends on several features of the universe (certain constants and starting conditions) lying within fairly narrow ranges, if one changes them one at a time in theoretical models. Whether this points to a creator is a philosophical question, not a result of physics. Some thoughtful people find it a real pointer to a mind behind the universe; others think it is explained by a deeper law, a multiverse, or our ignorance of what is possible. It is a reason to wonder, not a proof. The Christian faith does not rest on it, but it fits comfortably with what the Church confesses: that God made all things, visible and invisible, and that creation is ordered.',
    ar: 'تُظهر الفيزياء أن الحياة كما نعرفها تعتمد على سمات في الكون (ثوابت معينة وشروط ابتدائية) تقع ضمن مدى ضيق نسبيًا، إذا غيّرنا كلًّا منها وحده في النماذج النظرية. أما هل يشير ذلك إلى خالق فسؤال فلسفي وليس نتيجة فيزيائية. يرى بعض العقلاء فيه إشارة حقيقية إلى عقل وراء الكون، ويرى آخرون أنه يُفسَّر بقانون أعمق أو بأكوان متعددة أو بجهلنا بما هو ممكن. وهو سبب للتأمل لا برهان. والإيمان المسيحي لا يقوم عليه، لكنه ينسجم مع ما تعترف به الكنيسة: أن الله صنع كل شيء ما يُرى وما لا يُرى، وأن الخليقة منظَّمة.',
  },
  quickPoints: {
    en: [
      'The scientific part is real: in physical models, small changes to some constants or early conditions would leave no stars, no stable atoms or no chemistry of the kind life needs. How many such features there are, and how narrow the ranges really are, is still discussed by physicists.',
      'The philosophical step is separate: “narrow” only means “improbable” if we know what range was possible and how likely each value was, and we do not.',
      'Alternatives include a deeper law that fixes the values, a multiverse, and the view that the values are simply brute facts.',
      'If the argument works, it points to a mind that ordered the universe. It does not by itself reach the God of the Church, who is known in revelation.',
      'The Church confesses God as Creator of all things and finds His wisdom in creation. It has never made a proof from physics the foundation of faith, and it does not need one.',
    ],
    ar: [
      'الجزء العلمي حقيقي: ففي النماذج الفيزيائية، تغييرات صغيرة في بعض الثوابت أو الشروط المبكرة كانت ستُنتج كونًا بلا نجوم أو بلا ذرات مستقرة أو بلا كيمياء من النوع الذي تحتاجه الحياة. أما عدد هذه السمات ومدى ضيق نطاقاتها فما زال محل نقاش بين الفيزيائيين.',
      'والخطوة الفلسفية مستقلة: فكلمة «ضيق» لا تعني «غير محتمل» إلا إذا عرفنا ما المدى الممكن ومدى احتمال كل قيمة، ونحن لا نعرف.',
      'ومن البدائل: قانون أعمق يحدد القيم، أو أكوان متعددة، أو القول بأن القيم حقائق خامة لا تفسير لها.',
      'ولو نجحت الحجة فهي تشير إلى عقل نظّم الكون، ولا تبلغ بذاتها إلى إله الكنيسة الذي يُعرف بالإعلان.',
      'تعترف الكنيسة بالله خالق كل شيء، وترى حكمته في الخليقة، لكنها لم تجعل برهانًا من الفيزياء أساسًا للإيمان، ولا تحتاج إلى ذلك.',
    ],
  },
  argumentTypes: ['scientific', 'philosophical', 'theological'],
  assessment: {
    label: 'philosophical_argument',
    explanation: {
      en: 'The physics behind the argument is a matter of scientific description, and parts of it are still debated among physicists. The inference from that physics to a creator is a philosophical argument about probability and explanation, and philosophers who accept the physics disagree about it. The label describes the kind of reasoning; it is not a verdict that the argument is weak or strong.',
      ar: 'الفيزياء التي تقوم عليها الحجة وصف علمي، وبعض جوانبه ما زالت موضع نقاش بين الفيزيائيين. أما الانتقال من هذه الفيزياء إلى خالق فهو حجة فلسفية عن الاحتمال والتفسير، ويختلف فيها فلاسفة يقبلون الفيزياء نفسها. والتصنيف يصف نوع الاستدلال، وليس حكمًا بأن الحجة ضعيفة أو قوية.',
    },
  },
  whyExamine: {
    en: [
      'Fine-tuning is one of the most often quoted arguments for God, and one of the most often misquoted. Popular versions state exact-sounding numbers, or speak as if science had proved a Designer. Others dismiss it in one sentence. Neither helps a reader who wants to know what is actually claimed.',
      'It is also a good test of method. It asks us to separate three things that are easily blended: what physics describes, what probability can and cannot say about it, and what a believer confesses about God as Creator.',
    ],
    ar: [
      'الضبط الدقيق من أكثر الحجج على وجود الله ترديدًا، ومن أكثرها تحريفًا. فالصيغ الشعبية تذكر أرقامًا تبدو دقيقة، أو تتكلم كأن العلم أثبت وجود مصمِّم. وآخرون يرفضونها بجملة واحدة. ولا يفيد أيٌّ من الأمرين قارئًا يريد أن يعرف ما المدّعى فعلًا.',
      'وهي أيضًا اختبار جيد للمنهج، لأنها تدعونا إلى الفصل بين ثلاثة أمور يسهل الخلط بينها: ما تصفه الفيزياء، وما يستطيع الاحتمال قوله عنه وما لا يستطيع، وما يعترف به المؤمن عن الله خالقًا.',
    ],
  },
  background: {
    en: [
      'Physics describes the universe with laws that contain fixed numbers (constants), such as the strengths of the fundamental forces and the masses of particles, together with starting conditions at the beginning of the expanding universe. Theoretical physicists can ask what would happen if one of these numbers were different while the others stayed as they are. In many such models the result is a universe that could not form stars and heavy elements, or could not hold together atoms and molecules, or would expand too fast for matter to gather or collapse too soon. That sensitivity of life-permitting conditions to the values is what is meant by fine-tuning.',
      'Some familiar cases are well established as physics. The abundance of carbon in stars depends on the details of nuclear reactions, and the astronomer Fred Hoyle drew attention to this in the 1950s. The cosmological constant, which governs the acceleration of the expansion, is observed to be extremely small compared with some theoretical estimates, and Steven Weinberg argued in 1987 that a much larger value would have prevented galaxies from forming. How much these cases show, and how many independent cases there are, is argued about, and the numbers quoted in popular books vary with assumptions. This article therefore gives no figures.',
      'The argument built on this has two steps. The first is the scientific claim that life-permitting values occupy a narrow band. The second is philosophical: that such a narrow band is more to be expected if a mind chose the values than if they are as they are by chance or necessity. Richard Swinburne, a philosopher and Eastern Orthodox Christian, defends this type of reasoning as one strand of a wider cumulative case. Here his work is cited only as a whole.',
    ],
    ar: [
      'تصف الفيزياء الكون بقوانين تحوي أرقامًا ثابتة (ثوابت)، مثل شدة القوى الأساسية وكتل الجسيمات، إضافةً إلى شروط ابتدائية عند بداية الكون المتمدد. ويستطيع الفيزيائيون النظريون أن يسألوا ماذا يحدث لو اختلف أحد هذه الأرقام وبقيت البقية كما هي. وفي كثير من هذه النماذج تكون النتيجة كونًا لا يستطيع تكوين النجوم والعناصر الثقيلة، أو لا يحفظ الذرات والجزيئات، أو يتمدد أسرع من أن تتجمع المادة، أو ينهار قبل أوانه. وحساسية الظروف التي تسمح بالحياة لهذه القيم هي المقصودة بالضبط الدقيق.',
      'وبعض الحالات المعروفة مقرّرة في الفيزياء. فوفرة الكربون في النجوم تتوقف على تفاصيل التفاعلات النووية، وقد لفت عالم الفلك فريد هويل الانتباه إلى ذلك في خمسينيات القرن العشرين. والثابت الكوني الذي يتحكم في تسارع التمدد يُرصد صغيرًا جدًا مقارنة ببعض التقديرات النظرية، وقد رأى ستيفن واينبرغ سنة 1987 أن قيمة أكبر بكثير كانت ستمنع تكوّن المجرات. أما مقدار ما تُثبته هذه الحالات، وكم حالة مستقلة منها توجد، ففيه جدل، والأرقام المتداولة في الكتب الشعبية تتفاوت بحسب الافتراضات. لذلك لا تورد هذه المقالة أرقامًا.',
      'والحجة المبنية على ذلك ذات خطوتين. الأولى دعوى علمية بأن القيم التي تسمح بالحياة تقع في نطاق ضيق. والثانية فلسفية: أن هذا النطاق الضيق أولى بالتوقّع إن كان عقلٌ قد اختار القيم مما لو كانت على ما هي عليه بالمصادفة أو بالضرورة. ويدافع ريتشارد سوينبرن، وهو فيلسوف ومسيحي أرثوذكسي (من الكنائس الأرثوذكسية الخلقيدونية)، عن هذا النوع من الاستدلال بوصفه أحد خيوط حجة تراكمية أوسع. ويُستشهد بعمله هنا ككل فقط.',
    ],
  },
  glossary: ['fine-tuning', 'theism', 'cosmological-argument', 'miracle', 'tradition', 'apologetics'],

  claims: [
    {
      id: 'c2',
      proposition: {
        en: 'If the life-permitting range is narrow and the values could really have been otherwise, then the existence of a mind that chose them is a reasonable explanation, though not the only one.',
        ar: 'إن كان النطاق الذي يسمح بالحياة ضيقًا، وكان يمكن حقًا أن تكون القيم مختلفة، فإن وجود عقل اختارها تفسير معقول، وإن لم يكن التفسير الوحيد.',
      },
      argumentType: 'philosophical',
      assessment: 'philosophical_argument',
      rationale: {
        en: 'This is an argument about explanation and probability that thoughtful theists present as one strand of a cumulative case. It depends on premises about what range was possible, which physics does not supply.',
        ar: 'هذه حجة عن التفسير والاحتمال، يعرضها مؤمنون متأملون خيطًا من حجة تراكمية. وهي تعتمد على مقدّمات عن المدى الذي كان ممكنًا، ولا توفرها الفيزياء.',
      },
      limits: {
        en: 'At most it points to a mind that ordered the universe. It does not identify that mind, and it is weakened if a deeper law, a multiverse, or a different way of measuring probability accounts for the values.',
        ar: 'وغاية ما تشير إليه عقلٌ نظّم الكون، ولا تحدد هويته، وتضعف إن فسّر القيمَ قانونٌ أعمق أو أكوان متعددة أو طريقة أخرى لقياس الاحتمال.',
      },
      evidence: ['e2'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'The Church confesses that creation is ordered and good, and that its order can lead people to wonder at its Maker. This confession does not depend on any particular argument from physics.',
        ar: 'تعترف الكنيسة بأن الخليقة منظَّمة وحسنة، وأن نظامها يمكن أن يقود الناس إلى التعجب من صانعها. ولا يتوقف هذا الاعتراف على أي حجة من الفيزياء.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'It is what the Scriptures say about creation and its order. It is stated here as the Church’s teaching, not as a conclusion from fine-tuning.',
        ar: 'هذا ما يقوله الكتاب المقدس عن الخلق ونظامه، ويُذكر هنا تعليمًا للكنيسة وليس نتيجة من الضبط الدقيق.',
      },
      limits: {
        en: 'A reader who does not accept the authority of Scripture is not asked to accept this claim in order to weigh claim 1.',
        ar: 'ولا يُطلب من القارئ الذي لا يقبل سلطان الكتاب المقدس أن يقبل هذه الدعوى لكي يزن الدعوى الأولى.',
      },
      evidence: ['e3', 'e4', 'e5'],
    },
  ],

  evidence: [
    {
      id: 'e2',
      sourceId: 'S39',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'Swinburne’s book argues that the existence of God makes the order and features of the universe more to be expected than they would be otherwise, and weighs several kinds of argument together as a cumulative case.',
        ar: 'يرى كتاب سوينبرن أن وجود الله يجعل نظام الكون وسماته أولى بالتوقّع مما لو لم يكن موجودًا، ويزن عدة أنواع من الحجج معًا بوصفها حجة تراكمية.',
      },
      inference: {
        en: 'It shows that a philosopher who is himself a Christian defends the design-style inference and frames it as probabilistic, not as a proof. Only the publisher page has been consulted, so no chapter or page is cited and his detailed reasoning is not reported.',
        ar: 'وهو يبيّن أن فيلسوفًا مسيحيًا يدافع عن الاستدلال من النظام ويعرضه استدلالًا احتماليًا لا برهانًا. وقد اقتصر الاطلاع على صفحة الناشر، فلا يُذكر فصل أو صفحة ولا يُنقل استدلاله التفصيلي.',
      },
    },
    {
      id: 'e3',
      sourceId: 'S62',
      locator: 'Psalm 19:1–4',
      role: 'context',
      states: {
        en: 'The psalmist says that the heavens and the days and nights speak without words of the glory of God, and that their witness goes out through all the earth.',
        ar: 'يقول المرنم إن السموات والأيام والليالي تحدّث بلا كلام عن مجد الله، وإن شهادتها تخرج إلى كل الأرض.',
      },
      inference: {
        en: 'Read as an ancient poem, it shows that wonder at the order of the heavens as a pointer to God is old in Israel’s faith. It is not a scientific argument and does not mention constants.',
        ar: 'عند قراءته قصيدةً قديمة يبيّن أن التعجب من نظام السماء والاستدلال به على الله قديم في إيمان إسرائيل. وهو ليس حجة علمية ولا يذكر ثوابت.',
      },
      bible: { book: 'psalms', chapter: 19, verse: '1-4' },
    },
    {
      id: 'e4',
      sourceId: 'S62',
      locator: 'Romans 1:19–20',
      role: 'context',
      states: {
        en: 'St Paul the Apostle writes that what can be known of God is plain to people, since from the creation of the world His power and divine nature have been perceived in the things that were made.',
        ar: 'يكتب القديس بولس الرسول أن ما يُعرف عن الله ظاهر للناس، لأن قدرته ولاهوته منذ خلق العالم مدركان بالأشياء المصنوعة.',
      },
      inference: {
        en: 'It shows the apostle’s view that creation can point towards its Maker. It speaks of a general pointer, not of a proof, and the claim of St Paul should be read in the setting of his letter.',
        ar: 'وهو يبيّن رأي الرسول بأن الخليقة يمكن أن تشير إلى صانعها. وهو يتكلم عن إشارة عامة لا عن برهان، ويُقرأ كلامه في سياق رسالته.',
      },
      bible: { book: 'romans', chapter: 1, verse: '19-20' },
    },
    {
      id: 'e5',
      sourceId: 'S62',
      locator: 'Wisdom of Solomon 13:1–5',
      role: 'context',
      states: {
        en: 'The author says that people are without excuse if they admire the beauty and power of created things and fail to ask who made them, since the greatness of created things lets their Maker be perceived by analogy.',
        ar: 'يقول الكاتب إن الناس بلا عذر إن أعجبتهم جمالُ المخلوقات وقوتها ولم يسألوا من صنعها، لأن عظمة المخلوقات تجعل صانعها يُدرَك بالقياس.',
      },
      inference: {
        en: 'This book belongs to the deuterocanonical books that the Coptic Church receives. It shows that the move from the order of creation to its Maker is also made in the later Jewish wisdom tradition. It is a theological text and is not used as evidence for the physics.',
        ar: 'هذا السفر من الأسفار القانونية الثانية التي تقبلها الكنيسة القبطية. وهو يبيّن أن الانتقال من نظام الخليقة إلى صانعها حاضر أيضًا في تقليد الحكمة اليهودي المتأخر. وهو نص لاهوتي ولا يُستعمل شاهدًا على الفيزياء.',
      },
    },
  ],

  objections: [
    {
      id: 'o1',
      statement: {
        en: 'We have no way to say how probable the actual values were. To call a range “narrow” you need to know the range of values that were possible and a measure of how likely each was. Physics gives neither, so there is no probability to be astonished at (the normalisation problem).',
        ar: 'لا نملك طريقة لنقول ما مدى احتمال القيم الفعلية. فلكي نصف نطاقًا بأنه «ضيق» لا بد أن نعرف مدى القيم الممكنة ومقياسًا لاحتمال كل منها. والفيزياء لا تقدم أيًّا منهما، فلا احتمال هنا يدعو إلى الدهشة (مشكلة المعايرة).',
      },
      response: {
        en: [
          'Defenders reply that the argument does not need exact numbers. It needs only the judgement that the life-permitting set is a small fraction of what could be varied, and that this is a comparative claim, as when we judge that a tiny target is hard to hit by chance without knowing exact odds.',
          'Critics reply that comparison between ranges needs a measure that physics does not provide, and that different reasonable measures give different answers. This is a real difficulty that careful defenders acknowledge.',
        ],
        ar: [
          'يردّ المدافعون بأن الحجة لا تحتاج إلى أرقام دقيقة، وإنما إلى الحكم بأن مجموعة القيم التي تسمح بالحياة جزء صغير مما يمكن تغييره، وأن هذا حكم مقارِن، كما نحكم أن إصابة هدف صغير جدًا بالمصادفة عسيرة دون أن نعرف الاحتمال بالضبط.',
          'ويردّ الناقدون بأن المقارنة بين النطاقات تحتاج إلى مقياس لا توفره الفيزياء، وأن المقاييس المعقولة المختلفة تعطي نتائج مختلفة. وهذه صعوبة حقيقية يعترف بها المدافعون الحصفاء.',
        ],
      },
      limits: {
        en: 'This exchange is not settled by any measurement. It stays open until there is a principled way to say what was possible.',
        ar: 'لا يحسم هذا التبادلَ أي قياس، ويبقى مفتوحًا إلى أن توجد طريقة مبدئية لتحديد ما كان ممكنًا.',
      },
    },
    {
      id: 'o2',
      statement: {
        en: 'A deeper physical theory may fix the values, so that they could not have been otherwise. Then there is nothing to explain by design, and the sense of improbability disappears. Physics has repeatedly explained as consequences of deeper laws what once looked like arbitrary numbers.',
        ar: 'قد تحدد نظرية فيزيائية أعمق هذه القيم بحيث لا يمكن أن تكون غير ما هي عليه. فلا يبقى شيء يُفسَّر بالتصميم، ويزول الشعور بعدم الاحتمال. وقد فسّرت الفيزياء مرارًا بقوانين أعمق ما بدا يومًا أرقامًا اعتباطية.',
      },
      response: {
        en: [
          'This is possible and, for some constants, may be true. Defenders note, however, that a deeper law would itself have a form and constants of its own, so the question of why this law, with these features, would remain, even if it moved back a level.',
          'It follows that the objection does not remove the question of order. It changes where the question is asked. Whether that is a gain depends on whether one thinks a necessary law needs no further explanation, which is the same philosophical disagreement that appears in the cosmological argument.',
        ],
        ar: [
          'هذا ممكن، وقد يكون صحيحًا في بعض الثوابت. غير أن المدافعين يلاحظون أن القانون الأعمق سيكون له شكله وثوابته، فيبقى السؤال لماذا هذا القانون بهذه السمات، وإن انتقل مستوىً إلى الوراء.',
          'ويترتب على ذلك أن الاعتراض لا يزيل سؤال النظام بل ينقل موضع طرحه. وهل في ذلك مكسب يتوقف على ما إذا كان المرء يرى أن القانون الضروري لا يحتاج إلى تفسير إضافي، وهو الخلاف الفلسفي نفسه الذي يظهر في الحجة الكونية.',
        ],
      },
      limits: {
        en: 'No such complete theory exists today, so neither side can say what it would show.',
        ar: 'لا توجد اليوم نظرية كاملة كهذه، فلا يستطيع أي طرف أن يقول ماذا ستُظهر.',
      },
    },
    {
      id: 'o3',
      statement: {
        en: 'We only know of life like ours. Different physics might allow other kinds of complexity or life, so the claim that life needs these values is too narrow. And we exist, so of course we find conditions that permit us.',
        ar: 'نحن لا نعرف إلا حياة كحياتنا. وقد تسمح فيزياء مختلفة بأنواع أخرى من التعقيد أو الحياة، فالقول إن الحياة تحتاج إلى هذه القيم ضيق أكثر من اللازم. ثم إننا موجودون، فمن الطبيعي أن نجد ظروفًا تسمح بنا.',
      },
      response: {
        en: [
          'The first point is a fair limit on the scientific premise of the argument, and careful presentations of the argument admit that “life” here means life based on chemistry like ours, or at least some complex structure. The second point, the observer selection effect, explains why we observe such a universe but not, defenders say, why there is one; that exchange is taken up in the article on the selection effect and the multiverse.',
        ],
        ar: [
          'النقطة الأولى حدّ منصف للمقدمة العلمية للحجة، والعروض الدقيقة للحجة تقرّ بأن «الحياة» هنا تعني حياة قائمة على كيمياء كالتي نعرفها أو على الأقل بنية معقدة ما. أما النقطة الثانية، أي أثر الانتقاء، فيفسّر لماذا نرصد كونًا كهذا لا، كما يقول المدافعون، لماذا يوجد كون كهذا. وهذا التبادل موضوع مقالة أثر الانتقاء والأكوان المتعددة.',
        ],
      },
      limits: {
        en: 'We do not know what physics unlike ours could produce, so this objection and its reply both rest on speculation.',
        ar: 'لا نعرف ماذا يمكن أن تنتج فيزياء مختلفة عن فيزيائنا، فالاعتراض والرد كلاهما يقومان على تخمين.',
      },
    },
    {
      id: 'o4',
      statement: {
        en: 'If the argument is that God is needed because science cannot yet explain the values, it is a “God of the gaps”. If science explains them later, God will be pushed out and faith will be shaken.',
        ar: 'إن كانت الحجة أن الله مطلوب لأن العلم لا يفسّر القيم بعد، فهي «إله الفجوات». وإن فسّرها العلم لاحقًا خرج الله وتزعزع الإيمان.',
      },
      response: {
        en: [
          'The objection is right about one kind of argument and a Christian should avoid it. The better form of the argument does not rest on a gap in what science has found. It rests on the fact that the laws exist and have the character they have, which every future physics will also have to take as given.',
          'The Church’s faith does not stand or fall with this argument. If physics one day explains the constants, creation will still be God’s work, as it is the Church’s teaching that God sustains all that exists, including the laws by which it works.',
        ],
        ar: [
          'الاعتراض صائب في نوع واحد من الحجج، وعلى المسيحي أن يتجنبه. أما الصيغة الأفضل للحجة فلا تقوم على فجوة في ما اكتشفه العلم، بل على أن القوانين موجودة وعلى ما هي عليه من طبيعة، وهو ما ستضطر كل فيزياء مقبلة إلى اعتباره معطًى.',
          'وإيمان الكنيسة لا يقوم بهذه الحجة ولا يسقط بسقوطها. فلو فسّرت الفيزياء الثوابت يومًا، فستبقى الخليقة عمل الله، لأن تعليم الكنيسة أن الله يحفظ كل ما هو موجود، بما فيه القوانين التي يعمل بها.',
        ],
      },
      limits: {
        en: 'This answers the charge against the Church’s faith. It does not show that the design-style argument itself succeeds.',
        ar: 'هذا جواب عن الاتهام الموجه إلى إيمان الكنيسة، ولا يثبت أن الاستدلال من النظام ينجح.',
      },
    },
    {
      id: 'o5',
      statement: {
        en: 'Almost all of the universe is hostile to life, and the history of life includes enormous waste and suffering. A designer who wanted life would have made a universe better suited to it, so the evidence points away from a caring creator.',
        ar: 'معظم الكون معادٍ للحياة، وتاريخ الحياة فيه هدر وألم هائلان. والمصمِّم الذي يريد الحياة كان سيصنع كونًا أنسب لها، فالدليل يبتعد عن خالق مهتم.',
      },
      response: {
        en: [
          'Defenders reply that the argument says only that the universe’s basic structure makes life possible, not that life is its only or main purpose, and that a large and old universe may be the necessary setting for the existence of any life. The question of suffering is a separate and serious one, taken up in the articles on the problem of evil.',
        ],
        ar: [
          'يردّ المدافعون بأن الحجة لا تقول إلا إن البنية الأساسية للكون تجعل الحياة ممكنة، لا إن الحياة هدفه الوحيد أو الرئيسي، وإن كونًا كبيرًا قديمًا قد يكون الإطار اللازم لوجود أي حياة. أما سؤال الألم فسؤال مستقل وجاد، تتناوله مقالات مشكلة الشر.',
        ],
      },
      limits: {
        en: 'It does not answer why a creator would choose such a universe. It only notes that the fine-tuning argument is not meant to answer that.',
        ar: 'ولا يجيب عن سبب اختيار خالق كونًا كهذا، بل يلاحظ فقط أن حجة الضبط الدقيق ليست معنية بالإجابة عنه.',
      },
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'The argument is not historical: it does not rest on an event, a text or a witness, so no historical case is made here.',
      ],
      ar: [
        'الحجة ليست تاريخية: فهي لا تقوم على حدث أو نص أو شاهد، ولذلك لا تُساق هنا حجة تاريخية.',
      ],
    },
    theological: {
      en: [
        'A Christian may take the fine-tuning of the universe as a reason for wonder and as consistent with belief in a Creator, without treating it as a proof. The Church does not teach that people come to faith by calculating odds. It teaches that the God who made all things has made Himself known in His Word, and that He is worshipped in truth in the life of the Church.',
        'Scripture is not a physics text, and the Church does not read Genesis or the Psalms as predictions about constants. What they teach is that the world is God’s work, ordered and good, and that its order speaks of Him. The confession in the Creed, “maker of heaven and earth, and of all things visible and invisible,” is a confession about who God is, and it holds whatever physics finds.',
      ],
      ar: [
        'يجوز للمسيحي أن يعدّ الضبط الدقيق للكون سببًا للتعجب ومنسجمًا مع الإيمان بالخالق، دون أن يعدّه برهانًا. ولا تعلّم الكنيسة أن الناس يأتون إلى الإيمان بحساب الاحتمالات، بل تعلّم أن الله الذي صنع كل شيء قد أعلن ذاته في كلمته، وأنه يُسجد له بالحق في حياة الكنيسة.',
        'والكتاب المقدس ليس كتاب فيزياء، ولا تقرأ الكنيسة سفر التكوين أو المزامير تنبؤاتٍ عن الثوابت. وما تعلّمه أن العالم عمل الله، منظَّم وحسن، وأن نظامه يتحدث عنه. والاعتراف في قانون الإيمان «خالق السماء والأرض، ما يُرى وما لا يُرى» اعتراف بمن هو الله، وهو قائم أيًّا كان ما تكتشفه الفيزياء.',
      ],
    },
  },
  coptic: {
    en: [
      'The Alexandrian Fathers spoke of creation as the work of the Father through the Word, from nothing, so that everything that exists depends on God at every moment. St Athanasius, in his writings against the pagans, also pointed to the harmony and order of creation as a witness to the Word who orders it. The Church’s use of the Psalms in the daily hours keeps this wonder in prayer: the believer praises the Creator for the heavens before ever calculating anything about them.',
      'For this reason the Coptic Orthodox Church can welcome what physics discovers about the universe’s structure with interest and without fear, and it does not need to defend a particular scientific model in order to confess the Creator.',
    ],
    ar: [
      'تحدّث الآباء السكندريون عن الخلق بوصفه عمل الآب بالكلمة من العدم، بحيث يعتمد كل ما هو موجود على الله في كل لحظة. وأشار القديس أثناسيوس، في كتاباته ضد الوثنيين، إلى تناغم الخليقة ونظامها شاهدًا على الكلمة الذي ينظّمها. وتُبقي صلوات الأجبية اليومية بمزاميرها هذا التعجب في الصلاة: فالمؤمن يسبّح الخالق على السموات قبل أن يحسب عنها شيئًا.',
      'ولذلك تستطيع الكنيسة القبطية الأرثوذكسية أن ترحب باهتمام وبلا خوف بما تكتشفه الفيزياء عن بنية الكون، ولا تحتاج إلى الدفاع عن نموذج علمي معين لتعترف بالخالق.',
    ],
  },
  disputed: {
    en: [
      'Disputed among physicists: how many independent fine-tuned quantities there are, how narrow the ranges are, whether a deeper theory fixes the values, and whether other physics could permit other kinds of life.',
      'Disputed among philosophers: whether the idea of probability can be applied to the values of constants at all, and whether, if it can, a designing mind is a better explanation than a multiverse or brute fact.',
      'Disputed among Christians: how much weight the argument should be given in presenting the faith. Some defend it as one strand of a cumulative case, and others hold that the Church’s witness is best given from revelation and worship and that this argument adds little.',
    ],
    ar: [
      'مواضع الخلاف بين الفيزيائيين: كم عدد الكميات المضبوطة بدقة وهي مستقلة، وما مدى ضيق نطاقاتها، وهل تحدد نظرية أعمق هذه القيم، وهل يمكن لفيزياء أخرى أن تسمح بأنواع أخرى من الحياة.',
      'ومواضع الخلاف بين الفلاسفة: هل يصح تطبيق مفهوم الاحتمال على قيم الثوابت أصلًا، وإن صح فهل العقل المصمِّم تفسير أفضل من الأكوان المتعددة أو الحقيقة الخامة.',
      'ومواضع الخلاف بين المسيحيين: كم وزنًا ينبغي أن تُعطى هذه الحجة في عرض الإيمان. يدافع عنها بعضهم خيطًا من حجة تراكمية، ويرى آخرون أن شهادة الكنيسة تُقدَّم خيرًا من الإعلان والعبادة وأن هذه الحجة تضيف قليلًا.',
    ],
  },
  conclusion: {
    en: 'The universe’s structure allows life only within limited ranges of some constants and conditions, as far as present models go, and that is a striking fact. Whether it points to a Creator depends on judgements about probability and explanation that physics cannot make for us, and thoughtful people differ. The Church’s faith in the Creator does not depend on this argument. It can offer it as a reason for wonder, with honesty about its limits.',
    ar: 'لا تسمح بنية الكون بالحياة، بحسب النماذج الحالية، إلا ضمن نطاقات محدودة لبعض الثوابت والشروط، وهذه واقعة لافتة. وهل تشير إلى خالق فيتوقف على أحكام عن الاحتمال والتفسير لا تستطيع الفيزياء أن تصدرها عنا، ويختلف فيها العقلاء. وإيمان الكنيسة بالخالق لا يتوقف على هذه الحجة، ويمكنها أن تقدمها سببًا للتعجب مع الصدق في بيان حدودها.',
  },
  furtherReading: ['S39', 'S38'],
  related: [
    'selection-effect-and-multiverse',
    'arguments-for-god-claim',
    'does-evolution-disprove-god',
    'can-science-exclude-divine-action',
    'what-cosmological-arguments-establish',
  ],
};
