import React from 'react';
import config from '../theme-config.json';

export default function Header({ onNavigate }: { onNavigate: (v: 'home' | 'notice') => void }) {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all bg-white/90 backdrop-blur-md border-b border-[#E1E8ED]">
      <div className="kn-container h-24 flex items-center justify-between">
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          {/* Symbol Based on Generated Image Concept */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00508C] to-[#00A9E0] flex items-center justify-center overflow-hidden shadow-lg p-1 group-hover:scale-110 transition-transform">
             <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                <span className="text-white font-bold text-xl">K</span>
             </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight text-[#00508C]">K-NEXUS</h1>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400">Global Career Hub</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <button onClick={() => onNavigate('home')} className="text-sm font-semibold text-gray-600 hover:text-[#00508C] transition-colors relative group py-2">CAREER DNA</button>
          <button onClick={() => onNavigate('home')} className="text-sm font-semibold text-gray-600 hover:text-[#00508C] transition-colors relative group py-2">NETWORKING</button>
          <button onClick={() => onNavigate('notice')} className="text-sm font-semibold text-gray-600 hover:text-[#00508C] transition-colors relative group py-2 font-bold">INSIGHTS (NOTICE)</button>
          <button onClick={() => onNavigate('home')} className="text-sm font-semibold text-gray-600 hover:text-[#00508C] transition-colors relative group py-2">GOV-CONNECT</button>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-sm font-bold text-[#00508C] px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors">LOGIN</button>
          <button className="kn-button-primary shadow-lg shadow-blue-900/10">JOIN NOW</button>
        </div>
      </div>
    </header>
  );
}
