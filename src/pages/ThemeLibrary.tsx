import { useState } from 'react';
import { motion } from 'framer-motion';
import { ThemePreviewModal } from '../components/ThemePreviewModal';

const categories = ['ALL', '쇼핑몰', '기업/브랜드', '원페이지', '프리랜서'];

const themeLibraryData = [
  { id: 1, title: 'Fresh Grove', category: '쇼핑몰', imgColor: 'bg-orange-100' },
  { id: 2, title: 'WISE', category: '쇼핑몰', imgColor: 'bg-blue-50' },
  { id: 3, title: 'NOBASE CLASS', category: '기업/브랜드', imgColor: 'bg-indigo-950' },
  { id: 4, title: 'PICK', category: '쇼핑몰', imgColor: 'bg-stone-100' },
  { id: 5, title: 'CREATIVE', category: '프리랜서', imgColor: 'bg-purple-100' },
  { id: 6, title: 'ZERO', category: '원페이지', imgColor: 'bg-green-50' },
  { id: 7, title: 'MINIMAL', category: '기업/브랜드', imgColor: 'bg-gray-100' },
  { id: 8, title: 'STUDIO', category: '프리랜서', imgColor: 'bg-rose-50' },
];

export const ThemeLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedTheme, setSelectedTheme] = useState<{title: string, category: string} | null>(null);

  const filteredThemes = activeCategory === 'ALL' 
    ? themeLibraryData 
    : themeLibraryData.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-bold text-deep-black mb-4">테마 라이브러리</h1>
          <p className="text-gray-500 font-light text-lg">디자인 경험이 없어도 빈칸을 채워 완성할 수 있는 다채로운 템플릿</p>
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

        {/* 4-Column Uniform Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredThemes.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedTheme({ title: theme.title, category: theme.category })}
              className="group cursor-pointer flex flex-col"
            >
              {/* Card Image Area with Hover Effect */}
              <div className={`relative w-full aspect-[3/4] ${theme.imgColor} rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-shadow duration-500`}>
                
                {/* Desktop Mockup Preview (Center) */}
                <div className="absolute inset-0 flex mt-10 justify-center transition-transform duration-700 group-hover:-translate-y-4">
                  <div className="w-[85%] h-[90%] bg-white rounded-t-lg shadow-lg flex flex-col overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="h-4 bg-gray-200 border-b border-gray-300 w-full shrink-0"></div>
                    <div className="flex-1 bg-gray-50 flex items-center justify-center p-4 text-center">
                       <span className="text-gray-400 text-xs font-bold font-sans">PC PREVIEW</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Mockup Reveal (Hover) */}
                <div className="absolute -bottom-8 -right-8 w-32 h-56 bg-white rounded-3xl shadow-2xl border-4 border-gray-900 translate-y-12 rotate-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:-rotate-3 transition-all duration-500 ease-out z-10 hidden sm:flex items-center justify-center">
                  <div className="w-12 h-1 bg-gray-200 absolute top-2 rounded-full"></div>
                  <span className="text-gray-400 text-[10px] font-bold">MOBILE</span>
                </div>
                
                {/* Hover Dark Overlay & View Button */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <button className="px-6 py-3 bg-white/95 text-deep-black text-sm font-semibold rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm">
                      미리보기
                   </button>
                </div>
              </div>

              {/* Card Info */}
              <div className="flex flex-col gap-1 px-2">
                <span className="text-xs text-blood-coral font-semibold tracking-wider uppercase">{theme.category}</span>
                <h3 className="text-lg font-bold text-deep-black">{theme.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
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
