import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Clock, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../index';

import heroImg1 from '../../../src/assets/images/naam_hero.png';
import heroImg2 from '../../../src/assets/images/naam_hero_2.png';
import heroImg3 from '../../../src/assets/images/naam_hero_3.png';

import prodSourdough from '../../../src/assets/images/product_sourdough.png';
import prodCroissant from '../../../src/assets/images/product_croissant.png';
import prodPainAuChocolat from '../../../src/assets/images/product_pain_au_chocolat.png';
import prodFrozenDough from '../../../src/assets/images/product_frozen_dough.png';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const heroSlides = [
  {
    image: heroImg1,
    title: "The Art of Warmth & Cozy",
    subtitle: "가장 아늑한 아침을 선사하는 NAAM의 베이커리 솔루션."
  },
  {
    image: heroImg2,
    title: "Daily Fresh Artisanal Bread",
    subtitle: "매일 새벽 정성으로 담아낸 신선한 풍미의 시그니처 베이커리."
  },
  {
    image: heroImg3,
    title: "Your Premium B2B Partner",
    subtitle: "카페와 레스토랑의 가치를 높이는 최상의 비즈니스 파트너."
  }
];

const featuredProducts = [
  { id: 101, name: 'Sourdough Artisanal', price: 8500, category: 'Bakery', image: prodSourdough },
  { id: 102, name: 'Golden Croissant', price: 4200, category: 'Pastry', image: prodCroissant },
  { id: 103, name: 'Pain au Chocolat', price: 4800, category: 'Pastry', image: prodPainAuChocolat },
  { id: 104, name: 'Frozen Dough Pack', price: 24000, category: 'B2B Special', image: prodFrozenDough }
];

export default function Home({ setCurrentPage }: HomeProps) {
  const { addToCart } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 6000);
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    startTimer();
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
    startTimer();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startTimer();
  };

  return (
    <div className="space-y-32">
      {/* Hero Carousel Section - Fixed Height Issues */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        
        {/* Carousel Content Wrapper - MUST be relative to dictated height */}
        <div className="relative w-full h-full flex-grow flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative w-full flex items-center py-24 sm:py-32" 
            >
              {/* SLIDE BACKGROUND (Absolute inside relative motion.div) */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#2D232E]/40 z-10" />
                <img 
                  src={heroSlides[currentSlide].image} 
                  alt="Bakery Hero" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* SLIDE CONTENT (Relative to push parent height) */}
              <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 w-full">
                <div className="max-w-3xl">
                  <motion.span 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-4 py-1.5 bg-[#FFC526] text-[#2D232E] text-xs font-bold rounded-full mb-6"
                  >
                    EST. 2026 BAKERY PARTNER
                  </motion.span>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="naam-heading text-4xl sm:text-6xl md:text-8xl text-white mb-8 leading-[0.9]"
                  >
                    {heroSlides[currentSlide].title.split(' ').slice(0, -2).join(' ')} <br/>
                    <span className="italic">{heroSlides[currentSlide].title.split(' ').slice(-2).join(' ')}</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-white/80 text-sm sm:text-lg md:text-xl font-light mb-10 max-w-xl"
                  >
                    {heroSlides[currentSlide].subtitle} <br/>
                    전문가가 엄선한 원재료와 정성으로 당신의 일상을 채웁니다.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pb-12 sm:pb-0"
                  >
                    <button 
                      onClick={() => setCurrentPage('shop')}
                      className="naam-btn-primary flex items-center justify-center gap-2 group w-full sm:w-auto"
                    >
                      Shop Collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                       onClick={() => setCurrentPage('partners')}
                       className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all w-full sm:w-auto text-center"
                    >
                      B2B Partner
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls (Stay Fixed relative to section) */}
        <div className="absolute bottom-8 left-0 right-0 sm:left-auto sm:right-12 sm:bottom-12 z-40 flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-6 pointer-events-none">
          <div className="flex gap-2 pointer-events-auto">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === i ? 'w-8 bg-[#FFC526]' : 'w-4 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          <div className="hidden sm:flex gap-2 pointer-events-auto">
            <button onClick={prevSlide} className="p-2 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="p-2 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#F9F4F0] rounded-2xl flex items-center justify-center text-[#5E2D91] mb-6">
            <Star size={32} />
          </div>
          <h3 className="naam-heading text-2xl mb-4 font-bold">Premium Quality</h3>
          <p className="text-gray-500 font-light leading-relaxed">최상급 프랑스산 밀가루와 천연 발효종만을 사용하여 깊은 풍미를 구현합니다.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#F9F4F0] rounded-2xl flex items-center justify-center text-[#5E2D91] mb-6">
            <Clock size={32} />
          </div>
          <h3 className="naam-heading text-2xl mb-4 font-bold">Daily Fresh</h3>
          <p className="text-gray-500 font-light leading-relaxed">매일 새벽 구워낸 신선한 빵을 가장 완벽한 상태로 배송합니다.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#F9F4F0] rounded-2xl flex items-center justify-center text-[#5E2D91] mb-6">
            <ShieldCheck size={32} />
          </div>
          <h3 className="naam-heading text-2xl mb-4 font-bold">B2B Solution</h3>
          <p className="text-gray-500 font-light leading-relaxed">카페와 레스토랑을 위한 맞춤형 생지 및 베이킹 가이드를 제공합니다.</p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-[#F9F4F0] py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
               <h2 className="naam-heading text-5xl mb-4">Weekly Best</h2>
               <p className="text-gray-500 font-light">지금 가장 사랑받고 있는 NAAM의 시그니처 메뉴입니다.</p>
            </div>
            <button 
              onClick={() => setCurrentPage('shop')}
              className="text-[#5E2D91] font-bold text-sm border-b-2 border-[#5E2D91] pb-1 hover:opacity-70"
            >
              View More
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="naam-card group overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <button 
                    onClick={() => addToCart(product)}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] py-3 bg-white/90 backdrop-blur-md text-[#2D232E] text-xs font-bold rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
                  >
                    Quick Add to Cart
                  </button>
                </div>
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-widest text-[#9A8C98] font-bold block mb-2">{product.category}</span>
                  <h4 className="naam-heading text-xl mb-2">{product.name}</h4>
                  <p className="text-lg font-bold text-[#5E2D91]">₩{product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-screen-2xl mx-auto px-6 mb-32">
        <div className="relative rounded-[40px] bg-[#5E2D91] py-32 md:py-48 px-8 flex flex-col items-center text-center overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC526] blur-[150px] opacity-20 -mr-32 -mt-32" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-white blur-[150px] opacity-10 -ml-32 -mb-32" />
           
           <h2 className="naam-heading text-5xl md:text-7xl text-white mb-8  relative z-10">Start Your Partnership</h2>
           <p className="text-white/60 text-lg font-light mb-12 max-w-2xl relative z-10">
             단순한 납품을 넘어, 당신의 매장에 가장 잘 어울리는 메뉴 개발과 운영 노하우를 함께 나눕니다. 
             NAAM의 파트너가 되어 비즈니스의 품격을 높여보세요.
           </p>
           <button 
             onClick={() => setCurrentPage('partners')}
             className="px-12 py-5 bg-[#FFC526] text-[#2D232E] rounded-full font-bold text-lg hover:scale-105 transition-transform relative z-10"
           >
             문의하기
           </button>
        </div>
      </section>
    </div>
  );
}
