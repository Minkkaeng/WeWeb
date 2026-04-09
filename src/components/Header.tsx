import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tighter text-deep-black">
          WeWeb
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-blood-coral hover:-translate-y-0.5 transition-all">Work</Link>
          <Link to="/theme" className="text-blood-coral font-bold hover:-translate-y-0.5 transition-all">Library</Link>
          <a href="/#about" className="hover:text-blood-coral hover:-translate-y-0.5 transition-all">About</a>
          <a href="/#contact" className="hover:text-blood-coral hover:-translate-y-0.5 transition-all">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
};
