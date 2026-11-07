/**
 * Arabic for the parts of the source catalogue and of the evidence lists that are written in English only:
 * notes on a source's standpoint, composition dates, rights lines and locators. Titles and author names stay
 * as the source gives them (bibliographic data). Bible references are rendered with the Arabic book names.
 * A test checks that every such string has its Arabic here, so an Arabic page never falls back to English.
 */
import { BOOKS } from '@orthodoxia/bible';
import type { Locale } from '../../i18n/index.ts';

const AR: Readonly<Record<string, string>> = {
  // Standpoint notes
  'A Roman senator and historian writing outside the Christian community.': 'سيناتور ومؤرخ روماني كتب من خارج الجماعة المسيحية.',
  'A Jewish historian; the passage is a short mention of James, “the brother of Jesus who was called Christ”.':
    'مؤرخ يهودي؛ والفقرة ذكر قصير ليعقوب «أخي يسوع الذي يُدعى المسيح».',
  'The Testimonium Flavianum, whose wording shows signs of Christian expansion.': 'شهادة يوسيفوس («التستيمونيوم»)، وتظهر في صياغتها علامات إضافات مسيحية.',
  'A satirist; the text mocks Christians and Peregrinus.': 'كاتب ساخر؛ والنص يسخر من المسيحيين ومن بيريغرينوس.',
  'The author’s religious affiliation is not established in the sources consulted.': 'الانتماء الديني للمؤلف غير ثابت في المصادر التي رُجع إليها.',
  'The author describes himself as an agnostic.': 'يصف المؤلف نفسه بأنه لاأدري.',
  'The author was a Roman Catholic priest; the method is historical and does not assume faith.':
    'كان المؤلف كاهنًا كاثوليكيًا؛ والمنهج تاريخي لا يفترض الإيمان.',
  'A Christian New Testament scholar; the argument is made on historical grounds and is debated.':
    'باحث مسيحي في العهد الجديد؛ والحجة مبنية على أسس تاريخية ومحل نقاش.',
  'The author is an Anglican bishop and New Testament scholar.': 'المؤلف أسقف أنجليكاني وباحث في العهد الجديد.',
  'A historian of early Christianity; his own stance is not used as evidence here.': 'مؤرخ للمسيحية المبكرة؛ ولا يُستخدم موقفه الشخصي دليلًا هنا.',
  'Joint authors with differing personal stances; the book is a standard textbook.': 'مؤلفان بمواقف شخصية مختلفة؛ والكتاب مرجع دراسي معتمد.',
  'A Jewish scholar of the Hebrew Bible and the Dead Sea Scrolls.': 'باحث يهودي في الكتاب المقدس العبري ومخطوطات البحر الميت.',
  'A philosopher and Eastern Orthodox Christian.': 'فيلسوف مسيحي أرثوذكسي شرقي.',
  'The entry’s author’s own position has to stay identifiable when it is cited.': 'يجب أن يبقى موقف كاتب المدخل واضحًا عند الاستشهاد به.',
  'An explicitly Christian evolutionary-creation organisation.': 'مؤسسة مسيحية صريحة تقول بالخلق عبر التطور.',
  'Coptic Orthodox patriarch; a doctrinal teaching source.': 'بطريرك قبطي أرثوذكسي؛ مصدر للتعليم العقيدي.',
  'Coptic Orthodox priest and apologist.': 'كاهن قبطي أرثوذكسي ومدافع عن الإيمان.',
  'A collection of ancient texts of differing origins. Used here as ancient documents, not as an assumed authority.':
    'مجموعة نصوص قديمة متعددة الأصول. تُستخدم هنا وثائقَ قديمة لا سلطةً مفترضة.',

  // Composition dates
  'c. AD 115–120 (the Annals were written late in Tacitus’ life)': 'نحو 115–120 م (كُتبت الحوليات في أواخر حياة تاكيتوس)',
  'c. AD 115–120': 'نحو 115–120 م',
  'c. AD 93–94': 'نحو 93–94 م',
  'c. AD 93–94 (the surviving wording may include later Christian additions)': 'نحو 93–94 م (قد تتضمن الصياغة الباقية إضافات مسيحية لاحقة)',
  'c. AD 110–113 (Pliny as governor of Bithynia-Pontus)': 'نحو 110–113 م (حين كان بليني حاكمًا لبيثينية وبنطس)',
  'c. AD 165–175': 'نحو 165–175 م',
  'fourth century (palaeographic dating)': 'القرن الرابع (تأريخ بحسب الخط)',
  'fourth century': 'القرن الرابع',
  'roughly third century BC to first century AD (varies by scroll)': 'بين القرن الثالث ق.م. والقرن الأول م تقريبًا (يختلف من مخطوط لآخر)',
  'carved c. 700–681 BC, depicting the Assyrian siege of 701 BC': 'نُحتت نحو 700–681 ق.م.، وتصوّر الحصار الأشوري سنة 701 ق.م.',
  'c. AD 150–155': 'نحو 150–155 م',
  'c. AD 248': 'نحو 248 م',
  'early fourth century (exact date debated)': 'أوائل القرن الرابع (التاريخ الدقيق محل خلاف)',
  'fifth century': 'القرن الخامس',
  'early second century (traditionally c. AD 107–110)': 'أوائل القرن الثاني (تقليديًا نحو 107–110 م)',

  // Rights
  'Ancient text; the hosted edition or translation keeps its own terms. The site links to it and quotes nothing.':
    'نص قديم؛ وللطبعة أو الترجمة المستضافة شروطها الخاصة. يربط الموقع بها ولا يقتبس منها شيئًا.',
  'Copyrighted work: the site shows bibliographic data, original notes and a link only.':
    'عمل محمي بحقوق النشر: يعرض الموقع البيانات الببليوغرافية وملاحظاته الخاصة ورابطًا فقط.',
  'Reference or institutional page: the site links to it and summarises in its own words.':
    'صفحة مرجعية أو مؤسسية: يربط الموقع بها ويلخّصها بكلماته الخاصة.',
  'Images and transcription carry the project’s terms; reuse is not assumed.': 'الصور والنسخ خاضعة لشروط المشروع؛ ولا تُفترض إعادة الاستخدام.',
  'Database and images keep the holding institutions’ terms.': 'قاعدة البيانات والصور خاضعة لشروط المؤسسات المالكة.',
  'Images keep the museum’s terms; access restrictions apply.': 'الصور خاضعة لشروط المتحف، وتنطبق قيود على الوصول.',
  'Museum image rights are not assumed; credit and link only.': 'لا تُفترض حقوق صور المتحف؛ ذكر المصدر والرابط فقط.',
  'Hosted by St-Takla.org under its terms; the site links and does not copy.': 'مستضاف على موقع الأنبا تكلا بحسب شروطه؛ يربط الموقع به ولا ينسخ منه.',
  'St-Takla terms; link only.': 'بحسب شروط موقع الأنبا تكلا؛ رابط فقط.',
  'Diocesan site; link only.': 'موقع إيبارشية؛ رابط فقط.',
  'Copyrighted book. Metadata only until an authorised copy is available; no chapters, quotations or page numbers are recorded.':
    'كتاب محمي بحقوق النشر. بيانات وصفية فقط حتى تتوفر نسخة مصرّح بها؛ لا تُسجّل فصول ولا اقتباسات ولا أرقام صفحات.',
  'Media owned by its publisher; link only.': 'المادة ملك لناشرها؛ رابط فقط.',
  'Public-domain translations hosted in this site’s own Bible reader.': 'ترجمات في الملكية العامة مستضافة في قارئ الكتاب المقدس الخاص بالموقع.',

  // Source locators
  'Annals 15.44': 'الحوليات 15: 44',
  'Antiquities 20.200': 'آثار اليهود 20: 200',
  'Antiquities 18.63–64': 'آثار اليهود 18: 63–64',
  'Antiquities 18.63-64': 'آثار اليهود 18: 63–64',
  'Letters 10.96–97': 'الرسائل 10: 96–97',
  'Letters 10.96': 'الرسائل 10: 96',
  'Pliny, Letters 10.96': 'بليني، الرسائل 10: 96',
  'Peregrinus 11–13': 'بيريغرينوس 11–13',
  'Peregrinus 11-13': 'بيريغرينوس 11–13',
  'Volume I': 'المجلد الأول',
  'Object W_1856-0909-14_11': 'القطعة W_1856-0909-14_11',
  'Book I': 'الكتاب الأول',

  // Evidence locators that are not Bible references
  'whole work (thesis as the author states it; chapter not cited)': 'العمل كله (الأطروحة كما يعرضها المؤلف؛ دون ذكر فصل)',
  'whole work (thesis as the authors state it; chapter not cited)': 'العمل كله (الأطروحة كما يعرضها المؤلفون؛ دون ذكر فصل)',
  'entry "Miracles" (testimony, probability and Hume\'s argument)':'مدخل «المعجزات» (الشهادة والاحتمال وحجة هيوم)',
  'Questions on the Holy Bible (St-Takla FAQ), index of Bible questions': 'أسئلة عن الكتاب المقدس (موقع الأنبا تكلا)، فهرس أسئلة الكتاب المقدس',
  'Reader edition notes: King James Version with the Deuterocanon (1769 text) and Arabic Van Dyck (1865)':
    'ملاحظات طبعات القارئ: ترجمة الملك جيمس مع الأسفار القانونية الثانية (نص 1769) وترجمة فان دايك العربية (1865)',
  'Reader edition notes: Septuagint (Brenton) with the King James New Testament': 'ملاحظات طبعات القارئ: السبعينية (ترجمة برنتون) مع العهد الجديد في ترجمة الملك جيمس',
  'whole work (museum accession record for a Lachish relief panel; object record only)': 'العمل كله (سجل اقتناء متحفي للوحة من نقوش لخيش؛ سجل القطعة فقط)',
  'whole entry (overview of how science and religion are related; section not cited)': 'المدخل كله (عرض عام للعلاقة بين العلم والدين؛ دون ذكر قسم)',
  'whole entry (miracles: definitions, Hume’s argument, testimony and probability; section not cited)':
    'المدخل كله (المعجزات: التعريفات وحجة هيوم والشهادة والاحتمال؛ دون ذكر قسم)',
  'ch. 1–3 (creation through the Word, and from nothing)': 'الفصول 1–3 (الخلق بالكلمة ومن العدم)',
  'whole entry (logical and evidential versions of the problem; section not cited)': 'المدخل كله (الصيغتان المنطقية والاستدلالية للمشكلة؛ دون ذكر قسم)',
  'First Apology 67': 'الدفاع الأول 67',
  'whole entry (competing truth claims and religious disagreement; section not cited)': 'المدخل كله (دعاوى الحقيقة المتنافسة والخلاف الديني؛ دون ذكر قسم)',
  'whole entry (testimony, probability and Hume’s argument; section not cited)': 'المدخل كله (الشهادة والاحتمال وحجة هيوم؛ دون ذكر قسم)',
  'On the Incarnation, ch. 3': 'تجسد الكلمة، الفصل 3',
  'chapters 21–22': 'الفصلان 21–22',
  'Codex Sinaiticus Project, significance page (contents of the manuscript)': 'مشروع المخطوطة السينائية، صفحة الأهمية (محتويات المخطوط)',
  'Reader section: the deuterocanonical books, e.g. Wisdom of Solomon 1 and Song of the Three':
    'قسم في القارئ: الأسفار القانونية الثانية، مثل حكمة سليمان 1 وتسبحة الثلاثة فتية',
  'whole work (overview of the trial and death of Jesus, with a bibliography; chapter not cited)': 'العمل كله (عرض عام لمحاكمة يسوع وموته مع قائمة مراجع؛ دون ذكر فصل)',
  'whole work (digital library as a whole; no individual scroll cited)': 'العمل كله (المكتبة الرقمية كلها؛ دون ذكر مخطوط بعينه)',
  'whole work (essay as a whole; no detail of the scroll cited)': 'العمل كله (المقالة كلها؛ دون ذكر تفصيل من المخطوط)',
  'passim (the Word who became man)': 'في مواضع متفرقة (الكلمة الذي صار إنسانًا)',
  'whole work (entry as a general account of the doctrine and its history)': 'العمل كله (المدخل عرضًا عامًا للعقيدة وتاريخها)',
  'whole work (Pope Shenouda III, The Creed)': 'العمل كله (البابا شنوده الثالث، قانون الإيمان)',
  'whole work (Cyril of Alexandria, On the Unity of Christ; thesis as the author states it; chapter not cited)':
    'العمل كله (كيرلس السكندري، وحدانية المسيح؛ الأطروحة كما يعرضها المؤلف؛ دون ذكر فصل)',
  'whole work (Athanasius, On the Incarnation)': 'العمل كله (أثناسيوس، تجسد الكلمة)',
  'whole work (a museum primer on science, religion, evolution and creationism; section not cited)':
    'العمل كله (دليل متحفي عن العلم والدين والتطور والخلقية؛ دون ذكر قسم)',
  'whole work (a Christian organisation’s answers on faith and science; section not cited)': 'العمل كله (إجابات مؤسسة مسيحية عن الإيمان والعلم؛ دون ذكر قسم)',
  'On the Incarnation 3-5 and 54': 'تجسد الكلمة 3–5 و54',
  'Letter to the Smyrnaeans 1': 'الرسالة إلى أهل سميرنا 1',
  'Smyrnaeans 7; 8': 'إلى أهل سميرنا 7؛ 8',
  'First Apology 61': 'الدفاع الأول 61',
  'First Apology 65–67': 'الدفاع الأول 65–67',
  'First Apology 6; 13; 61': 'الدفاع الأول 6؛ 13؛ 61',
  'Smyrnaeans 1; 7': 'إلى أهل سميرنا 1؛ 7',
  'entry as a whole (definitions of miracle; testimony and probability; Hume’s argument and the replies)':
    'المدخل كله (تعريفات المعجزة؛ الشهادة والاحتمال؛ حجة هيوم والردود عليها)',
  'whole entry (divine hiddenness and nonbelief; section not cited)': 'المدخل كله (احتجاب الله وعدم الإيمان؛ دون ذكر قسم)',
  'whole work (thesis as the publisher and author present it; chapter not cited)': 'العمل كله (الأطروحة كما يعرضها الناشر والمؤلف؛ دون ذكر فصل)',
  'whole work (introductory study guide; its conclusions are not cited)': 'العمل كله (دليل دراسي تمهيدي؛ دون الاستشهاد باستنتاجاته)',
  'whole work (an early defence addressed to outsiders; chapter not cited)': 'العمل كله (دفاع مبكر موجّه إلى غير المسيحيين؛ دون ذكر فصل)',
  'whole work (exhibition page; individual catalogue records not cited)': 'العمل كله (صفحة معرض؛ دون ذكر سجلات بعينها من الفهرس)',
  'whole work (database as a whole; no manuscript or reading cited)': 'العمل كله (قاعدة البيانات كلها؛ دون ذكر مخطوط أو قراءة بعينها)',
  'end of the Gospel of Mark (16:8), as shown in the project’s online transcription': 'نهاية إنجيل مرقس (16: 8) كما تظهر في نسخ المشروع الإلكتروني',
  'significance page (manuscript description)': 'صفحة الأهمية (وصف المخطوط)',
  'whole work (approach as the publisher presents it; chapter not cited)': 'العمل كله (المنهج كما يعرضه الناشر؛ دون ذكر فصل)',
  'chapters 7–10; chapter 54 (Athanasius, On the Incarnation)': 'الفصول 7–10؛ الفصل 54 (أثناسيوس، تجسد الكلمة)',
  'whole work (exhibition page that leads to the Pilate inscription)': 'العمل كله (صفحة معرض تقود إلى نقش بيلاطس)',
  'whole work (the sections that answer Jewish objections to the Incarnation; chapter numbers not cited)':
    'العمل كله (الأقسام التي ترد على الاعتراضات اليهودية على التجسد؛ دون ذكر أرقام الفصول)',
  'Against Celsus, Book I (the passages in which Celsus’ Jewish speaker objects and Origen replies; chapter numbers not cited)':
    'ضد كلسوس، الكتاب الأول (المواضع التي يعترض فيها محاور كلسوس اليهودي ويرد أوريجانوس؛ دون ذكر أرقام الفصول)',
  'whole work (digital edition as a whole; no folio cited)': 'العمل كله (الطبعة الرقمية كلها؛ دون ذكر ورقة بعينها)',
  'Smyrnaeans 3–4': 'إلى أهل سميرنا 3–4',
  'Against Celsus I.28 and I.32': 'ضد كلسوس 1: 28 و1: 32',
  'On the Incarnation 3-5': 'تجسد الكلمة 3–5',
  'First Apology 66–67': 'الدفاع الأول 66–67',
  'Reader editions: King James Version with the Deuterocanon, and the Septuagint (Brenton)':
    'طبعات القارئ: ترجمة الملك جيمس مع الأسفار القانونية الثانية، والسبعينية (ترجمة برنتون)',
  'Leon Levy Dead Sea Scrolls Digital Library (collection overview)': 'مكتبة ليون ليفي الرقمية لمخطوطات البحر الميت (عرض عام للمجموعة)',
  'First Apology 31': 'الدفاع الأول 31',
  'On the Incarnation 54': 'تجسد الكلمة 54',
  'whole work (exhibition page that leads to the Pilate inscription; the inscription’s own catalogue record not cited)':
    'العمل كله (صفحة معرض تقود إلى نقش بيلاطس؛ دون ذكر سجل النقش نفسه في الفهرس)',
  'On the Incarnation, chapters 33–40': 'تجسد الكلمة، الفصول 33–40',
  'Against Celsus, Book I (the exchange over the virgin birth and Isaiah 7:14)': 'ضد كلسوس، الكتاب الأول (الجدل حول الميلاد البتولي وإشعياء 7: 14)',
  'Letter to the Smyrnaeans 1-2': 'الرسالة إلى أهل سميرنا 1–2',
  'whole entry (overview of competing truth claims; section not cited)': 'المدخل كله (عرض عام لدعاوى الحقيقة المتنافسة؛ دون ذكر قسم)',
  'First Apology, ch. 46': 'الدفاع الأول، الفصل 46',
  'whole work (F. F. Bruce, The Canon of Scripture)': 'العمل كله (ف. ف. بروس، قانون الكتاب المقدس)',
  'whole work (Cyril’s thesis that Christ is one, the incarnate Word; chapter not cited)': 'العمل كله (أطروحة كيرلس أن المسيح واحد، الكلمة المتجسد؛ دون ذكر فصل)',
  'First Apology 46': 'الدفاع الأول 46',
  'whole work (museum accession record for the Lachish relief; object record only)': 'العمل كله (سجل اقتناء متحفي لنقوش لخيش؛ سجل القطعة فقط)',
  'whole work (Pope Shenouda III on the Creed; section not cited)': 'العمل كله (البابا شنوده الثالث عن قانون الإيمان؛ دون ذكر قسم)',
  'Smyrnaeans 3': 'إلى أهل سميرنا 3',
  'whole work (the argument that the Word took a body and overcame death in it; chapter not cited)':
    'العمل كله (الحجة أن الكلمة اتخذ جسدًا وغلب الموت فيه؛ دون ذكر فصل)',
  'First Apology 66-67': 'الدفاع الأول 66–67',
  'First Apology 36': 'الدفاع الأول 36',
  'whole work (Cyril’s thesis that Emmanuel is one Son, the incarnate Word, not two; chapter not cited)':
    'العمل كله (أطروحة كيرلس أن عمانوئيل ابن واحد، الكلمة المتجسد، لا اثنان؛ دون ذكر فصل)',
  'Smyrnaeans 1': 'إلى أهل سميرنا 1',
};

/** English book names (longest first, so "1 John" wins over "John") → Arabic. */
const BOOK_NAMES: readonly (readonly [string, string])[] = [
  ...BOOKS.map((book) => [book.en, book.ar] as const),
  ['Psalm', BOOKS.find((book) => book.en === 'Psalms')?.ar ?? 'المزامير'] as const,
].sort((a, b) => b[0].length - a[0].length);

/** Whether a locator is a Bible reference (it starts with a book name). */
function isBibleReference(text: string): boolean {
  return BOOK_NAMES.some(([en]) => text.startsWith(`${en} `));
}

/** "1 Corinthians 15:3–8 and Galatians 3:1 (read as ancient documents)" in Arabic. */
function bibleReferenceInArabic(text: string): string {
  let out = text
    .replace(' (Hebrew numbering; Psalm 22 in the Septuagint numbering)', ' (بحسب الترقيم العبري؛ المزمور 22 في ترقيم السبعينية)')
    .replace(' (deuterocanonical; read as an ancient document)', ' (من الأسفار القانونية الثانية؛ يُقرأ بوصفه وثيقة قديمة)')
    .replace(' (openings of the Gospels as read in the site’s Bible reader)', ' (افتتاحيات الأناجيل كما تُقرأ في قارئ الكتاب المقدس بالموقع)')
    .replace(' (compared)', ' (للمقارنة)')
    .replaceAll(', compared with ', '، مقارنةً مع ')
    .replaceAll(', read with ', '، تُقرأ مع ')
    .replace(/\s*\(read as an ancient document\)/g, ' (يُقرأ بوصفه وثيقة قديمة)')
    .replace(/\s*\(read as ancient documents\)/g, ' (تُقرأ بوصفها وثائق قديمة)')
    .replace(/ and /g, ' و')
    .replace(/(\d)-(\d)/g, '$1–$2')
    .replace(/;/g, '؛')
    .replace(/,/g, '،');
  for (const [en, ar] of BOOK_NAMES) out = out.replace(new RegExp(`(^|[؛،و ])${en.replace(/ /g, '\\s')} (?=\\d)`, 'g'), `$1${ar} `);
  return out;
}

/** The Arabic of an English-only catalogue string, or `undefined` if there is none yet. */
export function arabicOf(text: string): string | undefined {
  return AR[text] ?? (isBibleReference(text) ? bibleReferenceInArabic(text) : undefined);
}

/** A catalogue string in the page's language (English unchanged; Arabic from the table above). */
export function inLocale(text: string, locale: Locale): string {
  return locale === 'ar' ? (arabicOf(text) ?? text) : text;
}
