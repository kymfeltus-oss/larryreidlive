// pages/login.js
import { useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Link from "next/link";
import Head from "next/head";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login"); // toggle between login/signup
  const [error, setError] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      router.push("/member"); // redirect to member hub
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Head>
        <title>{mode === "login" ? "Login" : "Register"} — Dr. Larry Reid Live</title>
      </Head>

      <section className="login-page">
        <div className="login-card">
          <h1>{mode === "login" ? "Member Login" : "Create Account"}</h1>

          <form onSubmit={handleAuth}>
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
              {mode === "login" ? "Login" : "Register"}
            </button>
          </form>

          <p className="switch">
            {mode === "login" ? (
              <>
                Don’t have an account?{" "}
                <span onClick={() => setMode("register")}>Register here</span>.
              </>
            ) : (
              <>
                Already a member?{" "}
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
