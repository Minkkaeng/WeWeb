import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronLeft, ChevronRight, FileDown } from 'lucide-react';

interface ListProps {
  onView: (id: number) => void;
}

export default function List({ onView }: ListProps) {
  const dummyData = [
    { id: 10, category: "복지", title: "2026년 하반기 저소득층 에너지 바우처 지원 확대 안내", dept: "보건복지부", date: "2026.04.18", hits: 1240, status: "진행중" },
    { id: 9, category: "일자리", title: "청년 창업 초기 지원 프로그램 'K-Startup' 3기 모집 공고", dept: "중소벤처기업부", date: "2026.04.17", hits: 856, status: "진행중" },
    { id: 8, category: "주거", title: "수도권 공공 임대 주택 입주자 정기 모집 (행복주택 포함)", dept: "LH한국토지주택공사", date: "2026.04.16", hits: 3201, status: "마감임박" },
    { id: 7, category: "교육", title: "디지털 역량 강화 및 소프트웨어 교육 무상 바우처 지급", dept: "과학기술정보통신부", date: "2026.04.15", hits: 543, status: "상시" },
    { id: 6, category: "환경", title: "가정내 친환경 보일러 설치 지원금 신청 절차 안내", dept: "환경부", date: "2026.04.14", hits: 112, status: "상시" },
    { id: 5, category: "복지", title: "노인 맞춤 돌봄 서비스 수행 기관 선정 결과 공고", dept: "보건복지부", date: "2026.04.13", hits: 432, status: "마감" },
    { id: 4, category: "안전", title: "봄철 산불 예방 및 재난 문자 수신 설정 가이드 개정", dept: "행정안전부", date: "2026.04.12", hits: 765, status: "상시" },
    { id: 3, category: "기타", title: "국민25시 홈페이지 이용 만족도 설문조사 참여 안내", dept: "운영팀", date: "2026.04.10", hits: 231, status: "마감" }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="km-container">
        {/* Page Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-black text-[#002758] mb-4">공공 자료실 & 아카이브</h2>
          <p className="text-gray-500 font-medium">분야별 최신 정책 정보와 공공 데이터를 한 곳에서 확인하세요.</p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8 p-6 bg-[#F4F7F9] rounded-2xl">
          <div className="flex-1 relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="정책명, 부서명으로 검색하세요"
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0055A4] transition-all font-medium"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <select className="flex-1 md:w-40 px-4 py-3 bg-white border border-gray-100 rounded-xl font-bold text-gray-700 outline-none">
              <option>전체 상태</option>
              <option>진행중</option>
              <option>마감임박</option>
              <option>상시</option>
              <option>마감</option>
            </select>
            <button className="px-6 py-3 bg-[#002758] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-[#0055A4]">
              <Filter size={18} /> 필터적용
            </button>
          </div>
        </div>

        {/* List Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-y-2 border-[#002758] bg-[#F4F7F9]">
                <th className="py-5 px-4 text-sm font-black text-[#002758] w-16">번호</th>
                <th className="py-5 px-4 text-sm font-black text-[#002758] w-24 text-left">분야</th>
                <th className="py-5 px-4 text-sm font-black text-[#002758] text-left">제목</th>
                <th className="py-5 px-4 text-sm font-black text-[#002758] w-32">담당부서</th>
                <th className="py-5 px-4 text-sm font-black text-[#002758] w-28">등록일</th>
                <th className="py-5 px-4 text-sm font-black text-[#002758] w-20">조회</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item) => (
                <tr 
                  key={item.id}
                  onClick={() => onView(item.id)}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <td className="py-5 px-4 text-center text-gray-400 text-sm font-medium">{item.id}</td>
                  <td className="py-5 px-4">
                    <span className={`px-3 py-1 rounded-md text-[11px] font-black uppercase tracking-tighter ${
                      item.category === '복지' ? 'bg-red-50 text-red-600' :
                      item.category === '주거' ? 'bg-blue-50 text-blue-600' :
                      item.category === '일자리' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <span className="font-bold text-gray-800 line-clamp-1 group-hover:text-[#0055A4] group-hover:underline">
                        {item.title}
                      </span>
                      {item.status === '마감임박' && <span className="flex-shrink-0 text-[10px] font-black bg-[#E63946] text-white px-1.5 py-0.5 rounded italic animate-pulse">HOT</span>}
                    </div>
                  </td>
                  <td className="py-5 px-4 text-center text-sm font-bold text-gray-600">{item.dept}</td>
                  <td className="py-5 px-4 text-center text-sm font-medium text-gray-400">{item.date}</td>
                  <td className="py-5 px-4 text-center text-sm font-bold text-gray-500">{item.hits.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Mockup */}
        <div className="mt-12 flex justify-center items-center gap-2">
          <button className="p-2 border border-gray-200 rounded-lg text-gray-400 disabled:opacity-30" disabled><ChevronLeft size={20} /></button>
          {[1, 2, 3, 4, 5].map(p => (
            <button key={p} className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${p === 1 ? 'bg-[#002758] text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'}`}>{p}</button>
          ))}
          <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:bg-gray-50"><ChevronRight size={20} /></button>
        </div>
      </div>
    </div>
  );
}
