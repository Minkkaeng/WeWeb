import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Plus } from 'lucide-react';
import { useCart } from '../index';

import prodSourdough from '../../../src/assets/images/product_sourdough.png';
import prodCroissant from '../../../src/assets/images/product_croissant.png';
import prodPainAuChocolat from '../../../src/assets/images/product_pain_au_chocolat.png';
import prodBaguette from '../../../src/assets/images/product_baguette.png';
import prodCinnamonRoll from '../../../src/assets/images/product_cinnamon_roll.png';
import prodFocaccia from '../../../src/assets/images/product_focaccia.png';
import prodCoffee from '../../../src/assets/images/product_coffee.png';
import prodFrozenDough from '../../../src/assets/images/product_frozen_dough.png';

const allProducts = [
  { id: 1, name: 'Sourdough Artisanal', price: 8500, category: 'Bakery', image: prodSourdough },
  { id: 2, name: 'Golden Croissant', price: 4200, category: 'Pastry', image: prodCroissant },
  { id: 3, name: 'Pain au Chocolat', price: 4800, category: 'Pastry', image: prodPainAuChocolat },
  { id: 4, name: 'Classic Baguette', price: 3800, category: 'Bakery', image: prodBaguette },
  { id: 5, name: 'Cinnamon Roll', price: 5500, category: 'Pastry', image: prodCinnamonRoll },
  { id: 6, name: 'Focaccia (Herbs)', price: 7200, category: 'Bakery', image: prodFocaccia },
  { id: 7, name: 'Espresso Blend (500g)', price: 28000, category: 'Coffee', image: prodCoffee },
  { id: 8, name: 'Frozen Dough Pack', price: 24000, category: 'B2B Special', image: prodFrozenDough }
];

const categories = ['All', 'Bakery', 'Pastry', 'Coffee', 'B2B Special'];

export default function Shop() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = allProducts.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pb-32">
      {/* Page Header */}
      <section className="bg-white pt-32 pb-20 px-6 md:px-16 text-center border-b border-gray-50">
        <h1 className="naam-heading text-6xl mb-6">Our Shop</h1>
        <p className="text-gray-400 font-light max-w-xl mx-auto">
          NAAM이 제안하는 프리미엄 베이커리 라인업입니다. <br/>
          최상의 맛을 위한 최적의 상태로 당신을 기다립니다.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-16">
        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#5E2D91] text-white shadow-lg'
                    : 'bg-white border border-gray-200 text-gray-500 hover:border-[#5E2D91] hover:text-[#5E2D91]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#5E2D91] transition-all"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="naam-card overflow-hidden mb-6">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-x-4 bottom-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product);
                        }}
                        className="flex-1 py-3 bg-[#5E2D91] text-white text-[10px] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#4A2374]"
                      >
                        <Plus size={14} /> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                   <span className="text-[10px] text-[#9A8C98] font-bold uppercase tracking-widest">{product.category}</span>
                   <h3 className="naam-heading text-lg mt-1 group-hover:text-[#5E2D91] transition-colors">{product.name}</h3>
                   <p className="text-md font-bold text-[#5E2D91] mt-1">₩{product.price.toLocaleString()}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-32 text-center text-gray-400">
             <p className="text-lg">검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
