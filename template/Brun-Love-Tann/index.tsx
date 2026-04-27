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
    setIsMenuOpen(false); // 메뉴 클릭 시 닫기
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--pick-bg', config.colors.background);
    document.documentElement.style.setProperty('--pick-primary', config.colors.primary);
    document.title = "BRUN LØVE TANN | The Rebirth";
  }, []);

  return (
    <div className="pick-template-root relative w-full min-h-screen pt-12 flex overflow-x-hidden selection:bg-black selection:text-white pb-0 md:pb-0">
      {/* 1. 상단 티커 (고정) */}
      <Ticker />

      {/* 2. 데스크탑 전용 사이드바 (lg 이상) */}
      <Sidebar scrollToSection={scrollToSection} />

      {/* 3. 모바일 전용 메뉴 드로어 (AnimatePresence) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[300] bg-[#f3e9dc] p-10 flex flex-col justify-center items-center lg:hidden"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-10 right-10 w-16 h-16 pick-grid-border rounded-full flex items-center justify-center bg-black text-white"
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col space-y-8 text-center">
              {config.navLinks.map((link, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(link.href.replace('#', ''))}
                  className="pick-text-header text-[12vw] tracking-tighter hover:text-[#be3127] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="absolute bottom-10 text-[10px] font-black tracking-[0.5em] opacity-30 uppercase">
              Brun Løve Tann — Chapter 2
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. 메인 콘텐츠 (스크롤 가능) - 여백 정밀 조정 */}
      <main className="flex-1 lg:pl-[390px] w-full min-h-screen flex flex-col pick-border-l bg-white/20">
        <section id="home"><Home /></section>
        
        <div className="w-full h-[1.5px] bg-black"></div>
        <section id="story"><Story /></section>
        
        <div className="w-full h-[1.5px] bg-black"></div>
        <section id="products"><Products /></section>
        
        <div className="w-full h-[1.5px] bg-black"></div>
        <section id="contact"><Contact /></section>

        {/* Footer - v6.2.7 Ultimate Contrast */}
        <footer className="w-full bg-[#1a1a1a] text-white py-48 lg:py-64 px-12 md:px-24">
          <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between gap-48 lg:gap-64">
            <div className="lg:w-1/2">
              <h2 className="pick-text-header text-[15vw] lg:text-[10vw] leading-[0.7] mb-12 text-white" style={{ fontFamily: config.fonts.heading }}>
                BRUN<br/>LØVE<br/>TANN.
              </h2>
              <div className="w-24 h-[2px] bg-[#be3127] mt-8"></div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
              <div className="flex flex-col gap-8">
                <span className="text-[10px] font-black tracking-widest opacity-60 uppercase border-b border-white/20 pb-4 text-white">Discovery</span>
                {config.navLinks.map((l, i) => (
                  <button key={i} className="text-left text-sm hover:text-[#be3127] transition-all uppercase font-black tracking-tighter text-white/90 hover:text-white">{l.label}</button>
                ))}
              </div>
              <div className="flex flex-col gap-8">
                <span className="text-[10px] font-black tracking-widest opacity-60 uppercase border-b border-white/20 pb-4 text-white">Social Library</span>
                <div className="flex flex-col gap-4">
                  {['Instagram', 'Youtube', 'Pinterest'].map((s) => (
                    <a key={s} href="#" className="text-sm font-black border-b border-white/10 hover:border-[#be3127] hover:text-[#be3127] transition-all pb-1 w-fit text-white/80 hover:text-white">{s}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-64 pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] opacity-40 font-black uppercase tracking-[0.5em] font-mono text-white">© 2026 BRUN LØVE TANN — CREATED BY WEWEB SYSTEM.</p>
            <div className="flex gap-12 opacity-60 text-[9px] font-black uppercase tracking-widest text-white">
               <span>Terms</span>
               <span>Privacy</span>
            </div>
          </div>
        </footer>
      </main>

      {/* 5. 모바일 메뉴 트리거 */}
      {!isMenuOpen && (
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden fixed bottom-10 right-10 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center z-[250] shadow-2xl active:scale-95 transition-transform"
        >
          <Menu size={28} />
        </button>
      )}
    </div>
  );
}
