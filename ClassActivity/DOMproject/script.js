// 1. Get DOM elements
const passwordInput = document.querySelector("#password");
const toggleBtn = document.querySelector("#toggleBtn");

// 2. Track state manually 
let isVisible = false;

// 3. Handle button click
toggleBtn.addEventListener("click", function () {

    if (isVisible) {
        // Hide password
        passwordInput.type = "password";
        toggleBtn.innerText = "Show";
        isVisible = false;
    } else {
        // Show password
        passwordInput.type = "text";
        toggleBtn.innerText = "Hide";
        isVisible = true;
    }
});
