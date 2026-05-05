import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const cartItems = [
    { id: 1, name: 'MOSS TECH JACKET', price: '₩249,000', size: 'L', qty: 1, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, name: 'SILICON OVERSIZED TEE', price: '₩65,000', size: 'M', qty: 2, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[2000]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full max-w-md h-full bg-white z-[2001] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-8 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-[#004D40]" />
                <h2 className="text-xl font-black tracking-tighter uppercase">Your Archive</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 transition-colors rounded-full border-none bg-transparent cursor-pointer">
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-grow overflow-y-auto p-8">
              {cartItems.length > 0 ? (
                <div className="space-y-8">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex gap-6">
                      <div className="w-24 h-32 bg-[#F9F9F9] flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply grayscale-[0.3]" />
                      </div>
                      <div className="flex-grow flex flex-col justify-between py-1">
                        <div>
                          <h3 className="text-sm font-black tracking-tight mb-1">{item.name}</h3>
                          <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Size: {item.size}</p>
                        </div>
                        <div className="flex justify-between items-end">
                          <div className="flex items-center border border-gray-100 bg-[#F9F9F9]">
                            <button className="p-2 hover:text-[#004D40] bg-transparent border-none cursor-pointer"><Minus size={12} /></button>
                            <span className="text-xs font-black px-3">{item.qty}</span>
                            <button className="p-2 hover:text-[#004D40] bg-transparent border-none cursor-pointer"><Plus size={12} /></button>
                          </div>
                          <span className="text-sm font-black text-[#004D40]">{item.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-[#F9F9F9] rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag size={32} className="text-gray-200" />
                  </div>
                  <p className="text-lg font-black tracking-tighter mb-2">ARCHIVE IS EMPTY</p>
                  <p className="text-xs text-gray-400 font-bold mb-8 uppercase tracking-widest">당신의 스타일을 채워보세요.</p>
                  <button 
                    onClick={onClose}
                    className="px-8 py-4 bg-[#E6FF00] text-[#121212] text-[11px] font-black tracking-widest uppercase rounded-none border-none cursor-pointer hover:bg-[#121212] hover:text-white transition-all"
                  >
                    Start Browsing
                  </button>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-8 bg-[#F9F9F9] border-t border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Total Amount</span>
                <span className="text-xl font-black text-[#121212]">₩379,000</span>
              </div>
              <div className="p-6 bg-[#E6FF00] mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-black uppercase tracking-widest">Estimated Shipping</span>
                  <span className="text-[11px] font-black uppercase tracking-widest">Free</span>
                </div>
              </div>
              <button className="w-full py-5 bg-[#004D40] text-white text-sm font-black tracking-[0.2em] uppercase rounded-none border-none cursor-pointer hover:bg-[#121212] transition-all shadow-xl">
                Proceed to Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
