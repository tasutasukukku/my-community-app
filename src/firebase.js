// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // authをインポート
import { getFirestore } from "firebase/firestore"; // firestoreをインポート

const firebaseConfig = {
  apiKey: "AIzaSyAl7NwDQteBDrF2wunoeutPs1WkCregNRk",
  authDomain: "timewell-0109.firebaseapp.com",
  projectId: "timewell-0109",
  storageBucket: "timewell-0109.firebasestorage.app",
  messagingSenderId: "873404817885",
  appId: "1:873404817885:web:c4d3515251178263775634",
  measurementId: "G-KXQ7TB2M2Z"
};

// Firebaseアプリの初期化
const app = initializeApp(firebaseConfig);

// Firebaseのauthとfirestoreをエクスポート
export const auth = getAuth(app);  // authをエクスポート
export const db = getFirestore(app);  // dbをエクスポート
