import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@framework/utils';
import '@packages/ui'; // Web Components 등록
import theme from './theme-config.json';
import Home from './pages/Home';

// React에서 Custom Element 타입 지원을 위한 선언
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'fw-scroll-progress': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800&display=swap');

    :root {
      --primary: ${theme.colors.primary};
      --secondary: ${theme.colors.secondary};
      --background: ${theme.colors.background};
      --surface: ${theme.colors.surface};
      --text-primary: ${theme.colors.text.primary};
      --text-secondary: ${theme.colors.text.secondary};
      --text-accent: ${theme.colors.text.accent};
      --border: ${theme.colors.border};
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--background);
      color: var(--text-primary);
      font-family: ${theme.typography.fontFamily.body};
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    /* Web Component 스타일 커스텀 */
    fw-scroll-progress {
      position: fixed;
      top: 0;
      left: 0;
      height: 4px;
      background-color: var(--primary);
      z-index: 9999;
      transition: width 0.1s ease-out;
    }
  `}} />
);

export default function WiseTemplate() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={cn("wise-template min-h-screen", "bg-black text-white")}>
      <GlobalStyles />
      
      {/* Monorepo UI Component: Scroll Progress */}
      <fw-scroll-progress />

      {/* Cinematic Header */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 w-full flex justify-between items-center py-6 md:py-8 px-6 md:px-16 z-[1000] mix-blend-difference"
      >

        <div 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-black tracking-tighter cursor-pointer"
        >
          WISE<span className="text-[#FFD200]">.</span>
        </div>
        <div className="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.3em]">

          {['COLLECTIONS', 'JOURNAL', 'STORY', 'SHOP'].map((item) => (
            <button key={item} className="hover:text-[#FFD200] transition-colors bg-transparent border-none text-white cursor-pointer uppercase">
              {item}
            </button>
          ))}
        </div>
      </motion.nav>

      <main>
        <section id="home">
          <Home />
        </section>
      </main>

      <footer className="py-20 md:py-32 px-6 md:px-16 border-t border-[#1A1A1A] text-center pb-32 md:pb-32">
        <p className="text-[#444] text-[10px] tracking-[0.2em] uppercase font-medium">
          &copy; {new Date().getFullYear()} WISE BY KODAK HERITAGE. ALL RIGHTS RESERVED.
        </p>
      </footer>

      {/* Mobile App Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-lg border-t border-white/5 px-8 py-4 flex justify-between items-center z-[2000] pb-safe">
        {[
          { label: 'HOME', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> },
          { label: 'ARCHIVE', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg> },
          { label: 'CART', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg> },
          { label: 'MY', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> }
        ].map((nav) => (
          <button key={nav.label} className="flex flex-col items-center gap-1.5 bg-transparent border-none text-white/50 hover:text-[#FFD200] transition-colors cursor-pointer">
            {nav.icon}
            <span className="text-[8px] font-black tracking-widest">{nav.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}


