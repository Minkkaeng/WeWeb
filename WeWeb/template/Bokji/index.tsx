import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// Monorepo registration - Import the module to register custom elements
import '../../../Monorepo/packages/ui/src/index'; 

import './GlobalStyles.css';

// Components
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ServiceGrid from './components/ServiceGrid';
import NoticeSection from './components/NoticeSection';
import Footer from './components/Footer';
import QuickBar from './components/QuickBar';

// Pages
import NoticeList from './pages/NoticeList';
import NoticeDetail from './pages/NoticeDetail';

export default function BokjiTemplate() {
  const [view, setView] = React.useState<{ type: 'home' | 'notice' | 'detail', id?: number }>({ type: 'home' });

  useEffect(() => {
    document.title = "에버복지포털 | 모두가 행복한 사회";
  }, []);

  return (
    <div className="eg-root relative w-full min-h-screen">
      <Header onNavigate={(v) => {
        setView({ type: v });
        window.scrollTo({ top: 0, behavior: 'instant' });
      }} />
      
      <main className="">
        {view.type === 'home' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HeroBanner />
            <ServiceGrid />
            <NoticeSection onNoticeClick={() => {
               setView({ type: 'notice' });
               window.scrollTo({ top: 0, behavior: 'instant' });
            }} />
          </motion.div>
        )}

        {view.type === 'notice' && (
          <NoticeList onDetail={(id) => {
             setView({ type: 'detail', id });
             window.scrollTo({ top: 0, behavior: 'instant' });
          }} />
        )}

        {view.type === 'detail' && view.id && (
          <NoticeDetail id={view.id} onBack={() => {
             setView({ type: 'notice' });
             window.scrollTo({ top: 0, behavior: 'instant' });
          }} />
        )}
      </main>

      <Footer />
      <QuickBar />
    </div>
  );
}
