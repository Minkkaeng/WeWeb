import { motion } from 'framer-motion';
import config from '../theme-config.json';

const products = [
  {
    id: 1,
    name: 'Essence Induction',
    category: 'Cooking',
    description: '공간의 흐름을 방해하지 않는 초슬림 베젤과 깊은 색감의 인덕션.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Pure Flow Water',
    category: 'Living',
    description: '장식적인 요소를 배제하고 물의 본질만을 담은 정수 시스템.',
    image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    name: 'Breeze Purifier',
    category: 'Air',
    description: '공기를 정화하는 시간을 넘어, 시각적인 정화까지 선사하는 공기청정기.',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Collection() {
  return (
    <section id="collection" className="py-32 bg-[#FDFCFB]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-light mb-8" style={{ fontFamily: config.fonts.heading }}>
              The <span className="italic">Luvid</span> Edition
            </h2>
            <p className="text-gray-500 font-light text-lg">
              각자의 취향과 공간에 조화롭게 녹아드는 루비드만의 시그니처 컬렉션을 만나보세요.
            </p>
          </div>
          <button className="text-sm font-bold tracking-[0.2em] uppercase border-b-2 border-gray-900 pb-2 hover:opacity-50 transition-opacity">
            View All Collection
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-8 bg-[#F5F1ED]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              <div className="px-2">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 block">
                  {product.category}
                </span>
                <h3 className="text-2xl font-light mb-4">{product.name}</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                <button 
                  className="text-xs font-bold tracking-widest uppercase transition-colors"
                  style={{ color: config.colors.primary }}
                >
                  Learn More +
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
