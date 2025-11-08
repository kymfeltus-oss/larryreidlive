import Head from "next/head";
import "../styles/memberhub.css";

export default function Vault() {
  const videos = [
    {
      title: "The Power of Conscious Faith",
      desc: "Dr. Reid teaches on aligning faith and awareness.",
      url: "https://www.youtube.com/embed/VIDEO_ID_1",
    },
    {
      title: "Entertainment and Enlightenment",
      desc: "A look into how media shapes spiritual growth.",
      url: "https://www.youtube.com/embed/VIDEO_ID_2",
    },
    {
      title: "Prophetic Voices and the Modern Church",
      desc: "Exclusive discussion from the live mentorship series.",
      url: "https://www.youtube.com/embed/VIDEO_ID_3",
    },
  ];

  return (
    <>
      <Head><title>The Vault — LRL</title></Head>
      <section className="vault-page">
        <h1>The Vault</h1>
        <p>Browse video archives and exclusive teachings from Dr. Larry Reid.</p>

        <div className="video-grid">
          {videos.map((v, i) => (
            <div key={i} className="video-card">
              <div className="video-wrapper">
                <iframe
                  src={v.url}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
