import React from 'react';
import { motion } from 'framer-motion';
import config from '../theme-config.json';
import { Search, User, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Sidebar({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    <aside 
      className="fixed left-6 top-12 bottom-6 w-[350px] pick-glass pick-radius-lg flex flex-col z-[150] shadow-2xl hidden lg:flex border-r border-black/5"
    >
      {/* Brand Header - Stacked Editorial Logo */}
      <div className="p-10 pt-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative"
        >
          <div className="absolute -top-6 -left-2 text-[#be3127] text-4xl font-black select-none">*</div>
          <h1 className="pick-text-header text-[90px] leading-[0.75] tracking-[-0.08em]">
            BRUN<br/>LØVE<br/>TANN
          </h1>
        </motion.div>
        <div className="flex justify-between items-center mt-6 border-t border-black/10 pt-6">
           <span className="text-[9px] font-black tracking-[0.5em] opacity-40 uppercase">Chapter 2 Renewal</span>
           <div className="w-2 h-2 rounded-full bg-[#be3127] animate-pulse"></div>
        </div>
      </div>

      {/* Navigation - Glass List */}
      <nav className="flex flex-col flex-1 px-4 mt-8 space-y-2 overflow-y-auto pick-custom-scroll">
        {config.navLinks.map((link, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(link.href.replace('#', ''))}
            className="text-left py-6 px-10 rounded-[1.5rem] hover:bg-black group transition-all duration-300 flex items-center justify-between"
          >
            <span 
              className="pick-text-header text-[32px] md:text-[42px] tracking-tighter group-hover:text-white transition-colors"
            >
              {link.label}
            </span>
            <ArrowRight size={20} className="text-[#be3127] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
          </button>
        ))}
      </nav>

      {/* Utility Bar - Minimalist Glass */}
      <div className="p-10 flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <User size={22} className="cursor-pointer hover:text-[#be3127] transition-colors" />
          <ShoppingBag size={22} className="cursor-pointer hover:text-[#be3127] transition-colors" />
          <div className="text-[10px] font-black cursor-pointer hover:text-[#be3127] px-3 py-1 border border-black rounded-full uppercase tracking-widest">Connect</div>
        </div>
        <div className="flex flex-col items-end opacity-20">
          <span className="text-[8px] font-black uppercase">Est.</span>
          <span className="text-xs font-black">2024</span>
        </div>
      </div>
    </aside>
  );
}
