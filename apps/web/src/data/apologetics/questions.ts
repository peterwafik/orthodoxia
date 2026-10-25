import type { ArgumentType as A, Difficulty as D, Question, Topic } from './types.ts';

export const TOPICS: readonly Topic[] = [
  { id: 'god', slug: 'gods-existence', letter: 'A', title: { en: 'God’s existence and knowledge', ar: 'وجود الله ومعرفته' }, description: { en: 'What “God” means, what would count as evidence, and what the main arguments claim.', ar: 'ماذا نعني بكلمة «الله»، وما الذي يُعدّ دليلًا، وماذا تدّعي الحجج الرئيسية.' } },
  { id: 'character', slug: 'gods-character-evil', letter: 'B', title: { en: 'God’s character, relevance, evil and hiddenness', ar: 'صفات الله وصلته بنا والشر والاحتجاب' }, description: { en: 'Suffering, silence, unanswered prayer and honest doubt.', ar: 'الألم والصمت والصلاة التي لا تُستجاب والشك الصادق.' } },
  { id: 'jesus', slug: 'historical-jesus', letter: 'C', title: { en: 'The historical Jesus', ar: 'يسوع التاريخي' }, description: { en: 'The sources for Jesus and how historians weigh them.', ar: 'مصادر معرفتنا بيسوع وكيف يزنها المؤرخون.' } },
  { id: 'resurrection', slug: 'crucifixion-resurrection', letter: 'D', title: { en: 'Crucifixion and resurrection', ar: 'الصلب والقيامة' }, description: { en: 'What can be said historically about the death of Jesus and the first Christian claims.', ar: 'ما يمكن قوله تاريخيًا عن موت يسوع ودعاوى المسيحيين الأولى.' } },
  { id: 'bible', slug: 'bible-transmission-canon', letter: 'E', title: { en: 'The Bible: transmission, authorship, canon and interpretation', ar: 'الكتاب المقدس: انتقاله وتأليفه وقانونه وتفسيره' }, description: { en: 'Manuscripts, variants, the Dead Sea Scrolls, canon and how to read difficult passages.', ar: 'المخطوطات والقراءات المتباينة ومخطوطات البحر الميت والقانون وطريقة قراءة النصوص الصعبة.' } },
  { id: 'archaeology', slug: 'archaeology-context', letter: 'F', title: { en: 'Archaeology and historical context', ar: 'علم الآثار والسياق التاريخي' }, description: { en: 'What artefacts and inscriptions show, and where they stop.', ar: 'ما تُظهره المقتنيات والنقوش، وأين تتوقف.' } },
  { id: 'mary', slug: 'virgin-mary', letter: 'G', title: { en: 'The Virgin Mary', ar: 'السيدة العذراء مريم' }, description: { en: 'Virginal conception, perpetual virginity and the titles of Mary, with the kinds of evidence kept apart.', ar: 'الحبل العذراوي والبتولية الدائمة وألقاب العذراء، مع الفصل بين أنواع الأدلة.' } },
  { id: 'early', slug: 'early-christianity-doctrine', letter: 'H', title: { en: 'Early Christianity and Coptic Orthodox doctrine', ar: 'المسيحية المبكرة والعقيدة القبطية الأرثوذكسية' }, description: { en: 'Worship of Christ, Nicaea, the Trinity and Miaphysite Christology.', ar: 'عبادة المسيح ونيقية والثالوث وعقيدة الطبيعة الواحدة المتجسدة.' } },
  { id: 'moral', slug: 'moral-comparative', letter: 'I', title: { en: 'Moral and comparative questions', ar: 'أسئلة أخلاقية ومقارنة' }, description: { en: 'Difficult texts, judgment, other religions and the comparison of truth claims.', ar: 'نصوص صعبة والدينونة والأديان الأخرى ومقارنة دعاوى الحق.' } },
];

const SRC_NA = { en: 'No reviewed article yet. Source leads are listed; no answer has been written.', ar: 'لا توجد مقالة مراجعة بعد. أُدرجت إشارات المصادر ولم تُكتب إجابة.' };

/** Compact row: id/slug, topic, English title, Arabic title, difficulty, argument types, source leads. */
type Row = readonly [string, string, string, string, D, readonly A[], readonly string[]];

const P: A[] = ['philosophical'];
const H: A[] = ['historical'];
const T: A[] = ['textual'];
const TH: A[] = ['theological'];

const rows: readonly Row[] = [
  // A. God’s existence and knowledge
  ['what-do-we-mean-by-god', 'god', 'What do we mean by God?', 'ماذا نعني بكلمة «الله»؟', 'introductory', P, ['S38', 'S39']],
  ['evidence-for-or-against-god', 'god', 'What would count as evidence for or against God?', 'ما الذي يُعدّ دليلًا مع وجود الله أو ضده؟', 'introductory', P, ['S38', 'S39', 'S45']],
  ['faith-and-blind-belief', 'god', 'Is faith different from blind belief?', 'هل الإيمان يختلف عن التصديق الأعمى؟', 'introductory', P, ['S38']],
  ['why-something-rather-than-nothing', 'god', 'Why is there something rather than nothing?', 'لماذا يوجد شيء بدلًا من لا شيء؟', 'intermediate', P, ['S38', 'S39']],
  ['universe-needs-explanation', 'god', 'Does the universe need an explanation beyond itself?', 'هل يحتاج الكون إلى تفسير خارج ذاته؟', 'intermediate', P, ['S39']],
  ['who-created-god', 'god', 'Who created God?', 'مَن خلق الله؟', 'introductory', P, ['S38']],
  ['can-the-universe-be-eternal', 'god', 'Can the universe be eternal?', 'هل يمكن أن يكون الكون أزليًا؟', 'advanced', [...P, 'scientific'], ['S39', 'S45']],
  ['what-cosmological-arguments-establish', 'god', 'What do cosmological arguments establish, if successful?', 'ماذا تُثبت الحجج الكونية لو نجحت؟', 'advanced', P, ['S39']],
  ['fine-tuning-and-a-creator', 'god', 'Does fine-tuning support belief in a creator?', 'هل يدعم الضبط الدقيق للكون الإيمان بخالق؟', 'advanced', [...P, 'scientific'], ['S39', 'S45']],
  ['selection-effect-and-multiverse', 'god', 'What are the selection-effect and multiverse objections?', 'ما اعتراضا أثر الانتقاء والأكوان المتعددة؟', 'advanced', [...P, 'scientific'], ['S39']],
  ['consciousness-reason-morality', 'god', 'Do consciousness, reason or moral experience support theism?', 'هل يدعم الوعي أو العقل أو الخبرة الأخلاقية الإيمان بالله؟', 'advanced', P, ['S39']],
  ['religious-experience-as-evidence', 'god', 'Does religious experience count as evidence?', 'هل تُعدّ الخبرة الدينية دليلًا؟', 'intermediate', P, ['S39']],
  ['religious-disagreement', 'god', 'Does disagreement among religions weaken belief in God?', 'هل يُضعف اختلاف الأديان الإيمان بالله؟', 'intermediate', P, ['S46']],
  ['does-evolution-disprove-god', 'god', 'Does evolution disprove God?', 'هل ينفي التطور وجود الله؟', 'introductory', ['scientific', 'philosophical'], ['S45', 'S47', 'S48']],
  ['origin-of-life-vs-evolution', 'god', 'How do origin-of-life research and biological evolution differ?', 'ما الفرق بين أبحاث نشأة الحياة والتطور البيولوجي؟', 'intermediate', ['scientific'], ['S47']],
  ['can-science-exclude-divine-action', 'god', 'Can science establish or exclude every kind of divine action?', 'هل يستطيع العلم إثبات أو نفي كل أنواع الفعل الإلهي؟', 'intermediate', [...P, 'scientific'], ['S45']],
  ['arguments-for-god-claim', 'god', 'What do arguments for God’s existence claim?', 'ماذا تدّعي الحجج على وجود الله؟', 'introductory', P, ['S38', 'S39', 'S59']],

  // B. God’s character, relevance, evil and hiddenness
  ['why-care-if-god-exists', 'character', 'If God exists, why should I care?', 'لو كان الله موجودًا فلماذا يهمني؟', 'introductory', [...P, ...TH], ['S38']],
  ['personal-or-uninvolved-god', 'character', 'Is God personal or uninvolved?', 'هل الله شخصي أم غير معني بنا؟', 'intermediate', [...P, ...TH], ['S38']],
  ['why-does-god-allow-suffering', 'character', 'Why does God allow suffering?', 'لماذا يسمح الله بالألم؟', 'intermediate', P, ['S40', 'S42']],
  ['moral-evil-vs-natural-suffering', 'character', 'What is the difference between moral evil and natural suffering?', 'ما الفرق بين الشر الأخلاقي والألم الطبيعي؟', 'intermediate', P, ['S42']],
  ['children-and-animals-suffer', 'character', 'Why do children and animals suffer?', 'لماذا يتألم الأطفال والحيوانات؟', 'advanced', [...P, ...TH], ['S42']],
  ['does-freedom-explain-suffering', 'character', 'Does freedom explain all suffering?', 'هل تفسّر الحرية كل الألم؟', 'advanced', P, ['S40', 'S42']],
  ['why-god-is-not-clearer', 'character', 'Why doesn’t God make his existence clearer?', 'لماذا لا يجعل الله وجوده أوضح؟', 'intermediate', P, ['S43']],
  ['unanswered-prayer', 'character', 'Why are sincere prayers sometimes unanswered?', 'لماذا لا تُستجاب الصلوات الصادقة أحيانًا؟', 'intermediate', TH, []],
  ['is-doubt-sinful', 'character', 'Is doubt sinful, dishonest or unavoidable?', 'هل الشك خطية أم عدم أمانة أم أمر لا مفر منه؟', 'introductory', TH, []],
  ['religious-harm', 'character', 'How do we discuss religious harm without dismissing someone’s experience?', 'كيف نتحدث عن الأذى الديني دون التقليل من تجربة أحد؟', 'intermediate', TH, []],
  ['hidden-or-suffering', 'character', 'Why does God seem hidden or allow suffering?', 'لماذا يبدو الله محتجبًا أو يسمح بالألم؟', 'intermediate', P, ['S40', 'S42', 'S43']],

  // C. Historical Jesus
  ['did-jesus-exist', 'jesus', 'Did Jesus exist?', 'هل وُجد يسوع تاريخيًا؟', 'introductory', H, ['S01', 'S03', 'S07', 'S09']],
  ['earliest-sources-for-jesus', 'jesus', 'What are our earliest sources?', 'ما أقدم مصادرنا عن يسوع؟', 'intermediate', H, ['S10', 'S11']],
  ['non-christian-sources-establish', 'jesus', 'What do non-Christian sources actually establish?', 'ماذا تُثبت المصادر غير المسيحية فعلًا؟', 'introductory', H, ['S01', 'S03', 'S04', 'S05', 'S06', 'S07']],
  ['dating-ancient-sources', 'jesus', 'How do historians date ancient sources?', 'كيف يؤرّخ المؤرخون المصادر القديمة؟', 'intermediate', H, ['S10']],
  ['jesus-a-first-century-jew', 'jesus', 'Was Jesus a first-century Jew, and why does that matter?', 'هل كان يسوع يهوديًا من القرن الأول، ولماذا يهم ذلك؟', 'intermediate', H, ['S10', 'S11']],
  ['what-we-know-of-his-ministry', 'jesus', 'What can we know about his ministry?', 'ماذا يمكن أن نعرف عن خدمته؟', 'intermediate', H, ['S10']],
  ['evaluating-miracle-claims', 'jesus', 'How are claims about his miracles evaluated?', 'كيف تُقيَّم الدعاوى عن معجزاته؟', 'advanced', [...H, ...P], ['S41']],
  ['did-jesus-claim-divine-authority', 'jesus', 'Did Jesus claim divine authority?', 'هل ادّعى يسوع سلطانًا إلهيًا؟', 'advanced', [...H, ...TH], ['S10', 'S18']],
  ['copied-from-pagan-gods', 'jesus', 'Was Jesus copied from pagan gods?', 'هل نُسخ يسوع من آلهة وثنية؟', 'intermediate', H, ['S07']],

  // D. Crucifixion and resurrection
  ['jesus-executed-under-pilate', 'resurrection', 'Was Jesus executed under Pontius Pilate?', 'هل أُعدم يسوع في ولاية بيلاطس البنطي؟', 'introductory', H, ['S01', 'S08', 'S31']],
  ['trial-details-secure-and-debated', 'resurrection', 'Which trial details are secure, and which are debated?', 'ما تفاصيل المحاكمة المؤكدة وما المختلف عليه؟', 'advanced', H, ['S08']],
  ['could-jesus-have-survived', 'resurrection', 'Could Jesus have survived crucifixion?', 'هل كان يمكن أن ينجو يسوع من الصلب؟', 'intermediate', H, ['S08']],
  ['burial-of-jesus', 'resurrection', 'What do we know about his burial?', 'ماذا نعرف عن دفنه؟', 'advanced', H, ['S08']],
  ['empty-tomb-evidence', 'resurrection', 'What is the evidence for an empty tomb?', 'ما الدليل على القبر الفارغ؟', 'advanced', H, ['S14', 'S16']],
  ['what-1-corinthians-15-reports', 'resurrection', 'What does 1 Corinthians 15 actually report?', 'ماذا يروي ١ كورنثوس ١٥ فعلًا؟', 'intermediate', H, ['S14']],
  ['date-of-the-pauline-tradition', 'resurrection', 'What can be said about the date of the tradition Paul transmits?', 'ماذا يمكن قوله عن تاريخ التقليد الذي ينقله بولس؟', 'advanced', H, ['S14']],
  ['what-first-followers-claimed', 'resurrection', 'What did the first followers claim to experience?', 'ماذا ادّعى التلاميذ الأوائل أنهم اختبروا؟', 'intermediate', H, ['S14', 'S16']],
  ['alternative-explanations', 'resurrection', 'How should vision, grief, legend, deception and other hypotheses be evaluated?', 'كيف تُقيَّم فرضيات الرؤيا والحزن والأسطورة والخداع وغيرها؟', 'advanced', H, ['S15', 'S16']],
  ['resurrection-accounts-disagree', 'resurrection', 'Do disagreements among resurrection accounts undermine the central claim?', 'هل تُضعف الاختلافات بين روايات القيامة الادعاء المركزي؟', 'advanced', H, ['S14', 'S16']],
  ['martyrdom-traditions', 'resurrection', 'What do martyrdom traditions establish, and what do they not establish?', 'ماذا تُثبت تقاليد الاستشهاد وماذا لا تُثبت؟', 'advanced', H, ['S15']],
  ['can-history-support-a-miracle', 'resurrection', 'Can historical reasoning support a miracle claim?', 'هل يمكن للتفكير التاريخي أن يدعم دعوى معجزة؟', 'advanced', [...H, ...P], ['S41', 'S15', 'S16']],
  ['what-resurrection-would-establish', 'resurrection', 'What would resurrection establish about Jesus?', 'ماذا ستثبت القيامة عن يسوع؟', 'advanced', [...P, ...TH], ['S17']],
  ['early-belief-vs-evidence', 'resurrection', 'What is the difference between early resurrection belief and evidence for resurrection?', 'ما الفرق بين الإيمان المبكر بالقيامة والدليل على القيامة؟', 'intermediate', H, ['S14', 'S16']],

  // E. Bible
  ['what-is-the-bible', 'bible', 'What is the Bible, and how was it composed?', 'ما هو الكتاب المقدس وكيف تألّف؟', 'introductory', T, ['S29']],
  ['who-wrote-the-gospels', 'bible', 'Who wrote the Gospels, and how certain are the attributions?', 'مَن كتب الأناجيل، وما درجة اليقين في نسبتها؟', 'intermediate', T, ['S12', 'S13']],
  ['when-were-the-gospels-written', 'bible', 'When were the Gospels and Paul’s letters written?', 'متى كُتبت الأناجيل ورسائل بولس؟', 'intermediate', T, ['S10']],
  ['oral-transmission', 'bible', 'How did oral transmission affect the traditions?', 'كيف أثّر النقل الشفهي في التقاليد؟', 'advanced', T, ['S12', 'S13']],
  ['gospels-as-eyewitness', 'bible', 'Are the Gospels independent eyewitness accounts?', 'هل الأناجيل شهادات عيان مستقلة؟', 'advanced', T, ['S12', 'S13']],
  ['has-bible-changed', 'bible', 'Has the biblical text changed during copying?', 'هل تغيّر نص الكتاب المقدس أثناء النسخ؟', 'introductory', T, ['S23', 'S27']],
  ['what-is-a-textual-variant', 'bible', 'What is a textual variant?', 'ما هي القراءة المتباينة؟', 'introductory', T, ['S27']],
  ['preservation-vs-inspiration', 'bible', 'What is the difference between manuscript preservation and inspiration?', 'ما الفرق بين حفظ المخطوطات والوحي؟', 'intermediate', [...T, ...TH], ['S27']],
  ['footnoted-passages', 'bible', 'Why are some passages footnoted or omitted in modern translations?', 'لماذا توضع بعض الفقرات في الحواشي أو تُحذف في الترجمات الحديثة؟', 'introductory', T, ['S21', 'S23', 'S27']],
  ['mark-16-9-20', 'bible', 'What are the issues with Mark 16:9–20?', 'ما المسائل المتعلقة بمرقس ١٦: ٩–٢٠؟', 'intermediate', T, ['S21', 'S27']],
  ['john-7-53-8-11', 'bible', 'What are the issues with John 7:53–8:11?', 'ما المسائل المتعلقة بيوحنا ٧: ٥٣–٨: ١١؟', 'intermediate', T, ['S27']],
  ['first-john-5-7-8', 'bible', 'What is the longer Trinitarian wording associated with 1 John 5:7–8?', 'ما العبارة الثالوثية الأطول المرتبطة بـ ١ يوحنا ٥: ٧–٨؟', 'intermediate', T, ['S27']],
  ['dead-sea-scrolls', 'bible', 'What do the Dead Sea Scrolls show?', 'ماذا تُظهر مخطوطات البحر الميت؟', 'introductory', T, ['S25', 'S26', 'S28']],
  ['septuagint-and-masoretic', 'bible', 'Why do the Septuagint and Masoretic traditions differ?', 'لماذا تختلف السبعينية عن النص الماسوري؟', 'advanced', T, ['S28']],
  ['arabic-and-english-translations', 'bible', 'How do Arabic and English translations relate to their source texts?', 'كيف ترتبط الترجمات العربية والإنجليزية بنصوصها المصدرية؟', 'intermediate', T, []],
  ['why-these-books', 'bible', 'Why these biblical books?', 'لماذا هذه الأسفار بالذات؟', 'intermediate', T, ['S29', 'S22']],
  ['did-nicaea-choose-the-bible', 'bible', 'Did Nicaea choose the Bible?', 'هل اختار مجمع نيقية الكتاب المقدس؟', 'introductory', T, ['S29', 'S20']],
  ['who-chose-the-books', 'bible', 'Who chose the biblical books?', 'مَن اختار أسفار الكتاب المقدس؟', 'introductory', T, ['S29', 'S22', 'S30']],
  ['noncanonical-gospels', 'bible', 'What about noncanonical gospels?', 'ماذا عن الأناجيل غير القانونية؟', 'intermediate', T, ['S29', 'S30']],
  ['old-testament-canons-differ', 'bible', 'Why do Christian Old Testament canons differ?', 'لماذا تختلف قوانين العهد القديم بين المسيحيين؟', 'intermediate', T, ['S28', 'S29']],
  ['coptic-deuterocanon', 'bible', 'How does the Coptic Orthodox Church receive the deuterocanonical books?', 'كيف تتسلّم الكنيسة القبطية الأرثوذكسية الأسفار القانونية الثانية؟', 'intermediate', [...T, ...TH], ['S29']],
  ['apparent-contradictions', 'bible', 'How should apparent contradictions be examined?', 'كيف تُفحص التناقضات الظاهرية؟', 'intermediate', T, ['S56']],
  ['prophecy-written-after-events', 'bible', 'Were prophecies written after the events?', 'هل كُتبت النبوات بعد الأحداث؟', 'advanced', T, []],
  ['prediction-typology-interpretation', 'bible', 'What distinguishes prediction, typology and later theological interpretation?', 'ما الفرق بين التنبؤ والرمزية والتفسير اللاهوتي اللاحق؟', 'advanced', [...T, ...TH], []],
  ['why-inspired', 'bible', 'Why regard Scripture as inspired?', 'لماذا يُعدّ الكتاب المقدس موحى به؟', 'intermediate', TH, []],

  // F. Archaeology
  ['what-archaeology-can-establish', 'archaeology', 'What can archaeology establish about biblical history?', 'ماذا يمكن لعلم الآثار أن يثبت عن التاريخ الكتابي؟', 'intermediate', ['archaeological'], ['S33', 'S34', 'S35']],
  ['pilate-inscription', 'archaeology', 'What does the Pilate inscription establish?', 'ماذا يُثبت نقش بيلاطس؟', 'introductory', ['archaeological'], ['S31']],
  ['assyrian-records-and-lachish', 'archaeology', 'What do Assyrian records and the Lachish reliefs show?', 'ماذا تُظهر السجلات الآشورية ونقوش لخيش؟', 'intermediate', ['archaeological'], ['S32']],
  ['exodus-known-and-disputed', 'archaeology', 'What is known and disputed about the Exodus?', 'ما المعروف والمختلف عليه بشأن الخروج؟', 'advanced', ['archaeological'], ['S33', 'S36', 'S37']],
  ['conquest-narratives', 'archaeology', 'What is known and disputed about the conquest narratives?', 'ما المعروف والمختلف عليه بشأن روايات الغزو؟', 'advanced', ['archaeological'], ['S34', 'S35']],
  ['israelite-and-judean-kings', 'archaeology', 'What evidence concerns Israelite and Judean kings?', 'ما الأدلة المتعلقة بملوك إسرائيل ويهوذا؟', 'advanced', ['archaeological'], ['S32', 'S33']],
  ['first-century-judea', 'archaeology', 'What does archaeology contribute to understanding first-century Judea?', 'ماذا يضيف علم الآثار لفهم يهودا في القرن الأول؟', 'intermediate', ['archaeological'], ['S31']],
  ['forged-or-misidentified-artifacts', 'archaeology', 'How do we recognize forged, sensationalized or misidentified artifacts?', 'كيف نتعرّف على القطع المزوّرة أو المبالغ فيها أو الخاطئة النسب؟', 'intermediate', ['archaeological'], []],

  // G. Virgin Mary
  ['virginal-conception-vs-perpetual-virginity', 'mary', 'What is the difference between virginal conception and perpetual virginity?', 'ما الفرق بين الحبل العذراوي والبتولية الدائمة؟', 'intermediate', [...T, ...TH], ['S55']],
  ['matthew-and-luke-on-conception', 'mary', 'What do Matthew and Luke claim about Jesus’ conception?', 'ماذا يدّعي متى ولوقا عن حبل يسوع؟', 'intermediate', T, []],
  ['mary-historical-evidence', 'mary', 'What historical evidence exists, and where does independent corroboration stop?', 'ما الأدلة التاريخية الموجودة، وأين تنتهي الشهادات المستقلة؟', 'advanced', H, []],
  ['coptic-case-perpetual-virginity', 'mary', 'What is the Coptic Orthodox argument for Mary’s perpetual virginity?', 'ما حجة الكنيسة القبطية الأرثوذكسية في بتولية العذراء الدائمة؟', 'intermediate', TH, ['S55', 'S57']],
  ['brothers-and-sisters-of-jesus', 'mary', 'Who are Jesus’ brothers and sisters?', 'مَن هم إخوة يسوع وأخواته؟', 'advanced', T, []],
  ['until-and-firstborn', 'mary', 'What do “until” and “firstborn” imply in the disputed passages?', 'ماذا تعني «حتى» و«البكر» في الفقرات المتنازع عليها؟', 'advanced', T, []],
  ['alternative-christian-readings-of-mary', 'mary', 'What are the main alternative Christian interpretations?', 'ما أهم التفسيرات المسيحية البديلة؟', 'advanced', [...T, ...TH], []],
  ['why-theotokos', 'mary', 'Why is Mary called Theotokos or Mother of God?', 'لماذا تُدعى مريم «والدة الإله»؟', 'intermediate', TH, ['S53']],
  ['theotokos-does-not-mean', 'mary', 'Does that title mean Mary originated the divine nature?', 'هل يعني اللقب أن مريم أصل الطبيعة الإلهية؟', 'intermediate', TH, ['S53']],
  ['honor-worship-intercession', 'mary', 'How are honor, worship and intercession distinguished?', 'كيف نميّز بين الإكرام والعبادة والشفاعة؟', 'intermediate', TH, []],
  ['virgin-birth-vs-immaculate-conception', 'mary', 'How does the virgin birth differ from the Roman Catholic doctrine of the Immaculate Conception?', 'كيف تختلف الولادة العذراوية عن عقيدة الحبل بلا دنس عند الكاثوليك؟', 'intermediate', TH, []],

  // H. Early Christianity and doctrine
  ['worshipped-before-constantine', 'early', 'Was Jesus worshipped before Constantine?', 'هل عُبد يسوع قبل قسطنطين؟', 'introductory', H, ['S05', 'S18', 'S19', 'S50', 'S54']],
  ['early-christology-development', 'early', 'How did early Christology develop?', 'كيف تطوّر الفكر المسيحي المبكر عن المسيح؟', 'advanced', H, ['S18', 'S19', 'S20']],
  ['what-happened-at-nicaea', 'early', 'What happened at Nicaea?', 'ماذا حدث في نيقية؟', 'intermediate', H, ['S20']],
  ['what-trinity-affirms', 'early', 'What does the Trinity affirm, and what does it not affirm?', 'ماذا يقرّر الثالوث وماذا لا يقرّر؟', 'intermediate', TH, ['S44', 'S52']],
  ['divine-and-human-christ', 'early', 'How can Christ be divine and human?', 'كيف يكون المسيح إلهًا وإنسانًا؟', 'advanced', TH, ['S52', 'S53']],
  ['how-can-christ-suffer', 'early', 'How can Christ suffer or die?', 'كيف يتألم المسيح أو يموت؟', 'advanced', TH, ['S52', 'S53']],
  ['miaphysite-christology', 'early', 'What does Coptic Orthodox Miaphysite Christology mean?', 'ماذا تعني عقيدة الطبيعة الواحدة المتجسدة عند الأقباط؟', 'advanced', TH, ['S53', 'S55']],
  ['miaphysitism-vs-eutychianism', 'early', 'What are the differences between Miaphysitism and Eutychianism?', 'ما الفروق بين الطبيعة الواحدة المتجسدة والأوطاخية؟', 'advanced', TH, ['S53']],
  ['incarnation-cross-salvation', 'early', 'Why the incarnation, cross and salvation?', 'لماذا التجسد والصليب والخلاص؟', 'intermediate', TH, ['S52']],
  ['early-baptism-and-eucharist', 'early', 'What evidence exists for early baptism and Eucharist?', 'ما الأدلة على المعمودية والإفخارستيا المبكرتين؟', 'intermediate', H, ['S50', 'S54']],
  ['scripture-and-tradition', 'early', 'What are the roles of Scripture and Tradition?', 'ما دور الكتاب المقدس والتقليد؟', 'intermediate', TH, ['S55']],
  ['disputes-among-traditions', 'early', 'How should disputes among Christian traditions be represented fairly?', 'كيف نعرض الخلافات بين التقاليد المسيحية بإنصاف؟', 'intermediate', TH, ['S20']],

  // I. Moral and comparative
  ['warfare-and-violent-commands', 'moral', 'Why does the Bible contain warfare and violent commands?', 'لماذا يتضمن الكتاب المقدس حروبًا وأوامر عنيفة؟', 'advanced', [...T, ...TH], ['S49']],
  ['slavery-women-punishment', 'moral', 'What about slavery, women, punishment and difficult ancient laws?', 'ماذا عن العبودية والمرأة والعقوبات والشرائع القديمة الصعبة؟', 'advanced', [...T, ...TH], ['S49']],
  ['context-and-moral-justification', 'moral', 'Does explaining historical context morally justify a practice?', 'هل يُبرّر شرح السياق التاريخي ممارسةً أخلاقيًا؟', 'advanced', P, []],
  ['eternal-judgment-and-goodness', 'moral', 'Is eternal judgment compatible with divine goodness?', 'هل تتفق الدينونة الأبدية مع صلاح الله؟', 'advanced', [...P, ...TH], []],
  ['those-who-never-heard', 'moral', 'What about people who never heard of Christianity?', 'ماذا عن الذين لم يسمعوا بالمسيحية قط؟', 'intermediate', TH, []],
  ['comparing-religious-truth-claims', 'moral', 'How should competing religious truth claims be compared?', 'كيف تُقارن دعاوى الحق الدينية المتنافسة؟', 'intermediate', P, ['S46']],
  ['quran-4-157-and-crucifixion', 'moral', 'How are Qur’an 4:157 and Christian crucifixion claims discussed?', 'كيف يُناقش القرآن (النساء ١٥٧) ودعاوى الصلب المسيحية؟', 'advanced', H, ['S58']],
  ['jewish-and-christian-messianic-readings', 'moral', 'How do Christian and Jewish interpretations of messianic passages differ?', 'كيف تختلف التفسيرات المسيحية واليهودية للنصوص المسيانية؟', 'advanced', T, []],
  ['other-religions-miracles', 'moral', 'What about other religions’ miracle and religious-experience claims?', 'ماذا عن دعاوى المعجزات والخبرات الدينية في الأديان الأخرى؟', 'advanced', [...P, ...H], ['S41', 'S46']],
  ['christian-hypocrisy', 'moral', 'Does Christian hypocrisy disprove Christian claims?', 'هل يُبطل نفاق بعض المسيحيين الدعاوى المسيحية؟', 'introductory', P, []],
];

/** Questions that have a written article; every other row is backlog. Kept in step by `apologetics.test.ts`. */
export const QUESTIONS: readonly Question[] = rows.map(([id, topic, en, ar, difficulty, argumentTypes, leads]) => ({
  id,
  topic,
  slug: id,
  title: { en, ar },
  difficulty,
  argumentTypes,
  leads,
  blocker: SRC_NA,
}));

export const QUESTION_BY_ID: ReadonlyMap<string, Question> = new Map(QUESTIONS.map((q) => [q.id, q]));
export const TOPIC_BY_ID: ReadonlyMap<string, Topic> = new Map(TOPICS.map((t) => [t.id, t]));
