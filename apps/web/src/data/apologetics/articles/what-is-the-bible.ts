import type { Article } from '../types.ts';

export const article: Article = {
  id: 'what-is-the-bible',
  questionId: 'what-is-the-bible',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article explains what the Bible is: a library of writings in several languages and literary forms, composed over many centuries, received by the Church as the Word of God and read within Holy Tradition. It describes how historians understand its composition and how the Church receives it. It does not trace the formation of the canon (see the article on who chose the books) or examine the copying of the text (see the article on whether the text has changed).',
    ar: 'تشرح هذه المقالة ما هو الكتاب المقدس: مكتبة من الكتابات بلغات وأنواع أدبية متعددة، تألفت عبر قرون كثيرة، وتتسلمها الكنيسة كلمة الله وتقرؤها داخل التقليد المقدس. وهي تصف كيف يفهم المؤرخون تأليفه، وكيف تتسلمه الكنيسة. ولا تتتبع تكوّن القانون الكتابي (انظر مقالة من اختار الأسفار)، ولا تفحص نسخ النص (انظر مقالة هل تغيّر النص).',
  },
  shortAnswer: {
    en: 'The Bible is not one book written at one time but a collection of writings, called in Greek “the books”. The Old Testament was written mostly in Hebrew, with some Aramaic, and was received by the early Church in its Greek form, the Septuagint; the New Testament was written in Greek in the first century. Its books include law, history, prophecy, wisdom, poetry, Gospels, a history of the apostles, letters and an apocalypse. They were written by human authors in real places and times, and through them the Holy Spirit speaks. The Church receives these writings as the inspired word of God, with Christ at their centre, and reads, preaches and prays them in her life, above all in the liturgy.',
    ar: 'الكتاب المقدس ليس كتابًا واحدًا كُتب في زمن واحد، بل مجموعة كتابات، تُسمى باليونانية «الأسفار». كُتب العهد القديم في معظمه بالعبرية مع بعض الأرامية، وتسلمته الكنيسة الأولى في صورته اليونانية، أي الترجمة السبعينية؛ وكُتب العهد الجديد باليونانية في القرن الأول. وتشمل أسفاره الشريعة والتاريخ والنبوة والحكمة والشعر والأناجيل وتاريخ الرسل والرسائل والرؤيا. وقد كتبها كتّاب بشر في أماكن وأزمنة حقيقية، ومن خلالها يتكلم الروح القدس. وتتسلم الكنيسة هذه الكتابات كلمة الله الموحى بها، والمسيح محورها، وتقرؤها وتكرز بها وتصلّيها في حياتها، وفي مقدمة ذلك الصلوات الطقسية.',
  },
  quickPoints: {
    en: [
      'The word “Bible” comes from a Greek plural meaning “the books”: it is a library, not a single volume.',
      'The Old Testament is mostly Hebrew (with some Aramaic); the New Testament is in Greek. The early Church read the Old Testament chiefly in Greek, in the Septuagint.',
      'The books belong to different literary forms, and each is best read according to its form: history is not read as a hymn, nor a letter as a law code.',
      'The books were composed by human authors over many centuries, and the Church receives them as inspired by the Holy Spirit.',
      'The Coptic Orthodox Church receives the Septuagint-based Old Testament, including the deuterocanonical books, together with the New Testament.',
      'In the Church Scripture is read within Holy Tradition and in worship, not as isolated verses.',
    ],
    ar: [
      'كلمة «Bible» مأخوذة من جمع يوناني معناه «الأسفار»: فهو مكتبة وليس مجلدًا واحدًا.',
      'العهد القديم عبري في معظمه (مع بعض الأرامية)، والعهد الجديد باليونانية. وقد قرأت الكنيسة الأولى العهد القديم في الغالب باليونانية، في الترجمة السبعينية.',
      'تنتمي الأسفار إلى أنواع أدبية مختلفة، ويُقرأ كل سفر بحسب نوعه: فالتاريخ لا يُقرأ كما تُقرأ التسبحة، ولا الرسالة كما تُقرأ مدونة الشرائع.',
      'كتب الأسفارَ كتّابٌ بشر عبر قرون كثيرة، وتتسلمها الكنيسة موحى بها من الروح القدس.',
      'تتسلم الكنيسة القبطية الأرثوذكسية العهد القديم المبني على الترجمة السبعينية، بما فيه الأسفار القانونية الثانية، مع العهد الجديد.',
      'تُقرأ الكتب المقدسة في الكنيسة داخل التقليد المقدس وفي العبادة، لا آياتٍ معزولة.',
    ],
  },
  argumentTypes: ['historical', 'theological'],
  assessment: {
    label: 'supported_disputed_details',
    explanation: {
      en: 'That the Bible is a collection of writings of different languages, forms and periods is well supported and is not disputed in outline. The dating and authorship of many individual books, especially in the Old Testament, are debated among historians, and the doctrine of inspiration is a confession of faith that the historical description neither proves nor refutes.',
      ar: 'إن كون الكتاب المقدس مجموعة كتابات متباينة اللغة والنوع والعصر أمر تسنده الأدلة ولا خلاف عليه في خطوطه العامة. أما تاريخ تأليف كثير من الأسفار ونسبتها، وبخاصة في العهد القديم، فمحل نقاش بين المؤرخين، وعقيدة الوحي اعتراف إيماني لا يثبته الوصف التاريخي ولا ينفيه.',
    },
  },
  whyExamine: {
    en: [
      'People meet the Bible in many ways: as a single book on a shelf, as a source of quoted verses, as a book of rules, or as a book to be refuted. Each of these can mislead if it hides what the Bible actually is. A reader who knows that it is a library of different forms, held together by one Spirit and centred on Christ, can hear what each passage truly says.',
      'It also matters in conversation with those who do not believe. The Church can describe the Bible plainly as an ancient library, and show why she receives that library as the word of God.',
    ],
    ar: [
      'يلتقي الناس بالكتاب المقدس بطرق شتى: كتابًا واحدًا على رف، أو مصدرًا لآيات تُقتبس، أو كتاب أحكام، أو كتابًا يُراد نقضه. وكل ذلك قد يضلّل إن حجب حقيقة الكتاب. والقارئ الذي يعرف أنه مكتبة متنوعة الأنواع، يجمعها روح واحد ومحورها المسيح، يستطيع أن يسمع ما تقوله كل فقرة حقًا.',
      'وهو مهم أيضًا في الحوار مع غير المؤمنين. فالكنيسة تستطيع أن تصف الكتاب المقدس بوضوح مكتبةً قديمة، وأن تبيّن لماذا تتسلم هذه المكتبة كلمةً لله.',
    ],
  },
  background: {
    en: [
      'The Old Testament is the Scripture of Israel as the Church received it. Its books were composed and gathered over many centuries, in Hebrew with some passages in Aramaic (parts of Daniel and Ezra). The Greek translation known as the Septuagint was the Bible of Greek-speaking Jews and of the first Christians, and most Old Testament quotations in the Greek New Testament are close to its wording. The Coptic Orthodox Church receives the Old Testament in this Septuagint tradition, which includes the deuterocanonical books such as Wisdom, Sirach and Tobit.',
      'The New Testament consists of four Gospels, the Acts of the Apostles, the letters of St Paul and of the other apostles, and the Revelation. Its twenty-seven books were written in Greek in the first century, and Christians were already reading them aloud in their gatherings in the second century.',
      'Within these two parts there are many literary forms: narrative history, law, prophecy, proverbs, prayer and lament, gospel, letter and apocalyptic vision. Ancient authors used sources and traditions, and several books are the work of editors who gathered earlier material. Historians describe this as the human side of composition. The Church does not regard it as in conflict with inspiration: she holds that the Holy Spirit worked in and through human authors with their own language, circumstances and style.',
      'For the Church Scripture is not a stand-alone text. It is read in the community that received it, in the liturgy, with the explanation of the Fathers. In the Coptic Mass the Church reads from the Pauline epistles, the Catholic epistles, the Acts, the Psalms and the Gospel, and the whole service is woven with the words of Scripture. This is what is meant by reading Scripture within Holy Tradition.',
    ],
    ar: [
      'العهد القديم هو كتاب إسرائيل كما تسلمته الكنيسة. وقد تألفت أسفاره وجُمعت عبر قرون كثيرة، بالعبرية مع مقاطع بالأرامية (أجزاء من دانيال وعزرا). أما الترجمة اليونانية المعروفة بالسبعينية فكانت كتاب اليهود الناطقين باليونانية والمسيحيين الأوائل، وأكثر اقتباسات العهد القديم في العهد الجديد اليوناني قريبة من صيغتها. وتتسلم الكنيسة القبطية الأرثوذكسية العهد القديم في هذا التقليد السبعيني، وهو يشمل الأسفار القانونية الثانية كالحكمة ويشوع بن سيراخ وطوبيا.',
      'يتألف العهد الجديد من أربعة أناجيل وأعمال الرسل ورسائل القديس بولس والرسل الآخرين وسفر الرؤيا. وأسفاره السبعة والعشرون كُتبت باليونانية في القرن الأول، وكان المسيحيون يقرؤونها بصوت عالٍ في اجتماعاتهم منذ القرن الثاني.',
      'وفي هذين القسمين أنواع أدبية كثيرة: تاريخ سردي، وشريعة، ونبوة، وأمثال، وصلاة ومرثاة، وإنجيل، ورسالة، ورؤيا. وقد استعان الكتّاب القدماء بمصادر وتقاليد، وبعض الأسفار من عمل محررين جمعوا مادة أقدم. ويصف المؤرخون هذا بأنه الجانب البشري من التأليف. ولا ترى الكنيسة فيه تعارضًا مع الوحي: فهي تؤمن بأن الروح القدس عمل في الكتّاب البشر وبواسطتهم، بلغتهم وظروفهم وأسلوبهم.',
      'والكتاب المقدس عند الكنيسة ليس نصًا قائمًا بذاته. فهو يُقرأ في الجماعة التي تسلمته، في الصلوات الطقسية، مع تفسير الآباء. وفي القداس القبطي تقرأ الكنيسة من رسائل القديس بولس والرسائل الجامعة والأبركسيس والمزامير والإنجيل، وتنسج الخدمة كلها بكلمات الكتاب. وهذا هو معنى قراءة الكتاب المقدس داخل التقليد المقدس.',
    ],
  },
  glossary: ['canon', 'septuagint', 'deuterocanon', 'tradition', 'inspiration', 'gospel', 'manuscript'],
  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'The Bible is a collection of writings in several languages and literary forms, composed over many centuries.',
        ar: 'الكتاب المقدس مجموعة كتابات بلغات وأنواع أدبية متعددة، تألفت عبر قرون كثيرة.',
      },
      argumentType: 'historical',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'The books name or imply different authors, settings and genres, and the New Testament itself refers to the Law, the Prophets and the Psalms as parts of a larger body of writings. Anyone who opens the Bible can see this variety for himself.',
        ar: 'تذكر الأسفار أو تفترض كتّابًا ومواضع وأنواعًا مختلفة، والعهد الجديد نفسه يشير إلى الناموس والأنبياء والمزامير بوصفها أجزاء من مجموعة أكبر. ويستطيع كل من يفتح الكتاب المقدس أن يرى هذا التنوع بنفسه.',
      },
      limits: {
        en: 'It does not fix the date or author of any given book, which are discussed in the articles on particular books.',
        ar: 'لا يحدد تاريخ سفر بعينه ولا كاتبه، فهذه تُناقش في المقالات الخاصة بكل سفر.',
      },
      evidence: ['e1', 'e4'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'Early Christians read Scripture aloud in their worship from the second century at the latest, which shows that the Bible was received in the life of the Church, not first in private study.',
        ar: 'قرأ المسيحيون الأوائل الكتب المقدسة بصوت عالٍ في عبادتهم منذ القرن الثاني على الأكثر، مما يدل على أن الكتاب المقدس تُسلِّم في حياة الكنيسة، لا في دراسة خاصة أولًا.',
      },
      argumentType: 'historical',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'Justin Martyr, writing around the middle of the second century, describes the Sunday gathering in which the memoirs of the apostles or the writings of the prophets are read. He is an early Christian witness describing the worship of his own community, and the Coptic Liturgy still reads the apostles and the prophets in the same way.',
        ar: 'يصف يوستينوس الشهيد، في منتصف القرن الثاني تقريبًا، اجتماع يوم الأحد الذي تُقرأ فيه تذكارات الرسل أو كتابات الأنبياء. وهو شاهد مسيحي مبكر يصف عبادة جماعته، وما زال القداس القبطي يقرأ الرسل والأنبياء بالطريقة نفسها.',
      },
      limits: {
        en: 'Justin does not list the books read, so this passage cannot be used to fix the canon.',
        ar: 'لا يذكر يوستينوس قائمة الأسفار المقروءة، فلا تصلح هذه الفقرة لتحديد القانون.',
      },
      evidence: ['e3'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'The Church confesses the Scriptures as inspired by the Holy Spirit, and understands them within the Tradition she received from the apostles.',
        ar: 'تعترف الكنيسة بأن الكتب المقدسة موحى بها من الروح القدس، وتفهمها داخل التقليد الذي تسلمته من الرسل.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'The New Testament itself speaks of the sacred writings as God-breathed and of the apostolic teaching as something handed on. The Church reads these statements as the basis for receiving Scripture and Tradition together.',
        ar: 'يتحدث العهد الجديد نفسه عن الكتب المقدسة بأنها موحى بها من الله، وعن التعليم الرسولي بأنه مسلَّم. وتقرأ الكنيسة هذه العبارات أساسًا لتسلّم الكتاب والتقليد معًا.',
      },
      limits: {
        en: 'This is a statement of faith. A historian, as historian, cannot confirm or deny it, and other Christian traditions describe the relation of Scripture and Tradition differently.',
        ar: 'هذا قول إيماني. والمؤرخ بصفته مؤرخًا لا يستطيع تأكيده أو نفيه، وتصف تقاليد مسيحية أخرى العلاقة بين الكتاب والتقليد وصفًا مختلفًا.',
      },
      evidence: ['e2'],
    },
  ],
  evidence: [
    {
      id: 'e1',
      sourceId: 'S62',
      locator: 'Luke 24:44',
      role: 'supports',
      states: {
        en: 'In Luke the risen Jesus speaks of what is written about him in the Law of Moses, the Prophets and the Psalms.',
        ar: 'في إنجيل لوقا يتكلم يسوع القائم عما كُتب عنه في ناموس موسى والأنبياء والمزامير.',
      },
      inference: {
        en: 'Read as an ancient document, the passage shows that a threefold body of Scripture existed for the writer of Luke. It shows a collection, not a single book, but it does not give the exact list of books.',
        ar: 'تُظهر الفقرة، بوصفها وثيقة قديمة، أن مجموعة ثلاثية من الكتب المقدسة كانت قائمة عند كاتب إنجيل لوقا. وهي تدل على مجموعة لا على كتاب واحد، لكنها لا تعطي القائمة الدقيقة للأسفار.',
      },
      bible: { book: 'luke', chapter: 24, verse: '44' },
    },
    {
      id: 'e2',
      sourceId: 'S62',
      locator: '2 Timothy 3:14-17',
      role: 'context',
      states: {
        en: 'The letter urges Timothy to continue in what he learned and from whom he learned it, and says that sacred writings are God-breathed and useful for teaching, correction and training in righteousness.',
        ar: 'تحث الرسالة تيموثاوس على أن يثبت في ما تعلمه وممن تعلمه، وتقول إن الكتب المقدسة موحى بها من الله ونافعة للتعليم والتوبيخ والتقويم والتأديب في البر.',
      },
      inference: {
        en: 'The passage joins learned teaching with the writings. It is the Church’s reading of this passage that supports receiving Scripture within the handed-on faith. As evidence of what the first Christians believed, it is a statement of the letter’s author, not an independent proof of inspiration.',
        ar: 'تجمع الفقرة بين التعليم المتلقَّى والكتابات. وقراءة الكنيسة لهذه الفقرة هي التي تسند تسلّم الكتاب داخل الإيمان المسلَّم. وهي، شاهدًا على ما آمن به المسيحيون الأوائل، قول لكاتب الرسالة وليست برهانًا مستقلًا على الوحي.',
      },
      bible: { book: '2-timothy', chapter: 3, verse: '14-17' },
    },
    {
      id: 'e3',
      sourceId: 'S50',
      locator: 'First Apology 67',
      role: 'supports',
      states: {
        en: 'Justin describes the Sunday gathering of Christians: the memoirs of the apostles or the writings of the prophets are read for as long as time allows, then the president instructs the people, and prayers and the Eucharist follow.',
        ar: 'يصف يوستينوس اجتماع المسيحيين يوم الأحد: تُقرأ تذكارات الرسل أو كتابات الأنبياء ما سمح الوقت، ثم يعظ الرئيس الشعب، وتتبع ذلك الصلوات والإفخارستيا.',
      },
      inference: {
        en: 'By the middle of the second century the apostolic memoirs (the Gospels) were read in worship alongside the prophets. The Bible and the liturgy were joined from early on.',
        ar: 'بحلول منتصف القرن الثاني كانت تذكارات الرسل (أي الأناجيل) تُقرأ في العبادة مع الأنبياء. فالارتباط بين الكتاب والصلوات الطقسية قديم.',
      },
    },
    {
      id: 'e4',
      sourceId: 'S29',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'context',
      states: {
        en: 'F. F. Bruce’s book is a historian’s account of how the canon of Scripture took shape and was received. It is cited here only as an introduction to the history of the collection.',
        ar: 'كتاب ف. ف. بروس عرض مؤرخ لكيفية تكوّن القانون الكتابي وتسلّمه. ويُستشهد به هنا مدخلًا إلى تاريخ المجموعة فقط.',
      },
      inference: {
        en: 'The Bible as a collection has a history that can be traced. Its details belong to the article on who chose the books.',
        ar: 'للكتاب المقدس بوصفه مجموعة تاريخ يمكن تتبعه، وتفاصيله موضوع مقالة من اختار الأسفار.',
      },
    },
  ],
  objections: [
    {
      id: 'o1',
      statement: {
        en: 'If the Bible was written by many people over many centuries, it cannot be a single message from God.',
        ar: 'إن كان الكتاب المقدس قد كتبه أناس كثيرون عبر قرون، فلا يمكن أن يكون رسالة واحدة من الله.',
      },
      response: {
        en: [
          'Many authors do not exclude one message. The same Spirit spoke through all of them, and the books share one subject: God’s saving work, which reaches its fullness in Christ, the centre toward which the Law, the Prophets and the Psalms point.',
          'This unity is not imposed by later readers. Christ Himself opened the Scriptures to His disciples and showed them what was written about Him in the Law, the Prophets and the Psalms (Luke 24:27, 44). The Church reads as her Lord taught her to read.',
        ],
        ar: [
          'تعدد الكتّاب لا ينفي وحدة الرسالة. فالروح الواحد تكلم فيهم جميعًا، وللأسفار موضوع واحد: عمل الله الخلاصي الذي يبلغ كماله في المسيح، محور ما يشير إليه الناموس والأنبياء والمزامير.',
          'وهذه الوحدة لا يفرضها قراء لاحقون. فالمسيح نفسه فتح الكتب لتلاميذه وأراهم ما كُتب عنه في الناموس والأنبياء والمزامير (لوقا ٢٤: ٢٧، ٤٤). والكنيسة تقرأ كما علّمها ربها أن تقرأ.',
        ],
      },
      limits: {
        en: 'It does not show that every part of the collection is consistent in detail; that is a separate question.',
        ar: 'لا يثبت أن كل جزء من المجموعة متسق في تفاصيله، فهذه مسألة منفصلة.',
      },
      evidence: ['e1'],
    },
    {
      id: 'o2',
      statement: {
        en: 'The Bible is just a human book; the human authors and sources explain everything in it.',
        ar: 'الكتاب المقدس كتاب بشري فحسب؛ والكتّاب والمصادر البشرية تفسر كل ما فيه.',
      },
      response: {
        en: [
          'The human authors and sources are real, and the Church does not deny them. Studying them is a legitimate task. The Church’s claim is not that human authorship is absent but that God worked through it.',
          'Human authors explain the language and style of the books, but not the one voice that runs through them, nor the prophecies fulfilled in Christ, nor the life these words have given to the Church for two thousand years. The Church confesses that the Holy Spirit spoke through the prophets, as she says in the Creed.',
        ],
        ar: [
          'الكتّاب والمصادر البشرية حقيقيون، والكنيسة لا تنكرهم، ودراستهم مهمة مشروعة. وليست دعوى الكنيسة أن التأليف البشري غائب، بل أن الله عمل من خلاله.',
          'الكتّاب البشر يفسّرون لغة الأسفار وأسلوبها، لكنهم لا يفسّرون الصوت الواحد الذي يسري فيها، ولا النبوات التي تمّت في المسيح، ولا الحياة التي وهبتها هذه الكلمات للكنيسة ألفي سنة. والكنيسة تعترف بأن الروح القدس تكلم في الأنبياء، كما تقول في قانون الإيمان.',
        ],
      },
      limits: {
        en: 'It does not prove inspiration. It only shows that the historical account and the confession of inspiration are about different things.',
        ar: 'لا يثبت الوحي. إنه يبيّن فقط أن الوصف التاريخي والاعتراف بالوحي يتعلقان بأمرين مختلفين.',
      },
      evidence: ['e2'],
    },
    {
      id: 'o3',
      statement: {
        en: 'Christians cannot agree on which books belong in the Bible, so the question “what is the Bible?” has no single answer.',
        ar: 'لا يتفق المسيحيون على الأسفار التي ينبغي أن يضمها الكتاب المقدس، فلا جواب واحد عن سؤال «ما هو الكتاب المقدس؟».',
      },
      response: {
        en: [
          'It is true that Christian traditions differ over the Old Testament list: the Coptic Orthodox Church and other ancient churches receive the deuterocanonical books, and most Protestant Bibles do not. The New Testament list is the same across the main traditions.',
          'The canon has a history, examined in its own articles, and the Church has a clear answer within it: the Coptic Church receives the Old Testament of the Septuagint tradition, as the apostolic Church read it and as her Fathers did, together with the twenty-seven books of the New Testament.',
        ],
        ar: [
          'صحيح أن التقاليد المسيحية تختلف في قائمة العهد القديم: فالكنيسة القبطية الأرثوذكسية وغيرها من الكنائس القديمة تتسلم الأسفار القانونية الثانية، ولا تضمها أكثر الطبعات البروتستانتية. أما قائمة العهد الجديد فواحدة عند التقاليد الكبرى.',
          'وللقانون تاريخ يُفحص في مقالاته الخاصة، وللكنيسة فيه جواب واضح: فالكنيسة القبطية تتسلم العهد القديم من التقليد السبعيني، كما قرأته الكنيسة الرسولية وكما تسلمه آباؤها، مع الأسفار السبعة والعشرين للعهد الجديد.',
        ],
      },
      limits: {
        en: 'It does not argue that the Septuagint-based canon is the correct one against other traditions; that belongs to the articles on the Old Testament canons.',
        ar: 'لا تحاول هذه المقالة إثبات أن القانون السبعيني هو الصحيح في مقابل التقاليد الأخرى، فذلك من شأن مقالات قوانين العهد القديم.',
      },
      evidence: ['e4'],
    },
  ],
  christianResponse: {
    historical: {
      en: [
        'Historically, the Bible is an ancient library whose books had human authors, were gathered over time, and were read aloud in Christian gatherings from an early date. Its languages, forms, sources and dates can all be studied, and that study shows a text rooted in real history.',
        'The Bible’s plurality is a reason to read it carefully, by genre and in context, and not a reason to dismiss it.',
      ],
      ar: [
        'تاريخيًا، الكتاب المقدس مكتبة قديمة كان لأسفارها كتّاب بشر، وجُمعت عبر الزمن، وكانت تُقرأ بصوت عالٍ في اجتماعات المسيحيين منذ وقت مبكر. ويمكن دراسة لغات أسفارها وأنواعها ومصادرها وتواريخها، وهذه الدراسة تبيّن نصًا متجذرًا في تاريخ حقيقي.',
        'وتعدد الكتاب المقدس سبب لقراءته بعناية، بحسب نوعه وسياقه، وليس سببًا لرفضه.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that the Holy Spirit inspired the Scriptures and that Christ is their centre. She receives them from the apostles and the Fathers, and she hears them above all in worship, where the Gospel is read standing, with the people, as the voice of Christ addressed to his Church.',
        'For this reason the Church does not set Scripture against Tradition. Scripture is the written heart of the Tradition that she lives, and Tradition is the life within which Scripture is understood.',
      ],
      ar: [
        'تعترف الكنيسة بأن الروح القدس أوحى بالكتب المقدسة وأن المسيح محورها. وهي تتسلمها من الرسل والآباء، وتسمعها قبل كل شيء في العبادة، حيث يُقرأ الإنجيل وقوفًا مع الشعب بوصفه صوت المسيح لكنيسته.',
        'ولهذا لا تضع الكنيسة الكتاب في مواجهة التقليد. فالكتاب هو القلب المكتوب للتقليد الذي تحياه، والتقليد هو الحياة التي يُفهم فيها الكتاب.',
      ],
    },
  },
  coptic: {
    en: [
      'The Coptic Orthodox Church receives the Old Testament in the Septuagint tradition, with the deuterocanonical books, and the twenty-seven books of the New Testament. Her Fathers, above all St Athanasius, St Cyril of Alexandria and St Dioscorus, read, taught and defended Scripture within the Church’s faith.',
      'Scripture is also present in every service. The Coptic liturgy reads the Pauline and Catholic epistles, the Acts, the Psalms and the Gospel, and its prayers and hymns are largely made of biblical words. The Church holds the Bible as the Word of God addressed to the Church gathered in worship.',
    ],
    ar: [
      'تتسلم الكنيسة القبطية الأرثوذكسية العهد القديم في التقليد السبعيني مع الأسفار القانونية الثانية، والأسفار السبعة والعشرين للعهد الجديد. وقد قرأ آباؤها، وفي مقدمتهم القديس أثناسيوس والقديس كيرلس السكندري والقديس ديوسقورس، الكتاب وعلّموه ودافعوا عنه داخل إيمان الكنيسة.',
      'والكتاب حاضر في كل خدمة أيضًا. فالصلوات الطقسية القبطية تقرأ رسائل القديس بولس والرسائل الجامعة والأبركسيس والمزامير والإنجيل، وصلواتها وألحانها مصوغة في معظمها من كلمات الكتاب. والكنيسة تتسلم الكتاب المقدس كلمة الله الموجهة إلى الكنيسة المجتمعة للعبادة.',
    ],
  },
  disputed: {
    en: [
      'Historians disagree about when many Old Testament books reached their present form, about how far earlier sources lie behind them, and about the authorship of some New Testament writings. Some of these questions, such as the dates of the Gospels, are treated in their own articles.',
      'Christian traditions disagree about the extent of the Old Testament and about how Scripture and Tradition relate. These disagreements are about the Church’s reception of the books and are not settled by historical study alone.',
    ],
    ar: [
      'يختلف المؤرخون في الزمن الذي بلغت فيه أسفار كثيرة من العهد القديم صورتها الحالية، وفي مدى المصادر الأقدم الكامنة وراءها، وفي نسبة بعض كتابات العهد الجديد. وبعض هذه المسائل، كتاريخ الأناجيل، تعالجها مقالات خاصة.',
      'وتختلف التقاليد المسيحية في سعة العهد القديم وفي العلاقة بين الكتاب والتقليد. وهذه الخلافات تتعلق بتسلّم الكنيسة للأسفار، ولا يحسمها البحث التاريخي وحده.',
    ],
  },
  conclusion: {
    en: 'The Bible is a library of writings of different languages, forms and periods, written by human authors through whom the Holy Spirit spoke. Its books share one subject, God’s saving work fulfilled in Christ. The Church receives them as the word of God and reads them within Holy Tradition, above all in worship, where the Gospel is heard as the voice of Christ to His people.',
    ar: 'الكتاب المقدس مكتبة من الكتابات المتباينة اللغة والنوع والعصر، كتبها كتّاب بشر تكلم من خلالهم الروح القدس. ولأسفاره موضوع واحد: عمل الله الخلاصي الذي تمّ في المسيح. والكنيسة تتسلمها كلمة الله وتقرؤها داخل التقليد المقدس، وفي مقدمة ذلك العبادة، حيث يُسمع الإنجيل صوتَ المسيح لشعبه.',
  },
  furtherReading: ['S29', 'S62', 'S50', 'S30'],
  related: ['who-chose-the-books', 'why-these-books', 'old-testament-canons-differ', 'coptic-deuterocanon', 'why-inspired', 'has-bible-changed'],
};
