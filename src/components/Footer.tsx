import { motion } from 'motion/react';

export default function Footer() {
  return (
    <motion.footer 
      id="contact" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6 md:px-12 text-center bg-white"
    >
      <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-8">
        Let's create something <br className="hidden md:block"/> extraordinary.
      </h2>
      <a 
        href="mailto:ckjhaedits@gmail.com" 
        className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-10 py-5 rounded-full font-medium tracking-wide hover:bg-gray-800 transition-all shadow-xl shadow-gray-900/20 mb-16"
      >
        Contact Me
      </a>
      
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-medium tracking-wider uppercase max-w-[1600px] mx-auto">
        <p>© {new Date().getFullYear()} CK Jha. All rights reserved.</p>
        <div className="flex gap-6 mt-6 md:mt-0">
          <a href="#" className="hover:text-gray-900 transition-colors">Instagram</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Vimeo</a>
          <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
        </div>
      </div>
    </motion.footer>
  );
}
