import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Share2, Printer, Download, User, Building2, Phone } from 'lucide-react';

interface ViewProps {
  id: number;
  onBack: () => void;
}

export default function View({ id, onBack }: ViewProps) {
  return (
    <div className="py-24 bg-white">
      <div className="km-container max-w-4xl">
        {/* Navigation / Actions */}
        <div className="flex items-center justify-between mb-12">
           <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-[#002758] font-bold transition-all group"
           >
             <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-gray-50">
               <ChevronLeft size={20} />
             </div>
             <span>다시 목록으로</span>
           </button>
           <div className="flex items-center gap-3">
              <button className="p-3 border border-gray-100 rounded-xl text-gray-400 hover:text-[#0055A4] transition-colors"><Share2 size={18} /></button>
              <button className="p-3 border border-gray-100 rounded-xl text-gray-400 hover:text-[#0055A4] transition-colors"><Printer size={18} /></button>
           </div>
        </div>

        {/* Content Header */}
        <div className="border-b-4 border-[#002758] pb-10 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-red-50 text-[#E63946] text-[11px] font-black rounded uppercase">복지</span>
            <span className="text-gray-300">|</span>
            <span className="text-sm font-bold text-gray-400">등록일: 2026.04.18</span>
            <span className="text-gray-300">|</span>
            <span className="text-sm font-bold text-gray-400">조회: 1,240</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#002758] leading-tight mb-8">
            2026년 하반기 저소득층 에너지 바우처 지원 확대 안내
          </h1>
          
          {/* Responsibility Info Box */}
          <div className="p-6 bg-[#F4F7F9] rounded-2xl flex flex-wrap gap-8 items-center">
            <div className="flex items-center gap-3">
               <Building2 size={18} className="text-[#0055A4]" />
               <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Department</span>
                  <span className="text-sm font-bold text-gray-700">보건복지부 기초생활보장과</span>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <User size={18} className="text-[#0055A4]" />
               <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Charger</span>
                  <span className="text-sm font-bold text-gray-700">이상윤 사무관</span>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <Phone size={18} className="text-[#0055A4]" />
               <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Contact</span>
                  <span className="text-sm font-bold text-gray-700">02-1234-5678</span>
               </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="prose prose-lg max-w-none mb-16 text-gray-700">
          <h3 className="text-2xl font-black text-[#002758] mb-6">1. 지원 배경 및 목적</h3>
          <p className="mb-10 leading-relaxed font-medium">
            최근 급격한 기온 변화와 에너지 가격 변동으로 인해 어려움을 겪는 에너지 취약계층의 부담을 완화하고, 기본적인 에너지 권리를 보장하기 위해 2026년 하반기 에너지 바우처 지원 규모를 대폭 확대합니다.
          </p>

          <h3 className="text-2xl font-black text-[#002758] mb-6">2. 주요 변경 사항</h3>
          <ul className="list-disc pl-6 space-y-4 mb-10 font-bold text-gray-800">
             <li>가구당 평균 지원 금액 10% 인상 (기존 19.5만원 → 21.5만원)</li>
             <li>지원 대상 소득 기준 완화 (중위소득 45% 이하 → 48% 이하 확대)</li>
             <li>동절기 바우처 사용 기간 1개월 연장 (3월 말 → 4월 말)</li>
          </ul>

          <div className="p-8 bg-[#FFF2F2] border-l-4 border-red-500 rounded-r-2xl mb-12">
             <h4 className="text-red-700 font-black mb-2">중요 안내사항</h4>
             <p className="text-red-600 text-sm font-bold">
               기존 수급자의 경우 별도의 신청 없이 자동 연장 처리되나, 가구원수나 주소지 등 변동사항이 있는 경우 반드시 6월 15일까지 관할 주민센터에 신고하셔야 합니다.
             </p>
          </div>
        </div>

        {/* Attachment Box */}
        <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-8 mb-16">
          <h4 className="text-sm font-black text-[#002758] mb-6 uppercase tracking-widest">첨부파일 다운로드 (2)</h4>
          <div className="space-y-3">
             {[
               { name: "2026_에너지바우처_신청가이드_국문.pdf", size: "1.2MB" },
               { name: "관련_법령_및_집행지침_개정안.zip", size: "4.5MB" }
             ].map(file => (
               <div key={file.name} className="flex items-center justify-between p-4 bg-white border border-gray-50 rounded-xl group hover:border-[#0055A4] transition-all">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                     <Download size={18} />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-sm font-bold text-gray-700 group-hover:text-[#0055A4] transition-colors">{file.name}</span>
                     <span className="text-[10px] text-gray-400 font-medium">{file.size}</span>
                   </div>
                 </div>
                 <button className="text-[11px] font-black text-[#0055A4] uppercase tracking-tighter hover:underline">Download</button>
               </div>
             ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-center gap-4 pt-10 border-t border-gray-100">
           <button 
            onClick={onBack}
            className="px-12 py-4 bg-[#002758] text-white rounded-xl font-bold hover:bg-[#0055A4] transition-all"
           >
             목록으로 돌아가기
           </button>
        </div>
      </div>
    </div>
  );
}
