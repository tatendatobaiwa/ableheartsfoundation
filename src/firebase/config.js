// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGAHKUJBbHaRmGa9CgF7wga72iLZ7fpYs",
  authDomain: "ablehearts-577b0.firebaseapp.com",
  projectId: "ablehearts-577b0",
  storageBucket: "ablehearts-577b0.firebasestorage.app",
  messagingSenderId: "101374129405",
  appId: "1:101374129405:web:5e22f3ca0ff79149d6ba94",
  measurementId: "G-6FBGDZTBXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
