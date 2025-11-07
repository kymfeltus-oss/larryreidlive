// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner container">
        {/* LOGO */}
        <Link href="/" className="brand">
          <Image
            src="/assets/logo.png"
            alt="Larry Reid Live Logo"
            width={140}
            height={45}
            priority
            className="brand-logo"
          />
        </Link>

        {/* DESKTOP LINKS */}
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/membership">Membership</Link>
          <Link href="/portal">Portal</Link>
          <Link href="/music">Music</Link>
          <Link href="/login" className="btn small">
            Login
          </Link>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
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
