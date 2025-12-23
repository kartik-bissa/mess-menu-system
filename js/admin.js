// js/admin.js
import { db } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

menuForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    await setDoc(doc(db, "menus", day.value), {
      breakfast: breakfast.value,
      lunch: lunch.value,
      dinner: dinner.value
    });

    saveMsg.innerText = "Menu saved successfully";
    saveMsg.className = "success";
  } catch (err) {
    saveMsg.innerText = err.message;
    saveMsg.className = "error";
  }
});
