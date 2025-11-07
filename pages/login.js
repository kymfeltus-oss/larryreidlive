// pages/login.js
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { auth } from "../lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const router = useRouter();
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      router.push("/member");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <Head>
        <title>
          {mode === "login" ? "Member Login" : "Create Account"} — Dr. Larry Reid
          Live
        </title>
      </Head>

      <section className="login-page">
        <div className="login-card">
          <h1>{mode === "login" ? "Member Login" : "Create Account"}</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error">{error}</p>}

            <button type="submit" className="btn primary">
              {mode === "login" ? "Login" : "Create Account"}
            </button>
          </form>

          <p className="switch">
            {mode === "login" ? (
              <>
                Don’t have an account?{" "}
                <span onClick={() => setMode("register")}>Create one</span>.
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span onClick={() => setMode("login")}>Login here</span>.
              </>
            )}
          </p>

          <Link href="/" className="btn outline small">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
