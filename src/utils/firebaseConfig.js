import firebase from 'firebase/app';
import 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyB7SB7l6qEO4fhEa_j2R5BKsQzk0DKVx1Y",
    authDomain: "scribo-64864.firebaseapp.com",
    projectId: "scribo-64864",
    storageBucket: "scribo-64864.appspot.com",
    messagingSenderId: "817147224205",
    appId: "1:817147224205:web:7c2d557a2722fc45d5c2c4",
    measurementId: "G-JS7VF2EN5F"
  };

  
export const firebaseapp = firebase.initializeApp(firebaseConfig)