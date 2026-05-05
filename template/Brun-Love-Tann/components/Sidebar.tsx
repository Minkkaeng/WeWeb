import React from 'react';
import { motion } from 'framer-motion';
import config from '../theme-config.json';
import { User, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Sidebar({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    <aside className="fixed left-0 top-10 bottom-0 w-[350px] bg-black flex flex-col z-[150] shadow-2xl hidden lg:flex border-r border-[#c5a059]/20">
      <div className="p-10 pt-16 text-center border-b border-[#c5a059]/20">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <h1 className="brun-text-header text-4xl text-[#c5a059] mb-4">
            NOCTURNE<br/>&amp; CO.
          </h1>
          <div className="text-xs italic text-[#e0d8c3] opacity-70">A Symphony of Shadows</div>
        </motion.div>
      </div>

      <nav className="flex flex-col flex-1 px-8 mt-12 space-y-2">
        {config.navLinks.map((link, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(link.href.replace('#', ''))}
            className="text-left py-4 px-4 hover:bg-[#c5a059]/10 group transition-all duration-300 flex items-center justify-between border-b border-[#c5a059]/10"
          >
            <span className="brun-text-header text-lg tracking-widest text-[#e0d8c3] group-hover:text-[#c5a059] transition-colors">
              {link.label}
            </span>
            <ArrowRight size={16} className="text-[#c5a059] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
          </button>
        ))}
      </nav>

      <div className="p-10 flex justify-between items-center border-t border-[#c5a059]/20">
        <div className="flex gap-6 items-center text-[#c5a059]">
          <User size={20} className="cursor-pointer hover:text-white transition-colors" />
          <ShoppingBag size={20} className="cursor-pointer hover:text-white transition-colors" />
        </div>
        <div className="text-xs font-bold uppercase tracking-widest text-black bg-[#c5a059] px-6 py-2 cursor-pointer hover:bg-white transition-colors brun-text-header">
          Enter
        </div>
      </div>
    </aside>
  );
}
