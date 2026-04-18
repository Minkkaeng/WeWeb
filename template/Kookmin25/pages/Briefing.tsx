import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, ChevronRight, BarChart3, Globe } from 'lucide-react';

export default function Briefing() {
  return (
    <div className="py-24 bg-white">
      <div className="km-container">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
             <span className="km-badge mb-4">POLICY BRIEFING</span>
             <h2 className="km-section-title">정책브리핑</h2>
             <p className="text-gray-500 font-medium max-w-xl">국민의 삶을 바꾸는 정부의 주요 정책 현안과 브리핑 내용을 투명하게 공개합니다.</p>
          </div>
          <div className="flex bg-[#F4F7F9] p-1 rounded-xl">
            <button className="px-6 py-2.5 bg-white text-[#002758] font-black rounded-lg shadow-sm">최신순</button>
            <button className="px-6 py-2.5 text-gray-400 font-bold hover:text-gray-600 transition-colors">주제별</button>
          </div>
        </div>

        {/* Highlight Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1541872703-74c5e443d1f9?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Main Briefing"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002758] via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 text-white">
              <span className="px-3 py-1 bg-[#E63946] text-[10px] font-black rounded mb-4 inline-block">LIVE BRIEFING</span>
              <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">2026 국가 전략 산업<br/>육성 방안 합동 브리핑</h3>
              <div className="flex items-center gap-6 text-sm text-white/70 font-bold">
                 <span className="flex items-center gap-1"><Calendar size={16} /> 2026.04.18</span>
                 <span className="flex items-center gap-1"><MessageSquare size={16} /> 245 Comments</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-8 bg-[#0055A4] text-white rounded-3xl h-full flex flex-col justify-between">
              <div>
                <BarChart3 size={48} className="mb-8 text-white/30" />
                <h4 className="text-2xl font-black mb-4 leading-tight">데이터로 보는<br/>대한민국 정책 효과</h4>
                <p className="text-white/60 text-sm font-medium leading-relaxed">지난 3년간 추진된 주거 지원 정책으로 전국 무주택 가구의 15%가 실질적 혜택을 입었습니다.</p>
              </div>
              <button className="w-full py-4 bg-white/10 hover:bg-white/20 transition-colors rounded-xl font-bold flex items-center justify-center gap-2">
                리포트 다운로드 <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Small Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "탄소중립 로드맵 2030 수립", dept: "환경부", date: "2026.04.15", img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop" },
             { title: "디지털 교육 혁신 가이드라인", dept: "교육부", date: "2026.04.12", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1932&auto=format&fit=crop" },
             { title: "전통시장 디지털 전환 지원사업", dept: "중소벤처기업부", date: "2026.04.10", img: "https://images.unsplash.com/photo-1541872703-74c5e443d1f9?q=80&w=2070&auto=format&fit=crop" }
           ].map(item => (
             <div key={item.title} className="group cursor-pointer">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.title} />
                  <div className="absolute top-4 left-4">
                     <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-black text-[#002758] rounded shadow-sm">{item.dept}</span>
                  </div>
                </div>
                <h4 className="text-xl font-black text-[#002758] mb-2 group-hover:text-[#0055A4] transition-colors line-clamp-1">{item.title}</h4>
                <span className="text-sm font-medium text-gray-400">{item.date}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
