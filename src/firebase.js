import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvjz6R1NmS6hRniBNJpKrds2F2vASlByE",
    authDomain: "instafullclone.firebaseapp.com",
    projectId: "instafullclone",
    storageBucket: "instafullclone.appspot.com",
    messagingSenderId: "226783536769",
    appId: "1:226783536769:web:e9ecc276141750a19f8f80",
    measurementId: "G-E4Y3B7PYTH"
  };
  
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, db, storage };