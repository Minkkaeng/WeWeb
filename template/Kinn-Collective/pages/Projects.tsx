import { motion } from 'framer-motion';
import config from '../theme-config.json';
import port1 from '../../../src/assets/images/minimalist_portfolio_1.png';
import port2 from '../../../src/assets/images/minimalist_portfolio_2.png';

export default function Projects() {
  const images = [port1, port2]; // 하드코딩 대체재

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] as const } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#050505] text-[#f5f5f5]"
      style={{ fontFamily: config.fonts.body }}
    >
      <div className="max-w-[1920px] mx-auto">
        <motion.h1 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl xl:text-[180px] leading-[0.8] tracking-[-0.05em] mb-24 md:mb-48"
          style={{ fontFamily: config.fonts.heading }}
        >
          Selected <br/><span className="italic opacity-80 pl-12 md:pl-32">Works.</span>
        </motion.h1>

        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          {config.portfolio.items.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemAnim}
              // 비대칭 그리드: 홀수 항목은 좌측 정렬, 짝수 항목은 우측 아래 치우침
              className={`md:col-span-6 flex flex-col group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-48 md:pl-24' : 'md:pr-24'}`}
            >
              <div className="overflow-hidden w-full aspect-[3/4] mb-8 bg-[#111]">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={images[idx]} 
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="flex justify-between items-start border-t border-white/20 pt-4">
                <h3 className="text-2xl md:text-3xl font-normal tracking-tight" style={{ fontFamily: config.fonts.heading }}>
                  {item.title}
                </h3>
                <div className="text-right text-xs tracking-widest uppercase opacity-50 flex flex-col gap-1">
                  <span>{item.category}</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
