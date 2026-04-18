import React from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronRight, Globe, FileText, BarChart2, Shield } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative w-full min-h-[700px] flex items-center overflow-hidden bg-[#001D3D]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/knexus_hero.png" 
          alt="Global Research Hub" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D] via-transparent to-[#001D3D]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#001D3D] via-[#001D3D]/40 to-transparent"></div>
      </div>

      <div className="kn-container relative z-10 py-20">
        <div className="max-w-4xl text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-sm">
               <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
               <span className="text-[11px] font-black text-blue-300 tracking-[0.2em] uppercase">Global Public Policy & Research Hub</span>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8">
              데이터 기반의<br />
              <span className="text-blue-400">글로벌 연구 혁신</span> 포털
            </h2>
            
            <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed mb-12 max-w-2xl">
              K-Nexus는 연구자와 정책 전문가를 위한 통합 지원 체계를 제공합니다.<br className="hidden md:block" />
              정부 출연 과제 관리부처 및 글로벌 인적 자원 매칭을 경험해 보세요.
            </p>

            {/* 🔍 Portal Search Bar */}
            <div className="relative max-w-2xl mb-14 group">
               <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative flex items-center bg-white rounded-2xl shadow-2xl overflow-hidden p-1.5 md:p-2.5">
                  <div className="flex-1 flex items-center px-4">
                     <Search size={22} className="text-gray-400 mr-4" />
                     <input 
                        type="text" 
                        placeholder="연구 사업, 정책 자료, 공고문을 검색하세요" 
                        className="w-full bg-transparent outline-none text-gray-800 font-bold placeholder:text-gray-300 py-3"
                     />
                  </div>
                  <button className="bg-[#002758] text-white px-8 py-3.5 rounded-xl font-black text-sm hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/20 whitespace-nowrap">
                     종합검색
                  </button>
               </div>
            </div>

            {/* ⚡ Quick Service Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
               {[
                 { icon: <Globe size={18} />, label: '글로벌 공고' },
                 { icon: <FileText size={18} />, label: '정책 보고서' },
                 { icon: <BarChart2 size={18} />, label: '연구 성과' },
                 { icon: <Shield size={18} />, label: '민원 센터' },
               ].map((item, idx) => (
                 <motion.button
                   key={idx}
                   whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                   className="flex items-center justify-center gap-3 py-4 bg-white/5 border border-white/10 rounded-2xl text-white transition-all group"
                 >
                    <span className="text-blue-400 group-hover:text-white transition-colors">{item.icon}</span>
                    <span className="text-xs font-black tracking-tight">{item.label}</span>
                 </motion.button>
               ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 📊 Floating Stats (Side) - Tablet/Desktop Only */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 hidden xl:block">
         <div className="flex flex-col gap-6 scale-90 opacity-80 hover:opacity-100 transition-opacity">
            {[
              { label: 'Active Projects', val: '2,840', color: 'bg-blue-500' },
              { label: 'Policy Reports', val: '12,400+', color: 'bg-emerald-500' },
              { label: 'Global Partner', val: '185', color: 'bg-orange-500' },
            ].map((stat, i) => (
              <div key={i} className="w-[280px] bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
                 <div className={`w-1 h-8 ${stat.color} rounded-full mb-4`}></div>
                 <p className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-1">{stat.label}</p>
                 <h4 className="text-2xl font-black text-white">{stat.val}</h4>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}
