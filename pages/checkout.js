import { stripe } from '../../lib/stripe';

export default async function handler(req, res){
  try{
    const { plan } = req.query;
    const priceMap = {
      mentorship: process.env.STRIPE_PRICE_ID_MENTORSHIP,
      partners: process.env.STRIPE_PRICE_ID_PARTNERS,
      inner: process.env.STRIPE_PRICE_ID_INNER,
    };
    if(!plan || !priceMap[plan]) return res.status(400).json({error:'Unknown plan'});
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceMap[plan], quantity: 1 }],
      success_url: `${req.headers.origin}/portal?sub=success`,
      cancel_url: `${req.headers.origin}/pricing?canceled=1`,
    });
    res.writeHead(302, { Location: session.url });
    res.end();
  }catch(e){
    res.status(500).json({error:e.message});
  }
}
