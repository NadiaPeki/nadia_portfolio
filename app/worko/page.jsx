'use client';

import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiDatabase, FiClock, FiCheckCircle, FiExternalLink, FiX, FiMaximize2 } from 'react-icons/fi';

export default function WorkoProject() {
  const containerRef = useRef();
  const [isZoomed, setIsZoomed] = useState(false);
  const { scrollYProgress } = useScroll({ container: containerRef });

  // Блокируем скролл страницы при открытии модального окна
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isZoomed]);

  return (
    <>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1}}
      >
        <div className="h-full overflow-y-auto" ref={containerRef}>
          
          {/* --- HERO SECTION --- */}
          <section className="relative pt-10 pb-20 md:pt-16">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
              
              {/* 1. TEXT & METRICS (Static for "Single Wall" effect) */}
              <div className="flex flex-col items-center text-center gap-8 mb-16">
                <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight">
                  Worko<span className="text-red-600">.</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
                  A <span className="text-slate-900 font-semibold">Human-Centric platform</span> designed for micro-businesses and niche talent. 
                  How to build a product that actually hires people in 21 days with a 15 PLN budget.
                </p>

                {/* METRICS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-4">
                  <div className="p-6 rounded-3xl bg-white/40 border border-slate-100 backdrop-blur-md flex flex-col items-center gap-2">
                    <FiDatabase className="text-red-600 text-xl" />
                    <div className="text-2xl font-black text-slate-900">15 PLN</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">CAPEX</div>
                  </div>

                  <div className="p-6 rounded-3xl bg-white/40 border border-slate-100 backdrop-blur-md flex flex-col items-center gap-2">
                    <FiClock className="text-red-600 text-xl" />
                    <div className="text-2xl font-black text-slate-900">21 Days</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Dev Sprint</div>
                  </div>

                  <div className="p-6 rounded-3xl bg-red-600 flex flex-col items-center gap-2 shadow-xl shadow-red-200">
                    <FiCheckCircle className="text-white text-xl" />
                    <div className="text-2xl font-black text-white">44 Days</div>
                    <div className="text-[10px] text-red-100 font-bold uppercase tracking-widest opacity-80 text-center">First Success Hire</div>
                  </div>
                </div>
              </div>

              {/* 2. VISUALS */}
              <div className="relative flex flex-col items-center max-w-5xl mx-auto">
                <motion.div 
                  onClick={() => setIsZoomed(true)}
                  whileHover={{ scale: 1.2}}
                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute right-2 bottom-2 md:right-[-15px] md:bottom-8 group cursor-zoom-in w-20 md:w-28 rounded-[0.8rem] md:rounded-[1.2rem] border-[3px] md:border-[5px] border-slate-900 overflow-hidden shadow-2xl bg-white aspect-[9/19] z-30 transition-all"
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-40 flex items-center justify-center">
                    <FiMaximize2 className="text-red-600 opacity-0 group-hover:opacity-100 text-2xl" />
                  </div>
                  <div className="w-full h-full overflow-hidden">
                    <motion.img
                      src="/screen1.png"
                      alt="Mobile Form"
                      className="w-full h-auto"
                      animate={{ y: ["0%", "-65%", "0%"] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </motion.div>

                <div className="flex flex-col items-center gap-6 mt-12">
                  <Link href="#problem">
                    <button className="px-12 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-red-600 transition-all flex items-center gap-3 shadow-2xl active:scale-95">
                      Explore Case Study <FiArrowRight />
                    </button>
                  </Link>
                  <a href="https://worko.pl" target="_blank" className="flex items-center gap-2 text-slate-400 font-bold hover:text-red-600 transition-colors text-sm uppercase tracking-widest">
                    <FiExternalLink /> Live Preview
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="problem" className="py-20"></section>
        </div>
      </motion.div>

      {/* --- LIGHTBOX MODAL (ВНЕ основного контейнера) --- */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed top-0 left-0 w-full h-full bg-black z-[99999] flex items-center justify-center p-6 cursor-zoom-out"
            style={{ zIndex: 99999 }}
          >
            {/* Container for the screen */}
            <div className="relative max-w-[400px] w-full h-[85vh]">
              
              {/* RED CLOSE CROSS */}
              <button 
                className="absolute -top-12 -right-4 md:-right-16 text-red-600 hover:text-red-400 text-5xl transition-colors z-[100000]"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(false);
                }}
              >
                <FiX />
              </button>
              
              {/* Enlarged Screen */}
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-full h-full rounded-[2.5rem] border-[10px] border-slate-800 overflow-hidden bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                    src="/screen1.png"
                    className="w-full h-auto"
                    animate={{ y: ["0%", "-70%", "0%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}