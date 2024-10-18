// Typing Animation for the h1 element
var typedTextElement = document.getElementById("typed-text");
var text = "Hi, I'm Marvin Bley.<br>Welcome to my portfolio."; // Define the text with <br> for line break
typedTextElement.innerHTML = ""; // Clear the h1 content for typing effect
var index = 0;

// Function to handle typing animation
function type() {
    if (index < text.length) {
        // Check if the current character is a <br> tag
        if (text.charAt(index) === '<' && text.charAt(index + 1) === 'b' && text.charAt(index + 2) === 'r' && text.charAt(index + 3) === '>') {
            typedTextElement.innerHTML += "<br>"; // Add line break
            index += 4; // Skip the <br> tag
        } else {
            typedTextElement.innerHTML += text.charAt(index); // Add one character at a time
            index++;
        }
        setTimeout(type, 30); // Adjust typing speed here (55 ms)
    }
}

// Run typing animation after window loads
window.onload = function () {
    type(); // Start typing animation when the page is fully loaded
};
