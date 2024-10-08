'use client';
import Brain from '@/components/Brain';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const Sites = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

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
    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
  >
    Стоимость: 1500 - 3000 PLN
  </motion.p>
  <motion.p
    className="text-lg font-semibold text-gradient"
    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
  >
    Количество страниц: 1 - 5
  </motion.p>
  <motion.p
    className="text-lg font-semibold text-gradient"
    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
  >
    Время выполнения: 10 - 20 дней
  </motion.p>
</div>
<div className="flex flex-col gap-8">
  <div className="bg-white p-4 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
    {/* Функционал */}
    <p className="font-semibold text-lg mb-2 text-start">Функционал:</p>
    <ul className="list-disc list-inside p-3">
      <li className="mb-1">Главная, страницы услуг, контакты с формой обратной связи.</li>
      <li className="mb-1">Интеграция с Google Maps для отображения местоположения.</li>
      <li className="mb-1">Подключение домена и размещение на хостинге.</li>
      <li className="mb-1">Адаптивный дизайн: Оптимизация с учетом различных экранов и устройств.</li>
      <li className="mb-1">Работа по вашему макету или из нашей базы шаблонов.</li>
      <li className="mb-1">Оптимизация скорости загрузки сайта для улучшения SEO и пользовательского опыта.</li>
      <li className="mb-1">Подключение ссылок на соцсети (Facebook, Instagram).</li>
      <li>Анимация: Плавные переходы между секциями, эффекты на кнопках и элементах при взаимодействии.</li>
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

          {/* Pro site CONTAINER */}
          {/* EXPERIENCE CONTAINER */}
<div className="flex flex-col gap-8 justify-center" ref={experienceRef}>
  {/* TITLE */}
  <motion.h2
    initial={{ x: '-300px' }}
    animate={isExperienceRefInView ? { x: 0 } : {}}
   // Добавлено время анимации
    className="font-bold text-2xl"
  >
    ПРЕМИУМ САЙТ-ВИЗИТКА
  </motion.h2>

  {/* EXPERIENCE LIST */}
  <motion.div
    initial={{ x: '-300px' }}
    animate={isExperienceRefInView ? { x: 0 } : {}}
    // Добавлено время анимации
    className="flex gap-8 flex-wrap"
  >
    <div>
      <motion.p
        className="text-lg font-semibold text-gradient"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        Стоимость: 3000 - 8000 PLN
      </motion.p>
      <motion.p
        className="text-lg font-semibold text-gradient"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        Количество страниц: 5 - 10
      </motion.p>
      <motion.p
        className="text-lg font-semibold text-gradient"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        Время выполнения: 20 - 45 дней
      </motion.p>
    </div>
    <div className="flex flex-col gap-8">
      <div className="bg-white p-4 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
        {/* Функционал */}
        <p className="font-semibold text-lg mb-2 text-start">Функционал:</p>
        <ul className="list-disc list-inside p-3">
        <li className="mb-1">Главная, страницы услуг, контакты с формой обратной связи.</li>
        <li className="mb-1">Подробное описание предлагаемых услуг с возможностью включения галереи изображений или примеров работ.</li>
        <li className="mb-1">Интеграция с Google Maps для отображения местоположения и информации о компании.</li>
        <li className="mb-1">Блог или раздел новостей.</li>
        <li className="mb-1">Возможность управления контентом через админ-панель</li>
      <li className="mb-1">Подключение домена и размещение на хостинге.</li>
      <li className="mb-1">Адаптивный дизайн: Оптимизация с учетом различных экранов и устройств.</li>
      <li className="mb-1">Работа по вашему макету,из нашей базы шаблонов или создание кастомного дизайна.</li>
      <li className="mb-1">Оптимизация скорости загрузки сайта для улучшения SEO и пользовательского опыта.</li>
      <li className="mb-1">Подключение ссылок на соцсети (Facebook, Instagram).</li>
      <li>Анимация: Плавные переходы между секциями, анимация при прокрутке, эффекты на кнопках и элементах при взаимодействии.</li>
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
    </div>
   
  </motion.div>
  <div className="bg-yellow-100 mb-10 md:mt-10 p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
       
       <p className="text-sm font-semibold text-sky-700 italic">
     Мы предлагаем гибкость в выборе функционала! Вы можете добавлять или убирать опции в зависимости от ваших потребностей. 
     <br/>
     Обратите внимание, что итоговая цена может изменяться в зависимости от выбранных вами функций.
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
