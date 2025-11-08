import Link from "next/link";
import { useRouter } from "next/router";

export default function BottomTabs() {
  const r = useRouter();
  const a = (p) => (r.pathname === p ? "active" : "");
  return (
    <footer className="mobile-tabs">
      <Link href="/" className={a("/")}>🏠</Link>
      <Link href="/member" className={a("/member")}>📱</Link>
      <Link href="/music" className={a("/music")}>🎵</Link>
      <Link href="/membership" className={a("/membership")}>🎟️</Link>
      <Link href="/services" className={a("/services")}>💼</Link>
    </footer>
  );
}
