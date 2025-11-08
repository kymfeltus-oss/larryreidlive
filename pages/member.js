import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Member() {
  const [menuOpen, setMenuOpen] = useState(false);

  const kpis = [
    { label: "Members", value: "2.5K", icon: "👥" },
    { label: "Messages", value: "89", icon: "💬" },
    { label: "Upcoming Events", value: "3", icon: "📅" },
    { label: "Unread Alerts", value: "5", icon: "🔔" },
  ];

  const alerts = [
    { msg: "New message from Dr. Reid", time: "2 hrs ago" },
    { msg: "Community forum updated", time: "5 hrs ago" },
    { msg: "Reminder: Partner Q&A tomorrow", time: "1 day ago" },
  ];

  const links = [
    { name: "The Vault", href: "/vault" },
    { name: "Messages", href: "/messages" },
    { name: "Community", href: "/community" },
    { name: "Events", href: "/events" },
    { name: "Services", href: "/services" },
    { name: "Music", href: "/music" },
  ];

  return (
    <>
      <Head><title>LRL Hub</title></Head>

      <section className="hub-page">
        {/* Slide-out menu */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <aside className={`side-menu ${menuOpen ? "open" : ""}`}>
          <h3 className="menu-title">Navigation</h3>
          {links.map((l, i) => (
            <Link key={i} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.name}
            </Link>
          ))}
        </aside>

        <div className={`overlay-bg ${menuOpen ? "show" : ""}`} onClick={() => setMenuOpen(false)}></div>

        {/* Header banner */}
        <div className="hub-banner">
          <img
            src="/assets/channels4_banner.jpg"
            alt="Larry Reid Live Banner"
            className="hub-banner-image"
          />
          <div className="header-overlay">
            <h1 className="header-title">The LRL Hub</h1>
          </div>
        </div>

        {/* KPI Section */}
        <div className="kpi-grid">
          {kpis.map((k, i) => (
            <div key={i} className="kpi-card">
              <span className="kpi-icon">{k.icon}</span>
              <div className="kpi-text">
                <p className="kpi-value">{k.value}</p>
                <p className="kpi-label">{k.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Alerts */}
        <div className="alerts-section">
          <h3>Alerts & Notifications</h3>
          {alerts.map((a, i) => (
            <div key={i} className="alert-card">
              <p>{a.msg}</p>
              <span>{a.time}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
