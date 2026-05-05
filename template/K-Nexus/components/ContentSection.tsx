import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function ContentSection({ title, subtitle, description, image, reverse }: Props) {
  return (
    <div className="kn-container">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-32`}>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <span className="text-[#00A9E0] font-bold tracking-[.3em] text-xs mb-4 block">{title}</span>
          <h2 className="text-5xl font-extrabold text-[#002D5A] mb-8 leading-tight">{subtitle}</h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-10 whitespace-pre-line">
            {description}
          </p>
          <ul className="space-y-4 mb-12">
            {['빅데이터 기반 경력 분석 시스템', '전문가 매칭 알고리즘 최적화', '글로벌 네트워크 실시간 연동'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                </div>
                {item}
              </li>
            ))}
          </ul>
          <button className="text-lg font-bold text-[#00508C] border-b-2 border-blue-600 pb-1 hover:text-blue-400 transition-colors">
            상세 서비스 보기 →
          </button>
        </motion.div>

        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3]">
             <img src={image} alt={subtitle} className="w-full h-full object-cover" />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full -z-0 opacity-50"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-50 rounded-full -z-0 opacity-30"></div>
        </motion.div>
      </div>
    </div>
  );
}
