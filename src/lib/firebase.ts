import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_Q7nA07rWWJhGqT-ki34y5xTMj7BKPHk",
  authDomain: "final-project-03-11a59.firebaseapp.com",
  projectId: "final-project-03-11a59",
  storageBucket: "final-project-03-11a59.firebasestorage.app",
  messagingSenderId: "122994968614",
  appId: "1:122994968614:web:f47efd2cff1897f349bee7",
  measurementId: "G-GTBPX3W70L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
