import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUjMI96ghSPUsOp4VA8ZR5XkZCLCCpNQw",
  authDomain: "friche-admin-app.firebaseapp.com",
  projectId: "friche-admin-app",
  storageBucket: "friche-admin-app.appspot.com",
  messagingSenderId: "260022634220",
  appId: "1:260022634220:web:46bf7584fc9820a3ff87c9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();