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

      <footer className="py-20 md:py-32 px-6 md:px-16 border-t border-[#1A1A1A] text-center">

        <p className="text-[#444] text-[10px] tracking-[0.2em] uppercase font-medium">
          &copy; {new Date().getFullYear()} WISE BY KODAK HERITAGE. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}


