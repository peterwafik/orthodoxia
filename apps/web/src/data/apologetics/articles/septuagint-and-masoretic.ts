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
    en: 'They differ because they come down to us by two paths. The Septuagint is the Greek translation made by Jews in Alexandria, beginning with the Torah in the third century BC, from the Hebrew texts of that time. The Masoretic Text is the Hebrew text preserved by Jewish scribes and fixed in its present form, with vowels and notes, by the Masoretes in the early Middle Ages. The Dead Sea Scrolls show that more than one Hebrew form of some books was in use before Christ, and in several places the Septuagint reflects an older Hebrew text than the one later fixed. The apostles, writing in Greek, often quoted the Septuagint. The Coptic Orthodox Church receives the Old Testament in this tradition, including the deuterocanonical books, and honours the Hebrew text as well.',
    ar: 'يختلفان لأنهما وصلا إلينا بطريقين. فالسبعينية هي الترجمة اليونانية التي صنعها يهود في الإسكندرية، بدءًا بالتوراة في القرن الثالث ق.م.، من النصوص العبرية في ذلك الزمن. والنص الماسوري هو النص العبري الذي حفظه الكتبة اليهود وثبّته الماسوريون بصورته الحالية، بالحركات والحواشي، في أوائل العصور الوسطى. وتبيّن مخطوطات البحر الميت أن أكثر من صيغة عبرية لبعض الأسفار كانت مستعملة قبل المسيح، وفي مواضع عدة تعكس السبعينية نصًا عبريًا أقدم من الذي ثُبّت لاحقًا. وكثيرًا ما استشهد الرسل، وهم يكتبون باليونانية، بالسبعينية. والكنيسة القبطية الأرثوذكسية تقبل العهد القديم في هذا التقليد، ومعه الأسفار القانونية الثانية، وتكرم النص العبري أيضًا.',
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
      'السبعينية ترجمة يونانية صنعها يهود، بدءًا بأسفار موسى الخمسة في مصر في القرن الثالث ق.م.؛ وتُرجمت الأسفار الأخرى لاحقًا.',
      'النص الماسوري هو النص العبري الذي ثبّته الكتبة اليهود، الماسوريون، في أوائل العصور الوسطى؛ وأقدم مخطوطاته الكاملة من نحو القرنين العاشر والحادي عشر الميلاديين.',
      'تبيّن مخطوطات البحر الميت أن أكثر من صيغة عبرية لبعض الأسفار كانت متداولة، وأن بعض نصوص قمران يوافق السبعينية ضد النص الماسوري.',
      'تشمل الفروق الألفاظ والطول والترتيب، كما في إرميا، الذي هو أقصر في السبعينية ومرتب ترتيبًا مختلفًا.',
      'كثيرًا ما يستشهد كتّاب العهد الجديد، وهم يكتبون باليونانية، بالعهد القديم بألفاظ قريبة من السبعينية.',
      'تقبل الكنيسة القبطية الأرثوذكسية العهد القديم في تقليد السبعينية، مع الأسفار القانونية الثانية.',
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
      'Readers often notice that an Old Testament quotation in the New Testament does not match the Old Testament in their Bible, or that Orthodox, Catholic and Protestant Bibles contain different books and sometimes different wording. The reason lies in the history of these two textual traditions, and knowing it removes the puzzle.',
      'It also shows why the Church reads the Old Testament as she does. The Greek text used by the apostles and the Fathers is a true witness to the Word of God, and it was received in Alexandria, the Church of St Mark.',
    ],
    ar: [
      'كثيرًا ما يلاحظ القراء أن استشهادًا من العهد القديم في العهد الجديد لا يطابق العهد القديم في كتابهم، أو أن الكتب المقدسة الأرثوذكسية والكاثوليكية والبروتستانتية تضم أسفارًا مختلفة وألفاظًا مختلفة أحيانًا. والسبب في تاريخ هذين التقليدين النصيين، ومعرفته تزيل الحيرة.',
      'وهو يبيّن أيضًا لماذا تقرأ الكنيسة العهد القديم كما تقرؤه. فالنص اليوناني الذي استعمله الرسل والآباء شاهد حق لكلمة الله، وقد تسلّمته الإسكندرية، كنيسة القديس مرقس.',
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
        ar: 'بدأت السبعينية ترجمةً يونانية للتوراة صنعها يهود في الإسكندرية في القرن الثالث ق.م.، وتُرجمت الأسفار الأخرى في الفترة التالية.',
      },
      argumentType: 'historical',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The Torah was translated into Greek in Alexandria in the third century BC for the large Greek-speaking Jewish community there, and other books followed over the next two centuries. The Letter of Aristeas tells the story in legendary form, but the translation itself is a firm fact of history, and it was the Bible of Greek-speaking Jews before Christ.',
        ar: 'تُرجمت التوراة إلى اليونانية في الإسكندرية في القرن الثالث ق.م. للجالية اليهودية الكبيرة الناطقة باليونانية هناك، وتلتها أسفار أخرى في القرنين التاليين. وتروي رسالة أريستياس القصة بصورة أسطورية، لكن الترجمة نفسها واقعة تاريخية ثابتة، وكانت كتاب اليهود الناطقين باليونانية قبل المسيح.',
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
        en: 'The Dead Sea Scrolls show that more than one Hebrew form of some biblical books circulated before the time of Christ, and that some of them agree with the Septuagint against the Masoretic Text.',
        ar: 'تبيّن مخطوطات البحر الميت أن أكثر من صيغة عبرية لبعض الأسفار الكتابية كانت متداولة قبل زمن المسيح، وأن بعضها يوافق السبعينية ضد النص الماسوري.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'This is one of the principal findings of the study of the scrolls. A Qumran manuscript of Jeremiah has the shorter text and order that the Septuagint reflects, and Qumran manuscripts of Samuel agree with the Septuagint in places. In these cases the Greek translators were faithfully rendering a Hebrew text that differed from the one later fixed.',
        ar: 'هذه من أهم نتائج دراسة المخطوطات. فمخطوطة إرميا من قمران تحمل النص الأقصر والترتيب اللذين تعكسهما السبعينية، ومخطوطات صموئيل من قمران توافق السبعينية في مواضع. وفي هذه الحالات كان المترجمون اليونانيون ينقلون بأمانة نصًا عبريًا يختلف عن الذي ثُبّت لاحقًا.',
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
        ar: 'كثيرًا ما يستشهد العهد الجديد اليوناني بالعهد القديم بألفاظ قريبة من السبعينية، كما في استشهاد الرسالة إلى العبرانيين بالمزمور ٤٠.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'Comparing Hebrews 10:5 with the Greek of Psalm 40 shows the match: the Greek speaks of a body prepared, and the letter builds its teaching on the Incarnation on that wording. The apostles used the Septuagint as Scripture.',
        ar: 'تُظهر مقارنة العبرانيين ١٠:٥ بالنص اليوناني للمزمور ٤٠ التطابق: فاليوناني يتكلم عن جسد هُيّئ، والرسالة تبني تعليمها عن التجسد على هذه الألفاظ. فقد استعمل الرسل السبعينية كتابًا مقدسًا.',
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
        ar: 'تقبل الكنيسة القبطية الأرثوذكسية العهد القديم في تقليد السبعينية، كما قبله آباء الإسكندرية الناطقون باليونانية، ولا ترى تعارضًا بين ذلك ودراسة النص العبري.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'The Church received the Scriptures in the form the apostles quoted and the Fathers expounded. The Coptic Old Testament versions were made from the Greek, and Alexandria, the home of the translation, is the home of the Coptic Church.',
        ar: 'تسلّمت الكنيسة الكتب بالصورة التي استشهد بها الرسل وشرحها الآباء. وقد صُنعت الترجمات القبطية للعهد القديم عن اليونانية، والإسكندرية، موطن الترجمة، هي موطن الكنيسة القبطية.',
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
          'Hebrew is the language in which the books were written, and the Church honours it. But the Hebrew text the translators used was older than the Masoretic Text, which was fixed many centuries later, and the scrolls show that Hebrew forms differed. In several books the Septuagint preserves an older Hebrew reading.',
          'So the Septuagint is not a mere translation to be corrected by a later text. It is an ancient witness in its own right, and scholars of the text use it alongside the Hebrew and the Qumran scrolls. The Church reads it as the Old Testament of the apostles.',
        ],
        ar: [
          'العبرية هي اللغة التي كُتبت بها الأسفار، والكنيسة تكرمها. لكن النص العبري الذي استعمله المترجمون كان أقدم من النص الماسوري، الذي ثُبّت بعد ذلك بقرون كثيرة، والمخطوطات تبيّن أن الصيغ العبرية اختلفت. وفي أسفار عدة تحفظ السبعينية قراءة عبرية أقدم.',
          'فالسبعينية ليست مجرد ترجمة يصححها نص لاحق. بل هي شاهد قديم قائم بذاته، ويستعملها دارسو النص إلى جانب العبري ومخطوطات قمران. والكنيسة تقرؤها عهدًا قديمًا للرسل.',
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
          'The Greek translation of Isaiah was made before the time of Christ, when the Septuagint was the Bible of Greek-speaking Jews. Its word “virgin” in Isaiah 7:14 was therefore written by Jewish translators, not by Christians.',
          'The early debate between Jews and Christians over this verse shows that both sides knew the Greek wording and noticed the difference from later Jewish versions. The accusation of Christian alteration has no support in the evidence. St Matthew the Evangelist followed the wording that Jewish translators had already chosen.',
        ],
        ar: [
          'صُنعت الترجمة اليونانية لإشعياء قبل زمن المسيح، حين كانت السبعينية كتاب اليهود الناطقين باليونانية. فكلمة «عذراء» في إشعياء ٧:١٤ كتبها مترجمون يهود لا مسيحيون.',
          'والجدل المبكر بين اليهود والمسيحيين حول هذه الآية يبيّن أن الطرفين كانا يعرفان اللفظ اليوناني ولاحظا اختلافه عن الترجمات اليهودية اللاحقة. ولا سند في الشواهد لتهمة التحريف المسيحي. فالقديس متى الإنجيلي اتبع اللفظ الذي اختاره المترجمون اليهود من قبل.',
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
          'The differences are in wording, not in the substance of the faith. The great majority of the text, its story and its teaching, is the same in both. Studying the differences helps us understand the history of the text.',
          'The Church has lived with this since the first century, when the apostles quoted Scripture in the form their hearers knew. God’s word was not lost in translation; it was carried to the nations in their own tongue. Her faith in the Word of God has never depended on a single form of the wording.',
        ],
        ar: [
          'الفروق في الألفاظ، لا في جوهر الإيمان. فالغالبية العظمى من النص، قصته وتعليمه، واحدة في الاثنين. ودراسة الفروق تساعدنا على فهم تاريخ النص.',
          'وقد عاشت الكنيسة مع هذا منذ القرن الأول، حين استشهد الرسل بالكتاب بالصورة التي عرفها سامعوهم. فكلمة الله لم تضع في الترجمة؛ بل حُملت إلى الأمم بلسانها. وإيمان الكنيسة بكلمة الله لم يتوقف قط على صيغة واحدة للألفاظ.',
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
        'The history is clear. A Greek translation was made in Alexandria from the Hebrew texts of its day, and a Hebrew text was carefully preserved and later fixed. The Dead Sea Scrolls show that the Hebrew text itself existed in more than one form before Christ. Both traditions are ancient witnesses, and critical editions of the Old Testament use both.',
        'The Septuagint was translated more than a thousand years before the oldest complete manuscript of the Masoretic Text was copied, and it was the Scripture of Greek-speaking Jews and of the apostles.',
      ],
      ar: [
        'التاريخ واضح. فقد صُنعت ترجمة يونانية في الإسكندرية من النصوص العبرية في زمنها، وحُفظ نص عبري بعناية ثم ثُبّت لاحقًا. وتبيّن مخطوطات البحر الميت أن النص العبري نفسه وُجد بأكثر من صيغة قبل المسيح. والتقليدان كلاهما شاهدان قديمان، والطبعات النقدية للعهد القديم تستعمل الاثنين.',
        'وقد تُرجمت السبعينية قبل نسخ أقدم مخطوطة كاملة للنص الماسوري بأكثر من ألف سنة، وكانت كتاب اليهود الناطقين باليونانية وكتاب الرسل.',
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
    en: 'The Septuagint and the Masoretic Text differ because they come from two paths of transmission: a Greek translation made in Alexandria before Christ, and a Hebrew text preserved and later fixed by Jewish scribes. The Dead Sea Scrolls show that in several places the Septuagint reflects an older Hebrew text. The Coptic Orthodox Church receives the Old Testament in the Septuagint tradition, as the apostles and the Fathers of Alexandria did, and honours the Hebrew text as a witness alongside it.',
    ar: 'تختلف السبعينية والنص الماسوري لأنهما جاءا من طريقين للنقل: ترجمة يونانية صُنعت في الإسكندرية قبل المسيح، ونص عبري حفظه الكتبة اليهود وثبّتوه لاحقًا. وتبيّن مخطوطات البحر الميت أن السبعينية تعكس في مواضع عدة نصًا عبريًا أقدم. والكنيسة القبطية الأرثوذكسية تقبل العهد القديم في تقليد السبعينية، كما فعل الرسل وآباء الإسكندرية، وتكرم النص العبري شاهدًا إلى جانبه.',
  },
  furtherReading: ['S28', 'S25', 'S26'],
  related: ['dead-sea-scrolls', 'has-bible-changed', 'old-testament-canons-differ', 'coptic-deuterocanon', 'who-chose-the-books', 'arabic-and-english-translations'],
};
