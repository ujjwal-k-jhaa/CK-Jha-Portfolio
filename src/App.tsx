/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Services from './components/Services';
import PerfectPackage from './components/PerfectPackage';
import RightFit from './components/RightFit';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';

function Home() {
  return (
    <main>
      <Hero />
      <Gallery limitLongForm={2} limitShortForm={4} showViewAll={true} />
      <Services />
      <RightFit />
      <PerfectPackage />
      <Benefits />
    </main>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="font-sans antialiased relative">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gray-900 z-[100] origin-left"
          style={{ scaleX }}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
