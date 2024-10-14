'use client';

import Image from 'next/image';
import { motion, useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Portfolio from '@/components/Portfolio';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';

export default function Homepage() {
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' });
  const containerRef = useRef();

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

  return (
    <motion.div
      className="h-full overflow-x-hidden"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}>
      <div className="h-full overflow-y-auto" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row py-10 md:py-20 z-20 relative">
            {/* Image container */}
            <div className="relative w-full h-80 lg:h-auto lg:w-1/2 flex items-center mt-5">
              <Image
                src="/hero.png"
                alt="hero"
                fill
                className="object-contain"
                style={{ height: '100%' }}
              />
            </div>

            {/* Text container */}
            <div className="flex flex-col lg:w-1/2 lg:h-auto gap-8 items-center justify-center mt-10">
              <h1 className="text-4xl md:text-5xl font-bold text-start">
                Современные сайты и реклама для вашего бизнеса!
              </h1>
              <p className="text-start md:text-lg">
                Мы разрабатываем удобные и современные цифровые решения, которые привлекают клиентов и
                способствуют росту продаж. Профессионально настроенная реклама в Google Ads поможет
                вам выйти на целевую аудиторию. Давайте вместе реализуем ваши идеи и сделаем ваш
                бизнес более заметным на рынке!
              </p>

              <div className="flex gap-4">
                <Link href="/contact">
                  <button className="p-2 rounded-lg bg-black text-white">
                    Оценить сайт
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="p-2 rounded-lg ring-2 ring-black font-semibold bg-gradient-to-r from-red-100 via-blue-100 to-red-100">
                    Написать нам
                  </button>
                </Link>
              </div>
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
          </div>

          {/* About section (previously in separate component) */}
          <div className="mt-10 md:mt-20">
            {/* EXPERIENCE CONTAINER */}
            <div className="flex flex-col items-center gap-12" ref={experienceRef}>
              {/* EXPERIENCE TITLE */}
              <motion.h1
                initial={{ x: '-300px' }}
                animate={isExperienceRefInView ? { x: '0' } : {}}
                transition={{ delay: 0.2 }}
                className="font-bold text-2xl md:text-3xl">
                Наши услуги
              </motion.h1>
              {/* EXPERIENCE LIST */}
              <motion.div
                initial={{ x: '-300px' }}
                animate={isExperienceRefInView ? { x: '0' } : {}}
                className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 text-center">
                {/* EXPERIENCE ITEMS */}
                {[
                  {
                    title: 'Сайты-визитки',
                    description:
                      'Наши сайты-визитки и лэндинги — это быстрые и стильные решения, созданные для привлечения внимания клиентов и выделения вашего бизнеса на фоне конкурентов. Мы фокусируемся на современном дизайне и удобном интерфейсе, чтобы обеспечить лучший пользовательский опыт.',
                    link: '/sites',
                  },
                  {
                    title: 'Интернет-магазины',
                    description:
                      'Мы создаем интернет-магазины, которые привлекают внимание и обеспечивают комфортные покупки для клиентов. Стильный дизайн и современные технологии позволяют вашим товарам выделяться на фоне конкурентов. С нами вы превратите ваш бизнес в успешный онлайн-проект!',
                    link: '/shops',
                  },
                  {
                    title: 'Стартапы',
                    description:
                      'Успешный стартап требует не только оригинальной идеи, но и эффективной реализации. Наша команда использует передовые технологии для разработки стильных и удобных платформ, которые не только привлекают внимание, но и обеспечивают отличное взаимодействие с пользователями.',
                    link: '/startaps',
                  },
                  {
                    title: 'Google Ads',
                    description:
                      'Профессиональная реклама в Google Ads помогает точно определить целевую аудиторию и увеличить видимость вашего бизнеса. Мы оптимизируем кампании, чтобы ваши объявления доходили до заинтересованных пользователей, что ускоряет выход на рынок и привлекает клиентов.',
                    link: '/ads',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 p-4 border rounded-lg shadow-2xl min-h-[280px] w-full bg-blue-50">
                    <div className="flex gap-2 items-center justify-center font-semibold text-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 text-black">
                        <path
                          d="M21 5v14H3V5h18zm-9 9H8v-2h4v2zm0-4H8V8h4v2z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>{item.title}</span>
                    </div>
                    <span>{item.description}</span>
                    <Link href={item.link}>
                      <button className="mt-5 p-2 rounded-lg ring-2 ring-black bg-gradient-to-r from-red-100 via-blue-100 to-red-100 font-bold">
                        Узнать больше
                      </button>
                    </Link>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* SKILLS CONTAINER */}
            <div className="hidden md:flex flex-col items-center gap-12 mt-20" ref={skillRef}>
              {/* SKILL TITLE */}
              <motion.h1
                initial={{ x: '-300px' }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="font-bold text-2xl text-center">
                Что нас отличает?
              </motion.h1>
              {/* SKILL LIST */}
              <motion.div
                initial={{ x: '-300px' }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                className="flex gap-4 flex-wrap justify-center">
                {[
                 'Высокая скорость сайтов',
                 "Современные технологии",
                 "Оптимизация под рекламу",
                 "Быстрый запуск",
                 "Следование здравому смыслу",
                 "Стильный дизайн сайтов",
                 "Привлечение клиентов",
                 "Поэтапная система оплаты",
                 "Безопасность данных",
                 "Масштабируемость",
                 'Простота управления'

                ].map((skill, index) => (
                  <div
                    key={index}
                    className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    {skill}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <Portfolio />
        </div>
      </div>
    </motion.div>
  );
}