import React from 'react';
import { motion } from 'framer-motion';
import config from '../theme-config.json';

export default function Story() {
  return (
    <div className="w-full bg-[#1a1a1a] text-white flex flex-col items-center py-40 overflow-hidden">
      {/* 1. Large Masked Header */}
      <div className="w-full px-12 md:px-24 mb-64 relative">
        <motion.h3 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="pick-text-header text-[22vw] leading-[0.7] text-white"
        >
          PURE<br/>CRAFT.
        </motion.h3>
        <motion.div 
           initial={{ scaleX: 0 }}
           whileInView={{ scaleX: 1 }}
           viewport={{ once: true }}
           className="h-[2px] w-full bg-[#be3127] origin-left mt-10"
        ></motion.div>
      </div>

      {/* 2. Asymmetric Editorial Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 px-12 md:px-24">
        
        {/* Left: Manifesto */}
        <div className="md:col-span-5 flex flex-col justify-end pb-24">
           <motion.p 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black leading-none mb-12 tracking-tighter"
           >
             "우리는 가장 낮은 곳에서 <br/>
             가장 고귀한 향을 <br/>
             끌어올립니다."
           </motion.p>
           <div className="text-sm font-bold opacity-30 uppercase tracking-[0.4em]">Roastery Philosophy v4.1</div>
        </div>

        {/* Right: Feature Blocks */}
        <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="aspect-square bg-white/5 pick-radius-lg p-12 flex flex-col justify-between border border-white/10 group hover:bg-[#be3127] transition-all duration-500">
              <span className="text-6xl font-black" style={{ fontFamily: config.fonts.heading }}>01</span>
              <div>
                <h4 className="text-2xl font-black mb-4 uppercase">Direct Sourcing</h4>
                <p className="text-sm opacity-60 leading-relaxed font-bold">농부의 땀방울을 직접 확인하고 최상의 체리만을 선별합니다.</p>
              </div>
           </div>
           
           <div className="aspect-square bg-white/5 pick-radius-lg p-12 flex flex-col justify-between border border-white/10 group hover:bg-[#be3127] transition-all duration-500">
              <span className="text-6xl font-black" style={{ fontFamily: config.fonts.heading }}>02</span>
              <div>
                <h4 className="text-2xl font-black mb-4 uppercase">Cold Catalyst</h4>
                <p className="text-sm opacity-60 leading-relaxed font-bold">온도 변화 없는 독창적 추출 방식으로 향의 손실을 0%에 수렴시킵니다.</p>
              </div>
           </div>
        </div>
      </div>

      {/* 3. Horizontal Scroll Preview (Concept) */}
      <div className="w-full mt-64 py-20 border-y border-white/10 flex whitespace-nowrap overflow-hidden group">
         <div className="flex animate-ticker-fast opacity-20 group-hover:opacity-100 transition-opacity">
            {Array(10).fill(0).map((_, i) => (
              <span key={i} className="pick-text-header text-[150px] mx-20">UNCOMPROMISED QUALITY</span>
            ))}
         </div>
      </div>
    </div>
  );
}
