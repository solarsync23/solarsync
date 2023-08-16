// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// https://solar-sync-10056-default-rtdb.firebaseio.com/
const firebaseConfig = {
  apiKey: "AIzaSyDWB1MKXgQzFtPsktHoNL7OOUUO10qpteU",
  authDomain: "solar-sync-10056.firebaseapp.com",
  projectId: "solar-sync-10056",
  storageBucket: "solar-sync-10056.appspot.com",
  messagingSenderId: "5897650664",
  appId: "1:5897650664:web:72fdd98265560d70fee45d",
  measurementId: "G-K4TDF7E5DJ",
  databaseURL: "https://solar-sync-10056-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const GetFireBaseAdmin = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    return { app, auth, db };
};