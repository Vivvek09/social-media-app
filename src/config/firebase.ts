// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhXnT1hakVvFQHQKyLoDydj5ZIowCcVAE",
  authDomain: "smapp-a3456.firebaseapp.com",
  projectId: "smapp-a3456",
  storageBucket: "smapp-a3456.appspot.com",
  messagingSenderId: "604181748631",
  appId: "1:604181748631:web:182e5cd27e14cfe03102d2",
  measurementId: "G-B6EGK10TDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);