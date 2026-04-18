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
    document.title = "K-Nexus | Global Career Networking Hub";
  }, []);

  return (
    <div className="kn-root relative w-full min-h-screen selection:bg-blue-600 selection:text-white">
      <Header onNavigate={(v) => setView({ type: v })} />
      
      <main className="pt-24">
        {view.type === 'home' && (
          <>
            <HeroBanner />
            
            <section id="about" className="kn-section-padding bg-white">
              <ContentSection 
                title="CAREER DNA" 
                subtitle="전문성기반 경력 경로 최적화" 
                description="K-Nexus는 연구자와 전문가들의 축적된 데이터를 분석하여 최적의 커리어 패스를 제안합니다. 단순한 연결을 넘어 가치를 창출하는 네트워크의 시작입니다."
                image="/assets/images/knexus_hero.png" 
              />
            </section>

            <section id="services" className="kn-section-padding bg-[#F8FAFC]">
              <div className="kn-container text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">NETWORKING SERVICES</h2>
                <div className="w-20 h-1 bg-[#00508C] mx-auto"></div>
              </div>
              <div className="kn-container grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard 
                  title="Career Matching" 
                  desc="인적 자원 네트워크를 통한 최적의 연구 프로젝트 매칭 시스템" 
                  icon="research"
                />
                <ServiceCard 
                  title="Global Insight" 
                  desc="전 세계 전문가들과 공유하는 실시간 연구 트렌드 및 데이터" 
                  icon="insight"
                />
                <ServiceCard 
                  title="Gov-Support" 
                  desc="정부 지원 과제 및 공공 연구 사업 연계 전문 컨설팅" 
                  icon="gov"
                />
              </div>
            </section>

            <section id="insights" className="kn-section-padding bg-white">
              <div className="kn-container flex flex-col items-center">
                 <h2 className="text-3xl font-bold mb-12">FEATURED INSIGHTS</h2>
                 <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl relative">
                    <img 
                      src="/assets/images/knexus_hero.png" 
                      alt="Insight" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-12">
                       <span className="text-blue-400 font-bold mb-4 tracking-widest">WEEKLY REPORT</span>
                       <h3 className="text-white text-4xl font-bold leading-tight">2026년 공공 연구 생태계의<br/>디지털 전환과 커리어 변화</h3>
                    </div>
                 </div>
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
