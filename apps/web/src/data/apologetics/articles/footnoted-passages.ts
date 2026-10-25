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
    en: 'Editors footnote these passages because the earliest and best manuscripts that survive do not contain them in the form found in later copies, or contain them only in later copies. The case is not equal for the three. The longer ending of Mark and the story of the woman caught in adultery are found in many manuscripts but are missing from important early ones, and scholars debate their origin. The longer wording in 1 John is found in almost no Greek manuscripts and entered later through the Latin tradition. A footnote is a scholarly judgment about the manuscripts, not a verdict on the Church’s use of the passage, and none of the doctrines mentioned depends on a single disputed verse.',
    ar: 'يضع المحررون هذه الفقرات في الحواشي لأن أقدم المخطوطات وأجودها مما وصل إلينا لا يتضمنها بالصيغة الموجودة في النسخ المتأخرة، أو لا يتضمنها إلا نسخ متأخرة. والحالة ليست واحدة في الثلاث. فالخاتمة الطويلة لمرقس وقصة المرأة التي أُمسكت في الزنا موجودتان في مخطوطات كثيرة لكنهما غائبتان عن مخطوطات قديمة مهمة، ويناقش الباحثون أصلهما. أما الصيغة الأطول في رسالة يوحنا الأولى فلا توجد تقريبًا في أي مخطوطة يونانية، وقد دخلت لاحقًا عن طريق التقليد اللاتيني. والحاشية حكم علمي على المخطوطات وليست حكمًا على استعمال الكنيسة للفقرة، ولا يتوقف أي من التعاليم المذكورة على آية واحدة متنازع عليها.',
  },
  quickPoints: {
    en: [
      'Mark 16:9–20 is missing from some early manuscripts, including Codex Sinaiticus, whose text of Mark ends at 16:8. Other manuscripts have a shorter ending, and many have the longer one.',
      'John 7:53–8:11 is absent from several early Greek manuscripts, including Sinaiticus, and appears in different places in some later ones. Its origin is debated.',
      'The longer wording in 1 John 5:7–8 is found in the Latin tradition and in a very small number of late Greek manuscripts. It is not in the early Greek witnesses, and printed Greek texts included it only later.',
      'Editors weigh the age and quality of the manuscripts, how the readings could have arisen, and the author’s style. Their judgments are open to debate.',
      'The Trinity is not established by 1 John 5:7–8 alone; the Church’s doctrine rests on the witness of the New Testament as a whole and on the Church’s life.',
    ],
    ar: [
      'مرقس 16: 9–20 غائب عن بعض المخطوطات القديمة، ومنها المخطوط السينائي، الذي ينتهي فيه نص مرقس عند 16: 8. وفي مخطوطات أخرى خاتمة أقصر، وفي كثير منها الخاتمة الطويلة.',
      'يوحنا 7: 53 – 8: 11 غائب عن عدة مخطوطات يونانية قديمة، ومنها السينائي، ويرد في مواضع مختلفة في بعض المخطوطات المتأخرة. وأصله موضع نقاش.',
      'الصيغة الأطول في 1 يوحنا 5: 7–8 موجودة في التقليد اللاتيني وفي عدد قليل جدًا من المخطوطات اليونانية المتأخرة. وهي غير موجودة في الشواهد اليونانية القديمة، ولم تدخل النصوص اليونانية المطبوعة إلا لاحقًا.',
      'يزن المحررون عمر المخطوطات وجودتها، وكيف أمكن أن تنشأ القراءات، وأسلوب الكاتب. وأحكامهم قابلة للنقاش.',
      'لا يثبت التثليث بـ 1 يوحنا 5: 7–8 وحدها؛ فعقيدة الكنيسة تقوم على شهادة العهد الجديد كله وعلى حياة الكنيسة.',
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
      'A reader who opens a modern Bible and finds a verse in brackets or a note saying that “some manuscripts” lack it may wonder whether something is being hidden. It is better to explain openly what the note means than to leave readers to find it elsewhere.',
      'The questions also test how we think about evidence. A passage can be old, loved and used in worship, and still be uncertain as part of what the author first wrote. Both things can be said together.',
    ],
    ar: [
      'قد يفتح القارئ طبعة حديثة فيجد آية بين قوسين أو حاشية تقول إن «بعض المخطوطات» لا تتضمنها، فيتساءل إن كان شيء يُخفى عنه. والأفضل أن يُشرح له معنى الحاشية بصراحة بدل أن يتركه يكتشفه في مكان آخر.',
      'وتختبر هذه الأسئلة أيضًا طريقتنا في التفكير في الشواهد. فقد تكون الفقرة قديمة ومحبوبة ومستعملة في العبادة، ومع ذلك غير مؤكدة بوصفها مما كتبه المؤلف أول مرة. ويمكن قول الأمرين معًا.',
    ],
  },
  background: {
    en: [
      'Mark 16:9–20 is the long ending of the Gospel of Mark. Manuscripts differ here: some end at 16:8, some add a short ending of a couple of lines, some have the long ending, and some have both endings. The Codex Sinaiticus, a fourth-century Bible, ends Mark at 16:8. Scholars argue about whether Mark meant to end there or whether an ending was lost, and about when and why the long ending was added.',
      'John 7:53–8:11 is the story of the woman caught in adultery. It is absent from a number of early Greek manuscripts, including Sinaiticus, and in some later manuscripts it is placed elsewhere. Many scholars consider that it was a story in circulation that was inserted into John at some point. Others discuss whether it could still preserve an old memory. The manuscript evidence leaves its origin open.',
      'The wording of 1 John 5:7–8 in the older English Bible tradition names the Father, the Word and the Holy Spirit as three who bear witness in heaven. This longer wording, known as the Comma Johanneum, is not found in the early Greek manuscripts. It appears in later Latin copies and in a very small number of late Greek manuscripts. It was absent from the first printed Greek New Testament of Erasmus and was included in a later edition, which is how it passed into some older Protestant translations. Most modern editions omit it or note it.',
      'In all three cases, the footnote is a record of the state of the manuscripts, not a statement of what the Church should read. Editors work by comparing the manuscripts, asking which reading is earlier and which better explains the others, and checking the style and vocabulary against the rest of the book.',
    ],
    ar: [
      'مرقس 16: 9–20 هو الخاتمة الطويلة لإنجيل مرقس. وتختلف المخطوطات هنا: بعضها ينتهي عند 16: 8، وبعضها يضيف خاتمة قصيرة من سطرين تقريبًا، وبعضها فيه الخاتمة الطويلة، وبعضها فيه الخاتمتان معًا. والمخطوط السينائي، وهو كتاب مقدس من القرن الرابع، ينتهي فيه مرقس عند 16: 8. ويتجادل الباحثون في ما إذا كان مرقس قصد أن ينتهي هناك أو أن الخاتمة ضاعت، وفي زمن إضافة الخاتمة الطويلة وسببها.',
      'يوحنا 7: 53 – 8: 11 هو قصة المرأة التي أُمسكت في الزنا. وهو غائب عن عدد من المخطوطات اليونانية القديمة، ومنها السينائي، ويرد في بعض المخطوطات المتأخرة في موضع آخر. ويرى كثير من الباحثين أنها قصة كانت متداولة أُدخلت في إنجيل يوحنا في وقت ما. ويبحث آخرون في إمكان أن تحفظ ذكرى قديمة. وتترك شواهد المخطوطات أصلها مفتوحًا.',
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
        ar: 'المخطوط السينائي، وهو كتاب مقدس من القرن الرابع، لا يتضمن مرقس 16: 9–20 ولا يوحنا 7: 53 – 8: 11.',
      },
      argumentType: 'textual',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'The manuscript is published online with a transcription, so readers can check the two places. It is one witness among several, and not all early witnesses behave the same way.',
        ar: 'المخطوط منشور على الإنترنت مع نسخ نصي، فيستطيع القارئ التحقق من الموضعين. وهو شاهد واحد بين عدة شواهد، وليست كل الشواهد القديمة تسلك المسلك نفسه.',
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
        ar: 'الصيغة الأطول في 1 يوحنا 5: 7–8 غائبة عن المخطوطات اليونانية القديمة، ودخلت لاحقًا عبر التقليد اللاتيني والطبعات المطبوعة.',
      },
      argumentType: 'textual',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'This is the standard account in textual criticism. The wording appears in later Latin copies and in very few late Greek ones.',
        ar: 'هذا هو العرض المعتمد في النقد النصي. فالصيغة تظهر في نسخ لاتينية متأخرة وفي قلة من النسخ اليونانية المتأخرة.',
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
        en: 'Editors decide on disputed readings by weighing the age and quality of manuscripts, how a reading could have arisen, and the author’s style, and their conclusions are judgments that can be revised.',
        ar: 'يقرر المحررون في القراءات المتنازع عليها بموازنة عمر المخطوطات وجودتها، وكيفية نشوء القراءة، وأسلوب الكاتب، وتبقى استنتاجاتهم أحكامًا قابلة للمراجعة.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The method is described in standard textbooks. Its application in each case produces some disagreement.',
        ar: 'المنهج موصوف في المراجع الدراسية المعتمدة. وتطبيقه في كل حالة يُنتج بعض الخلاف.',
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
        ar: 'عقيدة الثالوث لا تتوقف على الصيغة الأطول في 1 يوحنا 5: 7–8؛ فالنص اليوناني الأقدم لهذين العددين يتكلم عن الروح والماء والدم.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'Whether the New Testament as a whole establishes the doctrine is a theological question. The point here is only that the doctrine is not argued from the one disputed verse.',
        ar: 'هل يثبت العهد الجديد كله العقيدة؟ هذا سؤال لاهوتي. والمقصود هنا فقط أن العقيدة لا يُحتج لها بالآية الواحدة المتنازع عليها.',
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
          'The sceptic is right that some wording came in later; the footnotes exist because scholars, many of them Christians, say so openly. That openness is a sign that the evidence can be checked, not a sign of concealment.',
          'The point is limited to three famous places. In most of the text editors are confident, and the disputed places are identified because the manuscripts allow it. The question of what the Church should do with a passage that is old, useful and perhaps later is a separate one.',
        ],
        ar: [
          'المشكك محق في أن بعض الصياغة دخل لاحقًا؛ والحواشي موجودة لأن الباحثين، وكثير منهم مسيحيون، يقولون ذلك علنًا. وهذه الصراحة علامة على أن الشواهد قابلة للتحقق وليست علامة إخفاء.',
          'والأمر محصور في ثلاثة مواضع مشهورة. أما في أكثر النص فالمحررون واثقون، وتُعرف المواضع المتنازع عليها لأن المخطوطات تتيح ذلك. وسؤال ماذا تفعل الكنيسة بفقرة قديمة ونافعة وربما متأخرة سؤال منفصل.',
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
          'It is a fair concern that critical editions are sometimes read as a verdict on how a passage should be used in worship. The two questions can be kept apart: a passage may be read liturgically because the Church has received it, whatever the editors say about its earliest form.',
        ],
        ar: [
          'ليست حقائق المخطوطات ملكًا لأي طائفة. فالحواشي تسجّل ما تُظهره المخطوطات، ويستعملها باحثون من تقاليد كثيرة، منهم باحثون كاثوليك وأرثوذكس.',
          'ومن المنصف أن نقر بأن الطبعات النقدية تُقرأ أحيانًا كأنها حكم على كيفية استعمال الفقرة في العبادة. ويمكن إبقاء السؤالين منفصلين: فقد تُقرأ الفقرة ليتورجيًا لأن الكنيسة تسلّمتها، أيًّا كان ما يقوله المحررون عن صيغتها الأقدم.',
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
          'Christian writers did not wait for this wording to speak of the Father, the Son and the Spirit. The doctrine was formulated from the whole witness of the New Testament and the Church’s experience of baptism and worship.',
          'The sceptic may add that the New Testament does not state the doctrine in the later technical language. That is a fair observation, and it belongs to the articles on how the Trinity was understood. It is a different point from the status of this one verse.',
        ],
        ar: [
          'لم ينتظر الكتّاب المسيحيون هذه الصيغة ليتكلموا عن الآب والابن والروح. فقد صيغت العقيدة من شهادة العهد الجديد كله ومن اختبار الكنيسة للمعمودية والعبادة.',
          'وقد يضيف المشكك أن العهد الجديد لا يعرض العقيدة بالألفاظ الفنية اللاحقة. وهذه ملاحظة منصفة، وموضعها المقالات عن كيفية فهم الثالوث. وهي نقطة تختلف عن منزلة هذه الآية الواحدة.',
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
        'Historically, the three cases differ and should be kept apart. The longer wording in 1 John is a late arrival. The long ending of Mark and the story in John are older than that, since early Christian writers knew them, but they are missing from important early manuscripts. A historian would say that they may well preserve early traditions without having been part of the Gospel as first written.',
        'None of this requires accepting biblical inspiration. It is the ordinary method of comparing copies of an ancient text.',
      ],
      ar: [
        'تاريخيًا، تختلف الحالات الثلاث وينبغي إبقاؤها منفصلة. فالصيغة الأطول في 1 يوحنا وافد متأخر. أما الخاتمة الطويلة لمرقس وقصة إنجيل يوحنا فأقدم من ذلك، إذ عرفها كتّاب مسيحيون مبكرون، لكنهما غائبتان عن مخطوطات قديمة مهمة. وقد يقول المؤرخ إنهما قد تحفظان تقاليد مبكرة دون أن تكونا جزءًا من الإنجيل كما كُتب أول مرة.',
        'ولا يتطلب شيء من هذا قبول الوحي. إنه المنهج المعتاد في مقارنة نسخ نص قديم.',
      ],
    },
    theological: {
      en: [
        'The Church receives Scripture as it has been handed down and read in worship. A passage’s place in the Church’s reading does not depend on a modern editor’s judgment about its earliest form, and the Church’s teaching does not rest on a single verse.',
        'At the same time, honesty about the manuscripts is a form of respect for the text. Christians can hold both that the Church has received these passages and that scholars rightly say what the manuscripts show. Any formal statement of how the Church weighs the two belongs to the Church.',
      ],
      ar: [
        'تتسلّم الكنيسة الكتاب المقدس كما انتقل إليها وكما يُقرأ في العبادة. ومكانة الفقرة في قراءات الكنيسة لا تتوقف على حكم محرر حديث في صيغتها الأقدم، وتعليم الكنيسة لا يقوم على آية واحدة.',
        'وفي الوقت نفسه، الأمانة في عرض المخطوطات شكل من احترام النص. ويستطيع المسيحيون أن يؤمنوا بأن الكنيسة تسلّمت هذه الفقرات وبأن الباحثين محقون حين يقولون ما تُظهره المخطوطات. وأي بيان رسمي عن كيفية موازنة الكنيسة بين الأمرين يعود إلى الكنيسة.',
      ],
    },
  },
  coptic: {
    en: [
      'The Coptic Orthodox Church reads Scripture through a lectionary, and her readings include passages from Mark and John.',
      'What can be said with confidence is the principle: the Church’s liturgical use of a passage is a matter of what the Church has received, and it is distinct from the editors’ question about the earliest manuscripts. How Coptic manuscripts and versions read these places is a question for a specialist in Coptic New Testament manuscripts.',
    ],
    ar: [
      'تقرأ الكنيسة القبطية الأرثوذكسية الكتاب المقدس بحسب القطمارس، وتشمل قراءاتها فقرات من مرقس ويوحنا.',
      'وما يمكن قوله بثقة هو المبدأ: استعمال الكنيسة الليتورجي لفقرة ما يتعلق بما تسلّمته الكنيسة، وهو غير سؤال المحررين عن أقدم المخطوطات. أما كيف تقرأ المخطوطات والنسخ القبطية هذه المواضع فسؤال لمختص في مخطوطات العهد الجديد القبطية.',
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
    en: 'The footnotes report real differences among the manuscripts, and the three passages are different cases. A later addition may still be old, useful and received by the Church, and no doctrine named in these passages stands or falls with a single disputed verse.',
    ar: 'تسجّل الحواشي اختلافات حقيقية بين المخطوطات، والفقرات الثلاث حالات مختلفة. وقد تكون الإضافة المتأخرة قديمة ونافعة ومتسلَّمة من الكنيسة، ولا تقوم أو تسقط عقيدة مذكورة في هذه الفقرات بآية واحدة متنازع عليها.',
  },
  furtherReading: ['S27', 'S23', 'S21', 'S22'],
  related: ['mark-16-9-20', 'john-7-53-8-11', 'first-john-5-7-8', 'has-bible-changed', 'what-trinity-affirms'],
};
