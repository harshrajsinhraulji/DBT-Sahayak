// This file is machine-generated - edit with care!

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUjfBxveru9rBX_6wyOQvGY5dNeZ3Vx4c",
  authDomain: "dbt-sahayak-database.firebaseapp.com",
  projectId: "dbt-sahayak-database",
  storageBucket: "dbt-sahayak-database.firebasestorage.app",
  messagingSenderId: "36334179231",
  appId: "1:36334179231:web:5fd14a0515801ec918a3aa",
  measurementId: "G-QMET9YF77M"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
