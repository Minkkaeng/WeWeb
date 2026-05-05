import React from 'react';

export default function Header({ onNavigate }: { onNavigate: (v: 'home' | 'notice') => void }) {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-gray-100 shadow-sm">
      <div className="eg-container h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform">
             <span className="text-white font-bold text-xl">B</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-gray-900 leading-tight">에버복지포털</h1>
            <span className="text-[10px] text-blue-600 font-bold tracking-widest uppercase">EverGov Social Welfare</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => onNavigate('home')} className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">사업안내</button>
          <button onClick={() => onNavigate('home')} className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">시설이용</button>
          <button onClick={() => onNavigate('notice')} className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors font-bold">공지사항</button>
          <button onClick={() => onNavigate('home')} className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">후원안내</button>
          <button onClick={() => onNavigate('home')} className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">기관소개</button>
        </nav>

        <div className="flex items-center gap-3">
          <button className="text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors px-3 py-2">로그인</button>
          <button className="eg-button-primary text-sm !px-5 !py-2.5">회원가입</button>
        </div>
      </div>
    </header>
  );
}
