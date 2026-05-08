import { motion } from 'framer-motion';
import config from '../theme-config.json';

export default function Story() {
  return (
    <section id="story" className="py-32 md:py-48 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-[4/5] bg-[#F5F1ED] overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
                alt="Luvid Philosophy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase mb-8 block opacity-50" style={{ color: config.colors.primary }}>
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-10" style={{ fontFamily: config.fonts.heading }}>
              보이지 않는 곳에서 <br />
              시작되는 <span className="italic">편안함</span>
            </h2>
            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
              <p>
                루비드는 기술이 차가운 금속의 온도가 아닌, 사람의 체온을 닮아야 한다고 믿습니다. 
                우리의 디자인은 화려함을 걷어내고 가장 본질적인 기능에 집중합니다.
              </p>
              <p>
                단순히 기능을 수행하는 도구를 넘어, 공간의 분위기를 차분하게 가라앉히고 
                당신의 일상에 품격을 더하는 오브제가 되는 것. 
                이것이 루비드가 추구하는 '따뜻한 미니멀리즘'의 핵심입니다.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-12 border-t border-gray-100 pt-12">
              <div>
                <span className="block text-2xl font-light mb-2">Clean Design</span>
                <span className="text-xs tracking-widest text-gray-400 uppercase">Essentials Only</span>
              </div>
              <div>
                <span className="block text-2xl font-light mb-2">Cozy Tech</span>
                <span className="text-xs tracking-widest text-gray-400 uppercase">Human Centered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
