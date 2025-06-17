// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHuq1bDG12loY8VQZuN3EpbaI8ZQipLO8",
  authDomain: "linkedin-clone-1b509.firebaseapp.com",
  projectId: "linkedin-clone-1b509",
  storageBucket: "linkedin-clone-1b509.firebasestorage.app",
  messagingSenderId: "231296230085",
  appId: "1:231296230085:web:ae4319a3dfa35661c446ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
export { auth, app, firestore};