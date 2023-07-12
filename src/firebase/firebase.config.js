// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6Qx4M6j7fLf29902dEdmIrJUvWE5pw1o",
  authDomain: "genius-car-3ff50.firebaseapp.com",
  projectId: "genius-car-3ff50",
  storageBucket: "genius-car-3ff50.appspot.com",
  messagingSenderId: "763786210201",
  appId: "1:763786210201:web:7f3d6a4eab88fff81e4108",
  measurementId: "G-3TDTPHNGPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;