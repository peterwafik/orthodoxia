import type { Article } from '../types.ts';

export const article: Article = {
  id: 'who-chose-the-books',
  questionId: 'who-chose-the-books',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article asks who decided which books belong in the Bible. It describes, as a matter of history, how the New Testament and the Old Testament came to have the shapes they have in the churches; it shows why there is no single council that “chose” the books; and it explains how the Coptic Orthodox Church receives its Scriptures, including the deuterocanonical books. It keeps the historical process apart from the theological claim that the Church recognised, and did not create, Scripture.',
    ar: 'يسأل هذا المقال: من الذي قرر أي الأسفار تدخل في الكتاب المقدس؟ فيصف تاريخيًا كيف اتخذ العهد الجديد والعهد القديم الشكلين اللذين لهما في الكنائس؛ ويبين لماذا لا يوجد مجمع واحد «اختار» الأسفار؛ ويشرح كيف تتسلم الكنيسة القبطية الأرثوذكسية كتبها المقدسة، بما فيها الأسفار القانونية الثانية. ويُبقي العملية التاريخية منفصلة عن الدعوى اللاهوتية بأن الكنيسة اعترفت بالكتاب المقدس ولم تُنشئه.',
  },
  shortAnswer: {
    en: 'No emperor or council chose the books. The Church received them. The Gospels and the letters of St Paul the Apostle were being copied, read in worship and quoted in the churches long before anyone wrote a list, and the Church came to know her Scriptures as she heard them read in the liturgy and found in them the faith of the apostles. The Council of Nicaea (AD 325) did not decide the canon. When St Athanasius of Alexandria listed exactly the twenty-seven New Testament books in his Easter letter of AD 367, he was naming what the churches already read. The Coptic Orthodox Church receives these books, and the Old Testament as the early Church read it in Greek, including the deuterocanonical books. The Holy Spirit who inspired the writers guided the Church to recognise their work.',
    ar: 'لم يختر الأسفار إمبراطور ولا مجمع، بل تسلّمتها الكنيسة. فقد كانت الأناجيل ورسائل القديس بولس الرسول تُنسخ وتُقرأ في العبادة وتُقتبس في الكنائس قبل أن يكتب أحد قائمة بزمن طويل، وعرفت الكنيسة كتبها المقدسة وهي تسمعها تُقرأ في القداس وتجد فيها إيمان الرسل. ومجمع نيقية (٣٢٥م) لم يقرر القانون. وحين ذكر القديس أثناسيوس السكندري أسفار العهد الجديد السبعة والعشرين بالضبط في رسالته الفصحية سنة ٣٦٧م، كان يسمّي ما كانت الكنائس تقرؤه من قبل. وتتسلم الكنيسة القبطية الأرثوذكسية هذه الأسفار، والعهد القديم كما قرأته الكنيسة الأولى باليونانية، ومنه الأسفار القانونية الثانية. والروح القدس الذي أوحى إلى الكتّاب هو الذي أرشد الكنيسة إلى الاعتراف بكتاباتهم.',
  },
  quickPoints: {
    en: [
      'No council “chose” the Bible. The books were used, copied and read in worship, and the lists of the fourth century recorded what the churches had long received.',
      'The Council of Nicaea (AD 325) did not decide the canon; that claim is a modern myth. Its business was the dispute about Arius, the date of Easter and church order.',
      'St Athanasius’ Festal Letter of AD 367 lists exactly the twenty-seven books of the New Testament.',
      'The four Gospels, Acts and the main letters of St Paul were read in worship from very early; the discussion of later centuries concerned only a few shorter books at the edges.',
      'The Coptic Orthodox Church receives the Old Testament as the early Church read it in Greek, including the deuterocanonical books.',
      'The Church did not create Scripture. Guided by the Holy Spirit, she recognised the books that God had given her.',
    ],
    ar: [
      'لم «يختر» مجمع الكتاب المقدس. فقد استُعملت الأسفار ونُسخت وقُرئت في العبادة، وسجّلت قوائم القرن الرابع ما كانت الكنائس قد تسلّمته منذ زمن طويل.',
      'مجمع نيقية (٣٢٥م) لم يقرر القانون؛ وهذه الدعوى خرافة حديثة. وكان شغله الخلاف حول آريوس وموعد الفصح والنظام الكنسي.',
      'تذكر رسالة القديس أثناسيوس الفصحية سنة ٣٦٧م أسفار العهد الجديد السبعة والعشرين بالضبط.',
      'كانت الأناجيل الأربعة وأعمال الرسل ورسائل القديس بولس الرئيسية تُقرأ في العبادة منذ وقت مبكر جدًا؛ ولم يتناول النقاش في القرون اللاحقة إلا أسفارًا قصيرة قليلة على الأطراف.',
      'تتسلم الكنيسة القبطية الأرثوذكسية العهد القديم كما قرأته الكنيسة الأولى باليونانية، ومنه الأسفار القانونية الثانية.',
      'لم تُنشئ الكنيسة الكتاب المقدس. بل اعترفت، بإرشاد الروح القدس، بالأسفار التي أعطاها الله لها.',
    ],
  },
  argumentTypes: ['historical', 'textual', 'theological'],
  assessment: {
    label: 'supported_disputed_details',
    explanation: {
      en: 'That the canon formed gradually, through use, without a single deciding council, is well supported. The details of when particular books were accepted in each region, and how to read the early lists, are disputed. The Church’s claim that it recognised Scripture by the guidance of the Holy Spirit is a theological interpretation of this history.',
      ar: 'إن تكوّن القانون تدريجيًا بالاستعمال، دون مجمع واحد يقرره، أمر مسنود جيدًا. أما تفاصيل متى قُبل كل سفر في كل منطقة وكيف تُقرأ القوائم المبكرة فمختلف فيها. وقول الكنيسة إنها اعترفت بالكتاب المقدس بإرشاد الروح القدس تفسير لاهوتي لهذا التاريخ.',
    },
  },

  whyExamine: {
    en: [
      'Questions about who chose the books are often raised with a suspicion: that powerful men in a council picked what suited them, and buried the rest. A reader who has heard this deserves an answer based on what the sources show, not a reply that avoids the story.',
      'The real history is simpler and more beautiful. It is a story of books circulating among the churches, being read aloud at the Eucharist, quoted by bishops and martyrs, and treasured. A few shorter books were discussed in some regions for a time, and the Church weighed them carefully before receiving them everywhere.',
      'The question also bears on how Christians understand Scripture. The canon is not a committee’s invention. It is the Church’s recognition of what she had received from the apostles and prophets, and that recognition rests on the same Holy Spirit who inspired the books.',
    ],
    ar: [
      'كثيرًا ما يُطرح سؤال «من اختار الأسفار» مصحوبًا بريبة: أن رجالًا أقوياء في مجمع انتقوا ما يوافقهم ودفنوا الباقي. ومن سمع ذلك يستحق جوابًا مبنيًا على ما تُظهره المصادر، لا ردًّا يتحاشى القصة.',
      'والتاريخ الحقيقي أبسط وأجمل. إنه قصة أسفار تنتقل بين الكنائس، وتُقرأ بصوت عال في الإفخارستيا، ويقتبسها الأساقفة والشهداء، ويُعتز بها. ونوقشت أسفار قصيرة قليلة في بعض الأقاليم زمنًا، ووزنتها الكنيسة بعناية قبل أن تتسلمها في كل مكان.',
      'والمسألة تمس أيضًا فهم المسيحيين للكتاب المقدس. فالقانون ليس اختراع لجنة، بل هو اعتراف الكنيسة بما تسلّمته من الرسل والأنبياء، وهذا الاعتراف يقوم على الروح القدس نفسه الذي أوحى بالأسفار.',
    ],
  },
  background: {
    en: [
      'The word “canon” means a rule or list. In this context it is the list of books that a community receives as Scripture. Different communities have different lists: the Hebrew Bible, the Protestant Old Testament, the larger Old Testament of Catholic and Orthodox churches, and so on. The New Testament of twenty-seven books is shared by nearly all Christian churches.',
      'The early churches had their Scriptures first in the books of Israel, which they read mostly in Greek, in the translation known as the Septuagint. The Gospels and letters came later. The preface of St Luke the Evangelist, read as an ancient text, says that many had already undertaken to write accounts of Jesus, so there were more writings in circulation than the four we have. By the second century the four Gospels were widely read, and St Paul’s letters were collected and circulated.',
      'Between the second and fourth centuries, writers and bishops gave opinions on the books. They used phrases for books that were accepted everywhere, books that were disputed and books that were rejected. The pattern was that a core was accepted early and widely, and a small number of books (among them some of the shorter letters and Revelation) were questioned in some regions for a long time.',
      'The fourth century is when lists begin to appear that match the later canon. In AD 367 Athanasius, bishop of Alexandria, wrote an Easter letter (the thirty-ninth of his Festal Letters) in which he lists the books of the Old Testament and exactly the twenty-seven books of the New. It is often cited as the first surviving list that matches ours in the New Testament. Regional councils of the North African church later in the century also issued lists, but their authority was local, and they dealt with the question in the context of their own churches.',
    ],
    ar: [
      'كلمة «القانون» تعني قاعدة أو قائمة، وهي هنا قائمة الأسفار التي تتسلمها جماعة بوصفها كتابًا مقدسًا. وللجماعات المختلفة قوائم مختلفة: الكتاب العبري، والعهد القديم البروتستانتي، والعهد القديم الأوسع في الكنائس الكاثوليكية والأرثوذكسية، وهكذا. أما العهد الجديد بأسفاره السبعة والعشرين فتشترك فيه تقريبًا كل الكنائس المسيحية.',
      'كانت كتب الكنائس الأولى في البدء أسفار إسرائيل، التي قرأوها في الغالب باليونانية في الترجمة المعروفة بالسبعينية. ثم جاءت الأناجيل والرسائل. وتقول مقدمة القديس لوقا الإنجيلي، حين تُقرأ نصًا قديمًا، إن كثيرين أخذوا من قبل في تأليف روايات عن يسوع، فكان في التداول كتابات أكثر من الأربعة التي بين أيدينا. وبحلول القرن الثاني كانت الأناجيل الأربعة تُقرأ على نطاق واسع، وكانت رسائل القديس بولس تُجمع وتُتداول.',
      'وبين القرنين الثاني والرابع أبدى كتّاب وأساقفة آراءهم في الأسفار. واستعملوا عبارات للأسفار المقبولة في كل مكان، وللأسفار المتنازع عليها، وللأسفار المرفوضة. وكان النمط أن نواة قُبلت مبكرًا وعلى نطاق واسع، وأن عددًا قليلًا من الأسفار (منها بعض الرسائل القصيرة وسفر الرؤيا) ظل موضع سؤال في بعض الأقاليم زمنًا طويلًا.',
      'والقرن الرابع هو الذي بدأت فيه تظهر قوائم تطابق القانون اللاحق. ففي سنة ٣٦٧م كتب أثناسيوس، أسقف الإسكندرية، رسالة فصحية (هي التاسعة والثلاثون من رسائله الفصحية) يذكر فيها أسفار العهد القديم وأسفار العهد الجديد السبعة والعشرين بالضبط. وكثيرًا ما يُستشهد بها بوصفها أول قائمة باقية تطابق قائمتنا في العهد الجديد. وأصدرت مجامع إقليمية في كنيسة شمال أفريقيا لاحقًا في القرن قوائم كذلك، لكن سلطتها كانت محلية، وعالجت المسألة في سياق كنائسها.',
    ],
  },
  glossary: ['canon', 'deuterocanon', 'septuagint', 'masoretic-text', 'codex', 'manuscript', 'tradition', 'inspiration', 'dead-sea-scrolls', 'gospel'],

  claims: [
    {
      id: 'C1',
      proposition: {
        en: 'The New Testament took shape gradually, through the use and reception of its books in the churches, and not by the decision of one person or council.',
        ar: 'تشكل العهد الجديد تدريجيًا، باستعمال أسفاره وقبولها في الكنائس، لا بقرار شخص واحد أو مجمع واحد.',
      },
      argumentType: 'historical',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The early evidence shows writings being read in worship and cited as Scripture long before any list. Justin Martyr, around AD 150, describes the memoirs of the apostles being read at the Sunday gathering beside the prophets. F. F. Bruce’s study of the canon sets out this same picture: the lists recognised what use had already established.',
        ar: 'تُظهر الشواهد المبكرة كتابات تُقرأ في العبادة وتُقتبس كتابًا مقدسًا قبل أي قائمة بزمن طويل. فيوستينوس الشهيد، نحو سنة ١٥٠م، يصف قراءة مذكرات الرسل في اجتماع يوم الأحد إلى جانب الأنبياء. ودراسة ف. ف. بروس للقانون تعرض الصورة نفسها: القوائم اعترفت بما رسّخه الاستعمال من قبل.',
      },
      limits: {
        en: 'Bruce is cited as a whole work and as a Christian scholar’s account. The site has not read his chapters, and does not report his details.',
        ar: 'يُستشهد ببروس عملًا كاملًا وروايةَ باحث مسيحي. ولم يقرأ الموقع فصوله ولا ينقل تفاصيله.',
      },
      evidence: ['E2', 'E4', 'E5'],
    },
    {
      id: 'C2',
      proposition: {
        en: 'The Council of Nicaea (AD 325) did not decide the biblical canon.',
        ar: 'لم يقرر مجمع نيقية (٣٢٥م) قانون الكتاب المقدس.',
      },
      argumentType: 'historical',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The known business of Nicaea was the dispute about Arius, the date of Easter and some matters of church order. Neither the creed of the council nor its surviving canons contains a list of Scripture, and the first well-known list of the whole New Testament comes more than forty years afterwards. The story that Nicaea chose the Bible has no basis in the record.',
        ar: 'كان شغل نيقية المعروف الخلاف حول آريوس وموعد الفصح وبعض أمور النظام الكنسي. ولا يحتوي قانون إيمان المجمع ولا قوانينه الباقية على قائمة بالكتب المقدسة، وتأتي أول قائمة معروفة بالعهد الجديد كله بعد أكثر من أربعين سنة. فقصة أن نيقية اختارت الكتاب المقدس لا أساس لها في السجل.',
      },
      limits: {
        en: 'The records of the council are incomplete, and an argument from silence cannot exclude every possibility. It is, however, the consensus of the standard accounts of the period that Nicaea did not rule on the canon.',
        ar: 'سجلات المجمع ناقصة، والحجة من الصمت لا تستبعد كل احتمال. لكن الروايات المعتمدة عن الفترة تجمع على أن نيقية لم تحكم في القانون.',
      },
      evidence: ['E2'],
    },
    {
      id: 'C3',
      proposition: {
        en: 'By the fourth century the whole New Testament as we have it was being copied and listed in the churches.',
        ar: 'بحلول القرن الرابع كان العهد الجديد كله كما نعرفه يُنسخ ويُذكر في قوائم الكنائس.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'Codex Sinaiticus, a great fourth-century Bible, contains all twenty-seven books of the New Testament, followed by two other early Christian writings. In the same century St Athanasius listed exactly the twenty-seven books. The New Testament the Church reads today is the one she was reading then.',
        ar: 'يضم مخطوط سيناء، وهو كتاب مقدس عظيم من القرن الرابع، أسفار العهد الجديد السبعة والعشرين كلها، ويلحق بها كتابين مسيحيين مبكرين آخرين. وفي القرن نفسه ذكر القديس أثناسيوس الأسفار السبعة والعشرين بالضبط. فالعهد الجديد الذي تقرؤه الكنيسة اليوم هو الذي كانت تقرؤه آنذاك.',
      },
      limits: {
        en: 'It is debated whether the extra books in Sinaiticus mean that its makers counted them as Scripture, or only as useful reading. The site has used the project’s own description and has not examined the manuscript.',
        ar: 'يُختلف هل يعني وجود الكتب الزائدة في مخطوط سيناء أن صانعيه عدّوها كتابًا مقدسًا أم قراءة نافعة فقط. وقد استعمل الموقع وصف المشروع نفسه ولم يفحص المخطوط.',
      },
      evidence: ['E1'],
    },
    {
      id: 'C4',
      proposition: {
        en: 'The Old Testament canon is not the same across Jewish and Christian communities, and this difference has a history that goes back before Christianity.',
        ar: 'قانون العهد القديم ليس واحدًا عبر الجماعات اليهودية والمسيحية، ولهذا الاختلاف تاريخ يرجع إلى ما قبل المسيحية.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'Greek and Hebrew traditions of the Scriptures circulated side by side before Christ, and the Septuagint, the Greek Bible of the Jews of Alexandria, contained books that are not in the Hebrew Bible. The early Church, which read the Old Testament mainly in Greek, received the Septuagint with those books.',
        ar: 'تداولت التقاليد اليونانية والعبرية للأسفار جنبًا إلى جنب قبل المسيح، وتضم السبعينية، وهي الكتاب اليوناني ليهود الإسكندرية، أسفارًا ليست في الكتاب العبري. والكنيسة الأولى، التي قرأت العهد القديم أساسًا باليونانية، تسلّمت السبعينية بهذه الأسفار.',
      },
      limits: {
        en: 'The lists of the Jewish community were fixed by later rabbinic tradition, and the Greek Bibles of the fourth century, such as Sinaiticus, show how the Christian list was still taking shape.',
        ar: 'ثبّت التقليد الحاخامي لاحقًا قوائم الجماعة اليهودية، وتُظهر الكتب المقدسة اليونانية في القرن الرابع، مثل مخطوط سيناء، أن القائمة المسيحية كانت ما تزال تتشكل.',
      },
      evidence: ['E1'],
    },
    {
      id: 'C5',
      proposition: {
        en: 'The Church recognised the books of Scripture that were already given to it through the Holy Spirit; it did not create them.',
        ar: 'اعترفت الكنيسة بأسفار الكتاب المقدس التي كانت قد أُعطيت لها بالروح القدس؛ ولم تُنشئها.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'The books’ authority was perceived in the life and worship of the Church, as a child recognises a parent’s voice. That is why the lists came after the use: the Church was naming what she already knew. The history fits exactly the Church’s own account of it.',
        ar: 'أُدرك سلطان الأسفار في حياة الكنيسة وعبادتها، كما يعرف الطفل صوت أبيه. ولهذا جاءت القوائم بعد الاستعمال: فالكنيسة كانت تسمّي ما تعرفه من قبل. والتاريخ يطابق تمامًا رواية الكنيسة عنه.',
      },
      limits: {
        en: 'It cannot be tested by historical method alone; it is a statement of faith about the Church and Scripture.',
        ar: 'لا يمكن اختباره بالمنهج التاريخي وحده؛ فهو بيان إيمان عن الكنيسة والكتاب المقدس.',
      },
      evidence: ['E2', 'E5'],
    },
  ],

  evidence: [
    {
      id: 'E1',
      sourceId: 'S22',
      locator: 'Codex Sinaiticus Project, significance page (contents of the manuscript)',
      role: 'context',
      states: {
        en: 'The Codex Sinaiticus Project describes a fourth-century Bible manuscript, whose contents include books beyond the later canon. As the project’s materials describe it, the New Testament portion contains the twenty-seven books we know and is followed by the Epistle of Barnabas and a part of the Shepherd of Hermas. The Old Testament portion, as far as it survives, includes books such as Tobit, Judith, Wisdom and Sirach.',
        ar: 'يصف مشروع مخطوط سيناء كتابًا مقدسًا مخطوطًا من القرن الرابع، تتضمن محتوياته أسفارًا خارج القانون اللاحق. وكما تصف مواد المشروع، يضم قسم العهد الجديد الأسفار السبعة والعشرين المعروفة ويتبعه رسالة برنابا وجزء من راعي هرماس. ويشمل قسم العهد القديم، بقدر ما بقي منه، أسفارًا مثل طوبيا ويهوديت والحكمة وسيراخ.',
      },
      inference: {
        en: 'The manuscript shows that a large and carefully made Bible of the fourth century held a collection that was close to, but not identical with, the later one. It is a witness to the state of affairs, but it does not tell us why its makers included the extra works, or whether they treated them as Scripture.',
        ar: 'يُظهر المخطوط أن كتابًا مقدسًا كبيرًا متقن الصنع من القرن الرابع ضم مجموعة قريبة من المجموعة اللاحقة لكنها غير مطابقة لها. وهو شاهد على الحال، لكنه لا يخبرنا لماذا أدرج صانعوه الأعمال الزائدة، ولا هل عدّوها كتابًا مقدسًا.',
      },
    },
    {
      id: 'E2',
      sourceId: 'S29',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'F. F. Bruce’s The Canon of Scripture is a historical study of how the biblical canon formed. Its overall thesis is that the canon grew through the use of the books in the churches, and that the later lists and councils recognised what had come to be accepted instead of creating it.',
        ar: 'كتاب «قانون الكتاب المقدس» لـ ف. ف. بروس دراسة تاريخية لكيفية تكوّن القانون الكتابي. وأطروحته العامة أن القانون نما باستعمال الأسفار في الكنائس، وأن القوائم والمجامع اللاحقة اعترفت بما استقر قبوله ولم تُنشئه.',
      },
      inference: {
        en: 'This is the main secondary source used in this article for the “gradual recognition” picture. The author is a Christian scholar, which is noted; the historical picture is also found in other standard accounts, but these are not catalogued on the site. The book has not been read for this site.',
        ar: 'هذا هو المصدر الثانوي الرئيسي المستعمل في هذا المقال لصورة «الاعتراف التدريجي». والمؤلف باحث مسيحي، وهذا مُشار إليه؛ والصورة التاريخية واردة أيضًا في عروض معتمدة أخرى لكنها غير مفهرسة في الموقع. ولم يُقرأ الكتاب لأجل الموقع.',
      },
    },
    {
      id: 'E4',
      sourceId: 'S62',
      locator: '2 Peter 3:15–16',
      role: 'context',
      states: {
        en: 'St Peter the Apostle, in his second letter, refers to the letters of “our beloved brother St Paul”, says that some things in them are hard to understand and are twisted by the ignorant, as they twist the “other scriptures” too.',
        ar: 'يشير القديس بطرس الرسول في رسالته الثانية إلى رسائل «أخينا الحبيب القديس بولس»، ويقول إن فيها أشياء عسرة الفهم يحرّفها الجهال، كما يحرّفون «بقية الكتب» أيضًا.',
      },
      inference: {
        en: 'The passage suggests that St Paul’s letters were already gathered, widely known, and set beside other Scriptures when it was written. But the date of 2 Peter is itself debated (some place it late in the first century, others in the second), so it is an early sign of the process and not a fixed point.',
        ar: 'توحي الفقرة بأن رسائل القديس بولس كانت قد جُمعت وعُرفت على نطاق واسع ووُضعت إلى جانب كتب مقدسة أخرى حين كُتبت. لكن تاريخ رسالة بطرس الثانية نفسه موضع جدل (يضعها بعضهم في أواخر القرن الأول وآخرون في القرن الثاني)، فهي علامة مبكرة على العملية لا نقطة ثابتة.',
      },
      bible: { book: '2-peter', chapter: 3, verse: '15-16' },
    },
    {
      id: 'E5',
      sourceId: 'S50',
      locator: 'First Apology 66–67',
      role: 'supports',
      states: {
        en: 'Justin Martyr says that the apostles in the records they composed, called Gospels, handed down what Jesus commanded at the supper. He describes the Sunday gathering at which the “memoirs of the apostles” or the writings of the prophets are read for as long as time allows.',
        ar: 'يقول يوستينوس الشهيد إن الرسل في المذكرات التي ألّفوها، والتي تسمى أناجيل، سلّموا ما أوصى به يسوع في العشاء. ويصف اجتماع يوم الأحد الذي تُقرأ فيه «مذكرات الرسل» أو كتابات الأنبياء ما سمح الوقت.',
      },
      inference: {
        en: 'About AD 150–155 in Rome, writings called Gospels were read in worship on a level with the prophets. Justin gives no list and does not name the Gospels in these passages, so we cannot say which ones he meant. The evidence is of use in worship, which is how the canon grew, and not of a decision about limits.',
        ar: 'نحو ١٥٠–١٥٥م في روما كانت كتابات تسمى أناجيل تُقرأ في العبادة على قدم المساواة مع الأنبياء. ولا يعطي يوستينوس قائمة ولا يسمّي الأناجيل في هذه الفقرات، فلا نستطيع القول أيها قصد. والشاهد على الاستعمال في العبادة، وهكذا نما القانون، لا على قرار بشأن الحدود.',
      },
    },
  ],

  objections: [
    {
      id: 'O1',
      statement: {
        en: 'Powerful bishops, and the emperor Constantine, chose the books that suited the Church’s politics, and suppressed the rest. The canon is the result of the winners’ choices.',
        ar: 'اختار أساقفة أقوياء، والإمبراطور قسطنطين، الأسفار التي توافق سياسة الكنيسة، وكبتوا الباقي. فالقانون نتيجة اختيارات المنتصرين.',
      },
      response: {
        en: [
          'The sources do not show an imperial decision about the books. The best-known report of Constantine in this connection is from Eusebius, who says the emperor asked for copies of the Scriptures to be made for the churches of Constantinople. That is a commission to copy, not a choice of contents.',
          'The Gospels and St Paul’s letters were read in worship in the second century, when the Church was a persecuted minority with no emperor on her side and nothing political to gain. The books were received because they carried the apostles’ faith, not because anyone in power imposed them. Writings that taught another faith were set aside by the churches themselves, as shepherds guard a flock.',
        ],
        ar: [
          'لا تُظهر المصادر قرارًا إمبراطوريًا بشأن الأسفار. وأشهر خبر عن قسطنطين في هذا الشأن عند أوسابيوس، الذي يقول إن الإمبراطور طلب نسخ كتب مقدسة لكنائس القسطنطينية. وهذا تكليف بالنسخ لا اختيار للمحتوى.',
          'فقد كانت الأناجيل ورسائل القديس بولس تُقرأ في العبادة في القرن الثاني، والكنيسة أقلية مضطهدة لا إمبراطور معها ولا مكسب سياسي لها. وقُبلت الأسفار لأنها حملت إيمان الرسل، لا لأن صاحب سلطة فرضها. أما الكتابات التي علّمت إيمانًا آخر فقد نحّتها الكنائس نفسها، كما يحرس الرعاة القطيع.',
        ],
      },
      limits: {
        en: 'This answer does not show that every judgement of the early church was right, only that the process was not what the objection describes.',
        ar: 'لا يُثبت هذا الجواب أن كل أحكام الكنيسة الأولى كانت صائبة، بل فقط أن العملية لم تكن كما يصفها الاعتراض.',
      },
      evidence: ['E2', 'E5'],
    },
    {
      id: 'O2',
      statement: {
        en: 'If the lists were fixed in the fourth century, then the canon is a late human product. Codex Sinaiticus includes books that later Christians dropped, which shows that no one knew what Scripture was until the fourth century.',
        ar: 'إن كانت القوائم قد ثبتت في القرن الرابع، فالقانون نتاج بشري متأخر. ومخطوط سيناء يضم أسفارًا حذفها المسيحيون لاحقًا، مما يدل على أن أحدًا لم يكن يعرف ما هو الكتاب المقدس قبل القرن الرابع.',
      },
      response: {
        en: [
          'A list written down late does not mean a canon formed late. The heart of the New Testament, the four Gospels, Acts and the main letters of St Paul, was read in worship and quoted as Scripture from the second century. The Church knew her Scriptures long before she needed to write them in a list.',
          'Sinaiticus is a single manuscript. It contains every book of our New Testament, and adding two other edifying writings at the end is not the same as counting them Scripture. A single codex does not show that the Church was ignorant of her own books.',
        ],
        ar: [
          'تدوين القائمة متأخرًا لا يعني أن القانون تكوّن متأخرًا. فقلب العهد الجديد، أي الأناجيل الأربعة وأعمال الرسل ورسائل القديس بولس الرئيسية، كان يُقرأ في العبادة ويُقتبس كتابًا مقدسًا منذ القرن الثاني. وكانت الكنيسة تعرف كتبها المقدسة قبل أن تحتاج إلى كتابتها في قائمة بزمن طويل.',
          'ومخطوط سيناء نسخة واحدة. وهو يضم كل أسفار عهدنا الجديد، وإلحاق كتابين نافعين آخرين في آخره ليس كعدّهما كتابًا مقدسًا. ومخطوط واحد لا يبيّن أن الكنيسة كانت تجهل أسفارها.',
        ],
      },
      limits: {
        en: 'The statement that a core was in use early is itself an inference from several early writers, and the exact extent of the core in each region is discussed by scholars.',
        ar: 'والقول إن نواة كانت مستعملة مبكرًا استنتاج من عدة كتّاب مبكرين، ويناقش الباحثون امتداد النواة بالضبط في كل إقليم.',
      },
      evidence: ['E1', 'E5'],
    },
    {
      id: 'O3',
      statement: {
        en: 'The Old Testament of Catholics, Orthodox and Copts is bigger than the Hebrew Bible and the Protestant Old Testament. The deuterocanonical books were added later, and the Protestant, shorter list is the original one.',
        ar: 'العهد القديم عند الكاثوليك والأرثوذكس والأقباط أكبر من الكتاب العبري ومن العهد القديم البروتستانتي. فالأسفار القانونية الثانية أُضيفت لاحقًا، والقائمة البروتستانتية الأقصر هي الأصل.',
      },
      response: {
        en: [
          'The deuterocanonical books were not added later; they were there from the start of the Church’s reading. The early Church read the Old Testament mainly in Greek, in the Septuagint, which already contained these books before Christ. The great fourth-century Greek Bibles, such as Sinaiticus, include books like Tobit, Judith, Wisdom and Sirach.',
          'It was in the sixteenth century that the Protestant churches went back to the shorter Hebrew list. The Coptic Orthodox Church, with the other Orthodox churches, simply kept the Old Testament she had always read in her worship. The longer list is the older Christian Bible, not a later addition to it.',
        ],
        ar: [
          'لم تُضف الأسفار القانونية الثانية لاحقًا؛ بل كانت حاضرة منذ بداية قراءة الكنيسة. فقد قرأت الكنيسة الأولى العهد القديم أساسًا باليونانية، في السبعينية، التي كانت تضم هذه الأسفار قبل المسيح. والكتب المقدسة اليونانية الكبرى في القرن الرابع، مثل مخطوط سيناء، تضم أسفارًا كطوبيا ويهوديت والحكمة وسيراخ.',
          'وفي القرن السادس عشر عادت الكنائس البروتستانتية إلى القائمة العبرية الأقصر. أما الكنيسة القبطية الأرثوذكسية، مع سائر الكنائس الأرثوذكسية، فقد حفظت ببساطة العهد القديم الذي قرأته دائمًا في عبادتها. فالقائمة الأطول هي الكتاب المقدس المسيحي الأقدم، لا إضافة لاحقة إليه.',
        ],
      },
      limits: {
        en: 'The history explains why the lists differ. It does not decide which list is theologically correct, which is a question for each tradition’s own authority.',
        ar: 'يفسّر التاريخ لماذا تختلف القوائم. ولا يحسم أي القوائم صحيحة لاهوتيًا، وهذا شأن سلطة كل تقليد.',
      },
      evidence: ['E1'],
    },
    {
      id: 'O4',
      statement: {
        en: 'If the Church recognised Scripture, what does it rest on? A circular argument is involved: the Church’s authority establishes the books, and the books establish the Church’s authority.',
        ar: 'إن كانت الكنيسة قد اعترفت بالكتاب المقدس فعلى ماذا يقوم ذلك؟ ففي الأمر دور: سلطان الكنيسة يثبت الأسفار، والأسفار تثبت سلطان الكنيسة.',
      },
      response: {
        en: [
          'There is no circle, because the Church and Scripture are not rivals. Both belong to the one life of the Church in the Holy Spirit. The apostles preached before they wrote, and the Church lived by their preaching before their letters were gathered. The books were not given authority by the vote of a council; they were received because the Church found in them the faith she had already been taught.',
          'A family does not prove a letter genuine by voting on it; it recognises the voice of the one who wrote. In the same way the Church recognised in these books the voice of her Lord and His apostles, and the same Spirit who inspired them opened her ears to hear it.',
        ],
        ar: [
          'لا دور هنا، لأن الكنيسة والكتاب ليسا خصمين، بل كلاهما من حياة الكنيسة الواحدة بالروح القدس. فقد كرز الرسل قبل أن يكتبوا، وعاشت الكنيسة بكرازتهم قبل أن تُجمع رسائلهم. ولم تنل الأسفار سلطانها بتصويت مجمع؛ بل قُبلت لأن الكنيسة وجدت فيها الإيمان الذي تعلمته من قبل.',
          'فالأسرة لا تثبت صحة رسالة بالتصويت عليها، بل تعرف صوت كاتبها. وهكذا عرفت الكنيسة في هذه الأسفار صوت ربها ورسله، والروح نفسه الذي أوحى بها فتح أذنيها لتسمعه.',
        ],
      },
      limits: {
        en: 'The answer does not reply to the critic on the critic’s own terms; it shows how a believer sees the relationship.',
        ar: 'لا يجيب هذا الجواب الناقد بمصطلحاته هو؛ بل يبيّن كيف يرى المؤمن العلاقة.',
      },
      evidence: ['E2'],
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'The history is clear. No single council or emperor chose the books. The Gospels and the main letters of St Paul were read in worship long before any list, and the fourth-century lists, St Athanasius’ above all, named what the churches had received. The story of a hidden political choice at Nicaea has no basis in the record.',
        'Where a few shorter books were discussed for a time in some regions, the Church took care, weighed them in the light of the apostolic faith, and received them. That care is itself a sign that she was not inventing Scripture but guarding it.',
      ],
      ar: [
        'التاريخ واضح. لا مجمع واحد ولا إمبراطور اختار الأسفار. فالأناجيل ورسائل القديس بولس الرئيسية كانت تُقرأ في العبادة قبل أي قائمة بزمن طويل، وقوائم القرن الرابع، وفي مقدمتها قائمة القديس أثناسيوس، سمّت ما كانت الكنائس قد تسلّمته. أما قصة اختيار سياسي خفي في نيقية فلا أساس لها في السجل.',
        'وحيث نوقشت أسفار قصيرة قليلة زمنًا في بعض الأقاليم، تأنّت الكنيسة ووزنتها في ضوء الإيمان الرسولي ثم تسلّمتها. وهذا التأني نفسه علامة على أنها لم تكن تخترع الكتاب المقدس بل تحرسه.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that the Holy Spirit who inspired the writers also guided the Church in receiving their books. On this view the Church did not make the books Scripture; it recognised them as the written witness of the apostolic faith that it already lived.',
        'This confession does not say that the process was free of human questions, discussion and disagreement. It says that, through that human history, the Church was led to receive what God had given.',
      ],
      ar: [
        'تعترف الكنيسة بأن الروح القدس الذي أوحى إلى الكتّاب هو نفسه الذي أرشد الكنيسة في قبول أسفارهم. وبحسب هذا الفهم لم تجعل الكنيسة الأسفار كتابًا مقدسًا؛ بل اعترفت بها شهادة مكتوبة للإيمان الرسولي الذي كانت تعيشه.',
        'ولا يقول هذا الاعتراف إن العملية خلت من الأسئلة والنقاش والخلاف البشري. بل يقول إن الكنيسة، عبر هذا التاريخ البشري، قيدت إلى قبول ما أعطاه الله.',
      ],
    },
  },
  coptic: {
    en: [
      'The Coptic Orthodox Church receives the twenty-seven books of the New Testament and an Old Testament in the Greek tradition that includes the deuterocanonical books, among them Tobit, Judith, Wisdom, Sirach and Baruch. They are read in the Church’s prayers and teaching as part of the Old Testament, and they are not treated as a lower class of text.',
      'The Church of Alexandria has its own place in the story. Athanasius, whom the Coptic Orthodox Church honours as the twentieth pope of Alexandria, wrote the Festal Letter of AD 367 that is often cited as the earliest list of the New Testament books as we have them. The Church of Alexandria also had, in the Septuagint, a Greek Old Testament in use from the earliest centuries.',
      'The Coptic understanding of Scripture is that it is read within the Tradition of the Church, in the liturgy, the Fathers and the daily prayers. For the Church the question “who chose the books” is therefore answered in terms of reception: the Church received what the apostles and prophets had given and recognised it in the Spirit.',
    ],
    ar: [
      'تتسلم الكنيسة القبطية الأرثوذكسية أسفار العهد الجديد السبعة والعشرين وعهدًا قديمًا في التقليد اليوناني يتضمن الأسفار القانونية الثانية، ومنها طوبيا ويهوديت والحكمة وسيراخ وباروخ. وتُقرأ في صلوات الكنيسة وتعليمها جزءًا من العهد القديم، ولا تُعامل نصوصًا من درجة أدنى.',
      'ولكنيسة الإسكندرية مكانها الخاص في القصة. فقد كتب أثناسيوس، الذي تكرمه الكنيسة القبطية الأرثوذكسية بوصفه بابا الإسكندرية العشرين، الرسالة الفصحية سنة ٣٦٧م التي يُستشهد بها كثيرًا بوصفها أقدم قائمة بأسفار العهد الجديد كما نعرفها. وكان لكنيسة الإسكندرية أيضًا عهد قديم يوناني، هو السبعينية، مستعمل منذ القرون الأولى.',
      'وفهم الكنيسة القبطية للكتاب المقدس أنه يُقرأ في تقليد الكنيسة، في الصلوات الطقسية والآباء والصلوات اليومية. ولذلك يُجاب عن سؤال «من اختار الأسفار» في الكنيسة بلغة القبول: تسلّمت الكنيسة ما أعطاه الرسل والأنبياء واعترفت به بالروح.',
    ],
  },
  disputed: {
    en: [
      'Disputed among historians: when each New Testament book reached the status it now has in each region; how to read the early lists, including whether some are lists of books accepted for reading or of books accepted as Scripture; whether the extra books in Codex Sinaiticus were counted as Scripture; and how fixed the Hebrew Bible’s limits were in the first century.',
      'Disputed between traditions: which Old Testament list is the right one. The Jewish community, Protestant churches, the Catholic Church, the Orthodox churches and the Coptic Orthodox Church hold different lists, and each defends its own on historical and theological grounds that this article does not weigh against one another.',
      'Not disputed in this article: that no single council or emperor chose the books, that the Council of Nicaea did not rule on the canon, and that the lists of the fourth century followed a long practice of use in worship.',
    ],
    ar: [
      'مختلف عليه بين المؤرخين: متى بلغ كل سفر من العهد الجديد المكانة التي له الآن في كل إقليم؛ وكيف تُقرأ القوائم المبكرة، ومنها هل هي قوائم أسفار مقبولة للقراءة أم أسفار مقبولة كتابًا مقدسًا؛ وهل عُدّت الأسفار الزائدة في مخطوط سيناء كتابًا مقدسًا؛ ومدى ثبات حدود الكتاب العبري في القرن الأول.',
      'مختلف عليه بين التقاليد: أي قائمة للعهد القديم هي الصحيحة. فالجماعة اليهودية والكنائس البروتستانتية والكنيسة الكاثوليكية والكنائس الأرثوذكسية والكنيسة القبطية الأرثوذكسية لها قوائم مختلفة، وكل منها يدافع عن قائمته لأسباب تاريخية ولاهوتية لا يوازن هذا المقال بينها.',
      'غير مختلف عليه في هذا المقال: أنه لا مجمع واحد ولا إمبراطور اختار الأسفار، وأن مجمع نيقية لم يحكم في القانون، وأن قوائم القرن الرابع تبعت ممارسة طويلة من الاستعمال في العبادة.',
    ],
  },
  conclusion: {
    en: 'The books of the Bible were not picked by a council or an emperor. They were read, copied and treasured in the churches from the apostolic age, and the fourth-century lists, such as St Athanasius’ Easter letter of AD 367, named what the Church had long received. The Coptic Orthodox Church keeps the Old Testament the early Church read, with the deuterocanonical books. The Holy Spirit who inspired the Scriptures led the Church to recognise them; she did not create her Bible, she received it.',
    ar: 'لم يختر أسفار الكتاب المقدس مجمع ولا إمبراطور. بل قُرئت ونُسخت وحُفظت بعناية في الكنائس منذ عصر الرسل، وسمّت قوائم القرن الرابع، مثل رسالة القديس أثناسيوس الفصحية سنة ٣٦٧م، ما كانت الكنيسة قد تسلّمته منذ زمن طويل. وتحفظ الكنيسة القبطية الأرثوذكسية العهد القديم الذي قرأته الكنيسة الأولى، بأسفاره القانونية الثانية. والروح القدس الذي أوحى بالكتب المقدسة قاد الكنيسة إلى الاعتراف بها؛ فهي لم تُنشئ كتابها المقدس، بل تسلّمته.',
  },
  furtherReading: ['S22', 'S29', 'S30'],
  related: ['why-these-books', 'did-nicaea-choose-the-bible', 'noncanonical-gospels', 'old-testament-canons-differ', 'coptic-deuterocanon', 'septuagint-and-masoretic'],
};
