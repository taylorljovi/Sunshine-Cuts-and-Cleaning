import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
     // Your web app's Firebase configuration
    apiKey: "AIzaSyBEo_aD_shm71VlvNLWRUQqnataviyAy0U",
    authDomain: "sunshine-cuts-and-cleani-ef924.firebaseapp.com",
    databaseURL: "https://sunshine-cuts-and-cleani-ef924.firebaseio.com",
    projectId: "sunshine-cuts-and-cleani-ef924",
    storageBucket: "sunshine-cuts-and-cleani-ef924.appspot.com",
    messagingSenderId: "524256108398",
    appId: "1:524256108398:web:2773fb5489a904d0192b7f"
})

var db = firebaseApp.firestore();


export{ db };