// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1zFM4_8N-RrARlqiRWqK9s1uKHG2-3g0",
    authDomain: "payment-page-cfa0c.firebaseapp.com",
    projectId: "payment-page-cfa0c",
    storageBucket: "payment-page-cfa0c.appspot.com",
    messagingSenderId: "738914805497",
    appId: "1:738914805497:web:1aa1b59f73c3e4476ae428"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth