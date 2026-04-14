import config from './theme-config.json';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Studio from './pages/Studio';
import Journal from './pages/Journal';
import Contact from './pages/Contact';

export default function MinimalistStudioTemplate() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden bg-[#050505] selection:bg-white selection:text-black"
      style={{ fontFamily: config.fonts.body }}
    >
      {/* Universal Header - mix-blend-mode: difference */}
      <header className="fixed top-0 left-0 z-50 w-full px-6 md:px-12 py-8 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
        
        {/* Logo/Brand (Clickable wrapper) */}
        <div className="pointer-events-auto cursor-pointer" onClick={() => scrollToSection('home')}>
          <span style={{ fontFamily: config.fonts.heading }} className="text-2xl font-normal tracking-wide">
            KC.
          </span>
        </div>

        {/* Global Navigation */}
        <nav className="hidden md:flex gap-8 pointer-events-auto">
          {config.navLinks.map((link, idx) => {
            const viewKey = link.href.replace('#', '');
            const targetId = viewKey === 'works' ? 'projects' : viewKey;
            return (
              <button 
                key={idx} 
                onClick={() => scrollToSection(targetId)}
                className="text-xs font-semibold tracking-[0.2em] uppercase transition-colors relative opacity-80 hover:opacity-100"
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Trigger */}
        <button className="md:hidden pointer-events-auto text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </header>

      {/* Single Page Sections */}
      <section id="home"><Home /></section>
      <section id="projects"><Projects /></section>
      <section id="about"><Studio /></section>
      <section id="journal"><Journal /></section>
      <section id="contact"><Contact /></section>

    </div>
  );
}
