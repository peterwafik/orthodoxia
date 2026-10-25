import type { Article } from '../types.ts';

export const article: Article = {
  id: 'dating-ancient-sources',
  questionId: 'dating-ancient-sources',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'The methods historians use to date an ancient text or manuscript, with worked examples from the sources that matter for Jesus. It explains the logic and its limits. It does not fix the date of any particular Gospel; the neighbouring articles on the earliest sources and on the writing of the Gospels do that.',
    ar: 'المناهج التي يستعملها المؤرخون لتأريخ نص قديم أو مخطوط، مع أمثلة من المصادر المهمة في شأن يسوع. يشرح المقال المنطق وحدوده، ولا يحدد تاريخ إنجيل بعينه؛ فذلك شأن المقالين المجاورين عن أقدم المصادر وعن كتابة الأناجيل.',
  },
  shortAnswer: {
    en: 'Historians date a text by combining several kinds of evidence: what the text itself refers to (events, rulers, offices), who first quotes or uses it, the handwriting and material of the manuscript, and in some cases scientific tests. The result is usually a range, not a year. Two things must be kept apart: the date a work was composed and the date of the copy we hold. A late copy can carry an early text, and an early text can still be a poor witness. The method is the same for Tacitus, Josephus and the New Testament.',
    ar: 'يؤرّخ المؤرخون النص بجمع عدة أنواع من الأدلة: ما يشير إليه النص نفسه (أحداث وحكّام ومناصب)، ومن اقتبسه أو استعمله أولًا، وخط المخطوط ومادته، وفي بعض الحالات الفحوص العلمية. والنتيجة مدًى زمنيّ في الغالب لا سنة محددة. ويجب الفصل بين أمرين: تاريخ تأليف العمل وتاريخ النسخة التي بين أيدينا. فقد تحمل نسخة متأخرة نصًا مبكرًا، وقد يكون نص مبكر شاهدًا ضعيفًا. والمنهج واحد مع تاكيتوس ويوسيفوس والعهد الجديد.',
  },
  quickPoints: {
    en: [
      'Internal evidence: a text cannot be earlier than the latest event it mentions, and its silence about a major event is weaker evidence than a reference to it.',
      'External evidence: a work must be earlier than the first writer who quotes or depends on it.',
      'Manuscripts are dated by handwriting (palaeography), and sometimes by radiocarbon; both give ranges and say when the copy was made, not when the text was composed.',
      'St Paul’s letters can be placed in the AD 50s by his own account of his journeys and by a Roman governor named in Acts. The Gospels have no such anchors and are dated in ranges.',
      'An early date does not make a source accurate, and a late date does not make it false.',
    ],
    ar: [
      'الدليل الداخلي: لا يمكن أن يسبق النص أحدث حدث يذكره، وصمته عن حدث كبير دليل أضعف من الإشارة إليه.',
      'الدليل الخارجي: يجب أن يكون العمل أسبق من أول كاتب يقتبس منه أو يعتمد عليه.',
      'تُؤرَّخ المخطوطات بالخط (علم الخطوط القديمة) وأحيانًا بالكربون المشع؛ وكلاهما يعطي مدًى زمنيًّا ويحدد زمن النسخ لا زمن تأليف النص.',
      'يمكن وضع رسائل القديس بولس في خمسينيات القرن الأول بحسب روايته لرحلاته ووالٍ روماني مذكور في سفر الأعمال. أما الأناجيل فلا مراسي من هذا النوع لها وتُؤرَّخ بمدى زمنيّ.',
      'التاريخ المبكر لا يجعل المصدر دقيقًا، والتاريخ المتأخر لا يجعله كاذبًا.',
    ],
  },
  argumentTypes: ['historical', 'textual'],
  assessment: {
    label: 'supported_disputed_details',
    explanation: {
      en: 'The methods are standard and widely accepted in the study of antiquity, so the general approach is well supported. Their application to particular texts, above all the Gospels, produces ranges on which scholars differ. The label describes the method and the ranges, not any single date.',
      ar: 'المناهج معيارية ومقبولة على نطاق واسع في دراسة العصور القديمة، فالمقاربة العامة مدعومة جيدًا. أما تطبيقها على نصوص بعينها، وفي مقدمتها الأناجيل، فيعطي مدًى زمنيًّا يختلف فيه الباحثون. والتسمية تصف المنهج والمدى لا تاريخًا واحدًا.',
    },
  },
  whyExamine: {
    en: [
      'Claims about dates carry much weight in arguments about Jesus: "written too late to be reliable" on one side, "written within living memory" on the other. Both depend on how the date was reached. A reader who understands the method can see which parts of a date are firm and which are guesses.',
      'The subject also protects against two errors. One treats a confident date in a textbook as if the ancient author had signed it. The other dismisses all dating as circular, when in fact many dates rest on independent lines of evidence that agree.',
    ],
    ar: [
      'تحمل دعاوى التواريخ ثقلًا كبيرًا في الجدل حول يسوع: «كُتبت متأخرة فلا يوثق بها» من جهة، و«كُتبت في حدود الذاكرة الحية» من جهة. وكلتاهما تتوقف على كيفية الوصول إلى التاريخ. ومن يفهم المنهج يرى أي أجزاء التاريخ ثابتة وأيها تخمين.',
      'ويقي الموضوع من خطأين: خطأ من يعامل تاريخًا واثقًا في كتاب دراسي كأن المؤلف القديم وقّعه، وخطأ من يرفض كل تأريخ بوصفه استدلالًا دائريًا، والواقع أن كثيرًا من التواريخ يقوم على خطوط أدلة مستقلة تتفق.',
    ],
  },
  background: {
    en: [
      'Ancient authors seldom dated their own work. We usually have to infer the date from clues. A text that describes the fire of Rome in AD 64 as past cannot have been written earlier. A writer who names the emperor under whom he served as governor tells us when he wrote. A work quoted by a later writer must exist by then.',
      'Manuscripts add a second layer. We almost never have the author’s own copy. We have copies made later, sometimes centuries later, and the date of a copy depends on the handwriting style, the writing material and, for some materials, on a scientific measurement of organic age. Palaeographers compare a manuscript with others that carry a date in the text, which gives a range of a generation or two, rarely less.',
      'The distinction between the date of composition and the date of the manuscript is basic. The New Testament, Tacitus and Josephus all reach us in later copies. For the New Testament the copies are numerous and, in places, very early, and the question of how far copying changed the text belongs to the articles on textual criticism.',
    ],
    ar: [
      'نادرًا ما أرّخ المؤلفون القدماء أعمالهم. فنستنتج التاريخ عادةً من قرائن. النص الذي يصف حريق روما سنة ٦٤م ماضيًا لا يمكن أن يكون أقدم منه. والكاتب الذي يسمّي الإمبراطور الذي خدم واليًا في عهده يخبرنا بزمن كتابته. والعمل الذي يقتبسه كاتب لاحق لا بد أن يكون موجودًا قبل ذلك.',
      'وتضيف المخطوطات طبقة ثانية. فلا نملك تقريبًا نسخة المؤلف نفسه، بل نسخًا أحدث، وأحيانًا بعد قرون، ويتوقف تاريخ النسخة على أسلوب الخط ومادة الكتابة، وفي بعض المواد على قياس علمي لعمر المادة العضوية. ويقارن علماء الخطوط القديمة المخطوط بمخطوطات أخرى مؤرَّخة في نصها، فيعطون مدى جيل أو جيلين، ونادرًا أقل.',
      'والتمييز بين تاريخ التأليف وتاريخ المخطوط أساسي. فالعهد الجديد وتاكيتوس ويوسيفوس تصلنا كلها في نسخ متأخرة. وللعهد الجديد نسخ كثيرة، وبعضها مبكر جدًا، وسؤال مقدار تغيّر النص بالنسخ يخص مقالات النقد النصي.',
    ],
  },
  glossary: ['primary-source', 'manuscript', 'papyrus', 'codex', 'textual-criticism', 'interpolation', 'dead-sea-scrolls'],

  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'Historians date ancient works by combining internal clues, external attestation and, for manuscripts, handwriting and scientific tests, and the result is a range.',
        ar: 'يؤرّخ المؤرخون الأعمال القديمة بجمع القرائن الداخلية والشهادة الخارجية، وللمخطوطات بالخط والفحوص العلمية، والنتيجة مدًى زمنيّ.',
      },
      argumentType: 'historical',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'The examples below (Josephus, Pliny, Lucian and St Paul’s letters) show how different clues are tied together. A date is firmest when independent kinds of evidence agree.',
        ar: 'تبين الأمثلة أدناه (يوسيفوس وبليني ولوقيانوس ورسائل القديس بولس) كيف تُربط القرائن المختلفة. ويكون التاريخ أثبت حين تتفق أنواع مستقلة من الأدلة.',
      },
      limits: {
        en: 'Each clue has limits. A reference can be added by a later copyist, a handwriting style persists for generations, and scientific tests carry margins of error.',
        ar: 'لكل قرينة حدودها. فقد يضيف ناسخ متأخر إشارة، ويستمر أسلوب الخط أجيالًا، وللفحوص العلمية هوامش خطأ.',
      },
      evidence: ['e1', 'e2', 'e3', 'e6'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'St Paul’s letters can be placed in the middle of the first century from his own account of his career and a datable Roman official named in Acts.',
        ar: 'يمكن وضع رسائل القديس بولس في منتصف القرن الأول بحسب روايته لمسيرته وبمسؤول روماني يمكن تأريخه مذكور في سفر الأعمال.',
      },
      argumentType: 'historical',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'In Galatians he counts years between his turning, his first visit to Jerusalem and a later one. Acts places his stay in Corinth in the time of the proconsul Gallio, whose term is known from an inscription at Delphi, and that gives an anchor of about AD 50–52.',
        ar: 'يحسب في غلاطية سنوات بين تحوّله وزيارته الأولى لأورشليم وزيارة لاحقة. ويضع سفر الأعمال إقامته في كورنثوس في زمن الوالي غاليون، المعروفة مدة ولايته من نقش في دلفي، فيعطي مرساة نحو ٥٠–٥٢م.',
      },
      limits: {
        en: 'This relies on Acts for the Corinth link, read here as an ancient document, and the inscription is fragmentary and read with some flexibility. The dates are approximate.',
        ar: 'يعتمد ذلك على سفر الأعمال لربط كورنثوس، ويُقرأ هنا وثيقةً قديمة، والنقش مجزأ ويُقرأ بشيء من المرونة. والتواريخ تقريبية.',
      },
      evidence: ['e4', 'e5'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'The dates of the Gospels cannot be fixed by the same kind of anchor, so scholars reason from their relationships, from references to the Temple and from the earliest use, and arrive at ranges that differ.',
        ar: 'لا يمكن تحديد تواريخ الأناجيل بمرساة من النوع نفسه، فيستدل الباحثون من علاقاتها ومن الإشارات إلى الهيكل ومن أقدم استعمال لها، فيصلون إلى مدًى زمنيّ تختلف فيه الآراء.',
      },
      argumentType: 'textual',
      assessment: 'actively_debated',
      rationale: {
        en: 'Mark 13 records Jesus’ words about the destruction of the Temple, and whether this was written before or after AD 70 depends in part on whether prediction is thought possible. Acts ends with St Paul waiting for trial in Rome and says nothing of the outcome. Some argue that this points to an early date; others say the writer simply stopped where his purpose ended. Both uses of the evidence are arguments, not proofs.',
        ar: 'يسجّل مرقس ١٣ كلام يسوع عن خراب الهيكل، ويتوقف الحكم بكتابته قبل ٧٠م أو بعدها جزئيًا على ما إذا كان التنبؤ ممكنًا. وينتهي سفر الأعمال وبولس ينتظر محاكمته في روما دون ذكر النتيجة. ويرى بعضهم في هذا دليلًا على تاريخ مبكر، ويرى آخرون أن الكاتب توقف حيث انتهى غرضه. وكلا الاستعمالين حجة لا برهان.',
      },
      limits: {
        en: 'This article does not choose a date. The article on when the Gospels were written examines the individual cases.',
        ar: 'لا يختار هذا المقال تاريخًا. ويبحث مقال زمن كتابة الأناجيل الحالات كلًّا على حدة.',
      },
      evidence: ['e7', 'e8', 'e9'],
    },
    {
      id: 'c4',
      proposition: {
        en: 'The date of a work says nothing by itself about its accuracy: an early source can be biased, and a later one can preserve early and reliable tradition.',
        ar: 'لا يخبر تاريخ العمل وحده شيئًا عن دقته: فقد يكون المصدر المبكر متحيزًا، وقد يحفظ المتأخر تقليدًا مبكرًا موثوقًا.',
      },
      argumentType: 'historical',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'Tacitus wrote about eighty years after the events and is used because his hostility and training make his remark worth weighing. The Gospels, though written later than St Paul, may contain older tradition, which is the subject of other articles.',
        ar: 'كتب تاكيتوس بعد الأحداث بنحو ثمانين سنة ويُستعمل لأن عداءه وتدريبه يجعلان ملاحظته جديرة بالوزن. وقد تتضمن الأناجيل، رغم أنها أحدث من القديس بولس، تقليدًا أقدم، وهو موضوع مقالات أخرى.',
      },
      limits: {
        en: 'Date is one factor among others: author, purpose, sources, genre and corroboration also count.',
        ar: 'التاريخ عامل واحد بين عوامل: الكاتب والغرض والمصادر والنوع الأدبي والتعضيد.',
      },
      evidence: ['e1', 'e2'],
    },
  ],

  evidence: [
    {
      id: 'e1',
      sourceId: 'S03',
      locator: 'Antiquities 20.200',
      role: 'context',
      states: {
        en: 'This is a passage of Josephus’ Jewish Antiquities, which recounts the stoning of James under a high priest in about AD 62.',
        ar: 'هذه فقرة من «العاديات اليهودية» ليوسيفوس تروي رجم يعقوب في عهد رئيس كهنة نحو سنة ٦٢م.',
      },
      inference: {
        en: 'The work is dated to about AD 93–94, a date Josephus himself ties to the reign of the emperor Domitian near the end of the work. Dating a work by the author’s own statement, where one exists, is the firmest case. The work was written about thirty years after the event it describes.',
        ar: 'يؤرَّخ العمل نحو ٩٣–٩٤م، وهو تاريخ ربطه يوسيفوس نفسه بعهد الإمبراطور دوميتيان قرب نهاية العمل. وتأريخ العمل بقول مؤلفه حيث يوجد أثبت الحالات. وكُتب العمل بعد الحدث الذي يصفه بنحو ثلاثين سنة.',
      },
    },
    {
      id: 'e2',
      sourceId: 'S01',
      locator: 'Annals 15.44',
      role: 'context',
      states: {
        en: 'Tacitus describes the fire of Rome in AD 64 and Nero’s blaming of the Christians, and mentions the execution of Christus under Pilate.',
        ar: 'يصف تاكيتوس حريق روما سنة ٦٤م ولوم نيرون للمسيحيين، ويذكر إعدام «كرستوس» في ولاية بيلاطس.',
      },
      inference: {
        en: 'The work cannot be earlier than the events it describes, and the Annals are placed late in Tacitus’ life, around AD 115–120. The reasoning is internal (the latest event described) combined with what is known of the author’s career. The medieval copies are far later than this.',
        ar: 'لا يمكن أن يكون العمل أقدم من الأحداث التي يصفها، وتوضع «الحوليات» في أواخر حياة تاكيتوس نحو ١١٥–١٢٠م. والاستدلال داخلي (أحدث حدث موصوف) مع ما يُعرف عن مسيرة المؤلف. والنسخ المتوسطية أحدث من ذلك بكثير.',
      },
      dependence: {
        en: 'The same passage is also hosted as S02; it is one text and one testimony.',
        ar: 'وردت الفقرة نفسها في S02 أيضًا؛ فهي نص واحد وشهادة واحدة.',
      },
    },
    {
      id: 'e3',
      sourceId: 'S05',
      locator: 'Letters 10.96',
      role: 'context',
      states: {
        en: 'Pliny writes to the emperor Trajan as governor of Bithynia-Pontus, asking how to treat people accused of being Christians.',
        ar: 'يكتب بليني إلى الإمبراطور تراجان بصفته والي بيثينية وبنطس، يسأله كيف يعامل المتهمين بأنهم مسيحيون.',
      },
      inference: {
        en: 'The letter dates itself by its sender, recipient and office, and the dates of Pliny’s governorship give the range of about AD 110–113. This is dating by internal reference. The letters survive in later copies, so the same text-critical questions apply.',
        ar: 'تؤرّخ الرسالة نفسها بمرسلها ومرسَلها ومنصبها، وتعطي تواريخ ولاية بليني المدى نحو ١١٠–١١٣م. هذا تأريخ بالإشارة الداخلية. وتبقى الرسائل في نسخ متأخرة فتنطبق الأسئلة النصية نفسها.',
      },
    },
    {
      id: 'e4',
      sourceId: 'S62',
      locator: 'Galatians 1:18–19',
      role: 'supports',
      states: {
        en: 'St Paul counts years from his turning to his first visit to Jerusalem and, in the next chapter, speaks of a visit fourteen years later.',
        ar: 'يحسب القديس بولس السنوات من تحوّله إلى أول زيارة لأورشليم، ويذكر في الإصحاح التالي زيارة بعدها بأربع عشرة سنة.',
      },
      inference: {
        en: 'These are relative dates in the author’s own words. Linked to a fixed point such as the proconsul at Corinth, they let the letters be placed in the AD 50s. Read here as an ancient document.',
        ar: 'هذه تواريخ نسبية بكلام المؤلف نفسه. وبربطها بنقطة ثابتة كالوالي في كورنثوس يمكن وضع الرسائل في الخمسينيات. وتُقرأ هنا وثيقةً قديمة.',
      },
      bible: { book: 'galatians', chapter: 1, verse: '18-19' },
    },
    {
      id: 'e5',
      sourceId: 'S62',
      locator: 'Acts 18:12–17',
      role: 'supports',
      states: {
        en: 'Acts describes St Paul being brought before Gallio, proconsul of Achaia, at Corinth.',
        ar: 'يصف سفر الأعمال مثول القديس بولس أمام غاليون، والي أخائية، في كورنثوس.',
      },
      inference: {
        en: 'The term of Gallio is known from an inscription at Delphi, and this tie links a point in St Paul’s life to a datable Roman office-holder, giving the anchor of about AD 50–52 for the Corinth visit. The passage is read here as an ancient narrative whose historical detail is checked against the inscription, not assumed.',
        ar: 'تُعرف مدة غاليون من نقش في دلفي، ويربط هذا نقطة من حياة القديس بولس بمسؤول روماني يمكن تأريخه، فيعطي مرساة نحو ٥٠–٥٢م لزيارة كورنثوس. وتُقرأ الفقرة هنا سردًا قديمًا يُفحص تفصيله التاريخي بالنقش ولا يُفترض.',
      },
      bible: { book: 'acts', chapter: 18, verse: '12-17' },
    },
    {
      id: 'e6',
      sourceId: 'S06',
      locator: 'Peregrinus 11–13',
      role: 'context',
      states: {
        en: 'Lucian’s satire on the philosopher Peregrinus mentions Christians who honour a crucified man.',
        ar: 'تذكر سخرية لوقيانوس من الفيلسوف بيريغرينوس مسيحيين يكرمون رجلًا مصلوبًا.',
      },
      inference: {
        en: 'Lucian is dated to about AD 165–175 because the work treats the death of Peregrinus as a recent event and is placed within the author’s known career. Here a datable event in the text provides a lower limit; the range is wide.',
        ar: 'يؤرَّخ لوقيانوس نحو ١٦٥–١٧٥م لأن العمل يتناول موت بيريغرينوس حدثًا قريبًا، ويدخل ضمن مسيرة المؤلف المعروفة. وهنا يعطي حدث في النص حدًّا أدنى؛ والمدى واسع.',
      },
    },
    {
      id: 'e7',
      sourceId: 'S62',
      locator: 'Mark 13:1–2',
      role: 'context',
      states: {
        en: 'Jesus says of the Temple buildings in Jerusalem that not one stone will be left on another.',
        ar: 'يقول يسوع عن مباني الهيكل في أورشليم إنه لا يُترك فيها حجر على حجر.',
      },
      inference: {
        en: 'Those who think Mark was written after the destruction of the Temple in AD 70 often read this as a looking back. Those who accept that Jesus could foretell it have no need to. The passage does not state its own date, and the question is partly about what a historian may assume about prophecy, which the Church affirms and non-believing readers may not.',
        ar: 'يرى القائلون بأن مرقس كُتب بعد خراب الهيكل سنة ٧٠م هذا غالبًا نظرةً إلى الوراء، ومن يقبل أن يسوع قادر على التنبؤ به لا يحتاج إلى ذلك. ولا تذكر الفقرة تاريخها، والسؤال يتعلق جزئيًا بما يجوز للمؤرخ افتراضه عن النبوة، وهو ما تؤكده الكنيسة وقد لا يقبله القراء غير المؤمنين.',
      },
      bible: { book: 'mark', chapter: 13, verse: '1-2' },
    },
    {
      id: 'e8',
      sourceId: 'S62',
      locator: 'Acts 28:30–31',
      role: 'context',
      states: {
        en: 'Acts ends with St Paul in Rome, living under guard for two years and preaching freely.',
        ar: 'ينتهي سفر الأعمال وبولس في روما، يقيم سنتين تحت الحراسة ويكرز بلا مانع.',
      },
      inference: {
        en: 'Some argue that a writer who knew of St Paul’s later trial and death would have mentioned it, so Acts and Luke, its companion, were written early. Others answer that the author may have stopped at the point he wanted to reach. The silence is evidence, but not decisive.',
        ar: 'يرى بعضهم أن كاتبًا يعرف محاكمة القديس بولس اللاحقة وموته كان سيذكرها، فيكون سفر الأعمال والإنجيل الثالث المرتبط به قد كُتبا مبكرًا. ويجيب آخرون أن الكاتب ربما توقف عند النقطة التي أراد بلوغها. والصمت دليل لكنه غير حاسم.',
      },
      bible: { book: 'acts', chapter: 28, verse: '30-31' },
    },
    {
      id: 'e9',
      sourceId: 'S62',
      locator: 'Luke 1:1–4',
      role: 'context',
      states: {
        en: 'The writer says that many had already written accounts and that he writes after careful investigation.',
        ar: 'يقول الكاتب إن كثيرين دوّنوا روايات من قبل، وإنه يكتب بعد تحقيق دقيق.',
      },
      inference: {
        en: 'A writer’s reference to earlier written work gives a relative order: the earlier accounts come before him. It is internal evidence of the kind historians use, though it names no year.',
        ar: 'إشارة الكاتب إلى أعمال مكتوبة سابقة تعطي ترتيبًا نسبيًا: الروايات الأقدم تسبقه. وهي دليل داخلي من النوع الذي يستعمله المؤرخون، وإن لم تذكر سنة.',
      },
      bible: { book: 'luke', chapter: 1, verse: '1-4' },
    },
    {
      id: 'e11',
      sourceId: 'S27',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'context',
      states: {
        en: 'Metzger and Ehrman’s textbook is the standard introduction to the transmission of the New Testament text and to the study of its manuscripts.',
        ar: 'كتاب ميتزغر وإيرمان المدرسي هو المدخل المعتمد إلى نقل نص العهد الجديد ودراسة مخطوطاته.',
      },
      inference: {
        en: 'Cited as a place to learn how manuscripts are described and dated. The book has not been read for this site, and no particular conclusion is attributed to it.',
        ar: 'يُذكر مرجعًا لمعرفة كيف توصف المخطوطات وتؤرَّخ. ولم يُقرأ الكتاب لأجل الموقع، ولا تُنسب إليه نتيجة بعينها.',
      },
    },
  ],

  objections: [
    {
      id: 'o1',
      statement: {
        en: 'Dating is circular. Scholars date a text by what it says, then use the date to decide what it says, and the late dates for the Gospels simply reflect a wish to discredit them.',
        ar: 'التأريخ استدلال دائري. يؤرّخ الباحثون النص بما يقوله ثم يستعملون التاريخ لتحديد ما يقوله، والتواريخ المتأخرة للأناجيل تعبّر عن رغبة في التشكيك فيها.',
      },
      response: {
        en: [
          'The circle is real when only one clue is used. It is broken when independent clues agree, as with St Paul the Apostle, whose own reckoning of years matches a Roman office-holder.',
          'It is also true that assumptions affect conclusions. A reader who thinks Jesus could foresee the fall of Jerusalem will date Mark differently from one who does not. The honest course is to say so, as this article does, and to give the range rather than a single year.',
        ],
        ar: [
          'الدائرة حقيقية حين تُستعمل قرينة واحدة، وتنكسر حين تتفق قرائن مستقلة، كما في حالة القديس بولس الرسول الذي يتطابق حسابه للسنوات مع مسؤول روماني.',
          'وصحيح أن الافتراضات تؤثر في الاستنتاجات. فمن يرى أن يسوع قادر على استشراف خراب أورشليم سيؤرّخ مرقس بغير ما يؤرّخه من لا يرى ذلك. والصدق أن يُقال هذا، كما يفعل المقال، وأن يُعطى المدى لا سنة واحدة.',
        ],
      },
      limits: {
        en: 'It does not decide the date of any Gospel.',
        ar: 'لا يحسم تاريخ أي إنجيل.',
      },
      evidence: ['e4', 'e5', 'e7'],
    },
    {
      id: 'o2',
      statement: {
        en: 'We have no original of any ancient text, only late copies, so every date and every text is uncertain.',
        ar: 'ليس لدينا أصل لأي نص قديم، بل نسخ متأخرة فقط، فكل تاريخ وكل نص غير مؤكد.',
      },
      response: {
        en: [
          'The point is true and is why composition and copy are kept apart. It applies to nearly all of ancient literature, and historians do not therefore abandon it. They compare copies, look for the earliest witnesses and note where the copies differ.',
          'For the New Testament the surviving copies are many and some early, and the differences among them are catalogued. Whether that settles the matter of reliability belongs to the articles on textual criticism.',
        ],
        ar: [
          'هذه نقطة صحيحة، ولهذا يُفصل بين التأليف والنسخة. وهي تنطبق على كل الأدب القديم تقريبًا، ولا يترك المؤرخون لأجلها دراسته. فهم يقارنون النسخ ويبحثون عن أقدم الشواهد ويسجلون مواضع الاختلاف.',
          'وللعهد الجديد نسخ كثيرة وبعضها مبكر، وأوجه الاختلاف بينها مفهرسة. وهل يحسم ذلك مسألة الموثوقية فمن شأن مقالات النقد النصي.',
        ],
      },
      limits: {
        en: 'It does not show that the surviving copies match the originals everywhere.',
        ar: 'لا يبين أن النسخ الباقية تطابق الأصول في كل موضع.',
      },
      evidence: ['e2', 'e11'],
    },
    {
      id: 'o3',
      statement: {
        en: 'If the Gospels were written after AD 70, they cannot contain eyewitness memory, so the dating question settles reliability.',
        ar: 'إن كانت الأناجيل كُتبت بعد ٧٠م فلا يمكن أن تتضمن ذاكرة معاينين، فيحسم التأريخ مسألة الموثوقية.',
      },
      response: {
        en: [
          'A date after AD 70 still leaves a gap of one to two generations, and in the ancient world people who had been young at the time of Jesus could be alive. Whether eyewitness memory reached the written texts is a separate question, argued by scholars on both sides.',
          'Dating therefore narrows the possibilities but does not by itself decide them.',
        ],
        ar: [
          'يبقى التاريخ بعد ٧٠م فجوة جيل أو جيلين، وفي العالم القديم كان يمكن أن يعيش أناس كانوا شبابًا في زمن يسوع. وهل وصلت ذاكرة المعاينين إلى النصوص المكتوبة سؤال مستقل يحتج فيه الباحثون من الجانبين.',
          'فالتأريخ يضيّق الاحتمالات ولا يحسمها وحده.',
        ],
      },
      limits: {
        en: 'It does not show that the Gospels do contain eyewitness testimony.',
        ar: 'لا يبين أن الأناجيل تتضمن فعلًا شهادة معاينين.',
      },
      evidence: ['e7', 'e8', 'e9'],
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'The Christian historian uses the same methods as everyone else and accepts the same ranges where the evidence supports them. St Paul’s letters, Josephus, Tacitus and Pliny are dated in the same way for believers and non-believers. Where the dating of a Gospel depends on whether Jesus could foresee the fall of Jerusalem, the Christian historian is open about the premise and offers the argument on both footings.',
        'The strength of the case does not rest on early dates for the Gospels. It rests on the convergence of the evidence, and the dating is one part of that.',
      ],
      ar: [
        'يستعمل المؤرخ المسيحي المناهج نفسها التي يستعملها الجميع، ويقبل المدى نفسه حيث تدعمه الأدلة. فرسائل القديس بولس ويوسيفوس وتاكيتوس وبليني تُؤرَّخ بالطريقة نفسها للمؤمنين وغير المؤمنين. وحين يتوقف تأريخ إنجيل على إمكان أن يستشرف يسوع خراب أورشليم، يعلن المؤرخ المسيحي هذا الافتراض ويعرض الحجة على الأساسين معًا.',
        'ولا تقوم قوة الدعوى على تواريخ مبكرة للأناجيل. بل على تقارب الأدلة، والتأريخ جزء منه.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that Christ foreknew what would befall Jerusalem, as the Gospels report, and that the Spirit inspired the Evangelists. That confession does not depend on a particular date for any Gospel, and the Church has never defined one. Faith and careful dating can sit together, each answering its own question.',
      ],
      ar: [
        'تعترف الكنيسة بأن المسيح عرف سلفًا ما سيحل بأورشليم كما تنقل الأناجيل، وبأن الروح القدس أوحى إلى الإنجيليين. ولا يتوقف هذا الاعتراف على تاريخ بعينه لأي إنجيل، ولم تحدد الكنيسة تاريخًا قط. فالإيمان والتأريخ الدقيق يجتمعان، كلٌّ منهما يجيب عن سؤاله.',
      ],
    },
  },
  coptic: null,
  disputed: {
    en: [
      'Disputed: the dates of each Gospel and of Acts; the weight of the silence of Acts about St Paul’s fate; whether the destruction of the Temple is presupposed in Mark; the precise dates of Pliny’s governorship and of the Gallio inscription; and the margins for palaeographical dating. The dating of non-canonical gospels and of many other early texts is also debated and is not covered here.',
    ],
    ar: [
      'موضع الخلاف: تواريخ كل إنجيل وسفر الأعمال؛ ووزن صمت الأعمال عن مصير القديس بولس؛ وهل يفترض مرقس خراب الهيكل؛ والتواريخ الدقيقة لولاية بليني ولنقش غاليون؛ وهوامش التأريخ بعلم الخطوط. كما أن تأريخ الأناجيل غير القانونية وكثير من النصوص المبكرة الأخرى محل نقاش ولا يتناوله هذا المقال.',
    ],
  },
  conclusion: {
    en: 'Historians date ancient texts by combining internal clues, outside attestation and manuscript evidence, and the results are ranges. Some are firm (Josephus, Pliny, St Paul’s letters in the AD 50s), and some, above all the Gospels, remain debated. A date is a starting point for judging a source, never a verdict on its truth.',
    ar: 'يؤرّخ المؤرخون النصوص القديمة بجمع القرائن الداخلية والشهادة الخارجية وأدلة المخطوطات، والنتائج مدًى زمنيّ. بعضها ثابت (يوسيفوس وبليني ورسائل القديس بولس في الخمسينيات)، وبعضها، وفي مقدمته الأناجيل، لا يزال موضع نقاش. والتاريخ نقطة بداية للحكم على المصدر لا حكم على صدقه.',
  },
  furtherReading: ['S27', 'S10', 'S03'],
  related: [
    'earliest-sources-for-jesus',
    'when-were-the-gospels-written',
    'date-of-the-pauline-tradition',
    'dead-sea-scrolls',
    'has-bible-changed',
    'what-is-a-textual-variant',
    'non-christian-sources-establish',
  ],
};
