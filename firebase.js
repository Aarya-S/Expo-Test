// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8qx54hfwb6KUqje2aifRyVbonZ23nwrs",
  authDomain: "phoneapp-s.firebaseapp.com",
  projectId: "phoneapp-s",
  storageBucket: "phoneapp-s.appspot.com",
  messagingSenderId: "581989508116",
  appId: "1:581989508116:web:9d02bca3bd7a5144dd3301",
  measurementId: "G-YCRWJGCERW"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };