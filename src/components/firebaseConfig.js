import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQY6yJ2W1X07r8PvTCboRs4KtOidiNGGg",
    authDomain: "ritwells-web-capstone.firebaseapp.com",
    projectId: "ritwells-web-capstone",
    storageBucket: "ritwells-web-capstone.firebasestorage.app",
    messagingSenderId: "1004210997608",
    appId: "1:1004210997608:web:1f17725ed70873472c6edd"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, createUserWithEmailAndPassword, signInWithEmailAndPassword };