import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[1000] bg-white/95 backdrop-blur-md border-b border-orange-50/50 shadow-sm">
      <div className="max-w-[1400px] mx-auto h-[90px] px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-12 h-12 bg-[#FF6600] rounded-2xl flex items-center justify-center text-white font-black text-xl italic shadow-lg shadow-orange-500/20">
            GN
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-black tracking-tight text-[#111] leading-none mb-1">Gov-Network</h1>
            <span className="text-[10px] text-[#FF6600] uppercase tracking-[0.2em] font-bold">Public Service Portal</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-12">
          {['행정네트워크', '공공솔루션', 'R&D', '글로벌 제휴', '고객참여'].map((item) => (
            <button key={item} className="text-[17px] font-bold text-gray-800 hover:text-[#FF6600] transition-colors relative group py-2">
              {item}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] rounded-full bg-[#FF6600] transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:text-[#FF6600] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          <button className="hidden sm:block text-[15px] font-bold text-white bg-[#FF6600] hover:bg-[#E65C00] px-7 py-3 rounded-full transition-colors shadow-lg shadow-orange-500/20">
            통합 로그인
          </button>
          <button className="lg:hidden p-2 text-gray-800">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
