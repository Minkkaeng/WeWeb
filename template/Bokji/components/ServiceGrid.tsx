import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: '장애인 복지', desc: '자립 생활 지원 및 직업 재활 서비스', icon: '♿', color: 'bg-blue-50 text-blue-600' },
  { title: '아동/청소년', desc: '방과 후 돌봄 및 꿈나무 지원 사업', icon: '🧒', color: 'bg-orange-50 text-orange-600' },
  { title: '노인 복지', desc: '맞춤형 돌봄 및 일자리 연계 서비스', icon: '👴', color: 'bg-purple-50 text-purple-600' },
  { title: '가족 지원', desc: '다문화 가정 및 한부모 가족 지원', icon: '👨‍👩‍👧', color: 'bg-pink-50 text-pink-600' },
  { title: '심리 상담', desc: '전문가와 함께하는 마음 건강 서비스', icon: '🧠', color: 'bg-mint-50 text-emerald-600' },
  { title: '지역 사회', desc: '공동체 활성화 및 자원봉사 센터', icon: '🤝', color: 'bg-indigo-50 text-indigo-600' },
];

export default function ServiceGrid() {
  return (
    <section className="eg-section-padding bg-gray-50">
      <div className="eg-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">주요 복지 서비스</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-500">도움이 필요한 모든 분들을 위한 다양한 맞춤형 프로그램을 운영하고 있습니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="eg-card p-10 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              <div className="mt-8 flex items-center gap-2 text-blue-600 font-bold text-sm cursor-pointer group-hover:gap-3 transition-all">
                자세히 보기 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
