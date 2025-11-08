// pages/api/checkout.js — mock endpoint
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  return res.status(200).json({ sessionUrl: "/mock-checkout" });
}
