# PsyTest - Платформа психологических тестов

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black)](https://ui.shadcn.com)

Современная платформа для прохождения психологических тестов с необруталистическим дизайном, оптимизированная для поисковых систем Яндекс.

## 🎯 Особенности

- **58 научно обоснованных тестов** в трёх категориях
- **Необруталистический дизайн** - яркий, смелый, запоминающийся
- **SEO-оптимизация для Яндекс** - учтены алгоритмы YATI, Королёв, Баден-Баден
- **Адаптивный интерфейс** - отлично работает на любых устройствах
- **Функция шаринга результатов** - делитесь результатами в социальных сетях
- **Быстрая загрузка** - статическая генерация страниц (SSG)

## 🚀 Быстрый старт

### Требования

- Node.js 18.17 или выше
- npm, yarn или pnpm

### Установка

```bash
# Клонируйте репозиторий
git clone [your-repo-url]
cd psytest-site

# Установите зависимости
npm install
# или
yarn install
# или
pnpm install

# Скопируйте файл окружения
cp .env.example .env.local

# Запустите сервер разработки
npm run dev
# или
yarn dev
# или
pnpm dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📁 Структура проекта

```
psytest-site/
├── src/
│   ├── app/                    # Next.js App Router страницы
│   │   ├── (main)/            # Основные страницы сайта
│   │   ├── tests/             # Страницы тестов
│   │   └── globals.css        # Глобальные стили и CSS-переменные
│   ├── components/            # React компоненты
│   │   ├── landing/          # Компоненты лендинга
│   │   ├── tests/            # Компоненты тестов
│   │   └── ui/               # UI компоненты (shadcn/ui + custom)
│   ├── data/                 # Данные тестов
│   ├── hooks/                # React хуки
│   ├── lib/                  # Утилиты и хелперы
│   └── config/               # Конфигурация
├── public/                   # Статические файлы
└── agents/                   # AI агенты для разработки
```

## 🛠 Технологии

- **[Next.js 15.5.2](https://nextjs.org)** - React фреймворк с App Router
- **[TypeScript](https://www.typescriptlang.org)** - статическая типизация
- **[Tailwind CSS v4](https://tailwindcss.com)** - CSS фреймворк
- **[shadcn/ui](https://ui.shadcn.com)** - компоненты интерфейса
- **[Framer Motion](https://www.framer.com/motion/)** - анимации
- **[Radix UI](https://www.radix-ui.com)** - headless UI компоненты

## 🎨 Дизайн-система

Проект использует необруталистический дизайн с:
- Толстыми чёрными границами (2px)
- Жёсткими тенями (4px 4px 0px)
- Яркими цветами (жёлтый, синий, оранжевый)
- Жирной типографикой в верхнем регистре
- Минималистичными закруглениями

### CSS переменные

```css
:root {
  --background: oklch(96.22% 0.0569 95.61);
  --foreground: oklch(0% 0 0);
  --main: oklch(84.08% 0.1725 84.2);
  --border: oklch(0% 0 0);
  --shadow: 4px 4px 0px 0px var(--border);
  --chart-1: #FFBF00; /* Жёлтый */
  --chart-2: #0099FF; /* Синий */
  --chart-3: #FF7A05; /* Оранжевый */
  --chart-4: #00D696; /* Зелёный */
  --chart-5: #7A83FF; /* Фиолетовый */
}
```

## 🔍 SEO и Яндекс

Сайт оптимизирован для поисковых систем с акцентом на Яндекс:

- **Семантическое ядро** - проработанные ключевые слова
- **Микроразметка Schema.org** - для лучшего понимания контента
- **Оптимизация под YATI** - учёт нейросетевого алгоритма
- **Качественный контент** - соответствие алгоритму Королёв
- **Быстрая загрузка** - важный фактор ранжирования

## 📝 Скрипты

```bash
# Разработка
npm run dev              # Запуск сервера разработки

# Сборка
npm run build           # Production сборка
npm run start           # Запуск production сервера

# Качество кода
npm run lint            # Проверка линтером
npm run typecheck       # Проверка типов TypeScript
npm run format          # Форматирование кода

# Тестирование
npm run test            # Запуск тестов
npm run test:watch      # Тесты в режиме watch
```

## 🤝 Вклад в проект

Мы приветствуем вклад в развитие проекта! Пожалуйста:

1. Форкните репозиторий
2. Создайте ветку для фичи (`git checkout -b feature/amazing-feature`)
3. Закоммитьте изменения (`git commit -m 'Add amazing feature'`)
4. Запушьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

MIT License - см. файл [LICENSE](LICENSE) для деталей.

## 🙏 Благодарности

- [shadcn/ui](https://ui.shadcn.com) за отличные компоненты
- [Neobrutalism.dev](https://www.neobrutalism.dev) за вдохновение дизайном
- Команде Next.js за потрясающий фреймворк

---

Создано с ❤️ используя [Claude Code](https://claude.ai/code)
