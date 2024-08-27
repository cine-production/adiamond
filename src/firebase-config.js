import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyAZNIMmv_PYvgQHxDE002pGZ08jUOnZEmc",
    authDomain: "adiamond-casino.firebaseapp.com",
    projectId: "adiamond-casino",
    storageBucket: "adiamond-casino.appspot.com",
    messagingSenderId: "366219204677",
    appId: "1:366219204677:web:052c2c3f01ff4718a36b2c",
    measurementId: "G-XT0XSPSYZ1"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
