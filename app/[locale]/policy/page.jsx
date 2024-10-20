'use client'

import React from 'react';
import { useTranslations } from 'next-intl';

const Policy = () => {
  const t = useTranslations('PrivacyPolicy');

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">{t('policy_pageTitle')}</h1>
      <p className="text-center text-gray-500 mb-6">{t('policy_effectiveDate')}</p>

      <p className="mb-4">
        {t('policy_welcome')} <strong>{t('policy_companyName')}</strong>!
      </p>
      <p className="mb-6">{t('policy_introduction')}</p>

      <h2 className="text-xl font-semibold mb-3">{t('policy_section1Title')}</h2>
      <h3 className="text-lg font-medium mb-2">{t('policy_section1a')}</h3>
      <p className="mb-4">{t('policy_section1aContent')}</p>

      <h3 className="text-lg font-medium mb-2">{t('policy_section1b')}</h3>
      <p className="mb-4">{t('policy_section1bContent1')}</p>
      <p className="mb-6">{t('policy_section1bContent2')}</p>

      <h2 className="text-xl font-semibold mb-3">{t('policy_section2Title')}</h2>
      <p className="mb-4">{t('policy_section2Content1')}</p>
      <p className="mb-6">{t('policy_section2Content2')}</p>

      <h2 className="text-xl font-semibold mb-3">{t('policy_section3Title')}</h2>
      <p className="mb-6">{t('policy_section3Content')}</p>

      <h2 className="text-xl font-semibold mb-3">{t('policy_section4Title')}</h2>
      <p className="mb-6">{t('policy_section4Content')}</p>

      <h2 className="text-xl font-semibold mb-3">{t('policy_section5Title')}</h2>
      <p className="mb-4">{t('policy_section5Content1')}</p>
      <p className="mb-6">{t('policy_section5Content2')}</p>

      <h2 className="text-xl font-semibold mb-3">{t('policy_section6Title')}</h2>
      <p className="mb-6">{t('policy_section6Content')}</p>

      <h2 className="text-xl font-semibold mb-3">{t('policy_section7Title')}</h2>
      <p className="mb-6">{t('policy_section7Content')}</p>

      <h2 className="text-xl font-semibold mb-3">{t('policy_section8Title')}</h2>
      <p className="mb-6">{t('policy_section8Content')}</p>

      <h2 className="text-xl font-semibold mb-3">{t('policy_section9Title')}</h2>
      <p className="mb-6">{t('policy_section9Content')}</p>

      <p className="text-center font-bold">
        <strong>{t('policy_companyName')}</strong> <br />
        {t('policy_email')} <br />{t('policy_copyright')}
      </p>
    </div>
  );
};

export default Policy;