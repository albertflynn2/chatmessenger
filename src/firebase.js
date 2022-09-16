import firebase from 'firebase';
import 'firebase/auth';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyD81uax4zvCYXxZTDk67rAzP2p30EgWvn4",
  authDomain: "chatmessenger-782a1.firebaseapp.com",
  projectId: "chatmessenger-782a1",
  storageBucket: "chatmessenger-782a1.appspot.com",
  messagingSenderId: "887153926510",
  appId: "1:887153926510:web:f849fbc0bdb18abdd5217f"
}).auth();