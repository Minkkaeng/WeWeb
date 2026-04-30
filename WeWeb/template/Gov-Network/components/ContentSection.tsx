import React from 'react';
import { motion } from 'framer-motion';

export default function ContentSection() {
  const businesses = [
    { title: '행정 시스템', desc: '국민 중심의 통합 행정 시스템으로 더 높은 서비스 기준을 세웁니다.' },
    { title: '디지털 혁신', desc: '데이터를 근거로 한 첨단 기술로 국가 플랫폼의 미래를 설계합니다.' },
    { title: 'R&D 센터', desc: '행정을 넘어 차세대 헬스케어 및 복지 콘텐츠를 깊이 연구합니다.' },
    { title: '글로벌 사업', desc: '축적된 노하우를 세계 정부 네트워크와 공유하며 영역을 넓힙니다.' },
    { title: '민관 파트너십', desc: '다양한 공공/민간 부문과의 연결을 통해 시너지를 극대화합니다.' }
  ];

  const newsList = [
    { date: '26.04.18', category: '새소식', title: '[전국 최고 등급 달성] “찾았다, 진정한 서비스” 국민안심 행정망 단독 런칭!' },
    { date: '26.04.12', category: '보도자료', title: '민원인도 놀란 혁신적 접근! 민원 서류 처리 속도 전국 1위 달성 📈' },
    { date: '26.03.20', category: '공지사항', title: '[정책 지원] 민간 파트너십 구축, 유럽 주요 기관과 디지털 협약 체결' },
    { date: '25.12.01', category: '새소식', title: '(축) 🎉 보건복지부 지정 스마트 행정 우수 기관 연속 선정!' }
  ];

  return (
    <>
      <section className="py-32 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#FFF9F5] to-white pointer-events-none"></div>
        <div className="eg-container relative z-10">
          <div className="mb-20 text-center">
             <h3 className="text-[14px] font-black text-[#FF6600] uppercase tracking-[0.2em] mb-4">Our Expertise</h3>
             <h2 className="text-4xl md:text-5xl font-black text-[#111] leading-tight">
                지역에서 증명한 행정 혁신을 <br/>세계적 수준으로 이끌어갑니다.
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
             {businesses.map((item, idx) => (
                <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1, duration: 0.5 }}
                   className="eg-card p-10 group border-2 border-transparent hover:border-[#FF6600]/20 flex flex-col items-center text-center"
                >
                   <div className="w-16 h-16 rounded-[20px] bg-[#FFF0E5] mb-8 flex items-center justify-center group-hover:bg-[#FF6600] group-hover:scale-110 transition-all duration-300 shadow-md">
                      <span className="text-[#FF6600] text-2xl group-hover:text-white transition-colors">✦</span>
                   </div>
                   <h4 className="text-[19px] font-black text-[#111] mb-4 group-hover:text-[#FF6600] transition-colors">{item.title}</h4>
                   <p className="text-[14px] text-gray-500 leading-relaxed font-bold">
                      {item.desc}
                   </p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#FFF9F5] border-t border-[#FF6600]/10 border-b border-[#FF6600]/10">
        <div className="eg-container grid grid-cols-1 lg:grid-cols-2 gap-20">
           {/* News Section */}
           <div>
              <div className="flex items-end justify-between mb-10 pb-4">
                 <div>
                    <h2 className="text-4xl font-black text-[#111] mb-2">새 소식</h2>
                    <p className="text-gray-500 font-bold text-sm">Gov-Network의 즐거운 변화를 만나보세요</p>
                 </div>
                 <button className="flex items-center gap-2 font-bold text-[14px] text-gray-500 hover:text-[#FF6600] transition-colors bg-white px-5 py-2 rounded-full shadow-sm border border-orange-500/10">
                    전체보기 <span className="text-[#FF6600]">+</span>
                 </button>
              </div>
              <ul className="space-y-4">
                 {newsList.map((news, idx) => (
                    <li key={idx} className="bg-white rounded-3xl p-5 hover:shadow-[0_10px_30px_rgba(255,102,0,0.08)] transition-all cursor-pointer group border border-transparent hover:border-[#FF6600]/20">
                       <div className="flex items-center gap-3 mb-2">
                          <span className="text-[12px] px-3 py-1 bg-[#FF6600] text-white rounded-full font-bold">{news.category}</span>
                          <span className="text-[13px] font-extrabold text-gray-400">{news.date}</span>
                       </div>
                       <h3 className="text-[16px] text-[#222] font-bold group-hover:text-[#FF6600] transition-colors line-clamp-1">{news.title}</h3>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Media Section */}
           <div>
              <div className="flex items-end justify-between mb-10 pb-4">
                 <div>
                    <h2 className="text-4xl font-black text-[#111] mb-2">공식 미디어</h2>
                    <p className="text-gray-500 font-bold text-sm">소통과 공감을 위한 영상 채널</p>
                 </div>
                 <button className="flex items-center gap-2 font-bold text-[14px] text-gray-500 hover:text-[#FF6600] transition-colors bg-white px-5 py-2 rounded-full shadow-sm border border-orange-500/10">
                    전체보기 <span className="text-[#FF6600]">+</span>
                 </button>
              </div>
              <div className="grid grid-cols-2 gap-5">
                 {[1,2,3,4].map((v) => (
                    <div key={v} className="rounded-[28px] overflow-hidden aspect-video bg-orange-100 relative group cursor-pointer shadow-sm">
                        <img src={`https://picsum.photos/seed/orng${v}/400/250`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" alt="media thumbnail" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FF6600]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                              <span className="ml-[4px] text-[#FF6600] text-xl">▶</span>
                           </div>
                        </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </>
  );
}
