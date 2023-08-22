// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn7DH2xV6Xg3jmM8acDcHBBrKDe5N-OpE",
  authDomain: "react-disney-plus-app-ab7dc.firebaseapp.com",
  projectId: "react-disney-plus-app-ab7dc",
  storageBucket: "react-disney-plus-app-ab7dc.appspot.com",
  messagingSenderId: "342075283902",
  appId: "1:342075283902:web:e5c8201a690c6341a881ef",
  measurementId: "G-TSJRRTYSEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;