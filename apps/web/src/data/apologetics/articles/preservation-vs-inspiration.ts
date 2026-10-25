import type { Article } from '../types.ts';

export const article: Article = {
  id: 'preservation-vs-inspiration',
  questionId: 'preservation-vs-inspiration',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article distinguishes two questions that are often confused: whether the wording of the biblical text has been preserved through copying, and whether the Scriptures are inspired by God. It explains how each is answered, by what kind of evidence, and how the Coptic Orthodox Church relates them. It does not prove inspiration (see the article on why Scripture is regarded as inspired) and does not survey the manuscripts (see the article on whether the text has changed).',
    ar: 'تميز هذه المقالة بين سؤالين كثيرًا ما يختلطان: هل حُفظت صيغة النص الكتابي عبر النسخ، وهل الكتب المقدسة موحى بها من الله. وهي تشرح كيف يُجاب عن كل منهما، وبأي نوع من الشواهد، وكيف تربط بينهما الكنيسة القبطية الأرثوذكسية. ولا تثبت الوحي (انظر مقالة لماذا يُعد الكتاب موحى به)، ولا تستعرض المخطوطات (انظر مقالة هل تغيّر النص).',
  },
  shortAnswer: {
    en: 'Preservation asks what the text says now compared with what was first written; it is a historical question answered by comparing manuscripts. Inspiration asks about the origin and authority of the writings; it is a question of faith, answered within the Church’s life. The two are related but not the same: a text can be well preserved without being inspired, and a Christian can hold that the Scriptures are inspired without claiming that every copyist was free from error. The Coptic Orthodox Church confesses that the Holy Spirit inspired the Scriptures and guides the Church that received them, and she welcomes the study of the manuscripts as a service to understanding the text.',
    ar: 'يسأل الحفظ ماذا يقول النص الآن مقارنة بما كُتب أول مرة؛ وهو سؤال تاريخي يُجاب عنه بمقارنة المخطوطات. ويسأل الوحي عن مصدر الكتابات وسلطانها؛ وهو سؤال إيمان يُجاب عنه داخل حياة الكنيسة. والسؤالان مترابطان لكنهما ليسا واحدًا: فقد يُحفظ نص جيدًا دون أن يكون موحى به، وقد يؤمن مسيحي بأن الكتب موحى بها دون أن يدّعي أن كل ناسخ كان معصومًا من الخطأ. وتعترف الكنيسة القبطية الأرثوذكسية بأن الروح القدس أوحى بالكتب المقدسة ويرشد الكنيسة التي تسلمتها، وترحب بدراسة المخطوطات خدمةً لفهم النص.',
  },
  quickPoints: {
    en: [
      'Preservation is about the copying history of the text; inspiration is about its origin and authority.',
      'Preservation can be studied by anyone, by comparing manuscripts; inspiration is a confession of faith.',
      'Manuscripts can show how well the wording was kept, but cannot prove or disprove that God inspired the writing.',
      'Christian traditions describe the link between the two differently, for example by emphasising the original writings or the Church’s reception.',
      'The Coptic Orthodox Church receives Scripture as inspired and read within Holy Tradition, which includes the Church’s life of worship.',
      'Muslim and secular critics sometimes claim the text was corrupted; the manuscript evidence can address copying, but not the theological judgment.',
    ],
    ar: [
      'الحفظ يتعلق بتاريخ نسخ النص؛ والوحي يتعلق بمصدره وسلطانه.',
      'يستطيع أي أحد دراسة الحفظ بمقارنة المخطوطات؛ أما الوحي فاعتراف إيماني.',
      'تستطيع المخطوطات أن تبيّن مدى حفظ الصيغة، ولا تستطيع أن تثبت أو تنفي أن الله أوحى بالكتابة.',
      'تصف التقاليد المسيحية الصلة بين الأمرين بصور مختلفة، كالتشديد على الكتابات الأصلية أو على تسلّم الكنيسة.',
      'تتسلم الكنيسة القبطية الأرثوذكسية الكتاب موحى به ومقروءًا داخل التقليد المقدس، ومنه حياة العبادة في الكنيسة.',
      'يدعي بعض الناقدين المسلمين والعلمانيين أن النص حُرّف؛ وتستطيع شواهد المخطوطات معالجة النسخ، لا الحكم اللاهوتي.',
    ],
  },
  argumentTypes: ['textual', 'theological', 'philosophical'],
  assessment: {
    label: 'theological_interpretation',
    explanation: {
      en: 'The distinction between preservation and inspiration is a matter of clear reasoning about two kinds of question. How the Church understands inspiration, and how that relates to textual variation, is theological interpretation within the Church’s Tradition, and other traditions answer differently. The historical half of the question, how well the wording has been preserved, is addressed by the manuscript evidence and is treated in the article on whether the text has changed.',
      ar: 'التمييز بين الحفظ والوحي مسألة وضوح في التفكير بين نوعين من الأسئلة. أما كيف تفهم الكنيسة الوحي وكيف يرتبط بالتباين النصي فتفسير لاهوتي داخل تقليد الكنيسة، وتجيب التقاليد الأخرى جوابًا مختلفًا. والشق التاريخي من السؤال، أي مدى حفظ الصيغة، تعالجه شواهد المخطوطات وتتناوله مقالة هل تغيّر النص.',
    },
  },
  whyExamine: {
    en: [
      'Arguments about the Bible often go wrong by running these two questions together. A believer may think that admitting copyists’ errors threatens inspiration; a critic may think that finding copyists’ errors disproves inspiration. In both cases a historical observation is being taken to answer a theological question, or the reverse.',
      'Separating them also helps in conversation with people of other faiths. For instance, Muslim friends may hold that earlier scriptures were altered, and the useful response is to ask what is claimed, when, and on what evidence, while respecting what the Church itself believes.',
    ],
    ar: [
      'تضل المحاجّات حول الكتاب المقدس كثيرًا حين تخلط بين هذين السؤالين. فقد يظن مؤمن أن الإقرار بأخطاء النسّاخ يهدد الوحي، وقد يظن ناقد أن اكتشاف أخطاء النسّاخ ينفي الوحي. وفي الحالتين تُؤخذ ملاحظة تاريخية جوابًا عن سؤال لاهوتي، أو العكس.',
      'والفصل بينهما يفيد أيضًا في الحوار مع أصحاب الأديان الأخرى. فقد يرى أصدقاء مسلمون أن الكتب السابقة غُيرت، والجواب النافع أن نسأل ما المدعى، ومتى، وعلى أي شاهد، مع احترام ما تؤمن به الكنيسة نفسها.',
    ],
  },
  background: {
    en: [
      'Preservation is a question about transmission. Every ancient book was copied by hand, and the question is how much the wording at the end of the process resembles the wording at the beginning. For the New Testament and for the Hebrew Bible, scholars compare the surviving manuscripts, versions and quotations to answer it. Their findings are the subject of the article on whether the text has changed.',
      'Inspiration is a question about origin. The New Testament speaks of sacred writings as God-breathed and of prophecy as not coming from human impulse but from people moved by the Holy Spirit. The Church reads these statements in the light of the whole of Scripture and of the Fathers. She understands inspiration to mean that God worked through the human authors, with their own minds and styles, to give the Church what he intended; it does not mean mechanical dictation.',
      'Christian traditions connect the two in different ways. Some Protestant traditions stress that the original writings were without error and that the work of textual criticism is to recover them. The Catholic and Orthodox traditions place Scripture within the life of the Church that received it and read it in worship, and so do not rest the authority of the Bible on a perfect text of the original manuscripts. All agree that the human copying process is historical and open to study. The Coptic Church, like the rest of Orthodoxy, has no statement that all copies are identical. She has an old habit of copying with reverence, and she has a liturgical text that she reads and prays.',
      'Another family of claims comes from outside the Church. Some critics hold that the text was so altered that it cannot be trusted, and Islamic teaching holds that the Torah and Gospel were revealed by God but that people altered or lost them. Manuscript evidence can help with the question of when and how the text changed. It cannot decide the question whether the text is a divine revelation, or what Islam or Christianity should teach about it.',
    ],
    ar: [
      'الحفظ سؤال عن النقل. فكل كتاب قديم نُسخ بخط اليد، والسؤال هو إلى أي حد تشبه الصيغة في نهاية العملية الصيغة في بدايتها. وفي العهد الجديد والكتاب العبري يقارن الباحثون المخطوطات الباقية والترجمات والاقتباسات للجواب. ونتائجهم موضوع مقالة هل تغيّر النص.',
      'والوحي سؤال عن المصدر. فالعهد الجديد يتكلم عن الكتب المقدسة بأنها موحى بها من الله، وعن النبوة بأنها لم تأتِ بمشيئة إنسان بل تكلم بها أناس مسوقين من الروح القدس. وتقرأ الكنيسة هذه العبارات في ضوء الكتاب كله والآباء. وتفهم الوحي بمعنى أن الله عمل من خلال الكتّاب البشر، بعقولهم وأساليبهم، ليعطي الكنيسة ما قصده؛ ولا تعني الإملاء الآلي.',
      'وتربط التقاليد المسيحية بين الأمرين بطرق مختلفة. فبعض التقاليد البروتستانتية تشدد على أن الكتابات الأصلية كانت بلا خطأ وأن عمل النقد النصي هو استردادها. أما التقليدان الكاثوليكي والأرثوذكسي فيضعان الكتاب داخل حياة الكنيسة التي تسلمته وقرأته في العبادة، ولذلك لا يقيمان سلطان الكتاب على نص كامل للمخطوطات الأصلية. والجميع متفقون على أن عملية النسخ البشرية تاريخية وقابلة للدراسة. وليس عند الكنيسة القبطية، كسائر الأرثوذكسية، قول بأن كل النسخ متطابقة. وعندها عادة قديمة في النسخ بتوقير، وعندها نص طقسي تقرؤه وتصلي به.',
      'وهناك عائلة أخرى من الدعاوى من خارج الكنيسة. فبعض الناقدين يرون أن النص تغير حتى لا يمكن الوثوق به، وفي التعليم الإسلامي أن التوراة والإنجيل أنزلهما الله لكن الناس غيّروهما أو أضاعوهما. وتستطيع شواهد المخطوطات أن تعين في سؤال متى وكيف تغير النص. ولا تستطيع أن تحسم هل النص وحي إلهي، ولا ما ينبغي أن يعلمه الإسلام أو المسيحية عنه.',
    ],
  },
  glossary: ['inspiration', 'manuscript', 'textual-criticism', 'textual-variant', 'tradition', 'canon'],
  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'Preservation of wording and inspiration are two different questions, answered by different kinds of reasoning.',
        ar: 'حفظ الصيغة والوحي سؤالان مختلفان، يُجاب عنهما بنوعين مختلفين من التفكير.',
      },
      argumentType: 'philosophical',
      assessment: 'philosophical_argument',
      rationale: {
        en: 'A text can have been faithfully copied without being divinely inspired, and a divinely inspired text could be copied imperfectly. The two properties are logically independent, so evidence about one does not settle the other.',
        ar: 'قد يُنسخ نص بأمانة دون أن يكون موحى به إلهيًا، وقد يُنسخ نص موحى به نسخًا غير كامل. والخاصيتان مستقلتان منطقيًا، فالدليل على إحداهما لا يحسم الأخرى.',
      },
      limits: {
        en: 'A theology may link them: someone may hold that God would preserve what he inspired. That link is a theological claim and not a result of logic.',
        ar: 'قد يربط لاهوت بينهما: فقد يرى أحد أن الله يحفظ ما أوحى به. وهذه الصلة دعوى لاهوتية وليست نتيجة منطق.',
      },
      evidence: ['e1', 'e2'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'The New Testament speaks of the Scriptures as inspired by God and the Church receives them within a Tradition that includes her worship.',
        ar: 'يتكلم العهد الجديد عن الكتب بأنها موحى بها من الله، وتتسلمها الكنيسة داخل تقليد يشمل عبادتها.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'The statements are in the text itself and the Church’s reading of them is a matter of faith. They are cited as a description of what Christians believe, and not as proof for a non-believer.',
        ar: 'العبارات في النص نفسه، وقراءة الكنيسة لها مسألة إيمان. وهي تُذكر وصفًا لما يؤمن به المسيحيون لا برهانًا لغير المؤمن.',
      },
      limits: {
        en: 'The passages do not say how inspiration relates to copying, which is why Christian traditions differ about it.',
        ar: 'لا تقول الفقرات كيف يرتبط الوحي بالنسخ، ولهذا تختلف التقاليد المسيحية فيه.',
      },
      evidence: ['e3', 'e4'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'Manuscript evidence bears on preservation, and shows both that copies differ and that the earlier wording can in most places be recovered.',
        ar: 'تتصل شواهد المخطوطات بالحفظ، وتبيّن أن النسخ تختلف وأن الصيغة الأقدم يمكن استردادها في أكثر المواضع.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'This is the finding of textual criticism as described in the standard textbooks and as seen in the Dead Sea Scrolls for the Hebrew Bible. How much weight the remaining uncertain places carry is disputed.',
        ar: 'هذه نتيجة النقد النصي كما تصفها المراجع الدراسية المعتمدة وكما تظهر في مخطوطات البحر الميت للكتاب العبري. ووزن المواضع غير المؤكدة الباقية محل خلاف.',
      },
      limits: {
        en: 'It does not touch the theological question.',
        ar: 'لا يمس السؤال اللاهوتي.',
      },
      evidence: ['e5', 'e7'],
    },
  ],
  evidence: [
    {
      id: 'e1',
      sourceId: 'S27',
      locator: 'whole work (thesis as the authors state it; chapter not cited)',
      role: 'context',
      states: {
        en: 'The Metzger and Ehrman textbook describes the history of the New Testament text as a history of transmission, change and restoration through the study of manuscripts. It is a historical discipline whose results do not depend on a religious position.',
        ar: 'يصف كتاب ميتزغر وإيرمان تاريخ نص العهد الجديد بأنه تاريخ نقل وتغيير واستعادة عبر دراسة المخطوطات. وهو علم تاريخي لا تتوقف نتائجه على موقف ديني.',
      },
      inference: {
        en: 'The question of preservation is handled by a discipline that both believers and non-believers practise. That is why it can be stated apart from inspiration.',
        ar: 'يعالج سؤال الحفظ علمٌ يمارسه المؤمنون وغير المؤمنين. ولهذا يمكن عرضه بمعزل عن الوحي.',
      },
    },
    {
      id: 'e2',
      sourceId: 'S28',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'context',
      states: {
        en: 'Emanuel Tov, a Jewish scholar of the Hebrew Bible, surveys the textual traditions of the Hebrew Bible (Masoretic, Septuagint, Qumran) and treats their differences as part of the history of the text.',
        ar: 'يستعرض إيمانويل توف، وهو باحث يهودي في الكتاب العبري، التقاليد النصية للكتاب العبري (الماسوري والسبعيني وقمران) ويعالج اختلافاتها جزءًا من تاريخ النص.',
      },
      inference: {
        en: 'For the Hebrew Bible, scholars who revere the text describe a plurality of textual forms. This shows that serious study of variation and a high view of Scripture can go together.',
        ar: 'في الكتاب العبري يصف باحثون يوقرون النص تعددًا في الصيغ النصية. وهذا يبيّن أن الدراسة الجادة للتباين والنظرة الرفيعة إلى الكتاب يمكن أن يجتمعا.',
      },
    },
    {
      id: 'e3',
      sourceId: 'S62',
      locator: '2 Timothy 3:16-17',
      role: 'context',
      states: {
        en: 'The letter says that all Scripture is God-breathed and is useful for teaching, rebuke, correction and training in righteousness, so that the person of God may be complete.',
        ar: 'تقول الرسالة إن كل الكتاب موحى به من الله ونافع للتعليم والتوبيخ والتقويم والتأديب في البر، لكي يكون إنسان الله كاملًا.',
      },
      inference: {
        en: 'Read as an ancient document, this is a Christian author’s statement that the sacred writings come from God and serve the formation of the believer. It states a purpose of Scripture and does not state the mechanics of inspiration or copying.',
        ar: 'تُقرأ بوصفها وثيقة قديمة، فهي قول كاتب مسيحي إن الكتب المقدسة من الله وتخدم تكوين المؤمن. وهي تذكر غاية الكتاب ولا تذكر آلية الوحي ولا النسخ.',
      },
      bible: { book: '2-timothy', chapter: 3, verse: '16-17' },
    },
    {
      id: 'e4',
      sourceId: 'S62',
      locator: '2 Peter 1:20-21',
      role: 'context',
      states: {
        en: 'The letter says that no prophecy of Scripture came by human will, and that people spoke from God as they were carried along by the Holy Spirit.',
        ar: 'تقول الرسالة إن نبوة الكتاب لم تأتِ بمشيئة إنسان، وإن أناسًا تكلموا من قِبل الله مسوقين من الروح القدس.',
      },
      inference: {
        en: 'The text holds divine origin and human speakers together. This is the basis for the Church’s teaching that God works through human authors.',
        ar: 'يجمع النص بين أصل إلهي ومتكلمين بشر. وهذا أساس تعليم الكنيسة أن الله يعمل من خلال الكتّاب البشر.',
      },
      bible: { book: '2-peter', chapter: 1, verse: '20-21' },
    },
    {
      id: 'e5',
      sourceId: 'S25',
      locator: 'whole work (digital library as a whole; no individual scroll cited)',
      role: 'supports',
      states: {
        en: 'The digital library presents images of the Dead Sea Scrolls, which date from about the third century BC to the first century AD and include copies of books of the Hebrew Bible.',
        ar: 'تعرض المكتبة الرقمية صور مخطوطات البحر الميت التي تعود إلى نحو القرن الثالث قبل الميلاد حتى القرن الأول الميلادي وتتضمن نسخًا من أسفار الكتاب العبري.',
      },
      inference: {
        en: 'Comparing these copies with later ones lets scholars measure how much the wording changed. The images cannot be reproduced on the site, so it links to the library.',
        ar: 'تتيح مقارنة هذه النسخ بنسخ لاحقة للباحثين قياس مقدار تغير الصيغة. ولا يمكن إعادة نشر الصور في الموقع، فيحيل إلى المكتبة.',
      },
    },
    {
      id: 'e7',
      sourceId: 'S23',
      locator: 'whole work (database as a whole; no manuscript or reading cited)',
      role: 'context',
      states: {
        en: 'The Virtual Manuscript Room offers scholarly descriptions and images of New Testament manuscripts for anyone to examine.',
        ar: 'توفر غرفة المخطوطات الافتراضية أوصافًا علمية وصورًا لمخطوطات العهد الجديد لكل من يريد فحصها.',
      },
      inference: {
        en: 'The evidence on preservation is open, so readers can examine it and not rely on a summary from either side.',
        ar: 'الشواهد على الحفظ مفتوحة، فيستطيع القراء فحصها بدل الاعتماد على ملخص من أي طرف.',
      },
    },
  ],
  objections: [
    {
      id: 'o1',
      statement: {
        en: 'If the text has variants, then it is not inspired, since God would not allow his word to be corrupted.',
        ar: 'إن كان للنص قراءات متباينة فليس موحى به، لأن الله لا يسمح بتحريف كلمته.',
      },
      response: {
        en: [
          'This argument assumes a particular theology of inspiration, namely that inspiration entails a perfectly preserved text. The Coptic Orthodox Church does not teach this, and neither the Fathers nor the liturgical practice of the Church assume it. The Church holds that God’s word reaches us through the Church that received it, read it and lived it.',
          'Another tradition may reasonably hold that God’s guarding of his word extends to the wording itself. Christians differ about that, and the manuscript evidence does not decide between these theological positions.',
        ],
        ar: [
          'تفترض هذه الحجة لاهوتًا معينًا للوحي، وهو أن الوحي يستلزم نصًا محفوظًا حفظًا كاملًا. ولا تعلّم الكنيسة القبطية الأرثوذكسية ذلك، ولا يفترضه الآباء ولا الممارسة الطقسية للكنيسة. فالكنيسة تؤمن بأن كلمة الله تصل إلينا عبر الكنيسة التي تسلمتها وقرأتها وعاشتها.',
          'ويجوز أن يرى تقليد آخر أن حراسة الله لكلمته تمتد إلى الصيغة نفسها. ويختلف المسيحيون في ذلك، ولا تحسم شواهد المخطوطات بين هذه المواقف اللاهوتية.',
        ],
      },
      limits: {
        en: 'It does not prove that the Church’s view is right, only that the objection depends on a theological premise that is itself in question.',
        ar: 'لا يثبت أن رأي الكنيسة صحيح، بل أن الاعتراض يقوم على مقدمة لاهوتية هي نفسها موضع سؤال.',
      },
      evidence: ['e3', 'e4'],
    },
    {
      id: 'o2',
      statement: {
        en: 'Inspiration is unfalsifiable. Whenever evidence of change is found, believers retreat to “inspiration concerns the original, or the Church”, so the claim says nothing.',
        ar: 'الوحي لا يقبل التفنيد. فكلما وُجد دليل على التغيير ارتد المؤمنون إلى القول «الوحي يخص الأصل، أو الكنيسة»، فلا يقول الادعاء شيئًا.',
      },
      response: {
        en: [
          'There is a fair point here: if a claim is shaped to avoid any test, it loses explanatory force. The Church’s claim is not presented as a conclusion drawn from manuscripts; it is a confession received in faith and tested in the life of the Church and in the reasons for believing the Gospel.',
          'The historical claims that Christians make, such as those about Jesus’ life and resurrection, are open to historical examination, and the other articles treat them that way. The doctrine of inspiration belongs to a different kind of claim.',
        ],
        ar: [
          'في هذا الاعتراض نقطة وجيهة: فإذا صيغت دعوى لتتجنب أي اختبار فقدت قوتها التفسيرية. ودعوى الكنيسة لا تُقدَّم نتيجة مستخلصة من المخطوطات؛ إنها اعتراف يُتسلَّم بالإيمان ويُختبر في حياة الكنيسة وفي أسباب الإيمان بالإنجيل.',
          'أما الدعاوى التاريخية التي يطرحها المسيحيون، كالتي عن حياة يسوع وقيامته، فمفتوحة للفحص التاريخي، وتعالجها المقالات الأخرى على هذا الأساس. وعقيدة الوحي من نوع آخر من الدعاوى.',
        ],
      },
      limits: {
        en: 'This reply does not give a non-believer a reason to accept inspiration; the article on why Scripture is regarded as inspired takes up that question.',
        ar: 'لا يعطي هذا الرد غير المؤمن سببًا لقبول الوحي؛ وتتناول مقالة لماذا يُعد الكتاب موحى به ذلك السؤال.',
      },
      evidence: ['e1'],
    },
    {
      id: 'o3',
      statement: {
        en: 'The Bible was corrupted (tahrif), so it cannot be a reliable revelation.',
        ar: 'لقد حُرّف الكتاب المقدس (تحريف)، فلا يمكن أن يكون وحيًا موثوقًا.',
      },
      response: {
        en: [
          'Different people mean different things by this claim. Some mean that the text was wholesale replaced, which the manuscript evidence does not support, since the wording found in the oldest copies is recognisably that of later ones. Some mean that the meaning was misinterpreted, which is a matter of exegesis. Some mean that particular verses were added or changed, which is where textual criticism can speak, and where it does speak openly: the footnoted passages are examples.',
          'Christians answer that the Gospel was proclaimed and written within a generation or two of the events and has been read by the Church continuously since. What the evidence shows is detail-level variation, and a response should be addressed to the particular claim being made.',
        ],
        ar: [
          'يعني الناس بهذه الدعوى أمورًا مختلفة. فبعضهم يقصد أن النص استُبدل بجملته، وهذا لا تسنده شواهد المخطوطات، لأن الصيغة الموجودة في أقدم النسخ يُعرف أنها صيغة النسخ اللاحقة نفسها. وبعضهم يقصد أن المعنى فُسّر خطأ، وهذا شأن التفسير. وبعضهم يقصد أن آيات معينة أُضيفت أو غُيّرت، وهنا يستطيع النقد النصي أن يتكلم، وهو يتكلم علنًا: ومثاله الفقرات الموضوعة في الحواشي.',
          'ويجيب المسيحيون بأن الإنجيل كُرز به وكُتب في غضون جيل أو جيلين من الأحداث وقرأته الكنيسة باستمرار منذ ذلك الحين. وما تُظهره الشواهد تباين على مستوى التفاصيل، وينبغي أن يوجَّه الجواب إلى الدعوى المحددة المطروحة.',
        ],
      },
      limits: {
        en: 'It does not answer Islamic theological claims about what was originally revealed, which cannot be settled by manuscripts alone.',
        ar: 'لا يجيب عن الدعاوى اللاهوتية الإسلامية في ما أُنزل أصلًا، ولا تحسمه المخطوطات وحدها.',
      },
      evidence: ['e5', 'e7'],
    },
  ],
  christianResponse: {
    historical: {
      en: [
        'Historically, the preservation question has a measured answer: copies differ in detail, the earlier wording can be recovered in most places, and a few passages remain uncertain. This applies to the New Testament and to the Hebrew Bible, and it is stated without the assumption of inspiration.',
        'Nothing in this historical answer forces a believer or a sceptic to a conclusion about inspiration.',
      ],
      ar: [
        'تاريخيًا، لسؤال الحفظ جواب متزن: النسخ تختلف في التفاصيل، ويمكن استرداد الصيغة الأقدم في أكثر المواضع، وتبقى فقرات قليلة غير مؤكدة. وينطبق هذا على العهد الجديد والكتاب العبري، ويُقال دون افتراض الوحي.',
        'ولا شيء في هذا الجواب التاريخي يلزم مؤمنًا أو مشككًا بنتيجة في الوحي.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that the Holy Spirit inspired the Scriptures and that he continues to lead the Church into all truth. She does not teach that the Spirit overrode the human writers, nor that he prevented every scribal slip. The Church’s trust is in the God who speaks through the Scriptures she has received, read and prayed, rather than in the mechanical perfection of any manuscript.',
        'These are confessions of faith. They explain why the Church can welcome textual criticism, and why she cannot be argued out of her faith by the existence of variants alone.',
      ],
      ar: [
        'تعترف الكنيسة بأن الروح القدس أوحى بالكتب المقدسة وأنه يواصل إرشاد الكنيسة إلى جميع الحق. ولا تعلّم أن الروح ألغى الكتّاب البشر، ولا أنه منع كل زلة ناسخ. وثقة الكنيسة هي بالله الذي يتكلم بالكتب التي تسلمتها وقرأتها وصلّت بها، لا بكمال آلي لأي مخطوطة.',
        'وهذه اعترافات إيمانية. وهي تفسر لماذا تستطيع الكنيسة أن ترحب بالنقد النصي، ولماذا لا يمكن إقناعها بترك إيمانها لمجرد وجود قراءات متباينة.',
      ],
    },
  },
  coptic: {
    en: [
      'The Coptic Orthodox Church receives Scripture as the inspired Word of God within Holy Tradition. Her Fathers, above all St Athanasius, read Scripture in the Church’s faith, and her liturgy is made of Scripture. She has copied, translated and read the Bible in Coptic and Arabic for many centuries, and she has no teaching that every copy is identical.',
      'The relation between her formal teaching on inspiration and the findings of textual criticism is therefore one of welcome and of careful distinction: the Church reads the text as she has received it, and scholars may study how it came to be.',
    ],
    ar: [
      'تتسلم الكنيسة القبطية الأرثوذكسية الكتاب كلمة الله الموحى بها داخل التقليد المقدس. وقد قرأ آباؤها، وفي مقدمتهم القديس أثناسيوس، الكتاب في إيمان الكنيسة، وصلواتها الطقسية منسوجة من الكتاب. وقد نسخت الكتاب المقدس وترجمته وقرأته بالقبطية والعربية قرونًا طويلة، وليس عندها تعليم بأن كل النسخ متطابقة.',
      'فالعلاقة بين تعليمها الرسمي في الوحي ونتائج النقد النصي علاقة ترحيب وتمييز دقيق: تقرأ الكنيسة النص كما تسلمته، ويدرس الباحثون كيف صار إليه.',
    ],
  },
  disputed: {
    en: [
      'Christians disagree about how inspiration relates to the text we have: whether inspiration attaches to the original writings only, to the writings as received by the Church, or to both. They disagree about what “inerrancy”, a term used in some traditions, should mean. Orthodox and Catholic thinkers often prefer other terms.',
      'Scholars of all backgrounds also disagree about how much weight to give the uncertain places in the text. These matters are open, and they are matters of both history and theology.',
    ],
    ar: [
      'يختلف المسيحيون في كيفية ارتباط الوحي بالنص الذي بين أيدينا: أيتعلق بالكتابات الأصلية وحدها، أم بالكتابات كما تسلمتها الكنيسة، أم بهما معًا. ويختلفون في ما ينبغي أن يعنيه «العصمة من الخطأ»، وهو مصطلح تستعمله بعض التقاليد. وكثيرًا ما يفضل المفكرون الأرثوذكس والكاثوليك مصطلحات أخرى.',
      'ويختلف الباحثون من كل الخلفيات في الوزن الذي ينبغي إعطاؤه للمواضع غير المؤكدة في النص. وهذه مسائل مفتوحة، وهي مسائل تاريخية ولاهوتية معًا.',
    ],
  },
  conclusion: {
    en: 'Preservation and inspiration are different questions. Manuscripts answer the first, showing a text copied with variation yet largely recoverable, and cannot answer the second. The Coptic Orthodox Church confesses Scripture as inspired and received within her Tradition, and welcomes the careful study of the text without making her faith depend on a perfect copy.',
    ar: 'الحفظ والوحي سؤالان مختلفان. تجيب المخطوطات عن الأول، فتُظهر نصًا نُسخ مع تباين لكنه قابل للاسترداد في معظمه، ولا تستطيع أن تجيب عن الثاني. وتعترف الكنيسة القبطية الأرثوذكسية بالكتاب موحى به متسلَّمًا داخل تقليدها، وترحب بالدراسة الدقيقة للنص دون أن تجعل إيمانها قائمًا على نسخة كاملة.',
  },
  furtherReading: ['S27', 'S28', 'S23', 'S25', 'S62'],
  related: ['has-bible-changed', 'what-is-a-textual-variant', 'footnoted-passages', 'why-inspired', 'what-is-the-bible', 'dead-sea-scrolls'],
};
