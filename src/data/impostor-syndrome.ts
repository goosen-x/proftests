export interface TestQuestion {
  id: number;
  question: string;
  icon: string;
  options: {
    text: string;
    value: number;
  }[];
  factor:
    | 'self-doubt'
    | 'fear-exposure'
    | 'luck-attribution'
    | 'perfectionism'
    | 'competence-doubt';
}

export interface TestResult {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  advice: string[];
  color: string;
  emoji: string;
  score: {
    min: number;
    max: number;
  };
  factors: {
    selfDoubt: number;
    fearExposure: number;
    luckAttribution: number;
    perfectionism: number;
    competenceDoubt: number;
  };
}

export interface ChartData {
  factor: string;
  score: number;
  fullMark: 100;
}

export const impostorSyndromeQuestions: TestQuestion[] = [
  // Самосомнение (4 вопроса)
  {
    id: 1,
    question: 'Я часто сомневаюсь в правильности своих решений на работе',
    icon: 'HelpCircle',
    factor: 'self-doubt',
    options: [
      { text: 'Никогда', value: 1 },
      { text: 'Редко', value: 2 },
      { text: 'Иногда', value: 3 },
      { text: 'Часто', value: 4 },
      { text: 'Всегда', value: 5 },
    ],
  },
  {
    id: 2,
    question: 'Мне кажется, что другие переоценивают мои способности',
    icon: 'TrendingUp',
    factor: 'self-doubt',
    options: [
      { text: 'Совершенно не согласен', value: 1 },
      { text: 'Не согласен', value: 2 },
      { text: 'Нейтрально', value: 3 },
      { text: 'Согласен', value: 4 },
      { text: 'Полностью согласен', value: 5 },
    ],
  },
  {
    id: 3,
    question: 'Я чувствую себя неуверенно в новых профессиональных ситуациях',
    icon: 'AlertTriangle',
    factor: 'self-doubt',
    options: [
      { text: 'Никогда не чувствую', value: 1 },
      { text: 'Редко чувствую', value: 2 },
      { text: 'Иногда чувствую', value: 3 },
      { text: 'Часто чувствую', value: 4 },
      { text: 'Всегда чувствую', value: 5 },
    ],
  },
  {
    id: 4,
    question: 'Мне трудно принимать комплименты о моей работе',
    icon: 'Heart',
    factor: 'self-doubt',
    options: [
      { text: 'Легко принимаю', value: 1 },
      { text: 'В основном принимаю', value: 2 },
      { text: 'По-разному', value: 3 },
      { text: 'Трудно принимать', value: 4 },
      { text: 'Очень трудно', value: 5 },
    ],
  },

  // Страх разоблачения (4 вопроса)
  {
    id: 5,
    question: 'Я боюсь, что коллеги обнаружат мою некомпетентность',
    icon: 'Eye',
    factor: 'fear-exposure',
    options: [
      { text: 'Никогда не боюсь', value: 1 },
      { text: 'Редко боюсь', value: 2 },
      { text: 'Иногда боюсь', value: 3 },
      { text: 'Часто боюсь', value: 4 },
      { text: 'Постоянно боюсь', value: 5 },
    ],
  },
  {
    id: 6,
    question: 'Я избегаю брать на себя ответственность за важные проекты',
    icon: 'Shield',
    factor: 'fear-exposure',
    options: [
      { text: 'Никогда не избегаю', value: 1 },
      { text: 'Редко избегаю', value: 2 },
      { text: 'Иногда избегаю', value: 3 },
      { text: 'Часто избегаю', value: 4 },
      { text: 'Всегда избегаю', value: 5 },
    ],
  },
  {
    id: 7,
    question: "Мне кажется, что рано или поздно мою 'истинную' некомпетентность раскроют",
    icon: 'Search',
    factor: 'fear-exposure',
    options: [
      { text: 'Никогда не думаю так', value: 1 },
      { text: 'Редко думаю так', value: 2 },
      { text: 'Иногда думаю так', value: 3 },
      { text: 'Часто думаю так', value: 4 },
      { text: 'Постоянно думаю так', value: 5 },
    ],
  },
  {
    id: 8,
    question: 'Я волнуюсь, что не оправдаю ожидания других',
    icon: 'Target',
    factor: 'fear-exposure',
    options: [
      { text: 'Никогда не волнуюсь', value: 1 },
      { text: 'Редко волнуюсь', value: 2 },
      { text: 'Иногда волнуюсь', value: 3 },
      { text: 'Часто волнуюсь', value: 4 },
      { text: 'Постоянно волнуюсь', value: 5 },
    ],
  },

  // Приписывание успеха удаче (4 вопроса)
  {
    id: 9,
    question: 'Мои успехи - это результат удачи или везения',
    icon: 'Shuffle',
    factor: 'luck-attribution',
    options: [
      { text: 'Совершенно не согласен', value: 1 },
      { text: 'Не согласен', value: 2 },
      { text: 'Нейтрально', value: 3 },
      { text: 'Согласен', value: 4 },
      { text: 'Полностью согласен', value: 5 },
    ],
  },
  {
    id: 10,
    question: 'Когда я добиваюсь успеха, это потому что задача была легкой',
    icon: 'ChevronDown',
    factor: 'luck-attribution',
    options: [
      { text: 'Никогда не думаю так', value: 1 },
      { text: 'Редко думаю так', value: 2 },
      { text: 'Иногда думаю так', value: 3 },
      { text: 'Часто думаю так', value: 4 },
      { text: 'Всегда думаю так', value: 5 },
    ],
  },
  {
    id: 11,
    question: 'Я считаю, что оказался на своей позиции случайно',
    icon: 'MapPin',
    factor: 'luck-attribution',
    options: [
      { text: 'Совершенно не считаю', value: 1 },
      { text: 'Не считаю', value: 2 },
      { text: 'Затрудняюсь ответить', value: 3 },
      { text: 'Считаю', value: 4 },
      { text: 'Определенно считаю', value: 5 },
    ],
  },
  {
    id: 12,
    question: 'Мне трудно поверить, что мои достижения заслуженны',
    icon: 'Award',
    factor: 'luck-attribution',
    options: [
      { text: 'Легко верю', value: 1 },
      { text: 'В основном верю', value: 2 },
      { text: 'По-разному', value: 3 },
      { text: 'Трудно поверить', value: 4 },
      { text: 'Очень трудно', value: 5 },
    ],
  },

  // Перфекционизм (4 вопроса)
  {
    id: 13,
    question: 'Я чувствую себя неудачником, если не достигаю совершенства в работе',
    icon: 'Star',
    factor: 'perfectionism',
    options: [
      { text: 'Никогда не чувствую', value: 1 },
      { text: 'Редко чувствую', value: 2 },
      { text: 'Иногда чувствую', value: 3 },
      { text: 'Часто чувствую', value: 4 },
      { text: 'Всегда чувствую', value: 5 },
    ],
  },
  {
    id: 14,
    question: 'Я трачу слишком много времени на задачи, стремясь сделать их идеально',
    icon: 'Clock',
    factor: 'perfectionism',
    options: [
      { text: 'Никогда не трачу', value: 1 },
      { text: 'Редко трачу', value: 2 },
      { text: 'Иногда трачу', value: 3 },
      { text: 'Часто трачу', value: 4 },
      { text: 'Всегда трачу', value: 5 },
    ],
  },
  {
    id: 15,
    question: 'Малейшая ошибка заставляет меня сомневаться во всех своих способностях',
    icon: 'AlertCircle',
    factor: 'perfectionism',
    options: [
      { text: 'Никогда не заставляет', value: 1 },
      { text: 'Редко заставляет', value: 2 },
      { text: 'Иногда заставляет', value: 3 },
      { text: 'Часто заставляет', value: 4 },
      { text: 'Всегда заставляет', value: 5 },
    ],
  },
  {
    id: 16,
    question: 'Я откладываю задачи, боясь не выполнить их на высшем уровне',
    icon: 'Pause',
    factor: 'perfectionism',
    options: [
      { text: 'Никогда не откладываю', value: 1 },
      { text: 'Редко откладываю', value: 2 },
      { text: 'Иногда откладываю', value: 3 },
      { text: 'Часто откладываю', value: 4 },
      { text: 'Всегда откладываю', value: 5 },
    ],
  },

  // Сомнения в компетентности (4 вопроса)
  {
    id: 17,
    question: 'Я чувствую, что знаю меньше, чем должен знать для своей позиции',
    icon: 'Book',
    factor: 'competence-doubt',
    options: [
      { text: 'Никогда не чувствую', value: 1 },
      { text: 'Редко чувствую', value: 2 },
      { text: 'Иногда чувствую', value: 3 },
      { text: 'Часто чувствую', value: 4 },
      { text: 'Постоянно чувствую', value: 5 },
    ],
  },
  {
    id: 18,
    question: 'Мне кажется, что коллеги намного компетентнее меня',
    icon: 'Users',
    factor: 'competence-doubt',
    options: [
      { text: 'Никогда не кажется', value: 1 },
      { text: 'Редко кажется', value: 2 },
      { text: 'Иногда кажется', value: 3 },
      { text: 'Часто кажется', value: 4 },
      { text: 'Всегда кажется', value: 5 },
    ],
  },
  {
    id: 19,
    question: 'Я боюсь задавать вопросы, чтобы не показаться некомпетентным',
    icon: 'MessageCircle',
    factor: 'competence-doubt',
    options: [
      { text: 'Никогда не боюсь', value: 1 },
      { text: 'Редко боюсь', value: 2 },
      { text: 'Иногда боюсь', value: 3 },
      { text: 'Часто боюсь', value: 4 },
      { text: 'Всегда боюсь', value: 5 },
    ],
  },
  {
    id: 20,
    question:
      "Я постоянно изучаю дополнительную информацию, чтобы чувствовать себя 'достойным' своей роли",
    icon: 'Lightbulb',
    factor: 'competence-doubt',
    options: [
      { text: 'Никогда не делаю этого', value: 1 },
      { text: 'Редко делаю', value: 2 },
      { text: 'Иногда делаю', value: 3 },
      { text: 'Часто делаю', value: 4 },
      { text: 'Постоянно делаю', value: 5 },
    ],
  },
];

export const impostorSyndromeResults: TestResult[] = [
  {
    id: 'no-impostor',
    name: 'Отсутствие синдрома самозванца',
    emoji: '🌟',
    color: 'green',
    description:
      'У вас здоровая самооценка и уверенность в своих способностях. Вы адекватно оцениваете свои достижения и не склонны к самоуничижению. Вы понимаете свою ценность и заслуженность успехов.',
    characteristics: [
      'Здоровая самооценка и уверенность',
      'Адекватная оценка своих способностей',
      'Принятие комплиментов и признания',
      'Готовность брать на себя ответственность',
    ],
    advice: [
      'Продолжайте развивать свои навыки',
      'Помогайте другим обрести уверенность',
      'Делитесь опытом с менее уверенными коллегами',
      'Стремитесь к новым вызовам в карьере',
      'Поддерживайте других в преодолении самосомнений',
    ],
    score: { min: 20, max: 40 },
    factors: {
      selfDoubt: 20,
      fearExposure: 20,
      luckAttribution: 20,
      perfectionism: 20,
      competenceDoubt: 20,
    },
  },
  {
    id: 'mild-impostor',
    name: 'Легкие проявления синдрома самозванца',
    emoji: '🌤️',
    color: 'blue',
    description:
      'Время от времени вы испытываете сомнения в своих способностях, но в целом имеете здоровое отношение к себе и своим достижениям. Периодические самосомнения - это нормальная часть человеческого опыта.',
    characteristics: [
      'Периодические сомнения в способностях',
      'В целом адекватная самооценка',
      'Способность преодолевать неуверенность',
      'Понимание своих сильных сторон',
    ],
    advice: [
      'Отмечайте и записывайте свои достижения',
      'Практикуйте позитивные аффирмации',
      'Развивайте навыки самопринятия',
      'Окружайте себя поддерживающими людьми',
      'Помните о своих прошлых успехах',
    ],
    score: { min: 41, max: 60 },
    factors: {
      selfDoubt: 40,
      fearExposure: 35,
      luckAttribution: 35,
      perfectionism: 35,
      competenceDoubt: 40,
    },
  },
  {
    id: 'moderate-impostor',
    name: 'Умеренный синдром самозванца',
    emoji: '⛅',
    color: 'yellow',
    description:
      'Вы регулярно испытываете сомнения в своей компетентности и склонны приписывать успехи внешним факторам. Это может ограничивать ваш потенциал и создавать дополнительный стресс в профессиональной деятельности.',
    characteristics: [
      'Регулярные сомнения в компетентности',
      'Приписывание успехов удаче',
      'Страх не оправдать ожидания',
      'Перфекционистские тенденции',
    ],
    advice: [
      'Ведите дневник успехов и достижений',
      'Работайте с психологом или коучем',
      'Практикуйте техники управления тревожностью',
      'Изучайте когнитивно-поведенческие методы',
      'Присоединитесь к группам поддержки',
    ],
    score: { min: 61, max: 80 },
    factors: {
      selfDoubt: 60,
      fearExposure: 60,
      luckAttribution: 60,
      perfectionism: 55,
      competenceDoubt: 60,
    },
  },
  {
    id: 'severe-impostor',
    name: 'Выраженный синдром самозванца',
    emoji: '🌧️',
    color: 'red',
    description:
      'Синдром самозванца серьезно влияет на вашу жизнь и карьеру. Постоянные сомнения в себе, страх разоблачения и неспособность принимать свои достижения создают значительный психологический дискомфорт и могут препятствовать профессиональному росту.',
    characteristics: [
      'Постоянные сомнения в своих способностях',
      'Сильный страх разоблачения',
      'Неспособность принимать достижения',
      'Избегание новых возможностей',
    ],
    advice: [
      'Обратитесь к психологу за профессиональной помощью',
      'Рассмотрите когнитивно-поведенческую терапию',
      'Практикуйте техники майндфулнесс',
      'Работайте с ментором или коучем',
      'Рассмотрите участие в терапевтических группах',
      'Изучите литературу о синдроме самозванца',
    ],
    score: { min: 81, max: 100 },
    factors: {
      selfDoubt: 80,
      fearExposure: 80,
      luckAttribution: 80,
      perfectionism: 80,
      competenceDoubt: 85,
    },
  },
];

export function calculateImpostorSyndromeResult(answers: number[]): TestResult {
  const totalScore = answers.reduce((sum, answer) => sum + answer, 0);

  // Подсчет баллов по факторам (по 4 вопроса на фактор)
  const selfDoubtScore = answers.slice(0, 4).reduce((sum, answer) => sum + answer, 0);
  const fearExposureScore = answers.slice(4, 8).reduce((sum, answer) => sum + answer, 0);
  const luckAttributionScore = answers.slice(8, 12).reduce((sum, answer) => sum + answer, 0);
  const perfectionismScore = answers.slice(12, 16).reduce((sum, answer) => sum + answer, 0);
  const competenceDoubtScore = answers.slice(16, 20).reduce((sum, answer) => sum + answer, 0);

  // Нормализация баллов в проценты (максимум 20 баллов на фактор = 100%)
  const factors = {
    selfDoubt: Math.round((selfDoubtScore / 20) * 100),
    fearExposure: Math.round((fearExposureScore / 20) * 100),
    luckAttribution: Math.round((luckAttributionScore / 20) * 100),
    perfectionism: Math.round((perfectionismScore / 20) * 100),
    competenceDoubt: Math.round((competenceDoubtScore / 20) * 100),
  };

  // Определяем результат на основе общего балла
  const result =
    impostorSyndromeResults.find(
      (result) => totalScore >= result.score.min && totalScore <= result.score.max
    ) || impostorSyndromeResults[1]; // Fallback to mild

  return {
    ...result,
    factors,
  };
}

// Функция для получения результата по ID
export function getImpostorSyndromeById(id: string): TestResult | undefined {
  return impostorSyndromeResults.find((result) => result.id === id);
}

export function getImpostorSyndromeChartData(answers: number[]): ChartData[] {
  const result = calculateImpostorSyndromeResult(answers);

  return [
    { factor: 'Самосомнение', score: result.factors.selfDoubt, fullMark: 100 },
    { factor: 'Страх разоблачения', score: result.factors.fearExposure, fullMark: 100 },
    { factor: 'Приписывание удаче', score: result.factors.luckAttribution, fullMark: 100 },
    { factor: 'Перфекционизм', score: result.factors.perfectionism, fullMark: 100 },
    { factor: 'Сомнения в компетентности', score: result.factors.competenceDoubt, fullMark: 100 },
  ];
}

// SEO keywords в русском языке, связанные с синдромом самозванца
export const impostorSyndromeSeoKeywords = [
  'синдром самозванца',
  'синдром самозванца тест',
  'как избавиться от синдрома самозванца',
  'признаки синдрома самозванца',
  'синдром самозванца на работе',
  'самооценка и уверенность в себе',
  'психологический тест онлайн',
  'тест на неуверенность в себе',
  'профессиональная самооценка',
  'страх некомпетентности',
  'как побороть неуверенность',
  'самосомнение в карьере',
  'перфекционизм и работа',
  'психология успеха',
  'развитие уверенности в себе',
];
