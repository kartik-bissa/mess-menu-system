// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKl9frehLZGVmToRd7vdFIkcXWBDm19GY",
  authDomain: "mess-menu-system.firebaseapp.com",
  projectId: "mess-menu-system",
  storageBucket: "mess-menu-system.firebasestorage.app",
  messagingSenderId: "1000174767752",
  appId: "1:1000174767752:web:47d29cc9fa82e491e8d93d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
