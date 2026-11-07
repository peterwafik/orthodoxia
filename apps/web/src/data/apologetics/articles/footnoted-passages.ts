import type { Article } from '../types.ts';

export const article: Article = {
  id: 'footnoted-passages',
  questionId: 'footnoted-passages',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article explains why modern Bibles often set three New Testament passages apart with a footnote or brackets (Mark 16:9–20, John 7:53–8:11 and the longer wording of 1 John 5:7–8), what the manuscript situation is, how editors decide, and whether a later addition changes the doctrine it mentions. It does not judge whether the passages are Scripture for the Church, and it does not give an official Coptic Orthodox position.',
    ar: 'تشرح هذه المقالة لماذا تضع الطبعات الحديثة للكتاب المقدس ثلاث فقرات من العهد الجديد بين أقواس أو في حاشية (مرقس 16: 9–20، ويوحنا 7: 53 – 8: 11، والصيغة الأطول في 1 يوحنا 5: 7–8)، وما وضع المخطوطات فيها، وكيف يقرر المحررون، وهل تُغيّر الإضافة المتأخرة العقيدة التي تذكرها. ولا تحكم المقالة بما إذا كانت الفقرات كتابًا مقدسًا بالنسبة إلى الكنيسة، ولا تقدّم موقفًا رسميًا للكنيسة القبطية الأرثوذكسية.',
  },
  shortAnswer: {
    en: 'A footnote records what the manuscripts show; it is not a verdict against Scripture. The three passages are different cases. The long ending of Mark and the account of the woman caught in adultery are ancient: early Christian writers knew them, many manuscripts contain them, and the Church receives and reads them as Holy Scripture, even though some important early manuscripts lack them. The longer wording in 1 John 5:7–8 is another matter: it is missing from the early Greek manuscripts and entered later through the Latin tradition. No teaching of the Church rests on a single disputed verse, and the Holy Trinity is confessed from the whole of Scripture.',
    ar: 'الحاشية تسجل ما تبينه المخطوطات؛ وليست حكمًا ضد الكتاب المقدس. والمقاطع الثلاثة حالات مختلفة. فالخاتمة الطويلة لإنجيل مرقس وقصة المرأة التي أُمسكت في الزنا قديمتان: عرفهما كتّاب مسيحيون أوائل، وتحتويهما مخطوطات كثيرة، والكنيسة تقبلهما وتقرؤهما كتابًا مقدسًا، وإن كانت بعض المخطوطات المبكرة المهمة تخلو منهما. أما الصيغة الأطول في ١ يوحنا ٥: ٧–٨ فأمر آخر: فهي غائبة عن المخطوطات اليونانية المبكرة، ودخلت لاحقًا من خلال التقليد اللاتيني. ولا يقوم أي تعليم للكنيسة على آية واحدة متنازع عليها، والثالوث القدوس يُعترف به من الكتاب المقدس كله.',
  },
  quickPoints: {
    en: [
      'Mark 16:9–20 is missing from some early manuscripts, including Codex Sinaiticus, whose text of Mark ends at 16:8. Many manuscripts have it, and early Christian writers knew it.',
      'John 7:53–8:11 is absent from several early Greek manuscripts, including Sinaiticus, and appears in different places in some later ones. The Church has long received it as part of the Gospel.',
      'The longer wording in 1 John 5:7–8 is found in the Latin tradition and in a very small number of late Greek manuscripts. It is not in the early Greek witnesses, and printed Greek texts included it only later.',
      'Editors weigh the age and quality of the manuscripts, how the readings could have arisen, and the author\'s style. The same method confirms that the rest of the text is well preserved.',
      'The Holy Trinity does not depend on 1 John 5:7–8; the Church confesses it from the witness of the whole New Testament and from her life of worship.',
    ],
    ar: [
      'مرقس ١٦: ٩–٢٠ غائب عن بعض المخطوطات المبكرة، ومنها المخطوطة السينائية التي ينتهي فيها نص مرقس عند ١٦: ٨. لكن مخطوطات كثيرة تحتويه، وعرفه كتّاب مسيحيون أوائل.',
      'يوحنا ٧: ٥٣–٨: ١١ غائب عن عدد من المخطوطات اليونانية المبكرة، ومنها السينائية، ويظهر في مواضع مختلفة في بعض المخطوطات المتأخرة. وقد قبلته الكنيسة منذ زمن طويل جزءًا من الإنجيل.',
      'توجد الصيغة الأطول في ١ يوحنا ٥: ٧–٨ في التقليد اللاتيني وفي عدد قليل جدًا من المخطوطات اليونانية المتأخرة. وليست في الشواهد اليونانية المبكرة، ولم تُدرجها النصوص اليونانية المطبوعة إلا لاحقًا.',
      'يزن المحررون قِدم المخطوطات وجودتها، وكيف نشأت القراءات، وأسلوب الكاتب. والمنهج نفسه يؤكد أن بقية النص محفوظة جيدًا.',
      'الثالوث القدوس لا يتوقف على ١ يوحنا ٥: ٧–٨؛ فالكنيسة تعترف به من شهادة العهد الجديد كله ومن حياة العبادة فيها.',
    ],
  },
  argumentTypes: ['textual', 'historical', 'theological'],
  assessment: {
    label: 'supported_disputed_details',
    explanation: {
      en: 'That the three passages differ in manuscript support, and that the longer wording in 1 John entered late, is supported by textual scholarship. The origin of the Markan ending and the adultery story, and how they should be used by readers, are disputed.',
      ar: 'إن الفقرات الثلاث تختلف في سند المخطوطات، وإن الصيغة الأطول في 1 يوحنا دخلت متأخرة، أمر تسنده دراسة النقد النصي. أما أصل خاتمة مرقس وقصة الزانية، وكيف ينبغي أن يستعملها القرّاء، فموضع خلاف.',
    },
  },
  whyExamine: {
    en: [
      'A reader who opens a modern Bible and finds a verse in brackets, or a note saying that “some manuscripts” lack it, may wonder whether something is being hidden. Nothing is hidden, and it helps to know plainly what the note means.',
      'It also shows how the Church holds Scripture. A passage can be ancient, loved and read in worship, received by the Church as Scripture, while scholars study the history of its copies. The two belong together.',
    ],
    ar: [
      'القارئ الذي يفتح كتابًا مقدسًا حديثًا فيجد آية بين قوسين، أو حاشية تقول إن «بعض المخطوطات» تخلو منها، قد يتساءل هل يُخفى شيء. لا شيء يُخفى، ومن المفيد أن يعرف بوضوح ما تعنيه الحاشية.',
      'ويبين الموضوع أيضًا كيف تتمسك الكنيسة بالكتاب المقدس. فالمقطع يمكن أن يكون قديمًا ومحبوبًا ومقروءًا في العبادة، تقبله الكنيسة كتابًا مقدسًا، بينما يدرس الباحثون تاريخ نسخه. والأمران متلازمان.',
    ],
  },
  background: {
    en: [
      'Mark 16:9–20 is the long ending of the Gospel of Mark. Manuscripts differ here: some end at 16:8, some add a short ending of a couple of lines, some have the long ending, and some have both endings. The Codex Sinaiticus, a fourth-century Bible, ends Mark at 16:8. Scholars argue about whether Mark meant to end there or whether an ending was lost, and about when and why the long ending was added.',
      'John 7:53–8:11 is the story of the woman caught in adultery. It is absent from a number of early Greek manuscripts, including Sinaiticus, and in some later manuscripts it is placed elsewhere. Many scholars consider that it was a story in circulation that was inserted into John at some point. Others discuss whether it could still preserve an old memory.',
      'The wording of 1 John 5:7–8 in the older English Bible tradition names the Father, the Word and the Holy Spirit as three who bear witness in heaven. This longer wording, known as the Comma Johanneum, is not found in the early Greek manuscripts. It appears in later Latin copies and in a very small number of late Greek manuscripts. It was absent from the first printed Greek New Testament of Erasmus and was included in a later edition, which is how it passed into some older Protestant translations. Most modern editions omit it or note it.',
      'In all three cases, the footnote is a record of the state of the manuscripts, not a statement of what the Church should read. Editors work by comparing the manuscripts, asking which reading is earlier and which better explains the others, and checking the style and vocabulary against the rest of the book.',
    ],
    ar: [
      'مرقس 16: 9–20 هو الخاتمة الطويلة لإنجيل مرقس. وتختلف المخطوطات هنا: بعضها ينتهي عند 16: 8، وبعضها يضيف خاتمة قصيرة من سطرين تقريبًا، وبعضها فيه الخاتمة الطويلة، وبعضها فيه الخاتمتان معًا. والمخطوط السينائي، وهو كتاب مقدس من القرن الرابع، ينتهي فيه مرقس عند 16: 8. ويتجادل الباحثون في ما إذا كان مرقس قصد أن ينتهي هناك أو أن الخاتمة ضاعت، وفي زمن إضافة الخاتمة الطويلة وسببها.',
      'يوحنا 7: 53 – 8: 11 هو قصة المرأة التي أُمسكت في الزنا. وهو غائب عن عدد من المخطوطات اليونانية القديمة، ومنها السينائي، ويرد في بعض المخطوطات المتأخرة في موضع آخر. ويرى كثير من الباحثين أنها قصة كانت متداولة أُدخلت في إنجيل يوحنا في وقت ما. ويبحث آخرون في إمكان أن تحفظ ذكرى قديمة.',
      'تذكر صيغة 1 يوحنا 5: 7–8 في تقليد الترجمة الإنجليزية القديم الآب والكلمة والروح القدس ثلاثةً يشهدون في السماء. وهذه الصيغة الأطول، المعروفة بـ«الفاصلة اليوحناوية»، غير موجودة في المخطوطات اليونانية القديمة. وترد في نسخ لاتينية متأخرة وفي عدد قليل جدًا من المخطوطات اليونانية المتأخرة. ولم تكن في أول عهد جديد يوناني مطبوع نشره إيراسموس، ثم أُدخلت في طبعة لاحقة، وبذلك انتقلت إلى بعض الترجمات البروتستانتية القديمة. وأغلب الطبعات الحديثة تحذفها أو تشير إليها في حاشية.',
      'في الحالات الثلاث تسجّل الحاشية حال المخطوطات، ولا تقرر ما ينبغي أن تقرأه الكنيسة. ويعمل المحررون بمقارنة المخطوطات، وسؤال أي القراءات أقدم وأيها يفسّر الباقي، ومطابقة الأسلوب والمفردات مع بقية السفر.',
    ],
  },
  glossary: ['textual-variant', 'textual-criticism', 'interpolation', 'manuscript', 'codex'],
  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'Codex Sinaiticus, a fourth-century Bible, does not contain Mark 16:9–20 or John 7:53–8:11.',
        ar: 'المخطوطة السينائية، وهي كتاب مقدس من القرن الرابع، لا تحتوي على مرقس ١٦: ٩–٢٠ ولا على يوحنا ٧: ٥٣–٨: ١١.',
      },
      argumentType: 'textual',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'The manuscript is published online with a transcription, so readers can check the two places for themselves. It is one important witness among many.',
        ar: 'المخطوطة منشورة على الإنترنت مع نسخ لنصها، فيستطيع القراء التحقق من الموضعين بأنفسهم. وهي شاهد مهم واحد بين شواهد كثيرة.',
      },
      limits: {
        en: 'One manuscript cannot decide the question alone.',
        ar: 'لا يستطيع مخطوط واحد أن يحسم المسألة وحده.',
      },
      evidence: ['e1', 'e2'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'The longer wording in 1 John 5:7–8 is absent from the early Greek manuscripts and entered later through the Latin tradition and printed editions.',
        ar: 'الصيغة الأطول في ١ يوحنا ٥: ٧–٨ غائبة عن المخطوطات اليونانية المبكرة، ودخلت لاحقًا من خلال التقليد اللاتيني والطبعات المطبوعة.',
      },
      argumentType: 'textual',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'This is the standard account in textual criticism. The wording appears in later Latin copies and in very few late Greek ones.',
        ar: 'هذا هو العرض المعتمد في النقد النصي. فالصيغة تظهر في نسخ لاتينية متأخرة وفي عدد قليل جدًا من النسخ اليونانية المتأخرة.',
      },
      limits: {
        en: 'This article does not trace the exact date or route of the wording.',
        ar: 'لا تتتبع هذه المقالة تاريخ الصيغة ومسارها بدقة.',
      },
      evidence: ['e3', 'e4'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'Editors decide on disputed readings by weighing the age and quality of manuscripts, how a reading could have arisen, and the author\'s style.',
        ar: 'يحكم المحررون في القراءات المتنازع عليها بوزن قِدم المخطوطات وجودتها، وكيف نشأت القراءة، وأسلوب الكاتب.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The method is described in standard textbooks. Because the copies are so many and so early, it can identify the few disputed places and confirm the rest.',
        ar: 'المنهج موصوف في الكتب المرجعية. ولأن النسخ كثيرة جدًا ومبكرة، يستطيع أن يحدد المواضع القليلة المتنازع عليها وأن يؤكد الباقي.',
      },
      limits: {
        en: 'The method gives probabilities about wording; it does not decide whether a passage is accepted by a church.',
        ar: 'يعطي المنهج ترجيحات بشأن الصياغة، ولا يقرر هل تقبل كنيسة ما فقرةً بعينها.',
      },
      evidence: ['e3'],
    },
    {
      id: 'c4',
      proposition: {
        en: 'The doctrine of the Trinity does not depend on the longer wording of 1 John 5:7–8; the earlier Greek text of these verses speaks of the Spirit, the water and the blood.',
        ar: 'عقيدة الثالوث لا تتوقف على الصيغة الأطول في ١ يوحنا ٥: ٧–٨؛ فالنص اليوناني الأقدم لهاتين الآيتين يتكلم عن الروح والماء والدم.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'The Church confesses the Father, the Son and the Holy Spirit from the whole witness of the New Testament, from the Lord\'s command to baptise in the threefold name, and from her worship. The doctrine was never argued from this one verse.',
        ar: 'تعترف الكنيسة بالآب والابن والروح القدس من شهادة العهد الجديد كله، ومن أمر الرب بالمعمودية بالاسم الثالوثي، ومن عبادتها. ولم يُحتج للعقيدة قط بهذه الآية وحدها.',
      },
      limits: {
        en: 'This does not prove the Trinity; it only concerns the status of this one wording.',
        ar: 'هذا لا يثبت التثليث، بل يتعلق فقط بمنزلة هذه الصيغة وحدها.',
      },
      evidence: ['e6'],
    },
  ],
  evidence: [
    {
      id: 'e1',
      sourceId: 'S21',
      locator: 'end of the Gospel of Mark (16:8), as shown in the project’s online transcription',
      role: 'supports',
      states: {
        en: 'The Codex Sinaiticus project publishes the manuscript online. Its text of Mark reaches 16:8, and the verses that follow in later copies (16:9–20) are not part of its text.',
        ar: 'ينشر مشروع المخطوط السينائي المخطوط على الإنترنت. ويبلغ نص مرقس فيه 16: 8، والآيات التي تلي في النسخ المتأخرة (16: 9–20) ليست جزءًا من نصه.',
      },
      inference: {
        en: 'One important fourth-century witness has the shorter form of Mark. It is a reason for editors to take the question seriously, not by itself a proof of the original ending.',
        ar: 'شاهد مهم من القرن الرابع فيه الصيغة الأقصر لمرقس. وهذا سبب يدعو المحررين إلى أخذ المسألة بجدية، لا إثباتًا بذاته لخاتمة الأصل.',
      },
    },
    {
      id: 'e2',
      sourceId: 'S22',
      locator: 'significance page (manuscript description)',
      role: 'supports',
      states: {
        en: 'The project’s description of the manuscript places it in the fourth century and gives its contents. The Sinaiticus text of John runs from 7:52 to 8:12 without the story of the woman caught in adultery.',
        ar: 'يضع وصف المشروع المخطوط في القرن الرابع ويعرض محتوياته. ونص يوحنا في السينائي يمضي من 7: 52 إلى 8: 12 دون قصة المرأة التي أُمسكت في الزنا.',
      },
      inference: {
        en: 'The same manuscript is a second case where a famous passage is missing from a very early Bible.',
        ar: 'المخطوط نفسه حالة ثانية تغيب فيها فقرة مشهورة عن كتاب مقدس قديم جدًا.',
      },
      dependence: {
        en: 'S22 is a page of the same project as S21, so this is one witness (one manuscript), not two.',
        ar: 'S22 صفحة من المشروع نفسه الذي ينتمي إليه S21، فهذا شاهد واحد (مخطوط واحد) وليس اثنين.',
      },
    },
    {
      id: 'e3',
      sourceId: 'S27',
      locator: 'whole work (thesis as the authors state it; chapter not cited)',
      role: 'context',
      states: {
        en: 'The Metzger and Ehrman textbook describes the methods of New Testament textual criticism and treats the best-known disputed passages as examples. It is cited here for its overall method, not for any page.',
        ar: 'يصف كتاب ميتزغر وإيرمان الدراسي مناهج النقد النصي للعهد الجديد، ويتناول أشهر الفقرات المتنازع عليها أمثلةً. ويُستشهد به هنا لمنهجه العام لا لصفحة بعينها.',
      },
      inference: {
        en: 'The weighing of manuscripts and the explanation of how a reading could have arisen are standard practice.',
        ar: 'موازنة المخطوطات وتفسير كيفية نشوء القراءة ممارسة معتمدة.',
      },
    },
    {
      id: 'e4',
      sourceId: 'S23',
      locator: 'whole work (database as a whole; no manuscript or reading cited)',
      role: 'context',
      states: {
        en: 'The Virtual Manuscript Room offers scholarly descriptions and images of New Testament manuscripts.',
        ar: 'تقدم غرفة المخطوطات الافتراضية أوصافًا علمية وصورًا لمخطوطات العهد الجديد.',
      },
      inference: {
        en: 'Anyone with the time and training can check which manuscripts contain a given passage. No individual reading is cited here.',
        ar: 'يستطيع كل من لديه الوقت والتدريب أن يتحقق من المخطوطات التي تتضمن فقرة ما. ولا تُذكر هنا قراءة بعينها.',
      },
    },
    {
      id: 'e6',
      sourceId: 'S62',
      locator: '1 John 5:7–8',
      role: 'context',
      states: {
        en: 'The shorter wording of these verses speaks of three witnesses: the Spirit, the water and the blood. The longer wording adds witnesses in heaven and is the form found in some older translations.',
        ar: 'تتكلم الصيغة الأقصر لهذين العددين عن ثلاثة شهود: الروح والماء والدم. أما الصيغة الأطول فتضيف شهودًا في السماء، وهي الصيغة الواردة في بعض الترجمات القديمة.',
      },
      inference: {
        en: 'A reader should know that a translation containing the longer wording does not reflect the earliest Greek witnesses.',
        ar: 'ينبغي أن يعلم القارئ أن ترجمة تتضمن الصيغة الأطول لا تعكس أقدم الشواهد اليونانية.',
      },
      bible: { book: '1-john', chapter: 5, verse: '7-8' },
    },
  ],
  objections: [
    {
      id: 'o1',
      statement: {
        en: 'If these passages were added later, then Christians have been adding to Scripture and cannot say what the original said.',
        ar: 'إن كانت هذه الفقرات أُضيفت لاحقًا، فالمسيحيون يضيفون إلى الكتاب المقدس ولا يعرفون ما قاله الأصل.',
      },
      response: {
        en: [
          'The footnotes exist because scholars, many of them Christians, openly record where some wording came in later. That openness shows that the evidence can be checked; nothing is concealed.',
          'The disputed places are few and well known. Across the rest of the text the differences between copies are small, and the very method that finds these places confirms the faithful preservation of the whole.',
        ],
        ar: [
          'الحواشي موجودة لأن الباحثين، وكثير منهم مسيحيون، يسجلون علنًا أين دخلت بعض الصيغ لاحقًا. وهذه العلنية تبين أن الأدلة يمكن فحصها؛ ولا شيء مخفي.',
          'والمواضع المتنازع عليها قليلة ومعروفة. وفي بقية النص الفروق بين النسخ صغيرة، والمنهج نفسه الذي يكشف هذه المواضع يؤكد الحفظ الأمين للنص كله.',
        ],
      },
      limits: {
        en: 'It does not show that every disputed passage was original, and it does not settle the origin of the long ending or the adultery story.',
        ar: 'لا يثبت هذا أن كل فقرة متنازع عليها كانت أصلية، ولا يحسم أصل الخاتمة الطويلة أو قصة الزانية.',
      },
      evidence: ['e1', 'e3'],
    },
    {
      id: 'o2',
      statement: {
        en: 'The Church reads these passages in worship, so the footnotes are a Protestant or secular attack on her tradition.',
        ar: 'تقرأ الكنيسة هذه الفقرات في العبادة، فالحواشي هجوم بروتستانتي أو علماني على تقليدها.',
      },
      response: {
        en: [
          'The manuscript facts do not belong to any denomination. The footnotes record what the manuscripts show, and scholars of many traditions, including Catholic and Orthodox scholars, use them.',
          'A footnote about a passage\'s earliest form is not a verdict on its place in the Church. The Church reads these passages in worship because she has received them, and that reception stands.',
        ],
        ar: [
          'وقائع المخطوطات لا تنتمي إلى طائفة. فالحواشي تسجل ما تبينه المخطوطات، ويستعملها باحثون من تقاليد كثيرة، منهم كاثوليك وأرثوذكس.',
          'والحاشية عن أقدم صورة لمقطع ليست حكمًا على مكانته في الكنيسة. فالكنيسة تقرأ هذه المقاطع في العبادة لأنها تسلّمتها، وهذا التسلّم ثابت.',
        ],
      },
      limits: {
        en: 'This does not tell us how the Coptic Orthodox Church herself understands the status of each passage.',
        ar: 'لا يخبرنا هذا كيف تفهم الكنيسة القبطية الأرثوذكسية نفسها منزلة كل فقرة.',
      },
      evidence: ['e3'],
    },
    {
      id: 'o3',
      statement: {
        en: 'If a verse like 1 John 5:7–8 is not original, the doctrine of the Trinity falls.',
        ar: 'إن لم تكن آية مثل 1 يوحنا 5: 7–8 أصلية فإن عقيدة الثالوث تسقط.',
      },
      response: {
        en: [
          'Christian writers did not wait for this wording to speak of the Father, the Son and the Spirit. The doctrine was confessed from the whole witness of the New Testament and the Church\'s experience of baptism and worship.',
          'The technical language of the creeds came later, to guard what the New Testament already teaches. The status of this one verse changes nothing in that faith.',
        ],
        ar: [
          'لم ينتظر الكتّاب المسيحيون هذه الصيغة ليتكلموا عن الآب والابن والروح. فقد اعتُرف بالعقيدة من شهادة العهد الجديد كله ومن خبرة الكنيسة في المعمودية والعبادة.',
          'وقد جاءت المصطلحات الدقيقة لقوانين الإيمان لاحقًا لتحرس ما يعلّمه العهد الجديد من قبل. ووضع هذه الآية الواحدة لا يغيّر شيئًا في ذلك الإيمان.',
        ],
      },
      limits: {
        en: 'It does not prove the doctrine; it only shows that the doctrine is not argued from this one verse.',
        ar: 'لا يثبت هذا العقيدة، بل يبيّن فقط أنها لا يُحتج لها بهذه الآية الواحدة.',
      },
      evidence: ['e6'],
    },
  ],
  christianResponse: {
    historical: {
      en: [
        'The three cases differ. The longer wording in 1 John is a late arrival. The long ending of Mark and the story in John are much older, since early Christian writers knew them, though they are missing from some important early manuscripts. They preserve early tradition, and the Church received them as Scripture.',
        'This is the ordinary method of comparing copies of an ancient text, and anyone can follow it.',
      ],
      ar: [
        'الحالات الثلاث مختلفة. فالصيغة الأطول في ١ يوحنا دخيل متأخر. أما الخاتمة الطويلة لمرقس والقصة في يوحنا فأقدم بكثير، إذ عرفهما كتّاب مسيحيون أوائل، وإن كانتا غائبتين عن بعض المخطوطات المبكرة المهمة. وهما تحفظان تقليدًا مبكرًا، وقد قبلتهما الكنيسة كتابًا مقدسًا.',
        'وهذا هو المنهج المعتاد في مقارنة نسخ نص قديم، ويستطيع أي أحد أن يتبعه.',
      ],
    },
    theological: {
      en: [
        'The Church receives Scripture as it has been handed down and read in worship. A passage’s place in the Church’s reading does not depend on a modern editor’s judgment about its earliest form, and the Church’s teaching does not rest on a single verse.',
        'At the same time, honesty about the manuscripts is a form of respect for the text. Christians hold both that the Church has received these passages and that scholars rightly say what the manuscripts show.',
      ],
      ar: [
        'تتسلّم الكنيسة الكتاب المقدس كما انتقل إليها وكما يُقرأ في العبادة. ومكانة الفقرة في قراءات الكنيسة لا تتوقف على حكم محرر حديث في صيغتها الأقدم، وتعليم الكنيسة لا يقوم على آية واحدة.',
        'وفي الوقت نفسه، الأمانة في عرض المخطوطات شكل من احترام النص. ويؤمن المسيحيون بأن الكنيسة تسلّمت هذه الفقرات وبأن الباحثين محقون حين يقولون ما تُظهره المخطوطات.',
      ],
    },
  },
  coptic: {
    en: [
      'The Coptic Orthodox Church reads Scripture through a lectionary, and her readings include passages from Mark and John.',
      'The principle is clear: the Church\'s liturgical use of a passage rests on what the Church has received, and it is distinct from the editors\' question about the earliest manuscripts.',
    ],
    ar: [
      'تقرأ الكنيسة القبطية الأرثوذكسية الكتاب المقدس بحسب القطمارس، وتشمل قراءاتها فقرات من مرقس ويوحنا.',
      'والمبدأ واضح: استعمال الكنيسة الطقسي لفقرة ما يقوم على ما تسلّمته الكنيسة، وهو غير سؤال المحررين عن أقدم المخطوطات.',
    ],
  },
  disputed: {
    en: [
      'Scholars disagree about whether Mark intended to end at 16:8 or lost his ending, about when the long ending was composed, and about the origin and early history of the adultery story. They also disagree about whether the style of the long ending and the story can show anything about authorship.',
      'There is also a real disagreement, among Christians as well, about how a passage that is probably not original should be used in teaching and worship.',
    ],
    ar: [
      'يختلف الباحثون في ما إذا كان مرقس قصد أن ينتهي عند 16: 8 أو فقد خاتمته، وفي زمن تأليف الخاتمة الطويلة، وفي أصل قصة الزانية وتاريخها المبكر. ويختلفون أيضًا في ما إذا كان أسلوب الخاتمة الطويلة والقصة يمكن أن يكشف شيئًا عن التأليف.',
      'وهناك أيضًا خلاف حقيقي، بين المسيحيين أنفسهم، حول كيفية استعمال فقرة يرجَّح أنها ليست أصلية في التعليم والعبادة.',
    ],
  },
  conclusion: {
    en: 'The footnotes report real differences among the manuscripts, and the three passages are different cases. The long ending of Mark and the account of the woman in John are ancient and received by the Church as Scripture; the longer wording in 1 John is a later addition. No teaching of the Church rests on a single disputed verse, and the text of the New Testament has been faithfully preserved.',
    ar: 'تنقل الحواشي فروقًا حقيقية بين المخطوطات، والمقاطع الثلاثة حالات مختلفة. فالخاتمة الطويلة لمرقس وقصة المرأة في يوحنا قديمتان وتقبلهما الكنيسة كتابًا مقدسًا؛ أما الصيغة الأطول في ١ يوحنا فإضافة لاحقة. ولا يقوم أي تعليم للكنيسة على آية واحدة متنازع عليها، ونص العهد الجديد محفوظ بأمانة.',
  },
  furtherReading: ['S27', 'S23', 'S21', 'S22'],
  related: ['mark-16-9-20', 'john-7-53-8-11', 'first-john-5-7-8', 'has-bible-changed', 'what-trinity-affirms'],
};
