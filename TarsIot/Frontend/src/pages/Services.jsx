import React from 'react';
import Icon from '../components/Icon';

const SERVICES = [
  {
    icon: 'wifi',
    title: 'IoT Connectivity',
    desc: 'Multi-protocol support — MQTT, CoAP, HTTP, BLE, LoRaWAN, and NB-IoT — ensuring your devices connect reliably across any network type.',
    features: ['Multi-protocol gateway', 'Auto-reconnect & failover', 'Global SIM connectivity'],
  },
  {
    icon: 'chart',
    title: 'Analytics & Insights',
    desc: 'Transform raw sensor data into actionable business intelligence with real-time dashboards, anomaly detection, and custom reporting.',
    features: ['Real-time dashboards', 'ML anomaly detection', 'Custom KPI reports'],
  },
  {
    icon: 'shield',
    title: 'IoT Security Suite',
    desc: 'Protect your entire device fleet with zero-trust architecture, certificate management, firmware signing, and intrusion detection.',
    features: ['Zero-trust architecture', 'PKI certificate management', 'Intrusion detection'],
  },
  {
    icon: 'cloud',
    title: 'Cloud Integration',
    desc: 'Seamlessly connect your IoT data to AWS IoT Core, Azure IoT Hub, or Google Cloud IoT with our pre-built connectors and SDKs.',
    features: ['AWS / Azure / GCP connectors', 'Data lake integration', 'Real-time streaming'],
  },
  {
    icon: 'zap',
    title: 'Edge AI & Computing',
    desc: 'Deploy machine learning models directly on edge devices for real-time inference without requiring cloud connectivity.',
    features: ['On-device ML inference', 'TensorFlow Lite deploy', 'Offline operation mode'],
  },
  {
    icon: 'settings',
    title: 'Device Lifecycle Mgmt',
    desc: 'Manage thousands of devices from provisioning to decommissioning — OTA updates, remote diagnostics, and health monitoring.',
    features: ['OTA firmware updates', 'Remote diagnostics', 'Fleet health monitoring'],
  },
];

export default function Services() {
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
              OUR SERVICES
            </div>
            <h1 className="section-title text-4xl sm:text-5xl font-bold text-white mb-5">
              End-to-End <span style={{ color: '#22d3ee' }}>IoT Solutions</span>
            </h1>
            <p
              className="text-slate-400 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              From device connectivity to cloud analytics — we provide the complete stack for
              enterprise IoT deployments.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon, title, desc, features }) => (
              <div
                key={title}
                className="card-hover border-glow p-7 rounded-2xl flex flex-col"
                style={{ background: 'rgba(13,21,38,0.9)' }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg,rgba(34,211,238,0.15),rgba(45,212,191,0.08))',
                    border: '1px solid rgba(34,211,238,0.3)',
                  }}
                >
                  <Icon name={icon} className="w-7 h-7 text-cyan-400" />
                </div>

                <h3 className="font-orbitron text-white font-bold text-base mb-3">{title}</h3>
                <p
                  className="text-slate-400 text-sm leading-relaxed mb-5 flex-1"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {desc}
                </p>

                {/* Feature list */}
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-slate-300 text-sm"
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      <Icon name="check" className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}