import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push("/member"), 800); // mock redirect
  }

  return (
    <>
      <Head><title>Login — LRL</title></Head>
      <section className="login-page">
        <div className="login-glass fade-in">
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-sub">Sign in to access the LRL Hub</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="btn primary btn-center">
              {loading ? "Logging In..." : "Login"}
            </button>
          </form>

          <p className="login-note">
            Don’t have an account?{" "}
            <a href="/membership" className="link">Join the Movement</a>
          </p>
        </div>
      </section>
    </>
  );
}
