// pages/_app.js
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { auth } from '../lib/firebase';

export default function MyApp({ Component, pageProps }) {
  // Optional: Firebase auth listener (for debugging or initializing)
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      console.log('User state changed:', user?.email || 'signed out');
    });
    return () => unsub();
  }, []);

  return (
    <>
      <Navbar />
      <main className="app-main">
        <Component {...pageProps} />
      </main>
      <footer
        className="footer container"
        style={{
          opacity: 0.7,
          marginTop: '2rem',
          textAlign: 'center',
          padding: '1rem 0',
          fontSize: '0.9rem',
        }}
      >
        © {new Date().getFullYear()} <strong>Larry Reid Live LLC</strong> — Educate. Entertain. Enlighten.
      </footer>
    </>
  );
}
