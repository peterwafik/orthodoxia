import { at, ev, hand } from './at.ts';
import type { AtlasPlace } from './types.ts';

/**
 * More places of the New Testament: the Gospel towns of Galilee and Judea, the harbours and cities of Paul’s journeys and
 * letters, and the lands where the apostles are held, by tradition, to have preached. Everything that rests on tradition and
 * not on the text says so.
 */
export const NT: readonly AtlasPlace[] = [
  // ───────────── The Gospels ─────────────
  at({
    ob: 'tiberias', era: 'christ',
    name: ['Tiberias', 'طبرية'], modern: ['Tiberias, on the Sea of Galilee', 'طبرية، على بحر الجليل'],
    summary: ['Herod Antipas’ city on the lake, which gave the Sea of Galilee its Roman name.', 'مدينة هيرودس أنتيباس على البحيرة، التي أعطت بحر الجليل اسمه الروماني.'],
    events: [ev('Boats from Tiberias come near the place of the feeding', 'سفن من طبرية تقترب من موضع الإشباع', 'John 6:22–24'), ev('“The Sea of Tiberias”: the risen Lord on the shore', '«بحر طبرية»: الرب القائم على الشاطئ', 'John 21:1–14')],
  }),
  at({
    ob: 'chorazin', era: 'christ',
    name: ['Chorazin', 'كورزين'], modern: ['Khirbet Karraza, north of the lake', 'خربة كرازة، شمال البحيرة'],
    summary: ['A town of Galilee where Jesus did mighty works and which he warned, with Bethsaida and Capernaum.', 'بلدة في الجليل صنع فيها يسوع قوات كثيرة وأنذرها مع بيت صيدا وكفرناحوم.'],
    events: [ev('“Woe to you, Chorazin!”', '«ويل لك يا كورزين!»', 'Matthew 11:20–24'), ev('The same warning in Luke', 'الإنذار نفسه في لوقا', 'Luke 10:13–15')],
  }),
  at({
    ob: ['bethsaida-1', 'bethsaida-2'], id: 'bethsaida', era: 'christ',
    name: ['Bethsaida', 'بيت صيدا'], modern: ['Et-Tell, north of the Sea of Galilee', 'التل، شمال بحر الجليل'],
    summary: ['The town of Peter, Andrew and Philip, where Jesus healed a blind man, and near which he fed the five thousand.', 'بلدة بطرس وأندراوس وفيلبس، حيث شفى يسوع أعمى، وقربها أشبع الخمسة آلاف.'],
    events: [ev('Philip, Andrew and Peter were from Bethsaida', 'فيلبس وأندراوس وبطرس من بيت صيدا', 'John 1:43–44'), ev('A blind man is healed at Bethsaida', 'شفاء أعمى في بيت صيدا', 'Mark 8:22–26'), ev('The feeding of the five thousand near Bethsaida', 'إشباع الخمسة آلاف قرب بيت صيدا', 'Luke 9:10–17')],
  }),
  at({
    ob: 'gadara', era: 'christ', cert: 'probable',
    name: ['The country of the Gadarenes (Gerasenes)', 'كورة الجدريين (الجرجسيين)'], modern: ['Near Umm Qais, east of the lake (disputed)', 'قرب أم قيس، شرق البحيرة (موضع خلاف)'],
    summary: ['Across the lake, where Jesus freed the demon-possessed man and the herd of swine ran into the sea.', 'عبر البحيرة، حيث حرر يسوع المجنون ودخلت الخنازير إلى البحر.'],
    note: ['The manuscripts read Gadarenes, Gerasenes or Gergesenes, and the exact spot on the eastern shore is uncertain.', 'تختلف المخطوطات بين الجدريين والجرجسيين والجرجاسيين، والموضع بالتحديد على الشاطئ الشرقي غير مؤكد.'],
    events: [ev('The man among the tombs (Gadarenes)', 'الرجل في القبور (الجدريون)', 'Matthew 8:28–34'), ev('The same, in Mark (Gerasenes)', 'الحدث نفسه في مرقس (الجرجسيون)', 'Mark 5:1–20'), ev('And in Luke', 'وفي لوقا', 'Luke 8:26–39')],
  }),
  at({
    ob: 'nain', era: 'christ',
    name: ['Nain', 'نايين'], modern: ['Nein, at the foot of the hill of Moreh', 'النين، عند سفح جبل الدحي'],
    summary: ['The town where Jesus stopped a funeral and raised a widow’s only son.', 'البلدة التي أوقف فيها يسوع جنازة وأقام ابن أرملة الوحيد.'],
    events: [ev('The widow’s son at Nain is raised', 'إقامة ابن أرملة نايين', 'Luke 7:11–17')],
  }),
  at({
    ob: ['aenon', 'salim'], era: 'christ', kind: 'site',
    name: ['Aenon near Salim', 'عينون قرب ساليم'],
    summary: ['“Because water was plentiful there”: where John was baptizing, near the Jordan, when Jesus’ disciples also baptized.', '«لأنه كان هناك مياه كثيرة»: حيث كان يوحنا يعمد قرب الأردن حين كان تلاميذ يسوع يعمدون أيضًا.'],
    events: [ev('John baptizes at Aenon near Salim', 'يوحنا يعمد في عينون قرب ساليم', 'John 3:22–36')],
  }),
  hand({
    id: 'magdala', lat: 32.8256, lon: 35.5156, era: 'christ', cert: 'probable',
    name: ['Magdala', 'مجدل'], modern: ['Migdal, on the Sea of Galilee', 'مجدل، على بحر الجليل'],
    summary: ['The home of Mary called Magdalene, the first witness to the risen Lord.', 'موطن مريم التي تدعى المجدلية، أول شاهدة للرب القائم.'],
    note: ['“Magadan” in Matthew 15:39 is usually taken to be Magdala; the site by the lake has been excavated.', 'يُعتبر «مجدان» في متى ١٥: ٣٩ عادة مجدل؛ وقد حُفر الموقع عند البحيرة.'],
    events: [ev('Mary called Magdalene, from whom seven demons had gone out', 'مريم التي تدعى المجدلية التي خرجت منها سبعة شياطين', 'Luke 8:1–3'), ev('Jesus comes to the region of Magadan', 'يسوع يأتي إلى تخوم مجدان', 'Matthew 15:39'), ev('Mary Magdalene sees the risen Lord', 'مريم المجدلية تلقى الرب القائم', 'John 20:1–18')],
  }),
  at({
    ob: 'arimathea', era: 'christ',
    name: ['Arimathea', 'الرامة (أريماثيا)'], modern: ['Perhaps Rantis, in the hills of Ephraim', 'ربما رنتيس، في جبال أفرايم'],
    summary: ['The town of Joseph, the rich disciple who asked Pilate for the body of Jesus and laid it in his own new tomb.', 'بلدة يوسف، التلميذ الغني الذي طلب جسد يسوع من بيلاطس ووضعه في قبره الجديد.'],
    events: [ev('Joseph of Arimathea buries Jesus', 'يوسف الذي من الرامة يدفن يسوع', 'Matthew 27:57–60'), ev('A good and righteous man, waiting for the kingdom', 'رجل صالح بار ينتظر ملكوت الله', 'Luke 23:50–53'), ev('Nicodemus joins him', 'نيقوديموس يرافقه', 'John 19:38–42')],
  }),
  at({
    ob: ['ephraim-2', 'ephraim-1'], id: 'ephraim', era: ['kingdom', 'christ'],
    name: ['Ephraim', 'أفرايم'], modern: ['Taybeh, north-east of Jerusalem', 'الطيبة، شمال شرق أورشليم'],
    summary: ['The wilderness town where Jesus withdrew with his disciples when the leaders plotted to kill him, before the last Passover.', 'البلدة عند البرية التي انصرف إليها يسوع مع تلاميذه حين تآمر الرؤساء على قتله قبل الفصح الأخير.'],
    events: [ev('Jesus withdraws to Ephraim', 'يسوع ينصرف إلى أفرايم', 'John 11:53–54'), ev('Absalom’s sheep-shearing at Baal-hazor near Ephraim', 'جزّ غنم أبشالوم في بعل حاصور قرب أفرايم', '2 Samuel 13:23')],
  }),

  // ───────────── Acts and the letters ─────────────
  at({
    ob: 'seleucia', era: 'apostles',
    name: ['Seleucia Pieria', 'سلوكية'], modern: ['Near Samandağ, Turkey', 'قرب سمنداغ، تركيا'],
    summary: ['The port of Antioch, from which Paul and Barnabas sailed for Cyprus.', 'ميناء أنطاكية، منه أبحر بولس وبرنابا إلى قبرص.'],
    events: [ev('They go down to Seleucia and sail to Cyprus', 'ينزلان إلى سلوكية ويبحران إلى قبرص', 'Acts 13:4')],
  }),
  at({
    ob: 'attalia', era: 'apostles',
    name: ['Attalia', 'أتاليا'], modern: ['Antalya, Turkey', 'أنطاليا، تركيا'],
    summary: ['The port from which Paul and Barnabas sailed back to Antioch, ending the first journey.', 'الميناء الذي أبحر منه بولس وبرنابا عائدين إلى أنطاكية، وبه انتهت الرحلة الأولى.'],
    events: [ev('They preach in Perga and go down to Attalia', 'يكرزان في برجة وينزلان إلى أتاليا', 'Acts 14:24–26')],
  }),
  at({
    ob: 'aphek-2', id: 'antipatris', era: ['kingdom', 'apostles'],
    name: ['Antipatris (Aphek)', 'أنتيباترس (أفيق)'], modern: ['Tel Aphek, near Rosh HaAyin', 'تل أفيق، قرب رأس العين'],
    summary: ['Where the ark was captured by the Philistines, and later, as Roman Antipatris, the night stop on Paul’s escorted journey to Caesarea.', 'حيث أخذ الفلسطينيون التابوت، ثم صارت أنتيباترس الرومانية، محطة الليل في رحلة بولس تحت الحراسة إلى قيصرية.'],
    events: [ev('The ark is captured near Aphek', 'أخذ التابوت قرب أفيق', '1 Samuel 4:1–11'), ev('The Philistines gather at Aphek', 'الفلسطينيون يجتمعون في أفيق', '1 Samuel 29:1'), ev('The soldiers bring Paul by night to Antipatris', 'الجنود يأتون ببولس ليلًا إلى أنتيباترس', 'Acts 23:31–32')],
  }),
  at({
    ob: 'patara', era: 'apostles',
    name: ['Patara', 'باتارا'], modern: ['Near Kaş, Turkey', 'قرب كاش، تركيا'],
    summary: ['A harbour of Lycia where Paul changed ship for Phoenicia on his way to Jerusalem.', 'ميناء في ليكية بدّل فيه بولس سفينته إلى فينيقية في طريقه إلى أورشليم.'],
    events: [ev('Paul finds a ship for Phoenicia', 'بولس يجد سفينة إلى فينيقية', 'Acts 21:1–3')],
  }),
  at({
    ob: 'assos', era: 'apostles',
    name: ['Assos', 'أسوس'], modern: ['Behramkale, Turkey', 'بهرامكالي، تركيا'],
    summary: ['The port where Paul, who had gone on foot from Troas, boarded the ship.', 'الميناء الذي ركب فيه بولس السفينة بعد أن سار على قدميه من ترواس.'],
    events: [ev('Paul goes by land to Assos', 'بولس يسير براً إلى أسوس', 'Acts 20:13–14')],
  }),
  at({
    ob: 'mitylene', era: 'apostles',
    name: ['Mitylene', 'ميتيليني'], modern: ['Mytilene, Lesbos, Greece', 'ميتيليني، ليسبوس، اليونان'],
    summary: ['The main town of Lesbos, a night stop on the voyage to Miletus.', 'المدينة الرئيسية في ليسبوس، محطة ليلة في الرحلة إلى ميليتس.'],
    events: [ev('They come to Mitylene', 'يأتون إلى ميتيليني', 'Acts 20:14')],
  }),
  at({
    ob: 'samos', era: 'apostles', kind: 'region',
    name: ['Samos', 'ساموس'], modern: ['Samos, Greece', 'ساموس، اليونان'],
    summary: ['An island of the Aegean passed on the way to Miletus.', 'جزيرة في بحر إيجة مرّت بها السفينة في الطريق إلى ميليتس.'],
    events: [ev('They touch at Samos', 'يرسون في ساموس', 'Acts 20:15')],
  }),
  at({
    ob: 'cos', era: 'apostles', kind: 'region',
    name: ['Cos', 'كوس'], modern: ['Kos, Greece', 'كوس، اليونان'],
    summary: ['An Aegean island on Paul’s way from Miletus to Patara.', 'جزيرة في بحر إيجة على طريق بولس من ميليتس إلى باتارا.'],
    events: [ev('They sail straight to Cos', 'يبحرون مباشرة إلى كوس', 'Acts 21:1')],
  }),
  at({
    ob: ['rhodes-2', 'rhodes-1'], id: 'rhodes', era: 'apostles', kind: 'region', cert: 'secure',
    name: ['Rhodes', 'رودس'], modern: ['Rhodes, Greece', 'رودس، اليونان'],
    summary: ['The island city passed on the same voyage, the next day after Cos.', 'مدينة الجزيرة التي مرّوا بها في الرحلة نفسها، في اليوم التالي بعد كوس.'],
    events: [ev('The next day to Rhodes', 'في اليوم التالي إلى رودس', 'Acts 21:1')],
  }),
  at({
    ob: 'cnidus', era: 'apostles',
    name: ['Cnidus', 'كنيدس'], modern: ['Datça peninsula, Turkey', 'شبه جزيرة داتشا، تركيا'],
    summary: ['The point where the wind stopped the ship’s direct course and drove it south toward Crete.', 'الرأس الذي منعت الريح السفينة عنده من السير المباشر ودفعتها جنوبًا نحو كريت.'],
    events: [ev('Off Cnidus, the wind turns them to Crete', 'عند كنيدس تحوّلهم الريح إلى كريت', 'Acts 27:7')],
  }),
  at({
    ob: 'lasea', era: 'apostles', kind: 'site',
    name: ['Lasea', 'لاسية'], modern: ['Near Fair Havens, Crete', 'قرب الموانئ الحسنة، كريت'],
    summary: ['The town near Fair Havens, where Paul’s warning about the winter voyage was overruled.', 'البلدة قرب الموانئ الحسنة، حيث تُجوهل إنذار بولس من رحلة الشتاء.'],
    events: [ev('Fair Havens, near the city of Lasea', 'الموانئ الحسنة قرب مدينة لاسية', 'Acts 27:8')],
  }),
  at({
    ob: 'phoenix', era: 'apostles', kind: 'site',
    name: ['Phoenix, Crete', 'فينكس'], modern: ['Perhaps Loutro, south coast of Crete', 'ربما لوترو، الساحل الجنوبي لكريت'],
    summary: ['The harbour of Crete that the sailors hoped to reach to winter in; the storm drove the ship away from it.', 'ميناء كريت الذي أمل الملاحون بلوغه للشتاء فيه؛ لكن العاصفة دفعت السفينة بعيدًا عنه.'],
    events: [ev('The sailors’ plan to winter at Phoenix', 'خطة الملاحين للشتاء في فينكس', 'Acts 27:12–13'), ev('The northeaster strikes', 'هبوب الريح الشرقية الشمالية', 'Acts 27:14–20')],
  }),
  at({
    ob: 'cauda', era: 'apostles', kind: 'region',
    name: ['Cauda (Clauda)', 'كلودي'], modern: ['Gavdos, south of Crete', 'غافدوس، جنوب كريت'],
    summary: ['The small island under whose lee the crew hauled up the lifeboat and bound the ship with ropes.', 'الجزيرة الصغيرة التي احتمت السفينة بظلها فرفع الملاحون القارب وشدّوا السفينة بالحبال.'],
    events: [ev('Under the lee of Cauda', 'تحت ظل كلودي', 'Acts 27:16–17')],
  }),
  at({
    ob: 'three-taverns', era: 'apostles', kind: 'site',
    name: ['Three Taverns', 'ثلاثة حوانيت'], modern: ['On the Appian Way, south of Rome', 'على الطريق الأبّي، جنوب روما'],
    summary: ['Where the believers of Rome came out to meet Paul, and he thanked God and took courage.', 'حيث خرج مؤمنو رومية للقاء بولس فشكر الله وتشجع.'],
    events: [ev('The brothers meet Paul as far as Three Taverns', 'الإخوة يلاقون بولس إلى ثلاثة حوانيت', 'Acts 28:15')],
  }),
  at({
    ob: 'cenchreae', era: 'apostles',
    name: ['Cenchreae', 'كنخريا'], modern: ['Kechries, port of Corinth', 'كخريس، ميناء كورنثوس'],
    summary: ['The eastern port of Corinth, where Paul cut his hair for a vow, and the church of Phoebe the deaconess.', 'ميناء كورنثوس الشرقي، حيث حلق بولس رأسه بسبب نذر، وكنيسة فيبي الشماسة.'],
    events: [ev('Paul shaves his head at Cenchreae', 'بولس يحلق رأسه في كنخريا', 'Acts 18:18'), ev('Phoebe, a servant of the church at Cenchreae', 'فيبي، خادمة الكنيسة التي في كنخريا', 'Romans 16:1–2')],
  }),
  at({
    ob: 'nicopolis', era: 'apostles',
    name: ['Nicopolis', 'نيكوبوليس'], modern: ['Near Preveza, north-west Greece', 'قرب بريفيزا، شمال غرب اليونان'],
    summary: ['“Come to me at Nicopolis, for I have decided to spend the winter there.”', '«بادر أن تأتي إليّ إلى نيكوبوليس لأني عزمت أن أشتي هناك».'],
    events: [ev('Paul asks Titus to come to Nicopolis', 'بولس يطلب من تيطس أن يأتي إلى نيكوبوليس', 'Titus 3:12')],
  }),
  at({
    ob: 'colossae', era: 'apostles',
    name: ['Colossae', 'كولوسي'], modern: ['Near Honaz, Turkey', 'قرب هوناز، تركيا'],
    summary: ['A town of the Lycus valley whose church Paul had never visited; the home of Philemon, Onesimus and Epaphras.', 'بلدة في وادي ليكوس لم يزر بولس كنيستها؛ وطن فيلمون وأنسيمُس وأبفراس.'],
    events: [ev('The letter to the Colossians', 'الرسالة إلى أهل كولوسي', 'Colossians 1:1–8'), ev('“Those who have not seen my face”', '«الذين لم يروا وجهي»', 'Colossians 2:1'), ev('Onesimus, one of you', 'أنسيمُس الذي هو منكم', 'Colossians 4:9'), ev('Philemon and his church in the house', 'فليمون والكنيسة التي في بيته', 'Philemon 1:1–2')],
  }),
  at({
    ob: 'hierapolis', era: 'apostles',
    name: ['Hierapolis', 'هيرابوليس'], modern: ['Pamukkale, Turkey', 'بموكالي، تركيا'],
    summary: ['A city of the Lycus valley whose church Epaphras laboured for; early Christian writers hold that the apostle Philip lived and was buried here.', 'مدينة في وادي ليكوس اجتهد أبفراس لأجل كنيستها؛ ويقول كتّاب مسيحيون أوائل إن الرسول فيلبس سكن هنا ودُفن.'],
    events: [ev('Epaphras’ labour for Laodicea and Hierapolis', 'تعب أبفراس لأجل لاودكية وهيرابوليس', 'Colossians 4:12–13'), ev('Philip in Hierapolis (early Christian tradition)', 'فيلبس في هيرابوليس (تقليد مسيحي قديم)', 'John 1:43–46', true)],
  }),

  // ───────────── The lands the apostles are said to have reached ─────────────
  hand({
    id: 'galatia', lat: 39.5, lon: 32.5, era: 'apostles', kind: 'region', cert: 'secure',
    name: ['Galatia', 'غلاطية'], modern: ['Central Anatolia, Turkey', 'وسط الأناضول، تركيا'],
    summary: ['The Roman province of central Asia Minor, whose churches received Paul’s letter “to the Galatians”.', 'ولاية رومانية في وسط آسيا الصغرى، تلقّت كنائسها رسالة بولس «إلى أهل غلاطية».'],
    note: ['The marker is a rough centre of the province; which cities its churches were in is debated.', 'العلامة مركز تقريبي للولاية؛ وفي أي مدن كانت كنائسها موضع نقاش.'],
    events: [ev('Paul goes through the region of Galatia', 'بولس يجتاز في كورة غلاطية', 'Acts 16:6'), ev('He strengthens all the disciples in Galatia', 'يشدد جميع التلاميذ في غلاطية', 'Acts 18:23'), ev('The letter to the Galatians', 'الرسالة إلى أهل غلاطية', 'Galatians 1:1–9')],
  }),
  hand({
    id: 'arabia', lat: 30.3285, lon: 35.4444, era: 'apostles', kind: 'region', cert: 'tradition',
    name: ['Arabia (Nabatea)', 'العربية'], modern: ['The Nabatean kingdom, now southern Jordan', 'مملكة الأنباط، جنوب الأردن اليوم'],
    summary: ['Where Paul says he went after his conversion, before returning to Damascus.', 'حيث يقول بولس إنه ذهب بعد اهتدائه، قبل أن يعود إلى دمشق.'],
    note: ['Paul does not say where in Arabia he went or what he did; the marker stands for the Nabatean kingdom.', 'لا يذكر بولس أين ذهب في العربية ولا ماذا فعل؛ والعلامة ترمز إلى مملكة الأنباط.'],
    events: [ev('“I went away into Arabia”', '«مضيت إلى العربية»', 'Galatians 1:15–17'), ev('The governor under King Aretas at Damascus', 'والي الملك الحارث في دمشق', '2 Corinthians 11:32–33')],
  }),
  hand({
    id: 'illyricum', lat: 43.54, lon: 16.48, era: 'apostles', kind: 'region', cert: 'probable',
    name: ['Illyricum and Dalmatia', 'إللوريكون ودلماطية'], modern: ['The Adriatic coast of the Balkans (Salona, Croatia)', 'ساحل الأدرياتيك في البلقان (سالونا، كرواتيا)'],
    summary: ['“From Jerusalem and as far round as Illyricum I have fully preached the gospel of Christ.”', '«من أورشليم وما حولها إلى إللوريكون قد أكملت التبشير بإنجيل المسيح».'],
    note: ['The marker is Salona, the Roman capital of the region; the text names no town.', 'العلامة هي سالونا، عاصمة الإقليم الرومانية؛ والنص لا يسمي بلدة.'],
    events: [ev('Paul has preached as far as Illyricum', 'بولس بشّر حتى إللوريكون', 'Romans 15:19'), ev('Titus goes to Dalmatia', 'تيطس يذهب إلى دلماطية', '2 Timothy 4:10')],
  }),
  hand({
    id: 'spain', lat: 41.1189, lon: 1.2445, era: 'apostles', kind: 'region', cert: 'tradition',
    name: ['Spain', 'إسبانيا'], modern: ['Tarraco (Tarragona), the Roman capital of the province', 'تاراكو (طرّاكونة)، عاصمة الولاية الرومانية'],
    summary: ['The far west to which Paul planned to go from Rome, and which Clement of Rome says he reached.', 'أقصى الغرب الذي عزم بولس أن يمضي إليه من رومية، ويقول إكليمندس الروماني إنه بلغه.'],
    note: ['The New Testament gives only Paul’s plan. That he reached Spain rests on Clement of Rome (about AD 96) and later writers.', 'يذكر العهد الجديد عزم بولس فقط. وبلوغه إسبانيا يستند إلى إكليمندس الروماني (نحو ٩٦ م) وكتّاب لاحقين.'],
    events: [ev('Paul’s plan to go to Spain', 'عزم بولس على الذهاب إلى إسبانيا', 'Romans 15:23–28'), ev('Paul reaches “the limit of the West” (Clement of Rome)', 'بولس يبلغ «حدّ الغرب» (إكليمندس الروماني)', 'Romans 15:24', true)],
  }),
  hand({
    id: 'ethiopia', lat: 16.94, lon: 33.75, era: ['kingdom', 'apostles'], kind: 'region', cert: 'probable',
    name: ['Ethiopia (Cush)', 'كوش (إثيوبيا)'], modern: ['The ancient kingdom of Kush: Meroe, Sudan', 'مملكة كوش القديمة: مروي، السودان'],
    summary: ['The land south of Egypt whose queen’s treasurer was baptized by Philip; the psalmist foretold that “Cush shall stretch out her hands to God”.', 'الأرض جنوب مصر التي عمّد فيلبس خازن ملكتها؛ وتنبأ المرنم أن «كوش تسرع بيديها إلى الله».'],
    note: ['“Ethiopia” in the Bible is Kush, the Nubian kingdom of the Nile above Egypt. The marker is its capital, Meroe; the Coptic and Ethiopian Churches revere this baptism as the beginning of their faith.', '«إثيوبيا» في الكتاب هي كوش، المملكة النوبية على النيل جنوب مصر. والعلامة عاصمتها مروي؛ وتكرّم الكنيستان القبطية والإثيوبية هذه المعمودية بدء إيمانهما.'],
    events: [ev('“Ethiopia shall stretch out her hands to God”', '«كوش تسرع بيديها إلى الله»', 'Psalms 68:31'), ev('Ethiopia’s messengers on the waters', 'رسل كوش على المياه', 'Isaiah 18:1–2'), ev('The Ethiopian official of Queen Candace is baptized', 'خصي كنداكة ملكة الحبشة يعتمد', 'Acts 8:26–39'), ev('The river Gihon flows around the land of Cush', 'النهر جيحون المحيط بكل أرض كوش', 'Genesis 2:10–13')],
  }),
  hand({
    id: 'edessa', lat: 37.1591, lon: 38.7969, era: 'apostles', cert: 'tradition',
    name: ['Edessa', 'الرها'], modern: ['Şanlıurfa, Turkey', 'شانلي أورفا، تركيا'],
    summary: ['The royal city of Abgar, to which, according to Eusebius, Thaddaeus (Addai) was sent after the Ascension.', 'مدينة الملك أبجر التي أُرسل إليها بحسب يوسابيوس تداوس (أدّاي) بعد الصعود.'],
    note: ['That an apostle’s disciple brought the gospel to Edessa is reported by Eusebius (Church History 1.13); the New Testament does not mention it.', 'يروي يوسابيوس (التاريخ الكنسي ١: ١٣) أن تلميذًا لرسول بشّر الرها؛ ولا يذكر العهد الجديد ذلك.'],
    events: [ev('Thaddaeus among the twelve apostles', 'تداوس بين الرسل الاثني عشر', 'Matthew 10:2–4'), ev('Thaddaeus in Edessa (Church tradition)', 'تداوس في الرها (تقليد الكنيسة)', 'Luke 6:12–16', true)],
  }),
  hand({
    id: 'patras', lat: 38.2466, lon: 21.7346, era: 'apostles', cert: 'tradition',
    name: ['Patras', 'باتراس'], modern: ['Patras, Greece', 'باتراس، اليونان'],
    summary: ['By tradition the city where the apostle Andrew, the first-called, was martyred on a cross.', 'المدينة التي استُشهد فيها بحسب التقليد الرسول أندراوس، المدعو أولًا، على صليب.'],
    note: ['Andrew’s mission to Achaia and his martyrdom at Patras are known from early Christian tradition, not from the New Testament.', 'تُعرف إرسالية أندراوس إلى أخائية واستشهاده في باتراس من التقليد المسيحي القديم لا من العهد الجديد.'],
    events: [ev('Andrew, the first-called, brings his brother Simon', 'أندراوس، المدعو أولًا، يأتي بأخيه سمعان', 'John 1:35–42'), ev('Andrew in Achaia and his martyrdom at Patras (Church tradition)', 'أندراوس في أخائية واستشهاده في باتراس (تقليد الكنيسة)', 'Matthew 4:18–20', true)],
  }),
  hand({
    id: 'muziris', lat: 10.2132, lon: 76.1954, era: 'apostles', cert: 'tradition',
    name: ['Muziris (Kodungallur)', 'موزيريس (كودونغالور)'], modern: ['Kerala, India', 'كيرالا، الهند'],
    summary: ['By the tradition of the Church of India, the port where the apostle Thomas landed in AD 52.', 'الميناء الذي نزل فيه الرسول توما سنة ٥٢ م بحسب تقليد كنيسة الهند.'],
    note: ['Thomas’ mission to India is held by the ancient Churches of the East and the Coptic Church; it rests on tradition, not on the New Testament.', 'تؤمن به الكنائس الشرقية القديمة والكنيسة القبطية؛ وهو يستند إلى التقليد لا إلى العهد الجديد.'],
    events: [ev('“Let us also go, that we may die with him”: Thomas', '«لنذهب نحن أيضًا لكي نموت معه»: توما', 'John 11:16'), ev('Thomas in India (Church tradition)', 'توما في الهند (تقليد الكنيسة)', 'John 20:24–29', true)],
  }),
  hand({
    id: 'mylapore', lat: 13.0337, lon: 80.2707, era: 'apostles', cert: 'tradition',
    name: ['Mylapore', 'ميلابور'], modern: ['Chennai, India (San Thomé)', 'تشيناي، الهند (سان توميه)'],
    summary: ['By tradition the place of the martyrdom and tomb of the apostle Thomas.', 'بحسب التقليد موضع استشهاد الرسول توما وقبره.'],
    note: ['Rests on the tradition of the Church of India and early writers, not on the New Testament.', 'يستند إلى تقليد كنيسة الهند وكتّاب قدماء لا إلى العهد الجديد.'],
    events: [ev('“My Lord and my God!”', '«ربي وإلهي!»', 'John 20:26–29'), ev('The martyrdom of Thomas (Church tradition)', 'استشهاد توما (تقليد الكنيسة)', 'John 14:5–6', true)],
  }),
];
