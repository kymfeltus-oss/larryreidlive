// pages/member.js
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Member() {
  const router = useRouter();
  const isGuest = router.query.guest === "1";
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setReady(true);
    });
    return () => unsub();
  }, []);

  async function handleLogout() {
    await signOut(auth).catch(()=>{});
    router.replace("/");
  }

  return (
    <>
      <Head>
        <title>Member Hub — Dr. Larry Reid Live</title>
      </Head>

      <section className="member-page">
        <div className="member-card">
          {(!ready && !isGuest) ? (
            <p>Loading...</p>
          ) : (
            <>
              <h1>{isGuest ? "Guest Preview" : `Welcome, ${user?.displayName || user?.email || "Member"}`}</h1>
              <p className="muted">
                {isGuest
                  ? "You are browsing as a guest. Some content may be limited."
                  : "You are logged into the Dr. Larry Reid Live Member Hub."}
              </p>

              <div className="member-links">
                <Link href="/portal" className="btn primary">Go to Vault</Link>
                <Link href="/membership" className="btn outline">Manage Membership</Link>
                <Link href="/music" className="btn outline">Music</Link>
              </div>

              <div className="member-foot">
                {isGuest ? (
                  <Link href="/login" className="btn small">Create Account / Login</Link>
                ) : (
                  <button onClick={handleLogout} className="btn logout">Logout</button>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
