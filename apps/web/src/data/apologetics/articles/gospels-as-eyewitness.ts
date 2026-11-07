import type { Article } from '../types.ts';

export const article: Article = {
  id: 'gospels-as-eyewitness',
  questionId: 'gospels-as-eyewitness',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article asks whether the four Gospels can be counted as independent eyewitness accounts of Jesus. It separates three claims that are often run together: that a Gospel was written by an eyewitness, that it draws on eyewitness testimony, and that it is independent of the other Gospels. It does not decide who wrote each Gospel or when (see those articles) and does not judge individual stories.',
    ar: 'تسأل هذه المقالة هل تُعد الأناجيل الأربعة شهادات عيان مستقلة عن يسوع. وهي تفصل بين ثلاث دعاوى كثيرًا ما تُخلط: أن الإنجيل كتبه شاهد عيان، وأنه يعتمد على شهادة عيان، وأنه مستقل عن بقية الأناجيل. ولا تحدد من كتب كل إنجيل ولا متى (انظر مقالتيهما)، ولا تحكم في قصص بعينها.',
  },
  shortAnswer: {
    en: 'Yes, in the sense that matters most: the Gospels rest on the testimony of those who saw and heard Jesus. The Church receives the Gospels of Matthew and John as the work of apostles, the Gospel of Mark as the preaching of St Peter, and the Gospel of Luke as an account carefully gathered from eyewitnesses, as St Luke the Evangelist says in his opening lines. The Gospel of John states plainly that its witness saw what he reports. The first three Gospels share much of their material and wording, so they are not three entirely separate reports. Their strength lies in the faithful handing on of the apostles’ testimony, and the distinct tradition of John and the earlier letters of St Paul the Apostle confirm the same core independently.',
    ar: 'نعم، بالمعنى الأهم: فالأناجيل قائمة على شهادة الذين رأوا يسوع وسمعوه. وتتسلم الكنيسة إنجيلي متى ويوحنا عملَ رسولين، وإنجيل مرقس كرازةَ القديس بطرس، وإنجيل لوقا روايةً جُمعت بعناية من المعاينين، كما يقول القديس لوقا الإنجيلي في مطلع إنجيله. ويصرّح إنجيل يوحنا بأن شاهده رأى ما يرويه. وتشترك الأناجيل الثلاثة الأولى في كثير من مادتها وألفاظها، فليست ثلاثة تقارير منفصلة تمامًا. وقوتها في أمانة تسليم شهادة الرسل، ويؤكد تقليد يوحنا المتميز ورسائل القديس بولس الرسول الأقدم الجوهر نفسه تأكيدًا مستقلًا.',
  },
  quickPoints: {
    en: [
      'The Gospels rest on eyewitness testimony: St Luke says his account goes back to eyewitnesses, and the Gospel of John says its witness saw what he reports.',
      'The Church receives Matthew and John as written by apostles, and Mark as the preaching of St Peter.',
      'The first three Gospels share much material, so their agreement is not counted three times; it shows a common, carefully kept tradition.',
      'The Gospel of John follows its own tradition and confirms the same central events.',
      'St Paul’s letters, written earlier, name living witnesses of the risen Christ and confirm the core of the Gospel story.',
    ],
    ar: [
      'الأناجيل قائمة على شهادة العيان: يقول القديس لوقا إن روايته ترجع إلى المعاينين، ويقول إنجيل يوحنا إن شاهده رأى ما يرويه.',
      'تتسلم الكنيسة متى ويوحنا مكتوبين بيد رسولين، ومرقس كرازةَ القديس بطرس.',
      'تشترك الأناجيل الثلاثة الأولى في مادة كثيرة، فلا يُحسب اتفاقها ثلاث مرات؛ بل يدل على تقليد مشترك محفوظ بعناية.',
      'يتبع إنجيل يوحنا تقليده الخاص ويؤكد الأحداث المركزية نفسها.',
      'رسائل القديس بولس، وهي أقدم، تسمّي شهودًا أحياء للمسيح القائم وتؤكد جوهر القصة الإنجيلية.',
    ],
  },
  argumentTypes: ['historical', 'textual'],
  assessment: {
    label: 'actively_debated',
    explanation: {
      en: 'That the Synoptic Gospels are interdependent is well supported, and that John is substantially different from them is widely held. Whether any Gospel preserves eyewitness testimony, and how directly, is actively debated by scholars who disagree about the evidence and the method.',
      ar: 'إن اعتماد الأناجيل الإزائية بعضها على بعض أمر تسنده الأدلة، وكذلك القول إن يوحنا يختلف عنها اختلافًا كبيرًا. أما هل يحفظ أي إنجيل شهادة عيان، وبأي درجة من المباشرة، فمحل نقاش حي بين باحثين يختلفون في الشواهد والمنهج.',
    },
  },
  whyExamine: {
    en: [
      'Some say the Gospels are “four independent eyewitness accounts”; others call them “four anonymous copies of one another”. Neither phrase is right. A believer should know exactly what the Gospels are, so that the defence of the faith is accurate and strong.',
      'Seeing how the Gospels rest on testimony, and how other early evidence confirms them, shows why the Church trusts them as the apostolic witness to Christ.',
    ],
    ar: [
      'يقول بعضهم إن الأناجيل «أربع شهادات عيان مستقلة»، ويسميها آخرون «أربع نسخ مجهولة تنقل بعضها عن بعض». ولا تصح أي العبارتين. وينبغي للمؤمن أن يعرف بدقة ما هي الأناجيل، لكي يكون دفاعه عن الإيمان دقيقًا وقويًا.',
      'ورؤية كيف تقوم الأناجيل على الشهادة، وكيف تؤكدها شواهد مبكرة أخرى، تبيّن لماذا تثق بها الكنيسة شهادةً رسولية للمسيح.',
    ],
  },
  background: {
    en: [
      'The Synoptic problem concerns the close similarity of Matthew, Mark and Luke, which often share the same stories in the same order and sometimes in nearly the same words. The most widely held solution is that Mark was written first and was used by Matthew and Luke. Many add a second shared source, usually called Q, for material found in Matthew and Luke but not Mark; some propose instead that Luke used Matthew. Scholars who hold other solutions exist, for example those who think Matthew came first. On almost every solution, the three Gospels are connected by copying and not three separate reports.',
      'John tells a different story in many respects: a ministry across several visits to Jerusalem, long discourses, different miracles, and different timing for some events. Most scholars therefore see John as drawing on its own tradition. Some argue that John knew one or more of the other Gospels. All the Gospels refer to some events in common, such as the feeding of the multitude, the passion and the empty tomb, and this gives some independent overlap.',
      'On what the books say about their own sources: Luke’s prologue refers to eyewitnesses handing down what they saw and to earlier accounts, which the author used and arranged. The Gospel of John says of the one who saw the piercing at the cross that his testimony is true, and, at its close, speaks of the disciple who testifies to these things. The First Letter of John, whose author is a matter of discussion, opens by speaking of what was heard, seen and touched. Mark and Matthew do not describe their sources in the text. Early Christian writers such as Papias, as quoted by Eusebius, said that he preferred the living voice of those who had followed the elders to what is written in books, and linked the Gospel of Mark with Peter’s teaching.',
      'Richard Bauckham argues that the Gospels preserve the testimony of named eyewitnesses, and that features of the texts, such as the names of minor characters and the shape of the narratives, point to it. Bart Ehrman and others stress the distance in time and the role of oral retelling. Both agree that the first three Gospels are closely related; the question between them is how directly the eyewitness testimony was kept, and the early Church’s answer is that it was kept faithfully, within the communities the apostles themselves taught.',
    ],
    ar: [
      'تتعلق المسألة الإزائية بالتشابه الوثيق بين متى ومرقس ولوقا، فهي كثيرًا ما تشترك في القصص نفسها بالترتيب نفسه، وأحيانًا بالألفاظ نفسها تقريبًا. والحل الأوسع قبولًا أن مرقس كُتب أولًا واستعمله متى ولوقا. ويضيف كثيرون مصدرًا مشتركًا ثانيًا، يسمى عادة Q، للمادة الموجودة في متى ولوقا ولا توجد في مرقس؛ ويقترح بعضهم بدلًا من ذلك أن لوقا استعمل متى. وهناك باحثون يقولون بحلول أخرى، كمن يرى أن متى كُتب أولًا. وفي كل الحلول تقريبًا ترتبط الأناجيل الثلاثة بالنقل، فليست ثلاثة تقارير منفصلة.',
      'ويروي يوحنا قصة مختلفة في جوانب كثيرة: خدمة تمتد عبر زيارات عدة إلى أورشليم، وخطب طويلة، ومعجزات مختلفة، وتوقيتًا مختلفًا لبعض الأحداث. ولذلك يرى أكثر الباحثين أن يوحنا يعتمد على تقليده الخاص. ويرى بعضهم أن يوحنا عرف إنجيلًا أو أكثر من الأناجيل الأخرى. وتشير الأناجيل كلها إلى بعض الأحداث المشتركة، كإشباع الجموع والآلام والقبر الفارغ، وهذا يعطي تداخلًا مستقلًا إلى حد ما.',
      'وعن قول الأسفار في مصادرها: تشير مقدمة لوقا إلى معاينين سلّموا ما رأوه وإلى روايات سابقة استعملها الكاتب ورتّبها. ويقول إنجيل يوحنا عن الذي رأى الطعنة عند الصليب إن شهادته حق، ويتكلم في خاتمته عن التلميذ الذي يشهد بهذه الأمور. وتبدأ رسالة يوحنا الأولى، وكاتبها موضع نقاش، بالكلام عما سُمع ورُئي ولُمس. أما مرقس ومتى فلا يصفان مصادرهما في النص. وقال كتّاب مسيحيون مبكرون، مثل بابياس في نقل أوسابيوس عنه، إنه يفضّل الصوت الحي للذين تبعوا الشيوخ على ما في الكتب، وربطوا إنجيل مرقس بتعليم بطرس.',
      'ويحتج ريتشارد بوكهام بأن الأناجيل تحفظ شهادة شهود عيان مسمَّين، وبأن سمات في النصوص، كأسماء شخصيات ثانوية وبناء الروايات، تشير إلى ذلك. ويشدد بارت إيرمان وآخرون على البعد الزمني ودور الرواية الشفهية. ويتفق الاثنان على أن الأناجيل الثلاثة الأولى مترابطة؛ والسؤال بينهما هو مدى مباشرة حفظ شهادة العيان، وجواب الكنيسة الأولى أنها حُفظت بأمانة، في الجماعات التي علّمها الرسل أنفسهم.',
    ],
  },
  glossary: ['eyewitness', 'synoptic-gospels', 'gospel', 'independent-attestation', 'primary-source', 'secondary-source'],
  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'Matthew, Mark and Luke share a common body of material and wording, so they are not three wholly separate reports.',
        ar: 'يشترك متى ومرقس ولوقا في مادة وألفاظ مشتركة، فليسوا ثلاثة تقارير منفصلة تمامًا.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The three often tell the same stories in the same order and in nearly the same words, as a comparison of the feeding of the five thousand shows. This literary connection means their agreement is one strand of testimony, not three. It also shows how carefully the tradition was kept and passed on.',
        ar: 'كثيرًا ما تروي الثلاثة القصص نفسها بالترتيب نفسه وبألفاظ متقاربة جدًا، كما تُظهر المقارنة في إشباع الخمسة آلاف. وهذه الصلة الأدبية تعني أن اتفاقها خيط واحد من الشهادة لا ثلاثة. وهي تُظهر أيضًا عناية حفظ التقليد وتسليمه.',
      },
      limits: {
        en: 'Dependence in writing does not show that the underlying tradition is false. It means that the three cannot be counted as three separate confirmations.',
        ar: 'الاعتماد في الكتابة لا يبيّن أن التقليد الكامن كاذب. إنه يعني أن الثلاثة لا تُحسب ثلاث تأكيدات منفصلة.',
      },
      evidence: ['e1'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'St Luke and the Gospel of John state that their accounts rest on eyewitness testimony.',
        ar: 'يصرّح القديس لوقا وإنجيل يوحنا بأن روايتيهما قائمتان على شهادة العيان.',
      },
      argumentType: 'textual',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'St Luke writes that he carefully traced what was handed on by eyewitnesses. The Gospel of John says of the one who saw the blood and water at the cross that his testimony is true, and it closes by naming the disciple who bears witness and wrote these things. The First Letter of John speaks in the same way of what was heard, seen and touched.',
        ar: 'يكتب القديس لوقا أنه تتبع بتدقيق ما سلّمه المعاينون. ويقول إنجيل يوحنا عن الذي رأى الدم والماء عند الصليب إن شهادته حق، ويختم بذكر التلميذ الذي يشهد وكتب هذه الأمور. وتتكلم رسالة يوحنا الأولى بالطريقة نفسها عما سُمع ورُئي ولُمس.',
      },
      limits: {
        en: 'A claim of testimony in a text is a self-description by an ancient author, not proof.',
        ar: 'ادعاء الشهادة في نص ما وصف ذاتي من كاتب قديم وليس برهانًا.',
      },
      evidence: ['e2', 'e3', 'e4'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'The Gospels carry eyewitness testimony: they rely on traditions going back to people who saw Jesus.',
        ar: 'تحمل الأناجيل شهادة العيان: فهي تعتمد على تقاليد ترجع إلى أناس رأوا يسوع.',
      },
      argumentType: 'historical',
      assessment: 'actively_debated',
      rationale: {
        en: 'Richard Bauckham argues that features of the Gospels, such as the names of minor characters who could still be asked, point to named eyewitnesses behind them. Bart Ehrman stresses the years between the events and the writing, and the role of oral retelling. Yet the testimony was handed on in the apostles’ own lifetime, within communities they led, which kept it faithfully.',
        ar: 'يحتج ريتشارد بوكهام بأن سمات في الأناجيل، كأسماء شخصيات ثانوية كان يمكن سؤالها، تشير إلى شهود عيان مسمَّين وراءها. ويشدد بارت إيرمان على السنين بين الأحداث والكتابة وعلى دور الرواية الشفهية. لكن الشهادة سُلّمت في حياة الرسل أنفسهم، في جماعات قادوها، فحفظتها بأمانة.',
      },
      limits: {
        en: 'Neither account can be tested by an experiment on first-century communities.',
        ar: 'لا يمكن اختبار أي من التفسيرين بتجربة على جماعات القرن الأول.',
      },
      evidence: ['e6', 'e7', 'e4'],
    },
    {
      id: 'c4',
      proposition: {
        en: 'St Paul’s letters give early evidence for the death and resurrection of Christ, independent of the Gospels.',
        ar: 'تقدم رسائل القديس بولس شواهد مبكرة على موت المسيح وقيامته، مستقلة عن الأناجيل.',
      },
      argumentType: 'historical',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'In his first letter to the Corinthians, St Paul hands on the message he received and names witnesses of the risen Lord, most of whom were still alive. In his letter to the Galatians he tells of his visits to Peter and James in Jerusalem. These letters are earlier than the Gospels and do not depend on them.',
        ar: 'في رسالته الأولى إلى كورنثوس يسلّم القديس بولس الرسالة التي تسلمها ويسمّي شهودًا للرب القائم، كان أكثرهم ما زالوا أحياء. وفي رسالته إلى غلاطية يروي لقاءه ببطرس ويعقوب في أورشليم. وهذه الرسائل أقدم من الأناجيل ولا تعتمد عليها.',
      },
      limits: {
        en: 'They give an outline, not the detail of the Gospel stories.',
        ar: 'تعطي الخطوط العامة لا تفاصيل القصص الإنجيلية.',
      },
      evidence: ['e8', 'e9'],
    },
  ],
  evidence: [
    {
      id: 'e1',
      sourceId: 'S62',
      locator: 'Mark 6:30-44 and Matthew 14:13-21 (compared)',
      role: 'context',
      states: {
        en: 'Mark and Matthew each tell the feeding of the five thousand in the same sequence, with many of the same phrases and with the same number of loaves and fishes.',
        ar: 'يروي مرقس ومتى كلاهما إشباع الخمسة آلاف بالتتابع نفسه، وفي كثير من العبارات نفسها، وبعدد الأرغفة والأسماك نفسه.',
      },
      inference: {
        en: 'A reader can see for themselves the closeness that leads scholars to think of dependence. The passages are given as an example only, and the direction of dependence is argued from many passages.',
        ar: 'يستطيع القارئ أن يرى بنفسه هذا القرب الذي يدفع الباحثين إلى القول بالاعتماد. والفقرتان مثال فقط، ويُحتج لاتجاه الاعتماد من فقرات كثيرة.',
      },
      bible: { book: 'mark', chapter: 6, verse: '30-44' },
    },
    {
      id: 'e2',
      sourceId: 'S62',
      locator: 'Luke 1:1-4',
      role: 'supports',
      states: {
        en: 'Luke writes that many had compiled accounts of events handed on by eyewitnesses and servants of the word, and that he has traced everything from the start in order to write an orderly account.',
        ar: 'يكتب لوقا أن كثيرين ألّفوا روايات عن أحداث سلّمها معاينون وخدام للكلمة، وأنه تتبع كل شيء من الأول ليكتب رواية مرتبة.',
      },
      inference: {
        en: 'Luke does not claim to be an eyewitness; he claims to rely on eyewitness tradition and earlier written sources. This is a clear statement of dependence, and it confirms that the Gospel is not an independent report.',
        ar: 'لا يدّعي لوقا أنه شاهد عيان؛ يدّعي أنه يعتمد على تقليد المعاينين ومصادر مكتوبة سابقة. وهذا تصريح واضح بالاعتماد، ويؤكد أن الإنجيل ليس تقريرًا مستقلًا.',
      },
      bible: { book: 'luke', chapter: 1, verse: '1-4' },
    },
    {
      id: 'e3',
      sourceId: 'S62',
      locator: 'John 19:35; John 21:24',
      role: 'supports',
      states: {
        en: 'The Gospel of John says of the one who saw the blood and water at the cross that his testimony is true and given so that others may believe. It closes with a statement identifying the disciple who testifies and who wrote these things.',
        ar: 'يقول إنجيل يوحنا عن الذي رأى الدم والماء عند الصليب إن شهادته حق وإنه يشهد ليؤمن الآخرون. ويختتم بعبارة تحدد التلميذ الذي يشهد وكتب هذه الأمور.',
      },
      inference: {
        en: 'The Gospel presents itself as resting on a named kind of witness, the disciple, whose identity is a matter of discussion. As a claim in an ancient text it is a statement to be examined and not a proof.',
        ar: 'يقدم الإنجيل نفسه قائمًا على نوع من الشهود، هو التلميذ، وهويته موضع نقاش. وهو، بوصفه دعوى في نص قديم، عبارة تُفحص لا برهان.',
      },
      bible: { book: 'john', chapter: 19, verse: '35' },
    },
    {
      id: 'e4',
      sourceId: 'S12',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'Richard Bauckham argues that the Gospels rest on and preserve the testimony of eyewitnesses who are named within them. This thesis is contested; the publisher’s page is all that is cited here.',
        ar: 'يحتج ريتشارد بوكهام بأن الأناجيل تقوم على شهادة شهود عيان مسمَّين فيها وتحفظها. وهذه الأطروحة متنازع عليها، والمذكور هنا صفحة الناشر فقط.',
      },
      inference: {
        en: 'This is the strongest scholarly case for the view that the Gospels carry eyewitness testimony. It is a historical argument made without relying on inspiration.',
        ar: 'هذه أقوى حجة علمية للرأي القائل إن الأناجيل تحمل شهادة عيان. وهي حجة تاريخية لا تعتمد على الوحي.',
      },
    },
    {
      id: 'e6',
      sourceId: 'S13',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'challenges',
      states: {
        en: 'Bart Ehrman, who describes himself as an agnostic, argues that the Gospels were written decades after the events and shaped by the oral retelling of stories, so that they cannot be treated as records of eyewitnesses. Only the author’s page is cited.',
        ar: 'يحتج بارت إيرمان، الذي يصف نفسه بأنه لا أدري، بأن الأناجيل كُتبت بعد الأحداث بعقود وتشكلت بإعادة رواية القصص شفهيًا، فلا تُعامل سجلات لشهود عيان. والمذكور صفحة المؤلف فقط.',
      },
      inference: {
        en: 'This is the main scholarly case against the view that the Gospels preserve eyewitness testimony directly, and it should be read alongside Bauckham’s.',
        ar: 'هذه الحجة العلمية الرئيسية ضد القول إن الأناجيل تحفظ شهادة العيان مباشرة، وتُقرأ إلى جانب حجة بوكهام.',
      },
    },
    {
      id: 'e7',
      sourceId: 'S62',
      locator: '1 John 1:1-3',
      role: 'context',
      states: {
        en: 'The opening of the First Letter of John speaks of what was heard, seen with the eyes, looked upon and touched concerning the Word of life.',
        ar: 'تتكلم بداية رسالة يوحنا الأولى عما سُمع ورُئي بالعيون وتُؤمل ولُمس عن كلمة الحياة.',
      },
      inference: {
        en: 'A letter in the Johannine tradition describes its message in the language of direct experience. The letter’s author is a matter of discussion, and the passage does not by itself say that the Gospel of John was written by an eyewitness.',
        ar: 'تصف رسالة في التقليد اليوحناوي رسالتها بلغة الخبرة المباشرة. وكاتب الرسالة موضع نقاش، والفقرة لا تقول بذاتها إن إنجيل يوحنا كتبه شاهد عيان.',
      },
      bible: { book: '1-john', chapter: 1, verse: '1-3' },
    },
    {
      id: 'e8',
      sourceId: 'S62',
      locator: '1 Corinthians 15:3-7',
      role: 'supports',
      states: {
        en: 'St Paul lists what he received and passed on, including appearances of the risen Christ to Cephas, the Twelve, more than five hundred at once and James, and says that most of the five hundred were still alive.',
        ar: 'يسرد القديس بولس ما تسلمه وسلّمه، ومنه ظهورات المسيح القائم لصفا والاثني عشر وأكثر من خمسمئة دفعة واحدة وليعقوب، ويقول إن أكثر الخمسمئة ما زالوا أحياء.',
      },
      inference: {
        en: 'In the 50s, outside the Gospels, an early writer names people who could be asked. This is evidence that the claim rested on named witnesses, whatever one concludes about what they saw.',
        ar: 'في الخمسينيات، خارج الأناجيل، يسمّي كاتب مبكر أشخاصًا يمكن سؤالهم. وهذا شاهد على أن الدعوى قامت على شهود مسمَّين، أيًّا كان الاستنتاج في ما رأوه.',
      },
      bible: { book: '1-corinthians', chapter: 15, verse: '3-7' },
    },
    {
      id: 'e9',
      sourceId: 'S62',
      locator: 'Galatians 1:18-19; 2:9',
      role: 'supports',
      states: {
        en: 'St Paul says that he went to Jerusalem to visit Cephas and saw James the Lord’s brother, and that James, Cephas and John were recognised as pillars of the church there.',
        ar: 'يقول القديس بولس إنه صعد إلى أورشليم ليزور صفا ورأى يعقوب أخا الرب، وإن يعقوب وصفا ويوحنا كانوا يُعدّون أعمدة الكنيسة هناك.',
      },
      inference: {
        en: 'St Paul claims personal contact with leading disciples early on. This is a first-person claim by a man who had been a persecutor, to be weighed as such, and it fits the idea that the apostolic circle was a source of the tradition.',
        ar: 'يدّعي القديس بولس اتصالًا شخصيًا بتلاميذ قادة في وقت مبكر. وهي دعوى بضمير المتكلم من رجل كان مضطهدًا، تُوزن على هذا الأساس، وتلائم فكرة أن الدائرة الرسولية كانت مصدرًا للتقليد.',
      },
      bible: { book: 'galatians', chapter: 2, verse: '9' },
    },
  ],
  objections: [
    {
      id: 'o1',
      statement: {
        en: 'If the Gospels depend on one another, then their agreement proves nothing, and the claim of four witnesses is false.',
        ar: 'إن كانت الأناجيل يعتمد بعضها على بعض فاتفاقها لا يثبت شيئًا، ودعوى أربعة شهود كاذبة.',
      },
      response: {
        en: [
          'Agreement between a source and those who drew on it counts once, not several times, and so the phrase “four independent witnesses” is best avoided.',
          'But a writer who uses an earlier source can preserve it faithfully, and the Evangelists did. The case rests on the faithful handing on of apostolic testimony, confirmed independently by the distinct tradition of John and by the letters of St Paul. That is a strong foundation.',
        ],
        ar: [
          'اتفاق المصدر ومن اقتبس منه يُحسب مرة واحدة لا مرات، ولذلك يحسن تجنب عبارة «أربعة شهود مستقلين».',
          'لكن الكاتب الذي يستعمل مصدرًا أقدم قد يحفظه بأمانة، وهذا ما فعله الإنجيليون. فالحجة قائمة على أمانة تسليم شهادة الرسل، ويؤكدها تأكيدًا مستقلًا تقليد يوحنا المتميز ورسائل القديس بولس. وهذا أساس متين.',
        ],
      },
      limits: {
        en: 'It does not show that the earliest source (Mark or the tradition behind it) was accurate.',
        ar: 'لا يثبت أن المصدر الأقدم (مرقس أو التقليد وراءه) كان دقيقًا.',
      },
      evidence: ['e1', 'e2', 'e8'],
    },
    {
      id: 'o2',
      statement: {
        en: 'The Gospels are anonymous and were written in Greek by people who were not Galilean fishermen, so they are not eyewitness accounts.',
        ar: 'الأناجيل مجهولة الاسم وكتبها باليونانية أناس ليسوا صيادين جليليين، فليست روايات شهود عيان.',
      },
      response: {
        en: [
          'The Gospels do not name their authors in the text, and they were written in Greek. Neither fact counts against eyewitness testimony. Greek was widely used in the region, and the early Church named the authors consistently.',
          'The Church holds that Matthew and John were apostles, that St Mark wrote down St Peter’s preaching, and that St Luke gathered his account from eyewitnesses. Writing in Greek, or with the help of others, fits all of this. The article on authorship sets out the evidence in full.',
        ],
        ar: [
          'لا تذكر الأناجيل أسماء كتّابها في النص، وقد كُتبت باليونانية. ولا يطعن أي من الأمرين في شهادة العيان. فاليونانية كانت واسعة الانتشار في المنطقة، والكنيسة الأولى ذكرت أسماء الكتّاب باتفاق.',
          'وتؤمن الكنيسة بأن متى ويوحنا رسولان، وبأن القديس مرقس دوّن كرازة القديس بطرس، وبأن القديس لوقا جمع روايته من المعاينين. والكتابة باليونانية، أو بمعونة آخرين، تلائم هذا كله. وتعرض مقالة التأليف الشواهد كاملة.',
        ],
      },
      limits: {
        en: 'It does not prove that any Gospel is the work of an eyewitness.',
        ar: 'لا يثبت أن أي إنجيل هو من عمل شاهد عيان.',
      },
      evidence: ['e2', 'e3', 'e4'],
    },
    {
      id: 'o3',
      statement: {
        en: 'The differences between the Gospels in the resurrection accounts show that they cannot be accurate eyewitness reports.',
        ar: 'الفروق بين الأناجيل في روايات القيامة تبيّن أنها لا يمكن أن تكون تقارير شهود عيان دقيقة.',
      },
      response: {
        en: [
          'The accounts differ in details such as who was at the tomb and the order of events. They agree on the heart of the matter: the tomb was found empty, and women were the first witnesses. All four report it.',
          'Differences in secondary detail are what honest reports of a stirring event usually show. A perfectly matched account would suggest collusion. The article on apparent contradictions shows how the accounts fit together.',
        ],
        ar: [
          'تختلف الروايات في تفاصيل مثل الحاضرين عند القبر وترتيب الأحداث. وتتفق في جوهر الأمر: وُجد القبر فارغًا، وكانت النساء أول الشاهدات. وتذكر ذلك الأناجيل الأربعة كلها.',
          'والاختلاف في التفاصيل الثانوية هو ما تُظهره عادة التقارير الأمينة عن حدث مؤثر. أما الرواية المتطابقة تمامًا فتوحي بالتواطؤ. وتبيّن مقالة التناقضات الظاهرية كيف تتلاءم الروايات.',
        ],
      },
      limits: {
        en: 'It does not remove the real tension between some details.',
        ar: 'لا يزيل التوتر الحقيقي بين بعض التفاصيل.',
      },
      evidence: ['e8'],
    },
  ],
  christianResponse: {
    historical: {
      en: [
        'The Gospels are early accounts, written within the lifetime of the first generation or soon after, that rest on the testimony of people who knew Jesus. The first three share a common tradition, and John adds a distinct one. St Paul’s letters, which are earlier still, give separate evidence for the core: the death of Christ, His burial, His resurrection and His appearances to named witnesses.',
        'Read simply as ancient documents, then, the Gospels are the kind of source a historian values most: close to the events and grounded in testimony.',
      ],
      ar: [
        'الأناجيل روايات مبكرة، كُتبت في حياة الجيل الأول أو بعده بقليل، وتقوم على شهادة أناس عرفوا يسوع. وتشترك الثلاثة الأولى في تقليد واحد، ويضيف يوحنا تقليدًا متميزًا. وتقدم رسائل القديس بولس، وهي أقدم، شاهدًا منفصلًا على الجوهر: موت المسيح ودفنه وقيامته وظهوره لشهود مسمَّين.',
        'فالأناجيل، إذا قُرئت وثائق قديمة فحسب، هي من نوع المصادر الذي يقدّره المؤرخ أكثر من غيره: قريبة من الأحداث ومؤسسة على الشهادة.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that the apostles were chosen witnesses of the resurrection, and that the Gospel is the apostolic witness written under the Holy Spirit. For her, the four Gospels are not four sources to be counted, but one Gospel in four forms, received together.',
        'The historical evidence above and the faith of the Church point the same way: the Gospels are the faithful witness of those who saw the Lord.',
      ],
      ar: [
        'تعترف الكنيسة بأن الرسل كانوا شهودًا مختارين للقيامة، وبأن الإنجيل هو الشهادة الرسولية المكتوبة بالروح القدس. والأناجيل الأربعة عندها ليست أربعة مصادر تُعدّ، بل إنجيل واحد في أربع صور، يُتسلّم معًا.',
        'والشواهد التاريخية أعلاه وإيمان الكنيسة يشيران إلى الاتجاه نفسه: الأناجيل شهادة أمينة من الذين رأوا الرب.',
      ],
    },
  },
  coptic: {
    en: [
      'The Coptic Orthodox Church receives the Gospel as the preaching of the apostles. She holds that St Mark, whom she honours as the founder of the Church of Alexandria, wrote the second Gospel, and she reads the four Gospels together in her services, without setting them against one another.',
    ],
    ar: [
      'تتسلم الكنيسة القبطية الأرثوذكسية الإنجيل كرازة الرسل. وهي تؤمن بأن القديس مرقس، الذي تكرمه مؤسسًا لكنيسة الإسكندرية، كتب الإنجيل الثاني، وتقرأ الأناجيل الأربعة معًا في خدماتها دون أن تضع بعضها في مواجهة بعض.',
    ],
  },
  disputed: {
    en: [
      'Scholars disagree about the solution to the Synoptic problem, about whether John knew the other Gospels, about whether the beloved disciple is a historical person and who he was, and about the weight of the features Bauckham cites. They also disagree about whether the term “eyewitness” is helpful for texts that were shaped by tradition and editing.',
      'These disagreements do not divide scholars neatly into believers and non-believers: some Christian scholars hold that the Gospels have less direct contact with eyewitnesses than the traditional view, and some non-Christian scholars take the early testimony more seriously.',
    ],
    ar: [
      'يختلف الباحثون في حل المسألة الإزائية، وفي هل عرف يوحنا الأناجيل الأخرى، وفي هل التلميذ الحبيب شخص تاريخي ومن هو، وفي وزن السمات التي يستشهد بها بوكهام. ويختلفون أيضًا في هل مصطلح «شاهد عيان» نافع لنصوص شكّلها التقليد والتحرير.',
      'ولا تقسم هذه الخلافات الباحثين بوضوح إلى مؤمنين وغير مؤمنين: فبعض الباحثين المسيحيين يرون أن اتصال الأناجيل بشهود العيان أقل مباشرة مما يراه الرأي التقليدي، وبعض الباحثين غير المسيحيين يأخذون الشهادة المبكرة بجدية أكبر.',
    ],
  },
  conclusion: {
    en: 'The Gospels are the apostolic witness to Jesus Christ. They rest on the testimony of those who saw Him: Matthew and John were apostles, St Mark wrote down St Peter’s preaching, and St Luke gathered his account from eyewitnesses. The first three share a common tradition, John adds his own, and the earlier letters of St Paul confirm the same core. The Church receives them together as one Gospel in four forms.',
    ar: 'الأناجيل هي الشهادة الرسولية ليسوع المسيح. وهي قائمة على شهادة الذين رأوه: فمتى ويوحنا رسولان، والقديس مرقس دوّن كرازة القديس بطرس، والقديس لوقا جمع روايته من المعاينين. وتشترك الثلاثة الأولى في تقليد واحد، ويضيف يوحنا تقليده، وتؤكد رسائل القديس بولس الأقدم الجوهر نفسه. وتتسلمها الكنيسة معًا إنجيلًا واحدًا في أربع صور.',
  },
  furtherReading: ['S12', 'S13', 'S62'],
  related: ['who-wrote-the-gospels', 'when-were-the-gospels-written', 'oral-transmission', 'apparent-contradictions', 'did-jesus-exist', 'early-belief-vs-evidence'],
};
