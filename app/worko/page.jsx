'use client';

import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; // Не забудь импортировать Image
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
                  A <span className="text-black font-semibold">Human-Centric MVP</span> for the underserved SMB market. How I built a job platform in 21 days, validated core business hypotheses, and achieved confirmed hiring success with a <span className='text-black font-semibold'>total infrastructure spend of 15 PLN (domain name only)</span>.
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
                    <div className="text-[10px] text-red-100 font-bold uppercase tracking-widest opacity-80 text-center">Success Hire</div>
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
                    className="absolute right-2 bottom-2 md:right-[-15px] md:bottom-0 group cursor-zoom-in w-20 md:w-32 rounded-[0.8rem] md:rounded-[1.2rem] border-[3px] md:border-[5px] border-slate-900 overflow-hidden shadow-2xl bg-white aspect-[9/19] z-30"
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-40 flex items-center justify-center">
                      <FiMaximize2 className="text-red-600 opacity-0 group-hover:opacity-100 text-2xl" />
                    </div>
                    <div className="w-full h-full overflow-hidden">
                      <motion.img
                        src="/screen1.png"
                        alt="Mobile Form"
                        className="w-full h-auto"
                        animate={{ y: ["0%", "-50%", "0%"] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
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
<section id="problem" className="py-12 md:py-24">
  <div className="container mx-auto px-4 md:px-6 max-w-6xl">
    
    {/* Заголовок секции — Статичный и лаконичный */}
    <div className="mb-12 md:mb-16 text-center lg:text-left">
      <span className="text-red-600 font-bold uppercase tracking-widest text-lg md:text-xl">
        01. The Context
      </span>
      <h2 className="text-3xl md:text-5xl font-black text-black mt-2 tracking-tight">
        A Broken Hiring Cycle<span className="text-red-600">.</span>
      </h2>
    </div>

    {/* Сетка с тезисами — Всплывают по очереди (эффект волны) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "The Invisible 99.8%",
          desc: "SMBs represent 99.8% of Polish enterprises and 45.3% of GDP, yet they are priced out of corporate platforms that require dedicated HR departments.",
          highlight: "The Underserved Majority",
          icon: "📊"
        },
        {
          title: "Blue-Collar Gap",
          desc: "While tech tools focus on IT and management, high-demand sectors like caregiving, teaching, and technical services remain digitally forgotten.",
          highlight: "High-Demand, Low-Tech",
          icon: "🛠️"
        },
        {
          title: "Process Friction",
          desc: "The non-corporate market doesn't need complex HR pipelines. It needs friction-less tools that connect small business owners directly with essential workers.",
          highlight: "Non-Corporate Mindset",
          icon: "⚡"
        }
      ].map((item, index) => (
        <motion.div 
          key={index}
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2, // Волна: задержка для каждой следующей карточки
            ease: "easeOut" 
          }}
          className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-red-100/30 transition-shadow flex flex-col h-full"
        >
          {/* Иконки теперь всегда цветные */}
          <div className="text-4xl mb-6">
            {item.icon}
          </div>
          <h3 className="text-2xl font-bold text-black mb-4">{item.title}</h3>
          <p className="text-slate-600 leading-relaxed mb-6 flex-grow text-base md:text-lg">
            {item.desc}
          </p>
          <div className="pt-4 border-t border-slate-50">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
              {item.highlight}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
<section id="solution" className="py-12 md:py-24 bg-slate-50/50">
  <div className="container mx-auto px-4 md:px-6 max-w-6xl">
    
    {/* --- ЧАСТЬ 1: СТРАТЕГИЯ (Текст + Иконки) --- */}
    {/* Этот блок оставляем без изменений, он отлично задает контекст */}
    <div className="mb-16 md:mb-20 text-center lg:text-left">
      <span className="text-red-600 font-bold uppercase tracking-widest text-lg md:text-xl">
        02. The Solution
      </span>
      <h2 className="text-3xl md:text-5xl font-black text-black mt-2 tracking-tight">
        Engineering as Marketing<span className="text-red-600">.</span>
      </h2>
      <p className="text-slate-500 mt-4 text-lg max-w-2xl font-medium">
        Worko is an SEO-first, low-barrier platform built to close the gap between SMBs and the workforce through technical leverage.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {[
        {
          title: "SEO-First Engine",
          desc: "Next.js SSG architecture enables instant indexing. The platform generates organic traffic 24/7, outranking heavy corporate portals with zero ad spend.",
          highlight: "Static-First Leverage",
          icon: "🚀"
        },
        {
          title: "Radical Simplicity",
          desc: "Mobile-first UX designed for zero friction. Direct employer–candidate contact with TTP < 5 min and no mandatory registration.",
          highlight: "Zero Barrier Entry",
          icon: "📱"
        },
        {
          title: "Product-Led Growth",
          desc: "We replaced marketing budgets with engineering. Automated indexing and smart SEO-routing reach the non-corporate market organically.",
          highlight: "Tech-Driven Acquisition",
          icon: "💎"
        }
      ].map((item, index) => (
        <motion.div 
          key={index}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
        >
          <div className="text-4xl mb-6">{item.icon}</div>
          <h3 className="text-2xl font-bold text-black mb-4">{item.title}</h3>
          <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{item.desc}</p>
          <div className="pt-4 border-t border-slate-50 text-xs font-bold text-red-600 uppercase tracking-widest">
            {item.highlight}
          </div>
        </motion.div>
      ))}
    </div>

    {/* --- ЧАСТЬ 2: VISUAL USER JOURNEY (Картинки) --- */}
    <div className="pt-16 border-t border-slate-200">
      <div className="space-y-20">
        
        {/* ПУТЬ РАБОТОДАТЕЛЯ */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-extrabold uppercase tracking-tighter text-black flex items-center gap-3 mb-8">
            <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-base">1</span>
            Employer Path: Fast Execution
          </h3>
          
          {/* Сетка из 3 шагов с картинками */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Шаг 1 */}
            <div className="space-y-4 group">
              <div className="overflow-hidden rounded-2xl border-2 border-slate-100 shadow-sm group-hover:shadow-md transition-all bg-white">
                {/* ЗАМЕНИ SRC НА СВОЮ КАРТИНКУ */}
                <Image 
                  src="/api/placeholder/300/533" 
                  alt="SEO Landing Page screenshot" 
                  width={300} height={533} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg text-black">Instant SEO Entry</h4>
                <p className="text-slate-500 text-sm mt-1">Finds a niche-specific landing page via Google. No navigation noise.</p>
              </div>
            </div>
             {/* Шаг 2 */}
            <div className="space-y-4 group">
              <div className="overflow-hidden rounded-2xl border-2 border-slate-100 shadow-sm group-hover:shadow-md transition-all bg-white">
                {/* ЗАМЕНИ SRC НА СВОЮ КАРТИНКУ */}
                <Image 
                  src="/api/placeholder/300/533" 
                  alt="Posting Form screenshot" 
                  width={300} height={533} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg text-black">Post in &lt; 5 Min</h4>
                <p className="text-slate-500 text-sm mt-1">One-page form. No account creation required for the first cycle.</p>
              </div>
            </div>
             {/* Шаг 3 */}
            <div className="space-y-4 group">
              <div className="overflow-hidden rounded-2xl border-2 border-red-100 shadow-sm group-hover:shadow-md transition-all bg-white">
                {/* ЗАМЕНИ SRC НА СВОЮ КАРТИНКУ */}
                <Image 
                  src="/api/placeholder/300/533" 
                  alt="Lead Delivery screenshot" 
                  width={300} height={533} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg text-black">Direct Lead Delivery</h4>
                <p className="text-slate-500 text-sm mt-1">Candidates contact via phone/messenger. No internal ATS to learn.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ПУТЬ КАНДИДАТА */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-extrabold uppercase tracking-tighter text-black flex items-center gap-3 mb-8">
            <span className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center text-base">2</span>
            Candidate Path: Immediate Contact
          </h3>
          
           {/* Сетка из 3 шагов с картинками */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Шаг 1 */}
            <div className="space-y-4 group">
              <div className="overflow-hidden rounded-2xl border-2 border-slate-100 shadow-sm group-hover:shadow-md transition-all bg-white">
                {/* ЗАМЕНИ SRC НА СВОЮ КАРТИНКУ */}
                <Image 
                  src="/api/placeholder/300/533" 
                  alt="Mobile Discovery screenshot" 
                  width={300} height={533} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg text-black">Mobile-First Discovery</h4>
                <p className="text-slate-500 text-sm mt-1">Optimized for fast-loading on mobile. 100% responsive UI.</p>
              </div>
            </div>
             {/* Шаг 2 */}
            <div className="space-y-4 group">
              <div className="overflow-hidden rounded-2xl border-2 border-slate-100 shadow-sm group-hover:shadow-md transition-all bg-white">
                {/* ЗАМЕНИ SRC НА СВОЮ КАРТИНКУ */}
                <Image 
                  src="/api/placeholder/300/533" 
                  alt="No Paperwork screenshot" 
                  width={300} height={533} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg text-black">No Paperwork</h4>
                <p className="text-slate-500 text-sm mt-1">Eliminating resumes/PDFs. Blue-collar workers value speed over profiles.</p>
              </div>
            </div>
             {/* Шаг 3 */}
            <div className="space-y-4 group">
              <div className="overflow-hidden rounded-2xl border-2 border-black shadow-sm group-hover:shadow-md transition-all bg-white">
                {/* ЗАМЕНИ SRC НА СВОЮ КАРТИНКУ */}
                <Image 
                  src="/api/placeholder/300/533" 
                  alt="One-Tap Connection screenshot" 
                  width={300} height={533} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg text-black">One-Tap Connection</h4>
                <p className="text-slate-500 text-sm mt-1">Direct call or message button. Closing the feedback loop instantly.</p>
              </div>
            </div>
          </div>
        </motion.div>

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