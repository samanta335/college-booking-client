// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCinj4QBIzPTMI0VKZhDwVjzcwRiVX0eiw",
  authDomain: "college-booking-94004.firebaseapp.com",
  projectId: "college-booking-94004",
  storageBucket: "college-booking-94004.firebasestorage.app",
  messagingSenderId: "951514011133",
  appId: "1:951514011133:web:e22bfa071d37aeca943594",
  measurementId: "G-8MS7ZRWHNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app)