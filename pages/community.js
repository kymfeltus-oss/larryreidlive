import Head from "next/head";

export default function Community() {
  return (
    <>
      <Head><title>Community — LRL</title></Head>
      <div className="page-header">
        <img
          src="/assets/channels4_banner.jpg"
          alt="Community Banner"
          className="page-header-image"
        />
        <div className="header-overlay">
          <h1 className="header-title">Community</h1>
        </div>
      </div>

      <section className="mock-page">
        <p>Connect with other LRL members and join exclusive discussions here.</p>
      </section>
    </>
  );
}
