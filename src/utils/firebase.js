import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXv9ztaFefhgONRNwW2WlNxHQxaQGPOkw",
  authDomain: "thenumber-342c0.firebaseapp.com",
  databaseURL: "https://thenumber-342c0.firebaseio.com",
  projectId: "thenumber-342c0",
  storageBucket: "thenumber-342c0.appspot.com",
  messagingSenderId: "286057030146",
  appId: "1:286057030146:web:f45a67f9a4c0b187a37d1b",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
