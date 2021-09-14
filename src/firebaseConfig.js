import firebase  from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDiGylHG5XAWxwrDwpxQ-m0zEN8t7MCs-c",
  authDomain: "onlineboard-24486.firebaseapp.com",
  projectId: "onlineboard-24486",
  storageBucket: "onlineboard-24486.appspot.com",
  messagingSenderId: "805210302593",
  appId: "1:805210302593:web:74d0b345582f7a50d1c580",
  measurementId: "G-YZQ2D9HELP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({
  timestampsInSnapshots: true
})


export default firebase;