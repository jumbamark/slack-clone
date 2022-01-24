// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9L8EQlKJBpuNbn9rXVbVOz0hOPEx5IqU",
  authDomain: "slack-clone-b512e.firebaseapp.com",
  projectId: "slack-clone-b512e",
  storageBucket: "slack-clone-b512e.appspot.com",
  messagingSenderId: "216744178275",
  appId: "1:216744178275:web:1911dbc7d5d400e3ffbe56",
};

// Initialize Firebase - connects the frontend to firebase (Google's backend servers)
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {db, auth, provider};
