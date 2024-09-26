'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import About from '@/components/About';

const Homepage = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row px-4 lg:px-8 py-10 md:py-20">
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
            Developing modern websites with promotion!
          </h1>
          <p className="text-start md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempora harum illum quidem
            molestiae ab error dignissimos autem vero. Nam dicta quas, qui autem expedita architecto
            temporibus itaque? Voluptatum, porro. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. At tempora harum illum quidem molestiae ab error dignissimos autem vero.{' '}
          </p>
          <div className="w-full flex gap-4">
            <button className="p-2 rounded-lg ring-1 ring-black bg-black text-white">
              Services
            </button>
            <button className="p-2 rounded-lg ring-1 ring-black">Evaluate Website</button>
          </div>
        </div>
      </div>

      <About />
    </motion.div>
  );
};

export default Homepage;