import React from 'react';
import Icon from '../components/Icon';

const STATS = [
  { val: '500+',  label: 'Connected Devices' },
  { val: '99.9%', label: 'Uptime SLA' },
  { val: '50ms',  label: 'Avg Latency' },
  { val: '120+',  label: 'Enterprise Clients' },
];

const FEATURES = [
  { icon: 'wifi',     title: 'Real-Time Monitoring',  desc: 'Live data streams from thousands of endpoints with sub-second latency and automatic failover.' },
  { icon: 'shield',   title: 'Enterprise Security',   desc: 'End-to-end encryption and zero-trust architecture to secure every device in your fleet.' },
  { icon: 'cloud',    title: 'Cloud Integration',     desc: 'Seamless AWS, Azure, and GCP integrations with our unified multi-cloud API layer.' },
  { icon: 'chart',    title: 'Predictive Analytics',  desc: 'ML-driven insights help predict equipment failures weeks before they happen.' },
  { icon: 'zap',      title: 'Edge Computing',        desc: 'On-device intelligence processes data locally — works even without internet connectivity.' },
  { icon: 'settings', title: 'Device Management',     desc: 'Provision, update, and monitor your entire device fleet from a single unified dashboard.' },
];

const ORBIT_NODES = [
  { style: { top: '-4%', left: '50%' },   icon: 'wifi'  },
  { style: { top: '50%', right: '-4%' },  icon: 'cloud' },
  { style: { bottom: '-4%', left: '50%' },icon: 'shield'},
  { style: { top: '50%', left: '-4%' },   icon: 'chart' },
];

export default function Home({ setPage }) {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="hero-gradient grid-bg min-h-screen flex items-center pt-14 sm:pt-16 lg:pt-20"
        style={{ minHeight: '100vh' }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">

            {/* Left: text */}
            <div className="text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-xs tracking-widest uppercase"
                style={{
                  fontFamily: 'Share Tech Mono, monospace',
                  background: 'rgba(34,211,238,0.1)',
                  border: '1px solid rgba(34,211,238,0.25)',
                  color: '#22d3ee',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Next-Gen IoT Platform
              </div>

              <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                <span className="text-white">Connect.</span>
                <br />
                <span style={{ color: '#22d3ee', textShadow: '0 0 30px rgba(34,211,238,0.4)' }}>
                  Automate.
                </span>
                <br />
                <span className="text-white">Evolve.</span>
              </h1>

              <p
                className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl"
                style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
              >
                TarsIoT delivers enterprise-grade IoT solutions that connect your physical
                infrastructure to intelligent cloud systems — in real time.
              </p>

              <div className="flex justify-center lg:justify-start flex-wrap gap-3 sm:gap-4">
                <button
                  className="btn-primary px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-xl flex items-center gap-2 text-xs sm:text-sm tracking-wider mx-auto lg:mx-0"
                  onClick={() => setPage('Services')}
                >
                  Explore Solutions
                  <Icon name="arrow" className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: animated orbit graphic */}
            <div className="hidden sm:flex justify-center lg:justify-end">
              <div className="relative w-56 sm:w-72 md:w-80 lg:w-96 h-56 sm:h-72 md:h-80 lg:h-96">
                {/* Rings */}
                <div
                  className="absolute inset-0 rounded-full border opacity-20 animate-ping"
                  style={{ borderColor: '#22d3ee', animationDuration: '3s' }}
                />
                <div
                  className="absolute inset-6 rounded-full border opacity-30"
                  style={{ borderColor: '#22d3ee', animation: 'spin 20s linear infinite' }}
                />
                <div
                  className="absolute inset-12 rounded-full border opacity-20"
                  style={{ borderColor: '#2dd4bf', animation: 'spin 12s linear infinite reverse' }}
                />

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-20 sm:w-28 md:w-36 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(45,212,191,0.1))',
                      border: '1px solid rgba(34,211,238,0.4)',
                      boxShadow: '0 0 40px rgba(34,211,238,0.2)',
                    }}
                  >
                    <Icon name="cpu" className="w-10 sm:w-14 md:w-20 text-cyan-400" />
                  </div>
                </div>

                {/* Orbit nodes */}
                {ORBIT_NODES.map(({ style, icon }, i) => (
                  <div
                    key={i}
                    className="absolute w-8 sm:w-11 rounded-lg sm:rounded-xl flex items-center justify-center"
                    style={{
                      ...style,
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(13,21,38,0.95)',
                      border: '1px solid rgba(34,211,238,0.3)',
                    }}
                  >
                    <Icon name={icon} className="w-4 sm:w-5 text-cyan-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Stats row ─────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mt-10 sm:mt-16">
            {STATS.map(({ val, label }) => (
              <div key={label} className="stat-card border-glow p-3 sm:p-5 rounded-lg sm:rounded-xl text-center card-hover">
                <div
                  className="font-orbitron text-xl sm:text-2xl md:text-3xl font-bold mb-1"
                  style={{ color: '#22d3ee' }}
                >
                  {val}
                </div>
                <div className="text-slate-400 text-xs sm:text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────── */}
      <section className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8" style={{ background: '#0d1526' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Platform <span style={{ color: '#22d3ee' }}>Capabilities</span>
            </h2>
            <p
              className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base md:text-lg"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Everything you need to build, deploy, and scale your IoT infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {FEATURES.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="card-hover border-glow p-4 sm:p-6 rounded-xl sm:rounded-2xl"
                style={{ background: 'rgba(13,21,38,0.8)' }}
              >
                <div
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                  style={{
                    background: 'rgba(34,211,238,0.1)',
                    border: '1px solid rgba(34,211,238,0.2)',
                  }}
                >
                  <Icon name={icon} className="w-5 sm:w-6 text-cyan-400" />
                </div>
                <h3 className="font-orbitron text-white font-semibold text-sm sm:text-base mb-2">{title}</h3>
                <p
                  className="text-slate-400 text-xs sm:text-sm leading-relaxed"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}