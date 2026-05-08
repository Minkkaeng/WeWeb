import { motion } from 'framer-motion';
import config from '../theme-config.json';

export default function Detail() {
  return (
    <section id="detail" className="relative py-32 md:py-48 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-square bg-[#F5F1ED] rounded-full overflow-hidden scale-90 translate-x-12 translate-y-12 absolute -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200" 
                alt="Craftsmanship"
                className="rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase mb-8 block opacity-50" style={{ color: config.colors.primary }}>
              Craftsmanship
            </span>
            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-10" style={{ fontFamily: config.fonts.heading }}>
              디테일이 만드는 <br />
              <span className="italic">본질의 차이</span>
            </h2>
            <div className="space-y-12">
              <div className="flex gap-8">
                <span className="text-4xl font-light text-gray-200">01</span>
                <div>
                  <h4 className="text-xl font-medium mb-3">Premium Materials</h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    시간이 흘러도 변치 않는 가치를 위해 최고급 알루미늄과 
                    견고한 세라믹 소재만을 고집합니다. 손끝에 닿는 촉감까지 고려한 
                    마감 처리는 루비드만의 자부심입니다.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-8">
                <span className="text-4xl font-light text-gray-200">02</span>
                <div>
                  <h4 className="text-xl font-medium mb-3">Silent Technology</h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    우리의 기술은 요란하게 존재를 드러내지 않습니다. 
                    완벽한 저소음 설계와 효율적인 에너지 관리는 당신의 평온한 
                    일상에 조용히 녹아듭니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
