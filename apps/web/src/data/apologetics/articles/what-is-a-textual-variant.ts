import type { Article } from '../types.ts';

export const article: Article = {
  id: 'what-is-a-textual-variant',
  questionId: 'what-is-a-textual-variant',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article explains what a textual variant is, why variants arise, the main kinds, and how scholars decide between readings, with two small examples. It is a primer. It does not argue that the Bible has or has not been changed overall (see the article on whether the text has changed), and it does not treat the three longer disputed passages (see their own articles).',
    ar: 'تشرح هذه المقالة ما هي القراءة المتباينة، ولماذا تنشأ، وأنواعها الرئيسية، وكيف يفاضل الباحثون بين القراءات، مع مثالين صغيرين. وهي تمهيد. ولا تحاول إثبات أن الكتاب المقدس تغيّر أو لم يتغير في مجمله (انظر مقالة هل تغيّر النص)، ولا تتناول الفقرات الثلاث الأطول المتنازع عليها (انظر مقالاتها).',
  },
  shortAnswer: {
    en: 'A textual variant is any place where surviving manuscripts of a text word it differently. Because every copy of the New Testament was made by hand, variants are to be expected, and scholars have catalogued them. Most are small: a spelling, a different word order, a name written in a different form. A few change the sense of a verse, and a handful involve whole verses. Textual criticism is the discipline that compares the manuscripts, asks which reading is earlier and why the others arose, and records its judgment in the notes of a critical edition.',
    ar: 'القراءة المتباينة هي كل موضع تصوغ فيه مخطوطات النص الباقية العبارة صياغة مختلفة. ولأن كل نسخة من العهد الجديد صُنعت بخط اليد فالقراءات المتباينة متوقعة، وقد فهرسها الباحثون. وأكثرها صغير: تهجئة، أو ترتيب كلمات مختلف، أو اسم مكتوب بصورة أخرى. وبعضها يغير معنى آية، وقليل منها يتعلق بآيات كاملة. والنقد النصي علم يقارن المخطوطات ويسأل أي قراءة أقدم ولماذا نشأت الأخرى، ويسجل حكمه في حواشي طبعة نقدية.',
  },
  quickPoints: {
    en: [
      'A variant is a difference between manuscripts at a given place in the text.',
      'Variants arise from accident (a slip of the eye, mishearing, a note drifting into the text) and from intention (smoothing, harmonising, explaining).',
      'Most variants are minor and many cannot even be shown in translation; a few affect the sense.',
      'Scholars judge between readings by the age and quality of manuscripts and by asking which reading best explains the others.',
      'Your Bible’s footnotes are the place where a translation records the more significant variants.',
      'Knowing about variants is a sign that the evidence is open to checking, not that the text is lost.',
    ],
    ar: [
      'القراءة المتباينة هي اختلاف بين المخطوطات في موضع معين من النص.',
      'تنشأ القراءات المتباينة عن حوادث (زلّة نظر، أو سوء سمع، أو عبارة هامشية تنتقل إلى المتن) وعن قصد (تسهيل، أو توفيق، أو تفسير).',
      'أكثر القراءات صغير، وكثير منها لا يظهر حتى في الترجمة؛ وقليل منها يمس المعنى.',
      'يفاضل الباحثون بين القراءات بقِدم المخطوطات وجودتها وبسؤال أي قراءة تفسّر الباقي أفضل تفسير.',
      'حواشي الكتاب المقدس عندك هي المكان الذي تسجل فيه الترجمة القراءات الأهم.',
      'العلم بالقراءات المتباينة علامة على أن الشواهد متاحة للتحقق، لا على أن النص ضاع.',
    ],
  },
  argumentTypes: ['textual'],
  assessment: {
    label: 'strong_historical_support',
    explanation: {
      en: 'That manuscripts differ, that the differences have identifiable causes, and that scholars have methods for assessing them is the settled, ordinary description of the field, found in standard textbooks. Which reading is original in a particular difficult place is a separate question and is sometimes disputed.',
      ar: 'إن اختلاف المخطوطات، ولهذه الاختلافات أسباب يمكن تحديدها، وللباحثين طرق لتقييمها، هو الوصف المستقر المعتاد للميدان، وتجده في المراجع الدراسية المعتمدة. أما أي القراءات أصلية في موضع صعب بعينه فمسألة منفصلة وقد تكون موضع خلاف.',
    },
  },
  whyExamine: {
    en: [
      'Many readers first meet the word “variant” through a footnote saying that some manuscripts omit or add a phrase, and they wonder whether the text they hold in their hands is in doubt. The word itself is neutral and technical. Knowing what it means turns an alarming phrase into an ordinary part of the study of ancient books.',
      'The topic also matters for honesty. A reader should not be told that there are no variants, since there are, nor that variants make the text unrecognisable, since they do not. The mechanisms are simple enough to describe plainly.',
    ],
    ar: [
      'يلتقي كثير من القراء بكلمة «قراءة متباينة» أول مرة في حاشية تقول إن بعض المخطوطات تحذف عبارة أو تضيفها، فيتساءلون هل النص الذي بين أيديهم موضع شك. والكلمة نفسها محايدة وتقنية. ومعرفة معناها تحول عبارة مقلقة إلى جزء معتاد من دراسة الكتب القديمة.',
      'والموضوع يتصل بالأمانة أيضًا. فلا ينبغي أن يُقال للقارئ إنه لا توجد قراءات متباينة، فهي موجودة، ولا إنها تجعل النص غير معروف، فهي لا تفعل. والآليات بسيطة بما يكفي لوصفها وصفًا مباشرًا.',
    ],
  },
  background: {
    en: [
      'Accidental variants come from the mechanics of copying. A scribe whose eye jumped between two similar line endings might omit the words between them; he might write a word twice; he might confuse two letters or two words that sounded alike when read aloud to a group of copyists; or he might write into the text a note that an earlier reader had put in the margin. Spelling was not standardised, so some differences are simply different spellings of the same word.',
      'Intentional variants are rarer but are real. A scribe might smooth an awkward phrase, correct what he took to be a mistake, make a Gospel passage match its parallel in another Gospel (harmonisation), or add an explanatory phrase. The motive is usually to help the reader, not to alter the teaching, though a few changes were made for doctrinal clarity.',
      'Scholars divide the evidence into the external and the internal. External evidence is the age, the geographical spread and the quality of the manuscripts that support each reading, along with early translations and quotations by the Fathers. Internal evidence asks which reading a copyist is more likely to have changed into the other. Two common rules are that the more difficult reading is often earlier, since scribes tend to smooth, and that the shorter reading is often earlier, since scribes tend to add. These are rules of thumb, not laws, and each case is judged on its own.',
      'It helps to see the range with examples. In 1 Thessalonians 2:7 some manuscripts read that the apostles were “gentle” among the Thessalonians and others that they were “infants” among them, and the two Greek words differ by a single letter; the sense of the verse shifts, though not any doctrine. In John 1:18 manuscripts differ on whether the text speaks of the only-begotten Son or the only-begotten God. The text of the site’s Bible reader follows the traditional reading “Son”, while some of the oldest manuscripts have “God”. Either reading is consistent with the Church’s faith, since the Gospel of John teaches the divinity of the Son in several places. Even so, the difference is the kind a translation may note in a footnote.',
    ],
    ar: [
      'تنشأ القراءات العرضية من آليات النسخ. فالناسخ الذي قفزت عينه بين نهايتي سطرين متشابهتين قد يحذف الكلمات التي بينهما؛ وقد يكتب كلمة مرتين؛ وقد يخلط بين حرفين أو كلمتين متشابهتين في السمع حين تُقرأ على جماعة من النسّاخ؛ وقد يكتب في المتن عبارة وضعها قارئ سابق في الهامش. ولم تكن التهجئة موحدة، فبعض الفروق مجرد تهجئات مختلفة للكلمة نفسها.',
      'والقراءات المتعمدة أقل لكنها حقيقية. فقد يسهّل الناسخ عبارة عسرة، أو يصحح ما ظنه خطأ، أو يجعل فقرة إنجيلية توافق موازيتها في إنجيل آخر (التوفيق)، أو يضيف عبارة تفسيرية. والدافع عادة مساعدة القارئ لا تغيير التعليم، وإن أُجريت قلة من التغييرات لتوضيح عقائدي.',
      'ويقسم الباحثون الشواهد إلى خارجية وداخلية. فالشواهد الخارجية هي قِدم المخطوطات التي تسند كل قراءة وانتشارها الجغرافي وجودتها، ومعها الترجمات القديمة واقتباسات الآباء. والشواهد الداخلية تسأل أي قراءة كان الناسخ أرجح أن يغيرها إلى الأخرى. وقاعدتان شائعتان: أن القراءة الأعسر كثيرًا ما تكون الأقدم لأن النسّاخ يميلون إلى التسهيل، وأن القراءة الأقصر كثيرًا ما تكون الأقدم لأن النسّاخ يميلون إلى الإضافة. وهما قاعدتان تقريبيتان لا قانونان، وتُحكم كل حالة بذاتها.',
      'ويساعد على فهم المدى النظر في أمثلة. ففي 1 تسالونيكي 2: 7 تقرأ بعض المخطوطات أن الرسل كانوا «مترفقين» وسط التسالونيكيين وتقرأ أخرى أنهم كانوا «أطفالًا» وسطهم، والكلمتان اليونانيتان تختلفان بحرف واحد؛ فيتحول معنى الآية دون أن يتأثر أي تعليم. وفي يوحنا 1: 18 تختلف المخطوطات هل يتكلم النص عن الابن الوحيد أم الإله الوحيد. وقارئ الكتاب المقدس في الموقع يتبع القراءة التقليدية «الابن»، بينما في بعض أقدم المخطوطات «الله». وكلتا القراءتين تتفق مع إيمان الكنيسة، لأن إنجيل يوحنا يعلّم لاهوت الابن في مواضع عدة. ومع ذلك فالفرق مما قد تشير إليه الترجمة في حاشية.',
    ],
  },
  glossary: ['textual-variant', 'textual-criticism', 'manuscript', 'interpolation', 'codex', 'papyrus'],
  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'Hand-copied manuscripts of the New Testament differ at many places, and the differences have identifiable accidental and intentional causes.',
        ar: 'تختلف مخطوطات العهد الجديد المنسوخة بخط اليد في مواضع كثيرة، ولهذه الاختلافات أسباب عرضية ومتعمدة يمكن تحديدها.',
      },
      argumentType: 'textual',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'This is the basic description of the field in standard textbooks and can be checked by anyone who compares manuscripts in the online collections.',
        ar: 'هذا هو الوصف الأساسي للميدان في المراجع الدراسية المعتمدة، ويمكن لأي أحد التحقق منه بمقارنة المخطوطات في المجموعات الإلكترونية.',
      },
      limits: {
        en: 'It says nothing about how many variants affect meaning or which reading is original at any place.',
        ar: 'لا يقول شيئًا عن عدد القراءات المؤثرة في المعنى ولا أي قراءة أصلية في أي موضع.',
      },
      evidence: ['e1', 'e2', 'e3'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'Most variants are minor, and the few that affect the sense of a passage are recorded in the notes of critical editions and many translations.',
        ar: 'أكثر القراءات المتباينة صغير، وقليل منها يؤثر في معنى الفقرة، ويُسجَّل في حواشي الطبعات النقدية وكثير من الترجمات.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'Textbooks describe the bulk of variants as small. The line between minor and meaningful is a matter of judgment on which scholars differ.',
        ar: 'تصف المراجع الدراسية معظم القراءات بأنها صغيرة. والحد بين الصغير والمؤثر مسألة تقدير يختلف فيها الباحثون.',
      },
      limits: {
        en: 'A small share of the variants may still concern passages that matter greatly to readers.',
        ar: 'قد تتعلق نسبة صغيرة من القراءات بفقرات تهم القرّاء كثيرًا.',
      },
      evidence: ['e1', 'e4', 'e5'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'Scholars have methods for deciding between readings, based on external evidence from manuscripts and internal evidence about how copyists behave.',
        ar: 'للباحثين طرق للمفاضلة بين القراءات، تقوم على الشواهد الخارجية من المخطوطات والشواهد الداخلية عن سلوك النسّاخ.',
      },
      argumentType: 'textual',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'The methods are described in the standard textbook and applied in critical editions. They are not infallible, and their results are open to challenge and revision.',
        ar: 'تُوصف الطرق في المرجع الدراسي المعتمد وتُطبق في الطبعات النقدية. وليست معصومة، ونتائجها قابلة للطعن والمراجعة.',
      },
      limits: {
        en: 'The methods do not always give a certain result; some places remain open.',
        ar: 'لا تعطي الطرق دائمًا نتيجة مؤكدة؛ وتبقى مواضع مفتوحة.',
      },
      evidence: ['e1', 'e2'],
    },
  ],
  evidence: [
    {
      id: 'e1',
      sourceId: 'S27',
      locator: 'whole work (thesis as the authors state it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'The Metzger and Ehrman textbook is the standard introduction to New Testament textual criticism. It describes the manuscripts, the causes of variation, accidental and intentional, and the methods for choosing between readings.',
        ar: 'كتاب ميتزغر وإيرمان المرجع الدراسي المعتمد في النقد النصي للعهد الجديد. وهو يصف المخطوطات وأسباب التباين، العرضية والمتعمدة، وطرق الاختيار بين القراءات.',
      },
      inference: {
        en: 'The causes and methods in this article are those of mainstream textual criticism.',
        ar: 'الأسباب والطرق في هذه المقالة هي أسباب النقد النصي السائد وطرقه.',
      },
    },
    {
      id: 'e2',
      sourceId: 'S23',
      locator: 'whole work (database as a whole; no manuscript or reading cited)',
      role: 'supports',
      states: {
        en: 'The Virtual Manuscript Room gives scholarly descriptions and images of New Testament manuscripts, so that readers can compare witnesses.',
        ar: 'تقدم غرفة المخطوطات الافتراضية أوصافًا علمية وصورًا لمخطوطات العهد الجديد ليتمكن القراء من مقارنة الشواهد.',
      },
      inference: {
        en: 'The differences can be seen in the manuscripts themselves, so the reader need not rely on a summary.',
        ar: 'يمكن رؤية الاختلافات في المخطوطات نفسها، فلا يحتاج القارئ إلى الاعتماد على ملخص.',
      },
    },
    {
      id: 'e3',
      sourceId: 'S21',
      locator: 'whole work (digital edition as a whole; no folio cited)',
      role: 'context',
      states: {
        en: 'The Codex Sinaiticus Project presents a fourth-century Bible manuscript online, with transcription and images, including corrections made by later hands.',
        ar: 'يعرض مشروع المخطوط السينائي مخطوطًا كتابيًا من القرن الرابع على الإنترنت بنسخة منقولة وصور، ومنها تصحيحات أجرتها أيادٍ لاحقة.',
      },
      inference: {
        en: 'A single early manuscript already shows the habits of copyists, including later correctors, and can be compared with other witnesses. Reuse of the images is restricted, so the site links rather than reproduces.',
        ar: 'تُظهر مخطوطة مبكرة واحدة عادات النسّاخ، ومنها المصححون اللاحقون، ويمكن مقارنتها بشواهد أخرى. وإعادة استخدام الصور مقيدة، فيكتفي الموقع بالإحالة.',
      },
    },
    {
      id: 'e4',
      sourceId: 'S62',
      locator: '1 Thessalonians 2:7',
      role: 'context',
      states: {
        en: 'In the site’s Bible reader, the verse speaks of the apostles being gentle among the Thessalonians as a nursing mother cherishes her children. A different reading found in some manuscripts says they were infants among them.',
        ar: 'في قارئ الكتاب المقدس بالموقع تتكلم الآية عن الرسل مترفقين بين التسالونيكيين كما تحنو المرضعة على أولادها. وتقول قراءة أخرى في بعض المخطوطات إنهم كانوا أطفالًا بينهم.',
      },
      inference: {
        en: 'One letter changes the Greek word and shifts the picture used in the verse. It is an example of a small variant that affects sense but not doctrine, and it is decided by weighing the manuscripts and the flow of St Paul’s sentence.',
        ar: 'حرف واحد يغير الكلمة اليونانية ويحول الصورة المستعملة في الآية. وهي مثال على قراءة صغيرة تمس المعنى ولا تمس العقيدة، وتُحسم بوزن المخطوطات وسياق جملة القديس بولس.',
      },
      bible: { book: '1-thessalonians', chapter: 2, verse: '7' },
    },
    {
      id: 'e5',
      sourceId: 'S62',
      locator: 'John 1:18',
      role: 'context',
      states: {
        en: 'The verse says that no one has seen God at any time and that the only-begotten has made him known. Manuscripts differ over whether the one who makes him known is called “Son” or “God”.',
        ar: 'تقول الآية إن الله لم يره أحد قط، وإن الابن الوحيد (أو الوحيد) هو الذي أخبر عنه. وتختلف المخطوطات هل يُسمى الذي يخبر عنه «ابنًا» أم «إلهًا».',
      },
      inference: {
        en: 'Here the variant touches how the Son is named in a verse about his unique relation to the Father. The Church confesses the Son’s divinity on the testimony of the whole Gospel, so neither reading alone carries the doctrine.',
        ar: 'تتصل القراءة هنا بكيفية تسمية الابن في آية عن علاقته الفريدة بالآب. والكنيسة تعترف بلاهوت الابن على شهادة الإنجيل كله، فلا تحمل أي من القراءتين العقيدة وحدها.',
      },
      bible: { book: 'john', chapter: 1, verse: '18' },
    },
  ],
  objections: [
    {
      id: 'o1',
      statement: {
        en: 'There are hundreds of thousands of variants, so the New Testament text cannot be trusted.',
        ar: 'توجد مئات الآلاف من القراءات المتباينة، فلا يمكن الوثوق بنص العهد الجديد.',
      },
      response: {
        en: [
          'The number is large because it counts every difference in every manuscript, and a single difference found in a thousand copies is counted a thousand times. A large number is what one expects when a text survives in thousands of copies.',
          'What matters is what the variants are and where they fall. Most are minor, and the manuscripts allow scholars to work out the earlier reading in the great majority of places. The sceptic is right that a few places are uncertain, and the notes of critical editions say where.',
        ],
        ar: [
          'العدد كبير لأنه يحصي كل اختلاف في كل مخطوطة، والاختلاف الواحد الموجود في ألف نسخة يُحسب ألف مرة. والعدد الكبير هو المتوقع حين ينجو نص في آلاف النسخ.',
          'والمهم هو ما هي القراءات وأين تقع. فأكثرها صغير، وتتيح المخطوطات للباحثين معرفة القراءة الأقدم في الغالبية العظمى من المواضع. والمشكك محق في أن مواضع قليلة غير مؤكدة، وتبيّن حواشي الطبعات النقدية أين.',
        ],
      },
      limits: {
        en: 'It does not remove the uncertain places.',
        ar: 'لا يزيل المواضع غير المؤكدة.',
      },
      evidence: ['e1', 'e2'],
    },
    {
      id: 'o2',
      statement: {
        en: 'Some variants touch doctrine, such as the name of the Son in John 1:18, so the Church’s teaching rests on an uncertain text.',
        ar: 'بعض القراءات تمس العقيدة، مثل اسم الابن في يوحنا 1: 18، فتعليم الكنيسة قائم على نص غير مؤكد.',
      },
      response: {
        en: [
          'It is true that a few variants bear on how a doctrine is expressed. In the case of John 1:18 both readings are compatible with the Church’s faith, and the divinity of the Son does not depend on one verse. The Church’s teaching rests on the witness of Scripture as a whole, received within Tradition.',
          'Where a variant is more significant, honesty requires saying so, which is what footnotes do. The three longer disputed passages are treated in their own articles.',
        ],
        ar: [
          'صحيح أن قليلًا من القراءات يتصل بكيفية التعبير عن عقيدة. وفي يوحنا 1: 18 تتفق القراءتان مع إيمان الكنيسة، ولا يتوقف لاهوت الابن على آية واحدة. وتعليم الكنيسة قائم على شهادة الكتاب كله، متسلَّمًا داخل التقليد.',
          'وحيث تكون القراءة أهم تقتضي الأمانة أن يُقال ذلك، وهذا ما تفعله الحواشي. والفقرات الثلاث الأطول المتنازع عليها تُعالج في مقالاتها.',
        ],
      },
      limits: {
        en: 'It does not show that no variant matters to doctrine.',
        ar: 'لا يثبت أنه لا توجد قراءة تهم العقيدة.',
      },
      evidence: ['e5'],
    },
    {
      id: 'o3',
      statement: {
        en: 'The scholars who choose between readings are just guessing, or imposing their own preferences.',
        ar: 'الباحثون الذين يختارون بين القراءات يخمنون فقط أو يفرضون تفضيلاتهم.',
      },
      response: {
        en: [
          'The methods rest on checkable evidence: the age and quality of manuscripts, their geographical spread and the habits of scribes. Different scholars sometimes reach different results, and the debate is public.',
          'This is why the manuscripts are published and why critical editions give the evidence for each choice. Scholars from Christian and non-Christian backgrounds both use the same method.',
        ],
        ar: [
          'تقوم الطرق على شواهد قابلة للتحقق: قِدم المخطوطات وجودتها وانتشارها الجغرافي وعادات النسّاخ. وقد يصل الباحثون المختلفون أحيانًا إلى نتائج مختلفة، والنقاش علني.',
          'ولهذا تُنشر المخطوطات وتعطي الطبعات النقدية الشواهد لكل اختيار. ويستعمل الباحثون من خلفيات مسيحية وغير مسيحية الطريقة نفسها.',
        ],
      },
      limits: {
        en: 'The methods yield probabilities, not certainty.',
        ar: 'تعطي الطرق ترجيحات لا يقينًا.',
      },
      evidence: ['e1', 'e3'],
    },
  ],
  christianResponse: {
    historical: {
      en: [
        'Historically, textual variants are the ordinary result of copying by hand, and the discipline that studies them is a public, evidence-based one. The existence of variants shows that the text was copied and not lost, and the large number of manuscripts is what makes it possible to detect and set aside many of the changes.',
        'A reader of any religion can follow this reasoning, since it applies to any ancient book.',
      ],
      ar: [
        'تاريخيًا، القراءات المتباينة نتيجة معتادة للنسخ بخط اليد، والعلم الذي يدرسها علم علني قائم على الشواهد. ووجود القراءات يبيّن أن النص نُسخ ولم يضع، وكثرة المخطوطات هي التي تتيح اكتشاف كثير من التغييرات واستبعادها.',
        'ويستطيع قارئ من أي دين أن يتابع هذا الاستدلال، لأنه ينطبق على أي كتاب قديم.',
      ],
    },
    theological: {
      en: [
        'The Church does not fear the study of variants. She confesses that the Scriptures are inspired and that she has received them in her life, and she welcomes the careful work that seeks to know the text accurately. A Christian can honour the scribes who copied the Scriptures with devotion, while accepting that human copyists sometimes erred.',
        'This is theological and is to be kept apart from the historical description above.',
      ],
      ar: [
        'لا تخشى الكنيسة دراسة القراءات المتباينة. فهي تعترف بأن الكتب المقدسة موحى بها وبأنها تسلمتها في حياتها، وترحب بالعمل الدقيق الذي يسعى إلى معرفة النص بدقة. ويستطيع المسيحي أن يكرّم النسّاخ الذين نسخوا الكتب بتقوى، وأن يقبل في الوقت نفسه أن النسّاخ البشر أخطؤوا أحيانًا.',
        'وهذا لاهوتي وينبغي إبقاؤه منفصلًا عن الوصف التاريخي أعلاه.',
      ],
    },
  },
  coptic: {
    en: [
      'Coptic manuscripts and translations of the New Testament are among the early witnesses that textual scholars study, so the Coptic tradition is itself part of the evidence. The Church has copied and read Scripture in Coptic and Arabic for centuries, and the care of her scribes is part of that heritage.',
    ],
    ar: [
      'مخطوطات العهد الجديد وترجماته القبطية من الشواهد المبكرة التي يدرسها الباحثون في النص، فالتقليد القبطي نفسه جزء من الشواهد. وقد نسخت الكنيسة الكتاب المقدس وقرأته بالقبطية والعربية قرونًا، وعناية نسّاخها جزء من ذلك الإرث.',
    ],
  },
  disputed: {
    en: [
      'Scholars differ over how to weigh the rules of thumb, over how far to trust particular early manuscripts, and over whether the goal should be the “original text” or the earliest recoverable form of the text. They also differ about how many variants are significant, depending on what counts as significant.',
      'They agree that variants exist and arise in the ways described; the dispute is about the application in particular cases.',
    ],
    ar: [
      'يختلف الباحثون في كيفية وزن القواعد التقريبية، وفي مدى الثقة بمخطوطات مبكرة معينة، وفي هل الهدف «النص الأصلي» أم أقدم صورة يمكن استردادها. ويختلفون أيضًا في عدد القراءات المهمة بحسب معنى «المهم».',
      'ويتفقون على أن القراءات موجودة وأنها تنشأ بالطرق الموصوفة؛ والخلاف في التطبيق في حالات بعينها.',
    ],
  },
  conclusion: {
    en: 'A textual variant is a place where manuscripts differ. Variants come from ordinary copying, most are small, and a few matter. Scholars compare the evidence openly and record their judgments in notes. Knowing this lets a reader treat a footnote as information about the manuscripts and not as a reason for alarm.',
    ar: 'القراءة المتباينة موضع تختلف فيه المخطوطات. وتنشأ القراءات من نسخ معتاد، وأكثرها صغير، وقليل منها مهم. ويقارن الباحثون الشواهد علنًا ويسجلون أحكامهم في الحواشي. ومعرفة ذلك تتيح للقارئ أن يتعامل مع الحاشية معلومةً عن المخطوطات لا سببًا للفزع.',
  },
  furtherReading: ['S27', 'S23', 'S24', 'S21', 'S62'],
  related: ['has-bible-changed', 'footnoted-passages', 'preservation-vs-inspiration', 'mark-16-9-20', 'john-7-53-8-11', 'first-john-5-7-8'],
};
