import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Larry Reid Live — Home</title>
        <meta
          name="description"
          content="The Larry Reid Live App Prototype — Luxury tech experience with control, community, and consciousness."
        />
        <meta property="og:title" content="Larry Reid Live App Prototype" />
        <meta
          property="og:description"
          content="Interactive prototype showing the new LRL app experience — designed for full creator control and data ownership."
        />
        <meta
          property="og:image"
          content="https://larry-reid-live.netlify.app/assets/og-image.png"
        />
        <meta property="og:url" content="https://larry-reid-live.netlify.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Top banner */}
      <div className="top-banner">
        <img
          src="/assets/channels4_banner.jpg"
          alt="Larry Reid Live Banner"
          className="banner-image"
        />
      </div>

      {/* Hero Section with video */}
      <section className="hero-section">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          src="/assets/hero-bg.mp4"
          type="video/mp4"
        />
        <div className="overlay"></div>

        {/* Centered content */}
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

        {/* Footer */}
        <footer className="footer">
          <p>
            © {currentYear} Larry Reid Live LLC — Educate. Entertain.
            Enlighten.
          </p>
        </footer>
      </section>
    </>
  );
}
