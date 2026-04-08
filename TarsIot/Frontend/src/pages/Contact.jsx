import React, { useState } from 'react';
import Icon from '../components/Icon';

const CONTACT_INFO = [
  { icon: 'mail',     label: 'Email',   val: 'hello@tarsiot.com' },
  { icon: 'phone',    label: 'Phone',   val: '+91 98765 43210' },
  { icon: 'location', label: 'Address', val: 'Gotmare Complex, Dhrampeth, Nagpur, MH 440016' },
  { icon: 'globe',    label: 'Website', val: 'www.tarsiot.com' },
];

const INITIAL_FORM = { name: '', email: '', company: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent]   = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSent(true);
  };

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0a0f1e' }}>
        <div className="max-w-6xl mx-auto">

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
              CONTACT
            </div>
            <h1 className="section-title text-4xl sm:text-5xl font-bold text-white mb-5">
              Let's <span style={{ color: '#22d3ee' }}>Connect</span>
            </h1>
            <p
              className="text-slate-400 text-lg max-w-xl mx-auto"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Ready to transform your operations with IoT? Our experts are standing by.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 items-stretch">

            {/* ── Info Cards ──────────────────────────────── */}
            <div className="lg:col-span-2 space-y-4 h-full">
              {CONTACT_INFO.map(({ icon, label, val }) => (
                <div
                  key={label}
                  className="border-glow p-5 rounded-2xl flex items-start gap-4 card-hover"
                  style={{ background: 'rgba(13,21,38,0.8)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(34,211,238,0.1)',
                      border: '1px solid rgba(34,211,238,0.2)',
                    }}
                  >
                    <Icon name={icon} className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p
                      className="text-slate-500 text-xs uppercase tracking-wider mb-0.5"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-slate-200 text-sm"
                      style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
                    >
                      {val}
                    </p>
                  </div>
                </div>
              ))}

              {/* Office hours */}
              <div
                className="border-glow p-5 rounded-2xl flex items-start gap-4 card-hover"
                style={{ background: 'rgba(13,21,38,0.8)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(34,211,238,0.1)',
                    border: '1px solid rgba(34,211,238,0.2)',
                  }}
                >
                  <Icon name="settings" className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p
                    className="text-slate-500 text-xs uppercase tracking-wider mb-0.5"
                    style={{ fontFamily: 'Share Tech Mono, monospace' }}
                  >
                    Office Hours
                  </p>
                  <p
                    className="text-slate-200 text-sm"
                    style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
                  >
                    Mon – Sat: 10 AM – 7 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* ── Contact Form ─────────────────────────────── */}
            <div
              className="lg:col-span-3 border-glow p-7 sm:p-8 rounded-2xl h-full"
              style={{ background: 'rgba(13,21,38,0.9)' }}
            >
              {sent ? (
                /* Success state */
                <div className="text-center py-12 h-full flex flex-col justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: 'rgba(34,211,238,0.15)',
                      border: '2px solid rgba(34,211,238,0.4)',
                    }}
                  >
                    <Icon name="check" className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="font-orbitron text-white text-xl mb-2">Message Sent!</h3>
                  <p
                    className="text-slate-400 mb-6"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    Thank you for reaching out. We'll respond within 24 hours.
                  </p>
                  <button
                    className="btn-outline px-6 py-2.5 rounded-lg tracking-wider"
                    onClick={() => { setSent(false); setForm(INITIAL_FORM); }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="font-orbitron text-white font-bold text-base mb-6">
                    Send Us a Message
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        className="text-slate-400 text-xs uppercase tracking-wider mb-1.5 block"
                        style={{ fontFamily: 'Share Tech Mono, monospace' }}
                      >
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="input-field"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        className="text-slate-400 text-xs uppercase tracking-wider mb-1.5 block"
                        style={{ fontFamily: 'Share Tech Mono, monospace' }}
                      >
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="input-field"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      className="text-slate-400 text-xs uppercase tracking-wider mb-1.5 block"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      Company
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Pvt. Ltd."
                      className="input-field"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      className="text-slate-400 text-xs uppercase tracking-wider mb-1.5 block"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="input-field"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="text-slate-400 text-xs uppercase tracking-wider mb-1.5 block"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your IoT project requirements..."
                      className="input-field resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3.5 rounded-xl flex items-center justify-center gap-2 tracking-wider"
                  >
                    Send Message
                    <Icon name="arrow" className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}