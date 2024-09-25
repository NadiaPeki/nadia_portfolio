'use client';

import { AnimatePresence } from 'framer-motion';
import Navbar from './navbar';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 2 } }}
        />
        <div className="flex-1 flex flex-col h-screen bg-gradient-to-b from-blue-100 to-red-100">
          {/* Стили для фиксации навбара */}
          <Navbar className="sticky top-0 z-10" />

          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
