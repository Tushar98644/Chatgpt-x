import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEzM0tqLxHBDI8cT3Psa1Cc68H8RKG598",
  authDomain: "chat-evil.firebaseapp.com",
  projectId: "chat-evil",
  storageBucket: "chat-evil.appspot.com",
  messagingSenderId: "197143019936",
  appId: "1:197143019936:web:b0511473bbe862d93824c5",
  measurementId: "G-GSKEBRYC3T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth=getAuth();

// export function to initialize firebase 
export function initFirebase() {
    return app;
    }
