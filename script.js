// Event Handling 🎈

// Button click: Change text
document.getElementById("change-text-btn").addEventListener("click", () => {
    alert("Button clicked!");
});

// Hover effect: Change text color
document.getElementById("hover-text").addEventListener("mouseover", () => {
    document.getElementById("hover-text").style.color = "blue";
});
document.getElementById("hover-text").addEventListener("mouseout", () => {
    document.getElementById("hover-text").style.color = "black";
});

// Keypress detection
document.getElementById("keypress-input").addEventListener("keypress", (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// Bonus: Double-click action
document.getElementById("change-text-btn").addEventListener("dblclick", () => {
    alert("Double-click detected!");
});

// Interactive Elements 🎮

// Change button color
document.getElementById("color-change-btn").addEventListener("click", () => {
    document.getElementById("color-change-btn").style.backgroundColor = "lightgreen";
});

// Image gallery: Click to enlarge
document.querySelectorAll("#image-gallery img").forEach((img) => {
    img.addEventListener("click", () => {
        img.style.width = "300px";
        img.style.height = "300px";
    });
});

// Form Validation 📋✅

// Email validation
document.getElementById("email").addEventListener("input", () => {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("email-error");
    if (!email.includes("@")) {
        emailError.textContent = "Invalid email format!";
    } else {
        emailError.textContent = "";
    }
});

// Password validation
document.getElementById("password").addEventListener("input", () => {
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("password-error");
    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters!";
    } else {
        passwordError.textContent = "";
    }
});

// Form submission
document.getElementById("validation-form").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
});
