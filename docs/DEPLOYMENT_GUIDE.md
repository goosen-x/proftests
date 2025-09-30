# SkillQuiz Deployment Guide

Полное руководство по развертыванию SkillQuiz на self-hosted сервере с настройкой CI/CD.

## 📋 Требования

- Ubuntu 22.04 LTS сервер
- Минимум 2GB RAM, 2 CPU
- Домен с настроенными DNS записями
- GitHub репозиторий с проектом

## 🚀 Шаги развертывания

### 1. Первоначальная настройка сервера

#### SSH подключение к серверу:

```bash
ssh root@your-server-ip
```

#### Создание пользователя:

```bash
adduser admin
usermod -aG sudo admin
su - admin
```

#### Копирование скрипта настройки:

```bash
# На локальной машине
scp scripts/initial-server-setup.sh admin@your-server-ip:~/

# На сервере
chmod +x ~/initial-server-setup.sh
./initial-server-setup.sh
```

### 2. Настройка GitHub для CI/CD

#### Генерация SSH ключа для деплоя:

```bash
# На локальной машине
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github_deploy_key

# Копируем публичный ключ на сервер
ssh-copy-id -i ~/.ssh/github_deploy_key.pub admin@your-server-ip
```

#### Настройка секретов в GitHub:

1. Перейдите в Settings → Secrets and variables → Actions
2. Добавьте следующие секреты:
   - `DEPLOY_HOST`: IP адрес сервера
   - `DEPLOY_USER`: admin
   - `DEPLOY_PORT`: 22
   - `DEPLOY_KEY`: содержимое файла `~/.ssh/github_deploy_key`

### 3. Настройка SSL сертификата

На сервере выполните:

```bash
sudo certbot --nginx -d skillquiz.ru -d www.skillquiz.ru
```

### 4. Настройка окружения

Отредактируйте файл `.env` на сервере:

```bash
cd /home/admin/apps/skillquiz
nano .env
```

Установите необходимые переменные:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://skillquiz.ru
```

### 5. Первый запуск

```bash
# Перезапуск приложения
pm2 restart ecosystem.config.js

# Проверка статуса
pm2 status

# Просмотр логов
pm2 logs
```

### 6. Проверка работы

- Откройте https://skillquiz.ru
- Проверьте health endpoint: https://skillquiz.ru/api/health
- Проверьте SSL сертификат

## 🔄 Автоматический деплой

После настройки, каждый push в ветку `main` будет автоматически разворачиваться на сервере.

### Ручной деплой:

1. Перейдите в Actions → Deploy to Production
2. Нажмите "Run workflow"
3. Выберите ветку и запустите

### Локальный деплой:

```bash
# Установите переменные окружения
export DEPLOY_HOST=your-server-ip
export DEPLOY_USER=admin
export DEPLOY_PORT=22

# Запустите деплой скрипт
./deploy.sh
```

## 🔍 Мониторинг

### PM2 мониторинг:

```bash
pm2 monit
pm2 status
pm2 logs skillquiz --lines 100
```

### Nginx логи:

```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Системные ресурсы:

```bash
htop
df -h
free -m
```

## 🚨 Устранение неполадок

### Приложение не запускается:

```bash
# Проверьте логи
pm2 logs skillquiz

# Перезапустите приложение
pm2 restart skillquiz

# Проверьте порт
sudo lsof -i :3002
```

### Ошибки Nginx:

```bash
# Проверьте конфигурацию
sudo nginx -t

# Перезагрузите Nginx
sudo systemctl reload nginx
```

### Проблемы с памятью:

```bash
# Увеличьте лимит памяти для Node.js
pm2 delete skillquiz
NODE_OPTIONS="--max-old-space-size=2048" pm2 start ecosystem.config.js
```

## 📦 Backup и восстановление

### Создание backup:

```bash
~/backup-skillquiz.sh
```

### Восстановление из backup:

```bash
cd /home/admin/apps
tar -xzf ~/backups/skillquiz-backup-YYYYMMDD-HHMMSS.tar.gz
pm2 restart skillquiz
```

## 🔒 Безопасность

1. Регулярно обновляйте систему:

   ```bash
   sudo apt update && sudo apt upgrade
   ```

2. Проверяйте fail2ban:

   ```bash
   sudo fail2ban-client status
   ```

3. Обновляйте SSL сертификаты:

   ```bash
   sudo certbot renew --dry-run
   ```

4. Мониторьте доступ:
   ```bash
   sudo tail -f /var/log/auth.log
   ```

## 📞 Поддержка

При возникновении проблем:

1. Проверьте логи PM2 и Nginx
2. Убедитесь что все зависимости установлены
3. Проверьте права доступа к файлам
4. Проверьте настройки firewall

---

Последнее обновление: 2024
