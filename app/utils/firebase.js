import firebase from "firebase/app";

const firebaseConfig = {

    apiKey: "AIzaSyB4ToRmM9IvYeo4MQsBL4dpPxNlk-SNGIc",
    authDomain: "tenedores-1e377.firebaseapp.com",
    projectId: "tenedores-1e377",
    storageBucket: "tenedores-1e377.appspot.com",
    messagingSenderId: "9926801323",
    appId: "1:9926801323:web:99a760dc316738d19c04ee"
  };
  // Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);