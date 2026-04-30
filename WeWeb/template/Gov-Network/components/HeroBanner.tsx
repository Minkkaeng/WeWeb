import React from 'react';
import { motion } from 'framer-motion';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[80vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-[#FFF9F5]">
      <div className="absolute inset-0">
        <img 
          src="/assets/images/gov_network.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30 object-center mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF9F5] via-[#FFF9F5]/90 to-transparent z-10" />
      </div>

      <div className="eg-container relative z-20 w-full">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="max-w-3xl"
        >
           <div className="inline-block px-4 py-1.5 rounded-full bg-[#FFF0E5] text-[#FF6600] font-bold text-sm mb-6 border border-[#FF6600]/20">
              신뢰와 혁신의 공공 파트너십
           </div>
           
           <h2 className="text-5xl md:text-6xl lg:text-[72px] font-black text-[#111] leading-[1.15] tracking-tight mb-8">
              오직 국민에 집중하여 <br />
              <span className="text-[#FF6600]">스마트 행정망</span>을 완성합니다.
           </h2>
           <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-10 whitespace-pre-line">
              지속 가능한 정책 혁신 경험을 토대로 스마트 행정 네트워크로 발돋움하며{'\n'}
              따뜻하고 확실한 미래 국가 전략을 수립합니다.
           </p>

           <div className="flex gap-4">
              <button className="eg-btn-round px-8 py-4 text-[16px]">
                 기관 소개 바로가기 <span className="ml-2 font-black">→</span>
              </button>
              <button className="eg-btn-outline px-8 py-4 text-[16px]">
                 주요 성과 살펴보기
              </button>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
