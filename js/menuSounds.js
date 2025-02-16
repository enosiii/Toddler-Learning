// menuSounds.js

// Variable to keep track of the currently playing menu audio
let currentMenuAudio = null;

// Function to play the menu sound
function playMenuSound(soundSrc) {
    // Stop the current audio if it's playing
    if (currentMenuAudio) {
        currentMenuAudio.pause();
        currentMenuAudio.currentTime = 0;
    }

    // Create a new audio object and play it
    currentMenuAudio = new Audio(soundSrc);
    currentMenuAudio.play();
}

// Initialize event listeners for menu buttons after the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-btn');
    menuButtons.forEach(button => {
        button.addEventListener('pointerdown', () => {
            const soundSrc = button.getAttribute('data-sound');
            if (soundSrc) {
                playMenuSound(soundSrc);
            }
        });
    });
});