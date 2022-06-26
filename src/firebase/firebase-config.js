import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-dltHFkTYQVif1wSxD2gzE3gBFNgoW_I",
  authDomain: "imdb-wednesday-home.firebaseapp.com",
  projectId: "imdb-wednesday-home",
  storageBucket: "imdb-wednesday-home.appspot.com",
  messagingSenderId: "97394039727",
  appId: "1:97394039727:web:ca4693c5de4ad57f4a6d5a",
  measurementId: "G-T5YTMHS5VT",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
