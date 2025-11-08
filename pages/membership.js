// pages/membership.js
import Head from "next/head";
import Link from "next/link";
import "../styles/membership.css";
import "../styles/[pagename].css";

export default function Membership() {
  return (
    <>
      <Head>
        <title>Join the Movement — Dr. Larry Reid Live</title>
      </Head>

      {/* --- Banner --- */}
      <div className="membership-banner">
        <img
          src="/assets/channels4_banner.jpg"
          alt="Larry Reid Live Banner"
          className="membership-banner-image"
        />
      </div>

      {/* --- Membership tiers only --- */}
      <section className="plans">
        <h2>Membership Tiers</h2>
        <p className="subtext">
          Choose your level of access to mentorship, events, and exclusive content.
        </p>

        <div className="plan-grid">
          <div className="plan-card">
            <h3>Basic LRL</h3>
            <p className="price">$10 / month</p>
            <ul>
              <li>Access to community board</li>
              <li>Monthly mentorship recap</li>
            </ul>
            <Link href="#" className="btn primary btn-center">
              Join Now
            </Link>
          </div>

          <div className="plan-card highlight">
            <h3>Partner LRL</h3>
            <p className="price">$25 / month</p>
            <ul>
              <li>All Basic features</li>
              <li>Exclusive partner Q&As</li>
              <li>Priority event access</li>
            </ul>
            <Link href="#" className="btn primary btn-center">
              Join Now
            </Link>
          </div>

          <div className="plan-card elite">
            <h3>Elite LRL</h3>
            <p className="price">$50 / month</p>
            <ul>
              <li>All Partner features</li>
              <li>Direct mentorship circle</li>
              <li>Annual live retreat</li>
            </ul>
            <Link href="#" className="btn primary btn-center">
              Join Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
