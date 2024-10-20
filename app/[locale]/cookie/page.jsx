'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

const Cookie = () => {
  const t = useTranslations('CookiePolicy');

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">{t('cookie_pageTitle')}</h1>
      <p className="text-center text-gray-500 mb-6">{t('cookie_effectiveDate')}</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">{t('cookie_section1Title')}</h2>
        <p className="mb-4">{t('cookie_section1Content')}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">{t('cookie_section2Title')}</h2>
        <p className="mb-4">{t('cookie_section2Content')}</p>
        <ul className="list-disc list-inside ml-6 mb-4">
          <li>{t('cookie_section2List1')}</li>
          <li>{t('cookie_section2List2')}</li>
          <li>{t('cookie_section2List3')}</li>
          <li>{t('cookie_section2List4')}</li>
          <li>{t('cookie_section2List5')}</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">{t('cookie_section3Title')}</h2>
        <p className="mb-4">{t('cookie_section3Content')}</p>
        <ul className="list-disc list-inside ml-6 mb-4">
          <li>{t('cookie_section3List1')}</li>
          <li>{t('cookie_section3List2')}</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">{t('cookie_section4Title')}</h2>
        <p className="mb-4">{t('cookie_section4Content')}</p>
        <ul className="list-disc list-inside ml-6 mb-4">
          <li>{t('cookie_section4List1')}</li>
          <li>{t('cookie_section4List2')}</li>
          <li>{t('cookie_section4List3')}</li>
          <li>{t('cookie_section4List4')}</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">{t('cookie_section5Title')}</h2>
        <p className="mb-4">{t('cookie_section5Content1')}</p>
        <p className="mb-4">
          {t('cookie_section5Content2')}{' '}
          <a
            href={t('cookie_section5LinkUrl')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline">
            {t('cookie_section5LinkText')}
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">{t('cookie_section6Title')}</h2>
        <p className="mb-4">{t('cookie_section6Content')}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">{t('cookie_section7Title')}</h2>
        <p className="mb-6">{t('cookie_section7Content')}</p>

        <p className="text-center font-bold">
          <strong>{t('cookie_companyName')}</strong> <br />
          {t('cookie_email')} <br />
          {t('cookie_copyright')}
        </p>
      </section>
    </div>
  );
};

export default Cookie;
