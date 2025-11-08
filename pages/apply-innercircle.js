import Head from "next/head";
import Link from "next/link";

export default function ApplyInnerCircle() {
  return (
    <>
      <Head><title>Inner Circle Application — LRL</title></Head>
      <section className="mock-page">
        <h1>Apply to the Inner Circle</h1>
        <p>Send your interest directly to the LRL team.</p>

        <form className="mock-form">
          <input type="text" placeholder="Full name" required />
          <input type="email" placeholder="Email address" required />
          <textarea placeholder="Tell us why you’d like to join..." rows="4" required></textarea>
          <button type="submit" className="btn primary btn-center">Send Message</button>
        </form>

        <p className="note">Messages go to mock backend (demo mode).</p>
        <Link href="/membership" className="btn outline btn-center">Back to Membership</Link>
      </section>
    </>
  );
}
