import type { Article } from '../types.ts';

export const article: Article = {
  id: 'why-these-books',
  questionId: 'why-these-books',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article asks why these books and not others are in the Bible. It sets out the reasons the early churches gave and acted on when they received some writings and set others aside, shows how those reasons appear in the surviving evidence, and says where the reasoning is itself debated. The question of who made the lists is treated in the article on who chose the books, and the Council of Nicaea in its own article.',
    ar: 'تسأل هذه المقالة لماذا هذه الأسفار وليست غيرها في الكتاب المقدس. وهي تعرض الأسباب التي قدمتها الكنائس الأولى وعملت بها حين قبلت بعض الكتابات وتركت غيرها، وتبيّن كيف تظهر هذه الأسباب في الشواهد الباقية، وتذكر أين يختلف الباحثون في هذا التعليل نفسه. أما من وضع القوائم فتعالجه مقالة «من اختار الأسفار؟»، ومجمع نيقية في مقالته الخاصة.',
  },
  shortAnswer: {
    en: 'The early churches asked three kinds of question of a writing: did it come from an apostle or from someone close to the apostles, does it agree with the faith the churches had received, and had it long been read in the churches in worship? The four Gospels, Acts, the letters of St Paul and most of the rest met these tests early and widely. A few books (some short letters and Revelation) were questioned in some regions for a time, and many other writings that claimed apostolic names were set aside because they came too late, taught differently, or were not used. These criteria were applied in practice, and were not a written formula, and historians differ about how consistently.',
    ar: 'كانت الكنائس الأولى تسأل ثلاثة أنواع من الأسئلة عن أي كتابة: هل جاءت من رسول أو من قريب من الرسل، وهل توافق الإيمان الذي تسلّمته الكنائس، وهل قُرئت زمنًا طويلًا في الكنائس في العبادة؟ وقد استوفت الأناجيل الأربعة وأعمال الرسل ورسائل القديس بولس ومعظم الباقي هذه الاختبارات مبكرًا وعلى نطاق واسع. وبقيت أسفار قليلة (بعض الرسائل القصيرة وسفر الرؤيا) موضع سؤال في بعض الأقاليم زمنًا، وتُركت كتابات كثيرة تحمل أسماء رسولية لأنها متأخرة أو تعلّم تعليمًا مختلفًا أو لم تُستعمل. وقد طُبّقت هذه المعايير عمليًا ولم تكن صيغة مكتوبة، ويختلف المؤرخون في مدى اتساق تطبيقها.',
  },
  quickPoints: {
    en: [
      'Three tests recur in the early evidence: apostolic connection, agreement with the received faith, and long, wide use in the churches.',
      'The New Testament writings themselves show letters being exchanged and read aloud in the churches, which is how a core collection began.',
      'A few books were doubted in some regions for generations, which shows that the tests were applied with discussion and not by decree.',
      'Writings set aside were not hidden by a single act; they were mostly later, taught differently, or were not used in the churches’ worship.',
      'The criteria describe what the churches did. The Church’s claim that the Holy Spirit guided the recognition is a further, theological claim.',
    ],
    ar: [
      'تتكرر ثلاثة اختبارات في الشواهد المبكرة: الصلة الرسولية، والاتفاق مع الإيمان المسلَّم، والاستعمال الطويل الواسع في الكنائس.',
      'تُظهر كتابات العهد الجديد نفسها رسائل تُتبادل وتُقرأ بصوت عال في الكنائس، وهكذا بدأت مجموعة النواة.',
      'شُكّ في أسفار قليلة في بعض الأقاليم أجيالًا، وهذا يبيّن أن الاختبارات طُبّقت بنقاش لا بمرسوم.',
      'لم تُخفَ الكتابات المتروكة بفعل واحد؛ فمعظمها متأخر أو يعلّم تعليمًا مختلفًا أو لم يُستعمل في عبادة الكنائس.',
      'تصف المعايير ما فعلته الكنائس. أما قول الكنيسة إن الروح القدس أرشد هذا الاعتراف فدعوى لاهوتية أخرى.',
    ],
  },
  argumentTypes: ['historical', 'textual', 'theological'],
  assessment: {
    label: 'supported_disputed_details',
    explanation: {
      en: 'That the churches judged writings by apostolic connection, agreement with the received faith and use is well supported by what early writers say and do. How strictly each test was applied to each book, and what weight each carried, is disputed. That the process was guided by the Spirit is a theological interpretation, not a conclusion of historical method.',
      ar: 'إن حكم الكنائس على الكتابات بالصلة الرسولية والاتفاق مع الإيمان المسلَّم والاستعمال مسنود جيدًا بما يقوله الكتّاب الأوائل وما يفعلونه. أما مدى صرامة كل اختبار مع كل سفر ووزن كل منها فمختلف فيه. وأن العملية كانت بإرشاد الروح تفسير لاهوتي لا نتيجة المنهج التاريخي.',
    },
  },

  whyExamine: {
    en: [
      'A reader who is told that the Church “decided” which books to include may suspect that the selection was arbitrary. A reader who is told that the books “chose themselves” may suspect that the question is being avoided. Both deserve to see what reasons the early Christians actually gave.',
      'The reasons also help a reader judge the writings left outside, such as the Gospel of Thomas, on their own terms, without assuming either that they were suppressed or that they were obviously worthless.',
    ],
    ar: [
      'من قيل له إن الكنيسة «قررت» أي الأسفار تدخل قد يظن أن الاختيار كان اعتباطيًا. ومن قيل له إن الأسفار «اختارت نفسها» قد يظن أن السؤال يُتحاشى. وكلاهما يستحق أن يرى الأسباب التي قدمها المسيحيون الأوائل فعلًا.',
      'والأسباب تعين أيضًا على الحكم على الكتابات التي بقيت خارجًا، مثل إنجيل توما، بشروطها هي، دون افتراض أنها كُبتت أو أنها بلا قيمة بوضوح.',
    ],
  },
  background: {
    en: [
      'The earliest Christian writings were occasional: St Paul wrote to churches he had founded or knew, and the writers of the Gospels set out the story of Jesus for communities that needed it. They were read aloud when the community met, and they were passed from church to church. By the middle of the second century, a writer such as Justin could describe the Sunday gathering at which the apostles’ “memoirs” were read beside the prophets.',
      'Irenaeus, bishop of Lyon in the later second century, argued that there are four Gospels and no more, and linked this to the faith received from the apostles. Around the same time a list now known as the Muratorian fragment named a number of New Testament books; it is generally dated to the late second century, though a few scholars argue for a later date. In the early fourth century Eusebius, the historian of the Church, sorted writings into those accepted everywhere, those disputed, and those rejected.',
      'In Alexandria, Origen in the third century knew that some books were contested and named the ones he regarded as universally recognised. In AD 367 Athanasius, bishop of Alexandria, listed the twenty-seven books of the New Testament, and he warned against the circulation of invented “apocryphal” writings under apostolic names. Regional councils at Hippo (393) and Carthage (397) gave the same list for North Africa.',
      'The same period shows that the Church’s test of agreement with the received faith was not private taste. Writers such as Irenaeus and Tertullian spoke of a “rule of faith” that the churches held, and a writing that taught otherwise was measured against it.',
    ],
    ar: [
      'كانت أقدم الكتابات المسيحية كتابات مناسبات: كتب القديس بولس إلى كنائس أسسها أو عرفها، وعرض كتّاب الأناجيل قصة يسوع لجماعات تحتاج إليها. وكانت تُقرأ بصوت عال حين تجتمع الجماعة وتنتقل من كنيسة إلى أخرى. وبحلول منتصف القرن الثاني استطاع كاتب مثل يوستينوس أن يصف اجتماع الأحد الذي تُقرأ فيه «مذكرات» الرسل إلى جانب الأنبياء.',
      'وجادل إيريناؤس أسقف ليون في أواخر القرن الثاني بأن الأناجيل أربعة لا أكثر، وربط ذلك بالإيمان المسلَّم من الرسل. وفي الزمن نفسه تقريبًا ذكرت قائمة تُعرف اليوم بشذرة موراتوري عددًا من أسفار العهد الجديد؛ ويُؤرَّخ لها عمومًا بأواخر القرن الثاني وإن رأى قلة من الباحثين تاريخًا متأخرًا. وفي أوائل القرن الرابع صنّف أوسابيوس مؤرخ الكنيسة الكتابات إلى مقبولة في كل مكان ومتنازع عليها ومرفوضة.',
      'وفي الإسكندرية عرف أوريجانوس في القرن الثالث أن بعض الأسفار موضع نزاع وسمّى ما عدّه معترفًا به عند الجميع. وفي سنة ٣٦٧م ذكر أثناسيوس أسقف الإسكندرية أسفار العهد الجديد السبعة والعشرين، وحذّر من تداول كتابات «أبوكريفية» مختلقة تحمل أسماء رسولية. وأعطت مجامع إقليمية في هيبو (٣٩٣) وقرطاجة (٣٩٧) القائمة نفسها لشمال أفريقيا.',
      'وتبيّن الفترة نفسها أن اختبار الاتفاق مع الإيمان المسلَّم لم يكن ذوقًا خاصًا. فقد تحدث كتّاب مثل إيريناؤس وترتليان عن «قانون الإيمان» الذي تحتفظ به الكنائس، وكانت الكتابة التي تعلّم بخلافه تُقاس به.',
    ],
  },
  glossary: ['canon', 'deuterocanon', 'tradition', 'gospel', 'codex', 'manuscript', 'inspiration'],

  claims: [
    {
      id: 'C1',
      proposition: {
        en: 'Letters and Gospels were circulated, exchanged and read aloud in the churches within the apostolic age, which is how the New Testament collection began.',
        ar: 'تداولت الكنائس الرسائل والأناجيل وتبادلتها وقرأتها بصوت عال في العصر الرسولي، وبهذا بدأت مجموعة العهد الجديد.',
      },
      argumentType: 'historical',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'Two letters in the collection, read as ancient documents, instruct that they be read to the whole church and passed to another, and 2 Peter refers to St Paul’s letters as a known group. Justin describes the reading of the apostles’ memoirs in Rome about AD 150.',
        ar: 'تأمر رسالتان في المجموعة، حين تُقرآن وثيقتين قديمتين، بأن تُقرآ على الكنيسة كلها وتُمرَّرا إلى كنيسة أخرى، وتشير رسالة بطرس الثانية إلى رسائل القديس بولس بوصفها مجموعة معروفة. ويصف يوستينوس قراءة مذكرات الرسل في روما نحو ١٥٠م.',
      },
      limits: {
        en: 'The date of 2 Peter is debated, and Justin does not name the memoirs. The passages show circulation and use, not a closed list.',
        ar: 'تاريخ رسالة بطرس الثانية موضع جدل، ولا يسمّي يوستينوس المذكرات. فالفقرات تُظهر التداول والاستعمال لا قائمة مغلقة.',
      },
      evidence: ['E1', 'E2', 'E3', 'E4'],
    },
    {
      id: 'C3',
      proposition: {
        en: 'Some New Testament books were doubted in some regions for a time, and the tests were applied through discussion across generations.',
        ar: 'شُكّ في بعض أسفار العهد الجديد في بعض الأقاليم زمنًا، وطُبّقت الاختبارات بالنقاش عبر الأجيال.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The fourth-century Codex Sinaiticus carries, after the twenty-seven books, two further early Christian writings, and Athanasius separates the twenty-seven from other works that he allowed to be read. Both show that the margins were not identical everywhere.',
        ar: 'يحمل مخطوط سيناء من القرن الرابع، بعد الأسفار السبعة والعشرين، كتابين مسيحيين مبكرين آخرين، ويفصل أثناسيوس الأسفار السبعة والعشرين عن أعمال أخرى أجاز قراءتها. وكلاهما يدل على أن الأطراف لم تكن واحدة في كل مكان.',
      },
      limits: {
        en: 'Why the makers of Sinaiticus included the extra works is not known.',
        ar: 'لا يُعرف لماذا أدرج صانعو مخطوط سيناء الأعمال الزائدة.',
      },
      evidence: ['E7', 'E8'],
    },
    {
      id: 'C4',
      proposition: {
        en: 'The Holy Spirit guided the Church in recognising which books are Scripture.',
        ar: 'أرشد الروح القدس الكنيسة في الاعتراف بأي الأسفار هي كتاب مقدس.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'This is the Church’s confession about her own history, in line with Christ’s promise to the apostles that the Spirit would guide them. It explains why the tests above were reliable; it is not itself a result of the tests.',
        ar: 'هذا اعتراف الكنيسة بتاريخها، متفق مع وعد المسيح للرسل بأن الروح يرشدهم. وهو يفسّر لماذا كانت الاختبارات المذكورة موثوقة؛ وليس نتيجة لها.',
      },
      limits: {
        en: 'It cannot be tested by historical method, and a historian can describe the same process without it.',
        ar: 'لا يمكن اختباره بالمنهج التاريخي، ويستطيع المؤرخ وصف العملية نفسها دونه.',
      },
      evidence: ['E9'],
    },
  ],

  evidence: [
    {
      id: 'E1',
      sourceId: 'S62',
      locator: 'Colossians 4:16',
      role: 'context',
      states: {
        en: 'St Paul asks that his letter, once read among the Colossians, be read also in the church of the Laodiceans, and that they in turn read the letter that is coming from Laodicea.',
        ar: 'يطلب القديس بولس أن تُقرأ رسالته بعد أن تُقرأ بين أهل كولوسي في كنيسة اللاودكيين أيضًا، وأن يقرأوا هم الرسالة التي من لاودكية.',
      },
      inference: {
        en: 'Read as an ancient document, the verse shows a letter meant for one church being read aloud and passed to another within the apostle’s lifetime. It does not show a collection, and the letter from Laodicea is not identified.',
        ar: 'تُظهر الآية، حين تُقرأ وثيقة قديمة، رسالة مخصصة لكنيسة واحدة تُقرأ بصوت عال وتنتقل إلى أخرى في حياة الرسول. ولا تُظهر مجموعة، والرسالة التي من لاودكية غير محددة.',
      },
      bible: { book: 'colossians', chapter: 4, verse: '16' },
    },
    {
      id: 'E2',
      sourceId: 'S62',
      locator: '1 Thessalonians 5:27',
      role: 'context',
      states: {
        en: 'St Paul charges the Thessalonians, in strong terms, to have his letter read to all the brothers.',
        ar: 'يوصي القديس بولس أهل تسالونيكي بإلحاح أن تُقرأ رسالته على جميع الإخوة.',
      },
      inference: {
        en: 'The letter was written to be read aloud to the whole assembly, which is the setting in which writings gained authority in the churches’ worship.',
        ar: 'كُتبت الرسالة لتُقرأ بصوت عال على الجماعة كلها، وهذا هو المقام الذي اكتسبت فيه الكتابات سلطانًا في عبادة الكنائس.',
      },
      bible: { book: '1-thessalonians', chapter: 5, verse: '27' },
    },
    {
      id: 'E3',
      sourceId: 'S62',
      locator: '2 Peter 3:15–16',
      role: 'context',
      states: {
        en: 'The writer speaks of St Paul’s letters, says some things in them are hard to understand, and says the unlearned twist them as they do the other scriptures.',
        ar: 'يتحدث الكاتب عن رسائل القديس بولس، ويقول إن فيها أشياء عسرة الفهم، وإن غير المتعلمين يحرّفونها كما يفعلون ببقية الكتب.',
      },
      inference: {
        en: 'If the letter is early, St Paul’s letters were known as a group and ranked with Scripture. Its date is debated (late first century or the second), so the evidence is for the process and not for a fixed date.',
        ar: 'إن كانت الرسالة مبكرة فقد عُرفت رسائل القديس بولس مجموعة وصُنّفت مع الكتب المقدسة. وتاريخها موضع جدل (أواخر القرن الأول أو القرن الثاني)، فالشاهد على العملية لا على تاريخ ثابت.',
      },
      bible: { book: '2-peter', chapter: 3, verse: '15-16' },
    },
    {
      id: 'E4',
      sourceId: 'S50',
      locator: 'First Apology 67',
      role: 'supports',
      states: {
        en: 'Justin says that on the day called Sunday, the memoirs of the apostles or the writings of the prophets are read as long as time permits, and then the president speaks.',
        ar: 'يقول يوستينوس إنه في اليوم المسمى الأحد تُقرأ مذكرات الرسل أو كتابات الأنبياء ما سمح الوقت، ثم يتكلم الرئيس.',
      },
      inference: {
        en: 'About AD 150 in Rome, apostolic writings were read in worship alongside the prophets. The passage names no list, so it supports the criterion of use without fixing the edges.',
        ar: 'نحو ١٥٠م في روما كانت الكتابات الرسولية تُقرأ في العبادة مع الأنبياء. ولا تسمّي الفقرة قائمة، فهي تسند معيار الاستعمال دون أن تحدد الأطراف.',
      },
    },
    {
      id: 'E7',
      sourceId: 'S22',
      locator: 'Codex Sinaiticus Project, significance page (contents of the manuscript)',
      role: 'context',
      states: {
        en: 'The project describes a fourth-century Bible whose New Testament includes the Epistle of Barnabas and part of the Shepherd of Hermas after the twenty-seven books.',
        ar: 'يصف المشروع كتابًا مقدسًا من القرن الرابع يتضمن عهده الجديد رسالة برنابا وجزءًا من راعي هرماس بعد الأسفار السبعة والعشرين.',
      },
      inference: {
        en: 'Fourth-century practice about what to bind with the New Testament was not uniform. Why these two writings are there is not known.',
        ar: 'لم تكن الممارسة في القرن الرابع موحدة في ما يُجمع مع العهد الجديد. ولا يُعرف لماذا وُجد هذان العملان.',
      },
    },
    {
      id: 'E8',
      sourceId: 'S29',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'F. F. Bruce’s The Canon of Scripture traces how the biblical canon formed, and its thesis is that the churches came to recognise the books through their use, with later lists confirming what had been accepted.',
        ar: 'يتتبع كتاب ف. ف. بروس «قانون الكتاب المقدس» كيف تكوّن القانون الكتابي، وأطروحته أن الكنائس جاءت إلى الاعتراف بالأسفار من خلال استعمالها وأن القوائم اللاحقة أكدت ما قُبل.',
      },
      inference: {
        en: 'The author is a Christian scholar, and the book is cited as a whole work. It stands for the generally held historical picture and no detail from it is relied on.',
        ar: 'المؤلف باحث مسيحي، والكتاب يُستشهد به عملًا كاملًا. وهو يمثل الصورة التاريخية المعتمدة ولا يُعتمد فيه على تفصيل.',
      },
    },
    {
      id: 'E9',
      sourceId: 'S62',
      locator: 'John 16:12–15',
      role: 'context',
      states: {
        en: 'In the Gospel of John, Jesus tells his disciples that he has more to say, and that the Spirit of truth will guide them into all the truth and will take what is his and declare it to them.',
        ar: 'في إنجيل يوحنا يقول يسوع لتلاميذه إن لديه أشياء أخرى ليقولها، وإن روح الحق يرشدهم إلى جميع الحق ويأخذ مما له ويخبرهم.',
      },
      inference: {
        en: 'This is the passage the Church points to for her confession that the Spirit guided the apostolic witness and its reception. Here it is read as the Gospel’s own claim; it is not offered as historical proof.',
        ar: 'هذه الفقرة التي تشير إليها الكنيسة في اعترافها بأن الروح أرشد الشهادة الرسولية وقبولها. وهي تُقرأ هنا ادعاءً من الإنجيل نفسه، ولا تُقدَّم برهانًا تاريخيًا.',
      },
      bible: { book: 'john', chapter: 16, verse: '12-15' },
    },
  ],

  objections: [
    {
      id: 'O1',
      statement: {
        en: 'The tests were invented afterwards to justify a list already decided. “Apostolic” is an elastic word, and several accepted books (Hebrews, 2 Peter) are not clearly apostolic.',
        ar: 'اخترعت الاختبارات بعد ذلك لتبرير قائمة محسومة. و«رسولي» كلمة مرنة، وعدد من الأسفار المقبولة (العبرانيين وبطرس الثانية) ليست رسولية بوضوح.',
      },
      response: {
        en: [
          'The objection is partly right. Hebrews is anonymous, and the authorship of 2 Peter is debated; the churches did hesitate about them, and the hesitation is recorded. The churches accepted Hebrews for its content and its use, and in the East it was early linked with St Paul, while other churches took longer to receive it.',
          'But that the tests are recorded in writers who lived before the lists, and that they were applied unevenly, is itself evidence that they were not simply invented to cover a decision. Where scholars differ is on how much weight each test carried for each book.',
        ],
        ar: [
          'الاعتراض صائب جزئيًا. فرسالة العبرانيين مجهولة الكاتب، وتأليف بطرس الثانية موضع جدل؛ وقد تردّدت الكنائس بشأنهما وتردّدها مسجل. وقبلت الكنائس العبرانيين لمضمونها واستعمالها، وارتبطت في الشرق مبكرًا ببولس، بينما احتاجت كنائس أخرى زمنًا أطول لقبولها.',
          'لكن كون الاختبارات مسجلة عند كتّاب عاشوا قبل القوائم، وأنها طُبّقت تطبيقًا متفاوتًا، دليل في ذاته على أنها لم تُخترع لتغطية قرار. ويختلف الباحثون في وزن كل اختبار مع كل سفر.',
        ],
      },
      limits: {
        en: 'This does not show that every judgement was correct, only that the tests are not mere afterthoughts.',
        ar: 'لا يُثبت هذا أن كل الأحكام كانت صائبة، بل فقط أن الاختبارات ليست مجرد فكرة لاحقة.',
      },
      evidence: ['E3', 'E4', 'E8'],
    },
    {
      id: 'O2',
      statement: {
        en: 'Testing writings against the “received faith” is circular: the books were chosen if they agreed with the doctrine, and the doctrine is then proved from the books.',
        ar: 'اختبار الكتابات بـ«الإيمان المسلَّم» دائري: فالأسفار اختيرت إن وافقت العقيدة، ثم تُثبَت العقيدة من الأسفار.',
      },
      response: {
        en: [
          'The received faith was not drawn from the later list; it was the message preached by the apostles and held by the churches, and the earliest books are themselves the earliest witnesses to that message. Agreement with it is therefore a test of whether a later writing is faithful to what the earliest witnesses report.',
          'Some historians argue that early Christianity was more varied than the later Church admits, and that some groups whose writings were set aside had a real claim to the tradition. That is a serious position. The reply of the churches was that those writings appeared later and taught things that earlier writers did not teach, as the article on noncanonical gospels sets out.',
        ],
        ar: [
          'لم يُستخرج الإيمان المسلَّم من القائمة اللاحقة؛ بل كان الرسالة التي بشّر بها الرسل وحفظتها الكنائس، وأقدم الأسفار نفسها أقدم شهود على تلك الرسالة. فالاتفاق معها اختبار لما إذا كانت كتابة لاحقة أمينة لما يرويه أقدم الشهود.',
          'ويرى بعض المؤرخين أن المسيحية المبكرة كانت أكثر تنوعًا مما تقرّ به الكنيسة اللاحقة، وأن لبعض الجماعات التي تُركت كتاباتها دعوى حقيقية في التقليد. وهذا موقف جاد. وجواب الكنائس أن تلك الكتابات ظهرت لاحقًا وعلّمت ما لم يعلّمه الكتّاب الأقدم، كما تعرض مقالة الأناجيل غير القانونية.',
        ],
      },
      limits: {
        en: 'The reply depends on dating the other writings later, which is argued case by case.',
        ar: 'يعتمد الجواب على تأريخ الكتابات الأخرى بعد ذلك، وهذا يُناقش حالة حالة.',
      },
    },
    {
      id: 'O3',
      statement: {
        en: 'If the Spirit guided the Church, there should have been no doubt about any book, and no differences among the churches.',
        ar: 'إن كان الروح قد أرشد الكنيسة فينبغي ألا يكون شك في سفر ولا اختلاف بين الكنائس.',
      },
      response: {
        en: [
          'The Church has never taught that the Spirit guides by removing human questions. The Spirit’s guidance of the apostles themselves came through their witness, memory and reasoning, and the recognition of Scripture came in the same way, through the churches’ prayer, worship, discussion and, at times, disagreement.',
          'The result, the twenty-seven books, is shared by nearly all Christians, while the Old Testament lists differ for reasons treated in a separate article.',
        ],
        ar: [
          'لم تعلّم الكنيسة قط أن الروح يرشد بإزالة الأسئلة البشرية. فإرشاد الروح للرسل أنفسهم جاء عبر شهادتهم وذاكرتهم وتفكيرهم، وجاء الاعتراف بالكتاب كذلك، عبر صلاة الكنائس وعبادتها ونقاشها وأحيانًا اختلافها.',
          'والنتيجة، أي الأسفار السبعة والعشرون، يشترك فيها تقريبًا جميع المسيحيين، بينما تختلف قوائم العهد القديم لأسباب تعالجها مقالة منفصلة.',
        ],
      },
      limits: {
        en: 'This explains how a believer holds both faith and history together. It does not persuade a reader who does not accept the Spirit’s guidance.',
        ar: 'يفسّر هذا كيف يجمع المؤمن بين الإيمان والتاريخ. ولا يقنع قارئًا لا يقبل إرشاد الروح.',
      },
      evidence: ['E9'],
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'Historically, a Christian can say that the churches gave reasons for receiving books, that these reasons appear in writers before the lists, and that the core of the New Testament was in use in worship early and widely.',
        'A Christian should add that a few books were doubted for a time, that the criteria were applied unevenly, and that historians dispute the weight of each. These are part of the honest account.',
      ],
      ar: [
        'يستطيع المسيحي تاريخيًا أن يقول إن الكنائس قدمت أسبابًا لقبول الأسفار، وإن هذه الأسباب ترد عند كتّاب قبل القوائم، وإن نواة العهد الجديد كانت مستعملة في العبادة مبكرًا وعلى نطاق واسع.',
        'وعليه أن يضيف أن أسفارًا قليلة شُكّ فيها زمنًا، وأن المعايير طُبّقت تطبيقًا متفاوتًا، وأن المؤرخين يتنازعون في وزن كل منها. وهذا من العرض الأمين.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that the Scriptures are the written witness to the faith of the apostles and that she received them under the guidance of the Holy Spirit, who is the same Spirit who inspired their writers. The tests are the human side of that reception.',
        'Because Scripture and Tradition belong to one life of the Church, the Church does not ask a believer to hold that the books were selected by an outside authority. She holds that she recognised in them the voice that had called her.',
      ],
      ar: [
        'تعترف الكنيسة بأن الكتب المقدسة هي الشهادة المكتوبة للإيمان الرسولي وبأنها تسلّمتها بإرشاد الروح القدس، وهو الروح نفسه الذي أوحى إلى كتّابها. والاختبارات هي الجانب البشري لذلك القبول.',
        'ولأن الكتاب والتقليد من حياة واحدة للكنيسة، فهي لا تطلب من المؤمن أن يعتقد بأن الأسفار انتقتها سلطة خارجية. بل تعتقد أنها عرفت فيها الصوت الذي دعاها.',
      ],
    },
  },
  coptic: {
    en: [
      'The Church of Alexandria stands near the centre of this history. Origen, working in Alexandria and Caesarea, discussed which books were universally received, and Athanasius, whom the Coptic Church honours as the twentieth pope of Alexandria, gave in his Festal Letter for AD 367 the list of the twenty-seven books of the New Testament and warned his flock against invented writings. The Coptic Church has kept that list.',
      'For the Coptic Church the question “why these books” is answered by the Church’s own life: the Gospel is read standing in every liturgy, the Epistles and Acts are read in the Pauline, Catholic and Praxis readings, and the Church’s hymns and prayers are woven from them. Scripture is received within that life, not apart from it.',
    ],
    ar: [
      'تقع كنيسة الإسكندرية قرب مركز هذا التاريخ. فقد ناقش أوريجانوس، الذي عمل في الإسكندرية وقيصرية، أيّ الأسفار مقبولة عند الجميع، وأعطى أثناسيوس، الذي تكرّمه الكنيسة القبطية بوصفه البابا العشرين للإسكندرية، في رسالته الفصحية لسنة ٣٦٧م قائمة أسفار العهد الجديد السبعة والعشرين وحذّر شعبه من الكتابات المختلقة. وقد حفظت الكنيسة القبطية هذه القائمة.',
      'وجواب «لماذا هذه الأسفار» في الكنيسة القبطية تقدمه حياة الكنيسة نفسها: فالإنجيل يُقرأ وقوفًا في كل ليتورجيا، والرسائل وأعمال الرسل تُقرأ في البولس والكاثوليكون والإبركسيس، وتُنسج ترانيم الكنيسة وصلواتها منها. فالكتاب يُتسلَّم داخل هذه الحياة لا بمعزل عنها.',
    ],
  },
  disputed: {
    en: [
      'Disputed among historians: the date of the Muratorian fragment, the date and authorship of 2 Peter and some other books, the weight of apostolic connection as against use and doctrine, and whether early Christianity was as varied as some propose.',
      'Disputed between traditions: the Old Testament list, and the status of a few books such as Revelation in some churches in the East.',
      'Not disputed in this article: that the churches gave reasons, that the core of the New Testament was in use early, and that no single act selected the books.',
    ],
    ar: [
      'مختلف عليه بين المؤرخين: تاريخ شذرة موراتوري، وتاريخ بطرس الثانية وتأليفها وتأليف بعض الأسفار الأخرى، ووزن الصلة الرسولية في مقابل الاستعمال والعقيدة، وهل كانت المسيحية المبكرة متنوعة كما يقترح بعضهم.',
      'مختلف عليه بين التقاليد: قائمة العهد القديم، ومكانة أسفار قليلة مثل الرؤيا في بعض الكنائس الشرقية.',
      'غير مختلف عليه في هذا المقال: أن الكنائس قدمت أسبابًا، وأن نواة العهد الجديد كانت مستعملة مبكرًا، وأنه لا فعل واحد اختار الأسفار.',
    ],
  },
  conclusion: {
    en: 'The books are in the Bible because the churches received them from the apostles’ circle, found them to agree with the faith they had been taught, and had long read them in worship. These tests were applied in practice, with discussion, and a few cases took generations to settle. That the Spirit guided the recognition is the Church’s confession, which the history describes and does not decide.',
    ar: 'الأسفار في الكتاب المقدس لأن الكنائس تسلّمتها من دائرة الرسل ووجدتها موافقة للإيمان الذي تعلّمته وقرأتها زمنًا طويلًا في العبادة. وقد طُبّقت هذه الاختبارات عمليًا مع نقاش، واحتاجت حالات قليلة أجيالًا لتُحسم. وأن الروح أرشد هذا الاعتراف اعتراف الكنيسة الذي يصفه التاريخ ولا يحسمه.',
  },
  furtherReading: ['S29', 'S22', 'S30'],
  related: ['who-chose-the-books', 'did-nicaea-choose-the-bible', 'noncanonical-gospels', 'old-testament-canons-differ', 'coptic-deuterocanon', 'why-inspired'],
};
