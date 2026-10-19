import type { Bilingual } from './types.ts';

/**
 * The faith points the churches are compared on. Every point has a few positions, and every position is one
 * sentence written in the same frame as the others of its point, so that churches that agree show exactly the same
 * words and churches that differ change only the words between ** and **. A church picks a position for each
 * point in `positions.ts`; the page shows that sentence.
 */
export interface Position {
  readonly id: string;
  readonly text: Bilingual;
}

export interface ComparePoint {
  readonly id: string;
  readonly group: string;
  readonly label: Bilingual;
  readonly positions: readonly Position[];
}

export interface CompareGroup {
  readonly id: string;
  readonly label: Bilingual;
}

export const COMPARE_GROUPS: readonly CompareGroup[] = [
  { id: 'common', label: { en: 'Faith held in common', ar: 'الإيمان المشترك' } },
  { id: 'christ', label: { en: 'Christ and the Holy Spirit', ar: 'المسيح والروح القدس' } },
  { id: 'scripture', label: { en: 'Scripture, Tradition and councils', ar: 'الكتاب والتقليد والمجامع' } },
  { id: 'church', label: { en: 'The Church and its ministry', ar: 'الكنيسة وخدمتها' } },
  { id: 'sacraments', label: { en: 'Sacraments', ar: 'الأسرار' } },
  { id: 'mary', label: { en: 'Mary, the saints and icons', ar: 'العذراء والقديسون والأيقونات' } },
  { id: 'salvation', label: { en: 'Salvation and the life to come', ar: 'الخلاص والحياة الآتية' } },
  { id: 'worship', label: { en: 'Worship and Christian life', ar: 'العبادة والحياة المسيحية' } },
];

const p = (id: string, en: string, ar: string): Position => ({ id, text: { en, ar } });

export const COMPARE_POINTS: readonly ComparePoint[] = [
  {
    id: 'trinity',
    group: 'common',
    label: { en: 'The Holy Trinity', ar: 'الثالوث القدس' },
    positions: [
      p('all', 'There is one God in **three persons: Father, Son and Holy Spirit**.', 'الله واحد في **ثلاثة أقانيم: الآب والابن والروح القدس**.'),
      p('varies', 'There is one God in **three persons, though some groups of the family differ**.', 'الله واحد في **ثلاثة أقانيم، وإن اختلفت بعض جماعات الأسرة**.'),
    ],
  },
  {
    id: 'divinity',
    group: 'common',
    label: { en: 'Divinity of Christ', ar: 'لاهوت المسيح' },
    positions: [p('all', 'Jesus Christ is **truly God and truly man**.', 'يسوع المسيح **إله حق وإنسان حق**.')],
  },
  {
    id: 'birth',
    group: 'common',
    label: { en: 'Birth of Christ', ar: 'ميلاد المسيح' },
    positions: [p('all', 'Christ was **born of the Virgin Mary by the Holy Spirit**.', 'وُلد المسيح **من العذراء مريم بالروح القدس**.')],
  },
  {
    id: 'resurrection',
    group: 'common',
    label: { en: 'Death and Resurrection of Christ', ar: 'موت المسيح وقيامته' },
    positions: [p('all', 'Christ **died on the cross and rose on the third day**.', 'المسيح **مات على الصليب وقام في اليوم الثالث**.')],
  },
  {
    id: 'return',
    group: 'common',
    label: { en: 'Second Coming', ar: 'المجيء الثاني' },
    positions: [p('all', 'Christ **will come again to judge the living and the dead**.', 'المسيح **سيأتي ثانية ليدين الأحياء والأموات**.')],
  },
  {
    id: 'inspiration',
    group: 'common',
    label: { en: 'Inspiration of Scripture', ar: 'وحي الكتاب المقدس' },
    positions: [p('all', 'The Bible is **the inspired word of God**.', 'الكتاب المقدس **كلمة الله الموحى بها**.')],
  },
  {
    id: 'christ-nature',
    group: 'christ',
    label: { en: 'Nature of Christ', ar: 'طبيعة المسيح' },
    positions: [
      p('one', 'Christ is one person in **one incarnate nature**, divine and human.', 'المسيح شخص واحد في **طبيعة واحدة متجسدة**، إلهية وإنسانية.'),
      p('two', 'Christ is one person in **two natures**, divine and human.', 'المسيح شخص واحد في **طبيعتين**، إلهية وإنسانية.'),
      p('two-qnome', 'Christ is one person in **two natures and two qnome**, divine and human.', 'المسيح شخص واحد في **طبيعتين وأقنومين**، إلهية وإنسانية.'),
    ],
  },
  {
    id: 'spirit',
    group: 'christ',
    label: { en: 'Procession of the Holy Spirit', ar: 'انبثاق الروح القدس' },
    positions: [
      p('father', 'The Holy Spirit proceeds **from the Father**.', 'الروح القدس منبثق **من الآب**.'),
      p('father-son', 'The Holy Spirit proceeds **from the Father and the Son**.', 'الروح القدس منبثق **من الآب والابن**.'),
    ],
  },
  {
    id: 'canon',
    group: 'scripture',
    label: { en: 'Books of the Bible', ar: 'أسفار الكتاب المقدس' },
    positions: [
      p('with-deutero', 'The deuterocanonical books are **part of the Bible**.', 'الأسفار القانونية الثانية **جزء من الكتاب المقدس**.'),
      p('ethiopic', 'The deuterocanonical books are **part of the Bible, with more books besides (about 81 in all)**.', 'الأسفار القانونية الثانية **جزء من الكتاب المقدس، مع أسفار أخرى (نحو 81 سفرًا في المجموع)**.'),
      p('apocrypha', 'The deuterocanonical books are **read for instruction, not for doctrine**.', 'الأسفار القانونية الثانية **تُقرأ للتعليم لا لتأسيس العقيدة**.'),
      p('protestant', 'The deuterocanonical books are **not part of the Bible**.', 'الأسفار القانونية الثانية **ليست جزءًا من الكتاب المقدس**.'),
    ],
  },
  {
    id: 'authority',
    group: 'scripture',
    label: { en: 'Authority for faith', ar: 'مرجع الإيمان' },
    positions: [
      p('tradition', 'Doctrine rests on **Scripture read within Holy Tradition**.', 'يقوم التعليم على **الكتاب المقدس مقروءًا داخل التقليد المقدس**.'),
      p('magisterium', 'Doctrine rests on **Scripture and Tradition, interpreted by the Church’s teaching office**.', 'يقوم التعليم على **الكتاب والتقليد، يفسرهما سلطان التعليم في الكنيسة**.'),
      p('scripture-first', 'Doctrine rests on **Scripture first, with Tradition and reason as guides**.', 'يقوم التعليم على **الكتاب المقدس أولًا، مع التقليد والعقل مرشدين**.'),
      p('scripture-alone', 'Doctrine rests on **Scripture alone**.', 'يقوم التعليم على **الكتاب المقدس وحده**.'),
    ],
  },
  {
    id: 'councils',
    group: 'scripture',
    label: { en: 'Ecumenical councils accepted', ar: 'المجامع المسكونية المقبولة' },
    positions: [
      p('two', 'The church accepts **the first two** ecumenical councils (Nicaea and Constantinople).', 'تقبل الكنيسة **أول مجمعين** مسكونيين (نيقية والقسطنطينية).'),
      p('three', 'The church accepts **the first three** ecumenical councils (Nicaea, Constantinople and Ephesus).', 'تقبل الكنيسة **أول ثلاثة** مجامع مسكونية (نيقية والقسطنطينية وأفسس).'),
      p('four', 'The church accepts **the first four** ecumenical councils (to Chalcedon).', 'تقبل الكنيسة **أول أربعة** مجامع مسكونية (حتى خلقيدونية).'),
      p('seven', 'The church accepts **the first seven** ecumenical councils (to Nicaea II).', 'تقبل الكنيسة **أول سبعة** مجامع مسكونية (حتى نيقية الثانية).'),
      p('twenty-one', 'The church accepts **twenty-one** ecumenical councils (to Vatican II).', 'تقبل الكنيسة **واحدًا وعشرين** مجمعًا مسكونيًّا (حتى الفاتيكاني الثاني).'),
      p('creeds', 'The church accepts **the early creeds, but not later councils as binding**.', 'تقبل الكنيسة **القوانين القديمة للإيمان، لا المجامع اللاحقة ملزمة**.'),
    ],
  },
  {
    id: 'leadership',
    group: 'church',
    label: { en: 'Leadership of the church', ar: 'قيادة الكنيسة' },
    positions: [
      p('synod', 'The church is led by **bishops in synod, with no single head over the whole church**.', 'تقود الكنيسةَ **الأساقفةُ في مجمع، بلا رأس واحد للكنيسة كلها**.'),
      p('pope', 'The church is led by **bishops under the Pope as head of the whole church**.', 'تقود الكنيسةَ **الأساقفةُ تحت البابا رأسًا للكنيسة كلها**.'),
      p('elders', 'The church is led by **elders and church councils**.', 'تقود الكنيسةَ **الشيوخُ ومجالس الكنيسة**.'),
      p('congregation', 'The church is led by **each local congregation governing itself**.', 'تقود الكنيسةَ **كلُّ جماعة محلية تحكم نفسها**.'),
      p('varies', 'The church is led by **bishops or church councils, depending on the church**.', 'تقود الكنيسةَ **أساقفةٌ أو مجالس كنسية بحسب الكنيسة**.'),
    ],
  },
  {
    id: 'succession',
    group: 'church',
    label: { en: 'Apostolic succession', ar: 'التسلسل الرسولي' },
    positions: [
      p('kept', 'Church ministers are ordained **in apostolic succession**.', 'يُرسَم خدام الكنيسة **في التسلسل الرسولي**.'),
      p('some', 'Church ministers are ordained **in apostolic succession in some churches of the family**.', 'يُرسَم خدام الكنيسة **في التسلسل الرسولي في بعض كنائس الأسرة**.'),
      p('not', 'Church ministers are ordained **by the church, without apostolic succession**.', 'يُرسَم خدام الكنيسة **من الكنيسة، بلا تسلسل رسولي**.'),
    ],
  },
  {
    id: 'clergy-marriage',
    group: 'church',
    label: { en: 'Marriage of clergy', ar: 'زواج الكهنة' },
    positions: [
      p('married-priests', 'Clergy: **priests marry before ordination; bishops are celibate**.', 'الكهنة: **يتزوج القسوس قبل السيامة، والأساقفة بتوليون**.'),
      p('celibate', 'Clergy: **priests are celibate (Latin rite)**.', 'الكهنة: **القسوس بتوليون (في الطقس اللاتيني)**.'),
      p('may-marry', 'Clergy: **ministers may marry**.', 'الكهنة: **يجوز للخدام الزواج**.'),
    ],
  },
  {
    id: 'women',
    group: 'church',
    label: { en: 'Ordination of women', ar: 'سيامة النساء' },
    positions: [
      p('men', 'Priests are ordained: **men only**.', 'يُرسَم القسوس: **الرجال فقط**.'),
      p('varies', 'Priests are ordained: **men and women, depending on the church**.', 'يُرسَم القسوس: **رجالًا ونساءً بحسب الكنيسة**.'),
    ],
  },
  {
    id: 'sacraments-count',
    group: 'sacraments',
    label: { en: 'Number of sacraments', ar: 'عدد الأسرار' },
    positions: [
      p('seven', 'The church has **seven sacraments**.', 'للكنيسة **سبعة أسرار**.'),
      p('two', 'The church has **two sacraments**.', 'للكنيسة **سران**.'),
      p('ordinances', 'The church has **two ordinances, not sacraments**.', 'للكنيسة **فريضتان لا سرّان**.'),
    ],
  },
  {
    id: 'baptism',
    group: 'sacraments',
    label: { en: 'Baptism', ar: 'المعمودية' },
    positions: [
      p('infants-immersion', 'Baptism is for **infants and adults, by triple immersion**.', 'المعمودية **للأطفال والبالغين، بالتغطيس ثلاث مرات**.'),
      p('infants-any', 'Baptism is for **infants and adults, by pouring or immersion**.', 'المعمودية **للأطفال والبالغين، بالسكب أو التغطيس**.'),
      p('believers', 'Baptism is for **believers only**.', 'المعمودية **للمؤمنين المعترفين فقط**.'),
    ],
  },
  {
    id: 'chrismation',
    group: 'sacraments',
    label: { en: 'Receiving the Holy Spirit', ar: 'نوال الروح القدس' },
    positions: [
      p('at-baptism', 'The Holy Spirit is given **by chrismation with holy myron at baptism**.', 'يُعطى الروح القدس **بمسحة الميرون المقدس عند المعمودية**.'),
      p('later', 'The Holy Spirit is given **by confirmation, later, from the bishop**.', 'يُعطى الروح القدس **بالتثبيت لاحقًا من الأسقف**.'),
      p('rite', 'The Holy Spirit is given **in baptism and faith, with confirmation as a rite only**.', 'يُعطى الروح القدس **في المعمودية والإيمان، والتثبيت طقس فقط**.'),
      p('at-belief', 'The Holy Spirit is given **when a person believes**.', 'يُعطى الروح القدس **حين يؤمن الإنسان**.'),
      p('second-experience', 'The Holy Spirit is given **as a second experience, the baptism in the Holy Spirit**.', 'يُعطى الروح القدس **كخبرة ثانية، هي معمودية الروح القدس**.'),
    ],
  },
  {
    id: 'eucharist',
    group: 'sacraments',
    label: { en: 'The Eucharist', ar: 'الإفخارستيا' },
    positions: [
      p('true-body', 'In the Eucharist the bread and wine **become the true Body and Blood of Christ**.', 'في الإفخارستيا يصير الخبز والخمر **جسد المسيح ودمه الحقيقيين**.'),
      p('transub', 'In the Eucharist the bread and wine **become the Body and Blood of Christ, by transubstantiation**.', 'في الإفخارستيا يصير الخبز والخمر **جسد المسيح ودمه، بالاستحالة الجوهرية**.'),
      p('union', 'In the Eucharist **Christ’s Body and Blood are present in, with and under** the bread and wine.', 'في الإفخارستيا **جسد المسيح ودمه حاضران في الخبز والخمر ومعهما وتحتهما**.'),
      p('spiritual', 'In the Eucharist **Christ is present spiritually** to the believer.', 'في الإفخارستيا **المسيح حاضر روحيًّا** للمؤمن.'),
      p('varies', 'In the Eucharist **Christ is present, and the manner is understood differently** within the church.', 'في الإفخارستيا **المسيح حاضر، وتُفهم الكيفية على نحو مختلف** داخل الكنيسة.'),
      p('memorial', 'In the Eucharist **the bread and wine are a memorial** of Christ’s death.', 'في الإفخارستيا **الخبز والخمر تذكار** لموت المسيح.'),
    ],
  },
  {
    id: 'confession',
    group: 'sacraments',
    label: { en: 'Confession of sins', ar: 'الاعتراف بالخطايا' },
    positions: [
      p('priest', 'Sins are confessed **before a priest, who pronounces absolution**.', 'يُعترف بالخطايا **أمام كاهن يمنح الحل**.'),
      p('optional', 'Sins are confessed **to God, with private confession to a pastor available**.', 'يُعترف بالخطايا **أمام الله، مع إتاحة الاعتراف الخاص أمام راعٍ**.'),
      p('god', 'Sins are confessed **to God directly**.', 'يُعترف بالخطايا **أمام الله مباشرة**.'),
    ],
  },
  {
    id: 'mary',
    group: 'mary',
    label: { en: 'Mary', ar: 'العذراء مريم' },
    positions: [
      p('theotokos', 'Mary is **Theotokos (Mother of God) and ever-virgin**.', 'العذراء مريم **والدة الإله ودائمة البتولية**.'),
      p('theotokos-dogmas', 'Mary is **Theotokos and ever-virgin, with the dogmas of the Immaculate Conception and the Assumption**.', 'العذراء مريم **والدة الإله ودائمة البتولية، مع عقيدتي الحبل بلا دنس والانتقال بالجسد**.'),
      p('mother-christ', 'Mary is **called the Mother of Christ and honoured**.', 'العذراء مريم **تُدعى أم المسيح ومكرَّمة**.'),
      p('mother-god-honoured', 'Mary is **called Mother of God and honoured, without further dogmas**.', 'العذراء مريم **تُدعى أم الله ومكرَّمة، بلا عقائد إضافية**.'),
      p('honoured', 'Mary is **honoured as the mother of Jesus and an example**.', 'العذراء مريم **مكرَّمة أمًّا ليسوع وقدوة**.'),
    ],
  },
  {
    id: 'saints',
    group: 'mary',
    label: { en: 'Intercession of saints', ar: 'شفاعة القديسين' },
    positions: [
      p('intercede', 'Saints are **asked to intercede for us**.', 'القديسون **يُطلب منهم أن يشفعوا فينا**.'),
      p('honour', 'Saints are **honoured as examples, and not asked to intercede**.', 'القديسون **يُكرَّمون قدوةً، ولا يُطلب منهم أن يشفعوا**.'),
    ],
  },
  {
    id: 'icons',
    group: 'mary',
    label: { en: 'Icons and images', ar: 'الأيقونات والصور' },
    positions: [
      p('icons', '**Icons are venerated** in worship.', '**تُكرَّم الأيقونات** في العبادة.'),
      p('images', '**Images and statues are venerated** in worship.', '**تُكرَّم الصور والتماثيل** في العبادة.'),
      p('allowed', '**Images are allowed** in churches, but not venerated.', '**يُسمح بالصور** في الكنائس، دون إكرامها.'),
      p('none', '**No images** are used in worship.', '**لا تُستخدم صور** في العبادة.'),
    ],
  },
  {
    id: 'salvation',
    group: 'salvation',
    label: { en: 'Salvation', ar: 'الخلاص' },
    positions: [
      p('works', 'Salvation is **by grace, through faith and works of love**.', 'الخلاص **بالنعمة، بالإيمان وأعمال المحبة**.'),
      p('faith-alone', 'Salvation is **by grace, through faith alone**.', 'الخلاص **بالنعمة، بالإيمان وحده**.'),
      p('obedience', 'Salvation is **by grace, through faith shown in obedience**.', 'الخلاص **بالنعمة، بالإيمان الظاهر في الطاعة**.'),
    ],
  },
  {
    id: 'will',
    group: 'salvation',
    label: { en: 'Grace and free will', ar: 'النعمة والإرادة الحرة' },
    positions: [
      p('cooperation', 'God’s grace and **human free will cooperate**.', 'نعمة الله و**إرادة الإنسان الحرة تتعاونان**.'),
      p('election', 'God’s grace **comes first, through election (predestination)**.', 'نعمة الله **تسبق، بالاختيار (سبق التعيين)**.'),
      p('bound', 'God’s grace **alone begins conversion**.', 'نعمة الله **وحدها تبدأ الاهتداء**.'),
      p('varies', 'God’s grace and free will are **understood differently within the church**.', 'نعمة الله والإرادة الحرة **تُفهمان على نحو مختلف داخل الكنيسة**.'),
    ],
  },
  {
    id: 'afterlife',
    group: 'salvation',
    label: { en: 'After death', ar: 'بعد الموت' },
    positions: [
      p('prayers', 'The departed are helped **by prayers, with no purgatory**.', 'يُعان الراقدون **بالصلوات، بلا مطهر**.'),
      p('purgatory', 'The departed are helped **by prayers and the cleansing of purgatory**.', 'يُعان الراقدون **بالصلوات وتطهير المطهر**.'),
      p('optional', 'The departed are helped **by prayers in some churches of the family, with no purgatory**.', 'يُعان الراقدون **بالصلوات في بعض كنائس الأسرة، بلا مطهر**.'),
      p('none', 'The departed are helped **by no prayers, and there is no purgatory**.', 'يُعان الراقدون **بلا صلوات، ولا مطهر**.'),
    ],
  },
  {
    id: 'worship',
    group: 'worship',
    label: { en: 'Style of worship', ar: 'نمط العبادة' },
    positions: [
      p('ancient', 'Worship follows **an ancient liturgy**.', 'تتبع العبادة **قداسًا قديمًا**.'),
      p('vernacular', 'Worship follows **a liturgy in the local language from a prayer book**.', 'تتبع العبادة **قداسًا بلغة الشعب من كتاب صلوات**.'),
      p('preaching', 'Worship is **centred on preaching**.', 'العبادة **محورها الوعظ**.'),
      p('free', 'Worship is **free and spontaneous**.', 'العبادة **حرة وعفوية**.'),
    ],
  },
  {
    id: 'fasting',
    group: 'worship',
    label: { en: 'Fasting', ar: 'الصوم' },
    positions: [
      p('many', 'The church fasts **on many days of the year**.', 'تصوم الكنيسة **في أيام كثيرة من السنة**.'),
      p('few', 'The church fasts **on a few set days**.', 'تصوم الكنيسة **في أيام قليلة محددة**.'),
      p('personal', 'The church leaves fasting **to each person**.', 'تترك الكنيسة الصوم **لكل شخص**.'),
    ],
  },
  {
    id: 'monasticism',
    group: 'worship',
    label: { en: 'Monastic life', ar: 'الحياة الرهبانية' },
    positions: [
      p('central', '**Monastic life is central** to the church.', '**الحياة الرهبانية محورية** في الكنيسة.'),
      p('rare', '**Monastic life is rare** in the church.', '**الحياة الرهبانية نادرة** في الكنيسة.'),
      p('none', '**Monastic life is not part** of the church.', '**الحياة الرهبانية ليست جزءًا** من الكنيسة.'),
    ],
  },
];

export type PointId = (typeof COMPARE_POINTS)[number]['id'];
