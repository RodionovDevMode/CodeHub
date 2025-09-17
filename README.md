🇷🇺 CodeHub

CodeHub — это аналог Хабра, платформа для публикации статей, обмена опытом и обсуждения технологий.
Проект создаётся для отработки навыков разработки на TypeScript с использованием Webpack и современного фронтенд-стека.

🚀 Установка и запуск

1. Клонировать репозиторий
   git clone https://github.com/dsmorodiny/CodeHub.git
   cd CodeHub

2. Установить зависимости
   npm install

3. Запуск в режиме разработки
   npm start

4. Сборка проекта
   npm run build

Также можно указать режим вручную:

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

В планах:

⏳ ESLint + Prettier

⏳ React, SCSS, роутинг

🛠 Стек технологий

TypeScript

Webpack 5

Webpack Dev Server

HtmlWebpackPlugin

ts-loader

Node.js

npm scripts

CodeHub/
├── app/ # Инициализация приложения (App.tsx, провайдеры, роутинг)
│
├── processes/ # (опционально) долгоживущие процессы приложения
│
├── pages/ # Страницы (роуты), собирают виджеты и фичи
│
├── widgets/ # Крупные UI-блоки, составные части страниц
│
├── features/ # Фичи — законченные пользовательские сценарии
│
├── entities/ # Сущности (пользователь, статья и т.д.)
│
├── shared/ # Переиспользуемый код (UI, lib, config, styles)
│ ├── ui/ # Общие UI-компоненты (кнопки, инпуты и т.д.)
│ ├── lib/ # Хелперы, утилиты
│ ├── config/ # Конфиги проекта
│ ├── api/ # Работа с API
│ └── styles/ # Глобальные стили
│
├── public/ # Публичные ресурсы
│ └── index.html # Шаблон HTML
│
├── .gitignore # Игнорируемые файлы Git'ом
├── package.json # Скрипты и зависимости проекта
├── tsconfig.json # Конфигурация TypeScript
└── README.md # Документация по проекту
