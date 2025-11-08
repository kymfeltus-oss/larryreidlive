import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="nav-inner">
        <button
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/member" onClick={() => setOpen(false)}>Hub</Link>
          <Link href="/music" onClick={() => setOpen(false)}>Music</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/membership" onClick={() => setOpen(false)}>Join</Link>
          <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
        </nav>
      </div>
    </header>
  );
}
