import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyB7WXX_NCG6RuJ2v_rzqWlCdvdZ37D5Kmw",
    authDomain: "rafsan-plan.firebaseapp.com",
    projectId: "rafsan-plan",
    storageBucket: "rafsan-plan.appspot.com",
    messagingSenderId: "422487186425",
    appId: "1:422487186425:web:f9c0399c6ab1564efbfb28"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
  