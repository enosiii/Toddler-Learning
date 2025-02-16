// hideH1.js

document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-btn');
    const gameTitle = document.getElementById('game-title');

    menuButtons.forEach(button => {
        button.addEventListener('pointerdown', () => {
            if (gameTitle) {
                gameTitle.style.display = 'none';
            }
        });
    });
});