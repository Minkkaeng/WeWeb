import React from 'react';
import { motion } from 'framer-motion';

const NOTICE_DATA = [
  { id: 5, title: '2026년 상반기 글로벌 연구 네트워크 지원 사업 공고', date: '2026-04-18', author: '운영지원팀', category: '공고' },
  { id: 4, title: '전문가 경력 데이터베이스 유지보수 안내 (4/20)', date: '2026-04-15', author: '시스템관리자', category: '안내' },
  { id: 3, title: '[보도자료] K-Nexus, 누적 연결 전문가 5만 명 돌파', date: '2026-04-10', author: '홍보팀', category: '보도' },
  { id: 2, title: '개인정보 처리방침 개정 및 시행 안내', date: '2026-04-01', author: '법무팀', category: '안내' },
  { id: 1, title: 'K-Nexus 정식 서비스 오픈 안내', date: '2026-03-20', author: '운영지원팀', category: '공고' },
];

export default function NoticeList({ onDetail }: { onDetail: (id: number) => void }) {
  return (
    <div className="kn-container py-20 md:py-28">
      <div className="mb-14 border-b-2 border-[#002758] pb-8">
        <h2 className="text-3xl md:text-5xl font-black text-[#002758] mb-4 tracking-tighter">알림마당</h2>
        <p className="text-gray-500 font-bold">K-Nexus의 새로운 소식과 주요 정책 공지사항을 확인하세요.</p>
      </div>

      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/5 border border-gray-100">
        <div className="hidden md:grid grid-cols-[80px_1fr_120px_150px_120px] bg-[#002758] p-6 text-xs font-black text-white uppercase tracking-widest">
          <div className="text-center">No.</div>
          <div className="px-4">제목</div>
          <div className="text-center">범주</div>
          <div className="text-center">담당부서</div>
          <div className="text-center">등록일</div>
        </div>

        {NOTICE_DATA.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ backgroundColor: '#F8FAFC' }}
            onClick={() => onDetail(item.id)}
            className="grid grid-cols-1 md:grid-cols-[80px_1fr_120px_150px_120px] p-6 md:p-8 border-b border-gray-50 last:border-0 cursor-pointer transition-colors group"
          >
            <div className="hidden md:flex items-center justify-center text-gray-300 font-bold text-sm group-hover:text-[#002758] transition-colors">{item.id}</div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 px-0 md:px-4">
               <span className="md:hidden block text-[10px] font-black text-blue-500 tracking-widest mb-1">{item.category}</span>
               <span className="text-gray-900 font-black text-lg group-hover:text-[#002758] transition-colors line-clamp-1">{item.title}</span>
            </div>
            <div className="hidden md:flex items-center justify-center">
               <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                 item.category === '공고' ? 'bg-blue-100 text-blue-600' : 
                 item.category === '안내' ? 'bg-gray-100 text-gray-600' : 'bg-emerald-100 text-emerald-600'
               }`}>{item.category}</span>
            </div>
            <div className="hidden md:flex items-center justify-center text-gray-500 font-bold text-sm tracking-tight">{item.author}</div>
            <div className="flex md:items-center md:justify-center text-gray-400 font-bold text-[13px] mt-3 md:mt-0 ml-0 md:ml-0">
               <span className="md:hidden mr-2">등록일:</span> {item.date}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center gap-3">
        {[1, 2, 3].map(p => (
          <button key={p} className={`w-12 h-12 rounded-2xl border-2 font-black text-sm transition-all ${
            p === 1 ? 'bg-[#002758] text-white border-[#002758] shadow-xl shadow-blue-900/20' : 'bg-white text-gray-300 border-gray-100 hover:border-gray-200 hover:text-gray-500'
          }`}>{p}</button>
        ))}
      </div>
    </div>
  );
}
