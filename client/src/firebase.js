// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_dZJWgSxMADG9-AM6BAENQ9PeKzXvNTI",
  authDomain: "video-b3048.firebaseapp.com",
  projectId: "video-b3048",
  storageBucket: "video-b3048.appspot.com",
  messagingSenderId: "324486665211",
  appId: "1:324486665211:web:e2b708df8134850282b15e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const provider= new GoogleAuthProvider();

export default app;