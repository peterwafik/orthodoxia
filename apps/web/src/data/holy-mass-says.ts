/**
 * Who does what at each stop, in one plain sentence per speaker. These are original summaries written
 * for this site, NOT prayer texts and not quotations of any liturgy. They have not been reviewed by
 * clergy. A speaker who is absent from a stop says nothing there. Real, authorized prayer texts will
 * replace or sit beside them, stop by stop (docs/HOLY_MASS.md).
 */
export type Says = readonly [en: string, ar: string];

export interface StopSays {
  readonly priest?: Says;
  readonly deacon?: Says;
  readonly people?: Says;
}

export const SAYS: Readonly<Record<string, StopSays>> = {
  vesting: {
    priest: ['Prays quietly as he vests, asking to be made worthy of the service.', 'يصلّي سرًّا وهو يلبس الملابس، طالبًا أن يكون أهلًا للخدمة.'],
    deacon: ['Put on their own vestments and prepare the church.', 'يلبسون ملابسهم ويهيّئون الكنيسة.'],
  },
  'choosing-the-lamb': {
    priest: ['Chooses the loaf for the Lamb and prays as it is set apart.', 'يختار الخبزة التي ستصير الحمل ويصلّي وهي تُفرَز.'],
    deacon: ['Help prepare the wine and water for the chalice.', 'يساعدون في تهيئة الخمر والماء للكأس.'],
  },
  'procession-of-the-lamb': {
    priest: ['Carries the Lamb and the chalice around the altar, praying.', 'يحمل الحمل والكأس حول المذبح وهو يصلّي.'],
    deacon: ['Walk ahead with the censer and the candles.', 'يسيرون أمامه بالمجمرة والشموع.'],
    people: ['Sing as the offerings are carried.', 'يرتّلون بينما تُحمل القرابين.'],
  },
  'blessing-of-the-oblations': {
    priest: ['Covers the offerings and prays over them, entrusting them to God.', 'يغطّي القرابين ويصلّي عليها مسلِّمًا إيّاها لله.'],
  },
  thanksgiving: {
    priest: ['Greets the people with peace and prays the prayer of thanksgiving, then the prayer of the Prothesis.', 'يحيّي الشعب بالسلام ويصلّي صلاة الشكر ثم صلاة التقدمة.'],
    deacon: ['Calls the people to stand and pray.', 'ينادي الشعب أن يقفوا ويصلّوا.'],
    people: ['Answer the priest’s greeting.', 'يردّون على تحية الكاهن.'],
  },
  absolutions: {
    priest: ['Quietly prays the absolutions for himself and for those who serve at the altar.', 'يصلّي سرًّا التحاليل عن نفسه وعن الخادمين حول المذبح.'],
  },
  'entering-the-word': {
    priest: ['Leads the opening prayers of the first half of the Liturgy.', 'يقود الصلوات الافتتاحية للنصف الأول من القداس.'],
    deacon: ['Lead the responses and the readings.', 'يقودون الردود والقراءات.'],
    people: ['Join in the psalms and the responses.', 'يشتركون في المزامير والردود.'],
  },
  'incense-before-the-pauline': {
    priest: ['Offers incense and prays that the people’s prayers rise before God.', 'يرفع البخور ويصلّي أن ترتفع صلوات الشعب أمام الله.'],
    deacon: ['Bring the censer and assist him.', 'يحضرون المجمرة ويعاونونه.'],
  },
  'procession-of-incense': {
    priest: ['Circles the altar with the censer and censes the church, the icons and the people.', 'يدور حول المذبح بالمجمرة ويبخّر الكنيسة والأيقونات والشعب.'],
    deacon: ['Walk with him, carrying the candles.', 'يسيرون معه حاملين الشموع.'],
    people: ['Stand as they are censed.', 'يقفون وهم يتبخّرون.'],
  },
  'prayers-during-the-procession': {
    priest: ['Prays quietly for the Church, for peace and for those gathered.', 'يصلّي سرًّا من أجل الكنيسة والسلام والمجتمعين.'],
    people: ['Pray in silence.', 'يصلّون في صمت.'],
  },
  'hymn-of-the-censer': {
    deacon: ['Lead the hymn with the cymbals and the triangle.', 'يقودون التسبحة بالدفّ والمثلّث.'],
    people: ['Sing the hymn of the censer.', 'يرتّلون تسبحة المجمرة.'],
  },
  'hymn-of-the-intercessions': {
    deacon: ['Lead the singing.', 'يقودون الترتيل.'],
    people: ['The choir sings, asking the intercessions of the Virgin and the saints.', 'ترتّل الجوقة طالبةً شفاعة العذراء والقديسين.'],
  },
  trisagion: {
    deacon: ['Lead the singing.', 'يقودون الترتيل.'],
    people: ['Sing “Holy God, Holy Mighty, Holy Immortal, have mercy on us”.', 'يرتّلون «قدوس الله، قدوس القوي، قدوس الحي الذي لا يموت، ارحمنا».'],
  },
  'pauline-epistle': {
    deacon: ['Reads or chants the passage from St. Paul.', 'يقرأ أو يرتّل الفصل من رسائل القديس بولس.'],
    people: ['Listen.', 'يستمعون.'],
  },
  'catholic-epistle': {
    deacon: ['Reads the passage from the general epistles.', 'يقرأ الفصل من الرسائل الجامعة.'],
    people: ['Listen.', 'يستمعون.'],
  },
  acts: {
    deacon: ['Reads the passage from the Acts of the Apostles.', 'يقرأ الفصل من أعمال الرسل.'],
    people: ['Listen.', 'يستمعون.'],
  },
  synaxarion: {
    deacon: ['Reads the life of the saint of the day.', 'يقرأ سيرة قديس اليوم.'],
    people: ['Listen.', 'يستمعون.'],
  },
  'psalm-and-alleluia': {
    deacon: ['Chants the psalm.', 'يرتّل المزمور.'],
    people: ['Answer with the Alleluia and stand for the Gospel.', 'يجاوبون بالهلليلويا ويقفون للإنجيل.'],
  },
  'holy-gospel': {
    priest: ['Reads the Gospel, with incense and candles before the book.', 'يقرأ الإنجيل، والبخور والشموع أمام الكتاب.'],
    deacon: ['Calls the people to stand and listen to the Gospel.', 'ينادي الشعب أن يقفوا ويستمعوا إلى الإنجيل.'],
    people: ['Stand and answer with praise.', 'يقفون ويجاوبون بالتسبيح.'],
  },
  homily: {
    priest: ['Explains the readings and applies them to the life of the people.', 'يشرح القراءات ويطبّقها على حياة الشعب.'],
    people: ['Listen.', 'يستمعون.'],
  },
  'prayer-of-the-veil': {
    priest: ['Prays before the sanctuary veil, asking God to accept the people’s prayer and make the worshippers worthy.', 'يصلّي أمام ستر الهيكل طالبًا أن يقبل الله صلاة الشعب وأن يجعل العابدين مستحقين.'],
  },
  'litany-of-peace': {
    priest: ['Concludes the litany with a prayer.', 'يختم الأوشية بصلاة.'],
    deacon: ['Invites the people to pray for the peace of the Church and the world.', 'يدعو الشعب إلى الصلاة من أجل سلام الكنيسة والعالم.'],
    people: ['Answer “Lord, have mercy”.', 'يجاوبون «كيرياليسون».'],
  },
  'litany-of-the-fathers': {
    priest: ['Concludes the litany with a prayer.', 'يختم الأوشية بصلاة.'],
    deacon: ['Calls the people to pray for the Pope, the bishops and the clergy.', 'يدعو الشعب إلى الصلاة من أجل البابا والأساقفة والكهنة.'],
    people: ['Answer “Lord, have mercy”.', 'يجاوبون «كيرياليسون».'],
  },
  'litany-of-the-assemblies': {
    priest: ['Concludes the litany with a prayer.', 'يختم الأوشية بصلاة.'],
    deacon: ['Calls the people to pray for the congregations in every place.', 'يدعو الشعب إلى الصلاة من أجل الاجتماعات في كل مكان.'],
    people: ['Answer “Lord, have mercy”.', 'يجاوبون «كيرياليسون».'],
  },
  creed: {
    deacon: ['Calls everyone to stand for the confession of faith.', 'ينادي الجميع أن يقفوا لإعلان الإيمان.'],
    people: ['Confess the faith together in the Creed.', 'يعترفون معًا بالإيمان في قانون الإيمان.'],
  },
  'washing-of-hands': {
    priest: ['Washes his hands before approaching the offerings.', 'يغسل يديه قبل أن يقترب من القرابين.'],
    deacon: ['Assist with the water.', 'يعاونون بالماء.'],
  },
  'prayer-of-reconciliation': {
    priest: ['Prays that God reconcile His people to Himself and to one another.', 'يصلّي أن يصالح الله شعبه معه ومع بعضهم البعض.'],
    deacon: ['Calls the people to peace.', 'يدعو الشعب إلى السلام.'],
  },
  'kiss-of-peace': {
    priest: ['Greets the deacons with peace.', 'يحيّي الشمامسة بالسلام.'],
    deacon: ['Return the greeting and call the people to greet one another.', 'يردّون التحية ويدعون الشعب إلى أن يسلّم بعضهم على بعض.'],
    people: ['Greet one another with peace.', 'يسلّم بعضهم على بعض بالسلام.'],
  },
  'lift-up-your-hearts': {
    priest: ['Greets the people and calls them to lift up their hearts.', 'يحيّي الشعب ويدعوهم إلى رفع قلوبهم.'],
    deacon: ['Calls the people to stand and attend.', 'ينادي الشعب أن يقفوا وينتبهوا.'],
    people: ['Answer that their hearts are with the Lord.', 'يجاوبون أن قلوبهم عند الرب.'],
  },
  'it-is-fitting-and-right': {
    priest: ['Invites the people to give thanks to the Lord.', 'يدعو الشعب إلى شكر الرب.'],
    people: ['Answer that it is meet and right.', 'يجاوبون أن هذا مستحق وعادل.'],
  },
  'watos-aspasmos': {
    priest: ['Continues the prayer of thanksgiving quietly.', 'يواصل صلاة الشكر سرًّا.'],
    people: ['Sing the solemn hymn.', 'يرتّلون التسبحة الجليلة.'],
  },
  'narrative-of-salvation': {
    priest: ['Recounts God’s works: creation, the fall, the promises and the coming of Christ.', 'يسرد أعمال الله: الخلق والسقوط والمواعيد ومجيء المسيح.'],
    people: ['Listen.', 'يستمعون.'],
  },
  sanctus: {
    deacon: ['Lead the hymn.', 'يقودون التسبحة.'],
    people: ['Sing “Holy, holy, holy”, joining the song of the heavenly hosts.', 'يرتّلون «قدوس، قدوس، قدوس» منضمّين إلى تسبيح الجند السماوي.'],
  },
  'institution-narrative': {
    priest: ['Recalls the Lord’s words at the Last Supper over the bread and the cup.', 'يتذكّر كلمات الرب في العشاء الأخير على الخبز والكأس.'],
    people: ['Answer “Amen”.', 'يجاوبون «آمين».'],
  },
  memorial: {
    priest: ['Recalls Christ’s death, resurrection, ascension and coming again.', 'يتذكّر موت المسيح وقيامته وصعوده ومجيئه ثانيةً.'],
    people: ['Answer in praise.', 'يجاوبون بالتسبيح.'],
  },
  'invocation-of-the-holy-spirit': {
    priest: ['Asks the Father to send the Holy Spirit upon the offerings and the people.', 'يطلب من الآب أن يرسل الروح القدس على القرابين وعلى الشعب.'],
    people: ['Answer “Amen”.', 'يجاوبون «آمين».'],
  },
  'the-intercessions': {
    priest: ['Prays for the Church, the world, the needy and the departed.', 'يصلّي من أجل الكنيسة والعالم والمحتاجين والراقدين.'],
    deacon: ['Calls the people to join in these prayers.', 'يدعو الشعب إلى الاشتراك في هذه الصلوات.'],
    people: ['Answer “Lord, have mercy”.', 'يجاوبون «كيرياليسون».'],
  },
  'commemoration-of-the-saints': {
    priest: ['Commemorates the Virgin Mary, the prophets, the apostles, the martyrs and the saints.', 'يذكر العذراء مريم والأنبياء والرسل والشهداء والقديسين.'],
  },
  'the-diptychs': {
    priest: ['Prays for the Fathers of the Church and the faithful departed.', 'يصلّي من أجل آباء الكنيسة والمؤمنين الراقدين.'],
    deacon: ['Reads their names.', 'يقرأ أسماءهم.'],
  },
  'introduction-to-the-fraction': {
    priest: ['Prepares the Lamb for the fraction.', 'يهيّئ الحمل للقسمة.'],
    deacon: ['Lead the litanies.', 'يقودون الأواشي.'],
    people: ['Make the responses.', 'يقدّمون الردود.'],
  },
  'prayer-of-the-fraction': {
    priest: ['Breaks the consecrated Lamb for distribution.', 'يكسر الحمل المقدّس للتوزيع.'],
  },
  'the-lords-prayer': {
    priest: ['Prays the prayer that follows the Lord’s Prayer.', 'يصلّي الصلاة التي تعقب الصلاة الربانية.'],
    deacon: ['Calls the people to stand and pray.', 'ينادي الشعب أن يقفوا ويصلّوا.'],
    people: ['Pray the Lord’s Prayer together.', 'يصلّون الصلاة الربانية معًا.'],
  },
  'prayer-of-submission': {
    priest: ['Prays quietly, offering the people’s humility to the Father.', 'يصلّي سرًّا مقدّمًا اتضاع الشعب إلى الآب.'],
    deacon: ['Calls the people to bow their heads.', 'ينادي الشعب أن يحنوا رؤوسهم.'],
    people: ['Bow their heads.', 'يحنون رؤوسهم.'],
  },
  'prayer-of-absolution': {
    priest: ['Prays for the forgiveness of sins, so the people may receive the Holy Mysteries worthily.', 'يصلّي لغفران الخطايا ليتناول الشعب الأسرار المقدّسة بإستحقاق.'],
  },
  'the-holies-for-the-holy': {
    priest: ['Raises the Lamb and proclaims “The holies for the holy”.', 'يرفع الحمل ويعلن «القدسات للقديسين».'],
    people: ['Confess the one holiness of the Trinity.', 'يعترفون بقداسة الثالوث الواحدة.'],
  },
  'the-confession': {
    priest: ['Makes the confession of faith, holding the Lamb.', 'يقدّم الاعتراف بالإيمان وهو ممسك بالحمل.'],
    people: ['Answer “Amen”.', 'يجاوبون «آمين».'],
  },
  'before-the-distribution': {
    priest: ['Prays for those who will receive.', 'يصلّي من أجل الذين سيتناولون.'],
    people: ['Prepare in silence and awe.', 'يستعدّون في صمت ورهبة.'],
  },
  'the-distribution': {
    priest: ['Gives the Body and Blood of Christ to those who come forward.', 'يعطي جسد المسيح ودمه للمتقدّمين.'],
    deacon: ['Assist and keep the order.', 'يعاونون ويحفظون النظام.'],
    people: ['Come forward in order and receive, while the choir sings.', 'يتقدّمون بترتيب ويتناولون بينما ترتّل الجوقة.'],
  },
  'psalm-150': {
    deacon: ['Lead the singing with the cymbals.', 'يقودون الترتيل بالدفّ.'],
    people: ['Sing Psalm 150 in praise.', 'يرتّلون المزمور ١٥٠ تسبيحًا.'],
  },
  'thanksgiving-after-communion': {
    priest: ['Prays quiet prayers of thanksgiving and submission to the Father.', 'يصلّي سرًّا صلوات شكر وخضوع للآب.'],
  },
  dismissal: {
    priest: ['Completes the service with the concluding prayers.', 'يُتمّ الخدمة بالصلوات الختامية.'],
    deacon: ['Dismiss the people.', 'يصرفون الشعب.'],
  },
  'the-blessing': {
    priest: ['Blesses the people and sends them in peace.', 'يبارك الشعب ويصرفهم بسلام.'],
    people: ['Receive the blessing and answer “Amen”.', 'يتقبّلون البركة ويجاوبون «آمين».'],
  },
};
