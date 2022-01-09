import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAXl0rge8q4Ai2_-EcX0uSYFkgMQrgR7N8",
    authDomain: "disney-clone-4c6cf.firebaseapp.com",
    projectId: "disney-clone-4c6cf",
    storageBucket: "disney-clone-4c6cf.appspot.com",
    messagingSenderId: "601918831127",
    appId: "1:601918831127:web:52e308b167d94154d13a52"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export default app;
export{ db, storage };