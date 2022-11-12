// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL9oyKdbkg2aY4xGX9wHPpmLMsV1hcRBo",
  authDomain: "genius-car-b681b.firebaseapp.com",
  projectId: "genius-car-b681b",
  storageBucket: "genius-car-b681b.appspot.com",
  messagingSenderId: "935395217578",
  appId: "1:935395217578:web:c3aa222c3116e2ea24c0d3",
  measurementId: "G-0NGWDX52RH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app ;