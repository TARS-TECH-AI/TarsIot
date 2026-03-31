import React from 'react';

const CLIENTS = [
  { name: 'SteelTech Industries', sector: 'Manufacturing', logo: '⚙️' },
  { name: 'AgroSmart India',      sector: 'Agriculture',   logo: '🌾' },
  { name: 'PowerGrid Solutions',  sector: 'Energy',        logo: '⚡' },
  { name: 'ColdChain Logistics',  sector: 'Logistics',     logo: '🚚' },
  { name: 'MediTrack Health',     sector: 'Healthcare',    logo: '🏥' },
  { name: 'SmartCity Nagpur',     sector: 'Government',    logo: '🏙️' },
  { name: 'OceanPort Authority',  sector: 'Maritime',      logo: '⚓' },
  { name: 'TechPark Pune',        sector: 'Real Estate',   logo: '🏢' },
];

const TESTIMONIALS = [
  {
    name: 'Vikram Rathore',
    role: 'CTO, SteelTech Industries',
    text: 'TarsIoT reduced our unplanned downtime by 67% in the first six months. Their predictive analytics platform is genuinely world-class and the support team is exceptional.',
  },
  {
    name: 'Sunita Rao',
    role: 'Director, SmartCity Nagpur',
    text: 'We deployed 2,000+ sensors across the city in under 3 weeks. The TarsEdge gateways are rock-solid in the harshest field conditions and the dashboard is incredibly intuitive.',
  },
];

const SECTOR_STATS = [
  { val: '120+', label: 'Enterprise Clients' },
  { val: '18+',  label: 'Countries' },
  { val: '8',    label: 'Industry Sectors' },
  { val: '1M+',  label: 'Devices Deployed' },
];

export default function Clients() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0a0f1e' }}>
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest text-cyan-400 mb-4"
              style={{
                fontFamily: 'Share Tech Mono, monospace',
                background: 'rgba(34,211,238,0.08)',
                border: '1px solid rgba(34,211,238,0.2)',
              }}
            >
              OUR CLIENTS
            </div>
            <h1 className="section-title text-4xl sm:text-5xl font-bold text-white mb-5">
              Trusted by <span style={{ color: '#22d3ee' }}>Industry Leaders</span>
            </h1>
            <p
              className="text-slate-400 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              120+ enterprises across 18 countries trust TarsIoT for their critical IoT
              infrastructure.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {SECTOR_STATS.map(({ val, label }) => (
              <div key={label} className="stat-card border-glow p-5 rounded-xl text-center card-hover">
                <div className="font-orbitron text-3xl font-bold mb-1" style={{ color: '#22d3ee' }}>
                  {val}
                </div>
                <div className="text-slate-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Client grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {CLIENTS.map(({ name, sector, logo }) => (
              <div
                key={name}
                className="card-hover border-glow p-5 rounded-2xl text-center"
                style={{ background: 'rgba(13,21,38,0.8)' }}
              >
                <div className="text-4xl mb-3">{logo}</div>
                <h3 className="font-orbitron text-white font-semibold text-xs mb-2 leading-snug">
                  {name}
                </h3>
                <span
                  className="px-2 py-0.5 rounded text-xs"
                  style={{
                    fontFamily: 'Share Tech Mono, monospace',
                    color: '#22d3ee',
                    background: 'rgba(34,211,238,0.08)',
                  }}
                >
                  {sector}
                </span>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <h2 className="section-title text-2xl font-bold text-white text-center mb-10">
            What They <span style={{ color: '#22d3ee' }}>Say</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {TESTIMONIALS.map(({ name, role, text }) => (
              <div
                key={name}
                className="border-glow p-7 rounded-2xl"
                style={{ background: 'rgba(13,21,38,0.9)' }}
              >
                {/* Quote mark */}
                <div
                  className="text-5xl font-orbitron mb-3 leading-none"
                  style={{ color: 'rgba(34,211,238,0.25)' }}
                >
                  "
                </div>
                <p
                  className="text-slate-300 text-base italic mb-6 leading-relaxed"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {text}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                    style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.25)' }}
                  >
                    👤
                  </div>
                  <div>
                    <p className="font-orbitron text-white font-semibold text-sm">{name}</p>
                    <p
                      className="text-cyan-400 text-xs mt-0.5"
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      {role}
                    </p>
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