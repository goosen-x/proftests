export interface TestQuestion {
  id: number;
  question: string;
  icon: string;
  options: {
    text: string;
    value: number;
  }[];
  factor:
    | 'digital-addiction'
    | 'instant-gratification'
    | 'focus-concentration'
    | 'procrastination'
    | 'reward-seeking';
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
    digitalAddiction: number;
    instantGratification: number;
    focusConcentration: number;
    procrastination: number;
    rewardSeeking: number;
  };
}

export interface ChartData {
  factor: string;
  score: number;
  fullMark: 100;
}

export const dopamineDetoxQuestions: TestQuestion[] = [
  // Цифровая зависимость (4 вопроса)
  {
    id: 1,
    question: 'Как часто вы проверяете социальные сети и мессенджеры в течение дня?',
    icon: 'Smartphone',
    factor: 'digital-addiction',
    options: [
      { text: 'Менее 10 раз в день', value: 1 },
      { text: '10-20 раз в день', value: 2 },
      { text: '20-50 раз в день', value: 3 },
      { text: '50-100 раз в день', value: 4 },
      { text: 'Более 100 раз в день', value: 5 },
    ],
  },
  {
    id: 2,
    question:
      'Сколько времени вы проводите за просмотром видео (TikTok, YouTube, Instagram Reels) в день?',
    icon: 'Play',
    factor: 'digital-addiction',
    options: [
      { text: 'Менее 30 минут', value: 1 },
      { text: '30 минут - 1 час', value: 2 },
      { text: '1-3 часа', value: 3 },
      { text: '3-5 часов', value: 4 },
      { text: 'Более 5 часов', value: 5 },
    ],
  },
  {
    id: 3,
    question: 'Как вы реагируете на отсутствие интернета или разряженный телефон?',
    icon: 'Wifi',
    factor: 'digital-addiction',
    options: [
      { text: 'Спокойно, не испытываю дискомфорта', value: 1 },
      { text: 'Слегка беспокоюсь, но справляюсь', value: 2 },
      { text: 'Чувствую умеренное беспокойство', value: 3 },
      { text: 'Испытываю сильный стресс', value: 4 },
      { text: 'Впадаю в панику, не могу думать ни о чем другом', value: 5 },
    ],
  },
  {
    id: 4,
    question: 'Как быстро вы берете телефон после пробуждения?',
    icon: 'Clock',
    factor: 'digital-addiction',
    options: [
      { text: 'Через 1-2 часа после пробуждения', value: 1 },
      { text: 'Через 30-60 минут', value: 2 },
      { text: 'Через 10-30 минут', value: 3 },
      { text: 'Через 1-5 минут', value: 4 },
      { text: 'Сразу же, это первое что я делаю', value: 5 },
    ],
  },

  // Мгновенное удовлетворение (4 вопроса)
  {
    id: 5,
    question: 'Как часто вы заказываете еду с доставкой вместо того, чтобы готовить дома?',
    icon: 'ShoppingCart',
    factor: 'instant-gratification',
    options: [
      { text: 'Почти никогда, предпочитаю готовить', value: 1 },
      { text: '1-2 раза в месяц', value: 2 },
      { text: '1-2 раза в неделю', value: 3 },
      { text: '3-4 раза в неделю', value: 4 },
      { text: 'Практически каждый день', value: 5 },
    ],
  },
  {
    id: 6,
    question: 'Как вы относитесь к ожиданию (в очередях, загрузка страниц, ответы на сообщения)?',
    icon: 'Timer',
    factor: 'instant-gratification',
    options: [
      { text: 'Спокойно отношусь к ожиданию', value: 1 },
      { text: 'Иногда проявляю нетерпение', value: 2 },
      { text: 'Часто испытываю раздражение', value: 3 },
      { text: 'Очень раздражаюсь при ожидании', value: 4 },
      { text: 'Не выношу любого ожидания', value: 5 },
    ],
  },
  {
    id: 7,
    question: 'Как часто вы делаете импульсивные покупки онлайн?',
    icon: 'CreditCard',
    factor: 'instant-gratification',
    options: [
      { text: 'Почти никогда, всегда планирую покупки', value: 1 },
      { text: 'Редко, несколько раз в год', value: 2 },
      { text: 'Иногда, 1-2 раза в месяц', value: 3 },
      { text: 'Довольно часто, несколько раз в месяц', value: 4 },
      { text: 'Постоянно, покупаю импульсивно', value: 5 },
    ],
  },
  {
    id: 8,
    question: 'Как вы поступаете, когда хотите посмотреть фильм или сериал?',
    icon: 'Monitor',
    factor: 'instant-gratification',
    options: [
      { text: 'Планирую время для просмотра заранее', value: 1 },
      { text: 'Иногда откладываю дела ради просмотра', value: 2 },
      { text: 'Часто смотрю вместо других дел', value: 3 },
      { text: 'Начинаю смотреть и не могу остановиться', value: 4 },
      { text: 'Могу смотреть всю ночь напролет', value: 5 },
    ],
  },

  // Фокус и концентрация (4 вопроса)
  {
    id: 9,
    question: 'Как долго вы можете сосредоточиться на одной задаче без отвлечений?',
    icon: 'Target',
    factor: 'focus-concentration',
    options: [
      { text: '2-3 часа и более', value: 1 },
      { text: '1-2 часа', value: 2 },
      { text: '30-60 минут', value: 3 },
      { text: '10-30 минут', value: 4 },
      { text: 'Менее 10 минут', value: 5 },
    ],
  },
  {
    id: 10,
    question: 'Как часто вы переключаетесь между разными задачами или вкладками браузера?',
    icon: 'ArrowLeftRight',
    factor: 'focus-concentration',
    options: [
      { text: 'Работаю последовательно, редко переключаюсь', value: 1 },
      { text: 'Иногда переключаюсь для разнообразия', value: 2 },
      { text: 'Довольно часто переключаюсь', value: 3 },
      { text: 'Постоянно переключаюсь между задачами', value: 4 },
      { text: 'Не могу сосредоточиться на чем-то одном', value: 5 },
    ],
  },
  {
    id: 11,
    question: 'Насколько легко вас отвлекают уведомления на телефоне или компьютере?',
    icon: 'Bell',
    factor: 'focus-concentration',
    options: [
      { text: 'Игнорирую уведомления во время работы', value: 1 },
      { text: 'Иногда отвлекаюсь на важные уведомления', value: 2 },
      { text: 'Часто проверяю уведомления', value: 3 },
      { text: 'Всегда реагирую на уведомления', value: 4 },
      { text: 'Не могу игнорировать ни одного уведомления', value: 5 },
    ],
  },
  {
    id: 12,
    question: "Как часто вы испытываете 'туман в голове' или трудности с ясным мышлением?",
    icon: 'Cloud',
    factor: 'focus-concentration',
    options: [
      { text: 'Почти никогда, мышление всегда ясное', value: 1 },
      { text: 'Редко, в основном при усталости', value: 2 },
      { text: 'Иногда, особенно после долгого использования гаджетов', value: 3 },
      { text: 'Довольно часто в течение дня', value: 4 },
      { text: 'Постоянно чувствую затуманенность сознания', value: 5 },
    ],
  },

  // Прокрастинация (4 вопроса)
  {
    id: 13,
    question: 'Как часто вы откладываете важные дела ради развлечений (соцсети, игры, видео)?',
    icon: 'Calendar',
    factor: 'procrastination',
    options: [
      { text: 'Почти никогда, сначала дело, потом развлечения', value: 1 },
      { text: 'Редко, только при плохом настроении', value: 2 },
      { text: 'Иногда, когда задача кажется скучной', value: 3 },
      { text: 'Довольно часто', value: 4 },
      { text: 'Постоянно откладываю дела ради развлечений', value: 5 },
    ],
  },
  {
    id: 14,
    question: 'Что вы делаете, когда сталкиваетесь со сложной или скучной задачей?',
    icon: 'Brain',
    factor: 'procrastination',
    options: [
      { text: 'Сразу начинаю работать над ней', value: 1 },
      { text: 'Составляю план и приступаю', value: 2 },
      { text: 'Немного откладываю, но потом делаю', value: 3 },
      { text: 'Долго откладываю, делаю в последний момент', value: 4 },
      { text: 'Ищу любые способы избежать выполнения', value: 5 },
    ],
  },
  {
    id: 15,
    question:
      "Как часто вы говорите себе 'еще 5 минут' при использовании развлекательных приложений?",
    icon: 'PlayCircle',
    factor: 'procrastination',
    options: [
      { text: 'Никогда, всегда останавливаюсь вовремя', value: 1 },
      { text: 'Редко, обычно контролирую время', value: 2 },
      { text: 'Иногда, но потом все же останавливаюсь', value: 3 },
      { text: 'Часто, трудно остановиться', value: 4 },
      { text: 'Постоянно, часы пролетают незаметно', value: 5 },
    ],
  },
  {
    id: 16,
    question: 'Насколько хорошо вы придерживаетесь планов и расписания?',
    icon: 'CheckSquare',
    factor: 'procrastination',
    options: [
      { text: 'Всегда следую плану', value: 1 },
      { text: 'Обычно придерживаюсь планов', value: 2 },
      { text: 'Иногда отклоняюсь от планов', value: 3 },
      { text: 'Часто нарушаю планы', value: 4 },
      { text: 'Почти никогда не следую планам', value: 5 },
    ],
  },

  // Поиск вознаграждений (4 вопроса)
  {
    id: 17,
    question: 'Как часто вы ищете новые развлечения или стимуляцию, когда чувствуете скуку?',
    icon: 'Zap',
    factor: 'reward-seeking',
    options: [
      { text: 'Редко, могу спокойно переносить скуку', value: 1 },
      { text: 'Иногда ищу что-то интересное', value: 2 },
      { text: 'Часто не выношу скуки', value: 3 },
      { text: 'Всегда должен быть чем-то занят', value: 4 },
      { text: 'Не могу переносить даже минуты скуки', value: 5 },
    ],
  },
  {
    id: 18,
    question: 'Насколько важны для вас лайки, комментарии и другая обратная связь в соцсетях?',
    icon: 'Heart',
    factor: 'reward-seeking',
    options: [
      { text: 'Совершенно не важны', value: 1 },
      { text: 'Приятно получать, но не зацикливаюсь', value: 2 },
      { text: 'Довольно важны для настроения', value: 3 },
      { text: 'Очень важны, влияют на самооценку', value: 4 },
      { text: 'Критически важны, постоянно проверяю', value: 5 },
    ],
  },
  {
    id: 19,
    question: 'Как часто вы используете еду в качестве утешения или награды?',
    icon: 'Coffee',
    factor: 'reward-seeking',
    options: [
      { text: 'Почти никогда, ем только когда голоден', value: 1 },
      { text: 'Изредка, в особых случаях', value: 2 },
      { text: 'Иногда заедаю стресс или празднует успехи', value: 3 },
      { text: 'Довольно часто ем от эмоций', value: 4 },
      { text: 'Постоянно использую еду как эмоциональную поддержку', value: 5 },
    ],
  },
  {
    id: 20,
    question:
      'Насколько сложно вам сосредоточиться на одной деятельности без поиска дополнительной стимуляции?',
    icon: 'Focus',
    factor: 'reward-seeking',
    options: [
      { text: 'Легко могу заниматься одним делом долго', value: 1 },
      { text: 'Обычно не нуждаюсь в дополнительной стимуляции', value: 2 },
      { text: 'Иногда нужно разнообразие', value: 3 },
      { text: 'Часто нужна дополнительная стимуляция', value: 4 },
      { text: 'Не могу без постоянной стимуляции и разнообразия', value: 5 },
    ],
  },
];

export const dopamineDetoxResults: TestResult[] = [
  {
    id: 'no-detox-needed',
    name: 'Допаминовый детокс не нужен',
    emoji: '🧘',
    color: 'green',
    description:
      'Поздравляем! У вас здоровые отношения с технологиями и мгновенными удовольствиями. Вы умеете контролировать свои импульсы и сохраняете способность к длительной концентрации. Ваша дофаминовая система функционирует сбалансированно.',
    characteristics: [
      'Отличный контроль над цифровыми привычками',
      'Способность долго концентрироваться на задачах',
      'Здоровое отношение к ожиданию и откладыванию удовольствий',
      'Низкий уровень прокрастинации',
      'Сбалансированная система внутренней мотивации',
    ],
    advice: [
      'Продолжайте поддерживать здоровые цифровые привычки',
      'Делитесь опытом с друзьями и семьей',
      "Периодически проводите 'цифровые выходные' для профилактики",
      'Развивайте новые офлайн хобби и интересы',
      'Помогайте другим в борьбе с цифровой зависимостью',
      'Изучайте техники mindfulness для поддержания баланса',
    ],
    score: { min: 20, max: 40 },
    factors: {
      digitalAddiction: 20,
      instantGratification: 20,
      focusConcentration: 20,
      procrastination: 20,
      rewardSeeking: 20,
    },
  },
  {
    id: 'mild-detox-benefit',
    name: 'Легкий допаминовый детокс будет полезен',
    emoji: '🌱',
    color: 'blue',
    description:
      'У вас есть некоторые признаки дофаминовой дисрегуляции, но они пока не критичны. Короткий период допаминового детокса поможет восстановить чувствительность к естественным удовольствиям и улучшить способность к концентрации.',
    characteristics: [
      'Умеренная зависимость от цифровых развлечений',
      'Периодические трудности с концентрацией',
      'Склонность к мгновенному удовлетворению',
      'Легкая форма прокрастинации',
      'Частичная потребность во внешней стимуляции',
    ],
    advice: [
      'Проведите 24-48 часовой мягкий допаминовый детокс',
      'Отключите ненужные уведомления на телефоне',
      "Практикуйте техники 'скучания' - позвольте себе иногда скучать",
      'Замените часть экранного времени на чтение книг',
      'Начните практиковать медитацию по 10-15 минут в день',
      'Установите четкие границы для использования развлекательных приложений',
    ],
    score: { min: 41, max: 60 },
    factors: {
      digitalAddiction: 40,
      instantGratification: 40,
      focusConcentration: 40,
      procrastination: 40,
      rewardSeeking: 40,
    },
  },
  {
    id: 'moderate-detox-needed',
    name: 'Требуется умеренный допаминовый детокс',
    emoji: '🔄',
    color: 'yellow',
    description:
      'Ваша дофаминовая система показывает признаки перегрузки. Регулярное употребление высокостимулирующих активностей снижает вашу способность получать удовольствие от простых вещей и концентрироваться на важных задачах.',
    characteristics: [
      'Заметная зависимость от цифровых стимулов',
      'Трудности с длительной концентрацией',
      'Выраженное стремление к мгновенному удовлетворению',
      'Регулярная прокрастинация',
      'Зависимость от внешних источников удовольствия',
    ],
    advice: [
      'Проведите 3-7 дневный допаминовый детокс',
      'Уберите развлекательные приложения с главного экрана телефона',
      "Практикуйте технику 'отложенного удовлетворения' - ждите 10 минут перед развлечениями",
      'Создайте расписание без отвлекающих факторов для важных дел',
      'Займитесь физическими упражнениями - они естественно повышают дофамин',
      'Ведите дневник благодарности для переключения фокуса на позитивные моменты',
      'Постепенно увеличивайте время между стимулирующими активностями',
    ],
    score: { min: 61, max: 80 },
    factors: {
      digitalAddiction: 60,
      instantGratification: 60,
      focusConcentration: 60,
      procrastination: 60,
      rewardSeeking: 60,
    },
  },
  {
    id: 'high-detox-needed',
    name: 'Необходим серьезный допаминовый детокс',
    emoji: '🚨',
    color: 'red',
    description:
      'У вас наблюдается серьезная дофаминовая дисрегуляция. Постоянная потребность в стимуляции и мгновенном удовлетворении значительно влияет на вашу продуктивность, настроение и способность наслаждаться жизнью.',
    characteristics: [
      'Сильная зависимость от цифровых развлечений',
      'Серьезные проблемы с концентрацией и фокусом',
      'Неспособность откладывать удовольствия',
      'Хроническая прокрастинация',
      'Постоянная потребность в стимуляции и новизне',
    ],
    advice: [
      'Проведите расширенный 14-30 дневный допаминовый детокс под наблюдением',
      'Обратитесь к психологу, специализирующемуся на зависимостях',
      'Полностью исключите развлекательные приложения на 2-4 недели',
      'Создайте структурированный распорядок дня с четкими временными рамками',
      'Найдите accountability partner - человека, который будет контролировать ваш прогресс',
      'Изучите техники когнитивно-поведенческой терапии',
      'Замените цифровые развлечения на физическую активность и творчество',
      'Практикуйте длительную медитацию (20-30 минут ежедневно)',
      'Рассмотрите участие в группах поддержки или онлайн-сообществах',
      'Постепенно возвращайте стимулирующие активности только после восстановления',
    ],
    score: { min: 81, max: 100 },
    factors: {
      digitalAddiction: 85,
      instantGratification: 85,
      focusConcentration: 85,
      procrastination: 85,
      rewardSeeking: 85,
    },
  },
];

export function calculateDopamineDetoxResult(answers: number[]): TestResult {
  const totalScore = answers.reduce((sum, answer) => sum + answer, 0);

  // Подсчет баллов по факторам (по 4 вопроса на фактор)
  const digitalAddictionScore = answers.slice(0, 4).reduce((sum, answer) => sum + answer, 0);
  const instantGratificationScore = answers.slice(4, 8).reduce((sum, answer) => sum + answer, 0);
  const focusConcentrationScore = answers.slice(8, 12).reduce((sum, answer) => sum + answer, 0);
  const procrastinationScore = answers.slice(12, 16).reduce((sum, answer) => sum + answer, 0);
  const rewardSeekingScore = answers.slice(16, 20).reduce((sum, answer) => sum + answer, 0);

  // Нормализация баллов в проценты (максимум 20 баллов на фактор = 100%)
  const factors = {
    digitalAddiction: Math.round((digitalAddictionScore / 20) * 100),
    instantGratification: Math.round((instantGratificationScore / 20) * 100),
    focusConcentration: Math.round((focusConcentrationScore / 20) * 100),
    procrastination: Math.round((procrastinationScore / 20) * 100),
    rewardSeeking: Math.round((rewardSeekingScore / 20) * 100),
  };

  // Определяем результат на основе общего балла
  const result =
    dopamineDetoxResults.find(
      (result) => totalScore >= result.score.min && totalScore <= result.score.max
    ) || dopamineDetoxResults[1]; // Fallback to mild benefit

  return {
    ...result,
    factors,
  };
}

// Функция для получения результата по ID
export function getDopamineDetoxResultById(id: string): TestResult | undefined {
  return dopamineDetoxResults.find((result) => result.id === id);
}

export function getDopamineDetoxChartData(answers: number[]): ChartData[] {
  const result = calculateDopamineDetoxResult(answers);

  return [
    { factor: 'Цифровая зависимость', score: result.factors.digitalAddiction, fullMark: 100 },
    {
      factor: 'Мгновенное удовлетворение',
      score: result.factors.instantGratification,
      fullMark: 100,
    },
    { factor: 'Фокус и концентрация', score: result.factors.focusConcentration, fullMark: 100 },
    { factor: 'Прокрастинация', score: result.factors.procrastination, fullMark: 100 },
    { factor: 'Поиск вознаграждений', score: result.factors.rewardSeeking, fullMark: 100 },
  ];
}

// SEO keywords в русском языке, связанные с допаминовым детоксом
export const dopamineDetoxSeoKeywords = [
  'допаминовый детокс тест',
  'дофаминовый детокс',
  'цифровой детокс тест',
  'зависимость от телефона тест',
  'тест на интернет зависимость',
  'социальные сети зависимость',
  'как улучшить концентрацию',
  'прокрастинация тест',
  'мгновенное удовлетворение',
  'цифровая зависимость тест',
  'детокс от соцсетей',
  'как перестать откладывать дела',
  'фокус и внимание тест',
  'doom scrolling',
  'бинж просмотр',
  'зависимость от уведомлений',
  'тест на силу воли',
  'отказ от гаджетов',
  'цифровое благополучие',
  'ментальная гигиена тест',
  'восстановление дофамина',
  'здоровые привычки тест',
  'контроль времени в интернете',
  'избавление от зависимости',
  'улучшение продуктивности',
];
