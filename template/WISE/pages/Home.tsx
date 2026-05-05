import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@framework/utils';

// 이미지 에셋 임포트
import heroImg from '../../../src/assets/images/kodak_hero.png';
import productImg from '../../../src/assets/images/kodak_products.png';
import merchImg from '../../../src/assets/images/kodak_merch.png';

const categories = ['ALL', 'CAMERAS', 'FILMS', 'MERCHANDISE'];

const products = [
  { id: 1, name: 'RETRO 35mm CAMERA', price: '$120.00', category: 'CAMERAS', img: heroImg },
  { id: 2, name: 'PORTRA 400 FILM 5-PACK', price: '$85.00', category: 'FILMS', img: productImg },
  { id: 3, name: 'VINTAGE LEATHER BAG', price: '$210.00', category: 'MERCHANDISE', img: merchImg },
  { id: 4, name: 'ULTRAMAX 400', price: '$15.00', category: 'FILMS', img: productImg },
];

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProducts = activeCategory === 'ALL' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section style={{ 
        height: '100vh', 
        width: '100%', 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1
          }}
        />
        
        <div style={{ textAlign: 'center', zIndex: 1 }}>
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            style={{ 
              fontSize: 'clamp(4rem, 20vw, 15rem)', 
              lineHeight: 0.8, 
              color: '#FFD200',
              fontWeight: 900,
              letterSpacing: '-0.05em'
            }}
          >
            KODAK
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1, duration: 1 }}
            style={{ height: '2px', backgroundColor: '#FFD200', margin: '2rem 0' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{ 
              fontSize: '0.8rem', 
              letterSpacing: '0.8em', 
              textTransform: 'uppercase',
              color: '#fff'
            }}
          >
            Preserve Your Heritage
          </motion.p>
        </div>
      </section>

      {/* Internal Feature: Cinematic Video/Media Section */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-[#050505]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">

            <motion.div 
               initial={{ x: -50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
            >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', backgroundColor: '#111', overflow: 'hidden' }}>
                    <img src={merchImg} alt="Cinematic Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                    <div style={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)',
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        border: '1px solid #FFD200',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}>
                        <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '15px solid #FFD200', marginLeft: '5px' }} />
                    </div>
                </div>
            </motion.div>
            <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 leading-tight">THE ANALOG<br/><span className="text-[#FFD200]">REVOLUTION</span></h2>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 md:mb-12">
                    In a digital-first world, there's something uniquely tactile and authentic about film. 
                    Kodak brings back the grain, the warmth, and the soul of photography.
                </p>
                <button className="w-full md:w-auto px-12 py-4 border border-[#333] hover:border-[#FFD200] transition-colors text-[10px] tracking-widest font-bold">
                    EXPLORE STORY
                </button>
            </div>
        </div>
      </section>


      {/* Internal Feature: Grid Filtering Section */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-black">
        <div className="mb-12 md:mb-24 flex flex-col items-center">
          <h2 className="text-[10px] md:text-base tracking-[0.3em] text-[#FFD200] mb-8 md:mb-12 font-bold">COLLECTIONS</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">

            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "bg-transparent border-none text-[10px] tracking-[0.2em] cursor-pointer transition-all",
                  activeCategory === cat ? "text-white font-black" : "text-[#444] hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => (
              <motion.div 
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div style={{ 
                  aspectRatio: '1/1', 
                  backgroundColor: '#111', 
                  marginBottom: '1.5rem',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    src={p.img}
                    alt={p.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="flex justify-between items-start">
                    <div>
                        <h3 style={{ fontSize: '0.7rem', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>{p.name}</h3>
                        <p style={{ fontSize: '0.6rem', color: '#666' }}>{p.category}</p>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#FFD200', fontWeight: 900 }}>{p.price}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Ticker Section */}
      <section className="py-24 md:py-48 bg-[#FFD200] text-black overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="text-6xl md:text-[12rem] font-[900] flex gap-8 md:gap-16 opacity-90"
        >
          <span>KODAK HERITAGE</span>
          <span>FILM IS NOT DEAD</span>
          <span>SINCE 1888</span>
          <span>YOU PRESS THE BUTTON</span>
          <span>KODAK HERITAGE</span>
          <span>FILM IS NOT DEAD</span>
        </motion.div>
      </section>

    </>
  );
};

export default Home;


