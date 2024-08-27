import { initializeApp } from "firebase/app";
import {getFirestore,serverTimestamp} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBidBvNfeI_HH3Qtg0YJIhOpyEsgULgfPA",
  authDomain: "clone-93ba8.firebaseapp.com",
  projectId: "clone-93ba8",
  storageBucket: "clone-93ba8.appspot.com",
  messagingSenderId: "328205597881",
  appId: "1:328205597881:web:9fc983c43f9197a217af68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export {app, db, auth, provider, timestamp};