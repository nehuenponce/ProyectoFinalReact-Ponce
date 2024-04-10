// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2-dKfpZOT0hwoqw-lcCwFm4PQ-HhvhOc",
  authDomain: "istock-ecommerce.firebaseapp.com",
  projectId: "istock-ecommerce",
  storageBucket: "istock-ecommerce.appspot.com",
  messagingSenderId: "785651488631",
  appId: "1:785651488631:web:4c725d076efb3a6c5d3372"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
