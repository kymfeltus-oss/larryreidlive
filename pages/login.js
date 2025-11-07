// pages/login.js
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [mode, setMode] = useState("login"); // login | register
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
      <Head><title>{mode === "login" ? "Login" : "Create Account"} — Dr. Larry Reid Live</title></Head>

      <div className="container" style={{minHeight:"70vh", display:"grid", placeItems:"center"}}>
        <div className="card" style={{background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.1)", borderRadius:"1rem", padding:"2rem", width:"min(480px, 95%)", textAlign:"center"}}>
          <h2 style={{color:"#ff3b3b", marginTop:0}}>{mode === "login" ? "Member Login" : "Create Account"}</h2>
          <form onSubmit={handleSubmit} style={{display:"grid", gap:"12px"}}>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required
              style={{padding:".9rem 1rem", borderRadius:".6rem", border:"1px solid rgba(255,255,255,.18)", background:"rgba(255,255,255,.08)", color:"#fff"}}/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required
              style={{padding:".9rem 1rem", borderRadius:".6rem", border:"1px solid rgba(255,255,255,.18)", background:"rgba(255,255,255,.08)", color:"#fff"}}/>

            {error && <p style={{color:"#ff3b3b"}}>{error}</p>}

            <button className="btn primary" type="submit">{mode === "login" ? "Login" : "Create Account"}</button>
          </form>

          <div style={{marginTop:"10px"}}>
            {mode === "login" ? (
              <span>New here? <button onClick={()=>setMode("register")} className="link" style={{background:"none", border:"none", color:"#ff3b3b", cursor:"pointer", fontWeight:700}}>Create an account</button></span>
            ) : (
              <span>Already a member? <button onClick={()=>setMode("login")} className="link" style={{background:"none", border:"none", color:"#ff3b3b", cursor:"pointer", fontWeight:700}}>Login</button></span>
            )}
          </div>

          <div style={{marginTop:"10px"}}>
            <Link href="/" className="btn outline">Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}
