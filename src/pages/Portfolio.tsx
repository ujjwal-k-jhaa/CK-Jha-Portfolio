import { useEffect } from 'react';
import Gallery from '../components/Gallery';
import { motion } from 'motion/react';

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-16 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center px-6 mb-12"
      >
        <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
          My Best Works
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
          A comprehensive collection of my video editing work spanning documentaries, talking heads, and short-form content.
        </p>
      </motion.div>

      <Gallery hideHeader={true} />
    </main>
  );
}
