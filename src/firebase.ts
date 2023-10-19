// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFjKMeCp2BWAXJuXMD-R2um4fO4wliYsg",
  authDomain: "flash-cards-2be50.firebaseapp.com",
  projectId: "flash-cards-2be50",
  storageBucket: "flash-cards-2be50.appspot.com",
  messagingSenderId: "54772610934",
  appId: "1:54772610934:web:ff2bfd3c4570ad412dac57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
