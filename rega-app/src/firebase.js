import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG7Q5Q1aj...",
  authDomain: "tprega-4d32c.firebaseapp.com",
  projectId: "tprega-4d32c",
  storageBucket: "tprega-4d32c.appspot.com",
  messagingSenderId: "990192202122",
  appId: "1:990192202122:web:53e01975896219de44d873"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
