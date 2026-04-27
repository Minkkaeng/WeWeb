import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const About = () => {
  const companyImg = import.meta.env.BASE_URL + 'assets/images/minimalist_hero_bg.png';

  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

        {/* Company Description (Left) */}
        <div className="md:w-1/2 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-sm font-bold text-blood-coral tracking-widest uppercase mb-2">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-deep-black mb-6">Meticulous Detail</h3>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              WeWeb은 단순한 웹사이트를 넘어, 브랜드의 철학과 가치를 디지털 공간에 정밀하게 구현하는 웹 에이전시입니다.
              사용자 경험(UX)과 시각적 디자인(UI)의 완벽한 조화를 통해 한 차원 높은 수준의 디지털 프로덕트를 완성합니다.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
              수많은 프로젝트 경험과 트렌디한 감각을 바탕으로, 
              기획부터 디자인, 개발, 배포까지 모든 과정에서 타협 없는 디테일을 추구합니다. 
              우리는 당신의 비즈니스가 돋보일 수 있도록 최적의 웹 솔루션을 제공합니다.
            </p>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-deep-black text-white font-medium rounded-full hover:bg-blood-coral transition-colors"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>

        {/* Company Image (Right) */}
        <div className="md:w-1/2 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-square"
          >
            <img 
              src={companyImg} 
              alt="WeWeb Company Workspace" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-2xl font-bold tracking-tight">Crafting Digital Excellence</p>
              <p className="text-sm opacity-80 mt-2 font-medium">Elevating brands since 2026</p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* 뷰포트에 있을 때만 애니메이션 실행 */}
      <motion.div
        whileInView={{ rotate: 360 }}
        viewport={{ once: false }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 text-gray-100 opacity-50 z-0 pointer-events-none"
      >
        <Sparkles size={400} strokeWidth={0.5} />
      </motion.div>
    </section>
  );
};
