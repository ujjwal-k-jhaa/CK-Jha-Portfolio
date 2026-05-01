import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Play, ArrowRight, Mail, Clapperboard, Scissors, MonitorPlay, Zap, Instagram, Twitter, Youtube, Linkedin, CheckCircle2, FileVideo, Video, Timer, RotateCcw, Infinity, MessageSquare, LayoutDashboard, Music, DollarSign, ChevronDown, Mic, Sparkles, TrendingUp, Search, Pause, GripVertical } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Data
const longVideos = [
  { id: "0eHgQxLpSfQ", title: "Talking head with documentary type edit", tag: "TALKING HEAD" },
  { id: "jBEOdMKAkEU", title: "Documentary Edit", tag: "DOCUMENTARY" },
  { id: "erqquWVKL4s", title: "Talking Head edit sample", tag: "TALKING HEAD" },
  { id: "xXvU_pLQuNU", title: "Vlog Edit Sample", tag: "VLOG" },
  { id: "NND4uv74Yy0", title: "Interview / Meditation Video", tag: "INTERVIEW" },
  { id: "3Vltvd9paXk", title: "Meditation Video", tag: "MEDITATION" },
];

const shortVideos = [
  { id: "yPItsCKLXa4", title: "Short 1" },
  { id: "5wf1OOcP_P8", title: "Short 2" },
  { id: "yeArIwndH3Q", title: "Short 3" },
  { id: "1qbjX5xqUcw", title: "Short 4" },
  { id: "PlUQBidfo0U", title: "Short 5" },
  { id: "Hr2-ZZrxD5s", title: "Short 6" }
];

const servicesData = [
  {
    id: 1,
    title: "YouTube Video Editing",
    icon: <Youtube className="w-6 h-6" />,
    iconColor: "text-red-500",
    bgColor: "bg-white/[0.02]",
    hoverColor: "hover:border-red-500/50",
    checkColor: "text-red-500",
    shortDesc: "A-Z editing for long-form content. Focused on maximizing Average View Duration and narrative structures that hold viewer interest.",
    features: [
      "A-roll & B-roll cutting",
      "Motion graphics & VFX",
      "Sound design & Mixing",
      "Color grading & Aesthetics"
    ],
    detailedInfo: "Every YouTube video is crafted like a mini-documentary. I don't just cut out the dead space; I build a narrative rhythm that keeps the viewer hooked. By strategically placing visual pattern interrupts, sound effects, and complementary B-roll, we can significantly increase your Average View Duration and signal to the YouTube algorithm that your video is worth promoting."
  },
  {
    id: 2,
    title: "Short-Form Editing",
    icon: <div className="flex items-center gap-1"><Youtube className="w-6 h-6" /><Instagram className="w-5 h-5" /></div>,
    iconColor: "text-fuchsia-400",
    bgColor: "bg-white/[0.02]",
    hoverColor: "hover:border-fuchsia-500/50",
    checkColor: "text-fuchsia-400",
    shortDesc: "High-energy edits for Reels, TikToks, and Shorts. Optimized for mobile viewing with dynamic pacing to hold attention.",
    features: [
      "Dynamic animated captions",
      "Fast-paced visual hooks",
      "Trending audio strategy"
    ],
    detailedInfo: "Short-form content requires a completely different psychology than long-form. The hook must instantly grab the viewer, and the pacing must stay relentless to prevent them from swiping away. I utilize trending audio formats, bold animated subtitles, and fast-paced editing techniques to maximize replay value and algorithmic reach across TikTok, Instagram, and YouTube Shorts."
  },
  {
    id: 3,
    title: "Clipping from Long Form",
    icon: <Scissors className="w-6 h-6" />,
    iconColor: "text-cyan-400",
    bgColor: "bg-white/[0.02]",
    hoverColor: "hover:border-cyan-500/50",
    checkColor: "text-cyan-400",
    shortDesc: "Repurposing podcasts, streams, or interviews into dozens of engaging short-form pieces tailored for immense reach and virality.",
    features: [
      "Identifying viral segments",
      "Vertical format sizing",
      "Multi-platform scaling"
    ],
    detailedInfo: "Stop letting your long-form content go to waste. I comb through your podcasts, live streams, and interviews to find the most engaging \"golden nuggets.\" I then reframe the footage for vertical viewing, add context through captions, and transform a single 1-hour session into a month's worth of viral-ready social media content.",
    link: "/clipping"
  }
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-6 md:gap-12 px-6 py-3 border border-white/10 bg-[#050505]/60 backdrop-blur-xl rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        <Link to="/" className="text-xl font-display font-bold tracking-tight uppercase hover:text-violet-400 transition-colors">
          CK JHA.
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="text-zinc-400 hover:text-white transition-colors">Home</Link>
          <a href="/#services" className="text-zinc-400 hover:text-white transition-colors">Services</a>
          <Link to="/portfolio" className="text-zinc-400 hover:text-white transition-colors">Portfolio</Link>
          <Link to="/clipping" className="text-zinc-400 hover:text-white transition-colors">Clipping</Link>
        </div>
        <a href="#contact" className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-200 transition-colors whitespace-nowrap">Let's Talk</a>
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-20 px-6 bg-[#050505] border-t border-white/5" id="contact">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <span className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-white mb-2">
            Let's work together.
          </span>
          <p className="text-zinc-400 text-lg max-w-xl">
             I'm currently accepting new projects. Let's make your next piece of content unscrollable.
          </p>
          <a href="mailto:ckjhaedits@gmail.com" className="mt-4 px-8 py-4 bg-violet-600 text-white rounded-full font-bold text-lg hover:bg-violet-500 transition-colors inline-flex items-center gap-2">
            <Mail className="w-5 h-5"/> Email Me
          </a>
        </div>

        <p className="text-zinc-600 text-sm mt-12">
          &copy; {new Date().getFullYear()} CK Jha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
};

function VennDiagram() {
  return (
    <div className="relative w-full max-w-[400px] mx-auto aspect-square text-center font-display font-bold my-16">
      {/* Top Circle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-cyan-500/10 border border-cyan-500/30 mix-blend-screen flex flex-col items-center justify-start pt-10 backdrop-blur-[2px]">
        <span className="text-white text-xl">Quality</span>
        <span className="text-cyan-200/60 font-serif italic text-sm font-normal">Premium Output</span>
      </div>
      
      {/* Bottom Left Circle */}
      <div className="absolute bottom-8 left-0 w-64 h-64 rounded-full bg-rose-500/10 border border-rose-500/30 mix-blend-screen flex flex-col items-start justify-end pb-16 pl-10 backdrop-blur-[2px]">
        <span className="text-white text-xl">Speed</span>
        <span className="text-rose-200/60 font-serif italic text-sm font-normal">Fast Turnaround</span>
      </div>
      
      {/* Bottom Right Circle */}
      <div className="absolute bottom-8 right-0 w-64 h-64 rounded-full bg-emerald-500/10 border border-emerald-500/30 mix-blend-screen flex flex-col items-end justify-end pb-16 pr-10 backdrop-blur-[2px]">
        <span className="text-white text-xl">Cost</span>
        <span className="text-emerald-200/60 font-serif italic text-sm font-normal">Fraction of Price</span>
      </div>
      
      {/* Center Intersection */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] z-10 flex items-center justify-center drop-shadow-2xl">
         <span className="text-2xl font-display font-bold tracking-tight uppercase text-white">
           CK JHA.
         </span>
      </div>
    </div>
  );
}

function ServiceCard({ service, index }: { service: any, index: number, key?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      layout
      className={`p-8 rounded-2xl ${service.bgColor} border border-white/5 ${service.hoverColor} transition-colors flex flex-col cursor-pointer`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div layout className={`w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 flex-shrink-0 ${service.iconColor}`}>
        {service.icon}
      </motion.div>
      <motion.h3 layout className="text-xl font-bold mb-3 flex justify-between items-center">
        {service.title}
        <ChevronDown className={`w-5 h-5 text-white/30 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.h3>
      <motion.p layout className="text-white/50 text-sm leading-relaxed mb-6">
        {service.shortDesc}
      </motion.p>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-6 border-t border-white/10 mt-2 mb-6 text-sm text-zinc-300 leading-relaxed font-light">
              {service.detailedInfo}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.ul layout className="text-sm text-zinc-400 space-y-3 mt-auto">
        {service.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center gap-3">
            <CheckCircle2 className={`w-4 h-4 ${service.checkColor}`} /> {feature}
          </li>
        ))}
      </motion.ul>
      
      {service.link && isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 pt-4 border-t border-white/5"
        >
          <Link 
            to={service.link}
            className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors border-b border-transparent pb-1 ${service.iconColor} hover:border-current`}
            onClick={(e) => e.stopPropagation()}
          >
            View Full Process <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}

function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-32 flex flex-col items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Accepting New Projects
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.2] tracking-tight">
               I help brands & creators build <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 font-normal pr-2 shadow-sm">magnetic</span> <br className="hidden md:block"/> video content that holds attention.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed mt-2 font-light">
              Transforming raw footage into highly engaging stories. I engineer pacing and visual hooks to crush your conversion goals and make your content unscrollable.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center items-center gap-4 pt-6">
              <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-colors">
                <Play className="w-4 h-4 fill-current" />
                View Portfolio
              </Link>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-colors">
                <Mail className="w-4 h-4" />
                Let's Talk
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-24 px-6 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why work with me?</h2>
            <p className="text-white/50 max-w-xl mx-auto">Instead of just chopping footage, I focus on the psychology of retention.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-colors">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-violet-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Retention-First Editing</h3>
              <p className="text-white/50 leading-relaxed text-sm">Every cut, zoom, and sound effect is placed purposefully to keep the viewer watching until the very end.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-colors">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-violet-400">
                <MonitorPlay className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Platform Native</h3>
              <p className="text-white/50 leading-relaxed text-sm">Whether it's a YouTube documentary or a TikTok short, the stylistic approach is matched perfectly to the platform's audience.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-colors">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-violet-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reliable Turnarounds</h3>
              <p className="text-white/50 leading-relaxed text-sm">No ghosting. No missed deadlines. Consistent communication and reliable delivery schedules you can count on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Perfect Package (Venn) */}
      <section className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-2 text-white">The Perfect Package</h2>
          <p className="text-xl font-serif italic text-white/50 mb-8">Where speed, quality, and cost meet</p>
          
          <VennDiagram />
        </div>
      </section>

      {/* Selected Work Preview */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center justify-center mb-16 gap-4">
             <div>
               <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Selected Work</h2>
               <p className="text-white/50 max-w-md mx-auto">A glimpse into recent edits that drove massive retention.</p>
             </div>
             <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-violet-400 transition-colors border-b border-transparent hover:border-violet-400 pb-1 mt-4">
               View All Projects <ArrowRight className="w-4 h-4" />
             </Link>
          </div>

          {/* Long Form Preview (2 videos) */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {longVideos.slice(0, 2).map((video) => (
              <div key={video.id} className="group relative flex flex-col gap-4">
                <div className="relative aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-white/10 ring-1 ring-white/5 shadow-2xl">
                  <iframe
                    className="w-full h-full border-none"
                    src={`https://www.youtube.com/embed/${video.id}?controls=1&rel=0&playsinline=1&modestbranding=1&vq=hd1080`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{video.title}</h3>
                  <p className="text-white/40 text-[11px] tracking-widest font-mono mt-2">{video.tag}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Shorts Form Preview (2 videos) */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
             {shortVideos.slice(0, 2).map((video) => (
              <div key={video.id} className="w-full relative group">
                <div className="w-full h-full aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-white/10 ring-1 ring-white/5 shadow-2xl">
                  <iframe
                    className="w-full h-full border-none absolute inset-0"
                    src={`https://www.youtube.com/embed/${video.id}?controls=1&rel=0&playsinline=1&modestbranding=1&vq=hd1080`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 border-t border-white/5 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">My Services</h2>
            <p className="text-white/50 max-w-xl mx-auto">Comprehensive video post-production tailored for modern platforms.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {servicesData.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
          
          {/* Software stack modern row */}
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-50 hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#00004c] text-[#9999FF] font-black text-xs border border-[#9999FF]/20">Pr</span> 
              <span className="font-bold text-sm tracking-tight text-white">Premiere Pro</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#00004c] text-[#9999FF] font-black text-xs border border-[#9999FF]/20">Ae</span> 
              <span className="font-bold text-sm tracking-tight text-white">After Effects</span>
            </div>
            <div className="flex items-center gap-3">
               <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent border border-white/20">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png" className="w-6 h-6 object-contain drop-shadow" alt="DaVinci Resolve" />
               </span>
              <span className="font-bold text-sm tracking-tight text-white">DaVinci Resolve</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 border-t border-white/5 relative bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">The Real Benefits</h2>
            <p className="text-white/50 max-w-xl mx-auto">What you actually get when outsourcing your edits.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col">
              <div className="mb-6 text-fuchsia-400">
                <RotateCcw className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">First Draft in 1-2 Business Days</h3>
              <p className="text-white/50 text-sm leading-relaxed">Keep your projects moving forward and reliably hit deadlines.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col">
              <div className="mb-6 text-violet-400">
                <Infinity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Unlimited Revisions</h3>
              <p className="text-white/50 text-sm leading-relaxed">Lengthy review cycles will be a thing of the past.</p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col">
              <div className="mb-6 text-cyan-400">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Collaboration</h3>
              <p className="text-white/50 text-sm leading-relaxed">Never get left on "read." I respond to every message within an hour (US Central Time).</p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col">
              <div className="mb-6 text-emerald-400">
                <LayoutDashboard className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Project Dashboard</h3>
              <p className="text-white/50 text-sm leading-relaxed">Easily view all your projects in one place.</p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col">
              <div className="mb-6 text-amber-400">
                <Music className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Licensed Music & Stock Footage</h3>
              <p className="text-white/50 text-sm leading-relaxed">Forget about copyright claims or sourcing the right music, SFX, and stock.</p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col">
              <div className="mb-6 text-rose-400">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-white/50 text-sm leading-relaxed">Feel confident in staying on-budget.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Complete Portfolio</h1>
          <p className="text-white/50 max-w-xl text-lg mx-auto">A deep dive into my recent work across different formats and styles.</p>
        </div>

        {/* Long Form Videos Grid */}
        <h2 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3">
          <MonitorPlay className="w-6 h-6 text-violet-400" /> Long Form Edits
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 mb-24">
          {longVideos.map((video) => (
            <div key={video.id} className="break-inside-avoid mb-8 group relative flex flex-col gap-4 border border-white/5 p-4 rounded-2xl bg-zinc-900/30 backdrop-blur-sm">
              <div className="relative aspect-video bg-zinc-900 rounded-xl overflow-hidden ring-1 ring-white/5 shadow-2xl">
                <iframe
                  className="w-full h-full border-none absolute inset-0"
                  src={`https://www.youtube.com/embed/${video.id}?controls=1&rel=0&playsinline=1&modestbranding=1&vq=hd1080`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">{video.title}</h3>
                <p className="text-white/40 text-[10px] tracking-widest font-mono mt-2">{video.tag}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Shorts Grid */}
        <h2 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3 border-t border-white/5 pt-16">
          <Zap className="w-6 h-6 text-fuchsia-400" /> Short Form Edits
        </h2>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8">
          {shortVideos.map((video) => (
            <div key={video.id} className="break-inside-avoid mb-8 group relative flex flex-col gap-4 border border-white/5 p-4 rounded-2xl bg-zinc-900/30 backdrop-blur-sm">
              <div className="relative aspect-[9/16] bg-zinc-900 rounded-xl overflow-hidden ring-1 ring-white/5 shadow-2xl mx-auto w-full max-w-[320px]">
                <iframe
                  className="w-full h-full border-none absolute inset-0"
                  src={`https://www.youtube.com/embed/${video.id}?controls=1&rel=0&playsinline=1&modestbranding=1&vq=hd1080`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Clipping() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(32); // percentage
  const [clipRegion, setClipRegion] = useState({ start: 28, end: 45 });
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<'start' | 'end' | 'playhead' | null>(null);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(null);
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      let percent = ((e.clientX - rect.left) / rect.width) * 100;
      percent = Math.max(0, Math.min(100, percent));
      
      if (isDragging === 'playhead') {
        setCurrentTime(percent);
      } else if (isDragging === 'start') {
        setClipRegion(prev => ({ ...prev, start: Math.min(percent, prev.end - 5) }));
      } else if (isDragging === 'end') {
        setClipRegion(prev => ({ ...prev, end: Math.max(percent, prev.start + 5) }));
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const clippingShorts = [
    { id: "_dev7bytSpk", views: "1.2M", engagement: "8.4%" },
    { id: "Bs4xktyt7LI", views: "845K", engagement: "7.1%" },
    { id: "yRhXT88XGdk", views: "2.1M", engagement: "9.2%" },
    { id: "XHQ7msrpbZs", views: "125K", engagement: "4.5%" },
    { id: "69PDEZdD5uk", views: "450K", engagement: "6.8%" },
    { id: "H9eeJXgAOUw", views: "3.4M", engagement: "11.2%" },
    { id: "zVjASV1_z3Q", views: "920K", engagement: "8.1%" },
    { id: "_61ZjJc0_VE", views: "65K", engagement: "3.9%" },
    { id: "OYczE2FX3Vs", views: "1.5M", engagement: "8.8%" },
    { id: "Q_XMYyoWLDM", views: "320K", engagement: "5.4%" },
    { id: "kQJg0_eFKJg", views: "780K", engagement: "7.6%" },
    { id: "IJhoz56w3hI", views: "210K", engagement: "4.9%" },
    { id: "XjrP0IJxYpM", views: "5.1M", engagement: "12.4%" },
    { id: "9_zNHpZUrxo", views: "1.1M", engagement: "8.0%" },
    { id: "Np1ALmBfsLk", views: "490K", engagement: "6.2%" }
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">
      {/* Abstract Background Glows */}
      <motion.div style={{ y: y1 }} className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none -z-10 mt-12" />
      <motion.div style={{ y: y2 }} className="absolute top-96 -left-32 w-[600px] h-[600px] bg-fuchsia-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center flex flex-col items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            <Scissors className="w-4 h-4" /> The Content Engine
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-medium mb-8 max-w-4xl leading-[1.1] tracking-tight"
          >
            Turn 1 Podcast into <br/> 
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600">
              25-30 Viral Assets.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl text-lg md:text-xl mx-auto leading-relaxed font-light"
          >
            Stop letting your long-form content gather dust. We mine your podcasts, streams, and interviews to extract the highest-retention "golden nuggets" and re-engineer them into viral loops.
          </motion.p>
        </div>

        {/* Process Section - Horizontal Ladder */}
        <div className="mb-32 max-w-6xl mx-auto relative relative z-10">
          <div className="flex items-center gap-4 mb-16 justify-center">
            <h2 className="text-3xl font-display font-medium tracking-tight">The Content Process</h2>
          </div>
          
          <div className="relative">
            {/* Horizontal Connecting Line */}
            <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
            
            <div className="grid md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="relative z-10 bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 p-8 rounded-[2rem] flex flex-col items-center text-center group overflow-hidden isolation-auto">
                <div className="w-14 h-14 rounded-2xl bg-[#050505] border border-white/10 flex items-center justify-center mb-6 text-white/80 group-hover:scale-110 transition-transform duration-500 shadow-xl relative z-20">
                  <Mic className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">You Record</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">Send over hours of raw video, unstructured podcasts, or rambling streams.</p>
                <ul className="text-xs text-white/40 space-y-2 text-left w-full mt-auto bg-white/5 p-4 rounded-xl">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-white/60" /> Raw Footage / Zoom</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-white/60" /> No prep needed</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-white/60" /> Bulk Drop (Drive/Frame)</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 bg-gradient-to-b from-amber-500/[0.05] to-transparent border border-amber-500/20 p-8 rounded-[2rem] flex flex-col items-center text-center group overflow-hidden isolation-auto">
                <div className="w-14 h-14 rounded-2xl bg-[#050505] border border-amber-500/20 flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(245,158,11,0.2)] relative z-20">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight text-amber-400">I Mine Gold</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">I filter the noise to find the stickiest, most controversial, high-value moments.</p>
                <ul className="text-xs text-amber-500/50 space-y-2 text-left w-full mt-auto bg-amber-500/5 p-4 rounded-xl border border-amber-500/10">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-500/60" /> Retention analysis</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-500/60" /> Hook formulation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-500/60" /> Narrative structuring</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 bg-gradient-to-b from-fuchsia-500/[0.05] to-transparent border border-fuchsia-500/20 p-8 rounded-[2rem] flex flex-col items-center text-center group overflow-hidden isolation-auto">
                <div className="w-14 h-14 rounded-2xl bg-[#050505] border border-fuchsia-500/20 flex items-center justify-center mb-6 text-fuchsia-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(217,70,239,0.2)] relative z-20">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight text-fuchsia-400">I Enhance</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">Vertical reframing, dopamine-inducing captions, sound design, and contextual B-rolls.</p>
                <ul className="text-xs text-fuchsia-500/50 space-y-2 text-left w-full mt-auto bg-fuchsia-500/5 p-4 rounded-xl border border-fuchsia-500/10">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-fuchsia-500/60" /> Dynamic 9:16 framing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-fuchsia-500/60" /> Custom brand captions</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-fuchsia-500/60" /> Viral sound pacing</li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="relative z-10 bg-gradient-to-b from-cyan-500/[0.1] to-cyan-500/[0.02] border border-cyan-500/30 p-8 rounded-[2rem] flex flex-col items-center text-center group overflow-hidden isolation-auto shadow-[0_10px_30px_-15px_rgba(34,211,238,0.2)]">
                <div className="w-14 h-14 rounded-2xl bg-[#050505] border border-cyan-500/50 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] relative z-20">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400 tracking-tight">You Scale</h3>
                <p className="text-sm text-cyan-100/60 leading-relaxed mb-4">Flood the algorithm. Publish 20-30 pieces monthly across all short-form platforms.</p>
                 <ul className="text-xs text-cyan-500/60 space-y-2 text-left w-full mt-auto bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/20">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-cyan-400" /> Cross-platform ready</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-cyan-400" /> 20-30 assets / month</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-cyan-400" /> Drive organic traffic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Service Features Detailed */}
        <div className="mb-32 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Why This System Works</h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Podcasts are great for deep connections, but terrible for discovery. By extracting the best parts of your podcast into highly edited vertical clips, you create a top-of-funnel machine that drives traffic back to the full episode.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 tracking-tight">Algorithmic Hooks</h4>
                    <p className="text-sm text-white/50 leading-relaxed">We structure the first 3 seconds to immediately stop the scroll and build curiosity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 tracking-tight">Pacing Optimization</h4>
                    <p className="text-sm text-white/50 leading-relaxed">Dead air is removed. Sentences are tightened. We maintain a high-energy rhythm that maximizes Average View Duration.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 tracking-tight">Visual Reinforcement</h4>
                    <p className="text-sm text-white/50 leading-relaxed">We add B-roll, pop-up graphics, and dynamic typography to emphasize key points and keep the eyes busy.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 lg:p-12 rounded-[3rem] bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 p-8">
                <Scissors className="w-24 h-24 text-white/5 transform group-hover:rotate-12 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-bold mb-8 relative z-10">What's Included?</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center justify-between pb-4 border-b border-white/5">
                  <span className="text-white/80">Full Episodic Review</span>
                  <span className="font-mono text-cyan-400 text-sm">Included</span>
                </li>
                <li className="flex items-center justify-between pb-4 border-b border-white/5">
                  <span className="text-white/80">Hook Writing & Optimization</span>
                  <span className="font-mono text-cyan-400 text-sm">Included</span>
                </li>
                <li className="flex items-center justify-between pb-4 border-b border-white/5">
                  <span className="text-white/80">Color Correction</span>
                  <span className="font-mono text-cyan-400 text-sm">Included</span>
                </li>
                <li className="flex items-center justify-between pb-4 border-b border-white/5">
                  <span className="text-white/80">Audio Mastering & SFX</span>
                  <span className="font-mono text-cyan-400 text-sm">Included</span>
                </li>
                <li className="flex items-center justify-between pb-4 border-b border-white/5">
                  <span className="text-white/80">Animated Typography</span>
                  <span className="font-mono text-cyan-400 text-sm">Included</span>
                </li>
                <li className="flex items-center justify-between pt-4">
                  <span className="text-white/80 font-bold">Total Output</span>
                  <span className="font-mono text-fuchsia-400 font-bold">15-30 Clips / Mo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Showcase Area */}
        <div className="flex flex-col w-full items-center">
          
          {/* Top: The Source (Big Size) */}
          <div className="w-full max-w-5xl mb-24">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-display font-bold mb-3 flex items-center justify-center gap-3 tracking-tight">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.8)]" /> 
                The Source File
              </h3>
              <p className="text-white/40 text-lg font-light leading-relaxed">One hour of raw input. The foundation for a month of content.</p>
            </div>
            
            <div className="p-4 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 blur-[80px] pointer-events-none" />
              
              <div className="relative aspect-video rounded-xl overflow-hidden ring-1 ring-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-zinc-900 w-full group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none z-10" />
                <iframe
                  className="w-full h-full border-none absolute inset-0 z-0"
                  src="https://www.youtube.com/embed/ig1VtIEFkcI?controls=1&rel=0&playsinline=1&modestbranding=1&vq=hd1080"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Interactive Timeline Scrubber */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center hover:bg-cyan-500/30 hover:scale-105 transition-all outline-none"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current translate-x-0.5" />}
                    </button>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight">Timeline Extraction</h4>
                      <p className="text-xs text-white/50">Drag handles to mark in/out points</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1.5 rounded-lg bg-black/50 border border-white/5 text-xs font-mono text-white/70">
                      IN: {Math.floor((clipRegion.start / 100) * 74)}:{(Math.floor(((clipRegion.start / 100) * 74 * 60) % 60)).toString().padStart(2, '0')}
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-black/50 border border-white/5 text-xs font-mono text-white/70">
                      OUT: {Math.floor((clipRegion.end / 100) * 74)}:{(Math.floor(((clipRegion.end / 100) * 74 * 60) % 60)).toString().padStart(2, '0')}
                    </div>
                  </div>
                </div>

                <div 
                  ref={timelineRef}
                  className="relative h-16 bg-[#050505] rounded-xl border border-white/10 overflow-hidden cursor-crosshair select-none"
                >
                  {/* Waveform Mockup */}
                  <div className="absolute inset-x-0 bottom-0 h-10 flex items-end justify-between px-1 opacity-20 pointer-events-none">
                    {Array.from({ length: 80 }).map((_, i) => (
                      <div key={i} className="w-[1.5px] bg-white rounded-t-sm" style={{ height: `${Math.max(10, Math.random() * 100)}%` }} />
                    ))}
                  </div>

                  {/* Other extracted regions purely visual */}
                  <div className="absolute top-0 bottom-0 bg-white/5 border-l border-white/20" style={{ left: '10%', width: '4%' }} />
                  <div className="absolute top-0 bottom-0 bg-white/5 border-l border-white/20" style={{ left: '60%', width: '8%' }} />
                  <div className="absolute top-0 bottom-0 bg-white/5 border-l border-white/20" style={{ left: '85%', width: '5%' }} />

                  {/* Active Highlighted Region */}
                  <div 
                    className="absolute top-0 bottom-0 bg-cyan-500/20 border-y border-cyan-500/50"
                    style={{ left: `${clipRegion.start}%`, width: `${clipRegion.end - clipRegion.start}%` }}
                  >
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMjJkM2VlIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjMiIGZpbGw9Im5vbmUiPjxwb2x5Z29uIHBvaW50cz0iMCwyMCAyMCwwIDIwLDIwIi8+PC9nPjwvc3ZnPg==')] opacity-50 mix-blend-screen pointer-events-none" />
                  </div>

                  {/* Handles */}
                  <div 
                    onMouseDown={(e) => { e.stopPropagation(); setIsDragging('start'); }}
                    className="absolute top-0 bottom-0 w-4 -ml-2 cursor-ew-resize group/handle flex items-center justify-center z-20"
                    style={{ left: `${clipRegion.start}%` }}
                  >
                    <div className="w-[2px] h-full bg-cyan-400 group-hover/handle:w-1 transition-all" />
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-8 bg-black border border-cyan-400 rounded flex items-center justify-center opacity-0 group-hover/handle:opacity-100 shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                      <GripVertical className="w-2 h-4 text-cyan-400" />
                    </div>
                  </div>

                  <div 
                    onMouseDown={(e) => { e.stopPropagation(); setIsDragging('end'); }}
                    className="absolute top-0 bottom-0 w-4 -ml-2 cursor-ew-resize group/handle flex items-center justify-center z-20"
                    style={{ left: `${clipRegion.end}%` }}
                  >
                    <div className="w-[2px] h-full bg-cyan-400 group-hover/handle:w-1 transition-all" />
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-8 bg-black border border-cyan-400 rounded flex items-center justify-center opacity-0 group-hover/handle:opacity-100 shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                      <GripVertical className="w-2 h-4 text-cyan-400" />
                    </div>
                  </div>

                  {/* Playhead */}
                  <div 
                    onMouseDown={(e) => { e.stopPropagation(); setIsDragging('playhead'); }}
                    className="absolute top-0 bottom-0 w-6 -ml-3 cursor-ew-resize group/head z-30"
                    style={{ left: `${currentTime}%` }}
                  >
                    <div className="w-0.5 h-full bg-red-500 mx-auto group-hover/head:bg-white shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent border-t-red-500 group-hover/head:border-t-white" />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-4">
                <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 border border-white/5 flex-1 justify-center md:justify-start">
                  <span className="text-white/60 font-medium">Source Length</span>
                  <div className="h-4 w-px bg-white/20" />
                  <span className="font-mono text-white text-lg">1h 14m</span>
                </div>
                <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex-1 justify-center md:justify-end">
                  <span className="text-cyan-100/60 font-medium">Assets Generated</span>
                  <div className="h-4 w-px bg-cyan-500/30" />
                  <span className="font-mono text-cyan-400 font-bold text-xl">15+ Shorts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: The Output (Masonry Grid of Shorts) */}
          <div className="w-full max-w-7xl relative">
            <div className="sticky top-20 z-20 bg-[#050505]/80 backdrop-blur-xl py-8 mb-12 border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
               <h2 className="text-4xl font-display font-medium tracking-tight">The Harvest <span className="text-white/30 text-2xl font-light italic ml-2">Output</span></h2>
               <div className="flex items-center gap-4">
                 <span className="hidden sm:inline-block px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm font-bold tracking-widest text-cyan-400">15 ASSETS DELIVERED</span>
                 <a href="mailto:ckjhaedits@gmail.com" className="px-6 py-2 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:bg-zinc-200 transition-colors flex items-center gap-2">
                   Get Started <ArrowRight className="w-4 h-4" />
                 </a>
               </div>
            </div>
            
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {clippingShorts.map((video, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (i % 4) * 0.1 }}
                  key={i} 
                  className="break-inside-avoid group relative"
                >
                  <div className="relative aspect-[9/16] bg-zinc-900 rounded-[1.5rem] overflow-hidden border border-white/5 shadow-2xl transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-cyan-500/30 duration-500">
                    <iframe
                      className="w-full h-full border-none absolute inset-0 pointer-events-auto"
                      src={`https://www.youtube.com/embed/${video.id}?controls=1&rel=0&playsinline=1&modestbranding=1&vq=hd1080`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-end">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-white/60 text-xs font-bold uppercase tracking-wider mb-1">Views</span>
                          <span className="text-white font-mono font-bold text-xl">{video.views}</span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">Engagement</span>
                          <span className="text-cyan-50 font-mono font-bold text-xl">{video.engagement}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#050505] text-zinc-50 font-sans selection:bg-violet-500 selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/clipping" element={<Clipping />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
