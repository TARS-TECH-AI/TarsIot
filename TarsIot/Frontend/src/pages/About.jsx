import React from 'react';
import Icon from '../components/Icon';

const METRICS = [
  { label: 'Years of Innovation', val: '6+' },
  { label: 'Countries Served',    val: '18+' },
  { label: 'Devices Managed',     val: '1M+' },
  { label: 'Uptime Guarantee',    val: '99.9%' },
];

const ACHIEVEMENTS = [
  'ISO 27001 Certified Security',
  'GDPR & Data Privacy Compliant',
  '24/7 Global Support Network',
  'Patent-pending Edge AI Technology',
];

const TEAM = [
  { name: 'Arjun Mehta',  role: 'CEO & Founder',  tag: 'IoT Architect' },
  { name: 'Priya Sharma', role: 'CTO',             tag: 'Embedded Systems' },
  { name: 'Rohan Desai',  role: 'Head of Cloud',   tag: 'AWS Expert' },
  { name: 'Neha Patel',   role: 'Product Lead',    tag: 'UX / Strategy' },
];

export default function About() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 grid-bg" style={{ background: '#0a0f1e' }}>
        <div className="max-w-7xl mx-auto">

          {/* ── Header ───────────────────────────────────── */}
          <div className="text-center mb-16">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest text-cyan-400 mb-4"
              style={{
                fontFamily: 'Share Tech Mono, monospace',
                background: 'rgba(34,211,238,0.08)',
                border: '1px solid rgba(34,211,238,0.2)',
              }}
            >
              ABOUT US
            </div>
            <h1 className="section-title text-4xl sm:text-5xl font-bold text-white mb-5">
              Shaping the <span style={{ color: '#22d3ee' }}>Connected Future</span>
            </h1>
            <p
              className="text-slate-400 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Founded in 2018, TarsIoT has been at the forefront of industrial IoT innovation,
              helping enterprises harness the power of connected intelligence.
            </p>
          </div>

          {/* ── Mission + Metrics ─────────────────────────── */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Mission */}
            <div>
              <h2 className="font-orbitron text-2xl text-white mb-5">
                Our <span style={{ color: '#22d3ee' }}>Mission</span>
              </h2>
              <p
                className="text-slate-400 leading-relaxed text-base mb-6"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                We believe every machine, sensor, and device should communicate seamlessly.
                Our mission is to bridge the gap between physical operations and digital
                intelligence — making IoT accessible, secure, and scalable for every enterprise.
              </p>
              <ul className="space-y-3">
                {ACHIEVEMENTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-300"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    <Icon name="check" className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {METRICS.map(({ label, val }) => (
                <div key={label} className="stat-card border-glow p-6 rounded-2xl text-center card-hover">
                  <div
                    className="font-orbitron text-3xl font-bold mb-2"
                    style={{ color: '#22d3ee' }}
                  >
                    {val}
                  </div>
                  <div
                    className="text-slate-400 text-sm"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Team ──────────────────────────────────────── */}
          <div>
            <h2 className="section-title text-2xl font-bold text-white text-center mb-10">
              Meet the <span style={{ color: '#22d3ee' }}>Team</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map(({ name, role, tag }) => (
                <div
                  key={name}
                  className="card-hover border-glow p-6 rounded-2xl text-center"
                  style={{ background: 'rgba(13,21,38,0.8)' }}
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg,rgba(34,211,238,0.2),rgba(45,212,191,0.1))',
                      border: '2px solid rgba(34,211,238,0.3)',
                    }}
                  >
                    <Icon name="users" className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="font-orbitron text-white font-semibold text-sm mb-1">{name}</h3>
                  <p
                    className="text-cyan-400 text-xs mb-3"
                    style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}
                  >
                    {role}
                  </p>
                  <span
                    className="px-3 py-1 rounded-full text-xs"
                    style={{
                      background: 'rgba(34,211,238,0.1)',
                      color: '#94a3b8',
                      fontFamily: 'Share Tech Mono, monospace',
                    }}
                  >
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}