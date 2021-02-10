import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhQeOZUwmPfxmpP12XJLFn7HP9JmSMKXM",
    authDomain: "crwn-db-5bc6e.firebaseapp.com",
    databaseURL: "https://crwn-db-5bc6e.firebaseio.com",
    projectId: "crwn-db-5bc6e",
    storageBucket: "crwn-db-5bc6e.appspot.com",
    messagingSenderId: "139514886905",
    appId: "1:139514886905:web:9726ba290610869bf20028",
    measurementId: "G-LBJEEW4Q4L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;