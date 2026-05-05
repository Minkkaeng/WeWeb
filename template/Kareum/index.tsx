import { useEffect } from 'react';
import './GlobalStyles.css';

import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { VillageSlider } from './components/VillageSlider';
import { Experiences } from './components/Experiences';
import { Footer } from './components/Footer';

export default function KareumTemplate() {
  useEffect(() => {
    // 테마 설정 (테마 라이브러리나 템플릿용)
    const title = 'Kareum';
    document.title = title;
  }, []);

  return (
    <div className="kareum-theme min-h-screen font-sans selection:bg-[#4A7c59] selection:text-white">
      <Header />
      
      <main>
        <HeroSlider />
        <VillageSlider />
        <Experiences />
      </main>

      <Footer />
    </div>
  );
}
