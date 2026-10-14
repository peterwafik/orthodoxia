/**
 * The Holy Mass journey: 52 stops in five chapters, with the camera region of each.
 *
 * Status of this content (docs/HOLY_MASS.md): the order and the titles follow the outline of
 * copticorthodoxliturgy.com (headings only; a few connecting stops are marked basis "general").
 * The explanations are original, short, educational texts written for this site and have not yet been
 * reviewed by clergy. No prayer text is reproduced: only the short standard dialogue of stops 29–30 is
 * shown; every other prayer is marked as pending an authorized translation.
 */
import type { FocusBox } from '../lib/holy-mass/camera.ts';

export interface Bilingual {
  readonly en: string;
  readonly ar: string;
}

export interface ScriptureRef {
  /** USFM book code. */
  readonly book: string;
  readonly chapter: number;
  readonly verses?: string;
}

export type RegionId =
  | 'church'
  | 'altar'
  | 'iconostasis'
  | 'veil'
  | 'incense'
  | 'congregation'
  | 'threshold'
  | 'stair'
  | 'choir'
  | 'angels'
  | 'saints'
  | 'christ'
  | 'sky'
  | 'heaven';

export interface Chapter {
  readonly id: 1 | 2 | 3 | 4 | 5;
  readonly title: Bilingual;
}

export interface DialogueLine {
  readonly role: 'priest' | 'people';
  readonly text: Bilingual;
}

export interface Stop {
  readonly n: number;
  readonly slug: string;
  readonly chapter: Chapter['id'];
  readonly title: Bilingual;
  /** What happens in church. */
  readonly what: Bilingual;
  /** What it means. */
  readonly meaning: Bilingual;
  /** A short personal meditation (original, not a liturgical text). */
  readonly meditate: Bilingual;
  readonly scripture: readonly ScriptureRef[];
  readonly region: RegionId;
  readonly box: FocusBox;
  /** Short standard dialogue, where it is common to all three liturgies. */
  readonly dialogue?: readonly DialogueLine[];
  /** The text of this part differs among St. Basil, St. Gregory and St. Cyril. */
  readonly varies?: true;
  /** Where the stop comes from: the reference outline, or a connecting stop added for the journey. */
  readonly basis: 'outline' | 'general';
}

export const CHAPTERS: readonly Chapter[] = [
  { id: 1, title: { en: 'Preparation', ar: 'التحضير' } },
  { id: 2, title: { en: 'The Liturgy of the Word', ar: 'ليتورجيا الكلمة' } },
  { id: 3, title: { en: 'Reconciliation and Peace', ar: 'المصالحة والسلام' } },
  { id: 4, title: { en: 'The Liturgy of the Faithful', ar: 'ليتورجيا المؤمنين' } },
  { id: 5, title: { en: 'Communion and Thanksgiving', ar: 'التناول والشكر' } },
];

export const REGIONS: Readonly<Record<RegionId, { title: Bilingual; note: Bilingual }>> = {
  church: {
    title: { en: 'The whole church', ar: 'الكنيسة كلها' },
    note: {
      en: 'One picture of the church: the sanctuary below, and above it the worship of heaven that the Liturgy joins. The artwork is a symbolic meditation, not a literal map of heaven.',
      ar: 'صورة واحدة للكنيسة: الهيكل في الأسفل، وفوقه سماء العبادة التي تشترك فيها الليتورجيا. العمل الفني تأمل رمزي وليس خريطة حرفية للسماء.',
    },
  },
  altar: {
    title: { en: 'The altar and the priest', ar: 'المذبح والكاهن' },
    note: {
      en: 'The priest stands at the church’s one altar with his hands raised in prayer, the deacon beside him and the people behind.',
      ar: 'يقف الكاهن أمام مذبح الكنيسة الواحد ويداه مرفوعتان بالصلاة، والشماس بجانبه والشعب خلفه.',
    },
  },
  iconostasis: {
    title: { en: 'The iconostasis', ar: 'حامل الأيقونات' },
    note: {
      en: 'The screen of icons stands before the sanctuary, with the Virgin Mary holding Christ and the icon of Christ among the saints.',
      ar: 'حامل الأيقونات أمام الهيكل، وعليه العذراء مريم حاملة المسيح وأيقونة السيد المسيح بين القديسين.',
    },
  },
  veil: {
    title: { en: 'The sanctuary veil', ar: 'ستر الهيكل' },
    note: {
      en: 'The red curtains of the sanctuary remind us that we approach a holy God, and that Christ has opened the way (Hebrews 10:19–20).',
      ar: 'ستائر الهيكل الحمراء تذكّرنا بأننا نقترب من إله قدوس، وأن المسيح فتح لنا الطريق (عبرانيين ١٠: ١٩-٢٠).',
    },
  },
  incense: {
    title: { en: 'The incense', ar: 'البخور' },
    note: {
      en: 'Incense rises from the altar toward the clouds: the Church’s picture of prayer ascending before God (Psalm 141:2; Revelation 8:3–4).',
      ar: 'يصعد البخور من المذبح نحو السحب: صورة الكنيسة لصلاة تصعد أمام الله (مزمور ١٤١: ٢؛ رؤيا ٨: ٣-٤).',
    },
  },
  congregation: {
    title: { en: 'The people', ar: 'الشعب' },
    note: {
      en: 'The congregation stands behind the priest, men and women, answering and singing: the liturgy is the work of the whole people.',
      ar: 'يقف الشعب خلف الكاهن رجالًا ونساءً، يجاوبون ويرتلون: الليتورجيا عمل الشعب كله.',
    },
  },
  threshold: {
    title: { en: 'The threshold', ar: 'العتبة' },
    note: {
      en: 'Where the sanctuary meets the clouds, the earthly Liturgy opens onto the heavenly one. This is an artistic meditation, not a claim about where heaven is.',
      ar: 'حيث يلتقي الهيكل بالسحب، تنفتح الليتورجيا الأرضية على الليتورجيا السماوية. هذا تأمل فني وليس تحديدًا لمكان السماء.',
    },
  },
  stair: {
    title: { en: 'The stair of light', ar: 'سلّم النور' },
    note: {
      en: 'A stair of light rises from the altar to the heavenly assembly, with a hanging censer at its head.',
      ar: 'سلّم من النور يصعد من المذبح إلى المجمع السماوي، وفي أعلاه مبخرة معلّقة.',
    },
  },
  choir: {
    title: { en: 'The heavenly assembly', ar: 'المجمع السماوي' },
    note: {
      en: 'Rank upon rank of worshippers in white and gold sing before the throne (Revelation 7:9–10).',
      ar: 'صفوف بعد صفوف من العابدين بالأبيض والذهبي يسبّحون أمام العرش (رؤيا ٧: ٩-١٠).',
    },
  },
  angels: {
    title: { en: 'The angels', ar: 'الملائكة' },
    note: {
      en: 'Winged angels with harps and censers: the praise of the heavenly hosts (Isaiah 6:2–3; Revelation 5:8).',
      ar: 'ملائكة بأجنحة معهم قيثارات ومجامر: تسبيح الجند السماوي (إشعياء ٦: ٢-٣؛ رؤيا ٥: ٨).',
    },
  },
  saints: {
    title: { en: 'The Virgin Mary and the saints', ar: 'العذراء والقديسون' },
    note: {
      en: 'The Virgin Mary and the saints stand among the worshippers: the “great cloud of witnesses” (Hebrews 12:1).',
      ar: 'العذراء والقديسون بين العابدين: «سحابة الشهود المحيطة بنا» (عبرانيين ١٢: ١).',
    },
  },
  christ: {
    title: { en: 'Christ', ar: 'السيد المسيح' },
    note: {
      en: 'Christ is at the centre of heavenly worship, holding the Gospel, in a halo of light, as in Coptic iconography. The Father is not depicted, and the Holy Spirit is not given a figure.',
      ar: 'السيد المسيح في وسط العبادة السماوية، يحمل الإنجيل، في هالة من النور، على نمط الأيقونة القبطية. لا يُصوَّر الآب، ولا يُعطى الروح القدس شكلًا.',
    },
  },
  sky: {
    title: { en: 'The heavens', ar: 'السماوات' },
    note: {
      en: 'The vault of the heavens, with its arches and stars, above the assembly.',
      ar: 'قبة السماوات بعقودها ونجومها فوق المجمع.',
    },
  },
  heaven: {
    title: { en: 'Heavenly worship', ar: 'العبادة السماوية' },
    note: {
      en: 'Only heaven fills the picture now. The journey ends here in the picture, but not in the Church: the worshipper returns to the world carrying what was received.',
      ar: 'السماء وحدها تملأ الصورة الآن. تنتهي الرحلة هنا في الصورة، لكنها لا تنتهي في الكنيسة: يعود المصلّي إلى العالم حاملًا ما نال.',
    },
  },
};

const LIFT: readonly DialogueLine[] = [
  { role: 'priest', text: { en: 'The Lord be with you all.', ar: 'الرب مع جميعكم.' } },
  { role: 'people', text: { en: 'And with your spirit.', ar: 'ومع روحك أيضًا.' } },
  { role: 'priest', text: { en: 'Lift up your hearts.', ar: 'ارفعوا قلوبكم.' } },
  { role: 'people', text: { en: 'We have them with the Lord.', ar: 'هي عند الرب.' } },
];

const THANKS: readonly DialogueLine[] = [
  { role: 'priest', text: { en: 'Let us give thanks to the Lord.', ar: 'فلنشكر الرب.' } },
  { role: 'people', text: { en: 'It is meet and right.', ar: 'مستحق وعادل.' } },
];

type Row = {
  slug: string;
  title: [string, string];
  what: [string, string];
  meaning: [string, string];
  meditate: [string, string];
  scripture: ScriptureRef[];
  region: RegionId;
  box: FocusBox;
  dialogue?: readonly DialogueLine[];
  varies?: true;
  basis?: 'general';
};

const ref = (book: string, chapter: number, verses?: string): ScriptureRef => (verses === undefined ? { book, chapter } : { book, chapter, verses });
const bi = ([en, ar]: [string, string]): Bilingual => ({ en, ar });

/** [chapter, rows] in liturgical order. Stop numbers are assigned by position. */
const SOURCE: readonly (readonly [Chapter['id'], readonly Row[]])[] = [
  [
    1,
    [
      {
        slug: 'vesting',
        title: ['Vesting and preparing the altar', 'لبس الملابس وتهيئة المذبح'],
        what: ['Before the people gather, the priest puts on the vestments and prepares the altar and the vessels in prayer.', 'قبل اجتماع الشعب يلبس الكاهن ملابس الخدمة ويهيّئ المذبح والأواني بالصلاة.'],
        meaning: ['The Church begins by preparing: the priest asks to be made worthy, because the Liturgy is God’s work and not a performance.', 'تبدأ الكنيسة بالاستعداد: يطلب الكاهن أن يؤهَّل للخدمة، لأن الليتورجيا عمل الله وليست عرضًا.'],
        meditate: ['Come to this prayer unhurried; ask to be made ready.', 'تعالَ إلى هذه الصلاة بلا عجلة، واطلب أن تكون مستعدًّا.'],
        scripture: [ref('PSA', 132, '9')],
        region: 'church',
        box: [0.5, 0.5, 1, 1],
      },
      {
        slug: 'choosing-the-lamb',
        title: ['Choosing the Lamb', 'اختيار الحمل'],
        what: ['From the loaves offered, the priest chooses the one that will become the Lamb, and the wine for the chalice is prepared.', 'من بين القرابين يختار الكاهن الخبزة التي تصير الحمل، ويُهيَّأ الخمر للكأس.'],
        meaning: ['The Lamb is chosen with care, recalling Christ who offered Himself “without blemish and without spot”.', 'يُختار الحمل بعناية، تذكارًا للمسيح الذي قدّم نفسه «بلا عيب ولا دنس».'],
        meditate: ['What do I offer: the best of my time, or what is left over?', 'ماذا أقدّم: أفضل وقتي أم ما يتبقّى منه؟'],
        scripture: [ref('1PE', 1, '18-19'), ref('EXO', 12, '5')],
        region: 'altar',
        box: [0.5, 0.82, 0.3, 0.3],
      },
      {
        slug: 'procession-of-the-lamb',
        title: ['The procession of the Lamb', 'زفة الحمل'],
        what: ['The Lamb and the chalice are carried in procession around the altar and set upon it while the people sing.', 'يُطاف بالحمل والكأس حول المذبح ثم يوضعان عليه والشعب يرتّل.'],
        meaning: ['The Church follows her Lord, “the Lamb of God who takes away the sin of the world”, with praise.', 'تتبع الكنيسة سيدها، «حمل الله الذي يرفع خطية العالم»، بالتسبيح.'],
        meditate: ['Follow Him: ask where He is leading you today.', 'اتبعه: اسأله إلى أين يقودك اليوم.'],
        scripture: [ref('JHN', 1, '29'), ref('ISA', 53, '7')],
        region: 'altar',
        box: [0.38, 0.78, 0.34, 0.32],
      },
      {
        slug: 'blessing-of-the-oblations',
        title: ['The blessing of the oblations', 'مباركة القرابين'],
        what: ['The priest covers the offerings and prays over them, entrusting them to God.', 'يغطّي الكاهن القرابين ويصلي عليها مستودعًا إياها لله.'],
        meaning: ['Bread, wine and our own lives are placed in God’s hands before the service continues.', 'الخبز والخمر وحياتنا نفسها توضع في يدي الله قبل أن تستمر الخدمة.'],
        meditate: ['Place something of your own life beside the bread and wine.', 'ضع شيئًا من حياتك بجانب الخبز والخمر.'],
        scripture: [ref('ROM', 12, '1')],
        region: 'altar',
        box: [0.52, 0.82, 0.22, 0.24],
      },
      {
        slug: 'thanksgiving',
        title: ['The prayer of thanksgiving', 'صلاة الشكر'],
        what: ['The priest greets the people and prays the prayer of thanksgiving, then the prayer of the Prothesis over the offerings.', 'يحيّي الكاهن الشعب ويصلي صلاة الشكر ثم صلاة التقدمة على القرابين.'],
        meaning: ['The Liturgy begins with thanks: before asking, the Church thanks God for life, for salvation, and for the privilege of serving.', 'تبدأ الليتورجيا بالشكر: قبل أن تطلب، تشكر الكنيسة الله على الحياة والخلاص ونعمة الخدمة.'],
        meditate: ['Name three things you are grateful for before you ask for anything.', 'سمِّ ثلاثة أشياء تشكر عليها قبل أن تطلب شيئًا.'],
        scripture: [ref('1TH', 5, '18'), ref('PSA', 100, '4')],
        region: 'altar',
        box: [0.5, 0.74, 0.22, 0.3],
      },
      {
        slug: 'absolutions',
        title: ['The absolutions', 'التحاليل'],
        what: ['The priest prays the absolution prayers for himself and for those who serve at the altar.', 'يصلي الكاهن صلوات التحليل عن نفسه وعن الذين يخدمون المذبح.'],
        meaning: ['Those who serve receive mercy first: no one approaches the altar in his own merit.', 'الذين يخدمون ينالون الرحمة أولًا: لا يقترب أحد من المذبح باستحقاقه.'],
        meditate: ['Ask for forgiveness, then begin again with a clear heart.', 'اطلب المغفرة ثم ابدأ من جديد بقلب صافٍ.'],
        scripture: [ref('ISA', 6, '5-7')],
        region: 'altar',
        box: [0.5, 0.66, 0.4, 0.36],
      },
    ],
  ],
  [
    2,
    [
      {
        slug: 'entering-the-word',
        title: ['Entering the Liturgy of the Word', 'الدخول إلى ليتورجيا الكلمة'],
        what: ['The Church gathers for the first half of the Liturgy, in which God speaks through prayer, psalms and the readings.', 'تجتمع الكنيسة للنصف الأول من الليتورجيا، حيث يتكلم الله بالصلاة والمزامير والقراءات.'],
        meaning: ['God addresses His people before He feeds them; the Word prepares the heart for the Sacrament.', 'يخاطب الله شعبه قبل أن يُطعمه؛ والكلمة تهيّئ القلب للسر.'],
        meditate: ['Ask: Lord, what do You want to say to me today?', 'اسأل: يا رب، ماذا تريد أن تقول لي اليوم؟'],
        scripture: [ref('LUK', 24, '27-32')],
        region: 'church',
        box: [0.5, 0.66, 0.55, 0.5],
        basis: 'general',
      },
      {
        slug: 'incense-before-the-pauline',
        title: ['The incense before the Pauline Epistle', 'بخور البولس'],
        what: ['The priest offers incense and prays that the prayers of the people rise before God.', 'يقدّم الكاهن البخور ويصلي أن ترتفع صلوات الشعب أمام الله.'],
        meaning: ['Incense is a sign of prayer rising before God.', 'البخور علامة الصلاة التي ترتفع أمام الله.'],
        meditate: ['Let one prayer you carry rise with the incense.', 'دع صلاة تحملها تصعد مع البخور.'],
        scripture: [ref('PSA', 141, '2'), ref('REV', 8, '3-4')],
        region: 'incense',
        box: [0.5, 0.66, 0.28, 0.3],
      },
      {
        slug: 'procession-of-incense',
        title: ['The procession of incense', 'الطواف بالبخور'],
        what: ['The priest circles the altar with the censer, and the church, the icons and the people are censed.', 'يطوف الكاهن حول المذبح بالمبخرة، ويُبخَّر في الكنيسة والأيقونات والشعب.'],
        meaning: ['The whole church is blessed: the altar, the icons of the saints, and the people, who are themselves God’s temple.', 'تتبارك الكنيسة كلها: المذبح وأيقونات القديسين والشعب الذي هو هيكل الله.'],
        meditate: ['Receive the incense as a blessing on your whole day.', 'اقبل البخور كبركة على يومك كله.'],
        scripture: [ref('MAL', 1, '11'), ref('2CO', 2, '14-15')],
        region: 'incense',
        box: [0.28, 0.74, 0.4, 0.34],
      },
      {
        slug: 'prayers-during-the-procession',
        title: ['Prayers during the procession', 'صلوات أثناء الطواف'],
        what: ['While the censer is carried, the priest prays quietly for the Church, for peace and for those gathered.', 'أثناء الطواف يصلي الكاهن سرًّا من أجل الكنيسة والسلام والمجتمعين.'],
        meaning: ['The procession is also a prayer: the Church intercedes for the world as she moves.', 'الطواف صلاة أيضًا: تشفع الكنيسة من أجل العالم وهي تتحرك.'],
        meditate: ['Pray for someone by name while the incense moves.', 'صلِّ عن شخص بالاسم بينما يتحرك البخور.'],
        scripture: [ref('1TI', 2, '1-2')],
        region: 'incense',
        box: [0.72, 0.74, 0.4, 0.34],
      },
      {
        slug: 'hymn-of-the-censer',
        title: ['The hymn of the censer', 'لحن المبخرة'],
        what: ['The congregation sings a hymn about the censer, whose fragrance the Church applies to prayer.', 'يرتّل الشعب لحنًا عن المبخرة، وتطبّق الكنيسة عطرها على الصلاة.'],
        meaning: ['In Coptic tradition the censer is also a symbol of the Virgin Mary, who carried Christ.', 'في التقليد القبطي المبخرة رمز أيضًا للعذراء مريم التي حملت المسيح.'],
        meditate: ['What do you carry that others can smell: peace or hurry?', 'ماذا تحمل مما يشمّه الآخرون: سلامًا أم عجلة؟'],
        scripture: [ref('REV', 8, '3-4')],
        region: 'incense',
        box: [0.5, 0.6, 0.28, 0.3],
      },
      {
        slug: 'hymn-of-the-intercessions',
        title: ['The hymn of the intercessions', 'لحن الشفاعات'],
        what: ['The choir sings the hymn that asks the intercessions of the Virgin and the saints.', 'ترتّل الجوقة اللحن الذي يطلب شفاعة العذراء والقديسين.'],
        meaning: ['The Church never prays alone; she asks the prayers of those already in God’s presence.', 'الكنيسة لا تصلي وحدها؛ تطلب صلوات الذين هم في حضرة الله.'],
        meditate: ['Remember a saint whose life has helped you.', 'تذكّر قديسًا ساعدتك حياته.'],
        scripture: [ref('HEB', 12, '1'), ref('JAS', 5, '16')],
        region: 'incense',
        box: [0.5, 0.55, 0.3, 0.28],
      },
      {
        slug: 'trisagion',
        title: ['The Trisagion', 'التريصاجيون'],
        what: ['The people sing “Holy God, Holy Mighty, Holy Immortal, have mercy on us” before the readings.', 'يرتّل الشعب «قدوس الله، قدوس القوي، قدوس الحي الذي لا يموت، ارحمنا» قبل القراءات.'],
        meaning: ['The Church joins the angels’ song and confesses the holiness of the Trinity.', 'تنضم الكنيسة إلى ترنيمة الملائكة وتعترف بقداسة الثالوث.'],
        meditate: ['Say the three holies slowly, once each.', 'قل «قدوس» ثلاث مرات ببطء.'],
        scripture: [ref('ISA', 6, '3')],
        region: 'threshold',
        box: [0.5, 0.5, 0.34, 0.26],
        basis: 'general',
      },
      {
        slug: 'pauline-epistle',
        title: ['The Pauline Epistle', 'البولس'],
        what: ['A passage from the epistles of St. Paul is read or chanted.', 'يُقرأ أو يُرتَّل فصل من رسائل القديس بولس.'],
        meaning: ['The teaching of the apostles is received as God’s word to the Church.', 'يُستقبل تعليم الرسل ككلمة الله للكنيسة.'],
        meditate: ['Listen for one sentence to carry out of church.', 'أنصت لجملة واحدة تحملها معك خارج الكنيسة.'],
        scripture: [ref('2TI', 3, '16-17')],
        region: 'iconostasis',
        box: [0.14, 0.75, 0.26, 0.3],
      },
      {
        slug: 'catholic-epistle',
        title: ['The Catholic Epistle', 'الكاثوليكون'],
        what: ['A passage from the general epistles (James, Peter, John or Jude) is read.', 'يُقرأ فصل من الرسائل الجامعة (يعقوب أو بطرس أو يوحنا أو يهوذا).'],
        meaning: ['These letters are addressed to the whole Church and call every believer to a faith that works in love.', 'هذه الرسائل موجّهة إلى الكنيسة كلها وتدعو كل مؤمن إلى إيمان عامل بالمحبة.'],
        meditate: ['Where is faith asking to become action in your week?', 'أين يطلب الإيمان أن يصير عملًا في أسبوعك؟'],
        scripture: [ref('JAS', 1, '22')],
        region: 'iconostasis',
        box: [0.3, 0.75, 0.2, 0.3],
      },
      {
        slug: 'acts',
        title: ['The Acts of the Apostles', 'الإبركسيس'],
        what: ['A passage from the Acts of the Apostles is read.', 'يُقرأ فصل من سفر أعمال الرسل.'],
        meaning: ['The Church hears again how the Holy Spirit gathered and sent the first believers, and sees herself in that story.', 'تسمع الكنيسة من جديد كيف جمع الروح القدس المؤمنين الأولين وأرسلهم، وترى نفسها في القصة.'],
        meditate: ['The same Spirit is at work in this gathering.', 'الروح نفسه يعمل في هذا الاجتماع.'],
        scripture: [ref('ACT', 2, '42')],
        region: 'iconostasis',
        box: [0.9, 0.74, 0.2, 0.3],
      },
      {
        slug: 'synaxarion',
        title: ['The Synaxarion', 'السنكسار'],
        what: ['The life of the saint commemorated that day is read.', 'تُقرأ سيرة القديس الذي يُذكر في ذلك اليوم.'],
        meaning: ['The saints are a “cloud of witnesses”: their lives show the Gospel lived.', 'القديسون «سحابة من الشهود»: تُظهر حياتهم الإنجيل معاشًا.'],
        meditate: ['What would it look like to live that life in your circumstances?', 'كيف تبدو هذه الحياة في ظروفك أنت؟'],
        scripture: [ref('HEB', 12, '1')],
        region: 'iconostasis',
        box: [0.72, 0.75, 0.24, 0.3],
      },
      {
        slug: 'psalm-and-alleluia',
        title: ['The Psalm and the Alleluia', 'المزمور والهليلويا'],
        what: ['A psalm is chanted with the Alleluia, preparing the people to stand for the Gospel.', 'يُرتَّل مزمور مع الهليلويا استعدادًا لوقوف الشعب لسماع الإنجيل.'],
        meaning: ['Praise comes before the Lord’s word: the people answer with joy before He speaks.', 'التسبيح يسبق كلمة الرب: يجيب الشعب بالفرح قبل أن يتكلم.'],
        meditate: ['Let your voice join the others; the psalm is sung together.', 'دع صوتك ينضم إلى الباقين؛ المزمور يُرتَّل معًا.'],
        scripture: [ref('PSA', 95, '1-2')],
        region: 'stair',
        box: [0.5, 0.46, 0.3, 0.2],
        basis: 'general',
      },
      {
        slug: 'holy-gospel',
        title: ['The Holy Gospel', 'الإنجيل المقدس'],
        what: ['The people stand while the Gospel is read, with incense and candles before the book.', 'يقف الشعب بينما يُقرأ الإنجيل، والبخور والشموع أمام الكتاب.'],
        meaning: ['In the Gospel Christ Himself speaks to His people; standing, the Church listens as to the Lord.', 'في الإنجيل يتكلم المسيح نفسه إلى شعبه؛ والكنيسة تنصت واقفةً كمن يسمع الرب.'],
        meditate: ['Hear the passage as addressed to you, by name.', 'اسمع الفصل كأنه موجّه إليك أنت بالاسم.'],
        scripture: [ref('JHN', 20, '31')],
        region: 'christ',
        box: [0.5, 0.17, 0.34, 0.34],
      },
      {
        slug: 'homily',
        title: ['The homily', 'العظة'],
        what: ['The priest explains the readings and applies them to the life of the people.', 'يشرح الكاهن القراءات ويطبّقها على حياة الشعب.'],
        meaning: ['The Word is meant to be understood and lived, not only heard.', 'الكلمة تُفهم وتُعاش وليس فقط تُسمع.'],
        meditate: ['Choose one small thing from the readings to do this week.', 'اختر أمرًا صغيرًا من القراءات لتعمله هذا الأسبوع.'],
        scripture: [ref('NEH', 8, '8')],
        region: 'church',
        box: [0.5, 0.62, 0.5, 0.42],
        basis: 'general',
      },
    ],
  ],
  [
    3,
    [
      {
        slug: 'prayer-of-the-veil',
        title: ['The prayer of the veil', 'صلاة الحجاب'],
        what: ['The priest prays before the sanctuary veil, asking God to accept the people’s prayer and to make the worshippers worthy.', 'يصلي الكاهن أمام ستر الهيكل طالبًا أن يقبل الله صلاة الشعب ويجعل المصلّين مستحقين.'],
        meaning: ['The veil reminds us that we approach a holy God, and that Christ has opened the way.', 'الستر يذكّرنا بأننا نقترب من إله قدوس، وأن المسيح فتح لنا الطريق.'],
        meditate: ['Come near with reverence and with confidence together.', 'اقترب بخشوع وبثقة معًا.'],
        scripture: [ref('HEB', 10, '19-20')],
        region: 'veil',
        box: [0.36, 0.72, 0.2, 0.28],
      },
      {
        slug: 'litany-of-peace',
        title: ['The litany of peace', 'أوشية السلام'],
        what: ['The deacon invites the people to pray for the peace of the Church and the world, and they answer “Lord, have mercy”.', 'يدعو الشماس الشعب للصلاة من أجل سلام الكنيسة والعالم، فيجيبون «كيريي إليصون».'],
        meaning: ['Before the offering, the Church prays for the whole world: peace, unity and safety.', 'قبل التقدمة تصلي الكنيسة من أجل العالم كله: السلام والوحدة والأمان.'],
        meditate: ['Name a place that needs peace.', 'سمِّ مكانًا يحتاج إلى السلام.'],
        scripture: [ref('1TI', 2, '1-4')],
        region: 'threshold',
        box: [0.5, 0.56, 0.45, 0.35],
      },
      {
        slug: 'litany-of-the-fathers',
        title: ['The litany of the fathers', 'أوشية الآباء'],
        what: ['The Church prays for the Pope, the bishops, the clergy and all who shepherd God’s people.', 'تصلي الكنيسة من أجل البابا والأساقفة والكهنة وكل من يرعى شعب الله.'],
        meaning: ['We pray for our shepherds, who “watch for our souls”.', 'نصلي من أجل رعاتنا الذين «يسهرون لأجل نفوسنا».'],
        meditate: ['Pray for your priest by name.', 'صلِّ عن كاهنك بالاسم.'],
        scripture: [ref('HEB', 13, '17')],
        region: 'iconostasis',
        box: [0.25, 0.6, 0.34, 0.3],
      },
      {
        slug: 'litany-of-the-assemblies',
        title: ['The litany of the assemblies', 'أوشية الاجتماعات'],
        what: ['The Church prays for her gatherings and for the blessing of the congregations in every place.', 'تصلي الكنيسة من أجل اجتماعاتها وبركة الجماعات في كل مكان.'],
        meaning: ['No assembly stands alone: every gathering of the faithful belongs to one Body.', 'لا يقف اجتماع وحده: كل اجتماع للمؤمنين ينتمي إلى جسد واحد.'],
        meditate: ['Remember another parish or country at prayer this hour.', 'تذكّر كنيسة أو بلدًا آخر يصلي في هذه الساعة.'],
        scripture: [ref('1CO', 12, '12-13'), ref('MAT', 18, '20')],
        region: 'congregation',
        box: [0.5, 0.68, 0.7, 0.3],
      },
      {
        slug: 'creed',
        title: ['The Orthodox Creed', 'قانون الإيمان'],
        what: ['All stand and confess the faith of the Church in the Creed of Nicaea and Constantinople.', 'يقف الجميع ويعترفون بإيمان الكنيسة في قانون الإيمان النيقاوي القسطنطيني.'],
        meaning: ['Before the Eucharist the people declare what they believe: the faith is the Church’s, shared across the centuries.', 'قبل الإفخارستيا يعلن الشعب ما يؤمن به: الإيمان للكنيسة كلها عبر القرون.'],
        meditate: ['Say each line as your own confession.', 'قل كل سطر كاعترافك أنت.'],
        scripture: [ref('JUD', 1, '3')],
        region: 'church',
        box: [0.5, 0.55, 0.6, 0.45],
      },
      {
        slug: 'washing-of-hands',
        title: ['The washing of hands', 'غسل الأيدي'],
        what: ['The priest washes his hands before approaching the offerings.', 'يغسل الكاهن يديه قبل أن يقترب من القرابين.'],
        meaning: ['An outward washing that points to a cleansed heart.', 'غسل خارجي يشير إلى قلب مطهَّر.'],
        meditate: ['Ask for a clean heart.', 'اطلب قلبًا نقيًّا.'],
        scripture: [ref('PSA', 26, '6'), ref('PSA', 51, '2')],
        region: 'altar',
        box: [0.5, 0.7, 0.24, 0.26],
      },
      {
        slug: 'prayer-of-reconciliation',
        title: ['The prayer of reconciliation', 'صلاة المصالحة'],
        what: ['The priest prays that God reconcile His people to Himself and to one another, and the deacon calls the people to peace.', 'يصلي الكاهن أن يصالح الله شعبه معه ومع بعضهم، ويدعو الشماس الشعب إلى السلام.'],
        meaning: ['No one should bring a gift to the altar with a grudge: reconciliation is the doorway into the Eucharistic prayer.', 'لا ينبغي أن يقدّم أحد قربانه وفي قلبه حقد: المصالحة باب الدخول إلى صلاة الإفخارستيا.'],
        meditate: ['Is there someone you must forgive before you receive?', 'هل من شخص عليك أن تسامحه قبل أن تتناول؟'],
        scripture: [ref('MAT', 5, '23-24')],
        region: 'threshold',
        box: [0.5, 0.47, 0.55, 0.4],
      },
      {
        slug: 'kiss-of-peace',
        title: ['The kiss of peace', 'قبلة السلام'],
        what: ['The priest and the deacons exchange the greeting of peace, and the people greet one another.', 'يتبادل الكاهن والشمامسة تحية السلام، ويحيّي الشعب بعضهم بعضًا.'],
        meaning: ['The peace received from God is shared in the church before the altar.', 'السلام الذي ننالـه من الله نتشاركه في الكنيسة أمام المذبح.'],
        meditate: ['Greet your neighbour with real peace.', 'حيِّ جارك بسلام حقيقي.'],
        scripture: [ref('ROM', 16, '16'), ref('1PE', 5, '14')],
        region: 'congregation',
        box: [0.5, 0.62, 0.55, 0.4],
      },
    ],
  ],
  [
    4,
    [
      {
        slug: 'lift-up-your-hearts',
        title: ['Lift up your hearts', 'ارفعوا قلوبكم'],
        what: ['The great prayer of offering, the anaphora, begins with a short dialogue between the priest and the people.', 'تبدأ صلاة التقدمة الكبرى، الأنافورا، بحوار قصير بين الكاهن والشعب.'],
        meaning: ['We lift our hearts from earthly concerns toward God; the Church ascends in spirit to join the worship of heaven.', 'نرفع قلوبنا من الاهتمامات الأرضية نحو الله؛ وتصعد الكنيسة بالروح لتشترك في عبادة السماء.'],
        meditate: ['Lord, draw my heart to You.', 'يا رب، اجذب قلبي إليك.'],
        scripture: [ref('COL', 3, '1-2'), ref('LAM', 3, '41')],
        region: 'stair',
        box: [0.5, 0.45, 0.5, 0.38],
        dialogue: LIFT,
      },
      {
        slug: 'it-is-fitting-and-right',
        title: ['It is meet and right', 'مستحق وعادل'],
        what: ['The priest invites the people to give thanks and they answer that it is meet and right.', 'يدعو الكاهن الشعب إلى الشكر فيجيبون أنه مستحق وعادل.'],
        meaning: ['Thanksgiving is the heart of the prayer: the Church gives thanks for creation and redemption.', 'الشكر قلب الصلاة: تشكر الكنيسة على الخلق والفداء.'],
        meditate: ['Give thanks aloud, even if quietly.', 'اشكر بصوت مسموع ولو خافتًا.'],
        scripture: [ref('PSA', 136, '1'), ref('EPH', 5, '20')],
        region: 'choir',
        box: [0.5, 0.38, 0.5, 0.3],
        dialogue: THANKS,
      },
      {
        slug: 'watos-aspasmos',
        title: ['Watos Aspasmos', 'الأسبسمس الواطس'],
        what: ['A solemn hymn of the anaphora is sung while the priest continues the prayer of thanksgiving.', 'يُرتَّل لحن مهيب من الأنافورا بينما يواصل الكاهن صلاة الشكر.'],
        meaning: ['The Church’s song and the priest’s prayer move together toward the Preface.', 'تتحرك ترنيمة الكنيسة وصلاة الكاهن معًا نحو الصدر.'],
        meditate: ['Let the chant carry you; you do not need to understand every word.', 'دع اللحن يحملك؛ لا تحتاج أن تفهم كل كلمة.'],
        scripture: [ref('PSA', 150, '1-2')],
        region: 'angels',
        box: [0.2, 0.22, 0.36, 0.34],
        varies: true,
      },
      {
        slug: 'narrative-of-salvation',
        title: ['The narrative of salvation', 'سرد تدبير الخلاص'],
        what: ['The priest recounts God’s works: creation, the fall, the promises, and the coming of Christ. The wording differs in each liturgy.', 'يسرد الكاهن أعمال الله: الخلق والسقوط والمواعيد ومجيء المسيح. وتختلف الصياغة في كل ليتورجية.'],
        meaning: ['The Eucharistic prayer remembers the whole story of salvation, not only the Last Supper.', 'تتذكر صلاة الإفخارستيا قصة الخلاص كلها وليس العشاء الأخير فقط.'],
        meditate: ['Find your own story inside this one.', 'اكتشف قصتك أنت داخل هذه القصة.'],
        scripture: [ref('HEB', 1, '1-2')],
        region: 'angels',
        box: [0.8, 0.22, 0.36, 0.34],
        varies: true,
      },
      {
        slug: 'sanctus',
        title: ['The Sanctus: Holy, holy, holy', 'قدوس قدوس قدوس'],
        what: ['The people sing the angelic hymn “Holy, holy, holy”, joining the song of the heavenly hosts.', 'يرتّل الشعب ترنيمة الملائكة «قدوس قدوس قدوس» منضمًّا إلى تسبيح الجند السماوي.'],
        meaning: ['On earth the Church joins the seraphim and cherubim; the whole creation is called to the praise of God.', 'تنضم الكنيسة على الأرض إلى السيرافيم والكاروبيم؛ والخليقة كلها مدعوّة لتسبيح الله.'],
        meditate: ['For a moment, simply wonder.', 'لحظة واحدة، تعجّب فقط.'],
        scripture: [ref('ISA', 6, '2-3'), ref('REV', 4, '8')],
        region: 'angels',
        box: [0.5, 0.2, 0.8, 0.4],
      },
      {
        slug: 'institution-narrative',
        title: ['The institution narrative', 'كلمات التأسيس'],
        what: ['The priest recalls the Lord’s words at the Last Supper over the bread and the cup, and the people answer “Amen”.', 'يتذكر الكاهن كلمات الرب في العشاء الأخير على الخبز والكأس، ويجيب الشعب «آمين».'],
        meaning: ['The Church does what Christ commanded and trusts His words.', 'تفعل الكنيسة ما أوصى به المسيح وتثق بكلامه.'],
        meditate: ['“Do this in remembrance of Me”: say Amen with your whole heart.', '«اصنعوا هذا لذكري»: قل آمين من كل قلبك.'],
        scripture: [ref('LUK', 22, '19-20'), ref('1CO', 11, '23-26')],
        region: 'christ',
        box: [0.5, 0.17, 0.3, 0.34],
        varies: true,
      },
      {
        slug: 'memorial',
        title: ['The memorial', 'الذكرى'],
        what: ['The priest recalls Christ’s death, resurrection, ascension and coming again, and the people answer in praise.', 'يتذكر الكاهن موت المسيح وقيامته وصعوده ومجيئه الثاني، ويجيب الشعب بالتسبيح.'],
        meaning: ['The memorial is not only remembering: the Church stands before the one saving work of Christ.', 'الذكرى ليست تذكّرًا فقط: تقف الكنيسة أمام عمل المسيح الخلاصي الواحد.'],
        meditate: ['Hold the cross and the empty tomb together.', 'اجمع الصليب والقبر الفارغ معًا.'],
        scripture: [ref('1CO', 11, '26')],
        region: 'christ',
        box: [0.5, 0.14, 0.2, 0.26],
        varies: true,
      },
      {
        slug: 'invocation-of-the-holy-spirit',
        title: ['The invocation of the Holy Spirit', 'استدعاء الروح القدس'],
        what: ['The priest asks the Father to send the Holy Spirit upon the offerings and the people, to make them the Body and Blood of Christ.', 'يطلب الكاهن من الآب أن يرسل الروح القدس على القرابين والشعب ليجعلها جسد المسيح ودمه.'],
        meaning: ['The Church prays and God acts: the Spirit makes the offerings the Body and Blood of Christ and unites those who receive.', 'تصلي الكنيسة والله يعمل: يجعل الروح القرابين جسد المسيح ودمه ويوحّد الذين يتناولون.'],
        meditate: ['Ask for the Spirit: not for what you want, but for what He gives.', 'اطلب الروح: لا ما تريده أنت بل ما يعطيه هو.'],
        scripture: [ref('LUK', 11, '13'), ref('JHN', 6, '53-56')],
        region: 'sky',
        box: [0.5, 0.12, 0.4, 0.22],
        varies: true,
      },
      {
        slug: 'the-intercessions',
        title: ['The intercessions', 'الأواشي'],
        what: ['The priest and deacon pray again for the Church, the world, the needy and the departed, in the presence of the offering.', 'يصلي الكاهن والشماس مرة أخرى من أجل الكنيسة والعالم والمحتاجين والراقدين في حضرة القربان.'],
        meaning: ['Having received the Gift, the Church brings the whole world to Christ.', 'بعد أن نالت العطية تقدّم الكنيسة العالم كله للمسيح.'],
        meditate: ['Bring one burden of the world to this altar.', 'احمل إلى هذا المذبح همًّا واحدًا من هموم العالم.'],
        scripture: [ref('1TI', 2, '1-4')],
        region: 'choir',
        box: [0.3, 0.36, 0.36, 0.26],
        varies: true,
      },
      {
        slug: 'commemoration-of-the-saints',
        title: ['The commemoration of the saints', 'تذكار القديسين'],
        what: ['The priest commemorates the Virgin Mary, the prophets, the apostles, the martyrs and the saints.', 'يذكر الكاهن العذراء والأنبياء والرسل والشهداء والقديسين.'],
        meaning: ['We are never alone in prayer: the whole Church, in heaven and on earth, offers the Liturgy together.', 'لسنا وحدنا في الصلاة: الكنيسة كلها، في السماء وعلى الأرض، تقدّم الليتورجيا معًا.'],
        meditate: ['Thank God for the saints you know.', 'اشكر الله على القديسين الذين تعرفهم.'],
        scripture: [ref('HEB', 12, '1'), ref('REV', 7, '9-10')],
        region: 'saints',
        box: [0.15, 0.42, 0.3, 0.3],
        varies: true,
      },
      {
        slug: 'the-diptychs',
        title: ['The diptychs', 'قراءة المجمع'],
        what: ['The names of the Fathers of the Church and of the faithful departed are read, and the priest prays for them.', 'تُقرأ أسماء آباء الكنيسة والمؤمنين الراقدين ويصلي الكاهن عنهم.'],
        meaning: ['The living and the departed are one communion in Christ.', 'الأحياء والراقدون شركة واحدة في المسيح.'],
        meditate: ['Say the name of someone you miss.', 'اذكر اسم شخص تشتاق إليه.'],
        scripture: [ref('ROM', 14, '8'), ref('LUK', 20, '38')],
        region: 'saints',
        box: [0.85, 0.42, 0.3, 0.3],
        varies: true,
      },
      {
        slug: 'introduction-to-the-fraction',
        title: ['Introduction to the fraction', 'مقدمة التقسيم'],
        what: ['The rite of the fraction begins, with litanies and responses as the priest prepares the Lamb.', 'يبدأ رتبة التقسيم بأواشي وردود بينما يهيّئ الكاهن الحمل.'],
        meaning: ['The Church prepares to receive: the mysteries are about to be shared.', 'تستعد الكنيسة للتناول: الأسرار على وشك أن تُوزَّع.'],
        meditate: ['Quiet your heart; the Lamb is near.', 'اهدئ قلبك؛ الحمل قريب.'],
        scripture: [ref('PSA', 34, '8')],
        region: 'choir',
        box: [0.5, 0.37, 0.4, 0.24],
      },
      {
        slug: 'prayer-of-the-fraction',
        title: ['The prayer of the fraction', 'صلاة التقسيم'],
        what: ['The priest breaks the consecrated Lamb for distribution.', 'يقسم الكاهن الحمل المقدس للتوزيع.'],
        meaning: ['The one Christ is received by many: “we who are many are one bread”.', 'المسيح الواحد ينقسم للكثيرين: «نحن الكثيرين خبز واحد».'],
        meditate: ['You are not receiving alone.', 'أنت لا تتناول وحدك.'],
        scripture: [ref('1CO', 10, '16-17')],
        region: 'christ',
        box: [0.5, 0.28, 0.3, 0.3],
      },
      {
        slug: 'the-lords-prayer',
        title: ['The Lord’s Prayer', 'الصلاة الربانية'],
        what: ['All pray together the prayer Christ taught His disciples, and the priest prays the prayer that follows it.', 'يصلي الجميع معًا الصلاة التي علّمها المسيح لتلاميذه، ويصلي الكاهن الصلاة التي تليها.'],
        meaning: ['As children of the Father we ask for daily bread, forgiveness and deliverance, preparing for Communion.', 'كأبناء للآب نطلب الخبز اليومي والغفران والنجاة، استعدادًا للتناول.'],
        meditate: ['Pray it slowly, as if for the first time.', 'صلِّها ببطء، كأنك تصليها لأول مرة.'],
        scripture: [ref('MAT', 6, '9-13'), ref('LUK', 11, '2-4')],
        region: 'christ',
        box: [0.5, 0.2, 0.5, 0.4],
      },
      {
        slug: 'prayer-of-submission',
        title: ['The prayer of submission to the Father', 'صلاة الخضوع للآب'],
        what: ['The people bow their heads while the priest prays quietly, offering the people’s humility to the Father.', 'ينحني الشعب برؤوسهم بينما يصلي الكاهن سرًّا مقدّمًا خضوع الشعب للآب.'],
        meaning: ['To bow is to place ourselves in God’s hands before Communion.', 'الانحناء هو أن نضع أنفسنا في يدي الله قبل التناول.'],
        meditate: ['Bow your head and leave one worry in His hands.', 'أحنِ رأسك واترك همًّا واحدًا في يديه.'],
        scripture: [ref('PSA', 95, '6')],
        region: 'saints',
        box: [0.4, 0.33, 0.2, 0.22],
      },
      {
        slug: 'prayer-of-absolution',
        title: ['The prayer of absolution to the Father', 'تحليل الآب'],
        what: ['The priest prays for the forgiveness of sins so that the people may receive the Holy Mysteries worthily.', 'يصلي الكاهن من أجل مغفرة الخطايا لكي ينال الشعب الأسرار المقدسة باستحقاق.'],
        meaning: ['Mercy comes before Communion; we receive as forgiven sinners.', 'الرحمة قبل التناول؛ نتناول كخطاة مغفور لهم.'],
        meditate: ['Receive the forgiveness offered here.', 'اقبل المغفرة المقدَّمة هنا.'],
        scripture: [ref('1JN', 1, '9'), ref('1CO', 11, '28')],
        region: 'christ',
        box: [0.5, 0.15, 0.26, 0.3],
      },
      {
        slug: 'the-holies-for-the-holy',
        title: ['The holies for the holy', 'القدسات للقديسين'],
        what: ['The priest raises the Lamb and proclaims “The holies for the holy”, and the people confess the one holiness of the Trinity.', 'يرفع الكاهن الحمل ويعلن «القدسات للقديسين»، ويعترف الشعب بالقداسة الواحدة للثالوث.'],
        meaning: ['God alone is holy; we receive holiness as a gift.', 'الله وحده قدوس؛ ونحن ننال القداسة كعطية.'],
        meditate: ['Do not ask “am I worthy?”; ask “Lord, make me holy.”', 'لا تسأل «هل أنا مستحق؟» بل قل «يا رب قدّسني».'],
        scripture: [ref('1PE', 1, '15-16')],
        region: 'christ',
        box: [0.5, 0.12, 0.22, 0.24],
      },
      {
        slug: 'the-confession',
        title: ['The confession', 'الاعتراف'],
        what: ['Before Communion the priest makes the confession of faith, holding the Lamb, and the people answer “Amen”.', 'قبل التناول يقدّم الكاهن الاعتراف بالإيمان وهو يمسك الحمل، ويجيب الشعب «آمين».'],
        meaning: ['Communion is received in faith: the Church confesses what she is about to receive.', 'التناول يُنال بالإيمان: تعترف الكنيسة بما توشك أن تنال.'],
        meditate: ['Say “Amen” as your own “I believe”.', 'قل «آمين» كأنها «أؤمن» الخاصة بك.'],
        scripture: [ref('JHN', 6, '54-55'), ref('MAT', 16, '16')],
        region: 'christ',
        box: [0.5, 0.15, 0.2, 0.26],
      },
    ],
  ],
  [
    5,
    [
      {
        slug: 'before-the-distribution',
        title: ['Prayers before the distribution', 'صلوات ما قبل التوزيع'],
        what: ['The priest prays for those who will receive, and the Church prepares in silence and awe.', 'يصلي الكاهن من أجل الذين سيتناولون، وتستعد الكنيسة في سكون ورهبة.'],
        meaning: ['The last moments of preparation: silence before the Gift.', 'اللحظات الأخيرة من الاستعداد: سكوت أمام العطية.'],
        meditate: ['Be still; He is coming to you.', 'اسكن؛ هو آتٍ إليك.'],
        scripture: [ref('PSA', 34, '8')],
        region: 'choir',
        box: [0.5, 0.3, 0.34, 0.36],
      },
      {
        slug: 'the-distribution',
        title: ['The distribution of the Holy Mysteries', 'توزيع الأسرار المقدسة'],
        what: ['Those who have prepared come forward in order and receive the Body and Blood of Christ while the choir sings.', 'يتقدم الذين استعدّوا بترتيب وينالون جسد المسيح ودمه بينما ترتّل الجوقة.'],
        meaning: ['Christ gives Himself: union with Him and with one another in His Body.', 'يعطي المسيح نفسه: اتحاد به وببعضنا في جسده.'],
        meditate: ['Receive Him, and then simply stay with Him.', 'تناولْه ثم ابقَ معه فحسب.'],
        scripture: [ref('JHN', 6, '56'), ref('1CO', 10, '16')],
        region: 'stair',
        box: [0.5, 0.5, 0.3, 0.22],
      },
      {
        slug: 'psalm-150',
        title: ['Psalm 150', 'المزمور المئة والخمسون'],
        what: ['As the people receive Communion, Psalm 150 is sung in praise.', 'بينما يتناول الشعب يُرتَّل المزمور المئة والخمسون تسبيحًا.'],
        meaning: ['Communion leads to praise: everything that has breath praises the Lord.', 'التناول يقود إلى التسبيح: كل نسمة تسبّح الرب.'],
        meditate: ['Let your thanks become praise.', 'دع شكرك يصير تسبيحًا.'],
        scripture: [ref('PSA', 150)],
        region: 'angels',
        box: [0.8, 0.2, 0.4, 0.34],
      },
      {
        slug: 'thanksgiving-after-communion',
        title: ['Thanksgiving after Communion', 'الشكر بعد التناول'],
        what: ['The priest prays quiet prayers of thanksgiving and submission to the Father for the Holy Mysteries.', 'يصلي الكاهن سرًّا صلوات شكر وخضوع للآب على الأسرار المقدسة.'],
        meaning: ['Gratitude seals the encounter: we thank God for what we cannot repay.', 'الشكر يختم اللقاء: نشكر الله على ما لا نستطيع أن نكافئ عنه.'],
        meditate: ['“What shall I render to the Lord?”', '«ماذا أرد للرب؟»'],
        scripture: [ref('PSA', 116, '12-13')],
        region: 'angels',
        box: [0.2, 0.2, 0.4, 0.34],
      },
      {
        slug: 'dismissal',
        title: ['The dismissal and the concluding canon', 'الانصراف والقانون الختامي'],
        what: ['The priest completes the service with the concluding prayers, and the deacons dismiss the people.', 'يختم الكاهن الخدمة بالصلوات الختامية ويصرف الشمامسة الشعب.'],
        meaning: ['The Liturgy ends by sending the people back into the world.', 'تنتهي الليتورجيا بإرسال الشعب إلى العالم.'],
        meditate: ['Take one thing from this hour into your home.', 'احمل شيئًا من هذه الساعة إلى بيتك.'],
        scripture: [ref('MRK', 5, '19')],
        region: 'heaven',
        box: [0.5, 0.25, 0.8, 0.42],
      },
      {
        slug: 'the-blessing',
        title: ['The blessing: go in peace', 'البركة الأخيرة: امضوا بسلام'],
        what: ['The priest blesses the people and sends them in peace.', 'يبارك الكاهن الشعب ويصرفهم بسلام.'],
        meaning: ['Heaven is not left behind: the grace of the Liturgy is carried into the week and the world.', 'السماء لا تُترك خلفنا: نعمة الليتورجيا تُحمل إلى الأسبوع والعالم.'],
        meditate: ['Go in peace, and be a blessing.', 'امضِ بسلام وكن بركة.'],
        scripture: [ref('NUM', 6, '24-26'), ref('LUK', 24, '50-53')],
        region: 'heaven',
        box: [0.5, 0.235, 0.24, 0.46],
      },
    ],
  ],
];

export const STOPS: readonly Stop[] = SOURCE.flatMap(([chapter, rows]) => rows.map((row) => ({ chapter, ...row }))).map((row, index) => {
  const { chapter, slug, title, what, meaning, meditate, scripture, region, box, dialogue, varies, basis } = row;
  return {
    n: index + 1,
    slug,
    chapter,
    title: bi(title),
    what: bi(what),
    meaning: bi(meaning),
    meditate: bi(meditate),
    scripture,
    region,
    box,
    ...(dialogue === undefined ? {} : { dialogue }),
    ...(varies === undefined ? {} : { varies }),
    basis: basis ?? 'outline',
  };
});

export const LITURGIES = [
  { id: 'basil', title: { en: 'St. Basil', ar: 'القداس الباسيلي' } },
  { id: 'gregory', title: { en: 'St. Gregory', ar: 'القداس الغريغوري' } },
  { id: 'cyril', title: { en: 'St. Cyril', ar: 'القداس الكيرلسي' } },
] as const;
export type LiturgyId = (typeof LITURGIES)[number]['id'];

export function stopHash(stop: Stop): string {
  return `${stop.n}-${stop.slug}`;
}
