// pages/index.js
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import "../styles/home.css";

export default function Home() {
  const taglines = [
    "Educate.",
    "Entertain.",
    "Enlighten.",
    "The Larry Reid Live Experience."
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
        <title>Larry Reid Live — The Experience</title>
      </Head>

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
          <h1 className="hero-title">Larry Reid Live</h1>
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
          Larry Reid Live is a multimedia platform fusing entertainment, spirituality,
          and mentorship. Join thousands who tune in weekly to laugh, learn, and
          elevate their consciousness.
        </p>
      </section>

      {/* ===== MEMBERSHIP TEASER ===== */}
      <section className="membership-teaser container">
        <h3>Membership Tiers</h3>
        <p>
          Experience deeper connection and growth through the Christ Consciousness
          Mentorship program.
        </p>
        <Link href="/membership" className="btn primary">
          View Memberships
        </Link>
      </section>

      {/* ===== MUSIC TEASER ===== */}
      <section className="music-teaser container">
        <h3>Music by Larry Reid</h3>
        <p>Stream and support Larry’s latest releases across all platforms.</p>
        <Link href="/music" className="btn outline">
          Listen Now
        </Link>
      </section>
    </>
  );
}
