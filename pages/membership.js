import Head from "next/head";
import Link from "next/link";

export default function Membership() {
  const tiers = [
    {
      name: "Basic LRL", price: "$0 / month",
      perks: ["Community board access", "Monthly mentorship recap"],
      href: "/login", cta: "Join"
    },
    {
      name: "Partner LRL", price: "$25 / month",
      perks: ["All Basic features", "Partner Q&As", "Priority event access"],
      href: "/checkout-partner", cta: "Join"
    },
    {
      name: "Prophets & Partners", price: "$55 / month",
      perks: ["Exclusive livestreams & Q&A", "Prophecy & Testimony board", "Downloadable resources"],
      href: "/checkout-prophets", cta: "Join"
    },
    {
      name: "Inner Circle", price: "$99 / month",
      perks: ["1-on-1 mentorship with Dr. Reid", "Quarterly retreats", "Priority support + early access"],
      href: "/apply-innercircle", cta: "Apply"
    }
  ];

  return (
    <>
      <Head><title>Join the Movement — LRL</title></Head>

      <div className="membership-banner">
        <img src="/assets/channels4_banner.jpg" alt="LRL Banner" className="membership-banner-image" />
      </div>

      <section className="plans">
        <h2>Membership Tiers</h2>
        <p className="subtext">Choose your level of connection and mentorship.</p>

        <div className="plan-grid">
          {tiers.map((t,i)=>(
            <div key={i} className={`plan-card ${t.name.includes("Partner LRL")?"highlight":""} ${t.name.includes("Inner Circle")?"elite":""}`}>
              <h3>{t.name}</h3>
              <p className="price">{t.price}</p>
              <ul>{t.perks.map((p,idx)=>(<li key={idx}>{p}</li>))}</ul>
              <Link href={t.href} className="btn primary btn-center"> {t.cta} </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
