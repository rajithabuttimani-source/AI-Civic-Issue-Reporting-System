import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "civic-care-795a5.firebaseapp.com",
  projectId: "civic-care-795a5",
  storageBucket: "civic-care-795a5.firebasestorage.app",
  messagingSenderId: "746102469610",
  appId: "1:746102469610:web:7e48dd678af2423a427893"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };