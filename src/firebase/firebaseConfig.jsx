// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:
    "AIzaSyBc1IXpq072G0awYNl_eziunrdwzIwUL_g",
  authDomain:
    "learnlingo-hanol.firebaseapp.com",
  projectId: "learnlingo-hanol",
  storageBucket:
    "learnlingo-hanol.firebasestorage.app",
  messagingSenderId: "71041737108",
  appId:
    "1:71041737108:web:b6925d878304bc4d40af81",
  measurementId: "G-BX4HVD9K9F",
};

// Initialize Firebase
const app = initializeApp(
  firebaseConfig,
);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
