// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {firebase} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';
import 'firebase/storage';
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpwimnL0Lm4vHwESZRXS09I6fAInW-m1s",
  authDomain: "gallery-aee5a.firebaseapp.com",
  projectId: "gallery-aee5a",
  storageBucket: "gallery-aee5a.appspot.com",
  messagingSenderId: "890410638592",
  appId: "1:890410638592:web:2e0de931f8ee8ff38567e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const firestore = getFirestore(app)

export { auth, storage, doc, getDoc, collection , firestore};
