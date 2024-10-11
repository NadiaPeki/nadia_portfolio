'use client';
import Brain from '@/components/Brain';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import ContactUs from '@/components/ContactUs';
import Link from 'next/link';

const Ads = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-start">Google Ads</h1>
            <p className="text-start md:text-lg">
              В условиях современного онлайн-ритейла, важнейшими факторами успеха становятся
              простота взаимодействия с сайтом, оптимизация под поисковые системы и увеличение
              продаж. Мы создаем интернет-магазины с прицелом на быструю загрузку, адаптивный дизайн
              и конверсионные элементы, что позволяет не только привлекать трафик, но и эффективно
              превращать его в реальных покупателей.
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <div className="flex flex-col gap-3 text-center border border-slate-400 p-4 rounded-lg bg-rose-50 w-1/2">
                <motion.p
                  className="text-lg font-semibold text-gradient"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                  Доменное имя в зоне .pl — в подарок.
                </motion.p>
              </div>

              <div className="flex flex-col gap-3 text-center border border-slate-400 p-4 rounded-lg bg-rose-50 w-1/2">
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
              <button className="my-5 md:mt-10 p-3 rounded-lg ring-2 ring-slate-600 bg-gradient-to-r from-slate-700 via-rose-700 to-slate-700 text-white text-lg">
  <Link href="/contact">Заказать рекламу</Link>
</button>

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
              className="font-bold text-2xl">
              ВЕДЕНИЕ GOOGLE ADS
            </motion.h2>

            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              // Добавлено время анимации
              className="flex gap-8 flex-wrap">
              <div>
                <motion.p
                  className="text-lg font-semibold text-gradient"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                  Стоимость: 20% от фактически потраченного бюджета на рекламу за прошлый месяц
                </motion.p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="bg-white p-4 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
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
              </div>
            </motion.div>
          </div>
          <div className="flex justify-center items-start ">
            <div className="w-screen h-full flex flex-col">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-start xl:text-center ">
                Хочешь заказать рекламу?
              </h1>
           
            <div className="relative   w-64 h-64 md:w-[500px] md:h-[500px]">
                  <motion.svg
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
                    viewBox="0 0 300 300"
                    className="w-full h-full ">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <text fill="#000">
                      <textPath xlinkHref="#circlePath" className="text-xl font-semibold">
                        Websites Developing and Advertising.
                      </textPath>
                    </text>
                  </motion.svg>
                  <Link
                    href="/contact"
                    className="w-20 h-20 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-slate-900 text-white font-semibold rounded-full flex items-center justify-center text-center">
                    Напиши нам
                  </Link>
                </div>
         
              
             
              
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

export default Ads;
