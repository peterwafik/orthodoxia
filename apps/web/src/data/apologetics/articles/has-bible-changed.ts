import type { Article } from '../types.ts';

export const article: Article = {
  id: 'has-bible-changed',
  questionId: 'has-bible-changed',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article asks what the manuscript evidence shows about copying: how copies differ from one another, how scholars work back toward earlier wording, and what that does and does not say about wholesale loss or corruption. It keeps the question of preserved wording apart from the Church’s teaching that Scripture is inspired. It does not examine individual disputed passages (see the article on footnoted passages) or the formation of the canon.',
    ar: 'تسأل هذه المقالة عما تُظهره المخطوطات بشأن النسخ: كيف تختلف النسخ بعضها عن بعض، وكيف يعمل الباحثون للرجوع إلى صيغ أقدم، وما الذي يقوله ذلك وما الذي لا يقوله عن ضياعٍ شامل أو تحريف. وهي تفصل بين مسألة بقاء الصيغة النصية وتعليم الكنيسة بأن الكتاب المقدس موحى به. ولا تفحص الفقرات المتنازع عليها واحدةً واحدة (انظر مقالة الفقرات الموضوعة في الحواشي)، ولا تتناول تكوّن القانون الكتابي.',
  },
  shortAnswer: {
    en: 'No. The Bible has not been lost or replaced. Before printing every copy was made by hand, so no two manuscripts agree in every letter: copyists sometimes slipped, and occasionally smoothed a reading. But the New Testament survives in thousands of manuscripts, with early translations and the quotations of the Fathers, so these slips can be seen and corrected by comparing copies. Most differences are small matters of spelling or word order, and the few longer passages in question are printed openly in the footnotes of many Bibles. The Church reads today the same Scriptures it received, faithfully handed down as the Word of God.',
    ar: 'لا. فالكتاب المقدس لم يضِع ولم يُستبدل. قبل الطباعة كانت كل نسخة تُكتب بخط اليد، فلا تتطابق مخطوطتان في كل حرف: كان النُّسّاخ يخطئون أحيانًا، ويسهّلون عبارة في حالات قليلة. لكن العهد الجديد محفوظ في آلاف المخطوطات، مع ترجمات قديمة واقتباسات الآباء، فتُرى هذه الأخطاء وتُصحَّح بمقارنة النسخ. وأكثر الاختلافات أمور صغيرة في التهجئة أو ترتيب الكلمات، والفقرات الأطول القليلة موضع البحث تُطبع علنًا في حواشي كثير من الطبعات. والكنيسة تقرأ اليوم الكتب المقدسة نفسها التي تسلّمتها، مسلَّمة بأمانة بوصفها كلمة الله.',
  },
  quickPoints: {
    en: [
      'Copies made by hand differ in small ways. Each place where manuscripts disagree is called a textual variant.',
      'Most variants are tiny: spelling, word order, the form of a name, a slip of the eye. Many do not even show in translation.',
      'The few that affect meaning, and the few longer passages in question, are discussed openly in the footnotes of many Bibles.',
      'Thousands of manuscripts let scholars compare copies and recover the earlier wording. That is also why the number of recorded variants is large.',
      'The Dead Sea Scrolls show that the Hebrew text of Old Testament books was copied with great care over many centuries.',
      'The Church confesses that Scripture is inspired by the Holy Spirit and has been faithfully handed down within her life.',
    ],
    ar: [
      'النسخ المكتوبة بخط اليد تختلف في أمور صغيرة. ويسمّى كل موضع تتباين فيه المخطوطات «قراءة متباينة».',
      'أكثر القراءات المتباينة ضئيل جدًا: تهجئة، أو ترتيب كلمات، أو صيغة اسم، أو زلّة نظر. وكثير منها لا يظهر حتى في الترجمة.',
      'القليل الذي يمسّ المعنى، والفقرات الأطول القليلة موضع البحث، تُناقَش علنًا في حواشي كثير من الطبعات.',
      'آلاف المخطوطات تتيح للباحثين مقارنة النسخ واستعادة الصيغة الأقدم. وهذا أيضًا سبب كبر عدد القراءات المتباينة المسجلة.',
      'تُظهر مخطوطات البحر الميت أن النص العبري لأسفار العهد القديم نُسخ بعناية كبيرة عبر قرون كثيرة.',
      'تعترف الكنيسة بأن الكتاب المقدس موحى به من الروح القدس، وأنه سُلّم بأمانة في حياتها.',
    ],
  },
  argumentTypes: ['textual', 'historical'],
  assessment: {
    label: 'supported_disputed_details',
    explanation: {
      en: 'That the New Testament and the Hebrew Bible were copied with real variation, and that scholars can often work back to earlier wording from the surviving evidence, is supported by manuscript study. Which earlier wording is original in a given difficult place, and how much weight a few meaningful variants should carry, remain disputed.',
      ar: 'إن نسخ العهد الجديد والكتاب العبري جرى مع اختلافات حقيقية، وإن الباحثين يستطيعون غالبًا الرجوع إلى صيغة أقدم انطلاقًا من الشواهد الباقية، أمر تسنده دراسة المخطوطات. أما أي الصيغ هي الأصلية في موضع صعب بعينه، وكم ينبغي أن يكون وزن القراءات القليلة ذات الأثر في المعنى، فمسائل ما زالت محل خلاف.',
    },
  },
  whyExamine: {
    en: [
      'Many people have heard that the Bible has been “changed many times”. The claim unsettles believers and is repeated without evidence. The manuscripts themselves give a clear answer: what changed, how we know, and why the text we read is trustworthy.',
      'The question matters to Christians because the Church receives these writings as the Word of God. It matters to everyone because a text that can be traced back reliably can be used as historical evidence.',
    ],
    ar: [
      'سمع كثيرون أن الكتاب المقدس «تغيّر مرات كثيرة». وهذه الدعوى تقلق المؤمنين وتتكرر بلا دليل. والمخطوطات نفسها تعطي جوابًا واضحًا: ما الذي تغيّر، وكيف نعرف، ولماذا النص الذي نقرأه جدير بالثقة.',
      'والسؤال مهم للمسيحيين لأن الكنيسة تتسلّم هذه الكتابات كلمة الله. ومهم للجميع لأن النص الذي يمكن تتبّعه بثقة يصلح دليلًا تاريخيًا.',
    ],
  },
  background: {
    en: [
      'Before printing, every copy of a book was made by hand, on papyrus, parchment or, later, paper. A scribe copying a long text could skip a line, repeat a word, mishear a dictated sentence, or write a note from the margin into the main text. Occasionally a scribe also tried to smooth a difficult reading or bring one Gospel closer to another. Each new copy carried the earlier copy’s mistakes and added its own.',
      'A textual variant is any place where surviving manuscripts differ. Variants are counted by manuscript and by place, so a single spelling difference found in a thousand copies can be counted many times. This is why the total number of recorded variants for the New Testament is very large, commonly described as greater than the number of words in the text, without meaning that the text is largely uncertain. Scholars in the field of textual criticism classify variants and ask which reading best explains the others.',
      'The New Testament survives in thousands of Greek manuscripts, together with early translations such as Latin, Coptic and Syriac and quotations in the Church Fathers. Their dates range from small fragments of the second century to complete books of the fourth century and later. Standard introductions, such as the textbook by Metzger and Ehrman, describe this evidence as a whole and show how editors use it.',
      'The Old Testament has a different history. Its Hebrew text was handed down by Jewish scribes and later fixed in the Masoretic Text, while the Septuagint preserves an ancient Greek translation that sometimes reflects a different Hebrew wording. Before the discovery of the Dead Sea Scrolls, the oldest complete Hebrew manuscripts were much later than the books they contained. The scrolls opened a window roughly a thousand years earlier.',
    ],
    ar: [
      'قبل الطباعة كانت كل نسخة من أي كتاب تُصنع بخط اليد، على البردي أو الرق ثم الورق لاحقًا. وكان الناسخ الذي ينقل نصًّا طويلًا قد يتخطى سطرًا، أو يكرر كلمة، أو يخطئ في سماع جملة مملاة، أو يدخل في المتن عبارة كانت مكتوبة في الهامش. وأحيانًا حاول ناسخ تسهيل عبارة عسيرة أو تقريب إنجيل من آخر. وكانت كل نسخة جديدة تحمل أخطاء النسخة التي نُقلت عنها وتضيف إليها أخطاءها.',
      'القراءة المتباينة هي كل موضع تختلف فيه المخطوطات الباقية. وتُحصى القراءات بحسب المخطوطة وبحسب الموضع، فقد يُحسب فرق إملائي واحد موجود في ألف نسخة مرات كثيرة. ولذلك يكون العدد الكلي للقراءات المتباينة المسجلة للعهد الجديد كبيرًا جدًا، ويقال عادةً إنه يفوق عدد كلمات النص، دون أن يعني ذلك أن النص في أغلبه غير مؤكد. ويصنّف المختصون في النقد النصي القراءات، ويسألون أي قراءة تفسّر الباقي على أفضل وجه.',
      'يوجد العهد الجديد في آلاف المخطوطات اليونانية، إلى جانب ترجمات قديمة كاللاتينية والقبطية والسريانية، واقتباسات في كتابات الآباء. وتمتد تواريخها من شذرات صغيرة تعود إلى القرن الثاني إلى كتب كاملة من القرن الرابع فما بعد. وتصف المراجع التمهيدية المعتمدة، ومنها كتاب ميتزغر وإيرمان الدراسي، هذه الشواهد في مجملها وتبيّن كيف يستعين بها المحررون.',
      'أما العهد القديم فله تاريخ مختلف. فقد تناقل النُّسّاخ اليهود نصه العبري، ثم استقر في النص الماسوري، بينما تحفظ الترجمة السبعينية ترجمة يونانية قديمة تعكس أحيانًا صيغة عبرية مختلفة. وقبل اكتشاف مخطوطات البحر الميت كانت أقدم المخطوطات العبرية الكاملة متأخرة كثيرًا عن الكتب التي تحويها. وقد فتحت المخطوطات نافذة على زمن أسبق بنحو ألف سنة.',
    ],
  },
  glossary: ['manuscript', 'textual-variant', 'textual-criticism', 'dead-sea-scrolls', 'masoretic-text', 'septuagint', 'interpolation'],
  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'Hand-copied biblical manuscripts differ in many small places, through copyists’ slips and occasional deliberate changes, and these differences can be seen by comparing copies.',
        ar: 'تختلف المخطوطات الكتابية المنسوخة بخط اليد في مواضع صغيرة كثيرة، بسبب زلّات النُّسّاخ وتغييرات متعمدة قليلة، وتُرى هذه الاختلافات بمقارنة النسخ.',
      },
      argumentType: 'textual',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'This is the basic observation of textual criticism, set out in the standard textbooks, and anyone can check it in the published images of the manuscripts. Because the differences are visible, they can be catalogued and weighed.',
        ar: 'هذه هي الملاحظة الأساسية في النقد النصي، وتعرضها المراجع الدراسية المعتمدة، ويستطيع كل أحد أن يتحقق منها في صور المخطوطات المنشورة. ولأن الاختلافات ظاهرة، يمكن فهرستها ووزنها.',
      },
      limits: {
        en: 'It does not say how many differences matter, or in which direction a given difference points.',
        ar: 'لا تحدد عدد الاختلافات المؤثرة، ولا اتجاه أي اختلاف بعينه.',
      },
      evidence: ['e1', 'e2'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'Most textual variants are minor (spelling, word order, small changes of wording), and only a small minority affect meaning.',
        ar: 'أكثر القراءات المتباينة صغيرة (تهجئة، أو ترتيب كلمات، أو تعديلات طفيفة في الصياغة)، وأقلية صغيرة فقط تمسّ المعنى.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The textbooks describe the great bulk of variants as minor. The few that matter are well known, studied in the open and marked in the footnotes of many Bibles, so the reader is never left in the dark.',
        ar: 'تصف المراجع الدراسية الغالبية العظمى من القراءات بأنها صغيرة. والقليل المؤثر معروف جيدًا، يُدرس علنًا ويُشار إليه في حواشي كثير من الطبعات، فلا يُترك القارئ في جهل.',
      },
      limits: {
        en: 'A small proportion can still include passages that matter to readers. Counting variants does not settle how much they matter.',
        ar: 'قد تشمل النسبة الصغيرة فقرات تهم القرّاء. وعدّ القراءات لا يحسم مدى أهميتها.',
      },
      evidence: ['e2'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'The Dead Sea Scrolls show that the Hebrew text of Old Testament books was transmitted with close continuity over many centuries.',
        ar: 'تُظهر مخطوطات البحر الميت أن النص العبري لأسفار العهد القديم انتقل باستمرار وثيق عبر قرون كثيرة.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'A Qumran manuscript of Isaiah agrees closely in most of its content with the Masoretic Text copied roughly a thousand years later. Other Qumran texts stand closer to other ancient forms, such as the Hebrew behind the Septuagint, which the Church has long read.',
        ar: 'يتفق مخطوط إشعياء من قمران في أغلب محتواه اتفاقًا وثيقًا مع النص الماسوري المنسوخ بعده بنحو ألف سنة. وتقترب نصوص قمرانية أخرى من صيغ قديمة أخرى، كالنص العبري الذي وراء الترجمة السبعينية التي تقرأها الكنيسة منذ القدم.',
      },
      limits: {
        en: 'This concerns the Hebrew Bible and only the books the scrolls preserve; it says nothing directly about the New Testament, and continuity is not the same as identity.',
        ar: 'يتعلق هذا بالكتاب العبري وبالأسفار التي حفظتها المخطوطات فقط؛ ولا يقول شيئًا مباشرًا عن العهد الجديد، والاستمرارية ليست تطابقًا.',
      },
      evidence: ['e3', 'e4', 'e5'],
    },
    {
      id: 'c4',
      proposition: {
        en: 'The manuscripts show that the wording has been faithfully preserved; the Church confesses, by faith, that this text is inspired by God.',
        ar: 'تُظهر المخطوطات أن صيغة النص حُفظت بأمانة؛ وتعترف الكنيسة، بالإيمان، بأن هذا النص موحى به من الله.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'Manuscript study shows what was written and how it was handed down. Inspiration concerns where Scripture comes from and the authority it carries. The two belong together: the Church receives as the Word of God the same text the manuscripts preserve.',
        ar: 'تُظهر دراسة المخطوطات ما كُتب وكيف سُلّم. أما الوحي فيتعلق بمصدر الكتاب المقدس وسلطانه. والأمران متلازمان: فالكنيسة تتسلّم كلمةً لله النصَّ نفسه الذي تحفظه المخطوطات.',
      },
      limits: {
        en: 'This article does not argue that the Bible is inspired. It only keeps the two questions distinct.',
        ar: 'لا تحاول هذه المقالة إثبات أن الكتاب المقدس موحى به. إنها تكتفي بإبقاء السؤالين متمايزين.',
      },
      evidence: ['e1'],
    },
  ],
  evidence: [
    {
      id: 'e1',
      sourceId: 'S27',
      locator: 'whole work (thesis as the authors state it; chapter not cited)',
      role: 'context',
      states: {
        en: 'The Metzger and Ehrman textbook is a standard introduction to New Testament textual criticism. In its overall approach, it surveys the manuscripts, the ways texts were copied and changed, and the methods used to recover earlier wording. Its title names transmission, corruption and restoration together.',
        ar: 'كتاب ميتزغر وإيرمان مرجع دراسي معتمد في النقد النصي للعهد الجديد. وهو في منهجه العام يستعرض المخطوطات وطرق نسخ النصوص وتغييرها والوسائل المتبعة لاستعادة صيغ أقدم. وعنوانه يجمع بين النقل والتحريف والاستعادة.',
      },
      inference: {
        en: 'Both the fact of change and the possibility of recovering earlier wording are part of mainstream scholarship, not a polemical claim from one side.',
        ar: 'إن حدوث التغيير وإمكان استعادة صيغ أقدم كلاهما جزء من الدراسة السائدة، وليسا دعوى جدلية من طرف واحد.',
      },
    },
    {
      id: 'e2',
      sourceId: 'S23',
      locator: 'whole work (database as a whole; no manuscript or reading cited)',
      role: 'context',
      states: {
        en: 'The Virtual Manuscript Room provides scholarly descriptions and images of New Testament manuscripts so that readers can examine the witnesses themselves.',
        ar: 'توفر غرفة المخطوطات الافتراضية أوصافًا علمية وصورًا لمخطوطات العهد الجديد، ليتمكن القراء من فحص الشواهد بأنفسهم.',
      },
      inference: {
        en: 'The evidence is open to checking. A reader can see that the manuscripts differ and that the differences are catalogued, rather than relying on anyone’s summary.',
        ar: 'الشواهد متاحة للتحقق. يستطيع القارئ أن يرى أن المخطوطات تختلف وأن الاختلافات مفهرسة، دون الاعتماد على تلخيص أحد.',
      },
    },
    {
      id: 'e3',
      sourceId: 'S25',
      locator: 'whole work (digital library as a whole; no individual scroll cited)',
      role: 'supports',
      states: {
        en: 'The digital library presents images of the Dead Sea Scrolls, which date from roughly the third century BC to the first century AD and include copies of books of the Hebrew Bible.',
        ar: 'تعرض المكتبة الرقمية صور مخطوطات البحر الميت التي تعود إلى ما بين القرن الثالث قبل الميلاد والقرن الأول الميلادي تقريبًا، وتتضمن نسخًا من أسفار الكتاب العبري.',
      },
      inference: {
        en: 'Hebrew copies from this period can be set beside much later manuscripts to measure change over time. Reuse of the images is restricted, so the site links rather than reproduces.',
        ar: 'يمكن وضع نسخ عبرية من تلك الفترة إلى جانب مخطوطات أحدث بكثير لقياس التغيّر عبر الزمن. وإعادة استخدام الصور مقيَّدة، فيكتفي الموقع بالإحالة دون النسخ.',
      },
    },
    {
      id: 'e4',
      sourceId: 'S26',
      locator: 'whole work (essay as a whole; no detail of the scroll cited)',
      role: 'supports',
      states: {
        en: 'The Smithsonian essay is offered as an example of agreement and difference between a Qumran Isaiah text and later texts.',
        ar: 'يُقدَّم مقال المؤسسة السميثسونية مثالًا على الاتفاق والاختلاف بين نص إشعياء القمراني والنصوص اللاحقة.',
      },
      inference: {
        en: 'It is a pointer to a concrete example only; no detail of the scroll is relied on here.',
        ar: 'هو إشارة إلى مثال محدد فقط، ولا يُعتمد هنا على أي تفصيل من المخطوطة.',
      },
    },
    {
      id: 'e5',
      sourceId: 'S28',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'context',
      states: {
        en: 'Tov’s textbook surveys the textual traditions of the Hebrew Bible (the Masoretic Text, the Septuagint and the Qumran texts) and the history of their transmission.',
        ar: 'يستعرض كتاب توف الدراسي التقاليد النصية للكتاب العبري (النص الماسوري والسبعيني ونصوص قمران) وتاريخ انتقالها.',
      },
      inference: {
        en: 'The Old Testament’s textual history is plural. Scholars speak of related but distinct textual traditions and not of one fixed text at that time.',
        ar: 'التاريخ النصي للعهد القديم متعدد. فالباحثون يتحدثون عن تقاليد نصية متقاربة لكنها متمايزة، لا عن نص واحد ثابت في ذلك الزمن.',
      },
    },
  ],
  objections: [
    {
      id: 'o1',
      statement: {
        en: 'There are more recorded variants than words in the New Testament, so the text cannot be trusted.',
        ar: 'عدد القراءات المتباينة المسجلة يزيد على عدد كلمات العهد الجديد، فلا يمكن الوثوق بالنص.',
      },
      response: {
        en: [
          'The figure counts differences per manuscript. One small spelling difference repeated across hundreds of copies is counted hundreds of times, so a large total mainly reflects a large number of manuscripts.',
          'What matters is what the variants are. Most are tiny, and editors can usually tell from the relationships between manuscripts which reading is earlier. The abundance of copies is a strength: it is exactly what lets us recover the text.',
        ],
        ar: [
          'الرقم يحصي الفروق بحسب المخطوطة. فاختلاف إملائي صغير يتكرر في مئات النسخ يُحسب مئات المرات، فيعكس العدد الكبير أساسًا كثرة المخطوطات.',
          'والمهم هو طبيعة القراءات. فأكثرها ضئيل، ويستطيع المحررون عادةً أن يعرفوا من العلاقات بين المخطوطات أي قراءة أقدم. وكثرة النسخ قوة لا ضعف: فهي بالضبط ما يتيح لنا استعادة النص.',
        ],
      },
      limits: {
        en: 'Explaining the figure does not remove the uncertain places or show that every doubtful passage is harmless.',
        ar: 'تفسير الرقم لا يزيل المواضع غير المؤكدة، ولا يثبت أن كل فقرة مشكوك فيها لا ضرر منها.',
      },
      evidence: ['e1', 'e2'],
    },
    {
      id: 'o2',
      statement: {
        en: 'Scribes sometimes changed the text on purpose for doctrinal reasons, so the original has been altered.',
        ar: 'كان النُّسّاخ أحيانًا يغيّرون النص عمدًا لأسباب عقائدية، فالأصل قد تبدّل.',
      },
      response: {
        en: [
          'Some deliberate changes did happen, and the Metzger and Ehrman textbook describes them openly.',
          'But they are found by comparing manuscripts, and the same method that finds them lets editors set them aside. No one scribe or party controlled all the copies, which spread across many lands and languages. A change in one line of copies is caught by the others.',
        ],
        ar: [
          'حدثت بعض التغييرات المتعمدة فعلًا، ويصفها كتاب ميتزغر وإيرمان علنًا.',
          'لكنها تُكتشف بمقارنة المخطوطات، والمنهج نفسه الذي يكشفها يتيح للمحررين استبعادها. ولم يتحكم ناسخ واحد أو فريق واحد في كل النسخ التي انتشرت في بلاد ولغات كثيرة. فالتغيير في خط واحد من النسخ تكشفه الخطوط الأخرى.',
        ],
      },
      limits: {
        en: 'This does not settle individual passages where the manuscripts are divided or where the earliest witnesses are missing.',
        ar: 'هذا لا يحسم الفقرات المنفردة التي تنقسم فيها المخطوطات أو تغيب فيها أقدم الشواهد.',
      },
      evidence: ['e1'],
    },
    {
      id: 'o3',
      statement: {
        en: 'If God inspired the Bible, he would have kept every copy identical.',
        ar: 'لو أوحى الله بالكتاب المقدس لحفظ كل النسخ متطابقة.',
      },
      response: {
        en: [
          'The Church has never taught that every copy is identical. God works through people, and He gave His Word to the Church to keep and to read, not to scribes who could never slip.',
          'Inspiration concerns the Scriptures as the Church has received and read them in her life. The many copies, spread through many churches, are themselves part of how God kept the text safe: no single error could take over.',
        ],
        ar: [
          'لم تعلّم الكنيسة قط أن كل النسخ متطابقة. فالله يعمل بواسطة البشر، وقد أعطى كلمته للكنيسة لتحفظها وتقرأها، لا لنُسّاخ لا يخطئون أبدًا.',
          'والوحي يتعلق بالكتب المقدسة كما تسلّمتها الكنيسة وقرأتها في حياتها. وكثرة النسخ المنتشرة في كنائس كثيرة جزء من الطريقة التي حفظ بها الله النص: فلا يستطيع خطأ واحد أن يسود.',
        ],
      },
      limits: {
        en: 'It does not prove inspiration, and it does not answer how much variation a theology of inspiration should expect.',
        ar: 'لا يثبت هذا الوحي، ولا يجيب عن مقدار الاختلاف الذي ينبغي أن يتوقعه لاهوت الوحي.',
      },
      evidence: ['e1'],
    },
  ],
  christianResponse: {
    historical: {
      en: [
        'Read as historical evidence, the manuscripts show a text that was copied with small variations but never lost. For the New Testament, the number and spread of manuscripts, with early translations and quotations, let editors compare independent lines of transmission. For the Hebrew Bible, the Qumran finds show remarkable continuity across a thousand years.',
        'The text can be recovered with good confidence, and the few uncertain passages are known and discussed in their own articles. The evidence rules out the claim of wholesale corruption.',
      ],
      ar: [
        'إذا قُرئت المخطوطات شواهدَ تاريخية، فهي تُظهر نصًّا نُسخ مع اختلافات صغيرة لكنه لم يضِع قط. ففي العهد الجديد، يتيح عدد المخطوطات وانتشارها، مع الترجمات القديمة والاقتباسات، للمحررين مقارنة خطوط نقل مستقلة. وفي الكتاب العبري، تُظهر مكتشفات قمران استمرارية لافتة عبر ألف سنة.',
        'ويمكن استعادة النص بثقة جيدة، والفقرات القليلة غير المؤكدة معروفة وتناقشها مقالات مستقلة. والشواهد تستبعد دعوى التحريف الشامل.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that the Scriptures are inspired by the Holy Spirit and read in the life of the Church, with the Fathers and the liturgy. Confessing that does not require believing that no copyist ever made a mistake. It does ask Christians to treat the work of textual criticism as a service to understanding the text, not as an enemy.',
        'Faith and evidence agree here: the manuscripts show a text faithfully kept, and the Church confesses that this text is the Word of God.',
      ],
      ar: [
        'تعترف الكنيسة بأن الكتب المقدسة موحى بها من الروح القدس وتُقرأ في حياة الكنيسة مع الآباء والصلوات الطقسية. وهذا الاعتراف لا يستلزم الاعتقاد بأن ناسخًا لم يخطئ قط. لكنه يدعو المسيحيين إلى النظر إلى عمل النقد النصي بوصفه خدمة لفهم النص لا عدوًّا له.',
        'والإيمان والشواهد يتفقان هنا: فالمخطوطات تُظهر نصًّا محفوظًا بأمانة، والكنيسة تعترف بأن هذا النص كلمة الله.',
      ],
    },
  },
  coptic: {
    en: [
      'The Coptic Orthodox Church has long copied, translated and read Scripture in Coptic and Arabic as well as Greek, and Coptic manuscripts and versions are among the early witnesses that textual scholars consult. The Church reads Scripture in the liturgy and in the lectionary as it has received it.',
    ],
    ar: [
      'نسخت الكنيسة القبطية الأرثوذكسية الكتاب المقدس وترجمته وقرأته منذ القدم بالقبطية والعربية إلى جانب اليونانية، والمخطوطات والنسخ القبطية من الشواهد المبكرة التي يرجع إليها الباحثون في النقد النصي. وتقرأ الكنيسة الكتاب المقدس في الصلوات الطقسية وفي القطمارس كما تسلّمته.',
    ],
  },
  disputed: {
    en: [
      'Scholars disagree about how much weight to give to deliberate theological changes, about how early some textual forms were fixed, and about how to describe the relationship between the Hebrew text types at Qumran and the later Masoretic tradition.',
      'They also disagree about whether the notion of one “original text” is the right goal for every book, or whether some books had more than one early edition. These questions are open.',
    ],
    ar: [
      'يختلف الباحثون في الوزن الذي ينبغي إعطاؤه للتغييرات اللاهوتية المتعمدة، وفي مدى تثبّت بعض الصيغ النصية مبكرًا، وفي وصف العلاقة بين أنماط النص العبري في قمران والتقليد الماسوري اللاحق.',
      'ويختلفون أيضًا في ما إذا كان السعي إلى «نص أصلي» واحد هو الهدف الصحيح لكل سفر، أو أن بعض الأسفار كانت لها طبعات مبكرة متعددة. وهذه المسائل مفتوحة.',
    ],
  },
  conclusion: {
    en: 'The Bible has not been changed in any way that touches its message. Copies differ in small details, the abundance of manuscripts lets those details be seen and corrected, and the few passages in question are discussed in the open. The Church reads today the Scriptures she received from the apostles, inspired by the Holy Spirit and faithfully handed down.',
    ar: 'لم يتغيّر الكتاب المقدس بأي طريقة تمسّ رسالته. فالنسخ تختلف في تفاصيل صغيرة، وكثرة المخطوطات تتيح رؤية هذه التفاصيل وتصحيحها، والفقرات القليلة موضع البحث تُناقَش علنًا. والكنيسة تقرأ اليوم الكتب المقدسة التي تسلّمتها من الرسل، موحى بها من الروح القدس ومسلَّمة بأمانة.',
  },
  furtherReading: ['S27', 'S28', 'S23', 'S25', 'S26', 'S62'],
  related: ['what-is-a-textual-variant', 'preservation-vs-inspiration', 'footnoted-passages', 'dead-sea-scrolls', 'septuagint-and-masoretic'],
};
