import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAM7UF9-kSZnjIvmbokZJds4VEupz4TrEc",
    authDomain: "clothing-db-26889.firebaseapp.com",
    databaseURL: "https://clothing-db-26889.firebaseio.com",
    projectId: "clothing-db-26889",
    storageBucket: "clothing-db-26889.appspot.com",
    messagingSenderId: "800163427062",
    appId: "1:800163427062:web:1936f1bada733ac1df72d7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=>{
    auth.signInWithPopup(provider)
        .then(result=>{
            console.log('Google sign in successful');
        })
        .catch(error=>{
            console.log('Google sign in failed');
        })
};

export default firebase;