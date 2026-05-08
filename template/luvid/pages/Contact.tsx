import { motion } from 'framer-motion';
import config from '../theme-config.json';

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48" style={{ backgroundColor: config.colors.primary }}>
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-sm font-bold tracking-[0.4em] uppercase mb-8 block text-white/60">
            Next Step
          </span>
          <h2 className="text-4xl md:text-7xl font-light text-white mb-12 leading-tight" style={{ fontFamily: config.fonts.heading }}>
            당신의 일상에 <br />
            <span className="italic font-medium">따뜻한 영감</span>을 더해보세요
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto leading-relaxed">
            루비드의 프리미엄 가전은 단순히 제품이 아닌 라이프스타일의 완성입니다. 
            전문 어드바이저와의 상담을 통해 당신만의 공간을 완성해보세요.
          </p>
          
          <button className="group relative px-12 py-6 bg-white text-gray-900 rounded-full font-bold tracking-[0.2em] uppercase transition-all hover:pr-16 active:scale-95 shadow-2xl overflow-hidden">
            <span className="relative z-10">Request a Consultation</span>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              →
            </span>
          </button>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-32 pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-white font-bold tracking-[0.3em] uppercase text-xl">
          Luvid
        </div>
        <div className="flex gap-12 text-white/50 text-xs tracking-widest uppercase">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Pinterest</a>
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
        </div>
        <div className="text-white/30 text-[10px] tracking-[0.1em] uppercase">
          © 2026 LUVID. ALL RIGHTS RESERVED.
        </div>
      </div>
    </section>
  );
}
