/**
 * The patriarchs, the Exodus and the judges: from Abraham to the eve of Saul's reign.
 * Dates are written in the Hebrew count (Abraham 2166, Jacob to Egypt 1876, Exodus 1446, entry into Canaan 1406 BC).
 * In the Septuagint count the people from Abraham to Joseph move 215 years later (`shiftFor` in place.ts), so the
 * notes do not give their years. The judges are approximate and overlap.
 */
import type { CorePerson } from './types.ts';

const PATRIARCHS = {
  en: 'Counted back from the Exodus (1446 BC) with the Bible’s own numbers: the fathers’ ages at the birth of their sons, Jacob’s 130 years when he went down to Egypt, and the 430 years of Exodus 12:40. The Septuagint counts the 430 years “in Egypt and in the land of Canaan” (with the Samaritan text, Josephus and Galatians 3:17), which leaves 215 years in Egypt and puts Abraham’s birth in 1951 BC; the Hebrew text counts them “in Egypt”, which puts it in 2166 BC. The documented-history count (the chart’s default) keeps the 430 years and the ages but sets the Exodus in the 13th century BC, as most historians do, which puts Abraham about 1980 BC, in the Middle Bronze Age. The chart shows the count chosen above it.',
  ar: 'محسوبة رجوعًا من الخروج (١٤٤٦ ق.م.) بأرقام الكتاب المقدس نفسه: أعمار الآباء عند ولادة أبنائهم، وسنو يعقوب المئة والثلاثون حين نزل إلى مصر، والأربعمئة والثلاثون سنة في الخروج ١٢: ٤٠. وتحسب السبعينية هذه السنين «في أرض مصر وأرض كنعان» (مع النص السامري ويوسيفوس وغلاطية ٣: ١٧)، فتبقى مئتان وخمس عشرة سنة في مصر ويكون ميلاد إبراهيم سنة ١٩٥١ ق.م.؛ ويحسبها النص العبري «في مصر»، فيكون ميلاده سنة ٢١٦٦ ق.م. أما حساب التاريخ الموثق (الحساب الافتراضي في المخطط) فيُبقي الأربعمئة والثلاثين سنة والأعمار، لكنه يضع الخروج في القرن الثالث عشر ق.م. كما يفعل أكثر المؤرخين، فيكون إبراهيم نحو ١٩٨٠ ق.م.، في العصر البرونزي الوسيط. ويعرض المخطط الحساب المختار فوقه.',
} as const;

const EXODUS = {
  en: 'Follows the Bible’s numbers: the Exodus came 480 years before Solomon’s fourth year (1 Kings 6:1), in 1446 BC, and the entry into Canaan forty years later. Many scholars place the Exodus later, in the 13th century BC (Exodus 1:11 names the store city Raamses, built under Ramesses II; Israel is in Canaan by about 1208 BC on the Merneptah stele); the documented-history count follows them, with the Exodus about 1260 BC and the 480 years of 1 Kings 6:1 read as twelve generations.',
  ar: 'تتبع أرقام الكتاب المقدس: كان الخروج قبل السنة الرابعة لسليمان بأربعمئة وثمانين سنة (ملوك الأول ٦: ١)، أي سنة ١٤٤٦ ق.م.، ودخول كنعان بعده بأربعين سنة. ويضع كثير من الدارسين الخروج في وقت لاحق، في القرن الثالث عشر قبل الميلاد؛ إذ يذكر الخروج ١: ١١ مدينة المخازن رعمسيس التي بُنيت في عهد رمسيس الثاني، ويظهر إسرائيل في كنعان نحو ١٢٠٨ ق.م. على لوحة مرنبتاح. ويتبعهم حساب التاريخ الموثق، فيضع الخروج نحو ١٢٦٠ ق.م.، ويقرأ الأربعمئة والثمانين سنة في ملوك الأول ٦: ١ على أنها اثنا عشر جيلًا.',
} as const;

const SONS = {
  en: 'Approximate: the sons of Jacob were born in Haran within about fourteen years before Joseph, in the order of Genesis 29–30.',
  ar: 'تقريبية: وُلد بنو يعقوب في حاران في نحو أربع عشرة سنة قبل يوسف، على الترتيب الوارد في التكوين ٢٩–٣٠.',
} as const;

const JUDGES = {
  en: 'Approximate. The years given in Judges add up to more than the time available, so some judges’ terms probably overlapped; these dates follow a common conservative reconstruction and are uncertain.',
  ar: 'تقريبية. مجموع السنين المذكورة في سفر القضاة يزيد على المدة المتاحة، فالأرجح أن فترات بعض القضاة تداخلت؛ وتتبع هذه التواريخ إعادة بناء محافظة شائعة، وهي غير مؤكدة.',
} as const;

const RUTH = {
  en: 'Approximate. Ruth lived “in the days when the judges ruled” (Ruth 1:1), about three generations before David (born c. 1040 BC); the line Salmon–Boaz–Obed–Jesse may pass over some generations.',
  ar: 'تقريبية. عاشت راعوث «في أيام حكم القضاة» (راعوث ١: ١)، قبل داود (المولود نحو ١٠٤٠ ق.م.) بنحو ثلاثة أجيال؛ وقد تتخطى سلسلة سلمون وبوعز وعوبيد ويسى بعض الأجيال.',
} as const;

const UNDATED = (en: string, ar: string) => ({
  en: `The Bible gives no years for this person’s life; the date is estimated from ${en}.`,
  ar: `لا يذكر الكتاب المقدس سنيّ حياته؛ والتاريخ مقدَّر من ${ar}.`,
});

const JUDGE = { en: 'Judge of Israel', ar: 'قاضٍ لإسرائيل' } as const;
const EXODUS_Q = ['exodus-known-and-disputed'] as const;

export const CORE_PATRIARCHS: readonly CorePerson[] = [
  // ── Abraham and his household ──
  {
    key: 'Abraham@Gen.11.26-1Pe', name: { en: 'Abraham', ar: 'إبراهيم' }, born: -2166, died: -1991, basis: 'text', dating: PATRIARCHS,
    role: { en: 'Patriarch, father of the faithful', ar: 'رئيس الآباء، أبو المؤمنين' },
    summary: {
      en: 'Called by God out of Ur and Haran to the land of Canaan, he received the promise that in his seed all nations would be blessed. He believed God, and it was counted to him as righteousness; he lived 175 years.',
      ar: 'دعاه الله من أور وحاران إلى أرض كنعان، ونال الوعد بأن تتبارك في نسله جميع الأمم. آمن بالله فحُسب له ذلك برًا، وعاش مئة وخمسًا وسبعين سنة.',
    },
    refs: 'Genesis 11:26–25:10; Romans 4; Hebrews 11:8–19; James 2:21–23',
  },
  {
    key: 'Sarah@Gen.11.29-1Pe', name: { en: 'Sarah', ar: 'سارة' }, born: -2156, died: -2029, basis: 'text', dating: PATRIARCHS,
    role: { en: 'Wife of Abraham, mother of Isaac', ar: 'زوجة إبراهيم وأم إسحق' },
    summary: {
      en: 'Ten years younger than Abraham, she bore Isaac at ninety, the child of God’s promise. She died aged 127 and was buried in the cave of Machpelah at Hebron.',
      ar: 'كانت أصغر من إبراهيم بعشر سنين، وولدت إسحق ابن الموعد وهي ابنة تسعين سنة. ماتت ابنة مئة وسبع وعشرين سنة ودُفنت في مغارة المكفيلة في حبرون.',
    },
    refs: 'Genesis 11:29–23:20; Hebrews 11:11; 1 Peter 3:6',
  },
  {
    key: 'Hagar@Gen.16.1-Gal', name: { en: 'Hagar', ar: 'هاجر' }, born: -2100, approx: true, basis: 'text',
    dating: UNDATED('the birth of her son Ishmael', 'ميلاد ابنها إسماعيل'),
    role: { en: 'Sarah’s Egyptian maid, mother of Ishmael', ar: 'جارية سارة المصرية وأم إسماعيل' },
    summary: {
      en: 'Given to Abraham by Sarah, she bore Ishmael. Twice in the wilderness the Angel of the Lord met her and saved her and her son, and she called the Lord “the God who sees me.”',
      ar: 'أعطتها سارة لإبراهيم فولدت له إسماعيل. وفي البرية التقاها ملاك الرب مرتين وأنقذها هي وابنها، فدعت الرب: «أنت إيل رئي».',
    },
    refs: 'Genesis 16; Genesis 21:8–21; Galatians 4:21–31',
  },
  {
    key: 'Ishmael@Gen.16.11-Psa', name: { en: 'Ishmael', ar: 'إسماعيل' }, born: -2080, died: -1943, basis: 'text', dating: PATRIARCHS,
    role: { en: 'Son of Abraham and Hagar', ar: 'ابن إبراهيم من هاجر' },
    summary: {
      en: 'Born when Abraham was 86, he was blessed by God to become a great nation and the father of twelve princes. He helped Isaac bury their father and died aged 137.',
      ar: 'وُلد وإبراهيم ابن ست وثمانين سنة، وباركه الله ليصير أمة عظيمة وأبًا لاثني عشر رئيسًا. اشترك مع إسحق في دفن أبيهما، ومات ابن مئة وسبع وثلاثين سنة.',
    },
    refs: 'Genesis 16; Genesis 17:18–26; Genesis 21:8–21; Genesis 25:9–18',
  },
  {
    key: 'Keturah@Gen.25.1-1Ch', name: { en: 'Keturah', ar: 'قطورة' }, born: -2060, approx: true, basis: 'text',
    dating: UNDATED('her marriage to Abraham after Sarah’s death', 'زواجها بإبراهيم بعد موت سارة'),
    role: { en: 'Wife of Abraham after Sarah', ar: 'زوجة إبراهيم بعد سارة' },
    summary: {
      en: 'Abraham took her as a wife after Sarah died; she bore him six sons, among them Midian, father of the Midianites.',
      ar: 'اتخذها إبراهيم زوجة بعد موت سارة، فولدت له ستة بنين منهم مديان أبو المديانيين.',
    },
    refs: 'Genesis 25:1–6; 1 Chronicles 1:32–33',
  },
  {
    key: 'Lot@Gen.11.27-2Pe', name: { en: 'Lot', ar: 'لوط' }, born: -2140, approx: true, basis: 'text',
    dating: UNDATED('the life of his uncle Abraham; he fled Sodom about 2067 BC', 'حياة عمه إبراهيم؛ وقد هرب من سدوم نحو ٢٠٦٧ ق.م.'),
    role: { en: 'Abraham’s nephew', ar: 'ابن أخي إبراهيم' },
    summary: {
      en: 'He went with Abraham to Canaan and chose to settle near Sodom. Rescued by angels before the city was destroyed, he is called a righteous man distressed by the wickedness around him.',
      ar: 'رافق إبراهيم إلى كنعان واختار أن يسكن قرب سدوم. أنقذه الملاكان قبل خراب المدينة، ويدعوه الكتاب بارًّا كان يتعذب من شر من حوله.',
    },
    refs: 'Genesis 11:27–14:16; Genesis 19; Luke 17:28–32; 2 Peter 2:7–8',
  },
  {
    key: 'Melchizedek@Gen.14.18-Heb', name: { en: 'Melchizedek', ar: 'ملكي صادق' },
    office: { from: -2085, to: -2085, title: { en: 'King of Salem and priest of God Most High', ar: 'ملك ساليم وكاهن الله العلي' } }, approx: true, basis: 'text',
    dating: { en: 'Only his meeting with Abraham is dated, between Abraham’s coming to Canaan and the birth of Ishmael. Hebrews 7:3 says he is “without father, without mother, without descent”. A Jewish tradition identifies him with Shem, the son of Noah; that is possible only in the Hebrew count, where Shem lives until Abraham is 150. In the Septuagint count Shem died more than seven centuries before Abraham was born.', ar: 'لا يؤرَّخ إلا لقاؤه بإبراهيم، بين مجيء إبراهيم إلى كنعان وميلاد إسماعيل. ويقول عنه سفر العبرانيين (٧: ٣) إنه «بلا أب، بلا أم، بلا نسب». ويجعله تقليد يهودي هو سامًا ابن نوح؛ وهذا لا يمكن إلا في الحساب العبري، حيث يعيش سام حتى يبلغ إبراهيم مئة وخمسين سنة. أما في حساب السبعينية فقد مات سام قبل ميلاد إبراهيم بأكثر من سبعة قرون.' },
    role: { en: 'King of Salem, priest of God Most High', ar: 'ملك ساليم وكاهن الله العلي' },
    summary: {
      en: 'He brought out bread and wine, blessed Abraham, and received a tenth of everything from him. Psalm 110 and the Epistle to the Hebrews see in him a figure of Christ, the eternal High Priest.',
      ar: 'أخرج خبزًا وخمرًا وبارك إبراهيم، فأعطاه إبراهيم عُشرًا من كل شيء. ويرى فيه المزمور المئة والعاشر والرسالة إلى العبرانيين رمزًا للمسيح رئيس الكهنة الأبدي.',
    },
    refs: 'Genesis 14:17–24; Psalms 110:4; Hebrews 5:6–10; Hebrews 7',
  },
  // ── Isaac and Jacob ──
  {
    key: 'Isaac@Gen.17.19-Jas', name: { en: 'Isaac', ar: 'إسحق' }, born: -2066, died: -1886, basis: 'text', dating: PATRIARCHS,
    role: { en: 'Patriarch, son of the promise', ar: 'رئيس الآباء، ابن الموعد' },
    summary: {
      en: 'Born to Abraham at 100 and Sarah at 90, he was offered on Mount Moriah and spared, a figure of Christ’s sacrifice. He married Rebekah, fathered Esau and Jacob, and lived 180 years.',
      ar: 'وُلد لإبراهيم ابن مئة سنة ولسارة ابنة تسعين، وقُدِّم على جبل المريا ثم افتُدي، رمزًا لذبيحة المسيح. تزوج رفقة وولد عيسو ويعقوب، وعاش مئة وثمانين سنة.',
    },
    refs: 'Genesis 21–28; Genesis 35:27–29; Hebrews 11:17–20',
  },
  {
    key: 'Rebekah@Gen.22.23-Rom', name: { en: 'Rebekah', ar: 'رفقة' }, born: -2045, approx: true, basis: 'text',
    dating: UNDATED('her marriage to Isaac when he was forty', 'زواجها بإسحق وهو ابن أربعين سنة'),
    role: { en: 'Wife of Isaac, mother of Esau and Jacob', ar: 'زوجة إسحق وأم عيسو ويعقوب' },
    summary: {
      en: 'Chosen at the well of Nahor in answer to the prayer of Abraham’s servant, she left her home to marry Isaac. She bore the twins Esau and Jacob and heard from God that the elder would serve the younger.',
      ar: 'اختيرت عند بئر ناحور استجابة لصلاة عبد إبراهيم، فتركت بيتها وتزوجت إسحق. ولدت التوأمين عيسو ويعقوب، وسمعت من الرب أن الكبير يُستعبد للصغير.',
    },
    refs: 'Genesis 24; Genesis 25:20–28; Genesis 27; Romans 9:10–13',
  },
  {
    key: 'Laban@Gen.24.29-', name: { en: 'Laban', ar: 'لابان' }, born: -2050, approx: true, basis: 'text',
    dating: UNDATED('his sister Rebekah’s marriage', 'زواج أخته رفقة'),
    role: { en: 'Brother of Rebekah, father of Leah and Rachel', ar: 'أخو رفقة وأبو ليئة وراحيل' },
    summary: {
      en: 'An Aramean of Haran, he gave his sister Rebekah to Isaac and later his daughters Leah and Rachel to Jacob, who served him twenty years.',
      ar: 'أرامي من حاران، زوّج أخته رفقة لإسحق، ثم زوّج ابنتيه ليئة وراحيل ليعقوب الذي خدمه عشرين سنة.',
    },
    refs: 'Genesis 24:29–60; Genesis 29–31',
  },
  {
    key: 'Esau@Gen.25.25-Heb', name: { en: 'Esau', ar: 'عيسو' }, born: -2006, basis: 'text', dating: PATRIARCHS,
    role: { en: 'Elder son of Isaac, father of Edom', ar: 'بكر إسحق وأبو أدوم' },
    summary: {
      en: 'A skilled hunter, he sold his birthright to his twin Jacob for a meal of stew and lost his father’s blessing. Years later he received Jacob in peace; from him came the Edomites.',
      ar: 'كان صيادًا ماهرًا، فباع بكوريته لأخيه التوأم يعقوب بطبيخ عدس وخسر بركة أبيه. وبعد سنين استقبل يعقوب بسلام، ومنه جاء الأدوميون.',
    },
    refs: 'Genesis 25:19–34; Genesis 27; Genesis 32–33; Genesis 36; Hebrews 12:16–17',
  },
  {
    key: 'Israel@Gen.25.26-Rev', name: { en: 'Jacob (Israel)', ar: 'يعقوب (إسرائيل)' }, born: -2006, died: -1859, basis: 'text', dating: PATRIARCHS,
    role: { en: 'Patriarch, father of the twelve tribes', ar: 'رئيس الآباء، أبو الأسباط الاثني عشر' },
    summary: {
      en: 'He received the blessing of Abraham, saw the ladder reaching to heaven at Bethel, and after wrestling with God was named Israel. His twelve sons became the tribes of Israel; he went down to Egypt at 130 and died there aged 147.',
      ar: 'نال بركة إبراهيم، ورأى السلم المنصوبة إلى السماء في بيت إيل، وبعد أن صارع الله دُعي إسرائيل. صار بنوه الاثنا عشر أسباط إسرائيل، ونزل إلى مصر ابن مئة وثلاثين سنة ومات هناك ابن مئة وسبع وأربعين.',
    },
    refs: 'Genesis 25:19–50:14; Hosea 12:3–4; Hebrews 11:21',
  },
  {
    key: 'Leah@Gen.29.16-Rut', name: { en: 'Leah', ar: 'ليئة' }, born: -1945, approx: true, basis: 'text',
    dating: UNDATED('her marriage to Jacob', 'زواجها بيعقوب'),
    role: { en: 'Wife of Jacob, mother of six tribes', ar: 'زوجة يعقوب وأم ستة أسباط' },
    summary: {
      en: 'Laban’s elder daughter, given to Jacob by deceit, she bore Reuben, Simeon, Levi, Judah, Issachar, Zebulun and Dinah. Through Levi came the priesthood and through Judah the kings and the Messiah.',
      ar: 'ابنة لابان الكبرى، زُوِّجت ليعقوب بخدعة، فولدت رأوبين وشمعون ولاوي ويهوذا ويساكر وزبولون ودينة. ومن لاوي جاء الكهنوت، ومن يهوذا جاء الملوك والمسيح.',
    },
    refs: 'Genesis 29:16–35; Genesis 30:9–21; Genesis 49:31; Ruth 4:11',
  },
  {
    key: 'Rachel@Gen.29.6-Mat', name: { en: 'Rachel', ar: 'راحيل' }, born: -1940, died: -1900, approx: true, basis: 'text',
    dating: UNDATED('Jacob’s years in Haran; she died giving birth to Benjamin on the way to Bethlehem', 'سني يعقوب في حاران؛ وقد ماتت عند ولادة بنيامين في الطريق إلى بيت لحم'),
    role: { en: 'Beloved wife of Jacob, mother of Joseph and Benjamin', ar: 'زوجة يعقوب المحبوبة وأم يوسف وبنيامين' },
    summary: {
      en: 'Jacob served seven years for her and seven more. After long barrenness she bore Joseph, and she died bearing Benjamin; Jeremiah and Matthew speak of “Rachel weeping for her children.”',
      ar: 'خدم يعقوب لأجلها سبع سنين ثم سبعًا أخرى. وبعد عقر طويل ولدت يوسف، وماتت وهي تلد بنيامين؛ ويذكر إرميا ومتى «راحيل تبكي على أولادها».',
    },
    refs: 'Genesis 29–31; Genesis 35:16–20; Jeremiah 31:15; Matthew 2:18',
  },
  {
    key: 'Bilhah@Gen.29.29-1Ch', name: { en: 'Bilhah', ar: 'بلهة' }, born: -1940, approx: true, basis: 'text',
    dating: UNDATED('the births of her sons in Haran', 'ميلاد ابنيها في حاران'),
    role: { en: 'Rachel’s maid, mother of Dan and Naphtali', ar: 'جارية راحيل وأم دان ونفتالي' },
    summary: { en: 'Given by Rachel to Jacob, she bore Dan and Naphtali, fathers of two tribes of Israel.', ar: 'أعطتها راحيل ليعقوب فولدت دان ونفتالي، أبوي سبطين من أسباط إسرائيل.' },
    refs: 'Genesis 29:29; Genesis 30:1–8; Genesis 35:22–25',
  },
  {
    key: 'Zilpah@Gen.29.24-', name: { en: 'Zilpah', ar: 'زلفة' }, born: -1940, approx: true, basis: 'text',
    dating: UNDATED('the births of her sons in Haran', 'ميلاد ابنيها في حاران'),
    role: { en: 'Leah’s maid, mother of Gad and Asher', ar: 'جارية ليئة وأم جاد وأشير' },
    summary: { en: 'Given by Leah to Jacob, she bore Gad and Asher, fathers of two tribes of Israel.', ar: 'أعطتها ليئة ليعقوب فولدت جاد وأشير، أبوي سبطين من أسباط إسرائيل.' },
    refs: 'Genesis 29:24; Genesis 30:9–13; Genesis 35:26',
  },
  // ── The sons of Jacob ──
  {
    key: 'Reuben@Gen.29.32-Rev', name: { en: 'Reuben', ar: 'رأوبين' }, born: -1921, approx: true, basis: 'text', dating: SONS,
    role: { en: 'Firstborn of Jacob, father of a tribe', ar: 'بكر يعقوب وأبو سبط' },
    summary: { en: 'Jacob’s firstborn by Leah, he saved Joseph’s life when his brothers plotted to kill him, but lost the birthright for defiling his father’s bed.', ar: 'بكر يعقوب من ليئة، أنقذ حياة يوسف حين تآمر إخوته على قتله، لكنه فقد البكورية لأنه دنّس مضجع أبيه.' },
    refs: 'Genesis 29:32; Genesis 35:22; Genesis 37:21–30; Genesis 49:3–4',
  },
  {
    key: 'Simeon@Gen.29.33-Rev', name: { en: 'Simeon', ar: 'شمعون' }, born: -1920, approx: true, basis: 'text', dating: SONS,
    role: { en: 'Son of Jacob, father of a tribe', ar: 'ابن يعقوب وأبو سبط' },
    summary: { en: 'Second son of Leah, he joined Levi in avenging Dinah at Shechem and was held in Egypt as a pledge until Benjamin came down.', ar: 'ثاني أبناء ليئة، اشترك مع لاوي في الانتقام لدينة في شكيم، وحُبس في مصر رهينة حتى نزل بنيامين.' },
    refs: 'Genesis 29:33; Genesis 34; Genesis 42:24–43:23; Genesis 49:5–7',
  },
  {
    key: 'Levi@Gen.29.34-Rev', name: { en: 'Levi', ar: 'لاوي' }, born: -1919, died: -1782, approx: true, basis: 'text',
    dating: { en: 'He lived 137 years (Exodus 6:16); his birth is approximate, within the fourteen years before Joseph’s birth.', ar: 'عاش مئة وسبعًا وثلاثين سنة (الخروج ٦: ١٦)؛ وميلاده تقريبي، في السنين الأربع عشرة التي سبقت ميلاد يوسف.' },
    role: { en: 'Son of Jacob, father of the priestly tribe', ar: 'ابن يعقوب وأبو السبط الكهنوتي' },
    summary: { en: 'Third son of Leah, he avenged Dinah with Simeon. From him came Moses, Aaron and the whole tribe set apart for the service of God.', ar: 'ثالث أبناء ليئة، انتقم لدينة مع شمعون. ومنه جاء موسى وهارون والسبط كله المفرز لخدمة الله.' },
    refs: 'Genesis 29:34; Genesis 34; Genesis 49:5–7; Exodus 6:16–25',
  },
  {
    key: 'Judah@Gen.29.35-Rev', name: { en: 'Judah', ar: 'يهوذا' }, born: -1918, approx: true, basis: 'text', dating: SONS,
    role: { en: 'Son of Jacob, father of the royal tribe', ar: 'ابن يعقوب وأبو السبط الملكي' },
    summary: { en: 'Fourth son of Leah, he offered himself as a slave in Benjamin’s place. Jacob blessed him as the one from whom the sceptre would not depart; from his line came David and Christ.', ar: 'رابع أبناء ليئة، قدّم نفسه عبدًا عوضًا عن بنيامين. وباركه يعقوب بأن القضيب لا يزول منه، ومن نسله جاء داود والمسيح.' },
    refs: 'Genesis 29:35; Genesis 37:26–27; Genesis 38; Genesis 44:18–34; Genesis 49:8–12; Matthew 1:2–3',
  },
  {
    key: 'Dan@Gen.30.6-1Ch', name: { en: 'Dan', ar: 'دان' }, born: -1918, approx: true, basis: 'text', dating: SONS,
    role: { en: 'Son of Jacob, father of a tribe', ar: 'ابن يعقوب وأبو سبط' },
    summary: { en: 'First son of Bilhah, Rachel’s maid; Jacob foretold that he would judge his people.', ar: 'بكر بلهة جارية راحيل؛ وتنبأ يعقوب أنه يدين شعبه.' },
    refs: 'Genesis 30:1–6; Genesis 49:16–18',
  },
  {
    key: 'Naphtali@Gen.30.8-Rev', name: { en: 'Naphtali', ar: 'نفتالي' }, born: -1917, approx: true, basis: 'text', dating: SONS,
    role: { en: 'Son of Jacob, father of a tribe', ar: 'ابن يعقوب وأبو سبط' },
    summary: { en: 'Second son of Bilhah; his tribe’s land in Galilee later saw the great light of Christ’s ministry.', ar: 'ثاني ابني بلهة؛ وفي أرض سبطه بالجليل أشرق فيما بعد النور العظيم بخدمة المسيح.' },
    refs: 'Genesis 30:7–8; Genesis 49:21; Isaiah 9:1–2; Matthew 4:13–16',
  },
  {
    key: 'Gad@Gen.30.11-Rev', name: { en: 'Gad', ar: 'جاد' }, born: -1917, approx: true, basis: 'text', dating: SONS,
    role: { en: 'Son of Jacob, father of a tribe', ar: 'ابن يعقوب وأبو سبط' },
    summary: { en: 'First son of Zilpah, Leah’s maid; his tribe settled east of the Jordan.', ar: 'بكر زلفة جارية ليئة؛ وسكن سبطه شرقي الأردن.' },
    refs: 'Genesis 30:9–11; Genesis 49:19; Numbers 32',
  },
  {
    key: 'Asher@Gen.30.13-Rev', name: { en: 'Asher', ar: 'أشير' }, born: -1916, approx: true, basis: 'text', dating: SONS,
    role: { en: 'Son of Jacob, father of a tribe', ar: 'ابن يعقوب وأبو سبط' },
    summary: { en: 'Second son of Zilpah; the prophetess Anna, who saw the infant Christ in the temple, was of his tribe.', ar: 'ثاني ابني زلفة؛ ومن سبطه حنة النبية التي رأت الطفل يسوع في الهيكل.' },
    refs: 'Genesis 30:12–13; Genesis 49:20; Luke 2:36–38',
  },
  {
    key: 'Issachar@Gen.30.18-Rev', name: { en: 'Issachar', ar: 'يساكر' }, born: -1916, approx: true, basis: 'text', dating: SONS,
    role: { en: 'Son of Jacob, father of a tribe', ar: 'ابن يعقوب وأبو سبط' },
    summary: { en: 'Fifth son of Leah, father of the tribe whose men “had understanding of the times.”', ar: 'خامس أبناء ليئة، أبو السبط الذي كان رجاله «عارفين بالأوقات».' },
    refs: 'Genesis 30:14–18; Genesis 49:14–15; 1 Chronicles 12:32',
  },
  {
    key: 'Zebulun@Gen.30.20-Rev', name: { en: 'Zebulun', ar: 'زبولون' }, born: -1915, approx: true, basis: 'text', dating: SONS,
    role: { en: 'Son of Jacob, father of a tribe', ar: 'ابن يعقوب وأبو سبط' },
    summary: { en: 'Sixth son of Leah; Jacob foretold that his tribe would dwell by the shore of the sea.', ar: 'سادس أبناء ليئة؛ وتنبأ يعقوب أن سبطه يسكن عند ساحل البحر.' },
    refs: 'Genesis 30:19–20; Genesis 49:13; Matthew 4:13–16',
  },
  {
    key: 'Dinah@Gen.30.21-', name: { en: 'Dinah', ar: 'دينة' }, born: -1914, approx: true, basis: 'text', dating: SONS,
    role: { en: 'Daughter of Jacob and Leah', ar: 'ابنة يعقوب من ليئة' },
    summary: { en: 'The only daughter of Jacob named in Scripture; after she was violated at Shechem her brothers Simeon and Levi took a harsh revenge, which Jacob condemned.', ar: 'الابنة الوحيدة ليعقوب التي يذكرها الكتاب باسمها؛ وبعد أن أُذلت في شكيم انتقم لها أخواها شمعون ولاوي انتقامًا قاسيًا لامهما عليه يعقوب.' },
    refs: 'Genesis 30:21; Genesis 34; Genesis 46:15',
  },
  {
    key: 'Joseph@Gen.30.24-Rev', name: { en: 'Joseph', ar: 'يوسف' }, born: -1915, died: -1805, basis: 'text', dating: PATRIARCHS,
    role: { en: 'Son of Jacob, ruler in Egypt', ar: 'ابن يعقوب، المتسلط على أرض مصر' },
    office: { from: -1885, to: -1805, title: { en: 'Governor over Egypt under Pharaoh', ar: 'متسلط على أرض مصر تحت فرعون' } },
    summary: {
      en: 'Sold into Egypt by his brothers at seventeen, he stayed faithful in slavery and prison, interpreted Pharaoh’s dreams and at thirty was set over all Egypt. He saved his family in the famine, forgave his brothers, and died aged 110.',
      ar: 'باعه إخوته إلى مصر وهو ابن سبع عشرة سنة، فبقي أمينًا في العبودية والسجن، وفسّر حلمي فرعون، وأُقيم على كل أرض مصر وهو ابن ثلاثين سنة. أنقذ عائلته في المجاعة وغفر لإخوته، ومات ابن مئة وعشر سنين.',
    },
    refs: 'Genesis 30:22–24; Genesis 37–50; Acts 7:9–16; Hebrews 11:22',
  },
  {
    key: 'Benjamin@Gen.35.18-Rev', name: { en: 'Benjamin', ar: 'بنيامين' }, born: -1900, approx: true, basis: 'text',
    dating: { en: 'Approximate: born in Canaan after Jacob’s return from Haran and before Joseph was sold.', ar: 'تقريبي: وُلد في كنعان بعد رجوع يعقوب من حاران وقبل بيع يوسف.' },
    role: { en: 'Youngest son of Jacob, father of a tribe', ar: 'أصغر أبناء يعقوب وأبو سبط' },
    summary: { en: 'Rachel’s second son, whose birth cost her life, he was dearly loved by Jacob and by Joseph. From his tribe came King Saul and the apostle Paul.', ar: 'ابن راحيل الثاني الذي كلّفتها ولادته حياتها، وكان عزيزًا على يعقوب ويوسف. ومن سبطه جاء الملك شاول وبولس الرسول.' },
    refs: 'Genesis 35:16–18; Genesis 42–45; Genesis 49:27; Philippians 3:5',
  },
  {
    key: 'Tamar@Gen.38.6-Mat', name: { en: 'Tamar', ar: 'ثامار' }, born: -1900, approx: true, basis: 'text',
    dating: UNDATED('the events of Genesis 38, between the selling of Joseph and the going down to Egypt', 'أحداث التكوين ٣٨، بين بيع يوسف والنزول إلى مصر'),
    role: { en: 'Daughter-in-law of Judah, mother of Perez and Zerah', ar: 'كنة يهوذا وأم فارص وزارح' },
    summary: { en: 'Twice widowed and denied her right, she secured from Judah the line that God had promised; Judah said, “She is more righteous than I.” She is named in the genealogy of Christ.', ar: 'ترمّلت مرتين وحُرمت حقها، فحفظت من يهوذا النسل الموعود؛ وقال يهوذا: «هي أبرّ مني». ويُذكر اسمها في نسب المسيح.' },
    refs: 'Genesis 38; Ruth 4:12; Matthew 1:3',
  },
  {
    key: 'Perez@Gen.38.29-Luk', name: { en: 'Perez', ar: 'فارص' }, born: -1880, approx: true, basis: 'text',
    dating: UNDATED('Genesis 38 and the going down to Egypt', 'التكوين ٣٨ والنزول إلى مصر'),
    role: { en: 'Son of Judah, ancestor of David and of Christ', ar: 'ابن يهوذا وجد داود والمسيح' },
    summary: { en: 'Twin son of Judah and Tamar, who “broke through” first at his birth; through him the line of Judah runs to David and to Christ.', ar: 'ابن يهوذا من ثامار وتوأم زارح، «اقتحم» أولًا عند ولادته؛ ومنه يمتد نسل يهوذا إلى داود والمسيح.' },
    refs: 'Genesis 38:27–30; Ruth 4:18–22; Matthew 1:3; Luke 3:33',
  },
  {
    key: 'Zerah@Gen.38.30-Mat', name: { en: 'Zerah', ar: 'زارح' }, born: -1880, approx: true, basis: 'text',
    dating: UNDATED('Genesis 38 and the going down to Egypt', 'التكوين ٣٨ والنزول إلى مصر'),
    role: { en: 'Son of Judah, twin of Perez', ar: 'ابن يهوذا وتوأم فارص' },
    summary: { en: 'Twin of Perez, marked with a scarlet thread at birth; Achan and the wise men Ethan and Heman were counted among his descendants.', ar: 'توأم فارص، رُبط على يده قرمز عند ولادته؛ ومن نسله عخان والحكيمان إيثان وهيمان.' },
    refs: 'Genesis 38:27–30; Joshua 7:1; 1 Chronicles 2:6; Matthew 1:3',
  },
  {
    key: 'Asenath@Gen.41.45-', name: { en: 'Asenath', ar: 'أسنات' }, born: -1905, approx: true, basis: 'text',
    dating: UNDATED('her marriage to Joseph when he was thirty', 'زواجها بيوسف وهو ابن ثلاثين سنة'),
    role: { en: 'Egyptian wife of Joseph', ar: 'زوجة يوسف المصرية' },
    summary: { en: 'Daughter of Potiphera, priest of On, she was given to Joseph by Pharaoh and bore Manasseh and Ephraim before the years of famine.', ar: 'ابنة فوطي فارع كاهن أون، أعطاها فرعون ليوسف زوجة، فولدت منسى وأفرايم قبل سني الجوع.' },
    refs: 'Genesis 41:45–52; Genesis 46:20',
  },
  {
    key: 'Manasseh@Gen.41.51-Rev', name: { en: 'Manasseh', ar: 'منسى' }, born: -1883, approx: true, basis: 'text',
    dating: { en: 'Approximate: born in Egypt during the seven years of plenty.', ar: 'تقريبي: وُلد في مصر في سني الشبع السبع.' },
    role: { en: 'Elder son of Joseph, father of a tribe', ar: 'بكر يوسف وأبو سبط' },
    summary: { en: 'Joseph’s firstborn, whose name means “God has made me forget my toil”; Jacob adopted him as his own, and his descendants became a tribe on both sides of the Jordan.', ar: 'بكر يوسف، ومعنى اسمه «الله أنساني كل تعبي»؛ تبنّاه يعقوب، وصار نسله سبطًا على جانبي الأردن.' },
    refs: 'Genesis 41:50–51; Genesis 48; Joshua 17',
  },
  {
    key: 'Ephraim@Gen.41.52-Zec', name: { en: 'Ephraim', ar: 'أفرايم' }, born: -1881, approx: true, basis: 'text',
    dating: { en: 'Approximate: born in Egypt during the seven years of plenty.', ar: 'تقريبي: وُلد في مصر في سني الشبع السبع.' },
    role: { en: 'Younger son of Joseph, father of a leading tribe', ar: 'ابن يوسف الأصغر وأبو سبط بارز' },
    summary: { en: 'Jacob crossed his hands to bless him above his elder brother; his tribe became the leading tribe of the north, and Joshua was among his descendants.', ar: 'وضع يعقوب يديه متقاطعتين فباركه فوق أخيه الأكبر؛ وصار سبطه أبرز أسباط الشمال، ومن نسله يشوع.' },
    refs: 'Genesis 41:52; Genesis 48; 1 Chronicles 7:20–27',
  },
  {
    key: 'Potiphar@Gen.37.36-', name: { en: 'Potiphar', ar: 'فوطيفار' },
    office: { from: -1898, to: -1898, title: { en: 'Captain of Pharaoh’s guard', ar: 'رئيس الشُّرَط عند فرعون' } }, approx: true, basis: 'text',
    dating: { en: 'Only the year he bought Joseph is known, when Joseph was seventeen.', ar: 'لا تُعرف إلا سنة شرائه يوسف، وكان يوسف ابن سبع عشرة سنة.' },
    role: { en: 'Egyptian officer who bought Joseph', ar: 'خصي فرعون الذي اشترى يوسف' },
    summary: { en: 'He bought Joseph from the Ishmaelites and set him over his house because the Lord blessed it for Joseph’s sake, but on his wife’s false charge he put Joseph in prison.', ar: 'اشترى يوسف من الإسماعيليين ووكّله على بيته لأن الرب بارك بيته بسبب يوسف، لكنه ألقاه في السجن بناءً على تهمة امرأته الكاذبة.' },
    refs: 'Genesis 37:36; Genesis 39',
  },
  {
    key: 'Job@Job.1.1-Jas', name: { en: 'Job', ar: 'أيوب' }, born: -2000, died: -1800, approx: true, basis: 'tradition',
    dating: {
      en: 'Scripture gives no date. Tradition places Job in the age of the patriarchs (the Septuagint’s closing note identifies him with Jobab, a king of Edom descended from Esau), and he lived 140 years after his trial; these dates are only a rough placing.',
      ar: 'لا يذكر الكتاب تاريخًا. ويضع التقليد أيوب في عصر الآباء (والخاتمة في الترجمة السبعينية تجعله يوباب ملك أدوم من نسل عيسو)، وقد عاش بعد تجربته مئة وأربعين سنة؛ وهذه التواريخ تقدير عام فحسب.',
    },
    role: { en: 'Righteous man tried by suffering', ar: 'البار الذي جُرِّب بالآلام' },
    summary: {
      en: 'A blameless man of the land of Uz who lost his children, wealth and health, yet would not curse God. The Lord answered him out of the whirlwind and restored him; the Church reads him as a model of patience and a figure of Christ’s suffering.',
      ar: 'رجل كامل من أرض عوص فقد بنيه وماله وصحته ولم يجدّف على الله. فأجابه الرب من العاصفة وردّ سبيه؛ وتقرأ الكنيسة سيرته مثالًا للصبر ورمزًا لآلام المسيح.',
    },
    refs: 'Job 1–42; Ezekiel 14:14; James 5:11',
  },
  // ── Egypt and the Exodus ──
  {
    key: 'Kohath@Gen.46.11-2Ch', name: { en: 'Kohath', ar: 'قهات' }, born: -1890, died: -1757, approx: true, basis: 'text',
    dating: { en: 'He went down to Egypt with Jacob and lived 133 years (Exodus 6:18). Four generations from Levi to Moses (Levi, Kohath, Amram, Moses) fit the 215 years in Egypt of the Septuagint count; in the Hebrew and documented-history counts, with 430 years in Egypt, the line Kohath–Amram–Moses must pass over some generations, as genealogies often do (1 Chronicles 7:20–27 gives about ten generations from Ephraim to Joshua in the same years).', ar: 'نزل إلى مصر مع يعقوب وعاش مئة وثلاثًا وثلاثين سنة (الخروج ٦: ١٨). وأربعة أجيال من لاوي إلى موسى (لاوي وقهات وعمرام وموسى) تناسب المئتين والخمس عشرة سنة في مصر في حساب السبعينية؛ أما في الحساب العبري وحساب التاريخ الموثق، بأربعمئة وثلاثين سنة في مصر، فلا بد أن تتخطى سلسلة قهات وعمرام وموسى بعض الأجيال، كما تفعل الأنساب كثيرًا (يذكر أخبار الأيام الأول ٧: ٢٠–٢٧ نحو عشرة أجيال من أفرايم إلى يشوع في المدة نفسها).' },
    role: { en: 'Son of Levi, father of the Kohathites', ar: 'ابن لاوي وأبو القهاتيين' },
    summary: { en: 'Grandfather of Moses and Aaron in the genealogy of Exodus; his descendants carried the ark and the holy things in the wilderness.', ar: 'جد موسى وهارون في سلسلة سفر الخروج؛ وحمل بنوه التابوت والأقداس في البرية.' },
    refs: 'Genesis 46:11; Exodus 6:16–20; Numbers 4:1–20',
  },
  {
    key: 'Amram@Exo.6.18-1Ch', name: { en: 'Amram', ar: 'عمرام' }, born: -1600, died: -1463, approx: true, basis: 'text',
    dating: { en: 'He lived 137 years (Exodus 6:20); his years are set from the births of Aaron (1529 BC) and Moses (1526 BC), and are approximate.', ar: 'عاش مئة وسبعًا وثلاثين سنة (الخروج ٦: ٢٠)؛ وسنوه مقدّرة من ميلاد هارون (١٥٢٩ ق.م.) وموسى (١٥٢٦ ق.م.)، وهي تقريبية.' },
    role: { en: 'Father of Moses, Aaron and Miriam', ar: 'أبو موسى وهارون ومريم' },
    summary: { en: 'A Levite who, with his wife Jochebed, hid the infant Moses by faith, not fearing Pharaoh’s command.', ar: 'لاوي خبّأ مع زوجته يوكابد الطفل موسى بالإيمان، غير خائف من أمر فرعون.' },
    refs: 'Exodus 2:1–2; Exodus 6:18–20; Numbers 26:59; Hebrews 11:23',
  },
  {
    key: 'Jochebed@Exo.6.20-Num', name: { en: 'Jochebed', ar: 'يوكابد' }, born: -1570, approx: true, basis: 'text',
    dating: UNDATED('the births of her children Miriam, Aaron and Moses', 'ميلاد أولادها مريم وهارون وموسى'),
    role: { en: 'Mother of Moses, Aaron and Miriam', ar: 'أم موسى وهارون ومريم' },
    summary: { en: 'She hid her son Moses for three months, set him in an ark of bulrushes on the Nile, and by God’s providence nursed him for Pharaoh’s daughter.', ar: 'خبّأت ابنها موسى ثلاثة أشهر، ثم وضعته في سفط من البردي على النيل، وبتدبير الله أرضعته لحساب ابنة فرعون.' },
    refs: 'Exodus 2:1–10; Exodus 6:20; Numbers 26:59',
  },
  {
    key: 'Miriam@Exo.15.20-Mic', name: { en: 'Miriam', ar: 'مريم' }, born: -1535, died: -1407, approx: true, basis: 'text',
    dating: { en: 'She died at Kadesh in the first month of the fortieth year after the Exodus (Numbers 20:1), in 1407 BC by the Bible’s numbers; her birth, a few years before Moses, is approximate. Many scholars place the Exodus later.', ar: 'ماتت في قادش في الشهر الأول من السنة الأربعين بعد الخروج (العدد ٢٠: ١)، أي سنة ١٤٠٧ ق.م. بحسب أرقام الكتاب؛ وميلادها قبل موسى ببضع سنين تقريبي. ويضع كثير من الدارسين الخروج في وقت لاحق.' },
    role: { en: 'Prophetess, sister of Moses and Aaron', ar: 'النبية، أخت موسى وهارون' },
    summary: { en: 'She watched over the infant Moses on the Nile, and after the crossing of the Red Sea led the women with timbrels in the song “Sing to the Lord, for He has triumphed gloriously.”', ar: 'سهرت على الطفل موسى عند النيل، وبعد عبور البحر الأحمر قادت النساء بالدفوف في التسبحة: «رنموا للرب فإنه قد تعظم».' },
    refs: 'Exodus 2:4–8; Exodus 15:20–21; Numbers 12; Numbers 20:1; Micah 6:4',
    questions: [...EXODUS_Q],
  },
  {
    key: 'Moses@Exo.2.10-Rev', name: { en: 'Moses', ar: 'موسى' }, born: -1526, died: -1406, basis: 'text', dating: EXODUS,
    office: { from: -1446, to: -1406, title: { en: 'Leader of Israel from the Exodus to the plains of Moab', ar: 'قائد إسرائيل من الخروج إلى عربات موآب' } },
    role: { en: 'Prophet and lawgiver, leader of the Exodus', ar: 'النبي ومستلم الشريعة، قائد الخروج' },
    summary: {
      en: 'Saved from the Nile and raised in Pharaoh’s house, he was called by God at the burning bush to lead Israel out of Egypt. On Sinai he received the Law and the pattern of the Tabernacle; he died aged 120 on Mount Nebo, in sight of the promised land.',
      ar: 'نُشل من النيل وتربّى في بيت فرعون، ودعاه الله في العليقة المشتعلة ليُخرج إسرائيل من مصر. استلم على سيناء الشريعة ومثال خيمة الاجتماع، ومات ابن مئة وعشرين سنة على جبل نبو ناظرًا أرض الموعد.',
    },
    refs: 'Exodus 2–40; Numbers 1–36; Deuteronomy 1–34; Acts 7:20–44; Hebrews 11:23–29',
    questions: [...EXODUS_Q],
  },
  {
    key: 'Aaron@Exo.4.14-Heb', name: { en: 'Aaron', ar: 'هارون' }, born: -1529, died: -1407, basis: 'text', dating: EXODUS,
    office: { from: -1445, to: -1407, title: { en: 'First high priest of Israel', ar: 'أول رئيس كهنة لإسرائيل' } },
    role: { en: 'Brother of Moses, first high priest', ar: 'أخو موسى وأول رئيس كهنة' },
    summary: {
      en: 'Three years older than Moses, he spoke for him before Pharaoh and was consecrated the first high priest when the Tabernacle was set up. His rod budded as a sign of God’s choice; he died on Mount Hor aged 123, in the fortieth year after the Exodus.',
      ar: 'كان أكبر من موسى بثلاث سنين، وتكلم عنه أمام فرعون، وكُرّس أول رئيس كهنة عند إقامة خيمة الاجتماع. أفرخت عصاه علامة على اختيار الله له، ومات على جبل هور ابن مئة وثلاث وعشرين سنة في السنة الأربعين بعد الخروج.',
    },
    refs: 'Exodus 4:14–31; Exodus 28–29; Exodus 32; Leviticus 8–10; Numbers 17; Numbers 20:22–29; Numbers 33:38–39; Hebrews 5:4',
    questions: [...EXODUS_Q],
  },
  {
    key: 'Zipporah@Exo.2.21-', name: { en: 'Zipporah', ar: 'صفورة' }, born: -1510, approx: true, basis: 'text',
    dating: UNDATED('Moses’ years in Midian (from 1486 BC)', 'سني موسى في مديان (من ١٤٨٦ ق.م.)'),
    role: { en: 'Wife of Moses', ar: 'زوجة موسى' },
    summary: { en: 'Daughter of Jethro the priest of Midian, she married Moses during his exile and bore Gershom and Eliezer; on the way to Egypt she circumcised her son.', ar: 'ابنة يثرون كاهن مديان، تزوجت موسى في غربته وولدت جرشوم وأليعازر؛ وفي الطريق إلى مصر ختنت ابنها.' },
    refs: 'Exodus 2:15–22; Exodus 4:24–26; Exodus 18:1–6',
  },
  {
    key: 'Jethro@Exo.2.18-Num', name: { en: 'Jethro (Reuel)', ar: 'يثرون (رعوئيل)' },
    office: { from: -1486, to: -1446, title: { en: 'Priest of Midian', ar: 'كاهن مديان' } }, approx: true, basis: 'text',
    dating: { en: 'Known from Moses’ forty years in Midian (from 1486 BC) to his visit to the camp at Sinai after the Exodus.', ar: 'معروف من أربعين سنة قضاها موسى في مديان (من ١٤٨٦ ق.م.) إلى زيارته المحلة عند سيناء بعد الخروج.' },
    role: { en: 'Priest of Midian, father-in-law of Moses', ar: 'كاهن مديان وحمو موسى' },
    summary: { en: 'He received Moses in Midian and gave him his daughter Zipporah. After the Exodus he blessed the Lord for delivering Israel and counselled Moses to appoint judges to share his burden.', ar: 'استقبل موسى في مديان وأعطاه ابنته صفورة. وبعد الخروج بارك الرب لأنه أنقذ إسرائيل، ونصح موسى أن يقيم قضاة يحملون معه العبء.' },
    refs: 'Exodus 2:16–22; Exodus 3:1; Exodus 18',
  },
  {
    key: 'Gershom@Exo.2.22-1Ch', name: { en: 'Gershom', ar: 'جرشوم' }, born: -1484, approx: true, basis: 'text',
    dating: UNDATED('Moses’ years in Midian (from 1486 BC)', 'سني موسى في مديان (من ١٤٨٦ ق.م.)'),
    role: { en: 'Elder son of Moses', ar: 'بكر موسى' },
    summary: { en: 'Born in Midian, named “a stranger there” because Moses was a sojourner in a foreign land; his grandson Jonathan became priest of the tribe of Dan’s idol.', ar: 'وُلد في مديان، وسُمّي جرشوم لأن موسى قال: «كنت نزيلًا في أرض غريبة»؛ وصار حفيده يوناثان كاهنًا لتمثال سبط دان.' },
    refs: 'Exodus 2:22; Exodus 18:3; Judges 18:30; 1 Chronicles 23:15–16',
  },
  {
    key: 'Nadab@Exo.6.23-1Ch', name: { en: 'Nadab', ar: 'ناداب' }, died: -1445, basis: 'text', dating: EXODUS,
    role: { en: 'Eldest son of Aaron', ar: 'بكر هارون' },
    summary: { en: 'He went up Sinai with the elders and saw the God of Israel, but at the consecration of the priesthood he offered strange fire before the Lord and was consumed.', ar: 'صعد إلى سيناء مع الشيوخ ورأى إله إسرائيل، لكنه عند تكريس الكهنوت قدّم نارًا غريبة أمام الرب فأكلته النار.' },
    refs: 'Exodus 6:23; Exodus 24:1–11; Leviticus 10:1–7; Numbers 3:2–4',
  },
  {
    key: 'Abihu@Exo.6.23-1Ch', name: { en: 'Abihu', ar: 'أبيهو' }, died: -1445, basis: 'text', dating: EXODUS,
    role: { en: 'Son of Aaron', ar: 'ابن هارون' },
    summary: { en: 'With his brother Nadab he offered strange fire before the Lord and died, a warning that God is to be approached with holiness.', ar: 'قدّم مع أخيه ناداب نارًا غريبة أمام الرب فماتا، إنذارًا بأن الاقتراب إلى الله يكون بالقداسة.' },
    refs: 'Exodus 6:23; Exodus 24:1–11; Leviticus 10:1–7; Numbers 3:2–4',
  },
  {
    key: 'Eleazar@Exo.6.23-Ezr', name: { en: 'Eleazar', ar: 'ألعازار' },
    office: { from: -1407, to: -1385, title: { en: 'High priest of Israel', ar: 'رئيس كهنة إسرائيل' } }, died: -1385, approx: true, basis: 'text',
    dating: { en: 'He became high priest at Aaron’s death (1407 BC by the Bible’s numbers) and died after Joshua, about 1385 BC (approximate).', ar: 'صار رئيس كهنة عند موت هارون (١٤٠٧ ق.م. بحسب أرقام الكتاب) ومات بعد يشوع، نحو ١٣٨٥ ق.م. (تقريبًا).' },
    role: { en: 'Son of Aaron, second high priest', ar: 'ابن هارون ورئيس الكهنة الثاني' },
    summary: { en: 'He succeeded Aaron on Mount Hor, stood beside Joshua at his commissioning, and with him divided the land of Canaan among the tribes.', ar: 'خلف هارون على جبل هور، ووقف مع يشوع عند تسليمه القيادة، وقسم معه أرض كنعان بين الأسباط.' },
    refs: 'Numbers 20:25–28; Numbers 27:18–23; Joshua 14:1; Joshua 24:33',
  },
  {
    key: 'Ithamar@Exo.6.23-Ezr', name: { en: 'Ithamar', ar: 'إيثامار' }, born: -1490, approx: true, basis: 'text',
    dating: UNDATED('his father Aaron’s life; he was a grown priest at the Exodus', 'حياة أبيه هارون؛ وكان كاهنًا بالغًا عند الخروج'),
    role: { en: 'Youngest son of Aaron, priest', ar: 'أصغر أبناء هارون، كاهن' },
    summary: { en: 'He oversaw the accounts of the Tabernacle and the work of the Gershonite and Merarite Levites; the high priest Eli was later of his line.', ar: 'أشرف على حساب خيمة الاجتماع وعلى خدمة الجرشونيين والمراريين من اللاويين؛ ومن نسله فيما بعد عالي الكاهن.' },
    refs: 'Exodus 38:21; Leviticus 10:6–20; Numbers 4:28–33; 1 Chronicles 24:1–6',
  },
  {
    key: 'Phinehas@Exo.6.25-Psa', name: { en: 'Phinehas', ar: 'فينحاس' },
    office: { from: -1385, to: -1360, title: { en: 'High priest of Israel', ar: 'رئيس كهنة إسرائيل' } }, approx: true, basis: 'text',
    dating: { en: 'Approximate: high priest after his father Eleazar, still serving in the early days of the judges (Judges 20:28).', ar: 'تقريبي: رئيس كهنة بعد أبيه ألعازار، وكان لا يزال يخدم في أوائل أيام القضاة (القضاة ٢٠: ٢٨).' },
    role: { en: 'Grandson of Aaron, zealous high priest', ar: 'حفيد هارون، رئيس الكهنة الغيور' },
    summary: { en: 'At Baal-peor his zeal for the Lord stopped the plague, and God gave him a covenant of an everlasting priesthood. He later led the priests in the early days of the judges.', ar: 'في بعل فغور أوقفت غيرته للرب الوبأ، فأعطاه الله ميثاق كهنوت أبدي. وتقدّم الكهنة فيما بعد في أوائل أيام القضاة.' },
    refs: 'Numbers 25:7–13; Numbers 31:6; Joshua 22:13–34; Judges 20:28; Psalms 106:30–31',
  },
  {
    key: 'Korah@Exo.6.21-Jud', name: { en: 'Korah', ar: 'قورح' }, died: -1440, approx: true, basis: 'text',
    dating: { en: 'His rebellion came during the forty years in the wilderness; the year is not given (approximate).', ar: 'وقع تمرده في أثناء الأربعين سنة في البرية؛ ولا تُذكر السنة (تقريبي).' },
    role: { en: 'Levite who rebelled against Moses and Aaron', ar: 'لاوي تمرّد على موسى وهارون' },
    summary: { en: 'A Kohathite Levite who led 250 leaders in claiming the priesthood; the earth swallowed the rebels. His sons did not die, and from them came the sons of Korah, singers of the Psalms.', ar: 'لاوي من القهاتيين قاد مئتين وخمسين رئيسًا يطلبون الكهنوت، فابتلعت الأرض المتمردين. أما بنوه فلم يموتوا، ومنهم بنو قورح مرنمو المزامير.' },
    refs: 'Numbers 16; Numbers 26:9–11; Jude 1:11',
  },
  {
    key: 'Dathan@Num.16.1-Psa', name: { en: 'Dathan', ar: 'داثان' }, died: -1440, approx: true, basis: 'text',
    dating: { en: 'Died in Korah’s rebellion during the wilderness years; the year is not given (approximate).', ar: 'مات في تمرد قورح في أثناء سني البرية؛ ولا تُذكر السنة (تقريبي).' },
    role: { en: 'Reubenite rebel', ar: 'متمرد من سبط رأوبين' },
    summary: { en: 'With his brother Abiram he joined Korah’s rebellion and refused Moses’ summons; the earth opened and swallowed them.', ar: 'انضم مع أخيه أبيرام إلى تمرد قورح ورفض دعوة موسى، فانفتحت الأرض وابتلعتهما.' },
    refs: 'Numbers 16; Deuteronomy 11:6; Psalms 106:16–18',
  },
  {
    key: 'Abiram@Num.16.1-Psa', name: { en: 'Abiram', ar: 'أبيرام' }, died: -1440, approx: true, basis: 'text',
    dating: { en: 'Died in Korah’s rebellion during the wilderness years; the year is not given (approximate).', ar: 'مات في تمرد قورح في أثناء سني البرية؛ ولا تُذكر السنة (تقريبي).' },
    role: { en: 'Reubenite rebel', ar: 'متمرد من سبط رأوبين' },
    summary: { en: 'Brother of Dathan and partner in Korah’s rebellion against Moses; he perished when the earth swallowed the rebels.', ar: 'أخو داثان وشريكه في تمرد قورح على موسى؛ هلك حين ابتلعت الأرض المتمردين.' },
    refs: 'Numbers 16; Deuteronomy 11:6; Psalms 106:16–18',
  },
  {
    key: 'Bezalel@Exo.31.2-2Ch', name: { en: 'Bezalel', ar: 'بصلئيل' },
    office: { from: -1446, to: -1445, title: { en: 'Chief craftsman of the Tabernacle', ar: 'رئيس صنّاع خيمة الاجتماع' } }, basis: 'text', dating: EXODUS,
    role: { en: 'Craftsman of the Tabernacle', ar: 'صانع خيمة الاجتماع' },
    summary: { en: 'Of the tribe of Judah, grandson of Hur, he was filled with the Spirit of God in wisdom and skill to make the Tabernacle, the ark and all its furnishings.', ar: 'من سبط يهوذا، حفيد حور، ملأه الله من روحه بالحكمة والمهارة ليصنع خيمة الاجتماع والتابوت وكل آنيتها.' },
    refs: 'Exodus 31:1–11; Exodus 35:30–38:23; 2 Chronicles 1:5',
  },
  {
    key: 'Oholiab@Exo.31.6-', name: { en: 'Oholiab', ar: 'أهولياب' },
    office: { from: -1446, to: -1445, title: { en: 'Craftsman of the Tabernacle', ar: 'من صنّاع خيمة الاجتماع' } }, basis: 'text', dating: EXODUS,
    role: { en: 'Craftsman of the Tabernacle', ar: 'صانع في خيمة الاجتماع' },
    summary: { en: 'Of the tribe of Dan, an engraver and embroiderer, he was appointed with Bezalel to build the Tabernacle and to teach others the work.', ar: 'من سبط دان، نقّاش وطرّاز، أُقيم مع بصلئيل لبناء خيمة الاجتماع وتعليم غيرهما العمل.' },
    refs: 'Exodus 31:6; Exodus 35:34–36:2; Exodus 38:23',
  },
  {
    key: 'Balaam@Num.22.5-Rev', name: { en: 'Balaam', ar: 'بلعام' }, died: -1406, basis: 'text', dating: EXODUS,
    role: { en: 'Diviner hired to curse Israel', ar: 'العرّاف الذي استؤجر ليلعن إسرائيل' },
    summary: { en: 'Summoned by Balak to curse Israel, he could speak only the blessing God put in his mouth, including the oracle of the star out of Jacob. He later led Israel into sin at Peor and was killed in the war with Midian.', ar: 'استدعاه بالاق ليلعن إسرائيل، فلم يستطع أن ينطق إلا بالبركة التي وضعها الله في فمه، ومنها نبوة الكوكب الذي يبرز من يعقوب. ثم أوقع إسرائيل في الخطية في فغور، وقُتل في الحرب مع مديان.' },
    refs: 'Numbers 22–24; Numbers 31:8–16; 2 Peter 2:15–16; Revelation 2:14',
  },
  {
    key: 'Balak@Num.22.2-Rev', name: { en: 'Balak', ar: 'بالاق' },
    office: { from: -1406, to: -1406, title: { en: 'King of Moab', ar: 'ملك موآب' } }, basis: 'text', dating: EXODUS,
    role: { en: 'King of Moab', ar: 'ملك موآب' },
    summary: { en: 'Fearing Israel camped in the plains of Moab, he hired Balaam to curse them, but each time heard only blessing.', ar: 'خاف من إسرائيل النازلين في عربات موآب، فاستأجر بلعام ليلعنهم، فلم يسمع في كل مرة إلا بركة.' },
    refs: 'Numbers 22–24; Joshua 24:9; Micah 6:5; Revelation 2:14',
  },
  // ── The conquest ──
  {
    key: 'Joshua@Exo.17.9-Heb', name: { en: 'Joshua', ar: 'يشوع' }, born: -1500, died: -1390, approx: true, basis: 'text',
    office: { from: -1406, to: -1390, title: { en: 'Leader of Israel after Moses', ar: 'قائد إسرائيل بعد موسى' } },
    dating: { en: 'He lived 110 years (Joshua 24:29). The entry into Canaan follows the Bible’s numbers (1406 BC); his birth and death are approximate. Many scholars place the Exodus and conquest later, in the 13th century BC.', ar: 'عاش مئة وعشر سنين (يشوع ٢٤: ٢٩). ودخول كنعان بحسب أرقام الكتاب (١٤٠٦ ق.م.)؛ أما ميلاده وموته فتقريبيان. ويضع كثير من الدارسين الخروج والدخول في وقت لاحق، في القرن الثالث عشر قبل الميلاد.' },
    role: { en: 'Successor of Moses, leader of the conquest', ar: 'خليفة موسى وقائد دخول الأرض' },
    summary: {
      en: 'Moses’ servant from his youth and one of the two faithful spies, he led Israel across the Jordan, took Jericho and divided the land among the tribes. His name is the Hebrew form of the name Jesus.',
      ar: 'خادم موسى منذ صباه وأحد الجاسوسين الأمينين، عبر بإسرائيل الأردن وأخذ أريحا وقسم الأرض بين الأسباط. واسمه هو الصيغة العبرية لاسم يسوع.',
    },
    refs: 'Exodus 17:8–14; Numbers 13–14; Numbers 27:18–23; Joshua 1–24; Hebrews 4:8',
    questions: ['exodus-known-and-disputed', 'conquest-narratives'],
  },
  {
    key: 'Caleb@Num.13.6-1Ch', name: { en: 'Caleb', ar: 'كالب' }, born: -1484, basis: 'text', dating: EXODUS,
    role: { en: 'Faithful spy of Judah', ar: 'الجاسوس الأمين من سبط يهوذا' },
    summary: { en: 'Forty years old when sent to spy out Canaan, he followed the Lord fully and urged Israel to go up. At 85 he claimed Hebron and drove out the giants there.', ar: 'كان ابن أربعين سنة حين أُرسل ليتجسس كنعان، فاتبع الرب تمامًا وحثّ إسرائيل على الصعود. وفي الخامسة والثمانين طلب حبرون وطرد منها العناقيين.' },
    refs: 'Numbers 13–14; Joshua 14:6–15; Joshua 15:13–19',
  },
  {
    key: 'Rahab@Jos.2.1-Jas', name: { en: 'Rahab', ar: 'راحاب' }, born: -1430, approx: true, basis: 'text',
    dating: UNDATED('the fall of Jericho (1406 BC by the Bible’s numbers)', 'سقوط أريحا (١٤٠٦ ق.م. بحسب أرقام الكتاب)'),
    role: { en: 'Woman of Jericho who sheltered the spies', ar: 'امرأة أريحا التي خبّأت الجاسوسين' },
    summary: { en: 'She hid Israel’s spies, confessing that the Lord is God in heaven and on earth, and was spared with her household when Jericho fell. She is named in the genealogy of Christ and praised for her faith.', ar: 'خبّأت جاسوسي إسرائيل معترفة بأن الرب هو الإله في السماء وعلى الأرض، فنجت هي وبيت أبيها عند سقوط أريحا. ويُذكر اسمها في نسب المسيح وتُمدح لإيمانها.' },
    refs: 'Joshua 2; Joshua 6:22–25; Matthew 1:5; Hebrews 11:31; James 2:25',
    questions: ['conquest-narratives'],
  },
  {
    key: 'Achan@Jos.7.1-1Ch', name: { en: 'Achan', ar: 'عخان' }, died: -1406, basis: 'text', dating: EXODUS,
    role: { en: 'Israelite who took the devoted things', ar: 'الإسرائيلي الذي أخذ من الحرام' },
    summary: { en: 'At Jericho he secretly took silver, gold and a garment from what was devoted to God, bringing defeat on Israel at Ai; he was found out and put to death in the valley of Achor.', ar: 'أخذ سرًّا في أريحا فضة وذهبًا ورداءً من الحرام المخصص لله، فجلب الهزيمة على إسرائيل في عاي؛ وانكشف أمره فقُتل في وادي عخور.' },
    refs: 'Joshua 7; Joshua 22:20; 1 Chronicles 2:7',
  },
  // ── The judges ──
  {
    key: 'Othniel@Jos.15.17-1Ch', name: { en: 'Othniel', ar: 'عثنيئيل' }, office: { from: -1374, to: -1334, title: JUDGE }, died: -1334, approx: true, basis: 'scholarly', dating: JUDGES,
    role: { en: 'First judge of Israel', ar: 'أول قضاة إسرائيل' },
    summary: { en: 'Caleb’s nephew, who took Debir and married Achsah, he was the first judge: the Spirit of the Lord came on him, he delivered Israel from Cushan-rishathaim, and the land had rest forty years.', ar: 'ابن أخي كالب، أخذ قرية سفر وتزوج عكسة، وكان أول القضاة: حلّ عليه روح الرب فخلّص إسرائيل من كوشان رشعتايم، واستراحت الأرض أربعين سنة.' },
    refs: 'Joshua 15:16–19; Judges 1:12–15; Judges 3:7–11',
  },
  {
    key: 'Eglon@Jdg.3.12-', name: { en: 'Eglon', ar: 'عجلون' }, office: { from: -1334, to: -1316, title: { en: 'King of Moab, oppressor of Israel', ar: 'ملك موآب، مضايق إسرائيل' } }, died: -1316, approx: true, basis: 'scholarly', dating: JUDGES,
    role: { en: 'King of Moab', ar: 'ملك موآب' },
    summary: { en: 'Allied with Ammon and Amalek, he took Jericho and ruled Israel eighteen years until Ehud killed him in his upper room.', ar: 'تحالف مع عمون وعماليق وأخذ مدينة النخل، واستعبد إسرائيل ثماني عشرة سنة حتى قتله إهود في عليته.' },
    refs: 'Judges 3:12–25',
  },
  {
    key: 'Ehud@Jdg.3.15-1Ch', name: { en: 'Ehud', ar: 'إهود' }, office: { from: -1316, to: -1236, title: JUDGE }, approx: true, basis: 'scholarly',
    dating: { en: 'Approximate: the span is the eighty years of rest after his victory (Judges 3:30), which need not all be his own lifetime. The judges’ years overlap and are uncertain.', ar: 'تقريبي: المدة هي الثمانون سنة من الراحة بعد انتصاره (القضاة ٣: ٣٠)، وليست بالضرورة كلها في حياته. وسنو القضاة متداخلة وغير مؤكدة.' },
    role: { en: 'Left-handed judge from Benjamin', ar: 'القاضي الأعسر من بنيامين' },
    summary: { en: 'A left-handed Benjamite, he killed Eglon king of Moab and rallied Israel to throw off Moab’s rule; the land then had rest eighty years.', ar: 'بنياميني أعسر، قتل عجلون ملك موآب وجمع إسرائيل فخلعوا نير موآب، فاستراحت الأرض ثمانين سنة.' },
    refs: 'Judges 3:12–30',
  },
  {
    key: 'Shamgar@Jdg.3.31-', name: { en: 'Shamgar', ar: 'شمجر' }, office: { from: -1250, to: -1240, title: JUDGE }, approx: true, basis: 'scholarly', dating: JUDGES,
    role: { en: 'Judge who fought the Philistines', ar: 'قاضٍ حارب الفلسطينيين' },
    summary: { en: 'Son of Anath, he struck down six hundred Philistines with an ox goad and saved Israel; the Song of Deborah remembers his days.', ar: 'ابن عناة، ضرب ست مئة رجل من الفلسطينيين بمنساس البقر وخلّص إسرائيل؛ وتذكر ترنيمة دبورة أيامه.' },
    refs: 'Judges 3:31; Judges 5:6',
  },
  {
    key: 'Jabin@Jdg.4.2-Psa', name: { en: 'Jabin', ar: 'يابين' }, office: { from: -1257, to: -1237, title: { en: 'King of Canaan at Hazor', ar: 'ملك كنعان في حاصور' } }, approx: true, basis: 'scholarly', dating: JUDGES,
    role: { en: 'Canaanite king who oppressed Israel', ar: 'ملك كنعاني ضايق إسرائيل' },
    summary: { en: 'With nine hundred iron chariots under his commander Sisera, he oppressed Israel twenty years, until the victory of Deborah and Barak broke his power.', ar: 'ضايق إسرائيل عشرين سنة بتسع مئة مركبة حديد تحت قيادة سيسرا، حتى كسر انتصار دبورة وباراق قوته.' },
    refs: 'Judges 4; Psalms 83:9',
  },
  {
    key: 'Deborah@Jdg.4.4-', name: { en: 'Deborah', ar: 'دبورة' }, office: { from: -1240, to: -1200, title: { en: 'Prophetess and judge of Israel', ar: 'نبية وقاضية لإسرائيل' } }, approx: true, basis: 'scholarly', dating: JUDGES,
    role: { en: 'Prophetess and judge', ar: 'نبية وقاضية' },
    summary: { en: 'She judged Israel under the palm tree between Ramah and Bethel, summoned Barak to battle against Sisera in the Lord’s name, and sang the great song of victory; the land then had rest forty years.', ar: 'كانت تقضي لإسرائيل تحت نخلتها بين الرامة وبيت إيل، ودعت باراق باسم الرب إلى الحرب على سيسرا، ورنمت نشيد النصر العظيم؛ ثم استراحت الأرض أربعين سنة.' },
    refs: 'Judges 4–5',
  },
  {
    key: 'Barak@Jdg.4.6-Heb', name: { en: 'Barak', ar: 'باراق' }, office: { from: -1237, to: -1237, title: { en: 'Commander of Israel against Sisera', ar: 'قائد إسرائيل في الحرب على سيسرا' } }, approx: true, basis: 'scholarly', dating: JUDGES,
    role: { en: 'Commander who defeated Sisera', ar: 'القائد الذي هزم سيسرا' },
    summary: { en: 'Of Kedesh in Naphtali, he went up Mount Tabor at Deborah’s word and routed Sisera’s chariots at the river Kishon; Hebrews names him among the heroes of faith.', ar: 'من قادش نفتالي، صعد إلى جبل تابور بكلمة دبورة وكسر مركبات سيسرا عند نهر قيشون؛ وتذكره الرسالة إلى العبرانيين بين أبطال الإيمان.' },
    refs: 'Judges 4–5; Hebrews 11:32',
  },
  {
    key: 'Sisera@Jdg.4.2-Psa', name: { en: 'Sisera', ar: 'سيسرا' }, died: -1237, approx: true, basis: 'scholarly', dating: JUDGES,
    role: { en: 'Commander of Jabin’s army', ar: 'رئيس جيش يابين' },
    summary: { en: 'Defeated at the Kishon, he fled on foot to the tent of Heber the Kenite, where Jael killed him as he slept.', ar: 'انهزم عند قيشون فهرب على رجليه إلى خيمة حابر القيني، فقتلته ياعيل وهو نائم.' },
    refs: 'Judges 4–5; 1 Samuel 12:9; Psalms 83:9',
  },
  {
    key: 'Jael@Jdg.4.17-', name: { en: 'Jael', ar: 'ياعيل' }, born: -1265, approx: true, basis: 'scholarly',
    dating: UNDATED('the battle against Sisera (c. 1237 BC, itself approximate)', 'الحرب على سيسرا (نحو ١٢٣٧ ق.م.، وهو تاريخ تقريبي)'),
    role: { en: 'Kenite woman who killed Sisera', ar: 'المرأة القينية التي قتلت سيسرا' },
    summary: { en: 'Wife of Heber the Kenite, she killed Sisera in her tent, fulfilling Deborah’s word that the Lord would deliver him into the hand of a woman; the Song of Deborah calls her “blessed above women in the tent.”', ar: 'امرأة حابر القيني، قتلت سيسرا في خيمتها، فتمت كلمة دبورة أن الرب يبيعه بيد امرأة؛ وتدعوها ترنيمة دبورة «تُبارك على النساء في الخيام».' },
    refs: 'Judges 4:17–22; Judges 5:24–27',
  },
  {
    key: 'Gideon@Jdg.6.11-Heb', name: { en: 'Gideon', ar: 'جدعون' }, office: { from: -1191, to: -1151, title: JUDGE }, died: -1151, approx: true, basis: 'scholarly', dating: JUDGES,
    role: { en: 'Judge who defeated Midian', ar: 'القاضي الذي هزم مديان' },
    summary: { en: 'Called by the Angel of the Lord while threshing in hiding, he tore down Baal’s altar, sought signs with the fleece, and with three hundred men routed Midian. He refused to be king, saying, “The Lord shall rule over you.”', ar: 'دعاه ملاك الرب وهو يخبط الحنطة مختبئًا، فهدم مذبح البعل، وطلب علامة بجزة الصوف، وبثلاث مئة رجل هزم مديان. ورفض أن يملك قائلًا: «الرب يتسلط عليكم».' },
    refs: 'Judges 6–8; Hebrews 11:32',
  },
  {
    key: 'Abimelech@Jdg.8.31-2Sa', name: { en: 'Abimelech', ar: 'أبيمالك' }, office: { from: -1151, to: -1148, title: { en: 'Self-made king of Shechem', ar: 'ملك على شكيم نصّب نفسه' } }, died: -1148, approx: true, basis: 'scholarly', dating: JUDGES,
    role: { en: 'Son of Gideon, king of Shechem', ar: 'ابن جدعون وملك شكيم' },
    summary: { en: 'He killed seventy of his brothers to rule Shechem for three years; Jotham’s parable foretold his ruin, and he died when a woman threw a millstone on his head at Thebez.', ar: 'قتل سبعين من إخوته ليملك على شكيم ثلاث سنين؛ وتنبأ مثل يوثام بخرابه، ومات حين طرحت امرأة قطعة رحى على رأسه في تاباص.' },
    refs: 'Judges 8:31; Judges 9; 2 Samuel 11:21',
  },
  {
    key: 'Tola@Jdg.10.1', name: { en: 'Tola', ar: 'تولع' }, office: { from: -1148, to: -1125, title: JUDGE }, died: -1125, approx: true, basis: 'scholarly', dating: JUDGES,
    role: { en: 'Judge from Issachar', ar: 'قاضٍ من سبط يساكر' },
    summary: { en: 'After Abimelech he arose to save Israel and judged twenty-three years from Shamir in the hill country of Ephraim.', ar: 'قام بعد أبيمالك لتخليص إسرائيل، وقضى ثلاثًا وعشرين سنة وهو ساكن في شامير في جبل أفرايم.' },
    refs: 'Judges 10:1–2',
  },
  {
    key: 'Jair@Jdg.10.3-', name: { en: 'Jair', ar: 'يائير' }, office: { from: -1126, to: -1104, title: JUDGE }, died: -1104, approx: true, basis: 'scholarly', dating: JUDGES,
    role: { en: 'Judge from Gilead', ar: 'قاضٍ من جلعاد' },
    summary: { en: 'A Gileadite who judged Israel twenty-two years; his thirty sons rode thirty donkeys and held thirty towns.', ar: 'جلعادي قضى لإسرائيل اثنتين وعشرين سنة؛ وكان له ثلاثون ولدًا يركبون ثلاثين جحشًا ولهم ثلاثون مدينة.' },
    refs: 'Judges 10:3–5',
  },
  {
    key: 'Jephthah@Jdg.11.1-Heb', name: { en: 'Jephthah', ar: 'يفتاح' }, office: { from: -1106, to: -1100, title: JUDGE }, died: -1100, approx: true, basis: 'scholarly',
    dating: { en: 'Approximate: he told the Ammonites Israel had held the land for 300 years (Judges 11:26), which fits about 1106 BC by the Bible’s numbers. The judges’ years overlap and are uncertain.', ar: 'تقريبي: قال لبني عمون إن إسرائيل سكن الأرض ثلاث مئة سنة (القضاة ١١: ٢٦)، وهو ما يوافق نحو ١١٠٦ ق.م. بحسب أرقام الكتاب. وسنو القضاة متداخلة وغير مؤكدة.' },
    role: { en: 'Judge who delivered Israel from Ammon', ar: 'القاضي الذي خلّص إسرائيل من عمون' },
    summary: { en: 'Driven out by his brothers, he was called back by the elders of Gilead and defeated the Ammonites, but his rash vow cost him his only daughter. Hebrews names him among the heroes of faith.', ar: 'طرده إخوته ثم استدعاه شيوخ جلعاد فهزم بني عمون، لكن نذره المتسرع كلّفه ابنته الوحيدة. وتذكره الرسالة إلى العبرانيين بين أبطال الإيمان.' },
    refs: 'Judges 10:6–12:7; 1 Samuel 12:11; Hebrews 11:32',
  },
  {
    key: 'Ibzan@Jdg.12.8-', name: { en: 'Ibzan', ar: 'إبصان' }, office: { from: -1100, to: -1093, title: JUDGE }, died: -1093, approx: true, basis: 'scholarly', dating: JUDGES,
    role: { en: 'Judge from Bethlehem', ar: 'قاضٍ من بيت لحم' },
    summary: { en: 'He judged Israel seven years after Jephthah; he had thirty sons and thirty daughters and was buried at Bethlehem.', ar: 'قضى لإسرائيل سبع سنين بعد يفتاح، وكان له ثلاثون ابنًا وثلاثون ابنة، ودُفن في بيت لحم.' },
    refs: 'Judges 12:8–10',
  },
  {
    key: 'Elon@Jdg.12.11-', name: { en: 'Elon', ar: 'إيلون' }, office: { from: -1093, to: -1083, title: JUDGE }, died: -1083, approx: true, basis: 'scholarly', dating: JUDGES,
    role: { en: 'Judge from Zebulun', ar: 'قاضٍ من سبط زبولون' },
    summary: { en: 'A Zebulunite who judged Israel ten years and was buried at Aijalon in the land of Zebulun.', ar: 'زبولوني قضى لإسرائيل عشر سنين، ودُفن في أيلون في أرض زبولون.' },
    refs: 'Judges 12:11–12',
  },
  {
    key: 'Abdon@Jdg.12.13-', name: { en: 'Abdon', ar: 'عبدون' }, office: { from: -1083, to: -1075, title: JUDGE }, died: -1075, approx: true, basis: 'scholarly', dating: JUDGES,
    role: { en: 'Judge from Ephraim', ar: 'قاضٍ من سبط أفرايم' },
    summary: { en: 'Son of Hillel the Pirathonite, he judged Israel eight years; his forty sons and thirty grandsons rode seventy donkeys.', ar: 'ابن هليل الفرعتوني، قضى لإسرائيل ثماني سنين، وكان له أربعون ابنًا وثلاثون حفيدًا يركبون سبعين جحشًا.' },
    refs: 'Judges 12:13–15',
  },
  {
    key: 'Manoah@Jdg.13.2-', name: { en: 'Manoah', ar: 'منوح' }, born: -1135, approx: true, basis: 'scholarly',
    dating: UNDATED('the birth of his son Samson (c. 1095 BC, itself approximate)', 'ميلاد ابنه شمشون (نحو ١٠٩٥ ق.م.، وهو تاريخ تقريبي)'),
    role: { en: 'Father of Samson', ar: 'أبو شمشون' },
    summary: { en: 'A Danite of Zorah to whose barren wife the Angel of the Lord announced a son to be a Nazirite from the womb; when he asked the angel’s name he was told it is “Wonderful.”', ar: 'داني من صرعة، بشّر ملاك الرب امرأته العاقر بابن يكون نذيرًا لله من البطن؛ ولما سأل الملاك عن اسمه قال: «هو عجيب».' },
    refs: 'Judges 13; Judges 14:2–10; Judges 16:31',
  },
  {
    key: 'Samson@Jdg.13.24-Heb', name: { en: 'Samson', ar: 'شمشون' }, born: -1095, died: -1055, office: { from: -1075, to: -1055, title: JUDGE }, approx: true, basis: 'scholarly', dating: JUDGES,
    role: { en: 'Nazirite judge of great strength', ar: 'القاضي النذير ذو القوة العظيمة' },
    summary: { en: 'A Nazirite from birth, he fought the Philistines in the strength the Spirit of the Lord gave him and judged Israel twenty years. Betrayed by Delilah and blinded, he called on God and in his death pulled down the temple of Dagon.', ar: 'كان نذيرًا من بطن أمه، وحارب الفلسطينيين بالقوة التي أعطاه إياها روح الرب، وقضى لإسرائيل عشرين سنة. ولما أسلمته دليلة وقُلعت عيناه دعا الله، فهدم بموته هيكل داجون.' },
    refs: 'Judges 13–16; Hebrews 11:32',
  },
  {
    key: 'Delilah@Jdg.16.4-', name: { en: 'Delilah', ar: 'دليلة' }, born: -1080, approx: true, basis: 'scholarly',
    dating: UNDATED('the end of Samson’s life (c. 1055 BC, itself approximate)', 'نهاية حياة شمشون (نحو ١٠٥٥ ق.م.، وهو تاريخ تقريبي)'),
    role: { en: 'Woman who betrayed Samson', ar: 'المرأة التي أسلمت شمشون' },
    summary: { en: 'A woman of the valley of Sorek, she was bribed by the lords of the Philistines to learn the secret of Samson’s strength and handed him over to them.', ar: 'امرأة من وادي سورق، رشاها أقطاب الفلسطينيين لتعرف سر قوة شمشون، فأسلمته إليهم.' },
    refs: 'Judges 16:4–21',
  },
  {
    key: 'Micah@Jdg.17.1-', name: { en: 'Micah of Ephraim', ar: 'ميخا (من جبل أفرايم)' }, born: -1420, approx: true, basis: 'scholarly',
    dating: { en: 'Approximate: the Levite who served him was Jonathan, grandson of Moses (Judges 18:30), which places the story early in the time of the judges. The judges’ years are uncertain.', ar: 'تقريبي: كان اللاوي الذي خدمه يوناثان حفيد موسى (القضاة ١٨: ٣٠)، مما يضع القصة في أوائل زمن القضاة. وسنو القضاة غير مؤكدة.' },
    role: { en: 'Ephraimite who set up a shrine with an idol', ar: 'أفرايمي أقام بيت آلهة وتمثالًا' },
    summary: { en: 'He made a carved image and hired a Levite as his priest, until the Danites carried both away to their new city. His story shows the times when “every man did what was right in his own eyes.”', ar: 'صنع تمثالًا منحوتًا واستأجر لاويًا كاهنًا له، حتى أخذهما بنو دان إلى مدينتهم الجديدة. وتُظهر قصته الأيام التي «كان كل واحد يعمل ما يحسن في عينيه».' },
    refs: 'Judges 17–18',
  },
  // ── Ruth ──
  {
    key: 'Naomi@Rut.1.2-', name: { en: 'Naomi', ar: 'نعمي' }, born: -1210, approx: true, basis: 'scholarly', dating: RUTH,
    role: { en: 'Mother-in-law of Ruth', ar: 'حماة راعوث' },
    summary: { en: 'Widowed and bereaved of her sons in Moab, she returned to Bethlehem with Ruth, and her bitterness was turned to joy when Ruth’s son Obed was laid in her lap.', ar: 'ترمّلت وفقدت ابنيها في موآب، فرجعت إلى بيت لحم مع راعوث، وتحولت مرارتها إلى فرح حين وُضع عوبيد ابن راعوث في حضنها.' },
    refs: 'Ruth 1–4',
  },
  {
    key: 'Boaz@Rut.2.1-Luk', name: { en: 'Boaz', ar: 'بوعز' }, born: -1190, approx: true, basis: 'scholarly', dating: RUTH,
    role: { en: 'Kinsman-redeemer, husband of Ruth', ar: 'الولي الفادي وزوج راعوث' },
    summary: { en: 'A worthy man of Bethlehem who showed kindness to Ruth in his fields and redeemed the inheritance of Elimelech by marrying her; he is an ancestor of David and of Christ, and a figure of the Redeemer.', ar: 'رجل جبار بأس من بيت لحم أحسن إلى راعوث في حقله، وفكّ ميراث أليمالك بزواجه منها؛ وهو جد داود والمسيح، ورمز للفادي.' },
    refs: 'Ruth 2–4; Matthew 1:5; Luke 3:32',
  },
  {
    key: 'Ruth@Rut.1.4-Mat', name: { en: 'Ruth', ar: 'راعوث' }, born: -1165, approx: true, basis: 'scholarly', dating: RUTH,
    role: { en: 'Moabite ancestress of David', ar: 'الموآبية جدة داود' },
    summary: { en: 'A Moabite widow who would not leave Naomi, saying, “Your people shall be my people, and your God my God.” She married Boaz and became the great-grandmother of David and an ancestress of Christ.', ar: 'أرملة موآبية رفضت أن تترك نعمي قائلة: «شعبك شعبي وإلهك إلهي». تزوجت بوعز فصارت جدة داود وإحدى جدات المسيح.' },
    refs: 'Ruth 1–4; Matthew 1:5',
  },
  {
    key: 'Obed@Rut.4.17-Luk', name: { en: 'Obed', ar: 'عوبيد' }, born: -1140, approx: true, basis: 'scholarly', dating: RUTH,
    role: { en: 'Son of Boaz and Ruth, grandfather of David', ar: 'ابن بوعز وراعوث وجد داود' },
    summary: { en: 'The son born to Boaz and Ruth, whom the women of Bethlehem called “a son born to Naomi”; he was the father of Jesse and grandfather of David.', ar: 'الابن الذي ولدته راعوث لبوعز، ودعته نساء بيت لحم «ابنًا وُلد لنعمي»؛ وهو أبو يسى وجد داود.' },
    refs: 'Ruth 4:13–22; Matthew 1:5; Luke 3:32',
  },
  {
    key: 'Jesse@Rut.4.17-Rom', name: { en: 'Jesse', ar: 'يسى' }, born: -1090, approx: true, basis: 'scholarly',
    dating: { en: 'Approximate: he was already old in the days of Saul (1 Samuel 17:12), and David, born about 1040 BC, was the youngest of his eight sons.', ar: 'تقريبي: كان قد شاخ في أيام شاول (صموئيل الأول ١٧: ١٢)، وكان داود المولود نحو ١٠٤٠ ق.م. أصغر أبنائه الثمانية.' },
    role: { en: 'Father of King David', ar: 'أبو داود الملك' },
    summary: { en: 'A Bethlehemite, grandson of Ruth and Boaz, at whose house Samuel anointed David. Isaiah foretold the shoot from the stem of Jesse, fulfilled in Christ.', ar: 'بيتلحمي، حفيد راعوث وبوعز، مسح صموئيل داود في بيته. وتنبأ إشعياء بقضيب يخرج من جذع يسى، وقد تمّ في المسيح.' },
    refs: 'Ruth 4:17–22; 1 Samuel 16–17; Isaiah 11:1–10; Romans 15:12',
  },
  // ── Eli and Samuel ──
  {
    key: 'Eli@1Sa.1.3-1Ki', name: { en: 'Eli', ar: 'عالي' }, born: -1193, died: -1095, office: { from: -1135, to: -1095, title: { en: 'High priest and judge at Shiloh', ar: 'رئيس كهنة وقاضٍ في شيلوه' } }, approx: true, basis: 'scholarly',
    dating: { en: 'Approximate: he judged Israel forty years and died at 98 when the ark was taken (1 Samuel 4:15–18); the date of that battle is uncertain.', ar: 'تقريبي: قضى لإسرائيل أربعين سنة ومات ابن ثمان وتسعين سنة حين أُخذ التابوت (صموئيل الأول ٤: ١٥–١٨)؛ وتاريخ تلك المعركة غير مؤكد.' },
    role: { en: 'High priest and judge at Shiloh', ar: 'رئيس الكهنة والقاضي في شيلوه' },
    summary: { en: 'He blessed Hannah’s prayer and raised the boy Samuel in the house of the Lord, but did not restrain his wicked sons. When he heard that the ark of God was taken he fell and died.', ar: 'بارك صلاة حنة وربّى الصبي صموئيل في بيت الرب، لكنه لم يردع ابنيه الشريرين. ولما سمع أن تابوت الله قد أُخذ سقط ومات.' },
    refs: '1 Samuel 1–4; 1 Kings 2:27',
  },
  {
    key: 'Hophni@1Sa.1.3-', name: { en: 'Hophni', ar: 'حفني' }, died: -1095, approx: true, basis: 'scholarly',
    dating: { en: 'Died with his brother at the battle where the ark was taken; the year is uncertain.', ar: 'مات مع أخيه في المعركة التي أُخذ فيها التابوت؛ والسنة غير مؤكدة.' },
    role: { en: 'Corrupt priest, son of Eli', ar: 'كاهن فاسد، ابن عالي' },
    summary: { en: 'He and his brother despised the offerings of the Lord and were warned of judgement; both died on one day when the Philistines captured the ark.', ar: 'استهان هو وأخوه بتقدمات الرب فأُنذرا بالدينونة، وماتا كلاهما في يوم واحد حين أخذ الفلسطينيون التابوت.' },
    refs: '1 Samuel 1:3; 1 Samuel 2:12–36; 1 Samuel 4:1–11',
  },
  {
    key: 'Phinehas@1Sa.1.3-', name: { en: 'Phinehas son of Eli', ar: 'فينحاس بن عالي' }, died: -1095, approx: true, basis: 'scholarly',
    dating: { en: 'Died with his brother at the battle where the ark was taken; the year is uncertain.', ar: 'مات مع أخيه في المعركة التي أُخذ فيها التابوت؛ والسنة غير مؤكدة.' },
    role: { en: 'Corrupt priest, son of Eli', ar: 'كاهن فاسد، ابن عالي' },
    summary: { en: 'With Hophni he abused the priesthood at Shiloh and died when the ark was taken; his wife, dying in childbirth, named her son Ichabod, “the glory has departed.”', ar: 'أساء مع حفني إلى الكهنوت في شيلوه ومات حين أُخذ التابوت؛ وسمّت امرأته وهي تموت في ولادتها ابنها إيخابود قائلة: «زال المجد».' },
    refs: '1 Samuel 1:3; 1 Samuel 2:12–36; 1 Samuel 4:1–22',
  },
  {
    key: 'Elkanah@1Sa.1.1-1Ch', name: { en: 'Elkanah', ar: 'ألقانة' }, born: -1140, approx: true, basis: 'scholarly',
    dating: UNDATED('the birth of his son Samuel (c. 1110 BC, itself approximate)', 'ميلاد ابنه صموئيل (نحو ١١١٠ ق.م.، وهو تاريخ تقريبي)'),
    role: { en: 'Father of Samuel', ar: 'أبو صموئيل' },
    summary: { en: 'A Levite of Ramathaim-zophim in the hill country of Ephraim who went up yearly to worship at Shiloh and loved his barren wife Hannah.', ar: 'لاوي من رامتايم صوفيم في جبل أفرايم، كان يصعد كل سنة ليسجد في شيلوه، وكان يحب امرأته العاقر حنة.' },
    refs: '1 Samuel 1–2; 1 Chronicles 6:27–28',
  },
  {
    key: 'Hannah@1Sa.1.2-', name: { en: 'Hannah', ar: 'حنة' }, born: -1135, approx: true, basis: 'scholarly',
    dating: UNDATED('the birth of her son Samuel (c. 1110 BC, itself approximate)', 'ميلاد ابنها صموئيل (نحو ١١١٠ ق.م.، وهو تاريخ تقريبي)'),
    role: { en: 'Mother of Samuel', ar: 'أم صموئيل' },
    summary: { en: 'Barren and grieved, she poured out her soul before the Lord at Shiloh and vowed her son to Him. She gave Samuel to the Lord’s service and sang a song of praise that the Virgin Mary’s Magnificat echoes.', ar: 'كانت عاقرًا ومُرّة النفس، فسكبت نفسها أمام الرب في شيلوه ونذرت له ابنها. وأعطت صموئيل لخدمة الرب، ورنّمت تسبحة يتردد صداها في تسبحة السيدة العذراء مريم.' },
    refs: '1 Samuel 1:1–2:21; Luke 1:46–55',
  },
  {
    key: 'Samuel@1Sa.1.20-Heb', name: { en: 'Samuel', ar: 'صموئيل' }, born: -1110, died: -1015, office: { from: -1095, to: -1015, title: { en: 'Prophet and judge of Israel', ar: 'نبي وقاضٍ لإسرائيل' } }, approx: true, basis: 'scholarly',
    dating: { en: 'Approximate: a boy at Shiloh before Eli’s death, he judged Israel all his life (1 Samuel 7:15) and died late in Saul’s reign (1 Samuel 25:1), about 1015 BC.', ar: 'تقريبي: كان صبيًا في شيلوه قبل موت عالي، وقضى لإسرائيل كل أيام حياته (صموئيل الأول ٧: ١٥) ومات في أواخر ملك شاول (صموئيل الأول ٢٥: ١)، نحو ١٠١٥ ق.م.' },
    role: { en: 'Prophet, last of the judges', ar: 'النبي وآخر القضاة' },
    summary: { en: 'Given to God by his mother Hannah, he heard the Lord’s call as a boy and became prophet and judge of all Israel. He anointed Saul as the first king and later David; Scripture counts him the first in the line of the prophets.', ar: 'قدّمته أمه حنة لله، فسمع دعوة الرب وهو صبي وصار نبيًا وقاضيًا لكل إسرائيل. مسح شاول أول ملك ثم مسح داود؛ ويعدّه الكتاب أول سلسلة الأنبياء.' },
    refs: '1 Samuel 1–16; 1 Samuel 25:1; 1 Samuel 28; Acts 3:24; Acts 13:20; Hebrews 11:32',
  },
];
