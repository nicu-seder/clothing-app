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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log('Google sign in failed');
        })
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth)
        return;

    const userDocRef = firestore.doc(`users/${userAuth.uid}`);
    const userDocSnapshot = await userDocRef.get();
    if (!userDocSnapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userDocRef.set({displayName, email, createdAt, ...additionalData});
        }catch (e) {
            console.log("Error creating user", e.message);
        }
    }
    return userDocRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(objectToAdd=>{
        batch.set(collectionRef.doc(), {...objectToAdd});
    });

    try{
        return await batch.commit()
    }catch (e) {
        console.log('Batch transaction failed')
    }
};

export const convertCollectionsSnapshotToMap = (collections)=>{
    const transformedCollection = collections.docs.map(docSnapshot=>{
        const {title, items} = docSnapshot.data();
        return {
            routeName:encodeURI(title.toLowerCase()),
            id:docSnapshot.id,
            title,
            items
        }
    });
    return transformedCollection.reduce((accumulator, collection)=>{
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
};

export const getCurrentUser = ()=>{
    return new Promise((resolve, reject)=>{
        const unsubscribe = auth.onAuthStateChanged(userAuth=>{
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
};

export default firebase;