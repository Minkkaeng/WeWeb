import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import List from './pages/List';
import View from './pages/View';
import Briefing from './pages/Briefing';
import SectorNews from './pages/SectorNews';
import Community from './pages/Community';
import './GlobalStyles.css';

type ViewType = 'home' | 'list' | 'view' | 'briefing' | 'news' | 'community';

export default function Kookmin25Template() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    document.title = "국민25시 | 공공 정책 통합 플랫폼";
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    setSelectedId(null);
  };

  const handleViewDetail = (id: number) => {
    setSelectedId(id);
    setCurrentView('view');
  };

  return (
    <div className="km-root min-h-screen flex flex-col pt-[116px]">
      <Header onNavigate={handleNavigate} />
      
      <main className="flex-1">
        {currentView === 'home' && <Home />}
        {currentView === 'list' && <List onView={handleViewDetail} />}
        {currentView === 'view' && <View id={selectedId || 10} onBack={() => setCurrentView('list')} />}
        {currentView === 'briefing' && <Briefing />}
        {currentView === 'news' && <SectorNews />}
        {currentView === 'community' && <Community />}
      </main>

      <Footer />
    </div>
  );
}
