'use client';

import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { FiArrowRight, 
  FiDatabase, 
  FiClock, 
  FiCheckCircle, 
  FiExternalLink, 
  FiX, 
  FiMaximize2, 
  FiArrowDown,
  FiAlertCircle, 
  FiDollarSign, 
  FiUsers } from 'react-icons/fi';

export default function WorkoProject() {
  const containerRef = useRef();
  const [isZoomed, setIsZoomed] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const { scrollYProgress } = useScroll({ container: containerRef });

  // Даем время шторке завершить анимацию
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 1200); // Чуть больше чем duration анимации (1s)
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
        onAnimationComplete={() => {
          // Меньше ресурсоемко, чем useEffect с таймером
          requestAnimationFrame(() => {
            setIsPageLoaded(true);
          });
        }}
      >
        <div className="h-full overflow-y-auto" ref={containerRef}>
          
          {/* --- HERO SECTION --- */}
          <section className="relative pt-10 pb-20 md:pt-16">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
              
              {/* 1. TEXT & METRICS (Static for "Single Wall" effect) */}
              <div className="flex flex-col items-center text-center gap-8 mb-16">
                <h1 className="text-6xl md:text-8xl font-black text-black tracking-tight">
                  Worko<span className="text-red-600">.</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
                  A <span className="text-black font-semibold">Human-Centric platform</span> designed for small and medium businesses. 
                  How to build a product in 21 days that achieves hiring success with a <span className='text-black font-semibold'>15 PLN budget.</span>
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
                {/* Оборачиваем в проверку isPageLoaded */}
                {isPageLoaded && (
                  <motion.div 
                    onClick={() => setIsZoomed(true)}
                    whileHover={{ scale: 1.2}}
                    transition={{ duration: 0.2}}
                    className="absolute right-2 bottom-2 md:right-[-15px] md:bottom-8 group cursor-zoom-in w-20 md:w-28 rounded-[0.8rem] md:rounded-[1.2rem] border-[3px] md:border-[5px] border-slate-900 overflow-hidden shadow-2xl bg-white aspect-[9/19] z-30"
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
                )}

                {/* КНОПКИ С АДАПТИВНЫМИ СТИЛЯМИ */}
                <div className="flex flex-col items-center gap-6 mt-12 md:mt-12">
                  <Link href="#problem">
                    <button className="px-8 md:px-12 py-4 md:py-5 bg-slate-900 text-white rounded-full font-bold text-base md:text-lg hover:bg-red-600 transition-all flex items-center gap-3 shadow-2xl active:scale-95 w-full md:w-auto justify-center max-w-xs md:max-w-none">
                      Explore Case Study <FiArrowDown />
                    </button>
                  </Link>
                  <a href="https://worko.pl" target="_blank" className="flex items-center gap-2 text-slate-400 font-bold hover:text-red-600 transition-colors text-xs md:text-sm uppercase tracking-widest">
                    <FiExternalLink /> Live Preview
                  </a>
                </div>
              </div>
            </div>
          </section>

         {/* --- SECTION 2: THE PROBLEM --- */}
<section id="problem" className="py-2 md:py-10">
  <div className="container mx-auto px-4 md:px-6 max-w-6xl">
    
    {/* Header of Section */}
    <div className="mb-16 md:mb-24">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-red-600 font-bold uppercase tracking-widest text-sm"
      >
        01. The Context
      </motion.span>
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-black text-black mt-4 tracking-tight"
      >
        A Broken Hiring Cycle<span className="text-red-600">.</span>
      </motion.h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      {/* Left Column: The Narrative */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed"
      >
        <p>
          While working as an <span className="text-black font-semibold">HR Analyst</span>, 
          I noticed a recurring pattern: niche micro-businesses (like technical services or local contractors) 
          were consistently ignored by major job boards.
        </p>
        <p>
          Platforms like <span className="italic">Pracuj.pl</span> or <span className="italic">LinkedIn</span> are 
          designed for corporate giants, while <span className="italic">OLX</span> is too generalized. 
          The result? Small business owners spent more time fighting with interfaces than talking to candidates.
        </p>
        <div className="pt-6 border-t border-slate-100">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">The Core Insight</p>
          <p className="text-2xl text-black font-black mt-2 italic">
            "Complexity is the enemy of recruitment in the real sector."
          </p>
        </div>
      </motion.div>

      {/* Right Column: Pain Points Cards */}
      <div className="grid grid-cols-1 gap-6">
        {[
          {
            title: "High Barrier to Entry",
            desc: "Most platforms require a 15-minute registration process. For a busy technician, this is an immediate drop-off point.",
            icon: <FiAlertCircle className="text-red-600" />
          },
          {
            title: "Corporate Pricing",
            desc: "Single job postings can cost up to 500 PLN. A micro-business cannot justify this cost for a single hire.",
            icon: <FiDollarSign className="text-red-600" />
          },
          {
            title: "Fragmented Niche",
            desc: "The Eastern European workforce in Poland communicates via messengers, not corporate portals. The bridge was missing.",
            icon: <FiUsers className="text-red-600" />
          }
        ].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
            className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-red-100/20 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-red-50 text-2xl group-hover:bg-red-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
        </div>
      </motion.div>

      {/* --- LIGHTBOX MODAL - рендерим ТОЛЬКО после загрузки страницы --- */}
      {isPageLoaded && (
        <AnimatePresence>
          {isZoomed && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsZoomed(false)}
              className="fixed top-0 left-0 w-full h-full bg-black z-[99999] flex items-center justify-center p-4 md:p-6 cursor-zoom-out"
              style={{ zIndex: 99999 }}
            >
              {/* Container for the screen */}
              <div className="relative max-w-[90vw] md:max-w-[400px] w-full h-[70vh] md:h-[85vh]">
                
                {/* RED CLOSE CROSS - адаптивная позиция */}
                <button 
                  className="absolute -top-10 -right-2 md:-top-12 md:-right-4 text-red-600 hover:text-red-400 text-4xl md:text-5xl transition-colors z-[100000]"
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
                  className="w-full h-full rounded-[2rem] md:rounded-[2.5rem] border-[6px] md:border-[10px] border-slate-800 overflow-hidden bg-white shadow-2xl"
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
      )}
    </>
  );
}