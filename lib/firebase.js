// Import the functions you need from the SDKs you need

import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBP8YFguHh7ZnrynQ-F2eFlOf2Cw7ajCGo",
  authDomain: "merragedocrabbi.firebaseapp.com",
  projectId: "merragedocrabbi",
  storageBucket: "merragedocrabbi.firebasestorage.app",
  messagingSenderId: "467958089319",
  appId: "1:467958089319:web:b82e29719fa65faeec76c2",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
export { db };
