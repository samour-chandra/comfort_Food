// --- HTML Element Selection ---
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const recipeModal = document.getElementById("recipe-modal");
const modalOverlay = document.getElementById("modal-overlay");
const modalContent = document.getElementById("modal-content");
const body = document.body;
const mainContent = document.getElementById("main-content");
const recipeForm = document.getElementById("recipe-form");

// --- Ingredient Input Selection ---
const ing1 = document.getElementById("ing_1");
const ing2 = document.getElementById("ing_2");
const ing3 = document.getElementById("ing_3");

// --- Modal Functions ---
function openModal() {
  recipeModal.classList.remove("hidden");
  body.classList.add("overflow-hidden"); // Disable background scroll
  mainContent.classList.add("modal-open"); // Apply blur

  // Smooth transition
  setTimeout(() => {
    modalContent.classList.remove("scale-95", "opacity-0");
    modalContent.classList.add("scale-100", "opacity-100");
  }, 10);
}

function closeModal() {
  // Smooth transition out
  modalContent.classList.remove("scale-100", "opacity-100");
  modalContent.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    recipeModal.classList.add("hidden");
    body.classList.remove("overflow-hidden");
    mainContent.classList.remove("modal-open");
  }, 300);
}

// --- FORM SUBMISSION HANDLER - CORE LOGIC ---
recipeForm.addEventListener("submit", function (e) {
  // Logic: If the required ingredient fields are empty, fill them with a default value.
  const defaultValue = "Required Ingredient";

  if (ing1.value.trim() === "") {
    ing1.value = defaultValue;
  }
  if (ing2.value.trim() === "") {
    ing2.value = defaultValue;
  }
  if (ing3.value.trim() === "") {
    ing3.value = defaultValue;
  }

  // Note: The form will proceed with submission.
});

// --- Event Listeners ---
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
