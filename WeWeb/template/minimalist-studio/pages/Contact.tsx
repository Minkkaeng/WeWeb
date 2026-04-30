import { motion } from 'framer-motion';
import config from '../theme-config.json';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen pt-48 pb-32 px-6 md:px-12 bg-[#f5f5f5] text-[#050505] flex flex-col justify-center"
      style={{ fontFamily: config.fonts.body }}
    >
      <div className="max-w-[1920px] mx-auto w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="text-6xl md:text-8xl xl:text-[200px] leading-[0.8] tracking-[-0.05em] font-normal"
          style={{ fontFamily: config.fonts.heading }}
        >
          {config.contactPage.title}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 mt-32 md:mt-48 gap-16"
        >
          <div>
            <h4 className="text-sm tracking-widest uppercase opacity-50 mb-8 font-semibold">General Inquiries</h4>
            <a href={`mailto:${config.contactPage.email}`} className="text-3xl md:text-5xl border-b border-black pb-2 hover:opacity-50 transition-opacity" style={{ fontFamily: config.fonts.heading }}>
              {config.contactPage.email}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm tracking-widest uppercase opacity-50 mb-8 font-semibold">Call</h4>
              <p className="text-lg md:text-2xl">{config.contactPage.phone}</p>
            </div>
            <div>
              <h4 className="text-sm tracking-widest uppercase opacity-50 mb-8 font-semibold">Visit</h4>
              <p className="text-lg md:text-2xl max-w-[200px]">{config.contactPage.address}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
