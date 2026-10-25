/**
 * The Holy Mass journey: 52 stops in five chapters, with the scene of each chapter.
 *
 * Status of this content (docs/HOLY_MASS.md): the order and the titles follow the outline of
 * copticorthodoxliturgy.com (headings only; a few connecting stops are marked basis "general").
 * The explanations are original, short, educational texts written for this site and have not yet been
 * reviewed by clergy. The prayer texts live in content/liturgy/ (each with its source); the one-sentence
 * summaries of what each speaker does are drafts (holy-mass-says.ts).
 */

import { SAYS } from './holy-mass-says.ts';
import { MEANING, PARAGRAPH_BREAK } from './holy-mass-meaning.ts';

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


export interface Chapter {
  readonly id: 1 | 2 | 3 | 4 | 5;
  readonly title: Bilingual;
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
  /** One plain sentence per speaker about what they do or say here: a draft summary, not a prayer text. */
  readonly says: { readonly priest?: Bilingual; readonly deacon?: Bilingual; readonly people?: Bilingual };
  /** The text of this part differs among St. Basil, St. Gregory and St. Cyril. */
  readonly varies?: true;
  /** Where the stop comes from: the reference outline, or a connecting stop added for the journey. */
  readonly basis: 'outline' | 'general';
}

export const CHAPTERS: readonly Chapter[] = [
  { id: 1, title: { en: 'Preparation', ar: 'التحضير' } },
  { id: 2, title: { en: 'The Liturgy of the Word', ar: 'قداس الكلمة' } },
  { id: 3, title: { en: 'Reconciliation and Peace', ar: 'المصالحة والسلام' } },
  { id: 4, title: { en: 'The Liturgy of the Faithful', ar: 'قداس المؤمنين' } },
  { id: 5, title: { en: 'Communion and Thanksgiving', ar: 'التناول والشكر' } },
];

/** The five scenes of the film that the camera flies through, one per chapter of the Liturgy. */
export const SCENES: Readonly<Record<Chapter['id'], { title: Bilingual; note: Bilingual }>> = {
  1: {
    title: { en: 'The sanctuary screen', ar: 'حامل الأيقونات' },
    note: {
      en: 'The wooden screen of icons (the iconostasis) with its three curtained doors: the Last Supper with the apostles across the top, the Crucifixion above it with the Virgin and St John. The priest enters the sanctuary barefoot, as Moses did at the burning bush (Exodus 3:5); his sandals stay at the step.',
      ar: 'حامل الأيقونات الخشبي بأبوابه الثلاثة وستائرها: العشاء الأخير والرسل في الصف العلوي، وفوقه الصلب مع العذراء ويوحنا. يدخل الكاهن الهيكل حافيًا كما فعل موسى عند العليقة (خروج ٣: ٥)، وحذاؤه يبقى عند الدرجة.',
    },
  },
  2: {
    title: { en: 'The choir and the Word', ar: 'الخورس والكلمة' },
    note: {
      en: 'The choir area (khorus), raised on three steps behind a lattice fence, with its lecterns and candelabra. A deacon reads the Gospel while others keep time with cymbals and a triangle, the only instruments of the Coptic liturgy. Men sit on the left, women on the right.',
      ar: 'الخورس مرتفع على ثلاث درجات خلف سياج مشبّك، وفيه المنجليات والشمعدانات. يقرأ الشماس الإنجيل بينما يضبط الآخرون الإيقاع بالدفّ والمثلث، وهما الآلتان الوحيدتان في القداس القبطي. يجلس الرجال على اليسار والنساء على اليمين.',
    },
  },
  3: {
    title: { en: 'The nave at the kiss of peace', ar: 'الصحن عند قبلة السلام' },
    note: {
      en: 'The nave seen from the door: a colonnade with hanging lamps, men and women turning to one another to clasp hands in peace, deacons with censers, and the priest lifting the cross at the open door of the sanctuary.',
      ar: 'الصحن من جهة الباب: صفّ أعمدة وقناديل معلّقة، ورجال ونساء يتبادلون السلام بالأيدي، وشمامسة بالمجامر، والكاهن يرفع الصليب عند باب الهيكل المفتوح.',
    },
  },
  4: {
    title: { en: 'The haikal and the altar', ar: 'الهيكل والمذبح' },
    note: {
      en: 'The altar stands free beneath its ciborium, a small painted dome on four pillars crowned with a cross, with Christ and the four evangelists painted on it. Behind it, in the apse, Christ is enthroned among the four living creatures, with Alpha and Omega (Revelation 4–5).',
      ar: 'يقف المذبح حرًّا تحت القبة الصغيرة المحمولة على أربعة أعمدة وعليها صليب، وقد رُسم عليها السيد المسيح والإنجيليون الأربعة. وخلفه في الحنية السيد المسيح جالسًا على العرش بين الكائنات الحية الأربعة، مع الألف والياء (رؤيا ٤–٥).',
    },
  },
  5: {
    title: { en: 'Communion and heaven', ar: 'التناول والسماء' },
    note: {
      en: 'Communion at the central door of the sanctuary, and above the church heaven opens: the four living creatures, six-winged seraphim, angels with censers, the twenty-four elders, and Christ enthroned with the Virgin and St John the Baptist. A symbolic meditation, not a literal picture of heaven.',
      ar: 'التناول عند الباب الأوسط للهيكل، وفوق الكنيسة تنفتح السماء: الكائنات الحية الأربعة والسرافيم ذوو الستة أجنحة وملائكة بالمجامر والأربعة والعشرون قسيسًا، والسيد المسيح جالسًا على العرش مع العذراء ويوحنا المعمدان. تأمل رمزي وليس صورة حرفية للسماء.',
    },
  },
};

type Row = {
  slug: string;
  title: [string, string];
  what: [string, string];
  meditate: [string, string];
  scripture: ScriptureRef[];
  varies?: true;
  basis?: 'general';
};

const ref = (book: string, chapter: number, verses?: string): ScriptureRef => (verses === undefined ? { book, chapter } : { book, chapter, verses });
const bi = ([en, ar]: readonly [string, string]): Bilingual => ({ en, ar });

/** [chapter, rows] in liturgical order. Stop numbers are assigned by position. */
const SOURCE: readonly (readonly [Chapter['id'], readonly Row[]])[] = [
  [
    1,
    [
      {
        slug: 'vesting',
        title: ['Vesting and preparing the altar', 'لبس الثياب الكهنوتية وتهيئة المذبح'],
        what: ['Before the people gather, the priest puts on the vestments and prepares the altar and the vessels in prayer.', 'قبل اجتماع الشعب يلبس الكاهن الثياب الكهنوتية ويهيّئ المذبح والأواني المقدسة بالصلاة.'],
        meditate: ['Come to this prayer unhurried; ask to be made ready.', 'تعالَ إلى هذه الصلاة بلا عجلة، واطلب أن تكون مستعدًّا.'],
        scripture: [ref('PSA', 132, '9')],
      },
      {
        slug: 'choosing-the-lamb',
        title: ['Choosing the Lamb', 'اختيار الحمل'],
        what: ['From the loaves offered, the priest chooses the one that will become the Lamb, and the wine for the chalice is prepared.', 'من بين القرابين يختار الكاهن الخبزة التي تصير الحمل، ويُهيَّأ الخمر للكأس.'],
        meditate: ['What do I offer: the best of my time, or what is left over?', 'ماذا أقدّم: أفضل وقتي أم ما يتبقّى منه؟'],
        scripture: [ref('1PE', 1, '18-19'), ref('EXO', 12, '5')],
      },
      {
        slug: 'procession-of-the-lamb',
        title: ['The procession of the Lamb', 'زفة الحمل'],
        what: ['The Lamb and the chalice are carried in procession around the altar and set upon it while the people sing.', 'يُطاف بالحمل والكأس حول المذبح ثم يوضعان عليه والشعب يرتّل.'],
        meditate: ['Follow Him: ask where He is leading you today.', 'اتبعه: اسأله إلى أين يقودك اليوم.'],
        scripture: [ref('JHN', 1, '29'), ref('ISA', 53, '7')],
      },
      {
        slug: 'blessing-of-the-oblations',
        title: ['The blessing of the oblations', 'مباركة القرابين'],
        what: ['The priest covers the offerings and prays over them, entrusting them to God.', 'يغطّي الكاهن القرابين ويصلي عليها مستودعًا إياها لله.'],
        meditate: ['Place something of your own life beside the bread and wine.', 'ضع شيئًا من حياتك بجانب الخبز والخمر.'],
        scripture: [ref('ROM', 12, '1')],
      },
      {
        slug: 'thanksgiving',
        title: ['The prayer of thanksgiving', 'صلاة الشكر'],
        what: ['The priest greets the people and prays the prayer of thanksgiving, then the prayer of the Prothesis over the offerings.', 'يحيّي الكاهن الشعب ويصلي صلاة الشكر ثم صلاة التقدمة على القرابين.'],
        meditate: ['Name three things you are grateful for before you ask for anything.', 'سمِّ ثلاثة أشياء تشكر عليها قبل أن تطلب شيئًا.'],
        scripture: [ref('1TH', 5, '18'), ref('PSA', 100, '4')],
      },
      {
        slug: 'absolutions',
        title: ['The absolutions', 'التحاليل'],
        what: ['The priest prays the absolution prayers for himself and for those who serve at the altar.', 'يصلي الكاهن صلوات التحليل عن نفسه وعن الذين يخدمون المذبح.'],
        meditate: ['Ask for forgiveness, then begin again with a clear heart.', 'اطلب المغفرة ثم ابدأ من جديد بقلب صافٍ.'],
        scripture: [ref('ISA', 6, '5-7')],
      },
    ],
  ],
  [
    2,
    [
      {
        slug: 'entering-the-word',
        title: ['Entering the Liturgy of the Word', 'الدخول إلى قداس الكلمة'],
        what: ['The Church gathers for the first half of the Liturgy, in which God speaks through prayer, psalms and the readings.', 'تجتمع الكنيسة للنصف الأول من القداس الإلهي، حيث يتكلم الله بالصلاة والمزامير والقراءات.'],
        meditate: ['Ask: Lord, what do You want to say to me today?', 'اسأل: يا رب، ماذا تريد أن تقول لي اليوم؟'],
        scripture: [ref('LUK', 24, '27-32')],
        basis: 'general',
      },
      {
        slug: 'incense-before-the-pauline',
        title: ['The incense before the Pauline Epistle', 'بخور البولس'],
        what: ['The priest offers incense and prays that the prayers of the people rise before God.', 'يرفع الكاهن البخور ويصلي أن ترتفع صلوات الشعب أمام الله.'],
        meditate: ['Let one prayer you carry rise with the incense.', 'دع صلاة تحملها تصعد مع البخور.'],
        scripture: [ref('PSA', 141, '2'), ref('REV', 8, '3-4')],
      },
      {
        slug: 'procession-of-incense',
        title: ['The procession of incense', 'الطواف بالبخور'],
        what: ['The priest circles the altar with the censer, and the church, the icons and the people are censed.', 'يطوف الكاهن حول المذبح بالمبخرة، ويُبخَّر في الكنيسة والأيقونات والشعب.'],
        meditate: ['Receive the incense as a blessing on your whole day.', 'اقبل البخور كبركة على يومك كله.'],
        scripture: [ref('MAL', 1, '11'), ref('2CO', 2, '14-15')],
      },
      {
        slug: 'prayers-during-the-procession',
        title: ['Prayers during the procession', 'صلوات أثناء الطواف'],
        what: ['While the censer is carried, the priest prays quietly for the Church, for peace and for those gathered.', 'أثناء الطواف يصلي الكاهن سرًّا من أجل الكنيسة والسلام والمجتمعين.'],
        meditate: ['Pray for someone by name while the incense moves.', 'صلِّ عن شخص بالاسم بينما يتحرك البخور.'],
        scripture: [ref('1TI', 2, '1-2')],
      },
      {
        slug: 'hymn-of-the-censer',
        title: ['The hymn of the censer', 'لحن المبخرة'],
        what: ['The congregation sings a hymn about the censer, whose fragrance the Church applies to prayer.', 'يرتّل الشعب لحنًا عن المبخرة، وتشبّه الكنيسة رائحته الزكية بالصلاة.'],
        meditate: ['What do you carry that others can smell: peace or hurry?', 'ماذا تحمل مما يشمّه الآخرون: سلامًا أم عجلة؟'],
        scripture: [ref('REV', 8, '3-4')],
      },
      {
        slug: 'hymn-of-the-intercessions',
        title: ['The hymn of the intercessions', 'لحن الشفاعات'],
        what: ['The choir sings the hymn that asks the intercessions of the Virgin and the saints.', 'ترتّل الجوقة اللحن الذي يطلب شفاعة العذراء والقديسين.'],
        meditate: ['Remember a saint whose life has helped you.', 'تذكّر قديسًا ساعدتك حياته.'],
        scripture: [ref('HEB', 12, '1'), ref('JAS', 5, '16')],
      },
      {
        slug: 'trisagion',
        title: ['The Trisagion', 'التريصاجيون'],
        what: ['The people sing “Holy God, Holy Mighty, Holy Immortal, have mercy on us” before the readings.', 'يرتّل الشعب «قدوس الله، قدوس القوي، قدوس الحي الذي لا يموت، ارحمنا» قبل القراءات.'],
        meditate: ['Say the three holies slowly, once each.', 'قل «قدوس» ثلاث مرات ببطء.'],
        scripture: [ref('ISA', 6, '3')],
        basis: 'general',
      },
      {
        slug: 'pauline-epistle',
        title: ['The Pauline Epistle', 'البولس'],
        what: ['A passage from the epistles of St. Paul is read or chanted.', 'يُقرأ أو يُرتَّل فصل من رسائل معلمنا بولس الرسول.'],
        meditate: ['Listen for one sentence to carry out of church.', 'أنصت لجملة واحدة تحملها معك خارج الكنيسة.'],
        scripture: [ref('2TI', 3, '16-17')],
      },
      {
        slug: 'catholic-epistle',
        title: ['The Catholic Epistle', 'الكاثوليكون'],
        what: ['A passage from the general epistles (James, Peter, John or Jude) is read.', 'يُقرأ فصل من الرسائل الجامعة (يعقوب أو بطرس أو يوحنا أو يهوذا).'],
        meditate: ['Where is faith asking to become action in your week?', 'أين يطلب الإيمان أن يصير عملًا في أسبوعك؟'],
        scripture: [ref('JAS', 1, '22')],
      },
      {
        slug: 'acts',
        title: ['The Acts of the Apostles', 'الإبركسيس'],
        what: ['A passage from the Acts of the Apostles is read.', 'يُقرأ فصل من أعمال آبائنا الرسل الأطهار.'],
        meditate: ['The same Spirit is at work in this gathering.', 'الروح القدس نفسه يعمل في هذا الاجتماع.'],
        scripture: [ref('ACT', 2, '42')],
      },
      {
        slug: 'synaxarion',
        title: ['The Synaxarion', 'السنكسار'],
        what: ['The life of the saint commemorated that day is read.', 'تُقرأ سيرة القديس الذي يُذكر في ذلك اليوم.'],
        meditate: ['What would it look like to live that life in your circumstances?', 'كيف تبدو هذه الحياة في ظروفك أنت؟'],
        scripture: [ref('HEB', 12, '1')],
      },
      {
        slug: 'psalm-and-alleluia',
        title: ['The Psalm and the Alleluia', 'المزمور والهليلويا'],
        what: ['A psalm is chanted with the Alleluia, preparing the people to stand for the Gospel.', 'يُرتَّل مزمور مع الهليلويا استعدادًا لوقوف الشعب لسماع الإنجيل.'],
        meditate: ['Let your voice join the others; the psalm is sung together.', 'دع صوتك ينضم إلى الباقين؛ المزمور يُرتَّل معًا.'],
        scripture: [ref('PSA', 95, '1-2')],
        basis: 'general',
      },
      {
        slug: 'holy-gospel',
        title: ['The Holy Gospel', 'الإنجيل المقدس'],
        what: ['The people stand while the Gospel is read, with incense and candles before the book.', 'يقف الشعب بينما يُقرأ الإنجيل، والبخور والشموع أمام الكتاب.'],
        meditate: ['Hear the passage as addressed to you, by name.', 'اسمع الفصل كأنه موجّه إليك أنت بالاسم.'],
        scripture: [ref('JHN', 20, '31')],
      },
      {
        slug: 'homily',
        title: ['The homily', 'العظة'],
        what: ['The priest explains the readings and applies them to the life of the people.', 'يشرح الكاهن القراءات ويطبّقها على حياة الشعب.'],
        meditate: ['Choose one small thing from the readings to do this week.', 'اختر أمرًا صغيرًا من القراءات لتعمله هذا الأسبوع.'],
        scripture: [ref('NEH', 8, '8')],
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
        what: ['The priest prays before the sanctuary veil, asking God to accept the people’s prayer and to make the worshippers worthy.', 'يصلي الكاهن أمام حجاب الهيكل طالبًا أن يقبل الله صلاة الشعب ويجعل المصلّين مستحقين.'],
        meditate: ['Come near with reverence and with confidence together.', 'اقترب بخشوع وبثقة معًا.'],
        scripture: [ref('HEB', 10, '19-20')],
      },
      {
        slug: 'litany-of-peace',
        title: ['The litany of peace', 'أوشية السلامة'],
        what: ['The deacon invites the people to pray for the peace of the Church and the world, and they answer “Lord, have mercy”.', 'يدعو الشماس الشعب للصلاة من أجل سلام الكنيسة والعالم، فيجيبون «كيرياليصون».'],
        meditate: ['Name a place that needs peace.', 'سمِّ مكانًا يحتاج إلى السلام.'],
        scripture: [ref('1TI', 2, '1-4')],
      },
      {
        slug: 'litany-of-the-fathers',
        title: ['The litany of the fathers', 'أوشية الآباء'],
        what: ['The Church prays for the Pope, the bishops, the clergy and all who shepherd God’s people.', 'تصلي الكنيسة من أجل البابا والأساقفة والكهنة وكل من يرعى شعب الله.'],
        meditate: ['Pray for your priest by name.', 'صلِّ عن كاهنك بالاسم.'],
        scripture: [ref('HEB', 13, '17')],
      },
      {
        slug: 'litany-of-the-assemblies',
        title: ['The litany of the assemblies', 'أوشية الاجتماعات'],
        what: ['The Church prays for her gatherings and for the blessing of the congregations in every place.', 'تصلي الكنيسة من أجل اجتماعاتها وبركة الجماعات في كل مكان.'],
        meditate: ['Remember another parish or country at prayer this hour.', 'تذكّر كنيسة أو بلدًا آخر يصلي في هذه الساعة.'],
        scripture: [ref('1CO', 12, '12-13'), ref('MAT', 18, '20')],
      },
      {
        slug: 'creed',
        title: ['The Orthodox Creed', 'قانون الإيمان'],
        what: ['All stand and confess the faith of the Church in the Creed of Nicaea and Constantinople.', 'يقف الجميع ويعترفون بإيمان الكنيسة في قانون الإيمان النيقاوي القسطنطيني.'],
        meditate: ['Say each line as your own confession.', 'قل كل سطر كاعترافك أنت.'],
        scripture: [ref('JUD', 1, '3')],
      },
      {
        slug: 'washing-of-hands',
        title: ['The washing of hands', 'غسل الأيدي'],
        what: ['The priest washes his hands before approaching the offerings.', 'يغسل الكاهن يديه قبل أن يقترب من القرابين.'],
        meditate: ['Ask for a clean heart.', 'اطلب قلبًا نقيًّا.'],
        scripture: [ref('PSA', 26, '6'), ref('PSA', 51, '2')],
      },
      {
        slug: 'prayer-of-reconciliation',
        title: ['The prayer of reconciliation', 'صلاة الصلح'],
        what: ['The priest prays that God reconcile His people to Himself and to one another, and the deacon calls the people to peace.', 'يصلي الكاهن أن يصالح الله شعبه معه ومع بعضهم بعضًا، ويدعو الشماس الشعب إلى تبادل السلام.'],
        meditate: ['Is there someone you must forgive before you receive?', 'هل من شخص عليك أن تسامحه قبل أن تتناول؟'],
        scripture: [ref('MAT', 5, '23-24')],
      },
      {
        slug: 'kiss-of-peace',
        title: ['The kiss of peace', 'قبلة السلام'],
        what: ['The priest and the deacons exchange the greeting of peace, and the people greet one another.', 'يتبادل الكاهن والشمامسة تحية السلام، ويحيّي الشعب بعضهم بعضًا.'],
        meditate: ['Greet your neighbour with real peace.', 'حيِّ جارك بسلام حقيقي.'],
        scripture: [ref('ROM', 16, '16'), ref('1PE', 5, '14')],
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
        meditate: ['Lord, draw my heart to You.', 'يا رب، اجذب قلبي إليك.'],
        scripture: [ref('COL', 3, '1-2'), ref('LAM', 3, '41')],
      },
      {
        slug: 'it-is-fitting-and-right',
        title: ['It is meet and right', 'مستحق وعادل'],
        what: ['The priest invites the people to give thanks and they answer that it is meet and right.', 'يدعو الكاهن الشعب إلى الشكر فيجيبون أنه مستحق وعادل.'],
        meditate: ['Give thanks aloud, even if quietly.', 'اشكر بصوت مسموع ولو خافتًا.'],
        scripture: [ref('PSA', 136, '1'), ref('EPH', 5, '20')],
      },
      {
        slug: 'watos-aspasmos',
        title: ['Watos Aspasmos', 'الأسبسمس الواطس'],
        what: ['A solemn hymn of the anaphora is sung while the priest continues the prayer of thanksgiving.', 'يُرتَّل لحن مهيب من الأنافورا بينما يواصل الكاهن صلاة الشكر.'],
        meditate: ['Let the chant carry you; you do not need to understand every word.', 'دع اللحن يحملك؛ لا تحتاج أن تفهم كل كلمة.'],
        scripture: [ref('PSA', 150, '1-2')],
        varies: true,
      },
      {
        slug: 'narrative-of-salvation',
        title: ['The narrative of salvation', 'سرد تدبير الخلاص'],
        what: ['The priest recounts God’s works: creation, the fall, the promises, and the coming of Christ. The wording differs in each liturgy.', 'يسرد الكاهن أعمال الله: الخلق والسقوط والمواعيد ومجيء المسيح. وتختلف الصياغة في كل قداس.'],
        meditate: ['Find your own story inside this one.', 'اكتشف قصتك أنت داخل هذه القصة.'],
        scripture: [ref('HEB', 1, '1-2')],
        varies: true,
      },
      {
        slug: 'sanctus',
        title: ['The Sanctus: Holy, holy, holy', 'قدوس قدوس قدوس'],
        what: ['The people sing the angelic hymn “Holy, holy, holy”, joining the song of the heavenly hosts.', 'يرتّل الشعب تسبحة الملائكة «قدوس قدوس قدوس» منضمًّا إلى تسبيح الطغمات السمائية.'],
        meditate: ['For a moment, simply wonder.', 'لحظة واحدة، تعجّب فقط.'],
        scripture: [ref('ISA', 6, '2-3'), ref('REV', 4, '8')],
      },
      {
        slug: 'institution-narrative',
        title: ['The institution narrative', 'كلمات التأسيس'],
        what: ['The priest recalls the Lord’s words at the Last Supper over the bread and the cup, and the people answer “Amen”.', 'يتذكر الكاهن كلمات الرب في العشاء الأخير على الخبز والكأس، ويجيب الشعب «آمين».'],
        meditate: ['“Do this in remembrance of Me”: say Amen with your whole heart.', '«اصنعوا هذا لذكري»: قل آمين من كل قلبك.'],
        scripture: [ref('LUK', 22, '19-20'), ref('1CO', 11, '23-26')],
        varies: true,
      },
      {
        slug: 'memorial',
        title: ['The memorial', 'الذكرى'],
        what: ['The priest recalls Christ’s death, resurrection, ascension and coming again, and the people answer in praise.', 'يتذكر الكاهن موت المسيح وقيامته وصعوده ومجيئه الثاني، ويجيب الشعب بالتسبيح.'],
        meditate: ['Hold the cross and the empty tomb together.', 'اجمع الصليب والقبر الفارغ معًا.'],
        scripture: [ref('1CO', 11, '26')],
        varies: true,
      },
      {
        slug: 'invocation-of-the-holy-spirit',
        title: ['The invocation of the Holy Spirit', 'استدعاء الروح القدس'],
        what: ['The priest asks the Father to send the Holy Spirit upon the offerings and the people, to make them the Body and Blood of Christ.', 'يطلب الكاهن من الآب أن يرسل الروح القدس على القرابين والشعب ليجعلها جسد المسيح ودمه.'],
        meditate: ['Ask for the Spirit: not for what you want, but for what He gives.', 'اطلب الروح: لا ما تريده أنت بل ما يعطيه هو.'],
        scripture: [ref('LUK', 11, '13'), ref('JHN', 6, '53-56')],
        varies: true,
      },
      {
        slug: 'the-intercessions',
        title: ['The intercessions', 'الأواشي'],
        what: ['The priest and deacon pray again for the Church, the world, the needy and the departed, in the presence of the offering.', 'يصلي الكاهن والشماس مرة أخرى من أجل الكنيسة والعالم والمحتاجين والراقدين في حضرة القربان.'],
        meditate: ['Bring one burden of the world to this altar.', 'احمل إلى هذا المذبح همًّا واحدًا من هموم العالم.'],
        scripture: [ref('1TI', 2, '1-4')],
        varies: true,
      },
      {
        slug: 'commemoration-of-the-saints',
        title: ['The commemoration of the saints', 'تذكار القديسين'],
        what: ['The priest commemorates the Virgin Mary, the prophets, the apostles, the martyrs and the saints.', 'يذكر الكاهن العذراء والأنبياء والرسل والشهداء والقديسين.'],
        meditate: ['Thank God for the saints you know.', 'اشكر الله على القديسين الذين تعرفهم.'],
        scripture: [ref('HEB', 12, '1'), ref('REV', 7, '9-10')],
        varies: true,
      },
      {
        slug: 'the-diptychs',
        title: ['The diptychs', 'قراءة المجمع'],
        what: ['The names of the Fathers of the Church and of the faithful departed are read, and the priest prays for them.', 'تُقرأ أسماء آباء الكنيسة والمؤمنين الراقدين ويصلي الكاهن عنهم.'],
        meditate: ['Say the name of someone you miss.', 'اذكر اسم شخص تشتاق إليه.'],
        scripture: [ref('ROM', 14, '8'), ref('LUK', 20, '38')],
        varies: true,
      },
      {
        slug: 'introduction-to-the-fraction',
        title: ['Introduction to the fraction', 'مقدمة القسمة'],
        what: ['The rite of the fraction begins, with litanies and responses as the priest prepares the Lamb.', 'تبدأ رتبة القسمة بأواشٍ وردود بينما يهيّئ الكاهن الحمل.'],
        meditate: ['Quiet your heart; the Lamb is near.', 'هدِّئ قلبك؛ الحمل قريب.'],
        scripture: [ref('PSA', 34, '8')],
      },
      {
        slug: 'prayer-of-the-fraction',
        title: ['The prayer of the fraction', 'صلاة القسمة'],
        what: ['The priest breaks the consecrated Lamb for distribution.', 'يقسم الكاهن الحمل المقدس للتوزيع.'],
        meditate: ['You are not receiving alone.', 'أنت لا تتناول وحدك.'],
        scripture: [ref('1CO', 10, '16-17')],
      },
      {
        slug: 'the-lords-prayer',
        title: ['The Lord’s Prayer', 'الصلاة الربانية'],
        what: ['All pray together the prayer Christ taught His disciples, and the priest prays the prayer that follows it.', 'يصلي الجميع معًا الصلاة التي علّمها المسيح لتلاميذه، ويصلي الكاهن الصلاة التي تليها.'],
        meditate: ['Pray it slowly, as if for the first time.', 'صلِّها ببطء، كأنك تصليها لأول مرة.'],
        scripture: [ref('MAT', 6, '9-13'), ref('LUK', 11, '2-4')],
      },
      {
        slug: 'prayer-of-submission',
        title: ['The prayer of submission to the Father', 'صلاة الخضوع للآب'],
        what: ['The people bow their heads while the priest prays quietly, offering the people’s humility to the Father.', 'ينحني الشعب برؤوسهم بينما يصلي الكاهن سرًّا مقدّمًا خضوع الشعب للآب.'],
        meditate: ['Bow your head and leave one worry in His hands.', 'أحنِ رأسك واترك همًّا واحدًا في يديه.'],
        scripture: [ref('PSA', 95, '6')],
      },
      {
        slug: 'prayer-of-absolution',
        title: ['The prayer of absolution to the Father', 'تحليل الآب'],
        what: ['The priest prays for the forgiveness of sins so that the people may receive the Holy Mysteries worthily.', 'يصلي الكاهن من أجل مغفرة الخطايا لكي ينال الشعب الأسرار المقدسة باستحقاق.'],
        meditate: ['Receive the forgiveness offered here.', 'اقبل المغفرة المقدَّمة هنا.'],
        scripture: [ref('1JN', 1, '9'), ref('1CO', 11, '28')],
      },
      {
        slug: 'the-holies-for-the-holy',
        title: ['The holies for the holy', 'القدسات للقديسين'],
        what: ['The priest raises the Lamb and proclaims “The holies for the holy”, and the people confess the one holiness of the Trinity.', 'يرفع الكاهن الحمل ويعلن «القدسات للقديسين»، ويعترف الشعب بالقداسة الواحدة للثالوث القدوس.'],
        meditate: ['Do not ask “am I worthy?”; ask “Lord, make me holy.”', 'لا تسأل «هل أنا مستحق؟» بل قل «يا رب قدّسني».'],
        scripture: [ref('1PE', 1, '15-16')],
      },
      {
        slug: 'the-confession',
        title: ['The confession', 'الاعتراف الأخير'],
        what: ['Before Communion the priest makes the confession of faith, holding the Lamb, and the people answer “Amen”.', 'قبل التناول يقدّم الكاهن الاعتراف بالإيمان وهو يمسك الحمل، ويجيب الشعب «آمين».'],
        meditate: ['Say “Amen” as your own “I believe”.', 'قل «آمين» كأنها «أؤمن» الخاصة بك.'],
        scripture: [ref('JHN', 6, '54-55'), ref('MAT', 16, '16')],
      },
    ],
  ],
  [
    5,
    [
      {
        slug: 'before-the-distribution',
        title: ['Prayers before the distribution', 'صلوات قبل التوزيع'],
        what: ['The priest prays for those who will receive, and the Church prepares in silence and awe.', 'يصلي الكاهن من أجل الذين سيتناولون، وتستعد الكنيسة في سكون ورهبة.'],
        meditate: ['Be still; He is coming to you.', 'اهدأ؛ هو آتٍ إليك.'],
        scripture: [ref('PSA', 34, '8')],
      },
      {
        slug: 'the-distribution',
        title: ['The distribution of the Holy Mysteries', 'توزيع الأسرار المقدسة'],
        what: ['Those who have prepared come forward in order and receive the Body and Blood of Christ while the choir sings.', 'يتقدم الذين استعدّوا بترتيب ويتناولون جسد المسيح ودمه بينما ترتّل الجوقة.'],
        meditate: ['Receive Him, and then simply stay with Him.', 'تناول منه ثم ابقَ معه فحسب.'],
        scripture: [ref('JHN', 6, '56'), ref('1CO', 10, '16')],
      },
      {
        slug: 'psalm-150',
        title: ['Psalm 150', 'المزمور المئة والخمسون'],
        what: ['As the people receive Communion, Psalm 150 is sung in praise.', 'بينما يتناول الشعب يُرتَّل المزمور المئة والخمسون تسبيحًا.'],
        meditate: ['Let your thanks become praise.', 'دع شكرك يصير تسبيحًا.'],
        scripture: [ref('PSA', 150)],
      },
      {
        slug: 'thanksgiving-after-communion',
        title: ['Thanksgiving after Communion', 'صلاة الشكر بعد التناول'],
        what: ['The priest prays quiet prayers of thanksgiving and submission to the Father for the Holy Mysteries.', 'يصلي الكاهن سرًّا صلوات شكر وخضوع للآب على الأسرار المقدسة.'],
        meditate: ['“What shall I render to the Lord?”', '«ماذا أرد للرب؟»'],
        scripture: [ref('PSA', 116, '12-13')],
      },
      {
        slug: 'dismissal',
        title: ['The dismissal and the concluding canon', 'الانصراف والصلوات الختامية'],
        what: ['The priest completes the service with the concluding prayers, and the deacons dismiss the people.', 'يختم الكاهن الخدمة بالصلوات الختامية ويصرف الشمامسة الشعب.'],
        meditate: ['Take one thing from this hour into your home.', 'احمل شيئًا من هذه الساعة إلى بيتك.'],
        scripture: [ref('MRK', 5, '19')],
      },
      {
        slug: 'the-blessing',
        title: ['The blessing: go in peace', 'البركة الختامية: امضوا بسلام'],
        what: ['The priest blesses the people and sends them in peace.', 'يبارك الكاهن الشعب ويصرفهم بسلام.'],
        meditate: ['Go in peace, and be a blessing.', 'امضِ بسلام وكن بركة.'],
        scripture: [ref('NUM', 6, '24-26'), ref('LUK', 24, '50-53')],
      },
    ],
  ],
];

const saysOf = (slug: string): Stop['says'] => {
  const entry = SAYS[slug];
  if (entry === undefined) return {};
  return {
    ...(entry.priest === undefined ? {} : { priest: bi(entry.priest) }),
    ...(entry.deacon === undefined ? {} : { deacon: bi(entry.deacon) }),
    ...(entry.people === undefined ? {} : { people: bi(entry.people) }),
  };
};

export const STOPS: readonly Stop[] = SOURCE.flatMap(([chapter, rows]) => rows.map((row) => ({ chapter, ...row }))).map((row, index) => {
  const { chapter, slug, title, what, meditate, scripture, varies, basis } = row;
  const meaning = MEANING[slug];
  if (meaning === undefined) throw new Error(`No "Meaning behind" paragraph for the stop "${slug}"`);
  return {
    n: index + 1,
    slug,
    chapter,
    title: bi(title),
    what: bi(what),
    meaning: { en: meaning.en.join(PARAGRAPH_BREAK), ar: meaning.ar.join(PARAGRAPH_BREAK) },
    meditate: bi(meditate),
    scripture,
    says: saysOf(slug),
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
