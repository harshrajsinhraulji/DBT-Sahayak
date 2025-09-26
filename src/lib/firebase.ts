// This file is machine-generated - edit with care!

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  "projectId": "studio-353781992-6bde9",
  "appId": "1:836635552483:web:45516c721bcfb709cbb3d6",
  "apiKey": "AIzaSyDfhTS63lp7cfUEDykXo9ka8v0TakjmmBI",
  "authDomain": "studio-353781992-6bde9.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "836635552483"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
