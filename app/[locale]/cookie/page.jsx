import React from 'react';

const Cookie = () => {
  return (
    
    <div className="max-w-4xl mx-auto p-6 sm:p-8 text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Политика использования файлов Cookie</h1>
      <p className="text-center text-gray-500 mb-6">Дата вступления в силу: 15 октября 2024 г.</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">1. Что такое файл cookie?</h2>
        <p className="mb-4">
          Файл cookie — это небольшой файл, состоящий из строк букв и цифр, который загружается на ваш компьютер при посещении определенных веб-сайтов. Cookies позволяют сайту распознавать устройство пользователя и сохранять его предпочтения.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">2. Почему мы используем файлы cookie?</h2>
        <p className="mb-4">
          Мы используем файлы cookie для различных целей, включая:
        </p>
        <ul className="list-disc list-inside ml-6 mb-4">
          <li>Поддержание сессии пользователя</li>
          <li>Сохранение ваших предпочтений</li>
          <li>Обеспечение необходимой функциональности нашего сайта</li>
          <li>Анализ и улучшение производительности сайта</li>
          <li>Защита от мошенничества и кибератак</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">3. Виды используемых файлов cookie</h2>
        <p className="mb-4">
          Мы используем два типа файлов cookie:
        </p>
        <ul className="list-disc list-inside ml-6 mb-4">
          <li><strong>Внутренние cookies</strong> — устанавливаются нашим сайтом для обеспечения его работы.</li>
          <li><strong>Сторонние cookies</strong> — устанавливаются внешними сервисами, такими как Google Analytics, для анализа и отслеживания посещений.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">4. Категории файлов cookie</h2>
        <p className="mb-4">
          Все файлы cookie можно разделить на следующие категории:
        </p>
        <ul className="list-disc list-inside ml-6 mb-4">
          <li><strong>Необходимые cookies</strong> — обеспечивают основные функции, такие как безопасность и доступ к защищенным областям сайта.</li>
          <li><strong>Аналитические cookies</strong> — помогают понять, как пользователи взаимодействуют с сайтом, и улучшить его работу.</li>
          <li><strong>Функциональные cookies</strong> — запоминают ваши предпочтения, например, язык сайта.</li>
          <li><strong>Маркетинговые cookies</strong> — используются для оценки эффективности наших рекламных кампаний.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">5. Управление файлами cookie</h2>
        <p className="mb-4">
          Вы можете изменить настройки cookie в своем браузере. Большинство браузеров позволяют блокировать или удалять файлы cookie. Однако это может повлиять на работу некоторых функций сайта.
        </p>
        <p className="mb-4">
          Чтобы узнать больше о cookie и как ими управлять, посетите{' '}
          <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            www.aboutcookies.org
          </a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">6. Изменения в Политике Cookie</h2>
        <p className="mb-4">
          Мы можем время от времени обновлять эту Политику Cookie, и любые изменения будут опубликованы на этой странице.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">7. Контактная информация</h2>
        <p className="mb-6">
        Если у вас возникли вопросы или замечания по поводу данной Политики конфиденциальности или
        наших методов обработки данных, свяжитесь с нами:
      </p>

      <p className="text-center font-bold">
        <strong>KOT.dev</strong> <br />
        Электронная почта: [ваш контактный email] <br />© 2024 Все права защищены.
      </p>
      </section>
    </div>
  );
};

export default Cookie;
