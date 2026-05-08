import { useEffect, useRef, useState } from 'react';
import config from './theme-config.json';
import Hero from './pages/Hero';
import Story from './pages/Story';
import Collection from './pages/Collection';
import Detail from './pages/Detail';
import Contact from './pages/Contact';

export default function LuvidTemplate() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="relative w-full bg-[#FDFCFB] selection:bg-[#8E7355] selection:text-white"
      style={{ 
        color: config.colors.text, 
        fontFamily: config.fonts.body 
      }}
    >
      {/* Header */}
      <header className={`fixed top-0 left-0 z-50 w-full px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'}`}>
        <div 
          className="text-2xl font-bold tracking-[0.4em] uppercase cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ fontFamily: config.fonts.heading, color: isScrolled ? config.colors.earthyBrown : config.colors.text }}
        >
          Luvid
        </div>

        <nav className="hidden md:flex gap-12 items-center">
          {config.navLinks.map((link, idx) => (
            <button 
              key={idx} 
              onClick={() => scrollToSection(link.href.replace('#', ''))}
              className="text-[11px] font-bold tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button 
          className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${isScrolled ? 'bg-[#8E7355] text-white' : 'bg-white/20 backdrop-blur-md text-gray-900 border border-white/50'}`}
          onClick={() => scrollToSection('contact')}
        >
          Consultation
        </button>
      </header>

      {/* Main Sections */}
      <main>
        <Hero />
        <Story />
        <Collection />
        <Detail />
        <Contact />
      </main>

      {/* Custom Styles for fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;600&family=Inter:wght@300;400;600&family=Noto+Serif+KR:wght@300;500&display=swap');
        
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .italic {
          font-style: italic;
        }
      `}</style>
    </div>
  );
}
