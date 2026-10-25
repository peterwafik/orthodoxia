import type { Article } from '../types.ts';

export const article: Article = {
  id: 'noncanonical-gospels',
  questionId: 'noncanonical-gospels',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article asks what the gospels outside the New Testament are, such as the Gospel of Thomas, the Gospel of Peter, the Gospel of Judas and the Infancy Gospel of James, and why the churches did not receive them as Scripture. It describes what these writings are, how historians date them, what the churches said about them, and where scholars disagree. It treats them fairly as ancient documents and does not dismiss them as worthless.',
    ar: 'تسأل هذه المقالة ما هي الأناجيل الخارجة عن العهد الجديد، مثل إنجيل توما وإنجيل بطرس وإنجيل يهوذا وإنجيل يعقوب في الطفولة، ولماذا لم تقبلها الكنائس كتابًا مقدسًا. وهي تصف ما هذه الكتابات، وكيف يؤرخها المؤرخون، وماذا قالت عنها الكنائس، وأين يختلف الباحثون. وتعاملها بإنصاف بوصفها وثائق قديمة ولا تعدّها بلا قيمة.',
  },
  shortAnswer: {
    en: 'The noncanonical gospels are real ancient writings, and historians study them. Most are later than the four Gospels, are attributed to apostles who did not write them, and many present teaching that the churches judged to contradict the faith they had received, for example by denying that Christ truly took flesh. They were not suppressed by one act: they were not read in the churches’ worship, and from the second century church writers named and rejected some of them. Dating is debated for a few, above all the Gospel of Thomas, and some contain traditions the Church still values, which is not the same as receiving them as Scripture.',
    ar: 'الأناجيل غير القانونية كتابات قديمة حقيقية يدرسها المؤرخون. ومعظمها متأخر عن الأناجيل الأربعة، ومنسوب إلى رسل لم يكتبوها، وكثير منها يعرض تعليمًا رأت الكنائس أنه يناقض الإيمان الذي تسلّمته، كإنكار أن المسيح اتخذ جسدًا حقًا. ولم تُكبت بفعل واحد: فهي لم تكن تُقرأ في عبادة الكنائس، ومنذ القرن الثاني سمّى كتّاب كنسيون بعضها ورفضوه. والتأريخ موضع جدل لقليل منها، وفي مقدمتها إنجيل توما، وبعضها يحوي تقاليد ما زالت الكنيسة تقدّرها، وهذا لا يعني قبولها كتابًا مقدسًا.',
  },
  quickPoints: {
    en: [
      'Luke’s preface shows that more than the four Gospels were written very early, so the question of selection is as old as the writings.',
      'Most noncanonical gospels date from the second century or later and carry the name of an apostle who did not write them.',
      'Several (such as the Gospel of Judas, known from Irenaeus’s reference) teach that the material world is the work of a lesser god, which the churches rejected as against the faith.',
      'The Gospel of Thomas is a list of sayings, and its date is debated; it is among the most discussed of these writings.',
      'The Coptic Church has a particular interest: the Nag Hammadi books were found in Egypt and were written in Coptic.',
    ],
    ar: [
      'تبيّن مقدمة لوقا أن أكثر من الأناجيل الأربعة كُتب مبكرًا جدًا، فمسألة الانتقاء قديمة قدم الكتابات.',
      'يعود معظم الأناجيل غير القانونية إلى القرن الثاني أو بعده، وتحمل اسم رسول لم يكتبها.',
      'يعلّم عدد منها (كإنجيل يهوذا المعروف من إشارة إيريناؤس) أن العالم المادي من صنع إله أدنى، وقد رفضته الكنائس لمخالفته الإيمان.',
      'إنجيل توما قائمة أقوال، وتاريخه موضع جدل؛ وهو من أكثر هذه الكتابات مناقشة.',
      'للكنيسة القبطية اهتمام خاص: فقد وُجدت كتب نجع حمادي في مصر وكُتبت بالقبطية.',
    ],
  },
  argumentTypes: ['historical', 'textual', 'theological'],
  assessment: {
    label: 'supported_disputed_details',
    explanation: {
      en: 'That most of these writings are later than the four Gospels, are pseudonymous and were not in the churches’ liturgical use is well supported. The exact dates of a few, the extent to which they preserve early traditions, and how varied early Christianity was are disputed among historians.',
      ar: 'إن كون معظم هذه الكتابات متأخرة عن الأناجيل الأربعة ومنحولة الاسم وغير مستعملة ليتورجيًا في الكنائس أمر مسنود جيدًا. أما التواريخ الدقيقة لقليل منها ومدى حفظها لتقاليد مبكرة ومدى تنوع المسيحية المبكرة فمختلف فيها بين المؤرخين.',
    },
  },

  whyExamine: {
    en: [
      'Many readers first meet these writings in a documentary or a novel, with the claim that the Church buried “lost gospels” that tell a different story of Jesus. The claim deserves a direct reply, because a few of these writings are interesting and some are old.',
      'A fair reply also does not treat them with contempt. They show how some ancient Christians and groups on the edge of the churches imagined Jesus, and they help a historian to see what the churches were choosing between.',
    ],
    ar: [
      'يلتقي كثير من القراء بهذه الكتابات أول مرة في فيلم وثائقي أو رواية، مع الزعم أن الكنيسة دفنت «أناجيل مفقودة» ترسم قصة مختلفة ليسوع. ويستحق الزعم ردًّا مباشرًا لأن بعض هذه الكتابات مثير للاهتمام وبعضها قديم.',
      'والرد المنصف لا يعاملها باحتقار أيضًا. فهي تبيّن كيف تخيّل بعض المسيحيين القدماء وجماعات على أطراف الكنائس يسوعَ، وتعين المؤرخ على رؤية ما كانت الكنائس تختار بينه.',
    ],
  },
  background: {
    en: [
      'Luke’s preface, read as an ancient text, says that many had already taken in hand to set down an account of Jesus. So writings about Jesus were multiplying early. The four Gospels in the New Testament are the ones the churches came to read.',
      'The Gospel of Thomas, known fully from a Coptic copy found at Nag Hammadi in Egypt in 1945 and in part from Greek fragments from Oxyrhynchus, is a collection of 114 sayings with little narrative. Some sayings are close to sayings in the Gospels, and others are quite different. Many scholars date it to the second century, while some argue for an earlier date for part of it. The Gospel of Peter survives in part in a manuscript found at Akhmim, and it tells of the passion and resurrection with unusual details. Serapion, a bishop of Antioch around AD 200, is reported to have first allowed it to be read in a church and then to have judged it to contain false teaching.',
      'The Gospel of Judas, known from a Coptic manuscript published in the early 2000s, is a gnostic text that Irenaeus, in the late second century, already mentions as a forgery of a heretical group. The Protoevangelium of James, from the second century, tells the story of Mary’s birth and childhood, and it is the source of the names of her parents; it has been widely used in Christian tradition for details, though it is not Scripture.',
      'In Egypt, Athanasius in his Festal Letter of AD 367 wrote to the monasteries to say which books are to be received as the canon and warned them against apocryphal writings composed under the names of saints. Some scholars have linked the burying of the Nag Hammadi jars to such a period and to monastic communities; others consider this an unproven guess.',
    ],
    ar: [
      'تقول مقدمة لوقا، حين تُقرأ نصًّا قديمًا، إن كثيرين أخذوا من قبل في تدوين رواية عن يسوع. فكانت الكتابات عن يسوع تتكاثر مبكرًا. والأناجيل الأربعة في العهد الجديد هي التي جاءت الكنائس إلى قراءتها.',
      'إنجيل توما، المعروف كاملًا من نسخة قبطية وُجدت في نجع حمادي بمصر سنة ١٩٤٥ وجزئيًا من شذرات يونانية من أوكسيرنخوس، مجموعة من ١١٤ قولًا قليلة السرد. وبعض الأقوال قريب من أقوال في الأناجيل وبعضها مختلف تمامًا. ويؤرخه كثير من الباحثين بالقرن الثاني، بينما يرى بعضهم تاريخًا أقدم لجزء منه. ويبقى إنجيل بطرس جزئيًا في مخطوط وُجد في أخميم، ويروي الآلام والقيامة بتفاصيل غير مألوفة. ويُروى أن سرابيون أسقف أنطاكية نحو سنة ٢٠٠م أجاز قراءته أولًا في كنيسة ثم حكم بأن فيه تعليمًا باطلًا.',
      'وإنجيل يهوذا، المعروف من مخطوط قبطي نُشر في مطلع الألفية الثالثة، نص غنوصي ذكره إيريناؤس في أواخر القرن الثاني بوصفه تأليفًا مزورًا لجماعة هرطوقية. وإنجيل يعقوب الأول (الطفولة) من القرن الثاني يروي قصة ميلاد مريم وطفولتها وهو مصدر اسمي والديها؛ وقد استُعمل في التقليد المسيحي على نطاق واسع للتفاصيل وإن لم يكن كتابًا مقدسًا.',
      'وفي مصر كتب أثناسيوس في رسالته الفصحية لسنة ٣٦٧م إلى الأديرة ليبيّن أي الأسفار تُقبل قانونًا وليحذّرها من كتابات أبوكريفية مؤلفة بأسماء قديسين. وربط بعض الباحثين دفن جرار نجع حمادي بتلك الفترة وبجماعات رهبانية؛ ويرى آخرون أنه تخمين لم يثبت.',
    ],
  },
  glossary: ['canon', 'gospel', 'tradition', 'manuscript', 'codex', 'christology', 'synoptic-gospels', 'perpetual-virginity'],

  claims: [
    {
      id: 'C3',
      proposition: {
        en: 'The four Gospels were in worship use earlier and more widely than the noncanonical gospels, which have no comparable early record of church use.',
        ar: 'استُعملت الأناجيل الأربعة في العبادة أبكر وعلى نطاق أوسع من الأناجيل غير القانونية التي لا سجل مماثلًا لاستعمالها الكنسي المبكر.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'Justin’s account of the Sunday readings from the apostles’ memoirs, and the later treatment of Gospel texts as Scripture, belong to the first group; for the second group we have mostly the notices of church writers who reject them.',
        ar: 'يصف يوستينوس قراءات الأحد من مذكرات الرسل، ثم عوملت نصوص الأناجيل لاحقًا كتابًا مقدسًا، وهذا من المجموعة الأولى؛ أما المجموعة الثانية فعندنا في الغالب إشعارات كتّاب كنسيين يرفضونها.',
      },
      limits: {
        en: 'Justin does not name the Gospels he means, and the evidence for the use of the four Gospels in each region is uneven.',
        ar: 'لا يسمّي يوستينوس الأناجيل التي يقصدها، والشواهد على استعمال الأناجيل الأربعة في كل إقليم متفاوتة.',
      },
      evidence: ['E5'],
    },
    {
      id: 'C4',
      proposition: {
        en: 'The Church holds that the four Gospels alone are the apostolic witness she received as Scripture, and that she tests other writings by that witness.',
        ar: 'تعتقد الكنيسة أن الأناجيل الأربعة وحدها هي الشهادة الرسولية التي تسلّمتها كتابًا مقدسًا، وأنها تمتحن بها الكتابات الأخرى.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'This is the Church’s confession, and it rests on her reception of the apostolic faith. It is consistent with the historical picture but is not proved by it.',
        ar: 'هذا اعتراف الكنيسة، ويقوم على تسلّمها الإيمان الرسولي. وهو متفق مع الصورة التاريخية لكن التاريخ لا يثبته.',
      },
      limits: {
        en: 'A critic may hold that the churches’ choice was one among several possible, and history cannot settle that.',
        ar: 'قد يرى ناقد أن اختيار الكنائس كان واحدًا من اختيارات ممكنة عدة، والتاريخ لا يحسم ذلك.',
      },
      evidence: ['E4'],
    },
  ],

  evidence: [
    {
      id: 'E4',
      sourceId: 'S29',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'F. F. Bruce’s The Canon of Scripture traces the formation of the canon, and its thesis is that the books of the New Testament came to be accepted through use and agreement with the apostolic teaching, while other writings were not.',
        ar: 'يتتبع كتاب ف. ف. بروس «قانون الكتاب المقدس» تكوّن القانون، وأطروحته أن أسفار العهد الجديد جاءت إلى القبول بالاستعمال والاتفاق مع التعليم الرسولي بينما لم تُقبل كتابات أخرى.',
      },
      inference: {
        en: 'The author is a Christian scholar. The work is cited as a whole for the general picture, and the noncanonical writings are not discussed from it here.',
        ar: 'المؤلف باحث مسيحي. ويُستشهد بالعمل كاملًا للصورة العامة، ولا تُناقش منه الكتابات غير القانونية هنا.',
      },
    },
    {
      id: 'E5',
      sourceId: 'S50',
      locator: 'First Apology 66–67',
      role: 'supports',
      states: {
        en: 'Justin refers to the apostles’ memoirs, called Gospels, and to their being read on Sundays along with the prophets.',
        ar: 'يشير يوستينوس إلى مذكرات الرسل التي تسمى أناجيل وإلى قراءتها في الأحد مع الأنبياء.',
      },
      inference: {
        en: 'The Gospels were in worship use by about AD 150. Justin does not give names, so this does not by itself exclude other writings.',
        ar: 'كانت الأناجيل مستعملة في العبادة نحو ١٥٠م. ولا يعطي يوستينوس أسماء، فهذا بذاته لا يستبعد كتابات أخرى.',
      },
    },
  ],

  objections: [
    {
      id: 'O1',
      statement: {
        en: 'The Gospel of Thomas may be as early as the canonical Gospels or earlier, and its sayings may preserve authentic words of Jesus that the churches dropped because they were awkward.',
        ar: 'قد يكون إنجيل توما في قدم الأناجيل القانونية أو أقدم، وقد تحفظ أقواله كلمات أصيلة ليسوع أسقطتها الكنائس لأنها محرجة.',
      },
      response: {
        en: [
          'It is true that some scholars propose an early date for a first layer of Thomas, and that some of its sayings have parallels in the Gospels. This is a live scholarly debate and the objection puts it fairly. Many other scholars date the work to the second century because of its relation to the text of the Gospels and its themes, and no one can fix its date from the surviving copies, the earliest of which are Greek fragments of about the third century and a Coptic copy of the fourth.',
          'Even on an early date, the question of use remains: there is no record of the work being read in the churches’ worship, and early church writers who mention it treat it as heretical. A saying may be old and still be in a book that the churches judged did not carry the faith they had received.',
        ],
        ar: [
          'صحيح أن بعض الباحثين يقترحون تاريخًا مبكرًا لطبقة أولى من توما، وأن بعض أقواله له نظائر في الأناجيل. وهو نقاش علمي حي ويعرضه الاعتراض بإنصاف. ويؤرخ باحثون كثيرون العمل بالقرن الثاني بسبب علاقته بنص الأناجيل وموضوعاته، ولا يستطيع أحد تثبيت تاريخه من النسخ الباقية، وأقدمها شذرات يونانية من نحو القرن الثالث ونسخة قبطية من الرابع.',
          'وحتى على فرض تاريخ مبكر تبقى مسألة الاستعمال: لا سجل بقراءة العمل في عبادة الكنائس، والكتّاب الكنسيون الأوائل الذين يذكرونه يعاملونه كتابًا هرطوقيًا. وقد يكون القول قديمًا ويكون في كتاب حكمت الكنائس بأنه لا يحمل الإيمان الذي تسلّمته.',
        ],
      },
      limits: {
        en: 'This does not decide whether any single saying goes back to Jesus; historians weigh sayings one by one.',
        ar: 'لا يحسم هذا هل يرجع قول بعينه إلى يسوع؛ فالمؤرخون يزنون الأقوال واحدًا واحدًا.',
      },
      evidence: ['E4', 'E5'],
    },
    {
      id: 'O2',
      statement: {
        en: 'Early Christianity was a field of many “Christianities”, and the version that won decided which books survived. The excluded gospels are the voices of the losers.',
        ar: 'كانت المسيحية المبكرة ميدان «مسيحيات» كثيرة، والصيغة التي انتصرت قررت أي الأسفار تبقى. والأناجيل المستبعدة أصوات المهزومين.',
      },
      response: {
        en: [
          'The objection has real support. Some historians, among them Bart Ehrman, stress the variety of early Christian belief, and it is true that groups with different views existed and that their writings survive mostly because the Egyptian sands preserved them. The Nag Hammadi library is a witness to such a variety.',
          'There is a counter-case, though, which does not deny the variety. The core of the four Gospels was in wide use early, the early evidence we have for the churches’ judgement (Ignatius, Irenaeus) comes before the fourth-century lists, and the competing writings are for the most part later than the Gospels. Historians differ on how to weigh this, and the Church takes the early and widespread use as the sign of the apostolic witness.',
        ],
        ar: [
          'للاعتراض سند حقيقي. فبعض المؤرخين، ومنهم بارت إيرمان، يشددون على تنوع الإيمان المسيحي المبكر، وصحيح أن جماعات ذات آراء مختلفة وُجدت وأن كتاباتها بقيت في الغالب لأن رمال مصر حفظتها. ومكتبة نجع حمادي شاهد على هذا التنوع.',
          'لكن هناك حجة مقابلة لا تنكر التنوع. فنواة الأناجيل الأربعة كانت في استعمال واسع مبكرًا، والشواهد المبكرة التي لدينا على حكم الكنائس (إغناطيوس وإيريناؤس) تسبق قوائم القرن الرابع، والكتابات المنافسة في معظمها متأخرة عن الأناجيل. ويختلف المؤرخون في وزن هذا، وتأخذ الكنيسة الاستعمال المبكر الواسع علامة الشهادة الرسولية.',
        ],
      },
      limits: {
        en: 'The question of how far early Christianity was unified is not closed, and this article does not claim it is.',
        ar: 'مسألة مدى وحدة المسيحية المبكرة لم تُغلق، ولا يدّعي المقال ذلك.',
      },
      evidence: ['E4', 'E5'],
    },
    {
      id: 'O3',
      statement: {
        en: 'If the Church values details from the Protoevangelium of James, such as the names of Mary’s parents, it is inconsistent to say that the book is not Scripture.',
        ar: 'إن كانت الكنيسة تقدّر تفاصيل من إنجيل يعقوب الأول، كاسمي والدي مريم، فمن التناقض القول إنه ليس كتابًا مقدسًا.',
      },
      response: {
        en: [
          'The Church has always distinguished between Scripture, which is the rule for faith, and other ancient writings from which she may keep a pious tradition. The names of Joachim and Anna are kept in the Church’s memory and in her feasts, but no article of faith rests on that book.',
          'A distinction between a source of a tradition and a rule of faith is familiar in historical work as well, where a late source can preserve an early memory without being a reliable record as a whole.',
        ],
        ar: [
          'ميّزت الكنيسة دائمًا بين الكتاب المقدس، وهو قاعدة الإيمان، وكتابات قديمة أخرى قد تحتفظ منها بتقليد تقوي. وأسماء يواكيم وحنة محفوظة في ذاكرة الكنيسة وأعيادها، لكن لا يقوم على ذلك الكتاب بند إيماني.',
          'والتمييز بين مصدر تقليد وقاعدة إيمان مألوف في العمل التاريخي أيضًا، حيث يمكن أن يحفظ مصدر متأخر ذكرى مبكرة دون أن يكون سجلًا موثوقًا في جملته.',
        ],
      },
      limits: {
        en: 'Whether a given detail goes back to an early memory is a matter on which historians differ.',
        ar: 'هل يرجع تفصيل بعينه إلى ذكرى مبكرة مما يختلف فيه المؤرخون.',
      },
      evidence: ['E4'],
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'Historically, a Christian can say that the noncanonical gospels are mostly later than the four Gospels, pseudonymous and absent from the churches’ worship, that early church writers rejected docetic and gnostic teaching before any list existed, and that no single act suppressed them.',
        'A Christian should also say that the dating of Thomas and the diversity of early Christianity are debated, that the Nag Hammadi writings are important witnesses to the thinking of some groups, and that the sources for the groups are mostly their opponents.',
      ],
      ar: [
        'يستطيع المسيحي تاريخيًا أن يقول إن الأناجيل غير القانونية متأخرة في معظمها عن الأناجيل الأربعة ومنحولة الاسم وغائبة عن عبادة الكنائس، وإن كتّابًا كنسيين أوائل رفضوا التعليم الظهوري والغنوصي قبل وجود أي قائمة، وإنه لا فعل واحد كبتها.',
        'وعليه أيضًا أن يقول إن تأريخ توما وتنوع المسيحية المبكرة موضع جدل، وإن كتابات نجع حمادي شهود مهمون على تفكير بعض الجماعات، وإن مصادرنا عن الجماعات في الغالب من خصومها.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that the Word became flesh, truly taking a body, a soul and a mind. Writings that make Christ’s humanity only apparent, or that treat matter as the work of an evil power, cannot be the apostles’ witness. She therefore receives the four Gospels, which give the concrete life, death and resurrection of Jesus.',
        'This is not a rejection of reading the old writings. Believers are free to study them as history, as the Church’s own scholars do, and the Church asks only that they not be placed beside the Gospels as Scripture.',
      ],
      ar: [
        'تعترف الكنيسة بأن الكلمة صار جسدًا، متخذًا جسدًا ونفسًا وعقلًا حقًا. والكتابات التي تجعل ناسوت المسيح ظاهريًا، أو تعدّ المادة صنع قوة شريرة، لا يمكن أن تكون شهادة الرسل. ولذلك تتسلم الأناجيل الأربعة التي تعطي حياة يسوع وموته وقيامته على نحو ملموس.',
        'وليس هذا رفضًا لقراءة الكتابات القديمة. فللمؤمنين أن يدرسوها تاريخًا كما يفعل علماء الكنيسة، وكل ما تطلبه الكنيسة ألا تُوضع إلى جانب الأناجيل بوصفها كتابًا مقدسًا.',
      ],
    },
  },
  coptic: {
    en: [
      'Egypt has a special place here. The Nag Hammadi codices were found in Upper Egypt in 1945 and are written in Coptic, and the Church of Alexandria was the church of Origen, who knew of these currents, and of Athanasius, who warned the monasteries against apocryphal books in 367. The Coptic Church therefore has both a historical interest in the writings and a long-standing judgement on them.',
      'Coptic tradition also keeps several apocryphal narratives and feasts, for instance about the Holy Family’s journey to Egypt and the Dormition of the Virgin. The Church receives these as pious tradition and as part of her worship, distinct from the canon of Scripture. This shows that the Church’s line is between what is the rule of faith and what is memory, and not between what is old and what is new.',
    ],
    ar: [
      'لمصر مكان خاص هنا. فقد وُجدت مخطوطات نجع حمادي في صعيد مصر سنة ١٩٤٥ وهي مكتوبة بالقبطية، وكنيسة الإسكندرية هي كنيسة أوريجانوس الذي عرف هذه التيارات، وأثناسيوس الذي حذّر الأديرة من الكتب الأبوكريفية سنة ٣٦٧. فللكنيسة القبطية اهتمام تاريخي بالكتابات وحكم قديم عليها معًا.',
      'ويحتفظ التقليد القبطي أيضًا ببعض الروايات والأعياد المأخوذة من تراث غير قانوني، كرحلة العائلة المقدسة إلى مصر ونياحة العذراء. وتقبلها الكنيسة تقليدًا تقويًا وجزءًا من عبادتها، متميزًا عن قانون الكتاب المقدس. وهذا يبيّن أن خط الكنيسة يقع بين ما هو قاعدة إيمان وما هو ذاكرة، لا بين القديم والجديد.',
    ],
  },
  disputed: {
    en: [
      'Disputed among historians: the date of the Gospel of Thomas and of its sayings, whether any of the noncanonical gospels preserve independent early tradition, how varied early Christianity was, and the relation of Nag Hammadi to the monasteries.',
      'Disputed between traditions: how much weight to give pious traditions that come from noncanonical writings.',
      'Not disputed in this article: that these writings exist and are worth studying, that the churches did not read them in worship, and that no single act suppressed them.',
    ],
    ar: [
      'مختلف عليه بين المؤرخين: تاريخ إنجيل توما وأقواله، وهل تحفظ بعض الأناجيل غير القانونية تقليدًا مبكرًا مستقلًا، ومدى تنوع المسيحية المبكرة، وعلاقة نجع حمادي بالأديرة.',
      'مختلف عليه بين التقاليد: وزن التقاليد التقوية الآتية من كتابات غير قانونية.',
      'غير مختلف عليه في هذا المقال: أن هذه الكتابات موجودة وتستحق الدراسة، وأن الكنائس لم تقرأها في العبادة، وأنه لا فعل واحد كبتها.',
    ],
  },
  conclusion: {
    en: 'The noncanonical gospels are real ancient texts. Most are later than the four Gospels, carry names of apostles who did not write them, and in many cases teach what the churches had already rejected as contrary to the received faith. A few, Thomas above all, raise real questions of date that scholars argue about. The Church’s judgement is that the four Gospels are the apostolic witness, and she can study the others honestly as history.',
    ar: 'الأناجيل غير القانونية نصوص قديمة حقيقية. ومعظمها متأخر عن الأناجيل الأربعة ويحمل أسماء رسل لم يكتبوها، وفي حالات كثيرة يعلّم ما سبق أن رفضته الكنائس لمخالفته الإيمان المسلَّم. وبعضها، وتوما قبل غيره، يثير أسئلة حقيقية عن التاريخ يتجادل فيها الباحثون. وحكم الكنيسة أن الأناجيل الأربعة هي الشهادة الرسولية، وهي تستطيع دراسة الأخرى بأمانة بوصفها تاريخًا.',
  },
  furtherReading: ['S29', 'S30', 'S50'],
  related: ['who-chose-the-books', 'why-these-books', 'did-nicaea-choose-the-bible', 'who-wrote-the-gospels', 'scripture-and-tradition'],
};
