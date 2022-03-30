// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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

// Initialize authtication instance
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)