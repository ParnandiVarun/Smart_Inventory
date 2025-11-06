import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGYiHlQW7LIaeVJjbq9P-peFiglsdI7mI",
  authDomain: "smart-inventory-6c54e.firebaseapp.com",
  databaseURL:
    "https://smart-inventory-6c54e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-inventory-6c54e",
  storageBucket: "smart-inventory-6c54e.firebasestorage.app",
  messagingSenderId: "1014297527017",
  appId: "1:1014297527017:web:0104c63847d5f3428da678",
  measurementId: "G-SCR94C9EGW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
