import type { Article } from '../types.ts';

export const article: Article = {
  id: 'apparent-contradictions',
  questionId: 'apparent-contradictions',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article asks how to examine passages of the Bible that seem to disagree with each other. It does not try to answer every alleged contradiction. It sets out a method (what counts as a contradiction, what to check first, how genre and purpose bear on the question) and tests it on a few well-known cases, saying plainly which have good explanations and which remain open. The two Resurrection accounts have their own article.',
    ar: 'تسأل هذه المقالة كيف تُفحص المقاطع التي تبدو متعارضة في الكتاب المقدس. وهي لا تحاول الإجابة عن كل تناقض مزعوم. بل تعرض منهجًا (ما الذي يُعدّ تناقضًا، وما الذي يُفحص أولًا، وكيف يؤثر النوع الأدبي والغرض في المسألة) وتجربه على بضع حالات مشهورة، قائلة بوضوح أيها له تفسير جيد وأيها ما زال مفتوحًا. أما روايات القيامة فلها مقالتها الخاصة.',
  },
  shortAnswer: {
    en: 'A contradiction exists when two statements cannot both be true in the same sense at the same time. Many apparent contradictions disappear when the reader asks what each writer was doing: selecting, summarising, arranging by theme, or using a number or a name in the way his time did. Some have more than one reasonable explanation, and a few remain unresolved. Honest examination keeps these three groups apart, does not force a harmony that the text does not support, and does not treat a difference of detail as an error without asking what the difference is for.',
    ar: 'يوجد التناقض حين لا يمكن أن يصدق قولان معًا بالمعنى نفسه في الوقت نفسه. وكثير من التناقضات الظاهرية يزول حين يسأل القارئ ماذا كان كل كاتب يفعل: ينتقي أو يلخص أو يرتب بحسب الموضوع أو يستعمل رقمًا أو اسمًا بالطريقة التي كان زمنه يستعملها. وبعضها له أكثر من تفسير معقول، وقليل منها ما زال بلا حل. والفحص الأمين يُبقي هذه المجموعات الثلاث منفصلة، ولا يفرض انسجامًا لا يسنده النص، ولا يعدّ اختلاف التفصيل خطأً دون أن يسأل لماذا هذا الاختلاف.',
  },
  quickPoints: {
    en: [
      'First ask whether the two statements really say incompatible things in the same sense, about the same time and the same person.',
      'Check the translation and the text: some differences come from the translator’s choice or from a variant reading.',
      'Ask what kind of writing it is and what the writer is trying to do; ancient histories paraphrased speech and arranged events by theme.',
      'Be honest about three outcomes: a good explanation, several possible explanations, and cases that remain open.',
      'The Church has never made the harmonising of every detail a condition of faith, and her Fathers sometimes admitted that a difficulty remained.',
    ],
    ar: [
      'اسأل أولًا هل يقول القولان فعلًا أمرين متعارضين بالمعنى نفسه عن الزمن نفسه والشخص نفسه.',
      'افحص الترجمة والنص: فبعض الفروق من اختيار المترجم أو من قراءة متغايرة.',
      'اسأل أي نوع من الكتابة هو وماذا يحاول الكاتب أن يفعل؛ فالتواريخ القديمة كانت تعيد صياغة الكلام وترتب الأحداث بحسب الموضوع.',
      'كن أمينًا في ثلاث نتائج: تفسير جيد، وعدة تفسيرات ممكنة، وحالات تبقى مفتوحة.',
      'لم تجعل الكنيسة قط التوفيق بين كل تفصيل شرطًا للإيمان، وقد اعترف آباؤها أحيانًا بأن صعوبة ما بقيت.',
    ],
  },
  argumentTypes: ['textual', 'historical', 'theological'],
  assessment: {
    label: 'supported_disputed_details',
    explanation: {
      en: 'The method of examining apparent contradictions is well established in how historians and biblical scholars work, and the sample cases show that many have reasonable explanations. Whether a particular case is solved, and whether any difference amounts to an error, are disputed, and different traditions answer the second question in different ways.',
      ar: 'منهج فحص التناقضات الظاهرية مستقر في عمل المؤرخين والدارسين الكتابيين، وتبيّن الحالات النموذجية أن لكثير منها تفسيرات معقولة. أما هل حالة بعينها قد حُلّت، وهل يبلغ أي فرق حد الخطأ، فمختلف فيهما، وتجيب التقاليد المختلفة عن السؤال الثاني بطرق مختلفة.',
    },
  },

  whyExamine: {
    en: [
      'Lists of “Bible contradictions” are common online, and a believer who meets one may be unsettled. A sceptic who meets an easy reply may feel brushed off. Both are better served by a method that can be followed than by a verdict.',
      'The method also applies far beyond the Bible. Historians face differing reports of the same event all the time and have ways of working with them. Applying the same care to the Bible is neither special pleading nor an attack.',
    ],
    ar: [
      'قوائم «تناقضات الكتاب المقدس» شائعة على الإنترنت، وقد يضطرب المؤمن الذي يلقى إحداها. وقد يشعر المتشكك الذي يلقى ردًّا سهلًا بأنه أُهمل. وكلاهما يخدمه منهج يمكن اتباعه أكثر من حكم.',
      'والمنهج ينطبق أيضًا في مجالات أبعد بكثير من الكتاب المقدس. فالمؤرخون يواجهون روايات مختلفة للحدث الواحد دائمًا ولهم طرق للتعامل معها. وتطبيق العناية نفسها على الكتاب المقدس ليس استعطافًا خاصًا ولا هجومًا.',
    ],
  },
  background: {
    en: [
      'In logic, a contradiction needs the same subject, the same sense and the same time. “He was there” and “he was not there” do not contradict each other if they refer to different days. So the first step is to state both claims exactly. Many alleged contradictions are about wording that, once set out, claims less than it seemed to.',
      'The second step concerns the text. Translations differ and manuscripts sometimes differ. A difference may be in an English or Arabic rendering and not in the Greek or Hebrew, or in a reading that scholars regard as a later change. The articles on textual variants and on footnoted passages show how this is checked.',
      'The third step concerns the kind of writing. Ancient historians and biographers did not use quotation marks, often reported the sense of speech rather than the exact words, and arranged material by theme as well as by time. Luke says that he had investigated and set things in order, and John says that Jesus did many other things that were not written down, which shows that the writers selected. Numbers, genealogies and names were also used with conventions that differ from ours.',
      'Early Christian readers were aware of the difficulties. Augustine wrote a long work on the agreement of the Evangelists. Origen of Alexandria noted places where the narrative does not run smoothly and took them as a call to look for a deeper meaning. Others offered harmonies, and sometimes several. The tradition did not hide the difficulties, and it also did not treat every harmony as certain.',
    ],
    ar: [
      'يحتاج التناقض في المنطق إلى الموضوع نفسه والمعنى نفسه والزمن نفسه. فقول «كان هناك» وقول «لم يكن هناك» لا يتناقضان إن كانا يشيران إلى يومين مختلفين. فالخطوة الأولى أن يُذكر القولان بدقة. وكثير من التناقضات المزعومة تدور حول ألفاظ تدّعي، حين تُعرض، أقل مما بدا.',
      'والخطوة الثانية تتعلق بالنص. فالترجمات تختلف والمخطوطات تختلف أحيانًا. وقد يكون الفرق في صياغة عربية أو إنجليزية لا في اليونانية أو العبرية، أو في قراءة يراها الباحثون تغييرًا لاحقًا. وتبيّن مقالتا القراءات المتغايرة والمقاطع ذات الحواشي كيف يُتحقق من ذلك.',
      'والخطوة الثالثة تتعلق بنوع الكتابة. فلم يستعمل المؤرخون وكتّاب السير القدماء علامات الاقتباس، وكثيرًا ما نقلوا معنى الكلام لا ألفاظه، ورتبوا المادة بحسب الموضوع كما بحسب الزمن. ويقول لوقا إنه تتبع ورتب، ويقول يوحنا إن يسوع صنع أشياء أخرى كثيرة لم تُكتب، وهذا يبيّن أن الكتّاب انتقوا. واستعملت الأرقام والأنساب والأسماء بأعراف تختلف عن أعرافنا.',
      'وكان القراء المسيحيون الأوائل واعين بالصعوبات. فقد كتب أغسطينوس عملًا طويلًا عن اتفاق الإنجيليين. ولاحظ أوريجانوس السكندري مواضع لا يسير فيها السرد بسلاسة وعدّها دعوة إلى طلب معنى أعمق. وقدّم آخرون توفيقات، وأحيانًا عدة توفيقات. فلم يُخفِ التقليد الصعوبات، ولم يعدّ كل توفيق يقينيًا.',
    ],
  },
  glossary: ['textual-variant', 'textual-criticism', 'synoptic-gospels', 'inspiration', 'tradition', 'manuscript'],

  claims: [
    {
      id: 'C1',
      proposition: {
        en: 'Many apparent contradictions between the Gospels are differences of selection, arrangement or detail that do not make the accounts incompatible.',
        ar: 'كثير من التناقضات الظاهرية بين الأناجيل فروق في الانتقاء أو الترتيب أو التفصيل لا تجعل الروايات متعارضة.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The healing of the centurion’s servant is told in Matthew as an approach made by the centurion himself and in Luke through messengers, and the blind man at Jericho is one in Mark and two in Matthew. Both can be read as differences of how a story is told or how much of it is told.',
        ar: 'تُروى شفاء غلام قائد المئة في متى بأن القائد جاء بنفسه وفي لوقا بإرسال وسطاء، ويُذكر الأعمى عند أريحا واحدًا في مرقس واثنين في متى. ويمكن أن يُقرأ الأمران كاختلاف في كيفية رواية القصة أو مقدار ما رُوي منها.',
      },
      limits: {
        en: 'These readings are reasonable but not proved, and a sceptic may say they are harmonising. The article treats them as readings.',
        ar: 'هذه القراءات معقولة لكنها لم تثبت، وقد يقول متشكك إنها توفيق. وتعاملها المقالة قراءات.',
      },
      evidence: ['E1', 'E2'],
    },
    {
      id: 'C2',
      proposition: {
        en: 'Some differences remain in which more than one explanation is offered and none is decisive, such as the two genealogies of Jesus and the accounts of the death of Judas.',
        ar: 'تبقى بعض الفروق التي يُقدَّم لها أكثر من تفسير ولا حاسم فيها، كنسبي يسوع وروايتي موت يهوذا.',
      },
      argumentType: 'textual',
      assessment: 'actively_debated',
      rationale: {
        en: 'The genealogies in Matthew and Luke differ after David, and Matthew and Acts tell of Judas’s death in different ways. Ancient and modern readers have proposed several explanations for each, and none has been accepted by all.',
        ar: 'يختلف النسبان في متى ولوقا بعد داود، ويروي متى والأعمال موت يهوذا بطريقتين مختلفتين. وقد اقترح قراء قدماء ومحدثون تفسيرات عدة لكل منهما، ولم يقبل أحدها الجميع.',
      },
      limits: {
        en: 'That a difficulty is unresolved does not show that the accounts are false, only that the means to resolve it are not at hand.',
        ar: 'عدم حل الصعوبة لا يبيّن أن الروايات باطلة، بل فقط أن وسائل حلها ليست في اليد.',
      },
      evidence: ['E3', 'E4'],
    },
    {
      id: 'C3',
      proposition: {
        en: 'Some apparent errors turn out to be features of how ancient writers cited sources, and they are better described by the writer’s practice than by the label “error”.',
        ar: 'بعض الأخطاء الظاهرية تتبين أنها من سمات طريقة الكتّاب القدماء في الاستشهاد بالمصادر، ويصفها نهج الكاتب أفضل مما يصفها وصف «الخطأ».',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'Mark’s opening attributes a combined quotation to Isaiah, though part of it is from Malachi and Exodus. A writer who joined quotations under the name of the best-known prophet is following a recognised habit, and some manuscripts also read the introduction differently.',
        ar: 'ينسب مطلع مرقس اقتباسًا مركبًا إلى إشعياء، مع أن جزءًا منه من ملاخي والخروج. والكاتب الذي جمع اقتباسات تحت اسم أشهر الأنبياء يتبع عادة معروفة، وبعض المخطوطات تقرأ التمهيد قراءة مختلفة.',
      },
      limits: {
        en: 'It is still a difference of the kind that people who hold a strict doctrine of inerrancy must address, and traditions differ about how.',
        ar: 'وهو مع ذلك فرق من النوع الذي يحتاج من يتمسكون بعقيدة العصمة الصارمة إلى معالجته، وتختلف التقاليد في كيفية ذلك.',
      },
      evidence: ['E5'],
    },
  ],

  evidence: [
    {
      id: 'E1',
      sourceId: 'S62',
      locator: 'Matthew 8:5–13, compared with Luke 7:1–10',
      role: 'context',
      states: {
        en: 'In Matthew the centurion himself comes to Jesus and asks for his servant to be healed. In Luke the centurion sends elders of the Jews and then friends with his message.',
        ar: 'في متى يأتي قائد المئة نفسه إلى يسوع ويطلب شفاء غلامه. وفي لوقا يرسل شيوخ اليهود ثم أصدقاء برسالته.',
      },
      inference: {
        en: 'The difference is real, but it can be read in the way ancient people spoke of messengers: what a man does through his envoys he is said to have done himself. The same words and the same outcome run through both. This is an inference about the convention, not a statement in the text.',
        ar: 'الفرق حقيقي، لكن يمكن أن يُقرأ كما كان القدماء يتحدثون عن الرسل: فما يفعله المرء عن طريق مبعوثيه يقال إنه فعله بنفسه. والكلمات نفسها والنتيجة نفسها تجري في الروايتين. وهذا استنتاج عن العرف لا قول في النص.',
      },
      bible: { book: 'matthew', chapter: 8, verse: '5-13' },
    },
    {
      id: 'E2',
      sourceId: 'S62',
      locator: 'Mark 10:46–52, compared with Matthew 20:29–34',
      role: 'context',
      states: {
        en: 'Mark tells of one blind man, Bartimaeus, healed as Jesus leaves Jericho. Matthew tells of two blind men healed as Jesus leaves Jericho.',
        ar: 'يروي مرقس شفاء أعمى واحد هو بارتيماوس عند خروج يسوع من أريحا. ويروي متى شفاء أعميين عند خروج يسوع من أريحا.',
      },
      inference: {
        en: 'One count does not exclude the other if Mark names the better-known of two. This is possible but not proved, and a reader may find it too convenient. The accounts agree on the main event.',
        ar: 'لا ينفي عدد العدد الآخر إن كان مرقس يسمّي الأشهر من اثنين. وهذا ممكن لكنه لم يثبت، وقد يراه قارئ مريحًا أكثر مما ينبغي. والروايتان متفقتان على الحدث الأساسي.',
      },
      bible: { book: 'mark', chapter: 10, verse: '46-52' },
    },
    {
      id: 'E3',
      sourceId: 'S62',
      locator: 'Matthew 1:1–17, compared with Luke 3:23–38',
      role: 'context',
      states: {
        en: 'Matthew traces the descent of Jesus from Abraham through David’s son Solomon to Joseph, and Luke traces it back through David’s son Nathan, with a different list of names between David and Joseph.',
        ar: 'يتتبع متى نسب يسوع من إبراهيم عبر سليمان بن داود إلى يوسف، ويتتبعه لوقا إلى الوراء عبر ناثان بن داود، بقائمة أسماء مختلفة بين داود ويوسف.',
      },
      inference: {
        en: 'Ancient readers proposed that the two lists give a legal line and a natural line, or that one of them follows Mary’s family. None of these is stated in the text, and the matter is open. The genealogies also have a literary purpose, which the two writers shape differently.',
        ar: 'اقترح القراء القدماء أن القائمتين تعطيان نسبًا شرعيًا ونسبًا طبيعيًا، أو أن إحداهما تتبع عائلة مريم. ولا شيء من هذا مذكور في النص، والمسألة مفتوحة. وللنسبين أيضًا غرض أدبي يصوغه الكاتبان صياغتين مختلفتين.',
      },
      bible: { book: 'matthew', chapter: 1, verse: '1-17' },
    },
    {
      id: 'E4',
      sourceId: 'S62',
      locator: 'Matthew 27:3–8, compared with Acts 1:18–19',
      role: 'context',
      states: {
        en: 'In Matthew, Judas returns the silver, goes away and hangs himself, and the priests buy a field with the money. In Acts, Peter’s account says that Judas acquired a field with the reward, fell headlong, and his body burst open.',
        ar: 'في متى يرد يهوذا الفضة ويمضي ويخنق نفسه، ويشتري الكهنة حقلًا بالمال. وفي الأعمال يقول كلام بطرس إن يهوذا اقتنى حقلًا بأجرة الظلم وسقط على وجهه فانشق من وسطه.',
      },
      inference: {
        en: 'The accounts differ about who bought the field and how Judas died. Some propose that a hanging was followed by a fall, others that the writers use different traditions. No reading is decisive. Both agree that the money bought a field, and both say it came to be known as the Field of Blood.',
        ar: 'تختلف الروايتان في من اشترى الحقل وكيف مات يهوذا. ويقترح بعضهم أن الخنق تلاه سقوط، ويرى آخرون أن الكاتبين يستعملان تقليدين مختلفين. ولا قراءة حاسمة. وتتفق الروايتان على أن المال اشترى حقلًا وعلى أنه عُرف بحقل الدم.',
      },
      bible: { book: 'matthew', chapter: 27, verse: '3-8' },
    },
    {
      id: 'E5',
      sourceId: 'S62',
      locator: 'Mark 1:2–3',
      role: 'context',
      states: {
        en: 'Mark introduces the ministry of John the Baptist with words he assigns to Isaiah, which combine a line that is found in Malachi and Exodus with a line from Isaiah.',
        ar: 'يقدم مرقس خدمة يوحنا المعمدان بكلمات ينسبها إلى إشعياء وتجمع سطرًا موجودًا في ملاخي والخروج مع سطر من إشعياء.',
      },
      inference: {
        en: 'Combined quotations under one prophet’s name were an accepted way of writing. Some manuscripts read “in the prophets”, which shows that copyists noticed the matter, and the textual question is examined in works such as Metzger and Ehrman’s.',
        ar: 'كانت الاقتباسات المركبة تحت اسم نبي واحد طريقة مقبولة في الكتابة. وبعض المخطوطات تقرأ «في الأنبياء»، مما يبيّن أن النساخ لاحظوا الأمر، والمسألة النصية تُفحص في أعمال مثل عمل ميتزغر وإيرمان.',
      },
      bible: { book: 'mark', chapter: 1, verse: '2-3' },
    },
    {
      id: 'E7',
      sourceId: 'S27',
      locator: 'whole work (thesis as the authors state it; chapter not cited)',
      role: 'context',
      states: {
        en: 'Metzger and Ehrman’s The Text of the New Testament is a standard account of how the Greek New Testament was copied and how scholars establish its text.',
        ar: 'كتاب ميتزغر وإيرمان «نص العهد الجديد» عرض معتمد لكيفية نسخ العهد الجديد اليوناني وكيف يثبّت الباحثون نصه.',
      },
      inference: {
        en: 'It is cited as the place to check whether a difference arises from the text. The two authors do not share a religious position, and the book is used only for the method of textual checking.',
        ar: 'يُستشهد به موضعًا للتحقق هل ينشأ الفرق من النص. ولا يتشارك المؤلفان موقفًا دينيًا واحدًا، ويُستعمل الكتاب لمنهج التحقق النصي فقط.',
      },
    },
    {
      id: 'E8',
      sourceId: 'S56',
      locator: 'Questions on the Holy Bible (St-Takla FAQ), index of Bible questions',
      role: 'context',
      states: {
        en: 'St-Takla.org hosts a collection of questions and answers on the Holy Bible written within the Coptic Orthodox tradition, including answers to alleged contradictions.',
        ar: 'يستضيف موقع St-Takla.org مجموعة أسئلة وأجوبة عن الكتاب المقدس كُتبت في إطار التقليد القبطي الأرثوذكسي، تتضمن أجوبة عن تناقضات مزعومة.',
      },
      inference: {
        en: 'It is a Christian resource and not an independent source. It is listed so that readers can see how Coptic writers answer particular cases. A historical claim in it should be checked against the primary texts.',
        ar: 'هو مورد مسيحي وليس مصدرًا مستقلًا. وهو مذكور ليرى القراء كيف يجيب الكتّاب الأقباط عن حالات بعينها. وينبغي التحقق من أي دعوى تاريخية فيه بالرجوع إلى النصوص الأصلية.',
      },
    },
  ],

  objections: [
    {
      id: 'O1',
      statement: {
        en: 'These explanations are convenient. For any difference you can always invent a story under which both accounts are true; that is not a method, it is special pleading.',
        ar: 'هذه التفسيرات مريحة. فلكل فرق يمكنك دائمًا أن تخترع قصة تصدق فيها الروايتان؛ وهذا ليس منهجًا بل استعطاف خاص.',
      },
      response: {
        en: [
          'The objection is right to warn against unconstrained harmonising. A responsible harmony should rest on a convention the writers are known to use, be offered as a possibility, and not add events that the text does not suggest. Some of the proposals above fall short of that and are marked as open.',
          'The same test applies in the other direction. To call two accounts incompatible, the critic also needs to show that no reasonable reading can hold both, and historians treat many differing reports of one event as compatible without strain.',
        ],
        ar: [
          'الاعتراض محق في التحذير من التوفيق غير المقيد. فالتوفيق المسؤول ينبغي أن يقوم على عرف يُعرف عن الكاتبين استعماله، وأن يُقدَّم احتمالًا، وألا يضيف أحداثًا لا يوحي بها النص. وبعض الاقتراحات أعلاه لا يبلغ ذلك وقد وُسمت مفتوحة.',
          'والاختبار نفسه ينطبق في الاتجاه الآخر. فلكي يصف الناقد روايتين بأنهما متعارضتان عليه أن يبيّن أنه لا قراءة معقولة تحتمل الاثنتين، والمؤرخون يعدّون كثيرًا من الروايات المختلفة للحدث الواحد متوافقة دون عناء.',
        ],
      },
      limits: {
        en: 'It does not settle where the boundary between a reasonable and a forced reading lies. Reasonable readers differ about that.',
        ar: 'لا يحسم أين يقع الحد بين قراءة معقولة وأخرى متكلفة. والقراء المعقولون يختلفون في ذلك.',
      },
      evidence: ['E1', 'E2'],
    },
    {
      id: 'O2',
      statement: {
        en: 'If Scripture is inspired by God, it should not have any discrepancy, even in details. One proven discrepancy is enough to show that the Bible is not what believers say.',
        ar: 'إن كان الكتاب موحى به من الله فلا ينبغي أن يكون فيه أي تفاوت ولو في التفاصيل. وتفاوت واحد مثبت يكفي لبيان أن الكتاب ليس كما يقول المؤمنون.',
      },
      response: {
        en: [
          'This depends on what is meant by inspiration. If it means that God dictated every word in a form meant to be free of any variation of detail, then a proven discrepancy would be serious. The Church’s Fathers did not hold this view. They saw the human writers as fully engaged in their work, with their own memory, purpose and style, and they looked for the truth that Scripture conveys for salvation.',
          'On this understanding, a difference in the number of blind men or in the order of events does not touch the message that the writers share. It is also fair to note that traditions differ here: some Christians hold a stricter doctrine of inerrancy and must deal with each case in its own terms.',
        ],
        ar: [
          'يتوقف هذا على ما يُقصد بالوحي. فإن كان يعني أن الله أملى كل كلمة بصورة تخلو من أي تفاوت في التفصيل، كان التفاوت المثبت خطيرًا. ولم يقل آباء الكنيسة بهذا الرأي. فقد رأوا الكتّاب البشر مشاركين بكل كيانهم في عملهم، بذاكرتهم وغرضهم وأسلوبهم، وطلبوا الحق الذي ينقله الكتاب للخلاص.',
          'وبحسب هذا الفهم فإن الفرق في عدد العميان أو في ترتيب الأحداث لا يمس الرسالة التي يشترك فيها الكتّاب. ومن الإنصاف أن نلاحظ أن التقاليد تختلف هنا: فبعض المسيحيين يتمسكون بعقيدة عصمة أشد صرامة ويجب أن يعالجوا كل حالة بشروطها.',
        ],
      },
      limits: {
        en: 'A critic can reply that this redefines inspiration. The article on why Scripture is regarded as inspired takes that question further.',
        ar: 'قد يرد ناقد بأن هذا يعيد تعريف الوحي. وتأخذ مقالة لماذا يُعدّ الكتاب موحى به هذا السؤال أبعد.',
      },
    },
    {
      id: 'O3',
      statement: {
        en: 'There are not just differences of detail. Some cases touch on important matters, such as the date of the Last Supper in relation to Passover in the Synoptics and John.',
        ar: 'ليست الفروق في التفاصيل فقط. فبعض الحالات يمس أمورًا مهمة، مثل تاريخ العشاء الأخير بالنسبة إلى الفصح في الأناجيل الإزائية ويوحنا.',
      },
      response: {
        en: [
          'This is one of the harder cases, and it is a real discussion among scholars. The Synoptic Gospels seem to describe the supper as a Passover meal, while John places the trial of Jesus before the Passover meal is eaten. Proposals include different calendars in use among Jews at that time, different meanings of the word “Passover”, and John’s theological wish to present Jesus as the Passover lamb.',
          'No proposal is accepted by all. What can be said is that both traditions agree that Jesus was crucified at the Passover season on a Friday and rose on the Sunday, and that the Church’s understanding of the cross and the Eucharist does not rest on resolving the date.',
        ],
        ar: [
          'هذه إحدى الحالات الأصعب، وهي موضع نقاش حقيقي بين الدارسين. فالأناجيل الإزائية تبدو وكأنها تصف العشاء وجبة فصح، بينما يضع يوحنا محاكمة يسوع قبل أكل وجبة الفصح. وتشمل الاقتراحات تقاويم مختلفة كانت مستعملة عند اليهود حينئذ، ومعاني مختلفة لكلمة «الفصح»، ورغبة يوحنا اللاهوتية في تقديم يسوع حمل الفصح.',
          'ولا يقبل الجميع اقتراحًا بعينه. وما يمكن قوله إن التقليدين متفقان على أن يسوع صُلب في موسم الفصح يوم الجمعة وقام يوم الأحد، وأن فهم الكنيسة للصليب والإفخارستيا لا يقوم على حل مسألة التاريخ.',
        ],
      },
      limits: {
        en: 'The question is left open, and a reader may legitimately find that it remains a difficulty.',
        ar: 'تبقى المسألة مفتوحة، ويحق للقارئ أن يجد أنها صعوبة باقية.',
      },
      evidence: ['E8'],
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'Historically, a Christian can say that careful readers separate three groups: differences that dissolve when the text and the writers’ conventions are understood, differences with several reasonable explanations, and a few that remain open. A Christian should not claim more than the evidence supports in any group.',
        'It is right to concede that some harmonies are speculative, and that a few difficulties, such as the genealogies, the death of Judas and the date of the Last Supper, have not been settled.',
      ],
      ar: [
        'يستطيع المسيحي تاريخيًا أن يقول إن القراء الدقيقين يفصلون ثلاث مجموعات: فروقًا تزول حين يُفهم النص وأعراف الكاتبين، وفروقًا لها عدة تفسيرات معقولة، وقليلًا ما زال مفتوحًا. وعلى المسيحي ألا يدّعي أكثر مما تسنده الشواهد في أي مجموعة.',
        'ومن الصواب أن يقر بأن بعض التوفيقات تخمينية، وبأن صعوبات قليلة، كالنسبين وموت يهوذا وتاريخ العشاء الأخير، لم تُحسم.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that Scripture is the Word of God given through human writers, and that its purpose is our salvation. Because the writers were real persons writing for real communities, the Church does not expect them to write like a modern court record. She expects that the truth about Christ is what they bear witness to.',
        'This does not excuse carelessness. The Church’s tradition of careful reading, from Origen and Augustine to the present, shows that difficulties were met with study and prayer and not with denial.',
      ],
      ar: [
        'تعترف الكنيسة بأن الكتاب هو كلمة الله المعطاة بكتّاب بشر، وأن غايته خلاصنا. ولأن الكتّاب أشخاص حقيقيون يكتبون لجماعات حقيقية فلا تتوقع الكنيسة أن يكتبوا كسجل محكمة حديث. بل تتوقع أن الحق عن المسيح هو ما يشهدون له.',
        'وهذا لا يبرر الإهمال. فتقليد الكنيسة في القراءة الدقيقة، من أوريجانوس وأغسطينوس إلى اليوم، يبيّن أن الصعوبات قوبلت بالدراسة والصلاة لا بالإنكار.',
      ],
    },
  },
  coptic: {
    en: [
      'The Alexandrian tradition of reading Scripture knew the difficulties well. Origen, working in Alexandria and Caesarea, treated a seeming problem in the text as a reason to look further into its meaning, and the Church of Alexandria has always read the Bible in the light of the Fathers and the liturgy. Coptic writers today also answer questions of this kind, for example in the Q&A collections hosted by St-Takla.org and by the Coptic dioceses.',
      'For the Coptic Church, the unity of the Scriptures is the unity of their witness to Christ, and not an exact sameness of every detail. A believer who meets a difficulty is encouraged to read the passages together, consult the Fathers and ask a priest or teacher, without fear that the question itself is a lack of faith.',
    ],
    ar: [
      'عرف التقليد السكندري في قراءة الكتاب الصعوبات جيدًا. فقد عدّ أوريجانوس، الذي عمل في الإسكندرية وقيصرية، المشكلة الظاهرة في النص سببًا لمزيد من البحث في معناه، وقرأت كنيسة الإسكندرية الكتاب دائمًا في نور الآباء والصلوات الطقسية. ويجيب كتّاب أقباط اليوم أيضًا عن أسئلة من هذا النوع، كما في مجموعات الأسئلة والأجوبة التي يستضيفها موقع St-Takla.org والإيبارشيات القبطية.',
      'ووحدة الكتب عند الكنيسة القبطية هي وحدة شهادتها للمسيح، لا تطابق كل تفصيل تطابقًا تامًا. ويُشجَّع المؤمن الذي يلقى صعوبة على أن يقرأ المقاطع معًا ويستشير الآباء ويسأل كاهنًا أو معلمًا، دون خوف من أن السؤال نفسه ضعف إيمان.',
    ],
  },
  disputed: {
    en: [
      'Disputed among scholars: whether a given proposed harmony is reasonable or forced, how to read the genealogies and the accounts of Judas, and how the Johannine date of the Last Supper relates to the Synoptic date.',
      'Disputed between traditions: how far the inspiration of Scripture excludes any discrepancy of detail. Strict inerrantist traditions and the Fathers’ tradition of human writers fully engaged give different answers.',
      'Not disputed in this article: that a contradiction needs the same subject, sense and time, and that each case should be examined in its text and context.',
    ],
    ar: [
      'مختلف عليه بين الدارسين: هل توفيق مقترح بعينه معقول أم متكلف، وكيف تُقرأ الأنساب وروايات يهوذا، وكيف يرتبط تاريخ العشاء الأخير عند يوحنا بتاريخه عند الإزائيين.',
      'مختلف عليه بين التقاليد: إلى أي مدى يستبعد وحي الكتاب أي تفاوت في التفصيل. فالتقاليد المتشددة في العصمة وتقليد الآباء في الكتّاب البشر المشاركين بكل كيانهم يعطيان إجابتين مختلفتين.',
      'غير مختلف عليه في هذا المقال: أن التناقض يحتاج إلى الموضوع والمعنى والزمن نفسها، وأن كل حالة ينبغي أن تُفحص في نصها وسياقها.',
    ],
  },
  conclusion: {
    en: 'An apparent contradiction should be examined and not simply waved away or simply accepted. The reader states the two claims exactly, checks the text, asks what the writers were doing, and then says honestly whether the difference dissolves, has several reasonable explanations, or remains open. Many of the well-known cases fall into the first two groups, and a few stay open. The Church can live with the open cases because her faith rests on the witness of the Scriptures to Christ and not on a claim that no detail is hard to reconcile.',
    ar: 'ينبغي أن يُفحص التناقض الظاهري، لا أن يُنحّى بسهولة ولا أن يُسلَّم به بسهولة. فيذكر القارئ القولين بدقة، ويفحص النص، ويسأل ماذا كان الكاتبان يفعلان، ثم يقول بأمانة هل يزول الفرق أم له تفسيرات معقولة عدة أم يبقى مفتوحًا. وكثير من الحالات المشهورة يقع في المجموعتين الأوليين، وقليل منها يبقى مفتوحًا. وتستطيع الكنيسة أن تعيش مع الحالات المفتوحة لأن إيمانها يقوم على شهادة الكتب للمسيح لا على دعوى أنه لا تفصيل صعب التوفيق.',
  },
  furtherReading: ['S27', 'S56', 'S57'],
  related: ['resurrection-accounts-disagree', 'has-bible-changed', 'footnoted-passages', 'what-is-a-textual-variant', 'why-inspired', 'preservation-vs-inspiration'],
};
