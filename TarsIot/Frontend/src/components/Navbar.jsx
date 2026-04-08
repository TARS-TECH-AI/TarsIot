import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate ,Link} from 'react-router-dom';
import Icon from './Icon';


const NAV_LINKS = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Products', to: '/products' },
  { name: 'Clients', to: '/clients' },
  // { name: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10,15,30,0.97)' : 'rgba(10,15,30,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(34,211,238,0.12)',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo ─────────────────────────────────── */}
          <button
            className="flex items-center gap-3 focus:outline-none"
            onClick={() => {
              closeMenu();
              navigate('/');
            }}
            aria-label="Go to Home"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #2dd4bf)',
                boxShadow: '0 0 15px rgba(34,211,238,0.4)',
              }}
            >
              <Icon name="cpu" className="w-5 h-5 text-navy-900" style={{ color: '#0a0f1e' }} />
            </div>
            <span
              className="font-orbitron font-bold text-xl tracking-widest"
              style={{ color: '#22d3ee', textShadow: '0 0 15px rgba(34,211,238,0.4)' }}
            >
              TARS<span className="text-white">IoT</span>
            </span>
          </button>

          {/* ── Desktop Links ─────────────────────────── */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((nav) => (
              <NavLink
                key={nav.name}
                to={nav.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-link-item px-3 lg:px-4 py-2 text-sm lg:text-base  uppercase transition-colors duration-200 focus:outline-none ${
                    isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-300'
                  }`
                }
                style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, letterSpacing: '0.08em' }}
              >
                {nav.name}
              </NavLink>
            ))}
            <Link to="/contact"
              className="btn-primary ml-4 px-5 py-2 rounded-lg tracking-wider"
              style={{ fontSize: '0.72rem' }}
            >
              Get Demo
            </Link>
          </div>

          {/* ── Hamburger Button ──────────────────────── */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors focus:outline-none"
            style={{ background: menuOpen ? 'rgba(34,211,238,0.1)' : 'transparent' }}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {/* Line 1 */}
            <span
              className="block w-6 h-0.5 bg-white rounded transition-all duration-300"
              style={{
                transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            {/* Line 2 */}
            <span
              className="block w-6 h-0.5 bg-white rounded transition-all duration-300"
              style={{
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? 'translateX(-10px)' : 'none',
              }}
            />
            {/* Line 3 */}
            <span
              className="block w-6 h-0.5 bg-white rounded transition-all duration-300"
              style={{
                transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ──────────────────────── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden mobile-menu-enter"
          style={{
            borderTop: '1px solid rgba(34,211,238,0.15)',
            background: 'rgba(10,15,30,0.98)',
          }}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((nav) => (
              <NavLink
                key={nav.name}
                to={nav.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `w-full text-left px-4 py-3 rounded-lg font-semibold text-base uppercase tracking-wider transition-all duration-200 focus:outline-none ${
                    isActive ? 'text-cyan-400 border-l-2 border-cyan-400' : 'text-slate-300 hover:text-cyan-300'
                  }`
                }
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  letterSpacing: '0.08em',
                  background: 'transparent',
                }}
              >
                {nav.name}
              </NavLink>
            ))}
            <Link to="/contact"
              onClick={closeMenu}
              className="btn-primary mt-3 px-5 py-3 rounded-lg tracking-wider w-full text-center"
              style={{ fontSize: '0.72rem' }}
            >
              Get Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}