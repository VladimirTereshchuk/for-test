import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDb5dEYJIEG5Qrz5KjX6OeALR15jR8JiyQ",
    authDomain: "fast-feedback-clone-241aa.firebaseapp.com",
    projectId: "fast-feedback-clone-241aa",
    storageBucket: "fast-feedback-clone-241aa.appspot.com",
    messagingSenderId: "929345769723",
    appId: "1:929345769723:web:10808494f38785f6ade05e",
  });
}

export default firebase;
