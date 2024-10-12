'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';

const Homepage = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row p-4 md:pr-6 lg:pr-20 py-10 md:py-20">
        {/* Контейнер с изображением */}
        <div className="relative w-full h-80 lg:h-auto lg:w-1/2 p-8 flex items-center mt-5">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className="object-contain"
            style={{ height: '100%' }}
          />
        </div>

        {/* Контейнер с текстом, выровненным по центру */}
        <div className="flex flex-col lg:w-1/2 lg:h-auto gap-8 items-center justify-center px-4 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-start">
            Современные сайты и реклама для вашего бизнеса!
          </h1>
          <p className="text-start md:text-lg">
          Мы разрабатываем удобные и современные цифровые решения, которые привлекают клиентов и способствуют росту продаж. Профессионально настроенная реклама в Google Ads поможет вам выйти на целевую аудиторию. Давайте вместе реализуем ваши идеи и сделаем ваш бизнес более заметным на рынке!
          </p>
         
          <div className=" flex gap-4">
         
         <Link href='/contact'>
         <button className="p-2 rounded-lg ring-1 ring-black bg-gradient-to-r from-black via-slate-700 to-black text-white">
         Оценить сайт
         </button>
         </Link>
        <Link href='/contact'>
        <button className="p-2 rounded-lg ring-2 ring-black font-semibold bg-gradient-to-r from-red-100 via-blue-100 to-red-100">Написать нам</button>
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

      <About />
      <Portfolio/>
    </motion.div>
  );
};

export default Homepage;