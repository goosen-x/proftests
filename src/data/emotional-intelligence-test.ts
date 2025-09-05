export interface TestQuestion {
  id: number;
  question: string;
  icon: string;
  options: {
    text: string;
    value: number;
  }[];
  factor: 'self-awareness' | 'self-management' | 'social-awareness' | 'relationship-management';
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
    selfAwareness: number;
    selfManagement: number;
    socialAwareness: number;
    relationshipManagement: number;
  };
}

export interface ChartData {
  factor: string;
  score: number;
  fullMark: 100;
}

export const emotionalIntelligenceQuestions: TestQuestion[] = [
  // Самосознание (12 вопросов)
  {
    id: 1,
    question: "Я хорошо понимаю, что чувствую в каждый момент времени",
    icon: "Eye",
    factor: "self-awareness",
    options: [
      { text: "Полностью согласен", value: 5 },
      { text: "Согласен", value: 4 },
      { text: "Нейтрально", value: 3 },
      { text: "Не согласен", value: 2 },
      { text: "Совершенно не согласен", value: 1 }
    ]
  },
  {
    id: 2,
    question: "Я замечаю, когда мое настроение влияет на окружающих",
    icon: "Users",
    factor: "self-awareness",
    options: [
      { text: "Всегда замечаю", value: 5 },
      { text: "Часто замечаю", value: 4 },
      { text: "Иногда замечаю", value: 3 },
      { text: "Редко замечаю", value: 2 },
      { text: "Никогда не замечаю", value: 1 }
    ]
  },
  {
    id: 3,
    question: "Я понимаю свои сильные и слабые стороны",
    icon: "Target",
    factor: "self-awareness",
    options: [
      { text: "Отлично понимаю", value: 5 },
      { text: "Хорошо понимаю", value: 4 },
      { text: "Понимаю частично", value: 3 },
      { text: "Плохо понимаю", value: 2 },
      { text: "Не понимаю", value: 1 }
    ]
  },
  {
    id: 4,
    question: "Я знаю, что меня мотивирует и вдохновляет",
    icon: "Zap",
    factor: "self-awareness",
    options: [
      { text: "Точно знаю", value: 5 },
      { text: "В основном знаю", value: 4 },
      { text: "Знаю частично", value: 3 },
      { text: "Плохо знаю", value: 2 },
      { text: "Не знаю", value: 1 }
    ]
  },
  {
    id: 5,
    question: "Я осознаю свои ценности и принципы",
    icon: "Anchor",
    factor: "self-awareness",
    options: [
      { text: "Полностью осознаю", value: 5 },
      { text: "Хорошо осознаю", value: 4 },
      { text: "Частично осознаю", value: 3 },
      { text: "Плохо осознаю", value: 2 },
      { text: "Не осознаю", value: 1 }
    ]
  },
  {
    id: 6,
    question: "Я понимаю, как мои эмоции влияют на мои решения",
    icon: "Brain",
    factor: "self-awareness",
    options: [
      { text: "Всегда понимаю", value: 5 },
      { text: "Часто понимаю", value: 4 },
      { text: "Иногда понимаю", value: 3 },
      { text: "Редко понимаю", value: 2 },
      { text: "Не понимаю", value: 1 }
    ]
  },
  {
    id: 7,
    question: "Я замечаю физические проявления своих эмоций",
    icon: "Heart",
    factor: "self-awareness",
    options: [
      { text: "Всегда замечаю", value: 5 },
      { text: "Часто замечаю", value: 4 },
      { text: "Иногда замечаю", value: 3 },
      { text: "Редко замечаю", value: 2 },
      { text: "Не замечаю", value: 1 }
    ]
  },
  {
    id: 8,
    question: "Я понимаю причины своих эмоциональных реакций",
    icon: "Search",
    factor: "self-awareness",
    options: [
      { text: "Всегда понимаю", value: 5 },
      { text: "Часто понимаю", value: 4 },
      { text: "Иногда понимаю", value: 3 },
      { text: "Редко понимаю", value: 2 },
      { text: "Не понимаю", value: 1 }
    ]
  },
  {
    id: 9,
    question: "Я осознаю свои предрассудки и стереотипы",
    icon: "Eye",
    factor: "self-awareness",
    options: [
      { text: "Полностью осознаю", value: 5 },
      { text: "Хорошо осознаю", value: 4 },
      { text: "Частично осознаю", value: 3 },
      { text: "Плохо осознаю", value: 2 },
      { text: "Не осознаю", value: 1 }
    ]
  },
  {
    id: 10,
    question: "Я понимаю, как другие воспринимают мою эмоциональность",
    icon: "Glasses",
    factor: "self-awareness",
    options: [
      { text: "Отлично понимаю", value: 5 },
      { text: "Хорошо понимаю", value: 4 },
      { text: "Понимаю частично", value: 3 },
      { text: "Плохо понимаю", value: 2 },
      { text: "Не понимаю", value: 1 }
    ]
  },
  {
    id: 11,
    question: "Я точно могу назвать свои эмоции в конкретный момент",
    icon: "FileText",
    factor: "self-awareness",
    options: [
      { text: "Всегда могу", value: 5 },
      { text: "Часто могу", value: 4 },
      { text: "Иногда могу", value: 3 },
      { text: "Редко могу", value: 2 },
      { text: "Не могу", value: 1 }
    ]
  },
  {
    id: 12,
    question: "Я знаю свои эмоциональные триггеры и паттерны",
    icon: "Lightbulb",
    factor: "self-awareness",
    options: [
      { text: "Очень хорошо знаю", value: 5 },
      { text: "Хорошо знаю", value: 4 },
      { text: "Знаю частично", value: 3 },
      { text: "Плохо знаю", value: 2 },
      { text: "Не знаю", value: 1 }
    ]
  },

  // Самоконтроль (12 вопросов)
  {
    id: 13,
    question: "Я могу контролировать свои эмоции в стрессовых ситуациях",
    icon: "Shield",
    factor: "self-management",
    options: [
      { text: "Всегда контролирую", value: 5 },
      { text: "Часто контролирую", value: 4 },
      { text: "Иногда контролирую", value: 3 },
      { text: "Редко контролирую", value: 2 },
      { text: "Не контролирую", value: 1 }
    ]
  },
  {
    id: 14,
    question: "Я остаюсь спокойным под давлением",
    icon: "Mountain",
    factor: "self-management",
    options: [
      { text: "Всегда спокоен", value: 5 },
      { text: "Часто спокоен", value: 4 },
      { text: "Иногда спокоен", value: 3 },
      { text: "Редко спокоен", value: 2 },
      { text: "Никогда не спокоен", value: 1 }
    ]
  },
  {
    id: 15,
    question: "Я хорошо справляюсь с изменениями и неопределенностью",
    icon: "Shuffle",
    factor: "self-management",
    options: [
      { text: "Отлично справляюсь", value: 5 },
      { text: "Хорошо справляюсь", value: 4 },
      { text: "Справляюсь", value: 3 },
      { text: "Плохо справляюсь", value: 2 },
      { text: "Не справляюсь", value: 1 }
    ]
  },
  {
    id: 16,
    question: "Я могу сдерживать импульсивные реакции",
    icon: "Pause",
    factor: "self-management",
    options: [
      { text: "Всегда сдерживаю", value: 5 },
      { text: "Часто сдерживаю", value: 4 },
      { text: "Иногда сдерживаю", value: 3 },
      { text: "Редко сдерживаю", value: 2 },
      { text: "Не сдерживаю", value: 1 }
    ]
  },
  {
    id: 17,
    question: "Я быстро восстанавливаюсь после неудач",
    icon: "TrendingUp",
    factor: "self-management",
    options: [
      { text: "Очень быстро", value: 5 },
      { text: "Довольно быстро", value: 4 },
      { text: "Не очень быстро", value: 3 },
      { text: "Медленно", value: 2 },
      { text: "Очень медленно", value: 1 }
    ]
  },
  {
    id: 18,
    question: "Я умею мотивировать себя даже в трудные времена",
    icon: "ArrowUp",
    factor: "self-management",
    options: [
      { text: "Отлично умею", value: 5 },
      { text: "Хорошо умею", value: 4 },
      { text: "Умею частично", value: 3 },
      { text: "Плохо умею", value: 2 },
      { text: "Не умею", value: 1 }
    ]
  },
  {
    id: 19,
    question: "Я могу управлять своим гневом и раздражением",
    icon: "Flame",
    factor: "self-management",
    options: [
      { text: "Полностью контролирую", value: 5 },
      { text: "Хорошо контролирую", value: 4 },
      { text: "Контролирую частично", value: 3 },
      { text: "Плохо контролирую", value: 2 },
      { text: "Не контролирую", value: 1 }
    ]
  },
  {
    id: 20,
    question: "Я остаюсь оптимистичным даже в сложных ситуациях",
    icon: "Sun",
    factor: "self-management",
    options: [
      { text: "Всегда оптимистичен", value: 5 },
      { text: "Часто оптимистичен", value: 4 },
      { text: "Иногда оптимистичен", value: 3 },
      { text: "Редко оптимистичен", value: 2 },
      { text: "Никогда не оптимистичен", value: 1 }
    ]
  },
  {
    id: 21,
    question: "Я могу справиться с тревогой и беспокойством",
    icon: "CloudRain",
    factor: "self-management",
    options: [
      { text: "Отлично справляюсь", value: 5 },
      { text: "Хорошо справляюсь", value: 4 },
      { text: "Справляюсь", value: 3 },
      { text: "Плохо справляюсь", value: 2 },
      { text: "Не справляюсь", value: 1 }
    ]
  },
  {
    id: 22,
    question: "Я принимаю взвешенные решения, а не эмоциональные",
    icon: "Balance",
    factor: "self-management",
    options: [
      { text: "Всегда взвешенные", value: 5 },
      { text: "Часто взвешенные", value: 4 },
      { text: "Иногда взвешенные", value: 3 },
      { text: "Редко взвешенные", value: 2 },
      { text: "Всегда эмоциональные", value: 1 }
    ]
  },
  {
    id: 23,
    question: "Я умею откладывать удовольствие ради долгосрочных целей",
    icon: "Clock",
    factor: "self-management",
    options: [
      { text: "Отлично умею", value: 5 },
      { text: "Хорошо умею", value: 4 },
      { text: "Умею частично", value: 3 },
      { text: "Плохо умею", value: 2 },
      { text: "Не умею", value: 1 }
    ]
  },
  {
    id: 24,
    question: "Я могу адаптировать свое поведение в зависимости от ситуации",
    icon: "Compass",
    factor: "self-management",
    options: [
      { text: "Легко адаптирую", value: 5 },
      { text: "Хорошо адаптирую", value: 4 },
      { text: "Адаптирую частично", value: 3 },
      { text: "Плохо адаптирую", value: 2 },
      { text: "Не адаптирую", value: 1 }
    ]
  },

  // Социальное понимание (11 вопросов)
  {
    id: 25,
    question: "Я хорошо читаю эмоции других людей по их мимике и жестам",
    icon: "Smile",
    factor: "social-awareness",
    options: [
      { text: "Отлично читаю", value: 5 },
      { text: "Хорошо читаю", value: 4 },
      { text: "Читаю частично", value: 3 },
      { text: "Плохо читаю", value: 2 },
      { text: "Не читаю", value: 1 }
    ]
  },
  {
    id: 26,
    question: "Я понимаю невербальные сигналы в общении",
    icon: "Ear",
    factor: "social-awareness",
    options: [
      { text: "Всегда понимаю", value: 5 },
      { text: "Часто понимаю", value: 4 },
      { text: "Иногда понимаю", value: 3 },
      { text: "Редко понимаю", value: 2 },
      { text: "Не понимаю", value: 1 }
    ]
  },
  {
    id: 27,
    question: "Я чувствую эмоциональную атмосферу в группе людей",
    icon: "Users2",
    factor: "social-awareness",
    options: [
      { text: "Очень хорошо чувствую", value: 5 },
      { text: "Хорошо чувствую", value: 4 },
      { text: "Чувствую частично", value: 3 },
      { text: "Плохо чувствую", value: 2 },
      { text: "Не чувствую", value: 1 }
    ]
  },
  {
    id: 28,
    question: "Я понимаю потребности и чувства других людей",
    icon: "HeartHandshake",
    factor: "social-awareness",
    options: [
      { text: "Отлично понимаю", value: 5 },
      { text: "Хорошо понимаю", value: 4 },
      { text: "Понимаю частично", value: 3 },
      { text: "Плохо понимаю", value: 2 },
      { text: "Не понимаю", value: 1 }
    ]
  },
  {
    id: 29,
    question: "Я замечаю, когда кто-то нуждается в поддержке",
    icon: "Hand",
    factor: "social-awareness",
    options: [
      { text: "Всегда замечаю", value: 5 },
      { text: "Часто замечаю", value: 4 },
      { text: "Иногда замечаю", value: 3 },
      { text: "Редко замечаю", value: 2 },
      { text: "Не замечаю", value: 1 }
    ]
  },
  {
    id: 30,
    question: "Я понимаю социальную динамику и иерархии",
    icon: "Network",
    factor: "social-awareness",
    options: [
      { text: "Очень хорошо понимаю", value: 5 },
      { text: "Хорошо понимаю", value: 4 },
      { text: "Понимаю частично", value: 3 },
      { text: "Плохо понимаю", value: 2 },
      { text: "Не понимаю", value: 1 }
    ]
  },
  {
    id: 31,
    question: "Я могу поставить себя на место другого человека",
    icon: "UserCheck",
    factor: "social-awareness",
    options: [
      { text: "Легко могу", value: 5 },
      { text: "Часто могу", value: 4 },
      { text: "Иногда могу", value: 3 },
      { text: "Редко могу", value: 2 },
      { text: "Не могу", value: 1 }
    ]
  },
  {
    id: 32,
    question: "Я понимаю культурные различия в выражении эмоций",
    icon: "Globe",
    factor: "social-awareness",
    options: [
      { text: "Отлично понимаю", value: 5 },
      { text: "Хорошо понимаю", value: 4 },
      { text: "Понимаю частично", value: 3 },
      { text: "Плохо понимаю", value: 2 },
      { text: "Не понимаю", value: 1 }
    ]
  },
  {
    id: 33,
    question: "Я чувствую, когда атмосфера в разговоре меняется",
    icon: "Thermometer",
    factor: "social-awareness",
    options: [
      { text: "Всегда чувствую", value: 5 },
      { text: "Часто чувствую", value: 4 },
      { text: "Иногда чувствую", value: 3 },
      { text: "Редко чувствую", value: 2 },
      { text: "Не чувствую", value: 1 }
    ]
  },
  {
    id: 34,
    question: "Я понимаю скрытые мотивы поведения людей",
    icon: "Search",
    factor: "social-awareness",
    options: [
      { text: "Очень хорошо понимаю", value: 5 },
      { text: "Хорошо понимаю", value: 4 },
      { text: "Понимаю частично", value: 3 },
      { text: "Плохо понимаю", value: 2 },
      { text: "Не понимаю", value: 1 }
    ]
  },
  {
    id: 35,
    question: "Я замечаю изменения в настроении окружающих",
    icon: "Activity",
    factor: "social-awareness",
    options: [
      { text: "Всегда замечаю", value: 5 },
      { text: "Часто замечаю", value: 4 },
      { text: "Иногда замечаю", value: 3 },
      { text: "Редко замечаю", value: 2 },
      { text: "Не замечаю", value: 1 }
    ]
  },

  // Управление отношениями (10 вопросов)
  {
    id: 36,
    question: "Я умею успокаивать расстроенных людей",
    icon: "HeartCrack",
    factor: "relationship-management",
    options: [
      { text: "Отлично умею", value: 5 },
      { text: "Хорошо умею", value: 4 },
      { text: "Умею частично", value: 3 },
      { text: "Плохо умею", value: 2 },
      { text: "Не умею", value: 1 }
    ]
  },
  {
    id: 37,
    question: "Я эффективно разрешаю конфликты между людьми",
    icon: "Handshake",
    factor: "relationship-management",
    options: [
      { text: "Очень эффективно", value: 5 },
      { text: "Довольно эффективно", value: 4 },
      { text: "Не очень эффективно", value: 3 },
      { text: "Неэффективно", value: 2 },
      { text: "Совсем неэффективно", value: 1 }
    ]
  },
  {
    id: 38,
    question: "Я умею вдохновлять и мотивировать других",
    icon: "Trophy",
    factor: "relationship-management",
    options: [
      { text: "Отлично умею", value: 5 },
      { text: "Хорошо умею", value: 4 },
      { text: "Умею частично", value: 3 },
      { text: "Плохо умею", value: 2 },
      { text: "Не умею", value: 1 }
    ]
  },
  {
    id: 39,
    question: "Я легко налаживаю связи с новыми людьми",
    icon: "UserX",
    factor: "relationship-management",
    options: [
      { text: "Очень легко", value: 5 },
      { text: "Довольно легко", value: 4 },
      { text: "Не очень легко", value: 3 },
      { text: "Трудно", value: 2 },
      { text: "Очень трудно", value: 1 }
    ]
  },
  {
    id: 40,
    question: "Я умею давать конструктивную обратную связь",
    icon: "MessageCircle",
    factor: "relationship-management",
    options: [
      { text: "Отлично умею", value: 5 },
      { text: "Хорошо умею", value: 4 },
      { text: "Умею частично", value: 3 },
      { text: "Плохо умею", value: 2 },
      { text: "Не умею", value: 1 }
    ]
  },
  {
    id: 41,
    question: "Я могу влиять на других, не прибегая к принуждению",
    icon: "Magnet",
    factor: "relationship-management",
    options: [
      { text: "Легко могу", value: 5 },
      { text: "Часто могу", value: 4 },
      { text: "Иногда могу", value: 3 },
      { text: "Редко могу", value: 2 },
      { text: "Не могу", value: 1 }
    ]
  },
  {
    id: 42,
    question: "Я умею работать в команде и сотрудничать",
    icon: "Users2",
    factor: "relationship-management",
    options: [
      { text: "Отлично умею", value: 5 },
      { text: "Хорошо умею", value: 4 },
      { text: "Умею частично", value: 3 },
      { text: "Плохо умею", value: 2 },
      { text: "Не умею", value: 1 }
    ]
  },
  {
    id: 43,
    question: "Я легко адаптируюсь к различным стилям общения",
    icon: "Shuffle",
    factor: "relationship-management",
    options: [
      { text: "Очень легко", value: 5 },
      { text: "Довольно легко", value: 4 },
      { text: "Не очень легко", value: 3 },
      { text: "Трудно", value: 2 },
      { text: "Очень трудно", value: 1 }
    ]
  },
  {
    id: 44,
    question: "Я умею создавать доверительные отношения",
    icon: "Lock",
    factor: "relationship-management",
    options: [
      { text: "Отлично умею", value: 5 },
      { text: "Хорошо умею", value: 4 },
      { text: "Умею частично", value: 3 },
      { text: "Плохо умею", value: 2 },
      { text: "Не умею", value: 1 }
    ]
  },
  {
    id: 45,
    question: "Я эффективно управляю своими взаимоотношениями",
    icon: "Settings",
    factor: "relationship-management",
    options: [
      { text: "Очень эффективно", value: 5 },
      { text: "Довольно эффективно", value: 4 },
      { text: "Не очень эффективно", value: 3 },
      { text: "Неэффективно", value: 2 },
      { text: "Совсем неэффективно", value: 1 }
    ]
  }
];

export const emotionalIntelligenceResults: TestResult[] = [
  {
    id: "very-low",
    name: "Очень низкий EQ",
    emoji: "🌧️",
    color: "orange",
    description: "Ваш эмоциональный интеллект находится на начальной стадии развития. Возможно, вам сложно понимать свои эмоции и эмоции окружающих, что может создавать трудности в общении и самоуправлении.",
    characteristics: [
      "Сложности с распознаванием эмоций",
      "Трудности в управлении стрессом",
      "Проблемы в межличностном общении",
      "Импульсивные реакции"
    ],
    advice: [
      "Начните с изучения базовых эмоций",
      "Практикуйте осознанность и медитацию",
      "Ведите эмоциональный дневник",
      "Обратитесь к психологу или коучу",
      "Читайте книги по эмоциональному интеллекту"
    ],
    score: { min: 45, max: 90 },
    factors: { selfAwareness: 20, selfManagement: 20, socialAwareness: 20, relationshipManagement: 20 }
  },
  {
    id: "low",
    name: "Низкий EQ",
    emoji: "⛅",
    color: "yellow",
    description: "Ваш эмоциональный интеллект ниже среднего уровня. У вас есть базовое понимание эмоций, но требуется дальнейшее развитие навыков самосознания и управления отношениями.",
    characteristics: [
      "Базовое понимание эмоций",
      "Периодические трудности с самоконтролем",
      "Ограниченная эмпатия",
      "Неуверенность в социальных ситуациях"
    ],
    advice: [
      "Развивайте навыки активного слушания",
      "Практикуйте техники управления стрессом",
      "Работайте над повышением самосознания",
      "Изучайте невербальные сигналы",
      "Участвуйте в групповых активностях"
    ],
    score: { min: 91, max: 135 },
    factors: { selfAwareness: 35, selfManagement: 35, socialAwareness: 35, relationshipManagement: 30 }
  },
  {
    id: "average",
    name: "Средний EQ",
    emoji: "🌤️",
    color: "blue",
    description: "Ваш эмоциональный интеллект находится на среднем уровне. Вы достаточно хорошо понимаете эмоции и умеете управлять ими в большинстве ситуаций, но есть возможности для дальнейшего роста.",
    characteristics: [
      "Хорошее базовое понимание эмоций",
      "Умеренные навыки самоконтроля",
      "Адекватная эмпатия",
      "Неплохие коммуникативные способности"
    ],
    advice: [
      "Развивайте более тонкое понимание эмоций",
      "Практикуйте продвинутые техники саморегуляции",
      "Улучшайте навыки разрешения конфликтов",
      "Работайте над лидерскими качествами",
      "Изучайте психологию межличностных отношений"
    ],
    score: { min: 136, max: 180 },
    factors: { selfAwareness: 50, selfManagement: 50, socialAwareness: 50, relationshipManagement: 50 }
  },
  {
    id: "high",
    name: "Высокий EQ",
    emoji: "☀️",
    color: "green",
    description: "У вас высокий уровень эмоционального интеллекта. Вы хорошо понимаете себя и других, эффективно управляете эмоциями и строите качественные отношения с окружающими.",
    characteristics: [
      "Отличное самопознание",
      "Эффективный самоконтроль",
      "Развитая эмпатия",
      "Сильные социальные навыки"
    ],
    advice: [
      "Делитесь своими навыками с другими",
      "Развивайте способности наставника",
      "Изучайте продвинутые техники влияния",
      "Работайте в сложных командных проектах",
      "Рассмотрите карьеру в области лидерства"
    ],
    score: { min: 181, max: 205 },
    factors: { selfAwareness: 70, selfManagement: 70, socialAwareness: 70, relationshipManagement: 70 }
  },
  {
    id: "very-high",
    name: "Очень высокий EQ",
    emoji: "🌟",
    color: "purple",
    description: "У вас исключительно высокий уровень эмоционального интеллекта. Вы являетесь мастером в понимании и управлении эмоциями, способны вдохновлять других и создавать гармоничные отношения.",
    characteristics: [
      "Глубокое самопознание и саморефлексия",
      "Превосходный самоконтроль",
      "Высочайший уровень эмпатии",
      "Выдающиеся лидерские качества"
    ],
    advice: [
      "Станьте ментором для развития EQ других",
      "Изучайте культурные особенности эмоций",
      "Развивайте навыки эмоционального коучинга",
      "Создавайте программы по развитию EQ",
      "Применяйте свои навыки в сложных ситуациях"
    ],
    score: { min: 206, max: 225 },
    factors: { selfAwareness: 85, selfManagement: 85, socialAwareness: 85, relationshipManagement: 85 }
  }
];

export function calculateEmotionalIntelligenceResult(answers: number[]): TestResult {
  const totalScore = answers.reduce((sum, answer) => sum + answer, 0);
  
  // Подсчет баллов по факторам
  const selfAwarenessScore = answers.slice(0, 12).reduce((sum, answer) => sum + answer, 0);
  const selfManagementScore = answers.slice(12, 24).reduce((sum, answer) => sum + answer, 0);
  const socialAwarenessScore = answers.slice(24, 35).reduce((sum, answer) => sum + answer, 0);
  const relationshipManagementScore = answers.slice(35, 45).reduce((sum, answer) => sum + answer, 0);

  // Нормализация баллов в проценты (max для каждого фактора: самосознание=60, самоконтроль=60, социальное понимание=55, управление отношениями=50)
  const factors = {
    selfAwareness: Math.round((selfAwarenessScore / 60) * 100),
    selfManagement: Math.round((selfManagementScore / 60) * 100),
    socialAwareness: Math.round((socialAwarenessScore / 55) * 100),
    relationshipManagement: Math.round((relationshipManagementScore / 50) * 100)
  };

  // Определяем результат на основе общего балла
  const result = emotionalIntelligenceResults.find(result => 
    totalScore >= result.score.min && totalScore <= result.score.max
  ) || emotionalIntelligenceResults[2]; // Fallback to average

  return {
    ...result,
    factors
  };
}

// Функция для получения результата по ID
export function getEmotionalIntelligenceById(id: string): TestResult | undefined {
  return emotionalIntelligenceResults.find(result => result.id === id);
}

export function getEmotionalIntelligenceChartData(answers: number[]): ChartData[] {
  const result = calculateEmotionalIntelligenceResult(answers);
  
  return [
    { factor: "Самосознание", score: result.factors.selfAwareness, fullMark: 100 },
    { factor: "Самоконтроль", score: result.factors.selfManagement, fullMark: 100 },
    { factor: "Социальное понимание", score: result.factors.socialAwareness, fullMark: 100 },
    { factor: "Управление отношениями", score: result.factors.relationshipManagement, fullMark: 100 }
  ];
}