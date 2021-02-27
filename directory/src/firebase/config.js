import firebase from 'firebase/app'
import "firebase/storage";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgzmxpDh4ODinOUaUjpU1VUiNsmBtpuMo",
  authDomain: "sandbox-d017b.firebaseapp.com",
  databaseURL: "https://sandbox-d017b.firebaseio.com",
  projectId: "sandbox-d017b",
  storageBucket: "sandbox-d017b.appspot.com",
  messagingSenderId: "228495965155",
  appId: "1:228495965155:web:2f36ead8ba6b039b253ed6",
  measurementId: "G-RX43388RND",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();

export { projectStorage, projectFirestore, timestamp, auth };
