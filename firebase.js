// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWB1MKXgQzFtPsktHoNL7OOUUO10qpteU",
  authDomain: "solar-sync-10056.firebaseapp.com",
  projectId: "solar-sync-10056",
  storageBucket: "solar-sync-10056.appspot.com",
  messagingSenderId: "5897650664",
  appId: "1:5897650664:web:72fdd98265560d70fee45d",
  measurementId: "G-K4TDF7E5DJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);