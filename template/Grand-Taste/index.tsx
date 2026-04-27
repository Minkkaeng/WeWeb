import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { CartProvider } from './context/CartContext';
import './GlobalStyles.css';

export default function GrandTasteTemplate() {
  useEffect(() => {
    document.title = "GRAND TASTE | Premium Mealkit";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
