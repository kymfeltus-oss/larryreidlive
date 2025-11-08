import Head from "next/head";

export default function Patreon() {
  const tiers = [
    { name: "Supporter", price: "$5 / month", perks: ["Exclusive posts", "Behind the scenes"] },
    { name: "Partner", price: "$25 / month", perks: ["All Supporter benefits", "Early access to events"] },
    { name: "Inner Circle", price: "$55 / month", perks: ["Private Q&As", "Personal messages from Dr. Reid"] },
  ];

  return (
    <>
      <Head><title>Support — LRL Patreon</title></Head>

      <div className="patreon-header">
        <img
          src="/assets/channels4_banner.jpg"
          alt="Larry Reid Live Banner"
          className="patreon-header-image"
        />
        <div className="header-overlay">
          <h1 className="header-title">Support LRL</h1>
        </div>
      </div>

      <section className="patreon-page">
        <h2 className="section-title">Join on Patreon</h2>
        <p className="subtext">Your support helps keep the message going worldwide.</p>

        <div className="plan-grid">
          {tiers.map((t, i) => (
            <div key={i} className="plan-card">
              <h3>{t.name}</h3>
              <p className="price">{t.price}</p>
              <ul>{t.perks.map((p, idx) => <li key={idx}>{p}</li>)}</ul>
              <a
                href="https://patreon.com/LarryReidLive"
                target="_blank"
                rel="noopener noreferrer"
                className="btn patreon-btn"
              >
                Join Now
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
