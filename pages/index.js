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
            <Link href="/member" className="btn primary">Hub</Link>
            <Link href="/membership" className="btn outline">Join</Link>
          </div>
        </div>
      </div>
    </>
  );
}
