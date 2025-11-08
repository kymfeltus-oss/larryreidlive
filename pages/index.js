import Head from "next/head";
import Link from "next/link";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Head><title>LRL — Home</title></Head>

      <div className="hero">
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
            src="/assets/channels4_banner.jpg"
            alt="Larry Reid Live Banner"
            className="hero-banner"
          />
          <h2 className="hero-text">The Dr. Larry Reid Experience</h2>

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
      </div>
    </>
  );
}
import Head from "next/head";
import Link from "next/link";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Larry Reid Live</title>
      </Head>

      <div className="top-banner">
        <img
          src="/assets/channels4_banner.jpg"
          alt="Larry Reid Live Banner"
          className="banner-image"
        />
      </div>

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

        <div className="hero-content">
          <img
            src="/assets/logo.png"
            alt="Larry Reid Live"
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
      </section>
    </>
  );
}
