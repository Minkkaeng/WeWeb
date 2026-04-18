import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Briefcase, Home as HomeIcon, GraduationCap, ShieldCheck, Leaf, ChevronRight, FileText, Bell } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'news' | 'notice'>('news');

  const services = [
    { title: '복지 지원', icon: <Heart size={28} />, desc: '맞춤형 생애주기 복지' },
    { title: '일자리 센터', icon: <Briefcase size={28} />, desc: '취업 및 창업 지원' },
    { title: '주거 안정', icon: <HomeIcon size={28} />, desc: '공공 주택 및 대출' },
    { title: '교육 서비스', icon: <GraduationCap size={28} />, desc: '장학금 및 평생 교육' },
    { title: '안전 정책', icon: <ShieldCheck size={28} />, desc: '재난 대비 및 대응' },
    { title: '환경 정보', icon: <Leaf size={28} />, desc: '기후 대응 및 탄소 중립' }
  ];

  return (
    <div className="flex flex-col">
      {/* 🚀 Visual Hero Section */}
      <section className="relative min-h-[500px] md:h-[650px] flex items-center overflow-hidden py-24 md:py-0">
        <div className="absolute inset-0 bg-[#002758]">
          <img 
            src="/assets/images/kookmin25_hero.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002758] via-[#002758]/80 to-transparent"></div>
        </div>

        <div className="km-container relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-center md:text-left"
          >
            <span className="inline-block px-3 md:px-4 py-1.5 bg-[#E63946] text-white text-[9px] md:text-[11px] font-black tracking-[0.2em] rounded-md mb-6 uppercase">
              Notice: 2026 청년 정책 리포트 발간
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6 md:mb-8">
              오늘의 정책이<br />
              <span className="text-[#00A9E0]">내일의 일상</span>이 됩니다.
            </h1>
            <p className="text-lg md:text-2xl text-white/70 font-medium leading-relaxed mb-8 md:mb-10 whitespace-pre-wrap md:whitespace-normal">
              국민의 24시간 그 너머, 국민25시가 당신의 내일을 촘촘하게 지원합니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <button className="km-btn-primary w-full sm:w-auto px-10 py-5 text-lg md:text-xl">정책 전체 보기</button>
              <button className="w-full sm:w-auto px-10 py-5 border-2 border-white/20 text-white rounded-lg font-bold hover:bg-white/10 transition-all">민원 바로 신청</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🛠️ Service Grid Section */}
      <section className="py-12 md:py-24 bg-white relative -mt-10 md:-mt-20 z-20">
        <div className="km-container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 border border-gray-100 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-white">
            {services.map((s, i) => (
              <motion.div 
                key={s.title}
                whileHover={{ backgroundColor: "#F0F7FF" }}
                className={`p-6 md:p-10 flex flex-col items-center text-center cursor-pointer transition-colors border-r border-b border-gray-50 last:border-r-0`}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F4F7F9] rounded-xl md:rounded-2xl flex items-center justify-center text-[#002758] mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(s.icon as React.ReactElement, { size: 24, className: "md:w-7 md:h-7" })}
                </div>
                <h3 className="text-sm md:text-base font-extrabold text-[#002758] mb-1 md:mb-2">{s.title}</h3>
                <p className="hidden md:block text-[11px] text-gray-400 font-bold uppercase tracking-tighter leading-tight whitespace-pre-wrap">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📰 Latest News & Tabs Section */}
      <section className="py-16 md:py-24 bg-[#F4F7F9]">
        <div className="km-container">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* News Tabs */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-8 border-b-2 border-gray-200">
                <div className="flex gap-6 md:gap-10">
                  <button 
                    onClick={() => setActiveTab('news')}
                    className={`py-4 text-lg md:text-xl font-black relative transition-colors ${activeTab === 'news' ? 'text-[#002758]' : 'text-gray-400'}`}
                  >
                    보도자료
                    {activeTab === 'news' && <motion.div layoutId="tab-underline" className="absolute bottom-[-2px] left-0 w-full h-[4px] bg-[#002758]" />}
                  </button>
                  <button 
                    onClick={() => setActiveTab('notice')}
                    className={`py-4 text-lg md:text-xl font-black relative transition-colors ${activeTab === 'notice' ? 'text-[#002758]' : 'text-gray-400'}`}
                  >
                    공지사항
                    {activeTab === 'notice' && <motion.div layoutId="tab-underline" className="absolute bottom-[-2px] left-0 w-full h-[4px] bg-[#002758]" />}
                  </button>
                </div>
                <button className="text-gray-500 hover:text-[#002758] flex items-center gap-1 text-xs md:text-sm font-bold whitespace-nowrap">
                   전체 <ChevronRight size={16} />
                </button>
              </div>

              <div className="space-y-3 md:space-y-4">
                {(activeTab === 'news' ? [
                  { title: "[보도] 2026년 일자리 지원금 확대 편성 및 지원 대상 공개", date: "2026.04.18", dept: "고용노동부" },
                  { title: "[정책] 국민25시 탄소중립 포인트 제도 대규모 개편 안내", date: "2026.04.17", dept: "환경부" },
                  { title: "[보도] 청년 주거 안정을 위한 공공 임대 주택 1만 호 추가 공급", date: "2026.04.16", dept: "국토교통부" },
                  { title: "[알림] 전국 지자체별 맞춤형 복지 지도 서비스 정식 오픈", date: "2026.04.15", dept: "보건복지부" }
                ] : [
                  { title: "시스템 정기 점검에 따른 서비스 일시 중단 안내 (4월 20일)", date: "2026.04.18", dept: "전산기획팀" },
                  { title: "2026년 1학기 국가장학금 2차 신청 마감 임박 안내", date: "2026.04.12", dept: "교육지원과" },
                  { title: "개인정보 처리방침 개정 및 시행 안내 (2026.05.01)", date: "2026.04.10", dept: "법무팀" },
                  { title: "국민25시 모바일 앱 안드로이드 버전 보안 업데이트 공지", date: "2026.04.05", dept: "IT운영부" }
                ]).map((item, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={item.title}
                    className="flex flex-col md:flex-row md:items-center justify-between p-5 md:p-6 bg-white rounded-2xl hover:shadow-lg transition-all group cursor-pointer border border-transparent hover:border-gray-100 gap-3 md:gap-0"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-[#0366D6]">
                        {activeTab === 'news' ? <FileText size={18} /> : <Bell size={18} />}
                      </div>
                      <span className="font-bold text-gray-800 truncate group-hover:text-[#002758] text-sm md:text-base">{item.title}</span>
                    </div>
                    <div className="flex items-center gap-4 text-[11px] md:text-[13px] ml-12 md:ml-0">
                       <span className="font-bold text-gray-400 whitespace-nowrap">{item.dept}</span>
                       <span className="font-medium text-gray-300 whitespace-nowrap">{item.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Side Branding */}
            <div className="w-full lg:w-[350px] space-y-6 md:space-y-8 mt-10 lg:mt-0">
               <div className="p-8 md:p-10 bg-[#002758] rounded-[2rem] md:rounded-[2.5rem] text-white overflow-hidden relative group">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                  <h4 className="text-xl md:text-2xl font-black mb-4 relative z-10">내 맞춤 정책 찾기</h4>
                  <p className="text-white/60 text-xs md:text-sm mb-8 md:mb-10 leading-relaxed font-light relative z-10">간단한 정보 입력만으로<br/>당신에게 필요한 지원금을 찾아보세요.</p>
                  <button className="w-full py-4 bg-white text-[#002758] rounded-xl font-black text-sm relative z-10 hover:bg-[#00A9E0] hover:text-white transition-colors">
                     지금 시작하기
                  </button>
               </div>
               
               <div className="p-6 md:p-8 bg-white border border-gray-100 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-between shadow-sm">
                  <div>
                    <span className="text-[10px] md:text-[11px] font-black text-[#E63946] tracking-widest mb-1 block uppercase">Hot Topic</span>
                    <p className="font-bold text-gray-800 leading-tight text-sm md:text-base">주거 급여 신청,<br/>이렇게 하세요!</p>
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FFF2F2] rounded-xl md:rounded-2xl flex items-center justify-center text-[#E63946] flex-shrink-0">
                     <ChevronRight size={20} className="md:w-6 md:h-6" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
