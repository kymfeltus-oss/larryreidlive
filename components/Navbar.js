import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Hamburger Menu */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/member" onClick={() => setMenuOpen(false)}>Hub</Link>
          <Link href="/music" onClick={() => setMenuOpen(false)}>Music</Link>
          <Link href="/membership" onClick={() => setMenuOpen(false)}>Join</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        </nav>
      </div>
    </header>
  );
}
