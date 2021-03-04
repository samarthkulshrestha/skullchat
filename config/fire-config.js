import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9wpkWEUSD-B5Pz4Nrj1hwgz9cWGSnHuE",
  authDomain: "samarth-kulshrestha.firebaseapp.com",
  databaseURL: "https://samarth-kulshrestha-default-rtdb.firebaseio.com",
  projectId: "samarth-kulshrestha",
  storageBucket: "samarth-kulshrestha.appspot.com",
  messagingSenderId: "98711357136",
  appId: "1:98711357136:web:925dab5a2d0deafb4700d5",
  measurementId: "G-L193XJRLM5",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;
