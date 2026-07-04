// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFNyZ0A5FVCMhGKnRiIPZbPq90hVj8fQk",
  authDomain: "netfliix-da9a8.firebaseapp.com",
  projectId: "netfliix-da9a8",
  storageBucket: "netfliix-da9a8.firebasestorage.app",
  messagingSenderId: "503914127190",
  appId: "1:503914127190:web:11e21612f22512d90b80f7",
  measurementId: "G-GWQJMNQNRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();