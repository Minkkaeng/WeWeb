import { motion } from 'framer-motion';
import config from '../theme-config.json';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#F5F1ED]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Luvid Premium Home"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCFB]/80 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6 block"
            style={{ color: config.colors.primary }}
          >
            Luvid : Warmth in Technology
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-light leading-[1.1] mb-8"
            style={{ fontFamily: config.fonts.heading }}
          >
            공간에 스며드는 <br />
            <span className="font-medium italic text-[#8E7355]">따뜻한 기술</span>의 온도
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 font-light mb-12 max-w-xl leading-relaxed"
          >
            루비드는 단순한 가전을 넘어, 당신의 일상에 포근한 안식과 
            품격 있는 미니멀리즘을 제안합니다.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              className="px-10 py-5 rounded-full text-white text-sm font-semibold tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-xl"
              style={{ backgroundColor: config.colors.primary }}
            >
              Explore Collection
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 right-12 hidden md:block">
        <div className="flex flex-col gap-4 text-[10px] tracking-[0.2em] font-bold uppercase opacity-30">
          <span>Premium</span>
          <span>Minimalist</span>
          <span>Aesthetic</span>
        </div>
      </div>
    </section>
  );
}
