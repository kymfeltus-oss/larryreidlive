// pages/login.js
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { auth } from "../lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default function Login() {
  const router = useRouter();
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [error, setError] = useState("");

  // common fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // extra profile fields for register
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [birthday, setBirthday] = useState("");
  const [occupation, setOccupation] = useState("");
  const [interest, setInterest] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/member");
      } else {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        // set display name as First Last (optional)
        try {
          await updateProfile(cred.user, { displayName: `${first} ${last}`.trim() });
        } catch {}
        // NOTE: Extra fields can be saved to Firestore later.
        router.push("/member");
      }
    } catch (err) {
      setError(err.message);
    }
  }

  function continueAsGuest() {
    router.push("/member?guest=1");
  }

  return (
    <>
      <Head>
        <title>{mode === "login" ? "Login" : "Create Account"} — Dr. Larry Reid Live</title>
      </Head>

      <section className="auth-wrap">
        <div className="auth-left">
          <div className="auth-blur" />
          <div className="auth-copy">
            <img src="/assets/logo.png" alt="LRL" className="auth-logo" />
            <h2>Join the Movement</h2>
            <p>
              Access mentorship content, exclusive lives, testimonies, and more.
              Create your profile to personalize your experience.
            </p>
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-card">
            <h1>{mode === "login" ? "Member Login" : "Create Account"}</h1>

            <form onSubmit={handleSubmit} className="auth-form">
              {mode === "register" && (
                <>
                  <div className="grid2">
                    <input placeholder="First Name" value={first} onChange={(e)=>setFirst(e.target.value)} required />
                    <input placeholder="Last Name" value={last} onChange={(e)=>setLast(e.target.value)} required />
                  </div>
                  <div className="grid2">
                    <input placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                    <input placeholder="Occupation" value={occupation} onChange={(e)=>setOccupation(e.target.value)} />
                  </div>
                  <div className="grid2">
                    <input placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)} />
                    <input placeholder="State" value={state} onChange={(e)=>setState(e.target.value)} />
                  </div>
                  <div className="grid2">
                    <input type="date" placeholder="Birthday" value={birthday} onChange={(e)=>setBirthday(e.target.value)} />
                    <input placeholder="Interest Area (e.g., Mentorship, Music)" value={interest} onChange={(e)=>setInterest(e.target.value)} />
                  </div>
                </>
              )}

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />

              {error && <p className="auth-error">{error}</p>}

              <button type="submit" className="btn primary">
                {mode === "login" ? "Login" : "Create Account"}
              </button>
            </form>

            <div className="auth-actions">
              {mode === "login" ? (
                <p>
                  New here?{" "}
                  <button className="link" onClick={()=>setMode("register")}>
                    Create an account
                  </button>
                </p>
              ) : (
                <p>
                  Already a member?{" "}
                  <button className="link" onClick={()=>setMode("login")}>
                    Login
                  </button>
                </p>
              )}
              <button className="btn outline" onClick={continueAsGuest}>
                Continue as Guest
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
