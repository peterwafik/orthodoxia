/**
 * The reading plans' page text in both languages, the addresses of plan pages, and the build-time view of one day:
 * everything a day page needs, worked out once (passages for each pace, the links behind "Go deeper", the glossary
 * words, whether the block is still a draft and whether it draws on Fr. Tadros Malaty's commentary).
 */
import type { DeeperLink, Plan, PlanBlock } from '@orthodoxia/content-schema';
import { localePath, type Locale } from '../../i18n/index.ts';
import { apoPath } from '../apologetics/index.ts';
import { PLACE_BY_ID } from '../../data/bible-atlas/places.ts';
import { QUESTIONS } from '../../data/apologetics/questions.ts';
import { loadArabicNames, loadPeople } from '../bible-history/payload.ts';
import { LIVE_PLANS, WORDS, planDays, type PlanDay } from './load.ts';
import { passageVerses, refHref, refLabel, type PassageVerse } from './passage.ts';
import type { Pace } from './profile.ts';

export const plansPath = (locale: Locale): string => localePath(locale, 'plans');
export const planPath = (locale: Locale, planId: string): string => localePath(locale, `plans/${planId}`);
export const dayPath = (locale: Locale, planId: string, index: number): string => localePath(locale, `plans/${planId}/day-${index + 1}`);

const numbers = { en: new Intl.NumberFormat('en-US'), ar: new Intl.NumberFormat('ar-EG') };
export const num = (locale: Locale, value: number): string => numbers[locale].format(value);

export const PLAN_UI = {
  en: {
    title: 'Reading plans',
    description: 'Bible reading plans that fit you: answer four questions, then read a little each day, one idea at a time.',
    lede: 'Answer four quick questions and get a plan that fits you. Each day is a few short cards: why it matters, the passage, what it means, and one thing to think about.',
    quizTitle: 'Find your plan',
    qInterest: 'What pulls you in most?',
    qPace: 'How much time on a normal day?',
    qStyle: 'Which sounds most like you?',
    qExperience: 'Have you read the Bible before?',
    interests: { story: 'Stories', people: 'People', places: 'Places and maps', questions: 'Big questions', life: 'Advice for life', church: 'Keeping step with church', start: 'I just want to start' },
    paces: { 5: '5 minutes', 15: '15 minutes', 30: '30 minutes' },
    styles: {
      explorer: ['Explorer', 'Curious; follows one link to the next'],
      achiever: ['Achiever', 'Likes a goal and seeing progress'],
      reflector: ['Reflector', 'Quiet; likes to sit with one thought'],
      connector: ['Connector', 'Keeps going when a friend is in it too'],
    },
    experiences: { new: 'Never', some: 'Bits of it', lots: 'A lot' },
    yourPlan: 'Your plan',
    start: 'Start',
    startDay: (n: string) => `Start with day ${n}`,
    continue: 'Continue',
    continueDay: (plan: string, n: string) => `Continue: ${plan} · Day ${n}`,
    eachDay: { 5: 'a short passage, about ten verses', 15: 'a full section', 30: 'the whole chapter, with the commentary one tap away' },
    extras: { explorer: 'a “Go deeper” card with links', achiever: 'a progress card and a quick question', reflector: 'a private one-line journal', connector: 'a card to send the day to a friend' },
    levels: { new: 'Hard words are explained as you go.', some: 'Hard words are explained when you tap them.', lots: 'Fewer explanations, more links to go deeper.' },
    eachDayIs: 'Each day:',
    allPlans: 'All plans',
    days: (n: string) => `${n} days`,
    perSeason: 'Follows the season',
    choose: 'Choose this plan',
    clear: 'Clear my plan data',
    cleared: 'Your plan data on this device has been cleared.',
    privacy: 'Your answers and progress stay on this device. Nothing is sent anywhere.',
    none: 'The first plans are being written and checked. Please come back soon.',
    noScript: 'The quiz needs JavaScript. You can still choose a plan below.',
    overview: 'Plan overview',
    day: (n: string) => `Day ${n}`,
    dayOf: (n: string, total: string) => `Day ${n} of ${total}`,
    cardOf: (n: string, total: string) => `Card ${n} of ${total}`,
    next: 'Next',
    back: 'Back',
    hook: 'Why it matters',
    read: 'Read',
    understand: 'Understand',
    think: 'Think',
    deeper: 'Go deeper',
    progress: 'Your progress',
    check: 'Quick question',
    journal: 'Keep one line',
    journalNote: 'Write one sentence for yourself. It stays on this device only.',
    journalLabel: 'Your line for today',
    together: 'Read together',
    togetherNote: 'Send this day to a friend. You can both read it and compare your answers to “Think”.',
    share: 'Send to a friend',
    copied: 'Link copied',
    openReader: 'Open in the Bible reader',
    withCommentary: 'Read with commentary',
    done: 'Done',
    markDone: 'Mark today done',
    markedDone: 'Day done. Well done for taking the time.',
    tomorrow: 'Next time:',
    finished: 'You have finished this plan.',
    toOverview: 'See the whole plan',
    draft: 'Draft',
    draftNote: 'The notes around the Bible text were drafted with AI help and have not yet been reviewed. The Bible text itself is unchanged.',
    malaty: 'Drawn from Fr. Tadros Malaty’s commentary',
    words: 'Words',
    smaller: 'Smaller text',
    larger: 'Larger text',
    sections: 'Sections',
    todayInSeason: (season: string, n: string) => `Today is day ${n} of ${season}.`,
    readToday: 'Read today’s day',
    notWrittenYet: (n: string) => `Today’s day is not written yet. The plan reaches day ${n} so far.`,
    nextSeason: (season: string, date: string) => `${season} begins on ${date}. Until then, try another plan.`,
    ofPlan: 'Part of a reading plan:',
    passageFor: { 5: '5 min', 15: '15 min', 30: '30 min' },
  },
  ar: {
    title: 'خطط القراءة',
    description: 'خطط لقراءة الكتاب المقدس تناسبك: أجب عن أربعة أسئلة، ثم اقرأ قليلًا كل يوم، فكرة واحدة في كل مرة.',
    lede: 'أجب عن أربعة أسئلة سريعة واحصل على خطة تناسبك. كل يوم بطاقات قصيرة: لماذا يهم، والنص، وما معناه، وشيء واحد تفكر فيه.',
    quizTitle: 'اعثر على خطتك',
    qInterest: 'ما الذي يشدّك أكثر؟',
    qPace: 'كم من الوقت في يوم عادي؟',
    qStyle: 'أيها يشبهك أكثر؟',
    qExperience: 'هل قرأت الكتاب المقدس من قبل؟',
    interests: { story: 'القصص', people: 'الأشخاص', places: 'الأماكن والخرائط', questions: 'الأسئلة الكبرى', life: 'نصائح للحياة', church: 'السير مع الكنيسة', start: 'أريد أن أبدأ فقط' },
    paces: { 5: '٥ دقائق', 15: '١٥ دقيقة', 30: '٣٠ دقيقة' },
    styles: {
      explorer: ['المستكشف', 'فضولي، ينتقل من رابط إلى آخر'],
      achiever: ['المنجِز', 'يحب الهدف ورؤية التقدم'],
      reflector: ['المتأمل', 'هادئ، يحب أن يبقى مع فكرة واحدة'],
      connector: ['الاجتماعي', 'يستمر حين يشاركه صديق'],
    },
    experiences: { new: 'أبدًا', some: 'أجزاء منه', lots: 'كثيرًا' },
    yourPlan: 'خطتك',
    start: 'ابدأ',
    startDay: (n: string) => `ابدأ باليوم ${n}`,
    continue: 'تابع',
    continueDay: (plan: string, n: string) => `تابع: ${plan} · اليوم ${n}`,
    eachDay: { 5: 'نص قصير، نحو عشر آيات', 15: 'جزء كامل', 30: 'الأصحاح كله، والتفسير على بُعد لمسة' },
    extras: { explorer: 'بطاقة «تعمّق أكثر» بروابط', achiever: 'بطاقة تقدّم وسؤال سريع', reflector: 'سطر خاص تكتبه لنفسك', connector: 'بطاقة لترسل اليوم إلى صديق' },
    levels: { new: 'تُشرح الكلمات الصعبة أثناء القراءة.', some: 'تُشرح الكلمات الصعبة حين تلمسها.', lots: 'شرح أقل وروابط أكثر للتعمق.' },
    eachDayIs: 'كل يوم:',
    allPlans: 'كل الخطط',
    days: (n: string) => `${n} يومًا`,
    perSeason: 'تتبع الزمن الكنسي',
    choose: 'اختر هذه الخطة',
    clear: 'امسح بيانات خطتي',
    cleared: 'مُسحت بيانات خطتك من هذا الجهاز.',
    privacy: 'إجاباتك وتقدّمك تبقى على هذا الجهاز. لا يُرسل شيء إلى أي مكان.',
    none: 'تُكتب الخطط الأولى وتُراجع الآن. عد قريبًا من فضلك.',
    noScript: 'يحتاج الاختبار إلى جافاسكربت. ويمكنك أن تختار خطة من الأسفل.',
    overview: 'نظرة على الخطة',
    day: (n: string) => `اليوم ${n}`,
    dayOf: (n: string, total: string) => `اليوم ${n} من ${total}`,
    cardOf: (n: string, total: string) => `البطاقة ${n} من ${total}`,
    next: 'التالي',
    back: 'السابق',
    hook: 'لماذا يهم',
    read: 'اقرأ',
    understand: 'افهم',
    think: 'فكّر',
    deeper: 'تعمّق أكثر',
    progress: 'تقدّمك',
    check: 'سؤال سريع',
    journal: 'احتفظ بسطر',
    journalNote: 'اكتب جملة واحدة لنفسك. تبقى على هذا الجهاز فقط.',
    journalLabel: 'سطرك لليوم',
    together: 'اقرأوا معًا',
    togetherNote: 'أرسل هذا اليوم إلى صديق. اقرآه معًا وقارنا إجابتيكما عن «فكّر».',
    share: 'أرسل إلى صديق',
    copied: 'نُسخ الرابط',
    openReader: 'افتح في قارئ الكتاب المقدس',
    withCommentary: 'اقرأ مع التفسير',
    done: 'تم',
    markDone: 'تمّت قراءة اليوم',
    markedDone: 'انتهى اليوم. أحسنت لأنك خصصت الوقت.',
    tomorrow: 'في المرة القادمة:',
    finished: 'أكملت هذه الخطة.',
    toOverview: 'شاهد الخطة كلها',
    draft: 'مسودة',
    draftNote: 'كُتبت الملاحظات حول نص الكتاب المقدس بمساعدة الذكاء الاصطناعي ولم تُراجع بعد. أما نص الكتاب المقدس نفسه فلم يتغير.',
    malaty: 'مأخوذ من تفسير القمص تادرس يعقوب ملطي',
    words: 'كلمات',
    smaller: 'تصغير النص',
    larger: 'تكبير النص',
    sections: 'الأقسام',
    todayInSeason: (season: string, n: string) => `اليوم هو اليوم ${n} من ${season}.`,
    readToday: 'اقرأ يوم اليوم',
    notWrittenYet: (n: string) => `يوم اليوم لم يُكتب بعد. تصل الخطة حتى الآن إلى اليوم ${n}.`,
    nextSeason: (season: string, date: string) => `يبدأ ${season} في ${date}. وحتى ذلك الحين، جرّب خطة أخرى.`,
    ofPlan: 'جزء من خطة قراءة:',
    passageFor: { 5: '٥ دقائق', 15: '١٥ دقيقة', 30: '٣٠ دقيقة' },
  },
} as const;

export interface DeeperView {
  readonly label: string;
  readonly kind: DeeperLink['kind'];
  readonly href: string;
}

let people: Map<string, string> | null = null;
function personName(key: string, locale: Locale): string {
  people ??= new Map(loadPeople().map((person) => [person.k, person.n]));
  if (locale === 'ar') return loadArabicNames()[key] ?? people.get(key) ?? key;
  return people.get(key) ?? key;
}

export function deeperView(link: DeeperLink, locale: Locale): DeeperView {
  switch (link.kind) {
    case 'verse':
      return { kind: 'verse', label: refLabel(link.ref, locale), href: refHref(link.ref, locale) };
    case 'place': {
      const place = PLACE_BY_ID.get(link.id);
      return { kind: 'place', label: place?.name[locale] ?? link.id, href: `${localePath(locale, 'bible-atlas')}#place=${link.id}` };
    }
    case 'person':
      return { kind: 'person', label: personName(link.key, locale), href: `${localePath(locale, 'bible-history')}?p=${encodeURIComponent(link.key)}` };
    case 'question': {
      const question = QUESTIONS.find((candidate) => candidate.slug === link.slug);
      return { kind: 'question', label: question?.title[locale] ?? link.slug, href: apoPath(locale, `questions/${link.slug}`) };
    }
  }
}

export interface PassageView {
  readonly pace: Pace;
  readonly label: string;
  readonly href: string;
  readonly verses: readonly PassageVerse[];
}

export interface DayView {
  readonly block: PlanBlock;
  readonly index: number;
  readonly total: number;
  readonly passages: readonly PassageView[];
  readonly deeper: readonly DeeperView[];
  readonly words: readonly { id: string; term: string; definition: string }[];
  readonly draft: boolean;
  readonly malaty: boolean;
  readonly next: PlanDay | undefined;
}

export function dayView(plan: Plan, day: PlanDay, locale: Locale): DayView {
  const days = planDays(plan);
  const { block } = day;
  const passages = ([[5, block.passages.short], [15, block.passages.full], [30, block.passages.deep]] as const).map(([pace, ref]) => ({
    pace,
    label: refLabel(ref, locale),
    href: refHref(ref, locale),
    verses: passageVerses(ref, locale),
  }));
  return {
    block,
    index: day.index,
    total: days.length,
    passages,
    deeper: block.deeper.map((link) => deeperView(link, locale)),
    words: block.words.flatMap((id) => {
      const word = WORDS.get(id);
      return word === undefined ? [] : [{ id, term: word.term[locale], definition: word.definition[locale] }];
    }),
    draft: block.review.status !== 'published' && block.review.status !== 'reviewed',
    malaty: block.sources.includes('malaty-commentary'),
    next: days[day.index + 1],
  };
}

/** One path per live plan day per language, for the day pages. */
export function dayPaths(locales: readonly Locale[]): { params: { lang: Locale; plan: string; day: string } }[] {
  return locales.flatMap((lang) =>
    LIVE_PLANS.flatMap((plan) => planDays(plan).map((day) => ({ params: { lang, plan: plan.id, day: `day-${day.index + 1}` } }))),
  );
}
