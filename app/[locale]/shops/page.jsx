'use client';

import Brain from '@/components/Brain';
import { motion, useInView, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import Head from 'next/head';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Shops() {
  const t = useTranslations('Shops');
  const params = useParams();
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const experienceRef = useRef();
  const formRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' });
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });
  const isFormInView = useInView(formRef, { once: false, margin: '-100px' });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState('');
  const form = useRef();

  useEffect(() => {
    console.log('Shops page loaded');
    console.log('Current locale:', params.locale);
    console.log('Current URL:', window.location.href);
  }, [params.locale]);

  const validateForm = () => {
    const contactInfo = form.current.user_contact.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s()+-]+$/;

    if (!contactInfo) {
      setValidationError(t('shops_validationErrorEmail'));
      return false;
    }

    if (!emailRegex.test(contactInfo) && !phoneRegex.test(contactInfo)) {
      setValidationError(t('shops_validationErrorContact'));
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setValidationError('');

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        },
      );
  };

  return (
    <>
      <Head>
        <link rel="alternate" href="https://kotdev.pl/pl/sklepyinternetowe" hreflang="pl" />
        <link rel="alternate" href="https://kotdev.pl/ru/internetmagaziny" hreflang="ru" />
      </Head>
      <motion.div
        className="h-full"
        initial={{ y: '-200vh' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1 }}>
        <div className="h-full overflow-y-auto lg:flex" ref={containerRef}>
          <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-40 flex flex-col gap-20 md:gap-32 lg:gap-40 xl:gap-50 lg:w-2/3 lg:pr-0 xl:w-1/2">
            <div className="flex flex-col gap-12 justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-start">{t('shops_title')}</h1>
              <p className="text-start md:text-lg">{t('shops_description')}</p>
              <div className="flex flex-col gap-6 items-center">
  {/* Domain Gift Box */}
  <div className="flex flex-col  text-center border border-slate-100 p-3 rounded-lg bg-gradient-to-r from-lime-50 to-lime-100 shadow-lg w-full">
    <motion.p
      className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
      {t('shops_domainGift')}
    </motion.p>
  </div>

  {/* Discount Box */}
  <div className="flex flex-col items-center justify-center gap-5 text-center border border-slate-100 p-3 rounded-lg bg-gradient-to-r from-lime-50 to-lime-100 shadow-lg w-full">
    <motion.p
      className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
      {t('shops_discount')}
    </motion.p>
  </div>
</div>
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: '10px' }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}>
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
              </motion.svg>
            </div>
            <div className="flex flex-col gap-8 justify-center" ref={skillRef}>
              <h2
                className="font-bold text-2xl">
                {t('shops_standardTitle')}
              </h2>
              <div
                className="flex gap-8 flex-wrap">
                <div>
                  <motion.p
                    className="text-lg font-semibold text-gradient"
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                    {t('shops_standardPrice')}
                  </motion.p>

                  <motion.p
                    className="text-lg font-semibold text-gradient"
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                    {t('shops_standardTime')}
                  </motion.p>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="bg-white p-4 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                    <p className="font-semibold text-lg mb-2 text-start">{t('shops_functionalityTitle')}</p>
                    <ul className="list-disc list-inside p-3">
                      {[...Array(14)].map((_, index) => (
                        <li key={index} className="mb-1">{t(`shops_functionalityItem${index + 1}`)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                    <p className="font-semibold text-lg mb-2 text-start">{t('shops_seoTitle')}</p>
                    <ul className="list-disc list-inside p-3">
                      <li className="mb-1">{t('shops_seoItem1')}</li>
                      <li>{t('shops_seoItem2')}</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                    <p className="font-semibold text-lg mb-2 text-start">{t('shops_technologiesTitle')}</p>
                    <ul className="list-none list-inside p-3">
                      <li>{t('shops_technologiesStandard')}</li>
                    </ul>
                  </div>
                </div>
                <Link href={`/${params.locale}/contact`}>
                  <button className="my-5 md:mt-10 p-3 rounded-lg bg-black text-white text-lg">
                    {t('shops_orderButton')}
                  </button>
                </Link>
              </div>
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: '10px' }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}>
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029  19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
              </motion.svg>
            </div>
            <div className="flex flex-col gap-8 justify-center" ref={experienceRef}>
              <h2
                className="font-bold  text-2xl">
                {t('shops_premiumTitle')}
              </h2>
              <div
                className="flex gap-8 flex-wrap">
                <div>
                  <motion.p
                    className="text-lg font-semibold text-gradient"
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                    {t('shops_premiumPrice')}
                  </motion.p>
                 
                  <motion.p
                    className="text-lg font-semibold text-gradient"
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                    {t('shops_premiumTime')}
                  </motion.p>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="bg-white p-4 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                    <p className="font-semibold text-lg mb-2 text-start">{t('shops_functionalityTitle')}</p>
                    <ul className="list-disc list-inside p-3">
                      {[...Array(17)].map((_, index) => (
                        <li key={index} className="mb-1">{t(`shops_premiumFunctionalityItem${index + 1}`)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                    <p className="font-semibold text-lg mb-2 text-start">{t('shops_seoTitle')}</p>
                    <ul className="list-disc list-inside p-3">
                      <li className="mb-1">{t('shops_seoItem1')}</li>
                      <li>{t('shops_seoItem2')}</li>
                    </ul>
                  
                  </div>
                  <div className="bg-white mb-10 p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                    <p className="font-semibold text-lg mb-2 text-start">{t('shops_technologiesTitle')}</p>
                    <ul className="list-disc list-inside p-3">
                      <li>{t('shops_technologiesPremium1')}</li>
                      <li>{t('shops_technologiesPremium2')}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <motion.div
                ref={formRef}
                className="flex flex-col justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}>
                <div className="text-center mb-8  leading-normal">
                  {t('shops_needWebsite').split('').map((letter, index) => (
                    <motion.span
                      className="pr-3 text-2xl md:text-4xl"
                      key={index}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.1,
                      }}>
                      {letter}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-8 flex-wrap">
                  <motion.form
                    onSubmit={sendEmail}
                    ref={form}
                    className="bg-red-50 rounded-xl text-xl flex flex-col gap-6 p-8 w-full"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={isFormInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}>
                    <span className="font-semibold">{t('shops_describeWebsite')}</span>
                    <textarea
                      rows={8}
                      className="bg-transparent border-b-2 border-b-black outline-none resize-none placeholder-gray-700 placeholder-opacity-50 text-sm md:text-base min-h-[200px] max-w-full"
                      name="user_message"
                      placeholder={t('shops_describeWebsitePlaceholder')}
                    />
                    <span className="font-semibold">{t('shops_contactInfo')}</span>
                    <input
                      name="user_contact"
                      type="text"
                      className="bg-transparent border-b-2 border-b-black outline-none text-sm md:text-base min-h-[40px] max-w-full placeholder-opacity-50"
                      placeholder={t('shops_contactInfoPlaceholder')}
                    />
                    <motion.button
                      className="bg-purple-200 rounded font-semibold text-gray-600 p-4 my-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}>
                      {t('shops_sendButton')}
                    </motion.button>
                    {success && (
                      <motion.span
                        className="text-green-600 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}>
                        {t('shops_successMessage')}
                      </motion.span>
                    )}
                    {error && (
                      <motion.span
                        className="text-red-600 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}>
                        {t('shops_errorMessage')}
                      </motion.span>
                    )}
                    {validationError && (
                      <motion.span
                        className="text-red-600 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}>
                        {validationError}
                      </motion.span>
                    )}
                  </motion.form>
                </div>
                <div className="flex flex-col items-center mt-10">
                  <span className="text-lg md:text-xl font-semibold mb-4 ">
                    {t('shops_socialMediaTitle')}
                  </span>
                  <div className="flex space-x-7">
                    <a href="https://www.instagram.com/kotdev.pl/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="text-2xl text-pink-600 hover:text-pink-400" />
                    </a>
                    <a href="https://www.facebook.com/groups/1809126336287422" target="_blank" rel="noopener noreferrer">
                      <FaFacebookF className="text-2xl text-blue-600 hover:text:blue-400" />
                    </a>
                  
                  </div>
                </div>
              </motion.div>
              <div className="bg-yellow-100 mb-10 md:mt-10 p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                <p className="text-sm font-semibold text-sky-700 italic">
                  {t('shops_flexibilityNote')}
                  <br />
                  {t('shops_priceNote')}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-1/2 sticky top-0 z-30 xl:w-1/2">
            <Brain scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </motion.div>
    </>
  );
}