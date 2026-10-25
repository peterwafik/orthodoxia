import type { Article } from '../types.ts';

export const article: Article = {
  id: 'arabic-and-english-translations',
  questionId: 'arabic-and-english-translations',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article asks how the Arabic and English Bibles that most readers hold relate to the Hebrew, Aramaic and Greek texts behind them. It describes the two translations offered in this site’s Bible reader, the Arabic Van Dyck and the English King James Version, says what a translation can and cannot carry over, and explains why the Coptic Church reads the Old Testament in the Greek tradition. It does not list variant readings; those are treated in the articles on the manuscripts.',
    ar: 'تسأل هذه المقالة كيف ترتبط الكتب المقدسة العربية والإنجليزية التي يقرأ بها معظم الناس بالنصوص العبرية والآرامية واليونانية التي تقف وراءها. وهي تصف الترجمتين المعروضتين في قارئ الكتاب المقدس بهذا الموقع، أي فاندايك العربية والنسخة الإنجليزية للملك جيمس، وتبيّن ما تستطيع الترجمة أن تنقله وما لا تستطيع، وتشرح لماذا تقرأ الكنيسة القبطية العهد القديم في التقليد اليوناني. ولا تعرض القراءات المتغايرة؛ فهذه موضوع المقالات عن المخطوطات.',
  },
  shortAnswer: {
    en: 'Neither the Van Dyck nor the King James Version is a translation of the other, and neither is the original. Both were made from the Hebrew and Greek texts available to their translators, in the nineteenth and the early seventeenth centuries. A translation always interprets, because languages do not match word for word, so careful readers compare translations and, where the point matters, ask what the Hebrew or Greek says. The Coptic Church’s Old Testament has long been read in the Greek tradition (the Septuagint), which is why its Psalms are numbered differently from most English Bibles and why it receives the deuterocanonical books.',
    ar: 'ليست فاندايك ترجمةً عن نسخة الملك جيمس ولا العكس، وليست أيٌّ منهما الأصل. فقد أُعدّت كلتاهما من النصوص العبرية واليونانية التي توافرت لمترجميهما، في القرن التاسع عشر وفي أوائل القرن السابع عشر. والترجمة تفسّر دائمًا لأن اللغات لا تتطابق كلمة بكلمة، ولذلك يقارن القارئ الحريص بين الترجمات، وحيث يهمّ الأمر يسأل ماذا يقول النص العبري أو اليوناني. وقد قُرئ العهد القديم في الكنيسة القبطية منذ زمن بعيد في التقليد اليوناني (السبعينية)، ولهذا يختلف ترقيم مزاميرها عن معظم الكتب المقدسة الإنجليزية ولهذا تتسلم الأسفار القانونية الثانية.',
  },
  quickPoints: {
    en: [
      'The Arabic Van Dyck (Beirut, 1865) and the English King James Version (1611, in the standard text of 1769) were each translated from the original languages, not from one another.',
      'A translation chooses between possible meanings; comparing two or three translations is the simplest way to see where a choice is being made.',
      'The Old Testament of the Coptic Church comes down in the Greek (Septuagint) tradition, so Psalm numbers and some wording differ from Bibles based on the Hebrew text.',
      'In the site’s reader the deuterocanonical books are present in both languages, but in the Arabic they come from a separate text, not from the Van Dyck itself.',
      'Differences between translations of the same text are usually small; larger differences come from different underlying texts, which the manuscript articles examine.',
    ],
    ar: [
      'تُرجمت فاندايك العربية (بيروت ١٨٦٥) ونسخة الملك جيمس الإنجليزية (١٦١١، في النص المعتمد لسنة ١٧٦٩) كلٌّ منهما عن اللغات الأصلية، لا إحداهما عن الأخرى.',
      'الترجمة تختار بين معانٍ ممكنة؛ والمقارنة بين ترجمتين أو ثلاث أيسر طريق لرؤية موضع الاختيار.',
      'جاء العهد القديم في الكنيسة القبطية في التقليد اليوناني (السبعينية)، فيختلف ترقيم المزامير وبعض الألفاظ عن الكتب المقدسة المبنية على النص العبري.',
      'الأسفار القانونية الثانية موجودة في القارئ باللغتين، لكنها في العربية مأخوذة من نص منفصل لا من فاندايك نفسها.',
      'الفروق بين ترجمات النص الواحد صغيرة في الغالب؛ أما الفروق الأكبر فمصدرها اختلاف النصوص التي تقوم عليها الترجمة، وتفحصها مقالات المخطوطات.',
    ],
  },
  argumentTypes: ['textual', 'historical'],
  assessment: {
    label: 'strong_historical_support',
    explanation: {
      en: 'That these translations were made from the original languages, that they differ in underlying text and method, and that the Greek Old Testament is the one the Coptic Church inherited are matters of record. How far any particular rendering is the best one is a judgement on which translators and churches differ.',
      ar: 'إن كون هاتين الترجمتين أُعدّتا عن اللغات الأصلية، وإنهما تختلفان في النص الذي تقومان عليه وفي المنهج، وإن العهد القديم اليوناني هو الذي ورثته الكنيسة القبطية، أمور مسجلة في التاريخ. أما مدى كون ترجمة بعينها لموضع ما هي الأفضل فحكم يختلف فيه المترجمون والكنائس.',
    },
  },

  whyExamine: {
    en: [
      'Most believers read Scripture in translation, and a reader who finds two Bibles saying slightly different things may wonder which one is true. The honest answer is that every translation is a faithful but limited bridge, and that the bridge can be checked.',
      'The question also matters for how a reader weighs claims that begin “the Bible says”. What a verse says in English or Arabic may depend on a translator’s choice, and knowing this keeps a reader from resting an argument on one word that another translation renders differently.',
    ],
    ar: [
      'يقرأ معظم المؤمنين الكتاب المقدس مترجمًا، ومن يجد كتابين مقدسين يقولان شيئين مختلفين قليلًا قد يتساءل أيهما الصحيح. والجواب الأمين أن كل ترجمة جسر أمين لكنه محدود، وأن هذا الجسر يمكن فحصه.',
      'والمسألة تهمّ أيضًا في وزن الأقوال التي تبدأ بعبارة «الكتاب يقول». فما تقوله آية بالعربية أو الإنجليزية قد يتوقف على اختيار مترجم، ومعرفة ذلك تمنع القارئ من بناء حجة على كلمة واحدة تترجمها ترجمة أخرى بشكل مختلف.',
    ],
  },
  background: {
    en: [
      'The Old Testament was written mostly in Hebrew, with parts of Ezra and Daniel in Aramaic, and the New Testament in Greek. Long before Christ the Hebrew Scriptures were being translated into Greek in Alexandria, and that Greek collection, the Septuagint, became the Bible of most early Christians, including the Church of Alexandria. The writers of the New Testament often quote the Old Testament in forms close to the Greek. The Coptic versions of the Bible (Sahidic and Bohairic) were in turn made in Egypt, and the Old Testament in them follows the Greek.',
      'Arabic versions of parts of Scripture circulated among Christians in Egypt and the East in the centuries after the Arab conquest, but the Bible most Arabic-speaking Christians know today is the translation begun by the American missionary Eli Smith and finished, after his death, by Cornelius Van Dyck, published in Beirut in 1865. It was made from the Hebrew and Greek, and it is the form of the Arabic Bible long read in Coptic churches. In its original form it carried the books of the Protestant Old Testament, which is why the deuterocanonical books reached Arabic readers in other editions.',
      'The King James Version was produced by a committee of English scholars and published in 1611, with the books of the Apocrypha in a separate section, and it was revised in minor ways until the standard text of 1769, which is the one in this site’s reader. Its New Testament follows the Greek text then in print, which later manuscript discoveries have refined, and which is why modern translations sometimes differ from it. Its English is that of the seventeenth century.',
      'The two translations also reflect different ideas of what a translation should do. A very literal rendering keeps the order and structure of the source and may sound strange; a freer rendering reads naturally and makes more of the interpretive choices for the reader. Neither is wrong in principle, and most translations sit somewhere between.',
    ],
    ar: [
      'كُتب العهد القديم في معظمه بالعبرية، مع أجزاء من عزرا ودانيال بالآرامية، وكُتب العهد الجديد باليونانية. وقبل المسيح بزمن طويل كانت الأسفار العبرية تُترجم إلى اليونانية في الإسكندرية، وصارت تلك المجموعة اليونانية، أي السبعينية، كتاب معظم المسيحيين الأوائل ومنهم كنيسة الإسكندرية. ويقتبس كتّاب العهد الجديد من العهد القديم كثيرًا بصيغ قريبة من اليونانية. أما الترجمتان القبطيتان (الصعيدية والبحيرية) فأُعدّتا في مصر، وعهدهما القديم يتبع اليونانية.',
      'تداولت ترجمات عربية لأجزاء من الكتاب بين مسيحيي مصر والمشرق في القرون التي تلت الفتح العربي، لكن الكتاب الذي يعرفه معظم المسيحيين الناطقين بالعربية اليوم هو الترجمة التي بدأها المرسل الأمريكي عالي سميث وأتمها بعد وفاته كرنيليوس فاندايك، ونُشرت في بيروت سنة ١٨٦٥. وقد أُعدّت عن العبرية واليونانية، وهي الصورة التي قُرئ بها الكتاب العربي زمنًا طويلًا في الكنائس القبطية. وكانت في صورتها الأصلية تضم أسفار العهد القديم البروتستانتي، ولهذا وصلت الأسفار القانونية الثانية إلى القارئ العربي في طبعات أخرى.',
      'أنتجت نسخة الملك جيمس لجنة من العلماء الإنجليز ونُشرت سنة ١٦١١ وفيها أسفار الأبوكريفا في قسم مستقل، ونُقّحت تنقيحات طفيفة حتى النص المعتمد لسنة ١٧٦٩ وهو المعروض في قارئ هذا الموقع. ويتبع عهدها الجديد النص اليوناني المطبوع حينئذ، وقد دقّقته اكتشافات المخطوطات اللاحقة، ولذلك تخالفها الترجمات الحديثة أحيانًا. ولغتها الإنجليزية هي لغة القرن السابع عشر.',
      'وتعكس الترجمتان أيضًا تصورين لما ينبغي أن تفعله الترجمة. فالترجمة الحرفية جدًا تحفظ ترتيب الأصل وتركيبه وقد تبدو غريبة؛ والترجمة الأحرّ تُقرأ بسلاسة وتتخذ عن القارئ قرارات تفسيرية أكثر. ولا خطأ في أيّ منهما من حيث المبدأ، ومعظم الترجمات بين الاثنتين.',
    ],
  },
  glossary: ['septuagint', 'masoretic-text', 'manuscript', 'textual-criticism', 'textual-variant', 'deuterocanon', 'canon'],

  claims: [
    {
      id: 'C1',
      proposition: {
        en: 'The Arabic Van Dyck and the English King James Version were each made from the original languages and are independent of each other.',
        ar: 'أُعدّت فاندايك العربية ونسخة الملك جيمس الإنجليزية كلٌّ منهما عن اللغات الأصلية، وهما مستقلتان إحداهما عن الأخرى.',
      },
      argumentType: 'historical',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'The history of both translations is well documented: the Smith–Van Dyck Bible was prepared in Beirut by missionaries working from Hebrew and Greek and published in 1865, and the King James committee worked in England from 1604 to 1611.',
        ar: 'تاريخ الترجمتين موثق جيدًا: فقد أُعدّ كتاب سميث وفاندايك في بيروت على يد مرسلين يعملون عن العبرية واليونانية ونُشر سنة ١٨٦٥، وعملت لجنة الملك جيمس في إنجلترا من سنة ١٦٠٤ إلى ١٦١١.',
      },
      limits: {
        en: 'Translators of any age consult earlier translations, so independence means independent sourcing, not the absence of any influence.',
        ar: 'يستعين المترجمون في كل عصر بترجمات سابقة، فالاستقلال يعني استقلال المصدر لا انعدام كل تأثير.',
      },
      evidence: ['E1', 'E2'],
    },
    {
      id: 'C2',
      proposition: {
        en: 'Passages read differently in different translations because of the translators’ choices and, sometimes, because of different underlying texts.',
        ar: 'تُقرأ بعض الفقرات بصورة مختلفة في الترجمات المختلفة بسبب اختيارات المترجمين، وأحيانًا بسبب اختلاف النصوص المصدرية.',
      },
      argumentType: 'textual',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'The numbering of the Psalms in the reader’s Septuagint edition differs from that of the Hebrew-based editions, and the same psalm can appear under two numbers. This is a visible consequence of two textual traditions.',
        ar: 'يختلف ترقيم المزامير في طبعة السبعينية بالقارئ عن الطبعات المبنية على العبرية، ويظهر المزمور الواحد برقمين. وهذا أثر ظاهر لتقليدين نصيين.',
      },
      limits: {
        en: 'The example shows that traditions differ. It does not say which reading is original in a disputed verse.',
        ar: 'يبيّن المثال أن التقليدين مختلفان، ولا يقول أيّ القراءتين هي الأصل في آية متنازع عليها.',
      },
      evidence: ['E3', 'E4', 'E5'],
    },
  ],

  evidence: [
    {
      id: 'E1',
      sourceId: 'S62',
      locator: 'Reader edition notes: King James Version with the Deuterocanon (1769 text) and Arabic Van Dyck (1865)',
      role: 'context',
      states: {
        en: 'The site’s reader describes its English edition as the 1769 King James Version with its Apocrypha, and its Arabic edition as the Smith and Van Dyck translation of 1865, with the deuterocanonical books supplied from a separate Arabic text.',
        ar: 'يصف قارئ الموقع طبعته الإنجليزية بأنها نسخة الملك جيمس لسنة ١٧٦٩ مع أبوكريفاها، وطبعته العربية بأنها ترجمة سميث وفاندايك لسنة ١٨٦٥ مع الأسفار القانونية الثانية مأخوذة من نص عربي منفصل.',
      },
      inference: {
        en: 'A reader who meets the deuterocanonical books in Arabic here is reading a different translation from the one that surrounds them. The wording of those books should not be assumed to match the Van Dyck’s style or its choices.',
        ar: 'من يقرأ الأسفار القانونية الثانية بالعربية هنا إنما يقرأ ترجمة غير التي تحيط بها. ولا ينبغي افتراض أن ألفاظها تطابق أسلوب فاندايك واختياراتها.',
      },
    },
    {
      id: 'E2',
      sourceId: 'S62',
      locator: 'Reader edition notes: Septuagint (Brenton) with the King James New Testament',
      role: 'context',
      states: {
        en: 'The reader also offers an English Septuagint edition, Brenton’s translation of 1851, which uses the Septuagint’s numbering of the Psalms, and it supplies Psalm 151 from Brenton because the King James Apocrypha does not contain it.',
        ar: 'يقدم القارئ أيضًا طبعة إنجليزية للسبعينية هي ترجمة برنتون لسنة ١٨٥١، وهي تعتمد ترقيم المزامير في السبعينية، ويأخذ المزمور ١٥١ من برنتون لأن أبوكريفا الملك جيمس لا تحتويه.',
      },
      inference: {
        en: 'The Greek Old Testament can be read in English beside the King James text, which lets a reader see the two traditions for themselves.',
        ar: 'يمكن قراءة العهد القديم اليوناني بالإنجليزية إلى جانب نص الملك جيمس، فيرى القارئ التقليدين بنفسه.',
      },
    },
    {
      id: 'E3',
      sourceId: 'S62',
      locator: 'Psalm 23 (Hebrew numbering; Psalm 22 in the Septuagint numbering)',
      role: 'context',
      states: {
        en: 'The psalm of the shepherd appears as Psalm 23 in the Hebrew-based editions of the reader and as Psalm 22 in the Septuagint edition, in the Agpeya’s numbering.',
        ar: 'يظهر مزمور الراعي في الطبعات المبنية على العبرية بالقارئ مزمورًا ٢٣، وفي طبعة السبعينية مزمورًا ٢٢ بحسب ترقيم الأجبية.',
      },
      inference: {
        en: 'The same text carries two numbers because the two traditions divide some psalms differently. This is a matter of numbering, not of a different psalm.',
        ar: 'يحمل النص الواحد رقمين لأن التقليدين يقسمان بعض المزامير تقسيمًا مختلفًا. وهذا فرق في الترقيم لا في المزمور.',
      },
      bible: { book: 'psalms', chapter: 23 },
    },
    {
      id: 'E4',
      sourceId: 'S28',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'context',
      states: {
        en: 'Emanuel Tov’s Textual Criticism of the Hebrew Bible surveys the Masoretic Text, the Septuagint and the Qumran manuscripts as the witnesses to the Hebrew Bible and explains how to weigh them.',
        ar: 'يستعرض كتاب إيمانويل توف «النقد النصي للكتاب العبري» النص الماسوري والسبعينية ومخطوطات قمران بوصفها شواهد على الكتاب العبري، ويشرح كيف توزن.',
      },
      inference: {
        en: 'It is cited for the general point that the Greek translation preserves a form of the text that differs from the Masoretic in places and that scholars treat it as a witness in its own right. No detail from the book is reported.',
        ar: 'يُستشهد به للنقطة العامة أن الترجمة اليونانية تحفظ صيغة من النص تخالف الماسوري في مواضع، وأن الباحثين يعدّونها شاهدًا قائمًا بذاته. ولا يُنقل أي تفصيل من الكتاب.',
      },
    },
    {
      id: 'E5',
      sourceId: 'S27',
      locator: 'whole work (thesis as the authors state it; chapter not cited)',
      role: 'context',
      states: {
        en: 'Metzger and Ehrman’s The Text of the New Testament is a standard account of how the Greek New Testament was copied, and how scholars establish the text from the manuscripts that survive.',
        ar: 'كتاب ميتزغر وإيرمان «نص العهد الجديد» عرض معتمد لكيفية نسخ العهد الجديد اليوناني وكيف يثبّت الباحثون النص من المخطوطات الباقية.',
      },
      inference: {
        en: 'It is cited to show that the Greek text behind a modern translation is the product of scholarly comparison of many manuscripts. That is a main reason newer translations sometimes differ from the King James Version in the New Testament.',
        ar: 'يُستشهد به لبيان أن النص اليوناني وراء الترجمة الحديثة ثمرة مقارنة علمية بين مخطوطات كثيرة. وهذا سبب رئيسي في اختلاف الترجمات الأحدث أحيانًا عن نسخة الملك جيمس في العهد الجديد.',
      },
    },
  ],

  objections: [
    {
      id: 'O1',
      statement: {
        en: 'If every translation interprets, then no one who reads only a translation has the word of God, only a man’s opinion of it.',
        ar: 'إن كانت كل ترجمة تفسيرًا، فمن لا يقرأ إلا ترجمة لا يملك كلمة الله بل رأي إنسان فيها.',
      },
      response: {
        en: [
          'Translation does involve choice, but most of the text is not in doubt, and where there is a real difficulty it can be seen by comparing translations. The meaning that matters for faith and life is carried by the whole of a passage and the whole of Scripture, not by a single word. The early Church itself read Scripture in translation: the Septuagint, Latin, Syriac and Coptic versions were the Bibles of different churches.',
          'The Church has therefore always treated translation as a work of service, undertaken within the Church’s teaching and reading of Scripture. A translation is not a rival to the original; it is a way into it.',
        ],
        ar: [
          'في الترجمة اختيار فعلًا، لكن معظم النص لا شك فيه، وحيث توجد صعوبة حقيقية يمكن رؤيتها بمقارنة الترجمات. والمعنى الذي يهمّ الإيمان والحياة تحمله الفقرة كلها والكتاب كله، لا كلمة واحدة. وقد قرأت الكنيسة الأولى نفسها الكتاب مترجمًا: فالسبعينية واللاتينية والسريانية والقبطية كانت كتب كنائس مختلفة.',
          'ولذلك عدّت الكنيسة دائمًا الترجمة عملَ خدمة يجري في إطار تعليم الكنيسة وقراءتها للكتاب. فالترجمة ليست منافسًا للأصل بل مدخل إليه.',
        ],
      },
      limits: {
        en: 'This does not remove the need to consult the original languages on a disputed point.',
        ar: 'لا يلغي هذا الحاجة إلى الرجوع إلى اللغات الأصلية في موضع متنازع عليه.',
      },
      evidence: ['E4', 'E5'],
    },
    {
      id: 'O2',
      statement: {
        en: 'The King James Version and the Van Dyck are the most trusted Bibles, so later translations that differ from them must have changed the text.',
        ar: 'نسخة الملك جيمس وفاندايك أكثر الكتب المقدسة ثقة، فالترجمات اللاحقة التي تخالفهما لا بد أنها غيّرت النص.',
      },
      response: {
        en: [
          'Familiarity is a good reason to love a translation but not a test of its accuracy. Later translations differ in the New Testament mainly because they use a Greek text edited from far more manuscripts than were available in 1611, and in both Testaments because their English or Arabic is more current. Where the readings differ, each case can be examined; some of the best known are treated in the article on footnoted passages.',
          'Many Christians, including many in the Coptic Church, honour the King James Version and the Van Dyck for their language and their long use, and the Church has not made any translation a standard of the text.',
        ],
        ar: [
          'الألفة سبب وجيه لحب ترجمة لكنها ليست مقياسًا لدقتها. وتختلف الترجمات اللاحقة في العهد الجديد أساسًا لأنها تستعمل نصًّا يونانيًا حُرّر من مخطوطات أكثر بكثير مما توافر سنة ١٦١١، وفي العهدين لأن لغتها العربية أو الإنجليزية أقرب إلى الاستعمال الحالي. وحيث تختلف القراءات يمكن فحص كل حالة؛ وبعض أشهرها تعالجه مقالة المقاطع ذات الحواشي.',
          'ويكرّم كثير من المسيحيين، ومنهم كثيرون في الكنيسة القبطية، نسخة الملك جيمس وفاندايك لجمال لغتيهما وطول استعمالهما، ولم تجعل الكنيسة أي ترجمة معيارًا للنص.',
        ],
      },
      limits: {
        en: 'The answer does not say that every modern reading is better; scholars still disagree about some.',
        ar: 'لا يعني الجواب أن كل قراءة حديثة أفضل؛ فالباحثون ما زالوا يختلفون في بعضها.',
      },
      evidence: ['E5'],
    },
    {
      id: 'O3',
      statement: {
        en: 'If the Septuagint differs from the Hebrew, the Church of Alexandria was using a corrupted text.',
        ar: 'إن كانت السبعينية تخالف العبري فقد كانت كنيسة الإسكندرية تستعمل نصًّا محرّفًا.',
      },
      response: {
        en: [
          'The Qumran discoveries showed that Hebrew texts of the last centuries before Christ existed in more than one form, and that some of the Septuagint’s differences from the Masoretic Text reflect a Hebrew text the translators had before them. The Greek is therefore a witness to a form of the Hebrew, not simply a free paraphrase. Scholars weigh each difference on its merits and do not assume that the later Masoretic form is always the older.',
          'The Church of Alexandria received the Greek as the Scriptures of the apostles’ churches, and the New Testament writers used it. For the Church the question is not which text is a “corruption” but which tradition she has received.',
        ],
        ar: [
          'بيّنت اكتشافات قمران أن نصوصًا عبرية من القرون الأخيرة قبل المسيح وُجدت في أكثر من صيغة، وأن بعض فروق السبعينية عن النص الماسوري تعكس نصًّا عبريًا كان أمام المترجمين. فاليوناني شاهد على صيغة من العبري لا مجرد ترجمة حرة. ويزن الباحثون كل فرق بما يستحق ولا يفترضون أن الصيغة الماسورية المتأخرة هي الأقدم دائمًا.',
          'وقد تسلمت كنيسة الإسكندرية اليوناني بوصفه كتب كنائس الرسل، واستعمله كتّاب العهد الجديد. فالسؤال عند الكنيسة ليس أيّ النصين «محرَّف» بل أيّ تقليد تسلّمت.',
        ],
      },
      limits: {
        en: 'It does not decide individual readings, and in some places the Masoretic Text may well preserve the better reading.',
        ar: 'لا يحسم القراءات المفردة، وفي مواضع قد يحفظ النص الماسوري القراءة الأفضل.',
      },
      evidence: ['E4'],
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'Historically, a Christian can say that the two translations are independent, careful works from the original languages, that the differences among translations are known and can be examined, and that the Septuagint tradition is the one the early Church and the Coptic Church inherited.',
        'A Christian should also say that no translation reproduces the original in every nuance, that the underlying texts differ in places, and that readers who need certainty on a point must look at the Hebrew or Greek or at the best scholarly editions.',
      ],
      ar: [
        'يستطيع المسيحي تاريخيًا أن يقول إن الترجمتين مستقلتان وعملان دقيقان عن اللغات الأصلية، وإن الفروق بين الترجمات معروفة ويمكن فحصها، وإن تقليد السبعينية هو الذي ورثته الكنيسة الأولى والكنيسة القبطية.',
        'وعلى المسيحي أيضًا أن يقول إنه لا توجد ترجمة تعيد الأصل بكل دقائقه، وإن النصوص المصدرية تختلف في مواضع، وإن من يحتاج يقينًا في نقطة ما عليه أن ينظر في العبرية أو اليونانية أو في أفضل الطبعات العلمية.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that God speaks to his people in the Scriptures, and she has always carried that word into the language of each people, from Greek to Coptic to Arabic. The Word of God became flesh and spoke in the language of a particular people, and the Church’s readiness to translate follows from this condescension.',
        'The Church also reads Scripture within her Tradition, in her liturgy and under the guidance of her Fathers, and this keeps the reading of a translated text anchored to the faith handed down.',
      ],
      ar: [
        'تعترف الكنيسة بأن الله يكلّم شعبه في الكتب المقدسة، وقد حملت دائمًا هذه الكلمة إلى لغة كل شعب، من اليونانية إلى القبطية إلى العربية. فالكلمة صار جسدًا وتكلم بلغة شعب بعينه، ومن هذا التنازل تنبع استعداد الكنيسة للترجمة.',
        'وتقرأ الكنيسة الكتاب أيضًا في تقليدها، في صلواتها الطقسية وبإرشاد آبائها، وهذا يربط قراءة النص المترجم بالإيمان المسلَّم.',
      ],
    },
  },
  coptic: {
    en: [
      'The Coptic Church’s Old Testament is the Greek tradition, which is why its Psalms are numbered as in the Septuagint and why the Agpeya and the lectionary follow that numbering. The Church’s own language, Coptic, preserved the Bible in Egypt in Sahidic and Bohairic, and Bohairic is still the language of much of the liturgy.',
      'In Arabic the Church has long used the Van Dyck translation, and in English readers commonly use the King James Version or the New King James Version. The Church does not treat any one of these as the standard of the text; the Church’s standard is the faith in which Scripture is read, and the Fathers, above all Origen, Athanasius and Cyril of Alexandria, read the Greek.',
    ],
    ar: [
      'العهد القديم في الكنيسة القبطية هو التقليد اليوناني، ولهذا ترقَّم مزاميرها كما في السبعينية وتتبع الأجبية والقطمارس هذا الترقيم. وقد حفظت لغة الكنيسة، أي القبطية، الكتاب المقدس في مصر بالصعيدية والبحيرية، وما زالت البحيرية لغة جانب كبير من الصلوات الطقسية.',
      'وفي العربية تستعمل الكنيسة منذ زمن طويل ترجمة فاندايك، وفي الإنجليزية يقرأ الناس عادةً نسخة الملك جيمس أو نسخة الملك جيمس الجديدة. ولا تعدّ الكنيسة أيًّا منها معيارًا للنص؛ فمعيارها الإيمان الذي يُقرأ به الكتاب، وقد قرأ الآباء، وفي مقدمتهم أوريجانوس وأثناسيوس وكيرلس السكندري، النص اليوناني.',
    ],
  },
  disputed: {
    en: [
      'Disputed among scholars: how closely the translators of the Septuagint kept to their Hebrew source in each book, how often the Masoretic Text or the Septuagint preserves the earlier reading, and which of the differing English or Arabic renderings of a hard verse is best.',
      'Disputed between Christian traditions: which text of the Old Testament should serve as the standard for translation, the Hebrew or the Greek, and the place of the deuterocanonical books.',
      'Not disputed in this article: that the Van Dyck and the King James Version were made independently from the original languages, and that a translation is not the original.',
    ],
    ar: [
      'مختلف عليه بين الباحثين: إلى أي مدى التزم مترجمو السبعينية أصلهم العبري في كل سفر، وكم مرة يحفظ النص الماسوري أو السبعينية القراءة الأقدم، وأيّ الترجمتين العربية أو الإنجليزية أفضل في آية صعبة.',
      'مختلف عليه بين التقاليد المسيحية: أيّ نص للعهد القديم ينبغي أن يكون معيار الترجمة، العبري أم اليوناني، وموضع الأسفار القانونية الثانية.',
      'غير مختلف عليه في هذا المقال: أن فاندايك ونسخة الملك جيمس أُعدّتا باستقلال عن اللغات الأصلية، وأن الترجمة ليست الأصل.',
    ],
  },
  conclusion: {
    en: 'Arabic and English Bibles are faithful translations made independently from the Hebrew and Greek, and they can be compared with one another and with their sources. The Coptic Church reads the Old Testament in the Greek tradition it inherited, and a reader who knows this can use any good translation with confidence and see where its choices lie.',
    ar: 'الكتب المقدسة العربية والإنجليزية ترجمات أمينة أُعدّت باستقلال عن العبرية واليونانية، ويمكن مقارنتها بعضها ببعض وبمصادرها. وتقرأ الكنيسة القبطية العهد القديم في التقليد اليوناني الذي ورثته، ومن يعرف ذلك يستطيع أن يستعمل أي ترجمة جيدة بثقة وأن يرى أين تقع اختياراتها.',
  },
  furtherReading: ['S27', 'S28'],
  related: ['septuagint-and-masoretic', 'has-bible-changed', 'footnoted-passages', 'coptic-deuterocanon', 'old-testament-canons-differ'],
};
