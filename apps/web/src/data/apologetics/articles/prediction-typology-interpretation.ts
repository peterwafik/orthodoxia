import type { Article } from '../types.ts';

export const article: Article = {
  id: 'prediction-typology-interpretation',
  questionId: 'prediction-typology-interpretation',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article asks how the New Testament and the Church use the Old Testament when they say that something is fulfilled in Christ. It separates three things that are often run together: prediction (a statement about a future event), typology (a pattern in which a person, event or institution in the Old Testament prefigures something in Christ) and later theological interpretation (the Church’s reading of a text in the light of Christ). It shows how each is used, how a critic may judge each, and where the Coptic tradition stands.',
    ar: 'تسأل هذه المقالة كيف يستعمل العهد الجديد والكنيسة العهد القديم حين يقولان إن أمرًا قد تم في المسيح. وهي تفصل بين ثلاثة أمور كثيرًا ما تُخلط: التنبؤ (قول عن حدث مستقبلي)، والرمزية أو النمطية (نمط يُظهر فيه شخص أو حدث أو مؤسسة في العهد القديم صورة سابقة لشيء في المسيح)، والتفسير اللاهوتي اللاحق (قراءة الكنيسة للنص في نور المسيح). وتبيّن كيف يُستعمل كل منها، وكيف يحكم عليه الناقد، وأين يقف التقليد القبطي.',
  },
  shortAnswer: {
    en: 'The three are different kinds of claim and should be judged differently. A prediction says that a future event will occur and can be tested against the text and its date. Typology says that God shaped events and persons in Israel’s story so that they would point to Christ, and the New Testament writers use it constantly (Adam, the Passover lamb, the bronze serpent, Jonah, Melchizedek). Later interpretation reads a text in the light of the whole Scripture and of Christ. Only the first is a prediction in the ordinary sense. The Church holds all three, and a careful reader does not use one to prove another.',
    ar: 'هذه أنواع مختلفة من الدعاوى ويجب الحكم عليها حكمين مختلفين. فالتنبؤ يقول إن حدثًا مستقبليًا سيقع ويمكن اختباره بالنص وتاريخه. والرمزية النمطية تقول إن الله شكّل أحداثًا وأشخاصًا في قصة إسرائيل لتشير إلى المسيح، ويستعملها كتّاب العهد الجديد باستمرار (آدم، حمل الفصح، الحية النحاسية، يونان، ملكي صادق). والتفسير اللاحق يقرأ النص في نور الكتاب كله والمسيح. والأول وحده تنبؤ بالمعنى المعتاد. وتتمسك الكنيسة بالثلاثة، والقارئ الدقيق لا يستعمل أحدها لإثبات آخر.',
  },
  quickPoints: {
    en: [
      'Prediction: an explicit statement about a future event. It can be checked against the text’s date and wording.',
      'Typology: a person, event or institution in the Old Testament understood as a pattern that is completed in Christ; the New Testament uses it often.',
      'Later interpretation: the Church’s reading of an Old Testament text in the light of Christ and of the whole Scripture.',
      'A single passage may be read in more than one of these ways, as with Hosea 11:1 in Matthew 2:15.',
      'Critics argue that typology is a way of reading and does not prove anything; believers answer that it is a reading the apostles and Fathers received, and which depends on faith in Christ.',
    ],
    ar: [
      'التنبؤ: قول صريح عن حدث مستقبلي. ويمكن فحصه بتاريخ النص وألفاظه.',
      'الرمزية النمطية: شخص أو حدث أو مؤسسة في العهد القديم يُفهم نمطًا يكتمل في المسيح؛ ويستعملها العهد الجديد كثيرًا.',
      'التفسير اللاحق: قراءة الكنيسة لنص من العهد القديم في نور المسيح والكتاب كله.',
      'قد يُقرأ النص الواحد بأكثر من طريقة من هذه، كما في هوشع ١١: ١ في متى ٢: ١٥.',
      'يحتج النقاد بأن النمطية طريقة قراءة ولا تثبت شيئًا؛ ويجيب المؤمنون بأنها قراءة تسلمها الرسل والآباء وتقوم على الإيمان بالمسيح.',
    ],
  },
  argumentTypes: ['theological', 'textual', 'historical'],
  assessment: {
    label: 'theological_interpretation',
    explanation: {
      en: 'The distinction between the three kinds of claim, and the fact that the New Testament uses all of them, can be shown from the texts. Whether typology and later interpretation show that Christ was intended in the Old Testament is a theological interpretation, which a historian can describe and a believer can hold, but which the historical method alone does not prove.',
      ar: 'التمييز بين الأنواع الثلاثة من الدعاوى، وكون العهد الجديد يستعملها كلها، يمكن إظهارهما من النصوص. أما هل تبيّن النمطية والتفسير اللاحق أن المسيح كان مقصودًا في العهد القديم فتفسير لاهوتي يستطيع المؤرخ وصفه ويستطيع المؤمن التمسك به لكن المنهج التاريخي وحده لا يثبته.',
    },
  },

  whyExamine: {
    en: [
      'When a Christian says “this verse was fulfilled in Jesus” and a Jewish reader replies that the verse is about something else, they may both be right about what they mean, because they are using the word “fulfilled” differently. Naming the kind of claim makes the conversation clearer and more honest.',
      'The question also matters within the Church. A believer who treats every Old Testament verse quoted in the New as a literal prediction will meet difficulties that the writers themselves did not claim, while a reader who dismisses all of it as mere reading-in will miss how deeply the New Testament thinks in patterns.',
    ],
    ar: [
      'حين يقول مسيحي «تمت هذه الآية في يسوع» ويجيب قارئ يهودي بأن الآية عن شيء آخر، قد يكونان صادقين في ما يقصدانه لأنهما يستعملان كلمة «تمّ» استعمالين مختلفين. وتسمية نوع الدعوى تجعل الحوار أوضح وأصدق.',
      'والمسألة تهمّ داخل الكنيسة أيضًا. فالمؤمن الذي يعامل كل آية من العهد القديم مقتبسة في الجديد على أنها تنبؤ حرفي سيلقى صعوبات لم يدّعها الكتّاب أنفسهم، والقارئ الذي يرفض الأمر كله بوصفه إسقاطًا سيفوته مدى تفكير العهد الجديد بالأنماط.',
    ],
  },
  background: {
    en: [
      'In the Old Testament the prophets do speak about the future, but they also speak to their own time, and much of what they say is a warning or a promise to a people. Some statements look beyond the immediate situation, such as the promise of a king from David’s line. Prediction in the strict sense is a statement whose subject, content and timing can be identified from the text.',
      'Typology comes from a Greek word for a pattern or impression. St Paul the Apostle calls Adam a type of the one who was to come, and writes that the Israelites’ experience in the wilderness happened as examples for us. Matthew finds in the flight of the Holy Family to Egypt and the return the story of Israel, called out of Egypt, and applies to Jesus the words that Hosea spoke of Israel as God’s son. John’s Gospel compares the lifting up of the serpent in the wilderness to the lifting up of the Son of Man. The Letter to the Hebrews speaks of the law as a shadow of good things to come. These are readings by pattern.',
      'Reading the Old Testament in the light of Christ is also the pattern the Gospel of Luke records on the road to Emmaus, where the risen Lord explains to two disciples what is said about himself in all the Scriptures. The Fathers developed this. In Alexandria, Origen taught several levels of meaning and made much of allegory, a method in the same family as the Jewish reading of Philo of Alexandria. In Antioch, writers such as Diodore and Theodore stressed the literal and historical sense and used typology with restraint. Cyril of Alexandria wrote commentaries on Isaiah and the Twelve Prophets that kept the historical sense and read it in the light of Christ.',
      'Modern scholars distinguish the original meaning of a passage, as its author and first audience would have understood it, from the meaning it takes on when it is read in a larger context. Catholic scholars speak of a “fuller sense” of Scripture, and Protestant scholars of “canonical” reading. These are attempts to describe the same thing that the Fathers did, and they do not remove the historian’s distinction.',
    ],
    ar: [
      'يتحدث الأنبياء في العهد القديم فعلًا عن المستقبل، لكنهم يتحدثون أيضًا إلى زمانهم، وكثير مما يقولونه إنذار أو وعد لشعب. وبعض الأقوال تنظر إلى أبعد من الحال القريبة، كالوعد بملك من نسل داود. والتنبؤ بالمعنى الدقيق قول يمكن أن يُحدد موضوعه ومضمونه وزمنه من النص.',
      'وكلمة النمط مأخوذة من لفظ يوناني يعني قالبًا أو أثرًا. فيسمّي القديس بولس آدم مثالًا للآتي، ويكتب أن اختبارات الإسرائيليين في البرية حدثت أمثلة لنا. ويجد متى في هروب العائلة المقدسة إلى مصر وعودتها قصة إسرائيل المدعو من مصر، ويطبق على يسوع كلمات قالها هوشع عن إسرائيل ابن الله. ويقارن إنجيل يوحنا رفع الحية في البرية برفع ابن الإنسان. وتتحدث الرسالة إلى العبرانيين عن الناموس ظلًّا للخيرات العتيدة. وهذه قراءات بالنمط.',
      'وقراءة العهد القديم في نور المسيح هي أيضًا النمط الذي يسجله إنجيل لوقا في الطريق إلى عمواس، حيث يشرح الرب القائم لتلميذين ما قيل عنه في جميع الكتب. وقد طوّر الآباء هذا. ففي الإسكندرية علّم أوريجانوس مستويات عدة للمعنى وأكثر من التفسير الرمزي، وهو منهج من عائلة القراءة اليهودية عند فيلون السكندري. وفي أنطاكية شدد كتّاب مثل ديودورس وثيودور على المعنى الحرفي والتاريخي واستعملوا النمطية بتحفظ. وكتب كيرلس السكندري تفاسير لإشعياء والأنبياء الاثني عشر حفظت المعنى التاريخي وقرأته في نور المسيح.',
      'ويميز الدارسون المحدثون بين المعنى الأصلي للفقرة، كما كان يفهمه كاتبها وجمهورها الأول، والمعنى الذي تتخذه حين تُقرأ في سياق أوسع. ويتحدث دارسون كاثوليك عن «المعنى الأكمل» للكتاب، ودارسون بروتستانت عن قراءة «قانونية». وهذه محاولات لوصف ما فعله الآباء، ولا تزيل تمييز المؤرخ.',
    ],
  },
  glossary: ['typology', 'inspiration', 'tradition', 'septuagint', 'christology', 'canon'],

  claims: [
    {
      id: 'C1',
      proposition: {
        en: 'The New Testament uses the Old in at least three ways: explicit prediction, typological pattern, and reading in the light of Christ.',
        ar: 'يستعمل العهد الجديد القديم بثلاث طرق على الأقل: التنبؤ الصريح، والنمط الرمزي، والقراءة في نور المسيح.',
      },
      argumentType: 'textual',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'Matthew 2 cites a prophecy about Bethlehem and applies words about Israel to Jesus; St Paul the Apostle and St John the Evangelist use patterns; Luke 24 describes a reading of all the Scriptures in the light of Christ. The distinction can be drawn from the texts themselves.',
        ar: 'يستشهد متى ٢ بنبوة عن بيت لحم ويطبق كلمات عن إسرائيل على يسوع؛ ويستعمل القديس بولس ويوحنا أنماطًا؛ ويصف لوقا ٢٤ قراءة لجميع الكتب في نور المسيح. ويمكن رسم التمييز من النصوص نفسها.',
      },
      limits: {
        en: 'Which category a given use belongs to is sometimes debated.',
        ar: 'وإلى أي فئة ينتمي استعمال بعينه يُختلف فيه أحيانًا.',
      },
      evidence: ['E1', 'E2', 'E3', 'E4'],
    },
    {
      id: 'C2',
      proposition: {
        en: 'Typology and later interpretation do not rest on the first audience’s understanding of the Old Testament text; they rest on the claim that God’s purpose is seen in the whole.',
        ar: 'لا تقوم النمطية والتفسير اللاحق على فهم الجمهور الأول لنص العهد القديم؛ بل على دعوى أن قصد الله يُرى في الكل.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'The writers who use these readings were convinced, from the resurrection of Jesus, that the story of Israel was moving toward him. The reading is therefore held in faith and cannot be demonstrated from the earlier text alone.',
        ar: 'الكتّاب الذين يستعملون هذه القراءات اقتنعوا، من قيامة يسوع، بأن قصة إسرائيل كانت تتجه نحوه. فالقراءة تُمسك بالإيمان ولا يمكن البرهنة عليها من النص الأقدم وحده.',
      },
      limits: {
        en: 'A reader who does not accept the resurrection will not find the argument persuasive, and may call it reading-in.',
        ar: 'القارئ الذي لا يقبل القيامة لن يجد الحجة مقنعة، وقد يسميها إسقاطًا.',
      },
      evidence: ['E3', 'E5', 'E6'],
    },
    {
      id: 'C3',
      proposition: {
        en: 'The Fathers of the Church read the Old Testament both historically and typologically, with different schools giving different weight to each.',
        ar: 'قرأ آباء الكنيسة العهد القديم تاريخيًا ونمطيًا معًا، وأعطت المدارس المختلفة وزنًا مختلفًا لكل منهما.',
      },
      argumentType: 'historical',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'Athanasius argues from the prophets and the Psalms for the coming of the Word, and Origen defends Christian readings against Celsus’s Jewish spokesman. The Alexandrian and Antiochene schools differ in emphasis, although each held both senses in some form.',
        ar: 'يحتج أثناسيوس بالأنبياء والمزامير على مجيء الكلمة، ويدافع أوريجانوس عن القراءات المسيحية ضد المتحدث اليهودي في كتاب كلسس. وتختلف المدرسة السكندرية والأنطاكية في التأكيد، وإن تمسكت كل منهما بالمعنيين بصورة ما.',
      },
      limits: {
        en: 'The characterisation of the two schools is a simplification, and scholars discuss how sharp the contrast was.',
        ar: 'وصف المدرستين تبسيط، ويناقش الدارسون مدى حدة التباين.',
      },
      evidence: ['E7', 'E8'],
    },
  ],

  evidence: [
    {
      id: 'E1',
      sourceId: 'S62',
      locator: 'Matthew 2:5–6, read with Micah 5:2',
      role: 'context',
      states: {
        en: 'The chief priests and scribes, asked where the Christ was to be born, answer Bethlehem of Judea, and cite the prophet’s words about a ruler who will shepherd Israel.',
        ar: 'يجيب رؤساء الكهنة والكتبة، حين يُسألون أين يولد المسيح، بأنه في بيت لحم اليهودية، ويستشهدون بكلام النبي عن مدبر يرعى إسرائيل.',
      },
      inference: {
        en: 'This is the clearest example of prediction in Matthew: a place and a person are named in the prophecy, and the text can be dated well before Jesus. The Gospel presents the answer as one that the Jewish leaders gave themselves, which is the Gospel’s own account.',
        ar: 'هذا أوضح مثال على التنبؤ في متى: فالمكان والشخص مذكوران في النبوة، ويمكن تأريخ النص قبل يسوع بزمن طويل. ويقدم الإنجيل الجواب بوصفه جوابًا قاله القادة اليهود أنفسهم، وهذا رواية الإنجيل.',
      },
      bible: { book: 'matthew', chapter: 2, verse: '5-6' },
    },
    {
      id: 'E2',
      sourceId: 'S62',
      locator: 'Matthew 2:15, read with Hosea 11:1',
      role: 'context',
      states: {
        en: 'Matthew says that Jesus’s stay in Egypt fulfils the words “out of Egypt I called my son”. In Hosea the verse refers to the Lord’s calling of Israel in the exodus.',
        ar: 'يقول متى إن إقامة يسوع في مصر تتم الكلمات «من مصر دعوت ابني». وفي هوشع تشير الآية إلى دعوة الرب لإسرائيل في الخروج.',
      },
      inference: {
        en: 'This is typology, not prediction. Matthew sees Jesus as Israel’s story gathered into one person. A historian can say what Hosea meant and what Matthew claims, and the two are not the same; the Church holds that Matthew’s reading is part of how the Old Testament is fulfilled.',
        ar: 'هذه نمطية لا تنبؤ. فمتى يرى في يسوع قصة إسرائيل مجموعة في شخص واحد. ويستطيع المؤرخ أن يقول ما عناه هوشع وما يدّعيه متى، وهما ليسا الشيء نفسه؛ وترى الكنيسة أن قراءة متى جزء من كيفية إتمام العهد القديم.',
      },
      bible: { book: 'matthew', chapter: 2, verse: '15' },
    },
    {
      id: 'E3',
      sourceId: 'S62',
      locator: 'Romans 5:14; 1 Corinthians 10:1–6',
      role: 'context',
      states: {
        en: 'St Paul the Apostle calls Adam a type of the one who was to come, and says that what happened to Israel in the wilderness took place as examples for the church and was written for our instruction.',
        ar: 'يسمّي القديس بولس آدم مثالًا للآتي، ويقول إن ما حدث لإسرائيل في البرية جرى أمثلة للكنيسة وكُتب لإنذارنا.',
      },
      inference: {
        en: 'St Paul himself uses the pattern method and the word that gives “typology” its name. The claim that a pattern is intended is made in the text, and a reader who accepts the claim treats the Old Testament event as having a forward meaning.',
        ar: 'يستعمل القديس بولس نفسه طريقة النمط واللفظ الذي أعطى «النمطية» اسمها. والدعوى بأن النمط مقصود موجودة في النص، والقارئ الذي يقبلها يعامل حدث العهد القديم كأن له معنى إلى الأمام.',
      },
      bible: { book: 'romans', chapter: 5, verse: '14' },
    },
    {
      id: 'E4',
      sourceId: 'S62',
      locator: 'John 3:14–15, read with Numbers 21:4–9',
      role: 'context',
      states: {
        en: 'Jesus says that as Moses lifted up the serpent in the wilderness, so must the Son of Man be lifted up, that whoever believes in him may have eternal life.',
        ar: 'يقول يسوع إنه كما رفع موسى الحية في البرية هكذا ينبغي أن يُرفع ابن الإنسان، لكي لا يهلك كل من يؤمن به بل تكون له الحياة الأبدية.',
      },
      inference: {
        en: 'The Gospel presents Jesus himself as drawing the parallel. In Numbers the event is the healing of those bitten by serpents, and the passage does not point forward. The pattern is a reading made in the light of the cross.',
        ar: 'يقدم الإنجيل يسوع نفسه راسمًا التوازي. وفي العدد الحدث شفاء الملدوغين بالحيات، ولا تشير الفقرة إلى الأمام. فالنمط قراءة في نور الصليب.',
      },
      bible: { book: 'john', chapter: 3, verse: '14-15' },
    },
    {
      id: 'E5',
      sourceId: 'S62',
      locator: 'Luke 24:25–27 and 24:44–47',
      role: 'context',
      states: {
        en: 'On the road to Emmaus the risen Jesus explains to two disciples, beginning from Moses and all the Prophets, the things about himself in all the Scriptures. Later he tells the eleven that everything written about him in the Law, the Prophets and the Psalms must be fulfilled, and opens their minds to understand.',
        ar: 'في الطريق إلى عمواس يشرح يسوع القائم لتلميذين، مبتدئًا من موسى ومن جميع الأنبياء، الأمور المختصة به في جميع الكتب. وفي ما بعد يقول للأحد عشر إن كل ما كُتب عنه في ناموس موسى والأنبياء والمزامير لا بد أن يتم، ويفتح أذهانهم ليفهموا.',
      },
      inference: {
        en: 'In this Gospel the whole-Scripture reading in the light of Christ is itself an act of the risen Lord, and the disciples’ understanding of it follows the resurrection. The passage does not list the texts, so it is the principle and not a set of proof-texts.',
        ar: 'في هذا الإنجيل قراءة الكتب كلها في نور المسيح هي عمل للرب القائم نفسه، وفهم التلاميذ لها يتبع القيامة. ولا تعدد الفقرة النصوص، فهي المبدأ لا مجموعة شواهد.',
      },
      bible: { book: 'luke', chapter: 24, verse: '25-27' },
    },
    {
      id: 'E6',
      sourceId: 'S62',
      locator: 'Hebrews 10:1 and Galatians 4:21–31',
      role: 'context',
      states: {
        en: 'Hebrews says that the law has a shadow of the good things to come and not the true form of these realities. Galatians speaks of the two sons of Abraham and says that the matter may be taken allegorically, as two covenants.',
        ar: 'تقول الرسالة إلى العبرانيين إن للناموس ظل الخيرات العتيدة لا نفس صورة الأشياء. وتتحدث غلاطية عن ابني إبراهيم وتقول إن الأمر يمكن أن يؤخذ رمزيًا، كعهدين.',
      },
      inference: {
        en: 'New Testament writers themselves describe their readings as shadow and allegory. They regard the Old Testament institutions as true in their own place, and as pointing beyond themselves.',
        ar: 'يصف كتّاب العهد الجديد أنفسهم قراءاتهم بأنها ظل ورمز. وهم يعدّون مؤسسات العهد القديم حقيقية في موضعها ومشيرة إلى ما بعدها.',
      },
      bible: { book: 'hebrews', chapter: 10, verse: '1' },
    },
    {
      id: 'E7',
      sourceId: 'S52',
      locator: 'On the Incarnation, chapters 33–40',
      role: 'context',
      states: {
        en: 'Athanasius collects Scriptural passages that he understands to speak of the coming of the Word, his death and his kingdom, and presents them to Jewish readers as proof from their own Scriptures.',
        ar: 'يجمع أثناسيوس مقاطع كتابية يفهم أنها تتحدث عن مجيء الكلمة وموته وملكوته، ويقدمها إلى قراء يهود برهانًا من كتبهم.',
      },
      inference: {
        en: 'An Alexandrian reading of the early fourth century combines prediction and interpretation in one argument. It shows the Church’s ancient method but does not show that a Jewish reader of the same passages would be persuaded.',
        ar: 'قراءة سكندرية من أوائل القرن الرابع تجمع التنبؤ والتفسير في حجة واحدة. وهي تبيّن منهج الكنيسة القديم لكنها لا تبيّن أن قارئًا يهوديًا للمقاطع نفسها سيقتنع.',
      },
    },
    {
      id: 'E8',
      sourceId: 'S51',
      locator: 'Against Celsus, Book I (the exchange over the virgin birth and Isaiah 7:14)',
      role: 'context',
      states: {
        en: 'In Book I of Against Celsus, Origen answers the objections of a Jewish speaker whom Celsus presents, including those about the virgin birth and the prophecy of Isaiah quoted by Matthew.',
        ar: 'في الكتاب الأول من «ضد كلسس» يجيب أوريجانوس عن اعتراضات متحدث يهودي يقدمه كلسس، ومنها ما يتعلق بالولادة العذراوية ونبوة إشعياء التي يقتبسها متى.',
      },
      inference: {
        en: 'By about AD 248 the disagreement over how to read Isaiah 7:14 was already an argument between Jewish and Christian readers, and Origen answers it from the Greek text and the Scriptures. It shows the debate is old and that the two readings were set out clearly then.',
        ar: 'بحلول نحو ٢٤٨م كان الخلاف في قراءة إشعياء ٧: ١٤ جدلًا بين قراء يهود ومسيحيين، ويجيب أوريجانوس عنه من النص اليوناني ومن الكتب. ويبيّن أن النقاش قديم وأن القراءتين عُرضتا بوضوح حينئذ.',
      },
    },
  ],

  objections: [
    {
      id: 'O1',
      statement: {
        en: 'Matthew takes Hosea’s words about Israel and claims they are about Jesus. That is bad exegesis. It shows that the New Testament writers made the Old Testament say what they wanted.',
        ar: 'يأخذ متى كلمات هوشع عن إسرائيل ويدّعي أنها عن يسوع. وهذا تفسير رديء. وهو يبيّن أن كتّاب العهد الجديد جعلوا العهد القديم يقول ما أرادوه.',
      },
      response: {
        en: [
          'If Matthew were claiming that Hosea meant to predict Jesus, the objection would have force. Matthew’s own method is different. He treats the exodus as a pattern in which Israel is God’s son called out of Egypt, and finds that pattern again in Jesus, who recapitulates the story of Israel. Jewish writers in the same period also read Scripture by pattern, so Matthew’s method was at home in his world.',
          'The objection is right that a historian reading Hosea for its own sake will not find Jesus there, and a Christian can say so. The claim being made is not about Hosea’s intention but about how God’s work in Israel and in Christ is one.',
        ],
        ar: [
          'لو كان متى يدّعي أن هوشع قصد أن يتنبأ بيسوع لكان للاعتراض قوة. لكن منهج متى نفسه مختلف. فهو يعامل الخروج نمطًا يكون فيه إسرائيل ابن الله المدعو من مصر، ويجد النمط نفسه من جديد في يسوع الذي يلخّص قصة إسرائيل. وقرأ كتّاب يهود في الفترة نفسها الكتاب بالنمط أيضًا، فمنهج متى كان مألوفًا في عالمه.',
          'والاعتراض محق في أن المؤرخ الذي يقرأ هوشع لذاته لن يجد يسوع هناك، وللمسيحي أن يقول ذلك. والدعوى المطروحة ليست عن قصد هوشع بل عن كيف أن عمل الله في إسرائيل وفي المسيح واحد.',
        ],
      },
      limits: {
        en: 'A critic can still say that the pattern is chosen after the fact, and this article does not claim to show otherwise.',
        ar: 'ويظل للناقد أن يقول إن النمط اختير بعد الحدث، ولا تدّعي المقالة أنها تبيّن غير ذلك.',
      },
      evidence: ['E2', 'E3'],
    },
    {
      id: 'O2',
      statement: {
        en: 'Isaiah 7:14 is about a young woman in Ahaz’s time, and the Hebrew does not say “virgin”. The Christian reading is based on a mistranslation.',
        ar: 'إشعياء ٧: ١٤ عن فتاة شابة في زمن آحاز، والعبرية لا تقول «عذراء». فالقراءة المسيحية مبنية على سوء ترجمة.',
      },
      response: {
        en: [
          'The Hebrew word can mean a young woman, and the verse has an obvious setting in the time of King Ahaz, with a sign for him. Both points are widely accepted by scholars. The Greek translation, made two centuries before Jesus, used a word that means a virgin, and Matthew follows it. The Church therefore reads the verse as having a first setting and a fuller one, with the sign given to Ahaz also pointing to Immanuel born of the Virgin.',
          'This is a reading, and it stands or falls with the Church’s faith in the virginal conception, treated in its own article. It is not a simple translation error, since the translators of the Septuagint chose the word before the Christian question arose.',
        ],
        ar: [
          'اللفظ العبري يمكن أن يعني فتاة شابة، وللآية موضع واضح في زمن الملك آحاز، مع علامة له. وكلا الأمرين مقبول عند الدارسين على نطاق واسع. والترجمة اليونانية، التي صُنعت قبل يسوع بقرنين، استعملت لفظًا يعني عذراء، ويتبعها متى. فتقرأ الكنيسة الآية بأن لها موضعًا أول وموضعًا أكمل، والعلامة المعطاة لآحاز تشير أيضًا إلى عمانوئيل المولود من العذراء.',
          'وهذه قراءة، وهي تقوم أو تسقط مع إيمان الكنيسة بالحبل العذراوي الذي تعالجه مقالته الخاصة. وليست خطأ ترجمة بسيطًا، لأن مترجمي السبعينية اختاروا اللفظ قبل أن يظهر السؤال المسيحي.',
        ],
      },
      limits: {
        en: 'The Greek choice may reflect an understanding of the word that scholars still debate, so it does not settle the Hebrew meaning.',
        ar: 'قد يعكس الاختيار اليوناني فهمًا للفظ ما زال الدارسون يتناقشون فيه، فلا يحسم المعنى العبري.',
      },
      evidence: ['E8'],
    },
    {
      id: 'O3',
      statement: {
        en: 'If typology is allowed, anything can be a type of anything. There is no way to tell a good typological reading from a fanciful one.',
        ar: 'إن سُمح بالنمطية فيمكن لأي شيء أن يكون نمطًا لأي شيء. ولا طريقة للتمييز بين قراءة نمطية جيدة وأخرى خيالية.',
      },
      response: {
        en: [
          'This is a fair worry, and the Fathers shared it. Good typology is controlled by what the New Testament and the Church’s liturgy actually teach: Adam, the Passover lamb, the bronze serpent, Jonah and Melchizedek are set out by the New Testament and the earliest Fathers, and later types are tested by whether they illuminate the faith the Church holds. A fanciful type, one that teaches nothing the Church does not already teach, adds nothing.',
          'It is also true that some patristic readings go further than modern interpreters would, and the Church does not require that every one of them be held as a point of faith.',
        ],
        ar: [
          'هذا قلق مشروع، وقد شاركهم فيه الآباء. فالنمطية الجيدة يضبطها ما يعلّمه العهد الجديد وصلوات الكنيسة الطقسية فعلًا: آدم وحمل الفصح والحية النحاسية ويونان وملكي صادق يعرضها العهد الجديد وأقدم الآباء، وتُختبر الأنماط اللاحقة بمدى إنارتها للإيمان الذي تحتفظ به الكنيسة. والنمط الخيالي، الذي لا يعلّم شيئًا لا تعلّمه الكنيسة أصلًا، لا يضيف شيئًا.',
          'ومن الصحيح أن بعض قراءات الآباء تذهب أبعد مما يذهب إليه المفسرون المحدثون، ولا تطلب الكنيسة أن تُعتقد كلها نقطة إيمان.',
        ],
      },
      limits: {
        en: 'The test of fit with the Church’s faith is itself internal, and a critic outside the faith will not find it a neutral control.',
        ar: 'اختبار الملاءمة مع إيمان الكنيسة داخلي بذاته، ولن يجده ناقد من خارج الإيمان ضابطًا محايدًا.',
      },
      evidence: ['E3', 'E5', 'E6'],
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'Historically, a Christian can say that the New Testament writers use the Old Testament in different ways, that some uses are explicit predictions and many are patterns, and that these readings were in place in the first generation, drawing on Jewish habits of reading.',
        'A Christian should also say that a historian can distinguish what an Old Testament author meant from what a New Testament writer sees in it, and that a critic may judge the pattern readings less convincing than the predictions.',
      ],
      ar: [
        'يستطيع المسيحي تاريخيًا أن يقول إن كتّاب العهد الجديد يستعملون القديم بطرق مختلفة، وإن بعض الاستعمالات تنبؤات صريحة وكثيرًا منها أنماط، وإن هذه القراءات كانت قائمة في الجيل الأول مستندة إلى عادات يهودية في القراءة.',
        'وعليه أيضًا أن يقول إن المؤرخ يستطيع أن يميز بين ما قصده كاتب العهد القديم وما يراه فيه كاتب العهد الجديد، وإن الناقد قد يرى قراءات النمط أقل إقناعًا من التنبؤات.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that one God speaks in both Testaments, and that the Old Testament finds its fullness in Christ. The risen Lord opened the Scriptures to his disciples, and the Church receives that opening as the key to reading them.',
        'This confession allows for the human authors to have meant what they said to their own time, and for God to have given the words a further purpose. It does not require the Church to say that every prophet understood the Christ whom he foretold.',
      ],
      ar: [
        'تعترف الكنيسة بأن إلهًا واحدًا يتكلم في العهدين، وبأن العهد القديم يجد كماله في المسيح. وقد فتح الرب القائم الكتب لتلاميذه، وتقبل الكنيسة هذا الفتح مفتاحًا لقراءتها.',
        'ويسمح هذا الاعتراف بأن يكون الكتّاب البشر قد قصدوا ما قالوه لزمانهم، وبأن يكون الله قد أعطى الكلمات قصدًا أبعد. ولا يلزم الكنيسة أن تقول إن كل نبي فهم المسيح الذي تنبأ عنه.',
      ],
    },
  },
  coptic: {
    en: [
      'Typology runs through Coptic worship. In the Theotokia, the hymns to the Virgin, Mary is praised under the figures of the burning bush, Aaron’s rod that budded, the ark of the covenant, the golden censer and the jar of manna, which the Church reads as pictures that find their meaning in her and in her Son. The Pascha is read in the light of the Passover, and the prophecies of Holy Week are read in the light of the cross.',
      'The Church of Alexandria is also the home of the allegorical reading associated with Origen and of the Christ-centred reading of Athanasius and Cyril. The Coptic tradition has kept this habit of reading the whole Scripture as one book that speaks of Christ, together with a respect for the literal and historical sense.',
    ],
    ar: [
      'تسري النمطية في العبادة القبطية كلها. ففي الثيؤطوكيات، أي ألحان العذراء، تُمدح مريم بالرموز: العليقة المتقدة وعصا هارون التي أفرخت وتابوت العهد والمجمرة الذهبية وجرة المن، وتقرؤها الكنيسة صورًا تجد معناها فيها وفي ابنها. ويُقرأ الفصح في نور الفصح اليهودي، وتُقرأ نبوات أسبوع الآلام في نور الصليب.',
      'وكنيسة الإسكندرية أيضًا موطن القراءة الرمزية المرتبطة بأوريجانوس والقراءة المتمركزة حول المسيح عند أثناسيوس وكيرلس. وقد حفظ التقليد القبطي هذه العادة في قراءة الكتاب كله كتابًا واحدًا يتكلم عن المسيح، مع احترام للمعنى الحرفي والتاريخي.',
    ],
  },
  disputed: {
    en: [
      'Disputed among scholars: how far Matthew and the other writers meant their pattern readings to apply, how the pattern readings relate to the original sense, and how Jewish and Christian readings of passages such as Isaiah 7 and Isaiah 53 are best compared.',
      'Disputed between traditions: the weight to give to the allegorical readings of the Fathers, and whether a “fuller sense” beyond the human author’s intention is to be affirmed.',
      'Not disputed in this article: that the New Testament uses prediction, pattern and Christ-centred reading, and that these are different kinds of claim.',
    ],
    ar: [
      'مختلف عليه بين الدارسين: إلى أي مدى قصد متى وغيره من الكتّاب قراءاتهم بالنمط، وكيف ترتبط قراءات النمط بالمعنى الأصلي، وكيف تُقارن قراءات يهودية ومسيحية لفقرات مثل إشعياء ٧ وإشعياء ٥٣ على أفضل وجه.',
      'مختلف عليه بين التقاليد: وزن القراءات الرمزية عند الآباء، وهل يُثبت «معنى أكمل» يتجاوز قصد الكاتب البشري.',
      'غير مختلف عليه في هذا المقال: أن العهد الجديد يستعمل التنبؤ والنمط والقراءة المتمركزة حول المسيح، وأن هذه دعاوى من أنواع مختلفة.',
    ],
  },
  conclusion: {
    en: 'Prediction, typology and later interpretation are different kinds of claim. The New Testament and the Fathers use all three, and an honest reader names which one is in use before judging it. The prophecies that Christians apply to Jesus were written down before him; the pattern readings are a way of seeing the unity of God’s work that rests on faith in the risen Christ. A historian may weigh them differently from a believer, and the Church asks that each be described accurately.',
    ar: 'التنبؤ والنمطية والتفسير اللاحق دعاوى من أنواع مختلفة. ويستعمل العهد الجديد والآباء الثلاثة جميعًا، والقارئ الأمين يسمّي أيها قيد الاستعمال قبل أن يحكم عليه. فالنبوات التي يطبقها المسيحيون على يسوع كُتبت قبله؛ وقراءات النمط طريقة لرؤية وحدة عمل الله تقوم على الإيمان بالمسيح القائم. وقد يزنها المؤرخ بغير ما يزنها المؤمن، وتطلب الكنيسة أن يوصف كل منها وصفًا دقيقًا.',
  },
  furtherReading: ['S52', 'S51'],
  related: ['prophecy-written-after-events', 'jewish-and-christian-messianic-readings', 'virginal-conception-vs-perpetual-virginity', 'why-inspired', 'scripture-and-tradition'],
};
