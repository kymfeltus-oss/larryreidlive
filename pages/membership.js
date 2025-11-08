import Head from "next/head";
import Link from "next/link";

export default function Membership() {
  return (
    <>
      <Head><title>Join the Movement — Dr. Larry Reid Live</title></Head>

      {/* Banner */}
      <div className="membership-banner">
        <img
          src="/assets/channels4_banner.jpg"
          alt="Larry Reid Live Banner"
          className="membership-banner-image"
        />
      </div>

      <section className="plans">
        <h2>Membership Tiers</h2>
        <p className="subtext">
          Choose your level of connection and mentorship.
        </p>

        <div className="plan-grid">

          {/* Basic */}
          <div className="plan-card">
            <h3>Basic LRL</h3>
            <p className="price">$0 / month</p>
            <ul>
              <li>Community board access</li>
              <li>Monthly mentorship recap</li>
            </ul>
            <Link href="/login" className="btn primary btn-center">Join Now</Link>
          </div>

          {/* Partner */}
          <div className="plan-card highlight">
            <h3>Partner LRL</h3>
            <p className="price">$25 / month</p>
            <ul>
              <li>All Basic features</li>
              <li>Partner Q&As</li>
              <li>Priority event access</li>
            </ul>
            <Link href="/checkout-partner" className="btn primary btn-center">Join Now</Link>
          </div>

          {/* Inner Circle */}
          <div className="plan-card elite">
            <h3>Inner Circle</h3>
            <p className="price">$99 / month</p>
            <ul>
              <li>1-on-1 mentorship with Dr. Reid</li>
              <li>Exclusive quarterly retreats</li>
              <li>Priority support and early event access</li>
            </ul>
            <Link href="/apply-innercircle" className="btn primary btn-center">Apply Now</Link>
          </div>

        </div>
      </section>
    </>
  );
}
