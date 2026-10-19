import type { Church } from './types.ts';

/** The churches that accepted Chalcedon, and the Roman Catholic Church that left them in 1054. */
export const CHALCEDON: readonly Church[] = [
  {
    id: 'eastern-orthodox',
    group: 'chalcedonian',
    parent: 'coptic-orthodox',
    year: 451,
    kind: 'division',
    lane: 1,
    hue: 215,
    name: { en: 'Eastern Orthodox Church', ar: 'الكنيسة الأرثوذكسية الخلقيدونية (الروم الأرثوذكس)' },
    when: { en: 'Council of Chalcedon, 451', ar: 'مجمع خلقيدونية، سنة 451' },
    summary: {
      en: 'The family of churches of the Byzantine tradition, such as the Greek, Russian and Antiochian Orthodox churches, which accepted Chalcedon.',
      ar: 'أسرة الكنائس ذات التقليد البيزنطي، مثل الكنائس الأرثوذكسية اليونانية والروسية والأنطاكية، التي قبلت مجمع خلقيدونية.',
    },
    reason: {
      en: 'The Council of Chalcedon (451) defined Christ as one person in two natures. The churches of Alexandria, and later Antioch, held to Cyril’s formula of “one incarnate nature of God the Word” and judged the new wording too close to Nestorius. Imperial attempts at reunion, such as the Henotikon of 482, failed, and by the sixth century the two sides had separate hierarchies.',
      ar: 'عرّف مجمع خلقيدونية (451) المسيح بأنه شخص واحد في طبيعتين. وتمسكت كنيسة الإسكندرية ثم أنطاكية بصيغة كيرلس «طبيعة واحدة متجسدة لله الكلمة»، وحكمتا بأن الصياغة الجديدة قريبة من نسطور. وفشلت محاولات الإمبراطور للوحدة مثل الهينوتيكون سنة 482، وبحلول القرن السادس صار للفريقين تسلسلان كهنوتيان منفصلان.',
    },
    changes: {
      en: [
        'Accepts the Chalcedonian definition and the later councils, seven in all, up to Nicaea II in 787.',
        'Developed the Byzantine liturgy and theology, including the teaching on deification (theosis).',
        'Rejects the Western “filioque” and papal authority.',
      ],
      ar: [
        'تقبل تعريف خلقيدونية والمجامع اللاحقة، وعددها سبعة، حتى نيقية الثانية سنة 787.',
        'طورت اللاهوت والطقس البيزنطيين، ومنه تعليم التأله.',
        'ترفض إضافة «الانبثاق من الابن» الغربية وسلطة البابا.',
      ],
    },
    coptic: {
      en: 'The Coptic Orthodox Church holds the Chalcedonian definition to be inadequate. Dialogues between the Eastern and Oriental Orthodox families since the 1960s, at Aarhus, Bristol, Geneva and Chambésy, found agreement in the substance of the faith, though full communion has not been restored.',
      ar: 'ترى الكنيسة القبطية الأرثوذكسية أن تعريف خلقيدونية غير كافٍ. وقد انتهت الحوارات بين الأسرتين الأرثوذكسيتين الشرقية والخلقيدونية منذ ستينيات القرن العشرين، في آرهوس وبريستول وجنيف وشامبيزي، إلى اتفاق في جوهر الإيمان، وإن لم تُستعد الشركة الكاملة بعد.',
    },
  },
  {
    id: 'eastern-catholic',
    group: 'chalcedonian',
    parent: 'eastern-orthodox',
    year: 1596,
    kind: 'division',
    lane: 2,
    hue: 255,
    name: { en: 'Eastern Catholic Churches', ar: 'الكنائس الكاثوليكية الشرقية' },
    when: { en: 'Union of Brest, 1596, and later unions', ar: 'اتحاد برست سنة 1596 واتحادات لاحقة' },
    summary: {
      en: 'Eastern churches that entered communion with the Pope while keeping their own liturgies and customs.',
      ar: 'كنائس شرقية دخلت في شركة مع البابا مع احتفاظها بطقوسها وعاداتها.',
    },
    reason: {
      en: 'Groups within the Eastern churches were drawn into union with Rome by diplomacy, politics and mission. The Union of Brest (1596) brought in the Ruthenian Church, and similar unions followed elsewhere, for example the Coptic Catholic Church in 1741. Some, such as the Maronites, hold that they never left communion with Rome.',
      ar: 'انجذبت جماعات داخل الكنائس الشرقية إلى الاتحاد مع روما بفعل الدبلوماسية والسياسة والإرسالية. فجاء اتحاد برست (1596) بالكنيسة الروثينية، وتبعته اتحادات مشابهة في أماكن أخرى، منها الكنيسة القبطية الكاثوليكية سنة 1741. ويرى بعضها، مثل الموارنة، أنه لم يترك الشركة مع روما قط.',
    },
    changes: {
      en: [
        'Accepts the Pope’s primacy and Catholic doctrines such as purgatory.',
        'Keeps its own rite, such as the Coptic, Byzantine or Syriac liturgy, and usually a married parish clergy.',
        'Is governed by its own patriarch or major archbishop in communion with Rome.',
      ],
      ar: [
        'تقبل رئاسة البابا والعقائد الكاثوليكية مثل المطهر.',
        'تحتفظ بطقسها الخاص، قبطيًا كان أو بيزنطيًا أو سريانيًا، وكهنة رعاياها غالبًا متزوجون.',
        'يحكمها بطريرك أو رئيس أساقفة أكبر خاص بها في شركة مع روما.',
      ],
    },
    coptic: {
      en: 'The Coptic Orthodox Church is not in communion with the Coptic Catholic Church, and does not accept the Pope’s universal authority.',
      ar: 'الكنيسة القبطية الأرثوذكسية ليست في شركة مع الكنيسة القبطية الكاثوليكية، ولا تقبل السلطة العامة للبابا.',
    },
  },
  {
    id: 'roman-catholic',
    group: 'chalcedonian',
    parent: 'eastern-orthodox',
    year: 1054,
    kind: 'division',
    lane: 3,
    hue: 350,
    name: { en: 'Roman Catholic Church', ar: 'الكنيسة الكاثوليكية الرومانية' },
    when: { en: 'The Great Schism, 1054', ar: 'الانشقاق الكبير، سنة 1054' },
    summary: {
      en: 'The church of the West, led by the Pope in Rome, the largest Christian communion.',
      ar: 'كنيسة الغرب بقيادة البابا في روما، وهي أكبر شركة مسيحية.',
    },
    reason: {
      en: 'Over centuries East and West drifted apart in language, politics and practice. The disputes were the Pope’s claim to universal jurisdiction, the Western addition of “and the Son” (filioque) to the Creed, and differences over leavened and unleavened bread. In 1054 the papal legate Cardinal Humbert and Patriarch Michael Cerularius excommunicated each other, and the sack of Constantinople in 1204 deepened the break.',
      ar: 'ابتعد الشرق والغرب عن بعضهما على مدى قرون في اللغة والسياسة والممارسة. وكانت أسباب الخلاف ادعاء البابا سلطانًا عامًّا، وإضافة الغرب «والابن» إلى قانون الإيمان، والاختلاف في الخبز المختمر والفطير. وفي سنة 1054 حرم مندوب البابا الكاردينال همبرت والبطريرك ميخائيل كيرولاريوس أحدهما الآخر، وعمّق نهب القسطنطينية سنة 1204 القطيعة.',
    },
    changes: {
      en: [
        'The Pope has universal primacy, and infallibility when teaching on faith and morals, defined at the First Vatican Council in 1870.',
        'Adds the “filioque” to the Creed, and teaches purgatory and indulgences.',
        'Defined the Immaculate Conception of Mary (1854) and her Assumption (1950).',
        'Uses unleavened bread, and in the Latin rite has a celibate clergy.',
      ],
      ar: [
        'للبابا رئاسة عامة، وعصمة حين يعلّم في الإيمان والأخلاق، وقد حددها المجمع الفاتيكاني الأول سنة 1870.',
        'تضيف «والابن» إلى قانون الإيمان، وتعلّم بالمطهر والغفرانات.',
        'أعلنت عقيدة الحبل بلا دنس بالعذراء (1854) وانتقالها بالجسد (1950).',
        'تستخدم الفطير، وفي الطقس اللاتيني كهنتها غير متزوجين.',
      ],
    },
    coptic: {
      en: 'The Coptic Orthodox Church does not accept papal supremacy or infallibility, nor the later dogmas. In 1973 Pope Shenouda III and Pope Paul VI signed a joint declaration of the common faith in Christ, but communion has not been restored.',
      ar: 'لا تقبل الكنيسة القبطية الأرثوذكسية رئاسة البابا العامة ولا عصمته ولا العقائد اللاحقة. وفي سنة 1973 وقّع البابا شنودة الثالث والبابا بولس السادس بيانًا مشتركًا في الإيمان بالمسيح، لكن الشركة لم تُستعد.',
    },
  },
];
