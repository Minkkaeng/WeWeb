import React from 'react';
import { motion } from 'framer-motion';

export default function Products() {
  const items = [
    { id: 1, name: "Raven's Heart Gown", price: '$1,200', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800' },
    { id: 2, name: "Obsidian Lace Blouse", price: '$450', image: 'https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=800' },
    { id: 3, name: "Nocturnal Jewel Bag", price: '$2,500', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800' },
  ];

  return (
    <div className="py-24 px-8 md:px-16 bg-black">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="brun-text-header text-3xl text-[#c5a059] mb-12 border-b border-[#c5a059]/30 pb-4 text-center">AUTUMN/WINTER 22-23</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <motion.div key={item.id} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-[#111] overflow-hidden border border-[#c5a059]/20 mb-6 relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />
              </div>
              <h3 className="brun-text-header text-xl mb-2 text-[#e0d8c3] group-hover:text-[#c5a059] transition-colors">{item.name}</h3>
              <p className="text-sm italic text-[#c5a059]">{item.price}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
           <button className="brun-text-header text-xl tracking-widest text-[#c5a059] hover:text-white transition-colors uppercase pb-2 border-b border-[#c5a059]">
              Explore the Archives
           </button>
        </div>
      </div>
    </div>
  );
}
