// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhLH36Hz6TI6gmJJTHP1Dztrbdxi9VGGs",
  authDomain: "shopyennhi-6baae.firebaseapp.com",
  projectId: "shopyennhi-6baae",
  storageBucket: "shopyennhi-6baae.firebasestorage.app",
  messagingSenderId: "67718854816",
  appId: "1:67718854816:web:41ad03300cca3dbe4031c5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);
export { app };
