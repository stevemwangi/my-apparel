import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAnlcZdFaAfEDg3t8or8M4I3ZCU1Nn9K8U",
    authDomain: "my-apparel-f4a15.firebaseapp.com",
    databaseURL: "https://my-apparel-f4a15.firebaseio.com",
    projectId: "my-apparel-f4a15",
    storageBucket: "my-apparel-f4a15.appspot.com",
    messagingSenderId: "798701909215",
    appId: "1:798701909215:web:d639834742b96b8bcba56a",
    measurementId: "G-R6XX3XSFEY"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;