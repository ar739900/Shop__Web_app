import { initializeApp } from 'firebase/app';
//Firebase Firestore imports
import { getFirestore, collection, getDocs,addDoc,doc,getDoc } from 'firebase/firestore/lite';
//Firebase storage imports
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5k3M5lbLILCJpuKknPf-6mwD6OO-DaWI",
    authDomain: "vuestore-997a8.firebaseapp.com",
    projectId: "vuestore-997a8",
    storageBucket: "vuestore-997a8.appspot.com",
    messagingSenderId: "844934802287",
    appId: "1:844934802287:web:4e4118bfa7b8412628969a",
    measurementId: "G-BKWSMRHRRL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db,collection,getDocs,getStorage, ref, doc,getDoc,uploadBytesResumable, getDownloadURL,addDoc}