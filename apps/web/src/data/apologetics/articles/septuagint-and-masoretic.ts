import type { Article } from '../types.ts';

export const article: Article = {
  id: 'septuagint-and-masoretic',
  questionId: 'septuagint-and-masoretic',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article asks why the Septuagint, the ancient Greek Old Testament, and the Masoretic Text, the traditional Hebrew text, differ in places. It describes how each came to be, what the Dead Sea Scrolls show, a few examples of difference, and how the Coptic Orthodox Church relates to the Septuagint. It does not examine which books belong in the Old Testament (see the articles on the Old Testament canons and the deuterocanonical books) or the Dead Sea Scrolls in general.',
    ar: 'تسأل هذه المقالة لماذا تختلف الترجمة السبعينية، أي العهد القديم اليوناني القديم، عن النص الماسوري، أي النص العبري التقليدي، في مواضع. وهي تصف كيف نشأ كل منهما، وما تُظهره مخطوطات البحر الميت، وأمثلة قليلة للاختلاف، وكيف تتعامل الكنيسة القبطية الأرثوذكسية مع السبعينية. ولا تفحص أي الأسفار تنتمي إلى العهد القديم (انظر مقالتي قوانين العهد القديم والأسفار القانونية الثانية)، ولا مخطوطات البحر الميت عمومًا.',
  },
  shortAnswer: {
    en: 'The two differ because they come from different paths. The Septuagint is a Greek translation made by Jews in Egypt, beginning with the Torah in the third century BC, from Hebrew texts of that time. The Masoretic Text is the Hebrew text preserved by Jewish scribes and fixed in its present form, with vowels and notes, by the Masoretes in the early Middle Ages. Differences arise from translation choices, from copying changes on both sides, and, as the Dead Sea Scrolls show, from the fact that more than one Hebrew form of some books was in circulation. In several places the Septuagint appears to reflect an older or different Hebrew text. The early Church, writing in Greek, used the Septuagint, and the Coptic Orthodox Church receives the Old Testament in that tradition, including the deuterocanonical books.',
    ar: 'يختلف النصان لأنهما جاءا من مسارين مختلفين. فالسبعينية ترجمة يونانية صنعها يهود في مصر، بدأت بالتوراة في القرن الثالث قبل الميلاد، عن نصوص عبرية في ذلك الزمن. والنص الماسوري هو النص العبري الذي حفظه النسّاخ اليهود وثبّتوه في صورته الحالية، بالحركات والملاحظات، في العصور الوسطى المبكرة. وتنشأ الاختلافات من خيارات الترجمة، ومن تغييرات النسخ من الجانبين، ومن، كما تُظهر مخطوطات البحر الميت، أن أكثر من صورة عبرية لبعض الأسفار كانت متداولة. وفي مواضع عدة تبدو السبعينية عاكسة لنص عبري أقدم أو مختلف. وقد استعملت الكنيسة الأولى، وكانت تكتب باليونانية، السبعينية، وتتسلم الكنيسة القبطية الأرثوذكسية العهد القديم في هذا التقليد، بما فيه الأسفار القانونية الثانية.',
  },
  quickPoints: {
    en: [
      'The Septuagint is a Greek translation made by Jews, beginning with the Five Books of Moses in Egypt in the third century BC; the other books were translated later.',
      'The Masoretic Text is the Hebrew text fixed by Jewish scribes, the Masoretes, in the early Middle Ages; its oldest complete manuscripts are from around the tenth and eleventh centuries AD.',
      'The Dead Sea Scrolls show that more than one Hebrew form of some books circulated, and some Qumran texts agree with the Septuagint against the Masoretic Text.',
      'Differences include wording, length and order, as in Jeremiah, which is shorter in the Septuagint and arranged differently.',
      'The New Testament writers, writing in Greek, often quote the Old Testament in wording close to the Septuagint.',
      'The Coptic Orthodox Church receives the Old Testament in the Septuagint tradition, with the deuterocanonical books.',
    ],
    ar: [
      'السبعينية ترجمة يونانية صنعها يهود، بدأت بأسفار موسى الخمسة في مصر في القرن الثالث قبل الميلاد؛ وتُرجمت الأسفار الأخرى لاحقًا.',
      'النص الماسوري هو النص العبري الذي ثبّته النسّاخ اليهود، الماسوريون، في العصور الوسطى المبكرة؛ وأقدم مخطوطاته الكاملة من نحو القرنين العاشر والحادي عشر الميلاديين.',
      'تُظهر مخطوطات البحر الميت أن أكثر من صورة عبرية لبعض الأسفار كانت متداولة، وبعض نصوص قمران تتفق مع السبعينية ضد النص الماسوري.',
      'تشمل الاختلافات الصياغة والطول والترتيب، كما في إرميا، وهو أقصر في السبعينية ومرتب ترتيبًا مختلفًا.',
      'يقتبس كتّاب العهد الجديد، وهم يكتبون باليونانية، العهد القديم كثيرًا بصياغة قريبة من السبعينية.',
      'تتسلم الكنيسة القبطية الأرثوذكسية العهد القديم في التقليد السبعيني مع الأسفار القانونية الثانية.',
    ],
  },
  argumentTypes: ['textual', 'historical'],
  assessment: {
    label: 'supported_disputed_details',
    explanation: {
      en: 'That the Septuagint and the Masoretic Text differ, and that the Dead Sea Scrolls show a plurality of Hebrew textual forms, are well supported. How to explain any given difference, whether the Septuagint translator changed the text or translated a different Hebrew, is decided case by case and is often debated.',
      ar: 'إن اختلاف السبعينية والنص الماسوري، وإن مخطوطات البحر الميت تُظهر تعددًا في الصور النصية العبرية، أمر تسنده الأدلة. أما كيف يُفسَّر اختلاف بعينه، وهل غيّر مترجم السبعينية النص أم ترجم عبريًا مختلفًا، فيُحسم حالة حالة وكثيرًا ما يكون موضع نقاش.',
    },
  },
  whyExamine: {
    en: [
      'Readers often notice that an Old Testament quotation in the New Testament does not match the Old Testament in their Bible, or that Catholic, Orthodox and Protestant Bibles contain different books and sometimes different wording. The reason lies in the history of the two textual traditions.',
      'The question also bears on how Christians think about the Old Testament: whether the Hebrew text that was standardised later is the only authentic form, or whether the Greek text used by the early Church is also a witness to the Word. It is better to see the evidence than to argue from slogans on either side.',
    ],
    ar: [
      'كثيرًا ما يلاحظ القراء أن اقتباسًا من العهد القديم في العهد الجديد لا يطابق العهد القديم في كتابهم المقدس، أو أن الطبعات الكاثوليكية والأرثوذكسية والبروتستانتية تضم أسفارًا مختلفة وأحيانًا صياغة مختلفة. والسبب في تاريخ التقليدين النصيين.',
      'والسؤال يتصل أيضًا بكيف يفكر المسيحيون في العهد القديم: هل النص العبري الذي توحد لاحقًا هو الصورة الأصيلة الوحيدة، أم أن النص اليوناني الذي استعملته الكنيسة الأولى شاهد أيضًا على الكلمة. والأفضل أن نرى الشواهد بدل المحاجّة بشعارات من الجانبين.',
    ],
  },
  background: {
    en: [
      'In the Hellenistic period a large community of Greek-speaking Jews lived in Egypt, especially in Alexandria. Tradition, told in the Letter of Aristeas, says that the Torah was translated there at the request of the ruler Ptolemy II in the third century BC by seventy-two elders; the later name Septuagint, “the seventy”, comes from this story. Historians regard the Letter as a legendary account, but accept that the Torah was translated into Greek in Alexandria in the third century BC, and that other books followed over the next two centuries by various translators. The translation became the Bible of Greek-speaking Jews and, later, of the Church.',
      'The Masoretic Text is the Hebrew text as handed down by Jewish scribes and edited by the Masoretes between roughly the seventh and tenth centuries AD, who added vowel marks, accents and marginal notes to protect the consonantal text. Its oldest complete manuscripts, such as the Leningrad Codex, date to about the early eleventh century, and the Aleppo Codex to the tenth. The consonantal text itself is much older, and the Dead Sea Scrolls show that a form close to it was already in use before the time of Jesus.',
      'The scrolls found at Qumran from the third century BC to the first century AD contain Hebrew texts of different kinds. Some are close to the Masoretic Text, some are close to the Hebrew that appears to lie behind the Septuagint, and some belong to other traditions. For example, a Qumran manuscript of Jeremiah has the shorter text and order that the Septuagint reflects, and Qumran manuscripts of Samuel agree with the Septuagint in places against the Masoretic Text. Many scholars conclude that in these cases the Greek translators were working from a Hebrew text that differed from the one later fixed.',
      'This does not mean that every difference is a different Hebrew. Translators made choices, and the Greek of some books is free while the Greek of others is very literal. A famous example is the word used in Isaiah 7:14, where the Hebrew word that is often translated “young woman” is rendered in Greek by a word that normally means “virgin”, the wording Matthew follows in his Gospel. Scholars discuss whether this reflects the translator’s interpretation or an equivalent in his Hebrew. Another example is Psalm 40, where the Hebrew speaks of ears opened or dug and the Greek reads a body prepared, the wording quoted in the Letter to the Hebrews.',
      'In the early centuries Jews and Christians used these texts differently. Christians, who read their Old Testament largely in Greek, used the Septuagint, and the dispute about its wording was part of the argument between Jews and Christians. Later Jewish translators produced new Greek versions closer to the Hebrew of their day, and Origen set several of them side by side with the Septuagint and the Hebrew in his Hexapla. The Church continued with the Septuagint, which the Greek Fathers and the Eastern churches received, including the Church of Alexandria.',
    ],
    ar: [
      'في العصر الهلنستي عاش في مصر، وبخاصة في الإسكندرية، جالية كبيرة من اليهود الناطقين باليونانية. وتقول الرواية الواردة في رسالة أريستياس إن التوراة تُرجمت هناك بطلب من الحاكم بطليموس الثاني في القرن الثالث قبل الميلاد على يد اثنين وسبعين شيخًا؛ ومنها جاء الاسم اللاحق «السبعينية». ويعدّ المؤرخون الرسالة رواية أسطورية، لكنهم يقبلون أن التوراة تُرجمت إلى اليونانية في الإسكندرية في القرن الثالث قبل الميلاد، وأن أسفارًا أخرى تبعتها خلال القرنين التاليين على يد مترجمين مختلفين. وصارت الترجمة كتاب اليهود الناطقين باليونانية، ثم كتاب الكنيسة.',
      'والنص الماسوري هو النص العبري كما تناقله النسّاخ اليهود وحرّره الماسوريون بين القرنين السابع والعاشر الميلاديين تقريبًا، فأضافوا علامات الحركات والنبرات وملاحظات الهامش لحماية النص الصامت. وأقدم مخطوطاته الكاملة، كمخطوط لينينغراد، من نحو أوائل القرن الحادي عشر، ومخطوط حلب من القرن العاشر. والنص الصامت أقدم من ذلك بكثير، وتُظهر مخطوطات البحر الميت أن صورة قريبة منه كانت مستعملة قبل زمن يسوع.',
      'وتضم اللفائف التي وُجدت في قمران، من القرن الثالث قبل الميلاد إلى القرن الأول الميلادي، نصوصًا عبرية من أنواع مختلفة. بعضها قريب من النص الماسوري، وبعضها قريب من العبرية التي يبدو أنها وراء السبعينية، وبعضها من تقاليد أخرى. فمثلًا في مخطوط قمراني من إرميا النص الأقصر والترتيب اللذان تعكسهما السبعينية، وفي مخطوطات قمرانية من صموئيل اتفاق مع السبعينية في مواضع ضد النص الماسوري. ويستنتج باحثون كثيرون أن المترجمين اليونانيين في هذه الحالات كانوا يعملون عن نص عبري يختلف عن النص الذي ثبت لاحقًا.',
      'وهذا لا يعني أن كل اختلاف هو عبرية مختلفة. فقد اتخذ المترجمون خيارات، ويونانية بعض الأسفار حرة ويونانية بعضها حرفية جدًا. ومثال مشهور اللفظ في إشعياء 7: 14، حيث تُرجمت الكلمة العبرية التي تعني في الغالب «الفتاة» بلفظ يوناني يعني عادة «العذراء»، وهي الصيغة التي يتبعها متى في إنجيله. ويناقش الباحثون هل يعكس ذلك تفسير المترجم أم مقابلًا في عبريته. ومثال آخر المزمور 40، حيث تتكلم العبرية عن آذان مفتوحة أو محفورة وتقرأ اليونانية جسدًا أُعدّ، وهي الصيغة المقتبسة في الرسالة إلى العبرانيين.',
      'وفي القرون الأولى استعمل اليهود والمسيحيون هذه النصوص بصور مختلفة. فالمسيحيون، الذين قرؤوا عهدهم القديم في الأغلب باليونانية، استعملوا السبعينية، وكان الجدل في صياغتها جزءًا من الحوار بين اليهود والمسيحيين. وأنتج مترجمون يهود لاحقون ترجمات يونانية جديدة أقرب إلى عبرية عصرهم، ووضع أوريجانوس عدة منها جنبًا إلى جنب مع السبعينية والعبرية في «الهكسابلا». وواصلت الكنيسة مع السبعينية التي تسلمها الآباء اليونانيون والكنائس الشرقية، ومنها كنيسة الإسكندرية.',
    ],
  },
  glossary: ['septuagint', 'masoretic-text', 'dead-sea-scrolls', 'deuterocanon', 'canon', 'manuscript', 'textual-variant'],
  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'The Septuagint began as a Greek translation of the Torah made by Jews in Alexandria in the third century BC, and the other books were translated over the following period.',
        ar: 'بدأت السبعينية ترجمة يونانية للتوراة صنعها يهود في الإسكندرية في القرن الثالث قبل الميلاد، وتُرجمت الأسفار الأخرى خلال الفترة التالية.',
      },
      argumentType: 'historical',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The outline is widely accepted by historians. The legendary details in the Letter of Aristeas are not, and the dates and translators of the later books are debated.',
        ar: 'يقبل المؤرخون الخطوط العامة على نطاق واسع. أما التفاصيل الأسطورية في رسالة أريستياس فلا يقبلونها، وتواريخ الأسفار اللاحقة ومترجموها محل نقاش.',
      },
      limits: {
        en: 'It is a historical reconstruction and does not decide how the Church should value the translation.',
        ar: 'هي إعادة بناء تاريخية ولا تحسم كيف ينبغي أن تقدّر الكنيسة الترجمة.',
      },
      evidence: ['e1'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'The Dead Sea Scrolls show that more than one Hebrew form of some biblical books circulated before the time of Jesus, and that some of them agree with the Septuagint against the Masoretic Text.',
        ar: 'تُظهر مخطوطات البحر الميت أن أكثر من صورة عبرية لبعض الأسفار الكتابية كانت متداولة قبل زمن يسوع، وأن بعضها يتفق مع السبعينية ضد النص الماسوري.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'This is reported by specialists in the Hebrew Bible, and it is one of the principal findings of work on the scrolls. How many books it applies to, and how to classify the texts, are debated.',
        ar: 'يذكر ذلك المتخصصون في الكتاب العبري، وهو من النتائج الرئيسية للعمل على المخطوطات. وعدد الأسفار التي ينطبق عليها وطريقة تصنيف النصوص محل نقاش.',
      },
      limits: {
        en: 'The scrolls do not cover every book and do not settle which form is original in any place.',
        ar: 'لا تغطي المخطوطات كل الأسفار، ولا تحسم أي الصور أصلية في أي موضع.',
      },
      evidence: ['e2', 'e3'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'The Greek New Testament often quotes the Old Testament in wording close to the Septuagint, as in Hebrews’ quotation of Psalm 40.',
        ar: 'يقتبس العهد الجديد اليوناني العهد القديم كثيرًا بصياغة قريبة من السبعينية، كما في اقتباس العبرانيين للمزمور 40.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The match of wording between Hebrews 10:5 and the Greek of Psalm 40 can be seen by comparing the texts. The proportion of New Testament quotations that follow the Septuagint is a matter of detailed study.',
        ar: 'يمكن رؤية تطابق الصياغة بين عبرانيين 10: 5 ويونانية المزمور 40 بمقارنة النصوص. ونسبة اقتباسات العهد الجديد التي تتبع السبعينية موضوع دراسة تفصيلية.',
      },
      limits: {
        en: 'It does not mean that the Septuagint is superior to the Hebrew, only that the New Testament authors used it.',
        ar: 'لا يعني أن السبعينية أفضل من العبرية، بل أن كتّاب العهد الجديد استعملوها.',
      },
      evidence: ['e6'],
    },
    {
      id: 'c4',
      proposition: {
        en: 'The Coptic Orthodox Church receives the Old Testament in the Septuagint tradition, as did the Greek-speaking Fathers of Alexandria, and sees no conflict between that and the study of the Hebrew text.',
        ar: 'تتسلم الكنيسة القبطية الأرثوذكسية العهد القديم في التقليد السبعيني، كما فعل آباء الإسكندرية الناطقون باليونانية، ولا ترى تعارضًا بين ذلك ودراسة النص العبري.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'The reception of a text by the Church is a matter of what she has handed on and read. It is stated here as the Church’s position and not as a conclusion of textual criticism.',
        ar: 'تسلّم الكنيسة لنص ما يقوم على ما سلّمته وقرأته. وهو يُذكر هنا موقف الكنيسة لا خلاصة للنقد النصي.',
      },
      limits: {
        en: 'Other traditions, including Jewish and most Protestant ones, prefer the Hebrew text for the Old Testament. The article does not argue that they are mistaken.',
        ar: 'تفضل تقاليد أخرى، ومنها اليهودية وأكثر البروتستانتية، النص العبري للعهد القديم. ولا تحاجّ المقالة بأنها مخطئة.',
      },
      evidence: ['e7'],
    },
  ],
  evidence: [
    {
      id: 'e1',
      sourceId: 'S28',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'Emanuel Tov’s textbook surveys the textual witnesses of the Hebrew Bible, including the Masoretic Text, the Septuagint and the Qumran texts, and the history of their transmission. Tov is a Jewish scholar of the Hebrew Bible and the Dead Sea Scrolls.',
        ar: 'يستعرض كتاب إيمانويل توف الدراسي الشواهد النصية للكتاب العبري، ومنها النص الماسوري والسبعينية ونصوص قمران، وتاريخ انتقالها. وتوف باحث يهودي في الكتاب العبري ومخطوطات البحر الميت.',
      },
      inference: {
        en: 'The plurality of textual traditions is part of mainstream scholarship on the Hebrew Bible, and is described by a scholar of Jewish background. The article follows his overall approach and does not cite any page.',
        ar: 'تعدد التقاليد النصية جزء من الدراسة السائدة للكتاب العبري، ويصفه باحث من خلفية يهودية. وتتبع المقالة منهجه العام ولا تستشهد بصفحة.',
      },
    },
    {
      id: 'e2',
      sourceId: 'S25',
      locator: 'whole work (digital library as a whole; no individual scroll cited)',
      role: 'supports',
      states: {
        en: 'The digital library presents images of the Dead Sea Scrolls, which date from about the third century BC to the first century AD and include copies of books of the Hebrew Bible.',
        ar: 'تعرض المكتبة الرقمية صور مخطوطات البحر الميت التي تعود إلى نحو القرن الثالث قبل الميلاد حتى القرن الأول الميلادي وتتضمن نسخًا من أسفار الكتاب العبري.',
      },
      inference: {
        en: 'Hebrew copies far older than the Masoretic manuscripts can be examined, and compared with both the Masoretic Text and the Septuagint. The images are restricted, so the site links rather than reproduces.',
        ar: 'يمكن فحص نسخ عبرية أقدم بكثير من مخطوطات الماسوريين ومقارنتها بالنص الماسوري والسبعينية معًا. والصور مقيدة، فيكتفي الموقع بالإحالة.',
      },
    },
    {
      id: 'e3',
      sourceId: 'S26',
      locator: 'whole work (essay as a whole; no detail of the scroll cited)',
      role: 'context',
      states: {
        en: 'The Smithsonian essay on the Isaiah scroll is offered as a concrete example of agreement and difference between a Qumran text of Isaiah and later texts.',
        ar: 'يُقدَّم مقال المؤسسة السميثسونية عن لفافة إشعياء مثالًا ملموسًا على الاتفاق والاختلاف بين نص قمراني لإشعياء ونصوص لاحقة.',
      },
      inference: {
        en: 'It illustrates that a Qumran text can be close to the later Hebrew text in much of its content. This supports the point that the consonantal text was transmitted carefully, alongside the evidence of other forms.',
        ar: 'يوضح أن النص القمراني قد يكون قريبًا من النص العبري اللاحق في كثير من محتواه. وهذا يسند أن النص الصامت نُقل بعناية، إلى جانب الشواهد على صور أخرى.',
      },
    },
    {
      id: 'e6',
      sourceId: 'S62',
      locator: 'Hebrews 10:5-7 and Psalm 40:6-8',
      role: 'supports',
      states: {
        en: 'Hebrews, quoting the psalm as the words of Christ at his coming into the world, says that a body was prepared for him. In the Hebrew psalm the corresponding phrase speaks of ears opened or dug for the speaker.',
        ar: 'تقتبس الرسالة إلى العبرانيين المزمور على لسان المسيح عند دخوله العالم، وتقول إن جسدًا أُعدّ له. وفي المزمور العبري تتكلم العبارة المقابلة عن آذان مفتوحة أو محفورة للمتكلم.',
      },
      inference: {
        en: 'Hebrews quotes the Greek wording, which differs from the Hebrew. It shows that a New Testament author used the Septuagint, and that the difference of wording was significant for his argument. The site’s English reader, which follows the traditional English wording, gives a slightly different form from the Greek.',
        ar: 'تقتبس العبرانيين الصياغة اليونانية التي تختلف عن العبرية. وهذا يبيّن أن كاتبًا في العهد الجديد استعمل السبعينية، وأن اختلاف الصياغة كان مهمًا لحجته. ويقدم قارئ الإنجليزية في الموقع، الذي يتبع الصياغة الإنجليزية التقليدية، صورة تختلف قليلًا عن اليونانية.',
      },
      bible: { book: 'hebrews', chapter: 10, verse: '5-7' },
    },
    {
      id: 'e7',
      sourceId: 'S62',
      locator: 'Isaiah 7:14 and Matthew 1:22-23',
      role: 'context',
      states: {
        en: 'Isaiah speaks of a sign: a young woman or virgin will conceive and bear a son named Immanuel. Matthew cites the verse in connection with the birth of Jesus, following the Greek wording that says virgin.',
        ar: 'يتكلم إشعياء عن آية: فتاة أو عذراء تحبل وتلد ابنًا يُدعى عمانوئيل. ويستشهد متى بالآية في سياق ميلاد يسوع، متبعًا الصياغة اليونانية التي تقول عذراء.',
      },
      inference: {
        en: 'The difference between Hebrew and Greek here has long been discussed by Jews and Christians. Whether the Greek translator interpreted or reflected a different nuance is debated, while the Church reads the verse in the light of Christ. Both the historical question and the Church’s reading are stated, and not confused.',
        ar: 'ناقش اليهود والمسيحيون طويلًا الفرق بين العبرية واليونانية هنا. وهل فسّر المترجم اليوناني أم عكس دلالة مختلفة محل نقاش، بينما تقرأ الكنيسة الآية في ضوء المسيح. وكلا السؤالين، التاريخي وقراءة الكنيسة، مذكور وغير مخلوط.',
      },
      bible: { book: 'isaiah', chapter: 7, verse: '14' },
    },
  ],
  objections: [
    {
      id: 'o1',
      statement: {
        en: 'The Hebrew text is the original, so the Septuagint is just a translation and should be corrected by the Hebrew.',
        ar: 'النص العبري هو الأصل، فالسبعينية مجرد ترجمة ويجب أن تُصحح بالعبرية.',
      },
      response: {
        en: [
          'The Hebrew is the language in which the books were written, and a translation depends on it. But the Hebrew text that the translators used was not necessarily the Masoretic Text, which was fixed later, and the scrolls show that Hebrew forms differed. In several books the Septuagint may preserve an older Hebrew reading.',
          'For this reason textual scholars use both, along with the Qumran texts, and weigh each reading. This is the practice of critical editions, and it is compatible with different views about which form the Church should read in worship.',
        ],
        ar: [
          'العبرية هي اللغة التي كُتبت بها الأسفار، والترجمة تعتمد عليها. لكن النص العبري الذي استعمله المترجمون لم يكن بالضرورة النص الماسوري الذي ثبت لاحقًا، وتُظهر المخطوطات أن الصور العبرية اختلفت. وفي أسفار عدة قد تحفظ السبعينية قراءة عبرية أقدم.',
          'ولذلك يستعمل باحثو النص الاثنين معًا، مع نصوص قمران، ويزنون كل قراءة. وهذه ممارسة الطبعات النقدية، وهي تتفق مع آراء مختلفة في أي الصور ينبغي أن تقرأها الكنيسة في العبادة.',
        ],
      },
      limits: {
        en: 'It does not show that the Septuagint is better than the Hebrew in any given place; that is decided case by case.',
        ar: 'لا يثبت أن السبعينية أفضل من العبرية في موضع بعينه؛ فهذا يُحسم حالة حالة.',
      },
      evidence: ['e1', 'e2', 'e3'],
    },
    {
      id: 'o2',
      statement: {
        en: 'The Septuagint was altered by Christians to support their doctrines, such as the virgin birth in Isaiah 7:14.',
        ar: 'غيّر المسيحيون السبعينية لتسند عقائدهم، كالولادة العذراوية في إشعياء 7: 14.',
      },
      response: {
        en: [
          'The Greek translation of Isaiah is generally dated well before the time of Jesus, since the Septuagint was the Bible of Greek-speaking Jews before Christianity arose. Its wording in Isaiah 7:14 therefore cannot have been created by Christians.',
          'It is another matter how the translator understood the Hebrew, and the early Jewish-Christian debate over the wording shows that both sides noticed the difference. That is a question of translation and exegesis and the evidence does not support the accusation of Christian alteration.',
        ],
        ar: [
          'يُؤرَّخ تعريب إشعياء اليوناني عادة قبل زمن يسوع بوقت طويل، لأن السبعينية كانت كتاب اليهود الناطقين باليونانية قبل نشوء المسيحية. فلا يمكن أن يكون المسيحيون قد أنشؤوا صياغتها في إشعياء 7: 14.',
          'أما كيف فهم المترجم العبرية فمسألة أخرى، والجدل اليهودي المسيحي المبكر حول الصياغة يبيّن أن الطرفين لاحظا الفرق. وهذه مسألة ترجمة وتفسير، والشواهد لا تسند اتهام التغيير المسيحي.',
        ],
      },
      limits: {
        en: 'It does not settle whether the Hebrew word in Isaiah 7:14 must mean virgin; that is a matter of Hebrew lexicon and interpretation on which scholars differ.',
        ar: 'لا يحسم هل الكلمة العبرية في إشعياء 7: 14 لا بد أن تعني عذراء؛ فهذه مسألة معجمية وتفسيرية يختلف فيها الباحثون.',
      },
      evidence: ['e7'],
    },
    {
      id: 'o3',
      statement: {
        en: 'If the two texts differ, then neither can be trusted as the Word of God.',
        ar: 'إن اختلف النصان فلا يمكن الوثوق بأي منهما كلمة الله.',
      },
      response: {
        en: [
          'Differences of wording do not remove the shared content: the great majority of the text, the story and the teaching, is the same in both. The study of the differences is a way to understand better the history of the text.',
          'The Church has lived with the plurality of texts since the first century, when the apostles quoted Scripture in the form their hearers knew. Her faith in the Word of God has not depended on a single form of the wording. That is a theological position, which other traditions may not share.',
        ],
        ar: [
          'اختلاف الصياغة لا يزيل المضمون المشترك: فالغالبية العظمى من النص، قصةً وتعليمًا، واحدة في الاثنين. ودراسة الفروق طريقة لفهم تاريخ النص فهمًا أفضل.',
          'وقد عاشت الكنيسة مع تعدد النصوص منذ القرن الأول، حين اقتبس الرسل الكتاب بالصورة التي عرفها سامعوهم. ولم يتوقف إيمانها بكلمة الله على صورة واحدة للصياغة. وهذا موقف لاهوتي قد لا تشاركها فيه تقاليد أخرى.',
        ],
      },
      limits: {
        en: 'It does not answer those who hold that the Hebrew text alone is authoritative.',
        ar: 'لا يجيب عن القائلين إن النص العبري وحده هو ذو السلطان.',
      },
      evidence: ['e6'],
    },
  ],
  christianResponse: {
    historical: {
      en: [
        'Historically, the difference between the two is the product of two transmission histories. A Greek translation was made in Alexandria from Hebrew texts of its day, and a Hebrew text was carefully preserved and later fixed. The Dead Sea Scrolls show that the Hebrew itself was plural. Each tradition is a witness, and critical editions of the Old Testament use both.',
        'A historian does not need to take a side on which text the Church should read in order to say this.',
      ],
      ar: [
        'تاريخيًا، الفرق بين النصين نتاج تاريخي نقل مختلفين. فقد صُنعت ترجمة يونانية في الإسكندرية عن نصوص عبرية في عصرها، وحُفظ نص عبري بعناية ثم ثُبّت لاحقًا. وتُظهر مخطوطات البحر الميت أن العبرية نفسها كانت متعددة. وكل تقليد شاهد، وتستعمل الطبعات النقدية للعهد القديم كليهما.',
        'ولا يحتاج المؤرخ إلى أن ينحاز في أي نص ينبغي أن تقرأه الكنيسة ليقول ذلك.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that the Holy Spirit has guided her in receiving the Scriptures, and that the Old Testament in the form the apostles and Fathers used is the Church’s Old Testament. The apostles quoted the Septuagint, and the Fathers of Alexandria expounded it. The Church also respects the Hebrew text and the work of those who preserved it.',
        'The Coptic Orthodox Church therefore reads the Septuagint tradition and welcomes the comparison with the Hebrew as a means of understanding. These are statements of faith that sit beside, and do not replace, the historical account above.',
      ],
      ar: [
        'تعترف الكنيسة بأن الروح القدس أرشدها في تسلّم الكتب المقدسة، وبأن العهد القديم في الصورة التي استعملها الرسل والآباء هو عهد الكنيسة القديم. فقد اقتبس الرسل السبعينية، وشرحها آباء الإسكندرية. وتحترم الكنيسة أيضًا النص العبري وعمل الذين حفظوه.',
        'ولذلك تقرأ الكنيسة القبطية الأرثوذكسية التقليد السبعيني وترحب بالمقارنة مع العبرية وسيلةً للفهم. وهذه عبارات إيمان تقف إلى جانب العرض التاريخي أعلاه ولا تحل محله.',
      ],
    },
  },
  coptic: {
    en: [
      'The Coptic Orthodox Church receives the Old Testament in the Septuagint tradition, which the Church of Alexandria, where the translation was made, has long used, and the Coptic Old Testament versions were made from the Greek. This includes the deuterocanonical books, which are read in the Church’s services and cited by her Fathers. Alexandria was the home of the Septuagint, of Origen’s scholarly work on the text, and of the Fathers whom the Coptic Church honours as teachers.',
      'The Church therefore does not see the Septuagint as a rival to the Hebrew text but as the form of the Old Testament in which she received the Word of God. She is not required by her faith to reject the study of the Hebrew text, and Coptic scholars may use it for understanding.',
    ],
    ar: [
      'تتسلم الكنيسة القبطية الأرثوذكسية العهد القديم في التقليد السبعيني الذي استعملته منذ القدم كنيسة الإسكندرية، حيث صُنعت الترجمة، وقد أُخذت الترجمات القبطية للعهد القديم عن اليونانية. ويشمل ذلك الأسفار القانونية الثانية التي تُقرأ في خدمات الكنيسة ويستشهد بها آباؤها. وكانت الإسكندرية موطن السبعينية، وعمل أوريجانوس العلمي في النص، والآباء الذين تكرمهم الكنيسة القبطية معلمين.',
      'ولذلك لا ترى الكنيسة السبعينية منافسة للنص العبري، بل الصورة التي تسلمت بها كلمة الله في العهد القديم. وإيمانها لا يلزمها برفض دراسة النص العبري، وقد يستعين به الباحثون الأقباط في الفهم.',
    ],
  },
  disputed: {
    en: [
      'Scholars differ about how to explain individual differences, about how much of the Septuagint reflects a different Hebrew and how much reflects the translator’s choices, and about the dates of the different books. They also differ about the classification of the Qumran texts and about how fixed the Hebrew text was in the first century.',
      'They differ about how the Letter of Aristeas should be used as history. Christians and Jews also differ about which form should be the base of the Old Testament in worship and translation, a difference of tradition and not of manuscript evidence.',
    ],
    ar: [
      'يختلف الباحثون في كيفية تفسير الاختلافات المنفردة، وفي مقدار ما تعكسه السبعينية من عبرية مختلفة ومقدار ما تعكسه من خيارات المترجم، وفي تواريخ الأسفار المختلفة. ويختلفون أيضًا في تصنيف نصوص قمران وفي مدى ثبات النص العبري في القرن الأول.',
      'ويختلفون في كيفية استعمال رسالة أريستياس تاريخًا. ويختلف المسيحيون واليهود كذلك في أي الصور ينبغي أن تكون أساس العهد القديم في العبادة والترجمة، وهو اختلاف تقاليد لا شواهد مخطوطية.',
    ],
  },
  conclusion: {
    en: 'The Septuagint and the Masoretic Text differ because they are the products of two transmission histories, a Greek translation made in Alexandria and a Hebrew text preserved and later fixed by Jewish scribes. The Dead Sea Scrolls show that Hebrew forms were themselves plural. The Coptic Orthodox Church receives the Old Testament in the Septuagint tradition, as the apostles and Fathers of Alexandria did, and welcomes the careful comparison of the two.',
    ar: 'تختلف السبعينية والنص الماسوري لأنهما نتاج تاريخي نقل: ترجمة يونانية صُنعت في الإسكندرية، ونص عبري حفظه النسّاخ اليهود ثم ثبّتوه لاحقًا. وتُظهر مخطوطات البحر الميت أن الصور العبرية كانت متعددة بذاتها. وتتسلم الكنيسة القبطية الأرثوذكسية العهد القديم في التقليد السبعيني، كما فعل الرسل وآباء الإسكندرية، وترحب بالمقارنة الدقيقة بين النصين.',
  },
  furtherReading: ['S28', 'S25', 'S26'],
  related: ['dead-sea-scrolls', 'has-bible-changed', 'old-testament-canons-differ', 'coptic-deuterocanon', 'who-chose-the-books', 'arabic-and-english-translations'],
};
