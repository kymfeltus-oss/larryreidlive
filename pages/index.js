import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head><title>LRL — Home</title></Head>

      {/* Banner at top */}
      <div className="top-banner">
        <img src="/assets/channels4_banner.jpg" alt="LRL Banner" className="banner-image" />
      </div>

      {/* MP4 hero */}
      <section className="hero-section">
        <video className="hero-video" autoPlay loop muted playsInline src="/assets/hero-bg.mp4" />
        <div className="overlay" />
        <div className="hero-content">
          <img src="/assets/logo.png" alt="LRL" className="hero-logo" />
          <h2 className="typewriter">The Dr. Larry Reid Experience</h2>
          <div className="cta-row">
            <a
              href="https://www.youtube.com/@LarryReidLive/streams"
              target="_blank" rel="noopener noreferrer"
              className="btn primary"
            >Watch Live</a>
            <Link href="/membership" className="btn outline">Join the Movement</Link>
          </div>
        </div>
      </section>
    </>
  );
}
