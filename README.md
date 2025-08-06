# 📚 CodeHub

**CodeHub** — это аналог Хабра, платформа для публикации статей, обмена опытом и обсуждения технологий.  
Проект создаётся для отработки навыков разработки на **TypeScript** с использованием **Webpack** и современного фронтенд-стека.

---

## 🚀 Установка и запуск

### 1. Клонировать репозиторий

```bash
git clone https://github.com/dsmorodiny/CodeHub.git
cd CodeHub
2. Установить зависимости
bash
Копировать
Редактировать
npm install
3. Запуск в режиме разработки
bash
Копировать
Редактировать
npm start
4. Сборка проекта
bash
Копировать
Редактировать
npm run build
🛠 Стек технологий
TypeScript

Webpack (HtmlWebpackPlugin, ts-loader, clean build)

Node.js

npm scripts

ESLint + Prettier (планируется)

React (планируется)

Sass/SCSS (планируется)

📌 Что уже сделано
Настроен Webpack для сборки проекта

Добавлена поддержка TypeScript

Подключён ts-loader для компиляции .ts и .tsx файлов

Декомпозирован webpack.config.ts на модули (base, dev, prod)

Добавлены свойства options для лоадеров и типизация этих свойств

Настроена очистка папки сборки (clean: true)

📂 Структура проекта
csharp
Копировать
Редактировать
CodeHub/
 ├── build/                # Скомпилированный код
 ├── public/               # HTML-шаблон
 ├── src/                  # Исходный код
 │    └── index.ts         # Точка входа
 ├── config/               # Конфиги Webpack (base, dev, prod)
 ├── tsconfig.json         # Настройки TypeScript
 ├── webpack.config.ts     # Основная точка сборки конфигов
 └── package.json
```
