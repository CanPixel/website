// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcirVXi-MZoLc7GhAQ8_dOrgFk1u35POI",
  authDomain: "canpixel.firebaseapp.com",
  projectId: "canpixel",
  storageBucket: "canpixel.firebasestorage.app",
  messagingSenderId: "212297051962",
  appId: "1:212297051962:web:96eadf0629bae3ff146a03",
  measurementId: "G-V6VH3J99CH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
