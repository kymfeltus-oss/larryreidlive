// pages/member.js
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Hybrid live layout:
 * - If NEXT_PUBLIC_CROWDCAST_URL is set, a LIVE banner with embed is shown at the top.
 * - Otherwise, the dashboard shows a "Watch Live" tile in the grid.
 *
 * Add your private live link to Netlify → Site Settings → Environment:
 *   NEXT_PUBLIC_CROWDCAST_URL=https://www.crowdcast.io/e/your-event?embed=true
 */

export default function Member() {
  const crowdcastUrl = process.env.NEXT_PUBLIC_CROWDCAST_URL || ""; // when non-empty, banner shows
  const [showBanner, setShowBanner] = useState(Boolean(crowdcastUrl));

  // IntersectionObserver for scroll-in animations
  useEffect(() => {
    const obs = new IntersectionObserver(
      (ents) => ents.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // SVG icons (neutral, professional)
  const Icon = {
    Vault: () => (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
        <rect x="3" y="7" width="18" height="12" rx="2" stroke="#4FC3F7" strokeWidth="1.6"/>
        <path d="M7 7V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1" stroke="#4FC3F7" strokeWidth="1.6"/>
        <circle cx="12" cy="13" r="2.6" stroke="#4FC3F7" strokeWidth="1.6"/>
        <path d="M12 11.2V9.8" stroke="#4FC3F7" strokeWidth="1.6"/>
      </svg>
    ),
    Messages: () => (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
        <path d="M4 5h16v10H8l-4 4V5z" stroke="#4FC3F7" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M8 9h8M8 12h6" stroke="#4FC3F7" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    Community: () => (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
        <circle cx="8" cy="8" r="3" stroke="#4FC3F7" strokeWidth="1.6"/>
        <circle cx="16" cy="8" r="3" stroke="#4FC3F7" strokeWidth="1.6"/>
        <path d="M3.5 19a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v1H3.5v-1z" stroke="#4FC3F7" strokeWidth="1.6"/>
        <path d="M14 19v1h6v-1a5 5 0 0 0-5-5h0" stroke="#4FC3F7" strokeWidth="1.6"/>
      </svg>
    ),
    Events: () => (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
        <path d="M7 2v3M17 2v3M4 7h16v13H4V7z" stroke="#4FC3F7" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M8 11h3v3H8zM13 11h3v3h-3zM8 15h3v3H8z" stroke="#4FC3F7" strokeWidth="1.6" />
      </svg>
    ),
    Live: () => (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
        <circle cx="12" cy="12" r="9" stroke="#4FC3F7" strokeWidth="1.6"/>
        <path d="M10 8l6 4-6 4V8z" fill="#4FC3F7"/>
      </svg>
    ),
  };

  // Dashboard tiles (links are placeholders—wire up later)
  const tiles = [
    { title: "The Vault", desc: "Archived teachings & resources.", href: "#", Icon: Icon.Vault },
    { title: "Messages", desc: "Direct updates from Dr. Reid.", href: "#", Icon: Icon.Messages },
    { title: "Community", desc: "Testimonies, prayer & discussion.", href: "#", Icon: Icon.Community },
    { title: "Events", desc: "Mentorship sessions & gatherings.", href: "#", Icon: Icon.Events },
  ];

  // Include Watch Live tile only when not live
  if (!showBanner) {
    tiles.unshift({
      title: "Watch Live",
      desc: "Private member live stream.",
      href: "/live", // or route to a page that embeds live when ready
      Icon: Icon.Live
    });
  }

  return (
    <>
      <Head>
        <title> — Dr. Larry Reid Live</title>
      </Head>

      <section className="member-hub">
        {/* Hybrid LIVE banner (Crowdcast) */}
        {showBanner && (
          <div className="live-header">
  <span className="live-dot" /> <strong>Live Now</strong>
</div>

            <div className="live-header">
              <span className="live-dot" /> <strong>Live Now</strong>
            </div>
            <div className="live-frame">
              <iframe
                title="LRL Crowdcast Live"
                src={crowdcastUrl}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="live-actions">
              <a className="btn primary btn-center" href={crowdcastUrl} target="_blank" rel="noopener noreferrer">
                Open in New Window
              </a>
            </div>
          </div>
        )}

        {/* Header (minimal, no emojis) */}
        <header className="hub-header fade-in">
  <h1>LRL’s Hub</h1>
  <p>Mentorship, messages, community, and live events—exclusive to all LRL’s.</p>
</header>

        {/* 2×2 compact grid (auto responsive) */}
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

        {/* CTA */}
        <div className="hub-cta container fade-in">
          <h2>Explore Services</h2>
          <p>Prophetic consultations, coaching, and business mentorship with Dr. Larry Reid.</p>
          <Link href="/services" className="btn primary btn-center">View Services</Link>
        </div>
      </section>
    </>
  );
}
