import React from 'react';
import config from '../theme-config.json';

export default function Header({ onNavigate }: { onNavigate: (v: 'home' | 'notice') => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[1000] border-b border-gray-100 bg-white/95 backdrop-blur-md">
      {/* 🏛️ Top Utility Bar (Small) */}
      <div className="w-full bg-[#001D3D] py-1.5 hidden md:block border-b border-white/5">
        <div className="kn-container flex justify-end gap-6 text-[10px] font-bold text-white/50 uppercase tracking-widest">
           <button className="hover:text-white transition-colors">LOGIN</button>
           <button className="hover:text-white transition-colors">ACCOUNT</button>
           <button className="hover:text-white transition-colors">SITEMAP</button>
           <button className="hover:text-white transition-colors">EN</button>
        </div>
      </div>

      <div className="kn-container h-20 md:h-24 flex items-center justify-between gap-8">
        <div 
          className="flex items-center gap-3 md:gap-4 cursor-pointer group flex-shrink-0"
          onClick={() => onNavigate('home')}
        >
          {/* Symbol Based on Generated Image Concept */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#002758] flex items-center justify-center overflow-hidden shadow-xl p-1 group-hover:bg-[#00508C] transition-all">
             <div className="w-full h-full border-2 border-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl italic tracking-tighter">KN</span>
             </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg md:text-2xl font-black tracking-tighter text-[#002758] leading-none">K-NEXUS</h1>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-black text-blue-500/60 mt-1">Global Research Portal</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
          {[
            { label: '연구사업', view: 'home' },
            { label: '정책지원', view: 'home' },
            { label: '글로벌 협력', view: 'home' },
            { label: '알림마당', view: 'notice' }
          ].map((item) => (
            <button 
              key={item.label}
              onClick={() => onNavigate(item.view as any)} 
              className="text-[15px] font-black text-gray-700 hover:text-[#002758] transition-colors relative py-2 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#002758] rounded-full transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:block p-2 text-gray-400 hover:text-[#002758] transition-colors border border-transparent hover:border-gray-100 rounded-lg">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          <button className="lg:hidden p-2 text-gray-600">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
          <button className="hidden sm:block kn-button-primary bg-[#002758] hover:bg-[#001D3D] shadow-xl shadow-blue-900/10 px-6 py-3 rounded-xl font-black text-xs tracking-widest uppercase">
             Portal Login
          </button>
        </div>
      </div>
    </header>
  );
}
