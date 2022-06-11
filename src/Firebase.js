// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "./Firebase"
import firebase from 'firebase';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBTxY8BQegIYT2Uttn5yYLsgsOvHWbVwDA",
    authDomain: "clone-ca301.firebaseapp.com",
    projectId: "clone-ca301",
    storageBucket: "clone-ca301.appspot.com",
    messagingSenderId: "660767038754",
    appId: "1:660767038754:web:7502fd866491d37dcbd97b",
    measurementId: "G-76PYCV1Y47"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  export {db,auth};