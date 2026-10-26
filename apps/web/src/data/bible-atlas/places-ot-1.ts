import { at, ev, hand } from './at.ts';
import type { AtlasPlace } from './types.ts';

/** More places of the Old Testament, part one: the patriarchs, the wilderness, the lands east of the Jordan, and the conquest. */
export const OT_ONE: readonly AtlasPlace[] = [
  // ───────────── Genesis ─────────────
  at({
    ob: 'gerar', era: 'patriarchs',
    name: ['Gerar', 'جرار'], modern: ['Tel Haror, Negev', 'تل هرور، النقب'],
    summary: ['A town of King Abimelech in the Negev where both Abraham and Isaac stayed, and where Isaac sowed and reaped a hundredfold.', 'بلدة الملك أبيمالك في النقب، نزل فيها إبراهيم وإسحاق، وزرع فيها إسحاق فأصاب مئة ضعف.'],
    events: [ev('Abraham and Sarah at Gerar', 'إبراهيم وسارة في جرار', 'Genesis 20:1–18'), ev('Isaac at Gerar in the famine', 'إسحاق في جرار وقت المجاعة', 'Genesis 26:1–6'), ev('Isaac sows and reaps a hundredfold', 'إسحاق يزرع فيصيب مئة ضعف', 'Genesis 26:12–22')],
  }),
  at({
    ob: 'beer-lahai-roi', era: 'patriarchs', kind: 'site',
    name: ['Beer-lahai-roi', 'بئر لحي رئي'], modern: ['Probably Ain Muweilih, Negev', 'غالبًا عين المويلح، النقب'],
    summary: ['The well where the angel of the Lord found Hagar, and where Isaac later lived.', 'البئر التي وجد عندها ملاك الرب هاجر، وسكن عندها إسحاق لاحقًا.'],
    events: [ev('The angel meets Hagar at the well', 'الملاك يلتقي هاجر عند البئر', 'Genesis 16:7–14'), ev('Isaac meditates in the field', 'إسحاق يتأمل في الحقل', 'Genesis 24:62–67'), ev('Isaac dwells by the well', 'إسحاق يسكن عند البئر', 'Genesis 25:11')],
  }),
  at({
    ob: 'zoar', era: 'patriarchs',
    name: ['Zoar', 'صوغر'], modern: ['Near es-Safi, south-east of the Dead Sea', 'قرب الصافي، جنوب شرق البحر الميت'],
    summary: ['The “little” town to which Lot fled from the destruction of Sodom.', 'البلدة «الصغيرة» التي هرب إليها لوط من هلاك سدوم.'],
    events: [ev('Lot flees to Zoar', 'لوط يهرب إلى صوغر', 'Genesis 19:20–23'), ev('Lot leaves Zoar for the hills', 'لوط يصعد من صوغر إلى الجبل', 'Genesis 19:30')],
  }),
  at({
    ob: 'erech', era: 'primeval',
    name: ['Erech (Uruk)', 'أرك'], modern: ['Warka, southern Iraq', 'الوركاء، جنوب العراق'],
    summary: ['One of the first cities of Nimrod’s kingdom in the land of Shinar.', 'إحدى أولى مدن مملكة نمرود في أرض شنعار.'],
    events: [ev('Nimrod’s kingdom begins at Babel, Erech and Accad', 'مملكة نمرود تبدأ في بابل وأرك وأكد', 'Genesis 10:8–10')],
  }),
  at({
    ob: 'asshur', era: ['primeval', 'kingdom'],
    name: ['Asshur', 'أشور'], modern: ['Qalat Sherqat, northern Iraq', 'قلعة الشرقاط، شمال العراق'],
    summary: ['The old capital of Assyria on the Tigris; the Bible traces its founding to the sons of Shem and Nimrod’s line.', 'عاصمة آشور القديمة على دجلة؛ ويعيد الكتاب تأسيسها إلى بني سام وسلالة نمرود.'],
    events: [ev('Asshur and Nineveh in the table of nations', 'أشور ونينوى في جدول الأمم', 'Genesis 10:11–12'), ev('Assyria’s merchants', 'تجار آشور', 'Ezekiel 27:23')],
  }),
  at({
    ob: 'calah', era: ['primeval', 'kingdom'],
    name: ['Calah', 'كالح'], modern: ['Nimrud, near Mosul', 'نمرود، قرب الموصل'],
    summary: ['An Assyrian capital between Asshur and Nineveh, “a great city”.', 'عاصمة آشورية بين أشور ونينوى، «المدينة العظيمة».'],
    events: [ev('Calah, between Nineveh and Resen', 'كالح بين نينوى ورَسَن', 'Genesis 10:11–12')],
  }),
  at({
    ob: 'goshen-3', id: 'goshen', era: ['patriarchs', 'exodus'], kind: 'region', cert: 'probable', lat: 30.6, lon: 31.9,
    name: ['Goshen', 'أرض جاسان'], modern: ['The eastern Nile Delta and Wadi Tumilat', 'شرق الدلتا ووادي الطميلات'],
    summary: ['The pasture land of Egypt given to Jacob’s family, where Israel grew into a nation.', 'أرض المرعى في مصر التي أُعطيت لعائلة يعقوب، حيث نما إسرائيل أمة.'],
    note: ['“Goshen” is usually placed in the eastern Delta; the marker is a rough centre.', 'تُوضع «جاسان» عادة في شرق الدلتا؛ والعلامة مركز تقريبي.'],
    events: [ev('Joseph sends for his father to live in Goshen', 'يوسف يرسل لأبيه ليسكن في جاسان', 'Genesis 45:9–11'), ev('Israel settles in Goshen', 'إسرائيل يستقر في جاسان', 'Genesis 47:1–6'), ev('Goshen spared from the plagues', 'جاسان تُنجّى من الضربات', 'Exodus 8:22')],
  }),

  // ───────────── The wilderness ─────────────
  at({
    ob: 'pithom', era: 'exodus',
    name: ['Pithom', 'فيثوم'], modern: ['Tell el-Retaba, Wadi Tumilat', 'تل الرطابة، وادي الطميلات'],
    summary: ['One of the two store-cities that enslaved Israel built for Pharaoh.', 'إحدى مدينتي المخازن اللتين بناهما بنو إسرائيل المستعبدون لفرعون.'],
    events: [ev('Israel builds Pithom and Raamses', 'إسرائيل يبني فيثوم ورعمسيس', 'Exodus 1:8–14')],
  }),
  at({
    ob: 'marah', era: 'exodus', kind: 'site',
    name: ['Marah', 'مارة'], modern: ['Perhaps Ain Hawarah, Sinai', 'ربما عين حوارة، سيناء'],
    summary: ['Where the bitter water was made sweet.', 'حيث صار الماء المرّ عذبًا.'],
    events: [ev('The bitter waters healed', 'شفاء المياه المرة', 'Exodus 15:22–26'), ev('The stage listed', 'المحطة في قائمة الرحلة', 'Numbers 33:8')],
  }),
  at({
    ob: 'elim', era: 'exodus', kind: 'site',
    name: ['Elim', 'إيليم'], modern: ['Perhaps along Wadi Gharandal, Sinai', 'ربما على وادي غرندل، سيناء'],
    summary: ['An oasis of twelve springs and seventy palm trees.', 'واحة فيها اثنتا عشرة عين ماء وسبعون نخلة.'],
    events: [ev('Twelve springs and seventy palms', 'اثنتا عشرة عينًا وسبعون نخلة', 'Exodus 15:27'), ev('The stage listed', 'المحطة في قائمة الرحلة', 'Numbers 33:9')],
  }),
  at({
    ob: ['rephidim', 'meribah-2', 'massah'], era: 'exodus', kind: 'site',
    name: ['Rephidim (Massah and Meribah)', 'رفيديم (مسة ومريبة)'], modern: ['Near Wadi Rufaiyil, Sinai (traditional)', 'قرب وادي رفيل، سيناء (تقليدي)'],
    summary: ['Where water flowed from the rock and Israel defeated Amalek while Moses’ hands were held up.', 'حيث تفجّر الماء من الصخرة وهزم إسرائيل عماليق بينما رُفعت يدا موسى.'],
    events: [ev('Water from the rock', 'ماء من الصخرة', 'Exodus 17:1–7'), ev('Amalek defeated while Moses’ hands are lifted', 'هزيمة عماليق ويدا موسى مرفوعتان', 'Exodus 17:8–16'), ev('Paul: “that Rock was Christ”', 'بولس: «والصخرة كانت المسيح»', '1 Corinthians 10:1–4')],
  }),
  at({
    ob: 'kibroth-hattaavah', era: 'exodus', kind: 'site',
    name: ['Kibroth-hattaavah', 'قبروت هتأوة'],
    summary: ['“The graves of craving”, where Israel lusted for meat and quail came from the sea.', '«قبور الشهوة»، حيث اشتهى إسرائيل اللحم فأقبل السلوى من البحر.'],
    events: [ev('The craving and the quail', 'الشهوة والسلوى', 'Numbers 11:4–35'), ev('Moses recalls the provocation', 'موسى يذكّر بالإغاظة', 'Deuteronomy 9:22')],
  }),
  at({
    ob: 'hazeroth', era: 'exodus', kind: 'site',
    name: ['Hazeroth', 'حضيروت'],
    summary: ['Where Miriam and Aaron spoke against Moses, and Miriam was healed after seven days outside the camp.', 'حيث تكلمت مريم وهارون على موسى، وبرئت مريم بعد سبعة أيام خارج المحلة.'],
    events: [ev('Miriam and Aaron against Moses', 'مريم وهارون على موسى', 'Numbers 12:1–16'), ev('The people move to Hazeroth', 'ارتحال الشعب إلى حضيروت', 'Numbers 11:35')],
  }),
  hand({
    id: 'mount-hor', lat: 30.3167, lon: 35.4083, era: 'exodus', kind: 'mountain', cert: 'tradition',
    name: ['Mount Hor', 'جبل هور'], modern: ['Traditionally Jebel Harun, near Petra', 'تقليديًا جبل هارون قرب البتراء'],
    summary: ['Where Aaron died and Eleazar took his priestly garments.', 'حيث مات هارون وأخذ العازار ثيابه الكهنوتية.'],
    note: ['Josephus and long tradition place it at Jebel Harun near Petra; other sites have been proposed.', 'يضعه يوسيفوس والتقليد القديم في جبل هارون قرب البتراء؛ واقتُرحت مواضع أخرى.'],
    events: [ev('The death of Aaron', 'موت هارون', 'Numbers 20:22–29'), ev('The stage listed', 'المحطة في قائمة الرحلة', 'Numbers 33:37–39'), ev('Moses recalls Aaron’s death at Hor', 'موسى يذكر موت هارون في هور', 'Deuteronomy 32:48–51')],
  }),
  at({
    ob: ['ezion-geber', 'elath'], era: ['exodus', 'kingdom'], kind: 'site',
    name: ['Ezion-geber and Elath', 'عصيون جابر وإيلة'], modern: ['The head of the Gulf of Aqaba', 'رأس خليج العقبة'],
    summary: ['The Red Sea port where Solomon built his fleet; the way of the wilderness march passed it.', 'ميناء البحر الأحمر الذي بنى فيه سليمان أسطوله؛ ومرّت به مسيرة البرية.'],
    events: [ev('A stage of the wilderness march', 'محطة من محطات البرية', 'Numbers 33:35–36'), ev('Israel passes Elath and Ezion-geber', 'مرور إسرائيل بإيلة وعصيون جابر', 'Deuteronomy 2:8'), ev('Solomon’s fleet', 'أسطول سليمان', '1 Kings 9:26–28'), ev('Jehoshaphat’s ships are wrecked', 'تحطم سفن يهوشافاط', '1 Kings 22:48')],
  }),
  at({
    ob: 'hormah', era: 'exodus', kind: 'site',
    name: ['Hormah', 'حرمة'],
    summary: ['Where Israel was beaten back after refusing to enter the land, and later took the Canaanite city.', 'حيث انكسر إسرائيل بعد رفضه دخول الأرض، ثم أخذ المدينة الكنعانية فيما بعد.'],
    events: [ev('Israel is routed as far as Hormah', 'هزيمة إسرائيل إلى حرمة', 'Numbers 14:39–45'), ev('The Canaanite city is destroyed', 'خراب المدينة الكنعانية', 'Numbers 21:1–3'), ev('Judah and Simeon take Zephath', 'يهوذا وشمعون يأخذان صفاة', 'Judges 1:17')],
  }),

  // ───────────── East of the Jordan ─────────────
  at({
    ob: 'heshbon', era: 'exodus',
    name: ['Heshbon', 'حشبون'], modern: ['Tell Hesban, Jordan', 'تل حسبان، الأردن'],
    summary: ['The capital of Sihon, king of the Amorites, taken by Israel on the way to the Jordan.', 'عاصمة سيحون ملك الأموريين، أخذها إسرائيل في طريقه إلى الأردن.'],
    events: [ev('Sihon refuses passage and is defeated', 'سيحون يمنع العبور وينهزم', 'Numbers 21:21–31'), ev('Moses recalls the victory', 'موسى يذكّر بالنصرة', 'Deuteronomy 2:24–37'), ev('“The pools of Heshbon”', '«برك حشبون»', 'Song of Songs 7:4')],
  }),
  at({
    ob: 'edrei-1', era: 'exodus',
    name: ['Edrei', 'إذرعي'], modern: ['Daraa, Syria', 'درعا، سوريا'],
    summary: ['Where Og, king of Bashan, was defeated.', 'حيث هُزم عوج ملك باشان.'],
    events: [ev('Og defeated at Edrei', 'هزيمة عوج في إذرعي', 'Numbers 21:33–35'), ev('Moses recalls Og’s defeat', 'موسى يذكّر بهزيمة عوج', 'Deuteronomy 3:1–11')],
  }),
  at({
    ob: 'medeba', era: ['exodus', 'kingdom'],
    name: ['Medeba', 'ميدبا'], modern: ['Madaba, Jordan', 'مادبا، الأردن'],
    summary: ['A Moabite town on the plateau, later a Christian city famous for the sixth-century mosaic map of the Holy Land.', 'بلدة موآبية على الهضبة، صارت لاحقًا مدينة مسيحية اشتهرت بخريطة الفسيفساء للأرض المقدسة من القرن السادس.'],
    events: [ev('Taken from the Amorites', 'تؤخذ من الأموريين', 'Numbers 21:30'), ev('Allotted to Reuben', 'تُعطى لرأوبين', 'Joshua 13:9'), ev('Moab laments at Medeba', 'موآب ينوح على ميدبا', 'Isaiah 15:2')],
  }),
  at({
    ob: 'dibon-1', era: ['exodus', 'kingdom'],
    name: ['Dibon', 'ديبون'], modern: ['Dhiban, Jordan', 'ذيبان، الأردن'],
    summary: ['The capital of Moab, where the Mesha Stele was found, a king’s own account of the war the Bible tells in 2 Kings 3.', 'عاصمة موآب، وُجدت فيها مسلة ميشع، رواية الملك نفسه للحرب التي يرويها سفر الملوك الثاني ٣.'],
    events: [ev('Dibon taken from Sihon', 'ديبون تؤخذ من سيحون', 'Numbers 21:30'), ev('Mesha king of Moab rebels against Israel', 'ميشع ملك موآب يتمرد على إسرائيل', '2 Kings 3:4–27'), ev('Dibon in Jeremiah’s oracle on Moab', 'ديبون في نبوة إرميا على موآب', 'Jeremiah 48:18–22')],
    evidence: ['israelite-and-judean-kings'],
  }),
  at({
    ob: 'valley-of-the-arnon', era: 'exodus', kind: 'site',
    name: ['The Arnon', 'وادي أرنون'], modern: ['Wadi Mujib, Jordan', 'وادي الموجب، الأردن'],
    summary: ['The deep gorge that was the border between Moab and the Amorites, and later the southern edge of Israel’s eastern lands.', 'الوادي العميق الذي كان حدًا بين موآب والأموريين، ثم الحد الجنوبي لأراضي إسرائيل الشرقية.'],
    events: [ev('The border of Moab', 'حد موآب', 'Numbers 21:13–15'), ev('Israel crosses the Arnon', 'إسرائيل يعبر أرنون', 'Deuteronomy 2:24'), ev('Jephthah recalls the border', 'يفتاح يذكر الحد', 'Judges 11:18–22')],
  }),
  at({
    ob: 'shittim', era: 'exodus', kind: 'site',
    name: ['Shittim', 'شطيم'], modern: ['Probably Tall el-Hammam, Jordan Valley', 'غالبًا تل الحمّام، غور الأردن'],
    summary: ['Israel’s last camp east of the Jordan, from which Joshua sent the spies to Jericho.', 'آخر محلة لإسرائيل شرقي الأردن، منها أرسل يشوع الجاسوسين إلى أريحا.'],
    events: [ev('Israel at Shittim: the sin of Baal-peor', 'إسرائيل في شطيم: خطية بعل فغور', 'Numbers 25:1–9'), ev('Joshua sends two spies', 'يشوع يرسل جاسوسين', 'Joshua 2:1'), ev('Israel sets out for the Jordan', 'إسرائيل يرتحل نحو الأردن', 'Joshua 3:1')],
  }),
  at({
    ob: ['peor', 'baal-peor', 'beth-peor'], era: 'exodus', kind: 'mountain',
    name: ['Peor and Beth-peor', 'فغور وبيت فغور'], modern: ['Near Mount Nebo, Jordan', 'قرب جبل نبو، الأردن'],
    summary: ['The mountain where Balaam looked on Israel and tried in vain to curse it; the valley opposite which Moses was buried.', 'الجبل الذي نظر منه بلعام إلى إسرائيل وحاول عبثًا أن يلعنه؛ والوادي الذي دُفن موسى مقابله.'],
    events: [ev('Balaam on the top of Peor', 'بلعام على رأس فغور', 'Numbers 23:27–24:9'), ev('Israel yokes itself to Baal of Peor', 'إسرائيل يقترن ببعل فغور', 'Numbers 25:1–5'), ev('Moses is buried in the valley opposite Beth-peor', 'دفن موسى في الوادي مقابل بيت فغور', 'Deuteronomy 34:5–6')],
  }),
  at({
    ob: 'mount-hermon', era: ['exodus', 'kingdom'], kind: 'mountain',
    name: ['Mount Hermon', 'جبل حرمون'], modern: ['Jabal ash-Sheikh, Lebanon–Syria border', 'جبل الشيخ، على حدود لبنان وسوريا'],
    summary: ['The snow-capped peak on the northern edge of the land, called Sirion by the Sidonians and Senir by the Amorites.', 'القمة المكلّلة بالثلج على الحد الشمالي للأرض، يسميها الصيدونيون سريون والأموريون سنير.'],
    events: [ev('The northern boundary of Israel’s conquests', 'الحد الشمالي لفتوحات إسرائيل', 'Deuteronomy 3:8–9'), ev('“The dew of Hermon”', '«ندى حرمون»', 'Psalms 133:1–3'), ev('Tabor and Hermon sing for joy', 'طابور وحرمون يهللان', 'Psalms 89:11–13'), ev('Proposed by some as the mountain of the Transfiguration', 'يقترحه بعضهم جبلًا للتجلي', 'Matthew 17:1–9', true)],
  }),
  at({
    ob: 'pisgah', era: 'exodus', kind: 'mountain', cert: 'probable',
    name: ['Mount Pisgah', 'جبل فسجة'], modern: ['Ras Siyagha, Jordan', 'رأس السياغة، الأردن'],
    summary: ['The “top of Pisgah”, the ridge of Abarim from which Moses saw the whole land.', '«رأس الفسجة»، قمة جبال عباريم التي أبصر منها موسى الأرض كلها.'],
    events: [ev('Balaam is brought to the top of Pisgah', 'بلعام يُؤتى به إلى رأس الفسجة', 'Numbers 23:14'), ev('Moses sees the land from Pisgah', 'موسى يرى الأرض من الفسجة', 'Deuteronomy 3:27'), ev('The top of Pisgah: Moses’ view', 'من رأس الفسجة: نظر موسى', 'Deuteronomy 34:1–4')],
  }),

  // ───────────── The conquest ─────────────
  at({
    ob: ['mount-ebal'], era: 'exodus', kind: 'mountain',
    name: ['Mount Ebal', 'جبل عيبال'], modern: ['Jebel Islamiya, above Nablus', 'جبل عيبال، فوق نابلس'],
    summary: ['The mountain of the curse, where Joshua built an altar and wrote the law on stones.', 'جبل اللعنة، حيث بنى يشوع مذبحًا وكتب الناموس على الحجارة.'],
    events: [ev('The altar and the stones on Ebal', 'المذبح والحجارة على عيبال', 'Deuteronomy 27:1–8'), ev('The curses proclaimed from Ebal', 'اللعنات تُعلن من عيبال', 'Deuteronomy 27:11–26'), ev('Joshua keeps the command', 'يشوع ينفذ الوصية', 'Joshua 8:30–35')],
  }),
  at({
    ob: ['mount-gerizim'], era: ['exodus', 'christ'], kind: 'mountain',
    name: ['Mount Gerizim', 'جبل جرزيم'], modern: ['Jebel et-Tur, above Nablus', 'جبل الطور، فوق نابلس'],
    summary: ['The mountain of blessing, and the holy mountain of the Samaritans, of which the Samaritan woman spoke to Jesus.', 'جبل البركة، والجبل المقدس عند السامريين، الذي حدّثت المرأة السامرية يسوع عنه.'],
    events: [ev('The blessing on Gerizim', 'البركة على جرزيم', 'Deuteronomy 11:26–29'), ev('Jotham’s parable from Gerizim', 'مثل يوثام من جرزيم', 'Judges 9:7–21'), ev('“Our fathers worshipped on this mountain”', '«آباؤنا سجدوا في هذا الجبل»', 'John 4:19–24')],
  }),
  at({
    ob: ['ai-1', 'ai-3'], era: ['patriarchs', 'exodus'],
    name: ['Ai', 'عاي'], modern: ['Probably et-Tell (or Khirbet el-Maqatir)', 'غالبًا خربة التل (أو خربة المقاطر)'],
    summary: ['The town taken after Achan’s sin was uncovered; its name means “the ruin”.', 'البلدة التي أُخذت بعد كشف خطية عخان؛ واسمها يعني «الخربة».'],
    note: ['Two sites near Bethel are proposed, and the archaeology is debated.', 'يُقترح موضعان قرب بيت إيل، والآثار موضع جدل.'],
    events: [ev('Abram pitches his tent between Bethel and Ai', 'أبرام ينصب خيمته بين بيت إيل وعاي', 'Genesis 12:8'), ev('Defeat at Ai and the sin of Achan', 'الهزيمة في عاي وخطية عخان', 'Joshua 7:1–26'), ev('Ai is taken by ambush', 'أخذ عاي بالكمين', 'Joshua 8:1–29')],
    evidence: ['conquest-narratives'],
  }),
  at({
    ob: ['beth-horon', 'lower-beth-horon', 'upper-beth-horon'], era: ['exodus', 'kingdom'],
    name: ['Beth-horon', 'بيت حورون'], modern: ['Beit Ur al-Tahta and al-Fauqa', 'بيت عور التحتا والفوقا'],
    summary: ['The pass from the coast up to Jerusalem, where Joshua’s enemies fled under a storm of hailstones.', 'العقبة الصاعدة من الساحل إلى أورشليم، حيث هرب أعداء يشوع تحت عاصفة من حجارة البرد.'],
    events: [ev('Hailstones fall on the fleeing kings', 'حجارة البرد تسقط على الملوك الهاربين', 'Joshua 10:10–11'), ev('Solomon fortifies both Beth-horons', 'سليمان يحصّن بيت حورون العليا والسفلى', '1 Kings 9:17')],
  }),
  at({
    ob: 'aijalon-1', era: ['exodus', 'kingdom'],
    name: ['Aijalon', 'أيلون'], modern: ['Yalo, near Latrun', 'يالو، قرب اللطرون'],
    summary: ['The valley over which Joshua said, “Moon, in the valley of Aijalon.”', 'الوادي الذي قال يشوع فوقه: «والقمر على وادي أيلون».'],
    events: [ev('The sun and moon stand still', 'الشمس والقمر يقفان', 'Joshua 10:12–14'), ev('Saul’s army pursues to Aijalon', 'جيش شاول يطارد إلى أيلون', '1 Samuel 14:31')],
  }),
  at({
    ob: 'makkedah', era: 'exodus',
    name: ['Makkedah', 'مقيدة'],
    summary: ['The cave where five Amorite kings hid and were taken.', 'المغارة التي اختبأ فيها خمسة ملوك أموريين فأُخذوا.'],
    events: [ev('The five kings in the cave', 'الملوك الخمسة في المغارة', 'Joshua 10:16–27'), ev('Makkedah taken', 'أخذ مقيدة', 'Joshua 10:28')],
  }),
  at({
    ob: 'libnah-1', era: ['exodus', 'kingdom'],
    name: ['Libnah', 'لبنة'],
    summary: ['A Canaanite town taken by Joshua; later it rebelled against Judah, and Sennacherib fought there.', 'بلدة كنعانية أخذها يشوع؛ ثم عصت يهوذا، وحاربها سنحاريب.'],
    events: [ev('Joshua takes Libnah', 'يشوع يأخذ لبنة', 'Joshua 10:29–30'), ev('Libnah revolts against Joram', 'لبنة تعصى على يورام', '2 Kings 8:20–22'), ev('Sennacherib at Libnah', 'سنحاريب عند لبنة', '2 Kings 19:8')],
  }),
  at({
    ob: 'eglon', era: 'exodus',
    name: ['Eglon', 'عجلون'],
    summary: ['A Canaanite town of the lowland taken by Joshua after Lachish.', 'بلدة كنعانية في السهل أخذها يشوع بعد لخيش.'],
    events: [ev('Joshua takes Eglon', 'يشوع يأخذ عجلون', 'Joshua 10:34–35')],
  }),
  at({
    ob: 'debir-1', era: ['exodus', 'kingdom'],
    name: ['Debir', 'دبير'], modern: ['Khirbet Rabud, south of Hebron', 'خربة رابود، جنوب الخليل'],
    summary: ['Once called Kiriath-sepher, taken by Othniel, who won Caleb’s daughter Achsah as his wife.', 'كانت تُدعى قرية سفر، أخذها عثنيئيل ونال بذلك عكسة ابنة كالب زوجة.'],
    events: [ev('Joshua takes Debir', 'يشوع يأخذ دبير', 'Joshua 10:38–39'), ev('Othniel wins Achsah, who asks for springs', 'عثنيئيل ينال عكسة وهي تطلب ينابيع', 'Joshua 15:15–19'), ev('The same story in Judges', 'القصة نفسها في سفر القضاة', 'Judges 1:11–15')],
  }),
  at({
    ob: 'gezer', era: ['exodus', 'kingdom'],
    name: ['Gezer', 'جازر'], modern: ['Tel Gezer, near Ramla', 'تل جزر، قرب الرملة'],
    summary: ['A strong Canaanite city that Israel did not drive out; Pharaoh later took it and gave it to Solomon as his daughter’s dowry.', 'مدينة كنعانية قوية لم يطردها إسرائيل؛ وأخذها فرعون لاحقًا ووهبها لسليمان مهرًا لابنته.'],
    events: [ev('Gezer’s king defeated, its people not driven out', 'هزيمة ملك جازر وبقاء أهلها', 'Joshua 10:33'), ev('The Canaanites remain in Gezer', 'الكنعانيون يبقون في جازر', 'Joshua 16:10'), ev('Pharaoh gives Gezer to Solomon', 'فرعون يعطي جازر لسليمان', '1 Kings 9:15–17')],
    evidence: ['israelite-and-judean-kings'],
  }),
  at({
    ob: 'hazor-1', era: ['exodus', 'kingdom'],
    name: ['Hazor', 'حاصور'], modern: ['Tel Hazor, Upper Galilee', 'تل حاصور، الجليل الأعلى'],
    summary: ['“The head of all those kingdoms”: the largest city of Canaan, burned by Joshua; Solomon later fortified it, and Assyria took it.', '«رأس جميع تلك الممالك»: أكبر مدن كنعان، أحرقها يشوع؛ وحصّنها سليمان لاحقًا، وأخذها آشور.'],
    events: [ev('Joshua burns Hazor', 'يشوع يحرق حاصور', 'Joshua 11:1–15'), ev('Jabin of Hazor and Deborah’s victory', 'يابين ملك حاصور ونصرة دبورة', 'Judges 4:1–24'), ev('Solomon fortifies Hazor', 'سليمان يحصّن حاصور', '1 Kings 9:15'), ev('Tiglath-pileser takes Hazor', 'تغلث فلاسر يأخذ حاصور', '2 Kings 15:29')],
    evidence: ['conquest-narratives', 'israelite-and-judean-kings'],
  }),
];
