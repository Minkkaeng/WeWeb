import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@framework/utils';
import theme from './theme-config.json';
import './GlobalStyles.css';

// Components (To be created)
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Partners from './pages/Partners';

// Type Definitions
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

export default function NaamTemplate() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  useEffect(() => {
    // Set Theme CSS Variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--naam-${key}`, value);
    });
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isCartOpen, setIsCartOpen }}>
      <div className="naam-template-root min-h-screen selection:bg-[#5E2D91] selection:text-white">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        <main className="pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
              {currentPage === 'shop' && <Shop />}
              {currentPage === 'partners' && <Partners />}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="bg-[#2D232E] text-white py-20 px-6 md:px-16 mt-32 pb-32 md:pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h2 className="naam-heading text-4xl mb-6">NAAM.</h2>
              <p className="text-gray-400 max-w-sm mb-8">
                베이커리의 가치를 더하는 파트너, NAAM. <br/>
                우리는 가장 따뜻하고 아늑한 순간을 연구합니다.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Explore</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><button onClick={() => setCurrentPage('home')} className="bg-transparent border-none text-gray-400 cursor-pointer">Home</button></li>
                <li><button onClick={() => setCurrentPage('shop')} className="bg-transparent border-none text-gray-400 cursor-pointer">Shop</button></li>
                <li><button onClick={() => setCurrentPage('partners')} className="bg-transparent border-none text-gray-400 cursor-pointer">Partners</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-400 text-sm font-light">
                <li>서울특별시 강남구 테헤란로 123</li>
                <li>hello@naam-bakery.com</li>
                <li>02-1234-5678</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-xs text-gray-500 flex justify-between">
            <span>&copy; {new Date().getFullYear()} NAAM. All rights reserved.</span>
            <span>Design by WeWeb Studio</span>
          </div>
        </footer>

        {/* Mobile App Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-lg border-t border-gray-100 px-8 py-3 flex justify-between items-center z-[2000] pb-safe">
          {[
            { label: 'HOME', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>, value: 'home' },
            { label: 'SHOP', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>, value: 'shop' },
            { label: 'PARTNER', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, value: 'partners' },
            { label: 'CART', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>, value: 'cart' }
          ].map((nav) => (
            <button 
              key={nav.label} 
              onClick={() => nav.value === 'cart' ? setIsCartOpen(true) : setCurrentPage(nav.value)}
              className={cn(
                "flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer",
                currentPage === nav.value ? "text-[#5E2D91]" : "text-gray-400"
              )}
            >
              {nav.icon}
              <span className="text-[9px] font-bold">{nav.label}</span>
            </button>
          ))}
        </div>
      </div>
    </CartContext.Provider>
  );
}
