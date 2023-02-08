import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCmoANRwRNwsrT4OPC2oqRB79hOmZdrMt0",
  authDomain: "fir-auth-673c2.firebaseapp.com",
  projectId: "fir-auth-673c2",
  storageBucket: "fir-auth-673c2.appspot.com",
  messagingSenderId: "1079564410991",
  appId: "1:1079564410991:web:34b809b712e7b6ce9fad9a",
  measurementId: "G-9VDZKCEQJ1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export  {auth}