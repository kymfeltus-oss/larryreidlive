// lib/stripe.js — mock Stripe client
const stripe = {
  checkout: {
    sessions: {
      create: async () => ({ url: "/mock-checkout" }),
    },
  },
};
export default stripe;
