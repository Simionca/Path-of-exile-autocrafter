// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAKmjRzP6NdwsCy0FTzJou3fMIh1E_1NS0",
  authDomain: "path-of-exile-autocrafter.firebaseapp.com",
  projectId: "path-of-exile-autocrafter",
  storageBucket: "path-of-exile-autocrafter.appspot.com",
  messagingSenderId: "404161089930",
  appId: "1:404161089930:web:f02477bd5821d40d227873",
  measurementId: "G-9WDLBJK11T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);