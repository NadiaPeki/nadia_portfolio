'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactUs from './ContactUs';
import { useTranslations } from 'next-intl';

const Portfolio = () => {
  const t = useTranslations('Homepage');
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      id: 1,
      color: 'from-red-100 to-blue-500',
      title: t('exampleTitle1'),
      desc: t('exampleDesc1'),
      img: '/examples/example3.jpg',
      link: 'https://www.wroclawtop.pl',
    },
    {
      id: 2,
      color: 'from-blue-300 to-violet-300',
      img: '/examples/example2.jpg',
      title: t('exampleTitle2'),
      desc: t('exampleDesc2'),
      link: 'https://www.yourpdfchat.com/',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <motion.div
      className="h-full overflow-hidden"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="pt-10 md:pt-20">
        <div className="h-full relative flex flex-col items-center">
          <div className="flex h-full py-10 md:py-20 gap-10 items-center justify-center">
            <div className="absolute top-10 left-0 md:left-10 z-10">
              <button
                onClick={handlePrev}
                className="bg-black text-white p-2 rounded flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>

            <motion.div
              className="flex gap-8 justify-center items-center"
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.5 }}
              key={currentIndex}
            >
              {items.map((item, index) => (
                <div
                  className={`min-w-[300px] md:min-w-[400px] lg:min-w-[600px] flex-shrink-0 flex justify-center items-center transition-transform duration-500 ease-in-out ${
                    index === currentIndex ? 'block' : 'hidden'
                  }`}
                  key={item.id}
                >
                  <div className="flex flex-col gap-10 md:gap-12 text-slate-950 items-center justify-center px-2">
                    <h1 className="text-base font-bold md:text-xl lg:text-2xl xl:text-4xl text-center">
                      {item.title}
                    </h1>
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[700px] lg:h-[380px] xl:w-[800px] xl:h-[450px]">
                      <Image src={item.img} alt={item.title} fill objectFit="contain" />
                    </div>
                    <p className="w-72 md:w-96 lg:w-[700px] lg:text-lg xl:w-[800px] text-center">
                      {item.desc}
                    </p>

                    <Link href={item.link} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold rounded">
                        {t('viewButton')}
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="absolute top-10 right-0 md:right-10">
              <button
                onClick={handleNext}
                className="bg-black text-white p-2 rounded flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <ContactUs />
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;