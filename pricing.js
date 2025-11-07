import Pricing from '../components/Pricing';

export default function PricingPage(){
  return (
    <div className="container">
      <h2>Join the Movement</h2>
      <p style={{opacity:.8}}>Choose your plan. Secure checkout via Stripe (test mode until you add real keys).</p>
      <Pricing/>
      <p style={{opacity:.7,fontSize:12,marginTop:12}}>After checkout, you will return to /portal. Configure webhooks later to mark membership in the database.</p>
    </div>
  );
}
