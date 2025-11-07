// pages/member.js
import Head from "next/head";
import Link from "next/link";

export default function Member() {
  return (
    <>
      <Head>
        <title>Membership Hub — Dr. Larry Reid Live</title>
      </Head>

      <section className="member-hub">
        <div className="hub-hero">
          <h1>Welcome Back, Faith Partner</h1>
          <p>
            Stay connected — new mentorship lessons, prophecies, and updates from Dr. Reid
            are waiting for you.
          </p>
        </div>

        {/* Quick Access Tiles */}
        <div className="hub-grid container">
          <Link href="#" className="hub-tile">
            <img src="/assets/icons/vault.png" alt="Vault" />
            <h3>The Vault</h3>
            <p>Access archived teachings, mentorship videos, and study materials.</p>
          </Link>

          <Link href="#" className="hub-tile">
            <img src="/assets/icons/messages.png" alt="Messages" />
            <h3>Messages from Dr. Reid</h3>
            <p>Personal messages and prophetic insight directly from Dr. Reid.</p>
          </Link>

          <Link href="#" className="hub-tile">
            <img src="/assets/icons/community.png" alt="Community" />
            <h3>Community Board</h3>
            <p>Testimonies, prayers, and discussions with other members.</p>
          </Link>

          <Link href="#" className="hub-tile">
            <img src="/assets/icons/events.png" alt="Events" />
            <h3>Upcoming Events</h3>
            <p>Mentorship meetings, lives, and exclusive training sessions.</p>
          </Link>
        </div>

        {/* Featured Sections */}
        <div className="hub-sections container">
          <div className="hub-card">
            <h2>🕊️ Message from Dr. Reid</h2>
            <p>
              “Every day is an opportunity to elevate your thinking and align your energy
              with your divine assignment. Stay encouraged, stay empowered, and keep
              evolving.”
            </p>
          </div>

          <div className="hub-card">
            <h2>📅 Upcoming Mentorship Session</h2>
            <p><strong>Topic:</strong> Breaking Cycles of Limitation</p>
            <p><strong>Date:</strong> Thursday, 7:00 PM EST</p>
            <Link href="#" className="btn primary">
              Join Live Session
            </Link>
          </div>

          <div className="hub-card">
            <h2>💬 Community Highlights</h2>
            <p>132 new testimonies shared this week. Read inspiring stories from members worldwide.</p>
            <Link href="#" className="btn outline">
              Visit Community
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="hub-cta container">
          <h2>Ready to Go Deeper?</h2>
          <p>
            Explore Prophecies, Business Coaching, or Personal Mentorship Services with Dr. Reid.
          </p>
          <Link href="/services" className="btn primary">
            View Services
          </Link>
        </div>
      </section>
    </>
  );
}
