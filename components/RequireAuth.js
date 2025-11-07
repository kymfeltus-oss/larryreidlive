import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import Link from 'next/link';

export default function RequireAuth({children}){
  const [user,setUser] = useState(undefined);
  useEffect(()=>{
    return onAuthStateChanged(auth, u => setUser(u || null));
  },[]);
  if(user === undefined) return <div className="container">Loading...</div>;
  if(!user) return <div className="container"><h2>Members Only</h2><p>Please <Link href="/login">log in</Link> to access the portal.</p></div>;
  return children;
}
