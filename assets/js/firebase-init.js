// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPbQPczRblXDH1zyq0GDotgBYgbxTx8k4",
  authDomain: "nsmun-news-978f7.firebaseapp.com",
  databaseURL: "https://nsmun-news-978f7-default-rtdb.firebaseio.com",
  projectId: "nsmun-news-978f7",
  storageBucket: "nsmun-news-978f7.appspot.com",
  messagingSenderId: "256880422922",
  appId: "1:256880422922:web:512e7ca5a0379f01c2eff3",
  measurementId: "G-1SP2LQG7M6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
