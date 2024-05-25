// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtEsFqWr1jDQ3roTo5KKIV9D4R3S0t0As",
  authDomain: "task-manager-1f45d.firebaseapp.com",
  projectId: "task-manager-1f45d",
  storageBucket: "task-manager-1f45d.appspot.com",
  messagingSenderId: "697279291341",
  appId: "1:697279291341:web:6f9219d23e363b68d5ee84",
  measurementId: "G-LYQLDVN84V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
