# Claude Code Configuration - PsyTest

## 📋 Project Overview

PsyTest - платформа психологических тестов с необруталистическим дизайном и SEO-оптимизацией под Яндекс. Проект создан с использованием AI-агентов для ускорения разработки и повышения качества кода.

### Tech Stack
- Next.js 15.5.2 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion

## 🤖 AI Agents Configuration

### Available Agents

1. **SEO Yandex Optimizer** (`/agents/seo/yandex-seo-optimizer.md`)
   - Оптимизация под алгоритмы Яндекса (YATI, Королёв, Баден-Баден)
   - Семантическое ядро и LSI-слова
   - Микроразметка и структурированные данные
   - Анализ поведенческих факторов

2. **Neobrutalism Design Agent**
   - Применение принципов необруталистического дизайна
   - Создание компонентов с толстыми границами и жёсткими тенями
   - Яркая цветовая палитра без градиентов
   - Uppercase жирная типографика

3. **Test Creation Agent**
   - Генерация научно обоснованных психологических тестов
   - Создание системы подсчёта результатов
   - Разработка интерпретаций и рекомендаций

### Agent Usage Guidelines

При работе с проектом используйте агентов для:

1. **SEO оптимизации**:
   ```
   "Используй Yandex SEO агента для оптимизации страницы /tests под запрос 'психологические тесты онлайн'"
   ```

2. **Создания UI компонентов**:
   ```
   "Создай новый компонент карточки теста используя необруталистический дизайн"
   ```

3. **Добавления тестов**:
   ```
   "Добавь новый тест на эмоциональный интеллект с 20 вопросами"
   ```

## 🎨 Design System

### Colors
- Background: `oklch(96.22% 0.0569 95.61)`
- Foreground: `oklch(0% 0 0)` (черный)
- Main: `oklch(84.08% 0.1725 84.2)` (жёлтый)
- Chart colors: `#FFBF00`, `#0099FF`, `#FF7A05`, `#00D696`, `#7A83FF`

### Key Design Principles
- Толщина границ: 2px
- Тени: 4px 4px 0px 0px
- Никаких градиентов
- Минимальные border-radius
- Uppercase для заголовков

## 📁 Project Structure

```
psytest-site/
├── src/
│   ├── app/              # Pages (App Router)
│   ├── components/       # React components
│   │   ├── landing/      # Landing page components
│   │   ├── tests/        # Test components
│   │   └── ui/           # UI components
│   ├── data/             # Test data (58 tests)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utilities
│   └── config/           # Configuration files
└── agents/               # AI agents
```

## 🔧 Development Commands

```bash
# Development
npm run dev

# Quality checks (ALWAYS run before committing)
npm run lint
npm run typecheck

# Build
npm run build
```

## ✅ Code Quality Standards

1. **TypeScript**: Строгая типизация везде
2. **Imports**: Использовать @ алиасы (`@/components`, `@/lib`)
3. **Components**: Следовать паттернам shadcn/ui
4. **Styling**: Только Tailwind классы, никаких inline стилей
5. **SEO**: Все страницы должны иметь metadata

## 🚀 Performance Requirements

- Lighthouse Score: >90
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Bundle size: <150KB (first load)

## 📝 Git Workflow

1. Создавать осмысленные коммиты
2. Использовать conventional commits
3. Всегда проверять `npm run lint` и `npm run typecheck`
4. Не коммитить сломанный код

## 🎯 Project Goals

1. **SEO**: ТОП-10 Яндекса по запросам "психологические тесты"
2. **UX**: Completion rate тестов >70%
3. **Performance**: Загрузка <3 секунд на 3G
4. **Design**: Узнаваемый необруталистический стиль

## 🤝 Collaboration Notes

- Проект оптимизирован для работы с Claude Code
- Используйте агентов для рутинных задач
- Фокусируйтесь на качестве кода и UX
- Следуйте установленным паттернам

---

*Последнее обновление: [current date]*
*Создано с помощью Claude Code и AI-агентов*