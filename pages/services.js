import Head from "next/head";

export default function Services() {
  const svcs = [
    { title: "Prophetic Consultation", desc: "One-on-one prophetic insight.", emoji: "✨" },
    { title: "Life & Spiritual Coaching", desc: "Clarity, alignment, growth.", emoji: "🧭" },
    { title: "Business Coaching", desc: "Strategy for brand & media.", emoji: "💼" },
  ];

  return (
    <>
      <Head><title>Services — LRL</title></Head>

      <div className="services-header">
        <img
          src="/assets/channels4_banner.jpg"
          alt="Larry Reid Live Banner"
          className="services-header-image"
        />
        <div className="header-overlay">
          <h1 className="header-title">Services</h1>
        </div>
      </div>

      <section className="services-page">
        <p className="subtext">
          Explore personal guidance, mentorship, and consultations with Dr. Larry Reid.
        </p>

        <div className="services-grid">
          {svcs.map((s,i)=>(
            <div key={i} className="service-card">
              <div className="svc-emoji">{s.emoji}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="/apply-innercircle" className="btn primary btn-center">Inquire</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
