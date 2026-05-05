import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import CartDrawer from './CartDrawer';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartItems, isCartOpen, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const targetId = id.toLowerCase();
    
    if (location.pathname !== '/template/grand-taste') {
      navigate('/template/grand-taste');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-8'}`}>
        <div className="ns-container flex items-center justify-between">
          <Link to="/template/grand-taste" className="flex items-center gap-2 cursor-pointer">
            <span className={`ns-heading text-2xl md:text-3xl font-black tracking-tight transition-colors ${isScrolled ? 'text-ns-secondary' : 'text-white'}`}>GRAND TASTE</span>
            <span className="w-1.5 h-1.5 bg-ns-primary rounded-full mt-2"></span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-12">
            {['Story', 'Menu', 'Journal', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item)}
                className={`text-[11px] font-black tracking-[0.3em] uppercase transition-colors ${isScrolled ? 'text-ns-secondary hover:text-ns-primary' : 'text-white/80 hover:text-white'}`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <div className={`hidden md:flex items-center gap-6 ${isScrolled ? 'text-ns-secondary' : 'text-white'}`}>
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="hover:text-ns-primary transition-colors"
              >
                <Search size={20} />
              </button>
              <Link to="/template/grand-taste/login" className="hover:text-ns-primary transition-colors"><User size={20} /></Link>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="hover:text-ns-primary transition-colors relative"
              >
                <ShoppingBag size={20} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-ns-primary text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                    {cartItems.reduce((sum, i) => sum + i.quantity, 0)}
                  </span>
                )}
              </button>
            </div>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden transition-colors ${isScrolled ? 'text-ns-secondary' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-8 flex flex-col gap-6 lg:hidden"
            >
              {['Story', 'Menu', 'Journal', 'Contact'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item)}
                  className="text-xl font-black text-ns-secondary tracking-tight text-left"
                >
                  {item}
                </button>
              ))}
              <div className="pt-6 border-t border-gray-100 flex gap-8">
                <Link to="/template/grand-taste/login" className="flex items-center gap-2 text-sm font-bold text-ns-secondary"><User size={18} /> Account</Link>
                <button 
                  onClick={() => { setIsMobileMenuOpen(false); setIsCartOpen(true); }} 
                  className="flex items-center gap-2 text-sm font-bold text-ns-secondary"
                >
                  <ShoppingBag size={18} /> Cart ({cartItems.length})
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[200] flex flex-col items-center justify-center p-6"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-10 right-10 p-4 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={32} />
            </button>
            <div className="w-full max-w-4xl text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-ns-primary mb-8 block">What are you looking for?</span>
              <input 
                autoFocus
                type="text" 
                placeholder="Search products, stories, journal..."
                className="w-full bg-transparent border-b-2 border-ns-secondary py-6 text-3xl md:text-5xl font-black text-ns-secondary focus:outline-none placeholder:text-gray-100"
              />
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <span className="text-xs font-bold text-gray-400">Trending:</span>
                {['Wagyu Steak', 'Truffle Pasta', 'Organic Milk', 'HACCP'].map(tag => (
                  <button key={tag} className="text-xs font-black text-ns-secondary border border-gray-100 px-4 py-2 rounded-full hover:border-ns-primary hover:text-ns-primary transition-all">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
      />
    </>
  );
}
