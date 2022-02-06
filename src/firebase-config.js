import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCH43hyrEwmEkV45-TP1r061e1qCxtwBho",
  authDomain: "algebra-shop-1a07e.firebaseapp.com",
  projectId: "algebra-shop-1a07e",
  storageBucket: "algebra-shop-1a07e.appspot.com",
  messagingSenderId: "80808134091",
  appId: "1:80808134091:web:dc1156aae7c6adba34224e"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;