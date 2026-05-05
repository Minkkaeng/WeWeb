import { motion } from 'framer-motion';
import config from '../theme-config.json';
import heroBg from '../../../src/assets/images/minimalist_hero_bg.png';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
      className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={heroBg} 
          alt="Kinn Collective Studio" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80"></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 pb-12 md:pb-16 flex justify-center items-end h-full">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] sm:text-[11vw] md:text-[9vw] lg:text-[10vw] xl:text-[150px] font-normal text-[#f5f5f5] leading-[0.8] tracking-[-0.04em] whitespace-nowrap"
          style={{ fontFamily: config.fonts.heading }}
        >
          {config.hero.title}
        </motion.h1>
      </div>
    </motion.div>
  );
}
