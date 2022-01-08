import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const config = {
  apiKey: "AIzaSyBkaH431TCzDDM-RJvCXEMvTMUJQlt_6qs",
  authDomain: "style-db-fd59e.firebaseapp.com",
  projectId: "style-db-fd59e",
  storageBucket: "style-db-fd59e.appspot.com",
  messagingSenderId: "227483851139",
  appId: "1:227483851139:web:fd2ef1ea3ed5a626e67eb6",
  measurementId: "G-NKWNSRJT2Y",
};

firebase.initializeApp(config);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
