import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemePreviewModal } from '../components/ThemePreviewModal';
import freshActualImg from '../assets/images/fresh_grove_actual.png';
import freshMobileActualImg from '../assets/images/fresh_grove_mobile_actual.png';
import wiseActualImg from '../assets/images/wise_actual.png';
import wiseMobileActualImg from '../assets/images/wise_mobile_actual.png';
import pickActualImg from '../assets/images/pick_actual.png';
import pickMobileActualImg from '../assets/images/pick_mobile_actual.png';
import minimalActualImg from '../assets/images/minimalist_studio_actual.png';
import minimalMobileActualImg from '../assets/images/minimalist_studio_mobile_actual.png';
import naamActualImg from '../assets/images/naam_actual.png';
import naamMobileActualImg from '../assets/images/naam_mobile_actual.png';
import knexusActualImg from '../assets/images/knexus_actual.png';
import knexusMobileActualImg from '../assets/images/knexus_mobile_actual.png';
import kookmin25ActualImg from '../assets/images/kookmin25_actual.png';
import kookmin25MobileActualImg from '../assets/images/kookmin25_mobile_actual.png';
import nongshimActualImg from '../assets/images/nongshim_actual.png';
import nongshimMobileActualImg from '../assets/images/nongshim_mobile_actual.png';
import allpetActualImg from '../assets/images/allpet_desktop.png';
import allpetMobileActualImg from '../assets/images/allpet_mobile.png';


const categories = ['ALL', '쇼핑몰', '기업 브랜드', '관공서', '포털사이트', '기타'];

const themeLibraryData = [
  // 이미지가 있는 주요 템플릿 (첫 번째 줄 및 추가)
  { id: 1, title: 'GRAND TASTE', category: '쇼핑몰', imgColor: 'bg-white', desktopThumbnail: nongshimActualImg, mobileThumbnail: nongshimMobileActualImg },
  { id: 2, title: 'FRESH GROVE', category: '쇼핑몰', imgColor: 'bg-emerald-50', desktopThumbnail: freshActualImg, mobileThumbnail: freshMobileActualImg },
  { id: 3, title: 'WISE', category: '쇼핑몰', imgColor: 'bg-black', desktopThumbnail: wiseActualImg, mobileThumbnail: wiseMobileActualImg },
  { id: 4, title: 'BRUN LØVE TANN', category: '쇼핑몰', imgColor: 'bg-stone-100', desktopThumbnail: pickActualImg, mobileThumbnail: pickMobileActualImg },
  { id: 5, title: 'Kinn Collective', category: '기업 브랜드', imgColor: 'bg-[#111111]', desktopThumbnail: minimalActualImg, mobileThumbnail: minimalMobileActualImg },
  { id: 6, title: 'NAAM', category: '쇼핑몰', imgColor: 'bg-[#FDF6E3]', desktopThumbnail: naamActualImg, mobileThumbnail: naamMobileActualImg },
  { id: 7, title: 'K-Nexus', category: '관공서', imgColor: 'bg-white', desktopThumbnail: knexusActualImg, mobileThumbnail: knexusMobileActualImg },
  { id: 8, title: '국민25시', category: '관공서', imgColor: 'bg-[#002758]', desktopThumbnail: kookmin25ActualImg, mobileThumbnail: kookmin25MobileActualImg },
  { id: 9, title: 'ALLPET', category: '포털사이트', imgColor: 'bg-[#FF4D4D]', desktopThumbnail: allpetActualImg, mobileThumbnail: allpetMobileActualImg },
  
  // 10번부터 40번까지 모두 빈 템플릿 (Coming Soon)으로 통일
  ...Array.from({ length: 31 }, (_, i) => ({
    id: i + 10,
    title: `Coming Soon ${i + 1}`,
    category: '기타',
    imgColor: 'bg-gray-50',
    desktopThumbnail: '',
    mobileThumbnail: ''
  }))
];

export const ThemeLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedTheme, setSelectedTheme] = useState<{title: string, category: string} | null>(null);

  const filteredThemes = activeCategory === 'ALL'
    ? themeLibraryData
    : themeLibraryData.filter(t => t.category === activeCategory);

  const handleThemeClick = (title: string, category: string) => {
    setSelectedTheme({ title, category });
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-bold text-deep-black mb-4">테마 라이브러리</h1>
          <p className="text-gray-500 font-light text-lg">당신의 비즈니스를 가장 돋보이게 할 WEWEB만의 감각적인 레퍼런스</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-gray-100 pb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-deep-black text-white'
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-deep-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Landscape Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredThemes.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                role="button"
                tabIndex={0}
                onClick={() => handleThemeClick(theme.title, theme.category)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleThemeClick(theme.title, theme.category);
                  }
                }}
                className="group cursor-pointer flex flex-col outline-none focus-visible:ring-2 focus-visible:ring-blood-coral rounded-2xl"
              >
                {/* Card Image Area */}
                <div className="relative w-full aspect-video bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                  {/* Template Full Cover */}
                  {theme.desktopThumbnail ? (
                    <img src={theme.desktopThumbnail} alt={`${theme.title} Preview`} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 text-gray-400">
                      <span className="font-bold font-sans text-xs tracking-wider">PREVIEW</span>
                      <span className="font-sans text-[10px] mt-1 opacity-60">Not Available</span>
                    </div>
                  )}

                  {/* Mobile Mockup Reveal */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-56 bg-white rounded-[24px] shadow-2xl border-4 border-gray-900 translate-y-12 rotate-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:-rotate-3 transition-all duration-500 ease-out z-10 hidden sm:flex flex-col items-center overflow-hidden">
                    <div className="w-12 h-1 bg-gray-300 absolute top-2 rounded-full z-20"></div>
                    {theme.mobileThumbnail ? (
                       <img src={theme.mobileThumbnail} alt="Mobile Preview" className="w-full h-full object-cover object-top" />
                    ) : (
                       <span className="text-gray-400 text-[10px] font-bold mt-auto mb-auto">MOBILE</span>
                    )}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <span className="px-6 py-3 bg-white/95 text-deep-black text-sm font-semibold rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm relative z-20">
                        미리보기
                     </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="flex flex-col gap-1 px-2">
                  <span className="text-xs text-blood-coral font-semibold tracking-wider uppercase">{theme.category}</span>
                  <h3 className="text-lg font-bold text-deep-black">{theme.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Fullscreen Preview Modal */}
      <ThemePreviewModal
        isOpen={selectedTheme !== null}
        onClose={() => setSelectedTheme(null)}
        themeTitle={selectedTheme?.title || ''}
        themeCategory={selectedTheme?.category || ''}
      />
    </div>
  );
};
