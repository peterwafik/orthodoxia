import type { Article } from '../types.ts';

export const article: Article = {
  id: 'did-nicaea-choose-the-bible',
  questionId: 'did-nicaea-choose-the-bible',
  state: 'draft',
  revision: 1,
  updated: '2026-10-25',
  author: 'Orthodoxia editorial team',
  reviewers: [],
  corrections: [],

  scope: {
    en: 'This article asks one narrow question: did the Council of Nicaea in AD 325 decide which books belong in the Bible? It sets out what the council did and did not do, where the popular claim seems to come from, and what the Coptic Church, whose bishop Alexander and deacon Athanasius were at the council, says about it. The wider history of how the lists formed is in the article on who chose the books.',
    ar: 'تسأل هذه المقالة سؤالًا محددًا: هل قرر مجمع نيقية سنة ٣٢٥م أي الأسفار تنتمي إلى الكتاب المقدس؟ وهي تعرض ما فعله المجمع وما لم يفعله، ومن أين يبدو أن الادعاء الشائع جاء، وما تقوله الكنيسة القبطية التي حضر أسقفها ألكسندروس وشماسه أثناسيوس المجمع. أما التاريخ الأوسع لتكوّن القوائم فهو في مقالة «من اختار الأسفار؟».',
  },
  shortAnswer: {
    en: 'No. The Council of Nicaea was called to deal with the dispute started by Arius over the divinity of the Son, with the date of Easter and with some questions of church order. Its creed and its surviving canons contain no list of Scripture, and the ancient accounts of the council do not report a vote on books. Both sides at Nicaea argued from Scripture they already held in common. The first well-known list of exactly the twenty-seven New Testament books comes from Athanasius more than forty years later.',
    ar: 'لا. فقد انعقد مجمع نيقية لمعالجة النزاع الذي أثاره آريوس في لاهوت الابن، ولتحديد موعد الفصح، ولبعض مسائل النظام الكنسي. ولا يتضمن قانون إيمانه ولا قوانينه الباقية قائمة بالكتب المقدسة، ولا تروي الروايات القديمة للمجمع تصويتًا على الأسفار. وقد احتج الفريقان في نيقية بكتب مقدسة كانا يملكانها مشتركة. وأول قائمة معروفة بالأسفار السبعة والعشرين للعهد الجديد بالضبط جاءت من أثناسيوس بعد أكثر من أربعين سنة.',
  },
  quickPoints: {
    en: [
      'Nicaea (AD 325) dealt with Arius’s teaching, the date of Easter and church order; the surviving creed and canons say nothing about a list of Scripture.',
      'The Arian dispute was an argument over how to read texts that both sides accepted, which shows that Scripture was in use before the council.',
      'The report that Constantine ordered copies of the Scriptures for Constantinople is about copying, not about choosing the contents.',
      'Athanasius, who was at Nicaea as a young deacon, gave his list of the New Testament books in AD 367.',
      'The claim that Nicaea chose the Bible is a modern popular story, and it is not found in the ancient accounts.',
    ],
    ar: [
      'تناول نيقية (٣٢٥م) تعليم آريوس وموعد الفصح والنظام الكنسي؛ ولا يقول قانون الإيمان ولا القوانين الباقية شيئًا عن قائمة للكتب المقدسة.',
      'كان النزاع الآريوسي جدلًا في كيفية قراءة نصوص يقبلها الطرفان، مما يدل على أن الكتاب كان مستعملًا قبل المجمع.',
      'الخبر عن أن قسطنطين أمر بنسخ الكتب المقدسة للقسطنطينية خبر عن النسخ لا عن اختيار المحتوى.',
      'قدّم أثناسيوس، الذي حضر نيقية شماسًا شابًا، قائمته لأسفار العهد الجديد سنة ٣٦٧م.',
      'الزعم بأن نيقية اختار الكتاب المقدس قصة شعبية حديثة ولا وجود لها في الروايات القديمة.',
    ],
  },
  argumentTypes: ['historical', 'textual'],
  assessment: {
    label: 'strong_historical_support',
    explanation: {
      en: 'The known business of the council and the content of its creed are well attested, and nothing in the early accounts says it decided the canon. This is partly an argument from what the sources do not say, which is limited evidence, but the many independent accounts of the council and the later history of the lists agree.',
      ar: 'نشاط المجمع المعروف ومضمون قانون إيمانه موثقان جيدًا، ولا شيء في الروايات المبكرة يقول إنه قرر القانون. وهذه حجة جزئيًا مما لا تقوله المصادر، وهو دليل محدود، لكن الروايات المتعددة المستقلة للمجمع والتاريخ اللاحق للقوائم متفقة.',
    },
  },

  whyExamine: {
    en: [
      'The idea that a council of bishops under an emperor voted on the Bible is widely repeated in popular books, films and online. It carries a serious accusation, that the Scriptures are a political creation, and it deserves a direct answer.',
      'The answer also shows what Nicaea was about. The council defined who Christ is in the face of Arius, and that is the subject on which the Coptic Church most honours it.',
    ],
    ar: [
      'تتكرر على نطاق واسع في الكتب الشعبية والأفلام والإنترنت فكرة أن مجمعًا من الأساقفة في عهد إمبراطور صوّت على الكتاب المقدس. وهي تحمل اتهامًا خطيرًا، أن الكتب المقدسة صناعة سياسية، وتستحق جوابًا مباشرًا.',
      'ويُظهر الجواب أيضًا ما كان نيقية يدور حوله. فقد حدد المجمع من هو المسيح في مواجهة آريوس، وهذا هو الموضوع الذي تكرّمه الكنيسة القبطية عليه أكثر من غيره.',
    ],
  },
  background: {
    en: [
      'Constantine, the emperor, called the bishops to Nicaea in 325. The tradition of the Church speaks of 318 bishops, and the number is repeated by Athanasius. The controversy was the teaching of Arius, a presbyter of Alexandria, who held that the Son is a creature who came to be, though the first of creatures. Alexander, bishop of Alexandria, opposed him, and his deacon Athanasius, then young, was with him.',
      'The council produced a creed that says the Son is of the same essence (homoousios) as the Father. It also dealt with the date of Easter and issued a set of disciplinary canons, traditionally counted as twenty, on matters such as the ordination of clergy and the reconciliation of those who had lapsed. It also addressed a schism in Egypt associated with Meletius. None of this concerns a list of books.',
      'The Arian crisis did not end at Nicaea. It continued for decades, and the historian Lewis Ayres has written about how the Nicene faith came to be accepted in the later fourth century. In that long conflict, Athanasius defended Nicaea across several exiles, and it was in this setting that he wrote his Festal Letter for AD 367.',
      'The popular claim has a modern history. It spread widely in recent popular fiction and online writing, and is not found in the ancient accounts of the council. A report from Eusebius, who knew Constantine, says that the emperor asked for fifty copies of the Scriptures to be prepared for the churches of his new city. This is a commission for copies, and it does not say that the contents were chosen by him.',
    ],
    ar: [
      'دعا الإمبراطور قسطنطين الأساقفة إلى نيقية سنة ٣٢٥. ويتحدث تقليد الكنيسة عن ٣١٨ أسقفًا، ويكرر أثناسيوس هذا العدد. وكان الخلاف حول تعليم آريوس، وهو قس في الإسكندرية قال إن الابن مخلوق وُجد بعد أن لم يكن، وإن كان أول المخلوقات. وعارضه ألكسندروس أسقف الإسكندرية، وكان معه شماسه أثناسيوس الذي كان شابًا حينئذ.',
      'وأصدر المجمع قانون إيمان يقول إن الابن من جوهر الآب نفسه (هوموأوسيوس). وتناول أيضًا موعد الفصح وأصدر مجموعة قوانين تأديبية تُعدّ تقليديًا عشرين، في أمور مثل رسامة الإكليروس وردّ الذين سقطوا. وعالج كذلك انشقاقًا في مصر ارتبط بملاتيوس. وليس في هذا كله ما يخص قائمة أسفار.',
      'ولم تنته الأزمة الآريوسية في نيقية، بل استمرت عقودًا، وقد كتب لويس إيرز عن كيف قُبل الإيمان النيقاوي في أواخر القرن الرابع. وفي هذا الصراع الطويل دافع أثناسيوس عن نيقية عبر منافٍ عدة، وفي هذا الإطار كتب رسالته الفصحية لسنة ٣٦٧م.',
      'وللدعوى الشائعة تاريخ حديث. فقد انتشرت على نطاق واسع في أدب خيالي شعبي حديث وكتابات الإنترنت، ولا وجود لها في الروايات القديمة للمجمع. ويقول خبر عن أوسابيوس، الذي عرف قسطنطين، إن الإمبراطور طلب إعداد خمسين نسخة من الكتب المقدسة لكنائس مدينته الجديدة. وهذا تكليف بنسخ، ولا يقول إنه اختار المحتوى.',
    ],
  },
  glossary: ['canon', 'tradition', 'christology', 'trinity', 'manuscript', 'codex'],

  claims: [
    {
      id: 'C1',
      proposition: {
        en: 'The Council of Nicaea did not decide the biblical canon.',
        ar: 'لم يقرر مجمع نيقية قانون الكتاب المقدس.',
      },
      argumentType: 'historical',
      assessment: 'strong_historical_support',
      rationale: {
        en: 'The business of the council was the Arian dispute, the date of Easter and church order. The creed and canons that survive do not contain a list of Scripture, and the first well-known list of the whole New Testament appears more than forty years later in a letter of Athanasius.',
        ar: 'كان شغل المجمع النزاع الآريوسي وموعد الفصح والنظام الكنسي. ولا يحوي قانون الإيمان والقوانين الباقية قائمة بالكتب المقدسة، وتظهر أول قائمة معروفة بالعهد الجديد كله بعد أكثر من أربعين سنة في رسالة لأثناسيوس.',
      },
      limits: {
        en: 'It is an argument from the silence of incomplete records, but no ancient account contradicts it.',
        ar: 'هي حجة من صمت سجلات ناقصة، لكن لا رواية قديمة تناقضها.',
      },
      evidence: ['E1', 'E2'],
    },
  ],

  evidence: [
    {
      id: 'E1',
      sourceId: 'S20',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'context',
      states: {
        en: 'Lewis Ayres’s Nicaea and Its Legacy is a study of the fourth-century Trinitarian controversies, including the council of 325 and the long dispute that followed it.',
        ar: 'كتاب لويس إيرز «نيقية وإرثها» دراسة للخلافات الثالوثية في القرن الرابع، ومنها مجمع ٣٢٥ والنزاع الطويل الذي تلاه.',
      },
      inference: {
        en: 'It is cited as the standard scholarly treatment of what the council and its aftermath were about: the doctrine of God and Christ. No part of the book is reported here, and the subject of the canon is not the book’s subject.',
        ar: 'يُستشهد به بوصفه المعالجة العلمية المعتمدة لموضوع المجمع وما تلاه: عقيدة الله والمسيح. ولا يُنقل جزء من الكتاب هنا، وموضوع القانون ليس موضوع الكتاب.',
      },
    },
    {
      id: 'E2',
      sourceId: 'S29',
      locator: 'whole work (thesis as the author states it; chapter not cited)',
      role: 'supports',
      states: {
        en: 'F. F. Bruce’s The Canon of Scripture is a history of how the biblical canon formed, and its thesis is that the books came to be recognised through use in the churches and that later lists confirmed that use.',
        ar: 'كتاب ف. ف. بروس «قانون الكتاب المقدس» تاريخ لكيفية تكوّن القانون، وأطروحته أن الأسفار عُرفت بالاستعمال في الكنائس وأن القوائم اللاحقة أكدت ذلك.',
      },
      inference: {
        en: 'The author is a Christian scholar. The book is cited as a whole work for the general picture, and it is not used for any report of the council.',
        ar: 'المؤلف باحث مسيحي. ويُستشهد بالكتاب عملًا كاملًا للصورة العامة، ولا يُستعمل في أي رواية عن المجمع.',
      },
    },
  ],

  objections: [
    {
      id: 'O1',
      statement: {
        en: 'Constantine ordered fifty Bibles, and the Bible he had made is the one we have. The emperor therefore decided what went into it.',
        ar: 'أمر قسطنطين بخمسين نسخة من الكتاب المقدس، والكتاب الذي صُنع له هو الذي بين أيدينا. فالإمبراطور هو الذي قرر ما يدخل فيه.',
      },
      response: {
        en: [
          'The report we have, from Eusebius, is that the emperor asked for copies of the Scriptures to be made for the churches in Constantinople, with attention to their quality. It does not say that he chose the books. The books to be copied were those already used in the churches. No such copies survive that can be identified, so the claim that the Bible “he had made” is the one we have cannot be shown.',
          'Constantine played a large part in calling and supporting the council, and the Church honours his protection of Christians, but the sources do not show him deciding what is Scripture.',
        ],
        ar: [
          'الخبر الذي بين أيدينا، عن أوسابيوس، أن الإمبراطور طلب نسخ الكتب المقدسة لكنائس القسطنطينية مع العناية بجودتها. ولا يقول إنه اختار الأسفار. فالأسفار التي تُنسخ هي التي كانت مستعملة في الكنائس أصلًا. ولا تبقى نسخ يمكن تحديدها على أنها تلك، فلا يمكن إثبات القول إن الكتاب «الذي صنعه» هو الذي بين أيدينا.',
          'وقد كان لقسطنطين دور كبير في دعوة المجمع ودعمه، وتكرّم الكنيسة حمايته للمسيحيين، لكن المصادر لا تُظهره يقرر ما هو الكتاب المقدس.',
        ],
      },
      limits: {
        en: 'We do not know the exact contents of the commissioned copies. The answer shows only that the report does not say what the objection claims.',
        ar: 'لا نعرف محتوى النسخ المكلَّف بها بالضبط. ويبيّن الجواب فقط أن الخبر لا يقول ما يدعيه الاعتراض.',
      },
      evidence: ['E2'],
    },
    {
      id: 'O2',
      statement: {
        en: 'Nicaea decided that Jesus is God, and the canon was then shaped to support that decision. The Gospels that did not fit were dropped.',
        ar: 'قرر نيقية أن يسوع هو الله، ثم شُكّل القانون ليدعم ذلك القرار. وأُسقطت الأناجيل التي لا تلائمه.',
      },
      response: {
        en: [
          'The belief that Christ is divine is expressed in texts that existed before the council, among them the prologue of John and the letters of St Paul, and the Arian party appealed to the same books. A canon shaped to remove the opponents’ texts would not have kept John 14:28, which was one of their favourite verses.',
          'Historians also point out that the writings left outside the canon, such as the Gospel of Thomas, are not Arian documents. They belong to other currents, and the question of why they were not received is treated in the article on noncanonical gospels.',
        ],
        ar: [
          'إن الإيمان بأن المسيح إله معبَّر عنه في نصوص سابقة للمجمع، منها مطلع يوحنا ورسائل القديس بولس، وقد احتج الحزب الآريوسي بالأسفار نفسها. وقانون يُشكَّل لإزالة نصوص الخصوم ما كان ليُبقي يوحنا ١٤: ٢٨ الذي كان من آياتهم المفضلة.',
          'ويشير المؤرخون أيضًا إلى أن الكتابات الخارجة عن القانون، مثل إنجيل توما، ليست وثائق آريوسية. إنها من تيارات أخرى، وسؤال لماذا لم تُقبل تعالجه مقالة الأناجيل غير القانونية.',
        ],
      },
      limits: {
        en: 'This does not show the council’s doctrine is true. It answers only the claim that the canon was altered to fit it.',
        ar: 'لا يثبت هذا صحة عقيدة المجمع، بل يجيب فقط عن دعوى تعديل القانون ليوافقها.',
      },
    },
    {
      id: 'O3',
      statement: {
        en: 'The records of Nicaea are incomplete, so you cannot say what the bishops did or did not discuss.',
        ar: 'سجلات نيقية ناقصة، فلا يمكنك أن تقول ما ناقشه الأساقفة وما لم يناقشوه.',
      },
      response: {
        en: [
          'The records are indeed incomplete: we have no full minutes, and the accounts come from participants and later writers. What we can say is that none of the accounts we have, including those of Athanasius, mentions a decision on the canon, and that the later history of the lists, with councils and letters in the fourth century setting out their own lists, is hard to explain if the matter had already been settled at Nicaea.',
          'The claim that it was can only be held on the basis of a source that has not been produced.',
        ],
        ar: [
          'السجلات ناقصة فعلًا: فليس لدينا محاضر كاملة، والروايات من مشاركين وكتّاب لاحقين. وما نستطيع قوله إن أيًّا من الروايات التي لدينا، ومنها روايات أثناسيوس، لا يذكر قرارًا بشأن القانون، وإن التاريخ اللاحق للقوائم، بمجامع ورسائل في القرن الرابع تعرض قوائمها، يصعب تفسيره لو كان الأمر قد حُسم في نيقية.',
          'ولا يمكن التمسك بالزعم إلا على أساس مصدر لم يُقدَّم.',
        ],
      },
      limits: {
        en: 'It remains an argument from the absence of evidence, which cannot exclude an undiscovered report.',
        ar: 'تبقى حجة من غياب الدليل، ولا تستبعد خبرًا لم يُكتشف.',
      },
      evidence: ['E1', 'E2'],
    },
  ],

  christianResponse: {
    historical: {
      en: [
        'Historically, a Christian can say that Nicaea dealt with the divinity of the Son, the date of Easter and church order; that the Gospels and the letters were in use in worship long before; and that the lists of the fourth century were made by individual bishops and regional councils over the following decades.',
        'It is right to add that the fourth century was a period when the edges of the canon were still being discussed in some regions, and that the records of the council are not complete.',
      ],
      ar: [
        'يستطيع المسيحي تاريخيًا أن يقول إن نيقية تناول لاهوت الابن وموعد الفصح والنظام الكنسي، وإن الأناجيل والرسائل كانت مستعملة في العبادة من قبل بزمن طويل، وإن قوائم القرن الرابع وضعها أساقفة أفراد ومجامع إقليمية في العقود التالية.',
        'ومن الإنصاف أن يضيف أن القرن الرابع كان زمنًا ما زالت فيه أطراف القانون موضع نقاش في بعض الأقاليم، وأن سجلات المجمع ليست كاملة.',
      ],
    },
    theological: {
      en: [
        'The Church confesses that the faith defined at Nicaea is the faith of the apostles, held from the beginning and defended against Arius. The Scriptures were not the product of the council; they were the standard by which the council judged the question put to it.',
        'On this view, the council and the canon are two moments of one life in which the Church holds the received faith, and the Spirit’s guidance is claimed for each of them in its own way.',
      ],
      ar: [
        'تعترف الكنيسة بأن الإيمان الذي حُدِّد في نيقية هو إيمان الرسل المحفوظ منذ البدء والمدافَع عنه ضد آريوس. ولم تكن الكتب المقدسة نتاج المجمع؛ بل كانت المعيار الذي حكم به المجمع في المسألة المعروضة عليه.',
        'وبحسب هذا الفهم فإن المجمع والقانون لحظتان من حياة واحدة تحفظ فيها الكنيسة الإيمان المسلَّم، ويُدّعى إرشاد الروح لكل منهما على طريقته.',
      ],
    },
  },
  coptic: {
    en: [
      'The Coptic Church honours the Council of Nicaea as the first of the three ecumenical councils she receives, and she remembers it with the name of the 318. Alexander, the nineteenth pope of Alexandria, took a leading part, and his deacon Athanasius, later the twentieth pope, became the great defender of its faith. The Nicene Creed is prayed in every Coptic liturgy.',
      'The Coptic Church also remembers Athanasius for his Festal Letter of AD 367. In it a pope of Alexandria, writing to his own flock, gave the list of the New Testament books and warned against invented writings. That letter, and not the council, is where the Coptic tradition looks for the early list, and it was a pastoral act of a bishop rather than the decree of an assembly.',
    ],
    ar: [
      'تكرّم الكنيسة القبطية مجمع نيقية أولَ المجامع المسكونية الثلاثة التي تقبلها، وتذكره باسم مجمع الـ٣١٨. وقد كان لألكسندروس البابا التاسع عشر للإسكندرية دور بارز، وصار شماسه أثناسيوس، الذي صار البابا العشرين، المدافع العظيم عن إيمانه. ويُصلّى قانون الإيمان النيقاوي في كل ليتورجيا قبطية.',
      'وتذكر الكنيسة القبطية أثناسيوس أيضًا لرسالته الفصحية لسنة ٣٦٧م. ففيها أعطى بابا الإسكندرية، وهو يكتب إلى شعبه، قائمة أسفار العهد الجديد وحذّر من الكتابات المختلقة. وتلك الرسالة، لا المجمع، هي ما يبحث عنه التقليد القبطي بوصفه القائمة المبكرة، وكانت عملًا رعويًا لأسقف لا قرار جمعية.',
    ],
  },
  disputed: {
    en: [
      'Disputed among historians: the exact course of the proceedings at Nicaea, the number of canons, the degree of Constantine’s influence on the council, and the details of the Arian party’s own teaching.',
      'Disputed between traditions: the status of the councils after Nicaea. The Coptic Church receives the first three ecumenical councils and does not accept the Council of Chalcedon.',
      'Not disputed in this article: that no ancient account reports a decision on the biblical canon at Nicaea.',
    ],
    ar: [
      'مختلف عليه بين المؤرخين: المسار الدقيق لأعمال نيقية، وعدد القوانين، ومدى تأثير قسطنطين في المجمع، وتفاصيل تعليم الحزب الآريوسي نفسه.',
      'مختلف عليه بين التقاليد: مكانة المجامع التي تلت نيقية. فالكنيسة القبطية تقبل المجامع المسكونية الثلاثة الأولى ولا تقبل مجمع خلقيدونية.',
      'غير مختلف عليه في هذا المقال: أنه لا توجد رواية قديمة تذكر قرارًا بشأن قانون الكتاب المقدس في نيقية.',
    ],
  },
  conclusion: {
    en: 'The Council of Nicaea defined the faith about the Son against Arius, and it did not decide which books are in the Bible. The Scriptures were already in use as the common authority on which the council argued, and the earliest well-known list of the New Testament was given by Athanasius four decades later.',
    ar: 'حدد مجمع نيقية الإيمان بالابن في مواجهة آريوس، ولم يقرر أي الأسفار في الكتاب المقدس. كانت الكتب المقدسة مستعملة أصلًا مرجعًا مشتركًا احتج به المجمع، وأعطى أثناسيوس أول قائمة معروفة للعهد الجديد بعد أربعة عقود.',
  },
  furtherReading: ['S20', 'S29', 'S30'],
  related: ['who-chose-the-books', 'what-happened-at-nicaea', 'why-these-books', 'noncanonical-gospels', 'early-christology-development'],
};
