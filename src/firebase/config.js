// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkr8hWlTRXBjawVvW-Ww7Gd_CuQ0xECEQ",
  authDomain: "meuapp-1d4cf.firebaseapp.com",
  projectId: "meuapp-1d4cf",
  storageBucket: "meuapp-1d4cf.firebasestorage.app",
  messagingSenderId: "768449500579",
  appId: "1:768449500579:web:988602912081038be33616",
  measurementId: "G-GDKQD828WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth_module = getAuth(app)

export { auth_module, app }