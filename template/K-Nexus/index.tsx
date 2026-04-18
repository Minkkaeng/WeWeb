import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import config from './theme-config.json';
import './GlobalStyles.css';

// Components (To be created)
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import QuickBar from './components/QuickBar';
import NoticeList from './pages/NoticeList';
import NoticeDetail from './pages/NoticeDetail';

export default function KNexusTemplate() {
  const [view, setView] = React.useState<{ type: 'home' | 'notice' | 'detail', id?: number }>({ type: 'home' });

  useEffect(() => {
    document.title = "K-Nexus | Global Research & Policy Hub";
  }, []);

  return (
    <div className="kn-root relative w-full min-h-screen bg-white">
      <Header onNavigate={(v) => setView({ type: v })} />
      
      <main className="pt-[116px]">
        {view.type === 'home' && (
          <>
            <HeroBanner />
            
            {/* 🏫 Policy & Research Sections */}
            <section className="py-24 bg-white overflow-hidden">
               <div className="kn-container">
                  <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                     <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex-1"
                     >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-[11px] font-black text-blue-600 mb-6 uppercase tracking-wider">
                           Research Collaboration
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-[#002758] leading-tight mb-8">
                           전 세계 연구진과 함께하는<br/>
                           <span className="text-blue-500">글로벌 지식 네트워크</span>
                        </h2>
                        <p className="text-lg text-gray-500 leading-relaxed mb-10 font-medium whitespace-pre-wrap">
                           K-Nexus는 185개국 이상의 글로벌 파트너와 협력하여 혁신적인 공공 연구 프로젝트를 수행합니다. 데이터 기반의 분석 시스템을 통해 국내외 최고의 전문가들이 지식을 교류하고 시너지를 창출합니다.
                        </p>
                        <ul className="space-y-4 mb-10">
                           {['국제 공동 연구 프로젝트 관리 시스템', '전문가 매칭 및 인적 자원 플랫폼', '실시간 글로벌 연구 트렌드 분석'].map(item => (
                             <li key={item} className="flex items-center gap-3 font-bold text-gray-700">
                                <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">✓</span>
                                {item}
                             </li>
                           ))}
                        </ul>
                        <button className="flex items-center gap-2 font-black text-[#002758] group">
                           연구사업 자세히 보기 <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#002758] group-hover:text-white transition-all">→</span>
                        </button>
                     </motion.div>
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex-1 relative"
                     >
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                           <img src="/assets/images/knexus_research.png" alt="Research Work" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-10 -left-10 p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                           <p className="text-xs font-black text-gray-400 mb-2 uppercase tracking-widest">Active Partner</p>
                           <h4 className="text-2xl font-black text-[#002758]">1,200+ Institutions</h4>
                        </div>
                     </motion.div>
                  </div>
               </div>
            </section>

            <section className="py-24 bg-[#F8FAFC]">
               <div className="kn-container">
                  <div className="flex flex-col lg:flex-row-reverse items-center gap-16 md:gap-24">
                     <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex-1"
                     >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-50 text-[11px] font-black text-orange-600 mb-6 uppercase tracking-wider">
                           Government support
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-[#002758] leading-tight mb-8">
                           정부 출연 사업의<br/>
                           <span className="text-orange-500">투명한 정책 지원</span>
                        </h2>
                        <p className="text-lg text-gray-500 leading-relaxed mb-10 font-medium">
                           국내 주요 부처 및 지자체와 연계하여 추진되는 대규모 정책 지원 사업을 한눈에 관리하세요. 복합적인 지원 절차를 간소화하고 전 과정을 디지털화하여 서비스 효율성을 높였습니다.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mb-10">
                           <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                              <h4 className="text-2xl font-black text-[#002758] mb-1">98.5%</h4>
                              <p className="text-[11px] font-bold text-gray-400">민원 처리 만족도</p>
                           </div>
                           <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                              <h4 className="text-2xl font-black text-[#002758] mb-1">2,500+</h4>
                              <p className="text-[11px] font-bold text-gray-400">연간 정책 보고서</p>
                           </div>
                        </div>
                     </motion.div>
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex-1 relative"
                     >
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                           <img src="/assets/images/knexus_policy.png" alt="Policy Development" className="w-full h-full object-cover" />
                        </div>
                     </motion.div>
                  </div>
               </div>
            </section>

            {/* 📊 Digital Innovation Stats Section */}
            <section className="py-24 bg-[#001D3D] text-white">
               <div className="kn-container text-center mb-16">
                  <span className="text-blue-400 font-black tracking-widest uppercase text-xs">Digital Transformation</span>
                  <h2 className="text-4xl md:text-5xl font-black mt-4 mb-8">국가 연구 혁신의 디지털 파트너</h2>
               </div>
               <div className="kn-container">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                     {[
                       { title: 'Project Management', desc: '전 공정 실시간 모니터링 및 클라우드 기반 협업 환경 제공' },
                       { title: 'Data Insight', desc: '인공지능 기반의 연구 데이터 분석 및 정책 예측 모델링' },
                       { title: 'Information Security', desc: '국가 보안 표준 규격 준수 및 철저한 데이터 무결성 보호' }
                     ].map((item, idx) => (
                       <div key={idx} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                          <h4 className="text-2xl font-black mb-4 group-hover:text-blue-400">{item.title}</h4>
                          <p className="text-white/50 leading-relaxed font-medium">{item.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* 🤝 Partner Logo Slider Placeholder */}
            <section className="py-20 bg-gray-50 overflow-hidden">
               <div className="kn-container text-center mb-10">
                  <p className="text-[11px] font-black text-gray-300 uppercase tracking-[0.4em]">Official Partners & Institutions</p>
               </div>
               <div className="flex gap-12 justify-center opacity-30 grayscale hover:grayscale-0 transition-all cursor-pointer">
                  {['Ministry of ICT', 'K-Research Inst.', 'Global Policy HUB', 'Nexus Partners', 'Public Innovation'].map(p => (
                    <span key={p} className="text-xl md:text-2xl font-black tracking-tight whitespace-nowrap">{p}</span>
                  ))}
               </div>
            </section>
          </>
        )}

        {view.type === 'notice' && (
          <NoticeList onDetail={(id) => setView({ type: 'detail', id })} />
        )}

        {view.type === 'detail' && view.id && (
          <NoticeDetail id={view.id} onBack={() => setView({ type: 'notice' })} />
        )}
      </main>

      <Footer />
      <QuickBar />
    </div>
  );
}

function ServiceCard({ title, desc, icon }: { title: string, desc: string, icon: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="kn-card p-10 flex flex-col items-center text-center group"
    >
      <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
        <div className="w-10 h-10 bg-[#00508C] rounded-md opacity-20 group-hover:bg-white group-hover:opacity-100 transition-all"></div>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
