// /////////////////////////////this js for login page /////////////////////////////////////////////////

const formModal = document.getElementById("form-modal");
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const loginButton = document.querySelector(".login-button");

/**
 * Shows or hides the authentication modal and applies/removes the blur.
 * @param {boolean} show - true to show, false to hide.
 */
function toggleModal(show) {
  if (show) {
    formModal.classList.add("show");
  } else {
    formModal.classList.remove("show");
  }
}

/**
 * Switches between the 'login' and 'signup' forms.
 * @param {string} formName - 'login' or 'signup'.
 */
function switchForm(formName) {
  if (formName === "login") {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  } else {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
  }
  return false; // Prevents the default link behavior
}

// Event listener to open the modal on your 'Account' button click
if (loginButton) {
  loginButton.addEventListener("click", () => {
    toggleModal(true);
    // Default to showing the signup form
    switchForm("signup");
  });
} else {
  console.error("Login button with class '.login-button' not found.");
}

// Event listener to close the modal when clicking outside the form card
formModal.addEventListener("click", (e) => {
  if (e.target === formModal) {
    toggleModal(false);
  }
});

// /////////////////////////////this js for side bar/////////////////////////////////////////////////

// Function to open the sidebar
const twOpenNav = function () {
  const sidebar = document.getElementById("twBookmarkSidebar");
  if (sidebar) {
    sidebar.classList.add("tw-active");
    // Prevent body scrolling when sidebar is open
    document.body.style.overflow = "hidden";
  }
};

// Function to close the sidebar
const twCloseNav = function () {
  const sidebar = document.getElementById("twBookmarkSidebar");
  if (sidebar) {
    sidebar.classList.remove("tw-active");
    document.body.style.overflow = "";
  }
};

// Function to remove a list item
const twRemoveListItem = function (itemId) {
  const itemToRemove = document.getElementById(itemId);

  if (itemToRemove) {
    itemToRemove.style.opacity = "0";
    itemToRemove.style.transform = "translateX(100%)";

    // Remove element after transition
    setTimeout(() => {
      itemToRemove.remove();
    }, 300);
  }
};

// Event listeners setup (Handles all clicks inside the module scope)
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("myBookmarkToggle");
  const closeButton = document.querySelector("#twBookmarkSidebar .tw-closebtn");
  const sidebar = document.getElementById("twBookmarkSidebar");

  if (!toggleButton || !sidebar) {
    // Log an error if the elements are missing
    console.error("Bookmark sidebar elements (button/sidebar) not found.");
    return;
  }

  // 1. Toggle Button Listener (Open/Close on Bookmark button click)
  toggleButton.addEventListener("click", function () {
    if (sidebar.classList.contains("tw-active")) {
      twCloseNav();
    } else {
      twOpenNav();
    }
  });

  // 2. Close Button Listener (for the X icon)
  closeButton.addEventListener("click", twCloseNav);

  // 3. Delegation for LI item clicks (to close sidebar) and Delete button clicks
  sidebar.addEventListener("click", function (e) {
    const item = e.target.closest(".tw-food-item");
    const deleteIcon = e.target.closest(".tw-delete-icon");

    // Handle Delete Icon click
    if (deleteIcon) {
      const itemId = deleteIcon.getAttribute("data-item-id");
      if (itemId) {
        twRemoveListItem(itemId);
      }
      // Stop event from propagating up to the parent LI/sidebar
      e.stopPropagation();
      return;
    }

    // Handle general LI Item click (closes sidebar)
    if (item) {
      twCloseNav();
    }
  });
});
