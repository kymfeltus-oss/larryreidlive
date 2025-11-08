import Head from "next/head";

export default function Messages() {
  return (
    <>
      <Head><title>Messages — LRL</title></Head>
      <div className="page-header">
        <img
          src="/assets/channels4_banner.jpg"
          alt="Messages Banner"
          className="page-header-image"
        />
        <div className="header-overlay">
          <h1 className="header-title">Messages</h1>
        </div>
      </div>
      <section className="mock-page">
        <img
          src="/assets/messages-icon.png"
          alt="Messages Icon"
          className="mock-icon"
        />
        <p>Direct updates and personal messages from Dr. Larry Reid.</p>
      </section>
    </>
  );
}
