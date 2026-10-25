import type { Article } from '../types.ts';

export const article: Article = {
  id: 'what-happened-at-nicaea',
  questionId: 'what-happened-at-nicaea',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article describes the Council of Nicaea (AD 325): why it met, who took part, what it decided about the Son and about other matters, and how its work was received. It separates what is well attested from popular claims (that the council voted Jesus into divinity, or chose the books of the Bible). It does not deal with Constantinople (381), Ephesus (431) or Chalcedon (451) except to place Nicaea among them.',
    ar: 'يصف هذا المقال مجمع نيقية (٣٢٥م): لماذا انعقد، ومن شارك فيه، وماذا قرّر عن الابن وعن مسائل أخرى، وكيف قُبل عمله. ويفصل بين الثابت وبين الدعاوى الشائعة (أن المجمع صوّت على ألوهية يسوع، أو اختار أسفار الكتاب المقدس). ولا يتناول القسطنطينية (٣٨١) ولا أفسس (٤٣١) ولا خلقيدونية (٤٥١) إلا لوضع نيقية بينها.',
  },
  shortAnswer: {
    en: 'The emperor Constantine called the bishops of the Church to Nicaea in 325 to settle a dispute that began in Alexandria, where the presbyter Arius taught that the Son was brought into being by the Father and was not eternal. The council rejected that teaching and confessed that the Son is begotten, not made, of one essence with the Father. It also dealt with the date of Easter and with questions of Church order. It did not invent the worship of Christ and did not decide the list of biblical books. Its creed was later completed at Constantinople in 381, and the Coptic Orthodox Church confesses it at every Liturgy.',
    ar: 'دعا الإمبراطور قسطنطين أساقفة الكنيسة إلى نيقية سنة ٣٢٥م لحسم خلاف بدأ في الإسكندرية، حيث علّم القس آريوس أن الابن أُوجد من الآب وليس أزليًا. ورفض المجمع هذا التعليم واعترف بأن الابن مولود غير مخلوق، واحد في الجوهر مع الآب. وعالج أيضًا موعد الفصح ومسائل في نظام الكنيسة. ولم يخترع عبادة المسيح، ولم يحدد قائمة أسفار الكتاب المقدس. وقد استُكمل قانون إيمانه في القسطنطينية سنة ٣٨١م، وتعترف به الكنيسة القبطية الأرثوذكسية في كل قداس.',
  },
  quickPoints: {
    en: [
      'The dispute began in Alexandria between its bishop Alexander and the presbyter Arius, who taught that there was a time when the Son was not.',
      'Constantine convened the council in 325 at Nicaea in Bithynia, and bishops came from many regions, most of them from the East.',
      'The council confessed the Son as begotten from the Father, true God, of one essence with him, and condemned the teaching of Arius.',
      'It also set a common rule for the date of Easter and dealt with discipline, including the schism of Meletius in Egypt.',
      'It did not vote the Son into divinity and did not select the canon of Scripture; the dispute was between people who already worshipped Christ.',
      'Acceptance followed after decades of dispute, with Athanasius as the leading defender of the Nicene faith.',
    ],
    ar: [
      'بدأ الخلاف في الإسكندرية بين أسقفها ألكسندروس والقس آريوس الذي علّم أنه كان وقت لم يكن فيه الابن.',
      'دعا قسطنطين إلى المجمع سنة ٣٢٥م في نيقية ببيثينية، وجاء الأساقفة من مناطق كثيرة، أغلبهم من الشرق.',
      'اعترف المجمع بالابن مولودًا من الآب، إلهًا حقًا، واحدًا معه في الجوهر، وأدان تعليم آريوس.',
      'ووضع أيضًا قاعدة مشتركة لموعد الفصح، وعالج مسائل نظامية منها انشقاق ملاتيوس في مصر.',
      'لم يصوّت على ألوهية الابن ولم يختر قانون الكتاب المقدس؛ فالخلاف كان بين من يعبدون المسيح أصلًا.',
      'جاء القبول بعد عقود من الجدل، وكان أثناسيوس أبرز المدافعين عن الإيمان النيقاوي.',
    ],
  },
  argumentTypes: ['historical', 'theological'],
  assessment: {
    label: 'supported_disputed_details',
    explanation: {
      en: 'The main facts are well attested in ancient accounts and modern studies: the occasion, the convening by Constantine, the condemnation of Arius and the creed. Details are less certain, such as the exact number of bishops, the role of the emperor in the choice of the key word, and the course of the debates. The Church’s judgement that the creed expresses the apostolic faith is a theological affirmation, set out separately.',
      ar: 'الوقائع الرئيسية موثقة جيدًا في الروايات القديمة والدراسات الحديثة: المناسبة، ودعوة قسطنطين، وإدانة آريوس، وقانون الإيمان. أما التفاصيل فأقل يقينًا، مثل العدد الدقيق للأساقفة، ودور الإمبراطور في اختيار الكلمة المفصلية، ومجرى المناقشات. وحكم الكنيسة بأن قانون الإيمان يعبّر عن الإيمان الرسولي تأكيد لاهوتي يُعرض على حدة.',
    },
  },

  whyExamine: {
    en: [
      'Nicaea is the most misdescribed event in early Church history. Popular accounts say that the emperor and a vote made Jesus God, that the Bible was chosen there, or that the council suppressed other gospels. A calm account of what happened lets the reader test each claim.',
      'It also matters because the Coptic Orthodox Church counts Nicaea as its own history: the controversy began in Alexandria, its bishop took part, and its deacon Athanasius became the council’s chief defender.',
    ],
    ar: [
      'نيقية أكثر أحداث تاريخ الكنيسة المبكر تشويهًا في الأقاويل. تقول الروايات الشائعة إن الإمبراطور والتصويت جعلا يسوع إلهًا، أو إن الكتاب المقدس اختير هناك، أو إن المجمع أخمد أناجيل أخرى. والعرض الهادئ لما جرى يتيح للقارئ أن يمتحن كل دعوى.',
      'وهي مهمة أيضًا لأن الكنيسة القبطية الأرثوذكسية تعدّ نيقية جزءًا من تاريخها: فالجدل بدأ في الإسكندرية، وشارك أسقفها، وصار شمّاسها أثناسيوس أكبر المدافعين عن المجمع.',
    ],
  },
  background: {
    en: [
      'Arius was a presbyter in Alexandria in the time of Bishop Alexander, whom the Coptic Church counts as its nineteenth pope. Arius taught that the Son is the first and greatest of God’s creatures, brought into being before the ages by the Father, so that there was a time when the Son was not. Alexander and others held that the Son is eternally begotten of the Father and shares his divine being.',
      'The conflict spread through the eastern Church. Constantine, who had recently become sole ruler of the empire, wanted unity in the Church, and he summoned the bishops to Nicaea in the summer of 325. Ancient reports give differing numbers of bishops; the tradition names three hundred and eighteen, and modern historians treat the exact figure with caution.',
      'The council confessed that the Son is begotten of the Father, God from God, light from light, true God from true God, begotten and not made, of one essence with the Father. The Greek word for “of one essence” is homoousios. It also added anathemas against those who say that there was a time when the Son was not, or that he came from nothing, or that he is of another essence than the Father.',
      'The council handled other matters: it sought a common date for Easter across the churches and addressed the Meletian schism in Egypt and other points of Church order. Later tradition collected a set of canons from it. The council’s creed ended briefly with belief in the Holy Spirit; the longer statement on the Spirit belongs to Constantinople in 381, and the text recited in the Church today is called the Nicene-Constantinopolitan Creed.',
    ],
    ar: [
      'كان آريوس قسًّا في الإسكندرية في زمن الأسقف ألكسندروس، الذي تعدّه الكنيسة القبطية البابا التاسع عشر. وعلّم آريوس أن الابن أول مخلوقات الله وأعظمها، أوجده الآب قبل الدهور، فكان وقت لم يكن فيه الابن. ورأى ألكسندروس وآخرون أن الابن مولود من الآب منذ الأزل وشريك في كيانه الإلهي.',
      'وانتشر الصراع في الكنيسة الشرقية. وأراد قسطنطين، الذي صار حديثًا الحاكم الوحيد للإمبراطورية، وحدة في الكنيسة، فدعا الأساقفة إلى نيقية في صيف ٣٢٥م. وتتفاوت الروايات القديمة في عدد الأساقفة؛ ويذكر التقليد ثلاثمائة وثمانية عشر، ويعامل المؤرخون المعاصرون الرقم الدقيق بحذر.',
      'واعترف المجمع بأن الابن مولود من الآب، إله من إله، نور من نور، إله حق من إله حق، مولود غير مخلوق، مساوٍ للآب في الجوهر. والكلمة اليونانية لعبارة «واحد في الجوهر» هي هوموأوسيوس. وأضاف حرومات على من يقولون إنه كان وقت لم يكن فيه الابن، أو إنه من العدم، أو إنه من جوهر آخر غير جوهر الآب.',
      'وعالج المجمع أمورًا أخرى: فسعى إلى موعد مشترك للفصح بين الكنائس، وعالج انشقاق ملاتيوس في مصر ومسائل أخرى في نظام الكنيسة. وجمع التقليد لاحقًا مجموعة قوانين منسوبة إليه. وانتهى قانون إيمان المجمع باختصار بالإيمان بالروح القدس؛ أما الصياغة الأطول عن الروح فمن القسطنطينية سنة ٣٨١م، ويسمى النص المتلو اليوم قانون الإيمان النيقاوي القسطنطيني.',
    ],
  },
  glossary: ['christology', 'trinity', 'canon', 'tradition', 'miaphysitism'],

  claims: [
    {
      id: 'C1',
      proposition: {
        en: 'The council of 325 was summoned by Constantine to settle a dispute that began in Alexandria over the teaching of Arius, and it condemned that teaching.',
        ar: 'استدعى قسطنطين مجمع ٣٢٥م لحسم خلاف بدأ في الإسكندرية حول تعليم آريوس، وأدان المجمع ذلك التعليم.',
      },
      argumentType: 'historical',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'Ancient accounts and the modern histories agree on the occasion, the convening and the condemnation.',
        ar: 'تتفق الروايات القديمة والتواريخ الحديثة على المناسبة والدعوة والإدانة.',
      },
      limits: {
        en: 'The number of bishops and the order of the sessions are not known with certainty.',
        ar: 'عدد الأساقفة وترتيب الجلسات غير معروفين بيقين.',
      },
      evidence: ['E1'],
    },
    {
      id: 'C2',
      proposition: {
        en: 'The council did not begin the worship of Christ, did not vote Jesus into divinity, and did not decide which books belong to the Bible.',
        ar: 'لم يبدأ المجمع عبادة المسيح، ولم يصوّت على ألوهية يسوع، ولم يقرر أي الأسفار تنتمي إلى الكتاب المقدس.',
      },
      argumentType: 'historical',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The dispute was between Christians who already worshipped Christ; the surviving record of the council concerns the creed, Easter and Church order, not the list of Scripture.',
        ar: 'كان الخلاف بين مسيحيين يعبدون المسيح أصلًا؛ وما بقي من سجل المجمع يتعلق بقانون الإيمان والفصح ونظام الكنيسة، لا بقائمة الأسفار.',
      },
      limits: {
        en: 'Later writers attribute various claims to the council, and these are treated in the article on whether Nicaea chose the Bible.',
        ar: 'ينسب كتّاب لاحقون إلى المجمع دعاوى متنوعة، وتُعالج في المقال عن هل اختارت نيقية الكتاب المقدس.',
      },
      evidence: ['E1'],
    },
    {
      id: 'C3',
      proposition: {
        en: 'The Nicene faith that the Son is of one essence with the Father was defended by Athanasius and accepted in the Church only after decades of dispute.',
        ar: 'دافع أثناسيوس عن الإيمان النيقاوي بأن الابن واحد في الجوهر مع الآب، ولم تقبله الكنيسة إلا بعد عقود من الجدل.',
      },
      argumentType: 'historical',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The fourth century was a long period of debate, and studies such as Ayres’ place Nicaea at the start of it, not at the end.',
        ar: 'كان القرن الرابع زمن جدل طويل، وتضع دراسات مثل دراسة أيرس نيقية في بدايته لا في نهايته.',
      },
      limits: {
        en: 'Historians differ about how to describe the groups in the debate and how far the word “of one essence” was understood alike by all sides in 325.',
        ar: 'يختلف المؤرخون في وصف الجماعات المتجادلة وفي مدى فهم الجميع لعبارة «واحد في الجوهر» فهمًا واحدًا سنة ٣٢٥م.',
      },
      evidence: ['E1'],
    },
    {
      id: 'C4',
      proposition: {
        en: 'The Nicene confession expresses the faith of the Scriptures and the apostles: the Son is truly God, begotten of the Father.',
        ar: 'يعبّر الاعتراف النيقاوي عن إيمان الكتب المقدسة والرسل: الابن إله حق مولود من الآب.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'The Church reads John 1 and Matthew 28:19, with the whole witness of Scripture, as teaching the Son’s full divinity. The council gave that teaching a precise form to answer Arius.',
        ar: 'تقرأ الكنيسة يوحنا ١ ومتى ٢٨: ١٩، مع شهادة الكتاب كله، تعليمًا بلاهوت الابن الكامل. وأعطى المجمع هذا التعليم صيغة دقيقة جوابًا على آريوس.',
      },
      limits: {
        en: 'Those who deny the Nicene reading of these texts, whether Arians in the past or others now, read them differently.',
        ar: 'من ينكرون القراءة النيقاوية لهذه النصوص، سواء كانوا آريوسيين في الماضي أو غيرهم اليوم، يقرأونها قراءة مختلفة.',
      },
      evidence: ['E5'],
    },
  ],

  evidence: [
    {
      id: 'E1',
      sourceId: 'S20',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'Lewis Ayres’ Nicaea and Its Legacy is a study of the fourth-century Trinitarian controversies, in which Nicaea is placed within the debates before and after it.',
        ar: 'كتاب «نيقية وإرثها» للويس أيرس دراسة لخلافات القرن الرابع الثالوثية، تضع نيقية داخل النقاشات التي سبقتها وتلتها.',
      },
      inference: {
        en: 'The book is used here only to support the broad picture that the council was a stage in a long discussion. The site does not rely on any particular claim in it, and its chapters are not reported.',
        ar: 'يُستعمل الكتاب هنا لدعم الصورة العامة فقط، وهي أن المجمع مرحلة في نقاش طويل. ولا يعتمد الموقع على دعوى بعينها فيه، ولا تُنقل فصوله.',
      },
    },
    {
      id: 'E5',
      sourceId: 'S55',
      locator: 'whole work (Pope Shenouda III, The Creed)',
      role: 'context',
      states: {
        en: 'Pope Shenouda III’s The Creed is an exposition of the Nicene-Constantinopolitan Creed as the Coptic Orthodox Church confesses it, article by article.',
        ar: 'كتاب «قانون الإيمان» للبابا شنودة الثالث شرح لقانون الإيمان النيقاوي القسطنطيني كما تعترف به الكنيسة القبطية الأرثوذكسية، بندًا بندًا.',
      },
      inference: {
        en: 'It shows how the Coptic Church understands the Creed today. It is a Church teaching text, not a historical study of the council.',
        ar: 'يُظهر كيف تفهم الكنيسة القبطية قانون الإيمان اليوم. وهو نص تعليمي كنسي لا دراسة تاريخية للمجمع.',
      },
    },
  ],

  objections: [
    {
      id: 'O1',
      statement: {
        en: 'Constantine imposed the outcome. The council was a political act to unify the empire, and the bishops signed what the emperor wanted.',
        ar: 'فرض قسطنطين النتيجة. كان المجمع عملًا سياسيًا لتوحيد الإمبراطورية، ووقّع الأساقفة ما أراده الإمبراطور.',
      },
      response: {
        en: [
          'The emperor’s role was real: he called the council, paid for the bishops’ travel and took part in the proceedings, and he later used imperial power in the aftermath. A fair account says so.',
          'But the theological question came from the Church, in a quarrel that started in Alexandria before he took an interest. The emperor’s position afterwards was not constant, and in the following decades some emperors favoured the opponents of the Nicene faith. If the outcome had been merely imperial, the later history would not look as it does.',
        ],
        ar: [
          'كان لدور الإمبراطور وزن حقيقي: فقد دعا إلى المجمع، وتحمّل نفقات سفر الأساقفة، وشارك في الجلسات، واستعمل لاحقًا سلطة الإمبراطورية بعدها. والعرض المنصف يقول ذلك.',
          'لكن السؤال اللاهوتي جاء من الكنيسة، في خلاف بدأ في الإسكندرية قبل أن يهتم به. ولم يكن موقف الإمبراطور بعد ذلك ثابتًا، وفي العقود التالية فضّل بعض الأباطرة خصوم الإيمان النيقاوي. ولو كانت النتيجة إمبراطورية محضة لما بدا التاريخ اللاحق على ما هو عليه.',
        ],
      },
      limits: {
        en: 'Political pressure on bishops is a fair historical question; showing that the faith was not simply imperial does not show that its content is true.',
        ar: 'الضغط السياسي على الأساقفة سؤال تاريخي مشروع؛ وإثبات أن الإيمان لم يكن إمبراطوريًا محضًا لا يثبت صحة مضمونه.',
      },
      evidence: ['E1'],
    },
    {
      id: 'O2',
      statement: {
        en: 'The word “of one essence” is not found in the Bible. The council put a philosophical term in place of Scripture.',
        ar: 'عبارة «واحد في الجوهر» غير موجودة في الكتاب المقدس. فقد وضع المجمع مصطلحًا فلسفيًا مكان الكتاب.',
      },
      response: {
        en: [
          'It is true that the word is not in Scripture, and some bishops at the time raised that objection. Those who defended the word replied that Arius could accept every biblical title for the Son and still mean that he is a creature; a term was needed that excluded this reading.',
          'The Church regards the term as an interpretation of what Scripture says (the Word was God; all things were made through him) and not as an addition to it. A person who holds that Scripture alone must supply every term will judge differently.',
        ],
        ar: [
          'صحيح أن العبارة ليست في الكتاب، وقد أثار بعض الأساقفة هذا الاعتراض آنذاك. وردّ المدافعون عنها بأن آريوس كان يقبل كل لقب كتابي للابن ويظل يقصد أنه مخلوق؛ فاحتيج إلى لفظ يستبعد هذه القراءة.',
          'وتعدّ الكنيسة اللفظ تفسيرًا لما يقوله الكتاب (الكلمة كان الله، وكل شيء به كان) لا إضافة إليه. ومن يرى أن على الكتاب وحده أن يقدّم كل لفظ سيحكم حكمًا آخر.',
        ],
      },
      limits: {
        en: 'It leaves open the wider question of the relation of Scripture and Tradition, treated in a separate article.',
        ar: 'يبقى مفتوحًا السؤال الأوسع عن علاقة الكتاب بالتقليد، وتتناوله مقالة مستقلة.',
      },
    },
    {
      id: 'O3',
      statement: {
        en: 'Nicaea decided which gospels would be in the Bible and burned the rest.',
        ar: 'قرّر مجمع نيقية أي الأناجيل تدخل الكتاب المقدس وأحرق الباقي.',
      },
      response: {
        en: [
          'The surviving record of the council does not contain a list of biblical books or a decision to destroy writings. Its subjects are the Son, Easter and Church order. The fixing of the lists took place over the following centuries, in a process that the article on who chose the books describes.',
        ],
        ar: [
          'لا يتضمن ما بقي من سجل المجمع قائمة بأسفار الكتاب ولا قرارًا بإتلاف كتابات. وموضوعاته الابن والفصح ونظام الكنيسة. أما تثبيت القوائم فتمّ في القرون التالية بمسار يصفه المقال عن من اختار الأسفار.',
        ],
      },
      limits: {
        en: 'It does not discuss the content of other gospels or why churches did not receive them.',
        ar: 'لا يناقش مضمون أناجيل أخرى ولا لماذا لم تقبلها الكنائس.',
      },
      evidence: ['E1'],
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'Historically, a Christian can say that Nicaea is well attested as an assembly of bishops that answered a real controversy, that its main decision is clear, and that the claims that it voted Jesus into divinity or fixed the Bible do not fit the record. The Nicene faith won acceptance because it persisted through a generation of conflict, not because it was imposed in a day.',
        'It is fair to add that the emperor’s part, the exact numbers, the personalities and the wording debates are matters on which the sources are limited and historians differ.',
      ],
      ar: [
        'يستطيع المسيحي تاريخيًا أن يقول إن نيقية موثقة جيدًا بوصفها مجمع أساقفة أجاب عن جدل حقيقي، وإن قراره الرئيسي واضح، وإن الدعاوى بأنه صوّت على ألوهية يسوع أو ثبّت الكتاب المقدس لا تتفق مع السجل. وقد نال الإيمان النيقاوي القبول لأنه صمد في جيل من الصراع، لا لأنه فُرض في يوم.',
        'ومن الإنصاف أن يضيف أن دور الإمبراطور والأعداد الدقيقة والشخصيات ومناقشات الألفاظ مسائل مصادرها محدودة ويختلف فيها المؤرخون.',
      ],
    },
    theological: {
      en: [
        'The Church believes that the Holy Spirit guides the Church’s councils, and that at Nicaea the bishops confessed the faith given to the apostles in words that exclude the denial of the Son’s divinity. It receives Nicaea, Constantinople and Ephesus as the three ecumenical councils whose teaching it holds.',
        'The Coptic Orthodox Church therefore treats the Creed as the foundation of its confession of Christ and the Holy Trinity, and not as a human compromise.',
      ],
      ar: [
        'تؤمن الكنيسة بأن الروح القدس يرشد مجامعها، وبأن الأساقفة في نيقية اعترفوا بالإيمان المسلَّم إلى الرسل بألفاظ تستبعد إنكار لاهوت الابن. وتقبل نيقية والقسطنطينية وأفسس المجامع المسكونية الثلاثة التي تتمسك بتعليمها.',
        'ولذلك تعامل الكنيسة القبطية الأرثوذكسية قانون الإيمان أساسًا لاعترافها بالمسيح والثالوث القدوس، لا تسوية بشرية.',
      ],
    },
  },
  coptic: {
    en: [
      'Alexandria stood at the heart of the Nicene story. Pope Alexander, its nineteenth pope, opposed Arius; his deacon Athanasius went with him to the council and, as the twentieth pope of Alexandria, spent his life defending its faith, enduring exile more than once. The Church calls him the Apostolic.',
      'The Creed is recited in the Coptic Liturgy and in the Agpeya, the book of the hours. When Copts say that they hold the faith of the three ecumenical councils, they mean that they stand in the line of Nicaea. Their separation from the later Council of Chalcedon is a distinct question, treated elsewhere.',
    ],
    ar: [
      'تقف الإسكندرية في قلب قصة نيقية. فالبابا ألكسندروس، بابا الإسكندرية التاسع عشر، قاوم آريوس؛ وذهب معه شمّاسه أثناسيوس إلى المجمع، وصار البابا العشرين للإسكندرية، وقضى حياته في الدفاع عن إيمانه، وتحمّل النفي أكثر من مرة. وتدعوه الكنيسة الرسولي.',
      'ويُتلى قانون الإيمان في القداس القبطي وفي الأجبية، كتاب السواعي. وحين يقول الأقباط إنهم يتمسكون بإيمان المجامع المسكونية الثلاثة، فمعنى ذلك أنهم في خط نيقية. وانفصالهم عن مجمع خلقيدونية اللاحق مسألة مستقلة، تُعالج في موضع آخر.',
    ],
  },
  disputed: {
    en: [
      'Disputed among historians: the number of bishops present; the part played by Constantine in the choice of the word “of one essence”; the exact groupings in the debate; how far the term was understood alike in 325 by all those who signed it.',
      'Disputed between traditions: how the Spirit is spoken of in the Creed after Constantinople, and the value that different churches give to the council’s disciplinary canons. These are not treated here.',
      'Not disputed here: that Nicaea took place in 325 at the emperor’s call, that it condemned the teaching of Arius, and that it did not choose the books of the Bible.',
    ],
    ar: [
      'مختلف عليه بين المؤرخين: عدد الأساقفة الحاضرين؛ ودور قسطنطين في اختيار عبارة «واحد في الجوهر»؛ والتكتلات الدقيقة في الجدل؛ ومدى فهم كل من وقّعوا للعبارة فهمًا واحدًا سنة ٣٢٥م.',
      'مختلف عليه بين التقاليد: طريقة الكلام عن الروح في قانون الإيمان بعد القسطنطينية، والقيمة التي تعطيها الكنائس المختلفة لقوانين المجمع النظامية. ولا يتناولها هذا المقال.',
      'غير مختلف عليه هنا: أن نيقية انعقدت سنة ٣٢٥م بدعوة الإمبراطور، وأنها أدانت تعليم آريوس، وأنها لم تختر أسفار الكتاب المقدس.',
    ],
  },
  conclusion: {
    en: 'Nicaea was a council of bishops that answered a dispute begun in Alexandria by confessing the Son as true God, of one essence with the Father. It neither began the worship of Christ nor chose the Bible. The Coptic Orthodox Church receives its faith as the faith of the apostles, which the council put into exact words.',
    ar: 'كان مجمع نيقية مجمع أساقفة أجاب عن خلاف بدأ في الإسكندرية، فاعترف بالابن إلهًا حقًا، واحدًا في الجوهر مع الآب. ولم يبدأ عبادة المسيح ولم يختر الكتاب المقدس. وتقبل الكنيسة القبطية الأرثوذكسية إيمانه بوصفه إيمان الرسل الذي صاغه المجمع بألفاظ دقيقة.',
  },
  furtherReading: ['S20', 'S55'],
  related: ['early-christology-development', 'worshipped-before-constantine', 'what-trinity-affirms', 'did-nicaea-choose-the-bible', 'miaphysite-christology', 'disputes-among-traditions'],
};
