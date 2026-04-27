import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import config from '../theme-config.json';
import heroBg from '../hero-bg.png';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="w-full min-h-screen bg-[#f3e9dc] relative overflow-hidden flex flex-col justify-center pick-grain">
      {/* 1. Background Outline Text - Enhanced Visibility v6.2.6 */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden">
        <motion.h1 
          style={{ y: y1 }}
          className="pick-text-header text-[40vw] lg:text-[28vw] leading-[0.7] pick-outline-text opacity-[0.2] whitespace-nowrap"
        >
          BRUN LØVE TANN
        </motion.h1>
      </div>

      {/* 2. Overlapping Hero Visual - Maximum Scale */}
      <div className="relative z-10 p-6 md:p-12 lg:p-16 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-screen-2xl aspect-[4/5] md:aspect-[16/9] lg:aspect-[21/8] shadow-[0_60px_120px_rgba(0,0,0,0.25)] pick-radius-lg lg:pick-radius-xl border-[1.5px] border-black/20 overflow-hidden"
        >
          <img 
            src={heroBg} 
            alt="Chapter 2 Rebirth" 
            className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000 scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Glass Floating Badge - Responsive Positioning */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-6 left-6 right-6 md:bottom-10 md:right-10 md:left-auto p-6 md:p-10 pick-glass pick-radius-lg max-w-sm shadow-2xl border border-white/20"
          >
             <div className="text-[#be3127] text-3xl font-black mb-4">!</div>
             <p className="text-lg md:text-xl font-bold leading-tight mb-6">
                기존의 틀을 깨고 <br className="hidden md:block"/>
                새로운 맛의 지평을 엽니다. <br/>
                우리는 가장 순수한 본질에 집중합니다.
             </p>
             <button className="flex items-center gap-4 group">
                <span className="text-[9px] font-black tracking-[0.5em] uppercase border-b border-black pb-1 group-hover:text-[#be3127] group-hover:border-[#be3127] transition-all">
                   Chapter 2 Entrance
                </span>
             </button>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. High Impact Title - Responsive Sizing v6.2.6 Hard Contrast */}
      <div className="relative z-20 px-6 md:px-12 lg:px-24 mt-20 lg:mt-40">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="flex flex-col lg:flex-row items-end justify-between gap-8 md:gap-12"
        >
           <h2 className="pick-text-header text-[18vw] lg:text-[12vw] leading-[0.75] text-black">
             THE<br/>REBIRTH.
           </h2>
           <div className="max-w-md text-[11px] md:text-sm font-black opacity-80 uppercase tracking-[0.2em] leading-relaxed text-left lg:text-right text-black">
             우리는 단순히 과거를 복제하지 않습니다. 브룬 뢰베 탄의 챕터 2는 브랜드의 재탄생입니다. 새로운 감도와 맛을 지금 경험해 보십시오.
           </div>
        </motion.div>
      </div>
    </div>
  );
}
