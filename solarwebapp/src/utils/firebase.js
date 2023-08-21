import {initializeApp} from "firebase/app";
import { getAuth, browserLocalPersistence, setPersistence, sendPasswordResetEmail} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDWB1MKXgQzFtPsktHoNL7OOUUO10qpteU",
    authDomain: "solar-sync-10056.firebaseapp.com",
    projectId: "solar-sync-10056",
    storageBucket: "solar-sync-10056.appspot.com",
    messagingSenderId: "5897650664",
    appId: "1:5897650664:web:72fdd98265560d70fee45d",
    measurementId: "G-K4TDF7E5DJ",
    // databaseURL: "https://solar-sync-10056-default-rtdb.firebaseio.com/"
  
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const auth = getAuth(app);
export const db = getFirestore(app);
export { sendPasswordReset };

setPersistence(auth, browserLocalPersistence)