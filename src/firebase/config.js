import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// //Base de datos de respaldo
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAsA6nRjAqAuW61c5Q6qDLzpUhel-a3r7U",
//   authDomain: "friche-admin-app-786e5.firebaseapp.com",
//   projectId: "friche-admin-app-786e5",
//   storageBucket: "friche-admin-app-786e5.appspot.com",
//   messagingSenderId: "801001134809",
//   appId: "1:801001134809:web:72dccfe0341200bd5d7cc8"
// };

// Base de datos
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