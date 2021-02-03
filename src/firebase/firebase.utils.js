import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
    {
        apiKey: "AIzaSyBnfY1l2z0QYos-0IuDiHh8E1-BUWWZl1Q",
        authDomain: "crwn-db-65cc2.firebaseapp.com",
        projectId: "crwn-db-65cc2",
        storageBucket: "crwn-db-65cc2.appspot.com",
        messagingSenderId: "299128020063",
        appId: "1:299128020063:web:32953bdf13648f4c5c0fea",
        measurementId: "G-GP4W208DQQ"
    };

    firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
