// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmPftvaUJ3XvQ1eZxl1pzXwmYWJXuBglY",
  authDomain: "learn-easy-app.firebaseapp.com",
  projectId: "learn-easy-app",
  storageBucket: "learn-easy-app.appspot.com",
  messagingSenderId: "855548437450",
  appId: "1:855548437450:web:e1233459afa26a5ceae533",
  measurementId: "G-1LYHR6CZQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app