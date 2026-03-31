import React, { useState } from "react";
import "../index.css";
const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div
      className="hero-gradient grid-bg text-white min-h-screen"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        .tab-btn {
          padding: 9px 22px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          transition: background .2s, color .2s;
          font-family: inherit;
        }
        .tab-btn-active { background: #dc2626; color: #fff; }
        .tab-btn-idle   { background: transparent; color: #64748b; }
        .tab-btn-idle:hover { color: #94a3b8; }

        .line-red {
          display: inline-block;
          width: 36px; height: 3px;
          background: #dc2626;
          border-radius: 2px;
          vertical-align: middle;
          margin-right: 10px;
          margin-bottom: 2px;
        }

        .ov-card {
          background: #0f172a;
          border: 1px solid #1e293b;
          border-radius: 20px;
          padding: 36px 40px;
        }

        .benefit-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 13px 0;
          border-bottom: 1px solid #1e293b;
        }
        .benefit-row:last-child { border-bottom: none; }
        .benefit-icon {
          width: 30px; height: 30px;
          border-radius: 8px;
          background: rgba(220,38,38,0.12);
          border: 1px solid rgba(220,38,38,0.25);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .comp-wrap {
          background: #0f172a;
          border: 1px solid #1e293b;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 28px;
          transition: border-color .3s;
        }
        .comp-wrap:hover { border-color: #dc2626; }

        .comp-num {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .12em;
          color: #dc2626;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          padding: 9px 0;
          border-bottom: 1px solid #1e293b;
          font-size: 13px;
          gap: 12px;
        }
        .spec-row:last-child { border-bottom: none; }
        .spec-key { color: #475569; }
        .spec-val { color: #e2e8f0; font-weight: 500; text-align: right; }

        .img-panel {
          background: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
          min-height: 300px;
          position: relative;
          overflow: hidden;
        }
        .img-panel::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(220,38,38,.07) 0%, transparent 60%);
          pointer-events: none;
        }
        .img-panel img {
          max-height: 340px;
          object-fit: contain;
          border-radius: 12px;
          position: relative;
          z-index: 1;
          transition: transform .4s;
        }
        .comp-wrap:hover .img-panel img { transform: scale(1.03); }

        .alert-strip {
          display: flex;
          gap: 2px;
          border-radius: 12px;
          overflow: hidden;
          margin-top: 24px;
        }
        .alert-seg {
          flex: 1;
          padding: 16px 18px;
        }
        .led-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          margin-bottom: 8px;
        }

        @media (max-width: 767px) {
          .two-col { grid-template-columns: 1fr !important; }
          .ov-card { padding: 22px 18px; }
          .img-panel { min-height: 200px; }
        }
      `}</style>

      {/* ════ HERO ════ */}
      <div className="max-w-7xl mx-auto px-4 mt-24" style={{ paddingTop: 0 }}>

        <h1 style={{
          fontSize: "clamp(24px, 4.5vw, 48px)",
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          marginTop: 64,
          marginBottom: 16,
          maxWidth: 720,
        }}>
          Rail Track End Point Detection System
        </h1>

        <p style={{
          color: "#94a3b8",
          maxWidth: 620,
          lineHeight: 1.75,
          fontSize: 15,
          marginBottom: 32,
        }}>
          Advanced multi-level detection system for railway end point monitoring
          with dual sensor reliability, wireless communication, and
          comprehensive alert mechanisms for locomotive safety.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 40 }}>
          <button
            className={`tab-btn ${activeTab === "overview" ? "tab-btn-active" : "tab-btn-idle"}`}
            onClick={() => setActiveTab("overview")}
          >Overview</button>
          <button
            className={`tab-btn ${activeTab === "components" ? "tab-btn-active" : "tab-btn-idle"}`}
            onClick={() => setActiveTab("components")}
          >Components & Specifications</button>
        </div>
      </div>

      {/* ════ OVERVIEW TAB ════ */}
      {activeTab === "overview" && (
        <div className="max-w-7xl mx-auto px-4 pb-20">

          {/* Overview main card */}
          <div className="ov-card" style={{ marginBottom: 20 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>
              <span className="line-red" />Overview
            </h2>
            <p className=" mt-10" style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 15, maxWidth: 700 }}>
              The Rail Track End Point Detection System is a sophisticated safety
              solution designed to prevent railway accidents during reversing
              operations. This system uses laser-guided sensors and wireless
              communication to provide real-time distance monitoring and alerts.
            </p>
          </div>

          {/* Benefits + Applications */}
          <div
            className="two-col"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}
          >
            {/* Key Benefits */}
            <div className="ov-card">
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 20 }}>
                <span className="line-red" />Key Benefits
              </h3>
              {[
                "Real-time distance monitoring",
                "Dual sensor reliability",
                "Flexible wireless setup",
                "Multi-level alert system",
              ].map((b) => (
                <div key={b} className="benefit-row">
                  <div className="benefit-icon">
                    <span style={{ color: "#dc2626", fontSize: 13 }}>✦</span>
                  </div>
                  <span style={{ fontSize: 14, color: "#cbd5e1", paddingTop: 5 }}>{b}</span>
                </div>
              ))}
            </div>

            {/* Applications */}
            <div className="ov-card">
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 20 }}>
                <span className="line-red" />Applications
              </h3>
              {[
                "Railway yard monitoring",
                "Locomotive reversing",
                "Wagon positioning",
                "Dead-end track safety",
              ].map((a) => (
                <div key={a} className="benefit-row">
                  <div className="benefit-icon">
                    <span style={{ color: "#dc2626", fontSize: 13 }}>✦</span>
                  </div>
                  <span style={{ fontSize: 14, color: "#cbd5e1", paddingTop: 5 }}>{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alert levels */}
          <div className="ov-card">
            <h3 style={{ fontSize: 17, fontWeight: 700 }}>
              <span className="line-red" />Detection Alert Levels
            </h3>
            <p style={{ color: "#475569", fontSize: 13, marginTop: 6 }}>
              Progressive warnings as the locomotive approaches the end point.
            </p>
            <div className="alert-strip">
              {[
                { dist: "20 m", color: "#22c55e", bg: "rgba(34,197,94,0.07)", label: "Green LED", note: "Caution zone entered" },
                { dist: "15 m", color: "#f59e0b", bg: "rgba(245,158,11,0.07)", label: "Yellow LED", note: "Slow down now" },
                { dist: "10 m", color: "#ef4444", bg: "rgba(239,68,68,0.09)", label: "Red LED + Siren", note: "Apply brakes immediately" },
              ].map((l) => (
                <div key={l.dist} className="alert-seg" style={{ background: l.bg }}>
                  <div className="led-dot" style={{ background: l.color, boxShadow: `0 0 8px ${l.color}88` }} />
                  <div style={{ fontWeight: 800, fontSize: 22, color: "#f1f5f9", marginBottom: 4 }}>{l.dist}</div>
                  <div style={{ color: l.color, fontSize: 12, fontWeight: 600, marginBottom: 2 }}>{l.label}</div>
                  <div style={{ color: "#475569", fontSize: 12 }}>{l.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ════ COMPONENTS TAB ════ */}
      {activeTab === "components" && (
        <div className="max-w-7xl mx-auto px-4 pb-20">

          <h2 style={{
            fontSize: "clamp(20px, 3vw, 36px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: 32,
          }}>
            System Components & Specifications
          </h2>

          {/* ── Component 1: Laser End Point Detector ── */}
          <div className="comp-wrap">
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {/* Image */}
              <div className="img-panel">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800"
                  alt="Laser End Point Detector"
                />
              </div>
              {/* Content */}
              <div style={{ padding: "36px 40px" }}>
                <div className="comp-num">Component 01</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>
                  Laser End Point Detector
                </h3>
                <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.75, marginBottom: 24 }}>
                  Precision laser-guided distance measurement system with dual
                  sensor redundancy and multi-level detection for accurate
                  positioning.
                </p>
                <div style={{ borderTop: "1px solid #1e293b", paddingTop: 16 }}>
                  {[
                    ["Sensor", "Laser guided sensor"],
                    ["Detection levels", "4 levels (20m, 15m, 10m)"],
                    ["Setup", "Dual sensor setup"],
                    ["Configuration", "Configurable detection levels"],
                    ["Communication", "433MHz wireless"],
                    ["Transmission", "Real-time"],
                    ["Housing", "Weather-resistant design"],
                  ].map(([k, v]) => (
                    <div key={k} className="spec-row">
                      <span className="spec-key">{k}</span>
                      <span className="spec-val">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Component 2: Loco Stop Point Indicator ── */}
          <div className="comp-wrap">
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {/* Content */}
              <div style={{ padding: "36px 40px" }}>
                <div className="comp-num">Component 02</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>
                  Loco Stop Point Indicator
                </h3>
                <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.75, marginBottom: 24 }}>
                  Bridge communication device with integrated transceiver, stop
                  lamp, and siren for immediate locomotive pilot notification at
                  critical 10m mark.
                </p>
                <div style={{ borderTop: "1px solid #1e293b", paddingTop: 16 }}>
                  {[
                    ["Transceiver", "433MHz"],
                    ["Role", "Bridge: Laser Detector → Distance Indicator"],
                    ["Data relay", "Continuous relay from detection unit"],
                    ["Monitoring", "10m signal monitoring & activation"],
                    ["Visual alert", "Integrated stop lamp"],
                    ["Audio alert", "Loud siren"],
                    ["Notification", "Immediate system for loco-pilot"],
                    ["Voltage", "12–35V operating"],
                    ["Housing", "Weather-resistant design"],
                  ].map(([k, v]) => (
                    <div key={k} className="spec-row">
                      <span className="spec-key">{k}</span>
                      <span className="spec-val">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Image */}
              <div className="img-panel">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800"
                  alt="Loco Stop Point Indicator"
                />
              </div>
            </div>
          </div>

          {/* ── Component 3: End Point Distance Indicator ── */}
          <div className="comp-wrap">
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {/* Image */}
              <div className="img-panel">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800"
                  alt="End Point Distance Indicator"
                />
              </div>
              {/* Content */}
              <div style={{ padding: "36px 40px" }}>
                <div className="comp-num">Component 03</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>
                  End Point Distance Indicator
                </h3>
                <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.75, marginBottom: 24 }}>
                  In-locomotive display unit with progressive LED indication and
                  siren alert system to guide loco-pilots during approach to end
                  points.
                </p>
                <div style={{ borderTop: "1px solid #1e293b", paddingTop: 16 }}>
                  {[
                    ["Installation", "Interior locomotive"],
                    ["Indication", "4 level system (3 LED + 1 Siren)"],
                    ["Green LED", "Activation at 20m mark"],
                    ["Yellow LED", "Activation at 15m mark"],
                    ["Red LED", "Activation at 10m mark"],
                    ["Siren", "Brake application alert at 10m"],
                    ["Guidance", "Clear progressive visual system"],
                    ["Reception", "Real-time wireless data"],
                    ["Latency", "Low latency for immediate response"],
                    ["Voltage", "12–35V operating"],
                  ].map(([k, v]) => (
                    <div key={k} className="spec-row">
                      <span className="spec-key">{k}</span>
                      <span className="spec-val">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default ProductDetail; 