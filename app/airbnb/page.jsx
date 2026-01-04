'use client';

import Brain from '@/components/Brain';
import { motion, useInView, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import Head from 'next/head';

export default function Shops() {
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
  }, []);

  const validateForm = () => {
    const contactInfo = form.current.user_contact.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s()+-]+$/;

    if (!contactInfo) {
      setValidationError('Введите email или телефон');
      return false;
    }

    if (!emailRegex.test(contactInfo) && !phoneRegex.test(contactInfo)) {
      setValidationError('Введите корректный контакт');
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setValidationError('');

    if (!validateForm()) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <>
      <Head>
        <title>Интернет-магазины</title>
      </Head>

      <motion.div
        className="h-full"
        initial={{ y: '-100vh' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1 }}
      >
        <div className="h-full overflow-y-auto lg:flex" ref={containerRef}>
          <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-40 flex flex-col gap-20 md:gap-32 lg:gap-40 xl:gap-50 lg:w-2/3 lg:pr-0 xl:w-1/2">
            <div className="flex flex-col gap-12 justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-start">Интернет-магазины</h1>
              <p className="text-start md:text-lg">Создаём современные интернет-магазины под ваши потребности.</p>

              <div className="flex flex-col gap-6 items-center">
                {/* Подарок: домен */}
                <div className="flex flex-col text-center border border-slate-100 p-3 rounded-lg bg-gradient-to-r from-lime-50 to-lime-100 shadow-lg w-full">
                  <motion.p
                    className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  >
                    Бесплатный домен при заказе
                  </motion.p>
                </div>

                {/* Скидка */}
                <div className="flex flex-col items-center justify-center gap-5 text-center border border-slate-100 p-3 rounded-lg bg-gradient-to-r from-lime-50 to-lime-100 shadow-lg w-full">
                  <motion.p
                    className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  >
                    Скидка на первый заказ
                  </motion.p>
                </div>
              </div>

              {/* Стандартный пакет */}
              <div className="flex flex-col gap-8 justify-center" ref={skillRef}>
                <h2 className="font-bold text-2xl">Стандартный пакет</h2>
                <div className="flex gap-8 flex-wrap">
                  <div>
                    <motion.p
                      className="text-lg font-semibold text-gradient"
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    >
                      Цена: 500€
                    </motion.p>
                    <motion.p
                      className="text-lg font-semibold text-gradient"
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    >
                      Срок: 2 недели
                    </motion.p>
                  </div>

                  <div className="flex flex-col gap-8">
                    <div className="bg-white p-4 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                      <p className="font-semibold text-lg mb-2 text-start">Функционал</p>
                      <ul className="list-disc list-inside p-3">
                        <li>Главная страница</li>
                        <li>Каталог товаров</li>
                        <li>Корзина</li>
                        <li>Оплата и доставка</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                      <p className="font-semibold text-lg mb-2 text-start">SEO</p>
                      <ul className="list-disc list-inside p-3">
                        <li>Оптимизация страниц</li>
                        <li>Мета-теги и ключевые слова</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                      <p className="font-semibold text-lg mb-2 text-start">Технологии</p>
                      <ul className="list-none list-inside p-3">
                        <li>React, Next.js, TailwindCSS</li>
                      </ul>
                    </div>
                  </div>

                  <Link href="/contact">
                    <button className="my-5 md:mt-10 p-3 rounded-lg bg-black text-white text-lg">
                      Заказать
                    </button>
                  </Link>
                </div>
              </div>

              {/* Премиум пакет */}
              <div className="flex flex-col gap-8 justify-center" ref={experienceRef}>
                <h2 className="font-bold text-2xl">Премиум пакет</h2>
                <div className="flex gap-8 flex-wrap">
                  <div>
                    <motion.p
                      className="text-lg font-semibold text-gradient"
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    >
                      Цена: 1000€
                    </motion.p>
                    <motion.p
                      className="text-lg font-semibold text-gradient"
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    >
                      Срок: 4 недели
                    </motion.p>
                  </div>

                  <div className="flex flex-col gap-8">
                    <div className="bg-white p-4 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                      <p className="font-semibold text-lg mb-2 text-start">Функционал</p>
                      <ul className="list-disc list-inside p-3">
                        <li>Все из стандартного пакета</li>
                        <li>Поддержка нескольких языков</li>
                        <li>Расширенные фильтры товаров</li>
                        <li>Личный кабинет</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                      <p className="font-semibold text-lg mb-2 text-start">SEO</p>
                      <ul className="list-disc list-inside p-3">
                        <li>Расширенная оптимизация страниц</li>
                        <li>Аналитика и метрики</li>
                      </ul>
                    </div>

                    <div className="bg-white mb-10 p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                      <p className="font-semibold text-lg mb-2 text-start">Технологии</p>
                      <ul className="list-disc list-inside p-3">
                        <li>React, Next.js, TailwindCSS, TypeScript</li>
                        <li>Интеграции с платежными системами</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Форма */}
              <motion.div
                ref={formRef}
                className="flex flex-col justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-8 leading-normal">
                  {'Нужен интернет-магазин?'.split('').map((letter, index) => (
                    <motion.span
                      className="pr-3 text-2xl md:text-4xl"
                      key={index}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                    >
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
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <span className="font-semibold">Опишите ваш проект</span>
                    <textarea
                      rows={8}
                      className="bg-transparent border-b-2 border-b-black outline-none resize-none placeholder-gray-700 placeholder-opacity-50 text-sm md:text-base min-h-[200px] max-w-full"
                      name="user_message"
                      placeholder="Что вы хотите получить?"
                    />
                    <span className="font-semibold">Ваш email или телефон</span>
                    <input
                      name="user_contact"
                      type="text"
                      className="bg-transparent border-b-2 border-b-black outline-none text-sm md:text-base min-h-[40px] max-w-full placeholder-opacity-50"
                      placeholder="Email или телефон"
                    />
                    <motion.button
                      className="bg-purple-200 rounded font-semibold text-gray-600 p-4 my-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Отправить
                    </motion.button>

                    {success && <motion.span className="text-green-600 font-semibold">Сообщение отправлено!</motion.span>}
                    {error && <motion.span className="text-red-600 font-semibold">Ошибка при отправке.</motion.span>}
                    {validationError && <motion.span className="text-red-600 font-semibold">{validationError}</motion.span>}
                  </motion.form>
                </div>

                <div className="flex flex-col items-center mt-10">
                  <span className="text-lg md:text-xl font-semibold mb-4">Мы в соцсетях</span>
                  <div className="flex space-x-7">
                    <a href="https://www.instagram.com/kotdev.pl/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="text-2xl text-pink-600 hover:text-pink-400" />
                    </a>
                    <a href="https://www.facebook.com/groups/1809126336287422" target="_blank" rel="noopener noreferrer">
                      <FaFacebookF className="text-2xl text-blue-600 hover:text-blue-400" />
                    </a>
                  </div>
                </div>
              </motion.div>
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
