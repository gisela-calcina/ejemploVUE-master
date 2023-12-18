import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALmyxpasoVkoxfec9PcB5Bl6A1EmPNYlo",
  authDomain: "iestpchupa2023-6bef4.firebaseapp.com",
  projectId: "iestpchupa2023-6bef4",
  storageBucket: "iestpchupa2023-6bef4.appspot.com",
  messagingSenderId: "138860269908",
  appId: "1:138860269908:web:db4b57306731b52d7d78c1"

};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };