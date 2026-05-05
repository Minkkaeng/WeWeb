import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Briefcase, Home, GraduationCap, ShieldCheck, Leaf, ArrowUpRight } from 'lucide-react';

export default function SectorNews() {
  const sectors = [
    { title: '복지·보건', color: 'bg-red-50', icon: <Heart className="text-red-600" />, count: '2,143' },
    { title: '고용·노동', color: 'bg-blue-50', icon: <Briefcase className="text-blue-600" />, count: '1,856' },
    { title: '주거·국토', color: 'bg-emerald-50', icon: <Home className="text-emerald-600" />, count: '3,201' },
    { title: '교육·문화', color: 'bg-purple-50', icon: <GraduationCap className="text-purple-600" />, count: '945' },
    { title: '안전·행정', color: 'bg-orange-50', icon: <ShieldCheck className="text-orange-600" />, count: '768' },
    { title: '환경·에너지', color: 'bg-green-50', icon: <Leaf className="text-green-600" />, count: '542' }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="km-container">
        <div className="mb-16">
           <span className="km-badge mb-4">SECTOR NEWS</span>
           <h2 className="km-section-title">분야별 소식</h2>
           <p className="text-gray-500 font-medium">대한민국의 모든 분야별 정책과 뉴스를 가장 빠르게 확인하세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {sectors.map((sector) => (
             <motion.div 
               key={sector.title}
               whileHover={{ y: -5 }}
               className="p-10 border border-gray-100 rounded-[32px] hover:shadow-2xl transition-all group"
             >
               <div className="flex items-start justify-between mb-10">
                  <div className={`w-16 h-16 ${sector.color} rounded-2xl flex items-center justify-center`}>
                    {React.cloneElement(sector.icon as React.ReactElement<any>, { size: 32 })}
                  </div>
                  <div className="text-right">
                     <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Available Items</span>
                     <p className="text-2xl font-black text-[#002758]">{sector.count}</p>
                  </div>
               </div>
               
               <h3 className="text-2xl font-black text-[#002758] mb-6">{sector.title}</h3>
               
               <div className="space-y-5 mb-10">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-600 hover:text-[#0055A4] cursor-pointer transition-colors group/item">
                       <span className="w-1.5 h-1.5 bg-gray-200 rounded-full group-hover/item:bg-[#0055A4]"></span>
                       <span className="line-clamp-1">2026년 하반기 {sector.title} 분야 핵심 지원 사업 안내 {i}</span>
                    </div>
                  ))}
               </div>

               <button className="flex items-center gap-2 text-sm font-black text-[#002758] group-hover:text-[#E63946] transition-colors">
                  자세히 보기 <ArrowUpRight size={18} />
               </button>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
