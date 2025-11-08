import Head from "next/head";
import Link from "next/link";

export default function Member() {
  const tiles = [
    { title: "The Vault", desc: "Archived teachings & resources.", href: "/vault" },
    { title: "Messages", desc: "Direct updates from Dr. Reid.", href: "/messages" },
    { title: "Community", desc: "Connect with other LRL’s.", href: "/community" },
    { title: "Events", desc: "Mentorship sessions & gatherings.", href: "/events" },
    { title: "Watch Live", desc: "Private livestreams for LRL’s.", href: "/live" },
  ];

  return (
    <>
      <Head><title>LRL’s Hub — Dashboard</title></Head>
      <section className="member-hub">
        <header className="hub-header fade-in">
          <h1>LRL’s Hub</h1>
          <p>Your space for mentorship, media, and community connection.</p>
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
