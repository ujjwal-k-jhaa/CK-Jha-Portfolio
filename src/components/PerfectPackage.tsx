import { motion } from 'motion/react';

export default function PerfectPackage() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-4">
            The Perfect Package
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light italic">
            Where speed, quality, and cost meet
          </p>
        </motion.div>

        <div className="relative w-full max-w-[550px] aspect-square mx-auto flex items-center justify-center mt-10">
          {/* Quality Circle */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[65%] h-[65%] rounded-full bg-sky-200/40 mix-blend-multiply flex flex-col items-center pt-[18%] transition-transform duration-500 hover:scale-105"
          >
            <span className="font-display font-bold text-sm sm:text-xl md:text-2xl tracking-wide text-gray-900">Quality</span>
            <span className="text-[10px] sm:text-sm md:text-base italic text-gray-500 mt-0 sm:mt-1">Premium Output</span>
          </motion.div>

          {/* Speed Circle */}
          <motion.div 
            initial={{ opacity: 0, x: -20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-0 w-[65%] h-[65%] rounded-full bg-rose-200/40 mix-blend-multiply flex flex-col items-center justify-end pb-[22%] pr-[18%] transition-transform duration-500 hover:scale-105"
          >
            <span className="font-display font-bold text-sm sm:text-xl md:text-2xl tracking-wide text-gray-900">Speed</span>
            <span className="text-[10px] sm:text-sm md:text-base italic text-gray-500 mt-0 sm:mt-1">Fast Turnaround</span>
          </motion.div>

          {/* Cost Circle */}
          <motion.div 
            initial={{ opacity: 0, x: 20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 right-0 w-[65%] h-[65%] rounded-full bg-emerald-200/40 mix-blend-multiply flex flex-col items-center justify-end pb-[22%] pl-[18%] transition-transform duration-500 hover:scale-105"
          >
            <span className="font-display font-bold text-sm sm:text-xl md:text-2xl tracking-wide text-gray-900">Cost</span>
            <span className="text-[10px] sm:text-sm md:text-base italic text-gray-500 mt-0 sm:mt-1">Fraction of Price</span>
          </motion.div>

          {/* Center Logo/Text */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute z-10 w-[40%] h-[40%] rounded-full bg-white flex flex-col items-center justify-center shadow-[0_0_50px_20px_rgba(255,255,255,1)]"
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <img 
                src="https://i.ibb.co/99BHwkzF/man.png" 
                alt="CK Jha" 
                className="w-8 h-8 sm:w-14 sm:h-14 md:w-20 md:h-20 object-contain drop-shadow-sm"
              />
              <span className="font-display font-bold text-[10px] sm:text-base md:text-xl tracking-tight text-gray-900">
                CK JHA
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
