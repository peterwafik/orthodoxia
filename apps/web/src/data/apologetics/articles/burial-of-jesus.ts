import type { Article } from '../types.ts';

export const article: Article = {
  id: 'burial-of-jesus',
  questionId: 'burial-of-jesus',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'What the sources say about the burial of Jesus, who is said to have buried him and where, and how historians weigh the report against Roman and Jewish practice. The discovery of the tomb empty is a separate question, treated in its own article.',
    ar: 'ماذا تقول المصادر عن دفن يسوع، ومن يُقال إنه دفنه وأين، وكيف يوازن المؤرخون الخبر بالعادات الرومانية واليهودية. أما اكتشاف القبر فارغًا فمسألة منفصلة لها مقالها.',
  },
  shortAnswer: {
    en: 'All four Gospels say that Jesus was buried on the day he died, in a rock-cut tomb arranged by Joseph of Arimathea, a member of the council, with Pilate\'s permission. St Paul, writing earlier, already says Christ was buried. Many historians think a burial by Joseph is probable, because it is specific, because a council member is an unlikely invention by a movement that blamed the council, and because Jewish custom pressed for burial before nightfall. Others think the body of a crucified man was more likely left exposed or put in a common grave, and that the stories grew from later belief. The sources do not settle it, but the report of burial is early and consistent.',
    ar: 'تقول الأناجيل الأربعة إن يسوع دُفن في اليوم الذي مات فيه، في قبر منحوت في الصخر رتّبه يوسف الرامي، وهو عضو في المجلس، بإذن من بيلاطس. وبولس، وهو أسبق، يقول إن المسيح دُفن. ويرى مؤرخون كثيرون أن الدفن على يد يوسف مرجَّح، لأنه محدد، ولأن عضو المجلس ليس مما تختلقه حركة تلوم المجلس، ولأن العادة اليهودية كانت تحث على الدفن قبل المساء. ويرى آخرون أن جسد المصلوب كان الأرجح أن يُترك مكشوفًا أو يوضع في قبر مشترك، وأن القصص نمت من إيمان لاحق. ولا تحسم المصادر ذلك، لكن خبر الدفن مبكر ومتسق.',
  },
  quickPoints: {
    en: [
      'St Paul\'s early summary says Christ was buried (1 Corinthians 15:4), and the speech to the synagogue in Acts also mentions a burial in a tomb (Acts 13:29).',
      'The four Gospels agree on a burial by Joseph of Arimathea before the sabbath, and they differ on who helped and on what was done to the body.',
      'The Mosaic law required that a hanged man not stay overnight on the tree, and a later Jewish source speaks of a separate burial place for executed criminals.',
      'Roman practice varied. Executed criminals were sometimes denied burial, and sometimes the body was released to family or friends.',
      'The main dispute is whether the burial is a memory or a later story, and whether the Joseph tradition has been shaped by belief in the empty tomb.',
    ],
    ar: [
      'يقول ملخص القديس بولس المبكر إن المسيح دُفن (١ كورنثوس ١٥: ٤)، ويذكر خطاب المجمع في أعمال الرسل دفنًا في قبر (أعمال ١٣: ٢٩).',
      'تتفق الأناجيل الأربعة على دفن بيد يوسف الرامي قبل السبت، وتختلف في من ساعده وفي ما فُعل بالجسد.',
      'أوجبت شريعة موسى ألا يبقى المعلَّق على الخشبة ليلًا، ويذكر مصدر يهودي متأخر مكانًا خاصًا لدفن المجرمين المنفَّذ فيهم الحكم.',
      'تفاوتت الممارسة الرومانية؛ فقد يُمنع المجرم المنفَّذ فيه من الدفن، وقد يُسلَّم الجسد لأهله أو أصدقائه.',
      'الخلاف الرئيس: هل الدفن ذاكرة أو قصة لاحقة، وهل تشكل تقليد يوسف بتأثير الإيمان بالقبر الفارغ.',
    ],
  },
  argumentTypes: ['historical', 'textual'],
  assessment: {
    label: 'actively_debated',
    explanation: {
      en: 'That Jesus was buried is attested early and in every source and is accepted by most historians. That the burial was by Joseph of Arimathea in a known tomb is more disputed: the evidence is a set of Christian narratives which may be shaped by later belief, and the comparative evidence on the treatment of crucified bodies points in more than one direction. The label for the article is therefore actively debated.',
      ar: 'أن يسوع دُفن أمر موثق مبكرًا وفي كل مصدر ويقبله معظم المؤرخين. أما أن الدفن كان على يد يوسف الرامي في قبر معروف فأكثر خلافًا: فالدليل مجموعة سرود مسيحية قد يكون إيمان لاحق شكّلها، والشواهد المقارنة في معاملة أجساد المصلوبين تتجه في أكثر من اتجاه. ولذلك تسمية المقال أنه محل نقاش حقيقي.',
    },
  },
  whyExamine: {
    en: [
      'The burial matters for the resurrection argument. If Jesus was buried in a known place, an empty tomb was something that could be checked. If he was not, the empty-tomb story needs another explanation. The burial is also part of the earliest Christian summary of the gospel, which puts it among the things Christians said they knew.',
      'The question also tests method. The sources are all Christian, so a historian has to ask what reasons they would have had to invent the details, and what other kinds of evidence, such as the customs of the time, bear on it.',
    ],
    ar: [
      'الدفن مهم لحجة القيامة. فإن دُفن يسوع في مكان معروف كان القبر الفارغ مما يمكن فحصه. وإن لم يُدفن احتاجت قصة القبر الفارغ إلى تفسير آخر. والدفن كذلك جزء من أقدم ملخص مسيحي للإنجيل، مما يضعه بين ما قال المسيحيون إنهم يعرفونه.',
      'والسؤال يختبر المنهج أيضًا. فالمصادر كلها مسيحية، فعلى المؤرخ أن يسأل ما الأسباب التي كانت لديهم لاختلاق التفاصيل، وأي أنواع أخرى من الشواهد، كعادات ذلك الزمن، تتصل بالمسألة.',
    ],
  },
  background: {
    en: [
      'Roman law allowed the bodies of executed people to be refused burial, and some writers speak of bodies left on the cross as a further punishment. Other evidence, including later Roman legal writing, shows that bodies could be released to relatives who asked for them. Which practice applied in Judea under Pilate is not stated in a source about Pilate.',
      'Jewish law in Deuteronomy 21:22–23 required that a man hanged on a tree be taken down and buried the same day. Josephus says that the Jews took care to bury even executed criminals before sunset. A later rabbinic source, the Mishnah, speaks of two burial places for those executed by a Jewish court and of a later transfer of the bones to the family tomb. That source was written around AD 200 and its procedure is not necessarily that of the first century.',
      'The tombs of the Jerusalem region in the first century were commonly cut into rock, with a shelf or a chamber, and closed with a rolled or fitted stone. A tomb of that type is what the Gospels describe. The exact location of the burial and the site of the Church of the Holy Sepulchre are not discussed here; they belong to the study of archaeology.',
    ],
    ar: [
      'أجاز القانون الروماني منع دفن المنفَّذ فيهم الحكم، ويتحدث بعض الكتّاب عن أجساد تُترك على الصليب عقوبة إضافية. وتبين شواهد أخرى، منها كتابات قانونية رومانية متأخرة، أن الأجساد كان يمكن أن تُسلَّم لأقارب طلبوها. وأي الممارستين سادت في اليهودية في عهد بيلاطس لا يذكره مصدر عن بيلاطس.',
      'وأوجبت الشريعة اليهودية في تثنية ٢١: ٢٢–٢٣ أن يُنزل المعلَّق على خشبة ويُدفن في اليوم نفسه. ويقول يوسيفوس إن اليهود اعتنوا بدفن حتى المجرمين المنفَّذ فيهم الحكم قبل الغروب. ويتحدث مصدر حاخامي متأخر هو المشنا عن مكانين لدفن من تنفذ فيهم محكمة يهودية الحكم، وعن نقل العظام لاحقًا إلى قبر العائلة. وهذا المصدر كُتب نحو سنة ٢٠٠م وإجراؤه ليس بالضرورة إجراء القرن الأول.',
      'وكانت مقابر منطقة أورشليم في القرن الأول تُنحت عادة في الصخر، بمصطبة أو حجرة، وتُغلق بحجر مدحرج أو مركَّب. وهذا النوع هو ما تصفه الأناجيل. أما موقع الدفن بالتحديد وموضع كنيسة القيامة فلا يُبحثان هنا؛ فهما من دراسة الآثار.',
    ],
  },
  glossary: ['primary-source', 'gospel', 'synoptic-gospels', 'eyewitness', 'resurrection', 'crucifixion', 'independent-attestation'],

  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'Jesus was buried after his death.',
        ar: 'دُفن يسوع بعد موته.',
      },
      argumentType: 'historical',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'The earliest summary in St Paul includes burial, the Gospels all report it, and no source says the body was left on the cross. St Paul\'s summary is probably older than his letter, and the Gospels are not simply copying St Paul.',
        ar: 'يتضمن أقدم ملخص عند القديس بولس الدفن، وتذكره الأناجيل كلها، ولا يقول مصدر إن الجسد ظل على الصليب. وملخص القديس بولس أقدم على الأرجح من رسالته، والأناجيل لا تنسخ القديس بولس ببساطة.',
      },
      limits: {
        en: 'The sources are all Christian. Nobody reports the burial from outside the movement.',
        ar: 'المصادر كلها مسيحية. ولا أحد يروي الدفن من خارج الحركة.',
      },
      evidence: ['e1', 'e2', 'e3'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'Joseph of Arimathea, a member of the council, buried Jesus in a rock-cut tomb.',
        ar: 'دفن يوسف الرامي، وهو عضو في المجلس، يسوع في قبر منحوت في الصخر.',
      },
      argumentType: 'historical',
      assessment: 'actively_debated',
      rationale: {
        en: 'Mark names Joseph and describes a request to Pilate; Matthew, Luke and John agree on the person and add details. The detail that a council member, a member of the group that handed Jesus over, was the one who buried him is not what a movement hostile to the council would likely compose. Against that, the name could belong to a later tradition, and Mark\'s report of a quick burial is shaped in ways that suit his narrative.',
        ar: 'يسمي مرقس يوسف ويصف طلبه من بيلاطس؛ ويتفق متى ولوقا ويوحنا على الشخص ويضيفون تفاصيل. وكون الدافن عضوًا في المجلس، أي في الجماعة التي سلّمت يسوع، ليس مما تؤلفه حركة معادية للمجلس. وفي المقابل قد يكون الاسم من تقليد لاحق، وخبر مرقس عن دفن سريع مصوغ بما يلائم سرده.',
      },
      limits: {
        en: 'The Gospels differ on whether Joseph was a disciple, on whether Nicodemus took part, and on the spices and wrapping. Those differences are not resolved.',
        ar: 'تختلف الأناجيل في هل كان يوسف تلميذًا، وفي مشاركة نيقوديموس، وفي الأطياب والتكفين. ولم تُحسم هذه الفروق.',
      },
      evidence: ['e3', 'e4', 'e5'],
    },
    {
      id: 'c3',
      proposition: {
        en: 'Jewish custom and law favoured burial of an executed man on the day of death.',
        ar: 'فضّلت العادة اليهودية والشريعة دفن المنفَّذ فيه الحكم في يوم موته.',
      },
      argumentType: 'historical',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'Deuteronomy expresses the concern, and the Gospel setting, the eve of a sabbath that was also a feast, makes the pressure stronger. The concern makes a quick burial plausible whoever carried it out.',
        ar: 'تعبّر تثنية الاشتراع عن هذا الاهتمام، وإطار الأناجيل، وهو عشية سبت كان عيدًا أيضًا، يزيد الضغط. ويجعل هذا الاهتمام الدفن السريع معقولًا أيًّا كان من نفذه.',
      },
      limits: {
        en: 'The concern for burial does not tell us whether the Roman governor agreed to release the body, which is the point that is disputed.',
        ar: 'اهتمام اليهود بالدفن لا يخبرنا هل وافق الوالي الروماني على تسليم الجسد، وهذا هو موضع الخلاف.',
      },
      evidence: ['e6'],
    },
    {
      id: 'c4',
      proposition: {
        en: 'The crucified Jesus may instead have been left unburied or placed in a shared grave, and the burial stories are a later development.',
        ar: 'ربما تُرك يسوع المصلوب بلا دفن أو وُضع في قبر مشترك، وقصص الدفن تطور لاحق.',
      },
      argumentType: 'historical',
      assessment: 'actively_debated',
      rationale: {
        en: 'Some historians, John Dominic Crossan being a well-known example, argue that Roman practice makes an honourable burial improbable, and that Mark composed the story of Joseph from the Christian need to account for the body. Other historians, including the Catholic scholar Raymond Brown, judged the burial by Joseph historically probable. Both views engage the same short evidence.',
        ar: 'يرى بعض المؤرخين، ومنهم جون دومنيك كروسان مثالًا معروفًا، أن الممارسة الرومانية تجعل الدفن اللائق بعيد الاحتمال، وأن مرقس ألّف قصة يوسف لحاجة المسيحيين إلى تفسير مصير الجسد. ورأى مؤرخون آخرون، منهم الباحث الكاثوليكي ريموند براون، أن الدفن على يد يوسف مرجَّح تاريخيًا. وكلا الرأيين يتعامل مع الشواهد القصيرة نفسها.',
      },
      limits: {
        en: 'Neither side can show what happened to the body from the sources. The question is how much weight to give early, specific and unflattering-to-the-council detail against a general expectation about Roman practice.',
        ar: 'لا يستطيع أي من الطرفين أن يبين ما جرى للجسد من المصادر. والسؤال كم يُعطى من الوزن لتفصيل مبكر ومحدد وغير مجامل للمجلس مقابل توقع عام عن الممارسة الرومانية.',
      },
      evidence: ['e3', 'e4', 'e8'],
    },
  ],

  evidence: [
    {
      id: 'e1',
      sourceId: 'S62',
      locator: '1 Corinthians 15:3–4',
      role: 'supports',
      states: {
        en: 'St Paul passes on what he had received: that Christ died for our sins according to the Scriptures, that he was buried, and that he was raised on the third day.',
        ar: 'ينقل القديس بولس ما تسلّمه: أن المسيح مات من أجل خطايانا حسب الكتب، وأنه دُفن، وأنه قام في اليوم الثالث.',
      },
      inference: {
        en: 'The burial is counted among the core elements of the message, in a summary that is probably older than the letter. The text does not say who buried Jesus, where, or whether a tomb was found empty.',
        ar: 'يُحسب الدفن بين العناصر الجوهرية للرسالة، في ملخص هو على الأرجح أقدم من الرسالة. ولا يقول النص من دفن يسوع ولا أين ولا هل وُجد القبر فارغًا.',
      },
      bible: { book: '1-corinthians', chapter: 15, verse: '3-4' },
    },
    {
      id: 'e2',
      sourceId: 'S62',
      locator: 'Acts 13:28–30',
      role: 'supports',
      states: {
        en: 'In a speech Luke gives to St Paul in the synagogue of Pisidian Antioch, the people of Jerusalem and their rulers asked Pilate to have Jesus put to death, and when they had carried out what was written about him, they took him down from the tree and laid him in a tomb, and God raised him.',
        ar: 'في خطاب ينسبه لوقا إلى القديس بولس في مجمع أنطاكية بيسيدية، طلب أهل أورشليم ورؤساؤهم من بيلاطس قتل يسوع، وبعد أن أتموا كل ما كُتب عنه أنزلوه عن الخشبة ووضعوه في قبر، وأقامه الله.',
      },
      inference: {
        en: 'St Luke records this speech of St Paul, and the book of Acts is later than St Paul\'s own letters, so the passage is not an independent early witness. It is notable that the tradition here has "they" lay him in the tomb, which differs from the Gospels\' picture of Joseph acting alone, and some scholars take it as an older or looser form of the same memory.',
        ar: 'يسجل القديس لوقا هذا الخطاب للقديس القديس بولس، وسفر الأعمال أحدث من رسائل القديس بولس نفسه، فالنص ليس مستقلًا عن تقليد الكنيسة. ومن اللافت أن التقليد هنا يجعل «هم» يضعونه في القبر، وهذا يختلف عن صورة الأناجيل ليوسف يتصرف وحده، ويرى بعض الباحثين أنه صيغة أقدم أو أوسع للذاكرة نفسها.',
      },
      bible: { book: 'acts', chapter: 13, verse: '28-30' },
    },
    {
      id: 'e3',
      sourceId: 'S62',
      locator: 'Mark 15:42–47',
      role: 'supports',
      states: {
        en: 'Mark says that, as evening came on the day of preparation, Joseph of Arimathea, a respected member of the council who was himself waiting for the kingdom of God, boldly asked Pilate for the body. Pilate checked that Jesus was dead and granted it. Joseph bought a linen cloth, took him down, wrapped him, laid him in a tomb cut out of rock and rolled a stone against the door, while two women watched where he was laid.',
        ar: 'يقول مرقس إنه لما كان المساء، وكان يوم الاستعداد، تجاسر يوسف الذي من الرامة، وهو مشير مكرَّم كان ينتظر ملكوت الله، وطلب الجسد من بيلاطس. فتحقق بيلاطس من موته وأذن. فاشترى يوسف كتانًا وأنزله ولفّه ووضعه في قبر منحوت في صخرة ودحرج حجرًا على بابه، وكانت امرأتان تنظران أين وُضع.',
      },
      inference: {
        en: 'This is the earliest narrative of the burial. It is brief, names persons and gives a setting. It may reflect a memory, and it may also reflect Mark\'s interest in showing that Jesus was truly dead and truly buried. The text can be read both ways.',
        ar: 'هذا أقدم سرد للدفن. وهو موجز ويسمي أشخاصًا ويعطي إطارًا. وقد يعكس ذاكرة، وقد يعكس أيضًا اهتمام مرقس بإظهار أن يسوع مات حقًا ودُفن حقًا. والنص يحتمل القراءتين.',
      },
      bible: { book: 'mark', chapter: 15, verse: '42-47' },
    },
    {
      id: 'e4',
      sourceId: 'S62',
      locator: 'Matthew 27:57–61; Luke 23:50–56',
      role: 'supports',
      states: {
        en: 'Matthew calls Joseph a rich man who was a disciple of Jesus and says the tomb was his own, new, and that he left after rolling the stone. Luke calls him a good and righteous man who had not consented to the council\'s decision, and says the tomb had not been used before and that the women prepared spices after resting on the sabbath.',
        ar: 'يسمي متى يوسف رجلًا غنيًا كان تلميذًا ليسوع، ويقول إن القبر قبره الجديد، وإنه انصرف بعد دحرجة الحجر. ويسميه لوقا رجلًا صالحًا بارًا لم يوافق على قرار المجلس، ويقول إن القبر لم يوضع فيه أحد قبلًا، وإن النساء أعددن أطيابًا واستَرَحن السبت.',
      },
      inference: {
        en: 'Matthew and Luke follow Mark\'s outline and add details that make Joseph more clearly a sympathiser. That may be a later enhancement, or it may be genuine additional knowledge. The pattern of growth in details is one reason historians are cautious about the full picture.',
        ar: 'يتبع متى ولوقا مخطط مرقس ويضيفان تفاصيل تجعل يوسف متعاطفًا بوضوح أكبر. وقد يكون هذا تحسينًا لاحقًا، وقد يكون معرفة إضافية حقيقية. وطريقة نمو التفاصيل هذه أحد أسباب حذر المؤرخين في الصورة الكاملة.',
      },
      bible: { book: 'matthew', chapter: 27, verse: '57-61' },
    },
    {
      id: 'e5',
      sourceId: 'S62',
      locator: 'John 19:38–42',
      role: 'supports',
      states: {
        en: 'In John, Joseph, a disciple in secret for fear of the leaders, asks Pilate for the body, and Nicodemus brings a large quantity of spices. They wrap the body with the spices in linen in the Jewish burial manner and place it in a new tomb in a garden near the place of crucifixion, because the day of preparation was ending and the tomb was close.',
        ar: 'في يوحنا يطلب يوسف، وهو تلميذ خفية خوفًا من القادة، الجسد من بيلاطس، ويأتي نيقوديموس بكمية كبيرة من الأطياب. فيلفّان الجسد بالأطياب في أكفان كعادة اليهود في التكفين ويضعانه في قبر جديد في بستان قريب من موضع الصلب، لأن يوم الاستعداد كان ينقضي والقبر قريبًا.',
      },
      inference: {
        en: 'John agrees with the other Gospels on Joseph and on the tomb and differs on Nicodemus and on the spices, which suggests that the core was handed on in more than one line while the details diverged. John\'s emphasis on the tomb being near and on the haste fits the pressure of the sabbath.',
        ar: 'يتفق يوحنا مع الأناجيل الأخرى في يوسف والقبر ويختلف في نيقوديموس والأطياب، مما يوحي بأن اللب انتقل في أكثر من خط بينما تباينت التفاصيل. ويلائم تأكيد يوحنا على قرب القبر وعلى العجلة ضغط السبت.',
      },
      bible: { book: 'john', chapter: 19, verse: '38-42' },
    },
    {
      id: 'e6',
      sourceId: 'S62',
      locator: 'Deuteronomy 21:22–23',
      role: 'context',
      states: {
        en: 'The law says that when a man guilty of a capital offence is put to death and hanged on a tree, his body is not to remain overnight but is to be buried that day, so that the land is not defiled.',
        ar: 'تقول الشريعة إنه إذا كان على إنسان خطية حقها الموت فقُتل وعُلّق على خشبة، فلا تبت جثته على الخشبة بل تدفنه في ذلك اليوم لئلا تتنجس الأرض.',
      },
      inference: {
        en: 'This sets the Jewish background of the concern for same-day burial. The passage is read here as an ancient text. Whether the law was applied to Roman crucifixions is not stated in it, but it supports the plausibility that Jews in Jerusalem would have sought the body.',
        ar: 'يضع هذا الخلفية اليهودية للاهتمام بالدفن في اليوم نفسه. ويُقرأ النص هنا وثيقة قديمة. ولا يذكر هل طُبقت الشريعة على الصلب الروماني، لكنه يدعم أن يهود أورشليم كانوا سيسعون إلى الجسد.',
      },
      bible: { book: 'deuteronomy', chapter: 21, verse: '22-23' },
    },
    {
      id: 'e8',
      sourceId: 'S16',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'context',
      states: {
        en: 'Dale C. Allison Jr.\'s The Resurrection of Jesus: Apologetics, Polemics, History is a critical comparison of apologetic and sceptical arguments about the resurrection, including the evidence for the burial.',
        ar: 'كتاب «قيامة يسوع: دفاعيات وسجالات وتاريخ» لدايل أليسون الابن مقارنة نقدية بين الحجج الدفاعية والمتشككة في شأن القيامة، ومنها الشواهد على الدفن.',
      },
      inference: {
        en: 'It is cited as an example of a critical weighing of both sides, not for a particular conclusion on the burial.',
        ar: 'يُستشهد به مثالًا على موازنة نقدية بين الطرفين، لا لنتيجة معينة في الدفن.',
      },
    },
  ],

  objections: [
    {
      id: 'o1',
      statement: {
        en: 'Romans left crucified bodies on the cross to rot or be eaten by animals. Jesus was almost certainly not given a proper burial, and the Gospel story is a later invention to meet the needs of the believers.',
        ar: 'كان الرومان يتركون أجساد المصلوبين على الصليب لتتعفن أو تأكلها الحيوانات. فمن شبه المؤكد أن يسوع لم يُدفن دفنًا لائقًا، وقصة الأناجيل اختلاق لاحق لحاجات المؤمنين.',
      },
      response: {
        en: [
          'This is a serious objection, and Roman practice did include leaving bodies. But the evidence also shows that bodies were handed over to relatives or friends, especially where local custom made burial a matter of religious law, and Judea under the Romans was such a place.',
          'The objection moves from a general tendency to a particular case. The Gospels give a specific reason for release, a request from a prominent man, and a specific setting, the eve of a sabbath. If it was invented, it was invented as a detail embarrassing to the council and was handed down in all four Gospels, in different forms.',
        ],
        ar: [
          'هذا اعتراض جاد، وقد شملت الممارسة الرومانية ترك الأجساد. لكن الشواهد تبين أيضًا أن الأجساد كانت تُسلَّم لأقارب أو أصدقاء، خاصة حيث جعلت العادة المحلية الدفن مسألة شريعة دينية، واليهودية تحت الرومان كانت كذلك.',
          'والاعتراض ينتقل من ميل عام إلى حالة بعينها. وتعطي الأناجيل سببًا محددًا للتسليم هو طلب رجل بارز، وإطارًا محددًا هو عشية سبت. فإن كان اختلاقًا فقد اختُلق تفصيلًا محرجًا للمجلس وانتقل في الأناجيل الأربعة بصيغ مختلفة.',
        ],
      },
      limits: {
        en: 'This does not prove that the burial happened as described. It shows that the objection from Roman practice is not decisive.',
        ar: 'لا يثبت هذا أن الدفن حدث كما هو موصوف. إنه يبين أن الاعتراض من الممارسة الرومانية غير حاسم.',
      },
      evidence: ['e3', 'e6'],
    },
    {
      id: 'o2',
      statement: {
        en: 'St Paul says only that Jesus was buried, not that a tomb was involved. The tomb and Joseph are Mark\'s additions to support the empty tomb.',
        ar: 'يقول القديس بولس فقط إن يسوع دُفن، لا أن قبرًا كان طرفًا. والقبر ويوسف إضافتان من مرقس لدعم القبر الفارغ.',
      },
      response: {
        en: [
          'It is true that St Paul\'s summary does not mention a tomb or Joseph, and the verb need not imply them. Some scholars take "buried" as the first element of a sequence that includes the empty tomb, and others see no such link. The summary is brief and was not written to supply details.',
          'Acts 13 has a burial in a tomb, which suggests the idea of a tomb was in the tradition in some form apart from Mark. That passage comes from the later book of Acts, so it is a modest support. The honest position is that the tomb and Joseph rest on the Gospels.',
        ],
        ar: [
          'صحيح أن ملخص القديس بولس لا يذكر قبرًا ولا يوسف، ولا يلزم أن يعنيهما الفعل. ويرى بعض الباحثين «دُفن» أول حلقة في سلسلة تشمل القبر الفارغ، ولا يرى آخرون صلة كهذه. والملخص موجز ولم يُكتب ليعطي تفاصيل.',
          'وفي أعمال ١٣ دفن في قبر، مما يوحي بأن فكرة القبر كانت في التقليد بصورة ما بمعزل عن مرقس. لكن النص من سفر الأعمال المتأخر، فهو سند متواضع. والموقف الأمين أن القبر ويوسف قائمان على الأناجيل.',
        ],
      },
      limits: {
        en: 'It leaves the question of Joseph\'s historicity open.',
        ar: 'يترك ذلك مسألة تاريخية يوسف مفتوحة.',
      },
      evidence: ['e1', 'e2', 'e3'],
    },
    {
      id: 'o3',
      statement: {
        en: 'The Gospels disagree about the burial, in the spices, the helpers and the garden, so they cannot all be trusted.',
        ar: 'تختلف الأناجيل في الدفن، في الأطياب والمساعدين والبستان، فلا يمكن الوثوق بها جميعًا.',
      },
      response: {
        en: [
          'The differences are real, and they show that the accounts were not harmonised. But on the essentials they agree: Joseph, a request to Pilate, a rock-cut tomb, the day of preparation and women who saw the place. Differences in secondary details alongside agreement in the main shape are what one expects when a memory has been handed on in several lines.',
          'It is equally possible that the agreement comes from dependence on Mark. John seems to have an independent line, but the degree of independence is debated.',
        ],
        ar: [
          'الفروق حقيقية، وتبين أن الروايات لم تُوفَّق بينها. لكنها تتفق في الجوهر: يوسف، وطلب إلى بيلاطس، وقبر منحوت في الصخر، ويوم الاستعداد، ونساء رأين الموضع. واختلاف التفاصيل الثانوية مع الاتفاق في الشكل العام هو المتوقع حين تنتقل ذاكرة في خطوط عدة.',
          'ومن الممكن بالقدر نفسه أن يكون الاتفاق ناشئًا عن الاعتماد على مرقس. ويبدو أن ليوحنا خطًا مستقلًا، لكن درجة الاستقلال محل جدل.',
        ],
      },
      limits: {
        en: 'Agreement among dependent accounts adds little. The article does not count the four as four independent witnesses.',
        ar: 'الاتفاق بين روايات متعلقة بعضها ببعض لا يضيف الكثير. ولا يحسب المقال الأناجيل الأربعة أربعة شهود مستقلين.',
      },
      evidence: ['e3', 'e4', 'e5'],
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'A Christian historian can fairly say that the burial is early, that it is reported with names and place, that it did not flatter the council, and that it fits Jewish concern for burial. These are reasons to take the report seriously. A critic can fairly answer that Roman practice leaves room for doubt and that the sources are shaped by their purposes.',
        'The argument over the burial should be conducted without treating the doubts of a sceptic as hostility, or the confidence of a believer as naïveté. The evidence is short, and both sides should say where it stops.',
      ],
      ar: [
        'يستطيع المؤرخ المسيحي أن يقول بإنصاف إن الدفن مبكر، وإنه مروي بأسماء ومكان، وإنه لم يجامل المجلس، وإنه يلائم اهتمام اليهود بالدفن. وهذه أسباب لأخذ الخبر بجدية. ويستطيع الناقد أن يجيب بإنصاف بأن الممارسة الرومانية تترك مجالًا للشك وبأن المصادر تشكلها أغراضها.',
        'وينبغي أن يُدار الجدل في الدفن دون عدّ شكوك المتشكك عداوة، ولا ثقة المؤمن سذاجة. فالشواهد قصيرة، وعلى الطرفين أن يقولا أين تتوقف.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that Christ was buried, and sees in the burial the real end of his earthly life and the entry of the Lord into the place of the dead in order to open it. The Creed says "and was buried" in the same breath as "suffered" and "was crucified". The burial is part of what the Church believes about the real humanity of Christ and the reality of his death.',
      ],
      ar: [
        'تعترف الكنيسة بأن المسيح دُفن، وترى في الدفن النهاية الحقيقية لحياته الأرضية ودخول الرب إلى موضع الأموات ليفتحه. ويقول قانون الإيمان «وقُبر» مع «تألم» و«صُلب». والدفن جزء مما تؤمن به الكنيسة في ناسوت المسيح الحقيقي وحقيقة موته.',
      ],
    },
  },
  coptic: {
    en: [
      'On Good Friday the Coptic Church keeps the services of the burial. The icon of the Lord\'s burial is wrapped and carried in procession, and is placed in the church, while the hymns recall Joseph and Nicodemus. The Church does this because it believes the burial was real, and because it prays the Pascha as a participation in the saving events and not only a remembrance of them.',
    ],
    ar: [
      'تقيم الكنيسة القبطية في الجمعة العظيمة خدمات الدفن. فتُلف أيقونة دفن الرب وتُطاف في موكب وتوضع في الكنيسة، بينما تذكّر الألحان يوسف ونيقوديموس. وتفعل ذلك لأنها تؤمن بأن الدفن كان حقيقيًا، ولأنها تصلي البصخة مشاركةً في أحداث الخلاص لا تذكّرًا لها فحسب.',
    ],
  },
  disputed: {
    en: [
      'Debated: whether Roman practice makes an honourable burial of Jesus improbable; whether Joseph of Arimathea is a historical person or a figure created by tradition; whether the burial and the empty tomb are linked in the earliest tradition; and whether the Gospels\' agreement is independent.',
      'Not debated here: that the earliest summary says Jesus was buried, and that every Gospel reports a burial before the sabbath. The question is the form and the setting.',
    ],
    ar: [
      'مختلف عليه: هل تجعل الممارسة الرومانية دفنًا لائقًا ليسوع بعيد الاحتمال؛ وهل يوسف الرامي شخص تاريخي أو شخصية صنعها التقليد؛ وهل ارتبط الدفن بالقبر الفارغ في أقدم تقليد؛ وهل اتفاق الأناجيل مستقل.',
      'غير مختلف عليه هنا: أن أقدم ملخص يقول إن يسوع دُفن، وأن كل إنجيل يروي دفنًا قبل السبت. والسؤال هو الشكل والإطار.',
    ],
  },
  conclusion: {
    en: 'That Jesus was buried is well attested, and that Joseph of Arimathea buried him in a rock-cut tomb is probable for many historians and doubted by others. The report is early and specific, and the objections from Roman practice make it uncertain without disproving it.',
    ar: 'دفن يسوع موثق جيدًا، ودفن يوسف الرامي له في قبر منحوت في الصخر مرجَّح عند مؤرخين كثيرين ومشكوك فيه عند آخرين. والخبر مبكر ومحدد، والاعتراضات من الممارسة الرومانية تجعله غير مؤكد دون أن تنقضه.',
  },
  furtherReading: ['S08', 'S14', 'S16', 'S15'],
  related: ['empty-tomb-evidence', 'what-1-corinthians-15-reports', 'trial-details-secure-and-debated', 'could-jesus-have-survived', 'resurrection-accounts-disagree'],
};
