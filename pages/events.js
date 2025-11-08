import Head from "next/head";

export default function Events() {
  return (
    <>
      <Head><title>Events — LRL</title></Head>
      <div className="page-header">
        <img
          src="/assets/channels4_banner.jpg"
          alt="Events Banner"
          className="page-header-image"
        />
        <div className="header-overlay">
          <h1 className="header-title">Events</h1>
        </div>
      </div>
      <section className="mock-page">
        <img
          src="/assets/events-icon.png"
          alt="Events Icon"
          className="mock-icon"
        />
        <p>View upcoming sessions, retreats, and live mentorship gatherings.</p>
      </section>
    </>
  );
}
