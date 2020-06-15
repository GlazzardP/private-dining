import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfGHKeVZMyKH2cZQD-oI6qKze0TNF5N30",
  authDomain: "private-dining-8dfa8.firebaseapp.com",
  databaseURL: "https://private-dining-8dfa8.firebaseio.com",
  projectId: "private-dining-8dfa8",
  storageBucket: "private-dining-8dfa8.appspot.com",
  messagingSenderId: "596190598217",
  appId: "1:596190598217:web:d92a3c68da82a05ac89b98",
  measurementId: "G-JLSMWVQQSW",
};

firebase.initializeApp(firebaseConfig);

// Storage experi
const storage = firebase.storage();

export { storage, firebase as default };

export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
// export default firebase;
