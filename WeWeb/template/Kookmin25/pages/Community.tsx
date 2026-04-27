import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, ThumbsUp, HelpCircle, PenTool, Search } from 'lucide-react';

export default function Community() {
  const posts = [
    { title: "청년 주거 정책 지원금 실효성에 대해 제안합니다.", user: "국민***", date: "3시간 전", views: 124, likes: 45, category: "제안" },
    { title: "강릉 지역 폭설 피해 복구 지원금 신청 후기입니다.", user: "행복***", date: "5시간 전", views: 256, likes: 12, category: "소통" },
    { title: "국민25시 모바일 앱 사용 방법이 궁금합니다.", user: "질문***", date: "Yesterday", views: 56, likes: 2, category: "질문" },
    { title: "우리 동네 복지 지도 서비스 너무 편리하네요!", user: "감사***", date: "Yesterday", views: 89, likes: 23, category: "소통" }
  ];

  return (
    <div className="py-24 bg-[#F4F7F9]">
      <div className="km-container flex flex-col lg:flex-row gap-8 xl:gap-14">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
             <div>
                <span className="km-badge mb-4">PUBLIC COMMUNICATION</span>
                <h2 className="km-section-title mb-0">국민소통</h2>
             </div>
             <button className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#002758] text-white rounded-2xl font-bold hover:bg-[#0055A4] transition-all shadow-lg shadow-blue-900/10 whitespace-nowrap">
                <PenTool size={18} /> 국민 제안하기
             </button>
          </div>

          <div className="bg-white rounded-[32px] p-2 sm:p-4 shadow-sm border border-gray-100 overflow-hidden">
             {posts.map((post, idx) => (
               <div 
                 key={idx}
                 className={`p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-gray-50 transition-colors cursor-pointer group ${idx !== posts.length - 1 ? 'border-b border-gray-100' : ''}`}
               >
                 <div className="flex items-start gap-5 flex-1 min-w-0">
                    <span className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-tighter shadow-sm ${
                      post.category === '제안' ? 'bg-orange-50 text-orange-600' :
                      post.category === '질문' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
                    }`}>
                      {post.category}
                    </span>
                    <div className="flex flex-col min-w-0">
                      <h4 className="font-bold text-gray-800 truncate group-hover:text-[#002758] mb-1.5 transition-colors">{post.title}</h4>
                      <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                         <span className="text-gray-500">{post.user}</span>
                         <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                         <span>{post.date}</span>
                      </div>
                    </div>
                 </div>
                 <div className="flex items-center gap-6 text-gray-400 border-t md:border-t-0 pt-4 md:pt-0">
                    <div className="flex items-center gap-1.5 hover:text-orange-500 transition-colors"><ThumbsUp size={16} /> <span className="text-sm font-bold">{post.likes}</span></div>
                    <div className="flex items-center gap-1.5 hover:text-blue-500 transition-colors"><MessageSquare size={16} /> <span className="text-sm font-bold">8</span></div>
                 </div>
               </div>
             ))}
          </div>

          <div className="mt-12 flex justify-center">
             <button className="px-10 py-4 bg-white border border-gray-100 text-gray-500 font-bold rounded-2xl hover:bg-gray-50 transition-all text-sm shadow-sm">
                게시글 더보기 (1/12)
             </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[320px] xl:w-[360px] space-y-8">
           <div className="bg-[#002758] rounded-[40px] p-10 text-white relative overflow-hidden group shadow-2xl shadow-blue-900/20">
              <Users size={120} className="absolute -bottom-6 -right-6 text-white/5 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-4">실시간 인기 제안</h4>
                <p className="text-white/50 text-[10px] font-black leading-relaxed mb-10 uppercase tracking-[0.2em]">Most Popular Today</p>
                <div className="space-y-6">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="flex gap-4 group/item cursor-pointer">
                        <span className="text-xl font-black text-[#00A9E0] italic opacity-80 group-hover/item:opacity-100">0{i}</span>
                        <p className="text-xs font-bold leading-relaxed group-hover/item:underline line-clamp-2">디지털 바우처 지원 대상의 연령대를 65세 이상으로 확대하는 방안</p>
                     </div>
                   ))}
                </div>
              </div>
           </div>

           <div className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm transition-shadow hover:shadow-xl">
              <div className="flex items-center justify-between mb-8">
                 <h4 className="text-lg font-black text-gray-800">소통 도움말</h4>
                 <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
                    <HelpCircle size={18} />
                 </div>
              </div>
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input placeholder="키워드 검색" className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl text-xs font-bold outline-none border border-transparent focus:border-gray-200 focus:bg-white transition-all" />
              </div>
              <div className="flex flex-wrap gap-2">
                 {['글쓰기 가이드', '개인정보 보호', '운영정책', '커뮤니티 수칙'].map(t => (
                   <span key={t} className="px-4 py-2 bg-gray-50 text-[10px] font-black text-gray-500 rounded-lg hover:bg-[#002758] hover:text-white cursor-pointer transition-all">{t}</span>
                 ))}
              </div>
           </div>
        </div>
       </div>
    </div>
  );
}
