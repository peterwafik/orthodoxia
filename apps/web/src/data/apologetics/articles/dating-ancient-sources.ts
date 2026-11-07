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
    en: 'Historians date a text by bringing several kinds of evidence together: what the text itself refers to (events, rulers, offices), who first quotes or uses it, the handwriting and material of the manuscript, and sometimes scientific tests. The result is usually a range of years, and it is firmest when independent lines of evidence agree. The date a work was composed must be kept apart from the date of the copy we hold. The same method is used for Tacitus, Josephus and the New Testament, and it shows that the letters of St Paul the Apostle belong to the AD 50s and that the Gospels were written in the first century, within living memory of Jesus.',
    ar: 'يؤرّخ المؤرخون النص بجمع عدة أنواع من الأدلة: ما يشير إليه النص نفسه (أحداث وحكّام ومناصب)، ومن اقتبسه أو استعمله أولًا، وخط المخطوط ومادته، وأحيانًا الفحوص العلمية. والنتيجة في الغالب مدًى من السنين، ويكون أثبت حين تتفق خطوط أدلة مستقلة. ويجب الفصل بين تاريخ تأليف العمل وتاريخ النسخة التي بين أيدينا. والمنهج نفسه يُستعمل مع تاكيتوس ويوسيفوس والعهد الجديد، وهو يُظهر أن رسائل القديس بولس الرسول تعود إلى خمسينيات القرن الأول، وأن الأناجيل كُتبت في القرن الأول، في حدود الذاكرة الحية ليسوع.',
  },
  quickPoints: {
    en: [
      'Internal evidence: a text cannot be earlier than the latest event it mentions, and its silence about a major event is weaker evidence than a reference to it.',
      'External evidence: a work must be earlier than the first writer who quotes or depends on it.',
      'Manuscripts are dated by handwriting (palaeography), and sometimes by radiocarbon; both give ranges and say when the copy was made, not when the text was composed.',
      'St Paul’s letters can be placed in the AD 50s by his own account of his journeys and by a Roman governor named in Acts. The Gospels are dated within the first century, while people who had known Jesus were still living.',
      'Date is one measure among several: author, purpose, sources and agreement with other witnesses all count in judging a source.',
    ],
    ar: [
      'الدليل الداخلي: لا يمكن أن يسبق النص أحدث حدث يذكره، وصمته عن حدث كبير دليل أضعف من الإشارة إليه.',
      'الدليل الخارجي: يجب أن يكون العمل أسبق من أول كاتب يقتبس منه أو يعتمد عليه.',
      'تُؤرَّخ المخطوطات بالخط (علم الخطوط القديمة) وأحيانًا بالكربون المشع؛ وكلاهما يعطي مدًى زمنيًّا ويحدد زمن النسخ لا زمن تأليف النص.',
      'يمكن وضع رسائل القديس بولس في خمسينيات القرن الأول بحسب روايته لرحلاته ووالٍ روماني مذكور في سفر الأعمال. وتُؤرَّخ الأناجيل في القرن الأول، والذين عرفوا يسوع ما زالوا أحياء.',
      'التاريخ معيار واحد بين معايير عدة: فالكاتب والغرض والمصادر والاتفاق مع شهود آخرين كلها تُحسب في الحكم على المصدر.',
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
      'Claims about dates carry much weight in discussions of Jesus: “written too late to be reliable” is a common charge. A reader who understands how dates are reached can see which parts are firm and can answer the charge with confidence.',
      'The method guards against two errors: treating a textbook date as if the ancient author had signed it, and dismissing all dating as circular. Many dates rest on independent lines of evidence that agree, and that is what makes them firm.',
    ],
    ar: [
      'تحمل دعاوى التواريخ ثقلًا كبيرًا في الحديث عن يسوع: «كُتبت متأخرة فلا يوثق بها» تهمة شائعة. ومن يفهم كيف يُتوصل إلى التواريخ يرى أي الأجزاء ثابتة، ويستطيع أن يجيب عن التهمة بثقة.',
      'ويقي المنهج من خطأين: معاملة تاريخ في كتاب دراسي كأن المؤلف القديم وقّعه، ورفض كل تأريخ بوصفه استدلالًا دائريًا. فكثير من التواريخ يقوم على خطوط أدلة مستقلة تتفق، وهذا ما يجعلها ثابتة.',
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
        en: 'The examples below (Josephus, Pliny, Lucian and St Paul’s letters) show how different clues are tied together. A date is firmest when independent kinds of evidence agree, and in these cases they do.',
        ar: 'تبيّن الأمثلة أدناه (يوسيفوس وبليني ولوقيانوس ورسائل القديس بولس) كيف تُربط القرائن المختلفة. ويكون التاريخ أثبت حين تتفق أنواع مستقلة من الأدلة، وهي في هذه الحالات تتفق.',
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
        en: 'In Galatians St Paul counts the years between his turning, his first visit to Jerusalem and a later one. Acts places his stay in Corinth in the time of the proconsul Gallio, whose term is known from an inscription at Delphi, giving an anchor of about AD 50–52. Two independent witnesses meet at the same point.',
        ar: 'يحسب القديس بولس في غلاطية السنوات بين تحوّله وزيارته الأولى لأورشليم وزيارة لاحقة. ويضع سفر الأعمال إقامته في كورنثوس في زمن الوالي غاليون، المعروفة مدة ولايته من نقش في دلفي، فيعطي مرساة نحو ٥٠–٥٢م. فيلتقي شاهدان مستقلان عند النقطة نفسها.',
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
        en: 'The Gospels have no single anchor of that kind, so they are dated from their relationships, their contents and their earliest use; this places them within the first century, in the lifetime of those who had known Jesus.',
        ar: 'ليس للأناجيل مرساة واحدة من هذا النوع، فتُؤرَّخ من علاقاتها ومضمونها وأقدم استعمال لها، وهذا يضعها في القرن الأول، في حياة الذين عرفوا يسوع.',
      },
      argumentType: 'textual',
      assessment: 'actively_debated',
      rationale: {
        en: 'Mark 13 records the Lord’s words about the destruction of the Temple. Dating Mark after AD 70 because of that prophecy assumes that Jesus could not foresee the future, which is a premise, not evidence. Acts ends with St Paul awaiting trial in Rome and says nothing of the outcome, which fits a writer composing before that outcome was known.',
        ar: 'يسجّل مرقس ١٣ كلام الرب عن خراب الهيكل. وتأريخ مرقس بعد ٧٠م بسبب هذه النبوة يفترض أن يسوع لم يكن يستطيع أن يعرف المستقبل، وهذا افتراض لا دليل. وينتهي سفر الأعمال وبولس ينتظر محاكمته في روما دون ذكر النتيجة، وهذا يلائم كاتبًا كتب قبل أن تُعرف تلك النتيجة.',
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
        en: 'A source is judged by more than its date: an early source can be biased, and a later one can preserve early and reliable tradition.',
        ar: 'يُحكم على المصدر بأكثر من تاريخه: فقد يكون المصدر المبكر متحيزًا، وقد يحفظ المتأخر تقليدًا مبكرًا موثوقًا.',
      },
      argumentType: 'historical',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'Tacitus wrote about eighty years after the events and is still valued for his remark about Christ. The Gospels, written within living memory, carry tradition that goes back to the apostles and those who were with Jesus.',
        ar: 'كتب تاكيتوس بعد الأحداث بنحو ثمانين سنة، ومع ذلك تُقدَّر ملاحظته عن المسيح. والأناجيل، المكتوبة في حدود الذاكرة الحية، تحمل تقليدًا يرجع إلى الرسل وإلى الذين كانوا مع يسوع.',
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
          'An argument is circular only when it rests on a single clue. Dating rests on independent clues that agree, as with St Paul the Apostle, whose own reckoning of years matches a Roman office-holder known from an inscription.',
          'Where a late date for a Gospel depends only on the assumption that Jesus could not foretell the fall of Jerusalem, that is a premise brought to the text, not a finding drawn from it. Naming the premise openly removes its force as evidence.',
        ],
        ar: [
          'يكون الاستدلال دائريًا فقط حين يقوم على قرينة واحدة. أما التأريخ فيقوم على قرائن مستقلة تتفق، كما في حالة القديس بولس الرسول الذي يتطابق حسابه للسنوات مع مسؤول روماني معروف من نقش.',
          'وحين يتوقف تاريخ متأخر لإنجيل على افتراض أن يسوع لم يكن يستطيع أن يتنبأ بخراب أورشليم، فهذا افتراض يُحمل إلى النص لا نتيجة تُستخلص منه. وتسمية هذا الافتراض بوضوح تنزع عنه قوة الدليل.',
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
          'This is true of nearly all ancient literature, which is why composition and copy are kept apart. Historians do not abandon the past for that reason. They compare copies, look for the earliest witnesses and note where copies differ.',
          'For the New Testament the surviving copies are far more numerous and earlier than for any other ancient work, and the differences among them are carefully catalogued. The text is better attested than any other book of antiquity.',
        ],
        ar: [
          'هذا يصدق على كل الأدب القديم تقريبًا، ولهذا يُفصل بين التأليف والنسخة. ولا يترك المؤرخون الماضي لهذا السبب، بل يقارنون النسخ ويبحثون عن أقدم الشواهد ويسجلون مواضع الاختلاف.',
          'وللعهد الجديد نسخ باقية أكثر عددًا وأقدم زمنًا من أي عمل قديم آخر، وأوجه الاختلاف بينها مفهرسة بعناية. فنصه أوفر شهادة من أي كتاب آخر من العصور القديمة.',
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
          'Even a date after AD 70 leaves a gap of only one or two generations, and people who had been young in the time of Jesus could still be living. The Gospels themselves claim to rest on the testimony of those who were eyewitnesses from the beginning, as St Luke the Evangelist says in his opening.',
          'So the date of writing does not cut the Gospels off from the witnesses. They were written while that living memory was still present in the Church.',
        ],
        ar: [
          'حتى التاريخ بعد ٧٠م لا يترك إلا فجوة جيل أو جيلين، وكان يمكن أن يعيش أناس كانوا شبابًا في زمن يسوع. والأناجيل نفسها تقول إنها تستند إلى شهادة الذين كانوا معاينين منذ البدء، كما يقول القديس لوقا الإنجيلي في افتتاحيته.',
          'فتاريخ الكتابة لا يقطع الأناجيل عن الشهود. فقد كُتبت والذاكرة الحية ما زالت حاضرة في الكنيسة.',
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
        'The Christian historian uses the same methods as everyone else. St Paul’s letters, Josephus, Tacitus and Pliny are dated in the same way for believers and non-believers. Where a late date for a Gospel depends only on denying that Jesus could foresee the fall of Jerusalem, the Christian historian names that premise and shows that the evidence itself does not require it.',
        'The case for the Gospel does not rest on any single date. It rests on the agreement of many witnesses, all of them within the first century and close to the events.',
      ],
      ar: [
        'يستعمل المؤرخ المسيحي المناهج نفسها التي يستعملها الجميع. فرسائل القديس بولس ويوسيفوس وتاكيتوس وبليني تُؤرَّخ بالطريقة نفسها للمؤمنين وغير المؤمنين. وحين يتوقف تاريخ متأخر لإنجيل على إنكار أن يسوع استطاع أن يعرف سلفًا خراب أورشليم، يسمّي المؤرخ المسيحي هذا الافتراض ويبيّن أن الأدلة نفسها لا تقتضيه.',
        'ولا تقوم قوة الإنجيل على تاريخ واحد بعينه، بل على اتفاق شهود كثيرين، كلهم في القرن الأول وقريبون من الأحداث.',
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
    en: 'Historians date ancient texts by combining internal clues, outside attestation and manuscript evidence, and the firmest dates are those where independent lines agree. St Paul’s letters belong to the AD 50s, and the Gospels to the first century, within the lifetime of those who had known the Lord. Dating is a tool for weighing sources, and used honestly it places the witness of the New Testament close to the events it proclaims.',
    ar: 'يؤرّخ المؤرخون النصوص القديمة بجمع القرائن الداخلية والشهادة الخارجية وأدلة المخطوطات، وأثبت التواريخ ما اتفقت فيه خطوط مستقلة. فرسائل القديس بولس تعود إلى خمسينيات القرن الأول، والأناجيل إلى القرن الأول، في حياة الذين عرفوا الرب. والتأريخ أداة لوزن المصادر، وإذا استُعمل بأمانة وضع شهادة العهد الجديد قريبًا من الأحداث التي يكرز بها.',
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
