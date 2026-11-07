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
    en: 'A contradiction exists only when two statements cannot both be true in the same sense at the same time. Most apparent contradictions in the Bible disappear when we ask what each writer was doing: selecting, summarising, arranging by theme, or using a number or a name as his time did. Four Gospels that tell the same events in four ways are not a weakness but a strength; they are independent witnesses, not copies. The Church receives Scripture as the Word of God given through human writers, and their differences of detail all serve one true witness to Christ.',
    ar: 'لا يوجد التناقض إلا حين لا يمكن أن يصدق قولان معًا بالمعنى نفسه في الوقت نفسه. ومعظم التناقضات الظاهرية في الكتاب المقدس يزول حين نسأل ماذا كان كل كاتب يفعل: ينتقي أو يلخص أو يرتب بحسب الموضوع أو يستعمل رقمًا أو اسمًا كما كان زمنه يستعمله. وأربعة أناجيل تروي الأحداث نفسها بأربع طرق ليست ضعفًا بل قوة؛ فهي شهود مستقلون لا نسخ مكررة. وتقبل الكنيسة الكتاب كلمةَ الله المعطاة بكتّاب بشر، وفروق التفصيل بينهم كلها تخدم شهادة واحدة صادقة للمسيح.',
  },
  quickPoints: {
    en: [
      'First ask whether the two statements really say incompatible things in the same sense, about the same time and the same person.',
      'Check the translation and the text: some differences come from the translator’s choice or from a variant reading.',
      'Ask what kind of writing it is and what the writer is trying to do; ancient histories paraphrased speech and arranged events by theme.',
      'Read the passages together, with the Fathers: from Origen to St Augustine they studied these questions carefully and found the accounts in harmony.',
      'The unity of Scripture is the unity of its witness to Christ, and that witness is one and true.',
    ],
    ar: [
      'اسأل أولًا هل يقول القولان فعلًا أمرين متعارضين بالمعنى نفسه عن الزمن نفسه والشخص نفسه.',
      'افحص الترجمة والنص: فبعض الفروق من اختيار المترجم أو من قراءة متغايرة.',
      'اسأل أي نوع من الكتابة هو وماذا يحاول الكاتب أن يفعل؛ فالتواريخ القديمة كانت تعيد صياغة الكلام وترتب الأحداث بحسب الموضوع.',
      'اقرأ المقاطع معًا مع الآباء: فمن أوريجانوس إلى القديس أغسطينوس درسوا هذه المسائل بعناية ووجدوا الروايات متوافقة.',
      'وحدة الكتاب هي وحدة شهادته للمسيح، وهذه الشهادة واحدة وصادقة.',
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
      'Lists of “Bible contradictions” are common online, and a believer who meets one may be unsettled. A clear method lets him read the passages himself and see how they fit together.',
      'The same method is used for every ancient history. Historians meet differing reports of the same event all the time, and they read them as witnesses who agree on the substance. Reading the Bible with that care is simply reading it well.',
    ],
    ar: [
      'قوائم «تناقضات الكتاب المقدس» شائعة على الإنترنت، وقد يضطرب المؤمن الذي يلقى إحداها. والمنهج الواضح يمكّنه من أن يقرأ المقاطع بنفسه ويرى كيف تتوافق.',
      'والمنهج نفسه يُستعمل مع كل تاريخ قديم. فالمؤرخون يلقون دائمًا روايات مختلفة للحدث الواحد، ويقرأونها شهودًا متفقين في الجوهر. وقراءة الكتاب المقدس بهذه العناية هي ببساطة قراءته قراءة جيدة.',
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
        en: 'In Matthew the centurion approaches Jesus himself; in Luke he sends messengers. In the ancient world what a man did through his envoys was said to be done by him. At Jericho Mark names one blind man, Bartimaeus, and Matthew speaks of two; naming the better-known of two does not deny the other. In both cases the words, the faith and the healing are the same.',
        ar: 'في متى يأتي قائد المئة إلى يسوع بنفسه؛ وفي لوقا يرسل رسلًا. وفي العالم القديم كان ما يفعله المرء عن طريق مبعوثيه يُنسب إليه. وعند أريحا يسمّي مرقس أعمى واحدًا هو بارتيماوس، ويذكر متى اثنين؛ وتسمية الأشهر من اثنين لا تنفي الآخر. وفي الحالتين الكلمات والإيمان والشفاء واحدة.',
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
        en: 'Even the harder cases, such as the two genealogies of Jesus and the accounts of the death of Judas, have sensible explanations, and the accounts agree on what matters.',
        ar: 'حتى الحالات الأصعب، كنسبي يسوع وروايتي موت يهوذا، لها تفسيرات معقولة، والروايات متفقة على ما هو مهم.',
      },
      argumentType: 'textual',
      assessment: 'actively_debated',
      rationale: {
        en: 'The genealogies in Matthew and Luke differ after David. Ancient readers explained that one gives the legal line and the other the natural line, or that one follows Mary’s family; both agree that Jesus is the Son of David. Matthew says Judas hanged himself and Acts that he fell headlong and burst open; a hanging followed by a fall fits both, and both agree that his silver bought the Field of Blood.',
        ar: 'يختلف النسبان في متى ولوقا بعد داود. وشرح القراء القدماء أن أحدهما يعطي النسب الشرعي والآخر النسب الطبيعي، أو أن أحدهما يتبع عائلة مريم؛ وكلاهما يتفق على أن يسوع ابن داود. ويقول متى إن يهوذا خنق نفسه، ويقول سفر الأعمال إنه سقط على وجهه فانشق؛ والخنق الذي يتلوه سقوط يلائم الروايتين، وكلتاهما تتفق على أن فضته اشترت حقل الدم.',
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
        en: 'Some apparent errors are simply the way ancient writers cited their sources, and are no errors at all.',
        ar: 'بعض الأخطاء الظاهرية هي ببساطة طريقة الكتّاب القدماء في الاستشهاد بمصادرهم، وليست أخطاء على الإطلاق.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'St Mark’s opening joins lines from Malachi and Exodus to a line from Isaiah and introduces them under Isaiah’s name, the greater prophet whose theme of the way in the wilderness frames the whole. Joining quotations under the name of the best-known prophet was a recognised way of writing.',
        ar: 'يجمع مطلع إنجيل القديس مرقس سطورًا من ملاخي والخروج إلى سطر من إشعياء ويقدمها باسم إشعياء، النبي الأعظم الذي يؤطر موضوعُه عن الطريق في البرية الكلَّ. وكان جمع الاقتباسات تحت اسم أشهر الأنبياء طريقة معروفة في الكتابة.',
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
          'The explanations given here are not invented stories. Each rests on a way of writing that ancient authors are known to have used: speaking of an envoy’s act as the sender’s, naming the better-known of two, joining quotations under one prophet’s name. None adds events the text does not suggest.',
          'And the test cuts both ways. To call two accounts incompatible, a critic must show that no reasonable reading can hold both. Historians read differing reports of one event as compatible all the time; the Gospels deserve the same fairness.',
        ],
        ar: [
          'التفسيرات المذكورة هنا ليست قصصًا مخترعة. فكل منها يقوم على طريقة في الكتابة معروفة عند الكتّاب القدماء: نسبة فعل المبعوث إلى مُرسله، وتسمية الأشهر من اثنين، وجمع الاقتباسات تحت اسم نبي واحد. ولا يضيف أي منها أحداثًا لا يوحي بها النص.',
          'والاختبار ينطبق في الاتجاهين. فلكي يصف الناقد روايتين بأنهما متعارضتان، عليه أن يبيّن أنه لا قراءة معقولة تحتمل الاثنتين. والمؤرخون يقرأون الروايات المختلفة للحدث الواحد متوافقة دائمًا؛ والأناجيل تستحق الإنصاف نفسه.',
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
          'The objection assumes that inspiration means dictation, as if God had used the writers as pens. The Church has never taught this. The Fathers saw the evangelists as fully engaged in their work, with their own memory, purpose and style, moved by the Holy Spirit to bear true witness for our salvation.',
          'Inspired witnesses, like any true witnesses, tell the same events from their own places. A difference in the number of blind men named, or in the order of events, does not touch the message they share. It is exactly what we expect from honest, independent testimony.',
        ],
        ar: [
          'يفترض الاعتراض أن الوحي إملاء، كأن الله استعمل الكتّاب أقلامًا. ولم تعلّم الكنيسة هذا قط. فقد رأى الآباء الإنجيليين مشاركين بكل كيانهم في عملهم، بذاكرتهم وغرضهم وأسلوبهم، يسوقهم الروح القدس ليشهدوا شهادة صادقة لخلاصنا.',
          'والشهود الملهمون، كأي شهود صادقين، يروون الأحداث نفسها من مواقعهم. والفرق في عدد العميان المذكورين أو في ترتيب الأحداث لا يمس الرسالة التي يشتركون فيها. بل هو ما نتوقعه تمامًا من شهادة أمينة مستقلة.',
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
          'The Synoptic Gospels present the Last Supper as a Passover meal, while St John places the trial of Jesus before the Passover meal was eaten. Sound explanations exist: different calendars were in use among Jews at that time, and the word “Passover” could mean the meal or the whole festival week. St John also shows us that Christ died as the true Passover Lamb.',
          'On everything that matters the Gospels agree: Jesus ate the Last Supper with His disciples, was crucified at the Passover season on a Friday, and rose on the Sunday. The Church’s faith in the cross and her celebration of the Eucharist stand on that shared witness.',
        ],
        ar: [
          'تقدم الأناجيل الإزائية العشاء الأخير وجبة فصح، بينما يضع القديس يوحنا محاكمة يسوع قبل أكل وجبة الفصح. وتوجد تفسيرات سليمة: فقد كانت تقاويم مختلفة مستعملة عند اليهود حينئذ، وقد تعني كلمة «الفصح» الوجبة أو أسبوع العيد كله. ويرينا القديس يوحنا أيضًا أن المسيح مات بوصفه حمل الفصح الحقيقي.',
          'وفي كل ما هو مهم تتفق الأناجيل: أكل يسوع العشاء الأخير مع تلاميذه، وصُلب في موسم الفصح يوم الجمعة، وقام يوم الأحد. وإيمان الكنيسة بالصليب واحتفالها بالإفخارستيا قائمان على هذه الشهادة المشتركة.',
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
        'Read as ancient documents, the Gospels behave exactly as independent, truthful witnesses do. They agree on the substance and differ in detail, selection and order. Most differences dissolve once the text and the writers’ conventions are understood.',
        'Even the cases critics press hardest, the genealogies, the death of Judas and the date of the Last Supper, have sensible explanations rooted in ancient practice, and in each the accounts agree on what matters. Agreement in substance with variety in detail is the mark of real testimony, not of collusion or error.',
      ],
      ar: [
        'إذا قُرئت الأناجيل وثائق قديمة، فهي تتصرف كما يتصرف الشهود المستقلون الصادقون تمامًا. تتفق في الجوهر وتختلف في التفصيل والانتقاء والترتيب. ومعظم الفروق يزول حين يُفهم النص وأعراف الكاتبين.',
        'وحتى الحالات التي يضغط عليها النقاد أكثر، النسبان وموت يهوذا وتاريخ العشاء الأخير، لها تفسيرات معقولة متجذرة في الممارسة القديمة، وفي كل منها تتفق الروايات على ما هو مهم. والاتفاق في الجوهر مع التنوع في التفصيل علامة الشهادة الحقيقية، لا التواطؤ ولا الخطأ.',
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
    en: 'An apparent contradiction is an invitation to read more carefully. State the two claims exactly, check the text, ask what each writer was doing, and read with the Fathers. Again and again the difficulty gives way, and what remains is four witnesses telling one story from their own places. The believer can meet these questions without fear: the Scriptures bear one true witness to Christ.',
    ar: 'التناقض الظاهري دعوة إلى قراءة أكثر عناية. اذكر القولين بدقة، وافحص النص، واسأل ماذا كان كل كاتب يفعل، واقرأ مع الآباء. ومرة بعد مرة تزول الصعوبة، ويبقى أربعة شهود يروون قصة واحدة كل من موقعه. ويستطيع المؤمن أن يلقى هذه الأسئلة بلا خوف: فالكتب تشهد شهادة واحدة صادقة للمسيح.',
  },
  furtherReading: ['S27', 'S56', 'S57'],
  related: ['resurrection-accounts-disagree', 'has-bible-changed', 'footnoted-passages', 'what-is-a-textual-variant', 'why-inspired', 'preservation-vs-inspiration'],
};
