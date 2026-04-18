import React from 'react';
import { motion } from 'framer-motion';

export default function NoticeDetail({ id, onBack }: { id: number, onBack: () => void }) {
  return (
    <div className="kn-container py-24">
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="mb-10 text-[#00508C] font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
      >
        ← 목록으로 돌아가기
      </motion.button>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#E1E8ED]">
        <div className="p-12 border-b border-[#F1F5F9]">
          <span className="text-[#00A9E0] font-bold text-sm mb-4 block">공고 # {id}</span>
          <h2 className="text-4xl font-bold text-[#002D5A] mb-8 leading-tight">2026년 상반기 글로벌 연구 네트워크 지원 사업 공고</h2>
          <div className="flex items-center gap-8 text-sm text-gray-400 border-t border-[#F1F5F9] pt-8">
            <div className="flex items-center gap-2">
               <span className="font-bold text-gray-600">작성자</span> <span>운영지원팀</span>
            </div>
            <div className="flex items-center gap-2">
               <span className="font-bold text-gray-600">등록일</span> <span>2026-04-18</span>
            </div>
            <div className="flex items-center gap-2">
               <span className="font-bold text-gray-600">조회수</span> <span>1,245</span>
            </div>
          </div>
        </div>

        <div className="p-12 text-gray-700 leading-[1.8] min-h-[400px]">
          <div className="bg-blue-50 p-8 rounded-2xl mb-10 border border-blue-100">
             <h4 className="font-bold text-[#00508C] mb-4">사업 개요</h4>
             <p className="text-sm">본 사업은 국내 전문가들의 글로벌 역량 강화 및 국제 공동 연구 활성화를 위해 K-Nexus가 지원하는 2026년 핵심 전략 사업입니다.</p>
          </div>
          
          <p className="mb-6">안녕하세요, K-Nexus 운영지원팀입니다.</p>
          <p className="mb-6">2026년 상반기 글로벌 연구 네트워크 지원 사업의 상세 모집 요강을 다음과 같이 공고하오니, 역량 있는 전문가 여러분의 많은 참여 바랍니다.</p>
          
          <h4 className="text-xl font-bold text-[#002D5A] mt-12 mb-6">1. 지원 자격</h4>
          <ul className="list-disc pl-5 mb-8 space-y-2">
            <li>K-Nexus 전문가 데이터베이스 등록 완료자</li>
            <li>최근 3년 이내 해외 공동 연구 수행 실적 보유자 (우대)</li>
            <li>관련 기술 분야 박사 학위 소지자 혹은 10년 이상의 실무 경력자</li>
          </ul>

          <h4 className="text-xl font-bold text-[#002D5A] mt-12 mb-6">2. 지원 내용</h4>
          <p className="mb-4">최대 5,000만원 규모의 연구 컨설팅 및 해외 네트워크 매칭 비용 지원</p>
        </div>

        <div className="p-12 bg-[#F8FAFC] border-t border-[#E1E8ED] flex justify-between items-center">
           <div className="flex gap-4">
              <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">이전글</button>
              <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">다음글</button>
           </div>
           <button className="kn-button-primary px-10">지원 신청하기</button>
        </div>
      </div>
    </div>
  );
}
