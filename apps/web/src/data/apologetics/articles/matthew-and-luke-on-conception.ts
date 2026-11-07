import type { Article } from '../types.ts';

export const article: Article = {
  id: 'matthew-and-luke-on-conception',
  questionId: 'matthew-and-luke-on-conception',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'What the two Gospel accounts of the conception of Jesus (Matthew 1 and Luke 1) actually say, where they agree, where they differ, and what can and cannot be inferred from that. The Gospels are read first as ancient documents; the Church’s faith in the virginal conception is then stated as faith.',
    ar: 'ماذا يقول فعلًا الإنجيلان عن حبل يسوع (متى ١ ولوقا ١)، وأين يتفقان وأين يختلفان، وما الذي يمكن وما الذي لا يمكن استنتاجه من ذلك. نقرأ الإنجيلين أولًا بوصفهما وثيقتين قديمتين، ثم نعرض إيمان الكنيسة بالحبل العذراوي بوصفه إيمانًا.',
  },
  shortAnswer: {
    en: 'St Matthew and St Luke both testify that the Virgin Mary, betrothed to Joseph of the house of David, conceived Jesus by the Holy Spirit and not by Joseph. They tell the story from two sides, St Matthew from Joseph’s and St Luke from Mary’s, with largely different material, and yet they agree on the heart of it: the virgin conception, the name Jesus given by an angel, Bethlehem and Nazareth. Two distinct witnesses converge on one truth. The Church receives it as God’s own act, the beginning of the incarnation of the Word.',
    ar: 'يشهد القديسان متى ولوقا كلاهما بأن العذراء مريم، المخطوبة ليوسف من بيت داود، حبلت بيسوع من الروح القدس لا من يوسف. ويرويان القصة من جهتين: القديس متى من جهة يوسف، والقديس لوقا من جهة مريم، وبمادة مختلفة في معظمها، ومع ذلك يتفقان على جوهرها: الحبل البتولي، والاسم يسوع الذي أعلنه ملاك، وبيت لحم والناصرة. فشاهدان متميزان يلتقيان على حق واحد. وتقبله الكنيسة فعلًا إلهيًا، هو بدء تجسد الكلمة.',
  },
  quickPoints: {
    en: [
      'Both Gospels say Jesus was conceived by the Holy Spirit and that Joseph was not His father by nature.',
      'St Matthew follows Joseph: his distress, the dream, the naming, and the fulfilment of Isaiah 7:14. St Luke follows Mary: Gabriel’s announcement, her question, her visit to Elizabeth and her song.',
      'The two stories share little narrative detail, which makes their agreement on the central truth all the more striking.',
      'St Luke’s account does not appeal to Isaiah at all, so the faith in the virgin conception did not grow out of a single verse.',
      'The Church confesses the virginal conception as God’s own act, the beginning of the incarnation of the Word.',
    ],
    ar: [
      'يقول الإنجيلان إن يسوع حُبل به من الروح القدس وإن يوسف لم يكن أباه بالطبيعة.',
      'القديس متى يتبع يوسف: حيرته وحلمه وتسمية الطفل وتحقيق إشعياء ٧: ١٤. والقديس لوقا يتبع مريم: بشارة جبرائيل وسؤالها وزيارتها لأليصابات وتسبحتها.',
      'لا تشترك القصتان في كثير من التفاصيل السردية، وهذا يجعل اتفاقهما على الحق المحوري أشد لفتًا للنظر.',
      'رواية القديس لوقا لا تستند إلى إشعياء أصلًا، فالإيمان بالحبل البتولي لم ينشأ من آية واحدة.',
      'وتعترف الكنيسة بالحبل البتولي فعلًا إلهيًا، هو بدء تجسد الكلمة.',
    ],
  },
  argumentTypes: ['textual', 'historical', 'theological'],
  assessment: {
    label: 'supported_disputed_details',
    explanation: {
      en: 'That both Gospels make this claim is plain from the texts. The details differ, and scholars disagree about how the two accounts relate to each other and to earlier tradition. Whether the event itself occurred is a question of faith that historical method as such cannot test; this label is about what the texts say, not about the Church’s faith.',
      ar: 'أن الإنجيلين يقولان بهذه الدعوى واضح من النصين. والتفاصيل مختلفة، ويختلف الباحثون في صلة الروايتين إحداهما بالأخرى وبالتقليد الأسبق. أما وقوع الحدث نفسه فمسألة إيمان لا يستطيع المنهج التاريخي بما هو كذلك اختبارها؛ وهذا التصنيف يخص ما تقوله النصوص لا إيمان الكنيسة.',
    },
  },
  whyExamine: {
    en: [
      'People often speak of “the virgin birth story” as if the Gospels gave a single account. Reading St Matthew and St Luke side by side shows two distinct narratives bearing witness to one truth. Knowing exactly what each says lets the reader see how strong that shared witness is.',
      'It also helps in conversation with those who doubt. They point to the differences between the accounts; the believer can show that those very differences mark two separate witnesses who agree on what matters most.',
    ],
    ar: [
      'كثيرًا ما يُقال «قصة الميلاد البتولي» كأن الأناجيل تقدم رواية واحدة. وقراءة القديسين متى ولوقا جنبًا إلى جنب تُظهر روايتين متميزتين تشهدان لحق واحد. ومعرفة ما يقوله كل منهما بدقة تُري القارئ قوة هذه الشهادة المشتركة.',
      'وهي تساعد أيضًا في الحوار مع المتشككين. فهم يشيرون إلى الفروق بين الروايتين؛ ويستطيع المؤمن أن يبيّن أن هذه الفروق نفسها علامة على شاهدين منفصلين يتفقان على الأهم.',
    ],
  },
  background: {
    en: [
      'Matthew 1:18–25 begins after a genealogy that traces Jesus through Joseph. Mary is found with child by the Holy Spirit before the couple lived together. Joseph, a righteous man, decides to end the engagement quietly, is told in a dream not to fear taking Mary as his wife, and is told to name the child Jesus because he will save his people from their sins. The evangelist links this to Isaiah 7:14 as it stands in the Greek Bible, where the word for the young woman is rendered “virgin”. The Hebrew word in the prophecy is itself discussed, and the debate is about the prophecy, not about what Matthew reports.',
      'Luke 1:26–38 tells of the angel Gabriel sent to Mary in Nazareth. She asks how this can be, since she does not know a man; the angel answers that the Holy Spirit will come upon her and the power of the Most High overshadow her, so that the child will be called holy, the Son of God. Luke places this beside the announcement to Zechariah about John, Mary’s visit to Elizabeth (who calls her mother of her Lord), and Mary’s song. Later Luke calls Jesus the supposed son of Joseph (3:23).',
      'Where they agree: Mary is a virgin engaged to Joseph, a descendant of David; the conception is by the Holy Spirit; an angel announces the child and his name; he is born in Bethlehem and grows up in Nazareth. Where they differ: Matthew has Joseph’s dreams, the Magi, Herod and the flight to Egypt; Luke has Gabriel, Elizabeth, the census, the shepherds and the presentation in the temple. The two genealogies also differ. Harmonising these is a separate task, and the Church has done it in different ways.',
    ],
    ar: [
      'يبدأ متى ١: ١٨–٢٥ بعد سلسلة نسب تتتبع يسوع عبر يوسف. فتوجد مريم حبلى من الروح القدس قبل أن يجتمعا. ويقرر يوسف، وكان بارًا، أن يخلّيها سرًّا، فيُقال له في حلم ألا يخاف أن يأخذ مريم امرأته، وأن يسمي الطفل يسوع لأنه يخلص شعبه من خطاياهم. ويربط الإنجيلي ذلك بإشعياء ٧: ١٤ كما ورد في الترجمة اليونانية للكتاب، حيث تُترجم الكلمة العبرية للفتاة «عذراء». والكلمة العبرية في النبوة موضع نقاش، والنقاش حول النبوة لا حول ما يرويه متى.',
      'ويروي لوقا ١: ٢٦–٣٨ أن الملاك جبرائيل أُرسل إلى مريم في الناصرة. فسألت كيف يكون هذا وهي لا تعرف رجلًا، فأجابها الملاك بأن الروح القدس يحل عليها وقوة العلي تظللها، ولذلك يُدعى المولود قدوسًا، ابن الله. ويضع لوقا ذلك إلى جانب بشارة زكريا بيوحنا، وزيارة مريم لأليصابات التي تدعوها أم ربها، وتسبحة مريم. ويقول لوقا لاحقًا إن يسوع كان يُظن ابن يوسف (٣: ٢٣).',
      'مواضع الاتفاق: مريم عذراء مخطوبة ليوسف من نسل داود؛ والحبل من الروح القدس؛ وملاك يبشر بالطفل وباسمه؛ وهو يولد في بيت لحم وينشأ في الناصرة. ومواضع الاختلاف: عند متى أحلام يوسف والمجوس وهيرودس والهرب إلى مصر؛ وعند لوقا جبرائيل وأليصابات والإحصاء والرعاة والتقدمة في الهيكل. وتختلف سلسلتا النسب كذلك. والتوفيق بينهما عمل منفصل، وقد قامت به الكنيسة بطرق مختلفة.',
    ],
  },
  glossary: ['virginal-conception', 'gospel', 'synoptic-gospels', 'independent-attestation', 'septuagint', 'theotokos'],

  claims: [
    {
      id: 'c1',
      proposition: {
        en: 'St Matthew and St Luke each state that Jesus was conceived by the Holy Spirit, without a human father.',
        ar: 'يذكر القديسان متى ولوقا، كلٌّ على حدة، أن يسوع حُبل به من الروح القدس بلا أب بشري.',
      },
      argumentType: 'textual',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'Both passages state it directly and plainly. It is the central affirmation of each account, not a passing detail.',
        ar: 'تنص الفقرتان عليه نصًا مباشرًا واضحًا. وهو التأكيد المحوري في كل رواية، لا تفصيل عابر.',
      },
      limits: {
        en: 'It says what the documents report, not that the event happened.',
        ar: 'تقول ما تروي الوثيقتان، لا أن الحدث وقع.',
      },
      evidence: ['e-matt', 'e-luke'],
    },
    {
      id: 'c2',
      proposition: {
        en: 'The two accounts are told from different points of view with different material, and they bear witness to the same central truth.',
        ar: 'الروايتان مرويتان من منظورين مختلفين بمادة مختلفة، وتشهدان للحق المحوري نفسه.',
      },
      argumentType: 'textual',
      assessment: 'supported_disputed_details',
      rationale: {
        en: 'The differences in detail are visible on the page: Joseph’s dreams, the Magi and Egypt in St Matthew; Gabriel, Elizabeth and the shepherds in St Luke. Neither writer is copying the other, yet both affirm the same conception by the Holy Spirit.',
        ar: 'الفروق في التفاصيل ظاهرة في النص: أحلام يوسف والمجوس ومصر عند القديس متى؛ وجبرائيل وأليصابات والرعاة عند القديس لوقا. لا ينقل أحد الكاتبين عن الآخر، ومع ذلك يؤكد كلاهما الحبل نفسه من الروح القدس.',
      },
      limits: {
        en: 'Agreement between two Gospels is not the same as confirmation from a source outside the Christian tradition.',
        ar: 'اتفاق إنجيلين ليس كتأكيد من مصدر خارج التقليد المسيحي.',
      },
      evidence: ['e-matt', 'e-luke'],
    },
  ],

  evidence: [
    {
      id: 'e-matt',
      sourceId: 'S62',
      locator: 'Matthew 1:18-25 (read as an ancient document)',
      role: 'supports',
      states: {
        en: 'Mary is found with child through the Holy Spirit before she and Joseph come together; Joseph plans a quiet separation, is told in a dream to take her as his wife, and names the child Jesus. The evangelist links it to Isaiah 7:14.',
        ar: 'توجد مريم حبلى من الروح القدس قبل أن تجتمع بيوسف؛ فيريد يوسف تخليتها سرًّا، ثم يُقال له في حلم أن يأخذها امرأته، ويسمي الطفل يسوع. ويربط الإنجيلي ذلك بإشعياء ٧: ١٤.',
      },
      inference: {
        en: 'Matthew is a witness to what he and his community believed, told from Joseph’s side. The Isaiah link is his interpretation of the prophecy.',
        ar: 'متى شاهد لما آمن به هو وجماعته، يرويه من جهة يوسف. وربط إشعياء تفسيره للنبوة.',
      },
      bible: { book: 'matthew', chapter: 1, verse: '18-25' },
    },
    {
      id: 'e-luke',
      sourceId: 'S62',
      locator: 'Luke 1:26-38 (read as an ancient document)',
      role: 'supports',
      states: {
        en: 'Gabriel announces to the betrothed virgin Mary that she will bear a son; she asks how, since she does not know a man; she is told the Holy Spirit will come upon her, and she consents.',
        ar: 'يبشر جبرائيل مريم العذراء المخطوبة بأنها ستلد ابنًا؛ فتسأل كيف وهي لا تعرف رجلًا؛ فيقال لها إن الروح القدس يحل عليها، فتقبل.',
      },
      inference: {
        en: 'Luke is a second witness, told from Mary’s side, with no shared story-material with Matthew apart from the core claim and a few settings.',
        ar: 'لوقا شاهد ثانٍ، يروي من جهة مريم، ولا يشترك مع متى في مادة القصة إلا في الدعوى المحورية وبعض المواضع.',
      },
      dependence: {
        en: 'Whether Luke and Matthew draw on a common older tradition is not established; the two are not counted as fully independent confirmation of an event.',
        ar: 'لم يثبت هل يستقي لوقا ومتى من تقليد أقدم مشترك؛ ولا يُعدّان تأكيدًا مستقلًا تامًا لحدث.',
      },
      bible: { book: 'luke', chapter: 1, verse: '26-38' },
    },
  ],

  objections: [
    {
      id: 'o1',
      statement: {
        en: 'The accounts contradict each other (different genealogies, different journeys), so they cannot both be reliable, and the shared claim may simply be a legend that grew.',
        ar: 'الروايتان متناقضتان (سلسلتا نسب مختلفتان ورحلات مختلفة)، فلا يمكن أن تكونا معًا موثوقتين، وقد تكون الدعوى المشتركة أسطورة نمت.',
      },
      response: {
        en: [
          'The differences are real, and they are what we expect from two witnesses who tell the same event from different sides. Ancient writers, like witnesses today, chose what to include for their own purpose. Different details do not undo a shared core; they show that the core was not invented by one writer and copied by another.',
          'A legend grows by blurring and multiplying details. Here two sober, distinct accounts agree on one clear claim, and both place it within the family of Joseph and the town of Nazareth. That is the mark of a received tradition, held from the beginning by the Church.',
        ],
        ar: [
          'الفروق حقيقية، وهي ما نتوقعه من شاهدين يرويان الحدث نفسه من جهتين مختلفتين. فالكتّاب القدماء، كالشهود اليوم، اختاروا ما يذكرونه بحسب غايتهم. واختلاف التفاصيل لا ينقض الجوهر المشترك؛ بل يبيّن أن الجوهر لم يخترعه كاتب ونقله عنه آخر.',
          'والأسطورة تنمو بتشويش التفاصيل وتكثيرها. أما هنا فروايتان رصينتان متميزتان تتفقان على دعوى واحدة واضحة، وكلتاهما تضعها داخل عائلة يوسف وبلدة الناصرة. وهذه علامة تقليد مُتسلَّم، حفظته الكنيسة منذ البداية.',
        ],
      },
      limits: {
        en: 'This does not decide whether the event occurred; that is a matter of faith for the Church.',
        ar: 'لا يحسم هذا وقوع الحدث؛ فذلك عند الكنيسة مسألة إيمان.',
      },
      evidence: ['e-matt', 'e-luke'],
    },
    {
      id: 'o2',
      statement: {
        en: 'Matthew builds the story on a mistranslation: the Hebrew of Isaiah 7:14 means a young woman, not a virgin.',
        ar: 'يبني متى القصة على خطأ في الترجمة: فالعبرية في إشعياء ٧: ١٤ تعني فتاة لا عذراء.',
      },
      response: {
        en: [
          'The Greek translation St Matthew quotes reads “virgin”, and Jewish translators of Isaiah chose that word before the Church existed. St Matthew did not invent the reading; he received it from the Bible of his people.',
          'Moreover, St Matthew tells of Mary’s pregnancy in verses 18–25 before he cites the prophet, and St Luke’s account does not mention Isaiah at all. The faith in the virgin conception was not drawn from the verse; the verse was recognised as fulfilled in the event.',
        ],
        ar: [
          'الترجمة اليونانية التي يقتبسها القديس متى تقرأ «عذراء»، وقد اختار مترجمون يهود لإشعياء هذه الكلمة قبل وجود الكنيسة. فلم يخترع القديس متى هذه القراءة، بل تسلّمها من كتاب شعبه.',
          'ثم إن القديس متى يروي حمل مريم في الأعداد ١٨–٢٥ قبل أن يستشهد بالنبي، ورواية القديس لوقا لا تذكر إشعياء أصلًا. فالإيمان بالحبل البتولي لم يُستخرج من الآية؛ بل عُرف أن الآية تحققت في الحدث.',
        ],
      },
      limits: {
        en: 'This answers the claim that the story came from a verbal error. It does not prove the prophecy was about Jesus; Christians read it so by faith within the Church’s tradition.',
        ar: 'يجيب هذا عن دعوى أن القصة جاءت من خطأ لفظي. ولا يثبت أن النبوة كانت عن يسوع؛ فالمسيحيون يقرأونها هكذا بالإيمان داخل تقليد الكنيسة.',
      },
      evidence: ['e-matt'],
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'Two Gospels, neither copying the other, testify to the virgin conception. This is the earliest and fullest witness we have, and it agrees on the central truth. A conception by the Holy Spirit is, by its nature, God’s hidden work; it is known through this witness and received in faith.',
      ],
      ar: [
        'إنجيلان، لا ينقل أحدهما عن الآخر، يشهدان للحبل البتولي. وهذه أقدم شهادة لدينا وأوفاها، وهي تتفق على الحق المحوري. والحبل من الروح القدس بطبيعته عمل الله الخفي؛ يُعرف من خلال هذه الشهادة ويُقبل بالإيمان.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that the Son of God, the Word, became flesh from the Virgin Mary by the Holy Spirit. The virginal conception signals that the incarnation is God’s act and not a human achievement, and that the child is truly the Son of God and truly son of Mary. This is received by faith within the life of the Church.',
      ],
      ar: [
        'تعترف الكنيسة بأن ابن الله، الكلمة، تجسد من العذراء مريم بالروح القدس. ويشير الحبل العذراوي إلى أن التجسد فعل الله لا إنجاز بشري، وأن الطفل ابن الله حقًا وابن مريم حقًا. ويُقبل هذا بالإيمان داخل حياة الكنيسة.',
      ],
    },
  },
  coptic: {
    en: [
      'The Creed the Coptic Orthodox Church prays in every liturgy confesses that the Son was incarnate of the Holy Spirit and of the Virgin Mary. The Church therefore reads Matthew and Luke together as one witness to the incarnation, and calls Mary Theotokos because the one conceived in her is God the Word.',
    ],
    ar: [
      'قانون الإيمان الذي تصلّيه الكنيسة القبطية الأرثوذكسية في كل قداس يعترف بأن الابن تجسد من الروح القدس ومن مريم العذراء. فتقرأ الكنيسة متى ولوقا معًا شهادة واحدة للتجسد، وتدعو مريم والدة الإله لأن المحبول به فيها هو الله الكلمة.',
    ],
  },
  disputed: {
    en: [
      'Disputed: whether Matthew and Luke drew on separate traditions or a common one; how their genealogies and journeys are to be reconciled; the meaning of the Hebrew word in Isaiah 7:14 and how it relates to the Greek; and what weight the silence of Mark, John and St Paul should carry. Christians and historians differ on these points.',
    ],
    ar: [
      'مواضع الخلاف: هل استقى متى ولوقا من تقليدين منفصلين أو من تقليد مشترك؛ وكيف تُوفَّق سلسلتا النسب والرحلات؛ ومعنى الكلمة العبرية في إشعياء ٧: ١٤ وصلتها بالترجمة اليونانية؛ ووزن سكوت مرقس ويوحنا وبولس. ويختلف المسيحيون والمؤرخون في هذه النقاط.',
    ],
  },
  conclusion: {
    en: 'St Matthew and St Luke tell two different stories that bear one shared witness: Jesus was conceived by the Holy Spirit of the Virgin Mary. Their independence makes their agreement strong. The Church receives this witness in faith and confesses it in the Creed as the beginning of the incarnation of the Word.',
    ar: 'يروي القديسان متى ولوقا قصتين مختلفتين تحملان شهادة واحدة: أن يسوع حُبل به من الروح القدس من العذراء مريم. واستقلالهما يجعل اتفاقهما قويًا. وتقبل الكنيسة هذه الشهادة بالإيمان وتعترف بها في قانون الإيمان بدءًا لتجسد الكلمة.',
  },
  furtherReading: ['S62'],
  related: [
    'virginal-conception-vs-perpetual-virginity',
    'virgin-birth-vs-immaculate-conception',
    'mary-historical-evidence',
    'why-theotokos',
  ],
};
