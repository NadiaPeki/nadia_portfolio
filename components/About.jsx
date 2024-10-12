'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function About() {
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

  return (
    <div className="h-full flex items-center justify-center py-10">
      {/* CONTAINER */}
      <div className="h-full max-w-4xl mx-auto px-4">
        {/* TEXT CONTAINER */}
        <div className="flex flex-col items-center gap-10 md:gap-20">
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
              className="grid grid-cols-1 sm:grid-cols-2 gap-20 text-center">
              {/* EXPERIENCE ITEM */}
              <div className="flex flex-col gap-4 p-6 border rounded-lg shadow-md min-h-[300px] w-full">
                <div className="flex gap-2 items-center justify-center font-semibold text-xl">
                  {/* Icon for Сайты-визитки */}
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
                  <span>Сайты-визитки</span>
                </div>
                <span>
                  Наши сайты-визитки и лэндинги — это быстрые и стильные решения, созданные для
                  привлечения внимания клиентов и выделения вашего бизнеса на фоне конкурентов. Мы
                  фокусируемся на современном дизайне и удобном интерфейсе, чтобы обеспечить лучший
                  пользовательский опыт.
                </span>
                <Link href="/sites">
                  <button className="mt-5 p-2 rounded-lg ring-2 ring-black bg-gradient-to-r from-red-100 via-blue-100 to-red-100 font-bold">
                    Узнать больше
                  </button>
                </Link>
              </div>

              {/* EXPERIENCE ITEM */}
              <div className="flex flex-col gap-4 p-6 border rounded-lg shadow-md min-h-[300px] w-full">
                <div className="flex gap-2 items-center justify-center font-semibold text-xl">
                  {/* Icon for Интернет-магазины */}
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
                  <span>Интернет-магазины</span>
                </div>
                <span>
                  Мы создаем интернет-магазины, которые привлекают внимание и обеспечивают
                  комфортные покупки для клиентов. Стильный дизайн и современные технологии
                  позволяют вашим товарам выделяться на фоне конкурентов. С нами вы превратите ваш
                  бизнес в успешный онлайн-проект!
                </span>
                <Link href="/shops">
                  <button className="mt-5 p-2 rounded-lg ring-2 ring-black bg-gradient-to-r from-red-100 via-blue-100 to-red-100 font-bold">
                    Узнать больше
                  </button>
                </Link>
              </div>

              {/* EXPERIENCE ITEM */}
              <div className="flex flex-col gap-4 p-6 border rounded-lg shadow-md min-h-[300px] w-full">
                <div className="flex gap-2 items-center justify-center font-semibold text-xl">
                  {/* Icon for Стартапы */}
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
                  <span>Стартапы</span>
                </div>
                <span>
                  Успешный стартап требует не только оригинальной идеи, но и эффективной реализации.
                  Наша команда использует передовые технологии для разработки стильных и удобных
                  платформ, которые не только привлекают внимание, но и обеспечивают отличное
                  взаимодействие с пользователями.
                </span>
                <Link href="/startaps">
                  <button className="mt-5 p-2 rounded-lg ring-2 ring-black bg-gradient-to-r from-red-100 via-blue-100 to-red-100 font-bold">
                    Узнать больше
                  </button>
                </Link>
              </div>

              {/* EXPERIENCE ITEM */}
              <div className="flex flex-col gap-4 p-6 border rounded-lg shadow-md min-h-[300px] w-full">
                <div className="flex gap-2 items-center justify-center font-semibold text-xl">
                  {/* Icon for Google Ads */}
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
                  <span>Google Ads</span>
                </div>
                <span>
                  Профессиональная реклама в Google Ads помогает точно определить целевую аудиторию
                  и увеличить видимость вашего бизнеса. Мы оптимизируем кампании, чтобы ваши
                  объявления доходили до заинтересованных пользователей, что ускоряет выход на рынок
                  и привлекает клиентов.
                </span>
                <Link href="/ads">
                  <button className="mt-5 p-2 rounded-lg ring-2 ring-black bg-gradient-to-r from-red-100 via-blue-100 to-red-100 font-bold">
                    Узнать больше
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col items-center gap-12" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl">
              Мы используем современные технологии
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap justify-center">
              {[
                'JavaScript',
                'TypeScript',
                'React.js',
                'Next.js',
                'SCSS',
                'Tailwind CSS',
                'MongoDB',
                'PostgreSQL',
                'Node.js',
                'Express.js',
                'GraphQL',
                'Apollo',
                'Redux',
                'Framer Motion',
                'Three.js',
                'WebGL',
                'Webpack',
                'Vite',
                'Docker',
                'AWS',
                'Firebase',
                'Git',
                'Figma',
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
      </div>
    </div>
  );
}
