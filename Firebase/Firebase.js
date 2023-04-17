// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
 
  apiKey: "AIzaSyBwQPCG23Qf7TC352diluI_4phvoqRW0F4",
  authDomain: "personal-blog-2308.firebaseapp.com",
  projectId: "personal-blog-2308",
  storageBucket: "personal-blog-2308.appspot.com",
  messagingSenderId: "581493573631",
  appId: "1:581493573631:web:ad3c47b1ff40545ca0c9ca",
  measurementId: "G-D3171K3YSG"
};


const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);

export { auth, provider, db };
