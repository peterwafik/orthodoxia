import type { Church } from './types.ts';

/** The early church, continued as the Coptic Orthodox Church (the trunk), and the other Oriental Orthodox and Eastern churches above it. */
export const TRUNK_AND_ORIENT: readonly Church[] = [
  {
    id: 'coptic-orthodox',
    group: 'oriental',
    parent: null,
    year: 33,
    kind: 'division',
    lane: 0,
    hue: 45,
    name: {
      en: 'Early Church and the Coptic Orthodox Church',
      ar: 'الكنيسة الأولى والكنيسة القبطية الأرثوذكسية',
    },
    when: {
      en: 'From AD 33; Alexandria founded by St Mark',
      ar: 'منذ سنة 33م؛ كنيسة الإسكندرية تأسست على يد مار مرقس',
    },
    summary: {
      en: 'The church of the apostles, continued in Egypt by the See of St Mark, and the line this timeline follows.',
      ar: 'كنيسة الرسل التي استمرت في مصر عبر كرسي مار مرقس، وهي الخط الذي يتتبعه هذا الشريط الزمني.',
    },
    reason: {
      en: 'This is the main line, so it does not divide from anything. It is drawn in the centre as the Coptic Orthodox Church’s own account of its continuity with the church of the apostles. The Eastern Orthodox and Catholic churches make similar claims of continuity for themselves.',
      ar: 'هذا هو الخط الرئيسي، فهو لا ينفصل عن شيء. وقد رُسم في الوسط كما تروي الكنيسة القبطية الأرثوذكسية استمرارها مع كنيسة الرسل. وتقدم الكنيسة الأرثوذكسية الخلقيدونية والكنيسة الكاثوليكية دعاوى مماثلة لنفسيهما.',
    },
    changes: {
      en: [
        'Keeps the faith of the first three ecumenical councils: Nicaea (325), Constantinople (381) and Ephesus (431).',
        'Confesses one incarnate nature of God the Word, and does not accept the Chalcedonian definition of 451.',
        'Is led by the Pope of Alexandria and the Holy Synod.',
      ],
      ar: [
        'تحفظ إيمان المجامع المسكونية الثلاثة الأولى: نيقية (325) والقسطنطينية (381) وأفسس (431).',
        'تعترف بطبيعة واحدة متجسدة لله الكلمة، ولا تقبل تعريف مجمع خلقيدونية سنة 451.',
        'يرأسها بابا الإسكندرية والمجمع المقدس.',
      ],
    },
    coptic: {
      en: 'This is the Coptic Orthodox Church’s own view of itself. It is the baseline the other churches are compared with.',
      ar: 'هذه رؤية الكنيسة القبطية الأرثوذكسية لنفسها، وهي الأساس الذي تُقارن به الكنائس الأخرى.',
    },
  },
  {
    id: 'ethiopian',
    group: 'oriental',
    parent: 'coptic-orthodox',
    year: 330,
    kind: 'daughter',
    lane: -4,
    hue: 150,
    name: { en: 'Ethiopian Orthodox Tewahedo Church', ar: 'الكنيسة الأرثوذكسية الإثيوبية التوحيدية' },
    when: {
      en: 'About 330; independent from 1959',
      ar: 'نحو سنة 330؛ مستقلة منذ 1959',
    },
    summary: {
      en: 'The church of Ethiopia, founded from Alexandria and in communion with the Coptic Orthodox Church.',
      ar: 'كنيسة إثيوبيا، تأسست من الإسكندرية وهي في شركة مع الكنيسة القبطية الأرثوذكسية.',
    },
    reason: {
      en: 'This is not a division. St Frumentius was consecrated bishop of Axum by St Athanasius of Alexandria in the fourth century, and Ethiopia’s bishops came from Alexandria for some sixteen centuries. In 1959 the Coptic Pope Cyril VI granted the Ethiopian Church its own Patriarch.',
      ar: 'ليس هذا انقسامًا. فقد رسم القديس أثناسيوس الرسولي القديس فرومنتيوس أسقفًا على أكسوم في القرن الرابع، وظل أساقفة إثيوبيا يأتون من الإسكندرية نحو ستة عشر قرنًا. وفي سنة 1959 منح البابا كيرلس السادس الكنيسة الإثيوبية بطريركًا خاصًا بها.',
    },
    changes: {
      en: [
        'Shares the Coptic faith, including the rejection of Chalcedon.',
        'Keeps Old Testament customs, including Sabbath observance alongside Sunday.',
        'Uses a larger Bible canon, and Ge’ez as its liturgical language.',
      ],
      ar: [
        'تشترك في الإيمان القبطي، ومنه رفض مجمع خلقيدونية.',
        'تحفظ عادات من العهد القديم، منها إكرام السبت إلى جانب الأحد.',
        'تستخدم قانونًا كتابيًا أوسع، واللغة الجعزية لغةً للعبادة.',
      ],
    },
    coptic: {
      en: 'The Coptic Orthodox Church regards the Ethiopian Church as a sister church of the same faith.',
      ar: 'تعتبر الكنيسة القبطية الأرثوذكسية الكنيسة الإثيوبية كنيسة شقيقة في الإيمان نفسه.',
    },
  },
  {
    id: 'church-of-the-east',
    group: 'east',
    parent: 'coptic-orthodox',
    year: 431,
    kind: 'division',
    lane: -5,
    hue: 20,
    name: { en: 'Assyrian Church of the East', ar: 'كنيسة المشرق الآشورية' },
    when: { en: 'After the Council of Ephesus, 431', ar: 'بعد مجمع أفسس، سنة 431' },
    summary: {
      en: 'The ancient church of Persia and Mesopotamia, which did not accept the Council of Ephesus.',
      ar: 'كنيسة فارس وما بين النهرين القديمة، التي لم تقبل قرارات مجمع أفسس.',
    },
    reason: {
      en: 'The Council of Ephesus (431) condemned Nestorius, Patriarch of Constantinople, for teaching that Mary should not be called Theotokos and for separating the divine and human in Christ. The church in the Persian Empire lay outside Roman rule, had its own catholicos, and followed the school of Theodore of Mopsuestia. It did not accept the condemnation and adopted its own position in the 480s.',
      ar: 'أدان مجمع أفسس (431) نسطور بطريرك القسطنطينية لتعليمه أن العذراء لا تُدعى والدة الإله ولفصله اللاهوت عن الناسوت في المسيح. وكانت الكنيسة في الإمبراطورية الفارسية خارج حكم الرومان، ولها جاثليقها، وتتبع مدرسة ثيئودور المصيصي. فلم تقبل الإدانة، وتبنّت موقفها الخاص في ثمانينيات القرن الخامس.',
    },
    changes: {
      en: [
        'Stresses the distinction of Christ’s two natures and speaks of two qnome united in one person.',
        'Traditionally avoids the title Theotokos, preferring “Mother of Christ”.',
        'Does not call itself Nestorian; in 1994 it signed a Common Christological Declaration with the Catholic Church.',
      ],
      ar: [
        'تشدد على تمييز طبيعتَي المسيح، وتتحدث عن أقنومين متحدين في شخص واحد.',
        'تتجنب تقليديًا لقب والدة الإله، وتفضّل «أم المسيح».',
        'لا تسمي نفسها نسطورية؛ وفي سنة 1994 وقّعت إعلانًا كريستولوجيًا مشتركًا مع الكنيسة الكاثوليكية.',
      ],
    },
    coptic: {
      en: 'The Coptic Orthodox Church holds that Christ is one person, and that Mary is truly Theotokos as Ephesus defined. It therefore regards the Christology of Nestorius as inadequate, while recognising that today’s Assyrian Church rejects that label.',
      ar: 'تؤمن الكنيسة القبطية الأرثوذكسية بأن المسيح شخص واحد، وبأن العذراء والدة الإله حقًا كما حدد مجمع أفسس. ولذلك ترى أن لاهوت نسطور غير كافٍ، مع إقرارها بأن الكنيسة الآشورية اليوم ترفض هذه التسمية.',
    },
  },
  {
    id: 'armenian',
    group: 'oriental',
    parent: 'coptic-orthodox',
    year: 506,
    kind: 'communion',
    lane: -3,
    hue: 330,
    name: { en: 'Armenian Apostolic Church', ar: 'الكنيسة الأرمنية الرسولية' },
    when: { en: 'Council of Dvin, 506', ar: 'مجمع دفين، سنة 506' },
    summary: {
      en: 'The national church of Armenia, an Oriental Orthodox church in communion with the Coptic Orthodox Church.',
      ar: 'الكنيسة الوطنية في أرمينيا، وهي كنيسة أرثوذكسية شرقية في شركة مع الكنيسة القبطية الأرثوذكسية.',
    },
    reason: {
      en: 'The Armenians were at war with Persia and did not attend Chalcedon in 451. A church council at Dvin in 506 rejected the Chalcedonian definition, and the position was confirmed at a second council in 554. This is the same stand the Coptic Church took, not a division from it.',
      ar: 'كان الأرمن في حرب مع الفرس فلم يحضروا خلقيدونية سنة 451. ورفض مجمع في دفين سنة 506 تعريف خلقيدونية، وتأكد الموقف في مجمع ثانٍ سنة 554. وهذا هو الموقف نفسه الذي اتخذته الكنيسة القبطية، فليس هذا انقسامًا عنها.',
    },
    changes: {
      en: [
        'Takes the same Christological position as the Coptic Church.',
        'Has its own Armenian rite and calendar customs, and its own Catholicos at Etchmiadzin.',
        'Uses unleavened bread and unmixed wine in the Divine Liturgy.',
      ],
      ar: [
        'تتخذ الموقف اللاهوتي نفسه الذي للكنيسة القبطية في طبيعة المسيح.',
        'لها طقسها الأرمني وعاداتها التقويمية وجاثليقها في إتشميادزين.',
        'تستخدم الفطير والخمر غير الممزوج في القداس الإلهي.',
      ],
    },
    coptic: {
      en: 'The Coptic Orthodox Church is in full communion with the Armenian Apostolic Church as a fellow Oriental Orthodox church.',
      ar: 'الكنيسة القبطية الأرثوذكسية في شركة كاملة مع الكنيسة الأرمنية الرسولية بوصفها كنيسة أرثوذكسية شرقية شقيقة.',
    },
  },
  {
    id: 'syriac',
    group: 'oriental',
    parent: 'coptic-orthodox',
    year: 518,
    kind: 'communion',
    lane: -2,
    hue: 190,
    name: { en: 'Syriac Orthodox Church of Antioch', ar: 'الكنيسة السريانية الأرثوذكسية في أنطاكية' },
    when: { en: 'Severus of Antioch exiled, 518', ar: 'نفي ساويرس الأنطاكي، سنة 518' },
    summary: {
      en: 'The ancient church of Antioch and the Syriac-speaking world, an Oriental Orthodox church in communion with the Coptic Orthodox Church.',
      ar: 'كنيسة أنطاكية القديمة والعالم الناطق بالسريانية، وهي كنيسة أرثوذكسية شرقية في شركة مع الكنيسة القبطية الأرثوذكسية.',
    },
    reason: {
      en: 'After Chalcedon the bishops of Antioch were pressed to accept it. Severus of Antioch, who opposed it, was driven from his see in 518, and in the sixth century Jacob Baradaeus secretly ordained bishops and priests to keep the non-Chalcedonian church alive. It took the same position as the Coptic Church.',
      ar: 'بعد خلقيدونية جرى الضغط على أساقفة أنطاكية لقبولها. وطُرد ساويرس الأنطاكي الذي عارضها من كرسيه سنة 518، وفي القرن السادس رسم يعقوب البرادعي أساقفة وكهنة سرًّا للحفاظ على الكنيسة غير الخلقيدونية. وقد اتخذت الموقف نفسه الذي اتخذته الكنيسة القبطية.',
    },
    changes: {
      en: [
        'Takes the same Christological position as the Coptic Church.',
        'Keeps Syriac (Aramaic) as its liturgical language and the Liturgy of St James.',
        'Is led by the Patriarch of Antioch and All the East.',
      ],
      ar: [
        'تتخذ الموقف اللاهوتي نفسه الذي للكنيسة القبطية في طبيعة المسيح.',
        'تحفظ السريانية (الآرامية) لغةً للعبادة وقداس مار يعقوب.',
        'يرأسها بطريرك أنطاكية وسائر المشرق.',
      ],
    },
    coptic: {
      en: 'The Coptic Orthodox Church is in full communion with the Syriac Orthodox Church as a fellow Oriental Orthodox church.',
      ar: 'الكنيسة القبطية الأرثوذكسية في شركة كاملة مع الكنيسة السريانية الأرثوذكسية بوصفها كنيسة أرثوذكسية شرقية شقيقة.',
    },
  },
  {
    id: 'malankara',
    group: 'oriental',
    parent: 'syriac',
    year: 1665,
    kind: 'daughter',
    lane: -1,
    hue: 280,
    name: { en: 'Malankara Orthodox Syrian Church', ar: 'كنيسة الملنكارا الأرثوذكسية السريانية' },
    when: { en: 'Link with Antioch, 1665; own Catholicos 1912', ar: 'الارتباط بأنطاكية سنة 1665؛ جاثليق خاص 1912' },
    summary: {
      en: 'The church of the St Thomas Christians in Kerala, India, linked to the Syriac Orthodox Church.',
      ar: 'كنيسة مسيحيي مار توما في ولاية كيرالا بالهند، وهي مرتبطة بالكنيسة السريانية الأرثوذكسية.',
    },
    reason: {
      en: 'Indian Christians who trace their church to the apostle Thomas came under Portuguese Latin pressure. After the Coonan Cross Oath of 1653 a large group broke with Rome, and in 1665 a Syriac Orthodox bishop arrived to give them Antiochene ties. A Catholicos for the East was established in India in 1912.',
      ar: 'تعرّض المسيحيون الهنود الذين ينسبون كنيستهم إلى الرسول توما لضغط لاتيني برتغالي. وبعد قسم الصليب في كونان سنة 1653 انفصلت جماعة كبيرة عن روما، وفي سنة 1665 وصل أسقف سرياني أرثوذكسي ليربطها بأنطاكية. وأُقيم جاثليق للمشرق في الهند سنة 1912.',
    },
    changes: {
      en: [
        'Keeps the faith and West Syriac liturgy of the Syriac Orthodox Church.',
        'Is governed by its own Catholicos in India, in communion with the other Oriental Orthodox churches.',
        'Uses Malayalam as well as Syriac in worship.',
      ],
      ar: [
        'تحفظ إيمان الكنيسة السريانية الأرثوذكسية وطقسها السرياني الغربي.',
        'يحكمها جاثليق خاص بها في الهند، وهي في شركة مع الكنائس الأرثوذكسية الشرقية.',
        'تستخدم المالايالامية إلى جانب السريانية في العبادة.',
      ],
    },
    coptic: {
      en: 'The Coptic Orthodox Church is in communion with the Malankara Orthodox Syrian Church as an Oriental Orthodox church.',
      ar: 'الكنيسة القبطية الأرثوذكسية في شركة مع كنيسة الملنكارا الأرثوذكسية السريانية بوصفها كنيسة أرثوذكسية شرقية.',
    },
  },
];
