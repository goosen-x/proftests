# SkillQuiz Migration Guide

## Миграция с Vercel на собственный сервер

### 📋 Обзор

Этот документ описывает процесс миграции проекта SkillQuiz с Vercel на собственный сервер с настройкой CI/CD через GitHub Actions.

### 🛠️ Подготовка сервера

#### Требования к серверу

- Ubuntu 22.04 LTS
- Минимум 2 CPU, 4GB RAM
- Node.js 18+
- PM2 для управления процессами
- Nginx для проксирования

#### Установка зависимостей на сервере

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка Node.js через nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18

# Установка PM2
npm install -g pm2
pm2 startup

# Установка Nginx
sudo apt install nginx -y

# Установка Certbot для SSL
sudo apt install certbot python3-certbot-nginx -y
```

### 🔐 Настройка GitHub Secrets

Добавьте следующие секреты в настройках репозитория GitHub:

- `DEPLOY_HOST` - IP адрес сервера
- `DEPLOY_USER` - имя пользователя (обычно `admin`)
- `DEPLOY_PORT` - SSH порт (по умолчанию 22)
- `DEPLOY_KEY` - приватный SSH ключ для доступа к серверу
- `SLACK_WEBHOOK` - (опционально) webhook для уведомлений

### 📁 Структура на сервере

```
/home/admin/
└── apps/
    └── skillquiz/         # Директория приложения
        ├── .next/         # Скомпилированные файлы
        ├── public/        # Статические файлы
        ├── node_modules/  # Зависимости
        ├── logs/          # Логи приложения
        ├── package.json   # Конфигурация npm
        ├── ecosystem.config.js
        └── .env          # Переменные окружения
```

### 🔌 Порты приложений

- **pixeltool**: 3000
- **nabor-slova**: 3001
- **skillquiz**: 3002

### 🚀 Процесс деплоя

#### Автоматический деплой через GitHub Actions

1. Пуш в ветку `main` автоматически запускает деплой
2. GitHub Actions выполняет:
   - Проверку типов и линтинг
   - Сборку проекта в standalone режиме
   - Загрузку на сервер
   - Перезапуск через PM2

#### Ручной деплой

```bash
# Установите переменные окружения
export DEPLOY_HOST=your-server-ip
export DEPLOY_USER=admin
export DEPLOY_PORT=22

# Запустите скрипт деплоя
./deploy.sh
```

### ⚙️ Настройка Nginx

1. Скопируйте конфигурацию на сервер:

```bash
sudo cp deploy/nginx/skillquiz.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/skillquiz.conf /etc/nginx/sites-enabled/
```

2. Получите SSL сертификаты:

```bash
sudo certbot --nginx -d skillquiz.ru -d www.skillquiz.ru
```

3. Перезапустите Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### 🔍 Мониторинг и логи

#### Просмотр логов

```bash
# PM2 логи
pm2 logs skillquiz

# Nginx логи
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

#### Мониторинг процессов

```bash
# Статус PM2
pm2 status

# Мониторинг в реальном времени
pm2 monit
```

### 🆘 Устранение неполадок

#### Приложение не запускается

1. Проверьте логи: `pm2 logs skillquiz`
2. Убедитесь в наличии `.env.production`
3. Проверьте права доступа: `ls -la /home/admin/apps/skillquiz`

#### 502 Bad Gateway

1. Проверьте, запущено ли приложение: `pm2 status`
2. Проверьте порт: `sudo netstat -tlnp | grep 3000`
3. Проверьте конфигурацию Nginx: `sudo nginx -t`

#### Проблемы с SSL

```bash
# Обновление сертификатов
sudo certbot renew --dry-run
sudo certbot renew
```

### 📊 Производительность

#### Оптимизация PM2

```bash
# Настройка количества процессов
pm2 scale skillquiz 4

# Ограничение памяти
pm2 set skillquiz max-memory-restart 1G
```

#### Оптимизация Node.js

```bash
# Увеличение памяти для Node.js
export NODE_OPTIONS="--max-old-space-size=4096"
```

### 🔄 Откат к предыдущей версии

```bash
# Список бэкапов
ls -la /home/admin/apps/ | grep skillquiz-backup

# Восстановление из бэкапа
pm2 stop skillquiz
mv /home/admin/apps/skillquiz /home/admin/apps/skillquiz-failed
mv /home/admin/apps/skillquiz-backup-20240930-120000 /home/admin/apps/skillquiz
pm2 start /home/admin/apps/skillquiz/ecosystem.config.js
```

### 📝 Чеклист миграции

- [ ] Настроен сервер с необходимым ПО
- [ ] Добавлены GitHub Secrets
- [ ] Создан файл `.env.production` на сервере
- [ ] Настроен Nginx
- [ ] Получены SSL сертификаты
- [ ] Протестирован процесс деплоя
- [ ] Настроен мониторинг
- [ ] Проверена производительность
- [ ] Документированы специфичные настройки

### 🤝 Поддержка

При возникновении проблем:

1. Проверьте логи приложения и сервера
2. Убедитесь в корректности конфигураций
3. Проверьте наличие всех зависимостей
4. Обратитесь к документации Next.js по standalone деплою
