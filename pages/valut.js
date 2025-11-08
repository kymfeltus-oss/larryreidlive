import Head from "next/head";

export default function Vault() {
  return (
    <>
      <Head><title>The Vault — LRL</title></Head>
      <div className="page-header">
        <img
          src="/assets/channels4_banner.jpg"
          alt="Vault Banner"
          className="page-header-image"
        />
        <div className="header-overlay">
          <h1 className="header-title">The Vault</h1>
        </div>
      </div>

      <section className="mock-page">
        <p>Archived teachings, exclusive video content, and messages will appear here.</p>
      </section>
    </>
  );
}
