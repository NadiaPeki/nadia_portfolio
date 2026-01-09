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
        <div className="h-full overflow-y-auto overflow-x-hidden scroll-smooth" ref={containerRef}>
          
          {/* --- HERO SECTION --- */}
          <section className="relative pt-10 pb-12 md:pt-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
              <div className="flex flex-col items-center text-center gap-8 mb-16">
                <h1 className="text-6xl md:text-8xl font-black text-black tracking-tight">
                  Worko<span className="text-red-600">.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
                  A <span className="text-black font-semibold">Human-Centric MVP</span> for the underserved SMB market. How I built a job platform in 21 days, validated core business hypotheses, and achieved confirmed hiring success with a <span className='text-black font-semibold'>total infrastructure spend of 15 PLN</span>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-4 font-bold">
                  <div className="p-6 rounded-3xl bg-white/40 border border-slate-100 backdrop-blur-md flex flex-col items-center gap-2 text-center shadow-sm">
                    <FiDatabase className="text-red-600 text-xl" />
                    <div className="text-2xl text-slate-900">15 PLN</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">CAPEX</div>
                  </div>
                  <div className="p-6 rounded-3xl bg-white/40 border border-slate-100 backdrop-blur-md flex flex-col items-center gap-2 text-center shadow-sm">
                    <FiClock className="text-red-600 text-xl" />
                    <div className="text-2xl text-slate-900">21 Days</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">Dev Sprint</div>
                  </div>
                  <div className="p-6 rounded-3xl bg-red-600 flex flex-col items-center gap-2 shadow-xl shadow-red-200 text-center text-white">
                    <FiCheckCircle className="text-xl" />
                    <div className="text-2xl">44 Days</div>
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
                    className="absolute right-2 bottom-2 md:right-[-15px] md:bottom-0 group cursor-zoom-in w-20 md:w-32 rounded-[0.8rem] md:rounded-[1.2rem] border-[3px] md:border-[5px] border-slate-900 overflow-hidden shadow-2xl bg-white aspect-[9/19] z-30"
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
          <section id="problem" className="py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
              <div className="mb-12 md:mb-16 text-center lg:text-left">
                <span className="text-red-600 font-bold uppercase tracking-widest text-lg md:text-xl">01. The Context</span>
                <h2 className="text-3xl md:text-5xl font-black text-black mt-2 tracking-tight">A Broken Hiring Cycle<span className="text-red-600">.</span></h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "The Invisible 99.8%", desc: "SMBs represent 99.8% of Polish enterprises and 45.3% of GDP, yet they are priced out of corporate platforms that require dedicated HR departments.", icon: "📊", highlight: "The Underserved Majority" },
                  { title: "Blue-Collar Gap", desc: "While tech tools focus on IT and management, high-demand sectors like caregiving, teaching, and technical services remain digitally forgotten.", icon: "🛠️", highlight: "High-Demand, Low-Tech" },
                  { title: "Process Friction", desc: "The non-corporate market doesn't need complex HR pipelines. It needs friction-less tools that connect small business owners directly with essential workers.", icon: "⚡", highlight: "Non-Corporate Mindset" }
                ].map((item, index) => (
                  <motion.div key={index} initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-red-100/30 transition-shadow flex flex-col h-full">
                    <div className="text-4xl mb-6">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-black mb-4">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow text-base md:text-lg">{item.desc}</p>
                    <div className="pt-4 border-t border-slate-50 font-bold text-red-600 text-xs uppercase tracking-widest">{item.highlight}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* --- SECTION 2: THE SOLUTION --- */}
          <section id="solution" className="py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl font-bold">
              <div className="mb-16 md:mb-20 text-center lg:text-left">
                <span className="text-red-600 font-bold uppercase tracking-widest text-lg md:text-xl">02. The Solution</span>
                <h2 className="text-3xl md:text-5xl font-black text-black mt-2 tracking-tight">Engineering as Marketing<span className="text-red-600">.</span></h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 font-normal">
                {[
                  { title: "SEO-First Engine", desc: "Next.js SSG provides a lightweight foundation for organic indexing. This technical choice ensures visibility with zero maintenance costs.", icon: "🚀", highlight: "Static-First Leverage" },
                  { title: "Radical Simplicity", desc: "Mobile-first UX designed for zero friction. Direct employer–candidate contact with TTP < 5 min and no mandatory registration.", icon: "📱", highlight: "Zero Barrier Entry" },
                  { title: "Product-Led Growth", desc: "We replaced marketing budgets with engineering. Automated indexing and smart SEO-routing reach the non-corporate market organically.", icon: "💎", highlight: "Tech-Driven Acquisition" }
                ].map((item, index) => (
                  <motion.div key={index} initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }} className="p-8 rounded-3xl bg-white border border-slate-100 flex flex-col h-full shadow-sm hover:shadow-2xl hover:shadow-red-100/30 transition-shadow">
                    <div className="text-4xl mb-6">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-black mb-4">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{item.desc}</p>
                    <div className="pt-4 border-t border-slate-50 text-xs font-bold text-red-600 uppercase tracking-widest">{item.highlight}</div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-24 md:space-y-28">
                {/* Employer Slider */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div className="space-y-6">
                    <h3 className="text-xl font-extrabold uppercase tracking-tighter text-black flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs tracking-normal font-bold">1</span>
                      Employer Path
                    </h3>
                    <AnimatePresence mode="wait">
                      <motion.div key={empStep} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.4 }}>
                        <h4 className="text-4xl font-black text-black leading-tight tracking-tighter">{employerPhotos[empStep].title}</h4>
                        <p className="text-slate-500 mt-4 text-xl leading-relaxed font-normal">{employerPhotos[empStep].desc}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="flex items-center justify-center gap-6">
                    <button onClick={() => setEmpStep(p => (p === 0 ? employerPhotos.length - 1 : p - 1))} className="p-2 hover:text-red-600 transition-colors"><FiChevronLeft size={48} /></button>
                    <div className="w-[240px] md:w-[280px] rounded-[2.5rem] border-[6px] border-white shadow-2xl overflow-hidden aspect-[9/16] bg-white relative">
                      <AnimatePresence mode="popLayout">
                        <motion.div key={empStep} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }} className="absolute inset-0 w-full h-full">
                          <Image src={employerPhotos[empStep].src} alt="Step" fill className="object-cover" />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <button onClick={() => setEmpStep(p => (p === employerPhotos.length - 1 ? 0 : p + 1))} className="p-2 hover:text-red-600 transition-colors"><FiChevronRight size={48} /></button>
                  </div>
                </div>

                {/* Candidate Slider */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div className="flex items-center justify-center gap-6 order-2 lg:order-1">
                    <button onClick={() => setCandStep(p => (p === 0 ? candidatePhotos.length - 1 : p - 1))} className="p-2 hover:text-red-600 transition-colors"><FiChevronLeft size={48} /></button>
                    <div className="w-[240px] md:w-[280px] rounded-[2.5rem] border-[6px] border-white shadow-2xl overflow-hidden aspect-[9/16] bg-white relative">
                      <AnimatePresence mode="popLayout">
                        <motion.div key={candStep} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }} className="absolute inset-0 w-full h-full">
                          <Image src={candidatePhotos[candStep].src} alt="Step Candidate" fill className="object-cover" />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <button onClick={() => setCandStep(p => (p === candidatePhotos.length - 1 ? 0 : p + 1))} className="p-2 hover:text-red-600 transition-colors"><FiChevronRight size={48} /></button>
                  </div>
                  <div className="space-y-6 order-1 lg:order-2">
                    <h3 className="text-xl font-extrabold uppercase tracking-tighter text-black flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-xs tracking-normal font-bold">2</span>
                      Candidate Path
                    </h3>
                    <AnimatePresence mode="wait">
                      <motion.div key={candStep} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.4 }}>
                        <h4 className="text-4xl font-black text-black leading-tight tracking-tighter">{candidatePhotos[candStep].title}</h4>
                        <p className="text-slate-500 mt-4 text-xl leading-relaxed font-normal">{candidatePhotos[candStep].desc}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION 3: CASE STUDY (Layered Collage) --- */}
          {/* --- SECTION 3: CASE STUDY (Layered Collage) --- */}
{/* --- SECTION 3: THE SUCCESS STORY --- */}
<section id="realcase" className="py-12 md:py-24">
  <div className="container mx-auto px-4 md:px-6 max-w-6xl">
    
    {/* TOP ROW: Context & Key Metrics */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 md:mb-20">
      <div className="space-y-6">
        <div>
          <span className="text-red-600 font-bold uppercase tracking-widest text-sm md:text-base">03. Success Story</span>
          <h2 className="text-4xl md:text-6xl font-black text-black mt-2 tracking-tight leading-none">The VoltEdge Case<span className="text-red-600">.</span></h2>
        </div>
        <div className="space-y-4 text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
          <p>
            <span className="text-black font-bold underline decoration-red-600 decoration-4 underline-offset-4">Pan Alex</span>, owner of a specialized electrical installation company, faced a common SMB barrier: he had neither the corporate budget nor the bandwidth to navigate the labyrinth of complex job board tariffs and hidden placement terms.
          </p>
          <p>
            He needed a solution that worked as fast as he did. On Worko, he skipped the bureaucracy and received <span className="text-black font-black">7 relevant leads in weeks</span>. One was <span className="text-black font-bold">Vitaliy</span>—the perfect hire for his team, found with zero friction.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex-1 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col justify-center">
           <div className="text-5xl font-black text-black">7</div>
           <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-2 leading-tight">Inbound Leads</div>
        </div>
        <div className="flex-1 p-8 rounded-3xl bg-red-600 text-white shadow-xl shadow-red-200 flex flex-col justify-center">
           <FiUserCheck className="text-3xl mb-2" />
           <div className="text-xl font-bold italic leading-tight">Hired Vitaliy</div>
           <div className="text-[10px] uppercase opacity-80 mt-1 tracking-wider">Verified Outcome</div>
        </div>
      </div>
    </div>

    {/* BOTTOM ROW: Portfolio Evidence Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {[
        { src: "/success1.png", label: "01. Targeted Vacancy", desc: "Optimized SMB job listing" },
        { src: "/case4.png", label: "02. Direct Application", desc: "Friction-less candidate response" },
        { src: "/case3.png", label: "03. Verified Feedback", desc: "Employer satisfaction proof" }
      ].map((item, idx) => (
        <motion.div 
          key={idx}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: idx * 0.15 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="mb-4 px-1">
            <div className="text-sm font-black text-black uppercase tracking-tight">{item.label}</div>
            <div className="text-xs text-slate-400 font-medium">{item.desc}</div>
          </div>
          <div className="relative aspect-[3/4] w-full rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden transition-transform duration-500 group-hover:shadow-xl">
            <Image 
              src={item.src} 
              alt={item.label} 
              fill 
              className="object-contain p-1" // Минимальный паддинг, чтобы фото было "ближе"
            />
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>

          <section id="results" className="py-20"></section>
        </div>
      </motion.div>

      {/* --- LIGHTBOX MODAL --- */}
      {isPageLoaded && isZoomed && (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsZoomed(false)} className="fixed top-0 left-0 w-full h-full bg-black z-[99999] flex items-center justify-center p-4 md:p-6 cursor-zoom-out" style={{ zIndex: 99999 }}>
            <div className="relative max-w-[90vw] md:max-w-[400px] w-full h-[70vh] md:h-[85vh]">
              <button className="absolute -top-10 -right-2 md:-top-12 md:-right-4 text-red-600 text-4xl md:text-5xl" onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}><FiX /></button>
              <div className="w-full h-full rounded-[2rem] md:rounded-[2.5rem] border-[6px] md:border-[10px] border-slate-800 overflow-hidden bg-white shadow-2xl">
                <motion.img src="/screen1.png" className="w-full h-auto" animate={{ y: ["0%", "-70%", "0%"] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}