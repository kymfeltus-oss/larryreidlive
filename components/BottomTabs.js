import Link from "next/link";
import { useRouter } from "next/router";

export default function BottomTabs() {
  const router = useRouter();
  const active = (path) => (router.pathname === path ? "active" : "");

  return (
    <footer className="mobile-tabs">
      <Link href="/" className={active("/")}>🏠</Link>
      <Link href="/member" className={active("/member")}>📱</Link>
      <Link href="/music" className={active("/music")}>🎵</Link>
      <Link href="/services" className={active("/services")}>💼</Link>
      <Link href="/more" className={active("/more")}>⋯</Link>
    </footer>
  );
}
