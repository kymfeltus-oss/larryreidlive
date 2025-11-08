import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Member() {
  const [showLive, setShowLive] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    setShowLive(hour >= 10 && hour <= 22); // demo “live” window
  }, []);

  const tiles = [
    { title: "The Vault", desc: "Video archive & teachings", href: "/vault" },
    { title: "Messages", desc: "Direct updates from Dr. Reid", href: "/messages" },
    { title: "Community", desc: "Connect with other LRL’s", href: "/community" },
    { title: "Events", desc: "Mentorship sessions & gatherings", href: "/events" },
  ];

  return (
    <>
      <Head><title>LRL’s Hub</title></Head>
      <section className="member-hub">

        {showLive ? (
          <div className="live-banner fade-in">
            <div className="live-header">
              <span className="live-dot" /> <strong>We’re Live Now!</strong>
            </div>
            <iframe
              src="https://www.youtube.com/embed/live_stream?channel=UCXXXXXXXXXXXXXXXX"
              title="LRL Live"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="offline-banner fade-in">
            <img
              src="/assets/channels4_banner.jpg"
              alt="Larry Reid Live Banner"
              className="offline-banner-image"
            />
            <div className="header-overlay">
              <h1 className="header-title">Welcome to The Hub</h1>
            </div>
          </div>
        )}

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
