import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-gray-100 py-4 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col">
           <a href="#" className={`text-2xl font-black tracking-tight ${isScrolled ? 'text-[#4A7c59]' : 'text-white'}`}>
             KAREUM
           </a>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {['카름스테이', '카름마을', '카름여행', '카름소식'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-[#4A7c59]' : 'text-white/80 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Action */}
        <div className="flex items-center gap-4">
          <button className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
            isScrolled 
              ? 'bg-[#4A7c59] text-white hover:bg-opacity-90' 
              : 'bg-white text-black hover:bg-gray-100'
          }`}>
            호스트 신청
          </button>
        </div>
      </div>
    </motion.header>
  );
};
