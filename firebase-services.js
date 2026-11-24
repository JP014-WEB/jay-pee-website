// firebase-services.js - Connects services.html to Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDCFTZgCmWysGm_x1cH94xR0hSYgUsSLc",
  authDomain: "jay-pee-24867.firebaseapp.com",
  projectId: "jay-pee-24867",
  storageBucket: "jay-pee-24867.firebasestorage.app",
  messagingSenderId: "999056409829",
  appId: "1:999056409829:web:5f243af858bc236afe400c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadPrices() {
  try {
    const snap = await getDocs(collection(db, "services"));
    snap.forEach((doc) => {
      const s = doc.data();
      const allCards = document.querySelectorAll("[data-service]");
      allCards.forEach((card) => {
        if (card.getAttribute("data-service").toLowerCase() === s.name.toLowerCase()) {
          const priceEl = card.querySelector(".price");
          if (priceEl) priceEl.textContent = "KSh " + s.price;
          const descEl = card.querySelector(".description");
          if (descEl) descEl.textContent = s.description || "";
        }
      });
    });
  } catch (e) {
    console.log("Could not load prices", e);
  }
}

loadPrices();