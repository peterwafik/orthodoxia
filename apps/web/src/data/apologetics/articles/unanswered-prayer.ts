import type { Article } from '../types.ts';

export const article: Article = {
  id: 'unanswered-prayer',
  questionId: 'unanswered-prayer',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article asks why prayers that are sincere, even desperate, sometimes seem to receive no answer, or an answer that is the opposite of what was asked. It speaks from within the Coptic Orthodox faith, describes what the Bible says about prayer that is not granted, what the Church understands prayer to be, and where the explanations end. It does not promise that prayer will produce a result and does not suggest that an unanswered prayer shows lack of faith. It is not a substitute for pastoral care.',
    ar: 'تسأل هذه المقالة لماذا تبدو الصلوات الصادقة، بل المستميتة، أحيانًا بلا جواب، أو بجواب يعاكس ما طُلب. وهي تتكلم من داخل الإيمان القبطي الأرثوذكسي، وتصف ما يقوله الكتاب المقدس عن الصلاة التي لا تُمنح، وما تفهمه الكنيسة من الصلاة، وحيث تنتهي التفسيرات. ولا تعد بأن الصلاة تنتج نتيجة، ولا توحي بأن الصلاة بلا جواب دليل على قلة الإيمان. وهي ليست بديلًا عن الرعاية الروحية.',
  },
  shortAnswer: {
    en: 'God hears every prayer. He answers as a loving Father who is wiser than we are: sometimes yes, sometimes not yet, sometimes with something other than what we asked, and always with His presence. The Bible does not hide the pain of waiting. The Psalms cry out and wait; St Paul the Apostle prayed three times about a thorn and was given grace instead; the Lord Himself prayed in Gethsemane that the cup might pass, and then gave Himself to the Father’s will, and the cross led to the resurrection. Prayer is not a means of getting what we want but communion with God. We do not always see why a request is not granted, but God sees, He is with us in the waiting, and in Christ death does not have the last word. An unanswered prayer is never a sign that God has stopped loving us.',
    ar: 'الله يسمع كل صلاة. ويستجيب كأب محب أحكم منا: أحيانًا بنعم، وأحيانًا بليس الآن، وأحيانًا بشيء غير ما طلبناه، ودائمًا بحضوره. والكتاب المقدس لا يخفي ألم الانتظار. فالمزامير تصرخ وتنتظر؛ والقديس بولس الرسول صلّى ثلاث مرات من أجل الشوكة فأُعطي نعمة بدلًا منها؛ والرب نفسه صلّى في جثسيماني أن تعبر عنه الكأس، ثم سلّم نفسه لمشيئة الآب، فقاد الصليب إلى القيامة. والصلاة ليست وسيلة لنيل ما نريد بل شركة مع الله. ونحن لا نرى دائمًا لماذا لم يُستجب طلب، لكن الله يرى، وهو معنا في الانتظار، وفي المسيح ليس للموت الكلمة الأخيرة. والصلاة غير المستجابة ليست أبدًا علامة على أن الله كفّ عن محبتنا.',
  },
  quickPoints: {
    en: [
      'The Bible records prayers that were not granted as asked: St Paul’s thorn, the Lord in Gethsemane, the lament of the Psalms.',
      'Prayer in the Christian faith is a relationship of trust with a loving Father, not a mechanism that guarantees an outcome.',
      'God answers in different ways: yes, not yet, or with something better than we asked; we do not always see which, but He does.',
      'Unanswered prayer is not a sign of weak faith or of sin; to say so is to repeat the mistake of Job’s friends.',
      'The greatest gift of prayer is God Himself: the Holy Spirit prays in us, and God remains with us even when nothing seems to change.',
    ],
    ar: [
      'يسجل الكتاب صلوات لم تُستجب كما طُلبت: شوكة القديس بولس، والرب في جثسيماني، ومراثي المزامير.',
      'الصلاة في الإيمان المسيحي علاقة ثقة بأب محب، لا آلية تضمن نتيجة.',
      'يستجيب الله بطرق مختلفة: نعم، أو ليس الآن، أو بشيء أفضل مما طلبنا؛ ونحن لا نرى دائمًا أيها، لكنه يرى.',
      'الصلاة غير المستجابة ليست علامة على ضعف الإيمان أو على الخطية؛ والقول بذلك تكرار لخطأ أصحاب أيوب.',
      'أعظم عطايا الصلاة هو الله نفسه: الروح القدس يصلي فينا، والله يبقى معنا حتى حين يبدو أن شيئًا لا يتغير.',
    ],
  },
  argumentTypes: ['theological', 'philosophical'],
  assessment: {
    label: 'theological_interpretation',
    explanation: {
      en: 'This question is mainly about how believers understand prayer within the faith, so the answer is a theological interpretation. It is also in part a philosophical question about whether a God who answers prayer can be reconciled with prayers that are not answered, and this article touches on that. The label names the kind of reasoning and is not a score. The Scriptures are read as ancient documents that show what the tradition says.',
      ar: 'هذا السؤال يخص أساسًا كيف يفهم المؤمنون الصلاة داخل الإيمان، فالجواب تفسير لاهوتي. وهو أيضًا جزئيًا سؤال فلسفي عن إمكان التوفيق بين إله يستجيب الصلاة وصلوات لا تُستجاب، وتمسّه المقالة. والتصنيف يصف نوع الاستدلال وليس درجة. وتُقرأ الأسفار وثائق قديمة تبيّن ما يقوله التقليد.',
    },
  },
  whyExamine: {
    en: [
      'For many believers this is where faith is most tested. They have asked for a healing, a reconciliation, a job, the life of someone they love, and the answer was no, or silence. Easy answers can wound. The right place to begin is to say that the experience is real, and that the Bible itself knows it.',
      'It also helps to see what is really being asked. Some ask whether prayer works at all. Most are asking how to go on praying after being let down. The Church’s answer speaks to both, and especially to the second.',
    ],
    ar: [
      'لكثير من المؤمنين هنا يُمتحن الإيمان أكثر من أي موضع. فقد طلبوا شفاءً أو مصالحة أو عملًا أو حياة من يحبون، وكان الجواب لا، أو صمتًا. والأجوبة السهلة قد تجرح. والبداية الصحيحة أن نقول إن الخبرة حقيقية، وإن الكتاب نفسه يعرفها.',
      'ويساعد أيضًا أن نرى ما يُسأل حقًا. فبعضهم يسأل هل للصلاة أثر أصلًا. وأكثرهم يسأل كيف يواصل الصلاة بعد خيبة. وجواب الكنيسة يخاطب الاثنين، والثاني خاصة.',
    ],
  },
  background: {
    en: [
      'The Jewish and Christian Scriptures contain both strong promises about prayer and records of prayers that were not granted. Jesus tells his followers to ask and to knock, and to ask persistently, and also teaches them to pray for God’s will to be done. St Paul asked three times to be relieved of a “thorn in the flesh” and was told that grace was enough. The letter of James says that some ask and do not receive because they ask with wrong motives, and 1 John speaks of asking according to God’s will. These texts are read here as ancient documents that show how the tradition understood prayer.',
      'Philosophers who discuss petitionary prayer raise two questions: whether an unchanging God can respond to prayers, and whether a God who knows what is best needs to be asked. Christian writers have answered that prayer changes the one who prays, makes us participants in God’s work, and expresses a relationship, and that God has chosen to act in response to human asking. The article rests on the Scriptures and the Church’s teaching rather than on these philosophical discussions.',
    ],
    ar: [
      'تتضمن الكتب اليهودية والمسيحية وعودًا قوية عن الصلاة وسجلات لصلوات لم تُمنح. فيقول يسوع لأتباعه أن يسألوا ويقرعوا ويلحّوا في الطلب، وهو أيضًا يعلّمهم أن يصلوا لتكون مشيئة الله. وسأل القديس بولس ثلاث مرات أن يُعفى من «شوكة في الجسد» فقيل له إن النعمة تكفيه. وتقول رسالة يعقوب إن بعضهم يسأل ولا ينال لأنه يسأل بدافع رديء، وتتكلم رسالة يوحنا الأولى عن السؤال بحسب مشيئة الله. وتُقرأ هذه النصوص هنا وثائق قديمة تبيّن كيف فهم التقليد الصلاة.',
      'ويثير الفلاسفة الذين يناقشون صلاة الطلب سؤالين: هل يستطيع إله لا يتغير أن يستجيب للصلوات؟ وهل يحتاج إله يعرف الأصلح أن يُسأل؟ وقد أجاب كتّاب مسيحيون بأن الصلاة تغيّر المصلي، وتجعلنا مشاركين في عمل الله، وتعبّر عن علاقة، وبأن الله اختار أن يعمل استجابةً لسؤال الإنسان. وتقوم المقالة على الكتب المقدسة وتعليم الكنيسة لا على هذه المناقشات الفلسفية.',
    ],
  },
  glossary: ['theism', 'theodicy', 'divine-hiddenness', 'crucifixion', 'resurrection'],

  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'The Bible itself records prayers that were not granted as asked, and it does not treat them as signs of weak faith.',
        ar: 'يسجل الكتاب نفسه صلوات لم تُستجب كما طُلبت، ولا يعاملها علامات على ضعف الإيمان.',
      },
      argumentType: 'textual',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'St Paul’s prayer about the thorn, the Lord’s prayer in Gethsemane and the lament Psalms are plain in the texts. The saints of Scripture knew this experience, and their faith was not weak but deep.',
        ar: 'صلاة القديس بولس من أجل الشوكة، وصلاة الرب في جثسيماني، ومزامير الرثاء، واضحة في النصوص. فقديسو الكتاب عرفوا هذه الخبرة، ولم يكن إيمانهم ضعيفًا بل عميقًا.',
      },
      limits: {
        en: 'It shows that the tradition knows the experience; it does not explain why any prayer is unanswered.',
        ar: 'وهي تبيّن أن التقليد يعرف الخبرة؛ ولا تفسّر لماذا لا تُستجاب صلاة بعينها.',
      },
      evidence: ['e-thorn', 'e-gethsemane', 'e-psalm13'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'In the Christian faith prayer is a relationship of trust in which the one who prays asks and also gives himself to God’s will, not a means of securing outcomes.',
        ar: 'الصلاة في الإيمان المسيحي علاقة ثقة يطلب فيها المصلي ويسلّم نفسه أيضًا لمشيئة الله، لا وسيلة لضمان النتائج.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'The Lord’s Prayer, the Lord’s own prayer in Gethsemane, and the letters of St James and St John join asking with surrender to God’s will. We ask boldly, as children, and we trust the Father who knows what we need.',
        ar: 'الصلاة الربانية، وصلاة الرب نفسه في جثسيماني، ورسالتا القديسين يعقوب ويوحنا، تجمع الطلب مع التسليم لمشيئة الله. فنحن نطلب بدالة، كأبناء، ونثق بالآب الذي يعرف ما نحتاج إليه.',
      },
      limits: {
        en: 'Those who hold a different view of prayer, including those who think prayer has no effect outside the one who prays, will read the texts differently.',
        ar: 'ومن يرون رأيًا آخر في الصلاة، ومنهم من يرون أنه لا أثر للصلاة خارج المصلي، يقرأون النصوص قراءة مختلفة.',
      },
      evidence: ['e-lords-prayer', 'e-gethsemane', 'e-james4'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'The Scriptures show delay and apparent refusal sometimes preceding a different and greater outcome, and they call us to persist in prayer.',
        ar: 'يُظهر الكتاب أن التأخير والرفض الظاهر يسبقان أحيانًا نتيجة مختلفة وأعظم، ويدعونا إلى المثابرة في الصلاة.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'At Bethany the Lord waited two days, wept with the sisters, and raised Lazarus who was already dead. The parables of the persistent friend and the widow call us to keep asking, and the Lord promises that the Father will give the Holy Spirit to those who ask. The same Scriptures show St James killed while St Peter was freed, so we do not make the pattern a rule; we trust the Father in both.',
        ar: 'في بيت عنيا انتظر الرب يومين، وبكى مع الأختين، وأقام لعازر الذي كان قد مات. وأمثال الصديق الملحّ والأرملة تدعونا إلى مواصلة الطلب، والرب يعد بأن الآب يعطي الروح القدس للذين يسألونه. والكتاب نفسه يُظهر القديس يعقوب يُقتل بينما يُحرَّر القديس بطرس، فلا نجعل النمط قاعدة؛ بل نثق بالآب في الحالتين.',
      },
      limits: {
        en: 'These stories can be told in a way that makes every refusal look like a hidden gift. The Scriptures do not say so, and the Church does not say that every delayed answer is later seen to be good.',
        ar: 'ويمكن رواية هذه القصص بحيث يبدو كل رفض هبة خفية. والكتب لا تقول ذلك، والكنيسة لا تقول إن كل جواب متأخر يُرى لاحقًا حسنًا.',
      },
      evidence: ['e-lazarus', 'e-persistence', 'e-acts12'],
    },
    {
      id: 'c4',
      proposition: {
        en: 'God is present with the one who prays, through the Holy Spirit, even where nothing seems to change.',
        ar: 'الله حاضر مع المصلي بالروح القدس، حتى حين يبدو أن شيئًا لا يتغير.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'St Paul the Apostle says that the Spirit helps us in our weakness and prays for us with sighs too deep for words when we do not know how to pray. No prayer, however weak or confused, falls outside God’s care.',
        ar: 'يقول القديس بولس الرسول إن الروح يعين ضعفاتنا ويشفع فينا بأنّات لا يُنطق بها حين لا نعرف كيف نصلي. فلا صلاة، مهما كانت ضعيفة أو مرتبكة، تقع خارج رعاية الله.',
      },
      limits: {
        en: 'Presence is not something anyone can demonstrate. A person who experiences only silence may not find this comforting.',
        ar: 'والحضور ليس شيئًا يمكن لأحد إثباته. ومن لا يختبر إلا الصمت قد لا يجد في هذا تعزية.',
      },
      evidence: ['e-romans8-26'],
    },
  ],

  evidence: [
    {
      id: 'e-thorn',
      sourceId: 'S62',
      locator: '2 Corinthians 12:7-10 (read as an ancient document)',
      role: 'context',
      states: {
        en: 'St Paul says that he pleaded three times with the Lord about a thorn in the flesh and was told that grace was sufficient and that power is made perfect in weakness.',
        ar: 'يقول القديس بولس إنه طلب من الرب ثلاث مرات بشأن شوكة في الجسد، فقيل له إن نعمته تكفيه وإن القوة في الضعف تكمل.',
      },
      inference: {
        en: 'It shows an apostle’s prayer that was not granted as he asked, and his reading of that. It is his interpretation of his own case, and not a rule to apply to anyone else.',
        ar: 'وهو يبيّن صلاة رسول لم تُمنح كما طلب، وقراءته لذلك. وهذا تفسيره لحالته، وليس قاعدة تُطبق على غيره.',
      },
      bible: { book: '2-corinthians', chapter: 12, verse: '7-10' },
    },
    {
      id: 'e-gethsemane',
      sourceId: 'S62',
      locator: 'Matthew 26:36-46 and Hebrews 5:7-8 (read as ancient documents)',
      role: 'context',
      states: {
        en: 'Jesus prays in distress that the cup might pass from him, and adds that it should be as the Father wills. The letter to the Hebrews speaks of his prayers with loud cries and tears.',
        ar: 'يصلي يسوع في ضيق أن تعبر عنه الكأس، ويضيف أن تكون مشيئة الآب. وتتكلم الرسالة إلى العبرانيين عن صلواته بصراخ شديد ودموع.',
      },
      inference: {
        en: 'The Gospel portrays Jesus himself praying in anguish for something that was not granted in the way he asked. Christians read this as the model of prayer that is honest about its fear and yet trusts.',
        ar: 'يصوّر الإنجيل يسوع نفسه يصلي بكرب من أجل أمر لم يُمنح كما طلب. ويقرأ المسيحيون هذا نموذجًا لصلاة صادقة في خوفها وواثقة مع ذلك.',
      },
      bible: { book: 'matthew', chapter: 26, verse: '36-46' },
    },
    {
      id: 'e-psalm13',
      sourceId: 'S62',
      locator: 'Psalm 13 and Psalm 22:1-2 (read as ancient documents)',
      role: 'context',
      states: {
        en: 'The psalmist asks how long God will forget him and hide his face, and says that he cries by day and night and is not answered.',
        ar: 'يسأل المرنم إلى متى ينساه الله ويحجب وجهه، ويقول إنه يصرخ نهارًا وليلًا ولا يُستجاب.',
      },
      inference: {
        en: 'Complaint about an unanswered cry is a recognised form of prayer in Scripture and the liturgy. The Psalms do not treat it as unbelief.',
        ar: 'الشكوى من صراخ بلا جواب صورة معروفة من الصلاة في الكتاب والصلوات الطقسية. والمزامير لا تعدّها كفرًا.',
      },
      bible: { book: 'psalms', chapter: 13 },
    },
    {
      id: 'e-lords-prayer',
      sourceId: 'S62',
      locator: 'Matthew 6:5-13 (read as an ancient document)',
      role: 'context',
      states: {
        en: 'Jesus teaches to pray without display or empty repetition, because the Father knows what is needed, and gives the prayer that asks that God’s will be done and for daily bread.',
        ar: 'يعلّم يسوع أن يُصلى دون استعراض ولا تكرار باطل، لأن الآب يعلم ما يُحتاج إليه، ويعطي الصلاة التي تطلب أن تكون مشيئة الله وتسأل الخبز اليومي.',
      },
      inference: {
        en: 'The model prayer puts asking and surrender together. It shows how the Gospel defines prayer and does not by itself say what happens when an asking is not granted.',
        ar: 'تجمع الصلاة النموذجية بين السؤال والتسليم. وهي تبيّن كيف يعرّف الإنجيل الصلاة، ولا تقول بذاتها ماذا يحدث حين لا يُمنح طلب.',
      },
      bible: { book: 'matthew', chapter: 6, verse: '5-13' },
    },
    {
      id: 'e-james4',
      sourceId: 'S62',
      locator: 'James 4:2-3 and 1 John 5:14-15 (read as ancient documents)',
      role: 'context',
      states: {
        en: 'James says that some ask and do not receive because they ask in order to spend what they receive on their desires. John says that God hears when we ask according to his will.',
        ar: 'يقول يعقوب إن بعضهم يسأل ولا ينال لأنه يسأل ليُنفق ما ينال في لذاته. ويقول يوحنا إن الله يسمع حين نسأل بحسب مشيئته.',
      },
      inference: {
        en: 'These verses give one reason for refusal, namely misdirected desire, and one condition, asking according to God’s will. They do not say that every unanswered prayer is explained this way, and applying them to a grieving person would be cruel and mistaken.',
        ar: 'تعطي هاتان الآيتان سببًا واحدًا للرفض هو الرغبة المنحرفة، وشرطًا واحدًا هو السؤال بحسب مشيئة الله. ولا تقولان إن كل صلاة بلا جواب تُفسَّر هكذا، وتطبيقهما على إنسان حزين قسوة وخطأ.',
      },
      bible: { book: 'james', chapter: 4, verse: '2-3' },
    },
    {
      id: 'e-lazarus',
      sourceId: 'S62',
      locator: 'John 11:1-44 (read as an ancient document)',
      role: 'context',
      states: {
        en: 'When Lazarus is ill his sisters send for Jesus, who stays two more days and then comes after Lazarus has died. Martha says that if he had been there her brother would not have died. Jesus weeps, and raises Lazarus.',
        ar: 'حين يمرض لعازر ترسل أختاه إلى يسوع، فيمكث يومين آخرين ثم يأتي بعد موت لعازر. وتقول مرثا إنه لو كان هنا لما مات أخوها. ويبكي يسوع، ويقيم لعازر.',
      },
      inference: {
        en: 'The Gospel portrays a delay that looked like a refusal, with grief and complaint along the way, and an outcome greater than what was asked. It is the story of one case, and it does not tell us what to expect in another.',
        ar: 'يصوّر الإنجيل تأخيرًا بدا رفضًا، مع حزن وشكوى في الطريق، ونتيجة أعظم مما طُلب. وهي قصة حالة واحدة، ولا تخبرنا بما يُتوقع في غيرها.',
      },
      bible: { book: 'john', chapter: 11, verse: '1-44' },
    },
    {
      id: 'e-persistence',
      sourceId: 'S62',
      locator: 'Luke 11:5-13 and Luke 18:1-8 (read as ancient documents)',
      role: 'context',
      states: {
        en: 'Jesus tells of a friend who gets up at night because of persistence, and of a widow who wears down an unjust judge, and teaches that the Father will give the Holy Spirit to those who ask.',
        ar: 'يروي يسوع عن صديق يقوم ليلًا بسبب الإلحاح وعن أرملة تُرهق قاضيًا ظالمًا، ويعلّم أن الآب يعطي الروح القدس للذين يسألونه.',
      },
      inference: {
        en: 'The Gospel urges persistence in prayer, and the chief gift promised is the Spirit, not a particular outcome. This is the text’s emphasis.',
        ar: 'يحث الإنجيل على المثابرة في الصلاة، والعطية الأولى الموعود بها هي الروح لا نتيجة بعينها. وهذا تشديد النص.',
      },
      bible: { book: 'luke', chapter: 11, verse: '5-13' },
    },
    {
      id: 'e-acts12',
      sourceId: 'S62',
      locator: 'Acts 12:1-17 (read as an ancient document)',
      role: 'context',
      states: {
        en: 'Herod has James killed and imprisons Peter. The church prays for Peter, and an angel frees him, while James is not spared.',
        ar: 'يقتل هيرودس يعقوب ويسجن بطرس. وتصلي الكنيسة من أجل بطرس، فيحرره ملاك، ولا يُنقذ يعقوب.',
      },
      inference: {
        en: 'The same book records one man freed and another killed in the same circumstances. The text does not explain the difference. It shows that the early Church lived with this unevenness.',
        ar: 'يسجل السفر نفسه رجلًا أُطلق وآخر قُتل في الظروف نفسها. والنص لا يفسّر الفرق. وهو يبيّن أن الكنيسة الأولى عاشت مع هذا التفاوت.',
      },
      bible: { book: 'acts', chapter: 12, verse: '1-17' },
    },
    {
      id: 'e-romans8-26',
      sourceId: 'S62',
      locator: 'Romans 8:26-28 (read as an ancient document)',
      role: 'context',
      states: {
        en: 'St Paul says that the Spirit helps us in weakness and intercedes with sighs too deep for words when we do not know how to pray as we ought.',
        ar: 'يقول القديس بولس إن الروح يعين ضعفاتنا ويشفع بأنات لا يُنطق بها حين لا نعرف ما نصلي لأجله كما ينبغي.',
      },
      inference: {
        en: 'It shows that the early Church understood even prayer that is inarticulate or confused to be held within God’s work. This is a statement of faith.',
        ar: 'وهو يبيّن أن الكنيسة الأولى فهمت حتى الصلاة الحائرة أو غير المعبَّرة محفوظة في عمل الله. وهذه عبارة إيمان.',
      },
      bible: { book: 'romans', chapter: 8, verse: '26-28' },
    },
  ],

  objections: [
    {
      id: 'o1',
      statement: {
        en: 'If prayer is answered when it is “according to God’s will”, then the claim cannot be tested: a prayer granted proves prayer works, and a prayer refused was not God’s will. This lets believers explain away any result.',
        ar: 'إن كانت الصلاة تُستجاب حين تكون «بحسب مشيئة الله»، فالدعوى لا يمكن اختبارها: الصلاة الممنوحة تثبت أن الصلاة تعمل، والصلاة المرفوضة لم تكن مشيئة الله. وهذا يتيح للمؤمنين تبرير أي نتيجة.',
      },
      response: {
        en: [
          'The objection treats prayer as a prediction of outcomes, like a test of a medicine. That is not what Christian prayer is. Prayer is a relationship with a living Person, and what the Church proclaims is that God is present and hears, not that every request will be granted as asked.',
          'A child who asks his father for many things does not test whether his father exists by counting the yeses. He knows his father by living with him. So it is with prayer: believers come to know God in it, and they find that He is faithful.',
        ],
        ar: [
          'يعامل الاعتراض الصلاة كأنها تنبؤ بالنتائج، مثل اختبار دواء. وليست هذه هي الصلاة المسيحية. فالصلاة علاقة بشخص حي، وما تعلنه الكنيسة أن الله حاضر ويسمع، لا أن كل طلب سيُستجاب كما طُلب.',
          'والطفل الذي يطلب من أبيه أشياء كثيرة لا يختبر وجود أبيه بعدّ مرات القبول. بل يعرف أباه بالعيش معه. وهكذا الصلاة: فيها يعرف المؤمنون الله، ويجدون أنه أمين.',
        ],
      },
      limits: {
        en: 'This does not show that prayer has any effect. It clarifies what kind of claim the Church makes.',
        ar: 'وهذا لا يبيّن أن للصلاة أي أثر. إنه يوضح أي نوع من الدعاوى تقدمها الكنيسة.',
      },
    },
    {
      id: 'o2',
      statement: {
        en: 'A God who loved me would answer when a child is dying. To say “his ways are higher” is a way of avoiding the problem, and to say the prayer was answered in a hidden way is insulting to the bereaved.',
        ar: 'إله يحبني كان سيستجيب حين يموت طفل. وقول «طرقه أعلى» تهرب من المشكلة، وقول إن الصلاة استُجيبت بطريقة خفية إهانة للثكالى.',
      },
      response: {
        en: [
          'Such words must never be used to silence grief. The Bible allows Martha’s complaint and records the Lord’s tears at the tomb of His friend. It does not call death good; it calls death an enemy, the last enemy to be destroyed.',
          'The answer of faith is not that the prayer was secretly granted. It is that God is with the grieving, that Christ Himself entered death, and that He has broken its power. The child who died is held in the love of God, and the Church lives in the hope of the resurrection.',
        ],
        ar: [
          'لا يجوز أبدًا استعمال مثل هذه الكلمات لإسكات الحزن. فالكتاب يسمح بعتاب مرثا، ويسجل دموع الرب عند قبر صديقه. ولا يسمي الموت خيرًا؛ بل يسميه عدوًا، آخر عدو يُبطل.',
          'وجواب الإيمان ليس أن الصلاة استُجيبت سرًا. بل أن الله مع الحزانى، وأن المسيح نفسه دخل الموت، وكسر سلطانه. والطفل الذي رقد محفوظ في محبة الله، والكنيسة تعيش في رجاء القيامة.',
        ],
      },
      limits: {
        en: 'It does not remove the grief or explain the refusal.',
        ar: 'وهو لا يزيل الحزن ولا يفسّر الرفض.',
      },
      evidence: ['e-lazarus'],
    },
    {
      id: 'o3',
      statement: {
        en: 'Some preachers say that prayer unanswered shows a lack of faith or hidden sin. If so, then the people who suffer most are blamed twice.',
        ar: 'يقول بعض الواعظين إن الصلاة التي لا تُستجاب تدل على قلة إيمان أو خطية خفية. فإن كان كذلك لامَ الناس من يتألمون أكثر مرتين.',
      },
      response: {
        en: [
          'This teaching is a mistake, and a harmful one. The Book of Job stands against it: Job’s friends make exactly this argument and God rebukes them. St Paul’s prayer was not granted, and the Lord’s was not granted as asked, and no one accuses them of unbelief.',
          'The words about faith moving mountains are not a promise of guaranteed results. The Church teaches her pastors never to add guilt to grief, and she tells every sufferer that God is near to the broken-hearted.',
        ],
        ar: [
          'هذا التعليم خطأ، وخطأ مؤذٍ. فسفر أيوب يقف ضده: إذ يقدّم أصحاب أيوب هذه الحجة بالضبط فيوبخهم الله. وصلاة القديس بولس لم تُستجب، وصلاة الرب لم تُستجب كما طُلبت، ولا أحد يتهمهما بعدم الإيمان.',
          'وكلمات الإيمان الذي ينقل الجبال ليست وعدًا بنتائج مضمونة. والكنيسة تعلّم رعاتها ألا يضيفوا أبدًا ذنبًا إلى حزن، وتقول لكل متألم إن الله قريب من المنكسري القلوب.',
        ],
      },
      limits: {
        en: 'It corrects a misuse of the Bible; it does not show what prayer accomplishes.',
        ar: 'وهو يصحح إساءة استعمال الكتاب المقدس؛ ولا يبيّن ما تحققه الصلاة.',
      },
      evidence: ['e-thorn', 'e-gethsemane'],
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'This question is pastoral and theological rather than historical. The Scriptures show how the people of God have always prayed: with trust, with persistence, and with honest lament when the answer was hidden.',
      ],
      ar: [
        'هذا السؤال رعوي ولاهوتي أكثر منه تاريخي. والكتاب يبيّن كيف صلّى شعب الله دائمًا: بثقة، وبمثابرة، وبرثاء صادق حين كان الجواب مخفيًا.',
      ],
    },
    theological: {
      en: [
        'The Church teaches that God is a loving Father who knows what we need before we ask, and who invites us to ask because prayer is the way a relationship is lived, and not because he needs information. In prayer the person is joined to Christ, who himself prayed, and the Holy Spirit prays in us. Seen this way, the main gift of prayer is communion with God, and particular requests are placed in his hands.',
        'The Church also teaches that we do not see all that God is doing, that the answer may be different from or greater than what was asked, and that some requests are refused because they would harm us or others. It does not say that this explains every refusal. It says that one may go on praying honestly, bringing the grief and anger as well as the thanks, and that God is not offended by a cry.',
      ],
      ar: [
        'تعلّم الكنيسة أن الله أب محب يعلم ما نحتاج إليه قبل أن نسأله، ويدعونا إلى السؤال لأن الصلاة هي طريقة عيش العلاقة، لا لأنه يحتاج إلى معلومات. وفي الصلاة يتحد الإنسان بالمسيح الذي صلى هو أيضًا، ويصلي الروح القدس فينا. وبهذا تكون العطية الأساسية للصلاة هي الشركة مع الله، وتوضع الطلبات الخاصة بين يديه.',
        'وتعلّم الكنيسة أيضًا أننا لا نرى كل ما يعمله الله، وأن الجواب قد يكون غير ما طُلب أو أعظم منه، وأن بعض الطلبات تُرفض لأنها قد تضرّنا أو تضر غيرنا. ولا تقول إن هذا يفسّر كل رفض. إنها تقول إن للإنسان أن يواصل الصلاة بصدق، حاملًا الحزن والغضب مع الشكر، وإن الله لا يغضب من صرخة.',
      ],
    },
  },
  coptic: {
    en: [
      'The Coptic Orthodox Church is a praying church. The Book of Hours (Agpia) gives the Psalms and prayers for the hours of the day, the Kyrie eleison is repeated many times in the liturgy, and the faithful are taught to pray when they do not feel like it. Prayer is also lived with the Church: the intercession of the saints, the prayers of the priest, and the sacrament of the Anointing of the Sick. Those who find prayer dry or unanswered are encouraged to speak to their father of confession, and not to give up praying.',
    ],
    ar: [
      'الكنيسة القبطية الأرثوذكسية كنيسة مصلية. فكتاب الأجبية يعطي المزامير وصلوات ساعات النهار، وتتكرر كيرياليصون مرات كثيرة في القداس، ويُعلَّم المؤمنون أن يصلوا حين لا يشعرون بالرغبة. وتُعاش الصلاة مع الكنيسة أيضًا: شفاعة القديسين، وصلوات الكاهن، وسر مسحة المرضى. ويُشجَّع من يجد الصلاة جافة أو بلا جواب على أن يحدّث أب اعترافه ولا يكفّ عن الصلاة.',
    ],
  },
  disputed: {
    en: [
      'Disputed: whether prayer has any effect beyond the one who prays; how an unchanging God can respond to petitions; whether the Church’s explanations for unanswered prayer are adequate; and whether the God to whom Christians pray exists. Believers and non-believers, and Christians among themselves, differ.',
      'Not covered: any particular loss, for which a reader needs a pastor, a doctor or a counsellor. The article makes no claim about why any given prayer was not granted.',
    ],
    ar: [
      'مواضع الخلاف: هل للصلاة أثر يتجاوز المصلي؟ وكيف يستجيب إله لا يتغير للطلبات؟ وهل تفسيرات الكنيسة للصلاة بلا جواب كافية؟ وهل الإله الذي يصلي إليه المسيحيون موجود؟ ويختلف في ذلك المؤمنون وغير المؤمنين، والمسيحيون فيما بينهم.',
      'خارج النطاق: أي فقد بعينه، وهو يحتاج إلى راعٍ أو طبيب أو مرشد. والمقالة لا تدّعي شيئًا عن سبب عدم منح صلاة بعينها.',
    ],
  },
  conclusion: {
    en: 'Sincere prayers are sometimes not granted as asked, and the Bible says so openly. God still hears every prayer and answers as a loving Father, often in ways we see only later, and always with His presence. The Lord Himself prayed and was not spared the cross, and through the cross came the resurrection. So the Christian keeps praying, honestly and with hope, and no one should ever be told that an unanswered prayer was their fault.',
    ar: 'لا تُستجاب الصلوات الصادقة أحيانًا كما طُلبت، والكتاب يقول ذلك صراحة. لكن الله يسمع كل صلاة ويستجيب كأب محب، كثيرًا بطرق لا نراها إلا لاحقًا، ودائمًا بحضوره. والرب نفسه صلّى ولم يُعفَ من الصليب، وبالصليب جاءت القيامة. لذلك يواصل المسيحي الصلاة، بصدق ورجاء، ولا يجوز أن يُقال لأحد أبدًا إن صلاته غير المستجابة كانت ذنبه.',
  },
  furtherReading: ['S62'],
  related: ['hidden-or-suffering', 'why-does-god-allow-suffering', 'why-god-is-not-clearer', 'is-doubt-sinful', 'children-and-animals-suffer', 'evaluating-miracle-claims'],
};
