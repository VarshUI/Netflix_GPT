import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAS_5RGmrP21CID0NVQ-YkapGuRJ9vWY4U",
  authDomain: "netflixgpt-f6531.firebaseapp.com",
  projectId: "netflixgpt-f6531",
  storageBucket: "netflixgpt-f6531.firebasestorage.app",
  messagingSenderId: "42559715079",
  appId: "1:42559715079:web:a4478b4d0149d96f7b37a2",
  measurementId: "G-PM9VNQ1JR2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
