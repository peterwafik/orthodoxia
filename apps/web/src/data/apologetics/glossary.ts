import type { GlossaryTerm } from './types.ts';

const g = (id: string, en: string, ar: string, defEn: string, defAr: string, aliases: readonly string[] = []): GlossaryTerm => ({
  id,
  term: { en, ar },
  definition: { en: defEn, ar: defAr },
  aliases,
});

export const GLOSSARY: readonly GlossaryTerm[] = [
  g('apologetics', 'Apologetics', 'الدفاعيات', 'The reasoned defence and explanation of a belief. It offers arguments and evidence for examination; it does not replace faith or guarantee agreement.', 'الدفاع المنطقي عن اعتقاد وشرحه. يقدّم حججًا وأدلة للفحص، ولا يحلّ محل الإيمان ولا يضمن الاقتناع.', ['apologetic', 'دفاعيات', 'اللاهوت الدفاعي']),
  g('primary-source', 'Primary source', 'مصدر أولي', 'A text or object from the period being studied, such as an ancient letter, a manuscript or an inscription.', 'نص أو قطعة من الفترة المدروسة نفسها، مثل رسالة قديمة أو مخطوط أو نقش.', ['مصدر أصلي']),
  g('secondary-source', 'Secondary source', 'مصدر ثانوي', 'A modern study that interprets primary sources, such as a scholarly book or article.', 'دراسة حديثة تفسّر المصادر الأولية، مثل كتاب أو بحث أكاديمي.', ['مصدر ثانوي']),
  g('independent-attestation', 'Independent attestation', 'شهادة مستقلة', 'Two sources report the same thing without one copying the other. Two copies of one source are one witness, not two.', 'مصدران يرويان الأمر نفسه دون أن ينقل أحدهما من الآخر. نسختان من مصدر واحد شاهد واحد لا اثنان.', ['independent witness']),
  g('eyewitness', 'Eyewitness', 'شاهد عيان', 'A person who saw an event first-hand. A writer who reports what others said is not an eyewitness.', 'شخص رأى الحدث بنفسه. الكاتب الذي ينقل ما قاله الآخرون ليس شاهد عيان.', ['شاهد عيان']),
  g('interpolation', 'Interpolation', 'إضافة لاحقة', 'Words added to a text after its author wrote it, usually by a copyist.', 'كلمات أُضيفت إلى نص بعد أن كتبه مؤلفه، وعادة يضيفها ناسخ.', ['إقحام']),
  g('manuscript', 'Manuscript', 'مخطوط', 'A handwritten copy of a text on papyrus, parchment or paper.', 'نسخة مكتوبة بخط اليد على بردي أو رق أو ورق.', ['مخطوطة']),
  g('papyrus', 'Papyrus', 'بردي', 'A writing material made from the papyrus plant, common in Egypt in antiquity.', 'مادة للكتابة من نبات البردي، شاعت في مصر قديمًا.', []),
  g('codex', 'Codex', 'مخطوط مجلّد (كوديكس)', 'An early book made of folded pages bound together, replacing the scroll.', 'كتاب قديم من صفحات مطوية ومجلدة معًا، حلّ محل اللفافة.', []),
  g('textual-criticism', 'Textual criticism', 'النقد النصي', 'The study of manuscripts to work out the most probable original wording of a text and how it changed.', 'دراسة المخطوطات لتحديد الصيغة الأصلية الأرجح للنص ومعرفة كيف تغيّر.', ['textual critic']),
  g('textual-variant', 'Textual variant', 'قراءة متباينة', 'A place where surviving manuscripts differ in wording. Most variants are spelling or word-order differences.', 'موضع تختلف فيه المخطوطات الباقية في الصياغة. معظمها فروق إملائية أو في ترتيب الكلمات.', ['variant reading', 'اختلاف القراءات']),
  g('canon', 'Canon', 'القانون الكتابي', 'The list of books a community receives as Scripture.', 'قائمة الأسفار التي تتسلّمها جماعة بوصفها كتابًا مقدسًا.', ['قانون']),
  g('deuterocanon', 'Deuterocanonical books', 'الأسفار القانونية الثانية', 'Books such as Tobit, Wisdom and Sirach, received by the Coptic Orthodox Church and others but not in the Hebrew Bible or most Protestant Bibles.', 'أسفار مثل طوبيا والحكمة ويشوع بن سيراخ، تقبلها الكنيسة القبطية وغيرها وليست في الكتاب العبري ولا أكثر طبعات الكتاب المقدس البروتستانتية.', ['apocrypha', 'الأبوكريفا']),
  g('septuagint', 'Septuagint (LXX)', 'الترجمة السبعينية', 'The ancient Greek translation of the Hebrew Scriptures, used by the early church.', 'الترجمة اليونانية القديمة للأسفار العبرية، استخدمتها الكنيسة الأولى.', ['LXX']),
  g('masoretic-text', 'Masoretic Text', 'النص الماسوري', 'The traditional Hebrew text of the Old Testament, fixed in the Middle Ages from earlier traditions.', 'النص العبري التقليدي للعهد القديم، ثبّته الماسوريون في العصور الوسطى عن تقاليد أقدم.', ['MT']),
  g('dead-sea-scrolls', 'Dead Sea Scrolls', 'مخطوطات البحر الميت', 'Manuscripts found near Qumran from about the third century BC to the first century AD, including Hebrew Bible texts.', 'مخطوطات عُثر عليها قرب قمران من نحو القرن الثالث ق.م. إلى القرن الأول الميلادي، منها نصوص من الكتاب العبري.', ['قمران', 'Qumran']),
  g('gospel', 'Gospel', 'إنجيل', 'An early Christian account of the life, death and resurrection of Jesus. “Gospel” also means the good news they proclaim.', 'رواية مسيحية مبكرة عن حياة يسوع وموته وقيامته. وتعني الكلمة أيضًا البشارة التي تعلنها.', []),
  g('synoptic-gospels', 'Synoptic Gospels', 'الأناجيل الإزائية', 'Matthew, Mark and Luke, which share much material and are read side by side.', 'متى ومرقس ولوقا، وتشترك في مادة كثيرة وتُقرأ جنبًا إلى جنب.', ['synoptics']),
  g('testimonium-flavianum', 'Testimonium Flavianum', 'شهادة يوسيفوس (التستيمونيوم)', 'The passage about Jesus in Josephus, Antiquities 18.63–64, which most scholars think was partly reworded by Christians.', 'الفقرة عن يسوع عند يوسيفوس (العاديات ١٨: ٦٣–٦٤)، ويرى أكثر الباحثين أن مسيحيين أعادوا صياغة جزء منها.', ['Testimonium']),
  g('resurrection', 'Resurrection', 'القيامة', 'In Christian teaching, Jesus’ bodily rising from the dead to a transformed life. It is a different claim from the claim that his followers came to believe it.', 'في التعليم المسيحي، قيام يسوع جسديًا من الأموات إلى حياة متجددة. وهي دعوى مختلفة عن دعوى أن تلاميذه آمنوا بذلك.', []),
  g('crucifixion', 'Crucifixion', 'الصلب', 'A Roman method of execution by fixing a person to a cross or stake.', 'طريقة إعدام رومانية بتثبيت الشخص على صليب أو خشبة.', []),
  g('miracle', 'Miracle', 'معجزة', 'An event believed to result from God acting beyond the ordinary course of nature.', 'حدث يُعتقد أنه نتج عن فعل الله فوق المجرى الاعتيادي للطبيعة.', []),
  g('theism', 'Theism', 'الإيمان بإله (التوحيد الشخصي)', 'The view that there is one personal God who made and sustains the world.', 'الرأي القائل بوجود إله واحد شخصي خلق العالم ويعوله.', []),
  g('cosmological-argument', 'Cosmological argument', 'الحجة الكونية', 'An argument from the existence or beginning of the universe to a cause or explanation beyond it.', 'حجة تنطلق من وجود الكون أو بدايته إلى سبب أو تفسير خارجه.', []),
  g('fine-tuning', 'Fine-tuning', 'الضبط الدقيق', 'The observation that some physical constants fall in a narrow range compatible with life, and the debate over what that implies.', 'ملاحظة أن بعض الثوابت الفيزيائية ضمن نطاق ضيق يلائم الحياة، والجدل حول دلالة ذلك.', []),
  g('theodicy', 'Theodicy', 'تبرير العناية الإلهية', 'An attempt to explain why a good God permits evil and suffering.', 'محاولة لتفسير سبب سماح إله صالح بالشر والألم.', ['problem of evil']),
  g('divine-hiddenness', 'Divine hiddenness', 'احتجاب الله', 'The question why a loving God is not more evident to people who sincerely seek him.', 'التساؤل لماذا لا يكون إله محب أوضح للذين يطلبونه بصدق.', ['hiddenness']),
  g('christology', 'Christology', 'اللاهوت المسيحاني (الكريستولوجيا)', 'Teaching about who Christ is, especially how divinity and humanity are united in him.', 'التعليم عن شخص المسيح، وبخاصة كيف اتحد فيه اللاهوت والناسوت.', []),
  g('miaphysitism', 'Miaphysitism', 'الطبيعة الواحدة المتجسدة', 'The Coptic Orthodox teaching, from Cyril of Alexandria, that Christ is one incarnate nature of the Word, from two natures united without mixture, confusion or alteration. It rejects the idea of a single blended nature.', 'تعليم الكنيسة القبطية الأرثوذكسية عن كيرلس السكندري: طبيعة واحدة متجسدة لله الكلمة، من طبيعتين اتحدتا بلا اختلاط ولا امتزاج ولا تغيير. وهي ترفض فكرة طبيعة واحدة ممتزجة.', ['miaphysite', 'monophysitism']),
  g('theotokos', 'Theotokos', 'والدة الإله', 'A Greek title for Mary, “God-bearer”, affirming that the child she bore is God the Word incarnate.', 'لقب يوناني للعذراء معناه «حاملة الإله»، يؤكد أن الذي ولدته هو الله الكلمة المتجسد.', ['Mother of God', 'ثيئوطوكوس']),
  g('virginal-conception', 'Virginal conception', 'الحبل العذراوي', 'The teaching that Jesus was conceived by the Holy Spirit without a human father.', 'التعليم بأن يسوع حُبل به من الروح القدس دون أب بشري.', ['virgin birth']),
  g('perpetual-virginity', 'Perpetual virginity', 'البتولية الدائمة', 'The teaching that Mary remained a virgin throughout her life. It is a separate claim from the virginal conception.', 'التعليم بأن مريم ظلت عذراء طوال حياتها. وهي دعوى منفصلة عن الحبل العذراوي.', ['ever-virgin']),
  g('trinity', 'Trinity', 'الثالوث', 'The Christian teaching that God is one in essence and three in persons: Father, Son and Holy Spirit.', 'التعليم المسيحي بأن الله واحد في الجوهر وثلاثة في الأقانيم: الآب والابن والروح القدس.', []),
  g('tradition', 'Tradition', 'التقليد', 'In the Orthodox understanding, the Church’s lived and handed-on faith, within which Scripture is read.', 'في الفهم الأرثوذكسي: الإيمان الذي تعيشه الكنيسة وتسلّمه، وفي داخله يُقرأ الكتاب المقدس.', ['tradition of the church']),
  g('typology', 'Typology', 'الرمزية (التمثيل)', 'Reading a person or event in the Old Testament as foreshadowing something in Christ. It is a way of reading, not a prediction in the narrow sense.', 'قراءة شخص أو حدث في العهد القديم بوصفه ظلًا لشيء في المسيح. هي طريقة قراءة وليست تنبؤًا بالمعنى الضيق.', []),
  g('inspiration', 'Inspiration', 'الوحي', 'The Christian belief that God worked through the human authors of Scripture. It is a theological claim, distinct from the preservation of manuscripts.', 'الإيمان المسيحي بأن الله عمل من خلال كتّاب الكتاب المقدس البشر. دعوى لاهوتية تختلف عن حفظ المخطوطات.', []),
];

export const GLOSSARY_BY_ID: ReadonlyMap<string, GlossaryTerm> = new Map(GLOSSARY.map((term) => [term.id, term]));
