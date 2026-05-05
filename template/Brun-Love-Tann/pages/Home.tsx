import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden px-8 md:px-16 py-24 flex flex-col items-center">
      <div className="max-w-screen-2xl mx-auto w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 w-full text-center"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] w-full relative mb-16 overflow-hidden border border-[#c5a059]/30">
            <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Hero" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-12 items-center">
               <h2 className="brun-text-header text-[6vw] md:text-[4vw] text-[#c5a059] leading-none mb-4">A SYMPHONY OF SHADOWS</h2>
               <p className="text-xl md:text-2xl text-[#e0d8c3] italic max-w-2xl text-center">
                 Embrace the darkness. Discover elegance in the twilight hours with our latest autumn/winter archives.
               </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
