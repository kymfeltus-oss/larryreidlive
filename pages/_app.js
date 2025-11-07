// pages/_app.js
// Global App Component — applies shared styles, layout, and Navbar across all pages

import '../styles/globals.css';
import '../styles/home.css'; // ✅ Moved here so Next.js accepts the global import
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { auth } from '../lib/firebase';

export default function MyApp({ Component, pageProps }) {
  // Optional Firebase user-state listener (helpful for debugging or user display)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User logged in:', user.email);
      } else {
        console.log('User logged out');
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {/* Global Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="app-main">
        <Component {...pageProps} />
      </main>

      {/* Global Footer */}
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
