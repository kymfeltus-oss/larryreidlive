// pages/_app.js
// Global App Component — applies shared styles, layout, and Navbar across all pages

// ===== IMPORT ALL GLOBAL STYLES =====
import '../styles/globals.css';
import '../styles/home.css';
import '../styles/membership.css';
import '../styles/music.css'; // ✅ added new Music page styles

// ===== IMPORT COMPONENTS =====
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { auth } from '../lib/firebase';

export default function MyApp({ Component, pageProps }) {
  // Firebase user-state listener (for debugging / user sessions)
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
      {/* ===== GLOBAL NAVIGATION ===== */}
      <Navbar />

      {/* ===== PAGE CONTENT ===== */}
      <main className="app-main">
        <Component {...pageProps} />
      </main>

      {/* ===== GLOBAL FOOTER ===== */}
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
        © {new Date().getFullYear()} <strong>Dr. Larry Reid Live LLC</strong> — Educate. Entertain. Enlighten.
      </footer>
    </>
  );
}
