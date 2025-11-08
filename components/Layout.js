import Navbar from "./Navbar";
import BottomTabs from "./BottomTabs";

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="scroll-area">{children}</main>
      <BottomTabs />
    </div>
  );
}
