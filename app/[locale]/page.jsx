'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Portfolio from '@/components/Portfolio';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function Homepage() {
  const skillRef = useRef();
  const containerRef = useRef();
  const experienceRef = useRef();
 
  const t = useTranslations('Homepage');

  const services = [
    {
      title: t('titleservice1'),
      description: t('service1'),
      link: '/sites',
    },
    {
      title: t('titleservice2'),
      description: t('service2'),
      link: '/shops',
    },
    {
      title: t('titleservice3'),
      description: t('service3'),
      link: '/startaps',
    },
    {
      title: t('titleservice4'),
      description: t('service4'),
      link: '/ads',
    },
  ];

  const skills = [
    t('skill1'),
    t('skill2'),
    t('skill3'),
    t('skill4'),
    t('skill5'),
    t('skill6'),
    t('skill7'),
    t('skill8'),
    t('skill9'),
    t('skill10'),
    t('skill11')
  ];

  return (
    <motion.div
      className="h-full overflow-x-hidden"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}>
      <div className="flex-grow overflow-y-auto" ref={containerRef}>
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
                {t('title')}
              </h1>
              <p className="text-start md:text-lg">
                {t('hero')}
              </p>

              <div className="flex gap-4">
                <Link href="/contact">
                  <button className="p-2 rounded-lg bg-black text-white">
                    {t('buttonprice')}
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="p-2 rounded-lg ring-2 ring-black font-semibold bg-gradient-to-r from-red-100 via-blue-100 to-red-100">
                    {t('buttonwrite')}
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
                {/* <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                  <FaTelegramPlane className="text-2xl text-blue-400 hover:text-blue-300" />
                </a> */}
              </div>
            </div>
          </div>

          {/* About section (previously in separate component) */}
          <div className="mt-10 md:mt-20">
            {/* EXPERIENCE CONTAINER */}
            <div className="flex flex-col items-center gap-12" ref={experienceRef}>
              {/* EXPERIENCE TITLE */}
              <h1 className="font-bold text-2xl md:text-3xl">
                {t('titleservice')}
              </h1>
              {/* EXPERIENCE LIST */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 text-center">
                {/* EXPERIENCE ITEMS */}
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 p-4 border rounded-lg shadow-sm min-h-[280px] w-full bg-blue-50">
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
                        {t('buttonmore')}
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* SKILLS CONTAINER */}
            <div className="hidden md:flex flex-col items-center gap-12 mt-10 md:mt-20" ref={skillRef}>
              {/* SKILL TITLE */}
              <h1 className="font-bold text-2xl text-center">
                {t('titleadvantages')}
              </h1>
              {/* SKILL LIST */}
              <div className="flex gap-4 flex-wrap justify-center">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Portfolio />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

