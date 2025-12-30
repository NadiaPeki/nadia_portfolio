'use client';

import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  // 1. Создаем словарь названий страниц
  const pageTitles = {
    '/': 'ABOUT ME',
    '/worko': 'WORKO',
    '/airbnb': 'AIRBNB',
    '/voltedge': 'VOLTEDGE',
    '/beauty': 'BEAUTY',
    '/contact': 'CONTACT',
  };

  // 2. Определяем заголовок для текущего пути. 
  // Если пути нет в словаре (например, 404), выводим KOT.dev
  const currentTitle = pageTitles[pathName] || 'KOT.dev';

  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
        {/* Верхняя черная шторка (уходит вверх) */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />

        {/* ДИНАМИЧЕСКИЙ ТЕКСТ */}
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white font-bold text-7xl md:text-9xl cursor-default z-50 w-fit h-fit uppercase"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}>
          {currentTitle}
        </motion.div>

        {/* Нижняя черная шторка (поднимается вверх при входе) */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.5 } }}
        />

        <div className="flex-1 flex flex-col h-screen bg-gradient-to-b from-blue-100 to-red-100">
          <Navbar className="sticky top-0 z-10" />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;