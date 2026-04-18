import React from 'react';
import { motion } from 'framer-motion';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center overflow-hidden bg-white">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/knexus_hero.png" 
          alt="Career Professionals" 
          className="w-full h-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="kn-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
             <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
             <span className="text-[12px] font-bold text-blue-600 tracking-wider">NEXT-GEN CAREER HUB</span>
          </div>
          <h2 className="text-7xl lg:text-8xl font-extrabold text-[#002D5A] leading-[1.05] mb-8">
            Expert <br/>
            <span className="text-[#00508C]">Insights,</span> <br/>
            Global Net.
          </h2>
          <p className="text-xl text-gray-500 max-w-lg leading-relaxed mb-12">
            국내외 최고의 연구자와 전문가들이 모여 지식을 나누고 커리어를 설계하는 혁신적인 생태계, K-Nexus에서 당신의 잠재력을 발견하세요.
          </p>
          <div className="flex items-center gap-6">
            <button className="kn-button-primary text-lg px-10 py-5 rounded-xl shadow-xl shadow-blue-600/20">Explore Career DNA</button>
            <button className="text-lg font-bold text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
               Watch Presentation
               <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                  <span className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-current border-b-4 border-b-transparent ml-1"></span>
               </span>
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center relative"
        >
          {/* Glass Card Overlay */}
          <div className="w-[500px] h-[550px] relative">
             <div className="absolute top-0 right-0 w-[450px] h-[500px] rounded-[60px] overflow-hidden shadow-2xl skew-y-3">
                <img src="/assets/images/knexus_hero.png" className="w-full h-full object-cover" />
             </div>
             <div className="absolute bottom-10 left-0 w-[300px] kn-glass p-8 rounded-3xl shadow-2xl -skew-y-3 border-l-4 border-l-[#00A9E0]">
                <h4 className="font-bold text-gray-900 mb-2">Networking Active</h4>
                <div className="flex -space-x-3 mb-4">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-blue-100"></div>
                   ))}
                   <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">+2k</div>
                </div>
                <p className="text-[12px] text-gray-500 font-medium">실시간 2,400+ 명의 전문가가 연결되어 있습니다.</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
