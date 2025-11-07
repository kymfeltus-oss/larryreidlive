// components/Navbar.js
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar transparent">
      <div className="nav-inner">
        {/* NAV LINKS OVERLAY (centered panel when open) */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/membership" onClick={() => setMenuOpen(false)}>Membership</Link>
          <Link href="/music" onClick={() => setMenuOpen(false)}>Music</Link>
          <Link href="/live" onClick={() => setMenuOpen(false)}>Watch Live</Link>
          <Link href="/login" className="btn small" onClick={() => setMenuOpen(false)}>Login</Link>
        </nav>

        {/* HAMBURGER (top-right) */}
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
      </div>
    </header>
  );
}
