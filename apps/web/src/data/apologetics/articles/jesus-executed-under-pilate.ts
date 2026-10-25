import type { Article } from '../types.ts';

export const article: Article = {
  id: 'jesus-executed-under-pilate',
  questionId: 'jesus-executed-under-pilate',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'Whether Jesus was put to death by Roman authority while Pontius Pilate governed Judea, and which details of the trial the sources let us treat as secure and which as debated. It does not ask whether he rose from the dead, and it does not discuss the burial; those have their own articles.',
    ar: 'هل أعدمت السلطة الرومانية يسوع حين كان بيلاطس البنطي واليًا على اليهودية، وأي تفاصيل المحاكمة تتيح لنا المصادر عدّها راسخة وأيها محل نقاش. لا يسأل المقال هل قام من الأموات، ولا يتناول الدفن؛ فلكل منهما مقاله.',
  },
  shortAnswer: {
    en: 'Very probably yes. Tacitus, a hostile Roman historian, says Christus was executed under Pilate, and Josephus mentions a condemnation by Pilate in a passage that has been reworked by Christians. The Gospels, read as ancient documents, agree on the core: Jesus was handed over in Jerusalem, sentenced by Pilate and crucified. The Pilate inscription from Caesarea shows that Pilate was a real prefect of Judea, but it says nothing about Jesus. Many details of the trial scenes, such as a night hearing before the council, the Barabbas custom and Pilate’s hand-washing, are debated.',
    ar: 'نعم على الأرجح جدًا. يقول تاكيتوس، وهو مؤرخ روماني معادٍ، إن «كرستوس» أُعدم في ولاية بيلاطس، ويذكر يوسيفوس حكمًا أصدره بيلاطس في فقرة أعاد مسيحيون صياغتها. وتتفق الأناجيل، حين تُقرأ وثائق قديمة، على اللب: سُلّم يسوع في أورشليم وحكم عليه بيلاطس وصُلب. ويبين نقش بيلاطس من قيصرية أن بيلاطس كان واليًا حقيقيًا على اليهودية، لكنه لا يقول شيئًا عن يسوع. وكثير من تفاصيل مشاهد المحاكمة، كجلسة الليل أمام المجلس وعادة باراباس وغسل بيلاطس يديه، محل نقاش.',
  },
  quickPoints: {
    en: [
      'Tacitus (Annals 15.44) and, more disputedly, Josephus (Antiquities 18.63–64) place Jesus’ execution under Pilate. Neither was an eyewitness.',
      'The Gospels, read as ancient documents without assuming inspiration, agree that Pilate sentenced Jesus and that he was crucified, with a charge of kingship.',
      'Crucifixion was a Roman penalty. A movement that told this story about its own founder was admitting something shameful, which counts in favour of the core.',
      'The Pilate inscription (S31) proves Pilate’s office and title at Caesarea. It does not prove the execution of Jesus.',
      'The sequence of events inside the trial is debated, including the council hearing, the Barabbas custom and the degree of Pilate’s reluctance.',
    ],
    ar: [
      'يضع تاكيتوس (الحوليات ١٥: ٤٤) ويوسيفوس بقدر أكبر من الخلاف (العاديات ١٨: ٦٣–٦٤) إعدام يسوع في ولاية بيلاطس. ولم يكن أيٌّ منهما شاهد عيان.',
      'تتفق الأناجيل، حين تُقرأ وثائق قديمة دون افتراض الوحي، على أن بيلاطس حكم على يسوع وأنه صُلب بتهمة الملك.',
      'الصلب عقوبة رومانية. والحركة التي رَوَت هذه القصة عن مؤسسها كانت تعترف بأمر مخزٍ، وهذا يرجّح اللب.',
      'يثبت نقش بيلاطس (S31) منصب بيلاطس ولقبه في قيصرية. ولا يثبت إعدام يسوع.',
      'ترتيب الأحداث داخل المحاكمة محل نقاش، ومنه جلسة المجلس وعادة باراباس ومدى تردد بيلاطس.',
    ],
  },
  argumentTypes: ['historical', 'archaeological', 'textual'],
  assessment: {
    label: 'supported_disputed_details',
    explanation: {
      en: 'The core, that Jesus was crucified by Roman authority under Pilate, is well supported by a hostile outside source, by a disputed second one and by the agreement of the Gospels, which are not independent of one another in every respect. The details of the trial are the part that is debated, so the label for the article as a whole stays at supported with disputed details.',
      ar: 'اللب، أي أن يسوع صُلب بسلطة رومانية في ولاية بيلاطس، مدعوم جيدًا بمصدر خارجي معادٍ وبثانٍ مختلف عليه وباتفاق الأناجيل، وهي ليست مستقلة بعضها عن بعض من كل وجه. وتفاصيل المحاكمة هي موضع النقاش، لذلك تبقى تسمية المقال كله «مدعوم مع تفاصيل مختلف عليها».',
    },
  },
  whyExamine: {
    en: [
      'The name of Pontius Pilate is in the Creeds, which is a reason for the Church to want to know what history can say about him. For a reader outside the faith, a Roman official in the story is a place where the narrative touches external records, and where it can be tested.',
      'The trial narratives have also been used, wrongly, to blame a whole people. Looking carefully at what the sources say about Roman and Jewish roles is a matter of accuracy and of Christian conscience.',
    ],
    ar: [
      'اسم بيلاطس البنطي وارد في قانون الإيمان، وهذا سبب يدعو الكنيسة إلى معرفة ما يستطيع التاريخ قوله عنه. وبالنسبة إلى قارئ من خارج الإيمان، يمثل الموظف الروماني في القصة موضعًا تلتقي فيه الرواية بسجلات خارجية ويمكن اختبارها.',
      'وقد استُخدمت روايات المحاكمة كذلك، خطأً، لاتهام شعب بأكمله. والنظر الدقيق في ما تقوله المصادر عن الدورين الروماني واليهودي مسألة دقة ومسألة ضمير مسيحي.',
    ],
  },
  background: {
    en: [
      'Pilate governed Judea for roughly ten years, from about AD 26 to 36. Judea was a small, troublesome province under Roman rule, and Jerusalem filled with pilgrims at Passover, a time when Roman governors were wary of disorder. Crucifixion was a Roman punishment used on slaves, rebels and provincial offenders, intended to humiliate as well as to kill.',
      'The Gospels and St Paul’s letters are the main sources for Jesus’ trial and death, and they are all written by followers of Jesus. They are read here as ancient documents, which means asking who wrote them, when and for whom, and what each reports, and not assuming their inspiration. Mark is usually dated around AD 70, the others somewhat later, though dates are debated; St Paul’s letters are earlier.',
      'The year of the crucifixion cannot be fixed. Most historians place it between AD 30 and 33. The Gospels also differ on whether Jesus died on the day of Passover or the day before it, a difference that is open to several explanations.',
    ],
    ar: [
      'حكم بيلاطس اليهودية نحو عشر سنوات، من نحو ٢٦ إلى ٣٦م. وكانت اليهودية ولاية صغيرة مضطربة تحت الحكم الروماني، وتمتلئ أورشليم بالحجاج في الفصح، وهو وقت يتوجس فيه الولاة الرومان من الفوضى. وكان الصلب عقوبة رومانية تُطبَّق على العبيد والثوار والمذنبين في الأقاليم، يُقصد بها الإذلال كما يُقصد بها القتل.',
      'الأناجيل ورسائل القديس بولس هي المصادر الرئيسة لمحاكمة يسوع وموته، وكلها من تأليف أتباع ليسوع. وتُقرأ هنا وثائق قديمة، أي نسأل من كتبها ومتى ولمن وماذا يروي كل منها، دون افتراض الوحي. ويؤرَّخ مرقس عادة نحو سنة ٧٠م، والبقية بعده بقليل، مع خلاف في التواريخ؛ ورسائل القديس بولس أقدم.',
      'لا يمكن تحديد سنة الصلب. ويضعها أكثر المؤرخين بين ٣٠ و٣٣م. وتختلف الأناجيل أيضًا في أن يسوع مات يوم الفصح أو قبله بيوم، وهو اختلاف يحتمل تفسيرات عدة.',
    ],
  },
  glossary: ['crucifixion', 'primary-source', 'eyewitness', 'interpolation', 'testimonium-flavianum', 'gospel', 'synoptic-gospels'],

  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'Jesus was crucified by Roman authority during Pilate’s governorship of Judea.',
        ar: 'صُلب يسوع بسلطة رومانية أثناء ولاية بيلاطس على اليهودية.',
      },
      argumentType: 'historical',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'A hostile Roman historian reports it; Josephus, in a reworked passage, probably had something similar; the Gospels, though Christian, all agree; and the crucifixion is an awkward fact for a movement that proclaimed him Messiah. St Paul also treats the crucifixion as already well known.',
        ar: 'يرويه مؤرخ روماني معادٍ؛ ويرجَّح أن يوسيفوس، في فقرة أعيدت صياغتها، قال شيئًا مماثلًا؛ وتتفق الأناجيل كلها، مع أنها مسيحية؛ والصلب حقيقة محرجة لحركة أعلنته مسيحًا. ويعامل القديس بولس الصلب أيضًا بوصفه معروفًا من قبل.',
      },
      limits: {
        en: 'The outside sources are late and neither is an eyewitness. The Gospel authors were not at the trial, as far as the texts show.',
        ar: 'المصادر الخارجية متأخرة، وليس أيٌّ منها شاهد عيان. ولم يكن كتّاب الأناجيل في المحاكمة بحسب ما تبينه النصوص.',
      },
      evidence: ['e1', 'e2', 'e3', 'e5', 'e8'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'Pontius Pilate was a real Roman governor of Judea, holding the title of prefect, and had a building dedicated at Caesarea.',
        ar: 'كان بيلاطس البنطي واليًا رومانيًا حقيقيًا على اليهودية، يحمل لقب «برفكتوس»، وأقام مبنى مهدى في قيصرية.',
      },
      argumentType: 'archaeological',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'A stone found at Caesarea carries an inscription naming Pilate and describing him as prefect of Judea. The text is damaged and was restored in part. Josephus and the Gospels also name him as governor.',
        ar: 'يحمل حجر وُجد في قيصرية نقشًا يذكر بيلاطس ويصفه بأنه حاكم اليهودية. والنص تالف وأُعيد ترميمه جزئيًا. ويسمّيه يوسيفوس والأناجيل واليًا كذلك.',
      },
      limits: {
        en: 'The inscription establishes his office and title. It says nothing about Jesus, a trial or a crucifixion, and it must not be cited as if it did.',
        ar: 'يثبت النقش منصبه ولقبه. ولا يقول شيئًا عن يسوع ولا عن محاكمة ولا عن صلب، ولا يجوز الاستشهاد به كأنه يقول.',
      },
      evidence: ['e9', 'e4'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'The Gospel accounts agree on a core: Jesus was arrested in Jerusalem, handed to Pilate by the Jewish leadership, charged with claiming to be king and crucified.',
        ar: 'تتفق روايات الأناجيل على لبّ: اعتُقل يسوع في أورشليم، وسلّمته القيادة اليهودية إلى بيلاطس، واتُّهم بادعاء الملك، وصُلب.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'Mark, Matthew, Luke and John differ in sequence and detail but share the Roman sentence and the kingship charge written on the cross. A charge of kingship is a charge a Roman governor would understand and act on.',
        ar: 'تختلف أناجيل مرقس ومتى ولوقا ويوحنا في الترتيب والتفاصيل لكنها تشترك في الحكم الروماني وفي تهمة الملك المكتوبة على الصليب. وتهمة الملك تهمة يفهمها والٍ رومانيّ ويتصرف بموجبها.',
      },
      limits: {
        en: 'Matthew, Luke and John probably drew on Mark or on common tradition, so the agreement is not four independent witnesses.',
        ar: 'يرجَّح أن متى ولوقا ويوحنا استفادوا من مرقس أو من تقليد مشترك، فليس الاتفاق شهادة أربعة شهود مستقلين.',
      },
      evidence: ['e3', 'e5', 'e8'],
    },
    {
      id: 'c4',
      proposition: {
        en: 'The detailed narrative of the trial before the Jewish council and Pilate, including Barabbas, the hand-washing and the degree of Pilate’s reluctance, is historically uncertain.',
        ar: 'السرد التفصيلي للمحاكمة أمام المجلس اليهودي وبيلاطس، بما فيه باراباس وغسل اليدين ومدى تردد بيلاطس، غير مؤكد تاريخيًا.',
      },
      argumentType: 'historical',
      assessment: 'actively_debated',
      rationale: {
        en: 'Historians disagree on whether a formal council trial took place, on whether there was a custom of releasing a prisoner at Passover, and on whether the Gospels have softened Pilate. Each question has serious defenders on more than one side.',
        ar: 'يختلف المؤرخون في هل جرت محاكمة رسمية أمام المجلس، وهل كانت ثمة عادة لإطلاق سجين في الفصح، وهل خفّفت الأناجيل صورة بيلاطس. ولكل سؤال مدافعون جادون من أكثر من جهة.',
      },
      limits: {
        en: 'Uncertainty in these details does not weaken the core. It means the scenes cannot be used as detailed court records.',
        ar: 'عدم اليقين في هذه التفاصيل لا يضعف اللب. معناه أنه لا يمكن اعتماد المشاهد سجلات قضائية مفصلة.',
      },
      evidence: ['e6', 'e10'],
    },
  ],

  evidence: [
    {
      id: 'e1',
      sourceId: 'S01',
      locator: 'Annals 15.44',
      role: 'supports',
      states: {
        en: 'Tacitus, explaining the origin of the Christians whom Nero blamed for the fire of Rome in AD 64, says their name came from Christus, executed in Tiberius’ reign by the procurator Pontius Pilate.',
        ar: 'يشرح تاكيتوس أصل المسيحيين الذين ألقى نيرون عليهم تبعة حريق روما سنة ٦٤م، فيقول إن اسمهم من «كرستوس» الذي أعدمه الوالي بيلاطس البنطي في عهد طيباريوس.',
      },
      inference: {
        en: 'It is the clearest non-Christian statement that the execution took place under Pilate. Tacitus wrote about eighty years later, was not an eyewitness, and his source is uncertain: he may reflect Roman records, popular talk or Christian testimony. He calls Pilate procurator; the Caesarea stone has prefect. The difference is usually explained as Tacitus using the title of his own day, though that is an inference.',
        ar: 'هو أوضح قول من خارج المسيحية بأن الإعدام جرى في ولاية بيلاطس. وكتب تاكيتوس بعد نحو ثمانين سنة، ولم يكن شاهد عيان، ومصدره غير مؤكد: فقد يعكس سجلات رومانية أو أحاديث شعبية أو شهادة مسيحية. وهو يسمّي بيلاطس procurator (والٍ)، بينما في حجر قيصرية «برفكتوس». ويُفسَّر الفرق عادة بأن تاكيتوس استعمل لقب زمنه، وهذا استنتاج.',
      },
    },
    {
      id: 'e2',
      sourceId: 'S04',
      locator: 'Antiquities 18.63–64',
      role: 'challenges',
      states: {
        en: 'Josephus’ passage says Pilate condemned Jesus to the cross, on the accusation of leading Jewish men. The wording also includes confessional statements that a non-Christian is unlikely to have written.',
        ar: 'تقول فقرة يوسيفوس إن بيلاطس حكم على يسوع بالصليب بناء على اتهام من وجهاء اليهود. وتتضمن الصياغة أيضًا عبارات إيمانية يستبعد أن يكتبها غير مسيحي.',
      },
      inference: {
        en: 'Many scholars think an original shorter notice about Jesus’ condemnation by Pilate stood behind the current text, but that cannot be shown, and the passage is not used on its own. The disagreement about which words are Josephus’ is set out in the article on non-Christian sources.',
        ar: 'يرى باحثون كثيرون أن إشعارًا أقصر أصليًا عن حكم بيلاطس على يسوع يقف وراء النص الحالي، لكن ذلك لا يمكن إثباته، ولا تُستخدم الفقرة وحدها. ويعرض المقال عن المصادر غير المسيحية الخلاف حول أي الكلمات ليوسيفوس.',
      },
    },
    {
      id: 'e3',
      sourceId: 'S62',
      locator: 'Mark 15:1–15',
      role: 'supports',
      states: {
        en: 'In Mark, the chief priests bind Jesus and hand him to Pilate. Pilate asks whether he is the king of the Jews, finds no clear answer from Jesus, offers the crowd a prisoner at the feast, and finally has Jesus scourged and handed over to be crucified.',
        ar: 'في مرقس، يقيّد رؤساء الكهنة يسوع ويسلّمونه إلى بيلاطس. فيسأله بيلاطس هل هو ملك اليهود، ولا يجد جوابًا واضحًا، ويعرض على الجمع سجينًا في العيد، وأخيرًا يجلد يسوع ويسلّمه ليُصلب.',
      },
      inference: {
        en: 'Read as an ancient Christian narrative, Mark gives the Roman sentence and the kingship question but does not claim eyewitness presence at the hearing, and its scenes are shaped by its purposes. It is the probable source for much of what Matthew and Luke say.',
        ar: 'تُقرأ رواية مرقس رواية مسيحية قديمة، وهي تعطي الحكم الروماني وسؤال الملكية لكنها لا تدّعي حضورًا عيانيًا في الجلسة، وتشكّل أغراضُها مشاهدَها. وهي المصدر المرجح لكثير مما يقوله متى ولوقا.',
      },
      bible: { book: 'mark', chapter: 15, verse: '1-15' },
    },
    {
      id: 'e4',
      sourceId: 'S62',
      locator: 'Luke 3:1',
      role: 'context',
      states: {
        en: 'Luke dates the start of John the Baptist’s ministry by a list of rulers that includes Tiberius and Pontius Pilate as governor of Judea.',
        ar: 'يؤرّخ لوقا بداية خدمة يوحنا المعمدان بقائمة حكام تضم طيباريوس وبيلاطس البنطي واليًا على اليهودية.',
      },
      inference: {
        en: 'Luke’s dating by named Roman officials shows he placed the story within known administration. Pilate’s role in the Gospels is consistent with the external evidence that he was governor in these years.',
        ar: 'يبين تأريخ لوقا بمسؤولين رومان مسمَّين أنه وضع القصة في إدارة معروفة. ودور بيلاطس في الأناجيل يتسق مع الدليل الخارجي على أنه كان واليًا في هذه السنوات.',
      },
      bible: { book: 'luke', chapter: 3, verse: '1' },
    },
    {
      id: 'e5',
      sourceId: 'S62',
      locator: 'John 18:28–40',
      role: 'supports',
      states: {
        en: 'In John, Jesus is brought to Pilate’s headquarters early in the morning; the leaders do not enter lest they be defiled before Passover. Pilate questions Jesus about kingship and says he finds no case against him, and the narrative goes on to the sentence.',
        ar: 'في يوحنا، يُؤتى بيسوع إلى دار الولاية صباحًا؛ ولا يدخل القادة لئلا يتنجسوا قبل الفصح. ويسأل بيلاطس يسوع عن الملكية ويقول إنه لا يجد عليه علة، ويمضي السرد إلى الحكم.',
      },
      inference: {
        en: 'John gives the same Roman proceeding and a kingship theme, in a version that differs from Mark in order and content. This agreement within difference points to a shared core of tradition, though John may know Mark or the other Gospels, so the independence is not certain. The Passover timing differs from the Synoptics.',
        ar: 'يقدم يوحنا الإجراء الروماني نفسه وموضوع الملكية في صيغة تختلف عن مرقس في الترتيب والمضمون. وهذا الاتفاق مع الاختلاف يدل على لبّ تقليدي مشترك، وإن كان يوحنا قد يعرف مرقس أو الأناجيل الأخرى فاستقلاله غير مؤكد. وتوقيت الفصح يختلف عن الإزائيين.',
      },
      bible: { book: 'john', chapter: 18, verse: '28-40' },
    },
    {
      id: 'e6',
      sourceId: 'S62',
      locator: 'Matthew 27:24–25',
      role: 'challenges',
      states: {
        en: 'Only Matthew has Pilate wash his hands and say he is innocent of this blood, and has the crowd reply that his blood be on them and their children.',
        ar: 'يتفرد متى بأن بيلاطس غسل يديه وقال إنه بريء من هذا الدم، وبأن الجمع أجاب بأن دمه عليهم وعلى أولادهم.',
      },
      inference: {
        en: 'Because the scene is found in one Gospel only and is theologically loaded, many historians regard it as Matthew’s shaping of the story, not as a record. It has been misused to blame a whole people for the death of Jesus, which the text, read with the rest of the Gospels, does not warrant.',
        ar: 'لأن المشهد في إنجيل واحد فقط وهو مشحون لاهوتيًا، يعدّه مؤرخون كثيرون صياغة من متى للقصة لا سجلًا. وقد أُسيء استخدامه لتحميل شعب بأكمله مسؤولية موت يسوع، وهو ما لا يسوّغه النص حين يُقرأ مع بقية الأناجيل.',
      },
      bible: { book: 'matthew', chapter: 27, verse: '24-25' },
    },
    {
      id: 'e8',
      sourceId: 'S62',
      locator: 'Mark 15:26; 1 Corinthians 1:22–24',
      role: 'supports',
      states: {
        en: 'Mark says the written charge on the cross read "The King of the Jews". St Paul, writing in the 50s, says a crucified Messiah was a stumbling-block to Jews and folly to Gentiles.',
        ar: 'يقول مرقس إن التهمة المكتوبة على الصليب كانت «ملك اليهود». ويقول القديس بولس، وهو يكتب في الخمسينيات، إن مسيحًا مصلوبًا عثرة لليهود وجهالة للأمم.',
      },
      inference: {
        en: 'A kingly charge fits a Roman concern with rival claimants. St Paul’s remark shows that crucifixion was a recognised problem for those who preached Jesus, so inventing it would have worked against the message. This is an argument from embarrassment, which is useful but not conclusive.',
        ar: 'تلائم تهمة الملك اهتمام الرومان بالمطالبين المنافسين بالعرش. ويبين قول القديس بولس أن الصلب كان مشكلة معروفة لمن يكرزون بيسوع، فاختلاقه كان سيعمل ضد الرسالة. وهذه حجة من الحرج، وهي نافعة لكنها غير قاطعة.',
      },
      bible: { book: '1-corinthians', chapter: 1, verse: '22-24' },
    },
    {
      id: 'e9',
      sourceId: 'S31',
      locator: 'whole work (exhibition page that leads to the Pilate inscription)',
      role: 'context',
      states: {
        en: 'The Israel Museum’s exhibition page leads to the stone from Caesarea that names Pontius Pilate. As the inscription is generally described, it records that Pilate, prefect of Judea, had a building dedicated, and part of its text is damaged or restored.',
        ar: 'تقود صفحة معرض متحف إسرائيل إلى حجر قيصرية الذي يذكر بيلاطس البنطي. وكما يوصف النقش عادة، فهو يسجل أن بيلاطس، حاكم اليهودية، أقام مبنى مهدى، وجزء من نصه تالف أو مرمَّم.',
      },
      inference: {
        en: 'It is evidence of his office and the title prefect, not of anything about Jesus. The exact wording is cited only at the level of the exhibition page.',
        ar: 'هو دليل على منصبه ولقب «برفكتوس»، لا على شيء عن يسوع. ولا يُستشهد بصياغته الدقيقة إلا على مستوى صفحة المعرض.',
      },
    },
    {
      id: 'e10',
      sourceId: 'S08',
      locator: 'whole work (overview of the trial and death of Jesus, with a bibliography; chapter not cited)',
      role: 'context',
      states: {
        en: 'Helen Bond’s freely available overview covers the trial and execution of Jesus and gives a bibliography.',
        ar: 'يتناول العرض المجاني الذي كتبته هيلين بوند محاكمة يسوع وإعدامه ويقدم قائمة مراجع.',
      },
      inference: {
        en: 'Offered as the place to follow the scholarly debate on the trial details. None of its conclusions is reported here.',
        ar: 'يُقدَّم موضعًا لمتابعة النقاش العلمي في تفاصيل المحاكمة. ولا تُنقل هنا أي من نتائجها.',
      },
    },
  ],

  objections: [
    {
      id: 'o1',
      statement: {
        en: 'The Gospels are Christian propaganda written decades later. They have every reason to shift blame from Rome, which the church needed to win over, to the Jewish leaders. Nothing in them can be trusted about the trial.',
        ar: 'الأناجيل دعاية مسيحية كُتبت بعد عقود. ولها كل الدافع لنقل اللوم من روما، التي كانت الكنيسة بحاجة إلى كسبها، إلى القادة اليهود. ولا يمكن الوثوق بشيء منها في المحاكمة.',
      },
      response: {
        en: [
          'The objection identifies something real. Many historians do think the Gospels, especially in the later ones, soften Pilate and sharpen the role of the Jewish leaders, and that the hand-washing in Matthew is a clear example. For that reason the article treats the scenes as shaped narratives and not as court records.',
          'But the core does not depend on those scenes. The crucifixion, a Roman penalty, was carried out under Pilate according to a hostile Roman writer, and the Gospels agree with him even though a crucified Messiah was an embarrassment to the movement. A story invented to please Rome would hardly have had Rome crucify its hero.',
        ],
        ar: [
          'يرصد الاعتراض أمرًا حقيقيًا. فمؤرخون كثيرون يرون أن الأناجيل، وبخاصة المتأخرة منها، تخفف صورة بيلاطس وتشدد دور القادة اليهود، وأن غسل اليدين في متى مثال واضح. لذلك يعامل المقال المشاهد بوصفها سردًا مصوغًا لا سجلات قضائية.',
          'لكن اللب لا يتوقف على تلك المشاهد. فالصلب، وهو عقوبة رومانية، نُفِّذ في ولاية بيلاطس بحسب كاتب روماني معادٍ، وتتفق الأناجيل معه مع أن مسيحًا مصلوبًا كان إحراجًا للحركة. وقصة اختُلقت لإرضاء روما ما كانت لتجعل روما تصلب بطلها.',
        ],
      },
      limits: {
        en: 'It does not tell us how much of the Gospels’ detail about Pilate’s conduct is accurate.',
        ar: 'لا يخبرنا ذلك بمقدار الدقة في تفاصيل الأناجيل عن سلوك بيلاطس.',
      },
      evidence: ['e1', 'e3', 'e6', 'e8'],
    },
    {
      id: 'o2',
      statement: {
        en: 'No follower of Jesus was at the trial, since the disciples had fled. So the dialogues between Jesus and Pilate, and the private hearing before the council, cannot be eyewitness reports. Memory and oral tradition make such scenes especially unreliable.',
        ar: 'لم يكن أحد من أتباع يسوع في المحاكمة، فقد هرب التلاميذ. فلا يمكن أن تكون الحوارات بين يسوع وبيلاطس، والجلسة الخاصة أمام المجلس، تقارير شهود عيان. والذاكرة والتقليد الشفهي يجعلان مثل هذه المشاهد غير موثوقة بوجه خاص.',
      },
      response: {
        en: [
          'This is a strong objection to the dialogues, and it is why they are classed as debated. Some scholars suggest the content was inferred from the outcome, or built from Scripture, or learned later from sympathisers who heard about it, but none of these can be demonstrated.',
          'Other scholars argue that the Gospels still preserve testimony from people close to the events, as in Bauckham’s thesis, or that some detail came through the Jerusalem community. This is also contested. The article does not try to settle the dispute, and it rests the core on the outside report and the agreement on the sentence, which do not need a witness at the hearing.',
        ],
        ar: [
          'هذا اعتراض قوي على الحوارات، ولهذا تُصنَّف محل نقاش. ويقترح بعض الباحثين أن المضمون استُنتج من النتيجة، أو بُني من الكتب المقدسة، أو عُلم لاحقًا من متعاطفين سمعوا به، لكن لا يمكن إثبات شيء من ذلك.',
          'ويرى باحثون آخرون أن الأناجيل ما زالت تحفظ شهادة من كانوا قريبين من الأحداث، كما في أطروحة بوكهام، أو أن بعض التفاصيل وصل عبر جماعة أورشليم. وهذا أيضًا مختلف عليه. ولا يحاول المقال حسم الخلاف، بل يقيم اللب على الخبر الخارجي وعلى الاتفاق في الحكم، وكلاهما لا يحتاج إلى شاهد في الجلسة.',
        ],
      },
      limits: {
        en: 'The debate over memory and the Gospels continues and affects far more than the trial.',
        ar: 'النقاش في الذاكرة والأناجيل مستمر وهو يمس أكثر بكثير من المحاكمة.',
      },
      evidence: ['e3'],
    },
    {
      id: 'o3',
      statement: {
        en: 'The Pilate inscription proves the Gospel story, or at least that Jesus was tried before Pilate.',
        ar: 'نقش بيلاطس يثبت قصة الأناجيل، أو على الأقل أن يسوع حوكم أمام بيلاطس.',
      },
      response: {
        en: [
          'It does not, and this article does not cite it for that. The inscription shows that Pilate was a real official, that his title was prefect and that he was active in Caesarea. This removes any doubt that the Gospels and Tacitus are naming a historical person, which is useful, but it is silent on Jesus.',
        ],
        ar: [
          'لا يثبت ذلك، ولا يستشهد به هذا المقال لذلك. فالنقش يبين أن بيلاطس كان موظفًا حقيقيًا، وأن لقبه «برفكتوس»، وأنه كان نشطًا في قيصرية. وهذا يزيل أي شك في أن الأناجيل وتاكيتوس يسمّون شخصًا تاريخيًا، وهو نافع، لكنه صامت عن يسوع.',
        ],
      },
      limits: {
        en: 'It is an argument about what the artefact can and cannot show; it is not a verdict on the trial.',
        ar: 'هو حجة في ما يستطيع الأثر إثباته وما لا يستطيع، وليس حكمًا في المحاكمة.',
      },
      evidence: ['e9', 'e4'],
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'The historical case is that Jesus was executed by Roman authority under Pilate, that Jewish leaders had a part in handing him over, and that the charge was kingship. Beyond that the sources are shaped by the interests of those who wrote them, and an honest account will keep the secure core apart from the debated scenes.',
        'Responsibility for the death of Jesus cannot be assigned to the Jewish people as a whole. The sources themselves show Jesus, his first followers and the crowds who welcomed him as Jews, and the sentence was Roman. Recognising this is both historically accurate and necessary for a Christian to speak truthfully.',
      ],
      ar: [
        'الحجة التاريخية أن يسوع أُعدم بسلطة رومانية في ولاية بيلاطس، وأن للقادة اليهود دورًا في تسليمه، وأن التهمة كانت الملك. وما وراء ذلك تصوغه المصادر بحسب مصالح كاتبيها، والرواية الأمينة تفصل اللب الراسخ عن المشاهد المختلف عليها.',
        'ولا يجوز تحميل الشعب اليهودي كله مسؤولية موت يسوع. فالمصادر نفسها تُظهر يسوع وأتباعه الأوائل والجموع التي استقبلته يهودًا، والحكم كان رومانيًا. والاعتراف بذلك دقة تاريخية وشرط لكلام مسيحي صادق.',
      ],
    },
    theological: {
      en: [
        'The Church’s confession is that Christ suffered and was crucified for our salvation, and the Creed names Pontius Pilate in order to place that event in real history and not in myth. The confession goes beyond what history can verify: that he gave himself willingly, and that his death was for the life of the world, are statements of faith.',
      ],
      ar: [
        'اعتراف الكنيسة أن المسيح تألم وصُلب لأجل خلاصنا، ويذكر قانون الإيمان بيلاطس البنطي ليضع هذا الحدث في التاريخ الحقيقي لا في الأسطورة. ويتجاوز الاعتراف ما يتحقق منه التاريخ: أنه بذل نفسه طوعًا، وأن موته كان لأجل حياة العالم، قضايا إيمان.',
      ],
    },
  },
  coptic: {
    en: [
      'In the Coptic Orthodox Church the Creed is prayed in the liturgy, and the mention of Pilate belongs to the Church’s confession that God the Word truly suffered in the flesh. The Church holds that the suffering was real in his humanity, which is united to his divinity without mixture, confusion or alteration. Holy Week readings follow the Gospel narratives of the trial, and the Church reads them with attention to what they say about the Lord’s willing self-offering rather than as a court transcript.',
    ],
    ar: [
      'يُصلّى قانون الإيمان في الكنيسة القبطية الأرثوذكسية في الصلوات الطقسية، وذكر بيلاطس جزء من اعتراف الكنيسة بأن الله الكلمة تألم حقًا بالجسد. وتؤمن الكنيسة أن الألم كان حقيقيًا في ناسوته المتحد بلاهوته بلا اختلاط ولا امتزاج ولا تغيير. وتتبع قراءات البصخة المقدسة روايات الأناجيل عن المحاكمة، وتقرؤها الكنيسة اهتمامًا بما تقوله عن بذل الرب نفسه طوعًا لا بوصفها محضرًا قضائيًا.',
    ],
  },
  disputed: {
    en: [
      'Debated: whether a formal trial before the Jewish council took place and on what charge; whether there was a Passover custom of releasing a prisoner; how reluctant Pilate was; the historicity of the hand-washing; the year of the crucifixion; whether Passover fell before or after the death in John and the Synoptics; and how much of Josephus’ passage is original. The article takes no position on which side of each is stronger, other than that none removes the core.',
    ],
    ar: [
      'موضع النقاش: هل جرت محاكمة رسمية أمام المجلس اليهودي وبأي تهمة؛ وهل كانت ثمة عادة في الفصح بإطلاق سجين؛ ومدى تردد بيلاطس؛ وتاريخية غسل اليدين؛ وسنة الصلب؛ وهل جاء الفصح قبل الموت أو بعده في يوحنا والإزائيين؛ ومقدار الأصيل في فقرة يوسيفوس. ولا يتخذ المقال موقفًا في أي جانب أقوى في كل مسألة، إلا أن شيئًا منها لا يزيل اللب.',
    ],
  },
  conclusion: {
    en: 'It is reasonable to conclude that Jesus was crucified by Roman authority under Pontius Pilate. That conclusion rests on a hostile outside report and on agreement among sources that have their own motives, and it does not require the trial scenes to be accurate. The inscription shows that Pilate was real, not that Jesus stood before him.',
    ar: 'من المعقول أن نستنتج أن يسوع صُلب بسلطة رومانية في ولاية بيلاطس البنطي. وتقوم هذه النتيجة على خبر خارجي معادٍ وعلى اتفاق مصادر لها دوافعها، ولا تتطلب دقة مشاهد المحاكمة. والنقش يبين أن بيلاطس كان حقيقيًا، لا أن يسوع وقف أمامه.',
  },
  furtherReading: ['S08', 'S07', 'S31'],
  related: ['did-jesus-exist', 'non-christian-sources-establish', 'trial-details-secure-and-debated', 'could-jesus-have-survived', 'burial-of-jesus', 'quran-4-157-and-crucifixion'],
};
