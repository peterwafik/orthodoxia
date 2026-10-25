import type {
  AccessState,
  ArgumentType,
  Assessment,
  Difficulty,
  Line,
  LinkStatus,
  PublicationState,
  ReviewState,
  SourceGroup,
  SourceKind,
  Standpoint,
  StartingPoint,
  TimelineKind,
} from '../../data/apologetics/types.ts';

export const ASSESSMENT: Readonly<Record<Assessment, { label: Line; definition: Line }>> = {
  strong_historical_support: {
    label: { en: 'Strong historical support', ar: 'دعم تاريخي قوي' },
    definition: { en: 'Several independent lines of evidence point the same way and serious alternatives have been examined. Some details may still be uncertain.', ar: 'عدة خطوط أدلة مستقلة تتجه الاتجاه نفسه، وقد فُحصت البدائل الجادة. قد تبقى بعض التفاصيل غير مؤكدة.' },
  },
  supported_disputed_details: {
    label: { en: 'Supported, with disputed details', ar: 'مدعوم مع تفاصيل مختلف عليها' },
    definition: { en: 'The central claim is supported by good evidence, while some of its details are debated among historians.', ar: 'الادعاء المركزي مدعوم بأدلة جيدة، بينما بعض تفاصيله محل نقاش بين المؤرخين.' },
  },
  actively_debated: {
    label: { en: 'Actively debated', ar: 'محل نقاش نشط' },
    definition: { en: 'Informed specialists disagree, and the evidence can reasonably be read more than one way.', ar: 'يختلف المتخصصون المطّلعون، ويمكن أن تُقرأ الأدلة بأكثر من طريقة معقولة.' },
  },
  limited_evidence: {
    label: { en: 'Limited evidence', ar: 'أدلة محدودة' },
    definition: { en: 'Little or no independent evidence is available, so the claim rests mainly on one kind of source.', ar: 'لا توجد أدلة مستقلة أو هي قليلة، فيعتمد الادعاء أساسًا على نوع واحد من المصادر.' },
  },
  philosophical_argument: {
    label: { en: 'Philosophical argument', ar: 'حجة فلسفية' },
    definition: { en: 'A claim assessed by reasoning from premises, not by historical documents. This is a kind of argument, not a low confidence score.', ar: 'ادعاء يُقيَّم بالاستدلال من مقدمات لا بالوثائق التاريخية. هذا نوع من الحجج وليس درجة ثقة منخفضة.' },
  },
  theological_interpretation: {
    label: { en: 'Theological interpretation', ar: 'تفسير لاهوتي' },
    definition: { en: 'A claim about what the faith teaches or how a text is read within the Church. This is a kind of claim, not a low confidence score.', ar: 'ادعاء عما يعلّمه الإيمان أو كيف يُقرأ نص داخل الكنيسة. هذا نوع من الادعاءات وليس درجة ثقة منخفضة.' },
  },
  pending_review: {
    label: { en: 'Assessment', ar: 'التقييم' },
    definition: { en: 'No reviewer has assessed this yet.', ar: 'لم يقيّمه مراجع بعد.' },
  },
};

export const ARGUMENT_TYPE: Readonly<Record<ArgumentType, Line>> = {
  historical: { en: 'Historical', ar: 'تاريخي' },
  philosophical: { en: 'Philosophical', ar: 'فلسفي' },
  textual: { en: 'Textual', ar: 'نصّي' },
  theological: { en: 'Theological', ar: 'لاهوتي' },
  archaeological: { en: 'Archaeological', ar: 'أثري' },
  scientific: { en: 'Scientific', ar: 'علمي' },
};

export const ACCESS: Readonly<Record<AccessState, Line>> = {
  full_text: { en: 'Full text available online', ar: 'النص الكامل متاح على الإنترنت' },
  excerpt_only: { en: 'Excerpts or images only', ar: 'مقتطفات أو صور فقط' },
  abstract_only: { en: 'Abstract only', ar: 'ملخص فقط' },
  metadata_only: { en: 'Metadata only', ar: 'بيانات وصفية فقط' },
  paywalled: { en: 'Paywalled', ar: 'خلف جدار دفع' },
  awaiting_copy: { en: 'Awaiting an authorised copy', ar: 'في انتظار نسخة مصرّح بها' },
  unavailable: { en: 'Unavailable', ar: 'غير متاح' },
};

export const REVIEW: Readonly<Record<ReviewState, Line>> = {
  discovered: { en: 'Discovered, not yet reviewed', ar: 'اكتُشف ولم يُراجَع بعد' },
  metadata_verified: { en: 'Metadata verified', ar: 'البيانات الوصفية موثّقة' },
  acquired: { en: 'Acquired where permitted', ar: 'تم الحصول عليه حيثما يُسمح' },
  extracted: { en: 'Text extracted', ar: 'استُخرج النص' },
  fact_checked: { en: 'Fact-checked', ar: 'تم التحقق من الوقائع' },
  theological_reviewed: { en: 'Theologically reviewed', ar: 'روجع لاهوتيًا' },
  language_reviewed: { en: 'Language reviewed', ar: 'روجعت لغته' },
  published: { en: 'Published', ar: 'منشور' },
  needs_review: { en: 'Needs review', ar: 'يحتاج مراجعة' },
};

export const LINK: Readonly<Record<LinkStatus, Line>> = {
  not_checked: { en: 'Link not checked yet', ar: 'لم يُفحص الرابط بعد' },
  ok: { en: 'Link reachable', ar: 'الرابط يعمل' },
  redirected: { en: 'Link redirects', ar: 'الرابط يعيد التوجيه' },
  blocked: { en: 'Link blocks automated checks', ar: 'الرابط يمنع الفحص الآلي' },
  failed: { en: 'Link failed', ar: 'تعذّر الرابط' },
};

export const KIND: Readonly<Record<SourceKind, Line>> = {
  primary_text: { en: 'Primary text', ar: 'نص أصلي' },
  edition_host: { en: 'Edition of an ancient text', ar: 'طبعة لنص قديم' },
  scholarly_book: { en: 'Scholarly book', ar: 'كتاب علمي' },
  scholarly_article: { en: 'Scholarly article', ar: 'بحث علمي' },
  reference_work: { en: 'Reference work', ar: 'مرجع' },
  museum_record: { en: 'Museum record', ar: 'سجل متحفي' },
  manuscript_project: { en: 'Manuscript project', ar: 'مشروع مخطوطات' },
  research_guide: { en: 'Research guide', ar: 'دليل بحثي' },
  review: { en: 'Book review', ar: 'مراجعة كتاب' },
  catalogue: { en: 'Catalogue', ar: 'فهرس' },
  storefront: { en: 'Publisher or store page', ar: 'صفحة ناشر أو متجر' },
  sermon_collection: { en: 'Talks and sermons', ar: 'محاضرات وعظات' },
  apologetic_site: { en: 'Apologetics site', ar: 'موقع دفاعي' },
  institution: { en: 'Institution', ar: 'مؤسسة' },
};

export const STANDPOINT: Readonly<Record<Standpoint, Line>> = {
  ancient_non_christian: { en: 'Ancient, non-Christian', ar: 'قديم، غير مسيحي' },
  ancient_christian: { en: 'Ancient, Christian', ar: 'قديم، مسيحي' },
  modern_christian: { en: 'Modern, Christian perspective', ar: 'حديث، منظور مسيحي' },
  modern_non_christian_scholar: { en: 'Modern, non-Christian scholar', ar: 'حديث، باحث غير مسيحي' },
  modern_scholar_unspecified: { en: 'Modern scholar, affiliation not established', ar: 'باحث حديث، الانتماء غير موثّق' },
  institutional: { en: 'Institutional', ar: 'مؤسسي' },
  not_established: { en: 'Not established', ar: 'غير موثّق' },
};

export const GROUP: Readonly<Record<SourceGroup, Line>> = {
  ancient_witness: { en: 'Ancient non-Christian witnesses', ar: 'شهود قدماء من خارج المسيحية' },
  jesus_gospels: { en: 'Historical Jesus, crucifixion and the Gospels', ar: 'يسوع التاريخي والصلب والأناجيل' },
  resurrection_devotion: { en: 'Resurrection and early devotion to Jesus', ar: 'القيامة والتعبد المبكر ليسوع' },
  manuscripts_canon: { en: 'Manuscripts, canon and textual criticism', ar: 'المخطوطات والقانون والنقد النصي' },
  archaeology: { en: 'Archaeology and Old Testament history', ar: 'علم الآثار وتاريخ العهد القديم' },
  philosophy_science: { en: 'Philosophy, science and ethical objections', ar: 'الفلسفة والعلم والاعتراضات الأخلاقية' },
  patristic_coptic: { en: 'Fathers, Coptic Orthodox and comparative resources', ar: 'الآباء والمصادر القبطية والمقارنة' },
};

export const DIFFICULTY: Readonly<Record<Difficulty, Line>> = {
  introductory: { en: 'Introductory', ar: 'تمهيدي' },
  intermediate: { en: 'Intermediate', ar: 'متوسط' },
  advanced: { en: 'Advanced', ar: 'متقدم' },
};

export const STATE: Readonly<Record<PublicationState, Line>> = {
  backlog: { en: 'Not written yet', ar: 'لم تُكتب بعد' },
  draft: { en: 'Draft awaiting human review', ar: 'مسودة بانتظار مراجعة بشرية' },
  in_review: { en: 'In review', ar: 'قيد المراجعة' },
  published: { en: 'Reviewed and published', ar: 'روجعت ونُشرت' },
  withdrawn: { en: 'Withdrawn', ar: 'سُحبت' },
};

/** Timeline kinds carry a symbol as well as a word, so they are not told apart by colour alone. */
export const TIMELINE_KIND: Readonly<Record<TimelineKind, { label: Line; symbol: string }>> = {
  event: { label: { en: 'Event', ar: 'حدث' }, symbol: '◆' },
  composition: { label: { en: 'Composition of a text', ar: 'تأليف نص' }, symbol: '✎' },
  witness: { label: { en: 'Surviving manuscript or object', ar: 'مخطوط أو قطعة باقية' }, symbol: '▤' },
};

export const START_NOTE: Readonly<Record<StartingPoint, Line>> = {
  'no-god': { en: 'Start with what counts as evidence, then the arguments and their strongest objections.', ar: 'ابدأ بما يُعدّ دليلًا، ثم الحجج وأقوى الاعتراضات عليها.' },
  'god-not-religion': { en: 'Start with why the question matters and why God may seem hidden.', ar: 'ابدأ بسبب أهمية السؤال ولماذا قد يبدو الله محتجبًا.' },
  'other-religion': { en: 'Choose the objection you have, then read exactly where the claims differ.', ar: 'اختر الاعتراض الذي لديك، ثم اقرأ بدقة أين تختلف الدعاوى.' },
  unsure: { en: 'Start with how evidence is weighed, then follow whichever question interests you.', ar: 'ابدأ بكيفية وزن الأدلة، ثم اتبع السؤال الذي يهمك.' },
  'christian-questions': { en: 'Go straight to the question that troubles you.', ar: 'اذهب مباشرة إلى السؤال الذي يشغلك.' },
  studying: { en: 'Source records, locators and bibliography come first.', ar: 'سجلات المصادر والإحالات وقائمة المراجع أولًا.' },
};
