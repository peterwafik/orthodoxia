import type { Article } from '../types.ts';

export const article: Article = {
  id: 'earliest-sources-for-jesus',
  questionId: 'earliest-sources-for-jesus',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'Which written sources about Jesus survive from the earliest period, roughly when each was written, and how they relate to one another. It lists and orders the sources; it does not decide how reliable each Gospel is, who wrote it, or what the outside writers prove. Those questions have their own articles.',
    ar: 'ما المصادر المكتوبة عن يسوع التي بقيت من أقدم العصور، ومتى كُتب كلٌّ منها تقريبًا، وكيف يرتبط بعضها ببعض. يعرض المقال المصادر ويرتّبها، ولا يفصل في درجة موثوقية كل إنجيل ولا في كاتبه ولا في ما تثبته الكتابات الخارجية، فلتلك الأسئلة مقالاتها.',
  },
  shortAnswer: {
    en: 'The earliest surviving writings that speak of Jesus are the letters of St Paul, usually dated to the AD 50s, some twenty years after the crucifixion. They already pass on short summaries of what Jesus did and what Christians believed about him. The four Gospels come next, usually placed between about AD 65 and AD 100, with Mark generally thought to be the earliest. Writers outside the Church (Josephus, Tacitus, Pliny) and early Christian writers such as Ignatius follow from the 90s onward. No source survives from Jesus’ own lifetime.',
    ar: 'أقدم الكتابات الباقية التي تتحدث عن يسوع هي رسائل القديس بولس، التي يؤرَّخ أغلبها عادةً في خمسينيات القرن الأول، أي بعد الصلب بنحو عشرين سنة. وهي تنقل أصلًا ملخصات قصيرة لما فعله يسوع وما آمن به المسيحيون عنه. ثم تأتي الأناجيل الأربعة، وتوضع عادةً بين نحو ٦٥م ونحو ١٠٠م، ويُرجَّح عمومًا أن مرقس أقدمها. وتتبعها منذ التسعينيات كتابات من خارج الكنيسة (يوسيفوس وتاكيتوس وبليني) وكتّاب مسيحيون مبكرون مثل إغناطيوس. ولا يوجد مصدر باقٍ من زمن حياة يسوع نفسه.',
  },
  quickPoints: {
    en: [
      'St Paul’s letters are the earliest surviving Christian writings and come from about two decades after the crucifixion. In them he reports that he met Peter and James, and he repeats short summaries of what was handed on to him.',
      'The four Gospels are usually dated between about AD 65 and AD 100. Mark is widely held to be the earliest, and Matthew and Luke are widely held to have used it; a minority of scholars and some traditions hold that Matthew came first.',
      'Luke tells his reader that many accounts already existed and that he drew on people who had been eyewitnesses from the beginning. That is the writer’s own statement, read here as an ancient document.',
      'Outside the Church, Josephus (c. AD 93–94) and Tacitus (c. AD 115–120) give short notices. They add little about Jesus’ ministry, but they are not Christian voices.',
      'Dates are ranges, not exact years, and a source’s date does not by itself tell us how reliable it is.',
    ],
    ar: [
      'رسائل القديس بولس أقدم الكتابات المسيحية الباقية، وتعود إلى نحو عقدين بعد الصلب. ويذكر فيها أنه التقى بطرس ويعقوب، ويكرر ملخصات قصيرة تسلّمها مما نُقل إليه.',
      'تؤرَّخ الأناجيل الأربعة عادةً بين نحو ٦٥م ونحو ١٠٠م. ويُرجَّح على نطاق واسع أن مرقس أقدمها، وأن متى ولوقا استفادا منه، بينما يرى بعض الباحثين وبعض التقاليد أن متى كُتب أولًا.',
      'يقول لوقا لقارئه إن روايات كثيرة سبقته، وإنه استفاد من أناس كانوا شهود عيان منذ البدء. وهذا قول الكاتب نفسه، يُقرأ هنا بوصفه وثيقة قديمة.',
      'ومن خارج الكنيسة يقدّم يوسيفوس (نحو ٩٣–٩٤م) وتاكيتوس (نحو ١١٥–١٢٠م) إشارات قصيرة. وهي تضيف القليل عن خدمة يسوع، لكنها ليست أصواتًا مسيحية.',
      'التواريخ مدًى زمنيّ لا سنوات محددة، وتاريخ المصدر وحده لا يخبرنا بمدى موثوقيته.',
    ],
  },
  argumentTypes: ['historical', 'textual'],
  assessment: {
    label: 'supported_disputed_details',
    explanation: {
      en: 'The order of the sources is well supported: St Paul’s letters before the Gospels, and the Gospels before the outside notices. The exact dates, the relationship between the Gospels, and the authorship of each are disputed and are given as ranges. The label covers the order and the general ranges, not any single year.',
      ar: 'ترتيب المصادر مدعوم جيدًا: رسائل القديس بولس قبل الأناجيل، والأناجيل قبل الإشارات الخارجية. أما التواريخ الدقيقة والعلاقة بين الأناجيل ونسبة كل منها إلى كاتبه ففيها خلاف، ولذلك تُعرض مدًى زمنيًّا. وتغطي التسمية الترتيب والمدى العام لا سنة بعينها.',
    },
  },
  whyExamine: {
    en: [
      'When people say that the Gospels were written long after the events, or that we have nothing early, they are usually relying on a rough picture of the sources. A reader deserves to see the actual list, with the dates and the reasons for them, so that a statement such as "twenty years" or "fifty years" can be checked.',
      'The list also shows what kind of evidence we have. Most of it comes from believers, because it was believers who cared enough to write about Jesus. That is not a reason to set it aside, and it is not a reason to treat it as neutral. It is a fact about the evidence that every honest account must state.',
    ],
    ar: [
      'حين يقول البعض إن الأناجيل كُتبت بعد الأحداث بزمن طويل، أو إنه ليس لدينا شيء مبكر، فهم يعتمدون عادةً على صورة تقريبية للمصادر. ومن حق القارئ أن يرى القائمة الفعلية بتواريخها وأسبابها، حتى يمكن التحقق من عبارات مثل «عشرين سنة» أو «خمسين سنة».',
      'وتُظهر القائمة أيضًا نوع الأدلة التي بين أيدينا. فمعظمها من المؤمنين، لأن المؤمنين هم الذين اهتموا بالكتابة عن يسوع. وهذا ليس سببًا لإهمالها، وليس سببًا لاعتبارها محايدة. إنه حقيقة عن الأدلة ينبغي أن يذكرها كل عرض أمين.',
    ],
  },
  background: {
    en: [
      'Jesus was crucified under Pontius Pilate, who governed Judea from about AD 26 to 36, so the date of his death falls somewhere in the early 30s. For a while the message about him travelled by speech: preaching, teaching, worship and shared memory. Writing came gradually, first in letters to communities that already existed, and later in connected narratives.',
      'St Paul’s letters were occasional letters, not biographies. They answer questions in particular churches and mention Jesus’ life only where the question needs it. The Gospels are a different kind of writing: they tell the story of Jesus’ public life, death and resurrection in the order that each writer chose.',
      'The Church receives the four Gospels as the apostolic witness to Christ. In the Coptic tradition St Mark the Evangelist is the founder of the Church of Alexandria. This article reads the sources as ancient documents so that its historical points do not depend on that faith, and the theological section says what the Church adds.',
    ],
    ar: [
      'صُلب يسوع في ولاية بيلاطس البنطي الذي حكم اليهودية من نحو ٢٦م إلى ٣٦م، فيقع تاريخ موته في أوائل الثلاثينيات. وظلّت الرسالة عنه تنتقل زمنًا بالكلام: كرازةً وتعليمًا وعبادةً وذاكرةً مشتركة. وجاءت الكتابة تدريجيًا، أولًا في رسائل إلى جماعات قائمة، ثم في سرديات متصلة.',
      'كانت رسائل القديس بولس رسائل مناسبات لا سِيَرًا. فهي تجيب عن أسئلة في كنائس محددة، ولا تذكر حياة يسوع إلا حيث يحتاج السؤال. أما الأناجيل فنوع آخر من الكتابة، إذ تروي حياة يسوع العلنية وموته وقيامته بالترتيب الذي اختاره كل كاتب.',
      'وتقبل الكنيسة الأناجيل الأربعة شهادةً رسولية للمسيح. وفي التقليد القبطي القديس مرقس الإنجيلي مؤسس كنيسة الإسكندرية. ويقرأ هذا المقال المصادر بوصفها وثائق قديمة حتى لا تتوقف نقاطه التاريخية على ذلك الإيمان، ثم يقول القسم اللاهوتي ما تضيفه الكنيسة.',
    ],
  },
  glossary: ['primary-source', 'secondary-source', 'eyewitness', 'independent-attestation', 'gospel', 'synoptic-gospels', 'manuscript'],

  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'St Paul’s letters are the earliest surviving writings that speak of Jesus, and they were written some twenty years after the crucifixion.',
        ar: 'رسائل القديس بولس أقدم الكتابات الباقية التي تتحدث عن يسوع، وقد كُتبت بعد الصلب بنحو عشرين سنة.',
      },
      argumentType: 'historical',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'St Paul himself gives a relative chronology in Galatians, and his stay in Corinth can be tied to a Roman proconsul named in Acts. The letters therefore belong to the middle of the first century. No Gospel is placed as early by the usual methods.',
        ar: 'يقدّم القديس بولس نفسه تسلسلًا نسبيًا في رسالة غلاطية، ويمكن ربط إقامته في كورنثوس بوالٍ روماني مذكور في سفر الأعمال. فالرسائل إذن من منتصف القرن الأول. ولا يُوضع أي إنجيل في زمن مبكر كهذا بالطرق المعتادة.',
      },
      limits: {
        en: 'St Paul was not a follower of Jesus during his ministry, and the letters tell us little of its details. The letters give a date for St Paul’s writing, not for the events he reports.',
        ar: 'لم يكن القديس بولس من أتباع يسوع أثناء خدمته، وتخبرنا الرسائل بالقليل من تفاصيلها. والرسائل تعطي تاريخًا لكتابة القديس بولس لا لوقوع الأحداث التي يرويها.',
      },
      evidence: ['e1', 'e2'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'St Paul passes on short summaries that he says he received from others, so some material about Jesus is older than his letters.',
        ar: 'ينقل القديس بولس ملخصات قصيرة يقول إنه تسلّمها من غيره، فبعض المادة عن يسوع أقدم من رسائله.',
      },
      argumentType: 'historical',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'In 1 Corinthians he uses the language of handing on and receiving for the Lord’s Supper and for the summary of the death, burial and appearances of Christ (1 Corinthians 15:3–7). This indicates that he is drawing on material that already existed.',
        ar: 'يستعمل القديس بولس في رسالة كورنثوس الأولى لغة التسليم والتسلّم عن عشاء الرب وعن ملخص موت المسيح ودفنه وظهوراته (١ كورنثوس ١٥: ٣–٧). وهذا يدل على أنه يستند إلى مادة سابقة.',
      },
      limits: {
        en: 'How early this material is, and where St Paul received it, is discussed in the article on the Pauline tradition. It cannot be dated more closely here.',
        ar: 'ما مدى قِدَم هذه المادة ومن أين تسلّمها القديس بولس فيُعالج في مقال التقليد البولسي. ولا يمكن تحديد تاريخها بدقة أكبر هنا.',
      },
      evidence: ['e2'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'The four Gospels were written after St Paul’s main letters, in the decades around and after AD 70, and Mark is generally thought to be the earliest.',
        ar: 'كُتبت الأناجيل الأربعة بعد رسائل القديس بولس الرئيسية، في العقود المحيطة بسنة ٧٠م وما بعدها، ويُرجَّح عمومًا أن مرقس أقدمها.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'Matthew, Mark and Luke share so much wording and order that they are plainly related, and most scholars explain this by Mark’s use by the other two. Luke’s opening shows he knew of earlier written accounts. The range for all four is wide, since the Gospels name no date for themselves.',
        ar: 'يشترك متى ومرقس ولوقا في كثير من الألفاظ والترتيب بحيث يبدو ارتباطها واضحًا، ويفسّر أكثر الباحثين ذلك باستعمال الاثنين الآخرين لمرقس. وتبيّن مقدمة لوقا أنه عرف روايات مكتوبة سابقة. والمدى واسع للأناجيل الأربعة، إذ لا يذكر أي منها تاريخ كتابته.',
      },
      limits: {
        en: 'Some scholars place the Gospels earlier, some later, and a minority hold that Matthew was first. The order of the three Synoptic Gospels, and the date of John, are debated; the article on the dating of the Gospels discusses the evidence.',
        ar: 'يضع بعض الباحثين الأناجيل أبكر وبعضهم أحدث، ويرى فريق قليل أن متى كان الأول. وترتيب الأناجيل الثلاثة الإزائية وتاريخ يوحنا محل نقاش، ومقال تاريخ كتابة الأناجيل يعالج الأدلة.',
      },
      evidence: ['e4'],
    },
    {
      id: 'c4',
      proposition: {
        en: 'Writers outside the Church, and early Christian writers outside the New Testament, begin to mention Jesus from the 90s onward, and they add little about his ministry.',
        ar: 'يبدأ كتّاب من خارج الكنيسة وكتّاب مسيحيون مبكرون من خارج العهد الجديد بذكر يسوع منذ التسعينيات، ولا يضيفون إلا القليل عن خدمته.',
      },
      argumentType: 'historical',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'Josephus, Tacitus and Ignatius are firmly dated, and what they say about Jesus is brief: that he had a brother, that he was put to death under Pilate, and that he was baptized by John and truly suffered.',
        ar: 'يوسيفوس وتاكيتوس وإغناطيوس مؤرَّخون بثقة، وما يقولونه عن يسوع موجز: أن له أخًا، وأنه أُعدم في ولاية بيلاطس، وأنه اعتمد على يد يوحنا وتألم حقًا.',
      },
      limits: {
        en: 'Ignatius is a Christian bishop, not an outsider. None of these writers saw Jesus, and later writers can depend on the Gospels. These sources help us understand the early movement; they do not supply a second, independent biography.',
        ar: 'إغناطيوس أسقف مسيحي لا غريب عن الكنيسة. ولم يرَ أيٌّ من هؤلاء الكتّاب يسوع، وقد يعتمد المتأخرون على الأناجيل. وهذه المصادر تعين على فهم الحركة المبكرة ولا تقدم سيرة ثانية مستقلة.',
      },
      evidence: ['e5', 'e6', 'e7'],
    },
  ],

  evidence: [
    {
      id: 'e1',
      sourceId: 'S62',
      locator: 'Galatians 1:18–19',
      role: 'supports',
      states: {
        en: 'St Paul says that after three years he went up to Jerusalem to get to know Peter and stayed fifteen days, and that he saw no other apostle except James, the Lord’s brother. Later in the same letter he speaks of a further visit fourteen years after.',
        ar: 'يقول القديس بولس إنه صعد بعد ثلاث سنوات إلى أورشليم ليتعرف على بطرس وأقام عنده خمسة عشر يومًا، ولم ير رسولًا آخر إلا يعقوب أخا الرب. ويذكر في الرسالة نفسها زيارة أخرى بعد أربع عشرة سنة.',
      },
      inference: {
        en: 'This gives a relative chronology that places St Paul’s contact with Jesus’ closest circle within a few years of his own turning, which was itself within a few years of the crucifixion. It is the writer’s own report in a letter and is read here as an ancient document.',
        ar: 'يعطي هذا تسلسلًا نسبيًا يضع اتصال القديس بولس بالدائرة الأقرب ليسوع في غضون سنوات قليلة من تحوّله، وكان تحوّله نفسه في غضون سنوات قليلة من الصلب. وهو تقرير الكاتب نفسه في رسالة، ويُقرأ هنا بوصفه وثيقة قديمة.',
      },
      bible: { book: 'galatians', chapter: 1, verse: '18-19' },
    },
    {
      id: 'e2',
      sourceId: 'S62',
      locator: '1 Corinthians 15:3–7',
      role: 'supports',
      states: {
        en: 'St Paul reminds the Corinthians of what he handed on to them, which he himself had received: that Christ died for sins according to the Scriptures, was buried, was raised on the third day, and appeared to Peter, to the Twelve, to many others at once, to James and to all the apostles.',
        ar: 'يذكّر القديس بولس أهل كورنثوس بما سلّمه إليهم، وهو ما تسلّمه هو نفسه: أن المسيح مات من أجل خطايانا حسب الكتب، ودُفن، وقام في اليوم الثالث، وظهر لبطرس ثم للاثني عشر، ثم لأكثر من خمسمائة أخ دفعة واحدة، ثم ليعقوب ثم لجميع الرسل.',
      },
      inference: {
        en: 'The wording of receiving and handing on indicates a summary older than the letter. The letter itself is usually dated to the AD 50s. The passage reports what the first Christians believed and said; the question of how early the summary is, and what it proves, is taken up in the articles on this passage.',
        ar: 'تدل ألفاظ التسلّم والتسليم على ملخص أقدم من الرسالة. وتؤرَّخ الرسالة نفسها عادةً في الخمسينيات. والفقرة تروي ما آمن به المسيحيون الأوائل وما قالوه؛ أما مدى قِدم الملخص وما يثبته فيعالجه المقالان المخصصان لهذه الفقرة.',
      },
      bible: { book: '1-corinthians', chapter: 15, verse: '3-7' },
    },
    {
      id: 'e4',
      sourceId: 'S62',
      locator: 'Luke 1:1–4',
      role: 'context',
      states: {
        en: 'The writer says that many have undertaken to set down an account of the events, following what was handed on by those who were eyewitnesses from the beginning and servants of the word, and that he has investigated everything carefully and now writes an orderly account for Theophilus.',
        ar: 'يقول الكاتب إن كثيرين أخذوا على أنفسهم تدوين رواية الأحداث وفق ما سلّمه الذين كانوا منذ البدء معاينين وخدامًا للكلمة، وإنه تتبّع كل شيء بدقة ويكتب الآن رواية مرتبة لثاوفيلس.',
      },
      inference: {
        en: 'The writer is himself witness that written accounts existed before his, and that he treated the testimony of eyewitnesses as important. This is the writer’s own description of his method, not an independent check on it. It does not fix the date of any Gospel.',
        ar: 'الكاتب نفسه شاهد على أن روايات مكتوبة سبقته، وعلى أنه عدّ شهادة المعاينين مهمة. وهذا وصف الكاتب لمنهجه، لا فحص مستقل له. ولا يحدد تاريخ أي إنجيل.',
      },
      bible: { book: 'luke', chapter: 1, verse: '1-4' },
    },
    {
      id: 'e5',
      sourceId: 'S03',
      locator: 'Antiquities 20.200',
      role: 'context',
      states: {
        en: 'Josephus, a Jewish historian, describes the stoning of James, called the brother of Jesus who was called Christ, under a high priest in about AD 62.',
        ar: 'يصف يوسيفوس، وهو مؤرخ يهودي، رجم يعقوب المسمّى أخا يسوع الذي يُدعى المسيح في عهد رئيس كهنة نحو سنة ٦٢م.',
      },
      inference: {
        en: 'It is written about thirty years after the event, around AD 93–94, and is a short outside notice. It is useful for the order of the sources and adds nothing about Jesus’ ministry.',
        ar: 'كُتبت بعد الحدث بنحو ثلاثين سنة، أي نحو ٩٣–٩٤م، وهي إشارة خارجية قصيرة. تفيد في ترتيب المصادر ولا تضيف شيئًا عن خدمة يسوع.',
      },
    },
    {
      id: 'e6',
      sourceId: 'S01',
      locator: 'Annals 15.44',
      role: 'context',
      states: {
        en: 'Tacitus reports that the Christians took their name from Christus, whom Pilate had executed in the reign of Tiberius.',
        ar: 'يروي تاكيتوس أن المسيحيين أخذوا اسمهم من «كرستوس» الذي أعدمه بيلاطس في عهد طيباريوس.',
      },
      inference: {
        en: 'A Roman writer of about AD 115–120 treats Jesus’ execution under Pilate as established. His own source is unknown. See the articles on non-Christian sources for the detailed discussion.',
        ar: 'كاتب روماني نحو ١١٥–١٢٠م يعدّ إعدام يسوع في ولاية بيلاطس أمرًا ثابتًا. ومصدره مجهول. وتجد النقاش التفصيلي في مقالات المصادر غير المسيحية.',
      },
    },
    {
      id: 'e7',
      sourceId: 'S54',
      locator: 'Letter to the Smyrnaeans 1',
      role: 'context',
      states: {
        en: 'Ignatius of Antioch, writing as a bishop in the early second century, speaks of Christ as truly of the line of David, truly born of a virgin, baptized by John, and truly nailed to the cross under Pontius Pilate and Herod the tetrarch.',
        ar: 'يتحدث إغناطيوس الأنطاكي، وهو يكتب أسقفًا في أوائل القرن الثاني، عن المسيح بوصفه من نسل داود حقًا، ومولودًا من عذراء حقًا، ومعتمدًا من يوحنا، ومسمَّرًا على الصليب حقًا في عهد بيلاطس البنطي وهيرودس رئيس الربع.',
      },
      inference: {
        en: 'This is a Christian writer, so it shows what the Church taught and believed only some decades after the Gospels, and that it knew the same outline. It does not independently confirm that outline.',
        ar: 'هذا كاتب مسيحي، فيبين ما علّمته الكنيسة وآمنت به بعد الأناجيل بعقود قليلة، وأنها عرفت المخطط نفسه. وهو لا يؤكد هذا المخطط تأكيدًا مستقلًا.',
      },
    },
    {
      id: 'e8',
      sourceId: 'S10',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'context',
      states: {
        en: 'John Meier’s first volume of A Marginal Jew sets out the sources for the historical Jesus and the method and criteria for using them, applying historical methods that do not assume faith.',
        ar: 'يعرض المجلد الأول من كتاب «يهودي هامشي» لجون ماير مصادر يسوع التاريخي ومنهج استعمالها ومعاييره، مطبِّقًا مناهج تاريخية لا تفترض الإيمان.',
      },
      inference: {
        en: 'Cited as a place to follow the method in depth. No particular conclusion of the book is attributed to it here.',
        ar: 'يُذكر مرجعًا لمتابعة المنهج بتعمق. ولا تُنسب إلى الكتاب هنا نتيجة بعينها.',
      },
    },
    {
      id: 'e9',
      sourceId: 'S12',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'context',
      states: {
        en: 'Richard Bauckham argues that the Gospels rest on the testimony of eyewitnesses and those close to them.',
        ar: 'يحاجّ ريتشارد بوكهام بأن الأناجيل تقوم على شهادة معاينين ومن قرُبوا منهم.',
      },
      inference: {
        en: 'This is one scholarly position and is contested. It is listed so the reader can weigh it against the opposite view in the next entry.',
        ar: 'هذا موقف علمي واحد وهو محل نقاش. ويُذكر ليتمكن القارئ من موازنته بالرأي المقابل في الفقرة التالية.',
      },
    },
    {
      id: 'e10',
      sourceId: 'S13',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'challenges',
      states: {
        en: 'Bart Ehrman, a non-Christian historian, uses research on memory and oral tradition to ask how reliably stories about Jesus were remembered and changed before they were written down.',
        ar: 'يستعين بارت إيرمان، وهو مؤرخ غير مسيحي، بأبحاث الذاكرة والتقليد الشفهي ليسأل إلى أي حد حُفظت القصص عن يسوع بأمانة وتغيّرت قبل أن تُدوَّن.',
      },
      inference: {
        en: 'This is the main modern challenge to treating early material as a clear window on Jesus. It does not deny that the early sources exist or deny their order.',
        ar: 'هذا أهم تحدٍّ حديث لاعتبار المادة المبكرة نافذة صافية على يسوع. وهو لا ينكر وجود المصادر المبكرة ولا ترتيبها.',
      },
    },
  ],

  objections: [
    {
      id: 'o1',
      statement: {
        en: 'The Gospels are anonymous, written decades later, and nobody knows who wrote them. We therefore have no early source at all.',
        ar: 'الأناجيل مجهولة الكاتب، وكُتبت بعد عقود، ولا أحد يعرف من كتبها. فليس لدينا إذن مصدر مبكر على الإطلاق.',
      },
      response: {
        en: [
          'The Gospel texts do not name their authors in the body of the text, and the names Matthew, Mark, Luke and John come to us through early Christian tradition. That is a real limit and the article on authorship takes it up. The Church receives the traditional attributions.',
          'But the objection overlooks the evidence that is not a Gospel. St Paul’s letters are named, early and datable, and they already attest the core of the message. A gap of twenty to fifty years is also normal for ancient history. The question is not whether early evidence exists but what can be built on it.',
        ],
        ar: [
          'لا تذكر نصوص الأناجيل أسماء كاتبيها في متنها، وتصلنا أسماء متى ومرقس ولوقا ويوحنا عبر التقليد المسيحي المبكر. وهذا حدّ حقيقي يعالجه مقال النسبة، وتقبل الكنيسة النسبة التقليدية.',
          'لكن الاعتراض يغفل أدلة ليست إنجيلًا. فرسائل القديس بولس مسماة ومبكرة ويمكن تأريخها، وهي تشهد أصلًا بجوهر الرسالة. كما أن فجوة من عشرين إلى خمسين سنة أمر معتاد في التاريخ القديم. والسؤال ليس هل توجد أدلة مبكرة، بل ما الذي يمكن أن يُبنى عليها.',
        ],
      },
      limits: {
        en: 'This does not settle who wrote each Gospel or whether the Gospels are independent eyewitness accounts.',
        ar: 'لا يحسم هذا من كتب كل إنجيل ولا هل الأناجيل شهادات عيان مستقلة.',
      },
      evidence: ['e1', 'e2', 'e4'],
    },
    {
      id: 'o2',
      statement: {
        en: 'St Paul says almost nothing about Jesus’ life, so his letters are no use for learning about the historical Jesus.',
        ar: 'لا يقول القديس بولس تقريبًا شيئًا عن حياة يسوع، فلا نفع في رسائله لمعرفة يسوع التاريخي.',
      },
      response: {
        en: [
          'It is true that St Paul gives few details of the ministry, and that he did not write to tell a story the churches already knew. His interest is in the death and resurrection and in life in Christ.',
          'What he does say is early and specific: Jesus’ brother James, the Lord’s Supper on the night of betrayal, the burial, a command of the Lord on marriage. For the dating of the sources this matters more than the number of details.',
        ],
        ar: [
          'صحيح أن القديس بولس لا يعطي إلا تفاصيل قليلة عن الخدمة، وأنه لم يكتب ليروي قصة تعرفها الكنائس. فاهتمامه بالموت والقيامة وبالحياة في المسيح.',
          'لكن ما يقوله مبكر ومحدد: يعقوب أخو يسوع، وعشاء الرب في ليلة التسليم، والدفن، ووصية للرب في الزواج. وهذا أهم لتأريخ المصادر من عدد التفاصيل.',
        ],
      },
      limits: {
        en: 'It does not show how much of the Gospel narrative St Paul knew, and it cannot answer questions about the ministry itself.',
        ar: 'لا يبين ذلك مقدار ما عرفه القديس بولس من السرد الإنجيلي، ولا يجيب عن الأسئلة المتعلقة بالخدمة نفسها.',
      },
      evidence: ['e1', 'e2'],
    },
    {
      id: 'o3',
      statement: {
        en: 'Almost every early source was written by believers, so it is propaganda and not evidence.',
        ar: 'كاد كل مصدر مبكر يكتبه مؤمنون، فهو دعاية لا دليل.',
      },
      response: {
        en: [
          'A source with a standpoint is still evidence, because historians read nearly all ancient sources this way. A writer who believed in a person is an important witness to what was believed and said about that person, and the standpoint must be taken into account in using him.',
          'The outside notices and the objections of early critics, whom the article on outside sources discusses, supply a check from non-believers, though a limited one. Sceptical readers will rightly ask for caution; the article asks for the same.',
        ],
        ar: [
          'المصدر ذو الموقف يظل دليلًا، لأن المؤرخين يقرؤون تقريبًا كل المصادر القديمة هكذا. والكاتب المؤمن بشخص شاهد مهم على ما قيل وما اعتُقد فيه، ويجب أن يؤخذ موقفه في الحسبان عند استعماله.',
          'وتقدّم الإشارات الخارجية واعتراضات النقّاد الأوائل، التي يناقشها مقال المصادر الخارجية، فحصًا من غير المؤمنين وإن كان محدودًا. ومن حق القارئ المتشكك أن يطلب الحذر، والمقال يطلبه كذلك.',
        ],
      },
      limits: {
        en: 'It does not show that the believers’ accounts are accurate. It shows only that they are legitimate evidence to be weighed.',
        ar: 'لا يبين ذلك أن روايات المؤمنين دقيقة، بل أنها دليل مشروع ينبغي وزنه.',
      },
      evidence: ['e5', 'e6', 'e10'],
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'The shape of the evidence is as follows. Letters of a named author from the AD 50s already speak of Jesus’ death and resurrection, of his brother James and of the Lord’s Supper. Narrative accounts follow within a generation or two. Outside writers and a second-century bishop confirm the outline from different directions. This is a fairly early and varied set of sources for an ancient figure of Jesus’ social standing.',
        'The sources also differ from one another in detail, and one can disagree about how closely the Gospels reflect eyewitness memory. The Christian historian can say that the evidence is early enough to justify taking it seriously, and that the proper next step is to read each source for what it is.',
      ],
      ar: [
        'شكل الأدلة كالآتي: رسائل لكاتب معروف من الخمسينيات تتحدث أصلًا عن موت يسوع وقيامته وعن أخيه يعقوب وعن عشاء الرب. وتتبعها روايات سردية في جيل أو جيلين. ويؤكد كتّاب من خارج الكنيسة وأسقف من القرن الثاني المخطط من جهات مختلفة. وهذه مجموعة مصادر مبكرة ومتنوعة نسبيًا بالقياس إلى شخصية قديمة بمكانة يسوع الاجتماعية.',
        'وتختلف المصادر أيضًا في التفاصيل، ويجوز الاختلاف في مدى انعكاس ذاكرة المعاينين في الأناجيل. ويستطيع المؤرخ المسيحي أن يقول إن الأدلة مبكرة بما يكفي لأخذها بجدية، وإن الخطوة التالية الصحيحة قراءة كل مصدر بحسب طبيعته.',
      ],
    },
    theological: {
      en: [
        'The Church does not receive the Gospels only because historians can date them. It receives them as the witness of the Apostles, handed on in the life of the Church and read in her liturgy, and as Scripture inspired by the Holy Spirit. Historical study of the sources is a way of understanding that witness better; it does not replace it.',
      ],
      ar: [
        'لا تقبل الكنيسة الأناجيل لمجرد أن المؤرخين يستطيعون تأريخها. فهي تقبلها شهادةً للرسل سُلّمت في حياة الكنيسة وتُقرأ في صلواتها الطقسية، وكتابًا مقدسًا أوحى به الروح القدس. ودراسة المصادر تاريخيًا طريق لفهم تلك الشهادة فهمًا أفضل، وليست بديلًا عنها.',
      ],
    },
  },
  coptic: {
    en: [
      'The Coptic Church honours St Mark the Evangelist as the founder of the Church of Alexandria and as its first bishop and martyr, and she keeps the Gospel as the centre of her worship: it is chanted and read at every liturgy, and the congregation stands for it. For Copts the Gospels are therefore first of all liturgical and apostolic books, received as the Church’s own memory of Christ. This sits alongside the historical questions above without replacing them.',
    ],
    ar: [
      'تكرّم الكنيسة القبطية القديس مرقس الإنجيلي مؤسسًا لكنيسة الإسكندرية وأول أساقفتها وشهيدها، وتجعل الإنجيل محور عبادتها: يُرتَّل ويُقرأ في كل قداس ويقف الشعب لسماعه. فالأناجيل عند الأقباط كتب طقسية ورسولية أولًا، تُتسلَّم ذاكرةً للكنيسة عن المسيح. وهذا يجتمع مع الأسئلة التاريخية أعلاه ولا يحل محلها.',
    ],
  },
  disputed: {
    en: [
      'Disputed: the exact dates of every Gospel, especially John and Mark, and how they relate to the fall of Jerusalem in AD 70; whether Mark was the first Gospel; how much of St Paul’s summaries goes back to Jesus’ own circle; whether the Gospels preserve eyewitness testimony or a more developed tradition; and the place of other early writings that are not in the New Testament, whose dates are themselves debated. This article does not weigh those writings.',
    ],
    ar: [
      'موضع الخلاف: التواريخ الدقيقة لكل إنجيل، ولا سيما يوحنا ومرقس، وعلاقتها بسقوط أورشليم سنة ٧٠م؛ وهل كان مرقس أول الأناجيل؛ وكم من ملخصات القديس بولس يرجع إلى دائرة يسوع نفسه؛ وهل تحفظ الأناجيل شهادة معاينين أم تقليدًا أكثر نموًا؛ ومكانة كتابات مبكرة أخرى خارج العهد الجديد تُناقش تواريخها أيضًا. ولا يزن هذا المقال تلك الكتابات.',
    ],
  },
  conclusion: {
    en: 'Our earliest sources are St Paul’s letters from the AD 50s, then the Gospels in the following decades, then outside and early Christian writers. None comes from Jesus’ lifetime, all have a standpoint, and the dates are ranges. The order is secure enough to build on, and the next questions are who wrote them and how they should be used.',
    ar: 'أقدم مصادرنا رسائل القديس بولس من الخمسينيات، ثم الأناجيل في العقود التالية، ثم كتّاب من خارج الكنيسة ومسيحيون مبكرون. ولا يعود أيٌّ منها إلى زمن حياة يسوع، ولكلٍّ موقفه، والتواريخ مدًى زمنيّ. والترتيب ثابت بما يكفي للبناء عليه، والأسئلة التالية: من كتبها، وكيف تُستعمل.',
  },
  furtherReading: ['S10', 'S11', 'S12', 'S13', 'S07', 'S54'],
  related: [
    'did-jesus-exist',
    'non-christian-sources-establish',
    'dating-ancient-sources',
    'who-wrote-the-gospels',
    'when-were-the-gospels-written',
    'gospels-as-eyewitness',
    'date-of-the-pauline-tradition',
    'noncanonical-gospels',
  ],
};
