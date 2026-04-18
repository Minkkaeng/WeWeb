import React from 'react';
import { motion } from 'framer-motion';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-gray-900">
      <img 
        src="/assets/images/evergov_hero.png" 
        alt="Welfare Hero" 
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent flex items-center">
        <div className="eg-container">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-xs mb-6 tracking-widest uppercase">
              EverGov Social Welfare Portal
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              함께하는 <span className="text-blue-600">따뜻한 변화</span>,<br/>
              더 나은 내일을 여는 행복 동행
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
              복지 서비스를 한 곳에서 편리하게 확인하고 신청하세요. 
              에버복지포털은 소외된 이웃 없이 모두가 행복한 사회를 꿈꿉니다.
            </p>
            <div className="flex items-center gap-4">
              <button className="eg-button-primary !px-8 !py-4 text-lg">복지사업 안내</button>
              <button className="px-8 py-4 rounded-xl border-2 border-gray-200 font-bold text-gray-700 hover:bg-gray-50 transition-colors">시설 이용 안내</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
