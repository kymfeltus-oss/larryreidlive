import Head from "next/head";
import Link from "next/link";

export default function ApplyInnerCircle() {
  return (
    <>
      <Head><title>Inner Circle — LRL</title></Head>
      <section className="mock-page narrow">
        <h1>Inner Circle</h1>
        <p className="note">Apply directly to the LRL team.</p>

        <form className="mock-form">
          <input type="text" placeholder="Full name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Why would you like to join?" rows="3" required></textarea>
          <button type="submit" className="btn primary btn-center small">Send</button>
        </form>

        <Link href="/membership" className="btn outline btn-center small">Back</Link>
      </section>
    </>
  );
}
