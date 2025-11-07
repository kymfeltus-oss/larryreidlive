// lib/firebase.js
// Safe Firebase configuration with fallback values
// This prevents build errors if no real Firebase keys are provided yet.

import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

/**
 * Firebase configuration.
 * If environment variables are not provided,
 * fallback demo values are used to prevent build-time errors.
 */
const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'demo-api-key',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'demo.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'demo-project',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'demo.appspot.com',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '000000000000',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:000000000000:web:demo12345',
};

// Initialize Firebase app safely
const app = getApps().length ? getApps()[0] : initializeApp(config);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
