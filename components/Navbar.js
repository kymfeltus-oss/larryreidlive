// components/Navbar.js
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <img src="/assets/logo.png" alt="Larry Reid Live" className="brand-logo" />

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/membership" onClick={() => setMenuOpen(false)}>Join the Movement</Link>
          <Link href="/music" onClick={() => setMenuOpen(false)}>Music</Link>
          <Link href="/member" onClick={() => setMenuOpen(false)}>LRL’s Hub</Link>
          <a
            href="https://www.youtube.com/@LarryReidLive/streams"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Watch Live
          </a>
        </nav>
      </div>
    </header>
  );
}
