import RequireAuth from '../../components/RequireAuth';

export default function Patreon(){
  const token = process.env.NEXT_PUBLIC_PATREON_TOKEN;
  const campaign = process.env.NEXT_PUBLIC_PATREON_CAMPAIGN_ID;
  return (
    <RequireAuth>
      <div className="container">
        <h2>Patreon</h2>
        <p style={{opacity:.85}}>For the prototype, we link directly to Patreon. When you add a Creator Access Token and Campaign ID to your <code>.env.local</code>, we can fetch posts here (subject to CORS).</p>
        <a className="btn primary" href="https://www.patreon.com" target="_blank">Open Patreon</a>
      </div>
    </RequireAuth>
  );
}
