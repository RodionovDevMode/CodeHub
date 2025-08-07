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
Также можно указать режим вручную:

bash
Копировать
Редактировать
npm run build:prod
npm run build:dev
🧠 Что реализовано
✅ Настроен Webpack с поддержкой TypeScript

✅ Подключён ts-loader для компиляции .ts и .tsx файлов

✅ Поддержка webpack-dev-server с Live Reload

✅ Декомпозирована конфигурация Webpack на модули:

buildLoaders

buildPlugins

buildResolvers

buildWebpackConfig

webpackDevServer

✅ Использование переменных окружения через --env

✅ Типизация параметров сборки (BuildOptions, BuildPaths, BuildEnv)

✅ Автоматическая очистка папки build при новой сборке

⏳ ESLint + Prettier (в планах)

⏳ React, SCSS, роутинг (в планах)

🛠 Стек технологий
TypeScript

Webpack 5

Webpack Dev Server

HtmlWebpackPlugin

ts-loader

Node.js

npm scripts

📁 Структура проекта
csharp
Копировать
Редактировать
CodeHub/
├── build/                         # Сборка проекта (автогенерируется Webpack'ом)
│   ├── index.html                 # HTML-файл после сборки
│   └── main.[hash].js            # Бандл
│
├── config/                        # Конфигурация сборщика Webpack
│   ├── build/
│   │   ├── types/                 # Типы для конфигов
│   │   │   └── config.ts
│   │   ├── buildLoaders.ts       # Конфигурация лоадеров
│   │   ├── buildPlugins.ts       # Конфигурация плагинов
│   │   ├── buildResolvers.ts     # Конфигурация alias’ов и расширений
│   │   ├── buildWebpackConfig.ts # Основная сборка конфигурации Webpack
│   │   └── webpackDevServer.ts   # Конфиг webpack-dev-server’а
│
├── eslint/                        # (опционально) конфиги ESLint
├── jest/                          # (опционально) конфиги Jest
│
├── node_modules/                  # Установленные зависимости
│
├── public/                        # Публичные ресурсы
│   └── index.html                 # Шаблон HTML
│
├── src/                           # Исходный код
│   ├── index.ts                   # Точка входа
│   └── test.ts                    # Пример модуля
│
├── .gitignore                     # Игнорируемые файлы Git'ом
├── package.json                   # Скрипты и зависимости проекта
├── package-lock.json              # Версии установленных зависимостей
├── tsconfig.json                  # Конфигурация TypeScript
└── README.md                      # Документация по проекту
```
