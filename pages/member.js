// pages/member.js
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Member() {
  const userName = "John Doe";

  // 🔔 Mock notifications
  const notifications = [
    "🕊️ New Prophetic Word uploaded in The Vault.",
    "📢 Mentorship Q&A with Dr. Reid this Thursday @ 7PM EST.",
    "🔥 Testimonies are flooding in — check the Community Board!",
    "🎥 New exclusive video message from Dr. Reid is live now.",
  ];

  const [activeNote, setActiveNote] = useState(notifications[0]);
  const [visible, setVisible] = useState(true);

  // Auto-rotate notifications
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNote =
        notifications[Math.floor(Math.random() * notifications.length)];
      setActiveNote(randomNote);
      setVisible(true);
      setTimeout(() => setVisible(false), 10000); // Auto-hide after 10s
    }, 15000); // Rotate every 15s
    return () => clearInterval(interval);
  }, []);

  // Scroll fade-ins (unchanged)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      <Head>
        <title>Membership Hub — Dr. Larry Reid Live</title>
      </Head>

      <section className="member-hub">
        {/* 🔔 Floating Notification */}
        {visible && (
          <div className="notification-banner">
            <p>{activeNote}</p>
            <button
              className="close-btn"
              onClick={() => setVisible(false)}
              aria-label="Dismiss notification"
            >
              ✖
            </button>
          </div>
        )}

        {/* Hero */}
        <div className="hub-hero fade-in-up">
          <h1>Welcome back, {userName} 👋</h1>
          <p>
            Your hub for mentorship, prophetic insight, and community connection
            with Dr. Larry Reid.
          </p>
        </div>

        {/* Quick Access Tiles */}
        <div className="hub-grid container fade-in-up">
          <Link href="#" className="hub-tile glow">
            <span className="emoji">📚</span>
            <h3>The Vault</h3>
            <p>Access archived teachings, mentorship sessions, and resources.</p>
          </Link>

          <Link href="#" className="hub-tile glow">
            <span className="emoji">💬</span>
            <h3>Messages from Dr. Reid</h3>
            <p>Exclusive messages, prophetic insights, and daily inspiration.</p>
          </Link>

          <Link href="#" className="hub-tile glow">
            <span className="emoji">👥</span>
            <h3>Community Board</h3>
            <p>Connect with members — share testimonies, prayers, and wins.</p>
          </Link>

          <Link href="#" className="hub-tile glow">
            <span className="emoji">📅</span>
            <h3>Events & Mentorships</h3>
            <p>View upcoming mentorship sessions and exclusive gatherings.</p>
          </Link>
        </div>

        {/* Featured Sections */}
        <div className="hub-sections container">
          <div className="hub-card fade-in-up">
            <h2>🕊️ Message from Dr. Reid</h2>
            <p>
              “Every day is an opportunity to align with your divine purpose.
              Live consciously, love intentionally, and lead boldly.”
            </p>
          </div>

          <div className="hub-card fade-in-up">
            <h2>📖 Upcoming Mentorship</h2>
            <p><strong>Topic:</strong> “Breaking Cycles of Limitation”</p>
            <p><strong>Date:</strong> Thursday @ 7:00 PM EST</p>
            <Link href="#" className="btn primary">
              Join Live Session
            </Link>
          </div>

          <div className="hub-card fade-in-up">
            <h2>🌍 Community Highlights</h2>
            <p>
              147 new testimonies this week! Members worldwide are sharing breakthroughs and blessings.
            </p>
            <Link href="#" className="btn outline">
              Visit Community
            </Link>
          </div>
        </div>

        {/* Action CTA */}
        <div className="hub-cta container fade-in-up">
          <h2>Ready to Go Deeper? 🔥</h2>
          <p>
            Book personal coaching, prophetic consultations, or business mentorship with Dr. Larry Reid today.
          </p>
          <Link href="/services" className="btn primary">
            Explore Services
          </Link>
        </div>
      </section>
    </>
  );
}
