import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// replace this firebase conFigvariable with your own
const firebaseConfig = {
apiKey: "AIzaSyBayLqzhlz3-x8gYyOdKXnBObDTKkrsLlQ",
authDomain: "cs-55-13-week-7.firebaseapp.com",
projectId: "cs-55-13-week-7",
storageBucket: "cs-55-13-week-7.appspot.com",
messagingSenderId: "1067358801590",
appId: "1:1067358801590:web:3db642c0b7c1583d07e017",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
