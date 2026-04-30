import { motion } from 'framer-motion';
import config from '../theme-config.json';

export default function Journal() {
  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-48 pb-32 px-6 md:px-12 bg-[#050505] text-[#f5f5f5]"
      style={{ fontFamily: config.fonts.body }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
          className="text-5xl md:text-8xl mb-24 font-normal tracking-[-0.03em]"
          style={{ fontFamily: config.fonts.heading }}
        >
          {config.journalPage.title}
        </motion.h1>

        <motion.div 
          initial="hidden" animate="show" 
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col border-t border-white/20"
        >
          {config.journalPage.articles.map((article, idx) => (
            <motion.div 
              key={idx}
              role="button"
              tabIndex={0}
              variants={itemAnim}
              className="group flex flex-col md:flex-row justify-between md:items-center py-12 border-b border-white/20 hover:bg-white/[0.02] transition-colors cursor-pointer"
            >
              <h3 
                className="text-3xl md:text-5xl font-normal group-hover:pl-4 transition-all duration-500 ease-out" 
                style={{ fontFamily: config.fonts.heading }}
              >
                {article.title}
              </h3>
              <div className="flex gap-8 mt-4 md:mt-0 text-sm tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                <span>{article.category}</span>
                <span>{article.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
