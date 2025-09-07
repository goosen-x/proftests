export interface TestQuestion {
  id: number;
  question: string;
  icon: string;
  options: {
    text: string;
    value: number;
  }[];
  factor:
    | 'adaptability'
    | 'emotional-regulation'
    | 'optimism'
    | 'problem-solving'
    | 'social-support';
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
    adaptability: number;
    emotionalRegulation: number;
    optimism: number;
    problemSolving: number;
    socialSupport: number;
  };
}

export interface ChartData {
  factor: string;
  score: number;
  fullMark: 100;
}

export const psychologicalResilienceQuestions: TestQuestion[] = [
  // Адаптивность (4 вопроса)
  {
    id: 1,
    question: 'Я легко приспосабливаюсь к неожиданным изменениям в жизни',
    icon: 'Shuffle',
    factor: 'adaptability',
    options: [
      { text: 'Совершенно не согласен', value: 1 },
      { text: 'Не согласен', value: 2 },
      { text: 'Нейтрально', value: 3 },
      { text: 'Согласен', value: 4 },
      { text: 'Полностью согласен', value: 5 },
    ],
  },
  {
    id: 2,
    question: 'Когда планы срываются, я быстро нахожу альтернативные решения',
    icon: 'Route',
    factor: 'adaptability',
    options: [
      { text: 'Никогда', value: 1 },
      { text: 'Редко', value: 2 },
      { text: 'Иногда', value: 3 },
      { text: 'Часто', value: 4 },
      { text: 'Всегда', value: 5 },
    ],
  },
  {
    id: 3,
    question: 'Я воспринимаю перемены как возможности для роста',
    icon: 'TrendingUp',
    factor: 'adaptability',
    options: [
      { text: 'Никогда не воспринимаю так', value: 1 },
      { text: 'Редко воспринимаю так', value: 2 },
      { text: 'Иногда воспринимаю так', value: 3 },
      { text: 'Часто воспринимаю так', value: 4 },
      { text: 'Всегда воспринимаю так', value: 5 },
    ],
  },
  {
    id: 4,
    question: 'Мне удается сохранять гибкость мышления в сложных ситуациях',
    icon: 'Zap',
    factor: 'adaptability',
    options: [
      { text: 'Совершенно не удается', value: 1 },
      { text: 'Редко удается', value: 2 },
      { text: 'Иногда удается', value: 3 },
      { text: 'Часто удается', value: 4 },
      { text: 'Всегда удается', value: 5 },
    ],
  },

  // Эмоциональная регуляция (4 вопроса)
  {
    id: 5,
    question: 'Я умею управлять своими эмоциями в стрессовых ситуациях',
    icon: 'Heart',
    factor: 'emotional-regulation',
    options: [
      { text: 'Совершенно не умею', value: 1 },
      { text: 'Плохо умею', value: 2 },
      { text: 'Умею частично', value: 3 },
      { text: 'Хорошо умею', value: 4 },
      { text: 'Отлично умею', value: 5 },
    ],
  },
  {
    id: 6,
    question: 'После неудачи я быстро восстанавливаю эмоциональное равновесие',
    icon: 'Balance',
    factor: 'emotional-regulation',
    options: [
      { text: 'Очень медленно', value: 1 },
      { text: 'Медленно', value: 2 },
      { text: 'Умеренно быстро', value: 3 },
      { text: 'Быстро', value: 4 },
      { text: 'Очень быстро', value: 5 },
    ],
  },
  {
    id: 7,
    question: 'Я могу сохранять спокойствие под давлением',
    icon: 'Shield',
    factor: 'emotional-regulation',
    options: [
      { text: 'Никогда не могу', value: 1 },
      { text: 'Редко могу', value: 2 },
      { text: 'Иногда могу', value: 3 },
      { text: 'Часто могу', value: 4 },
      { text: 'Всегда могу', value: 5 },
    ],
  },
  {
    id: 8,
    question: 'Мне удается превращать негативные эмоции в мотивацию к действию',
    icon: 'ArrowUp',
    factor: 'emotional-regulation',
    options: [
      { text: 'Никогда не удается', value: 1 },
      { text: 'Редко удается', value: 2 },
      { text: 'Иногда удается', value: 3 },
      { text: 'Часто удается', value: 4 },
      { text: 'Всегда удается', value: 5 },
    ],
  },

  // Оптимизм (4 вопроса)
  {
    id: 9,
    question: 'Я верю, что большинство проблем временны и решаемы',
    icon: 'Sun',
    factor: 'optimism',
    options: [
      { text: 'Никогда не верю', value: 1 },
      { text: 'Редко верю', value: 2 },
      { text: 'Иногда верю', value: 3 },
      { text: 'Часто верю', value: 4 },
      { text: 'Всегда верю', value: 5 },
    ],
  },
  {
    id: 10,
    question: 'Даже в трудные времена я сохраняю надежду на лучшее',
    icon: 'Star',
    factor: 'optimism',
    options: [
      { text: 'Никогда не сохраняю', value: 1 },
      { text: 'Редко сохраняю', value: 2 },
      { text: 'Иногда сохраняю', value: 3 },
      { text: 'Часто сохраняю', value: 4 },
      { text: 'Всегда сохраняю', value: 5 },
    ],
  },
  {
    id: 11,
    question: 'Я склонен видеть возможности там, где другие видят только препятствия',
    icon: 'Eye',
    factor: 'optimism',
    options: [
      { text: 'Никогда не склонен', value: 1 },
      { text: 'Редко склонен', value: 2 },
      { text: 'Иногда склонен', value: 3 },
      { text: 'Часто склонен', value: 4 },
      { text: 'Всегда склонен', value: 5 },
    ],
  },
  {
    id: 12,
    question: 'Я верю в свою способность справиться с любыми трудностями',
    icon: 'Mountain',
    factor: 'optimism',
    options: [
      { text: 'Совершенно не верю', value: 1 },
      { text: 'Слабо верю', value: 2 },
      { text: 'Верю частично', value: 3 },
      { text: 'Сильно верю', value: 4 },
      { text: 'Абсолютно верю', value: 5 },
    ],
  },

  // Решение проблем (4 вопроса)
  {
    id: 13,
    question: 'При столкновении с проблемой я сразу начинаю искать пути решения',
    icon: 'Search',
    factor: 'problem-solving',
    options: [
      { text: 'Никогда не начинаю', value: 1 },
      { text: 'Редко начинаю', value: 2 },
      { text: 'Иногда начинаю', value: 3 },
      { text: 'Часто начинаю', value: 4 },
      { text: 'Всегда начинаю', value: 5 },
    ],
  },
  {
    id: 14,
    question: 'Я умею разбивать сложные проблемы на более простые части',
    icon: 'Grid',
    factor: 'problem-solving',
    options: [
      { text: 'Совершенно не умею', value: 1 },
      { text: 'Плохо умею', value: 2 },
      { text: 'Умею частично', value: 3 },
      { text: 'Хорошо умею', value: 4 },
      { text: 'Отлично умею', value: 5 },
    ],
  },
  {
    id: 15,
    question: 'Я готов экспериментировать с разными подходами к решению проблем',
    icon: 'Lightbulb',
    factor: 'problem-solving',
    options: [
      { text: 'Никогда не готов', value: 1 },
      { text: 'Редко готов', value: 2 },
      { text: 'Иногда готов', value: 3 },
      { text: 'Часто готов', value: 4 },
      { text: 'Всегда готов', value: 5 },
    ],
  },
  {
    id: 16,
    question: 'Я учусь на ошибках и использую их для улучшения своих решений',
    icon: 'BookOpen',
    factor: 'problem-solving',
    options: [
      { text: 'Никогда не учусь', value: 1 },
      { text: 'Редко учусь', value: 2 },
      { text: 'Иногда учусь', value: 3 },
      { text: 'Часто учусь', value: 4 },
      { text: 'Всегда учусь', value: 5 },
    ],
  },

  // Социальная поддержка (4 вопроса)
  {
    id: 17,
    question: 'У меня есть люди, к которым я могу обратиться за поддержкой в трудные времена',
    icon: 'Users',
    factor: 'social-support',
    options: [
      { text: 'Совершенно нет таких людей', value: 1 },
      { text: 'Очень мало таких людей', value: 2 },
      { text: 'Есть несколько таких людей', value: 3 },
      { text: 'Есть много таких людей', value: 4 },
      { text: 'Есть очень много таких людей', value: 5 },
    ],
  },
  {
    id: 18,
    question: 'Я легко принимаю помощь от других людей',
    icon: 'HandHeart',
    factor: 'social-support',
    options: [
      { text: 'Никогда не принимаю', value: 1 },
      { text: 'Редко принимаю', value: 2 },
      { text: 'Иногда принимаю', value: 3 },
      { text: 'Часто принимаю', value: 4 },
      { text: 'Всегда принимаю', value: 5 },
    ],
  },
  {
    id: 19,
    question: 'Я активно поддерживаю отношения с людьми, которые важны для меня',
    icon: 'HeartHandshake',
    factor: 'social-support',
    options: [
      { text: 'Никогда не поддерживаю', value: 1 },
      { text: 'Редко поддерживаю', value: 2 },
      { text: 'Иногда поддерживаю', value: 3 },
      { text: 'Часто поддерживаю', value: 4 },
      { text: 'Всегда поддерживаю', value: 5 },
    ],
  },
  {
    id: 20,
    question: 'Я умею просить о помощи, когда она мне действительно нужна',
    icon: 'MessageCircle',
    factor: 'social-support',
    options: [
      { text: 'Совершенно не умею', value: 1 },
      { text: 'Плохо умею', value: 2 },
      { text: 'Умею частично', value: 3 },
      { text: 'Хорошо умею', value: 4 },
      { text: 'Отлично умею', value: 5 },
    ],
  },
];

export const psychologicalResilienceResults: TestResult[] = [
  {
    id: 'low-resilience',
    name: 'Низкая психологическая устойчивость',
    emoji: '🌧️',
    color: 'red',
    description:
      'Ваша психологическая устойчивость нуждается в развитии. Стрессовые ситуации и жизненные трудности серьезно влияют на ваше эмоциональное состояние и способность функционировать. Важно работать над укреплением внутренних ресурсов.',
    characteristics: [
      'Трудности с адаптацией к изменениям',
      'Сложности в управлении эмоциями',
      'Склонность к пессимистическому мышлению',
      'Ограниченные навыки решения проблем',
      'Недостаточная социальная поддержка',
    ],
    advice: [
      'Обратитесь к психологу для работы над устойчивостью к стрессу',
      'Изучайте техники управления эмоциями (дыхательные упражнения, медитация)',
      'Развивайте навыки решения проблем через структурированный подход',
      'Работайте над построением поддерживающих отношений',
      'Практикуйте позитивное мышление и благодарность',
      'Рассмотрите участие в группах поддержки',
    ],
    score: { min: 20, max: 40 },
    factors: {
      adaptability: 25,
      emotionalRegulation: 25,
      optimism: 25,
      problemSolving: 25,
      socialSupport: 25,
    },
  },
  {
    id: 'moderate-resilience',
    name: 'Умеренная психологическая устойчивость',
    emoji: '⛅',
    color: 'yellow',
    description:
      'У вас есть базовые навыки справления со стрессом, но есть области для улучшения. В некоторых ситуациях вы справляетесь хорошо, в других - испытываете затруднения. Развитие устойчивости поможет вам лучше справляться с жизненными вызовами.',
    characteristics: [
      'Частичная способность адаптироваться к изменениям',
      'Умеренные навыки эмоциональной регуляции',
      'Переменчивое отношение к трудностям',
      'Базовые навыки решения проблем',
      'Ограниченная, но существующая социальная поддержка',
    ],
    advice: [
      'Развивайте техники управления стрессом (йога, спорт, хобби)',
      'Практикуйте осознанность и рефлексию',
      'Учитесь переосмысливать негативные ситуации',
      'Укрепляйте существующие отношения и стройте новые',
      'Работайте над планированием и целеполаганием',
      'Изучайте стратегии совладания со стрессом',
    ],
    score: { min: 41, max: 60 },
    factors: {
      adaptability: 50,
      emotionalRegulation: 50,
      optimism: 50,
      problemSolving: 50,
      socialSupport: 50,
    },
  },
  {
    id: 'good-resilience',
    name: 'Хорошая психологическая устойчивость',
    emoji: '🌤️',
    color: 'blue',
    description:
      'У вас хорошо развитая психологическая устойчивость. Вы эффективно справляетесь с большинством стрессовых ситуаций и быстро восстанавливаетесь после неудач. У вас есть стабильная основа для преодоления жизненных трудностей.',
    characteristics: [
      'Хорошая адаптивность к изменениям',
      'Эффективная эмоциональная регуляция',
      'Позитивное отношение к вызовам',
      'Развитые навыки решения проблем',
      'Сильная социальная поддержка',
    ],
    advice: [
      'Продолжайте развивать свои сильные стороны',
      'Помогайте другим в развитии устойчивости',
      'Изучайте продвинутые техники управления стрессом',
      'Работайте над лидерскими качествами',
      'Ставьте перед собой новые вызовы для роста',
      'Делитесь опытом преодоления трудностей',
    ],
    score: { min: 61, max: 80 },
    factors: {
      adaptability: 70,
      emotionalRegulation: 70,
      optimism: 70,
      problemSolving: 70,
      socialSupport: 70,
    },
  },
  {
    id: 'very-high-resilience',
    name: 'Очень высокая психологическая устойчивость',
    emoji: '🌟',
    color: 'green',
    description:
      'У вас исключительно высокая психологическая устойчивость. Вы не только эффективно справляетесь с любыми стрессовыми ситуациями, но и используете их как возможности для роста. Вы являетесь источником силы и поддержки для окружающих.',
    characteristics: [
      'Превосходная адаптивность и гибкость',
      'Мастерство в эмоциональной регуляции',
      'Неиссякаемый оптимизм и вера в себя',
      'Творческий подход к решению проблем',
      'Богатая сеть социальной поддержки',
    ],
    advice: [
      'Используйте свои навыки для помощи другим',
      'Станьте ментором в области развития устойчивости',
      'Изучайте посттравматический рост',
      'Развивайте программы по развитию резилентности',
      'Применяйте навыки в сложных жизненных ситуациях',
      'Исследуйте новые области применения своих способностей',
    ],
    score: { min: 81, max: 100 },
    factors: {
      adaptability: 90,
      emotionalRegulation: 90,
      optimism: 90,
      problemSolving: 90,
      socialSupport: 90,
    },
  },
];

export function calculatePsychologicalResilienceResult(answers: number[]): TestResult {
  const totalScore = answers.reduce((sum, answer) => sum + answer, 0);

  // Подсчет баллов по факторам (по 4 вопроса на фактор)
  const adaptabilityScore = answers.slice(0, 4).reduce((sum, answer) => sum + answer, 0);
  const emotionalRegulationScore = answers.slice(4, 8).reduce((sum, answer) => sum + answer, 0);
  const optimismScore = answers.slice(8, 12).reduce((sum, answer) => sum + answer, 0);
  const problemSolvingScore = answers.slice(12, 16).reduce((sum, answer) => sum + answer, 0);
  const socialSupportScore = answers.slice(16, 20).reduce((sum, answer) => sum + answer, 0);

  // Нормализация баллов в проценты (максимум 20 баллов на фактор = 100%)
  const factors = {
    adaptability: Math.round((adaptabilityScore / 20) * 100),
    emotionalRegulation: Math.round((emotionalRegulationScore / 20) * 100),
    optimism: Math.round((optimismScore / 20) * 100),
    problemSolving: Math.round((problemSolvingScore / 20) * 100),
    socialSupport: Math.round((socialSupportScore / 20) * 100),
  };

  // Определяем результат на основе общего балла
  const result =
    psychologicalResilienceResults.find(
      (result) => totalScore >= result.score.min && totalScore <= result.score.max
    ) || psychologicalResilienceResults[1]; // Fallback to moderate

  return {
    ...result,
    factors,
  };
}

// Функция для получения результата по ID
export function getPsychologicalResilienceById(id: string): TestResult | undefined {
  return psychologicalResilienceResults.find((result) => result.id === id);
}

export function getPsychologicalResilienceChartData(answers: number[]): ChartData[] {
  const result = calculatePsychologicalResilienceResult(answers);

  return [
    { factor: 'Адаптивность', score: result.factors.adaptability, fullMark: 100 },
    { factor: 'Эмоциональная регуляция', score: result.factors.emotionalRegulation, fullMark: 100 },
    { factor: 'Оптимизм', score: result.factors.optimism, fullMark: 100 },
    { factor: 'Решение проблем', score: result.factors.problemSolving, fullMark: 100 },
    { factor: 'Социальная поддержка', score: result.factors.socialSupport, fullMark: 100 },
  ];
}

// SEO keywords в русском языке, связанные с психологической устойчивостью
export const psychologicalResilienceSeoKeywords = [
  'психологическая устойчивость тест',
  'тест на стрессоустойчивость',
  'резилентность тест',
  'устойчивость к стрессу тест',
  'психологическая стойкость',
  'как развить стрессоустойчивость',
  'тест на выносливость психики',
  'эмоциональная устойчивость тест',
  'справляться со стрессом',
  'психологическая гибкость',
  'адаптивность тест',
  'управление стрессом',
  'психическая устойчивость',
  'резилиенс психология',
  'преодоление трудностей',
  'жизнестойкость тест',
  'эмоциональная регуляция',
  'стресс менеджмент',
  'психологическое благополучие',
  'ментальное здоровье тест',
];
