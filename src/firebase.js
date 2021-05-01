import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import React from 'react';

var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

export const auth = firebase.auth();
export const db = firebase.database();


