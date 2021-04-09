import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAkysvBUcPng3kwQ9k3zjP4A1Vb8TkWSz4",
  authDomain: "clone-d2fb4.firebaseapp.com",
  projectId: "clone-d2fb4",
  storageBucket: "clone-d2fb4.appspot.com",
  messagingSenderId: "1042289999563",
  appId: "1:1042289999563:web:efb2a487a5071c1a55654e",
  measurementId: "G-8TT54T78VL"
});
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };