// script.js

function randomizeContent() {
    const content = document.getElementById('content');
    const text = document.getElementById('text');
    const image = document.getElementById('image');

    // Randomize position
    content.style.top = `${Math.random() * 80}vh`;
    content.style.left = `${Math.random() * 80}vw`;

    // Randomize text color
    text.style.color = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;

    // Randomize image size
    image.style.width = `${Math.random() * 200 + 100}px`;

    // Randomize text content
    const messages = [
        "Hello, welcome to my evolving page!",
        "The page changes every minute!",
        "Enjoy the randomness!",
        "The design evolves dynamically!"
    ];
    text.textContent = messages[Math.floor(Math.random() * messages.length)];
}

// Random number generator for colors
function randomValue() {
    return Math.floor(Math.random() * 256);
}

// Initial randomization
randomizeContent();

// Update every minute
setInterval(randomizeContent, 60000);
