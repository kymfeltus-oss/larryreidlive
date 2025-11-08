import Head from "next/head";
import Link from "next/link";

export default function Membership() {
  const tiers = [
    {
      name: "Basic LRL",
      price: "$0 / month",
      perks: [
        "Community board access",
        "Monthly mentorship recap",
      ],
      href: "/login",
      cta: "Join Free",
    },
    {
      name: "Partner LRL",
      price: "$25 / month",
      perks: [
        "All Basic features",
        "Partner Q&As",
        "Priority event access",
      ],
      href: "/checkout-partner",
      cta: "Join Partner Level",
    },
    {
      name: "Prophets & Partners",
      price: "$55 / month",
      perks: [
        "Exclusive livestreams & Q&A",
        "Prophecy & Testimony board",
        "Downloadable resources",
      ],
      href: "/checkout-prophets",
      cta: "Join Prophets Level",
    },
    {
      name: "Inner Circle",
      price: "$99 / month",
      perks: [
        "1-on-1 mentorship with Dr. Reid",
        "Quarterly retreats",
        "Priority support + early access",
      ],
      href: "/apply-innercircle",
      cta: "Apply Now",
    },
  ];

  return (
    <>
      <Head><title>Join the Movement — LRL</title></Head>

      {/* Background Video */}
      <div className="membership-bg">
        <video autoPlay loop muted playsInline src="/assets/membership-bg.mp4" />
        <div className="membership-overlay"></div>
      </div>

      {/* Page Content */}
      <section className="membership-section">
        <h1 className="membership-title">Join the Movement</h1>
        <p className="membership-subtitle">
          Choose your level of connection and mentorship.
        </p>

        <div className="tier-grid">
          {tiers.map((t, i) => (
            <div key={i} className="tier-card">
              <h3>{t.name}</h3>
              <p className="price">{t.price}</p>
              <ul>{t.perks.map((p, idx) => <li key={idx}>{p}</li>)}</ul>
              <Link href={t.href} className="btn tier-btn">
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
