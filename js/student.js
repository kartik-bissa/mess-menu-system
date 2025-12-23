import { db } from "./firebase.js";
import { doc, getDoc, addDoc, collection, serverTimestamp }
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
const today = days[new Date().getDay()];

const menu = document.getElementById("menu");

const snap = await getDoc(doc(db, "menus", today));

if (!snap.exists()) {
  menu.innerHTML = "<p class='empty'>Menu not uploaded yet</p>";
} else {
  const m = snap.data();
  ["breakfast","lunch","dinner"].forEach(meal => {
    menu.innerHTML += `
      <div class="food-card">
        <h3>${meal.toUpperCase()}</h3>
        <p>${m[meal]}</p>
        <div class="stars">
          ${[1,2,3,4,5].map(r =>
            `<span onclick="rate('${meal}',${r})">★</span>`).join("")}
        </div>
      </div>`;
  });
}

window.rate = async (meal, rating) => {
  await addDoc(collection(db,"ratings"),{
    mealType: meal,
    rating,
    date: serverTimestamp()
  });
  alert("Thanks for rating!");
};
