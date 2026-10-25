import type { Article } from '../types.ts';

export const article: Article = {
  id: 'worshipped-before-constantine',
  questionId: 'worshipped-before-constantine',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article asks whether Christians offered worship to Jesus before the reign of Constantine (who became sole emperor in the 320s and convened the Council of Nicaea in AD 325). It looks at an outside Roman report, at early Christian writers and at St Paul’s letters, explains what “worship” can mean, and sets two scholarly pictures side by side: very early devotion, and gradual development. It does not try to settle every question about early Christology.',
    ar: 'يسأل هذا المقال: هل قدّم المسيحيون عبادة ليسوع قبل عهد قسطنطين (الذي صار الإمبراطور الوحيد في عشرينيات القرن الرابع ودعا إلى مجمع نيقية سنة ٣٢٥م)؟ فينظر في تقرير روماني من خارج الجماعة، وفي كتّاب مسيحيين مبكرين، وفي رسائل القديس بولس، ويشرح ما قد تعنيه «العبادة»، ويضع صورتين علميتين جنبًا إلى جنب: التعبد المبكر جدًا، والتطور التدريجي. ولا يحاول حسم كل الأسئلة عن اللاهوت المسيحاني المبكر.',
  },
  shortAnswer: {
    en: 'Yes. The evidence is clear that Christians were giving Jesus devotion that included hymns, prayer and invocation long before Constantine: a Roman governor reported it around AD 110, and Christian writers of the second century describe it. St Paul’s letters, written in the AD 50s, already show Jesus being confessed as Lord and invoked, and some scholars think this devotion arose within the first years of the movement. The disputed questions are how far back it goes, and what the first Christians meant by it: some historians see divinity attributed to Jesus from the beginning, others see a gradual development. Nicaea did not invent the belief; it defined it in answer to Arius.',
    ar: 'نعم. الشواهد واضحة في أن المسيحيين كانوا يقدّمون ليسوع تعبدًا يشمل التسابيح والصلاة والاستدعاء قبل قسطنطين بزمن طويل: فقد سجّله حاكم روماني نحو سنة ١١٠م، ووصفه كتّاب مسيحيون في القرن الثاني. وتُظهر رسائل القديس بولس، المكتوبة في الخمسينيات، يسوع معترَفًا به ربًّا ومُستدعى. ويرى بعض الباحثين أن هذا التعبد نشأ خلال السنوات الأولى للحركة. والمسائل المختلف عليها هي: إلى أي حد يرجع، وماذا عنى به المسيحيون الأوائل؛ فبعض المؤرخين يرى أن اللاهوت نُسب إلى يسوع منذ البداية، ويرى آخرون تطورًا تدريجيًا. ونيقية لم تخترع هذا الإيمان؛ بل حدّدته جوابًا على آريوس.',
  },
  quickPoints: {
    en: [
      'Pliny the Younger, a Roman governor writing around AD 110, reports that Christians sang a hymn to Christ “as to a god”.',
      'Justin Martyr (c. AD 150–155) and Ignatius of Antioch (early second century) describe Christ as the object of Christian worship and honour.',
      'St Paul’s letters, usually dated to the AD 50s, confess Jesus as Lord, include early hymn-like passages and preserve an Aramaic prayer addressed to him.',
      'Larry Hurtado argues that devotion to Jesus appeared remarkably early; Bart Ehrman argues that belief in Jesus’ divinity developed in stages. Both are read as whole works here.',
      '“Worship” covers different acts, and whether devotion equals the claim that Jesus is God in the later sense is a separate question.',
      'The Council of Nicaea (AD 325) defined the Son’s divinity against the teaching of Arius; it did not begin the worship of Christ.',
    ],
    ar: [
      'يذكر بليني الأصغر، وهو حاكم روماني كتب نحو سنة ١١٠م، أن المسيحيين كانوا يرنمون ترنيمة للمسيح «كما لإله».',
      'يصف يوستينوس الشهيد (نحو ١٥٠–١٥٥م) وإغناطيوس الأنطاكي (أوائل القرن الثاني) المسيح موضوعًا لعبادة المسيحيين وإكرامهم.',
      'تعترف رسائل القديس بولس، التي يؤرَّخ لها عادة في الخمسينيات، بيسوع ربًّا، وفيها مقاطع شبيهة بالتسابيح المبكرة، وتحفظ صلاة آرامية موجهة إليه.',
      'يرى لاري هورتادو أن التعبد ليسوع ظهر مبكرًا على نحو لافت، ويرى بارت إيرمان أن الإيمان بلاهوت يسوع تطور على مراحل. ويُقرأ العملان هنا بوصفهما عملين كاملين.',
      'تشمل «العبادة» أفعالًا مختلفة، وهل يعادل التعبد القول بأن يسوع هو الله بالمعنى اللاحق مسألة مستقلة.',
      'حدّد مجمع نيقية (٣٢٥م) لاهوت الابن في مواجهة تعليم آريوس، ولم يبدأ عبادة المسيح.',
    ],
  },
  argumentTypes: ['historical', 'textual', 'theological'],
  assessment: {
    label: 'supported_disputed_details',
    explanation: {
      en: 'That Christians worshipped Jesus well before Constantine is supported by several independent kinds of source, and is not seriously doubted. The disputed details concern how early this began, what the earliest Christians understood by it, and how the later doctrine relates to it. The Church’s confession of Christ’s divinity is a theological affirmation and is kept separate.',
      ar: 'إن عبادة المسيحيين ليسوع قبل قسطنطين بزمن طويل أمر تسنده أنواع مستقلة من المصادر، ولا يُشكك فيه جديًا. أما التفاصيل المختلف عليها فتتعلق بمدى قِدم بدايتها، وما فهمه المسيحيون الأوائل منها، وصلة العقيدة اللاحقة بها. وإقرار الكنيسة بلاهوت المسيح تأكيد لاهوتي يُفصل عن ذلك.',
    },
  },

  whyExamine: {
    en: [
      'A popular claim says that Jesus was made God by the emperor Constantine, or by a vote at Nicaea. It is repeated often enough that many people meet it before they meet any of the evidence. It deserves a direct answer, with the sources in view.',
      'The honest answer has two layers. On the plain historical question (did Christians worship Jesus earlier than the fourth century?) the evidence is clear. On the deeper question of what the earliest Christians believed about his nature, there is a lively scholarly debate, and a fair presentation should show both sides.',
      'The question matters for Christians as well. The Church holds that the faith defined at Nicaea is the faith of the apostles. That is a theological claim; but it makes sense to ask what the earliest sources show about how Christ was approached in worship, and to see how far they point in that direction.',
    ],
    ar: [
      'يشيع القول إن الإمبراطور قسطنطين هو الذي جعل يسوع إلهًا، أو إن ذلك تم بتصويت في نيقية. وهو يتكرر حتى إن كثيرين يسمعونه قبل أن يطلعوا على أي شاهد. ويستحق جوابًا مباشرًا والمصادر أمامنا.',
      'والجواب الأمين ذو طبقتين. ففي السؤال التاريخي البسيط (هل عبد المسيحيون يسوع قبل القرن الرابع؟) الشواهد واضحة. وفي السؤال الأعمق عمّا آمن به المسيحيون الأوائل بشأن طبيعته نقاش علمي حي، وينبغي للعرض المنصف أن يُظهر الجانبين.',
      'والمسألة تهم المسيحيين أيضًا. فالكنيسة تؤمن بأن الإيمان الذي حُدد في نيقية هو إيمان الرسل. وهذه دعوى لاهوتية؛ لكن من المعقول أن نسأل ماذا تُظهر أقدم المصادر عن طريقة التوجه إلى المسيح في العبادة، وإلى أي مدى تشير في ذلك الاتجاه.',
    ],
  },
  background: {
    en: [
      'Christianity began among Jews, for whom worship belonged to the one God of Israel alone. That is why early devotion to Jesus is historically interesting: the first followers were people who knew the rule against worshipping anyone else.',
      'The word “worship” is used for several things: reverence shown to a king or a respected person, prayer and invocation, hymns, sacrifice and ritual meals, and the exclusive worship owed to God alone. Historians therefore usually ask which acts were directed to Jesus, instead of relying on the single word.',
      'Constantine, who became sole emperor in the 320s, supported the Church and called the bishops to Nicaea in AD 325 to deal with a dispute begun in Alexandria. The dispute was between Christians who already worshipped Christ. Arius taught that the Son was created, a view which his opponents, including Alexander of Alexandria and then Athanasius, rejected. The council affirmed that the Son is of one being with the Father. These facts are drawn from standard histories and are discussed in other articles on this site.',
      'Our sources for the period before Nicaea are of different kinds: an outside Roman letter, the writings of Christian authors, and the New Testament letters read as ancient documents. Each tells us something different, and none by itself settles the debate about what the first Christians meant.',
    ],
    ar: [
      'نشأت المسيحية بين اليهود، الذين كانت العبادة عندهم لإله إسرائيل الواحد وحده. ولذلك فالتعبد المبكر ليسوع ظاهرة مثيرة تاريخيًا: فالتلاميذ الأوائل كانوا يعرفون القاعدة التي تمنع عبادة أي آخر.',
      'وتُستعمل كلمة «العبادة» لأمور متعددة: التوقير الذي يُقدَّم لملك أو شخص مبجَّل، والصلاة والاستدعاء، والتسابيح، والذبيحة والولائم الطقسية، والعبادة الخاصة التي لا تُؤدَّى إلا لله وحده. لذلك يسأل المؤرخون عادة أي الأفعال وُجهت إلى يسوع، بدل الاعتماد على كلمة واحدة.',
      'وقسطنطين، الذي صار الإمبراطور الوحيد في عشرينيات القرن الرابع، دعم الكنيسة ودعا الأساقفة إلى نيقية سنة ٣٢٥م لمعالجة خلاف بدأ في الإسكندرية. وكان الخلاف بين مسيحيين يعبدون المسيح أصلًا. فقد علّم آريوس أن الابن مخلوق، ورفض ذلك معارضوه، ومنهم ألكسندروس السكندري ثم أثناسيوس. وأقرّ المجمع أن الابن واحد في الجوهر مع الآب. وهذه الوقائع مأخوذة من كتب التاريخ المعتمدة وتتناولها مقالات أخرى في هذا الموقع.',
      'ومصادرنا للفترة السابقة لنيقية من أنواع مختلفة: رسالة رومانية من الخارج، وكتابات مؤلفين مسيحيين، ورسائل العهد الجديد مقروءة بوصفها وثائق قديمة. وكل منها يخبرنا بشيء مختلف، ولا يحسم أي منها وحده النقاش حول مقصد المسيحيين الأوائل.',
    ],
  },
  glossary: ['christology', 'trinity', 'primary-source', 'independent-attestation', 'tradition', 'miaphysitism', 'theism'],

  claims: [
    {
      id: 'C1',
      proposition: {
        en: 'By about AD 110, Christians in Bithynia-Pontus were meeting to sing a hymn to Christ as to a god.',
        ar: 'كان المسيحيون في بيثينية وبنطس، نحو سنة ١١٠م، يجتمعون لترنيم ترنيمة للمسيح كما لإله.',
      },
      argumentType: 'historical',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'A non-Christian Roman governor describes the practice from what he learned in examining Christians, and Christian writers from the second century describe similar practice independently.',
        ar: 'يصف حاكم روماني غير مسيحي هذه الممارسة مما عرفه من استجواب المسيحيين، ويصف كتّاب مسيحيون من القرن الثاني ممارسة مشابهة على نحو مستقل.',
      },
      limits: {
        en: 'Pliny is an outsider writing from a few interrogations; his phrase tells us how it looked to a Roman, not how Christians themselves explained it.',
        ar: 'بليني دخيل يكتب بناءً على عدد قليل من الاستجوابات؛ وعبارته تخبرنا كيف بدا الأمر لروماني، لا كيف شرحه المسيحيون أنفسهم.',
      },
      evidence: ['E1', 'E2', 'E3', 'E4'],
    },
    {
      id: 'C2',
      proposition: {
        en: 'St Paul’s letters, in the AD 50s, already show Jesus confessed as Lord and invoked in prayer, and some of this language may be older than the letters.',
        ar: 'تُظهر رسائل القديس بولس، في الخمسينيات الميلادية، يسوع معترَفًا به ربًّا ومُستدعى في الصلاة، وقد يكون بعض هذه اللغة أقدم من الرسائل.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The passages are in the letters and are not disputed as St Paul’s. Scholars differ on whether Philippians 2:5–11 is a hymn St Paul adopted, and on what exactly the Aramaic phrase in 1 Corinthians 16:22 means.',
        ar: 'المقاطع واردة في الرسائل ولا يُختلف في نسبتها إلى القديس بولس. ويختلف الباحثون في هل فيلبي ٢: ٥–١١ ترنيمة تبناها القديس بولس، وفي المعنى الدقيق للعبارة الآرامية في ١ كورنثوس ١٦: ٢٢.',
      },
      limits: {
        en: 'The existence of earlier formulas is inferred from style and wording; St Paul does not tell us where they came from.',
        ar: 'وجود صيغ أقدم أمر مستنتج من الأسلوب والصياغة؛ ولا يقول لنا القديس بولس مصدرها.',
      },
      evidence: ['E5', 'E6', 'E7', 'E8'],
    },
    {
      id: 'C3',
      proposition: {
        en: 'Devotion to Jesus appeared very early, within the first years of the movement, and was already a distinctive feature of Christian worship.',
        ar: 'ظهر التعبد ليسوع مبكرًا جدًا، خلال السنوات الأولى للحركة، وكان منذ ذلك الوقت سمة مميزة للعبادة المسيحية.',
      },
      argumentType: 'historical',
      assessment: 'actively_debated',
      rationale: {
        en: 'This is the thesis of Larry Hurtado, and many scholars accept some form of it. Others, including Bart Ehrman, argue for a development in stages. The sources are too few and too brief for the earliest years to settle the question.',
        ar: 'هذه أطروحة لاري هورتادو، ويقبل كثير من الباحثين صورة ما منها. ويرى آخرون، منهم بارت إيرمان، تطورًا على مراحل. والمصادر أقل وأوجز من أن تحسم السؤال في السنوات الأولى.',
      },
      limits: {
        en: 'Both books are cited as whole works only. The site does not report their chapters or arguments in detail.',
        ar: 'يُستشهد بالكتابين بوصفهما عملين كاملين فقط. ولا ينقل الموقع فصولهما ولا حججهما بالتفصيل.',
      },
      evidence: ['E5', 'E6', 'E9', 'E10'],
    },
    {
      id: 'C4',
      proposition: {
        en: 'The Council of Nicaea (AD 325) did not begin the worship of Christ or the belief in his divinity; it defined the Son’s relation to the Father in response to a controversy about Arius’ teaching.',
        ar: 'لم يبدأ مجمع نيقية (٣٢٥م) عبادة المسيح ولا الإيمان بلاهوته؛ بل حدّد علاقة الابن بالآب جوابًا على جدل حول تعليم آريوس.',
      },
      argumentType: 'historical',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'Worship of Christ is attested well before 325 (C1, C2), and the dispute that led to Nicaea was about how to understand the Son, among people who already worshipped him. The fourth-century debates are discussed in the scholarly literature on Nicaea.',
        ar: 'عبادة المسيح مشهود لها قبل ٣٢٥م بزمن طويل (الدعويان 1 و2)، والخلاف الذي أدى إلى نيقية كان حول كيفية فهم الابن، بين من كانوا يعبدونه أصلًا. وتتناول الدراسات عن نيقية جدالات القرن الرابع.',
      },
      limits: {
        en: 'Whether the Nicene definition is a faithful statement of what the earliest Christians meant is a question on which historians and theologians disagree.',
        ar: 'وهل التحديد النيقاوي بيان أمين لمقصد المسيحيين الأوائل مسألة يختلف فيها المؤرخون واللاهوتيون.',
      },
      evidence: ['E3', 'E4'],
    },
    {
      id: 'C5',
      proposition: {
        en: 'Jesus Christ is true God, worshipped with the Father and the Holy Spirit.',
        ar: 'يسوع المسيح إله حق، يُسجد له مع الآب والروح القدس.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'This is the faith of the Church. The historical material can show that Christians gave Christ divine honour from very early; it does not by itself establish that he is God.',
        ar: 'هذا هو إيمان الكنيسة. تستطيع المادة التاريخية أن تُظهر أن المسيحيين أعطوا المسيح إكرامًا إلهيًا منذ وقت مبكر جدًا؛ لكنها لا تثبت وحدها أنه الله.',
      },
      limits: {
        en: 'People can accept the history of the devotion and reject the Church’s doctrine, or the reverse.',
        ar: 'يمكن لإنسان أن يقبل تاريخ التعبد ويرفض عقيدة الكنيسة، أو العكس.',
      },
      evidence: ['E1', 'E5'],
    },
  ],

  evidence: [
    {
      id: 'E1',
      sourceId: 'S05',
      locator: 'Pliny, Letters 10.96',
      role: 'supports',
      states: {
        en: 'Pliny the Younger, governor of Bithynia-Pontus, writes to the emperor Trajan about how he has been dealing with people accused of being Christians. He reports what some who gave up the faith told him: they used to meet on a fixed day before dawn, to sing in turn a hymn to Christ as to a god, and to bind themselves by an oath to avoid crimes. He also describes a test in which suspects were asked to curse Christ and make an offering to the emperor’s image, which genuine Christians, he was told, could not be made to do.',
        ar: 'يكتب بليني الأصغر، حاكم بيثينية وبنطس، إلى الإمبراطور تراجان عن طريقته في التعامل مع من اتُّهموا بأنهم مسيحيون. وينقل ما قاله له بعض من تركوا الإيمان: كانوا يجتمعون في يوم محدد قبل الفجر، ويرنمون بالتناوب ترنيمة للمسيح كما لإله، ويلزمون أنفسهم بقسم يمنعهم من الجرائم. ويصف أيضًا اختبارًا طُلب فيه من المشتبه بهم أن يلعنوا المسيح ويقدموا تقدمة لتمثال الإمبراطور، وهو ما قيل له إن المسيحيين الحقيقيين لا يُجبَرون عليه.',
      },
      inference: {
        en: 'The letter is usually dated to about AD 110–113 (the catalogue gives c. AD 110–113). It is an outsider’s report, secondhand from the testimony of former Christians, so “as to a god” is Pliny’s own description and not a Christian creed. It does show that in the province in the early second century, Christ was addressed in hymns and that cursing him was treated as a test of apostasy. It says nothing about what happened in the first generation.',
        ar: 'تؤرَّخ الرسالة عادة نحو ١١٠–١١٣م (ويذكر الفهرس نحو ١١٠–١١٣م). وهي تقرير من خارج الجماعة، منقول بالواسطة من شهادة مسيحيين سابقين، فعبارة «كما لإله» وصف من بليني نفسه وليست قانون إيمان مسيحيًا. لكنها تُظهر أنه في تلك الولاية في أوائل القرن الثاني كان المسيح يُخاطَب بالتسابيح وأن لعنه عُدّ اختبارًا للارتداد. ولا تقول شيئًا عمّا جرى في الجيل الأول.',
      },
    },
    {
      id: 'E2',
      sourceId: 'S06',
      locator: 'Peregrinus 11–13',
      role: 'context',
      states: {
        en: 'In his satire about Peregrinus, Lucian mocks the Christians and refers to the man they still worship, the one who was crucified in Palestine.',
        ar: 'في هجائه لبيريغرينوس يسخر لوقيانوس من المسيحيين ويشير إلى الرجل الذي ما زالوا يعبدونه، والذي صُلب في فلسطين.',
      },
      inference: {
        en: 'A second, unrelated outsider, writing some five decades after Pliny (c. AD 165–175), took it as a well-known fact that Christians worshipped the crucified man. It is satire, so its details cannot be pressed.',
        ar: 'يعدّ دخيل ثانٍ لا صلة له ببليني، كتب بعده بنحو خمسة عقود (نحو ١٦٥–١٧٥م)، أمرًا معروفًا أن المسيحيين يعبدون الرجل المصلوب. وهو هجاء، فلا تُضغط تفاصيله.',
      },
    },
    {
      id: 'E3',
      sourceId: 'S50',
      locator: 'First Apology 6; 13; 61',
      role: 'supports',
      states: {
        en: 'Justin Martyr, writing in Rome in his defence of Christians against the charge of atheism, says that Christians honour the Creator, and also the Son and the prophetic Spirit. He describes the Son as holding the second place, and he describes baptism as performed in the name of God the Father, of our Saviour Jesus Christ, and of the Holy Spirit.',
        ar: 'يقول يوستينوس الشهيد، في دفاعه من روما عن المسيحيين ضد تهمة الإلحاد، إن المسيحيين يكرمون الخالق، ويكرمون أيضًا الابن والروح النبوي. ويجعل للابن المرتبة الثانية، ويصف المعمودية بأنها تتم باسم الله الآب ومخلّصنا يسوع المسيح والروح القدس.',
      },
      inference: {
        en: 'This is a Christian writer’s own account of c. AD 150–155: Christ is honoured in worship alongside God, and baptism uses a threefold name. Justin’s language about the “second place” of the Son is discussed by scholars and does not match the later Nicene vocabulary; it is not evidence that Justin held the later doctrine, only that the Son was honoured in worship.',
        ar: 'هذا وصف كاتب مسيحي لنفسه في نحو ١٥٠–١٥٥م: المسيح يُكرَّم في العبادة مع الله، والمعمودية تتم باسم ثلاثي. ولغة يوستينوس عن «المرتبة الثانية» للابن يناقشها الباحثون ولا تطابق المفردات النيقاوية اللاحقة؛ فهي ليست دليلًا على أن يوستينوس كان يقول بالعقيدة اللاحقة، بل على أن الابن كان يُكرَّم في العبادة.',
      },
    },
    {
      id: 'E4',
      sourceId: 'S54',
      locator: 'Smyrnaeans 1',
      role: 'supports',
      states: {
        en: 'In the opening of his letter to the church at Smyrna, Ignatius of Antioch praises Jesus Christ, whom he calls God, for the wisdom given to them.',
        ar: 'في مطلع رسالته إلى كنيسة سميرنا يمجّد إغناطيوس الأنطاكي يسوع المسيح، الذي يسميه الله، على الحكمة التي أُعطيت لهم.',
      },
      inference: {
        en: 'The traditional date is the early second century, c. AD 107–110. The date is traditional and some scholars question it. If it stands, Ignatius calls Christ “God” in a prayerful way, and he does not stop to defend the phrase, which suggests that it was familiar to his readers. His words show devotion in the early second century, not a claim about the first generation.',
        ar: 'التاريخ التقليدي هو أوائل القرن الثاني، نحو ١٠٧–١١٠م، وهو تقليدي ويشكك فيه بعض الباحثين. فإن صح، فإغناطيوس يدعو المسيح «الله» بلهجة صلاة ولا يتوقف للدفاع عن العبارة، وهذا يوحي بأنها كانت مألوفة لقرائه. وكلماته تُظهر تعبدًا في أوائل القرن الثاني، لا دعوى عن الجيل الأول.',
      },
    },
    {
      id: 'E5',
      sourceId: 'S62',
      locator: 'Philippians 2:5–11',
      role: 'supports',
      states: {
        en: 'St Paul describes Christ Jesus, who was in the form of God, as taking the form of a servant, humbling himself to death on a cross, and being exalted by God so that every knee should bow to him and every tongue confess that Jesus Christ is Lord.',
        ar: 'يصف القديس بولس المسيح يسوع، الذي كان في صورة الله، بأنه أخذ صورة عبد، ووضع نفسه حتى الموت موت الصليب، ورفعه الله حتى تجثو له كل ركبة ويعترف كل لسان أن يسوع المسيح رب.',
      },
      inference: {
        en: 'Many scholars read the passage as a hymn St Paul quotes or adapts, which would take its wording back before the letter (c. AD 50s–early 60s), though this is an inference from the style. There is disagreement about whether the “form of God” describes a pre-existent state that Jesus left, as the Church has read it, or an exalted status given to him. Either way, the passage shows a Christian community in which Jesus received an honour modelled on texts that speak of the one God.',
        ar: 'يقرأ كثير من الباحثين الفقرة ترنيمة اقتبسها القديس بولس أو طوّعها، مما يرجع بصياغتها إلى ما قبل الرسالة (نحو الخمسينيات إلى أوائل الستينيات)، لكن هذا استنتاج من الأسلوب. وثمة خلاف هل تصف «صورة الله» حالة سابقة الوجود تخلّى عنها يسوع، كما قرأتها الكنيسة، أم مكانة رفيعة مُنحت له. وفي الحالتين تُظهر الفقرة جماعة مسيحية نال فيها يسوع إكرامًا مبنيًا على نصوص تتكلم عن الإله الواحد.',
      },
      bible: { book: 'philippians', chapter: 2, verse: '5-11' },
    },
    {
      id: 'E6',
      sourceId: 'S62',
      locator: '1 Corinthians 16:22; 8:6',
      role: 'supports',
      states: {
        en: 'At the end of 1 Corinthians, St Paul leaves an Aramaic phrase untranslated in a Greek letter, which is usually understood as an appeal to the Lord, “Our Lord, come”. Earlier in the same letter, he says there is one God, the Father, from whom all things come, and one Lord, Jesus Christ, through whom all things exist.',
        ar: 'في ختام كورنثوس الأولى يترك القديس بولس عبارة آرامية دون ترجمة في رسالة يونانية، ويُفهم منها عادة نداء إلى الرب: «ربّنا تعال». وفي موضع سابق من الرسالة نفسها يقول إن لنا إلهًا واحدًا هو الآب الذي منه كل شيء، ورب واحدًا هو يسوع المسيح الذي به كل شيء.',
      },
      inference: {
        en: 'An Aramaic invocation surviving in a Greek-speaking church suggests a prayer formula from Aramaic-speaking circles, but the exact sense (“come” or “has come”) is debated. The second passage places Jesus within the confession of the one God, in language that echoes the Jewish declaration of God’s unity. Together they are an early indication of invocation and of a reshaped monotheism; how St Paul himself understood Jesus’ nature is a further question.',
        ar: 'بقاء ابتهال آرامي في كنيسة ناطقة باليونانية يوحي بصيغة صلاة من أوساط ناطقة بالآرامية، لكن المعنى الدقيق («تعال» أو «قد جاء») محل جدل. أما المقطع الثاني فيضع يسوع داخل الاعتراف بالإله الواحد، بلغة تردد الإقرار اليهودي بوحدانية الله. وهما معًا مؤشر مبكر على الاستدعاء وعلى توحيد أعيدت صياغته؛ وكيف فهم القديس بولس نفسه طبيعة يسوع مسألة أخرى.',
      },
      bible: { book: '1-corinthians', chapter: 16, verse: '22' },
    },
    {
      id: 'E7',
      sourceId: 'S62',
      locator: 'Romans 10:9–13',
      role: 'supports',
      states: {
        en: 'St Paul says that anyone who confesses Jesus as Lord and believes that God raised him will be saved, and that everyone who calls on the name of the Lord will be saved, which is a text from the prophet Joel.',
        ar: 'يقول القديس بولس إن من يعترف بيسوع ربًّا ويؤمن بأن الله أقامه يخلص، وإن كل من يدعو باسم الرب يخلص، وهو نص مأخوذ من النبي يوئيل.',
      },
      inference: {
        en: 'The “Lord” of the Joel passage is God in the Old Testament, while St Paul applies the verse to Jesus. This is a way of giving Jesus a role in salvation and in invocation that Jewish tradition reserved for God, and it suggests that it was already accepted in the churches St Paul addressed. Scholars who read the title “Lord” more weakly still need to explain St Paul’s use of the text.',
        ar: 'إن «الرب» في نص يوئيل هو الله في العهد القديم، وبولس يطبق الآية على يسوع. وهذه طريقة لإعطاء يسوع دورًا في الخلاص وفي الاستدعاء كان التقليد اليهودي يخصّ به الله، وتوحي بأنه كان مقبولًا في الكنائس التي خاطبها القديس بولس. والباحثون الذين يقرأون لقب «الرب» قراءة أضعف لا يزال عليهم أن يفسروا استعمال القديس بولس للنص.',
      },
      bible: { book: 'romans', chapter: 10, verse: '9-13' },
    },
    {
      id: 'E8',
      sourceId: 'S62',
      locator: '1 Corinthians 11:20–26',
      role: 'context',
      states: {
        en: 'St Paul speaks of the “Lord’s supper” and recalls the words of Jesus over the bread and the cup, which he says he received and passed on.',
        ar: 'يتحدث القديس بولس عن «عشاء الرب» ويستعيد كلمات يسوع على الخبز والكأس، ويقول إنه تسلّمها وسلّمها.',
      },
      inference: {
        en: 'A meal that carries the Lord’s name and that is repeated in his memory is a form of ritual devotion to Jesus in the AD 50s. By itself it does not show that Jesus is treated as God; it shows a place of honour in the common worship.',
        ar: 'وجبة تحمل اسم الرب وتتكرر لذكراه صورة من صور التعبد الطقسي ليسوع في الخمسينيات. وهي وحدها لا تُظهر أن يسوع عُدّ إلهًا؛ بل تُظهر موضع إكرام في العبادة المشتركة.',
      },
      bible: { book: '1-corinthians', chapter: 11, verse: '20-26' },
    },
    {
      id: 'E9',
      sourceId: 'S18',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'Larry Hurtado’s Lord Jesus Christ: Devotion to Jesus in Earliest Christianity is a large study of the religious practices and ideas of Christians before the end of the second century. The overall thesis is that devotion to Jesus alongside the God of Israel appeared surprisingly early, and did so within a Jewish setting.',
        ar: 'كتاب «الرب يسوع المسيح: التعبد ليسوع في المسيحية الأولى» للاري هورتادو دراسة كبيرة لممارسات المسيحيين وأفكارهم الدينية قبل نهاية القرن الثاني. وأطروحته العامة أن التعبد ليسوع إلى جانب إله إسرائيل ظهر مبكرًا على نحو مدهش، وفي بيئة يهودية.',
      },
      inference: {
        en: 'This is the main scholarly case for very early devotion. It is cited as a position to weigh; its details are not reported here, since the book has not been read for this site.',
        ar: 'هذه هي الحجة العلمية الرئيسية للتعبد المبكر جدًا. ويُستشهد بها موقفًا للموازنة؛ ولا تُنقل تفاصيلها هنا لأن الكتاب لم يُقرأ لأجل الموقع.',
      },
    },
    {
      id: 'E10',
      sourceId: 'S19',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'challenges',
      states: {
        en: 'Bart Ehrman’s How Jesus Became God offers a historical reconstruction of how belief in Jesus’ divinity developed. His overall thesis is that the earliest Christians first thought of Jesus as exalted to a divine status after the resurrection, and that later ideas of pre-existence and of equality with God came afterwards.',
        ar: 'يقدّم كتاب «كيف صار يسوع إلهًا» لبارت إيرمان إعادة بناء تاريخية لتطور الإيمان بلاهوت يسوع. وأطروحته العامة أن المسيحيين الأوائل رأوا في البداية أن يسوع رُفع إلى مقام إلهي بعد القيامة، وأن أفكار سبق الوجود والمساواة بالله جاءت بعد ذلك.',
      },
      inference: {
        en: 'This is a serious alternative to the picture in E9. Its author describes himself as an agnostic, and the thesis rests on his reading of the early texts, some of which (such as Philippians 2) others read differently. It is cited as a whole work and as a position to weigh.',
        ar: 'وهذا بديل جاد للصورة الواردة في E9. ويصف مؤلفه نفسه بأنه لا أدري، وتقوم الأطروحة على قراءته للنصوص المبكرة، وبعضها (مثل فيلبي ٢) يقرؤه غيره قراءة مختلفة. ويُستشهد به عملًا كاملًا وموقفًا للموازنة.',
      },
    },
  ],

  objections: [
    {
      id: 'O1',
      statement: {
        en: 'Devotion is not divinity. Jews of the time spoke of exalted figures such as angels, the Messiah or a chief agent of God who received great honour, so the early honours given to Jesus may mean a very high status without meaning that he is God.',
        ar: 'التعبد ليس لاهوتًا. فقد تحدث اليهود في ذلك الوقت عن شخصيات مرفوعة، كالملائكة أو المسيح أو وكيل أعلى لله، نالت إكرامًا عظيمًا، فقد تعني الإكرامات الأولى ليسوع مكانة رفيعة جدًا دون أن تعني أنه الله.',
      },
      response: {
        en: [
          'The objection points to a real question, and scholars who hold it are not dismissed by the evidence here. Hurtado’s answer, in outline, is that the pattern of devotion to Jesus (hymns, invocation, ritual meals, his name in baptism) goes beyond the honour given to any exalted figure in the Jewish sources, and the exclusive worship was a boundary Jews guarded.',
          'Those who press the objection reply that the Jewish evidence for exalted agents is varied, and that the earliest Christians may have drawn on it. The disagreement is about how to compare the patterns, and the sources we have do not state what the first believers meant in later terms.',
        ],
        ar: [
          'يشير الاعتراض إلى سؤال حقيقي، والباحثون الذين يأخذون به لا تردّهم الشواهد المعروضة هنا. وجواب هورتادو، في إجماله، أن نمط التعبد ليسوع (التسابيح والاستدعاء والولائم الطقسية وذكر اسمه في المعمودية) يتجاوز الإكرام الذي ناله أي شخص مرفوع في المصادر اليهودية، وأن العبادة الخاصة كانت حدًّا يحرسه اليهود.',
          'ويرد من يلحّون على الاعتراض بأن الشواهد اليهودية على الوكلاء المرفوعين متنوعة، وأن المسيحيين الأوائل ربما استفادوا منها. والخلاف في كيفية مقارنة الأنماط، والمصادر التي لدينا لا تذكر بالمصطلحات اللاحقة ماذا عنى المؤمنون الأوائل.',
        ],
      },
      limits: {
        en: 'It cannot be settled by counting texts; it depends on how one reads the earliest passages and compares them with Jewish practice.',
        ar: 'لا يُحسم بعدّ النصوص؛ بل يتوقف على كيفية قراءة أقدم المقاطع ومقارنتها بالممارسة اليهودية.',
      },
      evidence: ['E5', 'E6', 'E7', 'E9', 'E10'],
    },
    {
      id: 'O2',
      statement: {
        en: 'Constantine and the bishops at Nicaea decided that Jesus was God, by a vote, for political reasons; before that, Christians thought of him as a prophet or a great man.',
        ar: 'قرّر قسطنطين والأساقفة في نيقية أن يسوع هو الله، بالتصويت ولأسباب سياسية؛ وقبل ذلك كان المسيحيون يرونه نبيًا أو إنسانًا عظيمًا.',
      },
      response: {
        en: [
          'The evidence cited here does not fit the story. Pliny, Lucian, Justin and Ignatius, and St Paul before them, show Christ honoured in worship long before 325. The controversy at Nicaea began in Alexandria and was between people who all worshipped Christ; Arius did not reduce him to a prophet but taught that the Son was created before all ages.',
          'Constantine did call the council and the political situation shaped its setting, and that is worth saying openly. But a council that responds to a dispute about how to understand the Son is a different thing from a council that makes the Son divine. Whether the Nicene answer was right is a further question that the history does not answer.',
        ],
        ar: [
          'الشواهد المذكورة هنا لا تتفق مع هذه الرواية. فبليني ولوقيانوس ويوستينوس وإغناطيوس، وبولس قبلهم، يُظهرون المسيح مُكرَّمًا في العبادة قبل ٣٢٥م بزمن طويل. وقد بدأ الجدل في نيقية في الإسكندرية، وكان بين أناس يعبدون المسيح جميعًا؛ فآريوس لم يختزله إلى نبي، بل علّم أن الابن مخلوق قبل كل الدهور.',
          'ودعا قسطنطين فعلًا إلى المجمع، وشكّل الوضع السياسي إطاره، وهذا ينبغي قوله بصراحة. لكن مجمعًا يرد على خلاف حول فهم الابن غير مجمع يجعل الابن إلهًا. وهل كان الجواب النيقاوي صحيحًا سؤال آخر لا يجيب عنه التاريخ.',
        ],
      },
      limits: {
        en: 'Showing that worship preceded Nicaea does not show that the Nicene definition is true.',
        ar: 'إثبات أن العبادة سبقت نيقية لا يثبت صحة التحديد النيقاوي.',
      },
      evidence: ['E1', 'E2', 'E3', 'E4'],
    },
    {
      id: 'O3',
      statement: {
        en: 'Pliny’s phrase “as to a god” is only a Roman’s comparison. It may reflect his impression rather than what the Christians were doing or thinking.',
        ar: 'عبارة بليني «كما لإله» مجرد تشبيه من روماني. وقد تعكس انطباعه لا ما كان المسيحيون يفعلونه أو يفكرون فيه.',
      },
      response: {
        en: [
          'That is a fair caution, and this article says so. The letter is a secondhand report and the word is Pliny’s. But it is a report that the Christians sang to Christ, and a Roman official had no reason to invent the practice; his difficulty is how to treat it in law.',
          'It is also not the only witness. Christian writers describe the same sort of devotion from the inside, and St Paul’s letters show it a half-century earlier. The strength of the case is that several kinds of source agree on the practice.',
        ],
        ar: [
          'هذا تحفظ وجيه، وهذا المقال يقوله. فالرسالة تقرير بالواسطة، والكلمة من بليني. لكنه تقرير بأن المسيحيين كانوا يرنمون للمسيح، ولم يكن لموظف روماني سبب لاختلاق الممارسة؛ وصعوبته هي كيف يعاملها قانونيًا.',
          'وليس هو الشاهد الوحيد. فالكتّاب المسيحيون يصفون هذا التعبد من الداخل، وتُظهره رسائل القديس بولس قبله بنصف قرن. وقوة الحجة أن أنواعًا من المصادر تتفق على الممارسة.',
        ],
      },
      limits: {
        en: 'Agreement on the practice does not tell us what the participants understood Jesus’ nature to be.',
        ar: 'الاتفاق على الممارسة لا يخبرنا كيف فهم المشاركون طبيعة يسوع.',
      },
      evidence: ['E1', 'E3'],
    },
    {
      id: 'O4',
      statement: {
        en: 'The early hymns and creeds may be a later layer. They may have been written, or adapted, by communities that were already developing the idea, so they cannot show what the first generation believed.',
        ar: 'قد تكون التسابيح وصيغ الإيمان الأولى طبقة لاحقة. فربما كتبتها أو عدّلتها جماعات كانت قد بدأت تطوّر الفكرة، فلا تدل على ما آمن به الجيل الأول.',
      },
      response: {
        en: [
          'This is why the article treats the dating of the pre-Pauline material as an inference from style and wording and not as established. The letters themselves can be dated to the AD 50s, and what they contain shows what St Paul expected his readers to accept, without a long explanation.',
          'The hypothesis of a later layer is hard to test, because no earlier texts survive. Both sides, then, are reasoning from the same short evidence, and a careful reader should hold the early dating as likely to many scholars but open.',
        ],
        ar: [
          'ولهذا يعامل المقال تأريخ المادة السابقة لبولس استنتاجًا من الأسلوب والصياغة لا أمرًا ثابتًا. أما الرسائل نفسها فيمكن تأريخها في الخمسينيات، وما فيها يُظهر ما توقع القديس بولس أن يقبله قراؤه دون شرح طويل.',
          'وفرضية الطبقة اللاحقة يصعب اختبارها، لأنه لا تبقى نصوص أقدم. فكلا الطرفين يستدل من الشواهد القليلة نفسها، وعلى القارئ المتأنّي أن يعدّ التأريخ المبكر مرجّحًا عند كثير من الباحثين لكنه مفتوح.',
        ],
      },
      limits: {
        en: 'The question of how early the formulas are cannot be closed from the surviving texts.',
        ar: 'لا يمكن إغلاق مسألة قِدَم الصيغ من النصوص الباقية.',
      },
      evidence: ['E5', 'E6', 'E9', 'E10'],
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'Historically, a Christian can say that worship of Christ is one of the best attested features of early Christianity, that it is found in outside, Christian and New Testament sources, and that it appears in a movement that grew out of a Jewish worship of the one God. These facts are not in dispute and they answer the claim that Constantine made Jesus a god.',
        'A Christian can also say, with scholars such as Hurtado, that the devotion appears so early that the later doctrine looks more like an explanation of what Christians were already doing than a new invention. A critic such as Ehrman will say that the content of the early belief was different from the later doctrine. Both are reading the same evidence, and the reader is invited to hold the disagreement openly.',
      ],
      ar: [
        'يستطيع المسيحي تاريخيًا أن يقول إن عبادة المسيح من أكثر سمات المسيحية المبكرة توثيقًا، وإنها واردة في مصادر خارجية ومسيحية ومن العهد الجديد، وإنها ظهرت في حركة نبتت من عبادة يهودية للإله الواحد. وهذه وقائع لا خلاف عليها، وهي تجيب عن الدعوى بأن قسطنطين جعل يسوع إلهًا.',
        'ويستطيع أن يقول أيضًا، مع باحثين مثل هورتادو، إن التعبد يظهر مبكرًا حتى إن العقيدة اللاحقة تبدو شرحًا لما كان المسيحيون يفعلونه أصلًا أكثر منها اختراعًا جديدًا. وسيقول ناقد مثل إيرمان إن مضمون الإيمان الأول كان مختلفًا عن العقيدة اللاحقة. وكلاهما يقرأ الشواهد نفسها، والقارئ مدعو إلى أن يبقي الخلاف مفتوحًا.',
      ],
    },
    theological: {
      en: [
        'The Church confesses Jesus Christ as true God and true man, the only-begotten Son of God, of one being with the Father. It holds that the faith defined at Nicaea is the faith of the apostles, handed down in the Church, and that Nicaea expressed it in words in answer to those who denied it.',
        'On this view the worship of Christ is not a human development but a response to who he is. The historical question of how early believers expressed it is real, but the Church’s confession does not rest on its answer.',
      ],
      ar: [
        'تعترف الكنيسة بيسوع المسيح إلهًا حقًا وإنسانًا حقًا، ابن الله الوحيد، واحدًا في الجوهر مع الآب. وتؤمن بأن الإيمان الذي حُدد في نيقية هو إيمان الرسل، المسلَّم في الكنيسة، وأن نيقية عبّرت عنه بكلمات جوابًا على من أنكروه.',
        'وبحسب هذا الفهم فعبادة المسيح ليست تطورًا بشريًا بل استجابة لمن هو. والسؤال التاريخي عن كيف عبّر المؤمنون الأوائل عنها حقيقي، لكن اعتراف الكنيسة لا يقوم على جوابه.',
      ],
    },
  },
  coptic: {
    en: [
      'The Church of Alexandria stood at the centre of the controversy. Arius taught in Alexandria, and its bishop Alexander and then Athanasius, whom the Coptic Orthodox Church honours as the Apostolic and as its twentieth pope, defended the divinity of the Son. The Church therefore regards the Nicene faith as its own inheritance.',
      'In the Coptic liturgy the Creed of Nicaea is confessed at every Liturgy, and the prayers of the Church are offered to Christ together with the Father and the Holy Spirit. This continues the practice that the earliest sources, however briefly, already show.',
      'The Coptic Orthodox teaching of the one incarnate nature of the Word, the miaphysite Christology that follows St Cyril, is a later and separate subject, treated in other articles. This article is limited to the question of worship before Constantine.',
    ],
    ar: [
      'كانت كنيسة الإسكندرية في قلب الجدل. ففي الإسكندرية علّم آريوس، ودافع أسقفها ألكسندروس ثم أثناسيوس، الذي تكرمه الكنيسة القبطية الأرثوذكسية بلقب الرسولي وتعدّه بابا الإسكندرية العشرين، عن لاهوت الابن. ولذلك تعدّ الكنيسة الإيمان النيقاوي ميراثها.',
      'وفي الليتورجيا القبطية يُعترف بقانون إيمان نيقية في كل قداس، وتُرفع صلوات الكنيسة إلى المسيح مع الآب والروح القدس. وهذا استمرار لممارسة تُظهرها أقدم المصادر ولو باختصار.',
      'أما تعليم الكنيسة القبطية الأرثوذكسية عن الطبيعة الواحدة المتجسدة لله الكلمة، أي اللاهوت المسيحاني الذي يتبع القديس كيرلس، فموضوع لاحق ومستقل تتناوله مقالات أخرى. ويقتصر هذا المقال على سؤال العبادة قبل قسطنطين',
    ],
  },
  disputed: {
    en: [
      'Disputed among historians: how early devotion to Jesus began; whether pre-Pauline hymns and formulas can be reconstructed; whether Philippians 2:5–11 speaks of pre-existence or of exaltation; and whether early honours given to Jesus reflect a belief that he shares the identity of the one God, or a very high exalted status.',
      'Disputed between theologians: how closely the Nicene definition corresponds to the earliest Christians’ own terms, and what to make of pre-Nicene language such as Justin’s about the “second place”. The Church holds that it is a faithful development in expression of the same faith; others see a more significant change.',
      'Not disputed in this article: that Christians sang to Christ, invoked him and honoured him in worship well before Constantine, and that Nicaea took place in response to a controversy among people who already worshipped him.',
    ],
    ar: [
      'مختلف عليه بين المؤرخين: متى بدأ التعبد ليسوع؛ وهل يمكن إعادة بناء تسابيح وصيغ سابقة لبولس؛ وهل تتكلم فيلبي ٢: ٥–١١ عن سبق الوجود أم عن التمجيد؛ وهل تعكس الإكرامات الأولى ليسوع اعتقادًا بأنه يشارك هوية الإله الواحد أم مكانة رفيعة جدًا.',
      'مختلف عليه بين اللاهوتيين: إلى أي مدى يطابق التحديد النيقاوي مصطلحات المسيحيين الأوائل أنفسهم، وكيف نفهم لغة ما قبل نيقية مثل قول يوستينوس عن «المرتبة الثانية». وترى الكنيسة أنه نمو أمين في التعبير عن الإيمان نفسه، ويرى آخرون تغيرًا أكبر.',
      'غير مختلف عليه في هذا المقال: أن المسيحيين رنموا للمسيح واستدعوه وأكرموه في العبادة قبل قسطنطين بزمن طويل، وأن نيقية انعقدت جوابًا على خلاف بين أناس كانوا يعبدونه أصلًا.',
    ],
  },
  conclusion: {
    en: 'Jesus was worshipped by Christians long before Constantine; the evidence for the practice is early, varied and clear. What the earliest believers meant by that worship, and how it relates to the later doctrine of Nicaea, is a real scholarly debate, and the Church’s confession that Christ is God rests on its apostolic faith and not on the outcome of that debate.',
    ar: 'عبد المسيحيون يسوع قبل قسطنطين بزمن طويل؛ والشواهد على الممارسة مبكرة ومتنوعة وواضحة. أما ماذا عنى المؤمنون الأوائل بهذه العبادة، وكيف ترتبط بعقيدة نيقية اللاحقة، فنقاش علمي حقيقي، واعتراف الكنيسة بأن المسيح هو الله يقوم على إيمانها الرسولي لا على نتيجة هذا النقاش.',
  },
  furtherReading: ['S05', 'S18', 'S19', 'S50', 'S54', 'S62'],
  related: ['early-christology-development', 'what-happened-at-nicaea', 'what-trinity-affirms', 'miaphysite-christology', 'did-jesus-claim-divine-authority', 'did-nicaea-choose-the-bible'],
};
