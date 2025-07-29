# Numbers Facts App
Приложение на Next.js 14 для получения интересных фактов о числах — математических, тривиальных или связанных с датами. Поддерживает случайные запросы, отображение результата и сохранение истории запросов в localStorage.

## Стек технологий
Next.js 14 (App Router)

React 18

TypeScript

Tailwind CSS

API: https://numbersapi.com

Хранилище истории: localStorage

## Демонстрация

Интерфейс с карточкой результата и историей запросов

📂 Структура проекта
```
src/
├── app/
│   ├── page.tsx              # Главная страница (форма)
│   └── result/
│       ├── page.tsx          # Обёртка с Suspense
│       └── 
├── components/
│   ├── ResultCard.tsx        # Компонент карточки результата
│   ├── ErrorMessage.tsx      # Компонент ошибки
│   ├── SkeletonCard.tsx      # Скелетон во время загрузки
|   └── ResultPageClient      # Клиентский компонент страницы результата
├── lib/
│   ├── fetchNumberFact.ts    # Функция запроса к Numbers API
│   └── history.ts            # Работа с localStorage (get/set/clear)
```
⚙️ Установка и запуск
bash
```
git clone https://github.com/vldpvnnk/numbers-page.git
cd numbers-page
npm install
npm run dev
```
Открой http://localhost:3000 в браузере.