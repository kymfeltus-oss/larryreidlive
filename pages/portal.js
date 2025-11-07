// pages/portal.js
import RequireAuth from '../components/RequireAuth';
import Link from 'next/link';

export default function Portal() {
  return (
    <RequireAuth>
      <div className="container">
        <h2>Members Portal</h2>
        <p style={{ opacity: 0.85, marginBottom: '1.5rem' }}>
          Welcome to your private hub — access mentorship lessons, prophetic words, and exclusive content.
        </p>

        <div className="grid">
          <div className="card">
            <h3>📘 Mentorship Lessons</h3>
            <p>Start your Christ Consciousness journey and track progress through each tier.</p>
            <Link href="/lessons" className="btn primary">
              Open Lessons
            </Link>
          </div>

          <div className="card">
            <h3>💬 Prophecy & Testimony Board</h3>
            <p>Share confirmations and testimonies with the LRL community (coming soon).</p>
          </div>

          <div className="card">
            <h3>🎥 Patreon Feed</h3>
            <p>View and interact with recent Patreon posts without leaving the app.</p>
            <Link href="/patreon" className="btn">
              View Patreon
            </Link>
          </div>

          <div className="card">
            <h3>🎁 Subscription Status</h3>
            <p>Manage or upgrade your mentorship level securely via Stripe.</p>
            <a href="/pricing" className="btn outline">
              Manage Plan
            </a>
          </div>
        </div>
      </div>
    </RequireAuth>
  );
}
