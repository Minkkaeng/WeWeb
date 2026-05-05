import React from 'react';
import Sidebar from './components/Sidebar';
import Ticker from './components/Ticker';
import Home from './pages/Home';

// 실험적인 변색 및 레이아웃을 테스트하기 위한 갤러리 컴포넌트
export default function Gallery() {
  return (
    <div className="w-full bg-slate-900 min-h-screen p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-white border-b border-white/10 pb-10">
          <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter">Design Lab: PICK 2.0</h1>
          <p className="text-slate-400">Creative Reconstruction & Component Isolation Test</p>
        </header>

        {/* 1. 사이드바 변주 테스트 (Floating & Glass) */}
        <div className="mb-32">
          <h2 className="text-white text-sm font-bold opacity-30 uppercase tracking-[0.4em] mb-10">01. Sidebar Variation</h2>
          <div className="relative h-[600px] w-full bg-slate-800 rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/10"></div>
             {/* 실제로 사이드바가 어떻게 비치는지 확인 (임시 렌더링) */}
             <div className="absolute left-10 top-10 bottom-10">
                <div className="h-full w-[350px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-8 shadow-2xl">
                   <div className="text-[60px] font-black text-white leading-none tracking-tighter uppercase mb-20">
                     GLASS<br/>BRUTAL
                   </div>
                   <div className="space-y-6">
                      {['COLLECTION', 'ARCHIVE', 'STUDIO'].map(t => (
                        <div key={t} className="text-2xl font-black text-white/40 border-b border-white/10 pb-4 hover:text-white transition-colors cursor-pointer">{t}</div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* 2. 컬러 팔레트 & 타이포그래피 실험 */}
        <div className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-10">
           <div>
             <h2 className="text-white text-sm font-bold opacity-30 uppercase tracking-[0.4em] mb-10">02. Texture & Color</h2>
             <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-[#f3e9dc] rounded-2xl flex items-center justify-center font-bold">Beige</div>
                <div className="aspect-square bg-[#be3127] rounded-2xl flex items-center justify-center font-bold text-white">Red</div>
                <div className="aspect-square bg-[#1a1a1a] rounded-2xl flex items-center justify-center font-bold text-white">Charcoal</div>
             </div>
           </div>
           <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
              <h2 className="text-white text-sm font-bold opacity-30 uppercase tracking-[0.4em] mb-10">03. Typography Masking</h2>
              <div className="relative inline-block">
                <h3 className="text-[80px] font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20 uppercase leading-none tracking-tighter">
                  MASKED
                </h3>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
