(() => {
    // Typing Animation for the h1 element
    const typedTextElement = document.getElementById("typed-text");
    const text = "Hi, I'm Marvin Bley.<br>Welcome to my portfolio."; // Text with <br> for line break

    typedTextElement!.innerHTML = ""; // Clear the h1 content for typing effect
    let index = 0;
    const typingSpeed = 100; // Typing speed in milliseconds

    // Function to handle typing animation
    function type() {
        if (index < text.length) {
            if (text.substring(index, index + 4) === "<br>") {
                // If the current part of the text is a <br> tag, append it and jump ahead by 4 characters
                typedTextElement!.innerHTML += "<br>";
                index += 4; // Move past the <br> tag
            } else {
                // Otherwise, just type the next character
                typedTextElement!.innerHTML += text.charAt(index);
                index++;
            }
            // Adjust typing speed using the 'typingSpeed' variable
            setTimeout(type, typingSpeed);
        }
    }

    // Start typing animation when the page is fully loaded
    window.onload = () => {
        type(); // Start typing animation
    };
})();

