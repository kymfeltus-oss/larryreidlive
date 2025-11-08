import Link from "next/link";
import { useRouter } from "next/router";

export default function BottomTabs() {
  const router = useRouter();

  // Function to highlight active link
  const isActive = (path) => (router.pathname === path ? "active" : "");

  return (
    <nav className="bottom-tabs">
      <Link href="/" className={isActive("/")}>🏠</Link>
      <Link href="/music" className={isActive("/music")}>🎵</Link>
      <Link href="/membership" className={isActive("/membership")}>🌟</Link>
      <Link href="/login" className={isActive("/login")}>📱</Link>
      <Link href="/partners" className={isActive("/partners")}>🤝</Link>
    </nav>
  );
}
