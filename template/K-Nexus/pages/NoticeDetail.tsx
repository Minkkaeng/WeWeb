import React from 'react';
import { motion } from 'framer-motion';

export default function NoticeDetail({ id, onBack }: { id: number, onBack: () => void }) {
  return (
    <div className="kn-container py-20 md:py-28">
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="mb-10 text-[#002758] font-black flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" x2="5" y1="12" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        목록으로 돌아가기
      </motion.button>

      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/10 overflow-hidden border border-gray-100 px-6 md:px-0">
        <div className="p-8 md:p-16 border-b border-gray-50 bg-[#F8FAFC]">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 font-black text-[11px] mb-8 uppercase tracking-widest">Notice #00{id}</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#002758] mb-10 leading-[1.2] tracking-tighter">2026년 상반기 글로벌 연구 네트워크 지원 사업 공고</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-gray-200">
            {[
              { label: '작성부서', value: '운영지원팀' },
              { label: '등록일자', value: '2026-04-18' },
              { label: '조회수', value: '1,245건' },
              { label: '담당자', value: '김연구 사무관' },
            ].map(meta => (
              <div key={meta.label}>
                 <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2">{meta.label}</p>
                 <p className="text-sm md:text-base font-black text-[#002758]">{meta.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 md:p-16 text-gray-700 leading-[1.8] min-h-[400px]">
          <div className="p-10 bg-blue-50/50 rounded-3xl mb-12 border-2 border-blue-100/50">
             <h4 className="text-xl font-black text-[#002758] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                사업 개요 및 목적
             </h4>
             <p className="text-[15px] font-medium leading-relaxed text-gray-600">본 사업은 국내 전문가들의 글로벌 역량 강화 및 국제 공동 연구 활성화를 위해 K-Nexus가 지원하는 2026년 핵심 전략 사업입니다. 데이터를 기반으로 최적의 글로벌 연구 파트너를 매칭하고 연구비를 지원합니다.</p>
          </div>
          
          <div className="space-y-12">
            <section>
              <h4 className="text-2xl font-black text-[#002758] mb-6 tracking-tight">1. 지원 자격 및 대상</h4>
              <ul className="space-y-4">
                 {[
                   'K-Nexus 전문가 데이터베이스(DB) 정식 등록 완료자',
                   '최근 3년 이내 해외 우수 학술지(SCI급) 논문 게재 실적 보유자',
                   '관련 기술 분야 박사 학위 소지자 혹은 15년 이상의 전문 경력자'
                 ].map((li, i) => (
                   <li key={i} className="flex items-start gap-3 font-bold text-gray-600">
                      <span className="text-blue-500 mt-1">•</span>
                      {li}
                   </li>
                 ))}
              </ul>
            </section>

            <section>
              <h4 className="text-2xl font-black text-[#002758] mb-6 tracking-tight">2. 세부 지원 내용</h4>
              <p className="bg-gray-50 p-6 rounded-2xl border border-gray-100 font-bold text-gray-700">
                - 연구 과제당 최대 <span className="text-blue-600">5,000만원</span> 내외 연구비 지원<br/>
                - 글로벌 연구 네트워크 매칭 및 컨설팅 5회 제공<br/>
                - 연구 성과 홍보 및 정책 연계 지원
              </p>
            </section>
          </div>
        </div>

        <div className="p-10 md:p-14 bg-[#F8FAFC] border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-8 py-4 bg-white border-2 border-gray-100 rounded-2xl text-[13px] font-black text-gray-400 hover:text-gray-600 hover:border-gray-200 transition-all">이전글</button>
              <button className="flex-1 md:flex-none px-8 py-4 bg-white border-2 border-gray-100 rounded-2xl text-[13px] font-black text-gray-400 hover:text-gray-600 hover:border-gray-200 transition-all">다음글</button>
           </div>
           <button className="w-full md:w-auto px-12 py-4 bg-[#002758] text-white rounded-2xl font-black tracking-widest uppercase text-sm hover:bg-[#001D3D] transition-all shadow-xl shadow-blue-900/20">
              연구지원 신청하기
           </button>
        </div>
      </div>
    </div>
  );
}
