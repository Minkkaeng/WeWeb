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
    <div className="kn-container py-24">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-[#002D5A] mb-4">NOTICE</h2>
        <p className="text-gray-500">K-Nexus의 새로운 소식과 주요 공지사항을 확인하세요.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-[#E1E8ED] overflow-hidden">
        <div className="grid grid-cols-[100px_1fr_150px_120px] bg-[#F8FAFC] p-6 border-b border-[#E1E8ED] text-sm font-bold text-[#00508C]">
          <div className="text-center">번호</div>
          <div>제목</div>
          <div className="text-center">작성자</div>
          <div className="text-center">등록일</div>
        </div>

        {NOTICE_DATA.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ backgroundColor: '#F1F5F9' }}
            onClick={() => onDetail(item.id)}
            className="grid grid-cols-[100px_1fr_150px_120px] p-6 border-b border-[#F1F5F9] last:border-0 cursor-pointer transition-colors"
          >
            <div className="text-center text-gray-400 text-sm">{item.id}</div>
            <div className="flex items-center gap-3">
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                item.category === '공고' ? 'bg-blue-100 text-blue-600' : 
                item.category === '안내' ? 'bg-gray-100 text-gray-600' : 'bg-green-100 text-green-600'
              }`}>{item.category}</span>
              <span className="text-gray-900 font-medium hover:text-[#00508C]">{item.title}</span>
            </div>
            <div className="text-center text-gray-500 text-sm">{item.author}</div>
            <div className="text-center text-gray-400 text-sm">{item.date}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center gap-2">
        {[1, 2, 3].map(p => (
          <button key={p} className={`w-10 h-10 rounded-lg border font-bold text-sm ${
            p === 1 ? 'bg-[#00508C] text-white border-[#00508C]' : 'bg-white text-gray-400 border-gray-200'
          }`}>{p}</button>
        ))}
      </div>
    </div>
  );
}
