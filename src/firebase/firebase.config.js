// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEwDrdukOOR9oDMVJ2GrF8_xekJrBQLu0",
  authDomain: "chef-foods-client.firebaseapp.com",
  projectId: "chef-foods-client",
  storageBucket: "chef-foods-client.appspot.com",
  messagingSenderId: "742520671540",
  appId: "1:742520671540:web:7b063a68f5ee0eb7926961"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;