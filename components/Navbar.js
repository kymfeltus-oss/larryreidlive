// components/Navbar.js
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar transparent">
      <div className="nav-inner">
        {/* LOGO REMOVED FROM TOP — just the menu icon */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/membership">Membership</Link>
          <Link href="/portal">Portal</Link>
          <Link href="/music">Music</Link>
          <Link href="/login" className="btn small">
            Login
          </Link>
        </nav>

        {/* HAMBURGER ICON */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
