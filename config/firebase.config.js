// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "unipeers-9b74a.firebaseapp.com",
  projectId: "unipeers-9b74a",
  storageBucket: "unipeers-9b74a.firebasestorage.app",
  messagingSenderId: "892201360969",
  appId: "1:892201360969:web:04b670a7daf129d6b2e998"
};

// Initialize Firebase
const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();
const db=getFirestore(app);

export{db};