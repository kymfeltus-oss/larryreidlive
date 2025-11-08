// pages/member.js
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../styles/[pagename].css";


export default function Member() {
  const crowdcastUrl = process.env.NEXT_PUBLIC_CROWDCAST_URL || "";
  const [showBanner, setShowBanner] = useState(Boolean(crowdcastUrl));

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const Icon = {
    Vault: () => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="7" width="18" height="12" rx="2" stroke="#4FC3F7" strokeWidth="1.5"/>
        <circle cx="12" cy="13" r="2.3" stroke="#4FC3F7" strokeWidth="1.5"/>
      </svg>
    ),
    Messages: () => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 5h16v10H8l-4 4V5z" stroke="#4FC3F7" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    Community: () => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="8" r="3" stroke="#4FC3F7" strokeWidth="1.5"/>
        <circle cx="16" cy="8" r="3" stroke="#4FC3F7" strokeWidth="1.5"/>
      </svg>
    ),
    Events: () => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M7 2v3M17 2v3M4 7h16v13H4V7z" stroke="#4FC3F7" strokeWidth="1.5" />
      </svg>
    ),
    Live: () => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#4FC3F7" strokeWidth="1.5"/>
        <path d="M10 8l6 4-6 4V8z" fill="#4FC3F7"/>
      </svg>
    ),
  };

  const tiles = [
    { title: "The Vault", desc: "Archived teachings & resources.", href: "#", Icon: Icon.Vault },
    { title: "Messages", desc: "Direct updates from Dr. Reid.", href: "#", Icon: Icon.Messages },
    { title: "Community", desc: "Connect with other LRL’s.", href: "#", Icon: Icon.Community },
    { title: "Events", desc: "Mentorship sessions & gatherings.", href: "#", Icon: Icon.Events },
  ];
  if (!showBanner) {
    tiles.unshift({ title: "Watch Live", desc: "Private livestreams for LRL’s.", href: "#", Icon: Icon.Live });
  }

  return (
    <>
      <Head><title>LRL’s Hub — Dr. Larry Reid Live</title></Head>
      <section className="member-hub">
        {showBanner ? (
          <div className="live-banner fade-in">
            <div className="live-header">
              <span className="live-dot" /> <strong>LRL’s, we’re Live Now!</strong>
            </div>
            <div className="live-frame">
              <iframe
                title="LRL Crowdcast Live"
                src={crowdcastUrl}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          <div className="offline-banner fade-in">
            <img src="/assets/channels4_banner.jpg" alt="Larry Reid Live" className="offline-banner-image" />
          </div>
        )}

        <header className="hub-header fade-in">
          <h1>LRL’s Hub</h1>
          <p>Mentorship, messages, community and events for all LRL’s.</p>
        </header>

        <div className="hub-grid container fade-in">
          {tiles.map(({ title, desc, href, Icon }, i) => (
            <Link href={href} key={i} className="tile">
              <div className="tile-icon"><Icon /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="btn outline btn-center">Open</span>
            </Link>
          ))}
        </div>

        <div className="hub-cta container fade-in">
          <h2>Explore Services</h2>
          <p>Prophetic consultations, coaching and business mentorship with Dr. Larry Reid.</p>
          <Link href="/services" className="btn primary btn-center">View Services</Link>
        </div>
      </section>
    </>
  );
}
