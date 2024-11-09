// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk9XJmNO-Xg61OeMqk7X8wkrd3CYZCQwA",
  authDomain: "junkmanagementsolution.firebaseapp.com",
  projectId: "junkmanagementsolution",
  storageBucket: "junkmanagementsolution.appspot.com",
  messagingSenderId: "881833025117",
  appId: "1:881833025117:web:041bfce4e7157b272937b4",
  measurementId: "G-TVBTZR85HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };