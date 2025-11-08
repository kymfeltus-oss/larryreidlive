import Head from "next/head";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Head><title>Login — LRL</title></Head>
      <section className="mock-page narrow">
        <h1>Login</h1>
        <form className="mock-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn primary btn-center small">Login</button>
        </form>
        <p className="note">Don’t have an account? <Link href="/membership">Join</Link></p>
      </section>
    </>
  );
}
