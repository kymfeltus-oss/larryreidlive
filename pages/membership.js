// pages/membership.js
import Link from "next/link";
import Head from "next/head";

export default function Membership() {
  return (
    <>
      <Head>
        <title>Memberships — Dr. Larry Reid Live</title>
      </Head>

      <section className="membership-hero">
        <div className="overlay" />
        <div className="hero-content">
          <h1>Join the Movement</h1>
          <p>
            Become part of the Christ Consciousness mentorship community led by
            <strong>  Dr. Larry Reid </strong>. Choose your tier and step into a
            transformative experience.
          </p>
        </div>
      </section>

      <section className="plans container">
        <h2>Membership Tiers</h2>
        <p className="subtext">
          Select the level that fits your journey. Upgrade or cancel anytime.
        </p>

        <div className="plan-grid">
          {/* Free Tier */}
          <div className="plan-card">
            <h3>Free Access</h3>
            <p className="price">$0 / mo</p>
            <ul>
              <li>Morning Devotions & Public Lives</li>
              <li>Weekly Highlights & Newsletter</li>
            </ul>
            <Link href="/login" className="btn outline">
              Get Started
            </Link>
          </div>

          {/* Mentorship Circle */}
          <div className="plan-card highlight">
            <h3>Mentorship Circle</h3>
            <p className="price">$19.99 / mo</p>
            <ul>
              <li>Christ Consciousness Lessons</li>
              <li>Private Community Access</li>
              <li>Journal Reflections & Progress Tracking</li>
            </ul>
            <Link href="/api/checkout?plan=mentorship" className="btn primary">
              Join Now
            </Link>
          </div>

          {/* Prophets & Partners */}
          <div className="plan-card">
            <h3>Prophets & Partners</h3>
            <p className="price">$49.99 / mo</p>
            <ul>
              <li>Exclusive Livestreams & Q&A</li>
              <li>Prophecy & Testimony Board</li>
              <li>Downloadable Resources</li>
            </ul>
            <Link href="/api/checkout?plan=partners" className="btn primary">
              Join Now
            </Link>
          </div>

          {/* Inner Circle */}
          <div className="plan-card elite">
            <h3>Inner Circle</h3>
            <p className="price">$99.99 / mo</p>
            <ul>
              <li>1-on-1 Mentorship with Dr. Reid</li>
              <li>Wealth & Health Intensives</li>
              <li>Early Event Access & Priority Support</li>
            </ul>
            <Link href="/api/checkout?plan=inner" className="btn outline">
              Apply
            </Link>
          </div>
        </div>
      </section>

      <section className="cta container">
        <h2>Why Join Now?</h2>
        <p>
          Gain spiritual insight, professional growth, and community support.
          Dr. Larry Reid’s mentorship blends truth, laughter, and wisdom for
          every aspect of your life.
        </p>
        <Link href="/login" className="btn primary">
          Become a Member
        </Link>
      </section>
    </>
  );
}
