'use client';

import Brain from '@/components/Brain';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';

const Ads = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const experienceRef = useRef();
  const formRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' });
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });
  const isFormInView = useInView(formRef, { once: false, margin: '-100px' });
  const text = 'Нужна реклама?';

  // Contact form state and functions
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState('');
  const form = useRef();

  const validateForm = () => {
    const contactInfo = form.current.user_contact.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s()+-]+$/;

    if (!contactInfo) {
      setValidationError('Пожалуйста, укажите email или номер телефона.');
      return false;
    }

    if (!emailRegex.test(contactInfo) && !phoneRegex.test(contactInfo)) {
      setValidationError('Пожалуйста, введите корректный email или номер телефона.');
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
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}>
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-40 flex flex-col gap-20 md:gap-32 lg:gap-40 xl:gap-50 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* description container */}
            <h1 className="text-4xl md:text-5xl font-bold text-start">Google Ads</h1>
            <p className="text-start md:text-lg">
              В современном мире онлайн-рекламы Google Ads является мощным инструментом для
              привлечения целевой аудитории и увеличения продаж. Наши услуги по настройке и ведению
              рекламных кампаний в Google Ads помогут вам эффективно использовать рекламный бюджет и
              привлекать клиентов. Мы предлагаем профессиональную настройку кампаний и постоянную оптимизацию для
              достижения наилучших результатов.
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <div className="flex flex-col gap-3 text-center border border-slate-100 p-4 rounded-lg bg-lime-50 w-1/2">
                <motion.p
                  className="text-lg font-semibold text-gradient"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                  Доменное имя в зоне .pl — в подарок.
                </motion.p>
              </div>

              <div className="flex flex-col gap-3 text-center border border-slate-100 p-4 rounded-lg bg-lime-50 w-1/2">
                <motion.p
                  className="text-lg font-semibold text-gradient"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                  При заказе сайта и Google Ads — 500 PLN скидка.
                </motion.p>
              </div>
            </div>

            {/* BIOGRAPHY SCROLL SVG */}
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
          {/* базовый сайт-визитка CONTAINER */}
          <div className="flex flex-col gap-8 justify-center" ref={skillRef}>
            {/* TITLE */}
            <motion.h2
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="font-bold text-2xl">
              НАСТРОЙКА GOOGLE ADS
            </motion.h2>

            {/* SKILL LIST */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-8 flex-wrap">
              <div>
                <motion.p
                  className="text-lg font-semibold text-gradient"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                  Стоимость: 2000 PLN
                </motion.p>

                <motion.p
                  className="text-lg font-semibold text-gradient"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                  Время выполнения: 20 - 45 дней
                </motion.p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="bg-white p-4 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                  {/* Функционал */}
                  <p className="font-semibold text-lg mb-2 text-start">Что будет сделано?</p>
                  <ul className="list-disc list-inside p-3">
                    <li className="mb-1">Определение целей и анализ целевой аудитории.</li>
                    <li className="mb-1">
                      Анализ сайтов и объявлений конкурентов, исследование рынка.
                    </li>
                    <li className="mb-1">Исследование и подбор ключевых слов.</li>
                    <li className="mb-1">
                      Формирование логической структуры аккаунта, создание группы объявлений и
                      настройка таргетинга для максимальной релевантности.
                    </li>
                    <li className="mb-1">Создание объявлений.</li>
                    <li className="mb-1">Настройка конверсий и отслеживания.</li>
                    <li className="mb-1">
                      Установка дневного и общего бюджета, выбор стратегии ставок.
                    </li>
                    <li className="mb-1">Тестирование объявлений.</li>
                    <li className="mb-1">
                      Персональный видеоурок с обзором настроек рекламной кампании для
                      самостоятельного управления рекламой.
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                  {/* SEO-подготовка и техническая оптимизация */}
                  <p className="font-semibold text-lg mb-2 text-start">Какой нужен будет бюджет?</p>
                  <p>
                    При запуске рекламной кампании важно выделить небольшой бюджет на тестирование.
                    Эта сумма может варьироваться в зависимости от ваших целей и стратегии.
                    Тестирование рекламы — ключевой этап для достижения эффективности. Оно позволяет
                    собрать важную информацию и статистику, на основе которой можно оптимизировать
                    дальнейшие настройки и улучшить результаты кампании.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                  {/* Технологии */}
                  <p className="font-semibold text-lg mb-2 text-start">
                    Как понять, во сколько обходится клиент?
                  </p>
                  <p>
                    Если один лид (потенциальный клиент, оставивший свои контактные данные)
                    обходится вам в 100 злотых, а каждый пятый лид становится вашим клиентом, то
                    стоимость привлечения одного клиента составит 500 злотых. Таким образом, ваш
                    бюджет на рекламу будет зависеть от количества клиентов, которых вы хотите
                    получить. Например, для привлечения 10 клиентов вам потребуется выделить 5000
                    злотых на рекламные кампании.
                  </p>
                </div>
              </div>
              <Link href="/contact"> <button className="my-5 md:mt-10 p-3 rounded-lg bg-black text-white text-lg">
                Заказать рекламу
              </button></Link>
            </motion.div>

            {/* SCROLL SVG */}
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

          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-8 justify-center" ref={experienceRef}>
            {/* TITLE */}
            <motion.h2
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className="font-bold text-2xl">
              ВЕДЕНИЕ GOOGLE ADS
            </motion.h2>

            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className="flex gap-8 flex-wrap">
              <div>
                <motion.p
                  className="text-lg font-semibold text-gradient"
                  animate={{ backgroundPosition: ['0% 50%', '100%50%', '0%50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                  Стоимость: 20% от фактически потраченного бюджета на рекламу за прошлый месяц
                </motion.p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="bg-white p-4 mb-10 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                  {/* Функционал */}
                  <p className="font-semibold text-lg mb-2 text-start">Что будет сделано?</p>
                  <ul className="list-disc list-inside p-3">
                    <li className="mb-1">
                      Регулярный анализ ключевых метрик (показы, клики, конверсии и стоимость за
                      клик) и использование Google Analytics для оптимизации.
                    </li>
                    <li className="mb-1">
                      Корректировка текстов на основе результатов тестирования и обновление
                      креативов для удержания внимания.
                    </li>
                    <li className="mb-1">
                      Добавление новых ключевых слов и удаление неэффективных для сокращения
                      расходов.
                    </li>
                    <li className="mb-1">
                      Регулировка демографического и географического таргетинга для более точного
                      охвата.
                    </li>
                    <li className="mb-1">
                      Регулировка бюджета и оптимизация стратегий ставок для повышения
                      эффективности.
                    </li>
                    <li className="mb-1">
                      Используем ремаркетинг для повторного показа объявлений пользователям, которые
                      уже взаимодействовали с вашим сайтом.
                    </li>
                    <li>
                      Расширение охвата с помощью контекстно-медийной рекламы, показывающей
                      объявления на релевантных сайтах.
                    </li>
                  </ul>
                </div>
                   {/* Contact Form */}
          <motion.div
            ref={formRef}
            className="flex flex-col justify-center pb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}>
            <div className="text-center mb-8  leading-normal">
              {text.split('').map((letter, index) => (
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
                <span className="font-semibold">Опишите ваши рекламные цели:</span>
                <textarea
                  rows={8}
                  className="bg-transparent border-b-2 border-b-black outline-none resize-none placeholder-gray-700 placeholder-opacity-50 text-sm md:text-base min-h-[200px] max-w-full"
                  name="user_message"
                  placeholder="Пожалуйста, опишите ваши рекламные цели, целевую аудиторию и любые конкретные пожелания по рекламной кампании."
                />
                <span className="font-semibold">Оставьте ваш email или номер телефона:</span>
                <input
                  name="user_contact"
                  type="text"
                  className="bg-transparent border-b-2 border-b-black outline-none text-sm md:text-base min-h-[40px] max-w-full placeholder-opacity-50"
                  placeholder="Ваш email или номер телефона"
                />

                <motion.button
                  className="bg-purple-200 rounded font-semibold text-gray-600 p-4 my-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  Отправить
                </motion.button>
                {success && (
                  <motion.span
                    className="text-green-600 font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}>
                    Ваше сообщение успешно отправлено!
                  </motion.span>
                )}
                {error && (
                  <motion.span
                    className="text-red-600 font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}>
                    Что-то пошло не так!
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
              Напишите нам в соцсетях:
            </span>
            <div className="flex space-x-7">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-pink-600 hover:text-pink-400" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl text-blue-600 hover:text-blue-400" />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="text-2xl text-blue-400 hover:text-blue-300" />
              </a>
            </div>
          </div>
          </motion.div>
              </div>
            </motion.div>
          </div>

       
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/2 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default Ads;
