import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB6EMXFcLxIwbrtgtnoVO0-5v-XYFTTUFM",
  authDomain: "e-library-8cabd.firebaseapp.com",
  projectId: "e-library-8cabd",
  storageBucket: "e-library-8cabd.appspot.com",
  messagingSenderId: "183384655456",
  appId: "1:183384655456:web:4157db096a06cad3a1e505"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
