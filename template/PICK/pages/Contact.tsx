import React from 'react';
import { motion } from 'framer-motion';
import config from '../theme-config.json';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full bg-[#f3e9dc] relative py-40 overflow-hidden">
      {/* 1. Large Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-[0.03]">
        <h3 className="pick-text-header text-[40vw] select-none text-black">CONNECT</h3>
      </div>

      {/* 2. Glass Contact Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-10">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center space-y-12">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
           >
             <h4 className="text-[12vw] md:text-[8vw] pick-text-header leading-[0.75] mb-12" style={{ fontFamily: config.fonts.heading }}>
               HAVE<br/>A<br/>PICK.
             </h4>
           </motion.div>

           <div className="space-y-6">
              <div className="group cursor-pointer">
                 <span className="text-[8px] font-black uppercase tracking-[0.6em] mb-2 block opacity-30">Inquiry</span>
                 <div className="flex items-center justify-between border-b-[2px] border-black pb-4 hover:border-[#be3127] transition-all">
                    <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase" style={{ fontFamily: config.fonts.heading }}>hello@pick.co.kr</span>
                    <ArrowUpRight size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                 </div>
              </div>
              <div className="group cursor-pointer">
                 <span className="text-[8px] font-black uppercase tracking-[0.6em] mb-2 block opacity-30">Career</span>
                 <div className="flex items-center justify-between border-b-[2px] border-black pb-4 hover:border-[#be3127] transition-all">
                    <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase" style={{ fontFamily: config.fonts.heading }}>join@pick.co.kr</span>
                    <ArrowUpRight size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                 </div>
              </div>
           </div>
        </div>

        {/* Right: Map/Office Glass Card */}
        <div className="pick-glass pick-radius-xl p-16 flex flex-col justify-between shadow-2xl border border-white/40">
           <div>
             <div className="w-16 h-16 pick-grid-border rounded-full flex items-center justify-center bg-black text-[#be3127] mb-12 shadow-lg">
                <MapPin size={32} />
             </div>
             <p className="text-3xl md:text-4xl font-bold leading-none mb-10">
                SEOUL LAB <br/>
                EXPERIENCE CENTER <br/>
                B2 FL.
             </p>
             <div className="flex flex-col gap-2 font-black text-[10px] uppercase tracking-[0.4em] opacity-40">
                <p>123 Teheran-ro, Gangnam-gu</p>
                <p>Seoul 06123, South Korea</p>
             </div>
           </div>

           <div className="mt-20">
              <div className="flex justify-between items-end">
                <div className="space-y-2">
                   <p className="text-[10px] font-black opacity-30">Operating Hours</p>
                   <p className="font-bold text-sm uppercase">Daily 11:00 — 21:00</p>
                </div>
                <button className="flex items-center gap-4 group">
                  <span className="text-xs font-black tracking-widest border-b border-black group-hover:text-[#be3127] group-hover:border-[#be3127] transition-all">Directions</span>
                </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
