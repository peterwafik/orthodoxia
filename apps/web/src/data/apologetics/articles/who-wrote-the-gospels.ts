import type { Article } from '../types.ts';

export const article: Article = {
  id: 'who-wrote-the-gospels',
  questionId: 'who-wrote-the-gospels',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article asks who wrote the four Gospels, what the books themselves say about their authors, what the early Church said, and how confident anyone can be. It sets out the traditional attributions to Matthew, Mark, Luke and John and the main scholarly doubts about them. It does not date the Gospels (see the article on when they were written) or ask whether they rest on eyewitnesses (see the article on the Gospels as eyewitness accounts).',
    ar: 'تسأل هذه المقالة من كتب الأناجيل الأربعة، وماذا تقول الأسفار نفسها عن كتّابها، وماذا قالت الكنيسة الأولى، وما درجة اليقين الممكنة. وهي تعرض النسبة التقليدية إلى متى ومرقس ولوقا ويوحنا وأهم الشكوك العلمية فيها. ولا تؤرخ الأناجيل (انظر مقالة متى كُتبت)، ولا تسأل هل تقوم على شهود عيان (انظر مقالة الأناجيل شهادات عيان).',
  },
  shortAnswer: {
    en: 'The four Gospels do not name their authors in their own text; the names Matthew, Mark, Luke and John come from titles attached to the books and from the testimony of Christians of the second century. The Church has always received the Gospels under these four names. Historians agree that the attributions are early and unanimous in the surviving evidence, but they differ about how far they preserve the memory of real authorship: some accept them with little qualification, some accept the names of Mark and Luke more readily than those of Matthew and John, and some regard them as later attributions. What the evidence settles is that these four books were known and read under these names very early; it does not by itself settle who held the pen.',
    ar: 'لا تذكر الأناجيل الأربعة أسماء كتّابها في متنها؛ فأسماء متى ومرقس ولوقا ويوحنا مأخوذة من عناوين أُلحقت بالأسفار ومن شهادة مسيحيين من القرن الثاني. وقد تسلمت الكنيسة الأناجيل دائمًا بهذه الأسماء الأربعة. ويرى المؤرخون أن النسبة قديمة ومجمعة في الشواهد الباقية، لكنهم يختلفون في مدى حفظها لذكرى التأليف الحقيقي: فبعضهم يقبلها دون تحفظ كبير، وبعضهم يقبل اسمي مرقس ولوقا أكثر من اسمي متى ويوحنا، وبعضهم يعدّها نسبة لاحقة. والذي تحسمه الشواهد هو أن هذه الأسفار الأربعة عُرفت وقُرئت بهذه الأسماء مبكرًا جدًا؛ أما من أمسك القلم فلا تحسمه وحدها.',
  },
  quickPoints: {
    en: [
      'The Gospel texts themselves are anonymous: none opens with “I, Matthew” or the like.',
      'The Church has received the four Gospels under the names Matthew, Mark, Luke and John since at least the second century, and no rival set of names for these four survives.',
      'Luke speaks in his own prologue as a writer who gathered and ordered earlier accounts; the Gospel of John points to a disciple who bore witness and whose testimony is described as true.',
      'Many critical scholars doubt that Matthew and John were written by the apostles of those names; others defend the traditional attributions. This is a real disagreement.',
      'In the Coptic Orthodox Church, St Mark the Evangelist is also the apostle of Egypt and the founder of the See of Alexandria.',
      'Receiving a Gospel as Scripture does not depend on solving every question of authorship.',
    ],
    ar: [
      'نصوص الأناجيل نفسها مجهولة الاسم: لا يبدأ أي منها بعبارة «أنا متى» أو نحوها.',
      'تسلمت الكنيسة الأناجيل الأربعة بأسماء متى ومرقس ولوقا ويوحنا منذ القرن الثاني على الأقل، ولا تبقى أسماء منافسة لهذه الأناجيل الأربعة.',
      'يتكلم لوقا في مقدمته كاتبًا جمع روايات سابقة ورتّبها؛ ويشير إنجيل يوحنا إلى تلميذ شهد، ويصف شهادته بأنها حق.',
      'يشكك كثير من الباحثين النقديين في أن متى ويوحنا كتبهما الرسولان بهذين الاسمين؛ ويدافع آخرون عن النسبة التقليدية. وهذا خلاف حقيقي.',
      'في الكنيسة القبطية الأرثوذكسية، القديس مرقس الإنجيلي هو أيضًا رسول مصر ومؤسس كرسي الإسكندرية.',
      'تسلّم الإنجيل كتابًا مقدسًا لا يتوقف على حل كل مسائل التأليف.',
    ],
  },
  argumentTypes: ['historical', 'textual', 'theological'],
  assessment: {
    label: 'actively_debated',
    explanation: {
      en: 'That the Gospels circulated early under four fixed names is well supported. Whether those names record real authorship, and in what sense (author, source, tradent), is actively debated: the evidence from the books and from the second-century witnesses allows more than one reading, and scholars who share no faith position weigh it differently.',
      ar: 'إن تداول الأناجيل مبكرًا بأربعة أسماء ثابتة أمر تسنده الأدلة. أما هل تسجل هذه الأسماء تأليفًا حقيقيًا، وبأي معنى (كاتب أم مصدر أم ناقل تقليد)، فمحل نقاش حي: إذ تسمح الشواهد في الأسفار وفي شهادات القرن الثاني بأكثر من قراءة، ويزنها الباحثون على نحو مختلف ولو لم يجمعهم موقف إيماني.',
    },
  },
  whyExamine: {
    en: [
      'Readers often hear two opposite things: that the Gospels were written by the apostles themselves, and that they were written by unknown authors long after the events. Each is stated more confidently than the evidence allows. A careful reader needs to know what is actually in the texts and in the earliest testimony.',
      'The question matters for trust. The authors’ closeness to the events affects how the Gospels can be used as history, though it does not decide whether the Church receives them as Scripture. It is better to look at this question openly than to assume an answer.',
    ],
    ar: [
      'يسمع القراء كثيرًا قولين متعاكسين: أن الأناجيل كتبها الرسل أنفسهم، وأنها كتبها مجهولون بعد الأحداث بزمن طويل. وكلاهما يُقال بثقة أكبر مما تسمح به الشواهد. والقارئ المدقق يحتاج إلى معرفة ما في النصوص فعلًا وما في أقدم الشهادات.',
      'والمسألة تتصل بالثقة. فقرب الكتّاب من الأحداث يؤثر في كيفية الاستفادة من الأناجيل تاريخيًا، وإن كان لا يحسم هل تتسلمها الكنيسة كتابًا مقدسًا. والأفضل أن تُفحص هذه المسألة علنًا بدل افتراض جواب.',
    ],
  },
  background: {
    en: [
      'In ancient book culture a work could circulate without the author’s name in the text. The Gospels follow this pattern: their narratives are told in the third person, and none states its author’s name. The headings “According to Matthew”, “According to Mark”, “According to Luke” and “According to John” were attached when the Gospels were collected and read together, and they appear in the surviving manuscripts, although the manuscripts themselves are later than the books.',
      'The earliest testimony about authorship comes from outside the Gospels. Papias of Hierapolis, a bishop of the early second century whose words survive in Eusebius, said that Mark, who had been Peter’s interpreter, wrote down accurately but not in order what he remembered of the Lord’s sayings and deeds, and that Matthew put the sayings in order in the Hebrew language. Irenaeus of Lyons, near the end of the second century, names all four Evangelists and defends the fourfold Gospel as the Church’s own. Scholars debate how much weight these statements bear, and in particular what Papias meant by Matthew’s work, since the Greek Gospel of Matthew does not read like a translation.',
      'Inside the books the evidence is limited. Luke’s prologue says that many had undertaken to write an account, that the events were handed on by those who were eyewitnesses and servants of the word from the beginning, and that the writer himself had followed things carefully and now writes in order. The Gospel of John says that the disciple who testifies to these things wrote them, and that his testimony is true; whether this describes the author or a source is itself discussed. Mark and Matthew say nothing of this kind about themselves.',
      'The two sides of the discussion can be stated fairly. Those who defend the traditional attributions point to the unanimity and the early date of the attributions, to the fact that Mark and Luke were not apostles and so were not obvious names to invent for authority, and to the fit between the text and what the testimonies say. Those who doubt them point to the Gospels’ anonymity, to Matthew’s use of Mark (so that an eyewitness would be copying a non-witness), to the Greek style and to the distance in time. The two sides read the same facts and reach different weights.',
    ],
    ar: [
      'في ثقافة الكتاب القديمة كان العمل يتداول دون اسم المؤلف في متنه. وتجري الأناجيل على هذا النمط: فروايتها بصيغة الغائب، ولا يذكر أي منها اسم كاتبه. أما العناوين «بحسب متى» و«بحسب مرقس» و«بحسب لوقا» و«بحسب يوحنا» فقد أُلحقت حين جُمعت الأناجيل وقُرئت معًا، وتظهر في المخطوطات الباقية، مع أن المخطوطات نفسها أحدث من الأسفار.',
      'وأقدم شهادة عن التأليف جاءت من خارج الأناجيل. فبابياس أسقف هيرابوليس، في أوائل القرن الثاني، ونصوصه باقية عند أوسابيوس، قال إن مرقس، الذي كان مترجم بطرس، كتب بدقة، لكن دون ترتيب، ما تذكره من أقوال الرب وأعماله، وإن متى رتّب الأقوال باللغة العبرية. وإيريناوس أسقف ليون، قرب نهاية القرن الثاني، يسمي الإنجيليين الأربعة كلهم ويدافع عن الإنجيل الرباعي بوصفه إنجيل الكنيسة. ويناقش الباحثون وزن هذه الأقوال، وبخاصة ما قصده بابياس بعمل متى، لأن إنجيل متى اليوناني لا يقرأ كأنه ترجمة.',
      'وفي داخل الأسفار الأدلة محدودة. فمقدمة لوقا تقول إن كثيرين أخذوا في كتابة رواية، وإن الأحداث سلّمها الذين كانوا من البدء معاينين وخدامًا للكلمة، وإن الكاتب نفسه تتبع الأمور بدقة ويكتب الآن بترتيب. ويقول إنجيل يوحنا إن التلميذ الذي يشهد بهذه الأمور هو الذي كتبها، وإن شهادته حق؛ وهل يصف هذا الكاتب أم مصدرًا، فمسألة تُناقش. أما مرقس ومتى فلا يقولان شيئًا من هذا عن نفسيهما.',
      'ويمكن عرض طرفي النقاش بإنصاف. فالذين يدافعون عن النسبة التقليدية يشيرون إلى إجماعها وقِدمها، وإلى أن مرقس ولوقا لم يكونا رسولين فلم يكونا اسمين بديهيين لاختراع سلطة، وإلى ملاءمة النص لما تقوله الشهادات. والذين يشككون فيها يشيرون إلى مجهولية الأناجيل، وإلى استعمال متى لمرقس (فيكون شاهد العيان ناقلًا عن غير شاهد)، وإلى الأسلوب اليوناني، وإلى البعد الزمني. والفريقان يقرآن الوقائع نفسها ويصلان إلى أوزان مختلفة.',
    ],
  },
  glossary: ['gospel', 'synoptic-gospels', 'eyewitness', 'primary-source', 'secondary-source', 'tradition'],
  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'The four Gospels are anonymous in their own text; the attributions to Matthew, Mark, Luke and John come from titles and from second-century testimony.',
        ar: 'الأناجيل الأربعة مجهولة الاسم في متنها؛ ونسبتها إلى متى ومرقس ولوقا ويوحنا مأخوذة من العناوين ومن شهادة القرن الثاني.',
      },
      argumentType: 'textual',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'The narratives are in the third person and give no author’s name, while the title headings and the witness of Papias and Irenaeus supply the names. This is a description of the evidence, which scholars with different views accept.',
        ar: 'الروايات بصيغة الغائب ولا تذكر اسم كاتب، بينما تقدم العناوين وشهادة بابياس وإيريناوس الأسماء. وهذا وصف للشواهد يقبله الباحثون على اختلاف آرائهم.',
      },
      limits: {
        en: 'It does not say whether the names are correct, only where they come from.',
        ar: 'لا يقول هل الأسماء صحيحة، بل يبيّن مصدرها فقط.',
      },
      evidence: ['e1', 'e2', 'e5'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'The Gospels were received under these four names early and uniformly, with no rival attribution for these books surviving.',
        ar: 'تسلّم المسيحيون الأناجيل بهذه الأسماء الأربعة مبكرًا وعلى نحو موحد، ولا تبقى نسبة منافسة لهذه الأسفار.',
      },
      argumentType: 'historical',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The testimony of Papias, Irenaeus and the manuscript titles agree on the names. Scholars differ about how early the titles were attached and whether the agreement reflects independent knowledge or the spread of one tradition.',
        ar: 'تتفق شهادة بابياس وإيريناوس وعناوين المخطوطات على الأسماء. ويختلف الباحثون في مدى مبكر إلحاق العناوين، وهل يعكس الاتفاق معرفة مستقلة أم انتشار تقليد واحد.',
      },
      limits: {
        en: 'Agreement on a name does not show that the name goes back to the writer.',
        ar: 'الاتفاق على اسم لا يبيّن أن الاسم يعود إلى الكاتب.',
      },
      evidence: ['e1', 'e5'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'Whether Matthew and John were written by the apostles of those names, or by others using their testimony, is disputed among historians.',
        ar: 'هل كتب متى ويوحنا الرسولان بهذين الاسمين، أم كتبهما آخرون بالاستفادة من شهادتهما، مسألة مختلف فيها بين المؤرخين.',
      },
      argumentType: 'historical',
      assessment: 'actively_debated',
      rationale: {
        en: 'The texts give limited statements about their sources, and Matthew’s use of Mark is widely held among scholars. Defenders reply that an apostle might use another’s account, and that the Gospel of John speaks of a witness behind it.',
        ar: 'تعطي النصوص عبارات محدودة عن مصادرها، ويرى كثير من الباحثين أن متى استعمل مرقس. ويرد المدافعون بأن الرسول قد يستعمل رواية غيره، وبأن إنجيل يوحنا يشير إلى شاهد وراءه.',
      },
      limits: {
        en: 'The question is open on the available evidence; no manuscript or inscription settles it.',
        ar: 'المسألة مفتوحة على الشواهد المتاحة؛ فلا مخطوطة ولا نقش يحسمها.',
      },
      evidence: ['e3', 'e4', 'e6'],
    },
    {
      id: 'c4',
      proposition: {
        en: 'The Church receives the four Gospels as Scripture on the strength of her Tradition, whatever answer is given to each question of literary authorship.',
        ar: 'تتسلم الكنيسة الأناجيل الأربعة كتابًا مقدسًا بقوة تقليدها، أيًّا كان الجواب عن كل مسألة تتعلق بالتأليف الأدبي.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'The Church’s reception of the Gospels is a matter of what she has handed on and read in worship. She also holds that they proclaim the apostolic witness.',
        ar: 'تسلّم الكنيسة للأناجيل يقوم على ما سلّمته وقرأته في العبادة. وهي تؤمن أيضًا بأنها تعلن الشهادة الرسولية.',
      },
      limits: {
        en: 'This is a confession of faith. It does not answer the historians’ question and is not meant to.',
        ar: 'هذا اعتراف إيماني. وهو لا يجيب عن سؤال المؤرخين ولا يقصد ذلك.',
      },
      evidence: ['e8'],
    },
  ],
  evidence: [
    {
      id: 'e1',
      sourceId: 'S62',
      locator: 'Matthew 1:1; Mark 1:1; John 1:1-18 (openings of the Gospels as read in the site’s Bible reader)',
      role: 'context',
      states: {
        en: 'The openings of Matthew, Mark and John begin with a genealogy, a statement of the Gospel’s subject and a hymn to the Word, and none introduces its author by name in the narrative.',
        ar: 'تبدأ إنجيلا متى ومرقس وإنجيل يوحنا بنسب وبعبارة عن موضوع الإنجيل وبترنيمة عن الكلمة، ولا يعرّف أي منها بكاتبه في السرد.',
      },
      inference: {
        en: 'The names Matthew, Mark and John do not come from the first lines of the books. The titles are separate from the text.',
        ar: 'لا تأتي أسماء متى ومرقس ويوحنا من أسطر الأسفار الأولى. فالعناوين منفصلة عن النص.',
      },
      bible: { book: 'mark', chapter: 1, verse: '1' },
    },
    {
      id: 'e2',
      sourceId: 'S62',
      locator: 'Luke 1:1-4',
      role: 'supports',
      states: {
        en: 'Luke’s prologue says that many had set out to compile an account, that what they relied on was handed down from eyewitnesses who were servants of the word, and that the writer, having followed everything closely, writes an orderly account for Theophilus.',
        ar: 'تقول مقدمة لوقا إن كثيرين أخذوا في تأليف رواية، وإن ما اعتمدوا عليه سلّمه معاينون كانوا خدامًا للكلمة، وإن الكاتب بعد أن تتبع كل شيء بدقة يكتب رواية مرتبة لثاوفيلس.',
      },
      inference: {
        en: 'The writer presents himself as a compiler working from earlier accounts and eyewitness tradition, not as an eyewitness. This agrees with the tradition that Luke was not an apostle. The passage does not name him.',
        ar: 'يقدم الكاتب نفسه جامعًا يعمل من روايات سابقة ومن تقليد شهود العيان، لا شاهد عيان. وهذا يتفق مع التقليد القائل إن لوقا لم يكن رسولًا. والفقرة لا تسميه.',
      },
      bible: { book: 'luke', chapter: 1, verse: '1-4' },
    },
    {
      id: 'e3',
      sourceId: 'S62',
      locator: 'John 21:24-25',
      role: 'context',
      states: {
        en: 'The final verses of John say that this is the disciple who testifies to these things and has written them, that his testimony is true, and that the world could not contain all the books if everything Jesus did were written.',
        ar: 'تقول آخر آيات إنجيل يوحنا إن هذا هو التلميذ الذي يشهد بهذه الأمور وكتبها، وإن شهادته حق، وإن العالم لا يسع الكتب إن كُتب كل ما صنعه يسوع.',
      },
      inference: {
        en: 'The Gospel claims a witness behind it. Whether “wrote” means that he penned it or caused it to be written, and who the “we” of the verse is, are debated. The verse is read here as an ancient document’s statement about its sources, not as proof.',
        ar: 'يدّعي الإنجيل وجود شاهد وراءه. وهل «كتب» تعني أنه خطّه بيده أو أمر بكتابته، ومن هم «نحن» في الآية، مسائل مختلف فيها. وتُقرأ الآية هنا قولًا لوثيقة قديمة عن مصادرها لا برهانًا.',
      },
      bible: { book: 'john', chapter: 21, verse: '24-25' },
    },
    {
      id: 'e4',
      sourceId: 'S62',
      locator: 'Matthew 9:9; Mark 2:14',
      role: 'context',
      states: {
        en: 'Matthew tells of the call of a tax collector named Matthew; the parallel passage in Mark names the man called Levi, son of Alphaeus.',
        ar: 'يروي متى دعوة جابي ضرائب اسمه متى؛ وتسمي الفقرة الموازية في مرقس الرجل لاوي بن حلفى.',
      },
      inference: {
        en: 'The Gospel tradition does connect the name Matthew to a tax collector among the Twelve. The difference of names in the parallel passages is a detail scholars discuss, and it does not show who wrote the Gospel.',
        ar: 'يربط التقليد الإنجيلي فعلًا اسم متى بجابي ضرائب من الاثني عشر. واختلاف الاسمين في الفقرتين الموازيتين تفصيل يناقشه الباحثون، ولا يبيّن من كتب الإنجيل.',
      },
      bible: { book: 'matthew', chapter: 9, verse: '9' },
    },
    {
      id: 'e5',
      sourceId: 'S12',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'Richard Bauckham argues, on historical grounds, that the Gospels preserve eyewitness testimony and that early testimony such as that of Papias should be taken seriously. His thesis is debated by other scholars.',
        ar: 'يحتج ريتشارد بوكهام، على أسس تاريخية، بأن الأناجيل تحفظ شهادة شهود عيان، وبأن الشهادة المبكرة مثل شهادة بابياس ينبغي أخذها بجدية. ويناقش باحثون آخرون أطروحته.',
      },
      inference: {
        en: 'The case for the traditional attributions is argued by a serious scholar and is not merely a pious assumption. It is cited as one position in a live discussion.',
        ar: 'يدافع باحث جاد عن النسبة التقليدية، فهي ليست افتراضًا تقويًا فقط. ويُستشهد به بوصفه موقفًا واحدًا في نقاش حي.',
      },
    },
    {
      id: 'e6',
      sourceId: 'S13',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'challenges',
      states: {
        en: 'Bart Ehrman, who describes himself as an agnostic, argues in this book that the Gospels were shaped by decades of oral tradition and memory before they were written down. He draws on research on how memory works.',
        ar: 'يحتج بارت إيرمان، الذي يصف نفسه بأنه لا أدري، في هذا الكتاب بأن الأناجيل تشكلت بفعل عقود من التقليد الشفهي والذاكرة قبل تدوينها، مستندًا إلى أبحاث عن عمل الذاكرة.',
      },
      inference: {
        en: 'The sceptical position is also argued seriously. It bears on authorship because it asks how close the written Gospels are to the first witnesses. The Gospels are discussed further in the article on oral transmission.',
        ar: 'والموقف المتشكك يُحتج له بجدية أيضًا. وهو يتصل بالتأليف لأنه يسأل ما مدى قرب الأناجيل المكتوبة من الشهود الأوائل. وتُناقش الأناجيل أكثر في مقالة النقل الشفهي.',
      },
    },
    {
      id: 'e8',
      sourceId: 'S50',
      locator: 'First Apology 66-67',
      role: 'context',
      states: {
        en: 'Justin speaks of the memoirs composed by the apostles, called Gospels, and says that the memoirs of the apostles are read at the Sunday gathering.',
        ar: 'يتحدث يوستينوس عن التذكارات التي ألفها الرسل وتسمى أناجيل، ويقول إن تذكارات الرسل تُقرأ في اجتماع يوم الأحد.',
      },
      inference: {
        en: 'Around the middle of the second century a Christian writer already treats Gospels as books of apostolic origin read in worship. He does not name the four authors in these chapters, so his statement supports early liturgical use, not the particular attributions.',
        ar: 'في منتصف القرن الثاني تقريبًا كان كاتب مسيحي يعامل الأناجيل أسفارًا رسولية الأصل تُقرأ في العبادة. ولا يسمّي الكتّاب الأربعة في هذين الفصلين، فكلامه يسند الاستعمال الطقسي المبكر لا النسبة بعينها.',
      },
    },
  ],
  objections: [
    {
      id: 'o1',
      statement: {
        en: 'The Gospels are anonymous, so the names were added by later Christians to give the books authority.',
        ar: 'الأناجيل مجهولة الاسم، فالأسماء أضافها مسيحيون لاحقون ليعطوا الأسفار سلطانًا.',
      },
      response: {
        en: [
          'It is true that the names are not in the text, and that the headings are not the author’s own. This is a proper reason for caution.',
          'But if the aim had been to give the books maximum authority, the choice of Mark and Luke, who were not among the Twelve, is a curious one. The attribution may reflect a real memory, or it may reflect an early tradition about who stood behind each book. The surviving evidence supports a response that the names are early, and cannot show whether they are right.',
        ],
        ar: [
          'صحيح أن الأسماء ليست في النص، وأن العناوين ليست من وضع الكاتب. وهذا سبب وجيه للحذر.',
          'لكن لو كان الهدف إعطاء الأسفار أقصى سلطان لكان اختيار مرقس ولوقا، وهما ليسا من الاثني عشر، غريبًا. وقد تعكس النسبة ذكرى حقيقية، وقد تعكس تقليدًا مبكرًا عمن يقف وراء كل سفر. والشواهد الباقية تسند القول بأن الأسماء قديمة، ولا تستطيع أن تبيّن هل هي صحيحة.',
        ],
      },
      limits: {
        en: 'This argument from improbability is not proof. A scholar who doubts the attributions may reply that the names could have been chosen for other reasons, such as a connection with Peter or St Paul.',
        ar: 'هذه حجة من الاستبعاد وليست برهانًا. وقد يرد الباحث المشكك بأن الأسماء ربما اختيرت لأسباب أخرى، كالصلة ببطرس أو القديس بولس.',
      },
      evidence: ['e1', 'e5'],
    },
    {
      id: 'o2',
      statement: {
        en: 'Matthew copies about half of Mark, so Matthew the apostle would not have needed to borrow from a non-eyewitness; the Gospel cannot be by the apostle.',
        ar: 'متى ينقل نحو نصف مرقس، فما كان متى الرسول يحتاج إلى الاقتباس من غير شاهد عيان؛ فلا يمكن أن يكون الإنجيل له.',
      },
      response: {
        en: [
          'The dependence of Matthew on Mark is held by many scholars, and a fair reader should say so. The inference to authorship is not forced, however. Papias connects Mark with Peter, and an apostle who used a text associated with another apostle would be using a text he regarded as authoritative.',
          'Other scholars hold that a different literary relation explains the shared material, or that the author of the Greek Matthew drew on the testimony of the apostle without being him. The Church receives the Gospel under Matthew’s name in either case. The question is left open by the evidence.',
        ],
        ar: [
          'يقول كثير من الباحثين باعتماد متى على مرقس، وعلى القارئ المنصف أن يقول ذلك. لكن الاستدلال على التأليف ليس ملزمًا. فبابياس يربط مرقس ببطرس، والرسول الذي استعمل نصًا مرتبطًا برسول آخر يكون قد استعمل نصًا يراه ذا سلطان.',
          'ويرى باحثون آخرون أن علاقة أدبية مختلفة تفسر المادة المشتركة، أو أن كاتب متى اليوناني اعتمد على شهادة الرسول دون أن يكون هو. والكنيسة تتسلم الإنجيل باسم متى في الحالتين. والشواهد تترك المسألة مفتوحة.',
        ],
      },
      limits: {
        en: 'It does not prove that the apostle Matthew wrote the Greek Gospel of Matthew.',
        ar: 'لا يثبت أن متى الرسول كتب إنجيل متى اليوناني.',
      },
      evidence: ['e4', 'e6'],
    },
    {
      id: 'o3',
      statement: {
        en: 'If the authorship is uncertain, the Gospels cannot be reliable witnesses to Jesus.',
        ar: 'إن كان التأليف غير مؤكد فلا يمكن أن تكون الأناجيل شهادات موثوقة عن يسوع.',
      },
      response: {
        en: [
          'Uncertainty about a name is not the same as uncertainty about reliability. Historians use many ancient works of unknown or disputed authorship, and judge them by their sources, their date, their genre and their agreement with other evidence.',
          'For the Gospels this means looking at how close they are to the events and how they handled their sources. These are taken up in the articles on dating, oral transmission and eyewitness testimony.',
        ],
        ar: [
          'عدم اليقين في اسم ما ليس عدم يقين في الموثوقية. فالمؤرخون يستعملون أعمالًا قديمة كثيرة مجهولة الكاتب أو مختلفًا في كاتبها، ويحكمون عليها بمصادرها وتاريخها ونوعها وتوافقها مع شواهد أخرى.',
          'وفي الأناجيل يعني ذلك النظر في مدى قربها من الأحداث وفي كيفية تعاملها مع مصادرها. وهذا ما تعالجه مقالات التأريخ والنقل الشفهي وشهادة العيان.',
        ],
      },
      limits: {
        en: 'It does not show that the Gospels are reliable; it only shows that authorship by name is not the only test.',
        ar: 'لا يثبت أن الأناجيل موثوقة؛ إنه يبيّن فقط أن التأليف بالاسم ليس الاختبار الوحيد.',
      },
      evidence: ['e2'],
    },
  ],
  christianResponse: {
    historical: {
      en: [
        'Historically, what can be said is limited but not negligible. The four books were received under four names early, the earliest testimony links two of them with named apostolic figures (Mark with Peter), Luke describes his own method as that of a compiler who relied on eyewitnesses, and John points to a witness behind it. Whether this amounts to authorship in the modern sense is open.',
        'A historian can treat the Gospels as early witnesses to the traditions about Jesus without settling each authorship question, and should say plainly where the evidence stops.',
      ],
      ar: [
        'تاريخيًا، ما يمكن قوله محدود لكنه ليس هينًا. فالأسفار الأربعة تسلمها المسيحيون بأربعة أسماء مبكرًا، وأقدم شهادة تربط اثنين منها بشخصيتين رسوليتين مسماتين (مرقس ببطرس)، ولوقا يصف منهجه بأنه منهج جامع اعتمد على المعاينين، ويوحنا يشير إلى شاهد وراءه. وهل يرقى ذلك إلى تأليف بالمعنى الحديث مسألة مفتوحة.',
        'ويستطيع المؤرخ أن يعامل الأناجيل شهودًا مبكرة على التقاليد عن يسوع دون أن يحسم كل مسألة تأليف، وعليه أن يقول بوضوح أين تتوقف الشواهد.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that the Gospel is one, proclaimed in four forms, and that the Holy Spirit inspired the Evangelists. Her tradition names Matthew, Mark, Luke and John as those through whom the apostolic preaching came to be written. In this the Church reads her own memory, which she does not set aside because modern scholars weigh the evidence differently.',
        'This is a statement of faith and is separate from the historical discussion above. A reader who is not a Christian can follow the historical discussion without accepting it.',
      ],
      ar: [
        'تعترف الكنيسة بأن الإنجيل واحد يُكرَز به في أربع صور، وبأن الروح القدس أوحى إلى الإنجيليين. ويسمّي تقليدها متى ومرقس ولوقا ويوحنا الذين دُوّنت بواسطتهم الكرازة الرسولية. وهي في ذلك تقرأ ذاكرتها هي، ولا تنحيها لأن الباحثين المعاصرين يزنون الشواهد على نحو مختلف.',
        'وهذا قول إيماني منفصل عن النقاش التاريخي أعلاه. ويستطيع القارئ غير المسيحي أن يتابع النقاش التاريخي دون أن يقبله.',
      ],
    },
  },
  coptic: {
    en: [
      'The Coptic Orthodox Church honours St Mark the Evangelist as the writer of the second Gospel and as the apostle who preached in Egypt and founded the Church of Alexandria, whose successors sit on his throne. The Church’s tradition identifies him with the Mark of the Acts of the Apostles. This is the Church’s tradition, held and celebrated in her liturgical life.',
      'In the Coptic Mass the Gospel is read with special honour: the people stand, the book is carried in procession and the priest proclaims it. The four Evangelists are commemorated in the Church’s hymns. This practice shows how the Church receives the Gospels: as the Gospel of Christ proclaimed through four witnesses, not as four books whose value depends on a scholarly verdict about their authors.',
    ],
    ar: [
      'تكرّم الكنيسة القبطية الأرثوذكسية القديس مرقس الإنجيلي كاتب الإنجيل الثاني والرسول الذي كرز في مصر وأسس كنيسة الإسكندرية التي يجلس خلفاؤها على كرسيه. ويطابق تقليد الكنيسة بينه وبين مرقس المذكور في أعمال الرسل. وهذا تقليد الكنيسة، تحفظه وتحتفل به في حياتها الطقسية.',
      'وفي القداس القبطي يُقرأ الإنجيل بإكرام خاص: يقف الشعب، ويُحمل الكتاب في موكب، ويعلنه الكاهن. وتُذكر الأناجيل الأربعة وكتّابها في ألحان الكنيسة. وهذه الممارسة تبيّن كيف تتسلم الكنيسة الأناجيل: إنجيل المسيح المعلن بأربعة شهود، لا أربعة كتب تتوقف قيمتها على حكم الباحثين في كتّابها.',
    ],
  },
  disputed: {
    en: [
      'Scholars disagree about the sense in which the traditional names record authorship: whether the writer is the apostle, an associate, or a later author using their testimony. They disagree about what Papias meant, since his words survive only in quotation, and about whether the beloved disciple of John is the apostle John, another disciple or an idealised figure.',
      'They also disagree about how much weight the second-century testimony carries. Some see it as independent knowledge, others as the spread of one tradition. The evidence now available does not allow a certain answer.',
    ],
    ar: [
      'يختلف الباحثون في المعنى الذي تسجل به الأسماء التقليدية التأليف: هل الكاتب هو الرسول أم معاون له أم كاتب لاحق استعمل شهادتهما. ويختلفون في ما قصده بابياس، لأن كلامه لا يبقى إلا في اقتباس، وفي هوية التلميذ الحبيب في إنجيل يوحنا: أهو الرسول يوحنا أم تلميذ آخر أم شخصية مثالية.',
      'ويختلفون أيضًا في وزن شهادة القرن الثاني. فيراها بعضهم معرفة مستقلة ويراها آخرون انتشار تقليد واحد. والشواهد المتاحة اليوم لا تسمح بجواب قاطع.',
    ],
  },
  conclusion: {
    en: 'The Gospels came to the Church as books received under the names of Matthew, Mark, Luke and John, and that reception is early and unbroken. Whether the names record who actually wrote each book is disputed on the evidence available, and the honest answer is that it is not certain. The Church receives them within her Tradition, and the reader can examine the historical question without having to settle it first.',
    ar: 'وصلت الأناجيل إلى الكنيسة أسفارًا متسلَّمة بأسماء متى ومرقس ولوقا ويوحنا، وهذا التسلّم مبكر وغير منقطع. أما هل تسجل الأسماء من كتب كل سفر فعلًا فمختلف فيه على الشواهد المتاحة، والجواب الأمين أنه غير مؤكد. وتتسلمها الكنيسة داخل تقليدها، ويستطيع القارئ أن يفحص المسألة التاريخية دون أن يضطر إلى حسمها أولًا.',
  },
  furtherReading: ['S12', 'S13', 'S62', 'S50'],
  related: ['when-were-the-gospels-written', 'oral-transmission', 'gospels-as-eyewitness', 'did-jesus-exist', 'noncanonical-gospels', 'who-chose-the-books'],
};
