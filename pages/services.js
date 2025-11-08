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
      <section className="services-page">
        <h1>Services</h1>
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
