import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head><title>LRL — Home</title></Head>

      {/* Top banner */}
      <div className="top-banner">
        <img
          src="/assets/channels4_banner.jpg"
          alt="Larry Reid Live Banner"
          className="banner-image"
        />
      </div>

      {/* MP4 Hero Section */}
      <section className="hero-section">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          src="/assets/hero-bg.mp4"
        />
        <div className="overlay"></div>

        {/* Centered logo + buttons */}
        <div className="hero-content">
          <img
            src="/assets/logo.png"
            alt="Larry Reid Live Logo"
            className="hero-logo"
          />
          <h2 className="typewriter">The Dr. Larry Reid Experience</h2>

          <div className="cta-row">
            <a
              href="https://www.youtube.com/@LarryReidLive/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              Watch Live
            </a>
            <Link href="/membership" className="btn outline">
              Join the Movement
            </Link>
          </div>
        </div>

        {/* Copyright Footer */}
        <footer className="footer">
          <p>© {currentYear} Larry Reid Live LLC — Educate. Entertain. Enlighten.</p>
        </footer>
      </section>
    </>
  );
}
