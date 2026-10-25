import type { Article } from '../types.ts';

export const article: Article = {
  id: 'origin-of-life-vs-evolution',
  questionId: 'origin-of-life-vs-evolution',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article explains the difference between the theory of biological evolution (how living things change once life exists) and research into the origin of life (how life first arose from non-living chemistry). It says what is known and what is not known about the second, why it matters to avoid mixing the two, and how Christian faith relates to an unanswered scientific question.',
    ar: 'تشرح هذه المقالة الفرق بين نظرية التطور البيولوجي (كيف تتغير الكائنات الحية بعد وجود الحياة) وأبحاث نشأة الحياة (كيف نشأت الحياة أول مرة من كيمياء غير حية). وتبيّن ما يُعرف وما لا يُعرف عن الثانية، ولماذا ينبغي ألا نخلط بينهما، وكيف يتعلق الإيمان المسيحي بسؤال علمي لم يُجَب عنه.',
  },
  shortAnswer: {
    en: 'They are two different questions. Evolution explains how populations of living, reproducing organisms change and diversify over generations, and it is well established. The origin of life asks how the first living, self-copying systems arose from chemistry on the early Earth. That is an active research field with several competing proposals and no agreed detailed account. The success of evolution does not depend on how life began, and the open questions about life’s beginning do not weaken the evidence for evolution. A Christian can say that the origin of life is not yet explained by science without making the claim that science cannot explain it, and without resting faith on the gap. The Church confesses God as the Lord and Giver of life, whatever science finds about how it began.',
    ar: 'هما سؤالان مختلفان. التطور يفسّر كيف تتغير مجموعات الكائنات الحية المتناسلة وتتنوع عبر الأجيال، وهو مقرَّر جيدًا. ونشأة الحياة تسأل كيف نشأت أولى المنظومات الحية القادرة على نسخ نفسها من الكيمياء على الأرض المبكرة. وهذا ميدان بحث نشط فيه مقترحات متنافسة عدة ولا يوجد تفسير تفصيلي متفق عليه. ونجاح التطور لا يتوقف على كيفية بدء الحياة، والأسئلة المفتوحة عن بدايتها لا تُضعف أدلة التطور. ويستطيع المسيحي أن يقول إن نشأة الحياة لم يفسّرها العلم بعد دون أن يدّعي أن العلم لا يستطيع تفسيرها، ودون أن يقيم الإيمان على الفجوة. وتعترف الكنيسة بالله الرب المحيي، أيًّا كان ما يكتشفه العلم عن كيفية البداية.',
  },
  quickPoints: {
    en: [
      'Evolution starts with life already present: it concerns variation, inheritance and selection in reproducing organisms.',
      'Origin-of-life research (chemical evolution, or abiogenesis) asks how non-living chemistry became the first cells or self-copying molecules. Several proposals exist (for example “RNA world” ideas, metabolism-first ideas, and settings such as hydrothermal vents or shallow pools), and none is established.',
      'Researchers have made progress on some steps, such as how some building blocks of biology could form from simple chemicals. No one has yet produced life from non-living chemicals in a laboratory, and no complete pathway is agreed.',
      'Probability arguments against a natural origin (the chance of a protein or cell forming at random) usually assume a single random assembly, which is not what researchers propose. We do not know the probability either way.',
      'The Church does not teach that life’s origin is a miracle that science will never explain, nor that it will. It teaches that life is God’s gift.',
    ],
    ar: [
      'يبدأ التطور والحياة موجودة: فهو يخص التنوع والوراثة والانتخاب في كائنات متناسلة.',
      'وأبحاث نشأة الحياة (التطور الكيميائي، أو النشوء الحيوي abiogenesis) تسأل كيف صارت كيمياء غير حية خلايا أولى أو جزيئات تنسخ نفسها. وهناك مقترحات عدة (مثل أفكار «عالم الحمض النووي الريبي»، وأفكار الأيض أولًا، وبيئات كالمنافذ الحرارية المائية أو البرك الضحلة)، ولا يثبت أي منها.',
      'وقد أحرز الباحثون تقدمًا في بعض الخطوات، كإمكان تكوّن بعض اللبنات الأساسية للأحياء من مواد كيميائية بسيطة. ولم ينتج أحد حتى الآن حياة من مواد غير حية في المختبر، ولا يوجد مسار كامل متفق عليه.',
      'وحجج الاحتمال ضد أصل طبيعي (احتمال تكوّن بروتين أو خلية عشوائيًا) تفترض عادةً تجمعًا عشوائيًا واحدًا، وهذا ليس ما يقترحه الباحثون. ونحن لا نعرف الاحتمال في أي اتجاه.',
      'ولا تعلّم الكنيسة أن أصل الحياة معجزة لن يفسّرها العلم أبدًا، ولا العكس. بل تعلّم أن الحياة عطية الله.',
    ],
  },
  argumentTypes: ['scientific', 'philosophical', 'theological'],
  assessment: {
    label: 'actively_debated',
    explanation: {
      en: 'Evolution is well established. The origin of life is an open scientific question with several proposals and no consensus account, so claims that it has been solved, or that it cannot be solved naturally, both go beyond the evidence. The philosophical question of what an unsolved problem shows about God is separate. The label applies to the origin-of-life question, not to evolution.',
      ar: 'التطور مقرَّر جيدًا. أما نشأة الحياة فسؤال علمي مفتوح فيه مقترحات عدة ولا يوجد تفسير يجمع عليه الباحثون، فالقول إنه حُلّ أو إنه لا يمكن حله طبيعيًا يتجاوز كلاهما الدليل. وسؤال الفلسفة عما يدل عليه مسألة غير محلولة عن الله سؤال مستقل. والتصنيف ينطبق على سؤال نشأة الحياة لا على التطور.',
    },
  },
  whyExamine: {
    en: [
      'The two questions are constantly mixed in public argument. Critics of evolution say that it fails because it cannot explain how life began, and defenders of evolution sometimes speak as if the beginning of life were as settled as the history of species. Both moves confuse a reader about what has been shown.',
      'It is also a place where believers and non-believers alike are tempted to claim more than they know. An honest answer states the state of research and says what follows from it and what does not.',
    ],
    ar: [
      'يُخلط السؤالان باستمرار في الجدل العام. فمنتقدو التطور يقولون إنه يفشل لأنه لا يفسّر كيف بدأت الحياة، ويتكلم المدافعون عن التطور أحيانًا كأن بداية الحياة مقرَّرة قدر تاريخ الأنواع. وكلتا الخطوتين تُربكان القارئ في ما ثبت.',
      'وهو أيضًا موضع يغري المؤمنين وغير المؤمنين بأن يدّعوا أكثر مما يعلمون. والجواب الأمين يذكر حال البحث، ويقول ما يترتب عليه وما لا يترتب.',
    ],
  },
  background: {
    en: [
      'Biological evolution is the study of how populations of living, reproducing things change through heredity, variation and selection. It begins with organisms that already copy themselves with small variations. By itself it says nothing about how the first such organism arose. Charles Darwin, in correspondence, speculated about a “warm little pond” in which the first living things might have formed, but he did not develop a theory of it, and the evidence for evolution by descent does not rest on any such account.',
      'The origin of life is studied in chemistry, geology and astrobiology. The Earth is about four and a half billion years old, and there are traces of life that are at least about three and a half billion years old, with some claims of earlier evidence still disputed. The question is how, in that time, chemistry became biology. In 1952 and 1953 the chemist Stanley Miller, working with Harold Urey, showed that amino acids can form from simple gases in a flask with electric sparks. That experiment is a landmark, though later work has changed ideas about the early atmosphere. Other lines of research examine how nucleotides, the building blocks of RNA, could form from simple chemicals, how RNA might both store information and act as a catalyst (the “RNA world” idea), how simple membranes of fatty molecules form compartments, and how metabolic cycles could start at hydrothermal vents or on mineral surfaces. Some researchers have also proposed that life, or its components, arrived from elsewhere in space, which moves the question and does not answer it.',
      'The state of the field can be put plainly. Some steps now have plausible chemical routes, and the field has progressed. No complete route from simple chemicals to a living cell has been demonstrated, and researchers disagree about which scenario is most likely. The probability that life arises from chemistry under early-Earth conditions is not known, so it cannot be said to be high or low. This article therefore reports no figure for it.',
    ],
    ar: [
      'التطور البيولوجي دراسة كيف تتغير مجموعات الكائنات الحية المتناسلة بالوراثة والتنوع والانتخاب. وهو يبدأ بكائنات تنسخ نفسها فعلًا مع تغييرات صغيرة، ولا يقول بذاته شيئًا عن كيفية نشأة أول كائن كهذا. وقد خمّن تشارلز داروين في مراسلاته «بركة صغيرة دافئة» ربما تكونت فيها أولى الكائنات الحية، لكنه لم يطور نظرية فيها، وأدلة التطور بالانحدار لا تقوم على أي تفسير كهذا.',
      'وتُدرس نشأة الحياة في الكيمياء والجيولوجيا وعلم الأحياء الفلكي. عمر الأرض نحو أربعة بلايين ونصف بليون سنة، وتوجد آثار حياة عمرها نحو ثلاثة بلايين ونصف بليون سنة على الأقل، مع دعاوى عن أدلة أقدم ما زالت محل خلاف. والسؤال: كيف صارت الكيمياء في تلك المدة بيولوجيا. ففي 1952 و1953 بيّن الكيميائي ستانلي ميلر، بالتعاون مع هارولد يوري، أن الأحماض الأمينية يمكن أن تتكون من غازات بسيطة في دورق بشرارات كهربائية. وهذه التجربة علامة فارقة، وإن غيّرت الأبحاث اللاحقة التصورات عن الغلاف الجوي المبكر. وتبحث خطوط أخرى كيف يمكن أن تتكون النيوكليوتيدات، وهي لبنات الحمض النووي الريبي، من مواد بسيطة، وكيف يمكن للحمض الريبي أن يخزن المعلومات ويعمل محفزًا (فكرة «عالم الحمض الريبي»)، وكيف تكوّن أغشية بسيطة من جزيئات دهنية حجيرات، وكيف يمكن أن تبدأ دورات أيضية في المنافذ الحرارية المائية أو على أسطح معدنية. واقترح بعض الباحثين أيضًا أن الحياة أو مكوناتها وصلت من الفضاء، وهذا ينقل السؤال ولا يجيب عنه.',
      'ويمكن قول حال الميدان ببساطة. فبعض الخطوات لها الآن مسارات كيميائية معقولة، وقد تقدم الميدان. ولم يثبت مسار كامل من مواد بسيطة إلى خلية حية، ويختلف الباحثون في أي سيناريو هو الأرجح. واحتمال نشوء الحياة من الكيمياء في ظروف الأرض المبكرة غير معروف، فلا يمكن القول إنه مرتفع أو منخفض. ولذلك لا تورد هذه المقالة رقمًا له.',
    ],
  },
  glossary: ['miracle', 'theism', 'tradition', 'inspiration', 'apologetics'],

  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'The theory of evolution describes change in populations of living organisms and does not itself explain, or depend on an explanation of, how the first living things arose.',
        ar: 'تصف نظرية التطور التغير في مجموعات الكائنات الحية، ولا تفسّر بذاتها كيف نشأت أولى الكائنات الحية، ولا تتوقف على تفسير لذلك.',
      },
      argumentType: 'scientific',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'Standard descriptions of the theory by scientific bodies place its scope at life that already exists. The evidence for common descent (fossils, genetics, anatomy) is evidence about what happened after life began.',
        ar: 'تحدد الأوصاف المعيارية للنظرية عند الهيئات العلمية نطاقها بالحياة الموجودة فعلًا. وأدلة الأصل المشترك (المستحاثات والوراثة والتشريح) أدلة عما حدث بعد بدء الحياة.',
      },
      limits: {
        en: 'Some writers use “evolution” loosely to include the origin of life. The distinction here is that of the scientific literature, not of every popular use of the word.',
        ar: 'يستعمل بعض الكتّاب كلمة «التطور» استعمالًا فضفاضًا فيشمل نشأة الحياة. والتمييز هنا هو تمييز الأدبيات العلمية وليس كل استعمال شعبي للكلمة.',
      },
      evidence: ['e1'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'There is no agreed, complete scientific account of how life arose from non-living chemistry. Research has produced plausible routes for some steps, and several competing proposals remain.',
        ar: 'لا يوجد تفسير علمي كامل متفق عليه لكيفية نشأة الحياة من كيمياء غير حية. وقد أنتجت الأبحاث مسارات معقولة لبعض الخطوات، وتبقى مقترحات متنافسة عدة.',
      },
      argumentType: 'scientific',
      assessment: 'actively_debated',
      rationale: {
        en: 'This is the position that researchers in the field themselves describe. The site does not review the primary research and relies on the reference sources cited.',
        ar: 'هذا هو الموقف الذي يصفه الباحثون في الميدان أنفسهم. ولا يراجع الموقع الأبحاث الأولية ويعتمد على المراجع المستشهد بها.',
      },
      limits: {
        en: 'An unsolved problem does not show that it has no natural solution, and it does not show that it has one. The history of science has examples of both patterns.',
        ar: 'والمشكلة غير المحلولة لا تثبت أن ليس لها حل طبيعي ولا تثبت أن لها حلًا. وفي تاريخ العلم أمثلة على النمطين.',
      },
      evidence: ['e1', 'e3'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'Christian faith in God as the giver of life does not depend on how life began, and it should not be rested on a gap in current knowledge.',
        ar: 'الإيمان المسيحي بالله واهب الحياة لا يتوقف على كيفية بدء الحياة، وينبغي ألا يقوم على فجوة في المعرفة الحالية.',
      },
      argumentType: 'theological',
      assessment: 'theological_interpretation',
      rationale: {
        en: 'Scripture and the Fathers teach that God is the source of life, in a way that is true of every living thing at every moment. They do not make that teaching depend on a particular account of the first living thing.',
        ar: 'يعلّم الكتاب المقدس والآباء أن الله مصدر الحياة، وهذا صحيح في كل كائن حي في كل لحظة. ولا يجعلون هذا التعليم متوقفًا على تفسير محدد لأول كائن حي.',
      },
      limits: {
        en: 'It is the Church’s teaching on God and life. It does not decide any scientific question, and a reader who does not share the faith is not asked to accept it to weigh claims 1 and 2.',
        ar: 'هذا تعليم الكنيسة في الله والحياة. وهو لا يحسم أي سؤال علمي، ولا يُطلب من القارئ الذي لا يشارك الإيمان أن يقبله ليزن الدعويين الأولى والثانية.',
      },
      evidence: ['e4', 'e5', 'e6'],
    },
  ],

  evidence: [
    {
      id: 'e1',
      sourceId: 'S47',
      locator: 'whole work (a museum primer on science, religion, evolution and creationism; section not cited)',
      role: 'context',
      states: {
        en: 'This primer from a national natural history museum describes evolution as a scientific theory of biological change and explains how scientists distinguish well-tested explanation from questions that science has not answered or does not address.',
        ar: 'يصف هذا الدليل الصادر عن متحف وطني للتاريخ الطبيعي التطور نظريةً علمية في التغير البيولوجي، ويشرح كيف يميّز العلماء بين التفسير المختبَر جيدًا والأسئلة التي لم يجب عنها العلم أو لا يعالجها.',
      },
      inference: {
        en: 'It supports separating the scope of evolutionary theory from other open questions. Only the catalogue entry has been consulted, so the primer’s treatment of the origin of life, if any, is not reported.',
        ar: 'وهو يدعم الفصل بين نطاق نظرية التطور والأسئلة المفتوحة الأخرى. وقد اقتصر الاطلاع على بطاقة الفهرس، فلا يُنقل ما يقوله الدليل عن نشأة الحياة إن قال شيئًا.',
      },
    },
    {
      id: 'e3',
      sourceId: 'S48',
      locator: 'whole work (a Christian organisation’s answers on faith and science; section not cited)',
      role: 'context',
      states: {
        en: 'This explicitly Christian organisation publishes answers on how Christian faith relates to science.',
        ar: 'تنشر هذه المؤسسة المسيحية صراحةً أجوبة عن علاقة الإيمان المسيحي بالعلم.',
      },
      inference: {
        en: 'It shows that Christians approach this question as believers who also respect the science. It is a perspective, not a neutral source, and Coptic Orthodox teaching is not drawn from it.',
        ar: 'وهي تبيّن أن مسيحيين يتناولون هذا السؤال مؤمنين يحترمون العلم أيضًا. وهي منظور لا مصدر محايد، ولا يؤخذ منها تعليم الكنيسة القبطية الأرثوذكسية.',
      },
    },
    {
      id: 'e4',
      sourceId: 'S62',
      locator: 'Genesis 2:7',
      role: 'context',
      states: {
        en: 'The second creation narrative says that God formed the man from the dust of the ground and breathed into his nostrils the breath of life, and the man became a living being.',
        ar: 'تقول رواية الخلق الثانية إن الله جبل الإنسان ترابًا من الأرض ونفخ في أنفه نسمة حياة، فصار الإنسان نفسًا حية.',
      },
      inference: {
        en: 'Read as an ancient text, it speaks of life as God’s gift and the human being as both earthly and receiving life from God. It uses the language of its time and does not offer a chemical account.',
        ar: 'عند قراءته نصًا قديمًا، يتكلم عن الحياة عطية من الله وعن الإنسان ترابيًا ومتلقيًا الحياة من الله. وهو يستعمل لغة عصره ولا يقدم تفسيرًا كيميائيًا.',
      },
      bible: { book: 'genesis', chapter: 2, verse: '7' },
    },
    {
      id: 'e5',
      sourceId: 'S62',
      locator: 'Acts 17:24–28',
      role: 'context',
      states: {
        en: 'St Paul the Apostle, speaking in Athens, says that God who made the world gives to all people life and breath and everything, and that in Him we live and move and have our being.',
        ar: 'يقول القديس بولس الرسول في أثينا إن الله الذي صنع العالم هو يعطي الجميع حياة ونفسًا وكل شيء، وإننا به نحيا ونتحرك ونوجد.',
      },
      inference: {
        en: 'It states that life is continually received from God. This is a theological claim that holds for every living thing at every moment, and so does not depend on how the first life began.',
        ar: 'وهو يقرر أن الحياة تُتلقى من الله باستمرار. وهذه دعوى لاهوتية صحيحة في كل كائن حي في كل لحظة، فلا تتوقف على كيفية بدء أول حياة.',
      },
      bible: { book: 'acts', chapter: 17, verse: '24-28' },
    },
    {
      id: 'e6',
      sourceId: 'S62',
      locator: 'John 1:1–4',
      role: 'context',
      states: {
        en: 'The Gospel says that all things came to be through the Word, and that in Him was life.',
        ar: 'يقول الإنجيل إن كل شيء به كان، وإن فيه كانت الحياة.',
      },
      inference: {
        en: 'It is the scriptural basis for the Church’s confession of the Word as the source of life. It is a theological text and is not used as evidence about the origin of living things.',
        ar: 'وهو الأساس الكتابي لاعتراف الكنيسة بالكلمة مصدر الحياة. وهو نص لاهوتي لا يُستعمل شاهدًا على نشأة الكائنات الحية.',
      },
      bible: { book: 'john', chapter: 1, verse: '1-4' },
    },
  ],

  objections: [
    {
      id: 'o1',
      statement: {
        en: 'The chance of the right molecules assembling into even the simplest cell by accident is vanishingly small, smaller than a tornado assembling an aircraft from a junkyard. Life must have been designed.',
        ar: 'احتمال أن تتجمع الجزيئات الصحيحة بمحض المصادفة في أبسط خلية ضئيل جدًا، أصغر من احتمال أن يجمع إعصار طائرة من مخلفات حطام. فلا بد أن الحياة صُمّمت.',
      },
      response: {
        en: [
          'The comparison assumes that a cell would have to form in one random step. Researchers propose instead gradual stages, with simpler self-copying systems that can be selected and improved, so that the relevant probability is of each step and not of the final product. We do not know the number or probability of those steps, and critics of the proposals say that the steps themselves are still hard to explain. This is why the question is open.',
          'Defenders of a design argument do not need to rely on this calculation, and many careful ones do not. The honest position is that no one can at present put a reliable number on the probability of life arising naturally, so the argument from a tiny number is not established.',
        ],
        ar: [
          'تفترض المقارنة أن الخلية يجب أن تتكون في خطوة عشوائية واحدة. أما الباحثون فيقترحون مراحل تدريجية، بمنظومات أبسط تنسخ نفسها ويمكن انتخابها وتحسينها، بحيث يكون الاحتمال المعني هو احتمال كل خطوة لا المنتج النهائي. ونحن لا نعرف عدد هذه الخطوات ولا احتمالها، ويقول ناقدو المقترحات إن الخطوات نفسها ما زالت عسيرة التفسير. ولهذا فالسؤال مفتوح.',
          'ولا يحتاج المدافعون عن حجة التصميم إلى الاعتماد على هذا الحساب، وكثير من الحصفاء منهم لا يعتمدون عليه. والموقف الصادق أن لا أحد يستطيع الآن أن يضع رقمًا موثوقًا لاحتمال نشوء الحياة طبيعيًا، فحجة الرقم الضئيل غير ثابتة.',
        ],
      },
      limits: {
        en: 'This shows that the tornado argument is not sound. It does not show that natural processes did produce life.',
        ar: 'هذا يبيّن أن حجة الإعصار غير سليمة. ولا يبيّن أن العمليات الطبيعية أنتجت الحياة فعلًا.',
      },
      evidence: ['e3'],
    },
    {
      id: 'o2',
      statement: {
        en: 'The information in DNA is like a code or a language, and in our experience codes come from minds. So the origin of the genetic code points to an intelligent source.',
        ar: 'المعلومات في الحمض النووي أشبه بشفرة أو لغة، وفي خبرتنا الشفرات تأتي من عقول. فأصل الشفرة الوراثية يشير إلى مصدر ذكي.',
      },
      response: {
        en: [
          'This is the form in which some design proponents state the argument. They point to the fact that the genetic system is a coding system and argue that no known natural process has been shown to produce such a system. Their argument deserves a hearing and is made by serious people.',
          'Critics reply that “information” and “code” are metaphors when applied to chemistry, that the properties of molecules can produce ordered patterns without a mind, and that we do not yet know enough about early chemistry to say what natural processes can do. They also note that the argument from what has not yet been explained is open to being answered by later work. Christians who accept the argument may hold it as a reason, among others, and those who do not may hold the faith without it.',
        ],
        ar: [
          'هذه هي الصيغة التي يعرض بها بعض أنصار التصميم الحجة. فهم يشيرون إلى أن المنظومة الوراثية منظومة ترميز، ويحتجون بأنه لم يثبت أن عملية طبيعية معروفة أنتجت منظومة كهذه. وحجتهم تستحق أن تُسمع ويقدمها أناس جادون.',
          'ويردّ الناقدون بأن «المعلومات» و«الشفرة» استعارتان حين تُطبقان على الكيمياء، وبأن خصائص الجزيئات تستطيع أن تنتج أنماطًا منظمة بلا عقل، وبأننا لا نعرف بعد من الكيمياء المبكرة ما يكفي لنقول ما تستطيعه العمليات الطبيعية. ويلاحظون أيضًا أن الحجة المبنية على ما لم يُفسَّر بعد معرّضة لأن يجيب عنها عمل لاحق. ومن المسيحيين من يأخذ بالحجة سببًا من أسباب، ومنهم من لا يأخذ بها ويتمسك بالإيمان دونها.',
        ],
      },
      limits: {
        en: 'The question of what natural chemistry can do is open. Neither this argument nor its critics’ replies have been settled by experiment.',
        ar: 'سؤال ما تستطيعه الكيمياء الطبيعية مفتوح. ولا تحسم التجربة هذه الحجة ولا ردود ناقديها.',
      },
    },
    {
      id: 'o3',
      statement: {
        en: 'The origin of life is the real test of evolution. If science cannot explain how life began, then the whole theory of evolution is built on nothing, and it is dishonest to teach it as fact.',
        ar: 'نشأة الحياة هي الاختبار الحقيقي للتطور. فإن لم يستطع العلم تفسير كيف بدأت الحياة، فنظرية التطور كلها مبنية على لا شيء، وتعليمها حقيقةً غير أمين.',
      },
      response: {
        en: [
          'A theory is judged by what it explains and predicts within its own domain. The evidence for evolution (fossil sequences, genetic similarity, observed change) holds whatever the origin of the first living thing. Other sciences work in the same way: the theory of gravity was successful before anyone knew the origin of the solar system.',
          'This does not make the origin of life unimportant. It is one of the great open problems of science, and honest scientists say so.',
        ],
        ar: [
          'تُقيَّم النظرية بما تفسّره وتتنبأ به في ميدانها. وأدلة التطور (تسلسل المستحاثات، والتشابه الوراثي، والتغير المرصود) قائمة أيًّا كان أصل أول كائن حي. والعلوم الأخرى تعمل بالطريقة نفسها: فنظرية الجاذبية نجحت قبل أن يعرف أحد أصل المجموعة الشمسية.',
          'وهذا لا يجعل نشأة الحياة غير مهمة. فهي من كبرى المسائل العلمية المفتوحة، ويقول ذلك العلماء الصادقون.',
        ],
      },
      limits: {
        en: 'This protects the evidence for evolution from an irrelevant objection. It does not close the open question.',
        ar: 'هذا يحمي أدلة التطور من اعتراض لا صلة له بها. ولا يغلق السؤال المفتوح.',
      },
      evidence: ['e1'],
    },
    {
      id: 'o4',
      statement: {
        en: 'Whatever is not yet explained will be explained naturally in the end, as everything else has been. Theists who point to the origin of life as evidence for God are making the old mistake of the God of the gaps.',
        ar: 'ما لم يُفسَّر بعد سيُفسَّر طبيعيًا في النهاية كما حدث في كل شيء آخر. والمؤمنون الذين يشيرون إلى نشأة الحياة دليلًا على الله يكررون الخطأ القديم، إله الفجوات.',
      },
      response: {
        en: [
          'The warning against resting faith on a gap is sound, and it is the position taken here. But the confident prediction that everything will be explained naturally is itself a philosophical expectation and not a result. The history of science supports the success of natural explanations in many areas, and it does not guarantee that every question will have one.',
          'The Christian claim that God is the source of life is not a rival to a chemical account if there is one. It is a claim about why there is a world in which chemistry has such possibilities.',
        ],
        ar: [
          'التحذير من إقامة الإيمان على فجوة سليم، وهو الموقف المتخذ هنا. غير أن التنبؤ الواثق بأن كل شيء سيُفسَّر طبيعيًا هو بدوره توقع فلسفي لا نتيجة. وتاريخ العلم يسند نجاح التفسيرات الطبيعية في ميادين كثيرة، ولا يضمن أن لكل سؤال تفسيرًا كهذا.',
          'ودعوى المسيحية بأن الله مصدر الحياة ليست منافسة لتفسير كيميائي إن وُجد. فهي دعوى عن لماذا يوجد عالم تكون للكيمياء فيه هذه الإمكانات.',
        ],
      },
      limits: {
        en: 'This does not decide whether life arose by a natural pathway. It says only that faith need not depend on the answer.',
        ar: 'هذا لا يحسم هل نشأت الحياة بمسار طبيعي. وهو يقول فقط إن الإيمان لا يلزم أن يتوقف على الجواب.',
      },
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'The origin of life is not a historical question in the sense of the sources for Jesus. It concerns events some billions of years ago, for which the evidence is geological and chemical. No historical case is made here.',
      ],
      ar: [
        'نشأة الحياة ليست سؤالًا تاريخيًا بمعنى مصادر يسوع. فهي تخص أحداثًا قبل بلايين السنين، والدليل عليها جيولوجي وكيميائي. ولا تُساق هنا حجة تاريخية.',
      ],
    },
    theological: {
      en: [
        'The Church confesses the Holy Spirit as the Lord and Giver of life, and the Word as the one through whom all things were made and in whom is life. This is true of every living thing now, and would be true if science described exactly how the first cell came to be. A Christian therefore has no reason to fear the research, and no reason to claim that the research must fail.',
        'The Church’s teaching on God and life, while it makes room for science, does not itself provide a scientific theory, and the Church does not ask scientists to find a gap. It asks believers to give thanks for life and to treat it as a gift.',
      ],
      ar: [
        'تعترف الكنيسة بالروح القدس الرب المحيي، وبالكلمة الذي به كان كل شيء وفيه كانت الحياة. وهذا صحيح في كل كائن حي الآن، وسيبقى صحيحًا لو وصف العلم بالضبط كيف نشأت أول خلية. فلا سبب للمسيحي أن يخاف البحث، ولا أن يدّعي أن البحث لا بد أن يفشل.',
        'وتعليم الكنيسة في الله والحياة، وإن أفسح مجالًا للعلم، لا يقدم نظرية علمية بذاته، ولا تطلب الكنيسة من العلماء أن يجدوا فجوة. بل تطلب من المؤمنين أن يشكروا على الحياة وأن يعاملوها عطية.',
      ],
    },
  },
  coptic: {
    en: [
      'In the Creed the Coptic Church says of the Holy Spirit that He is the Lord, the Giver of life, who proceeds from the Father. This is the language of worship, and it grounds the Church’s relation to the question of life in gratitude and not in a scientific position.',
      'The Church has issued no teaching on the chemistry of the first life, and Coptic Orthodox teachers do not claim one.',
    ],
    ar: [
      'تقول الكنيسة القبطية في قانون الإيمان عن الروح القدس إنه الرب المحيي، المنبثق من الآب. وهذه لغة العبادة، وهي تؤسس علاقة الكنيسة بسؤال الحياة في الشكر لا في موقف علمي.',
      'ولم تصدر الكنيسة تعليمًا في كيمياء الحياة الأولى، ولا يدّعي المعلمون الأقباط الأرثوذكس تعليمًا كهذا.',
    ],
  },
  disputed: {
    en: [
      'Disputed in science: which scenario for the origin of life is most plausible (RNA first, metabolism first, vents, shallow pools, or a combination); where and when it happened; whether life is common or rare in the universe; whether the oldest claimed traces of life are real.',
      'Disputed in philosophy and theology: whether a design argument from the genetic code is sound; whether faith should be allowed any interest in this question; what follows if a natural pathway is found.',
      'Not disputed: that evolution describes the history of life after it began, and that no complete account of the origin of life is agreed.',
    ],
    ar: [
      'مواضع الخلاف في العلم: أي سيناريو لنشأة الحياة هو الأرجح (الحمض الريبي أولًا، أو الأيض أولًا، أو المنافذ الحرارية، أو البرك الضحلة، أو مزيج)؛ وأين ومتى حدث؛ وهل الحياة شائعة في الكون أم نادرة؛ وهل أقدم آثار الحياة المدّعاة حقيقية.',
      'ومواضع الخلاف في الفلسفة واللاهوت: هل حجة التصميم من الشفرة الوراثية سليمة؛ وهل ينبغي أن يكون للإيمان اهتمام بهذا السؤال؛ وماذا يترتب إن وُجد مسار طبيعي.',
      'ومما لا خلاف فيه: أن التطور يصف تاريخ الحياة بعد بدئها، وأن لا تفسير كاملًا متفقًا عليه لنشأة الحياة.',
    ],
  },
  conclusion: {
    en: 'Evolution and the origin of life are different questions. Evolution is well established, and the origin of life is an open and active research problem. Neither the success of the first nor the gaps in the second settle whether God exists. The Church confesses God as the Giver of life, and holds that confession in thanksgiving and not as a competitor to chemistry.',
    ar: 'التطور ونشأة الحياة سؤالان مختلفان. فالتطور مقرَّر جيدًا، ونشأة الحياة مسألة بحثية مفتوحة ونشطة. ولا نجاح الأول ولا فجوات الثانية يحسم هل الله موجود. وتعترف الكنيسة بالله واهب الحياة، وتتمسك بهذا الاعتراف شكرًا لا منافسًا للكيمياء.',
  },
  furtherReading: ['S47', 'S48'],
  related: [
    'does-evolution-disprove-god',
    'can-science-exclude-divine-action',
    'fine-tuning-and-a-creator',
    'consciousness-reason-morality',
    'arguments-for-god-claim',
  ],
};
