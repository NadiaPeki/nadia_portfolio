'use client';
import Brain from '@/components/Brain';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const Startaps = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-start">
              Запуск стартапа: полное решение для вашего бизнеса
            </h1>
            <p className="text-start md:text-lg">
              Готовы запустить свой стартап или интернет-бизнес? Мы создаем не просто сайты, а
              эффективные платформы, которые помогут вам выстроить прочную основу для бизнеса и
              привлечь клиентов. Наша команда разрабатывает решения под ключ — от идей до полного
              воплощения, используя передовые технологии и инновационные подходы.
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
              НАШИ КЛЮЧЕВЫЕ РЕШЕНИЯ:
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
                  Стоимость: ♾️
                </motion.p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="bg-white p-4 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                  {/* Функционал */}
                  <p className="font-semibold text-lg mb-2 text-start">
                    Инновационные сайты с ИИ-интеграцией
                  </p>
                  <p>
                    Превратите ваши идеи в интеллектуальные системы. Мы создаем платформы с
                    искусственным интеллектом, которые автоматизируют задачи, персонализируют
                    взаимодействие и помогают вашим пользователям получать максимальную пользу. Это
                    может быть система для обучения, бизнес-инструменты или развлекательные
                    приложения — наши решения помогут вам выйти на рынок с уникальным продуктом.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                {/* SEO-подготовка и техническая оптимизация */}
                <p className="font-semibold text-lg mb-2 text-start">
                  Форумы и социальные платформы
                </p>
                <p>
                  Создавайте пространства для общения и взаимодействия пользователей. Сообщества —
                  это ключ к удержанию аудитории и созданию лояльности. Мы разрабатываем удобные
                  форумы и социальные платформы, которые вовлекают пользователей, создавая место для
                  обмена опытом, идеями и знаниями. Ваша платформа станет точкой притяжения для
                  людей с общими интересами.
                </p>
              </div>

              <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                {/* Технологии */}
                <p className="font-semibold text-lg mb-2 text-start">Доски объявлений</p>
                <p>
                  Монетизируйте взаимодействие через удобные площадки для объявлений. Наши доски
                  объявлений созданы с учетом удобства пользователей и потребностей бизнеса. Мы
                  предлагаем решения для любых ниш, с функциями фильтрации, рейтингов и отзывов,
                  которые помогают покупателям и продавцам легко находить друг друга. Это надежный
                  способ монетизации и расширения аудитории.
                </p>
              </div>
              <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                {/* Технологии */}
                <p className="font-semibold text-lg mb-2 text-start">
                  Платформы для оказания услуг
                </p>
                <p>
                  Соедините клиентов и исполнителей через продуманные сервисы бронирования. Наши
                  платформы упрощают процесс поиска и заказа услуг. Мы разрабатываем решения для
                  бронирования и оплаты, которые идеально подходят для фрилансеров, специалистов и
                  сервисных компаний. Удобный интерфейс и возможность безопасных платежей делают
                  такие платформы привлекательными для пользователей.
                </p>
              </div>
              <div className="bg-white p-6 rounded-md shadow-lg transition-transform transform md:hover:scale-105 md:hover:shadow-xl duration-300">
                {/* Технологии */}
                <p className="font-semibold text-lg mb-2 text-start">
                  Платформы для доставки товаров и услуг
                </p>
                <p>
                  Обеспечьте вашим клиентам удобство заказа и доставки. Мы создаем платформы для
                  быстрой и удобной доставки товаров и услуг с отслеживанием в реальном времени и
                  интеграцией с платежными системами. Такие решения позволяют улучшить качество
                  обслуживания и повысить лояльность клиентов.
                </p>
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

export default Startaps;
