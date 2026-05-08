import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Bookmark, Share2, MessageSquare, 
  Type, Sun, Moon, Coffee, ChevronRight, 
  Hash, Search, ArrowUp, Menu
} from 'lucide-react';

// Assets
import journalImg from './assets/journal.png';
import heroImg from './assets/hero.png';

const DetailPage = () => {
  const [fontSize, setFontSize] = useState<'S' | 'M' | 'L'>('M');
  const [theme, setTheme] = useState<'light' | 'sepia' | 'dark'>('sepia');
  const [isScrapped, setIsScrapped] = useState(false);
  const [activeTOC, setActiveTOC] = useState('intro');
  const [scrollProgress, setScrollProgress] = useState(0);

  // 스크롤 진행도 및 TOC 트래킹
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);

      // Simple TOC tracking (mock)
      if (currentScroll < 800) setActiveTOC('intro');
      else if (currentScroll < 1600) setActiveTOC('philosophy');
      else setActiveTOC('conclusion');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'S': return 'text-base leading-relaxed';
      case 'L': return 'text-2xl leading-loose';
      default: return 'text-xl leading-relaxed';
    }
  };

  const getThemeColors = () => {
    switch (theme) {
      case 'dark': return 'bg-[#0A0A0A] text-[#FAF8F5] border-white/10';
      case 'sepia': return 'bg-[#F8F7FF] text-black border-black/5';
      default: return 'bg-white text-black border-black/5';
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${getThemeColors()} font-sans selection:bg-[#A78BFA] selection:text-white relative`}>
      {/* Premium Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;600&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;600&display=swap');
        .font-serif-kr { font-family: 'Noto Serif KR', serif; }
        .font-serif-en { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-black/5">
        <motion.div 
          className="h-full bg-[#A78BFA]" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Controls Toolbar */}
      <header className={`fixed top-0 left-0 w-full z-50 border-b ${getThemeColors()} py-4 px-6 flex justify-between items-center backdrop-blur-md bg-opacity-80`}>
        <div className="flex items-center gap-4">
          <button onClick={() => window.history.back()} className="p-2 hover:bg-black/5 rounded-full transition-all">
            <ArrowLeft size={20} />
          </button>
          <div className="hidden sm:block text-xs font-bold uppercase tracking-widest opacity-40">
            Archiv / Journal / Philosophy
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Font Size Toggle */}
          <div className="flex items-center bg-black/5 rounded-full p-1">
            {(['S', 'M', 'L'] as const).map((size) => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={`w-8 h-8 rounded-full text-[10px] font-bold transition-all ${fontSize === size ? 'bg-white shadow-sm text-[#A78BFA]' : 'opacity-40'}`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-2">
            <button onClick={() => setTheme('light')} className={`p-2 rounded-full ${theme === 'light' ? 'text-[#A78BFA] bg-black/5' : 'opacity-40'}`}><Sun size={18} /></button>
            <button onClick={() => setTheme('sepia')} className={`p-2 rounded-full ${theme === 'sepia' ? 'text-[#A78BFA] bg-black/5' : 'opacity-40'}`}><Coffee size={18} /></button>
            <button onClick={() => setTheme('dark')} className={`p-2 rounded-full ${theme === 'dark' ? 'text-[#A78BFA] bg-black/5' : 'opacity-40'}`}><Moon size={18} /></button>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-40 container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row gap-20">
        
        {/* Article Body Area */}
        <article className="flex-1 max-w-3xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#A78BFA] text-sm font-bold uppercase tracking-[0.3em] mb-6 block">Philosophy & Life</span>
            <h1 className="text-4xl md:text-6xl font-serif-en font-bold mb-10 leading-tight">
              The Silence of Modern Thought: Reclaiming Depth in a Distracted Era
            </h1>
            
            <div className="flex items-center justify-between py-8 border-y border-black/5 mb-16">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#A78BFA]/20 flex items-center justify-center text-[#A78BFA] font-serif-en font-bold text-xl">J</div>
                <div>
                  <div className="font-bold">Julian Archiv</div>
                  <div className="text-xs opacity-40">Published May 2024 · 8 min read</div>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="p-3 border border-black/5 rounded-full hover:bg-black/5 transition-all"><Share2 size={18} /></button>
                <button className="p-3 border border-black/5 rounded-full hover:bg-black/5 transition-all"><MessageSquare size={18} /></button>
              </div>
            </div>
          </motion.div>

          <div className={`font-serif-kr ${getFontSizeClass()} space-y-12 opacity-90`}>
            <p id="intro">
              우리는 그 어느 때보다 많은 정보를 접하며 살아가고 있습니다. 하지만 역설적으로, 그 정보의 바다 속에서 우리는 '지식의 통찰'을 잃어가고 있습니다. 현대인의 사고는 선형적이기보다 단편적이며, 깊이 들어가기보다 표면을 부유합니다. Archiv가 추구하는 '고요한 영감'은 단순히 디자인적 선택이 아닌, 이러한 시대적 결핍에 대한 대안입니다.
            </p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[2.5rem] overflow-hidden my-20 shadow-2xl"
            >
              <img src={journalImg} alt="Content" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-6 text-white/60 text-xs italic">Figure 1. The minimal interface for maximum focus.</div>
            </motion.div>

            <h2 id="philosophy" className="text-3xl font-serif-kr font-bold pt-10">침묵이 만드는 통찰의 켜</h2>
            <p>
              지식은 단순한 정보의 나열이 아닙니다. 정보가 우리 안에 들어와 숙성되고, 기존의 생각들과 부딪히며 새로운 층(Layer)을 형성할 때 비로소 지혜가 됩니다. 이 숙성의 과정에는 반드시 '침묵'이 필요합니다. 디지털 환경에서의 침묵이란, 광고와 불필요한 알림, 시선을 분산시키는 수많은 링크로부터 자유로운 상태를 의미합니다.
            </p>

            <blockquote className="border-l-4 border-[#A78BFA] pl-8 py-4 my-16 italic text-2xl font-serif-kr opacity-60">
              "진정한 통찰은 소음 속에서 태어나지 않는다. 그것은 고요한 여백 속에서만 뿌리를 내린다."
            </blockquote>

            <p id="conclusion">
              결국 우리가 돌아가야 할 곳은 '본질'입니다. Archiv의 인터페이스가 비어있는 이유는 당신의 영감으로 그 자리를 채우기 위함입니다. 최소한의 인터페이스는 최대한의 통찰을 가능하게 합니다. 당신의 아카이브가 단순한 북마크의 모음이 아니라, 당신만의 철학이 담긴 도서관이 되기를 바랍니다.
            </p>
          </div>

          {/* Related Archives */}
          <section className="mt-32 pt-20 border-t border-black/5">
            <h3 className="text-2xl font-serif-kr font-bold mb-10">Related Archives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[16/10] bg-[#A78BFA]/5 rounded-3xl overflow-hidden mb-6">
                    <img src={heroImg} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  </div>
                  <h4 className="text-lg font-bold group-hover:text-[#A78BFA] transition-colors">Digital Minimalism: A Practical Guide</h4>
                  <p className="text-sm opacity-40 mt-2">Lifestyle / 5 min read</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block w-72 sticky top-32 h-fit">
          <div className="space-y-16">
            {/* Table of Contents */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 opacity-30">Content Outline</h4>
              <nav className="space-y-4 text-sm font-medium">
                {[
                  { id: 'intro', label: '01 Introduction' },
                  { id: 'philosophy', label: '02 The Philosophy' },
                  { id: 'conclusion', label: '03 Final Thoughts' }
                ].map((item) => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`}
                    className={`block transition-all hover:translate-x-2 ${activeTOC === item.id ? 'text-[#A78BFA] pl-4 border-l-2 border-[#A78BFA]' : 'opacity-40 pl-4 border-l-2 border-transparent'}`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Popular Keywords */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 opacity-30">Knowledge Trend</h4>
              <div className="flex flex-wrap gap-2">
                {['Mindfulness', 'System Design', 'Archiving', 'AI Ethics', 'Stoicism'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-black/5 rounded-full text-[11px] font-bold opacity-60 hover:bg-[#A78BFA] hover:text-white cursor-pointer transition-all">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter Mini */}
            <div className="p-8 bg-[#A78BFA]/5 rounded-3xl border border-[#A78BFA]/10">
              <h5 className="font-serif-en font-bold mb-4">Weekly Archiv</h5>
              <p className="text-xs opacity-60 leading-relaxed mb-6">Receive curated thoughts directly in your inbox.</p>
              <div className="relative">
                <input type="text" placeholder="Email" className="w-full bg-white/50 border-b border-[#A78BFA]/20 py-2 text-xs focus:outline-none" />
                <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20" size={16} />
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Floating Scrap Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsScrapped(!isScrapped)}
        className={`fixed bottom-10 right-10 z-[100] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all ${isScrapped ? 'bg-[#A78BFA] text-white' : 'bg-white text-[#A78BFA]'}`}
      >
        <Bookmark size={28} fill={isScrapped ? 'white' : 'none'} />
        <AnimatePresence>
          {isScrapped && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute -top-12 right-0 bg-[#A78BFA] text-white text-[10px] px-3 py-1 rounded-full whitespace-nowrap font-bold"
            >
              Scrapped to My Archive
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Scroll to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-10 left-10 p-4 rounded-full bg-black/5 hover:bg-black/10 transition-all ${scrollProgress > 20 ? 'opacity-100' : 'opacity-0'}`}
      >
        <ArrowUp size={20} />
      </button>

      {/* Footer (Simplified for detail page) */}
      <footer className="py-20 border-t border-black/5 px-10 text-center">
        <div className="text-2xl font-serif-en font-bold opacity-20 mb-6">Archiv</div>
        <p className="text-xs opacity-20 uppercase tracking-widest font-bold">Deep thought, Minimal interface.</p>
      </footer>
    </div>
  );
};

export default DetailPage;
