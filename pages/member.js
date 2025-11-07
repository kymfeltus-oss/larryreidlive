// pages/member.js
import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Head from "next/head";
import Link from "next/link";

export default function Member() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  return (
    <>
      <Head>
        <title>Member Hub — Dr. Larry Reid Live</title>
      </Head>

      <section className="member-page">
        <div className="member-card">
          {user ? (
            <>
              <h1>Welcome, {user.email}</h1>
              <p>
                You are now logged into the Dr. Larry Reid Live Member Hub.
                Explore mentorship content, exclusive videos, and more.
              </p>

              <div className="member-links">
                <Link href="/portal" className="btn primary">
                  Go to Vault
                </Link>
                <Link href="/membership" className="btn outline">
                  Manage Subscription
                </Link>
              </div>

              <button onClick={handleLogout} className="btn logout">
                Logout
              </button>
            </>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      </section>
    </>
  );
}
