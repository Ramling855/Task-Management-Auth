import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAtEsFqWr1jDQ3roTo5KKIV9D4R3S0t0As",
  authDomain: "task-manager-1f45d.firebaseapp.com",
  projectId: "task-manager-1f45d",
  storageBucket: "task-manager-1f45d.appspot.com",
  messagingSenderId: "697279291341",
  appId: "1:697279291341:web:6f9219d23e363b68d5ee84",
  measurementId: "G-LYQLDVN84V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, db, googleProvider };
