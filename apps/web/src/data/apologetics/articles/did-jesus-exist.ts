import type { Article } from '../types.ts';

export const article: Article = {
  id: 'did-jesus-exist',
  questionId: 'did-jesus-exist',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'Whether a Jewish man called Jesus lived in first-century Judea and Galilee and was crucified. It does not ask whether he was divine, worked miracles or rose from the dead; those are separate questions with their own articles.',
    ar: 'هل عاش رجل يهودي اسمه يسوع في اليهودية والجليل في القرن الأول وصُلب؟ لا يسأل هذا المقال هل كان إلهًا أو صنع معجزات أو قام من الأموات، فتلك أسئلة مستقلة لها مقالاتها.',
  },
  shortAnswer: {
    en: 'Yes. Historians of antiquity, Christian and non-Christian alike, overwhelmingly treat the existence of Jesus as a settled historical question. The reasons are ordinary ones: very early letters by a man who met Jesus’ own brother, two independent lines of outside report, and the fact that the movement’s founder was executed in a shameful way that its own followers would hardly have invented. The conclusion is modest. It establishes that he lived and died; it does not by itself establish what Christians believe about him.',
    ar: 'نعم. يرى مؤرخو العالم القديم، مسيحيين وغير مسيحيين، بأغلبية ساحقة أن وجود يسوع مسألة تاريخية محسومة. وأسباب ذلك أسباب عادية: رسائل مبكرة جدًا كتبها رجل التقى أخا يسوع نفسه، وخطّان مستقلان من الأخبار من خارج الجماعة، وكون مؤسس الحركة أُعدم إعدامًا مخزيًا لا يرجَّح أن يخترعه أتباعه. والنتيجة متواضعة: هي تثبت أنه عاش ومات، ولا تثبت وحدها ما يؤمن به المسيحيون عنه.',
  },
  quickPoints: {
    en: [
      'St Paul’s letters, usually dated to the AD 50s, speak of Jesus’ brother James, of the Lord’s Supper and of the crucifixion, and say St Paul met James and Peter within a few years of his own change of mind.',
      'Tacitus (c. AD 115–120) says Christus was executed under Pontius Pilate; Josephus (c. AD 93–94) mentions James as the brother of Jesus called Christ. Neither was an eyewitness, and the longer Josephus passage has been reworked by Christians.',
      'Hostile ancient critics of Christianity argued against Jesus’ claims and character; the surviving ones do not claim he never lived.',
      'The theory that Jesus was invented from a purely heavenly figure is a minority position among historians, for reasons set out below.',
      'Showing that Jesus existed is not showing that he rose or is God. It is only the first step.',
    ],
    ar: [
      'تتحدث رسائل القديس بولس، التي يؤرَّخ أغلبها في خمسينيات القرن الأول، عن يعقوب أخي الرب وعن عشاء الرب وعن الصلب، ويقول القديس بولس إنه التقى يعقوب وبطرس بعد سنوات قليلة من تحوّله.',
      'يقول تاكيتوس (نحو ١١٥–١٢٠م) إن «كرستوس» أُعدم في ولاية بيلاطس البنطي، ويذكر يوسيفوس (نحو ٩٣–٩٤م) يعقوب أخا يسوع الذي يُدعى المسيح. ولم يكن أيٌّ منهما شاهد عيان، كما أن فقرة يوسيفوس الأطول أعاد مسيحيون صياغتها.',
      'ناقش خصوم المسيحية في العصور القديمة دعاوى يسوع وسيرته، ولا تزعم الكتابات الباقية منهم أنه لم يوجد قط.',
      'القول بأن يسوع اختُرع من شخصية سماوية صرفة رأي أقلية بين المؤرخين، لأسباب نعرضها أدناه.',
      'إثبات وجود يسوع لا يثبت قيامته ولا لاهوته. إنه الخطوة الأولى فقط.',
    ],
  },
  argumentTypes: ['historical'],
  assessment: {
    label: 'strong_historical_support',
    explanation: {
      en: 'Several kinds of evidence converge: early letters by a named author who met members of Jesus’ circle, hostile and neutral outside reports, and the difficulty of explaining the movement without a founder. None of this evidence is an eyewitness account of Jesus’ life, so the label rests on convergence, not on any single decisive text. The label covers existence and execution only.',
      ar: 'تلتقي أنواع عدة من الأدلة: رسائل مبكرة لكاتب معروف التقى أفرادًا من دائرة يسوع، وأخبار من خارج الجماعة بعضها عدائي وبعضها محايد، وصعوبة تفسير نشأة الحركة بلا مؤسس. وليس أيٌّ من هذه الأدلة شهادة عيان على حياة يسوع، فالتسمية تقوم على التقاء الأدلة لا على نص واحد حاسم. وهي تقتصر على الوجود والإعدام.',
    },
  },
  whyExamine: {
    en: [
      'Some readers meet the claim online that Jesus was a myth, perhaps borrowed from older stories of dying and rising gods. A believer should be able to meet that claim calmly, and a sceptic deserves to see the actual evidence before accepting or rejecting it.',
      'The question also teaches a method. Ancient history rarely offers photographs or official files. It works with a few surviving texts, asks who wrote each one, when, and how they could know. The same method is used for Alexander, for Socrates and for the Roman emperors, and it is fair to apply it here without special pleading in either direction.',
    ],
    ar: [
      'يصادف بعض القرّاء على الإنترنت قولًا إن يسوع أسطورة، ربما مستعارة من قصص أقدم عن آلهة تموت وتقوم. وينبغي للمؤمن أن يواجه هذا القول بهدوء، وللمتشكك أن يرى الأدلة الفعلية قبل أن يقبله أو يرفضه.',
      'والسؤال يعلّم منهجًا أيضًا. فالتاريخ القديم نادرًا ما يقدّم صورًا فوتوغرافية أو ملفات رسمية، بل يعمل بنصوص قليلة باقية ويسأل: من كتب كل نص؟ ومتى؟ وكيف عرف ما كتبه؟ وهذا هو المنهج نفسه المستخدم مع الإسكندر وسقراط والأباطرة الرومان، ومن العدل تطبيقه هنا دون محاباة في أي اتجاه.',
    ],
  },
  background: {
    en: [
      'Jesus lived in Roman-ruled Judea and Galilee. Most historians place his death between about AD 30 and 33, within the term of the Roman governor Pontius Pilate, who held office roughly from AD 26 to 36. The exact year depends on how the Passover chronology of the Gospels is read and is not fixed.',
      'The earliest surviving Christian writings are the letters of St Paul, usually dated to the AD 50s, some twenty to thirty years after the crucifixion. The four Gospels are usually dated within the first century, in the decades around and after AD 70. The non-Christian references come later still: Josephus in the 90s, Tacitus and Pliny in the early second century.',
      'Ancient writers had little reason to record an itinerant teacher from a provincial backwater who was executed as a criminal. The surprise is therefore not that the outside references are few and short, but that there are any at all within a century.',
    ],
    ar: [
      'عاش يسوع في اليهودية والجليل تحت الحكم الروماني. ويضع أكثر المؤرخين موته بين نحو ٣٠ و٣٣م، في عهد الوالي الروماني بيلاطس البنطي الذي تولى منصبه تقريبًا من سنة ٢٦ إلى ٣٦م. والسنة الدقيقة تتوقف على قراءة تسلسل الفصح في الأناجيل، وهي غير محسومة.',
      'أقدم الكتابات المسيحية الباقية رسائل القديس بولس، التي يؤرَّخ أغلبها في خمسينيات القرن الأول، أي بعد الصلب بنحو عشرين إلى ثلاثين سنة. أما الأناجيل الأربعة فتؤرَّخ عادة في القرن الأول، في العقود المحيطة بسنة ٧٠م وما بعدها. وتأتي الإشارات غير المسيحية متأخرة أكثر: يوسيفوس في تسعينيات القرن الأول، وتاكيتوس وبليني في أوائل القرن الثاني.',
      'لم يكن للكتّاب القدماء سبب يدعوهم إلى تسجيل خبر معلّم جوّال من منطقة نائية أُعدم بوصفه مجرمًا. فالمستغرب إذن ليس قلة الإشارات الخارجية وقصرها، بل وجودها أصلًا في غضون قرن.',
    ],
  },
  glossary: ['primary-source', 'eyewitness', 'independent-attestation', 'interpolation', 'testimonium-flavianum', 'crucifixion'],

  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'A Jewish teacher named Jesus lived in first-century Palestine and was crucified under Roman authority.',
        ar: 'عاش معلّم يهودي اسمه يسوع في فلسطين في القرن الأول وصُلب بسلطة رومانية.',
      },
      argumentType: 'historical',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'St Paul’s letters name Jesus’ brother and say St Paul met him; Tacitus reports the execution; Josephus mentions James as the brother of Jesus called Christ. The movement’s earliest literature is also unusually frank that its Lord died by crucifixion, a death that was a stigma, not a selling point.',
        ar: 'تذكر رسائل القديس بولس أخا يسوع وتقول إن القديس بولس التقاه، ويروي تاكيتوس الإعدام، ويذكر يوسيفوس يعقوب أخا يسوع الذي يُدعى المسيح. كما أن أقدم أدبيات الحركة صريحة على نحو لافت في أن ربّها مات مصلوبًا، وهي ميتة كانت عارًا لا مادة دعاية.',
      },
      limits: {
        en: 'None of these sources is an eyewitness account of Jesus’ life. The claim establishes existence and execution, not any detail of his teaching or any miracle.',
        ar: 'ليس أيٌّ من هذه المصادر شهادة عيان على حياة يسوع. تثبت الدعوى الوجود والإعدام، لا أي تفصيل من تعليمه ولا أي معجزة.',
      },
      evidence: ['e1', 'e2', 'e4', 'e5'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'Outside writers report Jesus’ existence from a stance that is neutral or hostile, not from Christian faith.',
        ar: 'يروي كتّاب من خارج الجماعة وجود يسوع من موقف محايد أو عدائي، لا من منطلق الإيمان المسيحي.',
      },
      argumentType: 'historical',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'Tacitus is openly hostile to Christians. Josephus’ mention of James is brief and incidental. Celsus, whose attack survives inside Origen’s reply, argues against Jesus without doubting that he lived.',
        ar: 'يعادي تاكيتوس المسيحيين علنًا. وإشارة يوسيفوس إلى يعقوب موجزة وعارضة. أما كلسوس، الذي يبقى هجومه داخل ردّ أوريجانوس، فيجادل ضد يسوع دون أن يشكك في أنه عاش.',
      },
      limits: {
        en: 'Tacitus’ source is unknown and may reflect what Christians themselves told Romans. The long Josephus passage has been reworked by Christian hands, so only the shorter mention of James is used here as a firmer point.',
        ar: 'مصدر تاكيتوس مجهول، وقد يعكس ما قاله المسيحيون أنفسهم للرومان. والفقرة الطويلة عند يوسيفوس أعاد مسيحيون صياغتها، لذلك لا نعتمد هنا إلا على الإشارة الأقصر إلى يعقوب نقطةً أمتن.',
      },
      evidence: ['e1', 'e2', 'e3', 'e7'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'The view that Jesus never lived and was invented from a purely heavenly figure explains the evidence less well than the view that he did.',
        ar: 'القول بأن يسوع لم يوجد قط وأنه اختُرع من شخصية سماوية صرفة يفسّر الأدلة تفسيرًا أضعف من القول بأنه وُجد.',
      },
      argumentType: 'historical',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'It has to read St Paul the Apostle’s reference to James the Lord’s brother, whom he met in Jerusalem, and the creed-like tradition he received, as something other than they appear to be, and it has to explain why a story of a crucified man was invented when such a story was an embarrassment in both Jewish and Roman eyes.',
        ar: 'يضطر هذا القول إلى قراءة إشارة القديس بولس الرسول إلى يعقوب أخي الرب الذي التقاه في أورشليم، والتقليد الشبيه بالقانون الذي تسلّمه، قراءةً تخالف ظاهرها، وإلى تفسير سبب اختراع قصة رجل مصلوب في وقت كانت فيه هذه القصة عارًا في عين اليهود والرومان.',
      },
      limits: {
        en: 'Mythicist authors raise real questions about the thinness of contemporary reports and about parallels with other myths. A few arguments are better than others; the position is a minority one, not a forbidden one.',
        ar: 'يطرح أصحاب هذا الرأي أسئلة حقيقية عن ضآلة الأخبار المعاصرة وعن أوجه الشبه مع أساطير أخرى. بعض حججهم أقوى من بعض، والرأي هو رأي أقلية لا رأي محظور.',
      },
      evidence: ['e4', 'e5', 'e8'],
    },
  ],

  evidence: [
    {
      id: 'e1',
      sourceId: 'S01',
      locator: 'Annals 15.44',
      role: 'supports',
      states: {
        en: 'In his account of Nero blaming Christians for the fire of Rome in AD 64, Tacitus says the name came from Christus, who had been put to death in Tiberius’ reign by the procurator Pontius Pilate, and that the movement was checked for a time and then broke out again.',
        ar: 'في روايته عن اتهام نيرون المسيحيين بحريق روما سنة ٦٤م، يقول تاكيتوس إن الاسم مشتق من «كرستوس» الذي أُعدم في عهد طيباريوس على يد الوالي بيلاطس البنطي، وإن الحركة كُبحت حينًا ثم عادت فظهرت.',
      },
      inference: {
        en: 'A hostile Roman senator, writing about two generations after the event, took it for granted that Christians took their name from a man executed under Pilate. This is evidence of what was known and said in Rome in his day. It is not an independent record from the 30s.',
        ar: 'عدّ سناتور روماني معادٍ، يكتب بعد الحدث بنحو جيلين، أمرًا مسلَّمًا به أن المسيحيين اشتقوا اسمهم من رجل أُعدم في ولاية بيلاطس. وهذا دليل على ما كان معروفًا ومتداولًا في روما في زمنه، وليس سجلًا مستقلًا من ثلاثينيات القرن الأول.',
      },
    },
    {
      id: 'e2',
      sourceId: 'S03',
      locator: 'Antiquities 20.200',
      role: 'supports',
      states: {
        en: 'Josephus tells how a high priest, in the interval between two Roman governors, had James, described as the brother of Jesus who was called Christ, brought before a council and condemned to stoning, along with some others.',
        ar: 'يروي يوسيفوس كيف أحضر رئيس كهنة، في الفترة الفاصلة بين واليين رومانيين، يعقوب، الموصوف بأنه أخو يسوع الذي يُدعى المسيح، أمام مجلس وحكم عليه بالرجم مع آخرين.',
      },
      inference: {
        en: 'The identification of James by his brother is incidental, which fits a writer who assumes the reader knows who Jesus was. Many scholars treat the passage as authentic, though a few have suspected a Christian hand in the words about Christ. This is the more widely accepted of the two Josephus passages.',
        ar: 'تعريف يعقوب بأخيه جاء عرَضًا، وهذا يلائم كاتبًا يفترض أن قارئه يعرف من هو يسوع. ويعدّ كثير من الباحثين الفقرة أصيلة، وإن ظنّ قليلون أن يدًا مسيحية تدخلت في العبارة المتعلقة بالمسيح. وهي أكثر الفقرتين قبولًا عند يوسيفوس.',
      },
    },
    {
      id: 'e3',
      sourceId: 'S04',
      locator: 'Antiquities 18.63–64',
      role: 'context',
      states: {
        en: 'The longer passage describes Jesus as a wise teacher who was condemned by Pilate on the accusation of leading men of Jewish standing, and who was followed by a group that continued after him. The surviving wording also includes confessional statements that a Jewish writer who did not follow Jesus is unlikely to have made.',
        ar: 'تصف الفقرة الأطول يسوع بأنه معلّم حكيم حكم عليه بيلاطس بناء على اتهام من وجهاء اليهود، وأن جماعة تبعته واستمرت بعده. وتتضمن الصياغة الباقية أيضًا عبارات إيمانية يستبعد أن يقولها كاتب يهودي لم يتبع يسوع.',
      },
      inference: {
        en: 'Because the wording was reworked, this passage is not used as a firm witness here. The article on non-Christian sources sets out the three main scholarly positions on how much goes back to Josephus.',
        ar: 'لأن الصياغة أُعيد تشكيلها، لا نستخدم هذه الفقرة هنا شاهدًا متينًا. ويعرض مقال المصادر غير المسيحية المواقف العلمية الثلاثة الرئيسة في مقدار ما يرجع منها إلى يوسيفوس.',
      },
      dependence: {
        en: 'Same author and same work as the passage on James (S03), so Josephus counts as one witness, not two.',
        ar: 'المؤلف نفسه والعمل نفسه كما في فقرة يعقوب (S03)، فيوسيفوس شاهد واحد لا اثنان.',
      },
    },
    {
      id: 'e4',
      sourceId: 'S62',
      locator: 'Galatians 1:18–19',
      role: 'supports',
      states: {
        en: 'St Paul writes that, three years after his change of mind, he went up to Jerusalem to get to know Cephas (Peter), stayed about two weeks, and saw no other apostle except James, whom he calls the Lord’s brother.',
        ar: 'يكتب القديس بولس أنه بعد ثلاث سنوات من تحوّله صعد إلى أورشليم ليتعرف إلى صفا (بطرس)، ومكث نحو خمسة عشر يومًا، ولم ير رسولًا آخر سوى يعقوب الذي يسميه أخا الرب.',
      },
      inference: {
        en: 'Read as an ancient letter, not as inspired Scripture, this is a first-person claim by a named author, written within about two decades of the crucifixion, to have met Jesus’ own brother and his closest follower. It is hard to reconcile with a figure who was only ever a heavenly being.',
        ar: 'عند قراءتها رسالةً قديمة لا نصًا موحى به، هي دعوى بضمير المتكلم من كاتب معروف، كُتبت في غضون عقدين تقريبًا من الصلب، بأنه التقى أخا يسوع نفسه وأقرب أتباعه. ويصعب التوفيق بينها وبين شخصية لم تكن قط إلا كائنًا سماويًا.',
      },
      bible: { book: 'galatians', chapter: 1, verse: '18-19' },
    },
    {
      id: 'e5',
      sourceId: 'S62',
      locator: '1 Corinthians 15:3–7',
      role: 'supports',
      states: {
        en: 'St Paul reminds the Corinthians of what he had passed on to them: that Christ died, was buried and was raised, and that he appeared to Cephas, to the Twelve and to others, among them James. He says this is what he himself had received.',
        ar: 'يذكّر القديس بولس أهل كورنثوس بما سلّمه إليهم: أن المسيح مات ودُفن وقام، وظهر لصفا ثم للاثني عشر ولآخرين، من بينهم يعقوب. ويقول إن هذا ما تسلّمه هو نفسه.',
      },
      inference: {
        en: 'Whatever one makes of the resurrection claim, the passage shows that a summary of Jesus’ death and burial was already in fixed form when St Paul wrote in the 50s and that he names living people who could be asked. Many historians date the underlying summary to within a few years of the events, but the precise date is debated.',
        ar: 'أيًّا كان الرأي في دعوى القيامة، يبين النص أن خلاصة موت يسوع ودفنه كانت قد اتخذت صيغة ثابتة حين كتب القديس بولس في الخمسينيات، وأنه يسمّي أحياء يمكن سؤالهم. ويؤرّخ مؤرخون كثيرون أصل هذه الخلاصة بسنوات قليلة بعد الأحداث، لكن التاريخ الدقيق محل نقاش.',
      },
      bible: { book: '1-corinthians', chapter: 15, verse: '3-7' },
    },
    {
      id: 'e7',
      sourceId: 'S51',
      locator: 'Book I',
      role: 'context',
      states: {
        en: 'Origen’s reply to the second-century critic Celsus preserves a good deal of Celsus’ attack, which mocks Jesus’ origins, character and followers.',
        ar: 'يحفظ ردّ أوريجانوس على الناقد كلسوس من القرن الثاني جانبًا كبيرًا من هجومه، وهو يسخر من أصل يسوع وسيرته وأتباعه.',
      },
      inference: {
        en: 'Celsus is the best-preserved early pagan opponent, and he argues about what kind of man Jesus was. The surviving text does not treat his existence as the point in dispute. Because Celsus survives only inside a Christian reply, he is quoted at second hand.',
        ar: 'كلسوس هو أفضل خصوم المسيحية الوثنيين الأوائل حفظًا، وهو يجادل في أي رجل كان يسوع. ولا يعامل النص الباقي وجوده بوصفه موضع الخلاف. ولأن كلسوس لا يبقى إلا داخل ردّ مسيحي، فهو منقول بواسطة.',
      },
    },
    {
      id: 'e8',
      sourceId: 'S09',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'Bart Ehrman, a historian who describes himself as an agnostic, argues in this book that Jesus existed and that the case that he was invented does not survive examination.',
        ar: 'يحاجّ بارت إيرمان، وهو مؤرخ يصف نفسه بأنه لاأدري، في هذا الكتاب بأن يسوع وُجد وأن القول باختلاقه لا يصمد أمام الفحص.',
      },
      inference: {
        en: 'It is useful that a major sceptical-leaning scholar of early Christianity reaches this conclusion without any commitment to the Christian faith. Only the book’s overall thesis is cited.',
        ar: 'يفيد أن باحثًا كبيرًا في المسيحية المبكرة، يميل إلى التشكك، يبلغ هذه النتيجة دون أي التزام بالإيمان المسيحي. ولا يُستشهد إلا بأطروحة الكتاب العامة.',
      },
    },
    {
      id: 'e9',
      sourceId: 'S07',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'context',
      states: {
        en: 'Robert Van Voorst’s book surveys what writers outside the New Testament, Christian and non-Christian, say about Jesus.',
        ar: 'يستعرض كتاب روبرت فان فورست ما يقوله عن يسوع كتّاب من خارج العهد الجديد، مسيحيون وغير مسيحيين.',
      },
      inference: {
        en: 'Offered as a route to the detailed discussion of each passage. No particular judgement from it is reported here.',
        ar: 'يُقدَّم طريقًا إلى المناقشة التفصيلية لكل فقرة. ولا يُنقل عنه هنا حكم بعينه.',
      },
    },
  ],

  objections: [
    {
      id: 'o1',
      statement: {
        en: 'Jesus is a myth. No contemporary writer mentions him, and the Gospel story resembles older tales of dying and rising gods. St Paul says little about the life of Jesus, which suggests that early Christians knew a celestial saviour and the earthly biography was added later.',
        ar: 'يسوع أسطورة. لا يذكره كاتب معاصر، وتشبه قصة الأناجيل حكايات أقدم عن آلهة تموت وتقوم. وبولس يقول القليل عن حياة يسوع، مما يوحي بأن المسيحيين الأوائل عرفوا مخلّصًا سماويًا وأن السيرة الأرضية أُضيفت لاحقًا.',
      },
      response: {
        en: [
          'The silence of contemporaries is weaker than it sounds. A provincial teacher executed under a minor governor would not ordinarily be noticed by the surviving elite writers of the time, and the same argument from silence would erase many figures nobody doubts. The first outside notices appear when Christians had become visible to the Roman world.',
          'On the parallels, most of the supposed dying-and-rising gods differ in kind: they are seasonal or cultic figures, not a recent man executed under a named governor, and the closest resemblances are often drawn from later sources or from loose analogy. St Paul the Apostle, meanwhile, does refer to James the Lord’s brother and to the crucifixion. He is not a witness to a celestial being only.',
          'None of this makes the question trivial. Mythicist writers press real points about how little outside evidence there is and about how Christian tradition shaped what we read. The reason most historians still reject their conclusion is that it needs several of the evidence’s plain readings to be set aside at once.',
        ],
        ar: [
          'صمت المعاصرين أضعف مما يبدو. فمعلّم من الأقاليم أُعدم في عهد والٍ صغير ما كان الكتّاب النخبويون الباقية كتاباتهم ليلتفتوا إليه عادة، والحجة من الصمت نفسها كانت ستمحو شخصيات كثيرة لا يشك فيها أحد. وقد ظهرت أولى الإشارات الخارجية حين صار المسيحيون مرئيين للعالم الروماني.',
          'أما أوجه الشبه فمعظم «الآلهة التي تموت وتقوم» المزعومة تختلف في طبيعتها: هي شخصيات موسمية أو طقسية، لا رجل حديث العهد أُعدم في ولاية والٍ مسمّى، وأقرب أوجه الشبه كثيرًا ما يُستمد من مصادر متأخرة أو من تشبيه فضفاض. والقديس بولس الرسول من جهته يشير فعلًا إلى يعقوب أخي الرب وإلى الصلب، فليس شاهدًا على كائن سماوي فحسب.',
          'ولا يجعل ذلك السؤال هيّنًا. فأصحاب هذا الرأي يلحّون على نقاط حقيقية في قلة الأدلة الخارجية وفي أثر التقليد المسيحي فيما نقرؤه. وسبب رفض أكثر المؤرخين لنتيجتهم أنها تتطلب تنحية عدة قراءات ظاهرة للأدلة دفعة واحدة.',
        ],
      },
      limits: {
        en: 'This response defends the existence of a historical Jesus only. It does not show that the Gospels are reliable in detail, and it says nothing about miracles or divinity.',
        ar: 'يدافع هذا الرد عن وجود يسوع التاريخي فقط. ولا يبيّن أن الأناجيل موثوقة في التفاصيل، ولا يقول شيئًا عن المعجزات أو اللاهوت.',
      },
      evidence: ['e1', 'e2', 'e4', 'e8'],
    },
    {
      id: 'o2',
      statement: {
        en: 'The outside references are worthless. Tacitus probably only repeats what Christians told him, and Josephus was tampered with. If the sources are this compromised, nothing can be concluded.',
        ar: 'الإشارات الخارجية عديمة القيمة. فتاكيتوس على الأرجح ينقل ما قاله له المسيحيون، ويوسيفوس عُبث بنصه. وإذا كانت المصادر على هذا القدر من التلوث فلا يمكن استنتاج شيء.',
      },
      response: {
        en: [
          'This is partly right, and the article says so. Tacitus’ source is unknown, and the longer Josephus passage is not safe to lean on. For that reason these texts are used as supporting context rather than as the foundation.',
          'The argument carries most weight in St Paul’s letters, which are the work of a single identifiable author, written in the lifetime of those he names. The Church receives them as inspired Scripture; here they are used only for what they plainly say about Jesus and his circle. Outside writers then show that Romans and Jews of the next generations did not regard Jesus’ existence as in doubt.',
        ],
        ar: [
          'هذا صحيح جزئيًا، والمقال يقول ذلك. فمصدر تاكيتوس مجهول، ولا يؤمن الاتكاء على فقرة يوسيفوس الأطول. ولهذا تُستخدم هذه النصوص سياقًا داعمًا لا أساسًا.',
          'ويقع ثقل الحجة في رسائل القديس بولس، وهي من كاتب واحد معروف، كُتبت في حياة من يسميهم، وتتسلمها الكنيسة بوصفها كتابًا موحى به، ولا يُستعمل منها هنا إلا ما تقوله صراحةً عن يسوع ودائرته. ثم يبين الكتّاب الخارجيون أن الرومان واليهود في الأجيال التالية لم يعدّوا وجود يسوع محل شك.',
        ],
      },
      limits: {
        en: 'St Paul the Apostle writes as a believer. A reader who does not share that faith will look for corroboration from outside the Church, which the Roman and Jewish writers partly supply.',
        ar: 'يكتب القديس بولس الرسول بصفته مؤمنًا. ومن لا يشاركه الإيمان سيطلب شهادة من خارج الكنيسة، وهذا ما يقدّمه جزئيًا الكتّاب الرومان واليهود.',
      },
      evidence: ['e1', 'e3', 'e4', 'e5'],
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'The historical case above is deliberately small. It claims that Jesus lived, that he was known to have a brother called James and a leading follower called Peter, and that he was crucified under Roman authority. It does not need to appeal to the inspiration of the Gospels or to the resurrection, which the Church confesses on further grounds.',
        'The Gospels add detail that outside sources cannot supply. Historians differ on how much of that detail goes back to Jesus, and that discussion belongs to the articles on the Gospels and on memory and oral tradition.',
      ],
      ar: [
        'الحجة التاريخية أعلاه صغيرة عمدًا. فهي تزعم أن يسوع عاش، وأنه عُرف له أخ اسمه يعقوب وتابع بارز اسمه بطرس، وأنه صُلب بسلطة رومانية. ولا تحتاج إلى الاستناد إلى الوحي في الأناجيل ولا إلى القيامة، التي تعترف بها الكنيسة لأسباب أخرى.',
        'وتضيف الأناجيل تفاصيل لا تقدر المصادر الخارجية على تقديمها. ويختلف المؤرخون في مقدار ما يرجع منها إلى يسوع نفسه، وهذه المناقشة موضعها المقالات عن الأناجيل وعن الذاكرة والتقليد الشفهي.',
      ],
    },
    theological: {
      en: [
        'Christian faith does not rest on the bare existence of Jesus. It confesses that the eternal Word became man, which is an affirmation of the Church and not a conclusion of historical method. What history can contribute is that the Church’s message was about someone who could be located in place and time, not about a timeless symbol.',
      ],
      ar: [
        'لا يقوم الإيمان المسيحي على مجرد وجود يسوع، بل يعترف بأن الكلمة الأزلي صار إنسانًا، وهذا إقرار الكنيسة وليس نتيجة منهج تاريخي. وما يمكن للتاريخ أن يقدّمه هو أن رسالة الكنيسة كانت عن شخص يمكن تحديد مكانه وزمانه، لا عن رمز خارج الزمان.',
      ],
    },
  },
  coptic: {
    en: [
      'In the Coptic Orthodox faith the incarnation is an event in history: God the Word became truly man, with a real body, soul and mind, and lived, suffered and died as a man. The Church’s confession of one incarnate nature of the Word, from two natures united without mixture, confusion or alteration, presupposes a real human life. Historical enquiry into whether the man lived is therefore not a threat to this faith, but it is not the ground of it either.',
    ],
    ar: [
      'التجسد في الإيمان القبطي الأرثوذكسي حدث في التاريخ: صار الله الكلمة إنسانًا حقًا، بجسد ونفس وعقل حقيقيين، وعاش وتألم ومات إنسانًا. واعتراف الكنيسة بطبيعة واحدة متجسدة لله الكلمة، من طبيعتين اتحدتا بلا اختلاط ولا امتزاج ولا تغيير، يفترض حياة بشرية حقيقية. فالبحث التاريخي في هل عاش هذا الإنسان لا يهدد هذا الإيمان، لكنه ليس أساسه كذلك.',
    ],
  },
  disputed: {
    en: [
      'The authenticity and exact scope of the Josephus passages remain debated, and so does the source of Tacitus’ information. How much of the Gospel detail goes back to Jesus himself is disputed, and so is how early the summary in 1 Corinthians 15 is. Historians also differ on the best date for the crucifixion within AD 30–33.',
    ],
    ar: [
      'ما زالت أصالة فقرات يوسيفوس ونطاقها الدقيق موضع نقاش، وكذلك مصدر معلومات تاكيتوس. ويُختلف في مقدار تفاصيل الأناجيل الراجع إلى يسوع نفسه، وفي مدى قِدم الخلاصة الواردة في ١ كورنثوس ١٥. كما يختلف المؤرخون في أفضل تاريخ للصلب ضمن السنوات ٣٠–٣٣م.',
    ],
  },
  conclusion: {
    en: 'On ordinary historical grounds it is reasonable to conclude that Jesus lived and was crucified under Roman authority. That conclusion is secure enough to build on, and modest enough that it leaves every question about his teaching, miracles and identity still to be examined.',
    ar: 'على أسس تاريخية عادية يصح الاستنتاج بأن يسوع عاش وصُلب بسلطة رومانية. وهذه نتيجة راسخة بما يكفي ليُبنى عليها، ومتواضعة بما يكفي لتترك كل سؤال عن تعليمه ومعجزاته وهويته مفتوحًا للفحص.',
  },
  furtherReading: ['S09', 'S07', 'S10', 'S08', 'S13'],
  related: ['non-christian-sources-establish', 'jesus-executed-under-pilate', 'who-wrote-the-gospels', 'when-were-the-gospels-written', 'gospels-as-eyewitness'],
};
