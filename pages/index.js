// pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>LRL — Dashboard</title>
      </Head>

      {/* Banner at the top */}
      <div className="top-banner">
        <img
          src="/assets/channels4_banner.jpg"
          alt="Larry Reid Live Banner"
          className="banner-image"
        />
      </div>

      {/* MP4 Background */}
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

        {/* Main logo and text */}
        <div className="hero-content">
          <img
            src="/assets/logo.png"
            alt="Larry Reid Live Logo"
            className="hero-logo"
          />
          <h2 className="typewriter">The Dr. Larry Reid Experience</h2>

          {/* Buttons */}
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
      </section>
    </>
  );
}
