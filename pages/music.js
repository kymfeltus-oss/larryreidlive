import Head from "next/head";

export default function Music() {
  const albums = [
    {
      title: "Africa Is Rising",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a5/b6/a3/a5b6a31c-db08-5c76-8246-3ff5daa81614/artwork.jpg/592x592bb.webp",
      apple: "https://music.apple.com/us/album/africa-is-rising/1812095359",
    },
    {
      title: "Greater Than Before",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0b/7d/b1/0b7db184-c4f3-faf0-cf00-c56d72cfe7cc/859752469746_cover.jpg/592x592bb.webp",
      apple: "https://music.apple.com/us/album/greater-than-before/1627160144",
    },
  ];

  const singles = [
    {
      title: "Overcomer",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ed/5b/15/ed5b15f1-c145-4e7d-8e7e-49be60d6d6fd/artwork.jpg/592x592bb.webp",
      apple: "https://music.apple.com/us/album/overcomer-single/1805937214",
    },
    {
      title: "God Don’t Play About Me",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f7/8d/91/f78d9195-ff0a-99c7-264f-aa70393eea18/artwork.jpg/592x592bb.webp",
      apple:
        "https://music.apple.com/us/album/god-dont-play-about-me-single/1753440124",
    },
  ];

  const socials = [
    { icon: "📘", name: "Facebook", link: "https://facebook.com/LarryReidLive" },
    { icon: "📸", name: "Instagram", link: "https://instagram.com/LarryReidLive" },
    { icon: "🐦", name: "X / Twitter", link: "https://twitter.com/LarryReidLive" },
    { icon: "▶️", name: "YouTube", link: "https://youtube.com/@LarryReidLive" },
  ];

  return (
    <>
      <Head><title>Music — LRL</title></Head>

      <div className="music-header">
        <img
          src="/assets/channels4_banner.jpg"
          alt="Larry Reid Live Banner"
          className="music-header-image"
        />
        <div className="header-overlay">
          <h1 className="header-title">Music</h1>
        </div>
      </div>

      <section className="music-page">
        <h2 className="section-title">Albums</h2>
        <div className="music-grid">
          {albums.map((a, i) => (
            <div className="music-card" key={i}>
              <img src={a.cover} alt={a.title} className="cover" />
              <h3>{a.title}</h3>
              <a
                className="btn apple-btn"
                href={a.apple}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/apple-music-logo.png"
                  alt="Apple Music"
                  className="icon-apple"
                />
                Apple Music
              </a>
            </div>
          ))}
        </div>

        <h2 className="section-title">Singles</h2>
        <div className="music-grid">
          {singles.map((s, i) => (
            <div className="music-card" key={i}>
              <img src={s.cover} alt={s.title} className="cover" />
              <h3>{s.title}</h3>
              <a
                className="btn apple-btn"
                href={s.apple}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/apple-music-logo.png"
                  alt="Apple Music"
                  className="icon-apple"
                />
                Apple Music
              </a>
            </div>
          ))}
        </div>

        <div className="music-links">
          <a
            href="https://patreon.com/LarryReidLive"
            target="_blank"
            rel="noopener noreferrer"
            className="btn patreon-btn"
          >
            ❤️ Support on Patreon
          </a>

          <div className="social-grid">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">{s.icon}</span> {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
