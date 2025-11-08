import Head from "next/head";
import Link from "next/link";

export default function CheckoutPartner() {
  return (
    <>
      <Head><title>Partner LRL Checkout</title></Head>
      <section className="mock-page">
        <h1>Partner LRL Checkout</h1>
        <p className="note">Mock checkout screen for $25/month subscription.</p>

        <form className="mock-form">
          <input type="text" placeholder="Full name" required />
          <input type="email" placeholder="Email address" required />
          <input type="text" placeholder="Card Number" required />
          <button type="submit" className="btn primary btn-center">Confirm Payment</button>
        </form>

        <p className="note">Payment gateway not active — demo only.</p>
        <Link href="/membership" className="btn outline btn-center">Back to Membership</Link>
      </section>
    </>
  );
}
