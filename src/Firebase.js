import firebase from "firebase";
const firebaseApp =  firebase.initializeApp ({
    apiKey: "AIzaSyCZ9uQMLyKffAwwbJm3WXvLnSCJrj2VG2w",
    authDomain: "facebook-messenger-clone-a03fe.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-a03fe.firebaseio.com",
    projectId: "facebook-messenger-clone-a03fe",
    storageBucket: "facebook-messenger-clone-a03fe.appspot.com",
    messagingSenderId: "1097691876011",
    appId: "1:1097691876011:web:a3f17c86b1b6415b3a45ee",
    measurementId: "G-7WLPFCZWH3"
  });

  const db = firebaseApp.firestore();
  export default db;