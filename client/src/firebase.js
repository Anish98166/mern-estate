// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5a98d.firebaseapp.com",
  projectId: "mern-estate-5a98d",
  storageBucket: "mern-estate-5a98d.appspot.com",
  messagingSenderId: "557254922068",
  appId: "1:557254922068:web:e82cbd3b6f37506d9482c1",
  measurementId: "G-TX64CJ9C6V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
