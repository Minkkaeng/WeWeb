import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@framework/utils';
import '@packages/ui'; // Web Components 등록
import theme from './theme-config.json';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Cart from './pages/Cart';

const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');

    :root {
      --primary: ${theme.colors.primary};
      --secondary: ${theme.colors.secondary};
      --background: ${theme.colors.background};
      --surface: ${theme.colors.surface};
      --text-primary: ${theme.colors.text.primary};
      --text-secondary: ${theme.colors.text.secondary};
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
      font-family: 'Pretendard', sans-serif;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    /* Custom Ticker Style */
    .ticker-container {
      background-color: var(--secondary);
      color: #121212;
      overflow: hidden;
      white-space: nowrap;
      padding: 12px 0;
      font-weight: 900;
      font-size: 14px;
      letter-spacing: 0.1em;
    }

    .ticker-content {
      display: inline-block;
      animation: ticker 20s linear infinite;
    }

    @keyframes ticker {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `}} />
);

export default function LeafLineTemplate() {
  const [currentPage, setCurrentPage] = useState<'home' | 'shop' | 'login' | 'cart'>('home');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navLinks = [
    { label: 'ARCHIVE', value: 'shop' },
    { label: 'LOOKBOOK', value: 'home' },
    { label: 'JOURNAL', value: 'home' },
    { label: 'ACCOUNT', value: 'login' },
  ];

  return (
    <div className="leaf-line-template min-h-screen flex flex-col bg-white">
      <GlobalStyles />
      
      {/* 1. Header (GNB) */}
      <nav className="sticky top-0 left-0 w-full bg-white/80 backdrop-blur-md z-[1000] border-b border-gray-100">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center py-5 px-6 md:px-12">
          {/* Logo */}
          <div 
            onClick={() => setCurrentPage('home')}
            className="text-2xl font-black tracking-tighter cursor-pointer text-[#004D40]"
          >
            LEAF <span className="text-[#E6FF00]">&</span> LINE
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <button 
                key={link.label}
                onClick={() => setCurrentPage(link.value as any)}
                className="relative group text-[11px] font-bold tracking-[0.2em] text-[#121212] bg-transparent border-none cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E6FF00] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            {/* Cart Trigger */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="bg-transparent border-none cursor-pointer p-2 relative group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#004D40] transition-colors">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E6FF00] text-[#121212] text-[8px] font-black flex items-center justify-center rounded-full shadow-sm">
                3
              </span>
            </button>
          </div>

          {/* Mobile Menu Trigger (Optional, but bottom nav is better) */}
          <div className="md:hidden flex items-center gap-4">
             <button onClick={() => setIsCartOpen(true)} className="relative bg-transparent border-none">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E6FF00] text-[#121212] text-[8px] font-black flex items-center justify-center rounded-full">3</span>
             </button>
          </div>
        </div>
      </nav>

      {/* 2. Floating Ticker Banner (Hidden on very small mobile if needed, but kept for vibe) */}
      <div className="ticker-container sticky top-[73px] z-[999] border-b border-[#121212]/5">
        <div className="ticker-content py-2">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 text-[11px] md:text-sm">
              NEW ARRIVALS / URBAN GREENHOUSE / SPRING SUMMER 2026 / SUSTAINABLE STREETWEAR /
            </span>
          ))}
        </div>
      </div>

      {/* 3. Main Content (Added bottom padding for mobile nav) */}
      <main className="flex-grow pb-20 md:pb-0">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Home onShopNow={() => setCurrentPage('shop')} />
            </motion.div>
          )}
          {currentPage === 'shop' && (
            <motion.div
              key="shop"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Shop />
            </motion.div>
          )}
          {currentPage === 'login' && (
            <motion.div
              key="login"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Login />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 4. Cart Drawer (Overlay) */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* 5. Mobile Bottom Navigation (App Style) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-gray-100 px-6 py-3 flex justify-between items-center z-[2000] pb-safe">
        {[
          { label: 'HOME', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>, value: 'home' },
          { label: 'SHOP', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>, value: 'shop' },
          { label: 'CART', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>, value: 'cart' },
          { label: 'MY', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>, value: 'login' }
        ].map((nav) => (
          <button 
            key={nav.label}
            onClick={() => nav.value === 'cart' ? setIsCartOpen(true) : setCurrentPage(nav.value as any)}
            className={cn(
              "flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer",
              (currentPage === nav.value && nav.value !== 'cart') ? "text-[#004D40]" : "text-gray-400"
            )}
          >
            {nav.icon}
            <span className="text-[9px] font-black tracking-widest">{nav.label}</span>
          </button>
        ))}
      </div>

      {/* 6. Footer (Hidden on mobile to emphasize app feel, or simplified) */}
      <footer className="hidden md:block py-20 px-6 md:px-12 bg-[#F9F9F9] border-t border-gray-100">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="text-2xl font-black tracking-tighter text-[#004D40] mb-6">
              LEAF & LINE
            </div>
            <p className="max-w-md text-sm text-gray-500 leading-relaxed font-medium">
              도시의 소음 속에서 자연의 리듬을 찾습니다. <br/>
              지속 가능한 소재와 현대적인 실루엣이 만나는 곳, 어반 그린하우스입니다.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] font-black tracking-widest text-gray-400 mb-6 uppercase">Legal</h4>
            <ul className="list-none p-0 space-y-3">
              {['Terms of Service', 'Privacy Policy', 'Shipping Info'].map(item => (
                <li key={item} className="text-[13px] font-bold text-[#121212] cursor-pointer hover:text-[#004D40] transition-colors">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black tracking-widest text-gray-400 mb-6 uppercase">Connect</h4>
            <ul className="list-none p-0 space-y-3">
              {['Instagram', 'Pinterest', 'YouTube'].map(item => (
                <li key={item} className="text-[13px] font-bold text-[#121212] cursor-pointer hover:text-[#004D40] transition-colors">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            &copy; 2026 LEAF & LINE STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] font-bold text-[#004D40]">KOREA (KST)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
