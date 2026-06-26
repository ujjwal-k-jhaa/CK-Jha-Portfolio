import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Thumbnail', href: 'https://thumbnail.chakradhar.website/' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-4 px-6 md:px-12 text-gray-900 shadow-sm' : 'bg-transparent py-6 px-6 md:px-12 text-gray-900'}`}
      >
        <div className="flex justify-between items-center max-w-[1600px] mx-auto w-full">
          <Link to="/" onClick={() => setIsOpen(false)} className={`font-display font-semibold text-xl tracking-wide uppercase relative z-50 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-900'}`}>
            CK Jha
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
            {menuItems.map((item) => (
              item.name === 'Contact' ? (
                <a key={item.name} href={item.href} className="hover:text-gray-500 transition-colors">{item.name}</a>
              ) : (
                <Link key={item.name} to={item.href} className="hover:text-gray-500 transition-colors">{item.name}</Link>
              )
            ))}
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden flex flex-col justify-center items-center gap-1.5 p-2 relative z-50 w-10 h-10 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-900'}`}
          >
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gray-900 flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-10">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {item.name === 'Contact' ? (
                    <a 
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl sm:text-5xl font-display uppercase tracking-widest text-white hover:text-gray-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link 
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl sm:text-5xl font-display uppercase tracking-widest text-white hover:text-gray-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
