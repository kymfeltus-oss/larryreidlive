import Head from "next/head";

export default function Music() {
  const items = [
    { title: "Africa Is Rising", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a5/b6/a3/a5b6a31c-db08-5c76-8246-3ff5daa81614/artwork.jpg/300x300bb.jpg", apple: "https://music.apple.com/us/album/africa-is-rising/1812095359" },
    { title: "Greater Than Before", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0b/7d/b1/0b7db184-c4f3-faf0-cf00-c56d72cfe7cc/859752469746_cover.jpg/300x300bb.jpg", apple: "https://music.apple.com/us/album/greater-than-before/1627160144" },
    { title: "Overcomer", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ed/5b/15/ed5b15f1-c145-4e7d-8e7e-49be60d6d6fd/artwork.jpg/300x300bb.jpg", apple: "https://music.apple.com/us/album/overcomer-single/1805937214" },
  ];
  return (
    <>
      <Head><title>Music — LRL</title></Head>
      <section className="music-page">
        <h1>Music by Dr. Larry Reid</h1>
        <div className="music-list">
          {items.map((it, i)=>(
            <a key={i} className="music-card" href={it.apple} target="_blank" rel="noopener noreferrer">
              <img src={it.cover} alt={it.title} />
              <div className="music-meta">
                <h3>{it.title}</h3>
                <span className="tag">Apple Music</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
