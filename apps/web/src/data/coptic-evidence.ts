import type { Bilingual } from './church-history/types.ts';

/**
 * How the Coptic Orthodox Church supports each point of its faith: the Bible verses it cites, and the early
 * witnesses (writings, councils and manuscripts) it points to. The points are the ones of the church-history
 * comparison (`church-history/compare.ts`); each becomes a subtopic of family 44 in the Bible reader, so its verses
 * can be marked in the text and visited from the topic panel.
 *
 * Only works that exist are named, by title, author and approximate date. No chapter or line numbers are given
 * except where they are well known. The entries are drafts for review by clergy.
 */
export interface Witness {
  readonly title: Bilingual;
  readonly when: Bilingual;
  readonly note?: Bilingual;
}

export interface EvidenceEntry {
  /** The id of a point in `church-history/compare.ts`. */
  readonly point: string;
  /** What the Coptic Orthodox Church holds on this point, and how it supports it. */
  readonly claim: Bilingual;
  /** The verses it cites, as a list of references (`parsePassages` reads it). */
  readonly verses: string;
  readonly witnesses: readonly Witness[];
}

const w = (en: string, ar: string, whenEn: string, whenAr: string, noteEn?: string, noteAr?: string): Witness => ({
  title: { en, ar },
  when: { en: whenEn, ar: whenAr },
  ...(noteEn !== undefined && noteAr !== undefined ? { note: { en: noteEn, ar: noteAr } } : {}),
});

const DIDACHE = (noteEn: string, noteAr: string) =>
  w('The Didache (Teaching of the Twelve Apostles)', 'الديداخي (تعليم الرسل الاثني عشر)', 'late first or early second century', 'أواخر القرن الأول أو أوائل الثاني', noteEn, noteAr);
const IGNATIUS = (noteEn: string, noteAr: string) =>
  w('Ignatius of Antioch, Letter to the Smyrnaeans', 'القديس إغناطيوس الأنطاكي، الرسالة إلى أهل سميرنا', 'about AD 110', 'نحو سنة 110م', noteEn, noteAr);
const IRENAEUS = (noteEn: string, noteAr: string) =>
  w('Irenaeus of Lyons, Against Heresies', 'القديس إيريناؤس، ضد الهرطقات', 'about AD 180', 'نحو سنة 180م', noteEn, noteAr);
const JUSTIN = (noteEn: string, noteAr: string) =>
  w('Justin Martyr, First Apology', 'القديس يوستينوس الشهيد، الدفاع الأول', 'about AD 155', 'نحو سنة 155م', noteEn, noteAr);
const ORIGEN_ROMANS = w(
  'Origen, Commentary on Romans',
  'أوريجانوس، تفسير الرسالة إلى أهل رومية',
  'third century (preserved in Rufinus’s Latin)',
  'القرن الثالث (محفوظ في ترجمة روفينوس اللاتينية)',
  'It says the church received from the apostles the tradition of baptising infants.',
  'يذكر أن الكنيسة تسلّمت من الرسل تقليد تعميد الأطفال.',
);
const SERAPION = (noteEn: string, noteAr: string) =>
  w('The Euchologion of Serapion of Thmuis', 'يوخولوجيون سرابيون أسقف تمي', 'mid-fourth century, Egypt', 'منتصف القرن الرابع، مصر', noteEn, noteAr);

export const COPTIC_EVIDENCE: readonly EvidenceEntry[] = [
  {
    point: 'trinity',
    claim: {
      en: 'The Coptic Church confesses one God in three persons, as the Gospels and apostles teach and as the Councils of Nicaea and Constantinople defined it.',
      ar: 'تعترف الكنيسة القبطية بإله واحد في ثلاثة أقانيم، كما يعلّم الإنجيل والرسل وكما حدّده مجمعا نيقية والقسطنطينية.',
    },
    verses: 'Matthew 28:19; 2 Corinthians 13:14; Matthew 3:16–17; John 14:16–17; John 15:26; Ephesians 4:4–6',
    witnesses: [
      w('The Nicene–Constantinopolitan Creed', 'قانون الإيمان النيقاوي القسطنطيني', 'AD 325 and 381', 'سنتا 325 و381م'),
      w('Athanasius of Alexandria, Letters to Serapion on the Holy Spirit', 'القديس أثناسيوس الإسكندري، رسائل إلى سرابيون عن الروح القدس', 'about AD 359', 'نحو سنة 359م'),
    ],
  },
  {
    point: 'divinity',
    claim: {
      en: 'The Coptic Church holds from Scripture that Jesus Christ is truly God as well as truly man.',
      ar: 'تؤمن الكنيسة القبطية من الكتاب المقدس بأن يسوع المسيح إله حق كما هو إنسان حق.',
    },
    verses: 'John 1:1–14; John 8:58; John 10:30; John 20:28; Colossians 2:9; Titus 2:13; Romans 9:5; Hebrews 1:8; Philippians 2:5–8',
    witnesses: [
      w('Athanasius of Alexandria, On the Incarnation', 'القديس أثناسيوس الإسكندري، تجسد الكلمة', 'about AD 318', 'نحو سنة 318م'),
      w('The Nicene Creed', 'قانون الإيمان النيقاوي', 'AD 325', 'سنة 325م'),
    ],
  },
  {
    point: 'birth',
    claim: {
      en: 'The Coptic Church holds that Christ was born of the Virgin Mary by the Holy Spirit, as the Gospels and Isaiah say.',
      ar: 'تؤمن الكنيسة القبطية بأن المسيح وُلد من العذراء مريم بالروح القدس، كما يقول الإنجيل ونبوة إشعياء.',
    },
    verses: 'Isaiah 7:14; Matthew 1:18–25; Luke 1:26–38; Galatians 4:4',
    witnesses: [],
  },
  {
    point: 'resurrection',
    claim: {
      en: 'The Coptic Church holds that Christ died on the cross and rose on the third day, as the apostles preached.',
      ar: 'تؤمن الكنيسة القبطية بأن المسيح مات على الصليب وقام في اليوم الثالث، كما كرز الرسل.',
    },
    verses: 'Matthew 28:1–10; Luke 24:36–43; 1 Corinthians 15:3–8; Romans 6:9; Acts 2:24–32',
    witnesses: [],
  },
  {
    point: 'return',
    claim: {
      en: 'The Coptic Church holds that Christ will come again in glory to judge the living and the dead.',
      ar: 'تؤمن الكنيسة القبطية بأن المسيح سيأتي ثانية في مجد ليدين الأحياء والأموات.',
    },
    verses: 'Matthew 24:30–31; Acts 1:11; 2 Timothy 4:1; Revelation 22:12; 1 Thessalonians 4:16–17',
    witnesses: [],
  },
  {
    point: 'inspiration',
    claim: {
      en: 'The Coptic Church holds that the Bible is the inspired word of God, given through the Holy Spirit.',
      ar: 'تؤمن الكنيسة القبطية بأن الكتاب المقدس كلمة الله الموحى بها بالروح القدس.',
    },
    verses: '2 Timothy 3:16–17; 2 Peter 1:20–21; Hebrews 1:1–2; Luke 24:44–45',
    witnesses: [],
  },
  {
    point: 'christ-nature',
    claim: {
      en: 'The Coptic Church confesses that God the Word became flesh in one nature, divine and human united without mixture, confusion or change. It follows Cyril of Alexandria’s formula, “one incarnate nature of God the Word”, and reads the Word becoming flesh as one person, not two.',
      ar: 'تعترف الكنيسة القبطية بأن الله الكلمة تجسد في طبيعة واحدة، اتحد فيها اللاهوت بالناسوت بلا اختلاط ولا امتزاج ولا تغيير. وتتبع صيغة القديس كيرلس الإسكندري «طبيعة واحدة لله الكلمة المتجسد»، وتقرأ تجسد الكلمة شخصًا واحدًا لا اثنين.',
    },
    verses: 'John 1:14; Philippians 2:5–8; Colossians 2:9; Hebrews 2:14–17; 1 Timothy 3:16; Acts 20:28; 1 Corinthians 2:8',
    witnesses: [
      w(
        'Cyril of Alexandria, Letters to Succensus',
        'القديس كيرلس الإسكندري، الرسائل إلى سكسنسيوس',
        'about AD 433',
        'نحو سنة 433م',
        'They explain the formula “one incarnate nature of God the Word”.',
        'تشرح صيغة «طبيعة واحدة لله الكلمة المتجسد».',
      ),
      w('Athanasius of Alexandria, On the Incarnation', 'القديس أثناسيوس الإسكندري، تجسد الكلمة', 'about AD 318', 'نحو سنة 318م'),
    ],
  },
  {
    point: 'spirit',
    claim: {
      en: 'The Coptic Church keeps the Creed as the Councils of Nicaea and Constantinople gave it: the Holy Spirit proceeds from the Father, as Christ says in John 15:26.',
      ar: 'تحفظ الكنيسة القبطية قانون الإيمان كما أعطاه مجمعا نيقية والقسطنطينية: الروح القدس منبثق من الآب، كما قال المسيح في يوحنا 15: 26.',
    },
    verses: 'John 15:26; John 14:16–17; Galatians 4:6',
    witnesses: [w('The Nicene–Constantinopolitan Creed', 'قانون الإيمان النيقاوي القسطنطيني', 'AD 381', 'سنة 381م')],
  },
  {
    point: 'canon',
    claim: {
      en: 'The Coptic Church reads the Old Testament in the Greek Septuagint, with the deuterocanonical books, as the apostles and the early church did. The great Greek Bibles of the fourth century include them.',
      ar: 'تقرأ الكنيسة القبطية العهد القديم بالترجمة السبعينية اليونانية مع الأسفار القانونية الثانية، كما فعل الرسل والكنيسة الأولى. وتتضمنها الكتب المقدسة اليونانية الكبرى في القرن الرابع.',
    },
    verses: 'Hebrews 11:35; Luke 24:44; 2 Timothy 3:15–16; Romans 3:1–2',
    witnesses: [
      w(
        'Codex Vaticanus and Codex Sinaiticus',
        'المخطوطان الفاتيكاني والسينائي',
        'fourth century',
        'القرن الرابع',
        'Both great Greek Bibles include deuterocanonical books such as Wisdom, Sirach, Tobit and Judith.',
        'يتضمن هذان الكتابان المقدسان اليونانيان الكبيران أسفارًا قانونية ثانية مثل الحكمة ويشوع بن سيراخ وطوبيا ويهوديت.',
      ),
      w(
        'Athanasius of Alexandria, Festal Letter 39',
        'القديس أثناسيوس الإسكندري، الرسالة الفصحية التاسعة والثلاثون',
        'AD 367',
        'سنة 367م',
        'It lists the books of Scripture, and names others that are read by those joining the church.',
        'يعدّد أسفار الكتاب المقدس، ويذكر أسفارًا أخرى يقرؤها المنضمون إلى الكنيسة.',
      ),
    ],
  },
  {
    point: 'authority',
    claim: {
      en: 'The Coptic Church reads Scripture within Holy Tradition, because the apostles handed on teaching by word as well as by letter, and told the churches to hold both.',
      ar: 'تقرأ الكنيسة القبطية الكتاب المقدس داخل التقليد المقدس، لأن الرسل سلّموا التعليم بالكلمة كما بالرسالة، وأوصوا الكنائس بالتمسك بالاثنين.',
    },
    verses: '2 Thessalonians 2:15; 1 Corinthians 11:2; 2 Timothy 2:2; John 21:25; 2 John 12; 1 Timothy 3:15',
    witnesses: [
      IRENAEUS('Book 3 appeals to the teaching handed down in the churches founded by the apostles.', 'يحتكم الكتاب الثالث إلى التعليم المسلَّم في الكنائس التي أسسها الرسل.'),
      w('Tertullian, Prescription Against Heretics', 'ترتليان، الاحتجاج على الهراطقة', 'about AD 200', 'نحو سنة 200م'),
    ],
  },
  {
    point: 'councils',
    claim: {
      en: 'The Coptic Church accepts the first three ecumenical councils, following the example of the apostles gathered at Jerusalem to decide a question of faith together.',
      ar: 'تقبل الكنيسة القبطية المجامع المسكونية الثلاثة الأولى، على مثال الرسل الذين اجتمعوا في أورشليم ليقرروا معًا مسألة إيمانية.',
    },
    verses: 'Acts 15:6–29; Matthew 18:18–20; Galatians 2:1–2',
    witnesses: [w('The Council of Nicaea, creed and canons', 'مجمع نيقية، قانون الإيمان والقوانين', 'AD 325', 'سنة 325م')],
  },
  {
    point: 'leadership',
    claim: {
      en: 'The Coptic Church is governed by bishops together in synod, as the apostles appointed elders in every church and met together, and no one bishop rules over the whole church.',
      ar: 'تُدار الكنيسة القبطية بالأساقفة معًا في مجمع، كما أقام الرسل شيوخًا في كل كنيسة واجتمعوا معًا، ولا يحكم أسقف واحد الكنيسة كلها.',
    },
    verses: 'Ephesians 4:11–13; Acts 14:23; Titus 1:5; 1 Peter 5:1–4; Acts 15:22–29',
    witnesses: [
      IGNATIUS('Chapter 8 says that nothing in the church should be done without the bishop.', 'يقول الأصحاح الثامن إنه لا ينبغي أن يُعمل شيء في الكنيسة بدون الأسقف.'),
      w('The Council of Nicaea, canon 6', 'مجمع نيقية، القانون السادس', 'AD 325', 'سنة 325م', 'It confirms the long-standing authority of the bishop of Alexandria over Egypt.', 'يؤكد السلطان القديم لأسقف الإسكندرية على مصر.'),
    ],
  },
  {
    point: 'succession',
    claim: {
      en: 'The Coptic Church holds that bishops are ordained in an unbroken line from the apostles, who laid hands on others and told them to do the same.',
      ar: 'تؤمن الكنيسة القبطية بأن الأساقفة يُرسَمون في سلسلة متصلة من الرسل، الذين وضعوا الأيادي على آخرين وأوصوهم بأن يفعلوا مثلهم.',
    },
    verses: 'Acts 1:21–26; 2 Timothy 2:2; Titus 1:5; 1 Timothy 4:14; 2 Timothy 1:6; Acts 14:23',
    witnesses: [
      w('1 Clement (Clement of Rome to the Corinthians)', 'رسالة كليمندس الأولى (كليمندس الروماني إلى أهل كورنثوس)', 'about AD 96', 'نحو سنة 96م', 'Chapters 42 and 44 speak of bishops appointed in succession from the apostles.', 'يتحدث الأصحاحان 42 و44 عن أساقفة أُقيموا بالتتابع من الرسل.'),
      IRENAEUS('Book 3 lists the succession of bishops from the apostles in the churches.', 'يعدّد الكتاب الثالث تتابع الأساقفة من الرسل في الكنائس.'),
    ],
  },
  {
    point: 'clergy-marriage',
    claim: {
      en: 'The Coptic Church ordains married men as priests, as the apostles’ letters allow and as Peter and other apostles were married, and chooses its bishops from the celibate, as Paul himself lived.',
      ar: 'ترسم الكنيسة القبطية رجالًا متزوجين كهنة، كما تسمح رسائل الرسل وكما كان بطرس وغيره من الرسل متزوجين، وتختار أساقفتها من البتوليين، كما عاش بولس نفسه.',
    },
    verses: '1 Timothy 3:2; Titus 1:6; Matthew 8:14; 1 Corinthians 9:5; 1 Corinthians 7:32–35; 1 Corinthians 7:7–8',
    witnesses: [],
  },
  {
    point: 'women',
    claim: {
      en: 'The Coptic Church ordains only men as priests and bishops. Jesus chose twelve men as apostles, and the apostles’ letters give the offices of overseer and elder to men, while women served in other ways, as deaconesses and in many ministries.',
      ar: 'ترسم الكنيسة القبطية الرجال فقط كهنة وأساقفة. فقد اختار يسوع اثني عشر رجلًا رسلًا، وتُسند رسائل الرسل وظيفتي الأسقف والقس إلى رجال، بينما خدمت النساء بطرق أخرى، منها الشماسات وخدمات كثيرة.',
    },
    verses: 'Mark 3:13–19; Luke 6:12–16; 1 Timothy 2:11–14; 1 Corinthians 14:34–35; 1 Timothy 3:1–7; Romans 16:1–2',
    witnesses: [],
  },
  {
    point: 'sacraments-count',
    claim: {
      en: 'The Coptic Church has seven sacraments, each rooted in an act of Christ or the apostles: baptism, chrismation, the Eucharist, confession, the anointing of the sick, marriage and the priesthood.',
      ar: 'للكنيسة القبطية سبعة أسرار، كل منها له أصل في عمل للمسيح أو الرسل: المعمودية والميرون والإفخارستيا والاعتراف ومسحة المرضى والزواج والكهنوت.',
    },
    verses: 'Matthew 28:19; Acts 8:14–17; Luke 22:19–20; John 20:21–23; James 5:14–15; Ephesians 5:31–32; 1 Timothy 4:14',
    witnesses: [
      SERAPION(
        'A collection of prayers from an Egyptian bishop, including baptism, chrism, the Eucharist, ordination and the anointing of the sick.',
        'مجموعة صلوات لأسقف مصري تشمل المعمودية والميرون والإفخارستيا والسيامة ومسحة المرضى.',
      ),
    ],
  },
  {
    point: 'baptism',
    claim: {
      en: 'The Coptic Church baptises infants and adults by triple immersion. It reads baptism as the new birth, and as the new circumcision that was given to infants, and the apostles baptised whole households.',
      ar: 'تعمّد الكنيسة القبطية الأطفال والبالغين بالتغطيس ثلاث مرات. وتقرأ المعمودية ميلادًا جديدًا، وختانًا جديدًا كان يُعطى للأطفال، وقد عمّد الرسل بيوتًا بأكملها.',
    },
    verses: 'John 3:5; Acts 2:38–39; Acts 16:15; Acts 16:33; 1 Corinthians 1:16; Colossians 2:11–12; Mark 10:14; Romans 6:3–4; Titus 3:5',
    witnesses: [
      DIDACHE('Chapter 7 gives the rite of baptism in the name of the Father, the Son and the Holy Spirit.', 'يعطي الأصحاح السابع طقس المعمودية باسم الآب والابن والروح القدس.'),
      JUSTIN('Chapter 61 describes baptism as new birth.', 'يصف الأصحاح 61 المعمودية ميلادًا جديدًا.'),
      ORIGEN_ROMANS,
      w('Cyprian of Carthage, Letter 64', 'القديس كبريانوس القرطاجني، الرسالة 64', 'about AD 253', 'نحو سنة 253م', 'A council of bishops says infants should be baptised and not delayed.', 'يقرر مجمع أساقفة أن الأطفال يُعمَّدون ولا يُؤجَّل عمادهم.'),
    ],
  },
  {
    point: 'chrismation',
    claim: {
      en: 'The Coptic Church gives the Holy Spirit by anointing with holy myron right after baptism, as the apostles gave the Spirit by laying on hands and as John says believers have an anointing from the Holy One.',
      ar: 'تمنح الكنيسة القبطية الروح القدس بمسحة الميرون المقدس بعد المعمودية مباشرة، كما منح الرسل الروح بوضع الأيادي وكما يقول يوحنا إن للمؤمنين مسحة من القدوس.',
    },
    verses: 'Acts 8:14–17; Acts 19:5–6; 1 John 2:20; 1 John 2:27; 2 Corinthians 1:21–22; Hebrews 6:2',
    witnesses: [
      w('Cyril of Jerusalem, Mystagogical Catecheses (the third)', 'القديس كيرلس الأورشليمي، التعاليم السرية (الثالثة)', 'about AD 350', 'نحو سنة 350م'),
      SERAPION('It includes a prayer for the consecration of chrism.', 'يتضمن صلاة لتقديس الميرون.'),
    ],
  },
  {
    point: 'eucharist',
    claim: {
      en: 'The Coptic Church holds that the bread and wine become the true Body and Blood of Christ, as Jesus said at the Last Supper and in John 6, and as the early writers taught.',
      ar: 'تؤمن الكنيسة القبطية بأن الخبز والخمر يصيران جسد المسيح ودمه الحقيقيين، كما قال يسوع في العشاء الأخير وفي يوحنا 6، وكما علّم الآباء الأولون.',
    },
    verses: 'John 6:51–58; Luke 22:19–20; 1 Corinthians 10:16; 1 Corinthians 11:23–29; Matthew 26:26–28',
    witnesses: [
      DIDACHE('Chapters 9 and 10 give the Eucharistic prayers, and chapter 14 gathers the church on the Lord’s day.', 'يعطي الأصحاحان 9 و10 صلوات الإفخارستيا، ويجمع الأصحاح 14 الكنيسة في يوم الرب.'),
      IGNATIUS('Chapter 7 calls the Eucharist the flesh of our Saviour Jesus Christ.', 'يدعو الأصحاح 7 الإفخارستيا جسد مخلصنا يسوع المسيح.'),
      JUSTIN('Chapter 66 says the food is the flesh and blood of the incarnate Jesus.', 'يقول الأصحاح 66 إن الطعام هو جسد يسوع المتجسد ودمه.'),
      IRENAEUS('Books 4 and 5 argue from the Eucharist that the body is raised.', 'يحتج الكتابان 4 و5 بالإفخارستيا على قيامة الجسد.'),
    ],
  },
  {
    point: 'confession',
    claim: {
      en: 'The Coptic Church holds that Christ gave the apostles the authority to forgive sins, and that those they appoint hear confession and pronounce absolution.',
      ar: 'تؤمن الكنيسة القبطية بأن المسيح أعطى الرسل سلطانًا لمغفرة الخطايا، وأن من يقيمونهم يسمعون الاعتراف ويمنحون الحل.',
    },
    verses: 'John 20:21–23; Matthew 18:18; James 5:16; Acts 19:18; 1 John 1:9; Matthew 16:19',
    witnesses: [
      DIDACHE('Chapters 4 and 14 call the church to confess its sins.', 'يدعو الأصحاحان 4 و14 الكنيسة إلى الاعتراف بخطاياها.'),
      w('Origen, Homilies on Leviticus (the second)', 'أوريجانوس، عظات على سفر اللاويين (الثانية)', 'third century', 'القرن الثالث', 'It lists ways of forgiveness, including confessing to a priest of the Lord.', 'يعدّد طرق الغفران ومنها الاعتراف أمام كاهن الرب.'),
    ],
  },
  {
    point: 'mary',
    claim: {
      en: 'The Coptic Church calls Mary Theotokos, Mother of God, because the child she bore is God the Word, as Elizabeth called her “mother of my Lord”. It also holds that she remained a virgin.',
      ar: 'تدعو الكنيسة القبطية العذراء مريم والدة الإله، لأن الطفل الذي ولدته هو الله الكلمة، كما دعتها أليصابات «أم ربي». وتؤمن أيضًا بأنها ظلت عذراء.',
    },
    verses: 'Luke 1:28; Luke 1:35; Luke 1:43; Galatians 4:4; Isaiah 7:14; John 19:26–27; Ezekiel 44:1–2',
    witnesses: [
      w(
        'Rylands Papyrus 470 (the prayer “Beneath your compassion”)',
        'بردية رايلاندز 470 (صلاة «تحت حمايتك»)',
        'third or fourth century, Egypt',
        'القرن الثالث أو الرابع، مصر',
        'A Greek papyrus from Egypt with one of the oldest prayers to Mary, calling her Theotokos.',
        'بردية يونانية من مصر فيها من أقدم الصلوات إلى العذراء، وتدعوها والدة الإله.',
      ),
      w('Cyril of Alexandria, Third Letter to Nestorius', 'القديس كيرلس الإسكندري، الرسالة الثالثة إلى نسطور', 'AD 430', 'سنة 430م'),
      w('The Council of Ephesus', 'مجمع أفسس', 'AD 431', 'سنة 431م', 'It confirmed the title Theotokos.', 'أقرّ لقب والدة الإله.'),
    ],
  },
  {
    point: 'saints',
    claim: {
      en: 'The Coptic Church asks the saints to pray for us, because they live to God and the whole church prays for one another, and Scripture shows the saints and angels offering the prayers of the faithful.',
      ar: 'تطلب الكنيسة القبطية من القديسين أن يصلّوا لأجلنا، لأنهم أحياء لله والكنيسة كلها تصلي بعضها لأجل بعض، ويُظهر الكتاب القديسين والملائكة يقدمون صلوات المؤمنين.',
    },
    verses: 'Revelation 5:8; Revelation 8:3–4; James 5:16; Luke 20:37–38; Hebrews 12:1; Matthew 17:3; Luke 16:27–28',
    witnesses: [
      w('Origen, On Prayer', 'أوريجانوس، عن الصلاة', 'about AD 233', 'نحو سنة 233م', 'It speaks of the saints praying together with us.', 'يتحدث عن القديسين يصلّون معنا.'),
      w('Rylands Papyrus 470', 'بردية رايلاندز 470', 'third or fourth century, Egypt', 'القرن الثالث أو الرابع، مصر', 'A prayer asking Mary for her protection.', 'صلاة تطلب حماية العذراء.'),
    ],
  },
  {
    point: 'icons',
    claim: {
      en: 'The Coptic Church honours icons, because God Himself commanded images of cherubim for the tabernacle and temple, and because Christ is “the image of the invisible God” who became visible.',
      ar: 'تكرّم الكنيسة القبطية الأيقونات، لأن الله نفسه أمر بصور الكاروبيم للخيمة والهيكل، ولأن المسيح هو «صورة الله غير المنظور» الذي صار منظورًا.',
    },
    verses: 'Exodus 25:18–22; Numbers 21:8–9; 1 Kings 6:23–29; Colossians 1:15; John 14:9; Hebrews 9:5',
    witnesses: [
      w(
        'The icon of Christ and Abbot Mena from Bawit',
        'أيقونة المسيح والأب مينا من باويط',
        'sixth or seventh century, Egypt',
        'القرن السادس أو السابع، مصر',
        'An Egyptian icon of Christ with a monastic leader, now in the Louvre.',
        'أيقونة مصرية للمسيح مع رئيس دير، محفوظة الآن في متحف اللوفر.',
      ),
    ],
  },
  {
    point: 'salvation',
    claim: {
      en: 'The Coptic Church teaches that we are saved by God’s grace through faith, and that this faith works through love: faith and works of love belong together.',
      ar: 'تعلّم الكنيسة القبطية أننا نخلص بنعمة الله بالإيمان، وأن هذا الإيمان يعمل بالمحبة: الإيمان وأعمال المحبة معًا.',
    },
    verses: 'Ephesians 2:8–10; James 2:14–26; Philippians 2:12–13; Titus 3:5–8; Matthew 25:31–46; Romans 2:6–7; Galatians 5:6',
    witnesses: [],
  },
  {
    point: 'will',
    claim: {
      en: 'The Coptic Church teaches that God’s grace and human free will work together: God calls everyone and wants all to be saved, and each person answers freely.',
      ar: 'تعلّم الكنيسة القبطية أن نعمة الله والإرادة الحرة للإنسان تعملان معًا: الله يدعو الجميع ويريد أن الجميع يخلصون، وكل إنسان يجيب بحرية.',
    },
    verses: 'Deuteronomy 30:19; Joshua 24:15; Ezekiel 18:23; 1 Timothy 2:3–4; Revelation 3:20; 2 Peter 3:9',
    witnesses: [],
  },
  {
    point: 'afterlife',
    claim: {
      en: 'The Coptic Church prays for the departed and offers the Liturgy for them, and does not teach a purgatory. It holds that each soul awaits the final judgment, and that the prayers of the living help the departed.',
      ar: 'تصلي الكنيسة القبطية لأجل الراقدين وتقدم القداس عنهم، ولا تعلّم بالمطهر. وتؤمن بأن كل نفس تنتظر الدينونة الأخيرة، وأن صلوات الأحياء تعين الراقدين.',
    },
    verses: 'Hebrews 9:27; Luke 16:19–31; Luke 23:43; 2 Timothy 1:16–18; 2 Maccabees 12:43–45',
    witnesses: [],
  },
  {
    point: 'worship',
    claim: {
      en: 'The Coptic Church worships by an ancient liturgy, as the first church “continued steadfastly in the breaking of bread and the prayers”, and its worship follows the heavenly worship that Isaiah and John saw.',
      ar: 'تعبد الكنيسة القبطية بقداس قديم، كما كانت الكنيسة الأولى «مواظبة على كسر الخبز والصلوات»، وتتبع عبادتها العبادة السماوية التي رآها إشعياء ويوحنا.',
    },
    verses: 'Acts 2:42; Acts 13:2; Isaiah 6:1–3; Hebrews 8:1–6; Revelation 4:8–11; Psalms 141:2',
    witnesses: [
      DIDACHE('Chapters 9, 10 and 14 describe the first Christians gathering for the Eucharist.', 'تصف الأصحاحات 9 و10 و14 اجتماع المسيحيين الأوائل للإفخارستيا.'),
      JUSTIN('Chapter 67 describes the Sunday gathering with readings, prayers and the Eucharist.', 'يصف الأصحاح 67 اجتماع الأحد بالقراءات والصلوات والإفخارستيا.'),
      w(
        'Strasbourg Papyrus gr. 254 (an Alexandrian anaphora)',
        'بردية ستراسبورغ 254 (أنافورا إسكندرية)',
        'about the fifth century, Egypt',
        'نحو القرن الخامس، مصر',
        'A Greek papyrus of an Alexandrian Eucharistic prayer, related to the Liturgy of St. Mark.',
        'بردية يونانية لصلاة إفخارستية إسكندرية، قريبة من قداس مار مرقس.',
      ),
    ],
  },
  {
    point: 'fasting',
    claim: {
      en: 'The Coptic Church fasts on many days, because Christ expected His disciples to fast, and the apostles fasted when they prayed and appointed leaders.',
      ar: 'تصوم الكنيسة القبطية أيامًا كثيرة، لأن المسيح توقع أن يصوم تلاميذه، وصام الرسل حين صلّوا وأقاموا القادة.',
    },
    verses: 'Matthew 6:16–18; Matthew 9:14–15; Acts 13:2–3; Acts 14:23; Joel 2:12',
    witnesses: [DIDACHE('Chapter 8 tells Christians to fast on Wednesdays and Fridays.', 'يوصي الأصحاح 8 المسيحيين بالصوم يومَي الأربعاء والجمعة.')],
  },
  {
    point: 'monasticism',
    claim: {
      en: 'The Coptic Church honours monastic life, which began in Egypt, as a way of following Christ’s call to leave everything, and of the undivided devotion that Paul describes.',
      ar: 'تكرّم الكنيسة القبطية الحياة الرهبانية، التي بدأت في مصر، طريقًا لاتباع دعوة المسيح إلى ترك كل شيء، ولتكريس القلب الذي يصفه بولس.',
    },
    verses: 'Matthew 19:21; Luke 18:22; 1 Corinthians 7:32–35; Mark 1:12–13; Luke 5:16; Hebrews 11:37–38',
    witnesses: [
      w('Athanasius of Alexandria, Life of Antony', 'القديس أثناسيوس الإسكندري، سيرة القديس أنطونيوس', 'about AD 360', 'نحو سنة 360م', 'It tells how Antony of Egypt, the father of monks, heard Matthew 19:21 and left everything.', 'تروي كيف سمع أنطونيوس المصري، أبو الرهبان، متى 19: 21 فترك كل شيء.'),
      w('The Sayings of the Desert Fathers (Apophthegmata Patrum)', 'أقوال آباء البرية (الأبوفثجماتا)', 'fourth and fifth centuries, Egypt', 'القرنان الرابع والخامس، مصر'),
      w('The Rules of Pachomius', 'قوانين القديس باخوميوس', 'fourth century, Egypt', 'القرن الرابع، مصر', 'The first rules for monks living together.', 'أولى القوانين للرهبان الذين يعيشون معًا.'),
    ],
  },
];

/** The title of the family these entries form in the Bible reader's topics. */
export const EVIDENCE_FAMILY: Bilingual & { readonly id: string } = {
  id: '44',
  en: 'The Coptic Orthodox faith in Scripture and the early witnesses',
  ar: 'الإيمان القبطي الأرثوذكسي في الكتاب المقدس والشهادات القديمة',
};
