import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, BookOpen, Hash, Users, Bookmark, 
  ChevronRight, Mail, Globe, Share2, ArrowUpRight, 
  Clock, MessageSquare, ArrowLeft, Lock, User, Code, Eye, EyeOff
} from 'lucide-react';

// Assets
import heroImg from './assets/hero.png';
import journalImg from './assets/journal.png';
import catPhilosophy from './assets/cat_philosophy.png';
import catScience from './assets/cat_science.png';
import catArt from './assets/cat_art.png';
import catTech from './assets/cat_tech.png';

const ArchivTemplate = () => {
  const [view, setView] = useState<'landing' | 'category' | 'auth'>('landing');
  const [searchQuery, setSearchQuery] = useState('');
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const categories = [
    { name: 'Philosophy', icon: <BookOpen size={24} />, count: 124, size: 'large', img: catPhilosophy },
    { name: 'Science', icon: <Hash size={24} />, count: 86, size: 'small', img: catScience },
    { name: 'Art', icon: <Bookmark size={24} />, count: 215, size: 'small', img: catArt },
    { name: 'Tech', icon: <Users size={24} />, count: 94, size: 'medium', img: catTech },
  ];

  // --- Sub-components for different views ---

  const LandingView = () => (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col lg:flex-row items-center pt-20">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-12 lg:px-24 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#A78BFA] text-xs font-bold uppercase tracking-[0.5em] mb-6 block">Premium Knowledge Portal</span>
            <h1 className="text-7xl md:text-[9rem] font-serif-en font-bold leading-[0.85] tracking-tighter mb-12 text-black">
              Deep Insight, <br /> 
              <span className="italic font-normal text-[#A78BFA]">Quiet</span> Inspiration.
            </h1>
            <p className="max-w-md text-xl opacity-60 font-serif-kr leading-relaxed mb-12">
              정보의 소음을 넘어 지식의 본질을 큐레이션합니다. <br />
              아카이브는 당신의 통찰이 깊어지는 가장 고요한 지식 포털입니다.
            </p>
            
            <div className="relative max-w-md group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 opacity-30" size={20} />
              <input
                type="text"
                placeholder="지식의 바다를 검색하세요..."
                className="w-full bg-white/60 border border-black/5 py-5 pl-16 pr-8 rounded-2xl focus:outline-none focus:bg-white focus:border-[#A78BFA] transition-all shadow-xl font-serif-kr"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 h-full relative overflow-hidden">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7FF] via-transparent to-transparent" />
        </div>
      </section>

      {/* Bento Grid Directory */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-20 items-end">
          <h2 className="text-5xl font-serif-en font-bold italic text-black">Knowledge Clusters</h2>
          <div className="h-[1px] flex-1 bg-black/5 mx-10 hidden md:block" />
          <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#A78BFA] font-serif-en">
            Explore All <ChevronRight size={16} />
          </button>
        </div>

        <div className="bento-grid">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              onClick={() => setView('category')}
              className={`bento-item-${cat.size} bg-white rounded-[2.5rem] p-10 flex flex-col justify-between border border-black/5 hover:shadow-2xl hover:shadow-purple-500/10 transition-all group cursor-pointer relative overflow-hidden`}
            >
              <div className="absolute inset-0 z-0 opacity-[0.08] group-hover:opacity-20 transition-opacity duration-700">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-0" />

              <div className="relative z-10 w-12 h-12 bg-[#F8F7FF] text-[#A78BFA] rounded-2xl flex items-center justify-center group-hover:bg-[#A78BFA] group-hover:text-white transition-all">
                {cat.icon}
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-serif-kr font-bold mb-2">{cat.name}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 font-sans">{cat.count} Artifacts</p>
              </div>
            </motion.div>
          ))}
          <div className="bento-item-medium bg-[#A78BFA] rounded-[2.5rem] p-10 text-white flex flex-col justify-center text-center relative overflow-hidden group">
             <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-1000">
                <img src={heroImg} className="w-full h-full object-cover" />
             </div>
             <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4 opacity-60">Purple Insight</span>
                <h3 className="text-3xl font-serif-kr font-bold italic leading-tight">몰입은 당신의 영감을 <br /> 깨우는 가장 큰 힘입니다.</h3>
             </div>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section className="py-40 bg-black text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-1/2">
              <span className="text-[#A78BFA] text-xs font-bold uppercase tracking-[0.4em] mb-8 block">Selected Work</span>
              <h3 className="text-6xl md:text-8xl font-serif-kr font-bold leading-tight mb-12 tracking-tighter">
                지식의 에테르, <br /> <span className="text-[#A78BFA]">디자인</span>으로 흐르다
              </h3>
              <p className="text-xl opacity-60 font-serif-kr leading-relaxed mb-12 max-w-lg">
                연보라색이 주는 심리적 안정감과 창의적 영감을 통해 디지털 환경에서의 새로운 독서 경험을 정의합니다.
              </p>
              <button 
                onClick={() => window.location.href = '/template/archiv/detail'}
                className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest bg-[#A78BFA] text-white px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all font-serif-en"
              >
                Read Journal
                <ArrowUpRight size={20} />
              </button>
            </div>
            <div className="w-full lg:w-1/2">
               <img src={journalImg} alt="Journal" className="w-full rounded-[3rem] shadow-2xl border border-white/10" />
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const CategoryView = () => (
    <div className="pt-40 pb-40 container mx-auto px-6 max-w-7xl">
      <button onClick={() => setView('landing')} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-40 hover:opacity-100 mb-20">
        <ArrowLeft size={18} /> Back to Archive
      </button>
      <div className="mb-32">
        <div className="w-16 h-16 bg-[#A78BFA] text-white rounded-[1.5rem] flex items-center justify-center mb-8">
          <BookOpen size={32} />
        </div>
        <h1 className="text-6xl md:text-8xl font-serif-en font-bold leading-none mb-8 tracking-tighter">
          Philosophy <br /> <span className="italic font-normal text-[#A78BFA]">Clusters.</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="group cursor-pointer" onClick={() => window.location.href = '/template/archiv/detail'}>
            <div className="aspect-[4/3] bg-black/5 rounded-[2.5rem] overflow-hidden mb-8">
              <img src={journalImg} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <h3 className="text-2xl font-serif-kr font-bold mb-4">Philosophy Artifact {i}</h3>
            <p className="text-xs opacity-30 uppercase tracking-widest font-bold">10 min read · 1.2k reads</p>
          </div>
        ))}
      </div>
    </div>
  );

  const AuthView = () => (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-[1000px] bg-white rounded-[3rem] shadow-2xl flex overflow-hidden border border-black/5">
        <div className="hidden lg:flex w-1/2 bg-black text-white p-20 flex-col justify-between">
          <h2 className="text-3xl font-serif-en font-bold text-[#A78BFA]">Archiv.</h2>
          <h3 className="text-6xl font-serif-en font-bold italic">Quiet <br /> Minds, <br /> Deep <br /> Insights.</h3>
          <button onClick={() => setView('landing')} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-40 hover:opacity-100">
            <ArrowLeft size={16} /> Home
          </button>
        </div>
        <div className="w-full lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
          <h4 className="text-4xl font-serif-en font-bold mb-8">{authMode === 'login' ? 'Sign In' : 'Join Us'}</h4>
          <form className="space-y-6">
            <input type="email" placeholder="Email" className="w-full bg-black/5 border-b border-black/10 py-4 px-6 text-sm focus:outline-none" />
            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full bg-black/5 border-b border-black/10 py-4 px-6 text-sm focus:outline-none" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20 hover:opacity-100">
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <button className="w-full bg-black text-white py-6 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-[#A78BFA] transition-all shadow-xl mt-10">
              {authMode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Social Auth with Code icon for Compatibility */}
          <div className="flex items-center gap-4 my-10">
            <div className="h-[1px] flex-1 bg-black/5" />
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-20">or</span>
            <div className="h-[1px] flex-1 bg-black/5" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 border border-black/5 rounded-2xl hover:bg-black/5 transition-all">
              <Code size={18} /> <span className="text-[10px] font-bold uppercase tracking-widest">Github</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-4 border border-black/5 rounded-2xl hover:bg-black/5 transition-all">
              <Globe size={18} /> <span className="text-[10px] font-bold uppercase tracking-widest">Google</span>
            </button>
          </div>

          <p className="mt-12 text-center text-xs opacity-40">
            {authMode === 'login' ? "New here?" : "Member?"}
            <button onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')} className="ml-2 font-bold text-[#A78BFA] underline">
              {authMode === 'login' ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8F7FF] text-black font-sans selection:bg-[#A78BFA] selection:text-white relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;600&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;600&display=swap');
        .font-serif-en { font-family: 'Playfair Display', serif; }
        .font-serif-kr { font-family: 'Noto Serif KR', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .bento-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 200px; gap: 20px; }
        .bento-item-large { grid-column: span 2; grid-row: span 2; }
        .bento-item-medium { grid-column: span 2; grid-row: span 1; }
        .bento-item-small { grid-column: span 1; grid-row: span 1; }
        @media (max-width: 768px) { .bento-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>

      {/* Navigation */}
      {view !== 'auth' && (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl px-8 py-4 bg-white/40 backdrop-blur-2xl border border-white/20 rounded-full flex justify-between items-center shadow-xl shadow-purple-500/5">
          <div onClick={() => setView('landing')} className="text-xl font-serif-en font-bold tracking-tighter text-[#7C3AED] cursor-pointer">Archiv</div>
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] opacity-50 font-serif-en">
            <a href="#" className="hover:text-[#A78BFA]">Journal</a>
            <a href="#" className="hover:text-[#A78BFA]">Directory</a>
            <a href="#" className="hover:text-[#A78BFA]">Community</a>
          </div>
          <button onClick={() => setView('auth')} className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-6 py-2 rounded-full hover:bg-[#A78BFA] transition-all">Sign In</button>
        </nav>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {view === 'landing' && <LandingView />}
          {view === 'category' && <CategoryView />}
          {view === 'auth' && <AuthView />}
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      {view !== 'auth' && (
        <footer className="py-40 bg-white text-black border-t border-black/5">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-20">
            <div className="max-w-md">
              <h2 className="text-5xl font-serif-kr font-bold tracking-tighter mb-8 text-[#7C3AED]">아카이브.</h2>
              <p className="text-xs opacity-30 leading-relaxed font-bold uppercase tracking-widest font-serif-kr">
                현대인을 위한 고요한 지식의 안식처. <br /> 정보가 통찰이 되는 프리미엄 지식 포털입니다.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-32 font-serif-en text-[10px] font-bold uppercase tracking-widest">
              <div className="flex flex-col gap-6">
                <span className="opacity-30">Structure</span>
                <a href="#" className="hover:text-[#A78BFA]">Journal</a>
                <a href="#" className="hover:text-[#A78BFA]">Directory</a>
              </div>
              <div className="flex flex-col gap-6">
                <span className="opacity-30">Platform</span>
                <a href="#" className="hover:text-[#A78BFA]">Manifesto</a>
                <a href="#" className="hover:text-[#A78BFA]">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default ArchivTemplate;
