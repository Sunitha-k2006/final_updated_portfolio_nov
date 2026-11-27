import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = ['Home','About','Skills','Projects','Experience','Achievements','Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0f1e]/95 backdrop-blur-md shadow-lg shadow-violet-900/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span
          onClick={() => scrollTo('home')}
          className="text-lg font-bold cursor-pointer bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          SK
        </span>
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="text-sm text-slate-300 hover:text-violet-400 transition-colors duration-200 font-medium"
              >
                {l}
              </button>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-slate-300" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0d1226]/98 backdrop-blur-md border-t border-violet-900/20 px-6 py-4">
          {links.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="block w-full text-left py-3 text-slate-300 hover:text-violet-400 transition-colors text-sm font-medium border-b border-slate-800/50 last:border-0"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
