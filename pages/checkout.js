import Head from "next/head";
import Link from "next/link";

export default function CheckoutPartner() {
  return (
    <>
      <Head><title>Partner Checkout — LRL</title></Head>
      <section className="mock-page narrow">
        <h1>Checkout</h1>
        <p className="note">Mock payment form for $25/month subscription.</p>

        <form className="mock-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Card Number" required />
          <button type="submit" className="btn primary btn-center small">Confirm</button>
        </form>

        <Link href="/membership" className="btn outline btn-center small">Back</Link>
      </section>
    </>
  );
}
