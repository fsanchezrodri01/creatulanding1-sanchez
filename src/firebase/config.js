// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA9yOFuxRJwJo4ZLFSvqRsugr7lYaVV3gU",
  authDomain: "chula-saludable-db.firebaseapp.com",
  projectId: "chula-saludable-db",
  storageBucket: "chula-saludable-db.appspot.com",
  messagingSenderId: "788436191334",
  appId: "1:788436191334:web:ac63d85513566a50ab45a7",
  measurementId: "G-F8BQ0RET2Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
