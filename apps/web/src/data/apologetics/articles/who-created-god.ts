import type { Article } from '../types.ts';

export const article: Article = {
  id: 'who-created-god',
  questionId: 'who-created-god',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article answers the objection “if everything needs a creator, who created God?” It sets out what the Christian tradition says about God’s being uncreated, why the question does not follow from the arguments for a creator, and where critics still press the point. It does not argue that God exists.',
    ar: 'تجيب هذه المقالة عن الاعتراض: «إن كان كل شيء يحتاج إلى خالق، فمن خلق الله؟» وتعرض ما يقوله التقليد المسيحي عن كون الله غير مخلوق، ولماذا لا ينشأ السؤال من الحجج على وجود خالق، وأين يلحّ الناقدون. وهي لا تبرهن على وجود الله.',
  },
  shortAnswer: {
    en: 'Nobody created God. God is the one who is not made: He has no beginning and depends on nothing, and everything else depends on Him. The question treats God as one more thing inside the universe and then asks where He came from. But the arguments for a creator never say that everything has a cause. They say that whatever begins to exist, or could have failed to exist, has a cause. The universe is that kind of thing; God is not. He is the Maker, and He was never made.',
    ar: 'لم يخلق أحدٌ الله. فالله هو غير المصنوع: لا بداية له ولا يعتمد على شيء، وكل ما سواه يعتمد عليه. والسؤال يعامل الله شيئًا آخر داخل الكون ثم يسأل من أين جاء. لكن الحجج على وجود خالق لا تقول قط إن لكل شيء علة. بل تقول إن ما يبدأ وجوده، أو ما كان يمكن ألا يوجد، له علة. والكون من هذا النوع، أما الله فليس منه. هو الصانع، ولم يُصنع قط.',
  },
  quickPoints: {
    en: [
      'Christians do not say that God was created; “God” means the one who is not made and has no beginning.',
      'The arguments for a first cause say that what begins to exist, or what is contingent, has a cause. They never say that everything does.',
      'Asking who made God treats Him as a part of the universe. He is its Maker, not a member of it.',
      'The charge of special pleading misreads the argument: God is not exempted from a rule, He simply does not have the property the rule is about.',
      'A designing mind is not complex like a machine. God is not composed of parts, so He is not the kind of thing that needs assembling or explaining.',
      'The Son is “begotten, not made” in the Creed: His eternal origin from the Father is not creation.',
    ],
    ar: [
      'لا يقول المسيحيون إن الله مخلوق؛ فكلمة «الله» تعني غير المصنوع الذي لا بداية له.',
      'تقول حجج العلة الأولى إن ما يبدأ أو ما هو ممكن له علة، ولا تقول قط إن كل شيء له علة.',
      'سؤال من صنع الله يعامله جزءًا من الكون. لكنه صانع الكون وليس عضوًا فيه.',
      'تهمة التحكّم تسيء قراءة الحجة: فالله لا يُستثنى من قاعدة، بل ليست فيه الصفة التي تتكلم عنها القاعدة.',
      'العقل المصمِّم ليس معقدًا كالآلة. والله غير مركّب من أجزاء، فليس مما يحتاج إلى تركيب أو تفسير.',
      'الابن «مولود غير مخلوق» في قانون الإيمان: وأصله الأزلي من الآب ليس خلقًا.',
    ],
  },
  argumentTypes: ['philosophical', 'theological'],
  assessment: {
    label: 'philosophical_argument',
    explanation: {
      en: 'The question is about the shape of an argument and the meaning of a concept. The reply that God is uncreated by definition is clear; whether the definition is fairly applied is a philosophical matter on which thoughtful people differ. The label names the kind of reasoning and is not a rating of strength.',
      ar: 'السؤال عن شكل حجة ومعنى مفهوم. والجواب بأن الله غير مخلوق بالتعريف واضح؛ أما هل التعريف مطبّق بإنصاف فمسألة فلسفية يختلف فيها العقلاء. والتصنيف يسمّي نوع الاستدلال وليس تقدير قوة.',
    },
  },
  whyExamine: {
    en: [
      'This is among the commonest objections to belief in God, often raised in childhood and never answered satisfactorily. It deserves a clear reply, because many people reject the arguments for a creator at this point without looking at what the arguments say.',
      'It also shows how much depends on stating the argument correctly. Once we see what Christians actually say about God, the question answers itself.',
    ],
    ar: [
      'هذا من أشيع الاعتراضات على الإيمان بالله، يثيره الناس غالبًا في الطفولة ولا يُجاب عنه جوابًا مقنعًا. ويستحق جوابًا واضحًا، لأن كثيرين يرفضون الحجج على وجود خالق عند هذه النقطة دون النظر فيما تقوله الحجج.',
      'ويبيّن أيضًا كم يتوقف على عرض الحجة عرضًا صحيحًا. فمتى رأينا ما يقوله المسيحيون حقًا عن الله، أجاب السؤال عن نفسه.',
    ],
  },
  background: {
    en: [
      'The Bible does not treat God as made. Read as an ancient text, a psalm says that from everlasting to everlasting he is God (Psalm 90:2), Isaiah has God say that he is the first and the last and that there is no god besides him (Isaiah 44:6), and Revelation describes him as the Alpha and the Omega, who is and was and is to come (Revelation 1:8). In Exodus God gives his name in a form the tradition reads as “I am” (Exodus 3:14). The Church’s creed calls the Father maker of all things seen and unseen, and says of the Son that he is begotten, not made.',
      'Christian philosophers add that “God” is not a name for the first member of a series of causes. They say that God is the source of every series, of time and of the universe, and is not the kind of thing that begins or ends. If that is the meaning of the word, then “who created God?” is like asking who the unmarried man’s wife is. It supposes what the term excludes.',
      'The arguments for a first cause do not say that everything has a cause. In the kalam form they say that whatever begins to exist has a cause, and that the universe began. In the contingency form they say that things which might not have existed need an explanation, and that something which exists necessarily needs none. So the argument has its own way of excluding God from the requirement. Richard Swinburne, a philosopher and Eastern Orthodox Christian, maintains that God as an ultimate explanation is a simpler one than the universe as a brute fact (S38 for a general reader).',
      'The objection takes another form in the writings of Richard Dawkins: a designer capable of making a universe would have to be at least as complex as what it explains, and so would need an explanation itself. Theists respond that the classical doctrine of God is of one who is not made of parts, and that explanation by a mind does not require that the mind be simple in the physical sense. Swinburne treats this simplicity as part of the case for God (S39).',
    ],
    ar: [
      'لا يعامل الكتاب المقدس الله على أنه مصنوع. فعند قراءته كنص قديم يقول مزمور إنه من الأزل إلى الأبد هو الله (مزمور ٩٠: ٢)، ويجعل إشعياء الله يقول إنه الأول والآخر وإنه لا إله غيره (إشعياء ٤٤: ٦)، ويصفه سفر الرؤيا بأنه الألف والياء، الكائن والذي كان والذي يأتي (رؤيا ١: ٨). وفي سفر الخروج يعطي الله اسمه بصيغة يقرؤها التقليد «أنا هو». ويسمّي قانون إيمان الكنيسة الآب خالق كل ما يُرى وما لا يُرى، ويقول عن الابن إنه مولود غير مخلوق.',
      'ويضيف الفلاسفة المسيحيون أن «الله» ليس اسمًا لأول عضو في سلسلة علل. بل هو، في قولهم، مصدر كل سلسلة، ومصدر الزمان والكون، وليس من نوع ما يبدأ أو ينتهي. فإذا كان هذا هو معنى الكلمة فإن «من خلق الله؟» كسؤال «من هي زوجة العازب؟»، يفترض ما يستبعده اللفظ.',
      'ولا تقول الحجج على العلة الأولى إن لكل شيء علة. ففي الصيغة الكلامية تقول إن كل ما يبدأ وجوده له علة، وإن الكون بدأ. وفي صيغة الإمكان تقول إن الأشياء التي كان يمكن ألا توجد تحتاج إلى تفسير، وإن ما يوجد بالضرورة لا يحتاج إلى تفسير. فللحجة طريقتها في استثناء الله من الاشتراط. ويرى ريتشارد سوينبرن، وهو فيلسوف ومسيحي أرثوذكسي شرقي، أن الله تفسير أخير أبسط من الكون بوصفه واقعة خامًا (S38 للقارئ العام).',
      'ويتخذ الاعتراض صورة أخرى في كتابات ريتشارد دوكنز: فالمصمِّم القادر على صنع كون لا بد أن يكون معقدًا على الأقل بقدر ما يفسّره، فيحتاج هو نفسه إلى تفسير. ويردّ المؤمنون بأن العقيدة الكلاسيكية عن الله أنه غير مركّب من أجزاء، وبأن التفسير بعقل لا يستلزم أن يكون العقل بسيطًا بالمعنى الفيزيائي. ويعالج سوينبرن هذه البساطة جزءًا من الحجة على وجود الله (S39).',
    ],
  },
  glossary: ['theism', 'cosmological-argument', 'trinity', 'tradition'],

  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'God is uncreated and without beginning, so the question “who created God?” does not apply to Him.',
        ar: 'الله غير مخلوق ولا بداية له، فسؤال «من خلق الله؟» لا ينطبق عليه.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'Scripture and the Creed present God as the first and the last, from everlasting to everlasting, with no maker. That is what the word “God” means.',
        ar: 'يقدّم الكتاب المقدس وقانون الإيمان الله الأول والآخر، من الأزل إلى الأبد، بلا صانع. وهذا هو معنى كلمة «الله».',
      },
      limits: {
        en: 'It answers the question inside the tradition’s definition. It does not show that a being matching that definition exists.',
        ar: 'تجيب عن السؤال في إطار تعريف التقليد. ولا تبيّن أن كائنًا يطابق هذا التعريف موجود.',
      },
      evidence: ['e-psalm90', 'e-isaiah', 'e-revelation', 'e-creed'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'The arguments for a first cause do not assert that everything has a cause. They assert it of things that begin to exist, or that are contingent, and so they never require a cause for God.',
        ar: 'لا تقرر الحجج على العلة الأولى أن لكل شيء علة. بل تقرره لما يبدأ وجوده أو لما هو ممكن، فلا تطلب علة لله أصلًا.',
      },
      argumentType: 'philosophical',
      assessment: 'philosophical_argument',
      rationale: {
        en: 'What needs a cause is what might not have been, or what had a beginning. A necessary, eternal being has neither feature. The explanation of everything that might not have been ends in the one who cannot fail to be.',
        ar: 'ما يحتاج إلى علة هو ما كان يمكن ألا يكون، أو ما له بداية. والكائن الواجب الأزلي ليست فيه أي من الصفتين. فتفسير كل ما كان يمكن ألا يكون ينتهي إلى الذي لا يمكن ألا يكون.',
      },
      limits: {
        en: 'Critics reply that the restriction is introduced to protect the conclusion. Whether it is a fair restriction depends on whether the reasons for the premises are good.',
        ar: 'يردّ الناقدون بأن القيد أُدخل لحماية النتيجة. وكونه قيدًا عادلًا يتوقف على جودة أسباب المقدمات.',
      },
      evidence: ['e-swinburne', 'e-swinburne-full'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'The Son is not created: the Church confesses him begotten of the Father before all ages, and this eternal begetting is not an act of creation.',
        ar: 'الابن غير مخلوق: تعترف الكنيسة بأنه مولود من الآب قبل كل الدهور، وهذه الولادة الأزلية ليست فعل خلق.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'It is the teaching of the Nicene Creed, defended by St Athanasius against those who said the Son was a creature. The Word is the one through whom all things were made, so He stands on the side of the Maker.',
        ar: 'هو تعليم قانون الإيمان النيقاوي الذي دافع عنه القديس أثناسيوس ضد من قالوا إن الابن مخلوق. فالكلمة هو الذي به كان كل شيء، فهو في جانب الصانع.',
      },
      limits: {
        en: 'It is a doctrine of the Church, not a conclusion of the philosophical arguments, and non-Trinitarians do not accept it.',
        ar: 'هو عقيدة للكنيسة وليس نتيجة للحجج الفلسفية، ولا يقبلها من لا يؤمنون بالثالوث.',
      },
      evidence: ['e-john', 'e-creed', 'e-athanasius'],
    },
  ],

  evidence: [
    {
      id: 'e-psalm90',
      sourceId: 'S62',
      locator: 'Psalm 90:2',
      role: 'context',
      states: {
        en: 'The psalm says that before the mountains were born, from everlasting to everlasting, God is God.',
        ar: 'يقول المزمور إنه قبل أن تولد الجبال، من الأزل إلى الأبد، أنت الله.',
      },
      inference: {
        en: 'Read as an ancient text, it presents God as without beginning. It is a declaration and not an argument.',
        ar: 'عند قراءته كنص قديم يقدّم الله بلا بداية. وهو إعلان وليس حجة.',
      },
      bible: { book: 'psalms', chapter: 90, verse: '2' },
    },
    {
      id: 'e-isaiah',
      sourceId: 'S62',
      locator: 'Isaiah 44:6',
      role: 'context',
      states: {
        en: 'In Isaiah, the Lord says that he is the first and the last and that there is no god besides him.',
        ar: 'في إشعياء يقول الرب إنه الأول والآخر وإنه لا إله غيره.',
      },
      inference: {
        en: 'It shows Israel’s Scripture describing God as having no predecessor and no rival, which is what the tradition means by uncreated.',
        ar: 'يبيّن كتاب إسرائيل يصف الله بلا سابق ولا منافس، وهذا ما يعنيه التقليد بغير المخلوق.',
      },
      bible: { book: 'isaiah', chapter: 44, verse: '6' },
    },
    {
      id: 'e-revelation',
      sourceId: 'S62',
      locator: 'Revelation 1:8',
      role: 'context',
      states: {
        en: 'In Revelation, the Lord God says that he is the Alpha and the Omega, who is, who was and who is to come.',
        ar: 'في سفر الرؤيا يقول الرب الإله إنه الألف والياء، الكائن والذي كان والذي يأتي.',
      },
      inference: {
        en: 'The New Testament repeats the description of God as without beginning or end.',
        ar: 'يكرر العهد الجديد وصف الله بأنه بلا بداية ولا نهاية.',
      },
      bible: { book: 'revelation', chapter: 1, verse: '8' },
    },
    {
      id: 'e-john',
      sourceId: 'S62',
      locator: 'John 1:1-3',
      role: 'context',
      states: {
        en: 'The Gospel of John says that in the beginning was the Word, that the Word was with God and was God, and that all things came to be through him.',
        ar: 'يقول إنجيل يوحنا إنه في البدء كان الكلمة، وإن الكلمة كان عند الله وكان الله، وإن به كان كل شيء.',
      },
      inference: {
        en: 'The Word is placed before creation and as its agent, not as part of it. The Church reads this as the basis for confessing the Son uncreated.',
        ar: 'يوضع الكلمة قبل الخلق وفاعلًا له لا جزءًا منه. وتقرأ الكنيسة هذا أساسًا لإعلان أن الابن غير مخلوق.',
      },
      bible: { book: 'john', chapter: 1, verse: '1-3' },
    },
    {
      id: 'e-creed',
      sourceId: 'S55',
      locator: 'whole work (Pope Shenouda III on the Creed; section not cited)',
      role: 'context',
      states: {
        en: 'This book by the late Coptic Orthodox Pope explains the Creed that the Church confesses, which says of the Son that he is begotten, not made.',
        ar: 'يشرح هذا الكتاب للبابا القبطي الأرثوذكسي الراحل قانون الإيمان الذي تعترف به الكنيسة، وفيه عن الابن أنه مولود غير مخلوق.',
      },
      inference: {
        en: 'It is a Coptic Orthodox teaching source for the Church’s own statement. It is used to say what the Church teaches, not as independent evidence.',
        ar: 'هو مصدر تعليمي قبطي أرثوذكسي لعبارة الكنيسة نفسها. ويُستعمل لبيان ما تعلّمه الكنيسة لا دليلًا مستقلًا.',
      },
    },
    {
      id: 'e-athanasius',
      sourceId: 'S52',
      locator: 'ch. 1–3 (creation through the Word, and from nothing)',
      role: 'supports',
      states: {
        en: 'At the start of On the Incarnation Athanasius describes the Word as the one through whom the Father made all things from nothing, which sets the Word on the side of the maker.',
        ar: 'في مطلع «تجسد الكلمة» يصف أثناسيوس الكلمة بأنه الذي به صنع الآب كل شيء من العدم، فيضع الكلمة في جانب الصانع.',
      },
      inference: {
        en: 'It is evidence that the Alexandrian tradition distinguished the maker from what is made, and placed the Word with the maker.',
        ar: 'هو شاهد على أن التقليد الإسكندري ميّز بين الصانع والمصنوع، ووضع الكلمة مع الصانع.',
      },
    },
    {
      id: 'e-swinburne',
      sourceId: 'S38',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'Swinburne’s shorter book argues for God as the ultimate explanation of the universe, in a form meant for a general reader.',
        ar: 'يحتجّ كتاب سوينبرن الأقصر لله بوصفه التفسير الأخير للكون، بصيغة موجّهة إلى القارئ العام.',
      },
      inference: {
        en: 'It shows how a Christian philosopher presents God as the point where explanation ends, as against the universe as a brute fact. It is one position. Only the publisher page was consulted, so no chapter is cited.',
        ar: 'يبيّن كيف يعرض فيلسوف مسيحي الله نقطة انتهاء التفسير، في مقابل الكون واقعة خامًا. وهو موقف واحد. واقتصر الاطلاع على صفحة الناشر فلا يُذكر فصل.',
      },
    },
    {
      id: 'e-swinburne-full',
      sourceId: 'S39',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'Swinburne’s longer book argues for God’s existence by a cumulative case, in which God’s simplicity as an explanation is a recurring consideration.',
        ar: 'يحتجّ كتاب سوينبرن الأطول لوجود الله بحجة تراكمية، تتكرر فيها بساطة الله تفسيرًا اعتبارًا مهمًا.',
      },
      inference: {
        en: 'It is the fuller statement of the same position as S38 and not an independent confirmation. Only the publisher page was consulted.',
        ar: 'هو العرض الأوسع للموقف نفسه في S38 وليس تأكيدًا مستقلًا. واقتصر الاطلاع على صفحة الناشر.',
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
        en: 'This is special pleading. The argument says everything needs a cause, then makes an exception for God. If one thing can exist without a cause, the universe can too.',
        ar: 'هذا تحكّم. تقول الحجة إن كل شيء يحتاج إلى علة ثم تستثني الله. فإذا أمكن أن يوجد شيء بلا علة، أمكن للكون ذلك.',
      },
      response: {
        en: [
          'The argument never says that everything needs a cause. It says that what begins to exist, or what is contingent, needs one, and the reason lies in those very properties. God is not exempted from a rule; He simply lacks the features the rule is about.',
          'Nor can the universe take God’s place. It is made of changing, dependent parts, and it bears every mark of something that might not have been. What needs no cause must be eternal, unchanging and dependent on nothing, and that is what Christians mean by God.',
        ],
        ar: [
          'لا تقول الحجة قط إن كل شيء يحتاج إلى علة. بل تقول إن ما يبدأ وجوده أو ما هو ممكن يحتاج إليها، والسبب كامن في هاتين الصفتين بالذات. فالله لا يُستثنى من قاعدة، بل ليست فيه الصفات التي تتكلم عنها القاعدة.',
          'ولا يستطيع الكون أن يأخذ مكان الله. فهو مركّب من أجزاء متغيرة معتمدة، وفيه كل علامات ما كان يمكن ألا يكون. أما ما لا يحتاج إلى علة فلا بد أن يكون أزليًا ثابتًا غير معتمد على شيء، وهذا ما يعنيه المسيحيون بالله.',
        ],
      },
      limits: {
        en: 'The reply shows that the argument is not self-contradictory. It does not show that its premises about beginning or contingency are true.',
        ar: 'يبيّن الرد أن الحجة ليست متناقضة مع نفسها. ولا يبيّن أن مقدماتها عن البداية أو الإمكان صحيحة.',
      },
      evidence: ['e-swinburne', 'e-swinburne-full'],
    },
    {
      id: 'o2',
      statement: {
        en: 'A mind able to design a universe would be extraordinarily complex, and complex things are the kind that need explaining. So a designer explains nothing: it raises the question of its own origin.',
        ar: 'العقل القادر على تصميم كون لا بد أن يكون بالغ التعقيد، والأشياء المعقدة من النوع الذي يحتاج إلى تفسير. فالمصمِّم لا يفسّر شيئًا: بل يثير سؤال أصله هو.',
      },
      response: {
        en: [
          'The Christian tradition describes God as not composed of parts and as having no physical structure. A mind is not complex in the way a machine is, and explanation by an agent’s intention is among the simplest we have. The explanation of the universe is then not a more complex object but a single will.',
          'Knowing much is not the same as being made of many pieces. Complexity that needs explaining is the complexity of parts arranged together, and God has no parts to arrange. So the designer does not raise the question of His own origin; He is where explanation rightly comes to rest.',
        ],
        ar: [
          'يصف التقليد المسيحي الله بأنه غير مركّب من أجزاء ولا بنية مادية له. والعقل ليس معقدًا كما تكون الآلة، والتفسير بنيّة فاعل من أبسط ما نملك. فيكون تفسير الكون ليس شيئًا أعقد منه بل إرادة واحدة.',
          'وكثرة المعرفة ليست كثرة الأجزاء. فالتعقيد الذي يحتاج إلى تفسير هو تعقيد أجزاء مرتّبة معًا، والله لا أجزاء له تُرتَّب. فالمصمِّم لا يثير سؤال أصله، بل عنده يستقر التفسير استقرارًا صحيحًا.',
        ],
      },
      limits: {
        en: 'It is a disagreement about the kind of simplicity that counts in explanations. It is not resolved by the physical sciences.',
        ar: 'هو خلاف في نوع البساطة التي تُحسب في التفسيرات. ولا تحسمه العلوم الفيزيائية.',
      },
      evidence: ['e-swinburne-full'],
    },
    {
      id: 'o3',
      statement: {
        en: 'If the Son is begotten of the Father, and the Holy Spirit proceeds from him, then God has an origin after all, and the Christian God is not uncaused.',
        ar: 'إن كان الابن مولودًا من الآب، وكان الروح القدس منبثقًا منه، فلله أصل إذن، والإله المسيحي ليس بلا علة.',
      },
      response: {
        en: [
          'The Church distinguishes between being begotten or proceeding within the one God and being created. The Father is the source within the Trinity, but the Son and the Spirit share the one divine nature and are eternal; they do not begin to exist. The Council of Nicaea set this against those who held that there was a time when the Son was not.',
          'To be begotten eternally is not to begin. The Father was never without His Word, as the sun is never without its radiance. God has a source within Himself, the Father, but no cause outside Himself and no beginning. The Church confesses this mystery with reverence.',
        ],
        ar: [
          'تميّز الكنيسة بين الولادة أو الانبثاق داخل الإله الواحد وبين الخلق. فالآب هو المصدر داخل الثالوث، لكن الابن والروح القدس يشتركان في الطبيعة الإلهية الواحدة وهما أزليان، ولا يبدآن وجودهما. وقد وقف مجمع نيقية ضد من قالوا إنه كان وقت لم يكن فيه الابن.',
          'فالولادة الأزلية ليست بداية. لم يكن الآب قط بلا كلمته، كما لا تكون الشمس قط بلا شعاعها. فلله مصدر في ذاته، هو الآب، لكن لا علة له من خارجه ولا بداية. والكنيسة تعترف بهذا السر بخشوع.',
        ],
      },
      limits: {
        en: 'It states what the Church teaches. It does not show that the teaching is coherent to those who do not accept it.',
        ar: 'يبيّن ما تعلّمه الكنيسة. ولا يبيّن أن التعليم متسق عند من لا يقبلونه.',
      },
      evidence: ['e-creed', 'e-athanasius'],
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'The objection is old in the sense that the early Church had to say clearly what was meant by an uncreated God, over against those who held that the Son was a creature or that matter was eternal. The Council of Nicaea in AD 325 is the best-known moment. The answer the Church gave then is the answer she gives now: God alone is uncreated, and all else was made by Him.',
      ],
      ar: [
        'الاعتراض قديم بمعنى أن الكنيسة الأولى اضطرت إلى بيان ما يعنيه إله غير مخلوق بوضوح، في مواجهة من قالوا إن الابن مخلوق أو إن المادة أزلية. ومجمع نيقية سنة ٣٢٥ م أشهر لحظة في ذلك. والجواب الذي أعطته الكنيسة يومئذ هو جوابها اليوم: الله وحده غير مخلوق، وكل ما سواه صُنع به.',
      ],
    },
    theological: {
      en: [
        'The Church confesses God as the one who is, without cause and without need, and who made the world by a free act of love. The answer to “who created God?” in her teaching is therefore simply that God is not a creature. The question belongs to the world of things that are made, and God is not one of them.',
      ],
      ar: [
        'تعترف الكنيسة بالله الكائن بلا علة وبلا حاجة، الذي صنع العالم بفعل حر من المحبة. فالجواب عن «من خلق الله؟» في تعليمها أن الله ليس مخلوقًا. فالسؤال ينتمي إلى عالم الأشياء المصنوعة، والله ليس واحدًا منها.',
      ],
    },
  },
  coptic: {
    en: [
      'The Coptic Orthodox Church confesses the Father as unbegotten source, the Son as begotten of the Father before all ages, and the Holy Spirit as proceeding from the Father, one God in three persons. The Church’s prayers speak of God as without beginning and without end, and they pray to the Son as of one essence with the Father. This is the teaching Athanasius of Alexandria defended at Nicaea and afterwards.',
    ],
    ar: [
      'تعترف الكنيسة القبطية الأرثوذكسية بالآب مصدرًا غير مولود، وبالابن مولودًا من الآب قبل كل الدهور، وبالروح القدس المنبثق من الآب، إلهًا واحدًا في ثلاثة أقانيم. وتتحدث صلوات الكنيسة عن الله بلا بداية ولا نهاية، وتصلي إلى الابن مساوٍ للآب في الجوهر. وهذا هو التعليم الذي دافع عنه أثناسيوس الإسكندري في نيقية وبعدها.',
    ],
  },
  disputed: {
    en: [
      'Disputed: whether exempting God from the need for a cause is justified; whether the universe could be the uncaused thing; whether a mind can be simple or non-composite; whether “necessary being” is a coherent notion. Philosophers who have studied these questions closely disagree.',
    ],
    ar: [
      'مواضع الخلاف: هل استثناء الله من الحاجة إلى علة له ما يبرره، وهل يمكن أن يكون الكون هو غير المعلول، وهل يمكن أن يكون العقل بسيطًا غير مركّب، وهل «الكائن الواجب» مفهوم متسق. ويختلف الفلاسفة الذين درسوا هذه الأسئلة عن قرب.',
    ],
  },
  conclusion: {
    en: 'No one created God. Christians have never said that God was made, and the arguments for a first cause have never said that everything needs a cause, so the question rests on a misreading of both. Whatever begins or depends needs a cause; God neither begins nor depends. He is the uncreated Maker of heaven and earth, and the Son, begotten of the Father before all ages, is with Him from eternity. It is a good question, and it has a clear answer.',
    ar: 'لم يخلق أحدٌ الله. فالمسيحيون لم يقولوا قط إن الله مصنوع، والحجج على العلة الأولى لم تقل قط إن كل شيء يحتاج إلى علة، فيقوم السؤال على سوء قراءة لكليهما. كل ما يبدأ أو يعتمد يحتاج إلى علة، والله لا يبدأ ولا يعتمد. هو الصانع غير المخلوق، خالق السماء والأرض، والابن المولود من الآب قبل كل الدهور معه منذ الأزل. إنه سؤال جيد، وله جواب واضح.',
  },
  furtherReading: ['S38', 'S39', 'S52', 'S55'],
  related: [
    'what-do-we-mean-by-god',
    'universe-needs-explanation',
    'can-the-universe-be-eternal',
    'what-trinity-affirms',
    'what-cosmological-arguments-establish',
  ],
};
