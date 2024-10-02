// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMnVeggd3XlgG--tFZlvHcqb3Myy935YM",
  authDomain: "trippo-a1603.firebaseapp.com",
  projectId: "trippo-a1603",
  storageBucket: "trippo-a1603.appspot.com",
  messagingSenderId: "472437045753",
  appId: "1:472437045753:web:8e242ffed2413d21e1e528",
//   measurementId: "G-807M9S310C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export {storage};