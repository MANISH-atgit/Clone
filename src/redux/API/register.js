import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase/firebase-config";

const register = async (payload) => {
  let user;
  try {
    const { registerEmail, registerPassword } = payload;

    user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
  } catch (error) {
    console.log(error.message);
  }
  return user;
};

export { register };
