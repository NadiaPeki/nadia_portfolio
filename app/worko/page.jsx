'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; 
import { useRef, useState, useEffect } from 'react';
import { 
  FiTarget,
  FiDatabase, 
  FiClock, 
  FiCheckCircle, 
  FiExternalLink, 
  FiX, 
  FiMaximize2, 
  FiChevronLeft, 
  FiChevronRight, 
  FiUserCheck, 
  FiTrendingUp, 
  FiSearch, 
  FiMail, 
  FiActivity, 
  FiGlobe, 
  FiZap, 
  FiDollarSign,
  FiAward,
  FiAlertCircle,
  FiCpu,
  FiLayers,
  FiSunrise
} from 'react-icons/fi';

export default function WorkoProject() {
  const containerRef = useRef();
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  const [empStep, setEmpStep] = useState(0);
  const [candStep, setCandStep] = useState(0);
  const [h1Step, setH1Step] = useState(0); 
  const [h2Step, setH2Step] = useState(0); 
  const [blueStep, setBlueStep] = useState(0);

  const employerPhotos = [
    { title: "01. Main Landing", desc: "The SEO-optimized entry point.", src: "/solution1.png" },
    { title: "02. Fast Start", desc: "Initial job parameters. No registration required yet.", src: "/solution2.png" },
    { title: "03. Detailed Offer", desc: "Finalizing job details and the 'Zatwierдź' action.", src: "/solution3.png" },
    { title: "04. Trust Loop", desc: "Instant moderation status to manage expectations.", src: "/solution4.png" },
    { title: "05. Result", desc: "The offer is live and indexed for Google search.", src: "/solution5.png" },
  ];

  const candidatePhotos = [
    { title: "01. Niche Feed", desc: "Mobile-first list of local opportunities.", src: "/solution6.png" },
    { title: "02. Job Details", desc: "Transparent info without login barriers.", src: "/solution7.png" },
    { title: "03. Instant Contact", desc: "One-tap connection to the employer.", src: "/solution11.png" },
  ];

  const h1Slides = [
    {
      title: "Validated Market Pull",
      desc: "Organic inflow data. While scale reflects an early MVP, it provides a definitive signal of genuine demand. Not noise, but proof of market pull with zero marketing budget.",
      icon: <FiActivity />,
      stat: "Pure Intent",
      src: "/ga2.png" 
    },
    {
      title: "Active Seeding Phase",
      desc: "Peak of 320 daily active users driven by manual seeding in niche RU-speaking Facebook groups (10k+ members). Proof of initial market pull.",
      icon: <FiTrendingUp />,
      stat: "320 DAU",
      src: "/ga1.png" 
    },
    {
      title: "8-Month Dormant Test",
      desc: "Zero maintenance and zero seeding. The platform continued to attract organic search traffic, proving the evergreen nature of the SSG-SEO architecture.",
      icon: <FiSearch />,
      stat: "Stable Organic Search",
      src: "/ga3.png" 
    },
    {
      title: "Evergreen Autonomy",
      desc: "Real job applications received via email during the dormant period. Validation that the traffic is high-intent and converts without intervention.",
      icon: <FiMail />,
      stat: "Live Leads",
      src: "/aplic1.png" 
    }
  ];

  const h2Slides = [
    { src: "/success1.png", label: "01. Targeted Vacancy" },
    { src: "/case4.png", label: "02. Direct Application"},
    { src: "/case3.png", label: "03. Verified Feedback" }
  ];

  const blueSlides = ["/blue4.png", "/blue5.png", "/blue1.png"];

  const handleZoom = (src) => {
    setZoomedImage(src);
    setIsZoomed(true);
  };

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
          <section className="relative py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
              <div className="flex flex-col items-center text-center gap-8 mb-16">
                <h1 className="text-6xl md:text-8xl font-black text-black tracking-tight">
                  Worko<span className="text-red-600">.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
                  A <span className="text-black font-semibold">Human-Centric MVP</span> for the underserved SMB market. 
                  How I built a job platform in 21 days, validated core business hypotheses, and achieved confirmed hiring success with a 
                  <span className='text-black font-semibold'> total project budget of 15 PLN</span> (domain only) and 
                  <span className='font-semibold text-red-600'> zero marketing spend</span>.
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
                    onClick={() => handleZoom('/screen1.png')}
                    whileHover={{ scale: 1.1}}
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
                <div className="flex flex-col items-center mt-14">
                  <a href="https://worko.pl" target="_blank" className="flex items-center gap-2 text-black font-bold hover:text-red-600 transition-colors text-sm md:text-xl uppercase tracking-widest">
                    <FiExternalLink /> Live Preview
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION 1: CONTEXT --- */}
          <section id="problem" className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
              <div className="mb-10 md:mb-14 text-center lg:text-left">
                <span className="text-red-600 font-bold uppercase tracking-widest text-lg md:text-xl">01. The Context</span>
                <h2 className="text-3xl md:text-5xl font-black text-black mt-2 tracking-tight">A Broken Hiring Cycle<span className="text-red-600">.</span></h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "The Invisible 99.8%", desc: "SMBs represent 99.8% of Polish enterprises, generate 45.3% of GDP, and provide 6.7M jobs. Despite this scale, they are priced out of high-cost platforms that prioritize corporate budgets over local business needs.", icon: "📊", highlight: "6.7M Jobs Underserved" },
                  { title: "The Blue-Collar Gap", desc: "While tech giants focus on IT and management, the backbone of the economy—drivers, electricians, and caregivers digitally forgotten in a 'high-demand, low-tech' void.", icon: "🛠️", highlight: "The Real Economy" },
                  { title: "Bureaucracy Paralysis", desc: "Small owners are paralyzed by corporate bureaucracy. Lacking HR departments, they can’t afford time-consuming sales calls, complex pricing tiers, or 20-minute application forms.", icon: "⚡", highlight: "No HR, No Time, No Money" }
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

          {/* --- SECTION 2: STRATEGY --- */}
          <section id="strategy" className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
              <div className="mb-10 md:mb-14 text-center lg:text-left">
                <span className="text-red-600 font-bold uppercase tracking-widest text-lg md:text-xl">02. Strategy, Methodology & Hypotheses</span>
                <h2 className="text-3xl md:text-5xl font-black text-black mt-2 tracking-tight">The Lean Experiment<span className="text-red-600">.</span></h2>
                <p className="mt-6 text-slate-600 text-lg md:text-xl max-w-4xl leading-relaxed">
                  I adopted an <span className="text-black font-semibold">entrepreneurial mindset</span> to validate the lifecycle of a two-sided job platform. By applying extreme constraints — <span className="text-black font-semibold">minimum budget and maximum creativity</span> — I proved that Worko can attract, retain, and connect users with zero marketing spend.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Bootstrap DNA", icon: "🧬", highlight: "Tech-Driven Economy", points: ["15 PLN total budget & 21-day development sprint to MVP", "Zero infrastructure cost via Neon (Serverless) & Vercel", "Next.js SSG: Turning architecture into a marketing-saving engine", "Full system autonomy confirmed by an 8-month dormant test"] },
                  { title: "Guerrilla Method", icon: "🏹", highlight: "Network-Driven Launch", points: ["Solved the Cold Start problem via manual seeding in niche groups", "Direct outreach to a network of recruiters & entrepreneurs", "Leveraged 'Early Adopters' to seed initial job supply", "Zero ad spend: Used social capital instead of a marketing budget"] },
                  { title: "Business Hypotheses", icon: "🎯", highlight: "H1, H2, H3 Validation", points: ["H1 (Viability): SEO strategy generates stable traffic with $0 spend", "H2 (Desirability): Radical UX simplicity creates loyalty & repeated use", "H3 (Feasibility): A functioning match-loop at near-zero CPA", "Success Metric: Real candidate engagement + returning employers"] }
                ].map((item, index) => (
                  <motion.div key={index} initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-red-100/30 transition-shadow flex flex-col h-full">
                    <div className="text-4xl mb-6">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-black mb-6">{item.title}</h3>
                    <ul className="space-y-4 flex-grow mb-8">
                      {item.points.map((point, pIndex) => (<li key={pIndex} className="flex items-start text-slate-600 text-base md:text-lg leading-snug"><span className="text-red-600 mr-2 mt-1.5 shrink-0 text-xs">●</span>{point}</li>))}
                    </ul>
                    <div className="pt-4 border-t border-slate-50 font-bold text-red-600 text-xs uppercase tracking-widest">{item.highlight}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* --- SECTION 3: SOLUTION --- */}
          <section id="solution" className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
              <div className="mb-14 md:mb-18 text-center lg:text-left">
                <span className="text-red-600 font-bold uppercase tracking-widest text-lg md:text-xl">03. The Solution</span>
                <h2 className="text-3xl md:text-5xl font-black text-black mt-2 tracking-tight">Engineering as Marketing<span className="text-red-600">.</span></h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {[
                  { title: "Tech-Driven Economy", icon: "🚀", highlight: "Zero Infrastructure Costs", points: ["Neon (Serverless DB): Zero idle costs with auto-suspend", "Vercel: Scalable hosting at $0 for the MVP phase", "Next.js SSG: Fast page loads + zero server-side compute", "Maintenance-free: Built to run itself autonomously"] },
                  { title: "Radical Simplicity", icon: "📱", highlight: "Zero Barrier Entry", points: ["Employer: Post in < 5 mins with No registration, and No sales calls", "Candidate: One-click applications via direct email contact", "Mobile-first: Optimized for on-the-go hiring, and time-sensitive environments."] },
                  { title: "Automated Reach", icon: "💎", highlight: "Zero CAC Acquisition", points: ["Programmatic SEO: Automated meta-tag generation for every city and role", "Instant Indexing: SSG ensures job ads are crawlable by Google in seconds", "Cyrillic Niche: Capturing underserved RU search traffic organically"] }
                ].map((item, index) => (
                  <motion.div key={index} initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-red-100/30 transition-shadow flex flex-col h-full">
                    <div className="text-4xl mb-6">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-black mb-6">{item.title}</h3>
                    <ul className="space-y-4 flex-grow mb-8 font-normal">
                      {item.points.map((point, pIndex) => (<li key={pIndex} className="flex items-start text-slate-600 text-base leading-snug"><span className="text-red-600 mr-2 mt-1.5 shrink-0 text-xs">●</span>{point}</li>))}
                    </ul>
                    <div className="pt-4 border-t border-slate-50 font-bold text-red-600 text-xs uppercase tracking-widest">{item.highlight}</div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-20 md:space-y-24">
                {/* Employer Path */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-6">
                    <h3 className="text-xl font-extrabold uppercase tracking-tighter text-black flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs tracking-normal font-bold">1</span> Employer Path
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
                    <div onClick={() => handleZoom(employerPhotos[empStep].src)} className="w-[240px] md:w-[280px] rounded-[2.5rem] border-[6px] border-white shadow-2xl overflow-hidden aspect-[9/16] bg-white relative cursor-zoom-in group">
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 flex items-center justify-center">
                        <FiMaximize2 className="text-red-600 opacity-0 group-hover:opacity-100 text-3xl" />
                      </div>
                      <AnimatePresence mode="popLayout">
                        <motion.div key={empStep} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }} className="absolute inset-0 w-full h-full">
                          <Image src={employerPhotos[empStep].src} alt="Step" fill className="object-cover" />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <button onClick={() => setEmpStep(p => (p === employerPhotos.length - 1 ? 0 : p + 1))} className="p-2 hover:text-red-600 transition-colors"><FiChevronRight size={48} /></button>
                  </div>
                </div>

                {/* Candidate Path */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="flex items-center justify-center gap-6 order-2 lg:order-1">
                    <button onClick={() => setCandStep(p => (p === 0 ? candidatePhotos.length - 1 : p - 1))} className="p-2 hover:text-red-600 transition-colors"><FiChevronLeft size={48} /></button>
                    <div onClick={() => handleZoom(candidatePhotos[candStep].src)} className="w-[240px] md:w-[280px] rounded-[2.5rem] border-[6px] border-white shadow-2xl overflow-hidden aspect-[9/16] bg-white relative cursor-zoom-in group">
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 flex items-center justify-center">
                        <FiMaximize2 className="text-red-600 opacity-0 group-hover:opacity-100 text-3xl" />
                      </div>
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
                      <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-xs tracking-normal font-bold">2</span> Candidate Path
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

          {/* --- SECTION 4: VALIDATION --- */}
          <section id="validation" className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
              <div className="mb-14 md:mb-18 text-center lg:text-left">
                <span className="text-red-600 font-bold uppercase tracking-widest text-lg md:text-xl">04. Validation & Results</span>
                <h2 className="text-3xl md:text-5xl font-black text-black mt-2 tracking-tight">Proving the Hypotheses<span className="text-red-600">.</span></h2>
              </div>

              {/* H1 Validation Slider */}
              <div className="mb-0">
                <div className="mb-10">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl md:text-3xl font-black text-black flex items-center gap-3"><span className="text-red-600">H1.</span> Viability: Organic & Multi-Channel Pull</h3>
                    <p className="text-slate-600 mt-4 text-lg">Validation of the ability to attract high-intent traffic without paid marketing. I tested two phases: Active Seeding (Jan - Feb) and the Autonomous Dormant period (Mar - Oct).</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-4 space-y-8">
                    <AnimatePresence mode="wait">
                      <motion.div key={h1Step} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="space-y-6">
                        <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-red-200">{h1Slides[h1Step].icon}</div>
                        <h4 className="text-3xl font-black text-black tracking-tight">{h1Slides[h1Step].title}</h4>
                        <p className="text-slate-500 text-lg leading-relaxed">{h1Slides[h1Step].desc}</p>
                        <div className="inline-block px-4 py-2 bg-black text-white rounded-full font-bold text-sm uppercase tracking-widest">{h1Slides[h1Step].stat}</div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="lg:col-span-8">
                    <div 
                      onClick={() => handleZoom(h1Slides[h1Step].src)} 
                      className="relative aspect-[16/9] w-full rounded-[2rem] overflow-hidden bg-white shadow-2xl border border-slate-100 cursor-zoom-in group"
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 flex items-center justify-center">
                        <FiMaximize2 className="text-red-600 opacity-0 group-hover:opacity-100 text-4xl" />
                      </div>
                      <AnimatePresence mode="wait">
                        <motion.div key={h1Step} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.6 }} className="absolute inset-0">
                          <Image src={h1Slides[h1Step].src} alt={h1Slides[h1Step].title} fill className="object-cover" />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end gap-4 mt-3">
                  <button onClick={() => setH1Step(p => (p === 0 ? h1Slides.length - 1 : p - 1))} className="p-4 bg-white rounded-full shadow-md hover:text-red-600 transition-all"><FiChevronLeft size={24} /></button>
                  <button onClick={() => setH1Step(p => (p === h1Slides.length - 1 ? 0 : p + 1))} className="p-4 bg-white rounded-full shadow-md hover:text-red-600 transition-all"><FiChevronRight size={24} /></button>
                </div>
              </div>

              {/* H2 Validation: Desirability & Retention */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center pt-20 md:pt-28 border-t border-slate-200">
                <div className="space-y-8">
                  <h3 className="text-2xl md:text-3xl font-black text-black flex items-center gap-3"><span className="text-red-600">H2.</span> Desirability & The VoltEdge Case</h3>
                  <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
                    <p><span className="text-black font-bold underline decoration-red-600 decoration-4 underline-offset-4">Pan Alex</span>, owner of a specialized electrical installation company, faced a common SMB barrier: he had neither the corporate budget nor the bandwidth to navigate complex job board tariffs.</p>
                    <p>On Worko, he skipped the bureaucracy and received <span className="text-black font-black">7 relevant leads in weeks</span>. One was <span className="text-black font-bold">Vitaliy</span>—the perfect hire, found with zero friction. Crucially, Alex <span className="text-black font-black italic">returned to post again</span>, validating our retention hypothesis.</p>
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

                <div className="relative flex flex-col items-center">
                  <div className="flex items-center justify-center gap-6 w-full">
                    <button onClick={() => setH2Step(p => (p === 0 ? 2 : p - 1))} className="p-2 hover:text-red-600 transition-colors"><FiChevronLeft size={48} /></button>
                    <div 
                      onClick={() => handleZoom(h2Slides[h2Step].src)}
                      className="w-[280px] md:w-[320px] rounded-[2.5rem] border-[6px] border-white shadow-2xl overflow-hidden aspect-[3/4] bg-white relative cursor-zoom-in group"
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 flex items-center justify-center">
                        <FiMaximize2 className="text-red-600 opacity-0 group-hover:opacity-100 text-4xl" />
                      </div>
                      <AnimatePresence mode="popLayout">
                        <motion.div 
                          key={h2Step} 
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: 1 }} 
                          exit={{ opacity: 0 }} 
                          transition={{ duration: 0.6 }} 
                          className="absolute inset-0 w-full h-full"
                        >
                          <Image src={h2Slides[h2Step].src} alt="Validation Step" fill className="object-contain p-2" />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <button onClick={() => setH2Step(p => (p === 2 ? 0 : p + 1))} className="p-2 hover:text-red-600 transition-colors"><FiChevronRight size={48} /></button>
                  </div>
                  <div className="mt-6 text-center font-bold">
                    <AnimatePresence mode="wait">
                      <motion.div key={h2Step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                        <div className="text-sm font-black text-black uppercase tracking-tight">{h2Slides[h2Step].label}</div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* H3 Block */}
              <div className="mt-20 md:mt-28 p-10 md:p-16 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden ring-2 ring-red-600/20">
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
                  <div className="max-w-xl text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-black flex items-center justify-center md:justify-start gap-3"><span className="text-red-600">H3.</span> Full Hiring Loop</h3>
                    <p className="text-slate-400 mt-6 text-xl leading-relaxed">
                      The ultimate proof: Connecting a live vacancy with the real candidate, resulting in a verified hire achieved with 
                      <span className="block mt-4 text-white font-black text-3xl md:text-4xl tracking-tight">
                        <span className="text-red-600">$0</span> Acquisition Cost
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-6 bg-white/5 p-10 rounded-[3rem] backdrop-blur-sm border border-white/10 shadow-2xl">
                    <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_50px_rgba(220,38,38,0.5)]">
                      <FiCheckCircle size={56} />
                    </div>
                    <div className="text-center"><div className="text-4xl font-black mb-1">Success Hire</div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION 5: BLUE OCEAN STRATEGY --- */}
          <section id="blue-ocean" className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
              <div className="mb-14 md:mb-18 text-center lg:text-left">
                <span className="text-red-600 font-bold uppercase tracking-widest text-lg md:text-xl">05. Blue Ocean Strategy</span>
                <h2 className="text-3xl md:text-5xl font-black text-black mt-2 tracking-tight">Capturing the Underserved<span className="text-red-600">.</span></h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4 space-y-10">
                  <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed font-normal text-center lg:text-left">
                    <p>
                      Instead of competing with corporate giants for high-CPC Polish keywords, I identified a <span className="text-black font-bold italic">Cyrillic Blue Ocean</span>. 
                    </p>
                    <p>
                      By optimizing for Russian-speaking queries within the Polish job market, Worko achieved <span className="text-black font-black">Top 10 ranking</span> for high-intent requests. This strategy allowed us to capture a massive audience while spending exactly <span className="text-red-600 font-bold">0 PLN</span> on advertising.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="p-4 md:p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm flex flex-col items-center lg:items-start text-center lg:text-left">
                      <FiTrendingUp className="text-red-600 text-lg md:text-2xl mb-2 md:mb-3" />
                      <div className="text-[10px] md:text-sm font-bold text-black uppercase tracking-widest mb-1 opacity-60">SEO Rank</div>
                      <div className="text-xs md:text-xl font-black text-slate-900 leading-tight">Top 10 Google Rank</div>
                    </div>
                    <div className="p-4 md:p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm flex flex-col items-center lg:items-start text-center lg:text-left">
                      <FiDollarSign className="text-red-600 text-lg md:text-2xl mb-2 md:mb-3" />
                      <div className="text-[10px] md:text-sm font-bold text-black uppercase tracking-widest mb-1 opacity-60">Efficiency</div>
                      <div className="text-xs md:text-xl font-black text-slate-900 leading-tight">Zero CAC Growth</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <div className="relative group flex items-center gap-4 md:gap-6">
                    <button onClick={() => setBlueStep(p => (p === 0 ? blueSlides.length - 1 : p - 1))} className="p-2 md:p-4 bg-slate-50 rounded-full hover:text-red-600 transition-all shrink-0"><FiChevronLeft size={24} className="md:w-8 md:h-8" /></button>
                    <div 
                      onClick={() => handleZoom(blueSlides[blueStep])}
                      className="relative w-full h-[250px] md:h-[480px] bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden cursor-zoom-in group/zoom"
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover/zoom:bg-black/5 transition-colors z-10 flex items-center justify-center">
                        <FiMaximize2 className="text-red-600 opacity-0 group-hover/zoom:opacity-100 text-3xl md:text-4xl transition-all scale-75 group-hover/zoom:scale-100" />
                      </div>
                      
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={blueStep}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          <Image src={blueSlides[blueStep]} alt="SEO Proof" fill className="object-contain p-2 md:p-4" />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <button onClick={() => setBlueStep(p => (p === blueSlides.length - 1 ? 0 : p + 1))} className="p-2 md:p-4 bg-slate-50 rounded-full hover:text-red-600 transition-all shrink-0"><FiChevronRight size={24} className="md:w-8 md:h-8" /></button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION 6: CONCLUSIONS & LEARNINGS --- */}
         {/* --- SECTION 6: CONCLUSIONS & LEARNINGS --- */}
<section id="conclusions" className="py-16 md:py-24">
  <div className="container mx-auto px-4 md:px-6 max-w-6xl">
    <div className="mb-12 text-center lg:text-left">
      <span className="text-red-600 font-bold uppercase tracking-widest text-lg md:text-xl">06. Conclusions & Learnings</span>
      <h2 className="text-4xl md:text-5xl font-black text-black mt-2 tracking-tight">The Verdict<span className="text-red-600">.</span></h2>
    </div>

    {/* Summary Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white shadow-xl">
        <FiAward className="text-red-600 text-4xl mb-6" />
        <h3 className="text-2xl font-black mb-3">Hypothesis: Valid</h3>
        <p className="text-slate-400 leading-relaxed">
          The match-loop works. A real hire via zero-budget SEO proves the model's viability for the SMB market.
        </p>
      </div>
      <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm">
        <FiZap className="text-red-600 text-4xl mb-6" />
        <h3 className="text-2xl font-black text-black mb-3">Dormant Test</h3>
        <p className="text-slate-500 leading-relaxed">
          8 months of zero maintenance confirmed the "Evergreen" nature of the SSG-SEO architecture.
        </p>
      </div>
      <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm">
        <FiGlobe className="text-red-600 text-4xl mb-6" />
        <h3 className="text-2xl font-black text-black mb-3">Blue Ocean</h3>
        <p className="text-slate-500 leading-relaxed">
          Niche Cyrillic search intent is a massive, underserved entry point into the Polish labor market.
        </p>
      </div>
    </div>

    {/* The Critical Lesson (Apply Button) */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
      <div className="p-8 md:p-12 rounded-[3rem] bg-red-600 text-white shadow-2xl shadow-red-200">
        <div className="flex items-center gap-4 mb-6">
          <FiAlertCircle className="text-4xl text-black" />
          <h3 className="text-3xl font-black tracking-tighter uppercase">My Main Regret</h3>
        </div>
        <p className="text-xl md:text-2xl leading-tight font-medium">
          "I failed to track the <strong>'Apply'</strong> button click. While I have email evidence of successful leads, I don't have the exact conversion volume. 
          <span className="block mt-4 text-black font-black italic">This missing event is my biggest professional lesson and a mistake I still rue today.</span>"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-8 rounded-[2.5rem] border border-slate-100 bg-white">
          <FiLayers className="text-red-600 text-2xl mb-4" />
          <h4 className="text-lg font-black text-slate-900">Cold Start</h4>
          <p className="text-slate-500 text-sm">Manual seeding isn't scalable. API-driven liquidity is mandatory for growth.</p>
        </div>
        <div className="p-8 rounded-[2.5rem] border border-slate-100 bg-white">
          <FiTarget className="text-red-600 text-2xl mb-4" />
          <h4 className="text-lg font-black text-slate-900">Business-First Mindset</h4>
          <p className="text-slate-500 text-sm">Every product decision is strictly subordinated to market demand and business survival.</p>
        </div>
        <div className="p-8 rounded-[2.5rem] border border-slate-100 bg-white">
          <FiCpu className="text-red-600 text-2xl mb-4" />
          <h4 className="text-lg font-black text-slate-900">Tech Choice</h4>
          <p className="text-slate-500 text-sm">Next.js SSG is a marketing tool, not just a framework. Speed = SEO Rank.</p>
        </div>
        <div className="p-8 rounded-[2.5rem] border border-slate-100 bg-white">
          <FiSunrise className="text-red-600 text-2xl mb-4" />
          <h4 className="text-lg font-black text-slate-900">The Curiosity Engine</h4>
          <p className="text-slate-500 text-sm">Inquisitiveness fuels evolution. Obsessing over the “Why” to find value in routine and turn uncertainty into discovery.</p>
        </div>
      </div>
    </div>

    {/* Final Statement */}
    <div className="p-10 md:p-16 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden text-center lg:text-left">
      <div className="relative z-10 max-w-4xl">
        <h3 className="text-4xl md:text-5xl font-black text-red-600 tracking-tighter uppercase mb-6 italic">Intellectual Honesty.</h3>
        <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90">
          Data is ruthless. Facing the weaknesses of my own product was the hardest but most valuable part of this experiment. Worko proves that in the AI era, <span className="text-white font-bold">Curiosity + Technology &gt; Traditional Barriers</span>. I'm ready to bring this "Bootstrap DNA" to a professional team.
        </p>
      </div>
      <FiCpu className="absolute -bottom-10 -right-10 text-[15rem] text-white/5 rotate-12" />
    </div>
  </div>
</section>

          <section id="results" className="py-16 md:py-24"></section>
        </div>
      </motion.div>

      {/* --- UNIVERSAL LIGHTBOX MODAL --- */}
      {isZoomed && (
        <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setIsZoomed(false)} 
            className="fixed top-0 left-0 w-full h-full bg-black/95 z-[99999] flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <div className="relative max-w-[95vw] max-h-[90vh] flex items-center justify-center">
              <button 
                className="absolute -top-12 right-0 text-white text-4xl hover:text-red-600 transition-colors" 
                onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
              >
                <FiX />
              </button>
              
              <div className={`relative overflow-hidden rounded-2xl bg-white shadow-2xl border-[4px] border-slate-800 ${zoomedImage === '/screen1.png' ? 'w-[320px] md:w-[400px] h-[70vh] md:h-[85vh]' : 'w-full max-w-5xl h-auto flex items-center justify-center'}`}>
                {zoomedImage === '/screen1.png' ? (
                  <motion.img 
                    src={zoomedImage} 
                    className="w-full h-auto" 
                    animate={{ y: ["0%", "-70%", "0%"] }} 
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }} 
                  />
                ) : (
                  <img src={zoomedImage} className="max-w-full max-h-[80vh] object-contain" />
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}