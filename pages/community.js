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
        <img
          src="/assets/community-icon.png"
          alt="Community Icon"
          className="mock-icon"
        />
        <p>Connect with other members, share experiences, and engage in forums.</p>
      </section>
    </>
  );
}
