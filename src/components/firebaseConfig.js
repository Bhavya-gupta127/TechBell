import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBXN7myvujsz_y4QmfQg_bT-NogWK5IzKI",
  authDomain: "techbell.firebaseapp.com",
  databaseURL:
    "https://techbell-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "techbell",
  storageBucket: "techbell.appspot.com",
  messagingSenderId: "958580390350",
  appId: "1:958580390350:web:b568f11d349cd2aee8139f",
  measurementId: "G-X2GF3J7RCV",
};

// export default firebaseConfig;
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
export default database;
