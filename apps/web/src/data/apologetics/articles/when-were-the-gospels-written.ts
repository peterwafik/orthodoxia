import type { Article } from '../types.ts';

export const article: Article = {
  id: 'when-were-the-gospels-written',
  questionId: 'when-were-the-gospels-written',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article asks when the four Gospels and the letters of St Paul were written, and what the dating is based on. It gives the ranges most historians use, the reasons behind them and the points on which scholars differ. It does not decide who wrote the Gospels (see the article on authorship) or how the material was handed on before it was written (see the article on oral transmission).',
    ar: 'تسأل هذه المقالة متى كُتبت الأناجيل الأربعة ورسائل القديس بولس، وعلى ماذا يقوم التأريخ. وهي تعرض الفترات التي يستعملها أكثر المؤرخين وأسبابها ومواضع اختلاف الباحثين. ولا تحدد من كتب الأناجيل (انظر مقالة التأليف)، ولا كيف تُناقلت المادة قبل كتابتها (انظر مقالة النقل الشفهي).',
  },
  shortAnswer: {
    en: 'The Gospels were written in the first century, within the lifetime of people who had seen and heard the Lord. St Paul’s letters, the earliest Christian writings that survive, come from the 50s, about twenty years after the crucifixion, and they already hand on the Church’s message of Christ’s death, burial and resurrection as something received before them. St Mark wrote around the 60s or about AD 70, St Matthew and St Luke in the decades after, and St John last, toward the end of the century. A fragment of John copied in the second century shows that his Gospel was already written and travelling far from where it began.',
    ar: 'كُتبت الأناجيل في القرن الأول، في حياة أناس رأوا الرب وسمعوه. ورسائل القديس بولس، وهي أقدم الكتابات المسيحية الباقية، تعود إلى الخمسينيات، أي بعد الصلب بنحو عشرين سنة، وهي تسلّم بشارة الكنيسة بموت المسيح ودفنه وقيامته شيئًا تسلّمه بولس قبلها. وكتب القديس مرقس في الستينيات أو نحو سنة 70، والقديسان متى ولوقا في العقود التالية، والقديس يوحنا أخيرًا قرب نهاية القرن. وشذرة من يوحنا نُسخت في القرن الثاني تبيّن أن إنجيله كان قد كُتب وانتقل بعيدًا عن موضعه الأول.',
  },
  quickPoints: {
    en: [
      'The Gospels do not state their own dates; they are dated, like all ancient books, from their contents, early quotations and manuscripts.',
      'St Paul’s letters, written from about the 50s, are earlier than any Gospel and already preserve the apostolic message about Christ.',
      'St Mark wrote around the 60s or about AD 70, St Matthew and St Luke in the following decades, and St John toward the end of the first century.',
      'The earliest manuscript fragment of a Gospel passage, a scrap of John, belongs to the second century and comes from Egypt.',
      'Even the latest of these dates places the Gospels within living memory of the Lord’s ministry.',
      'The Church received these four Gospels from the apostolic generation and reads them as Scripture.',
    ],
    ar: [
      'لا تذكر الأناجيل تواريخها؛ وهي تؤرَّخ، ككل الكتب القديمة، من محتواها والاقتباسات المبكرة والمخطوطات.',
      'رسائل القديس بولس، المكتوبة منذ نحو الخمسينيات، أقدم من أي إنجيل وتحفظ البشارة الرسولية عن المسيح.',
      'كتب القديس مرقس في الستينيات أو نحو سنة 70، والقديسان متى ولوقا في العقود التالية، والقديس يوحنا قرب نهاية القرن الأول.',
      'أقدم شذرة مخطوطة لفقرة إنجيلية، وهي قصاصة من يوحنا، تعود إلى القرن الثاني وجاءت من مصر.',
      'حتى أحدث هذه التواريخ يضع الأناجيل ضمن الذاكرة الحية لخدمة الرب.',
      'تسلّمت الكنيسة هذه الأناجيل الأربعة من جيل الرسل، وتقرؤها كتابًا مقدسًا.',
    ],
  },
  argumentTypes: ['historical', 'textual'],
  assessment: {
    label: 'supported_disputed_details',
    explanation: {
      en: 'That St Paul’s letters come from the middle of the first century and that the Gospels were written within the first century or very near its end is well supported. The precise decade for each Gospel, and especially for Matthew, Luke and John, depends on inferences that scholars weigh differently.',
      ar: 'إن كون رسائل القديس بولس من منتصف القرن الأول، وكون الأناجيل كُتبت في القرن الأول أو قرب نهايته، أمر تسنده الأدلة. أما العقد الدقيق لكل إنجيل، وبخاصة متى ولوقا ويوحنا، فيقوم على استنتاجات يزنها الباحثون بصور مختلفة.',
    },
  },
  whyExamine: {
    en: [
      'The distance between an event and the first account of it affects how much weight the account can bear. It is often said that the Gospels were composed generations after Jesus, when no one who knew Him was left. The evidence shows otherwise.',
      'Knowing when the Gospels were written lets the reader see them for what they are: early writings from the Church that had walked with the Lord, set down while His witnesses were still alive and preaching.',
    ],
    ar: [
      'تؤثر المسافة بين الحدث وأول رواية عنه في الثقل الذي تحتمله الرواية. وكثيرًا ما يُقال إن الأناجيل أُلّفت بعد يسوع بأجيال، حين لم يبقَ أحد ممن عرفوه. والشواهد تبيّن غير ذلك.',
      'ومعرفة زمن كتابة الأناجيل تتيح للقارئ أن يراها على حقيقتها: كتابات مبكرة من الكنيسة التي سارت مع الرب، دُوّنت وشهوده ما زالوا أحياء يكرزون.',
    ],
  },
  background: {
    en: [
      'Historians date ancient writings by several kinds of evidence. Internal evidence includes references to datable events, to rulers and to the situation of the community. External evidence includes quotations or allusions in later writers and the dates of the manuscripts. The dates in this article are ranges, because none of the Gospels has a firm external date.',
      'St Paul’s letters are the firmest anchor. Scholars generally agree that Romans, 1 and 2 Corinthians, Galatians, Philippians, 1 Thessalonians and Philemon are St Paul’s own, and they date them to roughly the early or middle 50s, with 1 Thessalonians sometimes put as early as about the year 50. St Paul’s own account in Galatians also shows that he visited Peter and James in Jerusalem a few years after his call, and in 1 Corinthians he passes on what he himself had received, including the creed-like statement about Christ’s death, burial and appearances. These are therefore tradition that already existed in the 30s and 40s, as the letters themselves say.',
      'Mark’s chapter on the coming destruction of the Temple does not describe the siege and fall of Jerusalem in AD 70 in detail, which fits a Gospel written before or around that time. Matthew and Luke draw on Mark, so they follow it in the decades after. Luke has a second volume, the Acts of the Apostles, which ends with St Paul under house arrest in Rome and says nothing of his trial or death, an ending that sits naturally with a time when those events were still recent.',
      'John is usually dated last, to the end of the first century, and the oldest manuscript fragment we have of any Gospel is a small piece of John (P52), which is placed in the second century on the style of its handwriting. The Church’s own tradition also puts John last, written by the beloved disciple in his old age. Whatever the exact decade, every Gospel belongs to the first century or its very end, not to some distant later age.',
    ],
    ar: [
      'يؤرخ المؤرخون الكتابات القديمة بأنواع من الشواهد. فالشواهد الداخلية تشمل الإشارة إلى أحداث يمكن تأريخها وإلى حكام وإلى حال الجماعة. والشواهد الخارجية تشمل الاقتباسات أو التلميحات عند كتّاب لاحقين وتواريخ المخطوطات. والتواريخ في هذه المقالة فترات، لأن أيًّا من الأناجيل لا تاريخ خارجيًا ثابتًا له.',
      'ورسائل القديس بولس هي الركيزة الأثبت. فالباحثون يتفقون عمومًا على أن رومية وكورنثوس الأولى والثانية وغلاطية وفيلبي وتسالونيكي الأولى وفليمون من كتابة القديس بولس نفسه، ويؤرخونها بنحو أوائل الخمسينيات أو منتصفها، وتُوضع تسالونيكي الأولى أحيانًا في نحو سنة 50. وتبيّن رواية القديس بولس في رسالة غلاطية أنه زار بطرس ويعقوب في أورشليم بعد دعوته بسنوات قليلة، وفي كورنثوس الأولى ينقل ما تسلّمه هو، ومنه العبارة الشبيهة بقانون الإيمان عن موت المسيح ودفنه وظهوراته. فهذه إذن تقاليد كانت قائمة في الثلاثينيات والأربعينيات، كما تقول الرسائل نفسها.',
      'وفصل مرقس عن خراب الهيكل المقبل لا يصف حصار أورشليم وسقوطها سنة 70 بتفصيل، وهذا يلائم إنجيلًا كُتب قبل ذلك الزمن أو نحوه. ومتى ولوقا يستقيان من مرقس، فيأتيان بعده في العقود التالية. ولوقا له جزء ثانٍ هو أعمال الرسل، وينتهي ببولس في الإقامة الجبرية في روما ولا يذكر شيئًا عن محاكمته أو موته، وهي نهاية تتفق بطبيعتها مع زمن كانت فيه تلك الأحداث قريبة العهد.',
      'ويُؤرَّخ يوحنا عادة أخيرًا، في نهاية القرن الأول، وأقدم شذرة مخطوطة لإنجيل ما قطعة صغيرة من يوحنا (P52) توضع في القرن الثاني بحسب أسلوب خطها. وتقليد الكنيسة نفسه يضع يوحنا أخيرًا، كتبه التلميذ المحبوب في شيخوخته. وأيًّا كان العقد الدقيق، فكل إنجيل ينتمي إلى القرن الأول أو نهايته، لا إلى عصر لاحق بعيد.',
    ],
  },
  glossary: ['gospel', 'synoptic-gospels', 'manuscript', 'papyrus', 'eyewitness', 'primary-source'],
  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'St Paul’s undisputed letters were written in roughly the 50s, and they pass on earlier traditions about Jesus’ death, burial and appearances.',
        ar: 'كُتبت رسائل القديس بولس المتفق عليها في نحو الخمسينيات، وهي تنقل تقاليد أقدم عن موت يسوع ودفنه وظهوراته.',
      },
      argumentType: 'historical',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'The letters describe a ministry and journeys that fit the middle of the first century, and St Paul himself says in 1 Corinthians that he handed on what he had received. In Galatians he tells how he met St Peter and St James in Jerusalem a few years after his call. The message he passed on therefore reaches back to the 30s.',
        ar: 'تصف الرسائل خدمة ورحلات تلائم منتصف القرن الأول، ويقول القديس بولس نفسه في كورنثوس الأولى إنه سلّم ما تسلّمه. وفي غلاطية يروي أنه التقى القديسين بطرس ويعقوب في أورشليم بعد دعوته بسنوات قليلة. فالبشارة التي سلّمها ترجع إذن إلى الثلاثينيات.',
      },
      limits: {
        en: 'It gives a range of years and not an exact date for any letter, and it does not date the traditions beyond saying they were earlier than the letter.',
        ar: 'يعطي مدى من السنين لا تاريخًا دقيقًا لأي رسالة، ولا يؤرخ التقاليد إلا بقول إنها أقدم من الرسالة.',
      },
      evidence: ['e1', 'e2'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'The four Gospels were written within the first century or very near its end, within about one to two generations of the events.',
        ar: 'كُتبت الأناجيل الأربعة في القرن الأول أو قرب نهايته، في غضون جيل إلى جيلين تقريبًا من الأحداث.',
      },
      argumentType: 'historical',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The internal evidence places Mark around the time of the Temple’s fall, and Matthew and Luke after Mark, in the decades that follow. A second-century fragment of John, already copied far from where the Gospel was written, sets a firm upper limit.',
        ar: 'تضع الشواهد الداخلية مرقس نحو زمن خراب الهيكل، ومتى ولوقا بعد مرقس في العقود التالية. وشذرة من يوحنا من القرن الثاني، نُسخت بعيدًا عن موضع كتابة الإنجيل، تضع حدًّا أعلى ثابتًا.',
      },
      limits: {
        en: 'A date within a generation does not show that a Gospel is accurate, and a later date does not show that it is not.',
        ar: 'التاريخ القريب لا يثبت دقة الإنجيل، والتاريخ المتأخر لا ينفيها.',
      },
      evidence: ['e3', 'e4', 'e5'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'St Luke wrote his Gospel and Acts as one work, and Acts ends with St Paul still alive and preaching in Rome.',
        ar: 'كتب القديس لوقا إنجيله وسفر الأعمال عملًا واحدًا، وينتهي سفر الأعمال والقديس بولس ما زال حيًّا يكرز في روما.',
      },
      argumentType: 'historical',
      assessment: 'actively_debated',
      rationale: {
        en: 'Acts closes with St Paul preaching openly in Rome for two years and says nothing of his death. St Luke had followed St Paul closely, so this ending points to a writer close in time to the events he records.',
        ar: 'يُختم سفر الأعمال بالقديس بولس يكرز علانية في روما سنتين، ولا يذكر شيئًا عن موته. وقد رافق القديس لوقا القديس بولس عن قرب، فهذه النهاية تدل على كاتب قريب زمنيًا من الأحداث التي يرويها.',
      },
      limits: {
        en: 'An argument from silence is weak in either direction.',
        ar: 'الاحتجاج بالسكوت ضعيف في الاتجاهين.',
      },
      evidence: ['e4'],
    },
  ],
  evidence: [
    {
      id: 'e1',
      sourceId: 'S62',
      locator: '1 Corinthians 15:3-7',
      role: 'supports',
      states: {
        en: 'St Paul says that he handed on what he himself had received: that Christ died for our sins and was buried, that he was raised on the third day, and that he appeared to Cephas, to the Twelve, to more than five hundred and to James.',
        ar: 'يقول القديس بولس إنه سلّم ما تسلمه هو: أن المسيح مات من أجل خطايانا ودُفن وقام في اليوم الثالث وظهر لصفا ثم للاثني عشر ثم لأكثر من خمسمئة ثم ليعقوب.',
      },
      inference: {
        en: 'Read as an ancient letter, the passage shows that the Christian message about Jesus’ death and appearances was in circulation before the letter was written, in the 50s. It is the earliest datable written witness to this tradition.',
        ar: 'تُظهر الفقرة، مقروءة رسالة قديمة، أن الرسالة المسيحية عن موت يسوع وظهوراته كانت متداولة قبل كتابة الرسالة في الخمسينيات. وهي أقدم شاهد مكتوب يمكن تأريخه لهذا التقليد.',
      },
      bible: { book: '1-corinthians', chapter: 15, verse: '3-7' },
    },
    {
      id: 'e2',
      sourceId: 'S62',
      locator: 'Galatians 1:18-2:2',
      role: 'supports',
      states: {
        en: 'St Paul says that three years after his call he went up to Jerusalem to visit Cephas and stayed with him fifteen days, saw also James the Lord’s brother, and that fourteen years later he went up again and set out his message before the leaders.',
        ar: 'يقول القديس بولس إنه بعد ثلاث سنين من دعوته صعد إلى أورشليم ليزور صفا وأقام عنده خمسة عشر يومًا، ورأى أيضًا يعقوب أخا الرب، وإنه بعد أربع عشرة سنة صعد ثانية وعرض كرازته على القادة.',
      },
      inference: {
        en: 'The letter places St Paul in contact with leading members of the Jerusalem Church within a few years of the events. It is a first-person claim, which historians weigh as such, and it fits a mid-first-century setting.',
        ar: 'تضع الرسالة القديس بولس على اتصال بقادة كنيسة أورشليم في غضون سنوات قليلة من الأحداث. وهي دعوى بضمير المتكلم يزنها المؤرخون على هذا الأساس، وتلائم بيئة منتصف القرن الأول.',
      },
      bible: { book: 'galatians', chapter: 1, verse: '18-19' },
    },
    {
      id: 'e3',
      sourceId: 'S62',
      locator: 'Mark 13:1-2',
      role: 'context',
      states: {
        en: 'Jesus foretells that not one stone of the Temple will be left upon another.',
        ar: 'يتنبأ يسوع بأنه لن يُترك في الهيكل حجر على حجر.',
      },
      inference: {
        en: 'Many historians infer a date for Mark near the war that ended in the Temple’s destruction in AD 70, because the Gospel speaks of the destruction in general terms. Those who accept the possibility of real prediction place the Gospel earlier, so the inference depends partly on whether prediction is allowed. The passage is read here as a clue, not a proof.',
        ar: 'يستنتج مؤرخون كثيرون تاريخًا لمرقس قرب الحرب التي انتهت بخراب الهيكل سنة 70، لأن الإنجيل يتكلم عن الخراب بعبارات عامة. ومن يقبلون إمكان التنبؤ الحقيقي يضعون الإنجيل أبكر، فيتوقف الاستنتاج جزئيًا على قبول التنبؤ. وتُقرأ الفقرة هنا قرينة لا برهانًا.',
      },
      bible: { book: 'mark', chapter: 13, verse: '1-2' },
    },
    {
      id: 'e4',
      sourceId: 'S62',
      locator: 'Luke 1:1-4; Acts 28:30-31',
      role: 'context',
      states: {
        en: 'Luke’s prologue speaks of many earlier accounts. Acts ends with St Paul in Rome, preaching for two years, with no mention of his trial’s outcome.',
        ar: 'تتكلم مقدمة لوقا عن روايات سابقة كثيرة. وينتهي سفر الأعمال ببولس في روما يكرز سنتين، دون ذكر نتيجة محاكمته.',
      },
      inference: {
        en: 'Luke’s Gospel is later than several earlier accounts, which means that it is not the first. The ending of Acts is used by some for an early dating of Luke-Acts and by others as an artistic stopping point.',
        ar: 'إنجيل لوقا أحدث من روايات سابقة عدة، أي أنه ليس الأول. وتُستعمل نهاية الأعمال عند بعضهم لتأريخ مبكر للوقا-أعمال، وعند آخرين نقطة توقف فنية.',
      },
      bible: { book: 'acts', chapter: 28, verse: '30-31' },
    },
    {
      id: 'e5',
      sourceId: 'S23',
      locator: 'whole work (database as a whole; no manuscript or reading cited)',
      role: 'context',
      states: {
        en: 'The Virtual Manuscript Room lists the oldest New Testament papyri with scholarly descriptions and dates. Among them is the fragment known as P52, a small piece of John, which palaeographers place in the second century.',
        ar: 'تسرد غرفة المخطوطات الافتراضية أقدم برديات العهد الجديد بأوصاف علمية وتواريخ. ومنها الشذرة المعروفة بـ P52، وهي قطعة صغيرة من يوحنا يضعها علماء الخطوط في القرن الثاني.',
      },
      inference: {
        en: 'A Gospel was already copied and in circulation, probably in Egypt, in the second century. This sets a ceiling, not a date for composition, and the fragment’s own date has a margin of error.',
        ar: 'كان إنجيل ما يُنسخ ويتداول، على الأرجح في مصر، في القرن الثاني. وهذا يضع سقفًا لا تاريخًا للتأليف، ولتاريخ الشذرة نفسها هامش خطأ.',
      },
    },
  ],
  objections: [
    {
      id: 'o1',
      statement: {
        en: 'The Gospels were written decades after the events, so the stories had time to grow into legends.',
        ar: 'كُتبت الأناجيل بعد الأحداث بعقود، فكان للقصص وقت لتتحول إلى أساطير.',
      },
      response: {
        en: [
          'The gap was not empty. In those years the apostles were preaching, the churches were praying, and the same message was being taught in Jerusalem, Antioch and Rome. The Gospels wrote down what the Church was already proclaiming.',
          'A generation is short by comparison with many ancient biographies, and the letters of St Paul show that the heart of the message, Christ’s death, burial, resurrection and appearances, was fixed and handed on well before the 50s. Legend needs time and distance from the witnesses; the Gospels had neither.',
        ],
        ar: [
          'لم تكن تلك المدة فراغًا. ففي هذه السنين كان الرسل يكرزون، والكنائس تصلي، والبشارة نفسها تُعلَّم في أورشليم وأنطاكية وروما. والأناجيل دوّنت ما كانت الكنيسة تكرز به من قبل.',
          'والجيل قصير بالمقارنة مع كثير من السير القديمة، وتبيّن رسائل القديس بولس أن قلب البشارة، أي موت المسيح ودفنه وقيامته وظهوراته، كان ثابتًا ومسلَّمًا قبل الخمسينيات بزمن. فالأسطورة تحتاج إلى وقت وبُعد عن الشهود، ولم يكن للأناجيل لا هذا ولا ذاك.',
        ],
      },
      limits: {
        en: 'A short interval does not guarantee that no legends formed, and it does not by itself show that accounts are accurate.',
        ar: 'المدة القصيرة لا تضمن ألا تتكون أساطير، ولا تبيّن بذاتها دقة الروايات.',
      },
      evidence: ['e1', 'e2'],
    },
    {
      id: 'o2',
      statement: {
        en: 'The Gospels describe the fall of Jerusalem, so they must have been written after AD 70.',
        ar: 'تصف الأناجيل سقوط أورشليم، فلا بد أنها كُتبت بعد سنة 70.',
      },
      response: {
        en: [
          'The Gospels do not describe the fall of Jerusalem; they record the Lord foretelling it. The words are in the language of the prophets, drawn from earlier Scripture, and they lack the details of the siege that a writer looking back would naturally add.',
          'To insist that the passage must be later is to assume beforehand that the Lord could not foresee the future. Christians do not assume that. Christ spoke of the Temple’s destruction, and it came to pass as He said.',
        ],
        ar: [
          'لا تصف الأناجيل سقوط أورشليم، بل تسجّل الرب يتنبأ به. والكلمات بلغة الأنبياء، مستمدة من الكتب السابقة، وتخلو من تفاصيل الحصار التي يضيفها بطبيعته كاتب ينظر إلى الوراء.',
          'والإصرار على أن الفقرة لا بد متأخرة هو افتراض مسبق بأن الرب لا يمكن أن يعرف المستقبل. والمسيحيون لا يفترضون ذلك. فقد تكلم المسيح عن خراب الهيكل، وتمّ كما قال.',
        ],
      },
      limits: {
        en: 'The argument turns on a prior view about prediction, so it cannot be settled by manuscripts.',
        ar: 'تتوقف الحجة على رأي سابق في التنبؤ، فلا تحسمها المخطوطات.',
      },
      evidence: ['e3'],
    },
    {
      id: 'o3',
      statement: {
        en: 'Our oldest Gospel manuscripts are from the second century or later, so we cannot know what the Gospels first said.',
        ar: 'أقدم مخطوطات الأناجيل عندنا من القرن الثاني أو بعده، فلا نعرف ما قالته الأناجيل أول مرة.',
      },
      response: {
        en: [
          'Every ancient book survives in copies made after it was written. For the New Testament the gap is short compared with most ancient authors, and there are thousands of manuscripts to compare, so the original wording can be known with great confidence.',
          'The date of writing and the date of the oldest copy are separate matters. A second-century copy of John, found far from where it was written, shows that the Gospel existed well before that copy was made.',
        ],
        ar: [
          'كل كتاب قديم يصلنا في نسخ صُنعت بعد كتابته. وفي العهد الجديد الفجوة قصيرة بالمقارنة مع أكثر الكتّاب القدماء، وهناك آلاف المخطوطات للمقارنة، فيمكن معرفة النص الأصلي بثقة كبيرة.',
          'وتاريخ الكتابة وتاريخ أقدم نسخة أمران منفصلان. فنسخة من يوحنا من القرن الثاني، وُجدت بعيدًا عن موضع كتابته، تبيّن أن الإنجيل كان موجودًا قبل صنع تلك النسخة بزمن.',
        ],
      },
      limits: {
        en: 'It does not remove the places where manuscripts differ.',
        ar: 'لا يزيل المواضع التي تختلف فيها المخطوطات.',
      },
      evidence: ['e5'],
    },
  ],
  christianResponse: {
    historical: {
      en: [
        'The letters of St Paul show that the core of the Christian message about Jesus was being preached in the 50s, and had been received before that. The Gospels were written in the first century, while people who had seen the Lord were still alive and could be asked. For a historian of the ancient world, that is a strong position.',
        'None of this requires the reader to accept inspiration first. It rests on the ordinary method of dating ancient works by their contents and their copies.',
      ],
      ar: [
        'تبيّن رسائل القديس بولس أن جوهر البشارة المسيحية عن يسوع كان يُكرز به في الخمسينيات، وكان قد تُسلِّم قبل ذلك. وكُتبت الأناجيل في القرن الأول، حين كان أناس رأوا الرب ما زالوا أحياء يمكن سؤالهم. وهذا موقع قوي في نظر مؤرخ العالم القديم.',
        'ولا يتطلب شيء من هذا أن يقبل القارئ الوحي أولًا. بل يقوم على المنهج المعتاد في تأريخ الأعمال القديمة بمحتواها ونسخها.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that the Holy Spirit guided the Evangelists, and she recalls the Lord’s promise that the Spirit would remind the disciples of all that He had said (John 14:26). The years between the events and the writing were years of the Church’s life, in which the apostolic witness was preached, remembered and prayed.',
      ],
      ar: [
        'تعترف الكنيسة بأن الروح القدس أرشد الإنجيليين، وتتذكر وعد الرب بأن الروح يذكّر التلاميذ بكل ما قاله (يوحنا ١٤: ٢٦). فالسنوات بين الأحداث والكتابة كانت سنوات من حياة الكنيسة، كُرزت فيها الشهادة الرسولية وتُذكّرت وصُلّيت.',
      ],
    },
  },
  coptic: null,
  disputed: {
    en: [
      'Scholars differ about the decade of each Gospel, about whether Matthew and Luke knew one another’s sources, and about whether the Gospel of John could belong to the earlier end of its range. Some argue that all the Gospels were written before AD 70; some place them into the second century. These are minority positions at the extremes, and the middle positions are better supported.',
      'They also differ about how much the date matters, since a Gospel can include earlier traditions and a Gospel written earlier can still be shaped by theology.',
    ],
    ar: [
      'يختلف الباحثون في عقد كل إنجيل، وفي هل عرف متى ولوقا مصادر أحدهما الآخر، وفي هل يمكن أن يقع إنجيل يوحنا في الطرف الأبكر من مداه. ويحتج بعضهم بأن الأناجيل كلها كُتبت قبل سنة 70، ويضع آخرون بعضها في القرن الثاني. وهذه مواقف أقلية في الطرفين، والمواقف الوسطى أحسن إسنادًا.',
      'ويختلفون أيضًا في مدى أهمية التاريخ، فالإنجيل قد يضم تقاليد أقدم، والإنجيل الأبكر قد يتشكل بلاهوت.',
    ],
  },
  conclusion: {
    en: 'St Paul’s letters come from the 50s, and they hand on a message received earlier still. The Gospels were written in the first century, from St Mark around AD 70 to St John toward its end. All of this lies within living memory of the Lord’s ministry, while His witnesses were still preaching. The Gospels are early writings, set down by the Church that knew Him, and they deserve to be read as the trustworthy witness they are.',
    ar: 'رسائل القديس بولس من الخمسينيات، وهي تسلّم بشارة تُسلِّمت قبلها. والأناجيل كُتبت في القرن الأول، من القديس مرقس نحو سنة 70 إلى القديس يوحنا قرب نهايته. وهذا كله في حدود الذاكرة الحية لخدمة الرب، وشهوده ما زالوا يكرزون. فالأناجيل كتابات مبكرة دوّنتها الكنيسة التي عرفته، وتستحق أن تُقرأ شهادةً أمينة كما هي.',
  },
  furtherReading: ['S23', 'S12', 'S13', 'S62'],
  related: ['who-wrote-the-gospels', 'oral-transmission', 'gospels-as-eyewitness', 'early-belief-vs-evidence', 'did-jesus-exist', 'has-bible-changed'],
};
