// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtRfJEYwS7OJyBztOny6OU7DOZHT1k6OQ",
    authDomain: "rina-crwn-clothing-v2.firebaseapp.com",
    projectId: "rina-crwn-clothing-v2",
    storageBucket: "rina-crwn-clothing-v2.appspot.com",
    messagingSenderId: "645789889507",
    appId: "1:645789889507:web:a12c496f62b73513a466d6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Google Authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

// Initialize authentication instance
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

// initialize firestore db
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    // doc takes 3 arguments (database, collection name, unique identifier for document)
    // use doc to check firestore db if user collection exists
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    // method returned from snapshot object that checks to see if the data exists in the firestore db
    // console.log(userSnapshot);
    // console.log(userSnapshot.exists());
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}