import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAKMGxRbAo61mwR5RBd1PxF0OfG_dbjKak",
    authDomain: "firegram-practice-3705d.firebaseapp.com",
    projectId: "firegram-practice-3705d",
    storageBucket: "firegram-practice-3705d.appspot.com",
    messagingSenderId: "515054785497",
    appId: "1:515054785497:web:7278b1b5ca695bf392bfc8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp}