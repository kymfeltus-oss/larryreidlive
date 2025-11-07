// pages/music.js
import Head from "next/head";

export default function Music() {
  const songs = [
    {
      title: "Africa Is Rising",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a5/b6/a3/a5b6a31c-db08-5c76-8246-3ff5daa81614/artwork.jpg/592x592bb.webp",
      apple: "https://music.apple.com/us/album/africa-is-rising/1812095359",
      spotify: "https://open.spotify.com/", // placeholder
    },
    {
      title: "Greater Than Before",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0b/7d/b1/0b7db184-c4f3-faf0-cf00-c56d72cfe7cc/859752469746_cover.jpg/592x592bb.webp",
      apple: "https://music.apple.com/us/album/greater-than-before/1627160144",
      spotify: "https://open.spotify.com/",
    },
    {
      title: "Overcomer",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ed/5b/15/ed5b15f1-c145-4e7d-8e7e-49be60d6d6fd/artwork.jpg/592x592bb.webp",
      apple: "https://music.apple.com/us/album/overcomer-single/1805937214",
      spotify: "https://open.spotify.com/",
    },
    {
      title: "God Don’t Play About Me",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f7/8d/91/f78d9195-ff0a-99c7-264f-aa70393eea18/artwork.jpg/592x592bb.webp",
      apple:
        "https://music.apple.com/us/album/god-dont-play-about-me-single/1753440124",
      spotify: "https://open.spotify.com/",
    },
    {
      title: "Y.A.T.A.N (You Ain’t Talking About Nothin)",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/97/29/01/97290171-55e6-80db-875b-00c7ca6e401e/859785686417_cover.jpg/592x592bb.webp",
      apple:
        "https://music.apple.com/us/album/y-a-t-a-n-you-aint-talking-about-nothin-single/1736925137",
      spotify: "https://open.spotify.com/",
    },
    {
      title: "He Delivers (feat. Bishop Carlton Pearson)",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/42/8a/0a/428a0a18-cbec-610c-e7cd-e4bbe66394bb/859764785551_cover.jpg/592x592bb.webp",
      apple:
        "https://music.apple.com/us/album/he-delivers-single-feat-bishop-carlton-pearson-single/1639683803",
      spotify: "https://open.spotify.com/",
    },
    {
      title: "A Dangerous Love",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/fb/fd/72/fbfd7208-c822-2cb0-3eee-90123755a2b4/859760155723_cover.jpg/592x592bb.webp",
      apple:
        "https://music.apple.com/us/album/a-dangerous-love-single/1610616054",
      spotify: "https://open.spotify.com/",
    },
    {
      title: "The Blood",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/16/cf/29/16cf296a-12e8-07ba-8ed9-cacb89c7298a/859750537768_cover.jpg/592x592bb.webp",
      apple: "https://music.apple.com/us/album/the-blood-single/1586974937",
      spotify: "https://open.spotify.com/",
    },
    {
      title: "Black Magic",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/24/e1/39/24e13931-c3f8-d679-d033-1b495d957981/859742938405_cover.jpg/592x592bb.webp",
      apple: "https://music.apple.com/us/album/black-magic-single/1535961311",
      spotify: "https://open.spotify.com/",
    },
    {
      title: "Smile",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/f3/d5/13/f3d5133a-4ec2-7bb6-164b-dc4215c063a5/859731619988_cover.jpg/592x592bb.webp",
      apple: "https://music.apple.com/us/album/smile-single/1457624561",
      spotify: "https://open.spotify.com/",
    },
  ];

  return (
    <>
      <Head>
        <title>Music — Dr. Larry Reid Live</title>
      </Head>

      <section className="music-hero">
        <h1>Music by Dr. Larry Reid</h1>
        <p>
          Experience the unique sound and message of Dr. Larry Reid through his
          latest singles and albums — available on all major platforms.
        </p>
      </section>

      <section className="music-grid container">
        {songs.map((song) => (
          <div className="music-card" key={song.title}>
            <img
              src={song.cover}
              alt={song.title}
              className="music-cover"
              loading="lazy"
            />
            <h3>{song.title}</h3>
            <div className="music-buttons">
              <a
                href={song.apple}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                Apple Music
              </a>
              <a
                href={song.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="btn outline"
              >
                Spotify
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
