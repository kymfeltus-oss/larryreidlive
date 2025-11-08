// lib/stripe.js
import Stripe from "stripe";

// If you haven't added the key in Netlify yet, you can use a placeholder for now.
// Add STRIPE_SECRET_KEY in your Netlify Environment Variables.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder", {
  apiVersion: "2023-10-16",
});

export default stripe;
