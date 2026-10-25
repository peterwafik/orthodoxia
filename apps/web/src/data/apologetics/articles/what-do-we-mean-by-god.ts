import type { Article } from '../types.ts';

export const article: Article = {
  id: 'what-do-we-mean-by-god',
  questionId: 'what-do-we-mean-by-god',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article explains what the word “God” means in the Christian tradition and in the philosophical tradition that overlaps with it, so that later questions about God’s existence are about something definite. It compares this meaning with other uses of the word. It does not argue that God exists.',
    ar: 'تشرح هذه المقالة ما تعنيه كلمة «الله» في التقليد المسيحي وفي التقليد الفلسفي الذي يتقاطع معه، حتى تكون الأسئلة اللاحقة عن وجود الله أسئلة عن شيء محدد. وتقارن هذا المعنى بالاستعمالات الأخرى للكلمة. وهي لا تحاول البرهنة على وجود الله.',
  },
  shortAnswer: {
    en: 'In the Christian tradition “God” does not mean a very powerful being inside the universe, nor the universe itself, nor a vague force. It means the one uncreated source of everything else: eternal, not made of parts, all-powerful, all-knowing and entirely good, who is personal and who made the world freely. The Church adds that this one God is Father, Son and Holy Spirit. Many people who say they do not believe in God are rejecting a different, smaller idea, so it helps to agree first on what is being asked.',
    ar: 'في التقليد المسيحي لا تعني كلمة «الله» كائنًا شديد القوة داخل الكون، ولا الكون نفسه، ولا قوة غامضة. بل تعني المصدر الواحد غير المخلوق لكل ما سواه: الأزلي، غير المركّب من أجزاء، القادر على كل شيء، العالم بكل شيء، الصالح كل الصلاح، الذي هو شخصي، والذي خلق العالم بحرية. وتضيف الكنيسة أن هذا الإله الواحد هو الآب والابن والروح القدس. وكثيرون ممن يقولون إنهم لا يؤمنون بالله يرفضون في الحقيقة فكرة أخرى أصغر، ولذلك يفيد أن نتفق أولًا على ما نسأل عنه.',
  },
  quickPoints: {
    en: [
      'God is described as the creator of everything that is not God, and so not a part of the universe that could be found by looking harder.',
      'God is described as eternal and uncreated, which is why “who made God?” is a different question from “who made the universe?” (a separate article treats it).',
      'God is described as personal: one who knows, wills and loves, not an impersonal force or a principle.',
      'The Church confesses one God in three persons, the Trinity. That is a doctrine received from revelation, not a conclusion of the philosophical arguments.',
      'Judaism and Islam also confess one creator, but they do not confess the Trinity or the incarnation. Pantheists and deists mean something different again.',
      'God is not fully comprehended by the human mind. Speaking of God is real but never exhaustive.',
    ],
    ar: [
      'يُوصف الله بأنه خالق كل ما ليس هو الله، فهو ليس جزءًا من الكون يمكن العثور عليه بالتدقيق أكثر.',
      'ويُوصف بأنه أزلي غير مخلوق، ولذلك يختلف سؤال «من خلق الله؟» عن سؤال «من خلق الكون؟» (وله مقالة مستقلة).',
      'ويُوصف بأنه شخصي: يعلم ويريد ويحب، وليس قوة غير شخصية أو مجرد مبدأ.',
      'تعترف الكنيسة بإله واحد في ثلاثة أقانيم، هو الثالوث القدوس. وهذا تعليم مستلم بالإعلان الإلهي وليس نتيجة للحجج الفلسفية.',
      'اليهودية والإسلام يعترفان أيضًا بخالق واحد، لكنهما لا يعترفان بالثالوث ولا بالتجسد. وأصحاب وحدة الوجود والربوبيون يقصدون شيئًا آخر.',
      'الله لا يحيط به العقل البشري إحاطة كاملة. والكلام عنه حقيقي لكنه ليس شاملًا.',
    ],
  },
  argumentTypes: ['philosophical', 'theological'],
  assessment: {
    label: 'theological_interpretation',
    explanation: {
      en: 'This is a question of meaning, not of proof. The account of God given here is the Church’s teaching, read from Scripture and the Fathers, together with a philosophical vocabulary that Christians and others have used to state it. It is a category of reasoning, not a low-confidence label. Whether such a God exists is a different question, taken up elsewhere.',
      ar: 'هذا سؤال عن المعنى وليس عن البرهان. والصورة المعروضة هنا عن الله هي تعليم الكنيسة، مقروءًا من الكتاب المقدس ومن الآباء، مع مفردات فلسفية استعملها المسيحيون وغيرهم للتعبير عنه. والتصنيف يصف نوع الاستدلال ولا يعني ثقة ضعيفة. أما هل يوجد إله كهذا فسؤال آخر يُعالَج في موضع آخر.',
    },
  },
  whyExamine: {
    en: [
      'Arguments about God often fail before they start, because the two sides mean different things by the word. A person who rejects “an old man in the sky” or “a being who fills gaps in science” has not yet met the God the Church worships, who is not a thing among things.',
      'It also matters for believers. If God is only imagined as a large version of ourselves, then every difficulty (where is he? why can I not measure him?) seems to be a reason to doubt. If God is the source of all that exists, those questions change shape.',
    ],
    ar: [
      'كثيرًا ما تفشل النقاشات عن الله قبل أن تبدأ، لأن الطرفين يقصدان بالكلمة شيئين مختلفين. فمن يرفض «شيخًا في السماء» أو «كائنًا يسدّ ثغرات العلم» لم يلتقِ بعدُ بالله الذي تعبده الكنيسة، وهو ليس شيئًا بين الأشياء.',
      'وهذا مهم للمؤمنين أيضًا. فإن تُصوِّر الله نسخة أكبر منا، بدت كل صعوبة (أين هو؟ لماذا لا أستطيع قياسه؟) سببًا للشك. أما إن كان الله مصدر كل ما هو موجود فإن هذه الأسئلة تتغير صورتها.',
    ],
  },
  background: {
    en: [
      'The Bible does not begin with a proof but with a declaration: God made the heavens and the earth (Genesis 1:1). Read as an ancient document, Israel’s Scriptures present one God who is Lord of all, who has no rival, who names himself in a way that points to being itself (Exodus 3:14), and who is not shaped by human hands. The New Testament adds that God is spirit, that God is love, and that the Word through whom all things were made became flesh (John 1:1–3, 14).',
      'Christian thinkers in the first centuries, including the Alexandrian Fathers, used the vocabulary of Greek philosophy to guard this meaning: God is uncreated, without beginning, unchangeable in his goodness, and the maker of all things from nothing. St Athanasius, in his work on the incarnation, speaks of God as the maker of everything out of nothing through his Word, and not as a builder who finds material already to hand (S52).',
      'Philosophers who defend theism today use a similar definition. Richard Swinburne, a philosopher and Eastern Orthodox Christian, argues for the existence of a person without a body who is eternal, free, able to do anything, knowing everything, perfectly good and creator of all else (S38). His books are cited here only as whole works for their overall approach, because only the publisher pages have been consulted. Not every Christian thinker would put the matter in his terms, and the Church’s own language is more than a philosophical definition.',
      'Other uses of the word differ. Judaism and Islam also confess one creator and give no place to the Trinity. Pantheism identifies God with the universe or its totality. Deism holds that a creator made the world and then left it to run. Polytheistic religions speak of many divine beings, each limited. Because these differ, the question “does God exist?” cannot be answered until it is clear which meaning is intended.',
    ],
    ar: [
      'لا يبدأ الكتاب المقدس ببرهان بل بإعلان: خلق الله السماوات والأرض (تكوين ١: ١). وعند قراءة أسفار إسرائيل كوثائق قديمة نجدها تقدّم إلهًا واحدًا هو رب الكل، لا ندّ له، يسمّي نفسه باسم يشير إلى الكينونة ذاتها (خروج ٣: ١٤)، وليس من صنع الأيدي. ويضيف العهد الجديد أن الله روح، وأن الله محبة، وأن الكلمة الذي به كان كل شيء صار جسدًا (يوحنا ١: ١–٣، ١٤).',
      'واستعمل المفكرون المسيحيون في القرون الأولى، ومنهم آباء الإسكندرية، مفردات الفلسفة اليونانية لصون هذا المعنى: الله غير مخلوق، بلا بداية، لا يتغير في صلاحه، وخالق كل شيء من العدم. ويتحدث القديس أثناسيوس في كتابه عن التجسد عن الله بوصفه صانع كل شيء من العدم بكلمته، لا بناءً يجد المادة جاهزة بين يديه (S52).',
      'ويستعمل الفلاسفة المدافعون عن الإيمان بالله اليوم تعريفًا مشابهًا. فريتشارد سوينبرن، وهو فيلسوف ومسيحي أرثوذكسي شرقي، يحتجّ لوجود شخص بلا جسد، أزلي، حر، قادر على كل شيء، عالم بكل شيء، صالح كل الصلاح، وخالق كل ما سواه (S38). ولا تُذكر كتبه هنا إلا كأعمال كاملة ولمنهجها العام، لأن الاطلاع اقتصر على صفحات الناشر. وليس كل مفكر مسيحي يصوغ الأمر بعباراته، ولغة الكنيسة نفسها أوسع من تعريف فلسفي.',
      'وتختلف الاستعمالات الأخرى للكلمة. فاليهودية والإسلام يعترفان أيضًا بخالق واحد ولا يقبلان الثالوث. ووحدة الوجود تطابق بين الله والكون أو مجموعه. والربوبية ترى أن خالقًا صنع العالم ثم تركه يسير. والأديان المتعددة الآلهة تتحدث عن كائنات إلهية كثيرة محدودة. ولأن هذه المعاني مختلفة فلا يمكن الجواب عن سؤال «هل الله موجود؟» قبل أن يتضح أي معنى مقصود.',
    ],
  },
  glossary: ['theism', 'trinity', 'tradition', 'inspiration'],

  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'In the Christian tradition “God” means the one uncreated source of everything that is not God, who is eternal, all-powerful, all-knowing, entirely good and personal.',
        ar: 'في التقليد المسيحي تعني كلمة «الله» المصدر الواحد غير المخلوق لكل ما ليس هو الله، الأزلي القادر على كل شيء العالم بكل شيء الصالح كل الصلاح والشخصي.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'The meaning is drawn from Scripture read within the Church and from the Fathers, and philosophers who defend theism use a closely similar definition. This is a statement about what the word means in this tradition, not a claim that anything corresponds to it.',
        ar: 'المعنى مستمد من الكتاب المقدس مقروءًا داخل الكنيسة ومن الآباء، ويستعمل الفلاسفة المدافعون عن الإيمان بالله تعريفًا قريبًا جدًا منه. وهذا بيان لمعنى الكلمة في هذا التقليد، لا دعوى بأن شيئًا يقابله.',
      },
      limits: {
        en: 'Jews, Muslims and some Christian philosophers state the divine attributes differently, and the philosophical vocabulary is not itself part of Scripture.',
        ar: 'يصوغ اليهود والمسلمون وبعض الفلاسفة المسيحيين الصفات الإلهية بصور مختلفة، والمفردات الفلسفية ليست جزءًا من الكتاب المقدس نفسه.',
      },
      evidence: ['e-genesis', 'e-exodus', 'e-john-spirit', 'e-athanasius', 'e-swinburne'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'God is understood as the creator of the universe and not as an object inside it, so the absence of God from a telescope or a laboratory is not what the tradition would predict, and also not by itself an argument for or against.',
        ar: 'يُفهم الله على أنه خالق الكون لا شيء داخله، فغيابه عن المنظار أو المختبر ليس ما يتوقعه التقليد، وليس بذاته حجة له أو عليه.',
      },
      argumentType: 'philosophical',
      assessment: 'philosophical_argument',
      rationale: {
        en: 'If God made space, time and matter, then God is not one more thing located in them. The point concerns what kind of evidence is appropriate, which is treated in the article on what would count as evidence for or against God.',
        ar: 'إن كان الله قد خلق المكان والزمان والمادة فليس هو شيئًا آخر موجودًا فيها. والنقطة تتعلق بنوع الدليل المناسب، وتُعالَج في مقالة ما يُعدّ دليلًا مع وجود الله أو ضده.',
      },
      limits: {
        en: 'Critics say this definition makes the claim too hard to test. That worry is real and is answered in the related article, not here.',
        ar: 'يرى الناقدون أن هذا التعريف يجعل الدعوى عسيرة الاختبار. وهذا قلق حقيقي ويُعالَج في المقالة ذات الصلة لا هنا.',
      },
      evidence: ['e-genesis', 'e-acts'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'The Church confesses that the one God is Father, Son and Holy Spirit. This belongs to revelation as the Church receives it and is not a conclusion of the philosophical arguments for a creator.',
        ar: 'تعترف الكنيسة بأن الإله الواحد هو الآب والابن والروح القدس. وهذا من الإعلان كما تتسلمه الكنيسة، وليس نتيجة للحجج الفلسفية على وجود خالق.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'The Nicene Creed, which the Coptic Church confesses at every liturgy, states belief in one God and then in the Son and the Holy Spirit. Philosophers have proposed several models of how this can be coherent, and each has critics.',
        ar: 'يعلن قانون الإيمان النيقاوي، الذي تقرّ به الكنيسة القبطية في كل قداس، الإيمان بإله واحد ثم بالابن وبالروح القدس. وقد اقترح الفلاسفة نماذج عدة لتوضيح كيف يكون ذلك متسقًا، ولكل نموذج ناقدوه.',
      },
      limits: {
        en: 'A person can understand the meaning of the doctrine without accepting it, and the arguments for a creator do not by themselves lead to it.',
        ar: 'يمكن فهم معنى التعليم دون قبوله، والحجج على وجود خالق لا تقود إليه وحدها.',
      },
      evidence: ['e-john-word', 'e-creed'],
    },
  ],

  evidence: [
    {
      id: 'e-genesis',
      sourceId: 'S62',
      locator: 'Genesis 1:1',
      role: 'context',
      states: {
        en: 'The opening verse of the Bible declares that God made the heavens and the earth, with no mention of any prior material or rival power.',
        ar: 'تعلن الآية الأولى من الكتاب المقدس أن الله خلق السماوات والأرض، دون ذكر مادة سابقة أو قوة منافسة.',
      },
      inference: {
        en: 'Read as an ancient document, Israel’s Scripture opens by treating God as the maker of all, not as one power among others. How much the verse alone says about creation from nothing is discussed by interpreters; the later Christian reading is supported by other passages and by the Fathers.',
        ar: 'عند قراءته كوثيقة قديمة يفتتح كتاب إسرائيل بجعل الله صانع الكل لا قوة بين قوى. وما تقوله الآية وحدها عن الخلق من العدم يناقشه المفسرون؛ أما القراءة المسيحية اللاحقة فتسندها نصوص أخرى وكتابات الآباء.',
      },
      bible: { book: 'genesis', chapter: 1, verse: '1' },
    },
    {
      id: 'e-exodus',
      sourceId: 'S62',
      locator: 'Exodus 3:13-15',
      role: 'context',
      states: {
        en: 'When Moses asks for God’s name, God answers with a name that the tradition reads as a form of “I am”.',
        ar: 'حين يسأل موسى عن اسم الله يجيبه بالاسم الذي يقرأه التقليد بصيغة «أنا هو».',
      },
      inference: {
        en: 'The Church has long read the name as pointing to God’s self-existence, which is the root of the idea that God is not dependent on anything. Scholars debate the exact sense of the Hebrew; this reading is the traditional theological one.',
        ar: 'قرأت الكنيسة الاسم منذ القدم على أنه يشير إلى وجود الله بذاته، وهو أصل فكرة أن الله لا يعتمد على شيء. ويناقش الدارسون المعنى الدقيق للعبارة العبرية؛ وهذه القراءة هي القراءة اللاهوتية التقليدية.',
      },
      bible: { book: 'exodus', chapter: 3, verse: '13-15' },
    },
    {
      id: 'e-john-spirit',
      sourceId: 'S62',
      locator: 'John 4:24; 1 John 4:8',
      role: 'context',
      states: {
        en: 'In the Gospel of John, Jesus says that God is spirit and is to be worshipped in spirit and truth. The first letter of John says that God is love.',
        ar: 'في إنجيل يوحنا يقول السيد المسيح إن الله روح وينبغي أن يُسجد له بالروح والحق. وتقول رسالة يوحنا الأولى إن الله محبة.',
      },
      inference: {
        en: 'These texts show that the New Testament does not picture God as a body or a part of the world, and that it describes him by personal character, love, not only by power.',
        ar: 'تبيّن هذه النصوص أن العهد الجديد لا يصوّر الله جسدًا ولا جزءًا من العالم، وأنه يصفه بصفة شخصية هي المحبة، لا بالقدرة وحدها.',
      },
      bible: { book: 'john', chapter: 4, verse: '24' },
    },
    {
      id: 'e-john-word',
      sourceId: 'S62',
      locator: 'John 1:1-3, 14',
      role: 'context',
      states: {
        en: 'The prologue of John says that the Word was with God and was God, that all things came to be through him, and that the Word became flesh.',
        ar: 'يقول مدخل إنجيل يوحنا إن الكلمة كان عند الله وكان الله، وإن به كان كل شيء، وإن الكلمة صار جسدًا.',
      },
      inference: {
        en: 'This is among the texts from which the Church draws its confession of the Son as God and as creator. Read as an ancient document it shows what the first Christian communities were claiming; the Church receives it as inspired.',
        ar: 'هذا من النصوص التي تستمد منها الكنيسة اعترافها بالابن إلهًا وخالقًا. وهو، عند قراءته كوثيقة قديمة، يبيّن ما كانت الجماعات المسيحية الأولى تعلنه؛ والكنيسة تتسلمه كلمة موحى بها.',
      },
      bible: { book: 'john', chapter: 1, verse: '1-3' },
    },
    {
      id: 'e-acts',
      sourceId: 'S62',
      locator: 'Acts 17:24-28',
      role: 'context',
      states: {
        en: 'In Acts, St Paul the Apostle tells an Athenian audience that the God who made the world and everything in it does not live in temples made by hands and is not served as though in need of anything.',
        ar: 'في سفر الأعمال يقول القديس بولس الرسول لسامعيه في أثينا إن الله الذي صنع العالم وكل ما فيه لا يسكن في هياكل مصنوعة بالأيدي ولا يُخدم كأنه محتاج إلى شيء.',
      },
      inference: {
        en: 'It shows an early Christian way of speaking about God to non-Christians: as creator, not located in any building and not dependent on worship. It is St Luke the Evangelist’s report of the speech and is used here only for that picture of God.',
        ar: 'يُظهر طريقة مسيحية مبكرة في الحديث عن الله لغير المسيحيين: خالقًا، لا يحدّه مبنى، ولا يعتمد على العبادة. وهو رواية القديس لوقا الإنجيلي للخطاب، ويُستعمل هنا لهذه الصورة عن الله فقط.',
      },
      bible: { book: 'acts', chapter: 17, verse: '24-28' },
    },
    {
      id: 'e-athanasius',
      sourceId: 'S52',
      locator: 'ch. 1–3 (creation through the Word, and from nothing)',
      role: 'supports',
      states: {
        en: 'At the start of On the Incarnation, Athanasius explains that God made all things through his Word and brought them into being from nothing, and that the existing world did not come from pre-existing matter.',
        ar: 'في مطلع كتاب «تجسد الكلمة» يشرح أثناسيوس أن الله صنع كل شيء بكلمته وأوجده من العدم، وأن العالم القائم لم يأتِ من مادة سابقة.',
      },
      inference: {
        en: 'This shows how the Alexandrian tradition stated the meaning of “God” in the fourth century: the maker of all, on whom everything depends. The work is early evidence of the Church’s own definition, not of whether it is true.',
        ar: 'يبيّن هذا كيف صاغت مدرسة الإسكندرية معنى «الله» في القرن الرابع: صانع الكل الذي يعتمد عليه كل شيء. والكتاب شاهد مبكر على تعريف الكنيسة نفسها، لا على صحته.',
      },
    },
    {
      id: 'e-swinburne',
      sourceId: 'S38',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'context',
      states: {
        en: 'Swinburne’s book for a general reader argues for the existence of God, understood as a free, bodiless, eternal, all-knowing, all-powerful and perfectly good creator.',
        ar: 'يحتجّ كتاب سوينبرن للقارئ العام لوجود الله، مفهومًا خالقًا حرًا بلا جسد، أزليًا، عالمًا بكل شيء، قادرًا على كل شيء، وصالحًا كل الصلاح.',
      },
      inference: {
        en: 'It shows that a contemporary philosopher who is also an Orthodox Christian states the idea in terms close to the tradition’s. Only the publisher page was consulted, so no chapter or page is cited and his detailed reasoning is not reported.',
        ar: 'يبيّن أن فيلسوفًا معاصرًا هو أيضًا مسيحي أرثوذكسي يصوغ الفكرة بعبارات قريبة من عبارات التقليد. وقد اقتصر الاطلاع على صفحة الناشر، فلا يُذكر فصل أو صفحة ولا يُنقل استدلاله التفصيلي.',
      },
    },
    {
      id: 'e-creed',
      sourceId: 'S55',
      locator: 'whole work (Pope Shenouda III on the Creed; section not cited)',
      role: 'context',
      states: {
        en: 'This book by the late Coptic Orthodox Pope explains the Creed that the Church confesses, beginning with belief in one God.',
        ar: 'يشرح هذا الكتاب للبابا القبطي الأرثوذكسي الراحل قانون الإيمان الذي تعترف به الكنيسة، مبتدئًا بالإيمان بإله واحد.',
      },
      inference: {
        en: 'It is a modern Coptic Orthodox teaching source for how the Church itself states what it means by God. It teaches the faith from within and is not offered as independent evidence.',
        ar: 'وهو مصدر تعليمي قبطي أرثوذكسي حديث لكيفية بيان الكنيسة نفسها لما تعنيه بالله. وهو يعلّم الإيمان من داخله ولا يُقدَّم دليلًا مستقلًا.',
      },
    },
  ],

  objections: [
    {
      id: 'o1',
      statement: {
        en: 'The word “God” is so elastic that it can be made to mean almost anything. A definition that keeps God outside space, time and every test makes the claim empty: nothing could ever show it false.',
        ar: 'كلمة «الله» مرنة إلى حد أنها قد تعني أي شيء تقريبًا. والتعريف الذي يُبقي الله خارج المكان والزمان وكل اختبار يجعل الدعوى فارغة، إذ لا يمكن لشيء أن يبيّن بطلانها.',
      },
      response: {
        en: [
          'The definition above is not elastic: it excludes a finite creator, a world-soul, an impersonal force and a being who is the universe. It has content that could be challenged, for instance that the universe depends on something else, or that there is an objective goodness at the root of reality.',
          'It is true that a creator would not be tested like an object in the world. But the claim still has consequences for what exists and what is to be expected, and both sides argue from those consequences. That is the subject of the next questions.',
        ],
        ar: [
          'التعريف المذكور ليس مرنًا: فهو يستبعد خالقًا محدودًا، ونفسًا للعالم، وقوة غير شخصية، وكائنًا هو الكون نفسه. وله مضمون يمكن الاعتراض عليه، كالقول إن الكون يعتمد على شيء آخر، أو إن في أصل الواقع خيرًا موضوعيًا.',
          'ومن الصحيح أن الخالق لا يُختبر كما يُختبر شيء في العالم. غير أن الدعوى لها نتائج في ما هو موجود وفي ما يُتوقع، ويحتجّ الطرفان بهذه النتائج. وهذا موضوع الأسئلة التالية.',
        ],
      },
      limits: {
        en: 'This shows that the claim is not empty. It does not show that it is true, or that the available tests favour it.',
        ar: 'يبيّن هذا أن الدعوى ليست فارغة، ولا يبيّن أنها صحيحة أو أن الاختبارات المتاحة ترجّحها.',
      },
    },
    {
      id: 'o2',
      statement: {
        en: 'A personal being without a body, outside time, who knows everything and is all-powerful is incoherent. Persons act and change in time, and the attributes seem to conflict with each other.',
        ar: 'شخص بلا جسد، خارج الزمان، عالم بكل شيء وقادر على كل شيء، فكرة متناقضة. فالأشخاص يعملون ويتغيرون في الزمان، والصفات تبدو متعارضة.',
      },
      response: {
        en: [
          'Philosophers who defend theism reply that each attribute can be stated carefully (for example, that omnipotence means power to do whatever is logically possible and fits God’s nature), and that being a person does not require a body. On time, they differ: some hold that God is outside time, others that God is everlasting within it.',
          'Critics reply that some combinations still seem to clash, for example God’s freedom with his unchangeableness, or foreknowledge with human freedom. These remain live questions in the philosophy of religion.',
        ],
        ar: [
          'يردّ الفلاسفة المدافعون عن الإيمان بالله بأن كل صفة يمكن صياغتها بعناية (فالقدرة على كل شيء مثلًا تعني القدرة على كل ما هو ممكن منطقيًا ويلائم طبيعة الله)، وبأن الشخص لا يحتاج إلى جسد. وفي الزمان يختلفون: فبعضهم يقول إن الله خارج الزمان، وبعضهم إنه ممتد في الأزل داخله.',
          'ويردّ الناقدون بأن بعض التركيبات ما زالت تبدو متعارضة، كحرية الله مع عدم تغيّره، أو سابق علمه مع حرية الإنسان. وما زالت هذه أسئلة حية في فلسفة الدين.',
        ],
      },
      limits: {
        en: 'The replies show that the charge of incoherence has answers. They do not show that every difficulty is resolved.',
        ar: 'تبيّن الردود أن تهمة التناقض لها أجوبة، ولا تبيّن أن كل صعوبة قد حُلّت.',
      },
    },
    {
      id: 'o3',
      statement: {
        en: 'People in different religions mean different things by God, so there is no single idea to ask about. The Christian description is simply one cultural picture among many, projected by human beings.',
        ar: 'يقصد أتباع الأديان المختلفة بكلمة «الله» معاني مختلفة، فليس هناك فكرة واحدة يُسأل عنها. والوصف المسيحي صورة ثقافية من صور كثيرة، أسقطها البشر.',
      },
      response: {
        en: [
          'It is true that the descriptions differ, and the article above names some of the differences, including the Trinity. But Jews, Christians and Muslims agree on a large core (one creator, all-powerful, good, distinct from the world), and that core is what the arguments for and against a creator are about. The differences then raise a second question about which description is right.',
          'That a belief can be traced to human culture does not by itself show that it is false: every belief, including scientific ones, has a history. The question is whether the reasons for it are good.',
        ],
        ar: [
          'من الصحيح أن الأوصاف تختلف، وتذكر المقالة بعض الفروق ومنها الثالوث. لكن اليهود والمسيحيين والمسلمين يتفقون على نواة كبيرة (خالق واحد، قادر، صالح، متميز عن العالم)، وهذه النواة هي موضوع الحجج مع وجود الخالق وضده. وتثير الفروق بعد ذلك سؤالًا ثانيًا: أي وصف هو الصحيح؟',
          'ومجرد إمكان ردّ الاعتقاد إلى ثقافة بشرية لا يبيّن بطلانه، فلكل اعتقاد، ومنه العلمي، تاريخ. والسؤال هو: هل أسبابه جيدة؟',
        ],
      },
      limits: {
        en: 'This shows that the question has a stable subject. Which religion, if any, describes God correctly is a separate question treated under religious disagreement.',
        ar: 'يبيّن هذا أن للسؤال موضوعًا ثابتًا. أما أي دين، إن وُجد، يصف الله وصفًا صحيحًا فسؤال مستقل يُعالَج تحت موضوع اختلاف الأديان.',
      },
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'The question of meaning is not a historical one, but there is a historical point: the Church’s language about God was fixed over the first centuries in dialogue with Jewish Scripture and Greek philosophy, and the Alexandrian Fathers were part of that. St Athanasius, for example, wrote against those who made the Word a creature. The history shows where the definition came from. It does not by itself show that it is true.',
      ],
      ar: [
        'سؤال المعنى ليس سؤالًا تاريخيًا، لكن فيه نقطة تاريخية: فقد تثبّتت لغة الكنيسة عن الله خلال القرون الأولى في حوار مع الكتاب المقدس اليهودي والفلسفة اليونانية، وكان آباء الإسكندرية جزءًا من ذلك. فالقديس أثناسيوس مثلًا كتب ضد من جعلوا الكلمة مخلوقًا. والتاريخ يبيّن من أين جاء التعريف، ولا يبيّن بذاته أنه صحيح.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that God is not only the first cause of the world but the Father of our Lord Jesus Christ, who has made himself known. She also confesses that God cannot be fully comprehended: we speak truly of him, but what we say never exhausts him. For this reason Christian teaching joins affirmations (God is good, God is love) with the admission that God is beyond every human concept.',
        'This is theological interpretation. It is offered as the Church’s understanding and is not a premise that a reader needs to accept in order to follow the philosophical arguments in the neighbouring questions.',
      ],
      ar: [
        'تعترف الكنيسة بأن الله ليس مجرد علة أولى للعالم بل هو أبو ربنا يسوع المسيح الذي أعلن ذاته. وتعترف أيضًا بأن الله لا يُدرَك إدراكًا كاملًا: نتكلم عنه بحق، لكن كلامنا لا يستوعبه. ولذلك يجمع التعليم المسيحي بين الإثبات (الله صالح، الله محبة) والإقرار بأن الله فوق كل مفهوم بشري.',
        'وهذا تفسير لاهوتي، يُعرض بوصفه فهم الكنيسة، وليس مقدّمة يلزم القارئ قبولها لكي يتابع الحجج الفلسفية في الأسئلة المجاورة.',
      ],
    },
  },
  coptic: {
    en: [
      'In the Coptic Orthodox Church the meaning of God is first learned in worship rather than in definitions. At every liturgy the congregation confesses the Nicene Creed, beginning with belief in one God, the Father, almighty, maker of heaven and earth and of all things seen and unseen. The Church’s prayers also address God as the Holy Trinity, one in essence, and as the one who is incomprehensible and yet near.',
      'The Coptic tradition holds that the Son, the Word of God, became incarnate in one incarnate nature of God the Word. This is the Church’s teaching on the person of Christ and it does not change the meaning of “God” given above; it says that the God of the Creed has entered the world in Christ.',
    ],
    ar: [
      'في الكنيسة القبطية الأرثوذكسية يُتعلَّم معنى الله أولًا في العبادة قبل التعريفات. ففي كل قداس تعترف الجماعة بقانون الإيمان النيقاوي، مبتدئةً بالإيمان بإله واحد، الآب ضابط الكل، خالق السماء والأرض وكل ما يُرى وما لا يُرى. وتخاطب صلوات الكنيسة الله بوصفه الثالوث القدوس الواحد في الجوهر، وبوصفه الذي لا يُدرَك وهو قريب.',
      'وتعلّم الكنيسة القبطية أن الابن، كلمة الله، تجسّد في طبيعة واحدة متجسدة لله الكلمة. وهذا تعليم الكنيسة في شخص السيد المسيح، وهو لا يغيّر معنى «الله» المذكور أعلاه، بل يقول إن إله قانون الإيمان قد دخل العالم في المسيح.',
    ],
  },
  disputed: {
    en: [
      'Disputed among philosophers and theologians: how the divine attributes should be stated and reconciled; whether God is outside time or everlasting within it; how much of the Church’s language about God is literal and how much analogy; and whether the word has a single coherent meaning across religions. Christian traditions also differ among themselves in some formulations of the Trinity and the person of Christ, and the Coptic Church’s own statement of the latter is treated in other articles.',
      'What is not in dispute is that the meaning given here is the one the Church uses when it speaks of God, and that anyone who wants to accept or reject belief in God should first say which idea is meant.',
    ],
    ar: [
      'مواضع الخلاف بين الفلاسفة واللاهوتيين: كيف تُصاغ الصفات الإلهية وتُوفَّق، وهل الله خارج الزمان أم ممتد في الأزل داخله، وكم من لغة الكنيسة عن الله حرفي وكم منه تشبيه بالقياس، وهل للكلمة معنى واحد متسق عبر الأديان. كما تختلف التقاليد المسيحية في بعض صياغات الثالوث وشخص المسيح، وتعالَج صياغة الكنيسة القبطية للثانية في مقالات أخرى.',
      'وما لا خلاف عليه أن المعنى المعروض هنا هو ما تستعمله الكنيسة حين تتكلم عن الله، وأن من يريد قبول الإيمان بالله أو رفضه ينبغي أن يقول أولًا أي فكرة يقصد.',
    ],
  },
  conclusion: {
    en: 'By “God” the Christian tradition means the one uncreated, eternal, good and personal source of everything else, who is confessed as Father, Son and Holy Spirit. This is a definite claim, which can be examined and challenged, and which differs from many ideas of God that people reject. Whether it is true is the question the following articles take up.',
    ar: 'يعني التقليد المسيحي بكلمة «الله» المصدر الواحد غير المخلوق، الأزلي، الصالح، الشخصي لكل ما سواه، الذي يُعترف به آبًا وابنًا وروحًا قدسًا. وهذه دعوى محددة يمكن فحصها والاعتراض عليها، وهي تختلف عن أفكار كثيرة عن الله يرفضها الناس. وهل هي صحيحة؟ هذا ما تتناوله المقالات التالية.',
  },
  furtherReading: ['S38', 'S52', 'S55'],
  related: [
    'who-created-god',
    'evidence-for-or-against-god',
    'what-trinity-affirms',
    'why-something-rather-than-nothing',
    'comparing-religious-truth-claims',
  ],
};
