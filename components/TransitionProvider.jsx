'use client';

import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  const pageTitles = {
    '/': 'ABOUT ME',
    '/worko': 'WORKO',
    '/airbnb': 'AIRBNB',
    '/voltedge': 'VOLTEDGE',
    '/beauty': 'BEAUTY',
    '/contact': 'CONTACT',
  };

  const currentTitle = pageTitles[pathName] || 'Portfolio';

  return (
    <AnimatePresence mode="wait">
      {/* key={pathName} заставляет всё внутри перерисовываться при смене страницы */}
      <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
        
        {/* ЧЕРНАЯ ШТОРКА (Верхняя) */}
        {/* Ставим z-[9999], чтобы она была выше абсолютно всего на свете */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-[9999] pointer-events-none"
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />

        {/* ДИНАМИЧЕСКИЙ ТЕКСТ */}
        {/* Ставим z-[10000], чтобы текст был над шторкой */}
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white font-bold text-5xl md:text-8xl cursor-default z-[10000] w-fit h-fit uppercase pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}>
          {currentTitle}
        </motion.div>

        {/* ЧЕРНАЯ ШТОРКА (Нижняя) */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-[9999] pointer-events-none"
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.5 } }}
        />

        {/* ВЕСЬ КОНТЕНТ САЙТА */}
        <div className="flex flex-col h-screen">
          {/* Навбар теперь точно будет ПОД шторкой в моменты перехода */}
          <Navbar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;