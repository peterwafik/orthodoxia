import type { Bilingual, Certainty, EraId, Journey, Stop } from './types.ts';

/** More journeys: the ark, David’s flight, the prophets, the last week of Jesus, and the apostles’ journeys known from tradition. */
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

const TRADITION_NOTE = b(
  'The dashed legs rest on the tradition of the Church, not on the text of the New Testament.',
  'الأشواط المتقطعة تستند إلى تقليد الكنيسة لا إلى نص العهد الجديد.',
);

export const MORE_JOURNEYS: readonly Journey[] = [
  j({
    id: 'ark', era: 'kingdom', hue: 8, certainty: 'probable',
    person: b('The ark of the covenant', 'تابوت العهد'), title: b('From Shiloh to Jerusalem', 'من شيلوه إلى أورشليم'),
    summary: b('Carried into battle, the ark is captured by the Philistines, brings plague to their cities, is sent back, rests twenty years at Kiriath-jearim, and is at last brought by David to Jerusalem.', 'يُحمل التابوت إلى الحرب فيأسره الفلسطينيون، ويجلب الوباء لمدنهم، ثم يُرَدّ، ويستقر عشرين سنة في قرية يعاريم، وأخيرًا يصعده داود إلى أورشليم.'),
    stops: [
      s('shiloh', '1 Samuel 4:3–4', b('The elders fetch the ark from Shiloh', 'الشيوخ يأتون بالتابوت من شيلوه')),
      s('antipatris', '1 Samuel 4:10–11', b('The ark is captured near Aphek', 'أخذ التابوت قرب أفيق')),
      s('ashdod', '1 Samuel 5:1–5', b('Dagon falls before the ark', 'داجون يسقط أمام التابوت')),
      s('gath', '1 Samuel 5:8–9', b('The plague moves to Gath', 'الوباء ينتقل إلى جت')),
      s('ekron', '1 Samuel 5:10–12', b('And to Ekron', 'ثم إلى عقرون')),
      s('beth-shemesh', '1 Samuel 6:10–15', b('The cows bring it back', 'البقرتان تعيدان التابوت')),
      s('kiriath-jearim', '1 Samuel 7:1–2', b('Twenty years in Abinadab’s house', 'عشرون سنة في بيت أبيناداب')),
      s('jerusalem', '2 Samuel 6:12–19', b('David brings it up with dancing', 'داود يصعده بالرقص')),
    ],
  }),
  j({
    id: 'david-fugitive', era: 'kingdom', hue: 358, certainty: 'probable',
    person: b('David', 'داود'), title: b('David on the run from Saul', 'داود هاربًا من شاول'),
    summary: b('Hunted by King Saul, David flees from Gibeah through the hill country of Judah and the wilderness, twice sparing Saul’s life, until Saul falls at Gilboa and David is made king at Hebron.', 'يطارده الملك شاول فيهرب داود من جبعة عبر جبال يهوذا والبرية، ويعفو مرتين عن حياة شاول، حتى يسقط شاول في جلبوع ويُملَّك داود في حبرون.'),
    note: b('The order follows the book of Samuel; some of the places are only approximately located.', 'الترتيب بحسب سفر صموئيل؛ وبعض المواضع محدد على وجه التقريب فقط.'),
    stops: [
      s('gibeah', '1 Samuel 19:9–12', b('Saul throws a spear; David escapes', 'شاول يرمي حربة؛ وداود ينجو')),
      s('ramah', '1 Samuel 19:18', b('Takes refuge with Samuel', 'يلجأ إلى صموئيل')),
      s('nob', '1 Samuel 21:1–9', b('The holy bread and Goliath’s sword', 'الخبز المقدس وسيف جليات')),
      s('gath', '1 Samuel 21:10–15', b('Feigns madness before Achish', 'يتظاهر بالجنون أمام أخيش')),
      s('adullam', '1 Samuel 22:1', b('The cave; four hundred men gather', 'المغارة؛ ويجتمع أربعمئة رجل')),
      s('keilah', '1 Samuel 23:5', b('Saves Keilah', 'ينقذ قعيلة')),
      s('ziph', '1 Samuel 23:14', b('Hides in the wilderness of Ziph', 'يختبئ في برية زيف')),
      s('maon', '1 Samuel 23:25–28', b('Saul closes in; the Philistines draw him off', 'شاول يقترب؛ والفلسطينيون يصرفونه')),
      s('en-gedi', '1 Samuel 24:1–7', b('Spares Saul in the cave', 'يعفو عن شاول في المغارة')),
      s('carmel-judah', '1 Samuel 25:2–42', b('Abigail turns him from vengeance', 'أبيجايل تردّه عن الانتقام')),
      s('ziklag', '1 Samuel 27:5–7', b('Lives among the Philistines', 'يسكن بين الفلسطينيين')),
      s('hebron', '2 Samuel 2:1–4', b('Anointed king over Judah', 'يُمسح ملكًا على يهوذا')),
    ],
  }),
  j({
    id: 'jehu', era: 'kingdom', hue: 345, certainty: 'probable',
    person: b('Jehu', 'ياهو'), title: b('The anointing of Jehu', 'مسح ياهو'),
    summary: b('Anointed at Ramoth-gilead, Jehu drives to Jezreel, ends the house of Ahab and Jezebel, and continues to Samaria.', 'يُمسح ياهو في راموت جلعاد، ويسوق مركبته إلى يزرعيل، وينهي بيت أخآب وإيزابل، ثم يمضي إلى السامرة.'),
    stops: [
      s('ramoth-gilead', '2 Kings 9:1–13', b('A young prophet anoints him', 'نبي شاب يمسحه')),
      s('jezreel', '2 Kings 9:16–37', b('Jehoram and Jezebel die', 'موت يورام وإيزابل')),
      s('samaria', '2 Kings 10:12–17', b('Jehu goes on to Samaria', 'ياهو يمضي إلى السامرة')),
    ],
  }),
  j({
    id: 'naaman', era: 'kingdom', hue: 190, certainty: 'probable',
    person: b('Naaman', 'نعمان'), title: b('The healing of Naaman', 'شفاء نعمان'),
    summary: b('A Syrian commander with leprosy travels from Damascus to the king of Israel, is sent to Elisha, and is cleansed in the Jordan.', 'قائد سوري أبرص يسافر من دمشق إلى ملك إسرائيل، فيُرسَل إلى أليشع، ويبرأ في الأردن.'),
    stops: [
      s('damascus', '2 Kings 5:1–5', b('A captive girl tells of the prophet', 'جارية مسبية تحدّث عن النبي')),
      s('samaria', '2 Kings 5:6–10', b('Elisha sends word: “Wash in the Jordan”', 'أليشع يرسل: «اغتسل في الأردن»')),
      s('jordan', '2 Kings 5:14', b('He dips seven times and is clean', 'يغطس سبع مرات ويطهر')),
    ],
  }),
  j({
    id: 'sheba', era: 'kingdom', hue: 30, certainty: 'tradition',
    person: b('The queen of Sheba', 'ملكة سبأ'), title: b('To hear the wisdom of Solomon', 'لتسمع حكمة سليمان'),
    summary: b('Having heard of Solomon’s fame, the queen of Sheba comes to Jerusalem with camels, spices and gold to test him with hard questions.', 'إذ سمعت ملكة سبأ بخبر سليمان تأتي إلى أورشليم بجمال وطيب وذهب لتمتحنه بمسائل عويصة.'),
    note: b('Where Sheba lay is uncertain (Arabia or Ethiopia), so the line is dashed.', 'موضع سبأ غير مؤكد (جزيرة العرب أو إثيوبيا)، فالخط متقطع.'),
    stops: [
      s('sheba', '1 Kings 10:1', b('She hears of Solomon’s fame', 'تسمع بخبر سليمان')),
      s('jerusalem', '1 Kings 10:2–13', b('“The half was not told me”', '«لم يُخبَروني بنصفه»'), true),
    ],
  }),
  j({
    id: 'ezekiel', era: 'exile', hue: 285, certainty: 'secure',
    person: b('Ezekiel', 'حزقيال'), title: b('Carried to Babylon with Jehoiachin', 'يُسبى إلى بابل مع يهوياكين'),
    summary: b('A priest of Jerusalem, Ezekiel is taken to Babylon in 597 BC and receives his call among the exiles by the river Chebar.', 'كاهن من أورشليم، يُسبى حزقيال إلى بابل سنة ٥٩٧ ق.م ويتلقى دعوته بين المسبيين عند نهر خابور.'),
    stops: [
      s('jerusalem', '2 Kings 24:14–16', b('The craftsmen and leaders are carried away', 'يُسبى الصناع والوجهاء')),
      s('tel-abib', 'Ezekiel 1:1–3', b('The heavens are opened by the river Chebar', 'تنفتح السماوات عند نهر خابور')),
    ],
  }),
  j({
    id: 'daniel', era: 'exile', hue: 262, certainty: 'secure',
    person: b('Daniel', 'دانيال'), title: b('From Jerusalem to the courts of Babylon and Susa', 'من أورشليم إلى بلاطات بابل وشوشن'),
    summary: b('Taken as a young man from Jerusalem, Daniel serves in the court of Babylon and later has a vision at Susa.', 'يُؤخذ دانيال شابًا من أورشليم، فيخدم في بلاط بابل، ثم تأتيه رؤيا في شوشن.'),
    stops: [
      s('jerusalem', 'Daniel 1:1–2', b('Nebuchadnezzar takes the first exiles', 'نبوخذنصر يأخذ أول المسبيين')),
      s('babylon', 'Daniel 1:3–21', b('Trained in the king’s court', 'يتدرب في بلاط الملك')),
      s('susa', 'Daniel 8:1–2', b('A vision at Susa by the river Ulai', 'رؤيا في شوشن عند نهر أولاي')),
    ],
  }),
  j({
    id: 'jesus-last-week', era: 'christ', hue: 52, certainty: 'secure',
    person: b('Jesus Christ', 'يسوع المسيح'), title: b('The last week', 'الأسبوع الأخير'),
    summary: b('From Bethany, Jesus enters Jerusalem on a colt, teaches on the Mount of Olives, eats the last supper, prays in Gethsemane, is tried and crucified at Golgotha, and is laid in the tomb.', 'من بيت عنيا يدخل يسوع أورشليم على جحش، ويعلّم على جبل الزيتون، ويتناول العشاء الأخير، ويصلي في جثسيماني، ثم يُحاكم ويُصلب على الجلجثة ويوضع في القبر.'),
    note: b('The Gospels give the events day by day; the places follow the order of the narrative.', 'تروي الأناجيل الأحداث يومًا بيوم؛ وترتيب المواضع على ترتيب السرد.'),
    stops: [
      s('bethany', 'John 12:1–11', b('Mary anoints him six days before the Passover', 'مريم تدهنه قبل الفصح بستة أيام')),
      s('bethphage', 'Matthew 21:1–7', b('The colt is fetched', 'إحضار الجحش')),
      s('jerusalem', 'Matthew 21:8–17', b('“Hosanna to the Son of David!”', '«أوصنا لابن داود!»')),
      s('mount-of-olives', 'Matthew 24:1–3', b('Teaches his disciples on Olivet', 'يعلّم تلاميذه على جبل الزيتون')),
      s('jerusalem', 'Luke 22:7–20', b('The Last Supper in the upper room', 'العشاء الأخير في العلية')),
      s('gethsemane', 'Matthew 26:36–46', b('The prayer in the garden', 'الصلاة في البستان')),
      s('jerusalem', 'John 18:12–19:16', b('Before Caiaphas and Pilate', 'أمام قيافا وبيلاطس')),
      s('golgotha', 'John 19:17–42', b('Crucified and laid in the tomb', 'يُصلب ويوضع في القبر')),
    ],
  }),
  j({
    id: 'peter-rome', era: 'apostles', hue: 200, certainty: 'tradition',
    person: b('Peter', 'بطرس'), title: b('From Jerusalem by Antioch to Rome', 'من أورشليم عبر أنطاكية إلى رومية'),
    summary: b('After his release from prison Peter “went to another place”; he is met at Antioch by Paul, and the Church holds that he ended his ministry at Rome.', 'بعد إطلاقه من السجن «خرج وذهب إلى موضع آخر»؛ ولقيه بولس في أنطاكية، وتؤمن الكنيسة بأنه ختم خدمته في رومية.'),
    note: TRADITION_NOTE,
    stops: [
      s('jerusalem', 'Acts 12:6–17', b('Freed from prison by an angel', 'يحرره ملاك من السجن')),
      s('antioch', 'Galatians 2:11–14', b('Paul opposes him to his face', 'بولس يقاومه مواجهةً')),
      s('rome', '1 Peter 5:13', b('“She who is in Babylon” sends greetings', '«التي في بابل» تسلّم عليكم'), true),
    ],
  }),
  j({
    id: 'paul-prisoner', era: 'apostles', hue: 100, certainty: 'secure',
    person: b('Paul', 'بولس'), title: b('Under guard from Jerusalem to Caesarea', 'تحت الحراسة من أورشليم إلى قيصرية'),
    summary: b('To save him from a plot, the Roman commander sends Paul by night with four hundred and seventy soldiers to Antipatris, then Caesarea.', 'لإنقاذه من مؤامرة يرسل القائد الروماني بولس ليلًا مع أربعمئة وسبعين جنديًا إلى أنتيباترس ثم قيصرية.'),
    stops: [
      s('jerusalem', 'Acts 23:10–22', b('The plot of the forty men', 'مؤامرة الأربعين رجلًا')),
      s('antipatris', 'Acts 23:31–32', b('The night march', 'مسير الليل')),
      s('caesarea', 'Acts 23:33–35', b('Brought before Felix', 'يُحضَر أمام فيلكس')),
    ],
  }),
  j({
    id: 'paul-spain', era: 'apostles', hue: 90, certainty: 'tradition',
    person: b('Paul', 'بولس'), title: b('The plan to go to Spain', 'العزم على الذهاب إلى إسبانيا'),
    summary: b('Paul writes that he hopes to visit Rome on his way to Spain; Clement of Rome says he reached “the limit of the West”.', 'يكتب بولس أنه يرجو زيارة رومية في طريقه إلى إسبانيا؛ ويقول إكليمندس الروماني إنه بلغ «حدّ الغرب».'),
    note: TRADITION_NOTE,
    stops: [
      s('rome', 'Romans 15:23–24', b('“When I go to Spain I hope to see you”', '«حين أذهب إلى إسبانيا أرجو أن أراكم»')),
      s('spain', 'Romans 15:28', b('“I will go on by way of you to Spain”', '«أمضي إلى إسبانيا»'), true),
    ],
  }),
  j({
    id: 'thomas', era: 'apostles', hue: 20, certainty: 'tradition',
    person: b('Thomas', 'توما'), title: b('To India', 'إلى الهند'),
    summary: b('The apostle who confessed “My Lord and my God” is held by the ancient Churches to have carried the gospel to India, where he was martyred.', 'الرسول الذي اعترف «ربي وإلهي» يؤمن القدماء من الكنائس بأنه حمل الإنجيل إلى الهند حيث استُشهد.'),
    note: TRADITION_NOTE,
    stops: [
      s('jerusalem', 'John 20:24–29', b('“My Lord and my God!”', '«ربي وإلهي!»')),
      s('muziris', 'Acts 1:8', b('“To the end of the earth”: tradition says he landed in India', '«إلى أقصى الأرض»: يقول التقليد إنه نزل في الهند'), true),
      s('mylapore', 'John 14:5–6', b('His martyrdom, by tradition', 'استشهاده بحسب التقليد'), true),
    ],
  }),
  j({
    id: 'andrew', era: 'apostles', hue: 215, certainty: 'tradition',
    person: b('Andrew', 'أندراوس'), title: b('The first-called, to Achaia', 'المدعو أولًا إلى أخائية'),
    summary: b('Andrew, who first brought his brother to Jesus, is held by tradition to have preached in Greece and to have been martyred at Patras.', 'أندراوس، الذي جاء بأخيه أولًا إلى يسوع، يقول التقليد إنه بشّر في اليونان واستُشهد في باتراس.'),
    note: TRADITION_NOTE,
    stops: [
      s('bethsaida', 'John 1:40–44', b('Andrew brings Simon to Jesus', 'أندراوس يأتي بسمعان إلى يسوع')),
      s('jerusalem', 'Acts 1:13–14', b('Among the apostles in the upper room', 'بين الرسل في العلية')),
      s('patras', 'Matthew 28:19–20', b('Preaches in Achaia and is martyred (tradition)', 'يكرز في أخائية ويُستشهد (تقليد)'), true),
    ],
  }),
  j({
    id: 'philip-apostle', era: 'apostles', hue: 170, certainty: 'tradition',
    person: b('Philip the apostle', 'فيلبس الرسول'), title: b('From Bethsaida to Hierapolis', 'من بيت صيدا إلى هيرابوليس'),
    summary: b('Philip, who found Nathanael, is held by early Christian writers to have ended his life at Hierapolis in Asia Minor.', 'فيلبس، الذي وجد نثنائيل، يقول كتّاب مسيحيون أوائل إنه ختم حياته في هيرابوليس في آسيا الصغرى.'),
    note: TRADITION_NOTE,
    stops: [
      s('bethsaida', 'John 1:43–46', b('Jesus finds Philip and he finds Nathanael', 'يسوع يجد فيلبس وهو يجد نثنائيل')),
      s('jerusalem', 'Acts 1:13–14', b('Among the apostles', 'بين الرسل')),
      s('hierapolis', 'Colossians 4:13', b('Preaches and dies at Hierapolis (tradition)', 'يكرز ويموت في هيرابوليس (تقليد)'), true),
    ],
  }),
  j({
    id: 'thaddaeus', era: 'apostles', hue: 235, certainty: 'tradition',
    person: b('Thaddaeus (Addai)', 'تداوس (أدّاي)'), title: b('To Edessa', 'إلى الرها'),
    summary: b('Eusebius reports that after the Ascension Thaddaeus was sent to Edessa, where King Abgar believed.', 'يروي يوسابيوس أنه بعد الصعود أُرسل تداوس إلى الرها حيث آمن الملك أبجر.'),
    note: TRADITION_NOTE,
    stops: [
      s('jerusalem', 'Acts 1:13–14', b('Among the apostles', 'بين الرسل')),
      s('edessa', 'Matthew 10:2–4', b('Preaches at Edessa (Eusebius)', 'يكرز في الرها (يوسابيوس)'), true),
    ],
  }),
  j({
    id: 'john-apostle', era: 'apostles', hue: 75, certainty: 'tradition',
    person: b('John the apostle', 'يوحنا الرسول'), title: b('Jerusalem, Ephesus and Patmos', 'أورشليم وأفسس وبطمس'),
    summary: b('With Peter John preached in Jerusalem and Samaria; early writers say he later lived at Ephesus, and from there he was banished to Patmos, where he saw the Revelation.', 'كرز يوحنا مع بطرس في أورشليم والسامرة؛ ويقول الكتّاب القدماء إنه سكن لاحقًا في أفسس، ومنها نُفي إلى بطمس حيث رأى سفر الرؤيا.'),
    note: b('Ephesus as John’s home rests on early Christian writers such as Irenaeus; the exile on Patmos is in Revelation 1:9.', 'إقامة يوحنا في أفسس تستند إلى كتّاب مسيحيين أوائل مثل إيريناؤس؛ أما النفي في بطمس فمذكور في رؤيا ١: ٩.'),
    stops: [
      s('jerusalem', 'Acts 3:1–11', b('Heals the lame man with Peter', 'يشفي الأعرج مع بطرس')),
      s('samaria', 'Acts 8:14–17', b('Comes to Samaria with Peter', 'يأتي إلى السامرة مع بطرس')),
      s('ephesus', '1 John 1:1–4', b('Lives at Ephesus (tradition)', 'يسكن في أفسس (تقليد)'), true),
      s('patmos', 'Revelation 1:9', b('“I was on the island called Patmos”', '«كنت في الجزيرة التي تدعى بطمس»')),
    ],
  }),
];
