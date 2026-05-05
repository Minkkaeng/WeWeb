import { useEffect, useRef, useState } from 'react';
import config from './theme-config.json';
import Home from './pages/Home';
import Categories from './pages/Categories';
import BestProducts from './pages/BestProducts';
import EventBanner from './pages/EventBanner';
import NewArrivals from './pages/NewArrivals';
import Magazine from './pages/Magazine';
import InstagramFeed from './pages/InstagramFeed';
import BrandStory from './pages/BrandStory';
import '@packages/ui/CartSidebar';

export default function FreshGroveTemplate() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const layoutRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const container = layoutRef.current;
    if(!container) return;

    const handleAdd = (e: any) => {
      const target = e.target as HTMLElement;
      if(target && target.tagName.toLowerCase() === 'fw-product-card') {
        const name = target.getAttribute('name');
        const price = Number(target.getAttribute('price') || 0);
        const image = target.getAttribute('image');
        setCartItems(prev => [...prev, { id: Date.now(), name, price, image }]);
        setIsCartOpen(true);
      }
    };

    const handleRemove = (e: any) => {
       const id = e.detail?.id;
       setCartItems(prev => prev.filter(item => String(item.id) !== String(id)));
    };

    const handleClose = () => setIsCartOpen(false);

    container.addEventListener('fw-action', handleAdd);
    container.addEventListener('fw-remove', handleRemove);
    container.addEventListener('fw-close', handleClose);

    return () => {
      container.removeEventListener('fw-action', handleAdd);
      container.removeEventListener('fw-remove', handleRemove);
      container.removeEventListener('fw-close', handleClose);
    }
  }, []);

  return (
    <div 
      ref={layoutRef}
      className="relative w-full overflow-hidden selection:bg-[#8FA893] selection:text-white"
      style={{ backgroundColor: config.colors.background, color: config.colors.text, fontFamily: config.fonts.body }}
    >
      {/* Global Header */}
      <header className={`fixed top-0 left-0 z-50 w-full px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-[#8f9b8a]/20 text-gray-900' : 'bg-transparent border-transparent text-white'}`}>
        {/* Logo */}
        <div className={`cursor-pointer text-2xl tracking-widest uppercase font-black transition-colors ${isScrolled ? 'text-[#8f9b8a]' : 'text-white'}`} onClick={() => scrollToSection('home')} style={{ fontFamily: config.fonts.heading }}>
          {config.themeName}
        </div>

        {/* Nav */}
        <nav className="hidden md:flex gap-10 items-center">
          {config.navLinks.map((link, idx) => (
            <button 
              key={idx} 
              onClick={() => scrollToSection(link.href.replace('#', ''))}
              className="text-[13px] font-bold tracking-[0.15em] transition-opacity opacity-70 hover:opacity-100 uppercase"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu trigger & Cart icon */}
        <div className="flex items-center gap-6">
          <button onClick={() => setIsCartOpen(true)} className="relative p-2 hover:opacity-70 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF4D4D] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg transform scale-110">
                {cartItems.length}
              </span>
            )}
          </button>
          <button className="md:hidden hover:opacity-70">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </header>

      {/* Pages */}
      <section id="home"><Home /></section>
      <section id="categories"><Categories /></section>
      <section id="best"><BestProducts /></section>
      <section id="event"><EventBanner /></section>
      <section id="arrivals"><NewArrivals /></section>
      <section id="magazine"><Magazine /></section>
      <section id="instagram"><InstagramFeed /></section>
      <section id="story"><BrandStory /></section>

      {/* @ts-ignore -- Custom element */}
      <fw-cart-sidebar open={isCartOpen ? "true" : "false"} items={JSON.stringify(cartItems)}></fw-cart-sidebar>
    </div>
  );
}
