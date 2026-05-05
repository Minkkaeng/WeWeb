import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import config from './theme-config.json';
import Ticker from './components/Ticker';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Story from './pages/Story';
import Products from './pages/Products';
import Contact from './pages/Contact';
import { Menu, X } from 'lucide-react';
import './GlobalStyles.css';

export default function BrunLoveTannTemplate() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.title = "NOCTURNE & CO. | A Symphony of Shadows";
  }, []);

  return (
    <div className="brun-template-root relative w-full min-h-screen pt-10 flex overflow-x-hidden selection:bg-[#c5a059] selection:text-black pb-0 md:pb-0">
      <Ticker />
      <Sidebar scrollToSection={scrollToSection} />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[300] bg-black p-10 flex flex-col justify-center items-center lg:hidden"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-10 right-10 w-16 h-16 border border-[#c5a059] rounded-full flex items-center justify-center bg-transparent text-[#c5a059]"
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col space-y-8 text-center">
              {config.navLinks.map((link, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(link.href.replace('#', ''))}
                  className="brun-text-header text-[12vw] tracking-widest text-[#e0d8c3] hover:text-[#c5a059] transition-colors bg-transparent border-none"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="absolute bottom-10 text-[10px] font-black tracking-[0.5em] opacity-30 uppercase text-[#c5a059]">
              A Symphony of Shadows
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 lg:pl-[350px] w-full min-h-screen flex flex-col border-l border-[#c5a059]/20 bg-[#0a0a0a]">
        <section id="home"><Home /></section>
        <section id="products"><Products /></section>
        <section id="story"><Story /></section>
        <section id="contact"><Contact /></section>

        <footer className="w-full bg-black text-[#e0d8c3] py-24 lg:py-32 px-12 md:px-24 pb-32 md:pb-64 border-t border-[#c5a059]/20">
          <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between gap-24 lg:gap-64">
            <div className="lg:w-1/2">
              <h2 className="brun-text-header text-[10vw] lg:text-[6vw] leading-[1] mb-12 text-[#c5a059]">
                NOCTURNE<br/>&amp; CO.
              </h2>
              <div className="w-24 h-[1px] bg-[#c5a059] mt-8"></div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
              <div className="flex flex-col gap-8">
                <span className="brun-text-header text-[12px] tracking-widest opacity-60 uppercase border-b border-[#c5a059]/20 pb-4 text-[#c5a059]">Discovery</span>
                {config.navLinks.map((l, i) => (
                  <button key={i} className="text-left text-sm hover:text-[#c5a059] transition-all uppercase tracking-widest text-[#e0d8c3] bg-transparent border-none">{l.label}</button>
                ))}
              </div>
              <div className="flex flex-col gap-8">
                <span className="brun-text-header text-[12px] tracking-widest opacity-60 uppercase border-b border-[#c5a059]/20 pb-4 text-[#c5a059]">Social</span>
                <div className="flex flex-col gap-4">
                  {['Instagram', 'Youtube', 'Pinterest'].map((s) => (
                    <a key={s} href="#" className="text-sm tracking-widest border-b border-transparent hover:border-[#c5a059] hover:text-[#c5a059] transition-all pb-1 w-fit text-[#e0d8c3] no-underline uppercase">{s}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-32 pt-16 border-t border-[#c5a059]/20 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] opacity-40 uppercase tracking-[0.5em] font-mono text-[#c5a059]">© 2026 NOCTURNE & CO — A SYMPHONY OF SHADOWS.</p>
          </div>
        </footer>
      </main>

      {!isMenuOpen && (
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden fixed bottom-10 right-10 w-16 h-16 bg-black text-[#c5a059] rounded-full flex items-center justify-center z-[250] shadow-2xl active:scale-95 transition-transform border border-[#c5a059]"
        >
          <Menu size={28} />
        </button>
      )}
    </div>
  );
}
