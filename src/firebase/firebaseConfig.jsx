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
    "AIzaSyAip9mg03Q8dlKdTzasWJ8akIQWwxD4NuU",
  authDomain:
    "teachers-5219b.firebaseapp.com",
  projectId: "teachers-5219b",
  storageBucket:
    "teachers-5219b.firebasestorage.app",
  messagingSenderId: "273644048704",
  appId:
    "1:273644048704:web:660821341686e0ce762aa5",
};

// Initialize Firebase
const app = initializeApp(
  firebaseConfig,
);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
