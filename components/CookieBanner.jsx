'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Проверяем, что мы находимся в среде браузера
    if (typeof window !== 'undefined') {
      // Проверяем, было ли дано согласие на использование cookies
      const cookieConsent = localStorage.getItem('cookieConsent');
      console.log('Текущий статус согласия на cookies:', cookieConsent); // Лог текущего статуса

      // Показываем баннер, если согласие не было дано
      if (cookieConsent === null) {
        setShowBanner(true);
      }
    }
  }, []);

  const handleAcceptCookies = () => {
    // Сохраняем согласие в localStorage
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false); // Скрываем баннер
    console.log('Cookies accepted'); // Лог при принятии
  };

  const handleDeclineCookies = () => {
    // Сохраняем отказ в localStorage (если необходимо)
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false); // Скрываем баннер
    console.log('Cookies declined'); // Лог при отказе
  };

  // Если не нужно показывать баннер, ничего не рендерим
  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-b from-blue-200 to-red-200 text-black p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center sm:text-left">
          Мы используем файлы cookie для улучшения вашего опыта. Для получения дополнительной
          информации, пожалуйста, посетите нашу{' '}
          <Link href="/cookie" className="text-black underline font-semibold">
            Политику использования файлов cookie
          </Link>
          .
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleAcceptCookies}
            className="bg-black hover:bg-blue-300 text-white py-2 px-4 rounded transition-colors duration-300">
            Принять
          </button>
          <button
            onClick={handleDeclineCookies}
            className="bg-white hover:bg-red-300 text-black py-2 px-4 rounded transition-colors duration-300">
            Отклонить
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
