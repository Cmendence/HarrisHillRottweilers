
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "@firebase/firestore";
// import { getStorage } from "firebase/storage";


// const firebaseConfig = {
//   apiKey: "AIzaSyDzv8rlRbOWttknE2cqMgzdRl-9dGBLDyY",
//   authDomain: "harrishill.firebaseapp.com",
//   projectId: "harrishill",
//   storageBucket: "harrishill.appspot.com",
//   messagingSenderId: "470640631535",
//   appId: "1:470640631535:web:94cf1f70456a7bffa2851a",
//   measurementId: "G-XGEKK6DKWP"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const storage = getStorage(app);

// export {db, storage}

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"; // Add this line to import getAuth

const firebaseConfig = {
  apiKey: "AIzaSyDzv8rlRbOWttknE2cqMgzdRl-9dGBLDyY",
  authDomain: "harrishill.firebaseapp.com",
  projectId: "harrishill",
  storageBucket: "harrishill.appspot.com",
  messagingSenderId: "470640631535",
  appId: "1:470640631535:web:94cf1f70456a7bffa2851a",
  measurementId: "G-XGEKK6DKWP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app); // Initialize Firebase Auth

export { db, storage, auth }; // Export auth
