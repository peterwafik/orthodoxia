import type { Church } from './types.ts';

/** The churches of the Reformation and the movements that grew from them. */
export const REFORMATION: readonly Church[] = [
  {
    id: 'lutheran',
    group: 'reformation',
    parent: 'roman-catholic',
    year: 1517,
    kind: 'division',
    lane: 4,
    hue: 100,
    name: { en: 'Lutheran churches', ar: 'الكنائس اللوثرية' },
    when: { en: 'Martin Luther, 1517', ar: 'مارتن لوثر، سنة 1517' },
    summary: {
      en: 'The churches that follow the Reformation begun by Martin Luther in Germany.',
      ar: 'الكنائس التي تتبع الإصلاح الذي بدأه مارتن لوثر في ألمانيا.',
    },
    reason: {
      en: 'Luther, a monk and professor, protested against the sale of indulgences in 1517 and then against Rome’s teaching on salvation and authority. He was excommunicated in 1521, and the Augsburg Confession of 1530 became the churches’ statement of faith.',
      ar: 'اعترض لوثر، وكان راهبًا وأستاذًا، على بيع صكوك الغفران سنة 1517 ثم على تعليم روما في الخلاص والسلطة. وحُرم سنة 1521، وصار اعتراف أوغسبورغ سنة 1530 بيان إيمان كنائسه.',
    },
    changes: {
      en: [
        'Teaches justification by grace through faith alone, apart from works.',
        'Holds Scripture alone as the final authority, and the priesthood of all believers.',
        'Rejects papal authority, purgatory and indulgences, and keeps baptism and the Lord’s Supper as the chief sacraments.',
      ],
      ar: [
        'تعلّم التبرير بالنعمة بالإيمان وحده بمعزل عن الأعمال.',
        'تعتبر الكتاب المقدس وحده السلطة النهائية، وتعلّم كهنوت جميع المؤمنين.',
        'ترفض سلطة البابا والمطهر والغفرانات، وتبقي المعمودية والعشاء الرباني أهم الأسرار.',
      ],
    },
    coptic: {
      en: 'The Coptic Orthodox Church teaches that faith works with deeds of love, and that Holy Tradition and the sacraments, including confession to a priest, are channels of grace. It does not accept Scripture alone as the sole authority.',
      ar: 'تعلّم الكنيسة القبطية الأرثوذكسية أن الإيمان يعمل مع أعمال المحبة، وأن التقليد المقدس والأسرار، ومنها الاعتراف أمام الكاهن، قنوات للنعمة. ولا تقبل الكتاب المقدس وحده سلطةً وحيدة.',
    },
  },
  {
    id: 'reformed',
    group: 'reformation',
    parent: 'roman-catholic',
    year: 1519,
    kind: 'division',
    lane: 5,
    hue: 170,
    name: { en: 'Reformed and Presbyterian churches', ar: 'الكنائس الإصلاحية والمشيخية' },
    when: { en: 'Zwingli in Zurich, 1519; Calvin in Geneva, 1536', ar: 'زوينغلي في زيورخ سنة 1519؛ وكالفن في جنيف سنة 1536' },
    summary: {
      en: 'The churches of the Swiss Reformation, shaped by Huldrych Zwingli and John Calvin.',
      ar: 'كنائس الإصلاح السويسري التي صاغها هولدريخ زوينغلي ويوحنا كالفن.',
    },
    reason: {
      en: 'Zwingli began reforming the church in Zurich from 1519, and Calvin, in Geneva from 1536, gave the movement its teaching in the Institutes. They agreed with Luther against Rome on grace and Scripture, but differed from Luther on the Lord’s Supper and on images in worship.',
      ar: 'بدأ زوينغلي إصلاح الكنيسة في زيورخ منذ سنة 1519، وأعطى كالفن في جنيف منذ سنة 1536 الحركة تعليمها في كتاب «مبادئ الدين المسيحي». واتفقا مع لوثر ضد روما في النعمة والكتاب، لكنهما اختلفا معه في العشاء الرباني وفي الصور في العبادة.',
    },
    changes: {
      en: [
        'Stresses God’s sovereignty and election (predestination).',
        'Governs the church by elders and presbyteries rather than bishops.',
        'Understands the Lord’s Supper as a spiritual presence or a memorial, and removes images from worship.',
      ],
      ar: [
        'تشدد على سيادة الله والاختيار (التعيين السابق).',
        'تدير الكنيسة بالشيوخ والمجالس المشيخية بدل الأساقفة.',
        'تفهم العشاء الرباني حضورًا روحيًّا أو تذكارًا، وتُزيل الصور من العبادة.',
      ],
    },
    coptic: {
      en: 'The Coptic Orthodox Church does not accept the teaching of predestination to salvation or damnation, affirms the real presence in the Eucharist, and keeps apostolic succession of bishops and the veneration of icons.',
      ar: 'لا تقبل الكنيسة القبطية الأرثوذكسية التعليم بسبق التعيين للخلاص أو الهلاك، وتؤمن بالحضور الحقيقي في الإفخارستيا، وتحفظ التسلسل الرسولي للأساقفة وإكرام الأيقونات.',
    },
  },
  {
    id: 'anglican',
    group: 'reformation',
    parent: 'roman-catholic',
    year: 1534,
    kind: 'division',
    lane: 6,
    hue: 265,
    name: { en: 'Anglican Communion', ar: 'الشركة الأنجليكانية' },
    when: { en: 'Act of Supremacy, 1534', ar: 'قانون السيادة، سنة 1534' },
    summary: {
      en: 'The Church of England and the churches in communion with the Archbishop of Canterbury.',
      ar: 'كنيسة إنجلترا والكنائس التي هي في شركة مع رئيس أساقفة كانتربري.',
    },
    reason: {
      en: 'The break began over politics and royal authority. In 1534 the Act of Supremacy made King Henry VIII head of the Church of England after the Pope refused to annul his marriage. Under Edward VI and Elizabeth I the church took on Reformation teaching, through the Book of Common Prayer (1549) and the Thirty-Nine Articles (1563).',
      ar: 'بدأ الانفصال بدافع سياسي وسلطة ملكية. ففي سنة 1534 جعل قانون السيادة الملك هنري الثامن رئيسًا لكنيسة إنجلترا بعد أن رفض البابا إبطال زواجه. وفي عهد إدوارد السادس وإليزابيث الأولى أخذت الكنيسة بتعاليم الإصلاح، عبر كتاب الصلاة العامة (1549) والمواد التسع والثلاثين (1563).',
    },
    changes: {
      en: [
        'Rejects papal authority; the monarch is the supreme governor of the Church of England.',
        'Seeks a middle way between Catholic and Protestant teaching.',
        'Keeps bishops in apostolic succession, and worships in English from the Book of Common Prayer.',
      ],
      ar: [
        'ترفض سلطة البابا؛ والملك هو الحاكم الأعلى لكنيسة إنجلترا.',
        'تطلب طريقًا وسطًا بين التعليم الكاثوليكي والبروتستانتي.',
        'تحفظ الأساقفة في التسلسل الرسولي، وتصلي بالإنجليزية من كتاب الصلاة العامة.',
      ],
    },
    coptic: {
      en: 'The Coptic Orthodox Church does not accept the Anglican claim to apostolic succession, and does not accept the ordination of women. It holds the faith of the first three councils.',
      ar: 'لا تقبل الكنيسة القبطية الأرثوذكسية دعوى الأنجليكان بالتسلسل الرسولي، ولا تقبل سيامة النساء. وتتمسك بإيمان المجامع الثلاثة الأولى.',
    },
  },
  {
    id: 'anabaptist',
    group: 'reformation',
    parent: 'reformed',
    year: 1525,
    kind: 'division',
    lane: 7,
    hue: 65,
    name: { en: 'Anabaptists', ar: 'حركة إعادة المعمودية (الأنابابتست)' },
    when: { en: 'First adult baptisms in Zurich, 1525', ar: 'أول معموديات للبالغين في زيورخ، سنة 1525' },
    summary: {
      en: 'The radical wing of the Reformation, ancestors of the Mennonites, Amish and Hutterites.',
      ar: 'الجناح الراديكالي في الإصلاح، وأسلاف المينونايت والأميش والهوتيريين.',
    },
    reason: {
      en: 'Some of Zwingli’s followers in Zurich, among them Conrad Grebel and Felix Manz, held that the Reformation was too slow and that baptism belongs only to those who profess faith. They baptised each other as adults in January 1525 and left the city church. They were persecuted by Catholics and Protestants alike.',
      ar: 'رأى بعض أتباع زوينغلي في زيورخ، ومنهم كونراد غريبل وفيليكس مانتس، أن الإصلاح بطيء، وأن المعمودية للذين يعترفون بإيمانهم فقط. فتعمّدوا بالغين في يناير سنة 1525 وخرجوا من كنيسة المدينة. واضطهدهم الكاثوليك والبروتستانت معًا.',
    },
    changes: {
      en: [
        'Baptises only believers who profess faith, rejecting infant baptism.',
        'Separates the church from the state, and refuses to take oaths or bear the sword in many groups.',
        'Gathers in small voluntary congregations and keeps the Lord’s Supper as a memorial.',
      ],
      ar: [
        'تعمّد المؤمنين المعترفين وحدهم، وترفض معمودية الأطفال.',
        'تفصل الكنيسة عن الدولة، وفي جماعات كثيرة ترفض القسم وحمل السلاح.',
        'تجتمع في جماعات صغيرة اختيارية وتجعل العشاء الرباني تذكارًا.',
      ],
    },
    coptic: {
      en: 'The Coptic Orthodox Church baptises infants and holds that baptism and chrismation bring the believer into the church, citing the baptism of whole households in the Acts of the Apostles.',
      ar: 'تعمّد الكنيسة القبطية الأرثوذكسية الأطفال، وتعلّم أن المعمودية والميرون يدخلان المؤمن في الكنيسة، مستشهدة بمعمودية بيوت كاملة في سفر أعمال الرسل.',
    },
  },
  {
    id: 'baptist',
    group: 'reformation',
    parent: 'reformed',
    year: 1609,
    kind: 'division',
    lane: 8,
    hue: 310,
    name: { en: 'Baptist churches', ar: 'الكنائس المعمدانية' },
    when: { en: 'John Smyth in Amsterdam, 1609', ar: 'جون سميث في أمستردام، سنة 1609' },
    summary: {
      en: 'Churches that baptise believers by immersion and govern each congregation independently.',
      ar: 'كنائس تعمّد المؤمنين بالتغطيس وتدير كل جماعة نفسها باستقلال.',
    },
    reason: {
      en: 'English Separatists from the Puritan tradition left the Church of England and, under John Smyth in Amsterdam in 1609, adopted believers’ baptism, with Anabaptist influence. Later groups in England in the 1640s adopted baptism by immersion.',
      ar: 'ترك الانفصاليون الإنجليز من التقليد البيوريتاني كنيسة إنجلترا، وتبنّوا بقيادة جون سميث في أمستردام سنة 1609 معمودية المؤمنين، متأثرين بحركة إعادة المعمودية. وتبنّت جماعات لاحقة في إنجلترا في أربعينيات القرن السابع عشر المعمودية بالتغطيس.',
    },
    changes: {
      en: [
        'Baptises believers by immersion and rejects infant baptism.',
        'Keeps each congregation independent, with no bishops above it.',
        'Defends religious liberty and the separation of church and state.',
      ],
      ar: [
        'تعمّد المؤمنين بالتغطيس وترفض معمودية الأطفال.',
        'تحفظ استقلال كل جماعة، بلا أساقفة فوقها.',
        'تدافع عن الحرية الدينية وفصل الكنيسة عن الدولة.',
      ],
    },
    coptic: {
      en: 'The Coptic Orthodox Church practises baptism by triple immersion, including for infants, and teaches that the church is one body under its bishops rather than a set of independent congregations.',
      ar: 'تمارس الكنيسة القبطية الأرثوذكسية المعمودية بالتغطيس ثلاث مرات، ومنها للأطفال، وتعلّم أن الكنيسة جسد واحد تحت أساقفتها لا مجموعة جماعات مستقلة.',
    },
  },
  {
    id: 'pentecostal',
    group: 'reformation',
    parent: 'baptist',
    year: 1906,
    kind: 'division',
    lane: 9,
    hue: 8,
    name: { en: 'Pentecostal churches', ar: 'الكنائس الخمسينية' },
    when: { en: 'Azusa Street revival, 1906', ar: 'نهضة شارع أزوسا، سنة 1906' },
    summary: {
      en: 'Churches that stress the gifts of the Holy Spirit, such as speaking in tongues and healing.',
      ar: 'كنائس تشدد على مواهب الروح القدس، مثل التكلم بألسنة والشفاء.',
    },
    reason: {
      en: 'The movement grew out of the Wesleyan Holiness movement and evangelical revivals, and is placed on the Baptist line here as the nearest evangelical family. It was taught by Charles Parham in 1901 and spread from the Azusa Street revival in Los Angeles in 1906, led by William Seymour. Believers sought a “baptism in the Holy Spirit” as in the Day of Pentecost.',
      ar: 'نشأت الحركة من حركة القداسة الويسلية والنهضات الإنجيلية، وتوضع هنا على الخط المعمداني بوصفه أقرب أسرة إنجيلية. وعلّم بها تشارلز بارهام سنة 1901، وانتشرت من نهضة شارع أزوسا في لوس أنجلوس سنة 1906 بقيادة ويليام سيمور. وطلب المؤمنون «معمودية الروح القدس» كما في يوم الخمسين.',
    },
    changes: {
      en: [
        'Teaches a baptism in the Holy Spirit after conversion, often with speaking in tongues.',
        'Expects continuing miracles, healing and prophecy.',
        'Worships freely, with emotional and spontaneous prayer, and congregations are usually independent.',
      ],
      ar: [
        'تعلّم بمعمودية الروح القدس بعد الاهتداء، وغالبًا مع التكلم بألسنة.',
        'تتوقع استمرار المعجزات والشفاء والنبوة.',
        'تعبد بحرية، بصلاة عاطفية وعفوية، وجماعاتها غالبًا مستقلة.',
      ],
    },
    coptic: {
      en: 'The Coptic Orthodox Church teaches that the Holy Spirit is received through baptism and chrismation with the holy myron, not as a separate later experience, and that the gifts of the Spirit are to be tested by the church.',
      ar: 'تعلّم الكنيسة القبطية الأرثوذكسية أن الروح القدس يُنال بالمعمودية ومسحة الميرون المقدس، لا بخبرة لاحقة منفصلة، وأن مواهب الروح تُمتحن بالكنيسة.',
    },
  },
];
