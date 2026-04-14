import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // HashRouter에서 앵커 스크롤 처리
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      // 페이지 전환 후 스크롤
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tighter text-deep-black">
          WeWeb
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-blood-coral hover:-translate-y-0.5 transition-all">Work</Link>
          <Link to="/theme" className="text-blood-coral font-bold hover:-translate-y-0.5 transition-all">Library</Link>
          <button onClick={() => scrollToSection('about')} className="hover:text-blood-coral hover:-translate-y-0.5 transition-all">About</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-blood-coral hover:-translate-y-0.5 transition-all">Contact</button>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-deep-black"
          aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium text-gray-600">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-blood-coral transition-all">Work</Link>
              <Link to="/theme" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-blood-coral font-bold">Library</Link>
              <button onClick={() => scrollToSection('about')} className="py-2 text-left hover:text-blood-coral transition-all">About</button>
              <button onClick={() => scrollToSection('contact')} className="py-2 text-left hover:text-blood-coral transition-all">Contact</button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
