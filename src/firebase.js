import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBPnuNYLBqwY-_CZVDrpIZjYLiY4E0qu4",
  authDomain: "register-crud-97270.firebaseapp.com",
  projectId: "register-crud-97270",
  storageBucket: "register-crud-97270.appspot.com",
  messagingSenderId: "671128935158",
  appId: "1:671128935158:web:e8b51a023b5d9a30baead7",
  measurementId: "G-DFQXS7XWCN"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);