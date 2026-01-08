'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; 
import { useRef, useState, useEffect } from 'react';
import { 
  FiDatabase, 
  FiClock, 
  FiCheckCircle, 
  FiExternalLink, 
  FiX, 
  FiMaximize2, 
  FiArrowDown,
  FiChevronLeft,
  FiChevronRight,
  FiUserCheck,
  FiMessageSquare 
} from 'react-icons/fi';

export default function WorkoProject() {
  const containerRef = useRef();
  const [isZoomed, setIsZoomed] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  const [empStep, setEmpStep] = useState(0);
  const [candStep, setCandStep] = useState(0);

  const employerPhotos = [
    { title: "01. Main Landing", desc: "The SEO-optimized entry point for specific niches.", src: "/solution1.png" },
    { title: "02. Fast Start", desc: "Initial job parameters. No registration required yet.", src: "/solution2.png" },
    { title: "03. Detailed Offer", desc: "Finalizing job details and the 'Zatwierdź' action.", src: "/solution3.png" },
    { title: "04. Trust Loop", desc: "Instant moderation status to manage expectations.", src: "/solution4.png" },
    { title: "05. Result", desc: "The offer is live and indexed for Google search.", src: "/solution5.png" },
  ];

  const candidatePhotos = [
    { title: "01. Niche Feed", desc: "Mobile-first list of local opportunities.", src: "/solution6.png" },
    { title: "02. Job Details", desc: "Transparent info without login barriers.", src: "/solution7.png" },
    { title: "03. Instant Contact", desc: "One-tap connection to the employer.", src: "/solution11.png" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
        onAnimationComplete={() => requestAnimationFrame(() => setIsPageLoaded(true))}
      >
        <div className="h-full overflow-y-auto scroll-smooth" ref={containerRef}>
          
          {/* --- HERO SECTION --- */}
          <section className="relative pt-10 pb-20 md:pt-16">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
              <div className="flex flex-col items-center text-center gap-8 mb-16">
                <h1 className="text-6xl md:text-8xl font-black text-black tracking-tight">
                  Worko<span className="text-red-600">.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed font-normal">
                  A <span className="text-black font-semibold">Human-Centric MVP</span> for the underserved SMB market. 
                  How I built a job platform in 21 days with a <span className='text-black font-semibold'>total infrastructure spend of 15 PLN</span>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-4 font-bold">
                  <div className="p-6 rounded-3xl bg-white/40 border border-slate-100 backdrop-blur-md flex flex-col items-center gap-2">
                    <FiDatabase className="text-red-600 text-xl" />
                    <div className="text-2xl text-slate-900 font-black">15 PLN</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">CAPEX</div>
                  </div>
                  <div className="p-6 rounded-3xl bg-white/40 border border-slate-100 backdrop-blur-md flex flex-col items-center gap-2">
                    <FiClock className="text-red-600 text-xl" />
                    <div className="text-2xl text-slate-900 font-black">21 Days</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">Dev Sprint</div>
                  </div>
                  <div className="p-6 rounded-3xl bg-red-600 flex flex-col items-center gap-2 shadow-xl shadow-red-200 text-white">
                    <FiCheckCircle className="text-xl" />
                    <div className="text-2xl font-black">44 Days</div>
                    <div className="text-[10px] uppercase tracking-widest opacity-80">Success Hire</div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col items-center max-w-5xl mx-auto">
                {isPageLoaded && (
                  <motion.div 
                    onClick={() => setIsZoomed(true)}
                    whileHover={{ scale: 1.2}}
                    transition={{ duration: 0.2}}
                    className="absolute right-2 bottom-2 md:right-[-15px] md:bottom-0 group cursor-zoom-in w-20 md:w-32 rounded-[0.8rem] md:rounded-[1.2rem] border-[3px] md:border-[5px] border-slate-900 overflow-hidden shadow-2xl bg-white aspect-[9/19] z-30 transition-all"
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-40 flex items-center justify-center">
                      <FiMaximize2 className="text-red-600 opacity-0 group-hover:opacity-100 text-2xl" />
                    </div>
                    <div className="w-full h-full overflow-hidden">
                      <motion.img
                        src="/screen1.png"
                        className="w-full h-auto"
                        animate={{ y: ["0%", "-50%", "0%"] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                  </motion.div>
                )}
                <div className="flex flex-col items-center gap-6 mt-12">
                  <button 
                    onClick={() => document.getElementById('problem').scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 md:px-12 py-4 md:py-5 bg-slate-900 text-white rounded-full font-bold text-base md:text-lg hover:bg-red-600 transition-all flex items-center gap-3 shadow-2xl active:scale-95"
                  >
                    Explore Case Study <FiArrowDown />
                  </button>
                  <a href="https://worko.pl" target="_blank" className="flex items-center gap-2 text-slate-400 font-bold hover:text-red-600 transition-colors text-xs md:text-sm uppercase tracking-widest">
                    <FiExternalLink /> Live Preview
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION 1: THE CONTEXT --- */}
          <section id="problem" className="py-24">
             {/* Твой готовый блок 01. Context */}
          </section>

          {/* --- SECTION 2: THE SOLUTION --- */}
          <section id="solution" className="py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
              {/* Сюда вставлены твои зеркальные слайдеры */}
              <div className="space-y-32 md:space-y-48">
                {/* Employer Slider */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div className="space-y-6">
                    <h3 className="text-xl font-extrabold uppercase text-black flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs">1</span>
                      Employer Path
                    </h3>
                    <AnimatePresence mode="wait">
                      <motion.div key={empStep} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}>
                        <h4 className="text-4xl font-black text-black tracking-tighter">{employerPhotos[empStep].title}</h4>
                        <p className="text-slate-500 mt-4 text-xl font-normal leading-relaxed">{employerPhotos[empStep].desc}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="flex items-center justify-center gap-6">
                    <button onClick={() => setEmpStep(p => (p === 0 ? employerPhotos.length - 1 : p - 1))}><FiChevronLeft size={48} /></button>
                    <div className="w-[240px] md:w-[280px] rounded-[2.5rem] border-[6px] border-white shadow-2xl overflow-hidden aspect-[9/16] bg-white relative">
                      <AnimatePresence mode="popLayout">
                        <motion.div key={empStep} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9 }} className="absolute inset-0 w-full h-full">
                          <Image src={employerPhotos[empStep].src} alt="Step" fill className="object-cover" />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <button onClick={() => setEmpStep(p => (p === employerPhotos.length - 1 ? 0 : p + 1))}><FiChevronRight size={48} /></button>
                  </div>
                </div>

                {/* Candidate Slider */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div className="flex items-center justify-center gap-6 order-2 lg:order-1">
                    <button onClick={() => setCandStep(p => (p === 0 ? candidatePhotos.length - 1 : p - 1))}><FiChevronLeft size={48} /></button>
                    <div className="w-[240px] md:w-[280px] rounded-[2.5rem] border-[6px] border-white shadow-2xl overflow-hidden aspect-[9/16] bg-white relative">
                      <AnimatePresence mode="popLayout">
                        <motion.div key={candStep} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9 }} className="absolute inset-0 w-full h-full">
                          <Image src={candidatePhotos[candStep].src} alt="Step" fill className="object-cover" />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <button onClick={() => setCandStep(p => (p === candidatePhotos.length - 1 ? 0 : p + 1))}><FiChevronRight size={48} /></button>
                  </div>
                  <div className="space-y-6 order-1 lg:order-2">
                    <h3 className="text-xl font-extrabold uppercase text-black flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-xs">2</span>
                      Candidate Path
                    </h3>
                    <AnimatePresence mode="wait">
                      <motion.div key={candStep} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                        <h4 className="text-4xl font-black text-black tracking-tighter">{candidatePhotos[candStep].title}</h4>
                        <p className="text-slate-500 mt-4 text-xl font-normal leading-relaxed">{candidatePhotos[candStep].desc}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION 3: CASE STUDY (VoltEdge) --- */}
          <section className="py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                
                {/* Text Content */}
                <div>
                  <span className="text-red-600 font-bold uppercase tracking-widest text-lg">03. Real Case</span>
                  <h2 className="text-4xl md:text-6xl font-black text-black mt-4 mb-8 tracking-tight">The VoltEdge Story<span className="text-red-600">.</span></h2>
                  
                  <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-normal">
                    <p>
                      <span className="text-black font-bold underline decoration-red-600 decoration-4 underline-offset-4">Pan Alex</span>, owner of VoltEdge, needed a specialist but corporate portals were too expensive (500 PLN+).
                    </p>
                    <p>
                      He posted on Worko in minutes. Result? <span className="text-black font-black">7 relevant leads</span> within days and a successful hire of <span className="text-black font-bold">Vitaliy</span>—proving the business value of a 15 PLN infrastructure.
                    </p>
                  </div>

                  <div className="flex gap-6 mt-10">
                    <div className="flex-1 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                      <div className="text-3xl font-black text-black">7</div>
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Applications</div>
                    </div>
                    <div className="flex-1 p-6 rounded-3xl bg-red-600 text-white shadow-xl shadow-red-200">
                      <FiUserCheck className="text-2xl mb-2" />
                      <div className="text-[10px] uppercase font-bold opacity-80 tracking-widest">Result</div>
                      <div className="text-xl font-bold italic">Hired Vitaliy</div>
                    </div>
                  </div>
                </div>

                {/* VISUAL COLLAGE (Layered Effect) */}
                <div className="relative h-[550px] md:h-[650px] flex items-center justify-center">
                  
                  {/* Layer 1: Vacancy (Base) */}
                  <motion.div initial={{ rotate: -5 }} whileInView={{ rotate: -2 }} className="absolute w-[85%] aspect-[9/12] rounded-[2rem] border-[8px] border-white shadow-2xl overflow-hidden z-10 left-0 top-0">
                    <Image src="/success1.png" alt="Vacancy" fill className="object-cover" />
                  </motion.div>

                  {/* Layer 2: Feedback Card (Middle) */}
                  <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="absolute z-20 right-0 top-1/4 w-[75%] bg-white p-6 rounded-3xl shadow-2xl border border-slate-100">
                    <div className="flex items-center gap-1 text-yellow-400 mb-3">★ ★ ★ ★ ★</div>
                    <p className="text-black font-medium italic text-lg leading-snug">
                      &quot;15 PLN and 2 minutes. I found a professional without any corporate tax.&quot;
                    </p>
                    <p className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">— Pan Alex, VoltEdge</p>
                  </motion.div>

                  {/* Layer 3: Message Notification (Top) */}
                  <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="absolute z-30 bottom-10 left-10 w-[80%] bg-slate-900 p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-black">V</div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-red-500 uppercase">New Message</p>
                      <p className="text-white text-sm font-medium">Vitaliy: &quot;Dzień dobry, gotowy do pracy...&quot;</p>
                    </div>
                    <FiMessageSquare className="text-slate-500" />
                  </motion.div>
                </div>

              </div>
            </div>
          </section>

          <section id="validation" className="py-20"></section>
        </div>
      </motion.div>

      {/* --- LIGHTBOX MODAL --- */}
      {isPageLoaded && isZoomed && (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsZoomed(false)} className="fixed inset-0 w-full h-full bg-black/95 z-[99999] flex items-center justify-center p-6 cursor-zoom-out" style={{ zIndex: 99999 }}>
            <div className="relative max-w-[400px] w-full h-[85vh]">
              <button className="absolute -top-12 -right-4 text-red-600 text-5xl" onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}><FiX /></button>
              <div className="w-full h-full rounded-[2.5rem] border-[10px] border-slate-800 overflow-hidden bg-white shadow-2xl">
                <motion.img src="/screen1.png" className="w-full h-auto" animate={{ y: ["0%", "-70%", "0%"] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}