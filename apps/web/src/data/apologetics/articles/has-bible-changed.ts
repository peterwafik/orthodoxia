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
    en: 'In detail, yes: no two hand-copied manuscripts agree everywhere, and copyists sometimes made mistakes and occasionally made deliberate changes. As a whole, the evidence does not show that the text was lost or replaced. Because the New Testament survives in thousands of manuscripts, scholars can compare them, identify where they differ, and in most places reconstruct the earlier wording with good confidence. A small number of differences affect meaning, and a few of those are seriously disputed. Whether the text is also inspired is a separate question that manuscripts alone cannot answer.',
    ar: 'في التفاصيل نعم: لا توجد مخطوطتان منسوختان بخط اليد متطابقتان في كل موضع، وقد أخطأ النُّسّاخ أحيانًا وأجروا تغييرات متعمدة في حالات قليلة. أما في المجمل فلا تدل الأدلة على أن النص ضاع أو استُبدل. فبما أن العهد الجديد محفوظ في آلاف المخطوطات، يستطيع الباحثون مقارنتها وتحديد مواضع الاختلاف، وفي أكثر المواضع يمكنهم استعادة الصيغة الأقدم بثقة جيدة. وعدد قليل من الاختلافات يمسّ المعنى، وبعضها موضع خلاف حقيقي. أما كون النص موحى به فمسألة أخرى لا تجيب عنها المخطوطات وحدها.',
  },
  quickPoints: {
    en: [
      'Copies made by hand differ. Scholars call each place where manuscripts disagree a textual variant.',
      'Most variants are small: spelling, word order, a different form of a name, or a slip of the eye. Many do not even affect translation.',
      'A few variants do affect meaning, and some longer passages are disputed. These are discussed openly in the footnotes of many Bibles.',
      'Having thousands of manuscripts lets scholars compare copies and reconstruct earlier wording; it is also why the number of recorded variants is large.',
      'The Dead Sea Scrolls show that the Hebrew text of several Old Testament books was copied with great care over centuries, although the texts were not identical.',
      'Preserving wording and being inspired are two different questions. This article answers only the first.',
    ],
    ar: [
      'النسخ المكتوبة بخط اليد تختلف. ويسمّي الباحثون كل موضع تتباين فيه المخطوطات «قراءة متباينة».',
      'أكثر القراءات المتباينة صغيرة: تهجئة، أو ترتيب كلمات، أو صيغة مختلفة لاسم، أو زلّة نظر. وكثير منها لا يؤثر حتى في الترجمة.',
      'بعض القراءات يمسّ المعنى، وبعض الفقرات الأطول موضع خلاف. وتُناقَش هذه علنًا في حواشي كثير من الطبعات.',
      'وجود آلاف المخطوطات يتيح للباحثين مقارنة النسخ واستعادة صيغ أقدم؛ وهو أيضًا سبب كبر عدد القراءات المتباينة المسجّلة.',
      'تُظهر مخطوطات البحر الميت أن نص عدة أسفار من العهد القديم بالعبرية نُسخ بعناية كبيرة عبر قرون، مع أن النصوص لم تكن متطابقة.',
      'حفظ الصيغة النصية وكون النص موحى به سؤالان مختلفان. وهذه المقالة تجيب عن الأول فقط.',
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
      'Many people have heard that the Bible has been “changed many times”, and others have heard that it has been preserved perfectly. Both statements are too blunt. A fair answer needs to say what changed, how scholars know, and how much it matters.',
      'The question matters to Christians because the Church receives these writings as the Word of God, and it matters to everyone else because a text that cannot be traced back reliably cannot be used as historical evidence. Examining the manuscripts openly is a way of respecting both concerns.',
    ],
    ar: [
      'سمع كثيرون أن الكتاب المقدس «تغيّر مرات كثيرة»، وسمع آخرون أنه محفوظ حفظًا كاملًا لا خلل فيه. والعبارتان كلتاهما فظّتان. والجواب المنصف ينبغي أن يبيّن ما الذي تغيّر، وكيف يعرف الباحثون ذلك، وما مدى أهميته.',
      'والسؤال مهم للمسيحيين لأن الكنيسة تتسلّم هذه الكتابات كلمة الله، ومهم لغيرهم لأن نصًّا لا يمكن تتبّعه بثقة لا يصلح دليلًا تاريخيًا. وفحص المخطوطات علنًا طريقة لاحترام الاهتمامين معًا.',
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
        en: 'Hand-copied biblical manuscripts differ from one another in many places, and the differences arose from both accidental and deliberate changes by copyists.',
        ar: 'تختلف المخطوطات الكتابية المنسوخة بخط اليد بعضها عن بعض في مواضع كثيرة، وقد نشأت الاختلافات عن تغييرات عرضية ومتعمدة من النُّسّاخ.',
      },
      argumentType: 'textual',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'This is the basic observation of textual criticism and is reported in the standard textbooks. It does not depend on any theological position.',
        ar: 'هذه هي الملاحظة الأساسية في النقد النصي، وتذكرها المراجع الدراسية المعتمدة، ولا تتوقف على أي موقف لاهوتي.',
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
        en: 'Most textual variants are minor (spelling, word order, small changes of wording), and a small minority affect meaning.',
        ar: 'أكثر القراءات المتباينة صغيرة (تهجئة، أو ترتيب كلمات، أو تعديلات طفيفة في الصياغة)، وأقلية صغيرة منها تمسّ المعنى.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'Textbooks describe the bulk of variants as minor. Where the line between “minor” and “meaningful” falls, and how to weigh the meaningful ones, are matters of judgment on which scholars differ.',
        ar: 'تصف المراجع الدراسية معظم القراءات بأنها صغيرة. أما أين يقع الحد بين «الصغير» و«المؤثر»، وكيف توزن القراءات المؤثرة، فمسائل تقدير يختلف فيها الباحثون.',
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
        en: 'The Dead Sea Scrolls show that the Hebrew text of at least some Old Testament books was transmitted with close continuity over many centuries, while also showing that more than one form of the text circulated.',
        ar: 'تُظهر مخطوطات البحر الميت أن النص العبري لبعض أسفار العهد القديم على الأقل انتقل باستمرار وثيق عبر قرون كثيرة، وتُظهر كذلك أن أكثر من صيغة للنص كانت متداولة.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The agreement of a Qumran Isaiah manuscript with the later Masoretic Text is close in most of its content, while other Qumran texts are closer to other traditions. Both observations come from specialist work on the scrolls.',
        ar: 'يتفق مخطوط إشعياء من قمران مع النص الماسوري اللاحق اتفاقًا وثيقًا في أغلب محتواه، بينما تقترب نصوص قمرانية أخرى من تقاليد أخرى. والملاحظتان كلتاهما من الدراسات المتخصصة للمخطوطات.',
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
        en: 'Whether the wording of a text has been preserved is a different question from whether the text is inspired; the manuscript evidence bears on the first and cannot decide the second.',
        ar: 'بقاء صيغة النص سؤال مختلف عن كون النص موحى به؛ وشواهد المخطوطات تتصل بالأول ولا تستطيع أن تحسم الثاني.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'Inspiration is a claim of faith about the origin and authority of Scripture. Manuscript study is a historical discipline. Each answers its own kind of question.',
        ar: 'الوحي دعوى إيمانية عن مصدر الكتاب المقدس وسلطانه، ودراسة المخطوطات علم تاريخي. ولكل منهما نوع السؤال الذي يجيب عنه.',
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
          'The figure is real, but it counts differences per manuscript. One small spelling difference repeated across hundreds of copies is counted hundreds of times, so a large total mostly reflects a large number of manuscripts.',
          'What matters is the nature of the variants and where they fall. Most are small, and editors can usually tell from the manuscript relationships which reading is earlier. The sceptic is right that some places are uncertain, and this article does not hide that.',
        ],
        ar: [
          'الرقم حقيقي، لكنه يحصي الفروق بحسب المخطوطة. فاختلاف إملائي صغير يتكرر في مئات النسخ يُحسب مئات المرات، فيعكس العدد الكبير في الغالب كثرة المخطوطات.',
          'والمهم هو طبيعة القراءات ومواضعها. فأكثرها صغير، ويستطيع المحررون عادةً أن يعرفوا من علاقات المخطوطات أي قراءة أقدم. والمشكك محق في أن بعض المواضع غير مؤكد، ولا تخفي هذه المقالة ذلك.',
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
          'Some deliberate changes are recognised by scholars, and the Metzger and Ehrman textbook treats them as part of the story. Pretending that every change was an accident would be inaccurate.',
          'Deliberate changes are, however, found by comparing manuscripts. The very method that detects them also lets editors set them aside. Unless the evidence shows that a whole tradition was altered at once, a change in one line of copies can be checked against others.',
        ],
        ar: [
          'يعترف الباحثون ببعض التغييرات المتعمدة، ويتناولها كتاب ميتزغر وإيرمان جزءًا من القصة. ومن غير الدقيق ادعاء أن كل تغيير كان عن غير قصد.',
          'لكن التغييرات المتعمدة تُكتشف بمقارنة المخطوطات. والمنهج الذي يكشفها هو نفسه الذي يتيح للمحررين استبعادها. وما لم تدل الشواهد على أن تقليدًا كاملًا تغيّر دفعة واحدة، فإن تغييرًا في خط واحد من النسخ يمكن فحصه بمقابلته بخطوط أخرى.',
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
          'This is a theological expectation, not a historical finding, and the Church has not taught that every copy is identical. The historical evidence shows that copies differ.',
          'A Christian may reply that Scripture is received through the life of the Church and that inspiration concerns the writings as the Church has received and read them, not the perfection of each scribe. A sceptic may reply that this is a different and weaker claim. Both responses are theological, and the manuscripts alone do not decide between them.',
        ],
        ar: [
          'هذا توقع لاهوتي وليس نتيجة تاريخية، ولم تعلّم الكنيسة أن كل النسخ متطابقة. والشواهد التاريخية تُظهر أن النسخ تختلف.',
          'وقد يجيب المسيحي بأن الكتاب المقدس يُتسلَّم في حياة الكنيسة، وأن الوحي يتعلق بالكتابات كما تسلّمتها الكنيسة وقرأتها لا بكمال كل ناسخ. وقد يجيب المشكك بأن هذا ادعاء مختلف وأضعف. والجوابان كلاهما لاهوتي، والمخطوطات وحدها لا تفصل بينهما.',
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
        'As historical evidence, the manuscripts show a text that was copied with variation but not lost. For the New Testament, the number and spread of manuscripts, together with early translations and quotations, allow editors to compare independent lines of transmission. For the Hebrew Bible, the Qumran finds show continuity in many places and diversity in others.',
        'A careful historian will say that most of the text can be recovered with good confidence, and that a few passages, discussed in their own articles, remain uncertain. No claim of perfect preservation or of wholesale corruption fits that evidence.',
      ],
      ar: [
        'بوصفها شواهد تاريخية، تُظهر المخطوطات نصًّا نُسخ مع اختلافات لكنه لم يضِع. ففي العهد الجديد، يتيح عدد المخطوطات وانتشارها، مع الترجمات القديمة والاقتباسات، للمحررين مقارنة خطوط نقل مستقلة. وفي الكتاب العبري، تُظهر مكتشفات قمران استمرارية في مواضع كثيرة وتنوعًا في غيرها.',
        'والمؤرخ المدقق يقول إن أكثر النص يمكن استعادته بثقة جيدة، وإن فقرات قليلة، تناقشها مقالات مستقلة، تظل غير مؤكدة. ولا يوافق هذه الشواهد لا ادعاء الحفظ الكامل ولا ادعاء التحريف الشامل.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that the Scriptures are inspired by the Holy Spirit and read in the life of the Church, with the Fathers and the liturgy. Confessing that does not require believing that no copyist ever made a mistake. It does ask Christians to treat the work of textual criticism as a service to understanding the text, not as an enemy.',
        'These are statements of faith. They should not be confused with the historical argument above, which does not require the reader to accept them.',
      ],
      ar: [
        'تعترف الكنيسة بأن الكتب المقدسة موحى بها من الروح القدس وتُقرأ في حياة الكنيسة مع الآباء والصلوات الطقسية. وهذا الاعتراف لا يستلزم الاعتقاد بأن ناسخًا لم يخطئ قط. لكنه يدعو المسيحيين إلى النظر إلى عمل النقد النصي بوصفه خدمة لفهم النص لا عدوًّا له.',
        'وهذه عبارات إيمان، ولا ينبغي أن تُخلط بالحجة التاريخية أعلاه، التي لا تتطلب من القارئ قبولها.',
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
    en: 'The text has changed in details but has not been lost: copies differ, most differences are small, a few matter, and the evidence is open to checking. The manuscripts support a careful historical use of the Bible, not a claim of perfect copying, and they cannot by themselves prove or disprove inspiration.',
    ar: 'تغيّر النص في تفاصيله ولكنه لم يضِع: فالنسخ تختلف، وأكثر الاختلافات صغير، وقليل منها مؤثر، والشواهد متاحة للتحقق. وتسند المخطوطات استعمالًا تاريخيًا متأنيًا للكتاب المقدس، لا ادعاء نسخ كامل، ولا تستطيع وحدها أن تثبت الوحي أو تنفيه.',
  },
  furtherReading: ['S27', 'S28', 'S23', 'S25', 'S26', 'S62'],
  related: ['what-is-a-textual-variant', 'preservation-vs-inspiration', 'footnoted-passages', 'dead-sea-scrolls', 'septuagint-and-masoretic'],
};
