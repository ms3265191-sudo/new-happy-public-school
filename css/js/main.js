// main.js

// Simple welcome message in console
console.log("Welcome to NEW HAPPY PUBLIC SCHOOL website!");

// Example: Show alert when page loads
window.addEventListener("load", function() {
    console.log("Page loaded successfully!");
});

// Example: Add a click effect on navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function() {
        alert(`You clicked on: ${this.textContent}`);
    });
});
