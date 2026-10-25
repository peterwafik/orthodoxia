import type { Article } from '../types.ts';

export const article: Article = {
  id: 'why-something-rather-than-nothing',
  questionId: 'why-something-rather-than-nothing',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article examines the question why there is anything at all: what the question asks, what answers have been given (brute fact, necessary being, creation), and how the Christian answer relates to them. It does not claim to prove that God exists.',
    ar: 'تفحص هذه المقالة السؤال: لماذا يوجد شيء أصلًا؟ ما الذي يسأل عنه، وما الأجوبة المقدَّمة (واقعة خام، كائن ضروري، خلق)، وكيف يتصل الجواب المسيحي بها. ولا تدّعي أنها تبرهن على وجود الله.',
  },
  shortAnswer: {
    en: 'The question asks for an explanation of the existence of anything, not of any particular thing. There are three main kinds of answer. One says that reality simply exists with no explanation (a brute fact). Another says that something exists necessarily and so needs no cause outside itself, which may be the universe or may be God. The third, the Christian one, says that the universe exists because God freely made it from nothing. Each can be stated clearly, and none has been shown to be forced on us by logic alone. The question is whether the first answer is satisfying or whether the second and third offer something better.',
    ar: 'يطلب السؤال تفسيرًا لوجود أي شيء، لا لوجود شيء بعينه. وللجواب ثلاثة أنواع رئيسية. أحدها أن الواقع موجود ببساطة دون تفسير (واقعة خام). والثاني أن شيئًا موجود بالضرورة فلا يحتاج إلى علة خارج ذاته، وقد يكون هذا الشيء الكون وقد يكون الله. والثالث، وهو الجواب المسيحي، أن الكون موجود لأن الله خلقه بحرية من العدم. ويمكن عرض كل منها بوضوح، ولم يثبت أن المنطق وحده يفرض أحدها. والسؤال: هل الجواب الأول مرضٍ، أم أن الثاني والثالث يقدمان شيئًا أفضل؟',
  },
  quickPoints: {
    en: [
      'The question is why there is anything at all, which is different from asking what caused a particular event within the universe.',
      'One answer is that reality is a brute fact. It cannot be refuted by science, and it cannot be shown to be the best answer either.',
      'A second answer is that something exists necessarily. The disagreement is over whether that something is the physical universe or a God beyond it.',
      'The Christian answer is creation: God, who needs nothing, freely brings a world into being from nothing out of love.',
      'Scientific ideas such as a quantum vacuum produce universes from something already there (laws, fields), so they do not answer the question as philosophers ask it.',
      'Some philosophers say the question is confused or has no answer. The Christian tradition does not agree, but takes the objection seriously.',
    ],
    ar: [
      'السؤال هو لماذا يوجد شيء أصلًا، وهذا غير السؤال عن علة حدث بعينه داخل الكون.',
      'أحد الأجوبة أن الواقع واقعة خام. ولا يمكن أن يدحضه العلم، ولا يمكن أن يُثبت كونه أفضل جواب.',
      'والجواب الثاني أن شيئًا موجود بالضرورة. والخلاف: هل هو الكون المادي أم إله وراءه؟',
      'والجواب المسيحي هو الخلق: الله الذي لا يحتاج إلى شيء يُوجد عالمًا من العدم بحرية ومحبة.',
      'الأفكار العلمية كالفراغ الكمّي تُنتج أكوانًا من شيء موجود سلفًا (قوانين، حقول)، فلا تجيب عن السؤال كما يطرحه الفلاسفة.',
      'ويرى بعض الفلاسفة أن السؤال ملتبس أو لا جواب له. ولا يوافق التقليد المسيحي على ذلك، لكنه يأخذ الاعتراض بجدية.',
    ],
  },
  argumentTypes: ['philosophical', 'theological'],
  assessment: {
    label: 'philosophical_argument',
    explanation: {
      en: 'The question is philosophical: it asks about the ultimate explanation of existence, and neither laboratory results nor documents can settle it. Thoughtful philosophers, believers and non-believers, hold different views about whether the question has an answer. The label names the kind of reasoning and is not a verdict on strength.',
      ar: 'السؤال فلسفي: يسأل عن التفسير الأخير للوجود، ولا تحسمه نتائج المختبر ولا الوثائق. ويختلف فلاسفة جادّون، مؤمنون وغير مؤمنين، في هل للسؤال جواب. والتصنيف يسمّي نوع الاستدلال ولا يحكم بالقوة.',
    },
  },
  whyExamine: {
    en: [
      'This is one of the oldest questions in philosophy, and many people feel it at some point without having a word for it. Looking at it closely shows that the options are fewer than they seem, and that each has costs.',
      'It is also the most common doorway to the cosmological arguments for God. A careful reader should see what the question does and does not ask before judging whether an answer succeeds.',
    ],
    ar: [
      'هذا من أقدم أسئلة الفلسفة، ويشعر به كثيرون في وقت ما دون أن يجدوا له اسمًا. والنظر فيه عن قرب يبيّن أن الخيارات أقل مما تبدو، وأن لكل منها كلفة.',
      'وهو أيضًا المدخل الأشيع إلى الحجج الكونية على وجود الله. وعلى القارئ المدقق أن يرى ما يسأله السؤال وما لا يسأله قبل أن يحكم هل ينجح جواب ما.',
    ],
  },
  background: {
    en: [
      'The question is usually credited in this form to the philosopher Leibniz, who asked why there is something rather than nothing and thought the answer had to lie in a being whose existence is necessary. Many earlier thinkers asked related questions. The question is not about the beginning of the universe in time. A universe with no beginning would still raise it, because the issue is why this universe, or any, exists.',
      'The main answers are these. First, existence is a brute fact: there is no reason, and asking for one is a mistake, since explanations operate inside what exists. Second, a necessary being exists, one that could not have failed to exist. Some argue that this is the universe or its basic laws; others argue that it is a God, because the physical universe seems the sort of thing that might have been otherwise. Third, creation: the universe depends on a free act of God. Scientists sometimes describe the universe arising from a quantum vacuum or from nothing. Critics, including many physicists, reply that a vacuum with laws and fields is a something, and that this does not answer the philosophical question.',
      'The Bible gives no argument here but a declaration. Read as an ancient text, Genesis opens with God making heaven and earth (Genesis 1:1), and St Paul the Apostle tells the Athenians that the God who made the world gives life and breath to everything and needs nothing himself (Acts 17:24–25). The Church Fathers drew out the idea that creation is from nothing, and Athanasius of Alexandria writes of God bringing all things into being from non-existence through his Word (S52).',
      'Richard Swinburne, a philosopher and Eastern Orthodox Christian, argues that the existence of the universe is something that a God would make sense of and that the brute-fact view does not (S38 for the general reader, S39 for the full case). His books are cited as whole works for their overall approach only, because only the publisher pages have been consulted.',
    ],
    ar: [
      'يُنسب السؤال بهذه الصيغة عادةً إلى الفيلسوف ليبنتز الذي سأل لماذا يوجد شيء بدلًا من لا شيء، ورأى أن الجواب لا بد أن يكون في كائن وجوده ضروري. وطرح مفكرون كثيرون قبله أسئلة قريبة. والسؤال ليس عن بداية الكون في الزمان. فكون بلا بداية يثير السؤال نفسه، لأن القضية لماذا يوجد هذا الكون، أو أي كون.',
      'وهذه هي الأجوبة الرئيسية. الأول: الوجود واقعة خام، فلا سبب له، وطلب السبب خطأ لأن التفسيرات تعمل داخل ما هو موجود. الثاني: يوجد كائن ضروري لم يكن ممكنًا ألا يوجد. ويرى بعضهم أنه الكون أو قوانينه الأساسية، ويرى آخرون أنه إله، لأن الكون المادي يبدو من الأشياء التي كان يمكن أن تكون على غير ما هي عليه. الثالث: الخلق، فالكون يعتمد على فعل حر من الله. ويصف علماء أحيانًا الكون ناشئًا من فراغ كمّي أو من لا شيء. ويردّ الناقدون، ومنهم كثير من الفيزيائيين، بأن الفراغ ذا القوانين والحقول شيء، وبأن هذا لا يجيب عن السؤال الفلسفي.',
      'ولا يقدّم الكتاب المقدس هنا حجة بل إعلانًا. فعند قراءته كنص قديم يفتتح سفر التكوين بأن الله خلق السماء والأرض (تكوين ١: ١)، ويقول القديس بولس الرسول لأهل أثينا إن الله الذي صنع العالم يعطي الجميع حياة ونفسًا ولا يحتاج هو إلى شيء (أعمال ١٧: ٢٤–٢٥). واستخرج آباء الكنيسة فكرة أن الخلق من العدم، ويكتب أثناسيوس الإسكندري عن الله وهو يُوجد كل شيء من العدم بكلمته (S52).',
      'ويحتجّ ريتشارد سوينبرن، وهو فيلسوف ومسيحي أرثوذكسي شرقي، بأن وجود الكون أمر يجد الله له معنى ولا تجد له الواقعة الخام معنى (S38 للقارئ العام، وS39 للحجة الكاملة). ولا تُذكر كتبه إلا كأعمال كاملة ولمنهجها العام، لأن الاطلاع اقتصر على صفحات الناشر.',
    ],
  },
  glossary: ['cosmological-argument', 'theism', 'inspiration'],

  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'The question “why is there something rather than nothing?” asks for an explanation of the existence of anything at all, and so is not answered by an explanation of how one state of the universe arose from an earlier one.',
        ar: 'السؤال «لماذا يوجد شيء بدلًا من لا شيء؟» يطلب تفسيرًا لوجود أي شيء أصلًا، فلا يُجاب عنه بتفسير كيف نشأت حالة للكون من حالة سابقة.',
      },
      argumentType: 'philosophical',
      assessment: 'philosophical_argument',
      rationale: {
        en: 'A scientific explanation takes laws and some starting conditions as given. Even if it traced everything back to a first physical state, the question would remain about why those laws and that state exist.',
        ar: 'يأخذ التفسير العلمي القوانين وبعض الشروط الأولى مسلَّمة. وحتى لو تتبّع كل شيء إلى حالة فيزيائية أولى فسيبقى السؤال: لماذا توجد هذه القوانين وهذه الحالة؟',
      },
      limits: {
        en: 'Some philosophers hold that this question has no answer, or that it is not a proper question. If they are right then there is nothing more to ask.',
        ar: 'يرى بعض الفلاسفة أنه لا جواب لهذا السؤال، أو أنه ليس سؤالًا سليمًا. فإن كانوا على حق فلا شيء بعد ذلك يُسأل.',
      },
      evidence: ['e-swinburne-intro', 'e-swinburne-full'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'The main answers are three: existence as a brute fact; something that exists necessarily (physical or divine); and creation by a free God. They are not all equally simple, and which is best is disputed.',
        ar: 'الأجوبة الرئيسية ثلاثة: الوجود واقعة خام؛ أو شيء موجود بالضرورة (مادي أو إلهي)؛ أو خلق بيد إله حر. وليست كلها بالبساطة نفسها، والخلاف قائم في أيها أفضل.',
      },
      argumentType: 'philosophical',
      assessment: 'philosophical_argument',
      rationale: {
        en: 'The three answers cover the main options, and each has defenders among serious philosophers. The comparison turns on judgements about simplicity, about what needs explaining, and about whether the physical universe could exist necessarily.',
        ar: 'تغطي الأجوبة الثلاثة الخيارات الرئيسية، ولكل منها مدافعون بين الفلاسفة الجادين. وتدور المقارنة على أحكام في البساطة وفي ما يحتاج إلى تفسير وفي إمكان أن يوجد الكون المادي بالضرورة.',
      },
      limits: {
        en: 'No version of the argument compels agreement, and a reader who finds a brute fact acceptable is not shown to be mistaken.',
        ar: 'لا تُلزم أي صيغة من الحجة بالموافقة، ومن وجد الواقعة الخام مقبولة لا يثبت أنه مخطئ.',
      },
      evidence: ['e-swinburne-full'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'The Christian answer is that the world exists because the self-sufficient God freely willed it, and it is held on the authority of Scripture as the Church reads it and the teaching of the Fathers.',
        ar: 'الجواب المسيحي أن العالم موجود لأن الله المكتفي بذاته أراده بحرية، ويُقال به استنادًا إلى الكتاب المقدس كما تقرؤه الكنيسة وتعليم الآباء.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'Genesis 1 and Acts 17, read within the Church, together with Athanasius’ account of creation through the Word, support this teaching. It is the Church’s doctrine and is not derived from the philosophical question alone.',
        ar: 'يسند هذا التعليم تكوين ١ وأعمال ١٧ مقروءة داخل الكنيسة، مع عرض أثناسيوس للخلق بالكلمة. وهو عقيدة الكنيسة، ولا يُشتق من السؤال الفلسفي وحده.',
      },
      limits: {
        en: 'A reader who does not accept the Bible as inspired can still see what the teaching says, but is not asked to accept it as a premise.',
        ar: 'يستطيع القارئ الذي لا يقبل الكتاب المقدس موحى به أن يرى ما يقوله التعليم، ولا يُطلب منه قبوله مقدّمة.',
      },
      evidence: ['e-genesis', 'e-acts', 'e-athanasius'],
    },
  ],

  evidence: [
    {
      id: 'e-genesis',
      sourceId: 'S62',
      locator: 'Genesis 1:1',
      role: 'context',
      states: {
        en: 'The Bible opens by saying that God made the heavens and the earth.',
        ar: 'يفتتح الكتاب المقدس بالقول إن الله خلق السماوات والأرض.',
      },
      inference: {
        en: 'Read as an ancient text, it gives an answer to why anything exists: it exists because God made it. The verse does not argue for the claim.',
        ar: 'عند قراءته كنص قديم يقدّم جوابًا عن سبب وجود الأشياء: هي موجودة لأن الله صنعها. والآية لا تحتجّ للدعوى.',
      },
      bible: { book: 'genesis', chapter: 1, verse: '1' },
    },
    {
      id: 'e-acts',
      sourceId: 'S62',
      locator: 'Acts 17:24-25',
      role: 'context',
      states: {
        en: 'St Paul the Apostle says to the Athenians that the God who made the world and everything in it gives to all people life and breath and everything, and is not served as if he were in need.',
        ar: 'يقول القديس بولس الرسول لأهل أثينا إن الله الذي صنع العالم وكل ما فيه يعطي الجميع حياة ونفسًا وكل شيء، ولا يُخدم كأنه محتاج.',
      },
      inference: {
        en: 'It shows an early Christian form of the claim that the world depends on God and God does not depend on the world. It is St Luke the Evangelist’s report of the speech.',
        ar: 'يُظهر صورة مسيحية مبكرة للدعوى بأن العالم يعتمد على الله وأن الله لا يعتمد على العالم. وهو رواية القديس لوقا الإنجيلي للخطاب.',
      },
      bible: { book: 'acts', chapter: 17, verse: '24-25' },
    },
    {
      id: 'e-athanasius',
      sourceId: 'S52',
      locator: 'ch. 1–3 (creation through the Word, and from nothing)',
      role: 'supports',
      states: {
        en: 'In the opening chapters of On the Incarnation, Athanasius says that God made all things through his Word and brought them into being from nothing, and that creatures left to themselves tend back to non-existence.',
        ar: 'في الفصول الأولى من «تجسد الكلمة» يقول أثناسيوس إن الله صنع كل شيء بكلمته وأوجده من العدم، وإن المخلوقات إن تُركت لذاتها مالت إلى العدم.',
      },
      inference: {
        en: 'It is early Alexandrian evidence that the Church understood creation as radical dependence on God. It is a theological statement, not a proof.',
        ar: 'هو شاهد إسكندري مبكر على أن الكنيسة فهمت الخلق على أنه اعتماد جذري على الله. وهو تقرير لاهوتي وليس برهانًا.',
      },
    },
    {
      id: 'e-swinburne-intro',
      sourceId: 'S38',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'Swinburne’s shorter book presents for a general reader the case that God best explains why there is a universe.',
        ar: 'يعرض كتاب سوينبرن الأقصر للقارئ العام الحجة بأن الله أفضل تفسير لوجود الكون.',
      },
      inference: {
        en: 'It shows how a Christian philosopher states the argument. It is one position, not a neutral survey. Only the publisher page was consulted, so no chapter is cited.',
        ar: 'يبيّن كيف يعرض فيلسوف مسيحي الحجة. وهو موقف واحد وليس مسحًا محايدًا. واقتصر الاطلاع على صفحة الناشر فلا يُذكر فصل.',
      },
    },
    {
      id: 'e-swinburne-full',
      sourceId: 'S39',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'Swinburne’s longer book argues for the existence of God by weighing several kinds of argument together, among which are arguments from the existence of the universe.',
        ar: 'يحتجّ كتاب سوينبرن الأطول لوجود الله بوزن عدة أنواع من الحجج معًا، منها حجج من وجود الكون.',
      },
      inference: {
        en: 'It shows that the argument is treated as one part of a cumulative case and not as a free-standing proof. Same author as S38, so the two are not independent confirmations.',
        ar: 'يبيّن أن الحجة تُعامل جزءًا من حجة تراكمية لا برهانًا قائمًا بذاته. والمؤلف نفسه في S38، فليسا تأكيدين مستقلين.',
      },
      dependence: {
        en: 'Same author and position as S38.',
        ar: 'المؤلف والموقف نفسه كما في S38.',
      },
    },
  ],

  objections: [
    {
      id: 'o1',
      statement: {
        en: 'The question rests on the assumption that “nothing” is the natural state and that existence needs an explanation. But there may be no reason for this. The universe may simply exist, and asking why is like asking what is north of the North Pole.',
        ar: 'يقوم السؤال على افتراض أن «لا شيء» هو الحالة الطبيعية وأن الوجود يحتاج إلى تفسير. وقد لا يكون لذلك سبب. فقد يكون الكون موجودًا ببساطة، وسؤال لماذا كسؤال ما الذي شمال القطب الشمالي.',
      },
      response: {
        en: [
          'Defenders reply that the question does not assume nothing is natural, but asks why reality has the particular character it has, whether it is necessary or not. They add that we do not treat unexplained facts in ordinary life as acceptable when an explanation is available, and that a theist can point to one.',
          'Critics reply that explanations must end somewhere, and that the question gives no reason to end at God rather than at the universe. This is the best-known reply and it is not refuted by the question alone.',
        ],
        ar: [
          'يردّ المدافعون بأن السؤال لا يفترض أن العدم هو الطبيعي، بل يسأل لماذا للواقع هذه الصفة، ضروريًا كان أم لا. ويضيفون أننا في الحياة العادية لا نقبل وقائع غير مفسَّرة متى توفّر تفسير، وبأن المؤمن يستطيع أن يشير إلى تفسير.',
          'ويردّ الناقدون بأن التفسيرات لا بد أن تنتهي عند نقطة، وبأن السؤال لا يعطي سببًا للانتهاء عند الله لا عند الكون. وهذا أشهر ردّ ولا يدحضه السؤال وحده.',
        ],
      },
      limits: {
        en: 'The exchange shows that the choice between a brute universe and a necessary God depends on prior judgements about explanation.',
        ar: 'يبيّن التبادل أن الاختيار بين كون خام وإله ضروري يعتمد على أحكام سابقة في التفسير.',
      },
      evidence: ['e-swinburne-full'],
    },
    {
      id: 'o2',
      statement: {
        en: 'Physics already shows how a universe can come from nothing: quantum fluctuations can produce particles from an empty vacuum, so no God is required.',
        ar: 'تبيّن الفيزياء فعلًا كيف يمكن أن ينشأ كون من لا شيء: فالتقلبات الكمّية قد تنتج جسيمات من فراغ خالٍ، فلا حاجة إلى إله.',
      },
      response: {
        en: [
          'The “nothing” of such proposals is a vacuum governed by laws and fields, which is a something. Physicists differ on how far such models describe an actual origin, and they are not claims that there was ever an absolute lack of anything. The philosophical question then returns as the question of why those laws and fields exist.',
          'Critics reply that if the question can be pushed back every time, it may be reasonable to stop at the laws and not to go further. That judgement is not made by physics.',
        ],
        ar: [
          'إن «اللاشيء» في هذه المقترحات فراغ تحكمه قوانين وحقول، وهذا شيء. ويختلف الفيزيائيون في مدى وصف هذه النماذج أصلًا حقيقيًا للكون، وليست دعاوى بأن غياب كل شيء كان حاصلًا قط. فيعود السؤال الفلسفي: لماذا توجد هذه القوانين والحقول؟',
          'ويردّ الناقدون بأنه إذا كان يمكن دفع السؤال إلى الوراء كل مرة فقد يكون من المعقول التوقف عند القوانين وعدم المضي أبعد. وهذا حكم لا تصدره الفيزياء.',
        ],
      },
      limits: {
        en: 'This article does not assess the physics of any particular model. It shows only that the philosophical question is not the one such models address.',
        ar: 'لا تقيّم هذه المقالة فيزياء أي نموذج بعينه. هي تبيّن فقط أن السؤال الفلسفي ليس ما تعالجه هذه النماذج.',
      },
    },
    {
      id: 'o3',
      statement: {
        en: 'If God is the answer, then God is a brute fact. Saying that God exists necessarily is just a label for “no further explanation”, and it moves the problem a step back without solving it.',
        ar: 'إذا كان الله هو الجواب فالله واقعة خام. وقول إن الله موجود بالضرورة مجرد اسم لعبارة «لا تفسير آخر»، وهو يؤخر المشكلة خطوة دون أن يحلّها.',
      },
      response: {
        en: [
          'Defenders say that a necessary being differs from a brute fact: its existence is explained by its own nature, and it would be impossible for it not to exist, whereas a brute universe is merely there. They add that the Christian God is a person who has reasons, so the universe is not just a fact but an act.',
          'Critics reply that the idea of a being whose non-existence is impossible is not clearly coherent, and that if the universe could be necessary on the same terms the argument loses its force.',
        ],
        ar: [
          'يقول المدافعون إن الكائن الضروري يختلف عن الواقعة الخام: فوجوده يُفسَّر بطبيعته، ويستحيل ألا يوجد، أما الكون الخام فموجود وحسب. ويضيفون أن الله المسيحي شخص له مقاصد، فليس الكون مجرد واقعة بل فعلًا.',
          'ويردّ الناقدون بأن فكرة كائن يستحيل ألا يوجد ليست متسقة بوضوح، وبأنه إذا أمكن أن يكون الكون ضروريًا بالشروط نفسها فقدت الحجة قوتها.',
        ],
      },
      limits: {
        en: 'Whether anything exists necessarily is a disputed point in metaphysics and is not settled here.',
        ar: 'هل يوجد شيء بالضرورة؟ نقطة مختلف فيها في الميتافيزيقا ولا تُحسم هنا.',
      },
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'There is no historical argument here: the question is not about an event that left traces. What can be said historically is that the idea of creation from nothing was developed in the early Church in answer to views that the world was made from pre-existing matter or was itself eternal and divine. That shows how the doctrine arose and what it was set against.',
      ],
      ar: [
        'لا توجد هنا حجة تاريخية، فالسؤال ليس عن حدث ترك آثارًا. وما يمكن قوله تاريخيًا أن فكرة الخلق من العدم تبلورت في الكنيسة الأولى ردًا على آراء قالت إن العالم صُنع من مادة سابقة أو إنه أزلي وإلهي بذاته. وهذا يبيّن كيف نشأ التعليم وما الذي قوبل به.',
      ],
    },
    theological: {
      en: [
        'The Church teaches that the world is not a necessity for God but a gift: the Father creates through the Son in the Holy Spirit out of love, and holds all things in being. On this view the question “why is there something?” is answered not by a cold first principle but by the generosity of God. This is theological interpretation, offered as the Church’s understanding.',
      ],
      ar: [
        'تعلّم الكنيسة أن العالم ليس ضرورة لله بل عطية: فالآب يخلق بالابن في الروح القدس عن محبة، ويحفظ كل شيء في الوجود. وبحسب هذا الفهم يُجاب عن سؤال «لماذا يوجد شيء؟» لا بمبدأ أول بارد بل بسخاء الله. وهذا تفسير لاهوتي يُعرض بوصفه فهم الكنيسة.',
      ],
    },
  },
  coptic: {
    en: [
      'Creation from nothing is part of the Coptic Orthodox Church’s everyday prayer. The Creed begins by confessing the Father as maker of heaven and earth and of all things seen and unseen, and the liturgy gives thanks to God for creating the world and bringing us from non-existence into being. Athanasius, the great teacher of Alexandria, is a chief witness to this teaching.',
    ],
    ar: [
      'الخلق من العدم جزء من صلاة الكنيسة القبطية الأرثوذكسية اليومية. فيبدأ قانون الإيمان بالاعتراف بالآب خالق السماء والأرض وكل ما يُرى وما لا يُرى، وتشكر الليتورجيا الله على خلق العالم وإخراجنا من العدم إلى الوجود. وأثناسيوس، معلم الإسكندرية العظيم، شاهد رئيسي على هذا التعليم.',
    ],
  },
  disputed: {
    en: [
      'Disputed: whether the question has an answer; whether existence can be a brute fact; whether anything exists necessarily, and whether it could be the physical universe; whether the principle that everything has an explanation holds; whether models in physics bear on the question. Philosophers who have studied it closely disagree.',
    ],
    ar: [
      'مواضع الخلاف: هل للسؤال جواب، وهل يمكن أن يكون الوجود واقعة خامًا، وهل يوجد شيء بالضرورة وهل يمكن أن يكون الكون المادي، وهل يصح مبدأ أن لكل شيء تفسيرًا، وهل تمسّ نماذج الفيزياء السؤال. ويختلف الفلاسفة الذين درسوه عن قرب.',
    ],
  },
  conclusion: {
    en: 'The question why there is something rather than nothing is a real one, and it is not answered by science or by a slogan. The main options are a brute universe, a necessary being and creation, and the Christian faith confesses the last, as a matter of revelation. The philosophical reasons for it are serious but not compelling to everyone, and the objections are serious too.',
    ar: 'سؤال لماذا يوجد شيء بدلًا من لا شيء سؤال حقيقي، ولا يجيب عنه العلم ولا شعار. والخيارات الرئيسية كون خام وكائن ضروري وخلق، ويعترف الإيمان المسيحي بالأخير بوصفه من الإعلان. والأسباب الفلسفية له جادة لكنها ليست ملزمة للجميع، والاعتراضات جادة أيضًا.',
  },
  furtherReading: ['S38', 'S39', 'S52'],
  related: [
    'universe-needs-explanation',
    'who-created-god',
    'can-the-universe-be-eternal',
    'what-cosmological-arguments-establish',
    'arguments-for-god-claim',
  ],
};
