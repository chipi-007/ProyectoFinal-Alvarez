import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB21iWF0weXuY3zO0rCedYEKOEFtpzL5oM",
  authDomain: "final-alvarezmatias.firebaseapp.com",
  projectId: "final-alvarezmatias",
  storageBucket: "final-alvarezmatias.firebasestorage.app",
  messagingSenderId: "906762784384",
  appId: "1:906762784384:web:24aaee6c93924e8e7c6065"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
