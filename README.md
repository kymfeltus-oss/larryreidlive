# Larry Reid Live — Prototype (Next.js + Firebase + Stripe)

A working prototype with:
- Landing page + YouTube embeds
- Firebase Auth (email/password)
- Members Portal + sample lesson
- Pricing + Stripe Checkout (subscription)
- Patreon link page (API-ready)
- Web push placeholders (Firebase Cloud Messaging)

## Quick Start

1. **Clone & install**
```bash
npm install
cp .env.example .env.local
```

2. **Create Firebase project** and fill `NEXT_PUBLIC_FIREBASE_*` keys into `.env.local`.

3. **Stripe**
- Create 3 Prices (Monthly) in Stripe dashboard and put their IDs in `.env.local`:
  - `STRIPE_PRICE_ID_MENTORSHIP`
  - `STRIPE_PRICE_ID_PARTNERS`
  - `STRIPE_PRICE_ID_INNER`
- Add `STRIPE_SECRET_KEY` (test key).
- Run dev: `npm run dev`

4. **Login & Portal**
- Visit `http://localhost:3000/login` and create an account.
- Open `/portal` (protected).

5. **Deploy (Vercel or Netlify)**
- Add env vars in project settings.
- Deploy. The `/api/checkout` route will work as a serverless function.

## Notes
- To mark users as active members after checkout, add a Stripe webhook that updates Firestore (not included in this prototype).
- Patreon: add `NEXT_PUBLIC_PATREON_TOKEN` and `NEXT_PUBLIC_PATREON_CAMPAIGN_ID` to fetch posts (may require a proxy function to avoid CORS).
- Web Push: add `NEXT_PUBLIC_FIREBASE_VAPID_KEY` and configure `firebase-messaging-sw.js`.
