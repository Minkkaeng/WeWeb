import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Wind, Zap, Cpu, Shield, ArrowRight, Mail, Globe, Share2, ArrowUpRight } from 'lucide-react';

// Assets
import heroImg from './assets/hero.png';
import fleetImg from './assets/fleet_model1.png';
import sustainabilityImg from './assets/sustainability.png';

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

const VeloceTemplate = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#F9F9F9] text-[#333333] font-sans selection:bg-[#D2B48C] selection:text-white">
      {/* Navbar */}
      <nav className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
      )}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-widest">VELOCE</div>
          <div className="hidden md:flex space-x-12 items-center text-sm font-medium">
            <a href="#" className="hover:text-[#D2B48C] transition-colors">Home</a>
            <a href="#experience" className="hover:text-[#D2B48C] transition-colors">Experience</a>
            <a href="#fleet" className="hover:text-[#D2B48C] transition-colors">Fleet</a>
            <a href="#sustainability" className="hover:text-[#D2B48C] transition-colors">Sustainability</a>
            <button className="px-6 py-2 bg-[#D2B48C] text-white rounded-full hover:bg-[#B09472] transition-all">Book a Ride</button>
          </div>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 2.5 }} className="absolute inset-0">
          <img src={heroImg} alt="Hero" className="w-full h-full object-cover brightness-75" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-10" />
        <div className="relative z-20 text-center text-white px-6">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-[#D2B48C] font-serif italic text-xl mb-4">Quiet Motion, Pure Elegance</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-5xl md:text-8xl font-serif font-bold mb-8 tracking-tight">Veloce: The Art of Motion</motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="px-10 py-4 bg-white text-[#333333] font-bold rounded-full hover:bg-[#D2B48C] hover:text-white transition-all transform hover:scale-105">Explore Models</button>
            <button className="px-10 py-4 border border-white/50 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/20 transition-all">Watch Film</button>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 bg-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-[#D2B48C] font-serif italic text-2xl mb-4">Precision Engineering</h2>
              <h3 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">Technology that disappears.</h3>
              <p className="text-gray-500 text-lg max-w-md leading-relaxed">Veloce is built on the philosophy of "Invisible Tech". We hide advanced components behind a minimalist aesthetic.</p>
            </motion.div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: <Wind size={32} />, title: "Silent Motor", desc: "Proprietary whisper-quiet drive system." },
              { icon: <Zap size={32} />, title: "Long-range Battery", desc: "Up to 120km range on a single charge." },
              { icon: <Cpu size={32} />, title: "Smart Interface", desc: "Integrated minimal display with haptic feedback." },
              { icon: <Shield size={32} />, title: "Active Safety", desc: "360-degree visibility and intelligent ABS." }
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
                <div className="text-[#D2B48C] mb-6">{f.icon}</div>
                <h4 className="text-xl font-bold mb-4">{f.title}</h4>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="py-32 bg-[#F2EDE7]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">The Fleet</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Handcrafted with obsessive attention to detail.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'Veloce One', price: '$3,400' },
              { name: 'Veloce Sport', price: '$4,200' },
              { name: 'Veloce Cargo', price: '$4,800' }
            ].map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white mb-8">
                  <img src={fleetImg} alt={m.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="bg-white px-6 py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all">View Details</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-serif font-bold">{m.name}</h3>
                  <p className="text-xl font-bold text-[#D2B48C]">{m.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-32 bg-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-square rounded-[3rem] overflow-hidden">
              <img src={sustainabilityImg} alt="Sustainability" className="w-full h-full object-cover" />
            </motion.div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-[#D2B48C] font-serif italic text-2xl mb-4">Our Commitment</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold mb-8">Elegance that respects the planet.</h3>
            <p className="text-gray-500 text-lg leading-relaxed mb-12">From 100% recyclable aluminum to zero-waste manufacturing.</p>
            <div className="grid grid-cols-2 gap-8">
              <div><p className="text-4xl font-serif font-bold text-[#D2B48C] mb-2">98%</p><p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Recyclable Parts</p></div>
              <div><p className="text-4xl font-serif font-bold text-[#D2B48C] mb-2">-40%</p><p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Carbon Footprint</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#D2B48C] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight">Ready to experience <br /> the quiet motion?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="px-12 py-5 bg-white text-[#D2B48C] font-bold rounded-full hover:bg-[#333333] hover:text-white transition-all transform hover:scale-105 text-lg">Book a Test Ride</button>
            <button className="px-12 py-5 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg">Find a Gallery</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-24">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h2 className="text-3xl font-serif font-bold tracking-widest mb-8">VELOCE</h2>
            <div className="flex gap-6"><Mail size={20}/><Globe size={20}/><Share2 size={20}/></div>

          </div>
          <div className="flex flex-wrap gap-20">
            <div><h4 className="text-[#D2B48C] uppercase tracking-widest font-bold text-xs mb-8">Models</h4><ul className="text-white/60 space-y-4"><li>Veloce One</li><li>Veloce Sport</li></ul></div>
            <div><h4 className="text-[#D2B48C] uppercase tracking-widest font-bold text-xs mb-8">Company</h4><ul className="text-white/60 space-y-4"><li>Our Story</li><li>Sustainability</li></ul></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VeloceTemplate;
