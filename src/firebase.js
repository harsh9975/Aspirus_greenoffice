import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyByhfwEaseuPG_aRtmdusMHP1d9_Rwo4LM",
    authDomain: "greenoffice-69b8d.firebaseapp.com",
    databaseURL: "https://greenoffice-69b8d.firebaseio.com",
    projectId: "greenoffice-69b8d",
    storageBucket: "greenoffice-69b8d.appspot.com",
    messagingSenderId: "969947298920",
    appId: "1:969947298920:web:a8a4eb38164f61e2408fdd",
    measurementId: "G-MP3YN24Z3R"
});

export const db = app.firestore();
export const auth = app.auth();

export default app;