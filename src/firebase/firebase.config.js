// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBB9-104lFekfL9wN3qKJ3kS06TsjGyfDM",
    authDomain: "react-ecommerce-f2beb.firebaseapp.com",
    projectId: "react-ecommerce-f2beb",
    storageBucket: "react-ecommerce-f2beb.appspot.com",
    messagingSenderId: "908434762216",
    appId: "1:908434762216:web:ad5662001c45b478bedc5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;