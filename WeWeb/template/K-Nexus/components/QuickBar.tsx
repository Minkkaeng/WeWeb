import React from 'react';
import { motion } from 'framer-motion';

export default function QuickBar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const menus = [
     { label: 'MATCH', icon: 'M' },
     { label: 'NETWORK', icon: 'N' },
     { label: 'TREND', icon: 'T' },
     { label: 'SUPPORT', icon: 'S' }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-10 right-10 z-[100] hidden md:block transition-all duration-500 ${isScrolled ? 'translate-x-4 opacity-40 hover:translate-x-0 hover:opacity-100' : ''}`}>
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="kn-glass flex flex-col items-center p-3 rounded-3xl shadow-2xl border border-white/40"
      >
        <div className="pb-4 border-b border-gray-200 mb-2 w-full text-center">
           <span className="text-[9px] font-black tracking-widest text-[#00508C]">K</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          {menus.map((menu, i) => (
            <motion.button 
              key={i}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center w-14 h-14 rounded-2xl hover:bg-white transition-all group"
            >
              <span className="text-xs font-bold text-[#00508C] group-hover:scale-110 transition-transform">{menu.icon}</span>
              <span className="text-[8px] font-bold text-gray-400 group-hover:text-[#00508C]">{menu.label}</span>
            </motion.button>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 w-full flex justify-center">
           <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="w-10 h-10 rounded-full bg-[#00508C] flex items-center justify-center text-white shadow-lg"
           >
              <span className="text-lg">↑</span>
           </button>
        </div>
      </motion.div>
    </div>
  );
}
