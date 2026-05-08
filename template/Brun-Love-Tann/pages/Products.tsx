import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import config from '../theme-config.json';

const PRODUCTS = [
  { id: 1, title: 'BOLD HOUSE BLEND', price: '₩18,000', label: 'Balanced & Nutty / Dark Roast', img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=600' },
  { id: 2, title: 'SIDAMO G1 SINGLE', price: '₩21,000', label: 'Berry & Floral / Light Roast', img: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=600' },
  { id: 3, title: 'DARK CATALYST', price: '₩17,500', label: 'Bittersweet & Rich / Heavy', img: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=600' },
  { id: 4, title: 'MATINAL DECAF', price: '₩19,000', label: 'Sweet & Clean / Medium', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600' }
];

export default function Products() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="w-full bg-[#f3e9dc] pb-32 relative" onMouseMove={handleMouseMove}>
      {/* 1. Catalogue Header - Dynamic Grid */}
      <div className="w-full pick-border-b py-32 px-12 md:px-24 flex flex-col items-center justify-center text-center bg-white/5">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <span className="text-[10px] font-black tracking-[1em] text-[#be3127] mb-8 block uppercase">The Selection</span>
          <h3 className="pick-text-header text-[12vw] leading-[0.7]" style={{ fontFamily: config.fonts.heading }}>
            CURATED<br/>OBJECTS.
          </h3>
        </motion.div>
      </div>

      {/* 2. Floating Image Preview - Creative Renewal */}
      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
            className="fixed pointer-events-none z-[200] w-64 h-80 overflow-hidden pick-radius-lg border border-white/20 shadow-2xl transition-transform duration-150 ease-out"
            style={{ 
              top: mousePos.y - 160, 
              left: mousePos.x + 40 
            }}
          >
            <img 
              src={PRODUCTS.find(p => p.id === hovered)?.img} 
              className="w-full h-full object-cover" 
              alt="Preview" 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Product List - Editorial Grid */}
      <div className="w-full border-t border-black/10">
        {PRODUCTS.map((p, idx) => (
          <motion.div
            key={p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            className="group w-full flex flex-col md:flex-row items-center border-b border-black py-20 px-12 md:px-24 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer relative"
          >
            <div className="md:w-32 text-xs font-black tracking-widest opacity-40 group-hover:opacity-100 group-hover:text-[#be3127] transition-all mb-4 md:mb-0">
               LOT.2024-00{p.id}
            </div>
            
            <div className="flex-1">
               <h1 className="pick-text-header text-[8vw] md:text-[6.5vw] transition-all group-hover:pl-8 group-hover:text-white text-black">
                 {p.title}
               </h1>
            </div>

            <div className="flex flex-col items-end">
               <div className="text-4xl md:text-5xl font-black mb-2 text-black group-hover:text-white transition-colors" style={{ fontFamily: config.fonts.heading }}>
                 {p.price}
               </div>
               <span className="text-[11px] font-black tracking-[0.3em] opacity-60 uppercase italic group-hover:opacity-100 group-hover:text-[#be3127] transition-all text-black/60">
                 {p.label}
               </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 4. Access Button - Industrial Glass */}
      <div className="mt-32 px-12 md:px-24">
         <motion.button 
           whileHover={{ scale: 1.01 }}
           whileTap={{ scale: 0.98 }}
           className="w-full py-24 pick-glass pick-radius-lg pick-text-header text-5xl tracking-tighter hover:bg-[#be3127] hover:text-white hover:border-[#be3127] transition-all flex items-center justify-center gap-12"
           style={{ fontFamily: config.fonts.heading }}
         >
           Access Full Archives
           <div className="w-16 h-16 rounded-full border border-current flex items-center justify-center">
              <span className="text-3xl">→</span>
           </div>
         </motion.button>
      </div>
    </div>
  );
}
