import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronDown } from 'lucide-react';

const products = [
  { id: 1, name: 'MOSS TECH JACKET', price: '₩249,000', category: 'OUTER', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, name: 'SILICON OVERSIZED TEE', price: '₩65,000', category: 'TOP', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, name: 'LINE CARGO PANTS', price: '₩158,000', category: 'BOTTOM', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, name: 'ECO CANVAS BAG', price: '₩42,000', category: 'ACC', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop' },
  { id: 5, name: 'URBAN BEANIE', price: '₩35,000', category: 'ACC', image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, name: 'GRASS FIELD HOODIE', price: '₩112,000', category: 'TOP', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop' },
  { id: 7, name: 'NEON ACCENT SHORTS', price: '₩78,000', category: 'BOTTOM', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1000&auto=format&fit=crop' },
  { id: 8, name: 'DEEP GREEN PARKA', price: '₩312,000', category: 'OUTER', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop' },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const categories = ['ALL', 'OUTER', 'TOP', 'BOTTOM', 'ACC'];

  const filteredProducts = activeCategory === 'ALL' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="shop-page py-20 px-6 md:px-12 bg-white">
      <div className="max-w-[1800px] mx-auto">
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-6 md:gap-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-[#121212] mb-2 md:mb-4 uppercase">Archive</h1>
            <p className="text-gray-400 font-bold text-[10px] md:text-sm tracking-widest uppercase">Explore our functional street system</p>
          </div>
          
          <div className="w-full md:w-auto flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            <div className="flex bg-[#F9F9F9] p-1 rounded-none overflow-x-auto no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 text-[10px] font-black tracking-widest uppercase transition-all border-none cursor-pointer ${
                    activeCategory === cat ? 'bg-[#004D40] text-white' : 'bg-transparent text-gray-400 hover:text-[#121212]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-200 bg-white text-[10px] font-black tracking-widest uppercase cursor-pointer hover:border-[#004D40] transition-all">
              <Filter size={14} /> Filters
            </button>
          </div>
        </div>

        {/* Product Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-10 md:gap-y-16">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-[#F9F9F9] relative overflow-hidden mb-3 md:mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                {/* Neon Yellow Tag on Hover (Desktop only for better UX) */}
                <div className="hidden md:block absolute inset-0 bg-[#E6FF00]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="hidden md:block absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <button className="w-full bg-[#121212] text-white text-[10px] font-black py-4 uppercase tracking-widest border-none cursor-pointer">
                    Quick Add +
                  </button>
                </div>
                {/* Mobile Quick Add (Small Button) */}
                <div className="md:hidden absolute bottom-2 right-2">
                   <button className="w-8 h-8 bg-white border-none shadow-md flex items-center justify-center rounded-full text-[#004D40]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                   </button>
                </div>
              </div>
              <div className="px-1">
                <h3 className="text-[11px] md:text-sm font-black tracking-tight mb-0.5 md:mb-1 group-hover:text-[#004D40] transition-colors line-clamp-1">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-[9px] md:text-[10px] font-bold text-gray-400 tracking-widest uppercase">{product.category}</p>
                  <p className="text-xs md:text-sm font-black text-[#121212]">{product.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-32 text-center">
          <button className="px-12 py-5 bg-transparent border-2 border-gray-100 text-[11px] font-black tracking-[0.2em] uppercase hover:border-[#E6FF00] transition-all cursor-pointer">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
}
