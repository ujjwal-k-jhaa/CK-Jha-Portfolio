import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

const softwares = [
  { name: 'Premiere Pro', src: 'https://i.ibb.co/F432D9Ps/Adobe-Premiere-Pro-CC-icon-svg.png' },
  { name: 'After Effects', src: 'https://i.ibb.co/B2ccnc4L/Adobe-After-Effects-CC-icon-svg.png' },
  { name: 'Davinci Resolve', src: 'https://i.ibb.co/vvDH1vBx/Da-Vinci-Resolve-Studio.png' },
  { name: 'Photoshop', src: 'https://i.ibb.co/Zzn3sW49/Adobe-Photoshop-CC-icon-svg.png' },
  { name: 'Illustrator', src: 'https://i.ibb.co/tMrMGhNb/Adobe-Illustrator-CC-icon-svg.png' },
  { name: 'Audition', src: 'https://i.ibb.co/tMrMGhNb/Adobe-Illustrator-CC-icon-svg.png' },
];

const duplicatedSoftwares = [...softwares, ...softwares, ...softwares, ...softwares, ...softwares, ...softwares];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative overflow-hidden">
      {/* Decorative blurred background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-gray-200/50 to-transparent blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto z-10 flex flex-col items-center flex-1 justify-center"
      >
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-2.5 bg-white border border-gray-200 shadow-sm px-5 py-2.5 rounded-full mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-700 tracking-wide">
            Available — Accepting 1 new client
          </span>
        </motion.div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.05]">
          Elevating brands <br className="hidden md:block"/>
          <span className="text-gray-400 font-light italic">through motion.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          I am CK Jha, a premium video editor specializing in high-retention commercials, immersive documentaries, and visual storytelling that commands attention.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <motion.a 
            href="/#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-gray-800 transition-all shadow-xl shadow-gray-900/20"
          >
            Let's Start
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.a 
            href="/#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-medium tracking-wide hover:bg-gray-50 hover:border-gray-300 transition-all"
          >
            <Play className="w-4 h-4 fill-current" />
            View Edits
          </motion.a>
        </div>

      </motion.div>

      {/* Software Marquee */}
      <div className="w-full max-w-3xl mx-auto mt-20 pb-10 overflow-hidden relative">
        {/* Gradients to fade out edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
        
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-12 md:gap-20 w-max"
        >
          {duplicatedSoftwares.map((software, idx) => (
            <div key={idx} className="flex items-center justify-center shrink-0 w-12 h-12 md:w-16 md:h-16 select-none">
              <img src={software.src} alt={software.name} className="w-full h-full object-contain pointer-events-none select-none" draggable={false} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
