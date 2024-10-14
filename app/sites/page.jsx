'use client';

import Brain from '@/components/Brain';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';

const Sites = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const experienceRef = useRef();
  const formRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' });
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });
  const isFormInView = useInView(formRef, { once: false, margin: '-100px' });
const text = 'Нужен сайт?'
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
            <h1 className="text-4xl md:text-5xl font-bold text-start">Сайт-визитка</h1>
            <p className="text-start md:text-lg">
              Создание сайта-визитки — это эффективный способ представить вашу компанию в интернете,
              совмещая информативность и маркетинговые возможности. Современные сайты часто строятся
              как совокупность лендингов, что позволяет использовать преимущества лендингового
              подхода для каждой услуги или продукта. Такая гибридная структура сохраняет
              многостраничный формат, но на каждой странице фокусируется на конверсии, помогая
              привлекать клиентов.
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
              СТАНДАРТНЫЙ САЙТ-ВИЗИТКА
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
                  Стоимость: 1500 - 3000 PLN
                </motion.p>
                <motion.p
                  className="text-lg font-semibold text-gradient"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                  Количество страниц: 1 - 5
                </motion.p>
                <motion.p
                  className="text-lg font-semibold text-gradient"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                  Время выполнения: 10 - 20 дней
                </motion.p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="bg-white p-4 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                  {/* Функционал */}
                  <p className="font-semibold text-lg mb-2 text-start">Функционал:</p>
                  <ul className="list-disc list-inside p-3">
                    <li className="mb-1">
                      Главная, страницы услуг, контакты с формой обратной связи.
                    </li>
                    <li className="mb-1">
                      Интеграция с Google Maps для отображения местоположения.
                    </li>
                    <li className="mb-1">Подключение домена и размещение на хостинге.</li>
                    <li className="mb-1">
                      Адаптивный дизайн: Оптимизация с учетом различных экранов и устройств.
                    </li>
                    <li className="mb-1">Работа по вашему макету или из нашей базы шаблонов.</li>
                    <li className="mb-1">
                      Оптимизация скорости загрузки сайта для улучшения SEO и пользовательского
                      опыта.
                    </li>
                    <li className="mb-1">Подключение ссылок на соцсети (Facebook, Instagram).</li>
                    <li className="mb-1">
                      Анимация: Плавные переходы между секциями, эффекты на кнопках и элементах при
                      взаимодействии.
                    </li>
                    <li>
                      Персональный видеоурок с обзором настроек и функционала вашего сайта для его
                      дальнейшего самостоятельного управления.
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                  {/* SEO-подготовка и техническая оптимизация */}
                  <p className="font-semibold text-lg mb-2 text-start">
                    SEO-подготовка и техническая оптимизация:
                  </p>
                  <ul className="list-disc list-inside p-3">
                    <li className="mb-1">Настройка метатегов, описаний и заголовков для SEO.</li>
                    <li>Регистрация в Google Search Console и Google Analytics.</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                  {/* Технологии */}
                  <p className="font-semibold text-lg mb-2 text-start">Технологии:</p>
                  <ul className="list-none list-inside p-3">
                    <li>Next.js и React для быстрой работы и интерактивных компонентов.</li>
                  </ul>
                </div>
              </div>
              <Link href="/contact"> <button className="my-5 md:mt-10 p-3 rounded-lg bg-black text-white text-lg">
               Заказать сайт-визитку
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

          {/* ПРЕМИУМ САЙТ-ВИЗИТКА CONTAINER */}
          <div className="flex flex-col gap-8 justify-center" ref={experienceRef}>
            {/* TITLE */}
            <motion.h2
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className="font-bold text-2xl">
              ПРЕМИУМ САЙТ-ВИЗИТКА
            </motion.h2>

            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className="flex gap-8 flex-wrap">
              <div>
                <motion.p
                  className="text-lg font-semibold text-gradient"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                  
                  Стоимость: 3000 - 8000 PLN.
                </motion.p>
                <motion.p
                  className="text-lg font-semibold text-gradient"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                  Количество страниц: 5 - 10.
                </motion.p>
                <motion.p
                  className="text-lg font-semibold text-gradient"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                  Время выполнения: 20 - 45 дней.
                </motion.p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="bg-white p-4 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                  {/* Функционал */}
                  <p className="font-semibold text-lg mb-2 text-start">Функционал:</p>
                  <ul className="list-disc list-inside p-3">
                    <li className="mb-1">
                      Главная, страницы услуг, контакты с формой обратной связи.
                    </li>
                    <li className="mb-1">
                      Подробное описание предлагаемых услуг с возможностью включения галереи
                      изображений или примеров работ.
                    </li>
                    <li className="mb-1">
                      Интеграция с Google Maps для отображения местоположения и информации о
                      компании.
                    </li>
                    <li className="mb-1">Блог или раздел новостей.</li>
                    <li className="mb-1">Возможность управления контентом через админ-панель.</li>
                    <li className="mb-1">Поддержка нескольких языков.</li>
                    <li className="mb-1">Подключение домена и размещение на хостинге.</li>
                    <li className="mb-1">
                      Адаптивный дизайн: Оптимизация с учетом различных экранов и устройств.
                    </li>
                    <li className="mb-1">
                      Работа по вашему макету,из нашей базы шаблонов или создание кастомного
                      дизайна.
                    </li>
                    <li className="mb-1">
                      Оптимизация скорости загрузки сайта для улучшения SEO и пользовательского
                      опыта.
                    </li>
                    <li className="mb-1">Подключение ссылок на соцсети (Facebook, Instagram).</li>
                    <li className="mb-1">
                      Анимация: Плавные переходы между секциями, анимация при прокрутке, эффекты на
                      кнопках и элементах при взаимодействии.
                    </li>
                    <li>
                      Персональный видеоурок с обзором настроек и функционала вашего сайта для его
                      дальнейшего самостоятельного управления.
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                  {/* SEO-подготовка и техническая оптимизация */}
                  <p className="font-semibold text-lg mb-2 text-start">
                    SEO-подготовка и техническая оптимизация:
                  </p>
                  <ul className="list-disc list-inside p-3">
                    <li className="mb-1">Настройка метатегов, описаний и заголовков для SEO.</li>
                    <li>Регистрация в Google Search Console и Google Analytics.</li>
                  </ul>
                </div>

                <div className="bg-white mb-10 p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                  {/* Технологии */}
                  <p className="font-semibold text-lg mb-2 text-start">Технологии:</p>
                  <ul className="list-disc list-inside p-3">
                    <li>Next.js и React для создания высококачественных интерфейсов.</li>
                    <li>Node.js для серверной логики и работы с API.</li>
                  </ul>
                </div>

                {/* Contact Form - with improved animation */}
                <motion.div
                  ref={formRef}
                  className="flex flex-col justify-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}>
                  <div className='text-center mb-8 leading-normal'>
            {text.split('').map((letter, index) => (
              <motion.span
                className="pr-3 text-2xl md:text-4xl "
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
                      <span className="font-semibold">Опишите ваш будущий сайт:</span>
                      <textarea
                        rows={8}
                        className="bg-transparent border-b-2 border-b-black outline-none resize-none placeholder-gray-700 placeholder-opacity-50 text-sm md:text-base min-h-[200px] max-w-full"
                        name="user_message"
                        placeholder="Пожалуйста, опишите ваши идеи, цели и любые конкретные функции, которые вы хотите."
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
                        whileTap={{ scale: 0.95 }}
                      >
                        Отправить
                      </motion.button>
                      {success && (
                        <motion.span 
                          className="text-green-600 font-semibold"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          Ваше сообщение успешно отправлено!
                        </motion.span>
                      )}
                      {error && (
                        <motion.span 
                          className="text-red-600 font-semibold"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          Что-то пошло не так!
                        </motion.span>
                      )}
                      {validationError && (
                        <motion.span 
                          className="text-red-600 font-semibold"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
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

            <div className="bg-yellow-100 mb-10 md:mt-10 p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
              <p className="text-sm font-semibold text-sky-700 italic">
                Мы предлагаем гибкость в выборе функционала! Вы можете добавлять или убирать опции в
                зависимости от ваших потребностей.
                <br />
                Обратите внимание, что итоговая цена может изменяться в зависимости от выбранных
                вами функций.
              </p>
            </div>
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

export default Sites;