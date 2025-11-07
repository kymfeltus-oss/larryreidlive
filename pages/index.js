// pages/index.js
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const taglines = [
    "Educate.",
    "Entertain.",
    "Enlighten.",
    "The Dr. Larry Reid Experience."
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Dr. Larry Reid — The Experience</title>
      </Head>

      {/* ===== TOP BANNER ===== */}
      <div className="top-banner">
        <img
          src="/assets/channels4_banner.jpg"
          alt="Larry Reid Live Banner"
          className="banner-image"
        />
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          src="/assets/hero-bg.mp4"
        />
        <div className="overlay" />

        <div className="hero-content">
          <img
            src="/assets/logo.png"
            alt="Larry Reid Live Logo"
            className="hero-logo"
          />

          <h2 className="typewriter">{taglines[index]}</h2>

          <div className="cta-row">
            <Link href="/portal" className="btn primary">
              Watch Live
            </Link>
            <Link href="/membership" className="btn outline">
              Join the Movement
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT / INTRO ===== */}
      <section className="about container">
        <h3>Welcome to The Movement</h3>
        <p>
          <strong>Dr. Larry Reid</strong> is a multimedia personality,
          spiritual leader, and founder of the MBN Network. He has built a
          movement that fuses entertainment, spirituality, and mentorship —
          bringing laughter, truth, and transformation to millions worldwide.
        </p>
      </section>

      {/* ===== MEMBERSHIP TEASER ===== */}
      <section className="membership-teaser container">
        <h3>Membership Tiers</h3>
        <p>
          Experience deeper connection and growth through the Christ
          Consciousness Mentorship program led by Dr. Larry Reid.
        </p>
        <Link href="/membership" className="btn primary">
          View Memberships
        </Link>
      </section>

      {/* ===== MUSIC TEASER ===== */}
      <section className="music-teaser container">
        <h3>Music by Dr. Larry Reid</h3>
        <p>
          Stream and support Dr. Larry Reid’s latest musical releases across all
          major platforms.
        </p>
        <Link href="/music" className="btn outline">
          Listen Now
        </Link>
      </section>
    </>
  );
}
