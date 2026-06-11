import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Ask Jay-ar', href: '#ask' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg-base/80 backdrop-blur border-b border-border">
      <nav className="mx-auto flex items-center justify-between px-6 h-14" style={{ maxWidth: 'var(--content-max, 1100px)' }}>
        {/* Logo */}
        <a href="#" className="font-display text-text-primary text-sm font-semibold tracking-tight">
          Jay-ar<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`transition-colors ${
                  active === href.slice(1) ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-1.5 text-sm rounded border border-accent text-accent hover:bg-accent/10 transition-colors font-display"
          >
            Hire Me
          </a>
          <button
            className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-bg-base/95 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm transition-colors ${
                active === href.slice(1) ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 inline-flex items-center justify-center px-4 py-2 text-sm rounded border border-accent text-accent hover:bg-accent/10 transition-colors font-display"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
