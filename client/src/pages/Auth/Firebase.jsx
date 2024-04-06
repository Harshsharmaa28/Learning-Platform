import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABbfL5ZjD9pyIcH6y9gs4g49bAegaaqD4",
  authDomain: "nex-learn-81fd2.firebaseapp.com",
  projectId: "nex-learn-81fd2",
  storageBucket: "nex-learn-81fd2.appspot.com",
  messagingSenderId: "244102635279",
  appId: "1:244102635279:web:3e4588b9d3631c96dce87a",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
export const auth = getAuth(app);
