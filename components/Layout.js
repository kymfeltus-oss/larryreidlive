import Navbar from "./Navbar";
import BottomTabs from "./BottomTabs";
import "../styles/layout.css";

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="scroll-area">{children}</main>
      <BottomTabs />
    </div>
  );
}
