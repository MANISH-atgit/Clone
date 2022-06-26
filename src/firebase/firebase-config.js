import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

export const db = getFirestore();

export const addCollectionAndDocuments = async (collctionKey, objectsToAdd) => {
  const collectionRef = collection(db, collctionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "manosh", userAuth.uid);

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
