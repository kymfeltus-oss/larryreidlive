import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../styles/memberhub.css";

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

  const tiles = [
    { title: "The Vault", desc: "Archived teachings & resources.", href: "/vault" },
    { title: "Messages", desc: "Direct updates from Dr. Reid.", href: "/messages" },
    { title: "Community", desc: "Connect with other LRL’s.", href: "/community" },
    { title: "Events", desc: "Mentorship sessions & gatherings.", href: "/events" },
  ];
  if (!showBanner) tiles.unshift({ title: "Watch Live", desc: "Private livestreams for LRL’s.", href: "/live" });

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
              <iframe src={crowdcastUrl} allow="autoplay; encrypted-media" allowFullScreen />
            </div>
          </div>
        ) : (
          <div className="offline-banner fade-in">
            <img src="/assets/channels4_banner.jpg" alt="Larry Reid Live" className="offline-banner-image" />
          </div>
        )}

        <header className="hub-header fade-in">
          <h1>LRL’s Hub</h1>
          <p>Mentorship, messages, community, and events — exclusive to all LRL’s.</p>
        </header>

        <div className="hub-grid container fade-in">
          {tiles.map(({ title, desc, href }, i) => (
            <Link href={href} key={i} className="tile">
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="btn outline btn-center">Open</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
