// pages/member.js
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

export default function Member() {
  const userName = "John Doe";

  useEffect(() => {
    // Scroll animation logic
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

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Head>
        <title>Membership Hub — Dr. Larry Reid Live</title>
      </Head>

      <section className="member-hub">
        {/* Hero / Welcome */}
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
