
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv-BMn42JW9GJ51wSx6LADNrrcVazc99k",
  authDomain: "vaultsync-b1590.firebaseapp.com",
  projectId: "vaultsync-b1590",
  storageBucket: "vaultsync-b1590.firebasestorage.app",
  messagingSenderId: "582707079075",
  appId: "1:582707079075:web:cbc8545e21d9931a219c16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}

