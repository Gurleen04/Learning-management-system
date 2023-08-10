// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO5yNEw-B6ZOHWxwFnONUBdNRFUpZF0t4",
  authDomain: "iitk-ec420.firebaseapp.com",
  projectId: "iitk-ec420",
  storageBucket: "iitk-ec420.appspot.com",
  messagingSenderId: "1021900050718",
  appId: "1:1021900050718:web:1beade7568051be08d790f",
  measurementId: "G-V5WRPJFV7E"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
