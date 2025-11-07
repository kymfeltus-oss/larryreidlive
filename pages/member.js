// pages/member.js
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Member() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  async function handleLogout() {
    await signOut(auth).catch(()=>{});
    window.location.href = "/";
  }

  return (
    <>
      <Head><title>Member Hub — Dr. Larry Reid Live</title></Head>
      <div className="container" style={{minHeight:"70vh", display:"grid", placeItems:"center"}}>
        <div className="card" style={{background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.1)", borderRadius:"1rem", padding:"2rem", width:"min(640px, 95%)", textAlign:"center"}}>
          <h2 style={{color:"#ff3b3b", marginTop:0}}>Member Hub</h2>
          <p>{user ? `Welcome, ${user.email}` : "Loading..."}</p>

          <div style={{display:"flex", gap:"10px", justifyContent:"center", flexWrap:"wrap", marginTop:"10px"}}>
            <Link href="/membership" className="btn outline">Manage Membership</Link>
            <Link href="/music" className="btn outline">Music</Link>
            <a href="https://www.youtube.com/@LarryReidLive/streams" target="_blank" rel="noopener noreferrer" className="btn primary">Watch Live</a>
          </div>

          <div style={{marginTop:"12px"}}>
            <button className="btn outline" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
}
