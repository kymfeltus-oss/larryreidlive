// pages/checkout.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Checkout() {
  const router = useRouter();

  useEffect(() => {
    // Redirect user back to pricing
    router.replace('/pricing');
  }, [router]);

  return (
    <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h2>Processing Checkout...</h2>
      <p>You’ll be redirected shortly. If nothing happens, <a href="/pricing">click here</a>.</p>
    </div>
  );
}
