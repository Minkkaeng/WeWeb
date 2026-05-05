import React, { useEffect } from 'react';
import './GlobalStyles.css';

// Components
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

export default function EverGovNetworkTemplate() {
  useEffect(() => {
    document.title = "EverGov | National Network Web";
  }, []);

  return (
    <div className="eg-root relative w-full min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-[90px]">
         <HeroBanner />
         <ContentSection />
      </main>

      <Footer />
    </div>
  );
}
