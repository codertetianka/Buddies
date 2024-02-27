// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC5DI_bgGV75V8PCA1nB7D7aQ4u72DieoA",
  authDomain: "buddies-82f2e.firebaseapp.com",
  projectId: "buddies-82f2e",
  storageBucket: "buddies-82f2e.appspot.com",
  messagingSenderId: "180350395573",
  appId: "1:180350395573:web:dbeeeab601d113fb1acafc",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
