import { motion } from 'framer-motion';
import config from '../theme-config.json';

export default function Studio() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen pt-48 pb-32 px-6 md:px-12 bg-[#050505] text-[#f5f5f5] flex flex-col justify-center"
      style={{ fontFamily: config.fonts.body }}
    >
      <div className="max-w-[1920px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-12 lg:col-span-9 xl:col-span-10">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="text-5xl md:text-7xl xl:text-[110px] leading-[1.1] font-normal tracking-[-0.03em] whitespace-pre-wrap"
              style={{ fontFamily: config.fonts.heading }}
            >
              {config.aboutPage.title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
              className="mt-24 md:mt-48 max-w-3xl ml-auto md:ml-32"
            >
              <p className="text-xl md:text-3xl leading-[1.8] font-light text-white/80">
                {config.aboutPage.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
