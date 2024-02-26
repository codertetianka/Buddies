// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: process.env.EXPO_PUBLIC_API_KEY,
//   authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
//   appId: process.env.EXPO_PUBLIC_APP_ID,
// };

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
