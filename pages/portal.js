import RequireAuth from '../components/RequireAuth';
import Link from 'next/link';

export default function Portal(){
  return (
    <RequireAuth>
      <div className="container">
        <h2>Members Portal</h2>
        <div className="grid">
          <div className="card">
            <h3>Mentorship Lessons</h3>
            <p>Start your Christ Consciousness journey. Track progress and reflections.</p>
            <Link className="btn primary" href="/portal/lessons">Open</Link>
          </div>
          <div className="card">
            <h3>Prophecy & Testimony Board</h3>
            <p>Share what resonated with you. Coming soon.</p>
          </div>
          <div className="card">
            <h3>Patreon Feed</h3>
            <p>View recent Patreon posts without leaving the app.</p>
            <Link className="btn" href="/portal/patreon">View</Link>
          </div>
        </div>
      </div>
    </RequireAuth>
  );
}
