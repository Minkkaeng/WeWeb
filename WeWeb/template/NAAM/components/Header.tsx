import React from 'react';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '../index';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-16 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/70 backdrop-blur-xl border border-white/20 px-8 py-3 rounded-full shadow-lg">
          {/* Logo */}
          <div 
            className="naam-heading text-2xl font-black text-[#5E2D91] cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            NAAM.
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {[
              { id: 'home', label: 'Home' },
              { id: 'shop', label: 'Shop' },
              { id: 'partners', label: 'Partners' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => setCurrentPage(link.id)}
                className={`text-sm font-medium transition-colors tracking-wide ${
                  currentPage === link.id ? 'text-[#5E2D91]' : 'text-[#9A8C98] hover:text-[#5E2D91]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <button className="text-[#2D232E] hover:text-[#5E2D91] transition-colors">
              <User size={20} />
            </button>
            <button 
              className="relative text-[#2D232E] hover:text-[#5E2D91] transition-colors"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FFC526] text-[#2D232E] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[200]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[210] p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="naam-heading text-2xl">Your Cart</h2>
                <button onClick={() => setIsCartOpen(false)}><X size={24} /></button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-gray-400">
                    <p>장바구니가 비어 있습니다.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4 border-b border-gray-50 pb-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                         <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-400 mb-2">{item.category}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold">₩{item.price.toLocaleString()}</span>
                          <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500">
                        <X size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-500">Total</span>
                    <span className="text-2xl font-bold text-[#5E2D91]">₩{totalPrice.toLocaleString()}</span>
                  </div>
                  <button className="w-full py-4 bg-[#5E2D91] text-white rounded-2xl font-bold hover:bg-[#4A2374] transition-all">
                    Checkout Now
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
