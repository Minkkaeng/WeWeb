import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@framework/utils';

interface HomeProps {
  onShopNow: () => void;
}

export default function Home({ onShopNow }: HomeProps) {
  const curatedProducts = [
    { id: 1, name: 'MOSS TECH JACKET', category: 'OUTERWEAR', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, name: 'SILICON OVERSIZED TEE', category: 'TOPS', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop' },
    { id: 3, name: 'LINE CARGO PANTS', category: 'BOTTOMS', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop' },
    { id: 4, name: 'URBAN BEANIE', category: 'ACC', image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop' },
  ];

  return (
    <div className="home-page overflow-x-hidden">
      {/* 1. Hero Section - Mobile App Style (Full Height) */}
      <section className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-[#F9F9F9]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Street" 
            className="w-full h-full object-cover grayscale-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/80 md:to-transparent"></div>
        </div>
        
        <div className="relative h-full flex flex-col justify-end md:justify-center p-6 md:p-12 lg:p-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[800px]"
          >
            <span className="inline-block bg-[#E6FF00] text-[#121212] px-3 py-1 md:px-4 md:py-2 text-[10px] md:text-xs font-black tracking-widest uppercase mb-4 md:mb-8">SS 2026 Collection</span>
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter text-[#004D40] mb-8 md:mb-12">
              NATURAL<br/>STREET<br/>EVOLUTION
            </h1>
            <p className="text-[#121212] text-sm md:text-lg font-bold max-w-[500px] leading-relaxed mb-8 md:mb-12 opacity-80">
              자연에서 영감을 얻은 컬러와 도시의 기능성이 결합된 새로운 아카이브를 경험하세요.
            </p>
            <button 
              onClick={onShopNow}
              className="group relative bg-[#004D40] text-white px-10 py-5 md:px-12 md:py-6 text-xs md:text-sm font-black tracking-[0.2em] border-none cursor-pointer overflow-hidden"
            >
               <span className="relative z-10">SHOP NOW</span>
               <div className="absolute inset-0 bg-[#E6FF00] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Curation Grid (Album Style) */}
      <section className="py-20 md:py-40 px-6 md:px-12 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex justify-between items-end mb-12 md:mb-20">
            <div>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-[#121212] uppercase leading-none">Curated<br/>System</h2>
            </div>
            <button className="text-[10px] md:text-sm font-black tracking-widest text-[#004D40] border-b-2 border-[#004D40] pb-1 cursor-pointer bg-transparent">VIEW ALL</button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {curatedProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "group relative overflow-hidden bg-[#F9F9F9]",
                  idx === 0 ? "col-span-2 lg:col-span-1 aspect-square lg:aspect-[3/4]" : "aspect-[3/4]"
                )}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <span className="text-[8px] md:text-[10px] font-black tracking-widest uppercase mb-1 md:mb-2 block opacity-80">{product.category}</span>
                  <h3 className="text-sm md:text-xl font-black tracking-tighter uppercase line-clamp-1">{product.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Sustainable Insight Banner */}
      <section className="py-20 md:py-32 bg-[#004D40] text-white px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6 md:mb-8">
              CONSCIOUS <br/>
              PRODUCTION.
            </h2>
            <p className="text-sm md:text-lg text-white/70 max-w-md mb-8 md:mb-10 leading-relaxed font-medium">
              우리는 옷을 만드는 과정에서도 자연과의 공존을 생각합니다. <br className="hidden md:block" />
              리사이클 패브릭과 오가닉 코튼을 활용한 친환경 공정으로 스트릿 웨어의 미래를 제시합니다.
            </p>
            <div className="flex gap-8 md:gap-12">
              <div>
                <div className="text-xl md:text-2xl font-black text-[#E6FF00] mb-1 md:mb-2">92%</div>
                <div className="text-[8px] md:text-[10px] font-bold tracking-widest text-white/50 uppercase">Recycled Mat.</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-black text-[#E6FF00] mb-1 md:mb-2">100%</div>
                <div className="text-[8px] md:text-[10px] font-bold tracking-widest text-white/50 uppercase">Zero Waste</div>
              </div>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-[16/9] border border-white/20 p-2 md:p-4">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop" 
                alt="Process" 
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-[#E6FF00] text-[#121212] p-4 md:p-8 max-w-[150px] md:max-w-[200px]">
              <p className="text-[9px] md:text-[11px] font-black tracking-widest uppercase leading-tight">
                Green Insight Archive Vol.1
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
