// components/Navbar.js
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar transparent">
      <div className="nav-inner">
        {/* Right-aligned hamburger */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Slide-down menu (mobile-first) */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/membership" onClick={() => setMenuOpen(false)}>Membership</Link>
          <Link href="/music" onClick={() => setMenuOpen(false)}>Music</Link>
          <a
            href="https://www.youtube.com/@LarryReidLive/streams"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Watch Live
          </a>
          <Link href="/login" className="btn small" onClick={() => setMenuOpen(false)}>Login</Link>
        </nav>
      </div>
    </header>
  );
}
