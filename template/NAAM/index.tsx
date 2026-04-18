import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

        <footer className="bg-[#2D232E] text-white py-20 px-6 md:px-16 mt-32">
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
                <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
                <li><button onClick={() => setCurrentPage('shop')}>Shop</button></li>
                <li><button onClick={() => setCurrentPage('partners')}>Partners</button></li>
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
      </div>
    </CartContext.Provider>
  );
}
