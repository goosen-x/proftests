export interface TestQuestion {
  id: number;
  question: string;
  icon: string;
  options: Array<{
    text: string;
    value: number;
  }>;
}

export interface TestResult {
  id: string;
  title: string;
  description: string;
  characteristics: string[];
  advice: string[];
  emoji: string;
  color: string;
  factors: {
    selfDoubt: number;
    fearOfExposure: number;
    attributionToLuck: number;
    perfectionism: number;
    competenceDoubt: number;
  };
  chartData: Array<{
    factor: string;
    score: number;
    fullMark: 100;
  }>;
}

export const impostorSyndromeQuestions: TestQuestion[] = [
  // Сомнения в себе (Self-doubt)
  {
    id: 1,
    question: 'Как часто вы чувствуете, что не заслуживаете своих достижений?',
    icon: 'trophy',
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
    question: 'Насколько сильно вы сомневаетесь в своих способностях на работе или учебе?',
    icon: 'brain',
    options: [
      { text: 'Совсем не сомневаюсь', value: 1 },
      { text: 'Немного сомневаюсь', value: 2 },
      { text: 'Умеренно сомневаюсь', value: 3 },
      { text: 'Сильно сомневаюсь', value: 4 },
      { text: 'Постоянно сомневаюсь', value: 5 },
    ],
  },
  {
    id: 3,
    question: 'Считаете ли вы себя менее компетентным, чем думают о вас коллеги?',
    icon: 'users',
    options: [
      { text: 'Нет, я компетентен', value: 1 },
      { text: 'Иногда так думаю', value: 2 },
      { text: 'Часто так думаю', value: 3 },
      { text: 'Почти всегда', value: 4 },
      { text: 'Да, определенно', value: 5 },
    ],
  },
  {
    id: 4,
    question: 'Как часто вы минимизируете свои достижения?',
    icon: 'star',
    options: [
      { text: 'Никогда', value: 1 },
      { text: 'Редко', value: 2 },
      { text: 'Иногда', value: 3 },
      { text: 'Часто', value: 4 },
      { text: 'Постоянно', value: 5 },
    ],
  },

  // Страх разоблачения (Fear of exposure)
  {
    id: 5,
    question: 'Боитесь ли вы, что окружающие узнают, что вы на самом деле не так умны?',
    icon: 'eye',
    options: [
      { text: 'Совсем не боюсь', value: 1 },
      { text: 'Немного боюсь', value: 2 },
      { text: 'Иногда боюсь', value: 3 },
      { text: 'Часто боюсь', value: 4 },
      { text: 'Постоянно боюсь', value: 5 },
    ],
  },
  {
    id: 6,
    question: 'Переживаете ли вы, что коллеги переоценивают ваши способности?',
    icon: 'scale',
    options: [
      { text: 'Никогда', value: 1 },
      { text: 'Редко', value: 2 },
      { text: 'Иногда', value: 3 },
      { text: 'Часто', value: 4 },
      { text: 'Всегда', value: 5 },
    ],
  },
  {
    id: 7,
    question: 'Избегаете ли вы ситуаций, где ваши знания могут быть проверены?',
    icon: 'shield',
    options: [
      { text: 'Нет, не избегаю', value: 1 },
      { text: 'Редко избегаю', value: 2 },
      { text: 'Иногда избегаю', value: 3 },
      { text: 'Часто избегаю', value: 4 },
      { text: 'Всегда избегаю', value: 5 },
    ],
  },
  {
    id: 8,
    question: 'Чувствуете ли вы себя мошенником в профессиональной среде?',
    icon: 'user-x',
    options: [
      { text: 'Никогда', value: 1 },
      { text: 'Редко', value: 2 },
      { text: 'Иногда', value: 3 },
      { text: 'Часто', value: 4 },
      { text: 'Постоянно', value: 5 },
    ],
  },

  // Приписывание успеха везению (Attribution to luck)
  {
    id: 9,
    question: 'Как часто вы думаете, что ваш успех - это результат везения?',
    icon: 'clover',
    options: [
      { text: 'Никогда', value: 1 },
      { text: 'Редко', value: 2 },
      { text: 'Иногда', value: 3 },
      { text: 'Часто', value: 4 },
      { text: 'Всегда', value: 5 },
    ],
  },
  {
    id: 10,
    question: 'Считаете ли вы, что оказались в нужное время в нужном месте?',
    icon: 'clock',
    options: [
      { text: 'Нет, я заслужил успех', value: 1 },
      { text: 'Немного везения было', value: 2 },
      { text: 'Частично повезло', value: 3 },
      { text: 'В основном повезло', value: 4 },
      { text: 'Только везение', value: 5 },
    ],
  },
  {
    id: 11,
    question: 'Приписываете ли вы свои достижения внешним факторам?',
    icon: 'compass',
    options: [
      { text: 'Никогда', value: 1 },
      { text: 'Редко', value: 2 },
      { text: 'Иногда', value: 3 },
      { text: 'Часто', value: 4 },
      { text: 'Всегда', value: 5 },
    ],
  },
  {
    id: 12,
    question: 'Думаете ли вы, что успех других людей более заслужен?',
    icon: 'users2',
    options: [
      { text: 'Нет', value: 1 },
      { text: 'Иногда', value: 2 },
      { text: 'Часто', value: 3 },
      { text: 'Почти всегда', value: 4 },
      { text: 'Да, всегда', value: 5 },
    ],
  },

  // Перфекционизм (Perfectionism)
  {
    id: 13,
    question: 'Насколько сильно вы боитесь совершить ошибку?',
    icon: 'alert-triangle',
    options: [
      { text: 'Совсем не боюсь', value: 1 },
      { text: 'Немного боюсь', value: 2 },
      { text: 'Умеренно боюсь', value: 3 },
      { text: 'Сильно боюсь', value: 4 },
      { text: 'Панически боюсь', value: 5 },
    ],
  },
  {
    id: 14,
    question: 'Переделываете ли вы работу много раз, боясь критики?',
    icon: 'redo',
    options: [
      { text: 'Никогда', value: 1 },
      { text: 'Редко', value: 2 },
      { text: 'Иногда', value: 3 },
      { text: 'Часто', value: 4 },
      { text: 'Постоянно', value: 5 },
    ],
  },
  {
    id: 15,
    question: 'Устанавливаете ли вы для себя нереалистично высокие стандарты?',
    icon: 'target',
    options: [
      { text: 'Нет', value: 1 },
      { text: 'Иногда', value: 2 },
      { text: 'Часто', value: 3 },
      { text: 'Почти всегда', value: 4 },
      { text: 'Да, всегда', value: 5 },
    ],
  },
  {
    id: 16,
    question: 'Откладываете ли вы задачи из страха не справиться идеально?',
    icon: 'calendar-x',
    options: [
      { text: 'Никогда', value: 1 },
      { text: 'Редко', value: 2 },
      { text: 'Иногда', value: 3 },
      { text: 'Часто', value: 4 },
      { text: 'Постоянно', value: 5 },
    ],
  },

  // Сомнения в компетенции (Competence doubt)
  {
    id: 17,
    question: 'Сравниваете ли вы себя с коллегами и чувствуете себя хуже?',
    icon: 'balance',
    options: [
      { text: 'Никогда', value: 1 },
      { text: 'Редко', value: 2 },
      { text: 'Иногда', value: 3 },
      { text: 'Часто', value: 4 },
      { text: 'Постоянно', value: 5 },
    ],
  },
  {
    id: 18,
    question: 'Чувствуете ли вы, что не соответствуете своей должности?',
    icon: 'briefcase',
    options: [
      { text: 'Нет, соответствую', value: 1 },
      { text: 'Иногда сомневаюсь', value: 2 },
      { text: 'Часто сомневаюсь', value: 3 },
      { text: 'Почти уверен, что нет', value: 4 },
      { text: 'Точно не соответствую', value: 5 },
    ],
  },
  {
    id: 19,
    question: 'Боитесь ли вы браться за новые задачи из-за страха неудачи?',
    icon: 'shield-x',
    options: [
      { text: 'Никогда', value: 1 },
      { text: 'Редко', value: 2 },
      { text: 'Иногда', value: 3 },
      { text: 'Часто', value: 4 },
      { text: 'Всегда', value: 5 },
    ],
  },
  {
    id: 20,
    question: 'Считаете ли вы, что другие выполняют работу лучше вас?',
    icon: 'user-check',
    options: [
      { text: 'Нет', value: 1 },
      { text: 'Иногда', value: 2 },
      { text: 'Часто', value: 3 },
      { text: 'Почти всегда', value: 4 },
      { text: 'Да, всегда', value: 5 },
    ],
  },
];

export const impostorSyndromeResults: TestResult[] = [
  {
    id: 'no_syndrome',
    title: 'Синдром самозванца отсутствует',
    description:
      'У вас здоровая самооценка и адекватное восприятие своих достижений. Вы уверены в своих способностях и заслуженности успеха.',
    characteristics: [
      'Высокая уверенность в себе',
      'Адекватная оценка способностей',
      'Принятие заслуженности успеха',
      'Отсутствие страха разоблачения',
      'Здоровое отношение к ошибкам',
    ],
    advice: [
      'Продолжайте поддерживать здоровую самооценку',
      'Делитесь опытом с теми, кто страдает от синдрома самозванца',
      'Помогайте коллегам признавать их достижения',
      'Используйте свою уверенность для менторства',
      'Не забывайте о постоянном развитии',
    ],
    emoji: '🏆',
    color: 'green',
    factors: {
      selfDoubt: 10,
      fearOfExposure: 10,
      attributionToLuck: 10,
      perfectionism: 20,
      competenceDoubt: 10,
    },
    chartData: [],
  },
  {
    id: 'mild_syndrome',
    title: 'Легкий синдром самозванца',
    description:
      'У вас присутствуют отдельные признаки синдрома самозванца, но они не оказывают серьезного влияния на вашу жизнь.',
    characteristics: [
      'Периодические сомнения в себе',
      'Умеренная самокритика',
      'Иногда приписывание успеха везению',
      'Легкий перфекционизм',
      'Редкие страхи разоблачения',
    ],
    advice: [
      'Ведите дневник достижений',
      'Фокусируйтесь на объективных результатах',
      'Принимайте комплименты и признание',
      'Работайте над принятием ошибок',
      'Обсуждайте свои чувства с доверенными людьми',
    ],
    emoji: '🤔',
    color: 'yellow',
    factors: {
      selfDoubt: 35,
      fearOfExposure: 30,
      attributionToLuck: 40,
      perfectionism: 45,
      competenceDoubt: 35,
    },
    chartData: [],
  },
  {
    id: 'moderate_syndrome',
    title: 'Умеренный синдром самозванца',
    description:
      'Синдром самозванца регулярно влияет на вашу самооценку и может мешать карьерному росту. Требуется активная работа над собой.',
    characteristics: [
      'Частые сомнения в компетенции',
      'Страх быть разоблаченным',
      'Приписывание успехов внешним факторам',
      'Выраженный перфекционизм',
      'Сравнение себя с другими',
    ],
    advice: [
      'Обратитесь к психологу или коучу',
      'Практикуйте техники самосострадания',
      'Разработайте систему объективной оценки достижений',
      'Учитесь принимать неидеальные результаты',
      'Найдите группу поддержки или ментора',
    ],
    emoji: '😰',
    color: 'orange',
    factors: {
      selfDoubt: 65,
      fearOfExposure: 70,
      attributionToLuck: 65,
      perfectionism: 75,
      competenceDoubt: 70,
    },
    chartData: [],
  },
  {
    id: 'severe_syndrome',
    title: 'Выраженный синдром самозванца',
    description:
      'Синдром самозванца серьезно влияет на вашу жизнь, карьеру и самочувствие. Рекомендуется профессиональная помощь.',
    characteristics: [
      'Постоянные мучительные сомнения',
      'Сильный страх разоблачения',
      'Отрицание своих заслуг',
      'Парализующий перфекционизм',
      'Избегание новых возможностей',
    ],
    advice: [
      'Обязательно обратитесь к психотерапевту',
      'Изучите когнитивно-поведенческую терапию',
      'Практикуйте техники заземления и осознанности',
      'Временно снизьте рабочую нагрузку',
      'Работайте над базовыми убеждениями о себе',
    ],
    emoji: '🆘',
    color: 'red',
    factors: {
      selfDoubt: 90,
      fearOfExposure: 95,
      attributionToLuck: 85,
      perfectionism: 95,
      competenceDoubt: 90,
    },
    chartData: [],
  },
];

export function calculateImpostorSyndromeResult(answers: number[]): TestResult {
  const factors = {
    selfDoubt: 0,
    fearOfExposure: 0,
    attributionToLuck: 0,
    perfectionism: 0,
    competenceDoubt: 0,
  };

  // Подсчет баллов по факторам
  answers.forEach((answer, index) => {
    const questionNum = index + 1;
    if (questionNum <= 4) {
      factors.selfDoubt += answer;
    } else if (questionNum <= 8) {
      factors.fearOfExposure += answer;
    } else if (questionNum <= 12) {
      factors.attributionToLuck += answer;
    } else if (questionNum <= 16) {
      factors.perfectionism += answer;
    } else {
      factors.competenceDoubt += answer;
    }
  });

  // Нормализация факторов (каждый из 4 вопросов по 5 баллов = макс 20)
  const normalizedFactors = {
    selfDoubt: (factors.selfDoubt / 20) * 100,
    fearOfExposure: (factors.fearOfExposure / 20) * 100,
    attributionToLuck: (factors.attributionToLuck / 20) * 100,
    perfectionism: (factors.perfectionism / 20) * 100,
    competenceDoubt: (factors.competenceDoubt / 20) * 100,
  };

  const totalScore = answers.reduce((sum, answer) => sum + answer, 0);

  let result: TestResult;
  if (totalScore <= 40) {
    result = { ...impostorSyndromeResults[0] };
  } else if (totalScore <= 60) {
    result = { ...impostorSyndromeResults[1] };
  } else if (totalScore <= 80) {
    result = { ...impostorSyndromeResults[2] };
  } else {
    result = { ...impostorSyndromeResults[3] };
  }

  // Обновляем факторы и данные для графика
  result.factors = normalizedFactors;
  result.chartData = [
    { factor: 'Сомнения в себе', score: Math.round(normalizedFactors.selfDoubt), fullMark: 100 },
    {
      factor: 'Страх разоблачения',
      score: Math.round(normalizedFactors.fearOfExposure),
      fullMark: 100,
    },
    {
      factor: 'Приписывание везению',
      score: Math.round(normalizedFactors.attributionToLuck),
      fullMark: 100,
    },
    { factor: 'Перфекционизм', score: Math.round(normalizedFactors.perfectionism), fullMark: 100 },
    {
      factor: 'Сомнения в компетенции',
      score: Math.round(normalizedFactors.competenceDoubt),
      fullMark: 100,
    },
  ];

  return result;
}
