// lib/firebase.js — mock Firebase setup
export const auth = {
  currentUser: null,
  signInWithEmailAndPassword: async () => ({ user: { email: "mock@lrl.com" } }),
};
export const db = {};
export const storage = {};
export default {};
