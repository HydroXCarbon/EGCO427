import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routers";

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

let auth;
let app;

const firebaseConfig = {
  apiKey: "AIzaSyAOEUte7s5x8fWW46PpiJZpJoL8tNBhgkA",
  authDomain: "egco427-a991d.firebaseapp.com",
  projectId: "egco427-a991d",
  storageBucket: "egco427-a991d.firebasestorage.app",
  messagingSenderId: "284064165938",
  appId: "1:284064165938:web:914fbea86b9c8ef03a0c2b",
  measurementId: "G-ESPXLD8663"
};

// Initialize Firebase
initializeApp(firebaseConfig);

auth = getAuth();

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App).use(router).mount("#app");
  }
});