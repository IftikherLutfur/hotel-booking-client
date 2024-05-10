// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5UaKM2m-TLv9Y9qyDRLy2d8NJ0w-zWw4",
  authDomain: "hotel-booking-service-250b8.firebaseapp.com",
  projectId: "hotel-booking-service-250b8",
  storageBucket: "hotel-booking-service-250b8.appspot.com",
  messagingSenderId: "601158394235",
  appId: "1:601158394235:web:45e10a6b4cc1c5e9a91dde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;