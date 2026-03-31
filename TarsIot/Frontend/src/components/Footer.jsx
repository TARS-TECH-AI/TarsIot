import React from 'react';
import Icon from './Icon';

const NAV_LINKS   = ['Home', 'About Us', 'Services', 'Products', 'Clients', 'Contact'];
const SOLUTIONS   = ['IoT Connectivity', 'Analytics & Insights', 'IoT Security Suite', 'Cloud Integration', 'Edge AI & Computing', 'Device Lifecycle Mgmt'];
const SOCIAL_ICONS = ['globe', 'wifi', 'shield'];

const CONTACT_INFO = [
  { icon: 'mail',     text: 'hello@tarsiot.com' },
  { icon: 'phone',    text: '+91 98765 43210' },
  { icon: 'location', text: 'Nagpur, Maharashtra, India' },
];

export default function Footer({ setPage }) {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#060c1a',
        borderTop: '1px solid rgba(34,211,238,0.12)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* ── Grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#22d3ee,#2dd4bf)' }}
              >
                <Icon name="cpu" className="w-5 h-5" style={{ color: '#0a0f1e' }} />
              </div>
              <span
                className="font-orbitron font-bold text-xl tracking-widest"
                style={{ color: '#22d3ee' }}
              >
                TARS<span className="text-white">IoT</span>
              </span>
            </div>

            <p
              className="text-slate-400 text-sm leading-relaxed mb-5"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Empowering industries with intelligent IoT solutions. Connecting the physical world
              to digital intelligence.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIAL_ICONS.map((ic) => (
                <div
                  key={ic}
                  className="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                  style={{
                    background: 'rgba(34,211,238,0.1)',
                    border: '1px solid rgba(34,211,238,0.2)',
                  }}
                >
                  <Icon name={ic} className="w-4 h-4 text-cyan-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs text-cyan-400 mb-5 tracking-widest uppercase"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => setPage(link)}
                    className="text-slate-400 hover:text-cyan-300 text-sm transition-colors flex items-center gap-2 group focus:outline-none"
                    style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-cyan-400 transition-all duration-300" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4
              className="text-xs text-cyan-400 mb-5 tracking-widest uppercase"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Services
            </h4>
            <ul className="space-y-2.5">
              {SOLUTIONS.map((s) => (
                <li
                  key={s}
                  className="text-slate-400 text-sm flex items-center gap-2"
                  style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 opacity-70 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs text-cyan-400 mb-5 tracking-widest uppercase"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              {CONTACT_INFO.map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon name={icon} className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span
                    className="text-slate-400 text-sm"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ──────────────────────────────────── */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(34,211,238,0.08)' }}
        >
          <p className="text-slate-500 text-xs font-mono">
            © {year} Tars Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div
            className="flex gap-5 text-slate-500 text-xs"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <span
                key={item}
                className="hover:text-cyan-400 cursor-pointer transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}