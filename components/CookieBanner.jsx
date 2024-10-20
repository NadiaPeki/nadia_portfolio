'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const t = useTranslations('CookieBanner');
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cookieConsent = localStorage.getItem('cookieConsent');
      if (cookieConsent === null) {
        setShowBanner(true);
      }
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
    console.log('Additional cookies accepted and activated');
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
    console.log('Only necessary cookies will be used');
  };

  if (!showBanner) return null;

  // Extract the locale from the pathname
  const locale = pathname.split('/')[1];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-b from-blue-200 to-red-200 text-black p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center sm:text-left">
          {t('cookieBanner_message')}{' '}
          <Link href={`/${locale}/cookie`} className="text-black underline font-semibold">
            {t('cookieBanner_policyLink')}
          </Link>
          .
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleAcceptCookies}
            className="bg-black hover:bg-blue-300 text-white py-2 px-4 rounded transition-colors duration-300">
            {t('cookieBanner_acceptButton')}
          </button>
          <button
            onClick={handleDeclineCookies}
            className="bg-white hover:bg-red-300 text-black py-2 px-4 rounded transition-colors duration-300">
            {t('cookieBanner_declineButton')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
