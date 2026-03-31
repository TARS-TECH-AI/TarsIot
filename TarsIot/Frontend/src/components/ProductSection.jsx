import React from 'react';
import Icon from '../components/Icon';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    name: 'Rail Track End Point Detection System',
    category: 'Industrial',
    price: 'Custom Pricing',
    icon: 'radar',
    specs: [
      'Advanced multi-level detection system for railway end point monitoring',
      'Dual sensor reliability, wireless communication, and comprehensive alert mechanisms for locomotive safety',
      '4 level detection indication',
      'Hooter for close distance indication',
      'Wireless communication and alarming system for locomotive',
      'Water resistance',
      'Operating frequency 433MHz',
      'Wide range operation up to 1km',
      'Operating voltage 12-35V',
    ],
  },
];

export default function Products() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#060d1f' }}>
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-16">
            <span
              style={{
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: '11px',
                letterSpacing: '0.2em',
                color: '#22d3ee',
                textTransform: 'uppercase',
              }}
            >
              // Products
            </span>
            <h1
              className="font-orbitron text-white font-bold mt-3"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              Hardware &amp;{' '}
              <span
                style={{
                  WebkitTextStroke: '1px #22d3ee',
                  color: 'transparent',
                }}
              >
                Software
              </span>
            </h1>
            <p
              className="text-slate-400 mt-4 max-w-xl"
              style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '1.1rem' }}
            >
              Production-ready IoT hardware and cloud software, engineered together for seamless
              end-to-end integration.
            </p>
            {/* Divider */}
            <div
              className="mt-8"
              style={{
                height: '2px',
                background: 'linear-gradient(90deg, #22d3ee 0%, rgba(34,211,238,0.1) 60%, transparent 100%)',
                maxWidth: '400px',
              }}
            />
          </div>

          {/* Product Cards — horizontal layout */}
          <div className="flex flex-col gap-8">
            {PRODUCTS.map(({ name, category, price, icon, specs }) => (
              <div
                key={name}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(34,211,238,0.15)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                }}
              >
                {/* Accent top bar */}
                <div
                  style={{
                    height: '3px',
                    background: 'linear-gradient(90deg, #22d3ee, #2dd4bf, transparent)',
                  }}
                />

                <div className="flex flex-col lg:flex-row">
                  {/* Left — identity panel */}
                  <div
                    className="flex flex-col justify-between p-8 lg:w-72 flex-shrink-0"
                    style={{
                      borderRight: '1px solid rgba(34,211,238,0.1)',
                    }}
                  >
                    <div>
                      {/* Icon */}
                      <div
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '12px',
                          background: 'rgba(34,211,238,0.08)',
                          border: '1px solid rgba(34,211,238,0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '20px',
                        }}
                      >
                        <Icon name={icon} className="w-8 h-8 text-cyan-400" />
                      </div>

                      {/* Category pill */}
                      <span
                        style={{
                          fontFamily: 'Share Tech Mono, monospace',
                          fontSize: '10px',
                          letterSpacing: '0.15em',
                          color: '#22d3ee',
                          background: 'rgba(34,211,238,0.08)',
                          border: '1px solid rgba(34,211,238,0.2)',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {category}
                      </span>

                      <h2
                        className="font-orbitron text-white font-bold mt-4"
                        style={{ fontSize: '1rem', lineHeight: 1.4 }}
                      >
                        {name}
                      </h2>
                    </div>

                    <div className="mt-8">
                      <p
                        style={{
                          fontFamily: 'Share Tech Mono, monospace',
                          fontSize: '11px',
                          color: 'rgba(34,211,238,0.6)',
                          letterSpacing: '0.1em',
                          marginBottom: '4px',
                        }}
                      >
                        PRICING
                      </p>
                      <p
                        className="font-orbitron font-bold text-cyan-400"
                        style={{ fontSize: '1.25rem' }}
                      >
                        {price}
                      </p>

                      <Link
                        to="/product-detail"
                        className="btn-primary mt-5 py-3 rounded-lg tracking-wider block text-center"
                        style={{ fontSize: '13px' }}
                      >
                        Explore More →
                      </Link>
                    </div>
                  </div>

                  {/* Right — specs grid */}
                  <div className="flex-1 p-8">
                    <p
                      style={{
                        fontFamily: 'Share Tech Mono, monospace',
                        fontSize: '10px',
                        letterSpacing: '0.2em',
                        color: 'rgba(148,163,184,0.6)',
                        textTransform: 'uppercase',
                        marginBottom: '20px',
                      }}
                    >
                      Specifications
                    </p>

                    <div
                      className="grid sm:grid-cols-2 gap-x-8 gap-y-3"
                    >
                      {specs.map((s, i) => (
                        <div
                          key={s}
                          className="flex items-start gap-3"
                          style={{ fontFamily: 'Rajdhani, sans-serif' }}
                        >
                          <span
                            style={{
                              fontFamily: 'Share Tech Mono, monospace',
                              fontSize: '10px',
                              color: '#22d3ee',
                              marginTop: '3px',
                              flexShrink: 0,
                              opacity: 0.6,
                            }}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span
                            className="text-slate-300"
                            style={{ fontSize: '0.9rem', lineHeight: 1.5 }}
                          >
                            {s}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom tech tags */}
                    <div className="flex flex-wrap gap-2 mt-8 pt-6"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      {['433MHz', '12–35V', 'Up to 1km', 'IP-rated', 'Wireless'].map(tag => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: 'Share Tech Mono, monospace',
                            fontSize: '10px',
                            color: '#94a3b8',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            padding: '4px 10px',
                            borderRadius: '4px',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}