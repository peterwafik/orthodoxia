import type { Article } from '../types.ts';

export const article: Article = {
  id: 'universe-needs-explanation',
  questionId: 'universe-needs-explanation',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article examines the principle behind the contingency form of the cosmological argument: that the universe, taken as a whole, requires an explanation beyond itself. It sets out the principle, the reasons for it, the main objections, and what follows if it is accepted. It does not examine whether the universe had a beginning, which another article treats.',
    ar: 'تفحص هذه المقالة المبدأ الذي تقوم عليه صيغة الإمكان من الحجة الكونية: أن الكون، مأخوذًا في مجموعه، يحتاج إلى تفسير خارج ذاته. وتعرض المبدأ وأسبابه وأهم الاعتراضات عليه وما يترتب إن قُبل. ولا تبحث هل كان للكون بداية، فلذلك مقالة أخرى.',
  },
  shortAnswer: {
    en: 'The argument says that things which might not have existed need an explanation, that the universe is such a thing, and that its explanation cannot be one more member of the universe. If that is right, the explanation lies in something that exists independently. The weak point is the first step: why accept that everything, or the whole of everything, must have an explanation? Defenders say the principle is a basic assumption behind all inquiry; critics say it may be true of parts and not of the whole, or may be unprovable. Even if it is granted, the argument reaches an independent ground of the universe, not yet the God of the Church.',
    ar: 'تقول الحجة إن الأشياء التي كان يمكن ألا توجد تحتاج إلى تفسير، وإن الكون شيء من هذا القبيل، وإن تفسيره لا يمكن أن يكون عضوًا آخر في الكون. فإن صح ذلك فالتفسير في شيء موجود باستقلال. ونقطة الضعف في الخطوة الأولى: لماذا نقبل أن كل شيء، أو مجموع كل شيء، يجب أن يكون له تفسير؟ ويقول المدافعون إن المبدأ افتراض أساسي وراء كل بحث؛ ويقول الناقدون إنه قد يصح على الأجزاء دون الكل، أو قد لا يمكن إثباته. وحتى لو سُلّم به فإن الحجة تبلغ أساسًا مستقلًا للكون لا إله الكنيسة بعدُ.',
  },
  quickPoints: {
    en: [
      'A contingent thing is one that might not have existed. The argument claims that such things call for an explanation, and that the universe is contingent.',
      'The central premise is a principle of sufficient explanation, and it is accepted by some philosophers and rejected by others.',
      'Explaining each part of a chain does not by itself explain why the whole chain exists. Critics say this treats the whole as if it were one more part.',
      'Scientific explanations work inside the universe; the question concerns the universe as a whole, where science does not obviously reach.',
      'If the argument works, the conclusion is an independent, non-contingent ground of reality. It is not yet a personal or Christian God.',
      'The Christian view is that the universe depends moment by moment on God, who is the source of its existence.',
    ],
    ar: [
      'الشيء الممكن هو ما كان يمكن ألا يوجد. وتدّعي الحجة أن هذه الأشياء تستدعي تفسيرًا، وأن الكون ممكن.',
      'المقدمة المحورية مبدأ كفاية التفسير، ويقبله بعض الفلاسفة ويرفضه آخرون.',
      'تفسير كل جزء من سلسلة لا يفسّر وحده لماذا توجد السلسلة كلها. ويقول الناقدون إن هذا يعامل الكل كأنه جزء آخر.',
      'التفسيرات العلمية تعمل داخل الكون؛ والسؤال عن الكون كله، حيث لا يصل العلم بوضوح.',
      'إن نجحت الحجة فالنتيجة أساس مستقل غير ممكن للواقع. وهو ليس بعدُ إلهًا شخصيًا ولا مسيحيًا.',
      'الرأي المسيحي أن الكون يعتمد في كل لحظة على الله، مصدر وجوده.',
    ],
  },
  argumentTypes: ['philosophical', 'theological'],
  assessment: {
    label: 'philosophical_argument',
    explanation: {
      en: 'The argument is philosophical and turns on premises about explanation and necessity that are debated among professional philosophers, theist and non-theist. The label names the kind of reasoning; it does not rate the argument as weak or strong.',
      ar: 'الحجة فلسفية وتقوم على مقدمات عن التفسير والضرورة يتناقش فيها الفلاسفة المحترفون، مؤمنون وغير مؤمنين. والتصنيف يسمّي نوع الاستدلال ولا يقدّر الحجة ضعيفة أو قوية.',
    },
  },
  whyExamine: {
    en: [
      'The claim that the universe needs an explanation is often stated as if it were obvious, and often rejected as if it were absurd. Neither response is careful. The argument has a definite structure, and its strength depends on a few premises that can be examined one at a time.',
      'Examining it also shows what it is not. It does not say that science is incomplete, and it does not appeal to a gap in knowledge. It asks about the status of the universe itself.',
    ],
    ar: [
      'كثيرًا ما يُقال إن الكون يحتاج إلى تفسير كأنه بديهي، وكثيرًا ما يُرفض كأنه عبث. وليس أي من الموقفين دقيقًا. فللحجة بنية محددة، وقوتها تتوقف على مقدمات قليلة يمكن فحصها واحدة واحدة.',
      'والفحص يبيّن أيضًا ما ليست عليه: فهي لا تقول إن العلم ناقص، ولا تحتكم إلى ثغرة في المعرفة. بل تسأل عن مرتبة الكون نفسه.',
    ],
  },
  background: {
    en: [
      'The argument has a long history. Greek, Islamic, Jewish and Christian philosophers used forms of it, and Leibniz stated it in terms of a principle of sufficient reason. The contingency form runs: (1) whatever exists has an explanation, either in the necessity of its own nature or in something else. (2) The universe, with its laws and contents, does not exist by the necessity of its own nature, since it could have been otherwise. (3) So its explanation lies in something else. (4) That something cannot be a further member of the universe, so it lies outside it. Different versions word the steps differently.',
      'The first premise is the contested one. Defenders argue that it is presupposed in science, in detective work and in ordinary life, and that to deny it for the universe as a whole is arbitrary. Critics distinguish between explaining events and explaining everything. Hume held that if each member of a collection has a cause, the collection as a whole does not need a further one, since we have explained each part. Later critics asked whether the principle might be false at the level of the whole, or true only as a working assumption. Kant argued that the concept of cause is for objects of experience and cannot be stretched to the universe as such.',
      'There is also a dispute about the second premise. Some philosophers hold that the universe, or its basic laws, might exist necessarily, so nothing outside it would be required. Defenders reply that the physical universe has features, such as particular matter and particular laws, which do not seem necessary in the way a mathematical truth is.',
      'Scripture, read as an ancient text, presents the dependence of the world on God, not as a philosophical argument but as a claim: all things were made through the Word, and in him all things hold together (John 1:3; Colossians 1:16–17). Athanasius of Alexandria teaches that created things have being only through the Word and would fall back into nothing without him (S52). These texts state the Christian understanding and do not claim to settle the philosophical premises.',
      'Richard Swinburne has defended a version of the argument within a cumulative case, holding that God is a simpler and more fruitful explanation of the universe than a brute fact (S39 for the full presentation, S38 for a general reader). They are cited here as whole works for their overall approach, because only the publisher pages have been consulted. His approach differs from the older argument from necessity and is itself disputed.',
    ],
    ar: [
      'للحجة تاريخ طويل. فقد استعمل صيغًا منها فلاسفة يونان ومسلمون ويهود ومسيحيون، وعرضها ليبنتز بمبدأ العلة الكافية. وتجري صيغة الإمكان هكذا: (١) كل ما يوجد له تفسير، إما في ضرورة طبيعته أو في شيء آخر. (٢) الكون بقوانينه ومحتوياته لا يوجد بضرورة طبيعته لأنه كان يمكن أن يكون غير ذلك. (٣) فتفسيره في شيء آخر. (٤) ولا يمكن أن يكون هذا الشيء عضوًا آخر في الكون، فهو خارجه. وتصوغ النسخ المختلفة الخطوات بعبارات مختلفة.',
      'والمقدمة الأولى هي موضع الخلاف. يحتجّ المدافعون بأنها مفترضة في العلم وفي التحقيق الجنائي وفي الحياة اليومية، وبأن إنكارها للكون كله تحكّم. ويفرّق الناقدون بين تفسير الأحداث وتفسير كل شيء. فقد رأى هيوم أنه إذا كان لكل عضو في مجموعة علة، فلا تحتاج المجموعة إلى علة أخرى، لأننا فسّرنا كل جزء. وسأل ناقدون لاحقون: هل قد يكون المبدأ باطلًا على مستوى الكل، أو صحيحًا فقط كافتراض عملي؟ ورأى كانط أن مفهوم العلّة لموضوعات التجربة ولا يصح مدّه إلى الكون بما هو كذلك.',
      'وثمة خلاف أيضًا في المقدمة الثانية. فيرى بعض الفلاسفة أن الكون أو قوانينه الأساسية قد توجد بالضرورة، فلا يلزم شيء خارجه. ويردّ المدافعون بأن للكون المادي سمات، كمادة بعينها وقوانين بعينها، لا تبدو ضرورية كما تكون الحقيقة الرياضية.',
      'ويقدّم الكتاب المقدس، عند قراءته كنص قديم، اعتماد العالم على الله لا كحجة فلسفية بل كدعوى: به كان كل شيء، وفيه يقوم الكل (يوحنا ١: ٣؛ كولوسي ١: ١٦–١٧). ويعلّم أثناسيوس الإسكندري أن المخلوقات لا كيان لها إلا بالكلمة ولعادت إلى العدم بدونه (S52). وتُعبّر هذه النصوص عن الفهم المسيحي ولا تدّعي حسم المقدمات الفلسفية.',
      'وقد دافع ريتشارد سوينبرن عن صيغة من الحجة ضمن حجة تراكمية، رأى فيها أن الله تفسير أبسط وأخصب لوجود الكون من واقعة خام (S39 عرضًا كاملًا، وS38 للقارئ العام). ولا تُذكر هنا إلا كأعمال كاملة ولمنهجها العام، لأن الاطلاع اقتصر على صفحات الناشر. ومنهجه يختلف عن الحجة القديمة من الضرورة وهو نفسه موضع جدل.',
    ],
  },
  glossary: ['cosmological-argument', 'theism', 'inspiration'],

  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'If the universe is contingent, and if what is contingent needs an explanation, then the universe has an explanation outside itself.',
        ar: 'إن كان الكون ممكنًا، وكان الممكن يحتاج إلى تفسير، فللكون تفسير خارج ذاته.',
      },
      argumentType: 'philosophical',
      assessment: 'philosophical_argument',
      rationale: {
        en: 'The inference is valid if the premises are granted. The force of the argument depends on whether the premises are accepted, and both are contested.',
        ar: 'الاستدلال سليم إن سُلّمت المقدمتان. وتتوقف قوة الحجة على قبول المقدمتين، وكلتاهما موضع خلاف.',
      },
      limits: {
        en: 'The argument does not show that the premises are true. A reader who rejects the principle of sufficient explanation is not made to accept the conclusion.',
        ar: 'لا تبيّن الحجة أن المقدمتين صحيحتان. ومن يرفض مبدأ كفاية التفسير لا يُلزَم بالنتيجة.',
      },
      evidence: ['e-swinburne-full', 'e-swinburne-intro'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'In Christian teaching the universe depends continually on God for its existence. This is a doctrine of the Church, stated in Scripture and in Athanasius, and is distinct from the philosophical argument.',
        ar: 'في التعليم المسيحي يعتمد الكون باستمرار على الله في وجوده. وهذه عقيدة للكنيسة، مذكورة في الكتاب المقدس وعند أثناسيوس، وتختلف عن الحجة الفلسفية.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'The Scriptural texts and the Alexandrian Father state the dependence of creation on God. They do so as an account of faith, not as a proof from premises about explanation.',
        ar: 'تقرر النصوص الكتابية وأب الإسكندرية اعتماد الخليقة على الله. وهما يفعلان ذلك بوصفه عرضًا للإيمان لا برهانًا من مقدمات عن التفسير.',
      },
      limits: {
        en: 'A reader who does not accept the Bible as inspired can see what the doctrine says without being asked to accept it as evidence.',
        ar: 'يستطيع القارئ الذي لا يقبل الكتاب المقدس موحى به أن يرى ما تقوله العقيدة دون أن يُطلب منه قبولها دليلًا.',
      },
      evidence: ['e-john-colossians', 'e-athanasius'],
    },
  ],

  evidence: [
    {
      id: 'e-john-colossians',
      sourceId: 'S62',
      locator: 'John 1:3; Colossians 1:16-17',
      role: 'context',
      states: {
        en: 'St John the Evangelist says that all things came to be through the Word, and Colossians says that all things were created through and for the Son, and that in him all things hold together.',
        ar: 'يقول القديس يوحنا الإنجيلي إن كل شيء به كان، وتقول رسالة كولوسي إن كل شيء خُلق به وله، وإن فيه يقوم الكل.',
      },
      inference: {
        en: 'Read as ancient texts, they show the first Christians speaking of creation as continuing to depend on the Son. This is faith language and does not argue for the philosophical premises.',
        ar: 'تبيّن النصوص القديمة أن المسيحيين الأوائل تحدثوا عن اعتماد الخليقة المستمر على الابن. وهذه لغة إيمان ولا تحتجّ للمقدمات الفلسفية.',
      },
      bible: { book: 'colossians', chapter: 1, verse: '16-17' },
    },
    {
      id: 'e-athanasius',
      sourceId: 'S52',
      locator: 'ch. 1–3 (creation through the Word, and from nothing)',
      role: 'supports',
      states: {
        en: 'In the opening chapters of On the Incarnation, Athanasius describes creation as brought from non-existence through the Word, with a natural tendency to fall back into non-existence unless the Word preserves it.',
        ar: 'في الفصول الأولى من «تجسد الكلمة» يصف أثناسيوس الخلق بأنه أُخرج من العدم بالكلمة، وله ميل طبيعي إلى العودة إلى العدم ما لم يحفظه الكلمة.',
      },
      inference: {
        en: 'It is early Alexandrian evidence for the doctrine that creation depends entirely on God. It is a theological statement and not a premise of the philosophical argument.',
        ar: 'هو شاهد إسكندري مبكر على عقيدة اعتماد الخليقة الكامل على الله. وهو تقرير لاهوتي وليس مقدمة في الحجة الفلسفية.',
      },
    },
    {
      id: 'e-swinburne-full',
      sourceId: 'S39',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'Swinburne’s book argues for God’s existence as part of a cumulative case that includes the existence of the universe.',
        ar: 'يحتجّ كتاب سوينبرن لوجود الله ضمن حجة تراكمية تشمل وجود الكون.',
      },
      inference: {
        en: 'It shows that a leading Christian philosopher treats the explanation of the universe as a real argument but as one of several. Only the publisher page was consulted, so no chapter is cited and his detailed reasoning is not reported.',
        ar: 'يبيّن أن فيلسوفًا مسيحيًا بارزًا يعامل تفسير الكون حجة حقيقية لكن واحدة من حجج عدة. واقتصر الاطلاع على صفحة الناشر فلا يُذكر فصل ولا يُنقل استدلاله التفصيلي.',
      },
    },
    {
      id: 'e-swinburne-intro',
      sourceId: 'S38',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'The shorter book by the same author presents the case for God for a general reader.',
        ar: 'يعرض الكتاب الأقصر للمؤلف نفسه الحجة لوجود الله للقارئ العام.',
      },
      inference: {
        en: 'It presents one position and is not a neutral survey.',
        ar: 'يعرض موقفًا واحدًا وليس مسحًا محايدًا.',
      },
      dependence: {
        en: 'Same author and position as S39, so not an independent confirmation.',
        ar: 'المؤلف والموقف نفسه كما في S39، فليس تأكيدًا مستقلًا.',
      },
    },
  ],

  objections: [
    {
      id: 'o1',
      statement: {
        en: 'The principle that everything has an explanation is a plausible rule of thumb, not a truth we know. Even if each thing within the universe has a cause, the universe as a whole need not, and to suppose so is to commit a fallacy of composition.',
        ar: 'مبدأ أن لكل شيء تفسيرًا قاعدة عملية مقبولة لا حقيقة معلومة. وحتى لو كان لكل شيء داخل الكون علة فلا يلزم أن يكون للكون ككل علة، وافتراض ذلك مغالطة التركيب.',
      },
      response: {
        en: [
          'Defenders reply that the contingency argument does not infer from parts to whole. It argues that a collection of dependent things, however large, is itself dependent, because nothing in it supplies what the members lack. They add that a principle which we rely on everywhere and cannot find a counterexample to has a strong claim to be accepted.',
          'Critics reply that the principle may be true of ordinary things and fail at the level of reality as such, where our experience gives no guide, and that quantum physics suggests that events can occur without a specific cause.',
        ],
        ar: [
          'يردّ المدافعون بأن حجة الإمكان لا تستدل من الأجزاء إلى الكل. بل تحتجّ بأن مجموعة من الأشياء المعتمدة، مهما كبرت، معتمدة هي نفسها، لأن لا شيء فيها يقدّم ما تفتقر إليه الأعضاء. ويضيفون أن مبدأً نعتمد عليه في كل مكان ولا نجد له مثالًا مضادًا له حق قوي في القبول.',
          'ويردّ الناقدون بأن المبدأ قد يصح على الأشياء العادية ويخفق على مستوى الواقع بما هو كذلك، حيث لا تهدينا خبرتنا، وبأن فيزياء الكم توحي بأن أحداثًا قد تقع دون علة محددة.',
        ],
      },
      limits: {
        en: 'This does not show that the principle is true or false. The argument stands or falls with a premise that cannot be tested by experiment.',
        ar: 'لا يبيّن هذا أن المبدأ صحيح أو باطل. فالحجة تقوم أو تسقط بمقدمة لا يمكن اختبارها تجريبيًا.',
      },
      evidence: ['e-swinburne-full'],
    },
    {
      id: 'o2',
      statement: {
        en: 'The universe might be a necessary being, or its laws might be. Then the universe is its own explanation and no further ground is needed.',
        ar: 'قد يكون الكون كائنًا ضروريًا، أو قد تكون قوانينه كذلك. فيكون الكون تفسير نفسه ولا حاجة إلى أساس آخر.',
      },
      response: {
        en: [
          'Defenders reply that what is necessary cannot fail to be, and the physical universe shows features that seem accidental: the particular constants, the particular matter and the particular history. They also say that things that change and are made of parts seem to be the kind that might not have been.',
          'Critics reply that we do not know enough about the deepest physical laws to say they are not necessary, and that a necessity we do not understand is no less coherent than a divine necessity that we do not understand.',
        ],
        ar: [
          'يردّ المدافعون بأن الضروري لا يمكن ألا يكون، والكون المادي تظهر فيه سمات تبدو عارضة: ثوابت بعينها ومادة بعينها وتاريخ بعينه. ويقولون أيضًا إن الأشياء التي تتغير وتتركب من أجزاء تبدو من النوع الذي كان يمكن ألا يكون.',
          'ويردّ الناقدون بأننا لا نعرف عن أعمق القوانين الفيزيائية ما يكفي لنقول إنها غير ضرورية، وبأن ضرورة لا نفهمها ليست أقل اتساقًا من ضرورة إلهية لا نفهمها.',
        ],
      },
      limits: {
        en: 'The question is open in metaphysics and physics, and neither side has settled it.',
        ar: 'السؤال مفتوح في الميتافيزيقا والفيزياء، ولم يحسمه أي طرف.',
      },
    },
    {
      id: 'o3',
      statement: {
        en: 'Even if the argument shows a ground of the universe, it tells us nothing about it. To call it “God” is to put a familiar name on something unknown.',
        ar: 'حتى لو بيّنت الحجة وجود أساس للكون فإنها لا تخبرنا عنه شيئًا. وتسميته «الله» وضع اسم مألوف على مجهول.',
      },
      response: {
        en: [
          'Defenders agree that the argument alone reaches only a limited conclusion and argue that further considerations (the order of the universe, the existence of minds and morality) say more about the ground. Christian theology does not claim to derive the Trinity or the incarnation from this argument.',
          'Critics reply that those further steps are the weaker ones, so the argument leaves us with less than the word “God” suggests.',
        ],
        ar: [
          'يوافق المدافعون على أن الحجة وحدها تبلغ نتيجة محدودة، ويحتجّون بأن اعتبارات أخرى (نظام الكون ووجود العقول والأخلاق) تقول عن الأساس أكثر. ولا يدّعي اللاهوت المسيحي أن الثالوث أو التجسد يُشتقان من هذه الحجة.',
          'ويردّ الناقدون بأن هذه الخطوات الأخرى هي الأضعف، فتتركنا الحجة بأقل مما توحي به كلمة «الله».',
        ],
      },
      limits: {
        en: 'This is a fair point about the scope of the conclusion. The related article on what cosmological arguments establish develops it.',
        ar: 'هذه ملاحظة وجيهة في نطاق النتيجة. وتوسّع فيها المقالة ذات الصلة عن ما تثبته الحجج الكونية.',
      },
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'There is no historical argument here. The principle of sufficient explanation is a philosophical premise, and the long history of its use, among Greek, Jewish, Muslim and Christian thinkers, shows that it has been found persuasive by many in different traditions, but does not show that it is true.',
      ],
      ar: [
        'لا توجد هنا حجة تاريخية. فمبدأ كفاية التفسير مقدمة فلسفية، والتاريخ الطويل لاستعماله عند مفكرين يونان ويهود ومسلمين ومسيحيين يبيّن أنه وجده كثيرون مقنعًا في تقاليد مختلفة، لكنه لا يبيّن أنه صحيح.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that the world is not self-sufficient but held in being by the Word of God. This does not rest on the premise of sufficient explanation, which is philosophical, but on revelation. For a believer the philosophical argument is a way of seeing that what faith teaches is not irrational, and not a foundation on which faith is built. This is theological interpretation.',
      ],
      ar: [
        'تعترف الكنيسة بأن العالم ليس مكتفيًا بذاته بل ممسوك في الوجود بكلمة الله. وهذا لا يقوم على مقدمة كفاية التفسير الفلسفية بل على الإعلان. وللمؤمن تكون الحجة الفلسفية وسيلة لرؤية أن ما يعلّمه الإيمان ليس غير معقول، وليست أساسًا يُبنى عليه الإيمان. وهذا تفسير لاهوتي.',
      ],
    },
  },
  coptic: {
    en: [
      'The Coptic Orthodox liturgy confesses the Son as the one through whom all things were made, and prays to God as the one who sustains all. The doctrine of continuing dependence is therefore familiar in worship, even though the Church does not require believers to hold any particular version of the philosophical argument.',
    ],
    ar: [
      'تعترف الصلوات الطقسية القبطية الأرثوذكسية بالابن الذي به كان كل شيء، وتصلّي إلى الله الذي يعول الجميع. فتعليم الاعتماد المستمر مألوف في العبادة، وإن لم تشترط الكنيسة على المؤمنين الأخذ بصيغة بعينها من الحجة الفلسفية.',
    ],
  },
  disputed: {
    en: [
      'Disputed: whether a principle of sufficient explanation holds universally; whether it applies to the universe as a whole; whether the universe or its laws could be necessary; whether quantum events show that some things have no cause; whether Hume’s and Kant’s objections succeed. Philosophers who have studied these questions closely disagree.',
    ],
    ar: [
      'مواضع الخلاف: هل يصح مبدأ كفاية التفسير كليًا، وهل ينطبق على الكون ككل، وهل يمكن أن يكون الكون أو قوانينه ضرورية، وهل تبيّن الأحداث الكمّية أن بعض الأشياء بلا علة، وهل تنجح اعتراضات هيوم وكانط. ويختلف الفلاسفة الذين درسوا هذه الأسئلة عن قرب.',
    ],
  },
  conclusion: {
    en: 'The claim that the universe needs an explanation beyond itself is a serious philosophical argument that rests on a premise some accept and others reject. If it succeeds it points to an independent ground of reality, not yet to the God of the Church. The Christian faith confesses that the world depends on God, but on the basis of revelation, and does not stand or fall with this argument.',
    ar: 'القول بأن الكون يحتاج إلى تفسير خارج ذاته حجة فلسفية جادة تقوم على مقدمة يقبلها بعضهم ويرفضها آخرون. وإن نجحت أشارت إلى أساس مستقل للواقع لا إلى إله الكنيسة بعدُ. والإيمان المسيحي يعترف بأن العالم يعتمد على الله، لكن على أساس الإعلان، ولا يقوم أو يسقط بهذه الحجة.',
  },
  furtherReading: ['S38', 'S39', 'S52'],
  related: [
    'why-something-rather-than-nothing',
    'can-the-universe-be-eternal',
    'what-cosmological-arguments-establish',
    'who-created-god',
    'arguments-for-god-claim',
  ],
};
