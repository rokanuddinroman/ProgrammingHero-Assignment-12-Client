// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcowXetL8Gc-siR-4sfdsR2tloClzFuNM",
    authDomain: "programminghero-assignment-12.firebaseapp.com",
    projectId: "programminghero-assignment-12",
    storageBucket: "programminghero-assignment-12.appspot.com",
    messagingSenderId: "472791869026",
    appId: "1:472791869026:web:c3e4979cedbcbc861d133b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;