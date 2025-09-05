export interface TestQuestion {
  id: number;
  question: string;
  icon: 'smartphone' | 'clock' | 'users' | 'shield' | 'zap' | 'heart';
  options: {
    text: string;
    value: number;
  }[];
}

export interface DigitalPersona {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  advice: string[];
  color: string;
  emoji: string;
  percentage: number;
}

export const digitalWellnessQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "Как часто вы проверяете свой смартфон в течение дня?",
    icon: "smartphone",
    options: [
      { text: "Меньше 10 раз в день", value: 4 },
      { text: "10-30 раз в день", value: 3 },
      { text: "30-60 раз в день", value: 2 },
      { text: "Больше 60 раз в день", value: 1 }
    ]
  },
  {
    id: 2,
    question: "Сколько времени вы проводите в социальных сетях ежедневно?",
    icon: "clock",
    options: [
      { text: "Меньше 30 минут", value: 4 },
      { text: "30 минут - 1 час", value: 3 },
      { text: "1-3 часа", value: 2 },
      { text: "Больше 3 часов", value: 1 }
    ]
  },
  {
    id: 3,
    question: "Как вы относитесь к уведомлениям на телефоне?",
    icon: "shield",
    options: [
      { text: "Отключаю большинство уведомлений", value: 4 },
      { text: "Включены только важные", value: 3 },
      { text: "Включены почти все", value: 2 },
      { text: "Все уведомления включены", value: 1 }
    ]
  },
  {
    id: 4,
    question: "Как быстро вы берете телефон после пробуждения?",
    icon: "clock",
    options: [
      { text: "Через час или позже", value: 4 },
      { text: "Через 30-60 минут", value: 3 },
      { text: "Через 5-30 минут", value: 2 },
      { text: "Сразу же", value: 1 }
    ]
  },
  {
    id: 5,
    question: "Как вы реагируете на цифровой детокс?",
    icon: "heart",
    options: [
      { text: "Регулярно практикую", value: 4 },
      { text: "Иногда устраиваю", value: 3 },
      { text: "Хотел бы попробовать", value: 2 },
      { text: "Это не для меня", value: 1 }
    ]
  },
  {
    id: 6,
    question: "Насколько важны для вас лайки и комментарии?",
    icon: "users",
    options: [
      { text: "Совсем не важны", value: 4 },
      { text: "Приятно, но не критично", value: 3 },
      { text: "Довольно важны", value: 2 },
      { text: "Очень важны", value: 1 }
    ]
  },
  {
    id: 7,
    question: "Как часто вы чувствуете FOMO (страх упустить что-то важное)?",
    icon: "zap",
    options: [
      { text: "Практически никогда", value: 4 },
      { text: "Редко", value: 3 },
      { text: "Часто", value: 2 },
      { text: "Постоянно", value: 1 }
    ]
  },
  {
    id: 8,
    question: "Можете ли вы сосредоточиться на задаче без проверки телефона?",
    icon: "shield",
    options: [
      { text: "Легко фокусируюсь на несколько часов", value: 4 },
      { text: "Могу час-два не отвлекаться", value: 3 },
      { text: "Максимум 30 минут", value: 2 },
      { text: "Постоянно отвлекаюсь", value: 1 }
    ]
  },
  {
    id: 9,
    question: "Как вы проводите время перед сном?",
    icon: "clock",
    options: [
      { text: "Читаю книгу или медитирую", value: 4 },
      { text: "Иногда смотрю телефон", value: 3 },
      { text: "Часто листаю соцсети", value: 2 },
      { text: "Всегда с телефоном", value: 1 }
    ]
  },
  {
    id: 10,
    question: "Как вы относитесь к цифровым границам?",
    icon: "shield",
    options: [
      { text: "Строго соблюдаю", value: 4 },
      { text: "Стараюсь придерживаться", value: 3 },
      { text: "Хочу установить", value: 2 },
      { text: "Не вижу смысла", value: 1 }
    ]
  },
  {
    id: 11,
    question: "Влияют ли технологии на ваше настроение?",
    icon: "heart",
    options: [
      { text: "Нет, я контролирую это", value: 4 },
      { text: "Иногда влияют", value: 3 },
      { text: "Часто влияют", value: 2 },
      { text: "Сильно зависит от них", value: 1 }
    ]
  },
  {
    id: 12,
    question: "Как вы используете технологии для саморазвития?",
    icon: "zap",
    options: [
      { text: "Активно учусь и развиваюсь", value: 4 },
      { text: "Иногда использую для обучения", value: 3 },
      { text: "В основном для развлечений", value: 2 },
      { text: "Только для соцсетей и игр", value: 1 }
    ]
  }
];

export const digitalPersonas: DigitalPersona[] = [
  {
    id: "digital-minimalist",
    name: "Цифровой минималист",
    emoji: "🧘",
    color: "green",
    description: "Вы мастерски управляете своей цифровой жизнью. Технологии служат вам, а не наоборот. Вы используете гаджеты осознанно и умеете наслаждаться моментами без экрана.",
    characteristics: [
      "Отличный контроль над экранным временем",
      "Осознанное использование технологий",
      "Здоровые цифровые привычки",
      "Баланс онлайн и офлайн жизни"
    ],
    advice: [
      "Продолжайте практиковать цифровой детокс",
      "Делитесь опытом с другими",
      "Исследуйте новые офлайн хобби",
      "Помогайте близким найти баланс"
    ],
    percentage: 15
  },
  {
    id: "social-butterfly",
    name: "Социальная бабочка",
    emoji: "🦋",
    color: "purple",
    description: "Вы любите общение и активно используете социальные сети для поддержания связей. Технологии помогают вам быть на связи с друзьями и быть в курсе событий.",
    characteristics: [
      "Активность в социальных сетях",
      "Широкий круг онлайн-знакомств",
      "Быстрая адаптация к новым платформам",
      "Эмоциональная вовлеченность"
    ],
    advice: [
      "Установите время для офлайн встреч",
      "Практикуйте периоды тишины",
      "Фильтруйте информационный поток",
      "Развивайте глубокие связи"
    ],
    percentage: 25
  },
  {
    id: "mindful-scroller",
    name: "Осознанный пользователь",
    emoji: "📱",
    color: "blue",
    description: "Вы стремитесь к балансу в цифровой жизни. Понимаете важность технологий, но также осознаете необходимость границ и периодического отдыха от экранов.",
    characteristics: [
      "Умеренное использование гаджетов",
      "Попытки контролировать время",
      "Осознание цифровых привычек",
      "Стремление к балансу"
    ],
    advice: [
      "Экспериментируйте с цифровым детоксом",
      "Используйте приложения для контроля времени",
      "Создайте зоны без телефона дома",
      "Планируйте офлайн активности"
    ],
    percentage: 30
  },
  {
    id: "tech-overwhelmed",
    name: "Цифровой заложник",
    emoji: "😵",
    color: "red",
    description: "Технологии часто контролируют вашу жизнь больше, чем вы их. Вы чувствуете зависимость от гаджетов и испытываете стресс от постоянного потока информации.",
    characteristics: [
      "Высокая зависимость от технологий",
      "Частая проверка устройств",
      "Стресс от информационного потока",
      "Трудности с концентрацией"
    ],
    advice: [
      "Начните с малого - час без телефона",
      "Отключите ненужные уведомления",
      "Попробуйте медитацию или йогу",
      "Обратитесь за поддержкой к близким"
    ],
    percentage: 20
  },
  {
    id: "digital-zen-master",
    name: "Цифровой дзен-мастер",
    emoji: "☯️",
    color: "indigo",
    description: "Вы достигли просветления в цифровую эпоху. Технологии - это инструмент, который вы используете мудро и целенаправленно, сохраняя внутреннюю гармонию.",
    characteristics: [
      "Полный контроль над цифровой жизнью",
      "Мудрое использование технологий",
      "Внутреннее спокойствие",
      "Вдохновляющий пример для других"
    ],
    advice: [
      "Обучайте других цифровой мудрости",
      "Создайте курс или блог о балансе",
      "Продолжайте свою практику",
      "Исследуйте новые формы mindfulness"
    ],
    percentage: 5
  },
  {
    id: "connected-achiever",
    name: "Подключенный достигатор",
    emoji: "🚀",
    color: "orange",
    description: "Вы эффективно используете технологии для достижения целей. Гаджеты - ваши помощники в продуктивности, но иногда граница между работой и отдыхом размывается.",
    characteristics: [
      "Высокая продуктивность с технологиями",
      "Использование множества приложений",
      "Стремление к эффективности",
      "Риск выгорания"
    ],
    advice: [
      "Установите четкие рабочие часы",
      "Практикуйте регулярные перерывы",
      "Найдите хобби без экранов",
      "Уделяйте время восстановлению"
    ],
    percentage: 3
  },
  {
    id: "screen-time-warrior",
    name: "Воин экранного времени",
    emoji: "⚔️",
    color: "yellow",
    description: "Вы находитесь в постоянной битве с экранным временем. Понимаете проблему и активно ищете способы ее решения, хотя это дается нелегко.",
    characteristics: [
      "Осознание проблемы",
      "Активные попытки изменений",
      "Периодические срывы",
      "Желание улучшить ситуацию"
    ],
    advice: [
      "Отмечайте маленькие победы",
      "Найдите партнера для поддержки",
      "Используйте блокировщики приложений",
      "Будьте терпеливы к себе"
    ],
    percentage: 2
  },
  {
    id: "digital-nomad",
    name: "Цифровой кочевник",
    emoji: "🌍",
    color: "teal",
    description: "Ваша жизнь тесно переплетена с технологиями, но вы умеете находить красоту в этом симбиозе. Вы адаптивны и используете цифровые инструменты для расширения горизонтов.",
    characteristics: [
      "Гибкость в использовании технологий",
      "Исследование новых платформ",
      "Глобальное мышление",
      "Адаптивность к изменениям"
    ],
    advice: [
      "Исследуйте цифровые культуры мира",
      "Создавайте осмысленный контент",
      "Находите офлайн приключения",
      "Стройте глобальные связи"
    ],
    percentage: 0
  }
];

// Функция для получения персоны по ID
export function getDigitalPersonaById(id: string): DigitalPersona | undefined {
  return digitalPersonas.find(persona => persona.id === id);
}

export function calculateDigitalPersona(answers: number[]): DigitalPersona {
  const totalScore = answers.reduce((sum, answer) => sum + answer, 0);
  const averageScore = totalScore / answers.length;
  
  // Подсчет специфических паттернов
  const socialMediaScore = (answers[1] + answers[5]) / 2;
  const focusScore = (answers[0] + answers[7]) / 2;
  const boundariesScore = (answers[2] + answers[9]) / 2;
  const wellbeingScore = (answers[4] + answers[10]) / 2;
  
  // Определение персоны на основе комбинации факторов
  if (averageScore >= 3.5 && boundariesScore >= 3.5) {
    return digitalPersonas.find(p => p.id === "digital-zen-master")!;
  } else if (averageScore >= 3.2 && wellbeingScore >= 3) {
    return digitalPersonas.find(p => p.id === "digital-minimalist")!;
  } else if (socialMediaScore <= 2 && focusScore >= 3) {
    return digitalPersonas.find(p => p.id === "social-butterfly")!;
  } else if (averageScore >= 2.5 && averageScore < 3.2) {
    return digitalPersonas.find(p => p.id === "mindful-scroller")!;
  } else if (focusScore >= 3 && wellbeingScore >= 2.5) {
    return digitalPersonas.find(p => p.id === "connected-achiever")!;
  } else if (averageScore >= 2 && boundariesScore < 2.5) {
    return digitalPersonas.find(p => p.id === "screen-time-warrior")!;
  } else if (averageScore < 2) {
    return digitalPersonas.find(p => p.id === "tech-overwhelmed")!;
  } else {
    return digitalPersonas.find(p => p.id === "digital-nomad")!;
  }
}