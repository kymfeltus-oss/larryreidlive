import Head from "next/head";

export default function Partners() {
  const stats = [
    { label: "Global Audience", value: "2.5M+", icon: "🌎" },
    { label: "Weekly Reach", value: "1.1M", icon: "📺" },
    { label: "Engagement Rate", value: "7.8%", icon: "💬" },
    { label: "Top Regions", value: "US • UK • Africa", icon: "📍" },
  ];

  const tiers = [
    { title: "Content Sponsorship", desc: "Feature your brand during live or on-demand broadcasts." },
    { title: "Event Partnership", desc: "Sponsor LRL events, summits, and global gatherings." },
    { title: "Digital Ads & Product Placement", desc: "Integrate your message in the LRL App and social channels." },
  ];

  return (
    <>
      <Head><title>Advertisers & Partners — LRL</title></Head>

      {/* Banner */}
      <div className="partners-header">
        <img src="/assets/channels4_banner.jpg" alt="LRL Banner" className="partners-header-image" />
        <div className="header-overlay">
          <h1 className="header-title">Advertisers & Partners</h1>
        </div>
      </div>

      <section className="partners-page">
        {/* Overview */}
        <div className="overview">
          <p>
            Larry Reid Live (LRL) reaches a global audience with conversations that
            educate, entertain, and enlighten. We collaborate with purpose-driven
            brands that align with our mission and values.
          </p>
        </div>

        {/* Stats */}
        <div className="partner-stats">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <span className="stat-icon">{s.icon}</span>
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Analytics Chart */}
        <div className="analytics">
          <h2 className="section-title">Audience Analytics (Reach Trend)</h2>
          <div className="chart">
            <div className="bar" style={{"--h":"60%"}}></div>
            <div className="bar" style={{"--h":"75%"}}></div>
            <div className="bar" style={{"--h":"90%"}}></div>
            <div className="bar" style={{"--h":"80%"}}></div>
            <div className="bar" style={{"--h":"95%"}}></div>
            <div className="bar" style={{"--h":"85%"}}></div>
          </div>
          <p className="chart-label">Jan – Jun 2025</p>
        </div>

        {/* Tiers */}
        <h2 className="section-title">Partnership Opportunities</h2>
        <div className="partner-tiers">
          {tiers.map((t, i) => (
            <div key={i} className="tier-card">
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact + Media Kit */}
        <div className="partner-contact">
          <h3>Interested in Partnering?</h3>
          <div className="partner-buttons">
            <a
              href="mailto:partnerships@larryreidlive.com"
              className="btn partner-btn"
            >
              Submit Inquiry
            </a>
            <a
              href="/assets/media-kit.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn kit-btn"
            >
              Download Media Kit 📄
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
