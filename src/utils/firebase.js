// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc-JndPomCI4TdK53JM0ASi96xuOy-LCo",
  authDomain: "netflixgpt-ce886.firebaseapp.com",
  projectId: "netflixgpt-ce886",
  storageBucket: "netflixgpt-ce886.appspot.com",
  messagingSenderId: "298314271611",
  appId: "1:298314271611:web:1e9ba98ef2d4ea9a114bde",
  measurementId: "G-FX4F9SCWKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();