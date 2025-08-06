import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  "projectId": "textify-ai-ncwfl",
  "appId": "1:794907504712:web:8dfffa676242f0281aa87d",
  "storageBucket": "textify-ai-ncwfl.appspot.com",
  "apiKey": "AIzaSyDzQPDX6PhXM3nDoKuHHC0uw4TyP_0OJYA",
  "authDomain": "textify-ai-ncwfl.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "794907504712"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
