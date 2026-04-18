import React from 'react';
import { Shield, Search, Menu } from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: 'home' | 'list' | 'view' | 'briefing' | 'news' | 'community') => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 w-full z-[1000]">
      {/* 🔝 Utility Top Bar - 숨김/표시 최적화 */}
      <div className="w-full bg-[#001D3D] text-[#A0B0C0] py-2 border-b border-white/5 hidden md:block">
        <div className="km-container flex justify-end items-center gap-6 text-[11px] font-bold uppercase tracking-wider">
          <button className="hover:text-white transition-colors">로그인</button>
          <button className="hover:text-white transition-colors">회원가입</button>
          <button className="hover:text-white transition-colors">사이트맵</button>
          <div className="h-3 w-[1px] bg-white/10"></div>
          <button className="hover:text-white transition-colors flex items-center gap-1">
            English
          </button>
        </div>
      </div>

      {/* 🧭 Main Header */}
      <header className="w-full bg-white border-b border-gray-100 h-16 md:h-20 flex items-center shadow-sm">
        <div className="km-container flex items-center justify-between gap-4">
          {/* Logo */}
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 cursor-pointer group flex-shrink-0"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#002758] rounded-lg md:rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-105">
              <Shield size={18} className="md:w-[22px]" fill="currentColor" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base md:text-xl font-black text-[#002758] tracking-tighter">국민25시</span>
              <span className="text-[8px] md:text-[10px] font-bold text-gray-400 tracking-widest uppercase">Kookmin 25</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {[
              { label: '정책브리핑', view: 'briefing' },
              { label: '분야별소식', view: 'news' },
              { label: '국민소통', view: 'community' },
              { label: '자료실', view: 'list' }
            ].map((item) => (
              <button 
                key={item.label}
                onClick={() => onNavigate(item.view as any)}
                className="text-sm xl:text-[15px] font-bold text-[#002758] hover:text-[#0055A4] transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E63946] transition-all group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 md:gap-4">
            <button className="p-2 text-gray-500 hover:text-[#002758] transition-colors" aria-label="검색">
              <Search size={20} className="md:w-[22px]" />
            </button>
            <div className="h-6 w-[1px] bg-gray-200 mx-1 hidden md:block"></div>
            <button className="lg:hidden p-2 text-gray-500 hover:bg-gray-50 rounded-lg">
              <Menu size={22} className="md:w-[24px]" />
            </button>
            <button className="hidden sm:flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 bg-[#002758] text-white text-[11px] md:text-[13px] font-black rounded-lg md:rounded-xl hover:bg-[#0055A4] transition-all shadow-md shadow-blue-900/10 whitespace-nowrap">
              사용자 가이드
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
