import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState } from 'react';
import Link from 'next/link';

export default function Login(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [mode,setMode] = useState('login'); // or 'signup'

  async function handleSubmit(e){
    e.preventDefault();
    try{
      if(mode==='login') await signInWithEmailAndPassword(auth, email, password);
      else await createUserWithEmailAndPassword(auth, email, password);
      window.location.href = '/portal';
    }catch(e){
      alert(e.message);
    }
  }

  return (
    <div className="container" style={{maxWidth:480}}>
      <h2>{mode==='login'?'Login':'Create Account'}</h2>
      <form onSubmit={handleSubmit} className="card" style={{display:'grid',gap:12}}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/>
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
        <button className="btn primary" type="submit">{mode==='login'?'Login':'Sign Up'}</button>
        <button type="button" className="btn" onClick={()=>setMode(mode==='login'?'signup':'login')}>
          {mode==='login'?'Need an account? Sign up':'Have an account? Log in'}
        </button>
        <Link className="btn outline" href="/">Back</Link>
      </form>
      <div style={{opacity:.7,marginTop:8,fontSize:12}}>By continuing you agree to our Terms & Privacy.</div>
    </div>
  );
}
