// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC47KU_J3Q0Cc9yscZcpr8Iw6yzTgo5xdw",
  authDomain: "react-native-apps-cf678.firebaseapp.com",
  projectId: "react-native-apps-cf678",
  storageBucket: "react-native-apps-cf678.appspot.com",
  messagingSenderId: "762868547655",
  appId: "1:762868547655:web:72952380d903f826527162",
  measurementId: "G-52ZZ7NSN4K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
