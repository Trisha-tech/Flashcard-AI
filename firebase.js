// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd-H0WR7bChNQkHNiq5Mdlvs0DUvcWazI",
  authDomain: "flashcard-ai-8affa.firebaseapp.com",
  projectId: "flashcard-ai-8affa",
  storageBucket: "flashcard-ai-8affa.appspot.com",
  messagingSenderId: "792849278902",
  appId: "1:792849278902:web:ef8197db2268126bb08317",
  measurementId: "G-ZYJYDQQEV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;