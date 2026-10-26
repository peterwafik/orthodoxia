import { MORE_JOURNEYS } from './journeys-more.ts';
import type { Bilingual, Certainty, EraId, Journey, Stop } from './types.ts';

/**
 * The journeys of the people of the Bible, as lines from stop to stop. A line joins the stops in the order the passages
 * give them; it is not the road or sea-lane, which the text rarely describes. A leg that rests on Church tradition rather
 * than on the text is marked `trad` and drawn dashed. Every stop names a place in `places.ts` and the passage that has the
 * person there.
 */
const b = (en: string, ar: string): Bilingual => ({ en, ar });
const s = (place: string, ref: string, text?: Bilingual, trad = false): Stop => ({ place, ref, ...(text === undefined ? {} : { text }), ...(trad ? { trad: true as const } : {}) });

interface Draft {
  id: string;
  era: EraId;
  hue: number;
  certainty: Certainty;
  person: Bilingual;
  title: Bilingual;
  summary: Bilingual;
  note?: Bilingual;
  stops: Stop[];
}
const j = (draft: Draft): Journey => draft;

const CORE: readonly Journey[] = [
  j({
    id: 'abraham', era: 'patriarchs', hue: 38, certainty: 'probable',
    person: b('Abraham', 'إبراهيم'), title: b('From Ur to the land of promise', 'من أور إلى أرض الموعد'),
    summary: b('Abram leaves Ur with his father, settles for a time in Haran, then obeys the call to go to the land God would show him.', 'يخرج أبرام من أور مع أبيه، ويقيم زمنًا في حاران، ثم يطيع الدعوة للذهاب إلى الأرض التي يريه الله إياها.'),
    note: b('Abraham’s dates are not fixed; scholars place him in the early second millennium BC. The first stop, Ur, is the usual but not the only proposed site.', 'لا يتحدد زمن إبراهيم؛ ويضعه الدارسون في أوائل الألف الثاني ق.م. وأور هي الموضع المعتاد لا الوحيد المقترح.'),
    stops: [
      s('ur', 'Genesis 11:31', b('Terah takes Abram, Sarai and Lot out of Ur', 'تارح يأخذ أبرام وساراي ولوطًا من أور')),
      s('haran', 'Genesis 12:1–5', b('The call: “Go from your country”', 'الدعوة: «اذهب من أرضك»')),
      s('shechem', 'Genesis 12:6–7', b('The Lord appears; Abram builds an altar', 'الرب يظهر لأبرام فيبني مذبحًا')),
      s('bethel', 'Genesis 12:8', b('Pitches his tent; another altar', 'ينصب خيمته ويبني مذبحًا آخر')),
      s('egypt', 'Genesis 12:10', b('Goes down to Egypt in the famine', 'ينزل إلى مصر بسبب المجاعة')),
      s('hebron', 'Genesis 13:18', b('Settles by the oaks of Mamre', 'يسكن عند بلوطات ممرا')),
      s('beersheba', 'Genesis 21:31–33', b('Plants a tamarisk and calls on the Lord', 'يغرس أثلًا ويدعو باسم الرب')),
    ],
  }),
  j({
    id: 'jacob', era: 'patriarchs', hue: 28, certainty: 'probable',
    person: b('Jacob (Israel)', 'يعقوب (إسرائيل)'), title: b('Flight to Haran, return, and descent to Egypt', 'الهروب إلى حاران والعودة والنزول إلى مصر'),
    summary: b('Jacob flees his brother Esau, meets God at Bethel, serves Laban in Haran, returns as Israel and at last goes down to Egypt to Joseph.', 'يهرب يعقوب من أخيه عيسو، ويلقى الله في بيت إيل، ويخدم لابان في حاران، ويرجع إسرائيل، ثم ينزل أخيرًا إلى مصر إلى يوسف.'),
    stops: [
      s('beersheba', 'Genesis 28:10', b('Leaves Beersheba for Haran', 'يخرج من بئر سبع متجهًا إلى حاران')),
      s('bethel', 'Genesis 28:11–19', b('The dream of the ladder', 'حلم السلّم')),
      s('haran', 'Genesis 29:1–30', b('Serves Laban for Rachel and Leah', 'يخدم لابان لأجل راحيل وليئة')),
      s('penuel', 'Genesis 32:22–32', b('Wrestles with God and is named Israel', 'يصارع الله ويُسمّى إسرائيل')),
      s('shechem', 'Genesis 33:18–20', b('Buys a field and builds an altar', 'يشتري حقلًا ويبني مذبحًا')),
      s('bethel', 'Genesis 35:1–7', b('Returns to Bethel as God commanded', 'يرجع إلى بيت إيل كما أمره الله')),
      s('hebron', 'Genesis 35:27', b('Comes to his father Isaac at Mamre', 'يأتي إلى أبيه إسحاق في ممرا')),
      s('beersheba', 'Genesis 46:1–4', b('Offers sacrifices; God says “Do not fear to go down to Egypt”', 'يذبح ذبائح؛ والله يقول: «لا تخف من النزول إلى مصر»')),
      s('rameses', 'Genesis 47:11', b('Settled in “the land of Rameses”', 'يُسكَن في «أرض رعمسيس»')),
    ],
  }),
  j({
    id: 'joseph', era: 'patriarchs', hue: 52, certainty: 'probable',
    person: b('Joseph', 'يوسف'), title: b('Sold into Egypt', 'يُباع إلى مصر'),
    summary: b('Joseph goes to find his brothers at Shechem, is thrown into a pit at Dothan, sold to traders, and brought to Egypt, where he rises to rule under Pharaoh.', 'يمضي يوسف ليبحث عن إخوته في شكيم، فيُلقى في جب في دوثان ويُباع لتجار ويُؤتى به إلى مصر، حيث يرتفع إلى الحكم بعد فرعون.'),
    stops: [
      s('hebron', 'Genesis 37:14', b('Sent by Jacob from the valley of Hebron', 'يرسله يعقوب من وادي حبرون')),
      s('shechem', 'Genesis 37:14–15', b('Looks for his brothers', 'يبحث عن إخوته')),
      s('dothan', 'Genesis 37:17–28', b('Thrown into the pit and sold', 'يُلقى في الجب ويُباع')),
      s('egypt', 'Genesis 37:36', b('Sold to Potiphar in Egypt', 'يُباع لفوطيفار في مصر')),
    ],
  }),
  j({
    id: 'moses-midian', era: 'exodus', hue: 24, certainty: 'tradition',
    person: b('Moses', 'موسى'), title: b('Flight to Midian and the burning bush', 'الهروب إلى مديان والعليقة الملتهبة'),
    summary: b('Moses flees Egypt after killing an Egyptian, lives forty years in Midian, and is called by God from the burning bush at Horeb.', 'يهرب موسى من مصر بعد قتله مصريًا، ويقيم أربعين سنة في مديان، ثم يدعوه الله من العليقة في حوريب.'),
    note: b('Midian lay in north-west Arabia and the mountain of God is placed at the traditional Sinai; neither is certain.', 'تقع مديان في شمال غرب الجزيرة العربية، ويوضع جبل الله عند سيناء التقليدي؛ ولا يقين في أيٍّ منهما.'),
    stops: [
      s('egypt', 'Exodus 2:11–15', b('Kills an Egyptian and flees', 'يقتل مصريًا ويهرب')),
      s('midian', 'Exodus 2:15–22', b('Marries Zipporah and keeps Jethro’s flock', 'يتزوج صفورة ويرعى غنم يثرون')),
      s('sinai', 'Exodus 3:1–6', b('The burning bush at Horeb', 'العليقة الملتهبة في حوريب')),
      s('egypt', 'Exodus 4:19–20', b('Returns to Egypt', 'يرجع إلى مصر')),
    ],
  }),
  j({
    id: 'exodus', era: 'exodus', hue: 14, certainty: 'tradition',
    person: b('Moses and Israel', 'موسى وإسرائيل'), title: b('The Exodus', 'الخروج'),
    summary: b('Israel leaves Egypt, crosses the sea, receives the Law at Sinai, and travels the wilderness for forty years until Moses sees the land from Mount Nebo.', 'يخرج إسرائيل من مصر ويعبر البحر ويتسلم الناموس عند سيناء ويجول في البرية أربعين سنة حتى يرى موسى الأرض من جبل نبو.'),
    note: b('Only Rameses, Kadesh and Nebo are fairly well placed. The crossing and Mount Sinai are traditional sites, and scholars date and route the Exodus differently. The line is a guide, not a map of the journey.', 'رعمسيس وقادش ونبو وحدها معروفة المواضع نسبيًا. أما موضع العبور وجبل سيناء فمواضع تقليدية، ويؤرخ الدارسون الخروج ويرسمون طريقه على نحو مختلف. فالخط دليل لا خريطة للرحلة.'),
    stops: [
      s('rameses', 'Exodus 12:37', b('Israel sets out', 'يرتحل بنو إسرائيل')),
      s('succoth', 'Exodus 13:20', b('The first camp', 'المحطة الأولى'), true),
      s('red-sea', 'Exodus 14:21–31', b('The sea is divided', 'انشقاق البحر'), true),
      s('marah', 'Exodus 15:22–25', b('The bitter water is made sweet', 'يصير الماء المرّ عذبًا'), true),
      s('elim', 'Exodus 15:27', b('Twelve springs and seventy palms', 'اثنتا عشرة عينًا وسبعون نخلة'), true),
      s('rephidim', 'Exodus 17:1–7', b('Water from the rock', 'ماء من الصخرة'), true),
      s('sinai', 'Exodus 19:1–2', b('Israel camps before the mountain', 'ينزل إسرائيل أمام الجبل'), true),
      s('kibroth-hattaavah', 'Numbers 11:34', b('The graves of craving', 'قبور الشهوة'), true),
      s('hazeroth', 'Numbers 11:35', b('Miriam is healed', 'شفاء مريم'), true),
      s('kadesh', 'Numbers 13:26', b('The spies return to Kadesh', 'يعود الجواسيس إلى قادش')),
      s('mount-hor', 'Numbers 20:22–28', b('Aaron dies on Mount Hor', 'موت هارون على جبل هور'), true),
      s('heshbon', 'Numbers 21:21–26', b('Sihon is defeated', 'هزيمة سيحون')),
      s('edrei-1', 'Numbers 21:33–35', b('Og is defeated', 'هزيمة عوج')),
      s('shittim', 'Numbers 25:1', b('The last camp east of the Jordan', 'آخر محلة شرقي الأردن')),
      s('nebo', 'Deuteronomy 34:1', b('Moses ascends Nebo and sees the land', 'موسى يصعد نبو ويرى الأرض')),
    ],
  }),
  j({
    id: 'joshua', era: 'exodus', hue: 8, certainty: 'probable',
    person: b('Joshua', 'يشوع'), title: b('Into the land', 'إلى الأرض'),
    summary: b('Joshua leads Israel over the Jordan to Gilgal, takes Jericho, renews the covenant at Shechem and sets up the tabernacle at Shiloh.', 'يقود يشوع إسرائيل عبر الأردن إلى الجلجال، ويأخذ أريحا، ويجدد العهد في شكيم، وينصب الخيمة في شيلوه.'),
    note: b('A selection of the main places, in the order of the book. How the conquest unfolded is discussed among scholars.', 'مختارات من أهم المواضع بترتيب السفر. وكيفية الغزو موضع نقاش بين الدارسين.'),
    stops: [
      s('gilgal', 'Joshua 4:19', b('Camps at Gilgal after crossing the Jordan', 'يخيم في الجلجال بعد عبور الأردن')),
      s('jericho', 'Joshua 6:1–20', b('The walls fall', 'تسقط الأسوار')),
      s('shechem', 'Joshua 8:30–35', b('The blessings and curses read at Ebal and Gerizim', 'تُقرأ البركات واللعنات عند عيبال وجرزيم')),
      s('gibeon', 'Joshua 10:6–14', b('The sun stands still at Gibeon', 'الشمس تقف في جبعون')),
      s('shiloh', 'Joshua 18:1', b('The tabernacle is set up', 'تُنصب الخيمة')),
    ],
  }),
  j({
    id: 'ruth', era: 'kingdom', hue: 330, certainty: 'probable',
    person: b('Naomi and Ruth', 'نعمي وراعوث'), title: b('To Moab and back', 'إلى موآب والعودة'),
    summary: b('A famine drives Naomi’s family from Bethlehem to Moab; widowed, she returns with Ruth, who becomes the great-grandmother of David.', 'تدفع مجاعة عائلة نعمي من بيت لحم إلى موآب؛ وبعد ترمّلها ترجع ومعها راعوث، جدة داود الكبرى.'),
    stops: [
      s('bethlehem', 'Ruth 1:1', b('A famine in the days of the judges', 'مجاعة في أيام القضاة')),
      s('moab', 'Ruth 1:2–5', b('Elimelech and his sons die in Moab', 'يموت أليمالك وابناه في موآب')),
      s('bethlehem', 'Ruth 1:19–22', b('Naomi and Ruth return at the barley harvest', 'نعمي وراعوث تعودان في حصاد الشعير')),
    ],
  }),
  j({
    id: 'david', era: 'kingdom', hue: 350, certainty: 'secure',
    person: b('David', 'داود'), title: b('From shepherd to king', 'من راعٍ إلى ملك'),
    summary: b('Anointed at Bethlehem, David defeats Goliath in the valley of Elah, is made king at Hebron, then takes Jerusalem and makes it his capital.', 'يُمسح داود في بيت لحم، ويغلب جليات في وادي البطم، ويُملَّك في حبرون، ثم يأخذ أورشليم ويجعلها عاصمته.'),
    stops: [
      s('bethlehem', '1 Samuel 16:1–13', b('Samuel anoints him', 'صموئيل يمسحه')),
      s('elah', '1 Samuel 17:1–51', b('Goliath falls', 'سقوط جليات')),
      s('hebron', '2 Samuel 2:1–4', b('Anointed king over Judah', 'يُمسح ملكًا على يهوذا')),
      s('jerusalem', '2 Samuel 5:6–10', b('Takes the stronghold of Zion', 'يأخذ حصن صهيون')),
    ],
  }),
  j({
    id: 'elijah', era: 'kingdom', hue: 10, certainty: 'probable',
    person: b('Elijah', 'إيليا'), title: b('From Zarephath to Horeb', 'من صرفة إلى حوريب'),
    summary: b('Elijah lives with the widow of Zarephath, confronts the prophets of Baal on Carmel, flees from Jezebel to Beersheba and journeys forty days to Horeb.', 'يقيم إيليا عند أرملة صرفة، ويواجه أنبياء البعل على الكرمل، ويهرب من إيزابل إلى بئر سبع ويسير أربعين يومًا إلى حوريب.'),
    stops: [
      s('zarephath', '1 Kings 17:8–24', b('The widow’s flour and oil; her son is raised', 'دقيق الأرملة وزيتها؛ وإقامة ابنها')),
      s('carmel', '1 Kings 18:19–40', b('The fire falls on the altar', 'تنزل النار على المذبح')),
      s('beersheba', '1 Kings 19:3', b('Flees from Jezebel', 'يهرب من إيزابل')),
      s('sinai', '1 Kings 19:8–12', b('Horeb: the still small voice', 'حوريب: الصوت المنخفض الخفيف'), true),
    ],
  }),
  j({
    id: 'jonah', era: 'kingdom', hue: 195, certainty: 'secure',
    person: b('Jonah', 'يونان'), title: b('To Nineveh', 'إلى نينوى'),
    summary: b('Sent to Nineveh, Jonah first boards a ship at Joppa to flee toward Tarshish; after the storm and the great fish he goes to Nineveh and the city repents.', 'أُرسل يونان إلى نينوى فركب أولًا سفينة في يافا هربًا إلى ترشيش؛ وبعد العاصفة والحوت العظيم ذهب إلى نينوى فتابت المدينة.'),
    note: b('The line shows where he was sent. His flight toward Tarshish is the opposite direction (see Tarshish on the map).', 'يبيّن الخط الجهة التي أُرسل إليها. وهروبه نحو ترشيش في الاتجاه المعاكس (انظر ترشيش على الخريطة).'),
    stops: [
      s('joppa', 'Jonah 1:3', b('Boards a ship bound for Tarshish', 'يركب سفينة ذاهبة إلى ترشيش')),
      s('nineveh', 'Jonah 3:1–10', b('“Forty days, and Nineveh shall be overthrown”', '«بعد أربعين يومًا تنقلب نينوى»')),
    ],
  }),
  j({
    id: 'exile', era: 'exile', hue: 275, certainty: 'secure',
    person: b('The people of Judah', 'شعب يهوذا'), title: b('The exile to Babylon', 'السبي إلى بابل'),
    summary: b('When Jerusalem falls in 586 BC, the temple is burned and the people are carried captive to Babylon.', 'عند سقوط أورشليم سنة ٥٨٦ ق.م يُحرق الهيكل ويُساق الشعب أسرى إلى بابل.'),
    stops: [
      s('jerusalem', '2 Kings 25:8–11', b('The city and temple are burned', 'إحراق المدينة والهيكل')),
      s('babylon', '2 Kings 25:11', b('The people are carried away', 'يُسبى الشعب')),
    ],
  }),
  j({
    id: 'jeremiah', era: 'exile', hue: 290, certainty: 'probable',
    person: b('Jeremiah', 'إرميا'), title: b('Taken to Egypt', 'يؤخذ إلى مصر'),
    summary: b('After the murder of Gedaliah the remnant of Judah flees to Egypt against Jeremiah’s warning and takes him with them to Tahpanhes.', 'بعد مقتل جدليا يهرب بقية يهوذا إلى مصر رغم تحذير إرميا، ويأخذونه معهم إلى تحفنحيس.'),
    stops: [
      s('bethlehem', 'Jeremiah 41:17', b('The remnant halts at Geruth Chimham near Bethlehem', 'يتوقف البقية في جيروت كمهام قرب بيت لحم')),
      s('tahpanhes', 'Jeremiah 43:5–7', b('They come to Tahpanhes in Egypt', 'يأتون إلى تحفنحيس في مصر')),
    ],
  }),
  j({
    id: 'return', era: 'exile', hue: 255, certainty: 'secure',
    person: b('Ezra and the returning exiles', 'عزرا والعائدون من السبي'), title: b('The return from Babylon', 'العودة من بابل'),
    summary: b('Cyrus lets the exiles go home; later Ezra leads a second company from Babylon to Jerusalem.', 'يأذن كورش للمسبيين بالعودة؛ ثم يقود عزرا فوجًا ثانيًا من بابل إلى أورشليم.'),
    stops: [
      s('babylon', 'Ezra 1:1–4', b('Cyrus’s decree to rebuild the temple', 'أمر كورش ببناء الهيكل')),
      s('jerusalem', 'Ezra 7:6–9', b('Ezra arrives in the fifth month', 'يصل عزرا في الشهر الخامس')),
    ],
  }),
  j({
    id: 'nehemiah', era: 'exile', hue: 240, certainty: 'secure',
    person: b('Nehemiah', 'نحميا'), title: b('From Susa to the walls of Jerusalem', 'من شوشن إلى أسوار أورشليم'),
    summary: b('The cupbearer of the Persian king hears that Jerusalem lies in ruins, is sent to rebuild it, and finishes the wall in fifty-two days.', 'يسمع ساقي ملك فارس أن أورشليم خراب، فيُرسل ليبنيها، ويكمل السور في اثنين وخمسين يومًا.'),
    stops: [
      s('susa', 'Nehemiah 1:1–11', b('Hears of the ruin and prays', 'يسمع بالخراب ويصلي')),
      s('jerusalem', 'Nehemiah 2:11–18', b('Surveys the walls by night and begins to rebuild', 'يتفقد الأسوار ليلًا ويبدأ البناء')),
    ],
  }),
  j({
    id: 'holy-family', era: 'christ', hue: 46, certainty: 'secure',
    person: b('The Holy Family', 'العائلة المقدسة'), title: b('To Egypt and back to Nazareth', 'إلى مصر والعودة إلى الناصرة'),
    summary: b('Warned in a dream, Joseph takes Mary and the child to Egypt to escape Herod; after Herod’s death they return and settle in Nazareth.', 'ينذَر يوسف في حلم فيأخذ مريم والطفل إلى مصر هربًا من هيرودس؛ وبعد موت هيرودس يرجعون ويسكنون في الناصرة.'),
    note: b('The Gospel names only Bethlehem, Egypt and Nazareth. The stops within Egypt are on the next journey.', 'لا يذكر الإنجيل سوى بيت لحم ومصر والناصرة. أما المحطات داخل مصر ففي الرحلة التالية.'),
    stops: [
      s('bethlehem', 'Matthew 2:13–14', b('Joseph takes the child and his mother by night', 'يأخذ يوسف الصبي وأمه ليلًا')),
      s('egypt', 'Matthew 2:14–15', b('“Out of Egypt I called my son”', '«من مصر دعوت ابني»')),
      s('nazareth', 'Matthew 2:19–23', b('After Herod’s death they settle in Nazareth', 'بعد موت هيرودس يسكنون في الناصرة')),
    ],
  }),
  j({
    id: 'holy-family-egypt', era: 'christ', hue: 40, certainty: 'tradition',
    person: b('The Holy Family', 'العائلة المقدسة'), title: b('The Holy Family’s route in Egypt (Coptic tradition)', 'مسار العائلة المقدسة في مصر (التقليد القبطي)'),
    summary: b('The Coptic Church keeps the memory of the places in Egypt where the Holy Family rested, from the Delta south to Mount Assiut, and sees in them the fulfilment of Isaiah 19.', 'تحفظ الكنيسة القبطية ذكرى المواضع في مصر التي استراحت فيها العائلة المقدسة، من الدلتا جنوبًا إلى جبل أسيوط، وترى فيها تحقيقًا لنبوة إشعياء ١٩.'),
    note: b('This route comes from Coptic tradition, not from the Gospels. Accounts differ on the order of some stops, so the line runs from north to south.', 'هذا المسار من التقليد القبطي لا من الأناجيل. وتختلف الروايات في ترتيب بعض المحطات، فيسير الخط من الشمال إلى الجنوب.'),
    stops: [
      s('pelusium', 'Matthew 2:13–15', b('Entry into Egypt by Farama', 'الدخول إلى مصر من الفرما'), true),
      s('tell-basta', 'Isaiah 19:1', b('One of the first places of rest', 'من أوائل مواضع الاستراحة'), true),
      s('wadi-natrun', 'Matthew 2:13–15', b('The desert of Scetes', 'برية شيهيت'), true),
      s('heliopolis', 'Matthew 2:13–15', b('Matariya and the Virgin’s Tree', 'المطرية وشجرة العذراء'), true),
      s('old-cairo', 'Isaiah 19:19–22', b('Babylon, the fortress of Old Cairo', 'حصن بابليون في مصر القديمة'), true),
      s('gebel-el-tair', 'Matthew 2:13–15', b('The Mountain of the Birds', 'جبل الطير'), true),
      s('ashmunein', 'Isaiah 19:1', b('The idols fall', 'سقوط الأوثان'), true),
      s('muharraq', 'Isaiah 19:19', b('Qusqam, “the second Bethlehem”', 'قسقام، «بيت لحم الثانية»'), true),
      s('assiut', 'Matthew 2:19–21', b('The angel bids Joseph return', 'الملاك يأمر يوسف بالعودة'), true),
    ],
  }),
  j({
    id: 'jesus', era: 'christ', hue: 48, certainty: 'secure',
    person: b('Jesus Christ', 'يسوع المسيح'), title: b('The ministry of Jesus', 'خدمة يسوع'),
    summary: b('From Nazareth to the Jordan, through Galilee and the north, and up to Jerusalem by way of Jericho and Bethany.', 'من الناصرة إلى الأردن، عبر الجليل والشمال، ثم صعودًا إلى أورشليم عن طريق أريحا وبيت عنيا.'),
    note: b('A selection of the main places, in broad order. The four Gospels do not give one continuous itinerary, so the order of the Galilean stops is approximate.', 'مختارات من أهم المواضع بترتيب عام. فالأناجيل الأربعة لا تقدم مسارًا متصلًا واحدًا، فترتيب المحطات في الجليل تقريبي.'),
    stops: [
      s('nazareth', 'Luke 4:16', b('Grows up and teaches in the synagogue', 'ينشأ ويعلّم في المجمع')),
      s('jordan', 'Mark 1:9–11', b('Baptized by John', 'يعتمد من يوحنا')),
      s('cana', 'John 2:1–11', b('The first sign', 'الآية الأولى')),
      s('capernaum', 'Mark 1:21–28', b('Teaches and heals', 'يعلّم ويشفي')),
      s('galilee', 'Mark 4:35–41', b('Calms the storm', 'يسكّن العاصفة')),
      s('tyre', 'Matthew 15:21', b('Withdraws to the region of Tyre and Sidon', 'ينصرف إلى نواحي صور وصيدا')),
      s('caesarea-philippi', 'Matthew 16:13–20', b('Peter confesses him as the Christ', 'بطرس يعترف به المسيح')),
      s('tabor', 'Matthew 17:1–9', b('The Transfiguration (traditional site)', 'التجلي (الموضع التقليدي)'), true),
      s('jericho', 'Luke 18:35–19:10', b('Heals Bartimaeus and visits Zacchaeus', 'يشفي برطيماوس ويزور زكا')),
      s('bethany', 'John 11:1–44', b('Raises Lazarus', 'يقيم لعازر')),
      s('jerusalem', 'Luke 19:28–38', b('Enters the city, is crucified and rises', 'يدخل المدينة ثم يُصلب ويقوم')),
    ],
  }),
  j({
    id: 'emmaus', era: 'christ', hue: 58, certainty: 'tradition',
    person: b('Cleopas and his companion', 'كليوباس ورفيقه'), title: b('The road to Emmaus', 'الطريق إلى عمواس'),
    summary: b('On the day of the resurrection two disciples leave Jerusalem and meet the risen Lord on the road; they know him in the breaking of bread.', 'في يوم القيامة يغادر تلميذان أورشليم ويلتقيان بالرب القائم في الطريق؛ ويعرفانه عند كسر الخبز.'),
    note: b('The site of Emmaus is uncertain (see its note).', 'موضع عمواس غير مؤكد (انظر ملاحظته).'),
    stops: [
      s('jerusalem', 'Luke 24:13', b('They leave Jerusalem', 'يغادران أورشليم')),
      s('emmaus', 'Luke 24:28–35', b('“He was known to them in the breaking of the bread”', '«عرفاه عند كسر الخبز»'), true),
      s('jerusalem', 'Luke 24:33', b('They return the same hour', 'يرجعان في الساعة نفسها')),
    ],
  }),
  j({
    id: 'philip', era: 'apostles', hue: 175, certainty: 'secure',
    person: b('Philip the evangelist', 'فيلبس المبشر'), title: b('The Ethiopian on the road to Gaza', 'الحبشي في الطريق إلى غزة'),
    summary: b('An angel sends Philip south on the road from Jerusalem to Gaza, where he explains Isaiah to an Ethiopian official and baptizes him; the Spirit then carries him to Azotus and he preaches on to Caesarea.', 'يرسل ملاك فيلبس جنوبًا في الطريق النازل من أورشليم إلى غزة، حيث يشرح إشعياء لخصي حبشي ويعمده؛ ثم يخطفه الروح إلى أزوتس ويكرز حتى قيصرية.'),
    stops: [
      s('jerusalem', 'Acts 8:26', b('“Go toward the south, to the road from Jerusalem to Gaza”', '«قم واذهب نحو الجنوب على الطريق النازل من أورشليم إلى غزة»')),
      s('ashdod', 'Acts 8:39–40', b('The Spirit catches Philip away; he is found at Azotus', 'يخطف الروح فيلبس فيوجد في أزوتس')),
      s('caesarea', 'Acts 8:40', b('Preaches in all the towns until he reaches Caesarea', 'يبشر في كل المدن حتى يأتي إلى قيصرية')),
    ],
  }),
  j({
    id: 'peter', era: 'apostles', hue: 190, certainty: 'secure',
    person: b('Peter', 'بطرس'), title: b('Along the coast to Cornelius', 'على الساحل إلى كرنيليوس'),
    summary: b('Peter heals Aeneas at Lydda, raises Tabitha at Joppa, and is led by a vision to the house of the Gentile centurion Cornelius at Caesarea.', 'يشفي بطرس أينياس في لدّة، ويقيم طابيثا في يافا، وتقوده رؤيا إلى بيت قائد المئة الأممي كرنيليوس في قيصرية.'),
    stops: [
      s('jerusalem', 'Acts 9:32', b('Peter goes through all the regions', 'بطرس يجتاز في جميع النواحي')),
      s('lydda', 'Acts 9:32–35', b('Heals Aeneas', 'يشفي أينياس')),
      s('joppa', 'Acts 9:36–43; Acts 10:9–16', b('Raises Tabitha; sees the vision of the sheet', 'يقيم طابيثا؛ ويرى رؤيا الملاءة')),
      s('caesarea', 'Acts 10:24–48', b('The Gentiles receive the Holy Spirit', 'الأمم ينالون الروح القدس')),
    ],
  }),
  j({
    id: 'saul', era: 'apostles', hue: 150, certainty: 'secure',
    person: b('Saul (Paul)', 'شاول (بولس)'), title: b('From persecutor to apostle', 'من مضطهِد إلى رسول'),
    summary: b('Saul sets out for Damascus to arrest the Christians and meets the risen Christ on the road; he is baptized, escapes the city, and is brought to Antioch.', 'يخرج شاول إلى دمشق ليقبض على المسيحيين فيلقى المسيح القائم في الطريق؛ ويعتمد وينجو من المدينة ثم يُؤتى به إلى أنطاكية.'),
    stops: [
      s('jerusalem', 'Acts 9:1–2', b('Asks the high priest for letters', 'يطلب رسائل من رئيس الكهنة')),
      s('damascus', 'Acts 9:3–19', b('The light on the road; baptized by Ananias', 'النور في الطريق؛ ويعتمد على يد حنانيا')),
      s('jerusalem', 'Acts 9:26–28', b('Comes to Jerusalem; Barnabas vouches for him', 'يأتي إلى أورشليم؛ وبرنابا يزكّيه')),
      s('tarsus', 'Acts 9:30', b('The brothers send him to Tarsus', 'يرسله الإخوة إلى طرسوس')),
      s('antioch', 'Acts 11:25–26', b('Barnabas brings him to Antioch', 'برنابا يأتي به إلى أنطاكية')),
    ],
  }),
  j({
    id: 'paul-1', era: 'apostles', hue: 140, certainty: 'secure',
    person: b('Paul and Barnabas', 'بولس وبرنابا'), title: b('Paul’s first journey (about AD 46–48)', 'رحلة بولس الأولى (نحو ٤٦–٤٨ م)'),
    summary: b('Sent from Antioch, Paul and Barnabas sail to Cyprus, then cross Asia Minor, preaching in the synagogues and turning to the Gentiles.', 'يُرسَل بولس وبرنابا من أنطاكية فيبحران إلى قبرص ثم يجتازان آسيا الصغرى، ويكرزان في المجامع ويتوجهان إلى الأمم.'),
    note: b('Dates follow the usual scholarly reckoning. The return leg, back through the same cities, is shown as one line.', 'التواريخ على التقدير المعتاد عند الدارسين. ويظهر طريق العودة، عبر المدن نفسها، خطًا واحدًا.'),
    stops: [
      s('antioch', 'Acts 13:1–3', b('The Spirit sets them apart', 'الروح يفرزهما')),
      s('seleucia', 'Acts 13:4', b('They sail from the port of Antioch', 'يبحران من ميناء أنطاكية')),
      s('salamis', 'Acts 13:4–5', b('Preach in the synagogues of Cyprus', 'يكرزان في مجامع قبرص')),
      s('paphos', 'Acts 13:6–12', b('The proconsul believes', 'الوالي يؤمن')),
      s('perga', 'Acts 13:13', b('John Mark leaves them', 'يوحنا مرقس يفارقهما')),
      s('antioch-pisidia', 'Acts 13:14–52', b('“We turn to the Gentiles”', '«نتوجه إلى الأمم»')),
      s('iconium', 'Acts 14:1–7', b('A great multitude believes', 'جمع كثير يؤمن')),
      s('lystra', 'Acts 14:8–20', b('Heals the lame man; is stoned', 'يشفي الأعرج؛ ويُرجم')),
      s('derbe', 'Acts 14:20–21', b('Makes many disciples', 'يتلمذ كثيرين')),
      s('attalia', 'Acts 14:25–26', b('They go down to Attalia and sail home', 'ينزلان إلى أتاليا ويبحران عائدين')),
      s('antioch', 'Acts 14:26–28', b('Returns and reports to the church', 'يرجعان ويخبران الكنيسة')),
    ],
  }),
  j({
    id: 'paul-2', era: 'apostles', hue: 130, certainty: 'secure',
    person: b('Paul and Silas', 'بولس وسيلا'), title: b('Paul’s second journey (about AD 49–52)', 'رحلة بولس الثانية (نحو ٤٩–٥٢ م)'),
    summary: b('Paul revisits the churches of Asia Minor, crosses into Europe after the vision of the man of Macedonia, and preaches at Philippi, Thessalonica, Athens and Corinth.', 'يزور بولس كنائس آسيا الصغرى، ثم يعبر إلى أوروبا بعد رؤيا الرجل المكدوني، ويكرز في فيلبي وتسالونيكي وأثينا وكورنثوس.'),
    stops: [
      s('antioch', 'Acts 15:36–40', b('Paul chooses Silas', 'بولس يختار سيلا')),
      s('tarsus', 'Acts 15:41', b('Strengthens the churches of Cilicia', 'يشدد الكنائس في كيليكية')),
      s('derbe', 'Acts 16:1', b('Revisits Derbe', 'يزور دربة ثانية')),
      s('lystra', 'Acts 16:1–3', b('Timothy joins them', 'تيموثاوس ينضم إليهما')),
      s('troas', 'Acts 16:8–10', b('The vision of the man of Macedonia', 'رؤيا الرجل المكدوني')),
      s('neapolis', 'Acts 16:11', b('Lands in Europe', 'يصلان إلى أوروبا')),
      s('philippi', 'Acts 16:12–40', b('Lydia; the jailer believes', 'ليدية؛ وإيمان السجان')),
      s('amphipolis', 'Acts 17:1', b('Pass through Amphipolis', 'يجتازان أمفيبوليس')),
      s('thessalonica', 'Acts 17:1–9', b('Three sabbaths in the synagogue', 'ثلاثة سبوت في المجمع')),
      s('berea', 'Acts 17:10–14', b('“They searched the Scriptures daily”', '«يفحصون الكتب كل يوم»')),
      s('athens', 'Acts 17:15–34', b('The Areopagus', 'أريوس باغوس')),
      s('corinth', 'Acts 18:1–18', b('A year and a half', 'سنة وستة أشهر')),
      s('cenchreae', 'Acts 18:18', b('Sails from Cenchreae', 'يُبحر من كنخريا')),
      s('ephesus', 'Acts 18:19–21', b('Reasons in the synagogue and sails on', 'يحاج في المجمع ثم يبحر')),
      s('caesarea', 'Acts 18:22', b('Lands at Caesarea', 'ينزل في قيصرية')),
      s('jerusalem', 'Acts 18:22', b('Goes up and greets the church', 'يصعد ويسلّم على الكنيسة')),
      s('antioch', 'Acts 18:22', b('Returns to Antioch', 'يرجع إلى أنطاكية')),
    ],
  }),
  j({
    id: 'paul-3', era: 'apostles', hue: 120, certainty: 'secure',
    person: b('Paul', 'بولس'), title: b('Paul’s third journey (about AD 53–57)', 'رحلة بولس الثالثة (نحو ٥٣–٥٧ م)'),
    summary: b('Paul spends about three years at Ephesus, travels through Macedonia and Greece, and returns by way of Troas and Miletus, resolved to go up to Jerusalem.', 'يقضي بولس نحو ثلاث سنين في أفسس، ثم يسافر عبر مكدونية واليونان، ويعود عن طريق ترواس وميليتس عازمًا على الصعود إلى أورشليم.'),
    stops: [
      s('antioch', 'Acts 18:23', b('Sets out again', 'يخرج ثانية')),
      s('ephesus', 'Acts 19:1–41', b('About three years of teaching', 'نحو ثلاث سنين من التعليم')),
      s('philippi', 'Acts 20:1–2', b('Goes into Macedonia', 'يمضي إلى مكدونية')),
      s('corinth', 'Acts 20:2–3', b('Three months in Greece', 'ثلاثة أشهر في اليونان')),
      s('troas', 'Acts 20:5–12', b('Raises Eutychus', 'يقيم أفتيخوس')),
      s('assos', 'Acts 20:13–14', b('Goes by land while the ship sails round', 'يسير براً بينما تدور السفينة')),
      s('mitylene', 'Acts 20:14', b('Boards at Assos; Mitylene', 'يركب في أسوس؛ ميتيليني')),
      s('samos', 'Acts 20:15', b('Touches at Samos', 'يرسون في ساموس')),
      s('miletus', 'Acts 20:15–38', b('Farewell to the Ephesian elders', 'وداع قسوس أفسس')),
      s('cos', 'Acts 21:1', b('Sails straight to Cos', 'يبحرون مباشرة إلى كوس')),
      s('rhodes', 'Acts 21:1', b('The next day to Rhodes', 'في اليوم التالي إلى رودس')),
      s('patara', 'Acts 21:1–2', b('Changes ship at Patara', 'يغيّرون السفينة في باتارا')),
      s('tyre', 'Acts 21:3–6', b('Seven days with the disciples', 'سبعة أيام مع التلاميذ')),
      s('ptolemais', 'Acts 21:7', b('Greets the brothers', 'يسلّم على الإخوة')),
      s('caesarea', 'Acts 21:8–14', b('Stays with Philip; Agabus’s warning', 'يقيم عند فيلبس؛ وتحذير أغابوس')),
      s('jerusalem', 'Acts 21:15–17', b('Arrives in Jerusalem', 'يصل إلى أورشليم')),
    ],
  }),
  j({
    id: 'paul-rome', era: 'apostles', hue: 110, certainty: 'secure',
    person: b('Paul', 'بولس'), title: b('The voyage to Rome (about AD 59–60)', 'الرحلة إلى رومية (نحو ٥٩–٦٠ م)'),
    summary: b('A prisoner, Paul sails from Caesarea, is caught in a storm off Crete, is shipwrecked on Malta and reaches Rome, where he preaches under guard.', 'بولس سجينًا يُبحر من قيصرية، وتدركه عاصفة قرب كريت، وتتحطم سفينته عند مليطة، ثم يصل إلى رومية حيث يكرز وهو تحت الحراسة.'),
    stops: [
      s('caesarea', 'Acts 27:1–2', b('Sets sail with the centurion Julius', 'يُبحر مع قائد المئة يوليوس')),
      s('sidon', 'Acts 27:3', b('Allowed to visit friends', 'يُؤذن له أن يزور أصدقاءه')),
      s('myra', 'Acts 27:5–6', b('Changes to an Alexandrian ship', 'ينتقل إلى سفينة إسكندرية')),
      s('cnidus', 'Acts 27:7', b('The wind turns the ship toward Crete', 'الريح تحوّل السفينة نحو كريت')),
      s('fair-havens', 'Acts 27:8–12', b('Warns that the voyage will be dangerous', 'ينذر بخطر الرحلة')),
      s('cauda', 'Acts 27:16–17', b('Under the lee of Cauda in the storm', 'تحت ظل كلودي في العاصفة')),
      s('malta', 'Acts 27:39–28:10', b('Shipwreck, and three months on Malta', 'تحطم السفينة وثلاثة أشهر في مليطة')),
      s('syracuse', 'Acts 28:12', b('Three days', 'ثلاثة أيام')),
      s('rhegium', 'Acts 28:13', b('Sails on', 'يُبحرون')),
      s('puteoli', 'Acts 28:13–14', b('Seven days with the brothers', 'سبعة أيام مع الإخوة')),
      s('three-taverns', 'Acts 28:15', b('The brothers meet him on the road', 'الإخوة يلاقونه في الطريق')),
      s('rome', 'Acts 28:14–31', b('Preaches “with all boldness, unhindered”', 'يكرز «بكل مجاهرة بلا مانع»')),
    ],
  }),
  j({
    id: 'mark', era: 'apostles', hue: 85, certainty: 'tradition',
    person: b('St Mark', 'القديس مرقس'), title: b('From Jerusalem to Alexandria', 'من أورشليم إلى الإسكندرية'),
    summary: b('John Mark, from Mary’s house in Jerusalem, travels with Barnabas and Paul and later with Barnabas to Cyprus. The Coptic Church holds that he then went to Egypt, founded the church of Alexandria and was martyred there.', 'يوحنا مرقس، من بيت مريم في أورشليم، يسافر مع برنابا وبولس ثم مع برنابا إلى قبرص. وتؤمن الكنيسة القبطية بأنه مضى بعد ذلك إلى مصر وأسس كنيسة الإسكندرية واستُشهد فيها.'),
    note: b('The first stops are in the Acts; the last leg, to Alexandria, rests on Church tradition (Eusebius, Church History 2.16) and is drawn dashed.', 'المحطات الأولى في سفر الأعمال؛ أما الشوط الأخير إلى الإسكندرية فيستند إلى تقليد الكنيسة (يوسابيوس، التاريخ الكنسي ٢: ١٦) ويُرسم متقطعًا.'),
    stops: [
      s('jerusalem', 'Acts 12:12', b('The house of Mary, mother of John Mark', 'بيت مريم أم يوحنا الملقب مرقس')),
      s('antioch', 'Acts 12:25', b('Returns with Barnabas and Saul to Antioch', 'يرجع مع برنابا وشاول إلى أنطاكية')),
      s('salamis', 'Acts 13:4–5', b('Goes with them to Cyprus', 'يمضي معهما إلى قبرص')),
      s('jerusalem', 'Acts 13:13', b('Leaves them at Perga and returns to Jerusalem', 'يفارقهما في برجة ويرجع إلى أورشليم')),
      s('salamis', 'Acts 15:37–39', b('Sails with Barnabas to Cyprus', 'يبحر مع برنابا إلى قبرص')),
      s('alexandria', '2 Timothy 4:11', b('Tradition: St Mark founds the church of Alexandria', 'التقليد: القديس مرقس يؤسس كنيسة الإسكندرية'), true),
    ],
  }),
  j({
    id: 'apollos', era: 'apostles', hue: 95, certainty: 'secure',
    person: b('Apollos of Alexandria', 'أبولس الإسكندري'), title: b('From Alexandria to Corinth', 'من الإسكندرية إلى كورنثوس'),
    summary: b('A learned Alexandrian Jew, mighty in the Scriptures, comes to Ephesus, is instructed more fully by Priscilla and Aquila, and goes on to Achaia to help the believers at Corinth.', 'يهودي إسكندري عالم قدير في الكتب يأتي إلى أفسس، فيشرح له بريسكلا وأكيلا طريق الله بأكثر تدقيق، ثم يمضي إلى أخائية ليعين المؤمنين في كورنثوس.'),
    stops: [
      s('alexandria', 'Acts 18:24', b('“A native of Alexandria, an eloquent man”', '«إسكندري الجنس، رجل فصيح»')),
      s('ephesus', 'Acts 18:24–26', b('Taught more accurately by Priscilla and Aquila', 'يعلّمه بريسكلا وأكيلا بتدقيق أكثر')),
      s('corinth', 'Acts 18:27–19:1', b('Greatly helps those who had believed', 'يعين كثيرًا الذين آمنوا')),
    ],
  }),
  j({
    id: 'john', era: 'apostles', hue: 70, certainty: 'secure',
    person: b('John', 'يوحنا'), title: b('Patmos and the seven letters', 'بطمس والرسائل السبع'),
    summary: b('On Patmos John is told to write what he sees to the seven churches; the letters follow the circuit of the cities from Ephesus to Laodicea.', 'في بطمس يُؤمر يوحنا أن يكتب ما يرى إلى الكنائس السبع؛ وتتبع الرسائل دورة المدن من أفسس إلى لاودكية.'),
    stops: [
      s('patmos', 'Revelation 1:9–11', b('“Write what you see in a book”', '«ما أنت ترى اكتب في كتاب»')),
      s('ephesus', 'Revelation 2:1–7', b('The church that left its first love', 'الكنيسة التي تركت محبتها الأولى')),
      s('smyrna', 'Revelation 2:8–11', b('“Be faithful until death”', '«كن أمينًا إلى الموت»')),
      s('pergamum', 'Revelation 2:12–17', b('Where Satan’s throne is', 'حيث كرسي الشيطان')),
      s('thyatira', 'Revelation 2:18–29', b('Love, service and faith', 'المحبة والخدمة والإيمان')),
      s('sardis', 'Revelation 3:1–6', b('“You are dead”: wake up', '«أنت ميت»: كن ساهرًا')),
      s('philadelphia', 'Revelation 3:7–13', b('An open door', 'بابٌ مفتوح')),
      s('laodicea', 'Revelation 3:14–22', b('“I stand at the door and knock”', '«هأنذا واقف على الباب وأقرع»')),
    ],
  }),
];

/** The first journeys written, then the others (see journeys-more.ts). */
export const JOURNEYS: readonly Journey[] = [...CORE, ...MORE_JOURNEYS];

export const JOURNEY_BY_ID: ReadonlyMap<string, Journey> = new Map(JOURNEYS.map((journey) => [journey.id, journey]));
