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
    en: 'The noncanonical gospels are real ancient writings, but they are not the apostles’ witness to Christ. Most are later than the four Gospels, they carry the names of apostles who did not write them, and many teach what contradicts the faith the churches had received, for example that Christ did not truly take flesh or that the material world is the work of a lesser god. They were not suppressed by a single decree: they were simply never read in the churches’ worship, and from the second century bishops and teachers named and rejected them. The four Gospels, read from the beginning on the Lord’s Day, are the Gospel the Church received from the apostles.',
    ar: 'الأناجيل غير القانونية كتابات قديمة حقيقية، لكنها ليست شهادة الرسل للمسيح. فمعظمها متأخر عن الأناجيل الأربعة، وتحمل أسماء رسل لم يكتبوها، وكثير منها يعلّم ما يناقض الإيمان الذي تسلّمته الكنائس، كالقول إن المسيح لم يتخذ جسدًا حقًا، أو إن العالم المادي من صنع إله أدنى. ولم تُكبت بقرار واحد: بل لم تُقرأ قط في عبادة الكنائس، ومنذ القرن الثاني سمّاها أساقفة ومعلمون ورفضوها. والأناجيل الأربعة، التي قُرئت منذ البدء في يوم الرب، هي الإنجيل الذي تسلّمته الكنيسة من الرسل.',
  },
  quickPoints: {
    en: [
      'St Luke’s preface shows that many accounts of Jesus were written early, so the Church has always had to recognise which writings carry the apostolic witness.',
      'Most noncanonical gospels come from the second century or later and carry the name of an apostle who did not write them.',
      'Several, such as the Gospel of Judas, which St Irenaeus already names as a forgery, teach that the material world is the work of a lesser god, contrary to the faith in one Creator.',
      'By about AD 150 St Justin describes the Gospels being read in Sunday worship; no noncanonical gospel has a comparable record.',
      'The Coptic Church has a particular interest: the Nag Hammadi books were found in Egypt and written in Coptic, and St Athanasius warned the Egyptian monasteries against such writings in 367.',
    ],
    ar: [
      'تبيّن مقدمة القديس لوقا أن روايات كثيرة عن يسوع كُتبت مبكرًا، فكان على الكنيسة دائمًا أن تميّز أي الكتابات تحمل الشهادة الرسولية.',
      'يعود معظم الأناجيل غير القانونية إلى القرن الثاني أو بعده، وتحمل اسم رسول لم يكتبها.',
      'يعلّم عدد منها، كإنجيل يهوذا الذي سمّاه القديس إيريناؤس مزوّرًا، أن العالم المادي من صنع إله أدنى، خلافًا للإيمان بخالق واحد.',
      'نحو سنة ١٥٠م يصف القديس يوستينوس قراءة الأناجيل في عبادة الأحد؛ ولا سجل مماثلًا لأي إنجيل غير قانوني.',
      'للكنيسة القبطية اهتمام خاص: فقد وُجدت كتب نجع حمادي في مصر وكُتبت بالقبطية، وحذّر القديس أثناسيوس الأديرة المصرية من مثل هذه الكتابات سنة ٣٦٧م.',
    ],
  },
  argumentTypes: ['historical', 'textual', 'theological'],
  assessment: {
    label: 'supported_disputed_details',
    explanation: {
      en: 'That most of these writings are later than the four Gospels, are pseudonymous and were not in the churches’ liturgical use is well supported. The exact dates of a few, the extent to which they preserve early traditions, and how varied early Christianity was are disputed among historians.',
      ar: 'إن كون معظم هذه الكتابات متأخرة عن الأناجيل الأربعة ومنحولة الاسم وغير مستعملة طقسيًا في الكنائس أمر مسنود جيدًا. أما التواريخ الدقيقة لقليل منها ومدى حفظها لتقاليد مبكرة ومدى تنوع المسيحية المبكرة فمختلف فيها بين المؤرخين.',
    },
  },

  whyExamine: {
    en: [
      'Many readers first meet these writings in a documentary or a novel, with the claim that the Church buried “lost gospels” that tell a different story of Jesus. The believer deserves a clear answer to that claim.',
      'The answer also shows the Church’s confidence. She does not fear these writings or treat them with contempt: they show how some groups on the edge of the churches imagined Jesus, and seeing them beside the four Gospels makes plain why the Church received the four.',
    ],
    ar: [
      'يلتقي كثير من القراء بهذه الكتابات أول مرة في فيلم وثائقي أو رواية، مع الزعم أن الكنيسة دفنت «أناجيل مفقودة» ترسم قصة مختلفة ليسوع. والمؤمن يستحق جوابًا واضحًا عن هذا الزعم.',
      'والجواب يبيّن أيضًا ثقة الكنيسة. فهي لا تخاف هذه الكتابات ولا تعاملها باحتقار: فهي تبيّن كيف تخيّلت بعض الجماعات على أطراف الكنائس يسوعَ، ورؤيتها إلى جانب الأناجيل الأربعة توضح لماذا تسلّمت الكنيسة الأربعة.',
    ],
  },
  background: {
    en: [
      'Luke’s preface, read as an ancient text, says that many had already taken in hand to set down an account of Jesus. So writings about Jesus were multiplying early. The four Gospels in the New Testament are the ones the churches came to read.',
      'The Gospel of Thomas, known fully from a Coptic copy found at Nag Hammadi in Egypt in 1945 and in part from Greek fragments from Oxyrhynchus, is a collection of 114 sayings with little narrative. Some sayings are close to sayings in the Gospels, and others are quite different. The Gospel of Peter survives in part in a manuscript found at Akhmim, and it tells of the passion and resurrection with unusual details. Serapion, a bishop of Antioch around AD 200, is reported to have first allowed it to be read in a church and then to have judged it to contain false teaching.',
      'The Gospel of Judas, known from a Coptic manuscript published in the early 2000s, is a gnostic text that Irenaeus, in the late second century, already mentions as a forgery of a heretical group. The Protoevangelium of James, from the second century, tells the story of Mary’s birth and childhood, and it is the source of the names of her parents; it has been widely used in Christian tradition for details, though it is not Scripture.',
      'In Egypt, Athanasius in his Festal Letter of AD 367 wrote to the monasteries to say which books are to be received as the canon and warned them against apocryphal writings composed under the names of saints.',
    ],
    ar: [
      'تقول مقدمة لوقا، حين تُقرأ نصًّا قديمًا، إن كثيرين أخذوا من قبل في تدوين رواية عن يسوع. فكانت الكتابات عن يسوع تتكاثر مبكرًا. والأناجيل الأربعة في العهد الجديد هي التي جاءت الكنائس إلى قراءتها.',
      'إنجيل توما، المعروف كاملًا من نسخة قبطية وُجدت في نجع حمادي بمصر سنة ١٩٤٥ وجزئيًا من شذرات يونانية من أوكسيرنخوس، مجموعة من ١١٤ قولًا قليلة السرد. وبعض الأقوال قريب من أقوال في الأناجيل وبعضها مختلف تمامًا. ويبقى إنجيل بطرس جزئيًا في مخطوط وُجد في أخميم، ويروي الآلام والقيامة بتفاصيل غير مألوفة. ويُروى أن سرابيون أسقف أنطاكية نحو سنة ٢٠٠م أجاز قراءته أولًا في كنيسة ثم حكم بأن فيه تعليمًا باطلًا.',
      'وإنجيل يهوذا، المعروف من مخطوط قبطي نُشر في مطلع الألفية الثالثة، نص غنوصي ذكره إيريناؤس في أواخر القرن الثاني بوصفه تأليفًا مزورًا لجماعة هرطوقية. وإنجيل يعقوب الأول (الطفولة) من القرن الثاني يروي قصة ميلاد مريم وطفولتها وهو مصدر اسمي والديها؛ وقد استُعمل في التقليد المسيحي على نطاق واسع للتفاصيل وإن لم يكن كتابًا مقدسًا.',
      'وفي مصر كتب أثناسيوس في رسالته الفصحية لسنة ٣٦٧م إلى الأديرة ليبيّن أي الأسفار تُقبل قانونًا وليحذّرها من كتابات أبوكريفية مؤلفة بأسماء قديسين.',
    ],
  },
  glossary: ['canon', 'gospel', 'tradition', 'manuscript', 'codex', 'christology', 'synoptic-gospels', 'perpetual-virginity'],

  claims: [
    {
      id: 'C3',
      proposition: {
        en: 'The four Gospels were read in worship earlier and far more widely than the noncanonical gospels, which have no comparable early record of church use.',
        ar: 'قُرئت الأناجيل الأربعة في العبادة أبكر وعلى نطاق أوسع بكثير من الأناجيل غير القانونية التي لا سجل مماثلًا لاستعمالها الكنسي المبكر.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'St Justin describes the Sunday reading of the apostles’ memoirs, called Gospels, around AD 150, and church writers after him treat the Gospel texts as Scripture. For the noncanonical gospels we have instead the notices of church writers who reject them.',
        ar: 'يصف القديس يوستينوس نحو سنة ١٥٠م قراءة مذكرات الرسل، المسماة أناجيل، في الأحد، ويعامل الكتّاب الكنسيون بعده نصوص الأناجيل كتابًا مقدسًا. أما الأناجيل غير القانونية فعندنا بدلًا من ذلك إشعارات كتّاب كنسيين يرفضونها.',
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
        en: 'This is the Church’s confession, resting on her reception of the apostolic faith. The history agrees with it: the four were read from the beginning, and the others were rejected because they did not carry that faith.',
        ar: 'هذا اعتراف الكنيسة، ويقوم على تسلّمها الإيمان الرسولي. والتاريخ يتفق معه: فالأربعة قُرئت منذ البدء، والأخرى رُفضت لأنها لم تحمل ذلك الإيمان.',
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
          'Some sayings in Thomas have parallels in the four Gospels, and the Church has no need to deny that a saying preserved there may echo the Lord’s words. But the book as we have it comes to us in copies far later than the Gospels, the earliest being Greek fragments of about the third century and a Coptic copy of the fourth, and its themes reflect the thought of groups the churches rejected.',
          'Above all, it was never read in the churches’ worship, and early church writers who mention it treat it as heretical. The Church did not drop awkward words of Jesus; she kept the four Gospels, which contain His hardest sayings, and declined a book that did not carry the faith she had received from the apostles.',
        ],
        ar: [
          'لبعض أقوال توما نظائر في الأناجيل الأربعة، ولا حاجة للكنيسة أن تنكر أن قولًا محفوظًا فيه قد يردد صدى كلمات الرب. لكن الكتاب كما هو بين أيدينا يصلنا في نسخ متأخرة كثيرًا عن الأناجيل، أقدمها شذرات يونانية من نحو القرن الثالث ونسخة قبطية من الرابع، وموضوعاته تعكس فكر جماعات رفضتها الكنائس.',
          'وفوق كل شيء، لم يُقرأ قط في عبادة الكنائس، والكتّاب الكنسيون الأوائل الذين يذكرونه يعاملونه كتابًا هرطوقيًا. ولم تُسقط الكنيسة كلمات محرجة ليسوع؛ بل حفظت الأناجيل الأربعة التي تحوي أصعب أقواله، وأبت كتابًا لا يحمل الإيمان الذي تسلّمته من الرسل.',
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
          'There were indeed groups with different views in the early centuries, and the Nag Hammadi library preserves some of their writings. The Church has never hidden this; St Irenaeus wrote a whole work describing and answering them.',
          'But the four Gospels were in wide use early, the churches’ judgement against the teaching of the rival writings is recorded by St Ignatius and St Irenaeus long before the fourth-century lists, and the rival writings are mostly later than the Gospels. The apostolic Gospel did not win by suppression; it was the faith handed down from the beginning, and the others departed from it.',
        ],
        ar: [
          'كانت هناك فعلًا جماعات ذات آراء مختلفة في القرون الأولى، وتحفظ مكتبة نجع حمادي بعض كتاباتها. ولم تخفِ الكنيسة ذلك قط؛ فقد كتب القديس إيريناؤس عملًا كاملًا يصفها ويرد عليها.',
          'لكن الأناجيل الأربعة كانت في استعمال واسع مبكرًا، وحكم الكنائس على تعليم الكتابات المنافسة مسجل عند القديس إغناطيوس والقديس إيريناؤس قبل قوائم القرن الرابع بزمن طويل، والكتابات المنافسة في معظمها متأخرة عن الأناجيل. فالإنجيل الرسولي لم ينتصر بالكبت؛ بل كان الإيمان المسلَّم منذ البدء، والأخرى حادت عنه.',
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
          'The Church has always distinguished between Scripture, which is the rule of faith, and other ancient writings from which she may keep a pious tradition. The names of Joachim and Anna are kept in the Church’s memory and her feasts, but no article of faith rests on that book.',
          'This is consistent, not contradictory. A late writing can preserve a true memory without being Scripture, just as a family keeps stories that are not part of its founding documents.',
        ],
        ar: [
          'ميّزت الكنيسة دائمًا بين الكتاب المقدس، وهو قاعدة الإيمان، وكتابات قديمة أخرى قد تحتفظ منها بتقليد تقوي. وأسماء يواقيم وحنة محفوظة في ذاكرة الكنيسة وأعيادها، لكن لا يقوم على ذلك الكتاب بند إيماني.',
          'وهذا اتساق لا تناقض. فالكتابة المتأخرة قد تحفظ ذكرى صادقة دون أن تكون كتابًا مقدسًا، كما تحتفظ عائلة بقصص ليست جزءًا من وثائق تأسيسها.',
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
        'The history supports the Church’s judgement. The noncanonical gospels are mostly later than the four Gospels, carry borrowed apostolic names, and were absent from the churches’ worship. Church writers rejected docetic and gnostic teaching long before any formal list existed, and no single act suppressed these books.',
        'The Nag Hammadi writings are valuable witnesses to how some groups thought. Placed beside the four Gospels, with their concrete account of the Lord’s life, death and resurrection, they show clearly why the churches recognised the four as the apostolic witness.',
      ],
      ar: [
        'يسند التاريخ حكم الكنيسة. فالأناجيل غير القانونية متأخرة في معظمها عن الأناجيل الأربعة، وتحمل أسماء رسولية مستعارة، وكانت غائبة عن عبادة الكنائس. ورفض الكتّاب الكنسيون التعليم الظهوري والغنوصي قبل وجود أي قائمة رسمية بزمن طويل، ولم يكبت هذه الكتب فعل واحد.',
        'وكتابات نجع حمادي شهود ثمينة على تفكير بعض الجماعات. وحين توضع إلى جانب الأناجيل الأربعة، بروايتها الملموسة لحياة الرب وموته وقيامته، يتضح لماذا عرفت الكنائس الأربعة شهادة رسولية.',
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
    en: 'The noncanonical gospels are real ancient texts, but they are not the apostles’ witness. Most are later than the four Gospels, carry names of apostles who did not write them, and often teach what the churches had already rejected as contrary to the received faith. The four Gospels, read in the churches from the beginning, are the Gospel of Christ handed down by the apostles, and the Church can study the other writings calmly as history.',
    ar: 'الأناجيل غير القانونية نصوص قديمة حقيقية، لكنها ليست شهادة الرسل. فمعظمها متأخر عن الأناجيل الأربعة، وتحمل أسماء رسل لم يكتبوها، وكثيرًا ما تعلّم ما سبق أن رفضته الكنائس لمخالفته الإيمان المسلَّم. والأناجيل الأربعة، التي قُرئت في الكنائس منذ البدء، هي إنجيل المسيح الذي سلّمه الرسل، وتستطيع الكنيسة أن تدرس الكتابات الأخرى بهدوء بوصفها تاريخًا.',
  },
  furtherReading: ['S29', 'S30', 'S50'],
  related: ['who-chose-the-books', 'why-these-books', 'did-nicaea-choose-the-bible', 'who-wrote-the-gospels', 'scripture-and-tradition'],
};
