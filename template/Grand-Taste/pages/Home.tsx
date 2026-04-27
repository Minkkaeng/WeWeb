import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Globe, FlaskConical, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const getImageUrl = (path: string) => {
    return import.meta.env.BASE_URL + path;
  };

  const products = [
    { id: 1, title: '시그니처 스테이크', category: 'Mealkit', image: getImageUrl('assets/images/grand_taste_steak_detail.png') },
    { id: 2, title: '트러플 크림 파스타', category: 'Mealkit', image: getImageUrl('assets/images/fresh_grove_actual.png') },
    { id: 3, title: '수제 고메 칩스', category: 'Snacks', image: getImageUrl('assets/images/nongshim_product_snack.png') },
    { id: 4, title: '프리미엄 유기농 우유', category: 'Dairy', image: getImageUrl('assets/images/nongshim_product_milk.png') }
  ];

  return (
    <div className="ns-root">
      {/* 🖼️ Hero Section (Parallax) */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={getImageUrl('assets/images/nongshim_hero_bg.png')} 
            alt="Premium Mealkit" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
        
        <div className="ns-container relative z-10 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block text-xs md:text-sm font-black tracking-[0.4em] uppercase mb-8"
          >
            Chef's Recipe delivered to you
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="ns-heading text-5xl md:text-8xl lg:text-9xl font-black leading-tight mb-12"
          >
            Taste of<br/>Grand Chef
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <button className="ns-btn-primary">Order Now</button>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 text-white/50">
          <span className="text-[10px] font-bold tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* 📖 Brand Story (Typography Focus) */}
      <section id="story" className="py-32 md:py-48 bg-white overflow-hidden">
        <div className="ns-container">
          <div className="max-w-5xl">
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="ns-heading text-3xl md:text-5xl lg:text-6xl text-ns-secondary leading-tight mb-16"
            >
              우리는 <span className="text-ns-primary italic">'완벽한 한 끼'</span>를 위해<br/> 
              셰프의 주방을<br/>
              당신의 식탁으로 옮겨옵니다.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 text-ns-text-light"
            >
              <p className="text-lg leading-relaxed">
                그랜드 테이스트는 단순한 밀키트를 넘어선 미식의 경험을 제안합니다. 
                최고급 식재료의 신선함을 유지하면서도, 누구나 셰프처럼 요리할 수 있는 최적의 레시피를 설계합니다.
              </p>
              <p className="text-lg leading-relaxed">
                바쁜 일상 속에서도 포기할 수 없는 단 하나의 가치, 바로 '맛의 품격'입니다. 
                당신의 소중한 시간을 더욱 빛나게 할 프리미엄 다이닝을 지금 만나보세요.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🍱 Product Lineup (Magazine Grid) */}
      <section id="menu" className="py-24 bg-ns-surface">
        <div className="ns-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-ns-primary font-black text-xs tracking-widest uppercase mb-4 block">New Arrivals</span>
              <h2 className="ns-section-title mb-0">Chef's Selection</h2>
            </div>
            <div className="flex gap-8 text-sm font-bold tracking-widest text-gray-400">
              {['ALL', 'MEALKIT', 'SNACKS', 'DRINKS'].map((tab) => (
                <button key={tab} className="hover:text-ns-secondary transition-colors">{tab}</button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {products.map((product, idx) => (
              <Link 
                key={idx} 
                to={`/template/grand-taste/product/${product.id}`}
                className="group relative aspect-[3/4] overflow-hidden bg-white cursor-pointer block"
              >
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="h-full w-full"
                >
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[10px] font-black tracking-widest text-white/70 uppercase mb-2 block">{product.category}</span>
                    <h3 className="ns-heading text-2xl text-white font-bold">{product.title}</h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 🧪 R&D & Global Section */}
      <section id="journal" className="py-32 md:py-48 bg-ns-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Globe size={800} className="text-white translate-x-1/2 -translate-y-1/4" />
        </div>
        
        <div className="ns-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="ns-section-title text-white mb-12">Global Standard & <br/>Innovation</h2>
              <p className="text-gray-400 text-lg mb-16 leading-relaxed max-w-lg">
                우리의 연구소는 매 순간 더 안전하고 건강한 맛을 고민합니다. 
                첨단 자동화 설비와 데이터 기반의 품질 관리를 통해 타협하지 않는 기준을 세웁니다.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                {[
                  { icon: <FlaskConical className="text-ns-primary" />, title: "R&D Tech", val: "150+" },
                  { icon: <ShieldCheck className="text-ns-primary" />, title: "Certificates", val: "24" },
                  { icon: <Globe className="text-ns-primary" />, title: "Exporting", val: "100+" }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="mb-4">{item.icon}</div>
                    <div className="text-3xl font-black mb-1">{item.val}</div>
                    <div className="text-xs font-bold text-gray-500 tracking-widest uppercase">{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <div className="aspect-square border border-gray-800 p-4 md:p-8 rounded-full flex items-center justify-center">
                 <div className="aspect-square border border-gray-700 p-4 md:p-8 rounded-full flex items-center justify-center animate-spin-slow">
                    <div className="w-full h-full bg-ns-primary rounded-full opacity-5 group-hover:opacity-10 transition-opacity"></div>
                 </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                    <span className="text-ns-primary font-black text-6xl md:text-8xl block mb-2">HACCP</span>
                    <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">Quality Certified</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 CTA Section */}
      <section id="contact" className="py-24 bg-ns-primary text-white text-center">
        <div className="ns-container">
          <h2 className="ns-heading text-3xl md:text-5xl font-black mb-12">당신의 비즈니스에<br/>신선함을 더하세요.</h2>
          <button className="bg-ns-secondary text-white px-12 py-5 font-bold tracking-widest hover:bg-white hover:text-ns-primary transition-all">
            PARTNERSHIP INQUIRY
          </button>
        </div>
      </section>
    </div>
  );
}
