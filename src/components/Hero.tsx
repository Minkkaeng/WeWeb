import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
        
        {/* Left Typography */}
        <div className="md:col-span-7 flex flex-col items-start gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black text-deep-black leading-tight tracking-tighter"
          >
            Floating <br /> Thinking
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl text-gray-500 max-w-md font-light mt-4"
          >
            본질만 남기고, 무중력의 공간 속에서 새롭게 제안합니다.
          </motion.p>
        </div>

        {/* Right Floating Object */}
        <div className="md:col-span-5 flex justify-center mt-12 md:mt-0 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blood-coral to-pink-400 rounded-full blur-[80px] absolute opacity-30 animate-floating mix-blend-multiply"
          />
          <motion.div
            className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-gray-100 to-white shadow-floating rounded-3xl border border-white/50 backdrop-blur-sm flex items-center justify-center"
            animate={{
               y: [0, -30, 0],
               rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Placeholder for 3D object/image */}
            <span className="text-gray-300 font-light tracking-widest text-sm">OBJECT</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
