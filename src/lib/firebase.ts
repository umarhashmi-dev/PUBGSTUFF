import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  "projectId": "textify-ai-ncwfl",
  "appId": "1:794907504712:web:8dfffa676242f0281aa87d",
  "storageBucket": "textify-ai-ncwfl.firebasestorage.app",
  "apiKey": "AIzaSyDzQPDX6PhXM3nDoKuHHC0uw4TyP_0OJYA",
  "authDomain": "textify-ai-ncwfl.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "794907504712"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
